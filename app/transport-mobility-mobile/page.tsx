export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .card-header-accent {\n            width: 40px;\n            height: 3px;\n            background-color: #D4AF37;\n            margin-bottom: 12px;\n        }\n        ::-webkit-scrollbar {\n            width: 6px;\n        }\n        ::-webkit-scrollbar-track {\n            background: #f1f5ee;\n        }\n        ::-webkit-scrollbar-thumb {\n            background: #006838;\n            border-radius: 10px;\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md min-h-screen">
        
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-outline-variant">
<div className="flex items-center justify-between px-margin-mobile md:px-margin-desktop h-16 w-full max-w-max-width mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" style={{"fontSize":"28px"}}>account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green tracking-tight">ABIA ONE</h1>
</div>
<div className="flex items-center gap-6">
<nav className="hidden md:flex gap-8">
<a className="text-forest-green font-label-md text-label-md hover:opacity-80 transition-opacity" href="#">Command</a>
<a className="text-on-surface-variant font-label-md text-label-md hover:opacity-80 transition-opacity" href="#">Operations</a>
<a className="text-on-surface-variant font-label-md text-label-md hover:opacity-80 transition-opacity" href="#">Analytics</a>
</nav>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant hover:opacity-80 transition-opacity">notifications</button>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-forest-green">person</span>
</div>
</div>
</div>
</div>
</header>
<main className="pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
{/*  Dashboard Hero Section  */}
<div className="mb-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="font-label-md text-label-md text-brass-gold uppercase tracking-widest">System Oversight</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">Mobility &amp; Maintenance Hub</h2>
</div>
<div className="flex gap-3">
<button className="bg-forest-green text-on-primary px-6 py-2.5 rounded-lg font-label-md text-label-md flex items-center gap-2 active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[18px]">add</span>
                        New Dispatch
                    </button>
</div>
</div>
</div>
<div className="bento-grid">
{/*  Map Visualization (Bento Main)  */}
<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden relative min-h-[500px]">
<div className="absolute top-4 left-4 z-10 bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-lg border border-outline-variant shadow-sm">
<div className="card-header-accent"></div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Live Road Map</h3>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-label-md">
<span className="w-3 h-3 rounded-full bg-error"></span>
<span>Critical Intervention (4)</span>
</div>
<div className="flex items-center gap-2 text-label-md">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<span>Routine Maintenance (12)</span>
</div>
</div>
</div>
{/*  Mock Map Background  */}
<div className="w-full h-full bg-surface-container-high flex items-center justify-center relative">
<img alt="Map showing road maintenance status across the city" className="w-full h-full object-cover opacity-80" data-location="Umuahia, Nigeria" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs5pfc4h2icXrA4aoFIBgts93Iv5x8MFB84G132i2ex5uBVJ41IugAbRJI05xBk4i0iEkgauPLBVV8ap1T_ZLUgYXGpD0rn3d3v7JNqCdZ_HtRnFp52UGkLTxLaWOhtYtDklL0kYmOJ_f0rI93QtBN6w52CKnVUL7J0p2a3iN6Rel5JshnUeDOcgWqenqsSGJcdoJXGnwK31lFEEDqTKScuZBHLHN11UzXzidGdiGPnKEfoUQrLztPcY7Pw60vcCcEa3d4BtZ3Wrw"/>
{/*  Dynamic Markers  */}
<div className="absolute top-1/2 left-1/3 group">
<div className="w-8 h-8 bg-error rounded-full flex items-center justify-center animate-pulse border-4 border-white shadow-lg cursor-pointer">
<span className="material-symbols-outlined text-white text-[16px]" style={{"fontVariationSettings":"'FILL' 1"}}>warning</span>
</div>
<div className="hidden group-hover:block absolute top-10 left-0 bg-on-background text-white p-2 rounded text-caption whitespace-nowrap z-20">
                            Pothole Cluster: Bende Rd.
                        </div>
</div>
<div className="absolute top-1/4 right-1/4 group">
<div className="w-8 h-8 bg-forest-green rounded-full flex items-center justify-center border-4 border-white shadow-lg cursor-pointer">
<span className="material-symbols-outlined text-white text-[16px]" style={{"fontVariationSettings":"'FILL' 1"}}>engineering</span>
</div>
</div>
</div>
<div className="absolute bottom-4 right-4 flex gap-2">
<button className="bg-surface-container-lowest p-2 rounded-md border border-outline-variant hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined">my_location</span>
</button>
<button className="bg-surface-container-lowest p-2 rounded-md border border-outline-variant hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined">layers</span>
</button>
</div>
</div>
{/*  Transit Revenue Stats (Bento Side Top)  */}
<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col justify-between overflow-hidden">
<div>
<div className="card-header-accent"></div>
<div className="flex justify-between items-start">
<h3 className="font-headline-md text-headline-md text-on-surface">Transit Revenue</h3>
<span className="font-label-md text-label-md text-forest-green bg-primary-fixed-dim px-2 py-0.5 rounded">+12.4%</span>
</div>
<p className="text-display-lg font-display-lg text-on-surface mt-4">₦1.42M</p>
<p className="font-caption text-caption text-on-surface-variant">Daily digital card collection</p>
</div>
<div className="mt-8 h-24 w-full flex items-end gap-1">
<div className="flex-1 bg-forest-green/20 rounded-t h-[40%] transition-all hover:bg-forest-green/40"></div>
<div className="flex-1 bg-forest-green/20 rounded-t h-[60%] transition-all hover:bg-forest-green/40"></div>
<div className="flex-1 bg-forest-green/20 rounded-t h-[45%] transition-all hover:bg-forest-green/40"></div>
<div className="flex-1 bg-forest-green/20 rounded-t h-[80%] transition-all hover:bg-forest-green/40"></div>
<div className="flex-1 bg-forest-green/20 rounded-t h-[90%] transition-all hover:bg-forest-green/40"></div>
<div className="flex-1 bg-forest-green/20 rounded-t h-[70%] transition-all hover:bg-forest-green/40"></div>
<div className="flex-1 bg-forest-green rounded-t h-[100%] shadow-[0_-4px_12px_rgba(0,104,56,0.3)]"></div>
</div>
</div>
{/*  Active Tickets (Bento Side Bottom)  */}
<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
<div className="card-header-accent"></div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Maintenance Tickets</h3>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-surface border border-outline-variant rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-error-container flex items-center justify-center">
<span className="material-symbols-outlined text-eagle-red">construction</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface leading-tight">Aba-Owerri Potholes</p>
<p className="font-caption text-caption text-on-surface-variant">Critical • 2h ago</p>
</div>
</div>
<span className="material-symbols-outlined text-outline">chevron_right</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface border border-outline-variant rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-secondary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-secondary-container">light_group</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface leading-tight">Street Light Maint.</p>
<p className="font-caption text-caption text-on-surface-variant">Routine • 5h ago</p>
</div>
</div>
<span className="material-symbols-outlined text-outline">chevron_right</span>
</div>
<div className="flex items-center justify-between p-3 bg-surface border border-outline-variant rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green">check_circle</span>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface leading-tight">Drainage Clearing</p>
<p className="font-caption text-caption text-on-surface-variant text-forest-green">Completed • 12m ago</p>
</div>
</div>
<span className="material-symbols-outlined text-outline">chevron_right</span>
</div>
</div>
</div>
{/*  Transit Usage Heatmap (Wide Row)  */}
<div className="col-span-12 lg:col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl p-8 relative overflow-hidden">
<div className="flex flex-col md:flex-row justify-between items-start gap-8">
<div className="max-w-md">
<div className="card-header-accent"></div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Public Transit Volume</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Real-time monitoring of passenger density across bus and rail corridors to optimize dispatch frequency.</p>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-surface rounded-lg border border-outline-variant">
<span className="font-caption text-caption text-outline uppercase tracking-wider">Active Buses</span>
<p className="text-headline-md font-headline-md text-on-surface">142 Units</p>
</div>
<div className="p-4 bg-surface rounded-lg border border-outline-variant">
<span className="font-caption text-caption text-outline uppercase tracking-wider">Commuters Today</span>
<p className="text-headline-md font-headline-md text-on-surface">24.8k</p>
</div>
</div>
</div>
<div className="flex-1 w-full bg-surface-container border border-outline-variant rounded-xl p-4 min-h-[300px] flex flex-col">
<div className="flex justify-between items-center mb-6">
<span className="font-label-md text-label-md">Rush Hour Analysis (06:00 - 10:00)</span>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-forest-green"></div>
<div className="w-2 h-2 rounded-full bg-brass-gold"></div>
<div className="w-2 h-2 rounded-full bg-eagle-red"></div>
</div>
</div>
<div className="flex-1 relative">
{/*  Artistic Visual Representation of data  */}
<div className="absolute inset-0 opacity-10 pointer-events-none">

</div>
<div className="space-y-6 relative z-10">
<div className="space-y-2">
<div className="flex justify-between text-caption font-caption text-on-surface-variant">
<span>Corridor A: Umuahia Central</span>
<span className="font-bold text-eagle-red">92% Capacity</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-eagle-red h-full rounded-full transition-all duration-1000" style={{"width":"92%"}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-caption font-caption text-on-surface-variant">
<span>Corridor B: Aba Integrated Terminal</span>
<span className="font-bold text-brass-gold">64% Capacity</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full rounded-full transition-all duration-1000" style={{"width":"64%"}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-caption font-caption text-on-surface-variant">
<span>Corridor C: Ohafia Rural Link</span>
<span className="font-bold text-forest-green">28% Capacity</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
<div className="bg-forest-green h-full rounded-full transition-all duration-1000" style={{"width":"28%"}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Operational Insights (Small)  */}
<div className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
<div className="card-header-accent"></div>
<h4 className="font-label-md text-label-md text-on-surface mb-2">Team Readiness</h4>
<div className="flex items-center gap-4 py-4 border-b border-outline-variant">
<div className="relative">
<svg className="w-16 h-16 transform -rotate-90">
<circle className="text-surface-container-high" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="6"></circle>
<circle className="text-forest-green" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="175" strokeDashoffset="35" strokeWidth="6"></circle>
</svg>
<span className="absolute inset-0 flex items-center justify-center font-label-md text-label-md">80%</span>
</div>
<div>
<p className="font-headline-md text-headline-md leading-none">12/15</p>
<p className="text-caption font-caption text-on-surface-variant">Teams on standby</p>
</div>
</div>
<div className="pt-4 flex justify-between items-center">
<span className="text-caption font-caption">Avg. Response Time</span>
<span className="font-label-md text-label-md text-forest-green">14.2 Min</span>
</div>
</div>
{/*  Quick Actions Grid (Cards)  */}
<div className="col-span-12 md:col-span-8 bg-forest-green text-on-primary rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
<div className="relative z-10 flex-1">
<h3 className="font-headline-md text-headline-md mb-2">Unified Mobility Command</h3>
<p className="font-body-md text-body-md opacity-90 mb-6">Dispatch resources, verify revenue settlements, and manage cross-platform citizen reporting from one sovereign portal.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-state-white text-forest-green px-4 py-2 rounded font-label-md text-label-md hover:bg-surface-bright transition-colors active:scale-95 transition-transform">Audit Revenue</button>
<button className="border border-state-white/40 px-4 py-2 rounded font-label-md text-label-md hover:bg-white/10 transition-colors active:scale-95 transition-transform">Fleet Logistics</button>
</div>
</div>
<div className="w-full md:w-64 h-40 bg-on-primary-container/20 rounded-xl border border-white/10 flex items-center justify-center relative group">

<span className="material-symbols-outlined text-[48px] text-primary-fixed group-hover:scale-110 transition-transform duration-500">hub</span>
</div>
</div>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-full shadow-sm border-t border-outline-variant bg-surface-container-lowest">
<div className="flex justify-around items-center h-20 w-full px-base pb-safe max-w-max-width mx-auto">
<div className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90 transition-transform duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
<span className="font-label-md text-label-md">Hub</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-label-md">Profile</span>
</div>
</div>
</nav>
{/*  Floating Action Button (Contextual for Home/Command)  */}
<button className="fixed right-6 bottom-24 bg-brass-gold text-on-secondary w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all z-40">
<span className="material-symbols-outlined" style={{"fontSize":"32px"}}>support_agent</span>
</button>


      </div>
    </>
  );
}
