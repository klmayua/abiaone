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
    "screenId": "7db34d9a117147828bb98f7b8411f131",
    "title": "Civil Service | Admin Portal",
    "device": "MOBILE",
    "bodyClass": "text-on-background",
    "bodyContent": "\n<!-- TopAppBar Shell -->\n<header class=\"fixed top-0 left-0 w-full z-50 bg-background border-b border-outline-variant\">\n<div class=\"flex items-center justify-between px-margin-mobile h-16 w-full max-w-max-width mx-auto\">\n<div class=\"flex items-center gap-3\">\n<span class=\"material-symbols-outlined text-forest-green\" data-icon=\"account_balance\">account_balance</span>\n<h1 class=\"font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green tracking-tight\">ABIA ONE</h1>\n</div>\n<button class=\"hover:opacity-80 transition-opacity active:scale-95 transition-transform\">\n<span class=\"material-symbols-outlined text-on-surface-variant\" data-icon=\"notifications\">notifications</span>\n</button>\n</div>\n</header>\n<main class=\"pt-20 pb-32 px-margin-mobile max-w-max-width mx-auto\">\n<!-- Welcome Section -->\n<section class=\"mb-8\">\n<p class=\"font-label-md text-label-md text-forest-green uppercase tracking-widest mb-1\">Administrator Dashboard</p>\n<h2 class=\"font-headline-lg-mobile text-headline-lg-mobile text-on-surface\">Welcome back, Commissioner</h2>\n</section>\n<!-- KPI Bento Grid -->\n<div class=\"grid grid-cols-2 gap-4 mb-8\">\n<div class=\"bento-card p-5 col-span-2 rounded-xl flex flex-col justify-between overflow-hidden relative\">\n<div class=\"z-10\">\n<p class=\"font-label-md text-label-md text-on-surface-variant mb-1\">Statewide Productivity</p>\n<h3 class=\"font-headline-lg-mobile text-headline-lg-mobile text-forest-green\">94.2%</h3>\n<div class=\"flex items-center gap-1 text-on-primary-fixed-variant mt-1\">\n<span class=\"material-symbols-outlined text-sm\" data-icon=\"trending_up\">trending_up</span>\n<span class=\"text-caption font-caption\">+2.4% vs last month</span>\n</div>\n</div>\n<div class=\"absolute right-[-20px] bottom-[-20px] opacity-10\">\n<span class=\"material-symbols-outlined text-[120px]\" data-icon=\"monitoring\">monitoring</span>\n</div>\n</div>\n<div class=\"bento-card p-4 rounded-xl\">\n<p class=\"font-label-md text-label-md text-on-surface-variant mb-1\">Leave Requests</p>\n<div class=\"flex items-end justify-between\">\n<h3 class=\"font-headline-md text-headline-md text-eagle-red\">12</h3>\n<span class=\"font-caption text-caption text-on-surface-variant\">Pending</span>\n</div>\n</div>\n<div class=\"bento-card p-4 rounded-xl\">\n<p class=\"font-label-md text-label-md text-on-surface-variant mb-1\">MDA Compliance</p>\n<div class=\"flex items-end justify-between\">\n<h3 class=\"font-headline-md text-headline-md text-forest-green\">88%</h3>\n<span class=\"font-caption text-caption text-on-surface-variant\">Avg</span>\n</div>\n</div>\n</div>\n<!-- Official Notice Action -->\n<section class=\"mb-8\">\n<div class=\"bg-forest-green text-on-primary p-6 rounded-xl shadow-lg relative overflow-hidden\">\n<div class=\"relative z-10\">\n<h4 class=\"font-headline-md text-headline-md mb-2\">Publish Official Notice</h4>\n<p class=\"font-body-md text-body-md text-on-primary-container mb-4\">Broadcast critical updates to all 24,000 civil service employees instantly.</p>\n<button class=\"bg-secondary-container text-on-secondary-container font-label-md text-label-md py-3 px-6 rounded-lg font-bold flex items-center gap-2 active:scale-95 transition-transform\">\n<span class=\"material-symbols-outlined\" data-icon=\"campaign\">campaign</span>\n                        COMPOSE BROADCAST\n                    </button>\n</div>\n<!-- Subtle Shader Background -->\n<div class=\"absolute inset-0 opacity-20 pointer-events-none\">\n\n</div>\n</div>\n</section>\n<!-- Pending Approvals List -->\n<section class=\"mb-8\">\n<div class=\"flex items-center justify-between mb-4\">\n<h4 class=\"font-headline-md text-headline-md\">Leave Approvals</h4>\n<button class=\"text-forest-green font-label-md text-label-md flex items-center\">\n                    View All\n                    <span class=\"material-symbols-outlined text-sm ml-1\" data-icon=\"chevron_right\">chevron_right</span>\n</button>\n</div>\n<div class=\"space-y-3\">\n<!-- Request Item 1 -->\n<div class=\"bento-card p-4 rounded-lg flex items-center justify-between\">\n<div class=\"flex items-center gap-4\">\n<div class=\"w-12 h-12 rounded-full overflow-hidden border border-outline-variant bg-surface-container-high\">\n<img alt=\"Officer Profile\" class=\"w-full h-full object-cover\" data-alt=\"A professional headshot of a middle-aged female civil servant with a confident expression, wearing a tailored navy blue suit. The background is a soft-focus government office with warm, natural lighting and institutional green accents. The aesthetic is professional, sharp, and reflects high-level administrative authority.\" src=\"https://lh3.googleusercontent.com/aida-public/AB6AXuAPGQ8LE5Aawz2Ou6MbtiL3coltMZBm4_4P5ArH57fHOV52C_HA3xLxIIu8TRiSI4Ijj3_yxQcbiZRl6P1_NFpn3uV0VHHLSh2SFyLbOCyEyKzcpYiOXE-rKwzrWnJNWzYN4Lj-8-owBataajVmfuFhxTH5V3W_kdOv_99fpdNISJAMm19TjsPceagTtpac9IbGWMIyikrYOdf1n4J9BGJh7ifY68V7lIJlU2FWFFi44Jj0wU5B0OG44CHqqJuwXGKzbKLmTT33SXE\"/>\n</div>\n<div>\n<p class=\"font-body-lg text-body-lg font-semibold\">Chidi Okafor</p>\n<p class=\"font-caption text-caption text-on-surface-variant\">Ministry of Finance • 5 Days</p>\n</div>\n</div>\n<div class=\"flex gap-2\">\n<button class=\"w-10 h-10 rounded-full border border-error text-error flex items-center justify-center active:bg-error-container\">\n<span class=\"material-symbols-outlined\" data-icon=\"close\">close</span>\n</button>\n<button class=\"w-10 h-10 rounded-full bg-forest-green text-on-primary flex items-center justify-center active:bg-primary\">\n<span class=\"material-symbols-outlined\" data-icon=\"check\">check</span>\n</button>\n</div>\n</div>\n<!-- Request Item 2 -->\n<div class=\"bento-card p-4 rounded-lg flex items-center justify-between\">\n<div class=\"flex items-center gap-4\">\n<div class=\"w-12 h-12 rounded-full overflow-hidden border border-outline-variant bg-surface-container-high\">\n<img alt=\"Officer Profile\" class=\"w-full h-full object-cover\" data-alt=\"A portrait of a male administrative officer in his late 30s, wearing a crisp white dress shirt and spectacles. He is smiling warmly in a bright, modern light-mode office setting. The composition uses high-key lighting to emphasize transparency and modern governance within the Abia State Civil Service.\" src=\"https://lh3.googleusercontent.com/aida-public/AB6AXuDwAFPMpDszy63qJV563SiDLUwHHcjs2PZHtvRI5KhmV_DS0aVjUgiu-_BpJ3Xl4gAOlXrNKsh-ZTLQH7qnGzP9LYFYi2_JaPY6RWDH1C5nJTvoMUP7AOnBNzGjZjU7UXQTFw3PgcrKYgg5qSGfCr0Ir8ue-JiPEtrs7SL6UfvEgaxDM_4buO10HYmUupjnFqDgp8B9f2s0Av9zL6INqSbKRbgy6dxI0VPPfQnLuKdCcqBjqiorfNghanACGg9hMx5e2tFjFlv2Y-E\"/>\n</div>\n<div>\n<p class=\"font-body-lg text-body-lg font-semibold\">Bolanle Adeyemi</p>\n<p class=\"font-caption text-caption text-on-surface-variant\">Health Services • 14 Days</p>\n</div>\n</div>\n<div class=\"flex gap-2\">\n<button class=\"w-10 h-10 rounded-full border border-error text-error flex items-center justify-center active:bg-error-container\">\n<span class=\"material-symbols-outlined\" data-icon=\"close\">close</span>\n</button>\n<button class=\"w-10 h-10 rounded-full bg-forest-green text-on-primary flex items-center justify-center active:bg-primary\">\n<span class=\"material-symbols-outlined\" data-icon=\"check\">check</span>\n</button>\n</div>\n</div>\n</div>\n</section>\n<!-- MDA Performance Chart Placeholder -->\n<section class=\"mb-8\">\n<h4 class=\"font-headline-md text-headline-md mb-4\">MDA Performance Matrix</h4>\n<div class=\"bento-card p-6 rounded-xl min-h-[280px] relative overflow-hidden flex flex-col justify-end\">\n<div class=\"absolute top-6 left-6 z-10\">\n<div class=\"flex items-center gap-2 mb-2\">\n<span class=\"w-3 h-3 bg-forest-green rounded-full\"></span>\n<span class=\"font-label-md text-label-md\">Revenue Collection</span>\n</div>\n<div class=\"flex items-center gap-2\">\n<span class=\"w-3 h-3 bg-brass-gold rounded-full\"></span>\n<span class=\"font-label-md text-label-md\">Project Delivery</span>\n</div>\n</div>\n<div class=\"h-40 w-full flex items-end gap-3 px-2\">\n<div class=\"flex-1 bg-surface-container-high rounded-t-lg relative group\">\n<div class=\"absolute bottom-0 w-full bg-forest-green rounded-t-lg\" style=\"height: 65%;\"></div>\n<div class=\"absolute bottom-0 w-1/2 left-1/4 bg-brass-gold rounded-t-lg\" style=\"height: 40%;\"></div>\n<span class=\"absolute -bottom-6 left-0 w-full text-center font-caption text-caption\">MoW</span>\n</div>\n<div class=\"flex-1 bg-surface-container-high rounded-t-lg relative group\">\n<div class=\"absolute bottom-0 w-full bg-forest-green rounded-t-lg\" style=\"height: 85%;\"></div>\n<div class=\"absolute bottom-0 w-1/2 left-1/4 bg-brass-gold rounded-t-lg\" style=\"height: 70%;\"></div>\n<span class=\"absolute -bottom-6 left-0 w-full text-center font-caption text-caption\">MoE</span>\n</div>\n<div class=\"flex-1 bg-surface-container-high rounded-t-lg relative group\">\n<div class=\"absolute bottom-0 w-full bg-forest-green rounded-t-lg\" style=\"height: 45%;\"></div>\n<div class=\"absolute bottom-0 w-1/2 left-1/4 bg-brass-gold rounded-t-lg\" style=\"height: 55%;\"></div>\n<span class=\"absolute -bottom-6 left-0 w-full text-center font-caption text-caption\">MoH</span>\n</div>\n<div class=\"flex-1 bg-surface-container-high rounded-t-lg relative group\">\n<div class=\"absolute bottom-0 w-full bg-forest-green rounded-t-lg\" style=\"height: 95%;\"></div>\n<div class=\"absolute bottom-0 w-1/2 left-1/4 bg-brass-gold rounded-t-lg\" style=\"height: 90%;\"></div>\n<span class=\"absolute -bottom-6 left-0 w-full text-center font-caption text-caption\">MoA</span>\n</div>\n</div>\n<div class=\"mt-10 pt-4 border-t border-outline-variant\">\n<p class=\"font-body-md text-body-md text-on-surface-variant\">Top Performer: Ministry of Agriculture</p>\n</div>\n</div>\n</section>\n</main>\n<!-- BottomNavBar Shell -->\n<nav class=\"fixed bottom-0 left-0 w-full z-50 bg-surface-container-lowest border-t border-outline-variant shadow-sm rounded-t-full\">\n<div class=\"flex justify-around items-center h-20 w-full px-base pb-safe\">\n<a class=\"flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90 transition-transform duration-200\" href=\"#\">\n<span class=\"material-symbols-outlined\" data-icon=\"dashboard\">dashboard</span>\n<span class=\"font-label-md text-label-md\">Dashboard</span>\n</a>\n<a class=\"flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200\" href=\"#\">\n<span class=\"material-symbols-outlined\" data-icon=\"notifications_active\">notifications_active</span>\n<span class=\"font-label-md text-label-md\">Alerts</span>\n</a>\n<a class=\"flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200\" href=\"#\">\n<span class=\"material-symbols-outlined\" data-icon=\"grid_view\">grid_view</span>\n<span class=\"font-label-md text-label-md\">Hub</span>\n</a>\n<a class=\"flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200\" href=\"#\">\n<span class=\"material-symbols-outlined\" data-icon=\"person\">person</span>\n<span class=\"font-label-md text-label-md\">Profile</span>\n</a>\n</div>\n</nav>\n\n",
    "styles": "\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        body {\n            font-family: 'Hanken Grotesk', sans-serif;\n            background-color: #f6fbf3;\n        }\n        .bento-card {\n            border: 1px solid #bec9be;\n            background: #ffffff;\n            transition: transform 0.2s ease, box-shadow 0.2s ease;\n        }\n        .bento-card:active {\n            transform: scale(0.98);\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }\n  "
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
            <span>Route variants for /civil-service ({screens.length}):</span>
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
