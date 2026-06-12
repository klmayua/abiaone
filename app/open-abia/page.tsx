"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            display: inline-block;\n            vertical-align: middle;\n        }\n        .naira::before {\n            content: \"₦\";\n            margin-right: 2px;\n        }\n        .chart-container {\n            background-image: radial-gradient(circle at 2px 2px, #bec9be 1px, transparent 0);\n            background-size: 24px 24px;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .custom-scrollbar::-webkit-scrollbar {\n            width: 4px;\n        }\n        .custom-scrollbar::-webkit-scrollbar-track {\n            background: #f1f5ee;\n        }\n        .custom-scrollbar::-webkit-scrollbar-thumb {\n            background: #006838;\n            border-radius: 10px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
        
{/*  Top Navigation Bar  */}
<header className="fixed top-0 w-full z-50 bg-background border-b border-outline-variant">
<div className="flex justify-between items-center px-margin-desktop h-20 max-w-max-width mx-auto">
<div className="flex items-center gap-8">
<span className="font-display-lg text-[32px] font-bold text-primary">ABIA ONE</span>
<nav className="hidden md:flex items-center gap-6">
<a className="font-medium text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">Economy</a>
<a className="font-medium text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">Digital Gov</a>
<a className="font-semibold text-primary border-b-2 border-brass-gold pb-1 cursor-pointer" href="#">Governance</a>
<a className="font-medium text-on-surface-variant hover:text-primary transition-colors cursor-pointer" href="#">Security</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="px-6 py-2 bg-primary text-on-primary font-medium rounded-lg hover:opacity-90 transition-all">Citizen Portal</button>
</div>
</div>
</header>
{/*  Side Navigation Bar  */}
<aside className="fixed left-0 top-20 h-[calc(100vh-80px)] w-64 bg-surface-container-low border-r border-outline-variant hidden md:flex flex-col py-6">
<div className="px-6 mb-8">
<h3 className="font-headline-md text-headline-md font-bold text-primary">Navigation</h3>
<p className="text-caption text-on-surface-variant">State Operating System</p>
</div>
<nav className="flex-1 overflow-y-auto custom-scrollbar">
<div className="flex flex-col">
<a className="flex items-center gap-3 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-all" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-body-md">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 text-forest-green font-bold border-l-4 border-brass-gold bg-surface-container-high px-6 py-3 transition-all" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>account_balance</span>
<span className="font-body-md">Digital Government</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-all" href="#">
<span className="material-symbols-outlined">gavel</span>
<span className="font-body-md">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-all" href="#">
<span className="material-symbols-outlined">verified_user</span>
<span className="font-body-md">Public Trust</span>
</a>
</div>
</nav>
<div className="mt-auto px-6 border-t border-outline-variant pt-6">
<div className="flex flex-col gap-2">
<a className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-caption">Settings</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-caption">Support</span>
</a>
</div>
<button className="w-full mt-6 py-3 border border-brass-gold text-secondary font-medium rounded-lg hover:bg-secondary-container transition-all">Launch Service</button>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="md:ml-64 pt-20 min-h-screen">
<div className="max-w-max-width mx-auto p-gutter">
{/*  Header Section  */}
<div className="mb-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="inline-flex items-center px-3 py-1 bg-surface-container-highest text-primary font-label-md text-label-md rounded-full mb-4">
                            OPEN ABIA LAYER • FISCAL YEAR 2024
                        </span>
<h1 className="font-display-lg text-display-lg text-primary mb-2">Budget Transparency Dashboard</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                            Real-time monitoring of Abia State's fiscal health, revenue streams, and developmental expenditures.
                        </p>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-4 py-2 bg-state-white border border-outline-variant rounded-lg font-medium text-slate-gray hover:bg-surface-container transition-all">
<span className="material-symbols-outlined">download</span> Export PDF
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-forest-green text-on-primary rounded-lg font-medium hover:shadow-lg transition-all">
<span className="material-symbols-outlined">calendar_today</span> FY 2024
                        </button>
</div>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="bento-grid">
{/*  Main Spending Card (Large)  */}
<div className="col-span-12 lg:col-span-8 bg-state-white border border-outline-variant p-8 relative overflow-hidden group">
<div className="flex justify-between items-start mb-12">
<div>
<h2 className="font-headline-md text-headline-md text-primary mb-1">Budget Execution Overview</h2>
<div className="w-12 h-1 bg-brass-gold"></div>
</div>
<div className="text-right">
<p className="text-caption uppercase tracking-wider text-on-surface-variant">Total State Budget</p>
<p className="font-display-lg text-[40px] text-primary naira">564.2B</p>
</div>
</div>
<div className="h-64 chart-container flex items-end justify-between gap-4 relative">
{/*  Simulated Bar Chart  */}
<div className="flex-1 flex flex-col items-center group/bar">
<div className="w-full bg-surface-container-highest h-[40%] rounded-t-lg transition-all hover:bg-forest-green relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 bg-inverse-surface text-state-white px-2 py-1 text-caption rounded transition-opacity naira">42.1B</div>
</div>
<span className="text-caption mt-2 text-on-surface-variant">Jan</span>
</div>
<div className="flex-1 flex flex-col items-center group/bar">
<div className="w-full bg-surface-container-highest h-[55%] rounded-t-lg transition-all hover:bg-forest-green relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 bg-inverse-surface text-state-white px-2 py-1 text-caption rounded transition-opacity naira">58.3B</div>
</div>
<span className="text-caption mt-2 text-on-surface-variant">Feb</span>
</div>
<div className="flex-1 flex flex-col items-center group/bar">
<div className="w-full bg-primary h-[85%] rounded-t-lg relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-state-white px-2 py-1 text-caption rounded naira">89.4B</div>
</div>
<span className="text-caption mt-2 text-on-surface-variant font-bold">Mar</span>
</div>
<div className="flex-1 flex flex-col items-center group/bar">
<div className="w-full bg-surface-container-highest h-[60%] rounded-t-lg transition-all hover:bg-forest-green relative"></div>
<span className="text-caption mt-2 text-on-surface-variant">Apr</span>
</div>
<div className="flex-1 flex flex-col items-center group/bar">
<div className="w-full bg-surface-container-highest h-[45%] rounded-t-lg transition-all hover:bg-forest-green relative"></div>
<span className="text-caption mt-2 text-on-surface-variant">May</span>
</div>
<div className="flex-1 flex flex-col items-center group/bar">
<div className="w-full bg-surface-container-highest h-[70%] rounded-t-lg transition-all hover:bg-forest-green relative"></div>
<span className="text-caption mt-2 text-on-surface-variant">Jun</span>
</div>
</div>
</div>
{/*  Revenue Sources (Medium)  */}
<div className="col-span-12 lg:col-span-4 bg-surface-container-low border border-outline-variant p-8">
<h2 className="font-headline-md text-headline-md text-primary mb-6">Revenue Mix</h2>
<div className="space-y-6">
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center text-body-md">
<span className="font-semibold">FAAC Allocation</span>
<span className="font-label-md text-primary">62%</span>
</div>
<div className="h-2 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-forest-green" style={{"width":"62%"}}></div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center text-body-md">
<span className="font-semibold">IGR (Internal)</span>
<span className="font-label-md text-primary">28%</span>
</div>
<div className="h-2 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-brass-gold" style={{"width":"28%"}}></div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center text-body-md">
<span className="font-semibold">Grants &amp; Loans</span>
<span className="font-label-md text-primary">10%</span>
</div>
<div className="h-2 bg-surface-variant rounded-full overflow-hidden">
<div className="h-full bg-tertiary" style={{"width":"10%"}}></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant">
<button className="w-full text-center py-2 text-primary font-semibold hover:underline">Download Revenue Audit</button>
</div>
</div>
{/*  KPI Cards  */}
<div className="col-span-12 md:col-span-4 bg-state-white border border-outline-variant p-6 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<span className="material-symbols-outlined text-forest-green p-2 bg-surface-container rounded">engineering</span>
<span className="text-caption text-forest-green font-bold">+12.4% vs LY</span>
</div>
<p className="text-on-surface-variant font-medium mb-1">Capital Expenditure</p>
<p className="font-headline-lg text-headline-lg naira">342.8B</p>
<p className="text-caption text-on-surface-variant mt-2">Allocated to 142 active projects</p>
</div>
<div className="col-span-12 md:col-span-4 bg-state-white border border-outline-variant p-6 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<span className="material-symbols-outlined text-tertiary p-2 bg-tertiary-fixed rounded">payments</span>
<span className="text-caption text-tertiary font-bold">-4.2% vs LY</span>
</div>
<p className="text-on-surface-variant font-medium mb-1">Debt Servicing</p>
<p className="font-headline-lg text-headline-lg naira">84.5B</p>
<p className="text-caption text-on-surface-variant mt-2">Domestic and foreign obligations</p>
</div>
<div className="col-span-12 md:col-span-4 bg-state-white border border-outline-variant p-6 hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<span className="material-symbols-outlined text-secondary p-2 bg-secondary-container rounded">groups</span>
<span className="text-caption text-secondary font-bold">Stable</span>
</div>
<p className="text-on-surface-variant font-medium mb-1">Recurrent Expenditure</p>
<p className="font-headline-lg text-headline-lg naira">136.9B</p>
<p className="text-caption text-on-surface-variant mt-2">Personnel and overhead costs</p>
</div>
{/*  Recent Transactions / Line Items  */}
<div className="col-span-12 bg-state-white border border-outline-variant overflow-hidden">
<div className="px-8 py-6 border-b border-outline-variant flex justify-between items-center">
<h2 className="font-headline-md text-headline-md text-primary">Significant Budget Outflows</h2>
<div className="flex gap-4">
<input className="px-4 py-2 border border-outline-variant rounded bg-surface text-on-surface focus:ring-1 focus:ring-primary outline-none text-body-md" placeholder="Search line items..." type="text" />
<button className="material-symbols-outlined p-2 text-on-surface-variant hover:bg-surface-variant rounded">filter_list</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-semibold">
<th className="px-8 py-4 border-b border-outline-variant">Description</th>
<th className="px-8 py-4 border-b border-outline-variant">Category</th>
<th className="px-8 py-4 border-b border-outline-variant text-right">Amount</th>
<th className="px-8 py-4 border-b border-outline-variant">Status</th>
<th className="px-8 py-4 border-b border-outline-variant">Date</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-surface transition-colors">
<td className="px-8 py-4 font-semibold">Umuahia-Ikot Ekpene Road Rehab</td>
<td className="px-8 py-4">
<span className="px-2 py-1 bg-surface-container-highest text-primary text-caption rounded">Infrastructure</span>
</td>
<td className="px-8 py-4 text-right font-label-md naira">4,200,000,000</td>
<td className="px-8 py-4">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-forest-green"></span>
<span className="text-caption">Disbursed</span>
</div>
</td>
<td className="px-8 py-4 text-on-surface-variant">Oct 12, 2024</td>
</tr>
<tr className="hover:bg-surface transition-colors">
<td className="px-8 py-4 font-semibold">Medical Equipment for General Hospitals</td>
<td className="px-8 py-4">
<span className="px-2 py-1 bg-tertiary-fixed text-tertiary text-caption rounded">Healthcare</span>
</td>
<td className="px-8 py-4 text-right font-label-md naira">1,850,000,000</td>
<td className="px-8 py-4">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="text-caption">Pending Audit</span>
</div>
</td>
<td className="px-8 py-4 text-on-surface-variant">Oct 10, 2024</td>
</tr>
<tr className="hover:bg-surface transition-colors">
<td className="px-8 py-4 font-semibold">Agricultural Seedling Distribution</td>
<td className="px-8 py-4">
<span className="px-2 py-1 bg-secondary-container text-secondary text-caption rounded">Agric &amp; Rural</span>
</td>
<td className="px-8 py-4 text-right font-label-md naira">420,000,000</td>
<td className="px-8 py-4">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-forest-green"></span>
<span className="text-caption">Disbursed</span>
</div>
</td>
<td className="px-8 py-4 text-on-surface-variant">Oct 08, 2024</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="relative bottom-0 w-full bg-surface-container-highest border-t border-outline-variant">
<div className="flex flex-col md:flex-row justify-between items-center py-gutter px-margin-desktop max-w-max-width mx-auto">
<div className="mb-8 md:mb-0">
<span className="font-headline-md text-headline-md text-primary block mb-2">ABIA ONE</span>
<p className="font-caption text-on-surface-variant max-w-sm">
                    © 2024 Abia State Government. All rights reserved. Built for the future of governance. 
                    Institutional transparency is our sovereign mandate.
                </p>
</div>
<div className="grid grid-cols-2 gap-x-12 gap-y-4">
<a className="text-on-surface-variant hover:text-primary transition-colors font-caption underline-offset-4" href="#">Institutional Links</a>
<a className="text-brass-gold underline hover:text-primary transition-colors font-caption underline-offset-4" href="#">Transparency Info</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-caption underline-offset-4" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-caption underline-offset-4" href="#">Contact Support</a>
</div>
</div>
</footer>
{/*  Interactive Layer  */}


      </div>
    </>
  );
}
