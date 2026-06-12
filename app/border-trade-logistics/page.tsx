"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .card-border {\n            border: 1px solid #E2E8F0;\n        }\n        .glass-panel {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(0, 77, 40, 0.1);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  Top Navigation Bar  */}
<header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16">
<div className="flex items-center gap-8">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep">ABIA ONE</span>
<nav className="hidden md:flex gap-6">
<a className="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Economy</a>
<a className="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Digital Gov</a>
<a className="font-label-md text-primary border-b-2 border-brass-gold pb-1" href="#">Governance</a>
<a className="font-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Security</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block px-4 py-2 border border-brass-gold text-secondary font-medium rounded-lg hover:bg-secondary-container/10 transition-all">Emergency</button>
<button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all">Citizen Portal</button>
</div>
</header>
{/*  Side Navigation Bar (Desktop)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 pt-20 bg-surface-container-low border-r border-outline-variant z-40">
<div className="px-6 mb-8">
<h2 className="font-headline-md text-forest-deep">Trade OS</h2>
<p className="text-xs text-on-surface-variant opacity-70">Commerce &amp; Logistics Engine</p>
</div>
<div className="space-y-1">
<div className="bg-secondary-container text-on-secondary-container rounded-lg mx-2 flex items-center gap-3 px-4 py-3">
<span className="material-symbols-outlined">mitre</span>
<span className="font-label-md">Transparent Governance</span>
</div>
<div className="text-on-surface-variant hover:bg-surface-variant/50 mx-2 flex items-center gap-3 px-4 py-3 cursor-pointer transition-all">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-md">Economic Transformation</span>
</div>
<div className="text-on-surface-variant hover:bg-surface-variant/50 mx-2 flex items-center gap-3 px-4 py-3 cursor-pointer transition-all">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-md">Digital Government</span>
</div>
<div className="text-on-surface-variant hover:bg-surface-variant/50 mx-2 flex items-center gap-3 px-4 py-3 cursor-pointer transition-all">
<span className="material-symbols-outlined">security</span>
<span className="font-label-md">Public Trust</span>
</div>
</div>
<div className="mt-auto pb-8 border-t border-outline-variant pt-4">
<div className="text-on-surface-variant hover:bg-surface-variant/50 mx-2 flex items-center gap-3 px-4 py-2 cursor-pointer transition-all">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md">Settings</span>
</div>
<div className="text-on-surface-variant hover:bg-surface-variant/50 mx-2 flex items-center gap-3 px-4 py-2 cursor-pointer transition-all">
<span className="material-symbols-outlined">help</span>
<span className="font-label-md">Support</span>
</div>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="lg:pl-64 pt-24 px-margin-mobile md:px-margin-desktop pb-12">
{/*  Header Section  */}
<div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div>
<h1 className="font-headline-lg text-headline-lg text-forest-deep mb-2">Border &amp; Inter-State Trade</h1>
<p className="text-on-surface-variant font-body-md max-w-2xl">Real-time management of logistics corridors, trade compliance, and regional partnership directories for the Abia State commercial ecosystem.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-lg border border-outline-variant hover:bg-surface-variant transition-all">
<span className="material-symbols-outlined">download</span>
<span className="font-label-md">Export Trade Data</span>
</button>
<button className="bg-forest-green text-on-primary flex items-center gap-2 px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
<span className="material-symbols-outlined">add_circle</span>
<span>New Trade Agreement</span>
</button>
</div>
</div>
{/*  Dashboard Bento Grid  */}
<div className="bento-grid">
{/*  Logistics Corridor Analytics (Primary)  */}
<section className="col-span-12 lg:col-span-8 glass-panel rounded-xl p-6 card-border relative overflow-hidden min-h-[400px]">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="font-headline-md text-forest-deep">Logistics Corridor Analytics</h3>
<div className="h-1 w-12 bg-brass-gold mt-1"></div>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">Live</span>
<select className="bg-transparent border-none text-sm font-medium focus:ring-0">
<option>Ariaria Hub</option>
<option>Enyimba City</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="bg-white/50 p-4 rounded-lg border border-outline-variant">
<p className="text-xs text-on-surface-variant font-medium uppercase mb-1">Transit Volume</p>
<p className="text-2xl font-bold text-forest-deep">14,202 <span className="text-sm font-normal text-primary">↑ 12%</span></p>
<p className="text-[10px] text-on-surface-variant mt-2">Daily tonnage processed</p>
</div>
<div className="bg-white/50 p-4 rounded-lg border border-outline-variant">
<p className="text-xs text-on-surface-variant font-medium uppercase mb-1">Hub Efficiency</p>
<p className="text-2xl font-bold text-forest-deep">94.8% <span className="text-sm font-normal text-primary">↑ 2.4%</span></p>
<p className="text-[10px] text-on-surface-variant mt-2">Avg. processing time: 14 mins</p>
</div>
<div className="bg-white/50 p-4 rounded-lg border border-outline-variant">
<p className="text-xs text-on-surface-variant font-medium uppercase mb-1">Trade Revenue</p>
<p className="text-2xl font-bold text-forest-deep">₦842M <span className="text-sm font-normal text-on-surface-variant">Stable</span></p>
<p className="text-[10px] text-on-surface-variant mt-2">Projected monthly yield</p>
</div>
</div>
{/*  Visual Data Visualization Placeholder  */}
<div className="w-full h-48 bg-surface-container-high rounded-lg relative flex items-end justify-between px-8 py-4 overflow-hidden border border-outline-variant/30">
{/*  Simple bar chart visual  */}
<div className="w-12 bg-primary/30 h-2/3 rounded-t-sm relative group cursor-help">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-gray text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Akwa Ibom</div>
</div>
<div className="w-12 bg-primary/40 h-3/4 rounded-t-sm relative group cursor-help">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-gray text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Rivers</div>
</div>
<div className="w-12 bg-primary h-full rounded-t-sm relative group cursor-help">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-gray text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Imo State</div>
</div>
<div className="w-12 bg-primary/60 h-4/5 rounded-t-sm relative group cursor-help">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-gray text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Enugu</div>
</div>
<div className="w-12 bg-primary/20 h-1/2 rounded-t-sm relative group cursor-help">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-gray text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Cross River</div>
</div>
<div className="w-12 bg-primary/10 h-1/3 rounded-t-sm relative group cursor-help">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-gray text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">Ebonyi</div>
</div>
{/*  Background Grid Lines  */}
<div className="absolute inset-x-0 bottom-0 top-0 pointer-events-none flex flex-col justify-between border-b border-outline-variant/20">
<div className="border-t border-outline-variant/10 w-full"></div>
<div className="border-t border-outline-variant/10 w-full"></div>
<div className="border-t border-outline-variant/10 w-full"></div>
</div>
</div>
<p className="text-center text-xs text-on-surface-variant mt-4 font-label-md">Regional Trade Volume by Neighboring State</p>
</section>
{/*  Transport Permit Management  */}
<section className="col-span-12 lg:col-span-4 bg-white rounded-xl p-6 card-border flex flex-col">
<div className="mb-6">
<h3 className="font-headline-md text-forest-deep">Permit Registry</h3>
<div className="h-1 w-12 bg-brass-gold mt-1"></div>
</div>
<div className="space-y-4 flex-1">
{/*  Permit Item  */}
<div className="p-3 rounded-lg border-l-4 border-primary bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-bold text-primary uppercase">Heavy Logistics</span>
<span className="text-[10px] bg-primary/10 px-2 py-0.5 rounded text-primary">Active</span>
</div>
<p className="font-semibold text-sm">PMT-77291: Dangote Cement</p>
<p className="text-xs text-on-surface-variant">Lagos - Aba Corridor • Exp: 24 Oct</p>
</div>
{/*  Permit Item  */}
<div className="p-3 rounded-lg border-l-4 border-secondary bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-bold text-secondary uppercase">Cold Chain</span>
<span className="text-[10px] bg-secondary-container px-2 py-0.5 rounded text-on-secondary-container">Pending</span>
</div>
<p className="font-semibold text-sm">PMT-11024: Fresh Farms Ltd</p>
<p className="text-xs text-on-surface-variant">Jos - Ariaria Hub • Applied 4h ago</p>
</div>
{/*  Permit Item  */}
<div className="p-3 rounded-lg border-l-4 border-outline bg-surface-container-low opacity-60">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-bold text-on-surface-variant uppercase">Enyimba Economic Zone</span>
<span className="text-[10px] bg-outline-variant px-2 py-0.5 rounded text-on-surface-variant">Expired</span>
</div>
<p className="font-semibold text-sm">PMT-00482: Global Textiles</p>
<p className="text-xs text-on-surface-variant">Onitsha - Enyimba • Expired 2d ago</p>
</div>
</div>
<button className="mt-6 w-full py-3 border-2 border-dashed border-outline-variant rounded-lg text-on-surface-variant font-label-md hover:border-primary hover:text-primary transition-all">
                    Verify Physical Permit QR
                </button>
</section>
{/*  Hub Status: Ariaria & Enyimba City  */}
<section className="col-span-12 md:col-span-6 bg-white rounded-xl p-6 card-border overflow-hidden group">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline-md text-forest-deep">Ariaria Strategic Hub</h3>
<p className="text-sm text-on-surface-variant">Primary Wholesale Processing Center</p>
</div>
<span className="material-symbols-outlined text-brass-gold text-3xl">hub</span>
</div>
<div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
<img alt="Ariaria Hub" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A sophisticated modern industrial logistics warehouse aerial view at dusk, featuring rows of high-tech shipping containers and bright LED floodlights. The scene is dominated by a deep forest green and gold lighting theme, reflecting a corporate and state-governed infrastructure aesthetic. The mood is highly productive, efficient, and technologically advanced, with a clean and professional photographic finish." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrneFOohoNUz1cikA6p8ADLCuvk6uyIgiLrNc-yrocfBWprrTC7qZ11YybC2zMMx8F0HWXuAC1_pLKc18DOYMJaqP-Q0mwbSEX7c2yHUMKOuy6ou74G_yHMJu3IAloK6Fq-QmtNgYc4qUuY5UaI2vSSFARY5s2xWMAZtatMlBST-aKGgqjdp-VjIwoCr-tif6tJyf1Z9ys7ZSiUkJ_LE_NNFpsAXvVsbY2VYgPMplcwRnXtlr_aZ7_gB9LgmaUKCw5bviZKWSdD2U" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex gap-2">
<div className="flex items-center gap-1 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                            OPERATIONAL
                        </div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="text-center py-2 bg-surface-container-low rounded border border-outline-variant/30">
<p className="text-[10px] font-bold text-on-surface-variant uppercase">Gate Flow</p>
<p className="text-lg font-bold">42 Trucks/hr</p>
</div>
<div className="text-center py-2 bg-surface-container-low rounded border border-outline-variant/30">
<p className="text-[10px] font-bold text-on-surface-variant uppercase">Compliance</p>
<p className="text-lg font-bold text-primary">98.2%</p>
</div>
</div>
</section>
<section className="col-span-12 md:col-span-6 bg-white rounded-xl p-6 card-border overflow-hidden group">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline-md text-forest-deep">Enyimba City Hub</h3>
<p className="text-sm text-on-surface-variant">Manufacturing &amp; Export Gateway</p>
</div>
<span className="material-symbols-outlined text-brass-gold text-3xl">domain</span>
</div>
<div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
<img alt="Enyimba City" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A wide-angle landscape shot of a sleek, contemporary manufacturing industrial park with solar panels and glass-fronted offices. The environment is impeccably clean, representing a modern Nigerian economic zone with lush green landscaping. The color palette follows a professional corporate theme with forest green accents and brass gold highlights on architectural details under a clear, bright midday sun." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiPkuwlmUlv1ikNs4uHOgK4Fsn0yYS999xIH6n0GXIubgk_X1hrk_RTOLg9yF6KisON19golf5NYl-E--4kwBLN2_ua2-F0LId7Ar6KMeqJFxHvkSxwbry7cFv4EkkZqnYioqIZJgAL-35PCH4hn4z3HxSqt1F-s-gZopHZ9nlK3o_s8q1tnCw_OZOmtoyC-7Ml8AikGW_X5tL-UTVdd1lGJEwQYLJ8y8Zia7jjp2ApZ744e_FodAZtFjZYdicoSWy2p_8xn_b3LY" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex gap-2">
<div className="flex items-center gap-1 bg-secondary text-white text-[10px] px-2 py-0.5 rounded font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                            MAINTENANCE
                        </div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="text-center py-2 bg-surface-container-low rounded border border-outline-variant/30">
<p className="text-[10px] font-bold text-on-surface-variant uppercase">Export Loading</p>
<p className="text-lg font-bold">18 Units/hr</p>
</div>
<div className="text-center py-2 bg-surface-container-low rounded border border-outline-variant/30">
<p className="text-[10px] font-bold text-on-surface-variant uppercase">Utility Load</p>
<p className="text-lg font-bold text-secondary">74% Capacity</p>
</div>
</div>
</section>
{/*  Regional Trade Partnership Directory  */}
<section className="col-span-12 bg-white rounded-xl p-6 card-border">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div>
<h3 className="font-headline-md text-forest-deep">Regional Trade Partnership Directory</h3>
<div className="h-1 w-12 bg-brass-gold mt-1"></div>
</div>
<div className="flex items-center gap-2 w-full md:w-auto">
<div className="relative flex-1 md:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg text-sm focus:ring-primary focus:border-primary" placeholder="Search partners..." type="text" />
</div>
<button className="material-symbols-outlined bg-surface-container-low p-2 rounded-lg border border-outline-variant">filter_list</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full border-collapse">
<thead>
<tr className="border-b border-outline-variant text-left">
<th className="pb-4 font-label-md text-on-surface-variant uppercase text-xs tracking-wider">Partner Entity</th>
<th className="pb-4 font-label-md text-on-surface-variant uppercase text-xs tracking-wider">State/Region</th>
<th className="pb-4 font-label-md text-on-surface-variant uppercase text-xs tracking-wider">Trade Domain</th>
<th className="pb-4 font-label-md text-on-surface-variant uppercase text-xs tracking-wider">Agreement Status</th>
<th className="pb-4 font-label-md text-on-surface-variant uppercase text-xs tracking-wider">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-forest-green/10 flex items-center justify-center text-forest-green font-bold text-xs">RC</div>
<span className="font-semibold text-sm">Rivers Commerce Board</span>
</div>
</td>
<td className="py-4 text-sm text-on-surface-variant">Rivers State</td>
<td className="py-4">
<span className="text-xs bg-surface-container-highest px-2 py-1 rounded">Hydrocarbon/Logistics</span>
</td>
<td className="py-4">
<span className="flex items-center gap-1.5 text-xs font-bold text-primary">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        Active Mutual
                                    </span>
</td>
<td className="py-4">
<button className="text-forest-green hover:underline text-xs font-bold">View MOU</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-secondary/10 flex items-center justify-center text-secondary font-bold text-xs">AG</div>
<span className="font-semibold text-sm">Anambra Govt. Trade Dept.</span>
</div>
</td>
<td className="py-4 text-sm text-on-surface-variant">Anambra State</td>
<td className="py-4">
<span className="text-xs bg-surface-container-highest px-2 py-1 rounded">Textiles &amp; Finished Goods</span>
</td>
<td className="py-4">
<span className="flex items-center gap-1.5 text-xs font-bold text-primary">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                        Active Mutual
                                    </span>
</td>
<td className="py-4">
<button className="text-forest-green hover:underline text-xs font-bold">View MOU</button>
</td>
</tr>
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-tertiary-container/10 flex items-center justify-center text-tertiary font-bold text-xs">EN</div>
<span className="font-semibold text-sm">Enugu Coal &amp; Mineral</span>
</div>
</td>
<td className="py-4 text-sm text-on-surface-variant">Enugu State</td>
<td className="py-4">
<span className="text-xs bg-surface-container-highest px-2 py-1 rounded">Energy / Raw Materials</span>
</td>
<td className="py-4">
<span className="flex items-center gap-1.5 text-xs font-bold text-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                        Under Review
                                    </span>
</td>
<td className="py-4">
<button className="text-forest-green hover:underline text-xs font-bold">Review Terms</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto py-12 border-t border-outline-variant">
<div className="max-w-container-max-width mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>
<span className="font-headline-lg text-headline-lg text-forest-deep font-bold">ABIA ONE</span>
<p className="text-on-surface-variant font-body-md mt-2 max-w-sm">The digital operating system for Abia State Governance and Citizen Empowerment.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
<div className="flex flex-col gap-3">
<span className="font-label-md text-on-surface uppercase text-xs">Ecosystem</span>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">Invest Abia</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">Serve Abia</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">Build Abia</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-label-md text-on-surface uppercase text-xs">Legal</span>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">Open Abia</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">Contact Us</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline-variant gap-4">
<p className="text-on-surface-variant font-body-md text-sm">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-sm">public</span>
</a>
<a className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-sm">share</span>
</a>
</div>
</div>
</div>
</footer>


      </div>
    </>
  );
}
