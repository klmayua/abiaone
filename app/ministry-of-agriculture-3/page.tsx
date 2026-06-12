"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(8px);\n            border: 1px solid #E2E8F0;\n        }\n        .custom-scrollbar::-webkit-scrollbar {\n            width: 4px;\n        }\n        .custom-scrollbar::-webkit-scrollbar-track {\n            background: transparent;\n        }\n        .custom-scrollbar::-webkit-scrollbar-thumb {\n            background: #bec9be;\n            border-radius: 10px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md overflow-x-hidden">
        
{/*  SideNavBar  */}
<aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline flex flex-col py-6 px-4 z-50">
<div className="mb-8">
<div className="flex items-center gap-3 mb-2">
<img alt="Abia State Seal" className="w-10 h-10 object-contain" data-alt="Official Abia State Government seal featuring the state's traditional crest with intricate gold and green details, presented in a crisp high-resolution digital format. The seal represents sovereign authority and institutional stability within a modern governance framework, set against a clean white circular background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN5RSzUW3Q60bTmPs5d_HK4kLmM6Tn4rYn-bgFp93ElzKuwkwQuQP-bKYtc4qxBmQOu5hEYbBOKGhb6dsA-9lLWyONBwsNxwrDB_RlBAE39BC-ZtIde4XKdk8yS0oeGp7Lf3SKNlmEjDVjusZXStB4zvFNU3IEVW2J_iuEcyIc02bmhtxwOXPeCvBub9w4ZSzhuuGgzHu3dk5Z4Uih99r86OfcRcqGrLjoN6Cx-F67qufP5Z_N02GPwThubZx7KP0V1eFrNF3HGVQ" />
<div>
<h1 className="font-headline-md text-label-md text-forest-green leading-none">State Governance</h1>
<p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-label-md">Abia One OS v2.0</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1 overflow-y-auto custom-scrollbar">
{/*  Navigation Items Mapping  */}
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-inverse-surface transition-all rounded-lg font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">dashboard</span> Command Center
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-inverse-surface transition-all rounded-lg font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">campaign</span> Communications
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-forest-green dark:text-primary-fixed-dim font-bold bg-surface-container-highest dark:bg-surface-variant transition-all rounded-lg font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">agriculture</span> Agriculture
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-inverse-surface transition-all rounded-lg font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">medical_services</span> Health
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-inverse-surface transition-all rounded-lg font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">location_city</span> GADA
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-inverse-surface transition-all rounded-lg font-label-md text-label-md" href="#">
<span className="material-symbols-outlined">analytics</span> Analytics
            </a>
</nav>
<div className="mt-auto space-y-4 pt-6 border-t border-outline-variant">
<button className="w-full bg-forest-green text-on-primary font-label-md text-label-md py-3 rounded hover:opacity-90 transition-opacity">
                New Initiative
            </button>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant text-label-md font-label-md" href="#">
<span className="material-symbols-outlined">cloud_done</span> System Status
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant text-label-md font-label-md" href="#">
<span className="material-symbols-outlined">help_center</span> Support
                </a>
</div>
</div>
</aside>
{/*  Main Content Area  */}
<main className="ml-64 min-h-screen flex flex-col">
{/*  TopNavBar  */}
<header className="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline h-16 sticky top-0 z-40">
<div className="flex justify-between items-center px-gutter w-full max-w-max-width mx-auto h-full">
<div className="flex items-center gap-4">
<h2 className="font-headline-md text-headline-md font-bold text-forest-green dark:text-primary-fixed-dim">Abia One OS</h2>
<span className="text-outline">/</span>
<span className="font-headline-md text-headline-md text-on-surface">Agriculture Command</span>
</div>
<div className="flex items-center gap-6">
<div className="relative hidden md:block w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant">search</span>
<input className="w-full pl-10 pr-4 py-1.5 bg-surface-container border border-outline-variant rounded-full text-label-md focus:ring-2 focus:ring-forest-green outline-none" placeholder="Search data points..." type="text" />
</div>
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-forest-green">notifications</span>
<span className="material-symbols-outlined cursor-pointer hover:text-forest-green">account_balance</span>
<span className="material-symbols-outlined cursor-pointer hover:text-forest-green">settings</span>
<div className="w-8 h-8 rounded-full bg-forest-green/10 border border-forest-green/20 overflow-hidden">
<img alt="User profile" className="w-full h-full object-cover" data-alt="A professional headshot of a government official, middle-aged male with a confident smile, wearing a structured business suit. The background is a clean, neutral studio setting with soft lighting that emphasizes a trustworthy and leadership-oriented persona, aligned with high-end corporate portraiture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2U9RRVjUsPXNrHFaVm-aM_BPXQM3xqPnO0ac2RV5YFfZYOc1Dd6F3oqGWaPZcA5cfARLanF9CYTTSt1-SG7EwTL5jxKtG4oKptrFhxdGeKzzh8_DDL6dXlif7XkYAhyu88RPPEt9rvnkXHz5yvynZiJjxxi_TGj1lOc8lUJZasfEjckGcURlB8w6PimshVaHtEUK9Dy1HAuqshVq843_q2GpDgAEjH3Cf8wnEbKaxw1pnKVHmKa7-NKI-bSLZSH_v9t93DwIIysc" />
</div>
</div>
</div>
</div>
</header>
{/*  Dashboard Canvas  */}
<section className="p-8 max-w-max-width mx-auto w-full flex-1">
{/*  Hero Stats Row  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
<div className="glass-card p-5 rounded-lg border-l-4 border-l-forest-green">
<div className="flex justify-between items-start mb-2">
<span className="text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">Sovereign Food Reserve</span>
<span className="material-symbols-outlined text-forest-green">warehouse</span>
</div>
<div className="flex items-baseline gap-2">
<h3 className="font-headline-lg text-headline-lg text-on-surface">84.2%</h3>
<span className="text-forest-green text-caption font-bold flex items-center"><span className="material-symbols-outlined text-sm">trending_up</span> +3.1%</span>
</div>
<p className="text-caption text-on-surface-variant mt-1">Strategic buffer capacity reached</p>
</div>
<div className="glass-card p-5 rounded-lg border-l-4 border-l-brass-gold">
<div className="flex justify-between items-start mb-2">
<span className="text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">Agri-Credit Flow</span>
<span className="material-symbols-outlined text-brass-gold">payments</span>
</div>
<div className="flex items-baseline gap-2">
<h3 className="font-headline-lg text-headline-lg text-on-surface">₦4.2B</h3>
<span className="text-eagle-red text-caption font-bold flex items-center"><span className="material-symbols-outlined text-sm">trending_down</span> -0.8%</span>
</div>
<p className="text-caption text-on-surface-variant mt-1">Disbursement to SMEs this Qtr</p>
</div>
<div className="glass-card p-5 rounded-lg border-l-4 border-l-tertiary">
<div className="flex justify-between items-start mb-2">
<span className="text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">Smallholders Registered</span>
<span className="material-symbols-outlined text-tertiary">groups</span>
</div>
<div className="flex items-baseline gap-2">
<h3 className="font-headline-lg text-headline-lg text-on-surface">112,490</h3>
<span className="text-forest-green text-caption font-bold flex items-center"><span className="material-symbols-outlined text-sm">trending_up</span> +12%</span>
</div>
<p className="text-caption text-on-surface-variant mt-1">Verified via Abia-ID Sync</p>
</div>
<div className="glass-card p-5 rounded-lg border-l-4 border-l-forest-green">
<div className="flex justify-between items-start mb-2">
<span className="text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">Export Efficiency</span>
<span className="material-symbols-outlined text-forest-green">shop</span>
</div>
<div className="flex items-baseline gap-2">
<h3 className="font-headline-lg text-headline-lg text-on-surface">91.5%</h3>
<span className="text-forest-green text-caption font-bold flex items-center"><span className="material-symbols-outlined text-sm">check_circle</span> Optimal</span>
</div>
<p className="text-caption text-on-surface-variant mt-1">Processing time: On-Target</p>
</div>
</div>
{/*  Bento Content Grid  */}
<div className="bento-grid">
{/*  Crop Yield Forecasts (Large Area)  */}
<div className="col-span-12 lg:col-span-8 bg-state-white rounded-lg border border-outline-variant p-6 shadow-sm">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Real-time Crop Yield Forecasts</h3>
<div className="h-1 w-24 bg-brass-gold mt-1"></div>
</div>
<div className="flex gap-2">
<button className="px-4 py-1.5 border border-forest-green text-forest-green text-label-md font-label-md rounded hover:bg-forest-green hover:text-white transition-colors">Palm Oil</button>
<button className="px-4 py-1.5 border border-outline text-on-surface-variant text-label-md font-label-md rounded hover:border-forest-green transition-colors">Cassava</button>
</div>
</div>
<div className="h-80 w-full bg-surface-container-low relative rounded-lg border border-dashed border-outline overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 p-4">
{/*  Visual placeholder for Data Viz  */}
<div className="flex h-full items-end gap-6 px-4">
<div className="w-full bg-forest-green/20 h-[40%] relative group cursor-pointer hover:bg-forest-green/30 transition-all">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-inverse-surface text-on-primary px-2 py-1 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity">Aba North</div>
</div>
<div className="w-full bg-forest-green/40 h-[65%] relative group cursor-pointer hover:bg-forest-green/50 transition-all">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-inverse-surface text-on-primary px-2 py-1 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity">Umuahia</div>
</div>
<div className="w-full bg-forest-green/60 h-[85%] relative group cursor-pointer hover:bg-forest-green/70 transition-all">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-inverse-surface text-on-primary px-2 py-1 text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity">Bende</div>
</div>
<div className="w-full bg-forest-green/30 h-[50%] relative group cursor-pointer hover:bg-forest-green/40 transition-all"></div>
<div className="w-full bg-forest-green/50 h-[72%] relative group cursor-pointer hover:bg-forest-green/60 transition-all"></div>
<div className="w-full bg-forest-green/40 h-[60%] relative group cursor-pointer hover:bg-forest-green/50 transition-all"></div>
<div className="w-full bg-forest-green/70 h-[90%] relative group cursor-pointer hover:bg-forest-green/80 transition-all"></div>
<div className="w-full bg-forest-green/20 h-[35%] relative group cursor-pointer hover:bg-forest-green/30 transition-all"></div>
<div className="w-full bg-forest-green/40 h-[55%] relative group cursor-pointer hover:bg-forest-green/50 transition-all"></div>
<div className="w-full bg-forest-green/60 h-[78%] relative group cursor-pointer hover:bg-forest-green/70 transition-all"></div>
</div>
</div>
<span className="text-on-surface-variant font-label-md opacity-40 z-10">Satellite NDVI Analysis Feed Active</span>
</div>
<div className="grid grid-cols-3 gap-4 mt-6">
<div className="p-3 bg-surface-container-high rounded border border-outline-variant">
<p className="text-[10px] text-on-surface-variant uppercase font-label-md">Current Forecast</p>
<p className="font-headline-md text-forest-green">14,200 MT</p>
</div>
<div className="p-3 bg-surface-container-high rounded border border-outline-variant">
<p className="text-[10px] text-on-surface-variant uppercase font-label-md">Harvest Window</p>
<p className="font-headline-md text-secondary">Oct 12 - Nov 04</p>
</div>
<div className="p-3 bg-surface-container-high rounded border border-outline-variant">
<p className="text-[10px] text-on-surface-variant uppercase font-label-md">Risk Level</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-forest-green"></span>
<p className="font-headline-md text-on-surface">Low (Normal Rainfall)</p>
</div>
</div>
</div>
</div>
{/*  Fertilizer Distribution Tracker (Right Column)  */}
<div className="col-span-12 lg:col-span-4 bg-state-white rounded-lg border border-outline-variant p-6 flex flex-col shadow-sm">
<div className="mb-4">
<h3 className="font-headline-md text-headline-md text-on-surface">Fertilizer Tracker</h3>
<p className="text-caption text-on-surface-variant">Central Procurement vs Local Hubs</p>
</div>
<div className="flex-1 space-y-6">
<div className="space-y-2">
<div className="flex justify-between text-caption font-bold">
<span>Aba Mega-Hub</span>
<span>92%</span>
</div>
<div className="h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-forest-green" style={{"width":"92%"}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-caption font-bold">
<span>Umuahia North</span>
<span>64%</span>
</div>
<div className="h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-brass-gold" style={{"width":"64%"}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-caption font-bold">
<span>Ohafia Logistics Base</span>
<span>18%</span>
</div>
<div className="h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-eagle-red" style={{"width":"18%"}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-caption font-bold">
<span>Ikwuano Cluster</span>
<span>45%</span>
</div>
<div className="h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-secondary" style={{"width":"45%"}}></div>
</div>
</div>
</div>
<div className="mt-6 p-4 bg-surface-container-lowest border border-outline-variant rounded-lg">
<div className="flex gap-3">
<span className="material-symbols-outlined text-forest-green" style={{"fontVariationSettings":"'FILL' 1"}}>local_shipping</span>
<div>
<p className="text-label-md font-bold text-on-surface">Transit Alert</p>
<p className="text-caption text-on-surface-variant">4 Heavy Trucks carrying NPK 20-10-10 currently crossing Enugu border.</p>
</div>
</div>
</div>
</div>
{/*  Agri-Industrial Cluster Map (Full Width Visual)  */}
<div className="col-span-12 lg:col-span-12 bg-state-white rounded-lg border border-outline-variant p-6 shadow-sm overflow-hidden">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Agri-Industrial Cluster Connectivity</h3>
<p className="text-caption text-on-surface-variant">Geospatial representation of processing hubs and smallholder networks</p>
</div>
<button className="bg-forest-green text-white px-6 py-2 rounded font-label-md text-label-md flex items-center gap-2">
<span className="material-symbols-outlined text-sm">map</span> Open Map Interface
                        </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-8 h-96 bg-surface-container rounded-lg relative overflow-hidden">
{/*  SVG Map Placeholder  */}
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-outline-variant opacity-30 text-center">
<span className="material-symbols-outlined text-[120px]">public</span>
<p className="font-headline-md">High-Resolution Geospatial Data Layers</p>
</div>
{/*  Interactive Dots  */}
<div className="absolute top-1/4 left-1/3 group">
<div className="w-4 h-4 bg-brass-gold rounded-full animate-pulse cursor-pointer"></div>
<div className="absolute top-6 left-0 bg-inverse-surface text-on-primary p-2 rounded text-[10px] hidden group-hover:block z-10 w-32 shadow-xl">
<strong>Bende Hub</strong><br />Status: Expansion Underway<br />Target: Cassava Processing
                                    </div>
</div>
<div className="absolute bottom-1/3 right-1/4 group">
<div className="w-4 h-4 bg-forest-green rounded-full animate-pulse cursor-pointer"></div>
<div className="absolute top-6 left-0 bg-inverse-surface text-on-primary p-2 rounded text-[10px] hidden group-hover:block z-10 w-32 shadow-xl">
<strong>Aba Hub</strong><br />Status: Operational<br />Target: Palm Oil Export
                                    </div>
</div>
</div>
</div>
<div className="md:col-span-4 space-y-4">
<h4 className="font-label-md text-label-md uppercase text-on-surface-variant border-b border-outline-variant pb-2">Cluster Vitality</h4>
<div className="space-y-4 max-h-[300px] overflow-y-auto custom-scrollbar pr-2">
<div className="flex justify-between items-center p-3 hover:bg-surface-container rounded transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-forest-green/10 flex items-center justify-center rounded text-forest-green">
<span className="material-symbols-outlined">factory</span>
</div>
<div>
<p className="font-bold text-on-surface text-body-md">Golden Palm Refinery</p>
<p className="text-caption text-on-surface-variant">Aba Industrial Cluster</p>
</div>
</div>
<span className="bg-forest-green/10 text-forest-green text-[10px] px-2 py-1 rounded-full font-bold uppercase">Active</span>
</div>
<div className="flex justify-between items-center p-3 hover:bg-surface-container rounded transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-brass-gold/10 flex items-center justify-center rounded text-brass-gold">
<span className="material-symbols-outlined">precision_manufacturing</span>
</div>
<div>
<p className="font-bold text-on-surface text-body-md">Starch Processing Lab</p>
<p className="text-caption text-on-surface-variant">Bende Sub-hub</p>
</div>
</div>
<span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-1 rounded-full font-bold uppercase">Expansion</span>
</div>
<div className="flex justify-between items-center p-3 hover:bg-surface-container rounded transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-eagle-red/10 flex items-center justify-center rounded text-eagle-red">
<span className="material-symbols-outlined">agriculture</span>
</div>
<div>
<p className="font-bold text-on-surface text-body-md">Seed Multiplication Site</p>
<p className="text-caption text-on-surface-variant">Umuahia North Area</p>
</div>
</div>
<span className="bg-error-container text-on-error-container text-[10px] px-2 py-1 rounded-full font-bold uppercase">Stalled</span>
</div>
</div>
</div>
</div>
</div>
{/*  Export Performance & Smallholder Registry (Secondary Row)  */}
<div className="col-span-12 lg:col-span-6 bg-state-white rounded-lg border border-outline-variant p-6 shadow-sm">
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Smallholder Support Registry</h3>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="border-b border-outline-variant">
<tr>
<th className="py-3 px-4 text-caption font-label-md text-on-surface-variant uppercase">Farmer ID</th>
<th className="py-3 px-4 text-caption font-label-md text-on-surface-variant uppercase">Core Crop</th>
<th className="py-3 px-4 text-caption font-label-md text-on-surface-variant uppercase">Status</th>
<th className="py-3 px-4 text-caption font-label-md text-on-surface-variant uppercase">Last Support</th>
</tr>
</thead>
<tbody className="text-body-md divide-y divide-outline-variant">
<tr className="hover:bg-surface-container/30 transition-colors">
<td className="py-4 px-4 font-bold text-forest-green">AB-AG-1092</td>
<td className="py-4 px-4">Palm Oil</td>
<td className="py-4 px-4">
<span className="inline-block w-2 h-2 rounded-full bg-forest-green mr-2"></span>
                                        Verified
                                    </td>
<td className="py-4 px-4 text-on-surface-variant">24 Sep 2024</td>
</tr>
<tr className="hover:bg-surface-container/30 transition-colors">
<td className="py-4 px-4 font-bold text-forest-green">AB-AG-4421</td>
<td className="py-4 px-4">Cassava</td>
<td className="py-4 px-4">
<span className="inline-block w-2 h-2 rounded-full bg-forest-green mr-2"></span>
                                        Verified
                                    </td>
<td className="py-4 px-4 text-on-surface-variant">02 Oct 2024</td>
</tr>
<tr className="hover:bg-surface-container/30 transition-colors">
<td className="py-4 px-4 font-bold text-forest-green">AB-AG-9830</td>
<td className="py-4 px-4">Multi-Crop</td>
<td className="py-4 px-4">
<span className="inline-block w-2 h-2 rounded-full bg-brass-gold mr-2"></span>
                                        Pending Sync
                                    </td>
<td className="py-4 px-4 text-on-surface-variant">--</td>
</tr>
<tr className="hover:bg-surface-container/30 transition-colors">
<td className="py-4 px-4 font-bold text-forest-green">AB-AG-0023</td>
<td className="py-4 px-4">Palm Oil</td>
<td className="py-4 px-4">
<span className="inline-block w-2 h-2 rounded-full bg-forest-green mr-2"></span>
                                        Verified
                                    </td>
<td className="py-4 px-4 text-on-surface-variant">15 Aug 2024</td>
</tr>
</tbody>
</table>
</div>
<button className="mt-4 text-forest-green font-label-md text-label-md flex items-center gap-2 hover:underline">
                        View Full Registry (112,490 entries) <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div className="col-span-12 lg:col-span-6 bg-state-white rounded-lg border border-outline-variant p-6 shadow-sm">
<h3 className="font-headline-md text-headline-md text-on-surface mb-6">Export Performance Index</h3>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-4">
<div className="p-4 bg-surface rounded-lg border border-outline-variant relative overflow-hidden">
<div className="absolute top-0 right-0 p-1 bg-forest-green text-white">
<span className="material-symbols-outlined text-sm">trending_up</span>
</div>
<p className="text-caption text-on-surface-variant uppercase font-label-md">Europe Market Share</p>
<p className="text-headline-lg font-bold">14.2%</p>
<p className="text-[10px] text-forest-green font-bold">+2.1% YoY</p>
</div>
<div className="p-4 bg-surface rounded-lg border border-outline-variant">
<p className="text-caption text-on-surface-variant uppercase font-label-md">Average Shipment Latency</p>
<p className="text-headline-lg font-bold">3.8 Days</p>
<p className="text-[10px] text-forest-green font-bold">-1.2 Days (Target: 3.5)</p>
</div>
</div>
<div className="flex flex-col items-center justify-center p-4 bg-surface-container rounded-lg border border-outline-variant text-center">
<div className="w-32 h-32 rounded-full border-8 border-forest-green border-r-outline flex items-center justify-center relative mb-4">
<span className="font-display-lg text-headline-lg">75%</span>
<div className="absolute -bottom-2 bg-white px-2 text-[10px] font-bold border border-outline-variant rounded">Quality Score</div>
</div>
<p className="text-caption text-on-surface-variant">Abia Palm Oil meets International grade 'A' standards</p>
</div>
</div>
</div>
</div>
</section>
{/*  Footer  */}
<footer className="bg-surface-container dark:bg-surface-dim border-t border-outline-variant dark:border-outline w-full py-6 mt-12">
<div className="flex justify-between items-center px-gutter w-full max-w-max-width mx-auto">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-slate-gray">Abia One OS | Agriculture</span>
<p className="font-caption text-caption text-on-surface-variant">© 2024 Abia State Government | Digital Infrastructure Division</p>
</div>
<div className="flex gap-8 text-on-surface-variant font-caption text-caption">
<a className="hover:text-forest-green transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-forest-green transition-colors" href="#">Terms of Service</a>
<a className="hover:text-forest-green transition-colors" href="#">Security Audit</a>
</div>
</div>
</footer>
</main>
{/*  Floating Action for Quick Data Entry  */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-forest-green text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-50">
<span className="material-symbols-outlined text-2xl">add</span>
</button>


      </div>
    </>
  );
}
