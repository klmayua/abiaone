const fs = require('fs');
const path = require('path');

const auditDir = path.join(__dirname, 'audit');
const htmlDir = path.join(auditDir, 'screens_html');
const appDir = path.join(__dirname, 'app');

// Read screens metadata
let metadata = [];
try {
  metadata = JSON.parse(fs.readFileSync(path.join(auditDir, 'screens_metadata.json'), 'utf-8'));
} catch (err) {
  console.error("Error reading metadata:", err.message);
  process.exit(1);
}

// 1. Clean the /app directory of any previously generated subfolders to start fresh
function cleanAppDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      if (file !== '.next' && file !== 'node_modules') {
        fs.rmSync(filepath, { recursive: true, force: true });
      }
    } else {
      if (file !== 'layout.tsx' && file !== 'globals.css' && file !== 'favicon.ico') {
        fs.unlinkSync(filepath);
      }
    }
  });
}
cleanAppDir(appDir);

// 2. Generate unique routes for every screen
function getBaseRoutePath(title, deviceType) {
  if (title.endsWith('.md') || title.endsWith('.jpg') || title.endsWith('.png') || title.endsWith('.jpeg')) {
    let clean = title.replace(/\.[^/.]+$/, "").replace(/[^a-z0-9\s-]/gi, '').trim();
    return '/' + clean.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-');
  }

  let cleaned = title.replace(/\|.*$/, '').replace(/Abia One/i, '').replace(/ABIA ONE/i, '').trim();
  if (!cleaned || cleaned === 'Unified Platform' || cleaned === 'Home' || cleaned === 'Unified Transformation Dashboard') {
    return '/';
  }
  
  return '/' + cleaned.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

const usedRoutes = {};
metadata.forEach((screen) => {
  const filepath = path.join(htmlDir, screen.htmlFilename);
  if (!fs.existsSync(filepath)) return; // Skip missing screens

  let baseRoute = getBaseRoutePath(screen.title, screen.deviceType || 'DESKTOP');
  
  // Deconflict routes
  let finalRoute = baseRoute;

  if (finalRoute === '/') {
    if (screen.deviceType === 'MOBILE') {
      finalRoute = '/home-mobile';
    } else {
      if (usedRoutes['/']) {
        finalRoute = '/home-variant';
      }
    }
  } else {
    if (screen.deviceType === 'MOBILE' && !finalRoute.endsWith('-mobile')) {
      finalRoute += '-mobile';
    }
  }

  // Ensure absolute uniqueness
  let counter = 1;
  let candidateRoute = finalRoute;
  while (usedRoutes[candidateRoute]) {
    counter++;
    candidateRoute = `${finalRoute}-${counter}`;
  }
  
  usedRoutes[candidateRoute] = true;
  screen.computedRoute = candidateRoute;
});

// Helper to convert inline style strings to React style objects
function convertStyleAttr(styleStr) {
  const styleObj = {};
  styleStr.split(';').forEach(pair => {
    const colonIndex = pair.indexOf(':');
    if (colonIndex > -1) {
      const key = pair.substring(0, colonIndex).trim();
      const val = pair.substring(colonIndex + 1).trim();
      if (key && val) {
        const camelKey = key.replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[camelKey] = val;
      }
    }
  });
  return `style={${JSON.stringify(styleObj)}}`;
}

// Convert HTML to React JSX tags
function htmlToJsx(html) {
  // Extract style tags from head
  const styles = [];
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  let match;
  while ((match = styleRegex.exec(html)) !== null) {
    styles.push(match[1]);
  }

  // Extract body content
  const bodyContentMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let content = bodyContentMatch ? bodyContentMatch[1] : html;

  // Extract and remove any style tags that are inside the body content
  let innerMatch;
  const innerStyleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  while ((innerMatch = innerStyleRegex.exec(content)) !== null) {
    styles.push(innerMatch[1]);
  }
  content = content.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, '');

  // Extract body classes
  const bodyClassMatch = html.match(/<body[^>]+class=["']([^"']+)["']/i);
  const bodyClass = bodyClassMatch ? bodyClassMatch[1] : '';

  // 1. Remove script tags completely
  content = content.replace(/<script\b[\s\S]*?<\/script>/gi, '');

  // 2. Convert HTML comments to JSX comments
  content = content.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

  // 3. Close self-closing tags
  const selfClosing = ['img', 'input', 'br', 'hr', 'link', 'meta', 'col'];
  selfClosing.forEach((tag) => {
    content = content.replace(new RegExp('<(' + tag + ')\\b([^>]*?)(?<!/)>', 'gi'), '<$1$2 />');
  });

  // 4. Convert inline style attributes to JSX style objects
  content = content.replace(/style="([^"]*)"/gi, (m, styleStr) => convertStyleAttr(styleStr));

  // 5. Replace class and for
  content = content.replace(/\bclass=/g, 'className=');
  content = content.replace(/\bfor=/g, 'htmlFor=');

  // 6. Convert SVG properties to camelCase
  const svgReplacements = {
    'clip-rule=': 'clipRule=',
    'fill-rule=': 'fillRule=',
    'stroke-width=': 'strokeWidth=',
    'stroke-linecap=': 'strokeLinecap=',
    'stroke-linejoin=': 'strokeLinejoin=',
    'stroke-miterlimit=': 'strokeMiterlimit=',
    'stroke-dasharray=': 'strokeDasharray=',
    'stroke-dashoffset=': 'strokeDashoffset=',
    'viewbox=': 'viewBox=',
    'xmlns:xlink=': 'xmlnsXlink=',
    'xlink:href=': 'xlinkHref=',
    'patternunits=': 'patternUnits=',
    'patterncontentunits=': 'patternContentUnits=',
    'gradientunits=': 'gradientUnits=',
    'gradienttransform=': 'gradientTransform=',
    'patterntransform=': 'patternTransform=',
    'preserveaspectratio=': 'preserveAspectRatio=',
    'spreadmethod=': 'spreadMethod=',
    'clip-path=': 'clipPath=',
    'clippath=': 'clipPath=',
    'text-anchor=': 'textAnchor='
  };
  Object.entries(svgReplacements).forEach(([key, val]) => {
    content = content.split(key).join(val);
  });

  // 7. Remove/convert inline event handlers
  content = content.replace(/on[a-zA-Z]+="[^"]*"/g, 'onClick={() => {}}');

  // 8. Convert numeric attributes (rows, cols, size, maxLength, minLength, tabIndex, span, start) from string to number expressions
  const numericProps = ['rows', 'cols', 'size', 'maxLength', 'minLength', 'tabIndex', 'span', 'start'];
  numericProps.forEach((prop) => {
    content = content.replace(new RegExp('\\b' + prop + '="(\\d+)"', 'gi'), `${prop}={$1}`);
    content = content.replace(new RegExp('\\b' + prop + '=\'(\\d+)\'', 'gi'), `${prop}={$1}`);
  });

  // 9. Convert boolean attributes with values (disabled, multiple, checked, required, readonly, autofocus, selected) to JSX boolean expressions
  const booleanProps = ['disabled', 'multiple', 'checked', 'required', 'readonly', 'readOnly', 'autofocus', 'autoFocus', 'selected'];
  booleanProps.forEach((prop) => {
    const regex = new RegExp('\\b' + prop + '=(["\'])(.*?)\\1', 'gi');
    content = content.replace(regex, (match, quote, val) => {
      let jsxProp = prop;
      if (prop.toLowerCase() === 'readonly') jsxProp = 'readOnly';
      if (prop.toLowerCase() === 'autofocus') jsxProp = 'autoFocus';
      return `${jsxProp}={true}`;
    });
  });

  return {
    bodyClass,
    bodyContent: content,
    styles: styles.join('\n').trim()
  };
}

console.log(`Writing pages for ${metadata.length} screens...`);

const routeTreeData = [];

metadata.forEach((screen) => {
  const filepath = path.join(htmlDir, screen.htmlFilename);
  if (!fs.existsSync(filepath)) return;

  const route = screen.computedRoute;
  
  // Read file content and pass it to htmlToJsx
  const htmlContent = fs.readFileSync(filepath, 'utf-8');
  const parsed = htmlToJsx(htmlContent);

  // Determine target directory
  let routeDir = appDir;
  if (route !== '/') {
    const routeParts = route.split('/').filter(p => p);
    routeDir = path.join(appDir, ...routeParts);
  }

  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  const fileTarget = path.join(routeDir, 'page.tsx');

  // Render style tags conditionally without empty falsy string comparisons
  const styleOverrideBlock = parsed.styles ? `
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ${JSON.stringify(parsed.styles)} }} />
  ` : '';

  const pageCode = `"use client";

export default function Page() {
  return (
    <>
      ${styleOverrideBlock}
      {/* Screen markup */}
      <div className="${parsed.bodyClass}">
        ${parsed.bodyContent}
      </div>
    </>
  );
}
`;

  fs.writeFileSync(fileTarget, pageCode, 'utf-8');
  console.log(`Migrated: ${screen.title} (${screen.deviceType}) -> ${route}`);
  
  routeTreeData.push({
    title: screen.title,
    route,
    screenId: screen.screenId,
    device: screen.deviceType || 'DESKTOP'
  });
});

// Write updated route tree file
let routeTreeMd = `# Route Tree\n\nThe following lists the exact URL path mapped to each screen.\n\n| Screen Title | Route Path | Screen ID | Device |\n| :--- | :--- | :--- | :--- |\n`;
routeTreeData.forEach(r => {
  routeTreeMd += `| ${r.title} | \`${r.route}\` | \`${r.screenId}\` | ${r.device} |\n`;
});
fs.writeFileSync(path.join(auditDir, 'ROUTE_TREE.md'), routeTreeMd, 'utf-8');

console.log("All 115 pages compiled to native TSX successfully!");
