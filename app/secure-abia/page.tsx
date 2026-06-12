export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .card-outline {\n            border: 1px solid #E2E8F0;\n        }\n        .brass-accent {\n            border-left: 4px solid #D4AF37;\n        }\n        @keyframes pulse-slow {\n            0%, 100% { opacity: 1; }\n            50% { opacity: 0.6; }\n        }\n        .status-pulse {\n            animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md overflow-x-hidden">
        
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-background dark:bg-inverse-surface border-b border-outline-variant dark:border-outline h-20">
<div className="flex justify-between items-center px-64 h-20 max-w-max-width mx-auto">
<div className="font-display-lg text-display-lg font-bold text-primary dark:text-primary-fixed">ABIA ONE</div>
<div className="hidden md:flex gap-8">
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Economy</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Digital Gov</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Governance</a>
<a className="text-primary dark:text-primary-fixed-dim border-b-2 border-brass-gold font-semibold pb-1" href="#">Security</a>
</div>
<button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all cursor-pointer">Citizen Portal</button>
</div>
</nav>
{/*  SideNavBar  */}
<aside className="fixed left-0 top-20 h-screen w-64 bg-surface-container-low dark:bg-surface-dim border-r border-outline-variant flex flex-col py-6">
<div className="px-6 mb-8">
<div className="font-headline-md text-headline-md font-bold text-primary">Navigation</div>
<div className="text-caption text-on-surface-variant">State Operating System</div>
</div>
<nav className="flex-1">
<div className="text-on-surface-variant dark:text-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-variant transition-colors cursor-pointer">
<span className="material-symbols-outlined">payments</span>
<span className="font-body-md text-body-md">Economic Transformation</span>
</div>
<div className="text-on-surface-variant dark:text-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-variant transition-colors cursor-pointer">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-body-md text-body-md">Digital Government</span>
</div>
<div className="text-on-surface-variant dark:text-surface-variant px-4 py-3 flex items-center gap-3 hover:bg-surface-variant transition-colors cursor-pointer">
<span className="material-symbols-outlined">gavel</span>
<span className="font-body-md text-body-md">Transparent Governance</span>
</div>
<div className="text-forest-green dark:text-primary-fixed font-bold border-l-4 border-brass-gold bg-surface-container-high px-4 py-3 flex items-center gap-3 cursor-pointer">
<span className="material-symbols-outlined">verified_user</span>
<span className="font-body-md text-body-md">Public Trust</span>
</div>
</nav>
<div className="mt-auto px-4 border-t border-outline-variant pt-6 pb-24">
<div className="flex items-center gap-3 px-4 py-2 hover:bg-surface-variant transition-colors cursor-pointer rounded">
<span className="material-symbols-outlined">settings</span>
<span className="text-on-surface-variant font-medium">Settings</span>
</div>
<div className="flex items-center gap-3 px-4 py-2 hover:bg-surface-variant transition-colors cursor-pointer rounded">
<span className="material-symbols-outlined">help</span>
<span className="text-on-surface-variant font-medium">Support</span>
</div>
<button className="mt-6 w-full bg-forest-green text-state-white py-3 rounded-lg font-semibold uppercase tracking-wider text-sm">Launch Service</button>
</div>
</aside>
{/*  Main Content  */}
<main className="ml-64 pt-20 pb-12 px-12 max-w-[1200px]">
{/*  Header Section  */}
<header className="py-12 flex justify-between items-end">
<div>
<h1 className="font-display-lg text-display-lg text-primary mb-2">Secure Abia Intelligence Center</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Real-time situational awareness and public safety metrics. A unified command interface for state security operations and citizen reporting.</p>
</div>
<div className="flex gap-4">
<div className="bg-surface-container-high px-4 py-2 rounded-lg flex items-center gap-2">
<div className="w-3 h-3 bg-forest-green rounded-full status-pulse"></div>
<span className="font-label-md text-label-md text-primary">SYSTEMS NOMINAL</span>
</div>
<div className="bg-surface-container-high px-4 py-2 rounded-lg flex items-center gap-2">
<span className="material-symbols-outlined text-brass-gold">schedule</span>
<span className="font-label-md text-label-md" id="live-clock">18:38:37 GMT+3</span>
</div>
</div>
</header>
{/*  Bento Grid Layout  */}
<div className="bento-grid">
{/*  Situational Map (Large Area)  */}
<div className="col-span-8 row-span-2 bg-surface-container-lowest card-outline rounded-xl overflow-hidden relative min-h-[500px]">
<div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md p-4 rounded-lg card-outline">
<h3 className="font-headline-md text-[16px] text-primary flex items-center gap-2 border-b-2 border-brass-gold pb-1 mb-3">
<span className="material-symbols-outlined">map</span> SITUATIONAL OVERLAY
                    </h3>
<div className="space-y-2">
<div className="flex items-center gap-2 text-sm"><span className="w-2 h-2 rounded-full bg-forest-green"></span> Patrol Units Active</div>
<div className="flex items-center gap-2 text-sm"><span className="w-2 h-2 rounded-full bg-eagle-red"></span> High Alert Zones</div>
<div className="flex items-center gap-2 text-sm"><span className="w-2 h-2 rounded-full bg-brass-gold"></span> Community Posts</div>
</div>
</div>
<div className="w-full h-full bg-surface-container">
<img alt="Abia Security Map" className="w-full h-full object-cover grayscale opacity-80" data-alt="A highly detailed topographical map of a metropolitan region in Abia state, Nigeria, rendered in a sophisticated dark-mode aesthetic with neon glowing vector lines indicating patrol routes and security zones. The map uses a palette of deep slate grays and forest greens, with golden icons representing government centers. The lighting is digital and high-contrast, suggesting a professional command and control software interface used by security officials." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJDmdO338DnGZkTVoF54OeSxI8Y8FGxAuCZ9pZgsWuo12DUVazC4RKJ3j5Fb9QYk9_QNhkOeTkYhiGzSND8LAEOhwYB_98NtjeM7_tECMuicwanZ5DXQ3pwkTI1OPCp0H7Jr5-dkii9ugdsz9SPlQrU5ZsD7iGAGELGSlAERl8jJxyZ92ZDvQUuPrVAo1tYmcgup5FkP2EUT1j-EJ86tfuaoNL6ITyEy_yX9pqM-zGGnkPLQczJtTzvtTZ2GeRpoOe8y4mRAKRAWg" />
</div>
<div className="absolute bottom-4 right-4 z-10 flex gap-2">
<button className="bg-white px-4 py-2 rounded shadow-sm text-sm font-semibold hover:bg-surface-container transition-all">ZOOM IN</button>
<button className="bg-white px-4 py-2 rounded shadow-sm text-sm font-semibold hover:bg-surface-container transition-all">EXPORT DATA</button>
</div>
</div>
{/*  Response Stats  */}
<div className="col-span-4 bg-primary text-state-white p-6 rounded-xl relative overflow-hidden flex flex-col justify-between">

<div className="relative z-10">
<h3 className="font-headline-md text-headline-md mb-4 flex items-center gap-2">
<span className="material-symbols-outlined">emergency</span>
                        RAPID RESPONSE
                    </h3>
<div className="space-y-6">
<div>
<div className="text-caption uppercase tracking-widest opacity-80 mb-1">Avg Response Time</div>
<div className="text-display-lg font-bold">4.2<span className="text-headline-md font-normal ml-1">mins</span></div>
<div className="w-full bg-white/20 h-1 rounded mt-2">
<div className="bg-brass-gold h-full w-[85%]"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-caption opacity-80">Incidents Today</div>
<div className="text-headline-md font-bold">124</div>
</div>
<div>
<div className="text-caption opacity-80">Success Rate</div>
<div className="text-headline-md font-bold text-on-primary-container">98.2%</div>
</div>
</div>
</div>
</div>
<button className="relative z-10 mt-8 w-full bg-brass-gold text-primary font-bold py-3 rounded uppercase text-sm tracking-widest hover:brightness-110 transition-all">
                    Full Operations Log
                </button>
</div>
{/*  Reporting Channels  */}
<div className="col-span-4 bg-surface-container-low card-outline p-6 rounded-xl brass-accent">
<h3 className="font-headline-md text-[18px] text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined">campaign</span> PUBLIC REPORTING
                </h3>
<div className="space-y-3">
<div className="p-3 bg-surface-container-lowest rounded-lg card-outline flex items-center justify-between group cursor-pointer hover:border-forest-green transition-colors">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green">call</span>
<div>
<div className="font-semibold text-sm">Emergency Dispatch</div>
<div className="text-xs text-on-surface-variant">Dial 112 / 911</div>
</div>
</div>
<span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
</div>
<div className="p-3 bg-surface-container-lowest rounded-lg card-outline flex items-center justify-between group cursor-pointer hover:border-forest-green transition-colors">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green">chat_bubble</span>
<div>
<div className="font-semibold text-sm">Abia Alert App</div>
<div className="text-xs text-on-surface-variant">Real-time GPS Reporting</div>
</div>
</div>
<span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
</div>
<div className="p-3 bg-surface-container-lowest rounded-lg card-outline flex items-center justify-between group cursor-pointer hover:border-forest-green transition-colors">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green">shield</span>
<div>
<div className="font-semibold text-sm">Whistleblower Portal</div>
<div className="text-xs text-on-surface-variant">Secure Anonymous Reports</div>
</div>
</div>
<span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
</div>
</div>
</div>
{/*  Intelligence Feed (Middle Column)  */}
<div className="col-span-6 bg-surface-container-lowest card-outline p-6 rounded-xl">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-[18px] text-primary flex items-center gap-2">
<span className="material-symbols-outlined">hub</span> INTELLIGENCE FEED
                    </h3>
<span className="text-caption bg-surface-container-high px-2 py-1 rounded">LIVE UPDATES</span>
</div>
<div className="space-y-6 overflow-y-auto max-h-[300px] pr-4">
<div className="flex gap-4 pb-4 border-b border-outline-variant">
<div className="shrink-0 w-12 h-12 bg-surface-container rounded flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green">traffic</span>
</div>
<div>
<div className="flex justify-between items-start">
<span className="font-semibold text-sm">Traffic Command Center</span>
<span className="text-caption text-on-surface-variant">2 mins ago</span>
</div>
<p className="text-sm text-on-surface-variant mt-1 leading-relaxed">Smart grid deployment successful in Umuahia North. Traffic congestion reduced by 14% on Tower Road.</p>
</div>
</div>
<div className="flex gap-4 pb-4 border-b border-outline-variant">
<div className="shrink-0 w-12 h-12 bg-surface-container rounded flex items-center justify-center">
<span className="material-symbols-outlined text-eagle-red">warning</span>
</div>
<div>
<div className="flex justify-between items-start">
<span className="font-semibold text-sm">Weather Intelligence</span>
<span className="text-caption text-on-surface-variant">15 mins ago</span>
</div>
<p className="text-sm text-on-surface-variant mt-1 leading-relaxed">Flash flood warning issued for Aba South industrial areas. Emergency response teams mobilized to zone B4.</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 w-12 h-12 bg-surface-container rounded flex items-center justify-center">
<span className="material-symbols-outlined text-brass-gold">person_check</span>
</div>
<div>
<div className="flex justify-between items-start">
<span className="font-semibold text-sm">Community Outreach</span>
<span className="text-caption text-on-surface-variant">1 hour ago</span>
</div>
<p className="text-sm text-on-surface-variant mt-1 leading-relaxed">Successful town hall safety briefing completed in Bende LGA. 45 community leaders briefed on security protocols.</p>
</div>
</div>
</div>
</div>
{/*  Small Metric Cards  */}
<div className="col-span-3 bg-surface-container-low card-outline p-6 rounded-xl flex flex-col justify-center">
<div className="text-on-surface-variant text-sm font-medium mb-1">Active Patrol Units</div>
<div className="text-display-lg text-primary font-bold">1,482</div>
<div className="text-caption text-forest-green flex items-center gap-1 mt-2">
<span className="material-symbols-outlined text-sm">trending_up</span> +5% from yesterday
                </div>
</div>
<div className="col-span-3 bg-surface-container-low card-outline p-6 rounded-xl flex flex-col justify-center">
<div className="text-on-surface-variant text-sm font-medium mb-1">Public Safety Rating</div>
<div className="text-display-lg text-brass-gold font-bold">A+</div>
<div className="text-caption text-on-surface-variant mt-2">Based on citizen surveys</div>
</div>
</div>
{/*  Call to Action Section  */}
<section className="mt-12 bg-surface-container-highest p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8">
<div className="max-w-xl">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">Invest in a Safer Abia</h2>
<p className="text-body-md text-on-surface-variant">Security is the bedrock of economic prosperity. Join our public-private partnership initiatives to enhance the state's technical surveillance infrastructure.</p>
</div>
<div className="flex gap-4">
<button className="bg-forest-green text-state-white px-8 py-3 rounded font-bold hover:brightness-110 transition-all">Support Projects</button>
<button className="border-2 border-brass-gold text-primary px-8 py-3 rounded font-bold hover:bg-brass-gold/10 transition-all">View Annual Report</button>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="relative bottom-0 w-full bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant dark:border-outline">
<div className="flex flex-col md:flex-row justify-between items-center py-gutter px-64 max-w-max-width mx-auto">
<div className="font-headline-md text-headline-md text-primary mb-4 md:mb-0">ABIA ONE</div>
<div className="flex gap-8 mb-4 md:mb-0">
<a className="text-caption text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors" href="#">Institutional Links</a>
<a className="text-caption text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors" href="#">Transparency Info</a>
<a className="text-caption text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="text-caption text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors" href="#">Contact Support</a>
</div>
<p className="text-caption text-on-surface-variant dark:text-surface-variant text-center md:text-right max-w-xs">
                © 2024 Abia State Government. All rights reserved. Built for the future of governance.
            </p>
</div>
</footer>


      </div>
    </>
  );
}
