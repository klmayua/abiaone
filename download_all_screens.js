const fs = require('fs');
const path = require('path');
const https = require('https');

const auditDir = path.join(__dirname, 'audit');
const htmlDir = path.join(auditDir, 'screens_html');

// Create directories if they don't exist
if (!fs.existsSync(auditDir)) fs.mkdirSync(auditDir);
if (!fs.existsSync(htmlDir)) fs.mkdirSync(htmlDir);

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (status code: ${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {}); // Delete local file on error
      reject(err);
    });
  });
}

async function main() {
  try {
    let content = fs.readFileSync('screens.json', 'utf16le');
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
    }
    const parsed = JSON.parse(content);
    const screens = parsed.screens || [];
    console.log(`Starting download of ${screens.length} screens...`);

    const metadata = [];
    const limit = 10; // download up to 10 screens concurrently
    let active = 0;
    let index = 0;

    const runNext = async () => {
      if (index >= screens.length) return;
      const screen = screens[index++];
      const nameParts = screen.name.split('/');
      const screenId = nameParts[nameParts.length - 1];
      const title = screen.title || "Untitled";
      const filename = `${screenId}.html`;
      const filepath = path.join(htmlDir, filename);

      metadata.push({
        screenId,
        name: screen.name,
        title,
        deviceType: screen.deviceType,
        width: screen.width,
        height: screen.height,
        htmlFilename: filename,
        screenshotUrl: screen.screenshot ? screen.screenshot.downloadUrl : null
      });

      console.log(`[${index}/${screens.length}] Downloading: ${title} (${screenId})`);
      try {
        await downloadFile(screen.htmlCode.downloadUrl, filepath);
      } catch (err) {
        console.error(`Error downloading ${screenId}:`, err.message);
      }
      await runNext();
    };

    const promises = [];
    for (let i = 0; i < limit; i++) {
      promises.push(runNext());
    }
    await Promise.all(promises);

    fs.writeFileSync(path.join(auditDir, 'screens_metadata.json'), JSON.stringify(metadata, null, 2), 'utf-8');
    console.log("All downloads completed! Metadata saved to audit/screens_metadata.json.");
  } catch (err) {
    console.error("Main execution error:", err.message);
  }
}

main();
