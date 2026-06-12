"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        .card-accent {\n            border-top: 2px solid #D4AF37;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-panel {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(10px);\n            border: 1px solid rgba(226, 232, 240, 0.5);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
        
{/*  Layout Shell  */}
<div className="flex min-h-screen">
{/*  SideNavBar (Predicted Component)  */}
<aside className="flex flex-col fixed left-0 top-0 h-full py-6 px-4 space-y-2 bg-surface-container-low dark:bg-inverse-surface border-r border-outline-variant w-64 z-50">
<div className="flex items-center space-x-3 px-2 mb-8">
<div className="w-10 h-10 rounded bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" style={{"fontVariationSettings":"'FILL' 1"}}>account_balance</span>
</div>
<div>
<h1 className="font-headline-sm text-headline-sm font-bold text-forest-green dark:text-primary-fixed-dim leading-tight">Command Center</h1>
<p className="text-xs font-label-md text-on-surface-variant uppercase tracking-wider">State Operating System</p>
</div>
</div>
<nav className="flex-1 space-y-1">
{/*  Dashboard Active  */}
<a className="flex items-center px-4 py-3 text-on-primary-container bg-primary-container dark:bg-primary-fixed-dim dark:text-on-primary-fixed rounded-lg transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined mr-3" data-icon="dashboard">dashboard</span>
<span className="font-label-md">Dashboard</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined mr-3" data-icon="analytics">analytics</span>
<span className="font-label-md">Analytics</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined mr-3" data-icon="hail">hail</span>
<span className="font-label-md">Citizen Requests</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined mr-3" data-icon="payments">payments</span>
<span className="font-label-md">Revenue Tracking</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined mr-3" data-icon="account_tree">account_tree</span>
<span className="font-label-md">Project Monitoring</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined mr-3" data-icon="badge">badge</span>
<span className="font-label-md">Personnel</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined mr-3" data-icon="security">security</span>
<span className="font-label-md">Security</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant dark:text-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined mr-3" data-icon="settings">settings</span>
<span className="font-label-md">Settings</span>
</a>
</nav>
<div className="pt-6 border-t border-outline-variant space-y-1">
<button className="w-full text-left flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg">
<span className="material-symbols-outlined mr-3" data-icon="help">help</span>
<span className="font-label-md">Support</span>
</button>
<button className="w-full text-left flex items-center px-4 py-3 text-error hover:bg-error-container/10 transition-all rounded-lg">
<span className="material-symbols-outlined mr-3" data-icon="logout">logout</span>
<span className="font-label-md">Sign Out</span>
</button>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="ml-64 flex-1 flex flex-col min-w-0">
{/*  TopAppBar (Predicted Component)  */}
<header className="h-16 flex justify-between items-center w-full px-12 bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline z-40 sticky top-0">
<div className="flex items-center">
<h2 className="font-headline-md text-headline-md font-bold text-forest-green dark:text-primary-fixed-dim uppercase tracking-tight">ABIA ONE</h2>
<div className="mx-6 h-6 w-px bg-outline-variant"></div>
<nav className="hidden md:flex space-x-8">
<a className="font-label-md text-forest-green dark:text-primary-fixed-dim border-b-2 border-brass-gold pb-1 transition-opacity active:opacity-80" href="#">Invest</a>
<a className="font-label-md text-on-surface-variant dark:text-surface-variant hover:text-forest-green transition-colors" href="#">Jobs</a>
<a className="font-label-md text-on-surface-variant dark:text-surface-variant hover:text-forest-green transition-colors" href="#">Serve</a>
<a className="font-label-md text-on-surface-variant dark:text-surface-variant hover:text-forest-green transition-colors" href="#">Verify</a>
<a className="font-label-md text-on-surface-variant dark:text-surface-variant hover:text-forest-green transition-colors" href="#">Governance</a>
</nav>
</div>
<div className="flex items-center space-x-4">
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant text-lg">search</span>
<input className="bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-1.5 text-body-md w-64 focus:ring-1 focus:ring-forest-green" placeholder="Search state records..." type="text" />
</div>
<button className="p-2 text-on-surface-variant hover:text-forest-green transition-colors">
<span className="material-symbols-outlined" data-icon="language">language</span>
</button>
<div className="relative">
<button className="p-2 text-on-surface-variant hover:text-forest-green transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-eagle-red rounded-full border border-surface"></span>
</button>
</div>
<div className="flex items-center space-x-3 ml-2 border-l border-outline-variant pl-4">
<div className="text-right">
<p className="font-label-md text-on-surface font-bold">His Excellency</p>
<p className="text-xs text-on-surface-variant">Executive Governor</p>
</div>
<img alt="Avatar" className="w-10 h-10 rounded-full border border-outline-variant" data-alt="A professional and dignified headshot of a mature African statesman in a dark formal suit against a clean, neutral architectural background. The lighting is soft and professional, emphasizing a look of wisdom and authoritative leadership. The overall aesthetic is sharp, corporate, and high-quality, fitting for a government executive dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7HjC6SF1IgPR42hrqaC6wPOrL3TCH_Z9vaA-UUtl32wa-uaVVCzwkr8YCuAVCRDOeHv1meplnarvd1u3QCLVT1ZW0TGpfGD0p2Kqs6gFLiMXR_VY5bGmYtUaHNbQtt97yHno2Lh5CtmAooR0lBGqTK9vUo2alRUYOwg0oxa165UQB0KBaqHgSHZnfOQ2fA5LReqdnfQRwlIyPQz5Fbsgbv04if70czAlaxq6lzdrcz2M6JgGiARGm8y8Ro4sqQl45Qrd-j_C07Gc" />
</div>
</div>
</header>
{/*  Dashboard Content  */}
<div className="p-12 space-y-8 max-w-max-width mx-auto w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Governor's Oversight</h3>
<p className="text-on-surface-variant font-body-lg">Real-time governance telemetry for Abia State.</p>
</div>
<div className="flex space-x-3">
<button className="px-4 py-2 border border-brass-gold text-secondary font-label-md rounded hover:bg-brass-gold/10 transition-all flex items-center">
<span className="material-symbols-outlined mr-2 text-base">download</span>
                            Export Intelligence
                        </button>
<button className="px-4 py-2 bg-forest-green text-on-primary font-label-md rounded hover:opacity-90 transition-all flex items-center shadow-sm">
<span className="material-symbols-outlined mr-2 text-base">add_task</span>
                            New Directive
                        </button>
</div>
</div>
{/*  1. Executive Summary Cards  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded card-accent">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-forest-green p-2 bg-primary-fixed/20 rounded">trending_up</span>
<span className="text-forest-green font-label-md flex items-center text-xs">+4.2% <span className="material-symbols-outlined text-xs ml-0.5">arrow_upward</span></span>
</div>
<p className="text-on-surface-variant font-label-md text-xs uppercase tracking-widest mb-1">State Growth (GDP)</p>
<p className="font-headline-md text-headline-md text-on-surface">$3.2B <span className="text-body-md font-normal text-on-surface-variant">Est.</span></p>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded card-accent">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-brass-gold p-2 bg-secondary-fixed/20 rounded">account_balance_wallet</span>
<span className="text-forest-green font-label-md flex items-center text-xs">+12.8% <span className="material-symbols-outlined text-xs ml-0.5">arrow_upward</span></span>
</div>
<p className="text-on-surface-variant font-label-md text-xs uppercase tracking-widest mb-1">Revenue (IGR)</p>
<p className="font-headline-md text-headline-md text-on-surface">₦4.8B <span className="text-body-md font-normal text-on-surface-variant">/Mo</span></p>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded card-accent">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-eagle-red p-2 bg-error-container/20 rounded">security</span>
<span className="text-on-surface-variant font-label-md flex items-center text-xs">Stable <span className="material-symbols-outlined text-xs ml-0.5">check_circle</span></span>
</div>
<p className="text-on-surface-variant font-label-md text-xs uppercase tracking-widest mb-1">Security Index</p>
<p className="font-headline-md text-headline-md text-on-surface">88.4 <span className="text-body-md font-normal text-on-surface-variant">pts</span></p>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded card-accent">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-primary p-2 bg-surface-variant rounded">construction</span>
<span className="text-brass-gold font-label-md flex items-center text-xs">Active <span className="material-symbols-outlined text-xs ml-0.5">bolt</span></span>
</div>
<p className="text-on-surface-variant font-label-md text-xs uppercase tracking-widest mb-1">Infrastructure Progress</p>
<p className="font-headline-md text-headline-md text-on-surface">62% <span className="text-body-md font-normal text-on-surface-variant">Comp.</span></p>
</div>
</div>
{/*  Bento Section: Map & Tracker  */}
<div className="bento-grid">
{/*  2. Strategic Intelligence Map  */}
<div className="col-span-12 lg:col-span-8 h-[500px] bg-white border border-outline-variant rounded relative overflow-hidden group">
<div className="absolute inset-0 bg-slate-100">
<div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
{/*  Placeholder for actual map visualization  */}
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-full h-full p-4">
<div className="w-full h-full bg-surface-container rounded border border-outline-variant flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover opacity-80" data-alt="A sophisticated data-visualization map of Abia State, Nigeria, showing various activity hotspots and infrastructure nodes with glowing green and gold markers. The visual style is sleek and technical, resembling a modern command center interface with semi-transparent overlays, data labels, and elegant line work. The lighting is clean and professional, using a light-mode color palette of forest green, brass gold, and slate gray." data-location="Abia State" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKSE4qukf8kxGp2Oy2qCY_2YHMi8XEwNhgkQqzRkWUtcmS5h_mSziym9UjTuwU_Et9xzcpjyJ2zlZ3sXUjxUTmzzQ6ZttiM95MkJaOi4ZyuPa1ncpJpNbl9OD2KAMAmPuKntxER5VUkff9aJdz__-ps15jk3dX3v0gKhehdb-r8YNvSDtKG2pNnzUNX2BNRnNa_zwyeZwrZ5FXX4qQ-Xd3EYKpSaAzW7pC5ihxIhduvt58xnRHlE4UbIHgMs87SGuz-79k2IZqMk8" />
{/*  Map Controls Overlay  */}
<div className="absolute top-8 left-8 space-y-2">
<div className="bg-white/90 backdrop-blur p-4 rounded border border-outline-variant shadow-sm w-56">
<h4 className="font-headline-sm text-sm font-bold text-forest-green border-l-2 border-brass-gold pl-2 mb-3">Live Activity Nodes</h4>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs">
<span className="text-on-surface-variant">Aba Industrial Hub</span>
<span className="w-2 h-2 rounded-full bg-forest-green animate-pulse"></span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-on-surface-variant">Umuahia Logistics Center</span>
<span className="w-2 h-2 rounded-full bg-forest-green"></span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-on-surface-variant">Ohafia Security Post</span>
<span className="w-2 h-2 rounded-full bg-eagle-red"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-6 right-6 flex space-x-2">
<button className="p-2 bg-white border border-outline-variant rounded shadow-sm hover:bg-surface transition-colors"><span className="material-symbols-outlined">zoom_in</span></button>
<button className="p-2 bg-white border border-outline-variant rounded shadow-sm hover:bg-surface transition-colors"><span className="material-symbols-outlined">zoom_out</span></button>
<button className="p-2 bg-white border border-outline-variant rounded shadow-sm hover:bg-surface transition-colors"><span className="material-symbols-outlined">layers</span></button>
</div>
</div>
{/*  3. Citizen Sentiment & Urgent Directives Stack  */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
{/*  4. Citizen Sentiment  */}
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded flex-1 flex flex-col justify-between">
<div className="flex justify-between items-center mb-4">
<h4 className="font-headline-sm text-sm font-bold text-forest-green uppercase tracking-widest">Citizen Sentiment</h4>
<span className="material-symbols-outlined text-forest-green">diversity_3</span>
</div>
<div className="flex-1 flex flex-col items-center justify-center py-4">
<div className="relative w-32 h-32 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-surface-container-highest" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-forest-green" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="100" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-3xl font-bold text-on-surface">74%</span>
<span className="text-[10px] uppercase font-label-md text-on-surface-variant">Positive</span>
</div>
</div>
<div className="mt-6 w-full space-y-2">
<div className="flex justify-between text-xs font-body-md">
<span className="text-on-surface-variant">Trust Index</span>
<span className="text-on-surface font-semibold">High</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[74%]"></div>
</div>
<p className="text-[11px] text-on-surface-variant leading-tight mt-2 italic text-center">"Steady increase in approval ratings following the launch of the new rural road network."</p>
</div>
</div>
</div>
{/*  5. Urgent Directives Panel  */}
<div className="bg-tertiary-container text-on-tertiary-container p-6 rounded shadow-lg">
<div className="flex items-center space-x-2 mb-4">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>priority_high</span>
<h4 className="font-headline-sm text-sm font-bold uppercase tracking-widest">Urgent Directives</h4>
</div>
<div className="space-y-3">
<div className="bg-white/10 p-3 rounded border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
<p className="text-xs font-bold mb-1">Aba Power Outage Response</p>
<p className="text-[11px] opacity-80 line-clamp-1">Immediate dispatch of technical teams to Ariaria Market...</p>
<div className="mt-2 flex justify-end">
<span className="text-[10px] px-1.5 py-0.5 bg-eagle-red text-white rounded-full">Due in 2h</span>
</div>
</div>
<div className="bg-white/10 p-3 rounded border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
<p className="text-xs font-bold mb-1">Emergency Health Grant Review</p>
<p className="text-[11px] opacity-80 line-clamp-1">Signatory required for the ₦500M surgical fund...</p>
<div className="mt-2 flex justify-end">
<span className="text-[10px] px-1.5 py-0.5 bg-brass-gold text-on-secondary-container rounded-full">Pending Action</span>
</div>
</div>
</div>
<button className="w-full mt-4 py-2 border border-white/30 rounded text-xs font-label-md hover:bg-white/10 transition-colors uppercase">View Briefing Room</button>
</div>
</div>
</div>
{/*  3. Project Performance Tracker  */}
<section className="bg-surface-container-lowest border border-outline-variant p-8 rounded">
<div className="flex justify-between items-center mb-8">
<div>
<h4 className="font-headline-md text-headline-md text-forest-green border-l-4 border-brass-gold pl-4">Build Abia Initiative Tracker</h4>
<p className="text-on-surface-variant font-body-md mt-1">Real-time monitoring of flagship infrastructure projects.</p>
</div>
<div className="flex space-x-4">
<div className="flex items-center space-x-2">
<span className="w-3 h-3 rounded-full bg-forest-green"></span>
<span className="text-xs font-label-md text-on-surface-variant">On Track</span>
</div>
<div className="flex items-center space-x-2">
<span className="w-3 h-3 rounded-full bg-brass-gold"></span>
<span className="text-xs font-label-md text-on-surface-variant">Delayed</span>
</div>
<div className="flex items-center space-x-2">
<span className="w-3 h-3 rounded-full bg-eagle-red"></span>
<span className="text-xs font-label-md text-on-surface-variant">At Risk</span>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="text-left border-b border-outline-variant">
<th className="pb-4 font-label-md text-xs text-on-surface-variant uppercase tracking-widest">Project Name</th>
<th className="pb-4 font-label-md text-xs text-on-surface-variant uppercase tracking-widest">Sector</th>
<th className="pb-4 font-label-md text-xs text-on-surface-variant uppercase tracking-widest">Completion</th>
<th className="pb-4 font-label-md text-xs text-on-surface-variant uppercase tracking-widest">Status</th>
<th className="pb-4 font-label-md text-xs text-on-surface-variant uppercase tracking-widest text-right">Budget Utilization</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="group hover:bg-surface-container-low transition-colors">
<td className="py-5">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded bg-primary-fixed/30 flex items-center justify-center text-forest-green">
<span className="material-symbols-outlined">commute</span>
</div>
<div>
<p className="font-bold text-on-surface text-sm">Aba-Umuahia Expressway Ph. 2</p>
<p className="text-[11px] text-on-surface-variant">24km asphalt laying underway</p>
</div>
</div>
</td>
<td className="py-5 font-body-md text-sm text-on-surface-variant">Infrastructure</td>
<td className="py-5">
<div className="flex items-center space-x-3">
<div className="w-32 bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[82%]"></div>
</div>
<span className="text-xs font-bold">82%</span>
</div>
</td>
<td className="py-5">
<span className="px-3 py-1 bg-primary-fixed/20 text-forest-green text-[10px] font-bold rounded-full uppercase tracking-tighter">On Schedule</span>
</td>
<td className="py-5 text-right font-label-md text-sm text-on-surface">₦12.4B / ₦15B</td>
</tr>
<tr className="group hover:bg-surface-container-low transition-colors">
<td className="py-5">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded bg-secondary-fixed/30 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined">factory</span>
</div>
<div>
<p className="font-bold text-on-surface text-sm">Abia Innovation Industrial Park</p>
<p className="text-[11px] text-on-surface-variant">Foundation works completed</p>
</div>
</div>
</td>
<td className="py-5 font-body-md text-sm text-on-surface-variant">Economic Hubs</td>
<td className="py-5">
<div className="flex items-center space-x-3">
<div className="w-32 bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[35%]"></div>
</div>
<span className="text-xs font-bold">35%</span>
</div>
</td>
<td className="py-5">
<span className="px-3 py-1 bg-secondary-fixed/20 text-secondary text-[10px] font-bold rounded-full uppercase tracking-tighter">Delayed (Materials)</span>
</td>
<td className="py-5 text-right font-label-md text-sm text-on-surface">₦4.2B / ₦22B</td>
</tr>
<tr className="group hover:bg-surface-container-low transition-colors">
<td className="py-5">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center text-forest-green">
<span className="material-symbols-outlined">local_hospital</span>
</div>
<div>
<p className="font-bold text-on-surface text-sm">Primary Health Center Refurbishment</p>
<p className="text-[11px] text-on-surface-variant">15 Centers across Ohafia/Bende</p>
</div>
</div>
</td>
<td className="py-5 font-body-md text-sm text-on-surface-variant">Social Welfare</td>
<td className="py-5">
<div className="flex items-center space-x-3">
<div className="w-32 bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[94%]"></div>
</div>
<span className="text-xs font-bold">94%</span>
</div>
</td>
<td className="py-5">
<span className="px-3 py-1 bg-primary-fixed/20 text-forest-green text-[10px] font-bold rounded-full uppercase tracking-tighter">Near Completion</span>
</td>
<td className="py-5 text-right font-label-md text-sm text-on-surface">₦2.8B / ₦3B</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-6 flex justify-center">
<button className="text-forest-green font-label-md text-xs hover:underline flex items-center">
                            View All 42 State Initiatives <span className="material-symbols-outlined ml-1 text-sm">open_in_new</span>
</button>
</div>
</section>
</div>
{/*  Footer (Predicted Component)  */}
<footer className="w-full py-8 px-12 mt-auto bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant">
<div className="max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-center">
<div className="mb-4 md:mb-0">
<h4 className="font-headline-sm text-headline-sm font-bold text-forest-green dark:text-primary-fixed-dim">ABIA ONE</h4>
<p className="font-body-md text-caption text-on-surface-variant mt-1">© 2024 Abia State Government. All Rights Reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
<a className="text-on-surface-variant hover:text-brass-gold transition-colors font-body-md text-sm" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors font-body-md text-sm" href="#">Terms of Service</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors font-body-md text-sm" href="#">Contact Us</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors font-body-md text-sm" href="#">Press Office</a>
</div>
</div>
</footer>
</main>
</div>
{/*  Micro-interaction Scripts  */}


      </div>
    </>
  );
}
