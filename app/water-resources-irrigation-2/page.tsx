export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .active-nav-item {\n            transform: scale(0.95);\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(8px);\n            border: 1px solid #E2E8F0;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  Sidebar Navigation  */}
<aside className="flex flex-col fixed left-0 top-0 h-full py-6 px-4 space-y-2 bg-surface-container-low border-r border-outline-variant w-64 z-50">
<div className="mb-8 px-2">
<h1 className="font-headline-sm text-headline-sm font-bold text-forest-green">ABIA ONE</h1>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Command Center</p>
<p className="font-caption text-caption text-outline">State Operating System</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-on-primary-container bg-primary-container rounded-lg active-nav-item transition-all" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-label-md">Analytics</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="hail">hail</span>
<span className="font-label-md">Citizen Requests</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-md">Revenue Tracking</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="account_tree">account_tree</span>
<span className="font-label-md">Project Monitoring</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="badge">badge</span>
<span className="font-label-md">Personnel</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="security">security</span>
<span className="font-label-md">Security</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-md">Settings</span>
</a>
</nav>
<button className="mt-4 w-full bg-forest-green text-state-white py-3 rounded-lg font-label-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
            Export Report
        </button>
<div className="pt-6 border-t border-outline-variant mt-auto space-y-1">
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-forest-green transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="font-label-md">Support</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-eagle-red transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-label-md">Sign Out</span>
</a>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="ml-64 min-h-screen p-8 max-w-[1440px]">
{/*  Top App Bar  */}
<header className="flex justify-between items-center mb-10">
<div className="space-y-1">
<h2 className="font-headline-lg text-headline-lg text-forest-green tracking-tight">Ministry of Water Resources &amp; Irrigation</h2>
<nav className="flex items-center gap-4">
<span className="text-on-surface-variant font-label-md">Governance</span>
<span className="material-symbols-outlined text-outline" data-icon="chevron_right" style={{"fontSize":"16px"}}>chevron_right</span>
<span className="text-on-surface-variant font-label-md">Infrastructure</span>
<span className="material-symbols-outlined text-outline" data-icon="chevron_right" style={{"fontSize":"16px"}}>chevron_right</span>
<span className="text-forest-green font-label-md font-bold">State Water Security Dashboard</span>
</nav>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green" data-icon="language">language</span>
<div className="relative">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green" data-icon="notifications">notifications</span>
<div className="absolute -top-1 -right-1 w-2 h-2 bg-eagle-red rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-3 border-l border-outline-variant pl-6">
<div className="text-right">
<p className="font-label-md text-on-surface font-bold">Hon. Commissioner</p>
<p className="font-caption text-on-surface-variant">Admin Access</p>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant">
<img alt="Abia State Seal" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQHAweaEeSyusX9GPaLuRCAIAObk11TE1OsuFeredjm7Q9kG3QPCMUPVR4gaBJmX6Wi6FpurWcFD7FFqFXY8urduS73sdCDCFPsVG0pfRkcpuWffEIxfo3LxY3v0yVYHgzEaT1pNp878OPvCBNgbc8E-89hzjXJ2yT5kLOp-yNPUtmCTxlCOqZLyvtFm54Bqo5vUiL2J-HhInDaEnVUEYQ2QA9eTaC5HkgodcgbBqXpqUnJLola8AM65U1de7gR27i-5ZTYlmy6PM" />
</div>
</div>
</div>
</header>
{/*  Dynamic Hero Stats  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
<div className="glass-card p-6 rounded-xl border border-outline-variant shadow-sm flex items-center justify-between">
<div>
<p className="font-label-md text-on-surface-variant uppercase mb-1">Statewide Supply</p>
<h3 className="font-headline-md text-headline-md text-forest-green">4.2M</h3>
<p className="font-caption text-on-surface-variant">Gallons per Day</p>
</div>
<div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center text-forest-green">
<span className="material-symbols-outlined" data-icon="water_drop">water_drop</span>
</div>
</div>
<div className="glass-card p-6 rounded-xl border border-outline-variant shadow-sm flex items-center justify-between">
<div>
<p className="font-label-md text-on-surface-variant uppercase mb-1">Rehabilitation</p>
<h3 className="font-headline-md text-headline-md text-forest-green">78%</h3>
<p className="font-caption text-on-surface-variant">Borehole Progress</p>
</div>
<div className="w-12 h-12 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" data-icon="build">build</span>
</div>
</div>
<div className="glass-card p-6 rounded-xl border border-outline-variant shadow-sm flex items-center justify-between">
<div>
<p className="font-label-md text-on-surface-variant uppercase mb-1">Irrigation Hubs</p>
<h3 className="font-headline-md text-headline-md text-forest-green">14</h3>
<p className="font-caption text-on-surface-variant">Active Agricultural Zones</p>
</div>
<div className="w-12 h-12 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined" data-icon="agriculture">agriculture</span>
</div>
</div>
<div className="glass-card p-6 rounded-xl border border-outline-variant shadow-sm flex items-center justify-between">
<div>
<p className="font-label-md text-on-surface-variant uppercase mb-1">Network Health</p>
<h3 className="font-headline-md text-headline-md text-eagle-red">Optimal</h3>
<p className="font-caption text-on-surface-variant">System Reliability Index</p>
</div>
<div className="w-12 h-12 rounded-lg bg-error-container flex items-center justify-center text-eagle-red">
<span className="material-symbols-outlined" data-icon="shield_check">shield_lock</span>
</div>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="bento-grid">
{/*  Irrigation Map: Primary Feature  */}
<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-sm relative min-h-[500px]">
<div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur p-4 rounded-lg border border-outline-variant">
<h4 className="font-headline-sm text-headline-sm text-forest-green border-b-2 border-brass-gold pb-2 inline-block">Irrigation Map</h4>
<p className="font-body-md text-on-surface-variant mt-2">Agro-Economic Coverage Intensity</p>
<div className="mt-4 flex flex-col gap-2">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-forest-green"></span>
<span className="font-caption">High Intensity Irrigation</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-brass-gold"></span>
<span className="font-caption">Proposed Schemes</span>
</div>
</div>
</div>
<div className="w-full h-full bg-surface-container relative">
{/*  Map Placeholder with data-location  */}
<img className="w-full h-full object-cover opacity-80" data-alt="A detailed topographic map of Abia State, Nigeria, displaying intricate river systems and newly established irrigation infrastructure in vibrant forest green. The map features modern data overlays with glowing technical indicators showing water flow and agricultural density. The lighting is bright and clear, reflecting a sophisticated administrative dashboard aesthetic with high contrast and professional cartography." data-location="Umuahia, Nigeria" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs7pUrgsXnXmzhnhIuEVZUWx0BFxx6fb0JQP3VIx_UEEkXmkQ-4DyKE8x6nUrqyvxPhwtUlUJFa-vRAzY-lsZxG79OlcNkMuZ3yCN6vaHB2GqafccjViRAvvAsqqwrZbn393ezPPwxb4mcESAfbIfi3ntg8MRLdDEcg0zvKzEXwrxLvApsePjIpSDmRcFgicSxwN39-MDJ10hEWVSBSBlm-oQlKcTi8-tr3E_k2Di2D_0ZAfYXCbpFhb-2utk2pcsrnlOkhJUYRo0" />
{/*  Animated Overlay Mock  */}
<div className="absolute inset-0 pointer-events-none opacity-40">

</div>
</div>
</div>
{/*  Urban Water Utility Monitoring  */}
<div className="col-span-12 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col">
<div className="flex items-center justify-between mb-6">
<h4 className="font-headline-sm text-headline-sm text-forest-green">Urban Utilities</h4>
<span className="material-symbols-outlined text-outline" data-icon="sensors">sensors</span>
</div>
<div className="space-y-6 flex-1 overflow-y-auto">
{/*  Utility Card 1  */}
<div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant">
<div className="flex justify-between items-start mb-2">
<span className="font-label-md text-on-surface font-bold">Aba Metropolitan</span>
<span className="px-2 py-1 bg-primary-fixed text-forest-green text-[10px] rounded font-bold uppercase">Online</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full mb-3">
<div className="bg-forest-green h-full rounded-full w-[92%]"></div>
</div>
<div className="flex justify-between font-caption text-on-surface-variant">
<span>Capacity Usage: 92%</span>
<span>1.8M GPD</span>
</div>
</div>
{/*  Utility Card 2  */}
<div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant">
<div className="flex justify-between items-start mb-2">
<span className="font-label-md text-on-surface font-bold">Umuahia North</span>
<span className="px-2 py-1 bg-primary-fixed text-forest-green text-[10px] rounded font-bold uppercase">Online</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full mb-3">
<div className="bg-forest-green h-full rounded-full w-[74%]"></div>
</div>
<div className="flex justify-between font-caption text-on-surface-variant">
<span>Capacity Usage: 74%</span>
<span>1.2M GPD</span>
</div>
</div>
{/*  Utility Card 3  */}
<div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant">
<div className="flex justify-between items-start mb-2">
<span className="font-label-md text-on-surface font-bold">Ohafia Regional</span>
<span className="px-2 py-1 bg-secondary-fixed text-secondary text-[10px] rounded font-bold uppercase">Maintenance</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full mb-3">
<div className="bg-brass-gold h-full rounded-full w-[45%]"></div>
</div>
<div className="flex justify-between font-caption text-on-surface-variant">
<span>Capacity Usage: 45%</span>
<span>0.6M GPD</span>
</div>
</div>
</div>
<button className="w-full mt-6 py-2 border border-forest-green text-forest-green rounded-lg font-label-md hover:bg-forest-green hover:text-white transition-all">
                    View Technical Details
                </button>
</div>
{/*  Rural Water Schemes Monitoring  */}
<div className="col-span-12 lg:col-span-6 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-8">
<div>
<h4 className="font-headline-sm text-headline-sm text-forest-green">Rural Water Schemes</h4>
<p className="font-caption text-on-surface-variant">Last mile connectivity for rural communities</p>
</div>
<div className="flex gap-2">
<button className="p-2 border border-outline-variant rounded hover:bg-surface-container"><span className="material-symbols-outlined" data-icon="filter_list">filter_list</span></button>
<button className="p-2 border border-outline-variant rounded hover:bg-surface-container"><span className="material-symbols-outlined" data-icon="search">search</span></button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full border-collapse">
<thead>
<tr className="text-left border-b border-outline-variant">
<th className="pb-3 font-label-md text-on-surface-variant uppercase text-[12px]">LGA Area</th>
<th className="pb-3 font-label-md text-on-surface-variant uppercase text-[12px]">Scheme Type</th>
<th className="pb-3 font-label-md text-on-surface-variant uppercase text-[12px]">Status</th>
<th className="pb-3 font-label-md text-on-surface-variant uppercase text-[12px]">Efficiency</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">
<tr>
<td className="py-4 font-body-md font-bold">Bende South</td>
<td className="py-4 font-caption">Solar Borehole</td>
<td className="py-4"><span className="px-3 py-1 bg-primary-fixed text-forest-green rounded-full text-[10px] font-bold">OPERATIONAL</span></td>
<td className="py-4 font-label-md">98.1%</td>
</tr>
<tr>
<td className="py-4 font-body-md font-bold">Isuikwuato</td>
<td className="py-4 font-caption">Gravity Scheme</td>
<td className="py-4"><span className="px-3 py-1 bg-primary-fixed text-forest-green rounded-full text-[10px] font-bold">OPERATIONAL</span></td>
<td className="py-4 font-label-md">84.5%</td>
</tr>
<tr>
<td className="py-4 font-body-md font-bold">Ukwa West</td>
<td className="py-4 font-caption">Direct Extraction</td>
<td className="py-4"><span className="px-3 py-1 bg-error-container text-eagle-red rounded-full text-[10px] font-bold">OFFLINE</span></td>
<td className="py-4 font-label-md">-0.1%</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Rehabilitation Progress Graph  */}
<div className="col-span-12 lg:col-span-6 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm overflow-hidden flex flex-col">
<h4 className="font-headline-sm text-headline-sm text-forest-green mb-6">Borehole Rehabilitation Progress</h4>
<div className="flex-1 flex flex-col justify-end gap-2 h-64">
<div className="flex items-end justify-between gap-4 h-full px-4">
<div className="w-12 bg-outline-variant rounded-t hover:bg-forest-green transition-colors relative group" style={{"height":"30%"}}>
<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-state-white px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">14</span>
</div>
<div className="w-12 bg-outline-variant rounded-t hover:bg-forest-green transition-colors relative group" style={{"height":"45%"}}>
<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-state-white px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">22</span>
</div>
<div className="w-12 bg-outline-variant rounded-t hover:bg-forest-green transition-colors relative group" style={{"height":"60%"}}>
<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-state-white px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">29</span>
</div>
<div className="w-12 bg-outline-variant rounded-t hover:bg-forest-green transition-colors relative group" style={{"height":"55%"}}>
<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-state-white px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">26</span>
</div>
<div className="w-12 bg-forest-green rounded-t relative group" style={{"height":"85%"}}>
<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-state-white px-2 py-1 rounded text-[10px] opacity-100 transition-opacity">42</span>
</div>
</div>
<div className="flex justify-between px-4 font-caption text-on-surface-variant pt-2 border-t border-outline-variant">
<span>JAN</span>
<span>FEB</span>
<span>MAR</span>
<span>APR</span>
<span>MAY (Active)</span>
</div>
</div>
<div className="mt-6 flex items-center justify-between">
<div>
<span className="text-on-surface-variant font-caption">Current Monthly Target</span>
<p className="font-headline-md text-headline-md text-forest-green">45 Boreholes</p>
</div>
<div className="text-right">
<span className="text-on-surface-variant font-caption">Success Rate</span>
<p className="font-headline-md text-headline-md text-brass-gold">93.4%</p>
</div>
</div>
</div>
</div>
</main>
{/*  Global Footer  */}
<footer className="ml-64 bg-surface-container-highest border-t border-outline-variant py-8 px-margin-desktop mt-12">
<div className="w-full max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-2">
<h5 className="font-headline-sm text-headline-sm font-bold text-forest-green">ABIA ONE</h5>
<p className="font-caption text-on-surface-variant">© 2024 Abia State Government. All Rights Reserved.</p>
</div>
<nav className="flex gap-8">
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Terms of Service</a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Us</a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Press Office</a>
</nav>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface flex items-center justify-center rounded border border-outline-variant cursor-pointer hover:border-forest-green transition-colors">
<span className="material-symbols-outlined text-forest-green" data-icon="facebook">face_nod</span>
</div>
<div className="w-10 h-10 bg-surface flex items-center justify-center rounded border border-outline-variant cursor-pointer hover:border-forest-green transition-colors">
<span className="material-symbols-outlined text-forest-green" data-icon="share">share</span>
</div>
</div>
</div>
</footer>


      </div>
    </>
  );
}
