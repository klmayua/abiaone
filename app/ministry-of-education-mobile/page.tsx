export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { font-family: 'Hanken Grotesk', sans-serif; background-color: #f6fbf3; color: #181d19; }\n        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }\n        .bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px; }\n        .glass-card { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(12px); border: 1px solid #E2E8F0; }\n        .data-bar { transition: width 1s ease-in-out; }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="bg-background min-h-screen pb-24 md:pb-0">
        
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 border-b border-outline-variant bg-background h-16">
<div className="flex items-center justify-between px-margin-mobile h-full w-full max-w-max-width mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" data-icon="account_balance">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green tracking-tight">ABIA ONE</h1>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95" data-icon="search">search</button>
<button className="material-symbols-outlined text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95" data-icon="notifications">notifications</button>
<div className="w-8 h-8 rounded-full bg-forest-green/10 flex items-center justify-center border border-forest-green/20">
<span className="material-symbols-outlined text-forest-green text-[18px]" data-icon="person">person</span>
</div>
</div>
</div>
</header>
<main className="pt-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto pb-12">
{/*  Dashboard Header  */}
<section className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="font-label-md text-label-md text-secondary uppercase tracking-widest">MINISTRY OF EDUCATION</span>
<h2 className="font-headline-lg text-headline-lg text-on-background mt-1">Infrastructure &amp; Literacy Monitor</h2>
</div>
<div className="flex gap-2">
<button className="bg-surface-container-highest px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-outline-variant transition-colors">
<span className="material-symbols-outlined text-[18px]" data-icon="calendar_today">calendar_today</span>
                    LAST 30 DAYS
                </button>
<button className="bg-forest-green text-state-white px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 shadow-sm hover:opacity-90 active:scale-95 transition-all">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                    EXPORT REPORT
                </button>
</div>
</section>
{/*  Main Bento Grid  */}
<div className="bento-grid">
{/*  Hero Stat: Certification Progress  */}
<div className="col-span-12 lg:col-span-7 glass-card p-6 rounded-xl border border-outline-variant relative overflow-hidden group">
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="font-headline-md text-headline-md">Digital Literacy</h3>
<p className="text-on-surface-variant font-body-md">Certification progress in secondary schools</p>
</div>
<div className="text-right">
<span className="text-display-lg font-display-lg text-forest-green block leading-none">68.2%</span>
<span className="font-label-md text-label-md text-forest-green flex items-center justify-end gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="trending_up">trending_up</span> +4.5%
                            </span>
</div>
</div>
<div className="space-y-4">
<div className="bg-surface-container-high rounded-full h-4 w-full overflow-hidden">
<div className="bg-forest-green h-full rounded-full data-bar" style={{"width":"68%"}}></div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="p-3 bg-surface rounded-lg border border-outline-variant/30">
<span className="block font-label-md text-label-md text-on-surface-variant">Umuahia North</span>
<span className="block font-headline-md text-headline-md text-forest-green">82%</span>
</div>
<div className="p-3 bg-surface rounded-lg border border-outline-variant/30">
<span className="block font-label-md text-label-md text-on-surface-variant">Aba South</span>
<span className="block font-headline-md text-headline-md text-forest-green">54%</span>
</div>
<div className="p-3 bg-surface rounded-lg border border-outline-variant/30">
<span className="block font-label-md text-label-md text-on-surface-variant">Ohafia</span>
<span className="block font-headline-md text-headline-md text-forest-green">61%</span>
</div>
</div>
</div>
</div>
{/*  Decorative element  */}
<div className="absolute -right-16 -bottom-16 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[240px] text-forest-green" data-icon="school" style={{"fontVariationSettings":"'FILL' 1"}}>school</span>
</div>
</div>
{/*  AI Academy Broadband Status  */}
<div className="col-span-12 lg:col-span-5 glass-card p-6 rounded-xl border border-outline-variant">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md">AI Academy Hubs</h3>
<span className="material-symbols-outlined text-brass-gold" data-icon="wifi_tethering">wifi_tethering</span>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-surface rounded-lg border border-outline-variant/50">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-forest-green animate-pulse"></div>
<div>
<p className="font-body-md font-semibold">Umuahia Hub A</p>
<p className="text-caption font-caption text-on-surface-variant">1.2 Gbps Broadband</p>
</div>
</div>
<span className="bg-primary-fixed text-on-primary-fixed text-caption font-caption px-2 py-1 rounded">ACTIVE</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface rounded-lg border border-outline-variant/50">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-forest-green animate-pulse"></div>
<div>
<p className="font-body-md font-semibold">Aba Innovation Lab</p>
<p className="text-caption font-caption text-on-surface-variant">800 Mbps Fiber</p>
</div>
</div>
<span className="bg-primary-fixed text-on-primary-fixed text-caption font-caption px-2 py-1 rounded">ACTIVE</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface rounded-lg border border-outline-variant/50 opacity-60">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-secondary"></div>
<div>
<p className="font-body-md font-semibold">Ohafia Tech Center</p>
<p className="text-caption font-caption text-on-surface-variant">System Upgrade</p>
</div>
</div>
<span className="bg-secondary-container text-on-secondary-container text-caption font-caption px-2 py-1 rounded">MAINTENANCE</span>
</div>
</div>
<button className="w-full mt-6 py-2 border border-outline text-on-surface-variant rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-colors">
                    VIEW NETWORK MAP
                </button>
</div>
{/*  Infrastructure Completion Rate Map/Visual  */}
<div className="col-span-12 lg:col-span-8 bg-on-background text-state-white rounded-xl overflow-hidden relative min-h-[400px]">
<div className="absolute inset-0 opacity-40">
<div className="w-full h-full grayscale opacity-30" data-alt="A detailed aerial view of a modern secondary school campus in a lush tropical landscape with structured buildings and paved paths, shown through a data-driven UI overlay with glowing green and gold geometric markers representing infrastructure progress and completion data in a sleek corporate modern style." style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3MT118WQM1EgG9lvQ2Sb7Jq49JPgWbPGCLrPIasfoMT3ZcgV5DdY-hYRyc4JQfyyE7a47as9kW7Ug2-moZ7aRyObP6xoAeKE7R9XdpgyFauzVBU6PHEOcBmOA5EHUC20cxxNoxKYmy7AGNIqyWpmqGdhQQClJqeghzB-8285dkagEl4Q-YF5T_ctomsHtGxINCMmg2QU7dtjyusSxMuYN16ZV9cYbFsufKhLc7pj_ukvscDJMXwbfrOcz-CI3ywAvYgER1sznxB4')","backgroundSize":"cover","backgroundPosition":"center"}}></div>

</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div>
<h3 className="font-headline-lg text-headline-lg text-primary-fixed">Infrastructure Upgrade</h3>
<p className="text-surface-variant font-body-lg max-w-md">Real-time completion tracking across 17 Local Government Areas (LGAs).</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div>
<span className="block text-primary-fixed-dim font-display-lg leading-tight">42</span>
<span className="text-caption font-caption text-outline-variant uppercase">Labs Completed</span>
</div>
<div>
<span className="block text-primary-fixed-dim font-display-lg leading-tight">12</span>
<span className="text-caption font-caption text-outline-variant uppercase">Under Renovation</span>
</div>
<div>
<span className="block text-secondary-fixed-dim font-display-lg leading-tight">88%</span>
<span className="text-caption font-caption text-outline-variant uppercase">Overall Goal</span>
</div>
<div className="flex items-end">
<button className="bg-brass-gold text-on-secondary-fixed px-6 py-3 rounded-lg font-label-md text-label-md hover:scale-105 transition-transform flex items-center gap-2">
                                VIEW DETAILS
                                <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
{/*  Maintenance Feed / Activity Log  */}
<div className="col-span-12 lg:col-span-4 glass-card p-6 rounded-xl border border-outline-variant">
<h3 className="font-headline-md text-headline-md mb-4">Activity Log</h3>
<div className="space-y-6">
<div className="relative pl-6 border-l-2 border-forest-green/20">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-forest-green border-4 border-background"></div>
<p className="text-caption font-caption text-secondary">TODAY, 10:24 AM</p>
<p className="font-body-md font-semibold">Broadband Active: Aba Hub</p>
<p className="text-caption font-caption text-on-surface-variant">Fiber connection verified at 940 Mbps stable.</p>
</div>
<div className="relative pl-6 border-l-2 border-forest-green/20">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brass-gold border-4 border-background"></div>
<p className="text-caption font-caption text-secondary">TODAY, 08:15 AM</p>
<p className="font-body-md font-semibold">Certification Update</p>
<p className="text-caption font-caption text-on-surface-variant">140 new students certified in Umuahia North.</p>
</div>
<div className="relative pl-6 border-l-2 border-forest-green/20">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-eagle-red border-4 border-background"></div>
<p className="text-caption font-caption text-secondary">YESTERDAY</p>
<p className="font-body-md font-semibold">Incident: Isuikwuato</p>
<p className="text-caption font-caption text-on-surface-variant">Power surge reported at ICT center. Maintenance dispatched.</p>
</div>
<div className="relative pl-6 border-l-2 border-forest-green/20">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-gray border-4 border-background"></div>
<p className="text-caption font-caption text-secondary">2 DAYS AGO</p>
<p className="font-body-md font-semibold">Project Started</p>
<p className="text-caption font-caption text-on-surface-variant">Roofing phase begun at Item High School.</p>
</div>
</div>
</div>
</div>
</main>
{/*  Bottom Navigation Shell (Mobile)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 rounded-t-full border-t border-outline-variant bg-surface-container-lowest shadow-sm h-20">
<div className="flex justify-around items-center h-full px-base pb-safe">
<button className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant active:scale-90 transition-all duration-200">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant active:scale-90 transition-all duration-200">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
<span className="font-label-md text-label-md">Hub</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant active:scale-90 transition-all duration-200">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-label-md">Profile</span>
</button>
</div>
</nav>
{/*  Sidebar Navigation (Desktop)  */}
<aside className="hidden md:flex fixed left-0 top-16 bottom-0 w-24 flex-col items-center py-8 bg-surface-container-low border-r border-outline-variant space-y-8 z-40">
<div className="p-3 bg-secondary-container text-on-secondary-container rounded-lg cursor-pointer transition-all hover:scale-105">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
</div>
<div className="p-3 text-on-surface-variant rounded-lg cursor-pointer hover:bg-surface-variant transition-all">
<span className="material-symbols-outlined" data-icon="cast_for_education">cast_for_education</span>
</div>
<div className="p-3 text-on-surface-variant rounded-lg cursor-pointer hover:bg-surface-variant transition-all">
<span className="material-symbols-outlined" data-icon="router">router</span>
</div>
<div className="p-3 text-on-surface-variant rounded-lg cursor-pointer hover:bg-surface-variant transition-all">
<span className="material-symbols-outlined" data-icon="construction">construction</span>
</div>
<div className="p-3 text-on-surface-variant rounded-lg cursor-pointer hover:bg-surface-variant transition-all">
<span className="material-symbols-outlined" data-icon="bar_chart">bar_chart</span>
</div>
<div className="mt-auto p-3 text-on-surface-variant rounded-lg cursor-pointer hover:bg-surface-variant transition-all">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</div>
</aside>


      </div>
    </>
  );
}
