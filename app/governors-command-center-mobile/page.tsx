"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .fill-icon {\n            font-variation-settings: 'FILL' 1;\n        }\n        /* Custom scrollbar for data-dense areas */\n        ::-webkit-scrollbar {\n            width: 4px;\n        }\n        ::-webkit-scrollbar-track {\n            background: transparent;\n        }\n        ::-webkit-scrollbar-thumb {\n            background: #bec9be;\n            border-radius: 10px;\n        }\n        .glass-dark {\n            background: rgba(24, 29, 25, 0.95);\n            backdrop-filter: blur(12px);\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md selection:bg-forest-green selection:text-white">
        
{/*  Top App Bar  */}
<header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-outline-variant h-16 flex items-center justify-between px-margin-mobile">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green text-2xl" data-icon="account_balance">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green tracking-tight">ABIA ONE</h1>
</div>
<div className="flex items-center gap-4">
<button className="active:scale-95 transition-transform hover:opacity-80">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="notifications">notifications</span>
</button>
<div className="w-8 h-8 rounded-full bg-forest-green flex items-center justify-center text-white font-bold text-xs">GOV</div>
</div>
</header>
<main className="pt-20 pb-24 px-margin-mobile max-w-md mx-auto">
{/*  Security Status Header  */}
<div className="flex items-center justify-between mb-6">
<div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase">Command Center</p>
<h2 className="font-headline-md text-headline-md text-on-surface">System Status: <span className="text-forest-green">Secure</span></h2>
</div>
<div className="flex flex-col items-end">
<span className="font-label-md text-label-md text-eagle-red animate-pulse">LIVE DATA</span>
<span className="text-[10px] font-label-md text-on-surface-variant" id="timestamp">12:45:08 UTC</span>
</div>
</div>
{/*  Four Pillars Bento Grid (Dark Themed Container)  */}
<section className="bg-on-background text-state-white p-5 rounded-xl mb-6 shadow-2xl relative overflow-hidden">
{/*  Subtle atmospheric shader background  */}

<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-forest-green"></span>
<h3 className="font-label-md text-label-md tracking-widest uppercase opacity-70">State Transformation Pillars</h3>
</div>
<div className="grid grid-cols-2 gap-3">
{/*  Economy  */}
<div className="bg-slate-gray/30 p-4 rounded-lg border border-white/10">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-secondary-fixed" data-icon="payments">payments</span>
<span className="text-[10px] font-label-md text-primary-fixed-dim">+4.2%</span>
</div>
<p className="font-label-md text-[12px] opacity-60">Economy</p>
<p className="font-headline-md text-xl">₦2.4B</p>
<p className="text-[10px] opacity-40 mt-1">Daily Revenue</p>
</div>
{/*  Digital Gov  */}
<div className="bg-slate-gray/30 p-4 rounded-lg border border-white/10">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-primary-fixed-dim" data-icon="fingerprint">fingerprint</span>
<span className="text-[10px] font-label-md text-primary-fixed-dim">98%</span>
</div>
<p className="font-label-md text-[12px] opacity-60">Digital Gov</p>
<p className="font-headline-md text-xl">1.2M</p>
<p className="text-[10px] opacity-40 mt-1">Identities Verified</p>
</div>
{/*  Transparency  */}
<div className="bg-slate-gray/30 p-4 rounded-lg border border-white/10">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="visibility">visibility</span>
<span className="text-[10px] font-label-md text-primary-fixed-dim">Audit OK</span>
</div>
<p className="font-label-md text-[12px] opacity-60">Transparency</p>
<p className="font-headline-md text-xl">100%</p>
<p className="text-[10px] opacity-40 mt-1">Public Tenders</p>
</div>
{/*  Security  */}
<div className="bg-slate-gray/30 p-4 rounded-lg border border-white/10">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-eagle-red" data-icon="security">security</span>
<span className="text-[10px] font-label-md text-eagle-red">Alert</span>
</div>
<p className="font-label-md text-[12px] opacity-60">Security</p>
<p className="font-headline-md text-xl">Lvl 2</p>
<p className="text-[10px] opacity-40 mt-1">Response Readiness</p>
</div>
</div>
</div>
</section>
{/*  Crisis Quick Actions  */}
<section className="mb-8">
<h3 className="font-headline-md text-sm mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-eagle-red text-lg fill-icon" data-icon="bolt">bolt</span>
                Crisis Response Protocol
            </h3>
<div className="grid grid-cols-4 gap-2">
<button className="flex flex-col items-center justify-center p-3 rounded-lg bg-surface border border-outline-variant active:scale-95 transition-all group">
<span className="material-symbols-outlined text-forest-green mb-1 group-active:scale-110" data-icon="emergency_share">emergency_share</span>
<span className="text-[9px] font-label-md uppercase">Dispatch</span>
</button>
<button className="flex flex-col items-center justify-center p-3 rounded-lg bg-surface border border-outline-variant active:scale-95 transition-all group">
<span className="material-symbols-outlined text-brass-gold mb-1" data-icon="broadcast_on_home">broadcast_on_home</span>
<span className="text-[9px] font-label-md uppercase">Alerts</span>
</button>
<button className="flex flex-col items-center justify-center p-3 rounded-lg bg-surface border border-outline-variant active:scale-95 transition-all group">
<span className="material-symbols-outlined text-eagle-red mb-1" data-icon="stadium">stadium</span>
<span className="text-[9px] font-label-md uppercase">Shelter</span>
</button>
<button className="flex flex-col items-center justify-center p-3 rounded-lg bg-on-background text-white p-3 rounded-lg active:bg-eagle-red transition-colors">
<span className="material-symbols-outlined mb-1" data-icon="call">call</span>
<span className="text-[9px] font-label-md uppercase">Command</span>
</button>
</div>
</section>
{/*  In-flight Emergencies (Horizontal Scroll)  */}
<section className="mb-6">
<div className="flex justify-between items-center mb-4">
<h3 className="font-headline-md text-sm">In-flight Emergencies</h3>
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container text-[10px] font-bold">3 ACTIVE</span>
</div>
<div className="flex overflow-x-auto gap-4 pb-4 snap-x">
{/*  Emergency Card 1  */}
<div className="min-w-[280px] snap-center bg-surface-container border border-outline-variant rounded-xl p-4 relative overflow-hidden">
<div className="absolute top-0 right-0 p-2">
<span className="material-symbols-outlined text-eagle-red fill-icon text-sm animate-pulse" data-icon="warning">warning</span>
</div>
<div className="flex items-start gap-3 mb-3">
<div className="w-12 h-12 rounded bg-eagle-red/10 flex items-center justify-center">
<span className="material-symbols-outlined text-eagle-red" data-icon="flood">flood</span>
</div>
<div>
<h4 className="font-body-lg font-semibold text-sm">Umuahia North Flood</h4>
<p className="text-xs text-on-surface-variant">Aba Road - Sector 4</p>
</div>
</div>
<div className="space-y-2 mb-4">
<div className="flex justify-between text-[11px]">
<span className="opacity-70">Impact Scope:</span>
<span className="font-semibold text-eagle-red">Critical</span>
</div>
<div className="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
<div className="bg-eagle-red h-full w-4/5"></div>
</div>
</div>
<button className="w-full py-2 bg-forest-green text-white text-[11px] font-label-md rounded flex items-center justify-center gap-2">
                        VIEW LIVE FEED <span className="material-symbols-outlined text-xs" data-icon="videocam">videocam</span>
</button>
</div>
{/*  Emergency Card 2  */}
<div className="min-w-[280px] snap-center bg-surface-container border border-outline-variant rounded-xl p-4">
<div className="flex items-start gap-3 mb-3">
<div className="w-12 h-12 rounded bg-brass-gold/10 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary" data-icon="power">power</span>
</div>
<div>
<h4 className="font-body-lg font-semibold text-sm">Grid Instability</h4>
<p className="text-xs text-on-surface-variant">Osisioma Substation</p>
</div>
</div>
<div className="space-y-2 mb-4">
<div className="flex justify-between text-[11px]">
<span className="opacity-70">Stability:</span>
<span className="font-semibold text-secondary">Fluctuating</span>
</div>
<div className="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-2/5"></div>
</div>
</div>
<button className="w-full py-2 border border-forest-green text-forest-green text-[11px] font-label-md rounded">
                        ANALYZE DATA
                    </button>
</div>
</div>
</section>
{/*  Personnel Mapping Visual  */}
<section className="mb-6">
<h3 className="font-headline-md text-sm mb-4">Tactical Asset Deployment</h3>
<div className="relative h-48 rounded-xl overflow-hidden border border-outline-variant">
<div className="absolute inset-0 bg-surface-container-highest">
{/*  Map Placeholder  */}
<img className="w-full h-full object-cover opacity-50 grayscale contrast-125" data-alt="A sophisticated tactical digital map interface of a city region showing various blue and green data points representing emergency services and government assets. The map has a clean, data-driven aesthetic with subtle glowing grid lines and topographical contours. The color palette is composed of muted greens and deep slates to match the sovereign state operating system theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCskEoqQjiIR0MFeQyl6KyMJd5AO-w_z6zstHdepnPJ5IXBBTI9NS_ZdS16mjFCYqTOHb9We6ZPUGzNAocyMm8OO2-l0mST58OAosPxevWmUy_DU2NsXVq_HjeztMdCf1rcffBNLbYIu-ozRjPNmZhPL-OuXmwpy8OaC03cWKRHG9MiqGD9oi3yPMVIgiskk2Oss2qeDpOEz6VMtrdcjYpFYWVYuKIW2K-dw5NA-d0txWPOZIF4WJpDSjCURoD3aBvdK4oDBySzkuw"/>
</div>
{/*  Animated Pings  */}
<div className="absolute top-1/4 left-1/3 w-3 h-3 bg-forest-green rounded-full">
<div className="absolute inset-0 animate-ping bg-forest-green rounded-full opacity-75"></div>
</div>
<div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-eagle-red rounded-full">
<div className="absolute inset-0 animate-ping bg-eagle-red rounded-full opacity-75"></div>
</div>
{/*  Map Overlay Info  */}
<div className="absolute bottom-3 left-3 bg-on-background/80 backdrop-blur p-2 rounded text-[10px] text-white">
<p className="font-label-md">REGION: CENTRAL ABIA</p>
<p className="opacity-70">UNITS: 14 ACTIVE</p>
</div>
</div>
</section>
</main>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 bg-surface-container-lowest border-t border-outline-variant shadow-sm h-20 px-base pb-safe flex justify-around items-center rounded-t-full">
{/*  Dashboard (Active)  */}
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined fill-icon" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
{/*  Alerts  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</a>
{/*  Hub  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
<span className="font-label-md text-label-md">Hub</span>
</a>
{/*  Profile  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-label-md">Profile</span>
</a>
</nav>


      </div>
    </>
  );
}
