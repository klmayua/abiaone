'use client';

import { useState, useEffect } from 'react';

interface ScreenCode {
  screenId: string;
  title: string;
  device: string;
  bodyClass: string;
  bodyContent: string;
  styles: string;
}

const screens: ScreenCode[] = [
  {
    "screenId": "1803f6638be34d57b3d393ba6779e683",
    "title": "Public Reporting | Secure Abia (Desktop)",
    "device": "DESKTOP",
    "bodyClass": "bg-background text-on-background",
    "bodyContent": "\n<!-- Top Navigation Bar -->\n<header class=\"fixed top-0 w-full z-50 bg-background border-b border-outline-variant\">\n<div class=\"flex justify-between items-center px-margin-desktop h-20 max-w-max-width mx-auto\">\n<div class=\"flex items-center gap-2\">\n<span class=\"font-display-lg text-headline-md font-bold text-primary\">ABIA ONE</span>\n<span class=\"font-label-md text-caption bg-secondary-container px-2 py-0.5 rounded text-on-secondary-container\">PUBLIC PORTAL</span>\n</div>\n<nav class=\"hidden md:flex items-center gap-8\">\n<a class=\"text-on-surface-variant font-medium hover:text-primary transition-colors\" href=\"#\">Economy</a>\n<a class=\"text-on-surface-variant font-medium hover:text-primary transition-colors\" href=\"#\">Digital Gov</a>\n<a class=\"text-primary font-semibold border-b-2 border-brass-gold pb-1\" href=\"#\">Governance</a>\n<a class=\"text-on-surface-variant font-medium hover:text-primary transition-colors\" href=\"#\">Security</a>\n</nav>\n<div class=\"flex items-center gap-4\">\n<div class=\"relative group\">\n<span class=\"material-symbols-outlined text-on-surface-variant cursor-pointer\">search</span>\n</div>\n<button class=\"bg-forest-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary transition-all active:scale-95\">\n                    Citizen Portal\n                </button>\n</div>\n</div>\n</header>\n<main class=\"pt-32 pb-20 px-margin-desktop max-w-max-width mx-auto\">\n<!-- Hero / Emergency Section -->\n<section class=\"mb-12\">\n<div class=\"bg-eagle-red text-white p-10 rounded-xl flex flex-col md:flex-row justify-between items-center relative overflow-hidden\">\n<!-- Abstract Texture Overlay -->\n<div class=\"absolute inset-0 opacity-10 pointer-events-none\">\n<svg height=\"100%\" width=\"100%\"><rect fill=\"url(#pattern-dots)\" height=\"100%\" width=\"100%\"></rect></svg>\n<defs>\n<pattern height=\"20\" id=\"pattern-dots\" patternunits=\"userSpaceOnUse\" width=\"20\" x=\"0\" y=\"0\">\n<circle cx=\"2\" cy=\"2\" fill=\"white\" r=\"1\"></circle>\n</pattern>\n</defs>\n</div>\n<div class=\"z-10 relative mb-8 md:mb-0\">\n<h1 class=\"font-headline-lg text-headline-lg mb-2\">Emergency Dispatch</h1>\n<p class=\"font-body-lg text-body-lg opacity-90 max-w-lg\">Immediate response for life-threatening situations, fire, or active crime reporting. Operators are standing by 24/7.</p>\n</div>\n<div class=\"z-10 relative flex flex-col items-center md:items-end\">\n<div class=\"flex gap-4 mb-4\">\n<div class=\"bg-white/20 backdrop-blur-md px-8 py-6 rounded-lg text-center border border-white/30\">\n<span class=\"block font-label-md text-caption mb-1 uppercase tracking-widest\">Global</span>\n<span class=\"block font-display-lg text-[64px] leading-none font-extrabold\">112</span>\n</div>\n<div class=\"bg-white/20 backdrop-blur-md px-8 py-6 rounded-lg text-center border border-white/30\">\n<span class=\"block font-label-md text-caption mb-1 uppercase tracking-widest\">Local</span>\n<span class=\"block font-display-lg text-[64px] leading-none font-extrabold\">911</span>\n</div>\n</div>\n<button class=\"bg-white text-eagle-red px-10 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-surface transition-colors shadow-lg active:scale-95\">\n<span class=\"material-symbols-outlined\" style=\"font-variation-settings: 'FILL' 1;\">call</span>\n                        INITIATE EMERGENCY CALL\n                    </button>\n</div>\n</div>\n</section>\n<!-- Reporting Channels Bento Grid -->\n<section class=\"mb-16\">\n<div class=\"flex justify-between items-end mb-8\">\n<div>\n<h2 class=\"font-headline-lg text-headline-lg text-primary\">Public Reporting Channels</h2>\n<p class=\"text-on-surface-variant font-body-md\">Choose the appropriate channel for non-emergency state matters.</p>\n</div>\n<div class=\"h-1 w-24 bg-brass-gold mb-2\"></div>\n</div>\n<div class=\"grid grid-cols-1 md:grid-cols-3 gap-8\">\n<!-- Channel 1 -->\n<div class=\"group bg-surface-container-low border border-outline-variant p-8 rounded-xl hover-lift cursor-pointer flex flex-col h-full\">\n<div class=\"w-16 h-16 bg-primary-container rounded-lg flex items-center justify-center mb-6 text-on-primary-container\">\n<span class=\"material-symbols-outlined text-4xl\" data-icon=\"smartphone\">smartphone</span>\n</div>\n<h3 class=\"font-headline-md text-headline-md text-primary mb-3\">Abia Alert App</h3>\n<p class=\"text-on-surface-variant font-body-md mb-8 flex-grow\">Geo-tagged reporting for infrastructure issues, traffic violations, and environmental concerns directly from your device.</p>\n<div class=\"flex gap-4\">\n<span class=\"text-forest-green font-semibold flex items-center gap-1 group-hover:gap-2 transition-all\">\n                            Download Now <span class=\"material-symbols-outlined\">arrow_forward</span>\n</span>\n</div>\n</div>\n<!-- Channel 2 -->\n<div class=\"group bg-surface-container-low border border-outline-variant p-8 rounded-xl hover-lift cursor-pointer flex flex-col h-full\">\n<div class=\"w-16 h-16 bg-tertiary-container rounded-lg flex items-center justify-center mb-6 text-on-tertiary-container\">\n<span class=\"material-symbols-outlined text-4xl\" data-icon=\"security\">security</span>\n</div>\n<h3 class=\"font-headline-md text-headline-md text-primary mb-3\">Whistleblower Portal</h3>\n<p class=\"text-on-surface-variant font-body-md mb-8 flex-grow\">Secure, anonymous channel for reporting governmental misconduct, corruption, or procedural anomalies. Protected by State Law.</p>\n<div class=\"flex gap-4\">\n<span class=\"text-tertiary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all\">\n                            Access Portal <span class=\"material-symbols-outlined\">shield_person</span>\n</span>\n</div>\n</div>\n<!-- Channel 3 -->\n<div class=\"group bg-surface-container-low border border-outline-variant p-8 rounded-xl hover-lift cursor-pointer flex flex-col h-full\">\n<div class=\"w-16 h-16 bg-secondary-container rounded-lg flex items-center justify-center mb-6 text-on-secondary-container\">\n<span class=\"material-symbols-outlined text-4xl\" data-icon=\"chat_bubble\">chat_bubble</span>\n</div>\n<h3 class=\"font-headline-md text-headline-md text-primary mb-3\">General Feedback</h3>\n<p class=\"text-on-surface-variant font-body-md mb-8 flex-grow\">Share your thoughts on state services, suggest improvements, or submit inquiries to the Ministry of Information.</p>\n<div class=\"flex gap-4\">\n<span class=\"text-secondary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all\">\n                            Send Feedback <span class=\"material-symbols-outlined\">send</span>\n</span>\n</div>\n</div>\n</div>\n</section>\n<!-- Community Contribution Section -->\n<section class=\"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-surface-container-highest rounded-2xl overflow-hidden border border-outline-variant\">\n<div class=\"p-12\">\n<h2 class=\"font-headline-lg text-headline-lg text-primary mb-6\">Building the Future Together</h2>\n<p class=\"text-on-surface-variant font-body-lg mb-8 leading-relaxed\">\n                    Governance is a collaborative journey. Beyond reporting, contribute to the state's vision through project sponsorships, volunteering for local initiatives, or providing expert consultancy on state developments.\n                </p>\n<div class=\"flex flex-wrap gap-4\">\n<button class=\"bg-forest-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary transition-all\">Support Projects</button>\n<button class=\"border border-brass-gold text-primary px-8 py-3 rounded-lg font-semibold hover:bg-brass-gold/10 transition-all\">Volunteer Programs</button>\n</div>\n</div>\n<div class=\"h-full min-h-[400px] relative\">\n<img alt=\"Modern City Skyline\" class=\"absolute inset-0 w-full h-full object-cover\" data-alt=\"A sweeping, wide-angle cinematic shot of a futuristic city skyline during the golden hour. The architecture is sleek and modern, with glass skyscrapers reflecting a warm, golden sunlight. The atmosphere is vibrant yet professional, using a clean color palette of forest greens, whites, and brass accents that represent a state operating system. The lighting is soft and ethereal, emphasizing a sense of progress and institutional stability.\" src=\"https://lh3.googleusercontent.com/aida-public/AB6AXuD8IVdXfzoGU-e91hx80g-5Q18wOHmM1t4cHyVXvSsFZVNUlAtpUrM_2KSUMUeT7huC4lrnelamj2ZoKWQZvyVp9U9LjQymtF7kP2k1ADdJE8_b79St7mKgFz6kQZ7U6N3rFtsAIQ2q1VJs4QgiUTzBKlCnB6piH7fE_eAEZWHnPJXqgrf0TbEFcLY8X03x0pW5mXzqwSA02WmlpSMoaCNOBf2JvBZdgJ1pOcmK-o-xYBL28iB0AmTg-nPSFsM7yDKnEtQefztlX2A\">\n<div class=\"absolute inset-0 bg-gradient-to-r from-surface-container-highest/60 to-transparent\"></div>\n</div>\n</section>\n</main>\n<!-- Footer -->\n<footer class=\"bg-surface-container-highest border-t border-outline-variant py-12\">\n<div class=\"max-w-max-width mx-auto px-margin-desktop\">\n<div class=\"flex flex-col md:flex-row justify-between items-start gap-12 mb-12\">\n<div class=\"max-w-xs\">\n<span class=\"font-display-lg text-headline-md font-bold text-primary block mb-4\">ABIA ONE</span>\n<p class=\"text-on-surface-variant font-caption\">Empowering citizens through transparent infrastructure and direct communication channels. The official State Operating System of Abia.</p>\n</div>\n<div class=\"grid grid-cols-2 md:grid-cols-3 gap-12\">\n<div>\n<h4 class=\"font-label-md text-primary mb-4\">Resources</h4>\n<ul class=\"space-y-2 font-caption text-on-surface-variant\">\n<li><a class=\"hover:text-primary transition-colors\" href=\"#\">Digital Gov Docs</a></li>\n<li><a class=\"hover:text-primary transition-colors\" href=\"#\">Service Level Agreements</a></li>\n<li><a class=\"hover:text-primary transition-colors\" href=\"#\">Privacy Policy</a></li>\n</ul>\n</div>\n<div>\n<h4 class=\"font-label-md text-primary mb-4\">Support</h4>\n<ul class=\"space-y-2 font-caption text-on-surface-variant\">\n<li><a class=\"hover:text-primary transition-colors\" href=\"#\">Contact Support</a></li>\n<li><a class=\"hover:text-primary transition-colors\" href=\"#\">Transparency Info</a></li>\n<li><a class=\"hover:text-primary transition-colors\" href=\"#\">Citizen Rights</a></li>\n</ul>\n</div>\n<div>\n<h4 class=\"font-label-md text-primary mb-4\">Emergency</h4>\n<ul class=\"space-y-2 font-caption text-on-surface-variant\">\n<li class=\"font-bold text-eagle-red\">Dial 112 / 911</li>\n<li>Fire Department</li>\n<li>Medical Response</li>\n</ul>\n</div>\n</div>\n</div>\n<div class=\"pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4\">\n<p class=\"font-caption text-on-surface-variant\">© 2024 Abia State Government. All rights reserved. Built for the future of governance.</p>\n<div class=\"flex gap-6\">\n<span class=\"material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary\">language</span>\n<span class=\"material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary\">share</span>\n<span class=\"material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary\">policy</span>\n</div>\n</div>\n</div>\n</footer>\n\n",
    "styles": "\n        body {\n            font-family: 'Hanken Grotesk', sans-serif;\n            -webkit-font-smoothing: antialiased;\n        }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .hover-lift {\n            transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n        }\n        .hover-lift:hover {\n            transform: translateY(-4px);\n        }\n        .brass-border {\n            border-bottom: 3px solid #D4AF37;\n        }\n    "
  }
];

export default function Page() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeScreen = screens[activeScreenIndex];

  return (
    <div className="relative w-full min-h-screen">
      {activeScreen.styles && (
        <style dangerouslySetInnerHTML={{ __html: activeScreen.styles }} />
      )}

      {screens.length > 1 && (
        <div className="sticky top-0 z-[100] w-full bg-slate-900 text-slate-100 px-4 py-2 flex items-center justify-between gap-4 border-b border-slate-700 text-xs shadow-md">
          <div className="font-semibold flex items-center gap-2">
            <span className="material-symbols-outlined text-amber-400 text-sm">layers</span>
            <span>Route variants for /public-reporting ({screens.length}):</span>
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {screens.map((s, idx) => (
              <button
                key={s.screenId}
                onClick={() => setActiveScreenIndex(idx)}
                className={'px-3 py-1 rounded transition-all font-medium whitespace-nowrap cursor-pointer ' + 
                  (activeScreenIndex === idx ? 'bg-amber-500 text-slate-900 shadow' : 'bg-slate-800 text-slate-300 hover:bg-slate-700')}
              >
                {s.title} ({s.device})
              </button>
            ))}
          </div>
        </div>
      )}

      <div 
        className={activeScreen.bodyClass} 
        dangerouslySetInnerHTML={{ __html: activeScreen.bodyContent }} 
      />
    </div>
  );
}
