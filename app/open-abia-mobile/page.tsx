"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        body {\n            font-family: 'Hanken Grotesk', sans-serif;\n            background-color: #f6fbf3;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(8px);\n            border: 1px solid #E2E8F0;\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background">
        
{/*  Top Navigation Anchor  */}
<nav className="fixed top-0 left-0 w-full z-50 bg-background border-b border-outline-variant">
<div className="flex items-center justify-between px-margin-mobile md:px-margin-desktop h-16 w-full max-w-max-width mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" data-icon="account_balance">account_balance</span>
<span className="font-headline-lg text-headline-lg font-bold text-forest-green tracking-tight">ABIA ONE</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="font-label-md text-label-md text-forest-green font-bold" href="/home-mobile">Dashboard</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:opacity-80 transition-opacity" href="/open-abia-mobile">MDA Budgets</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:opacity-80 transition-opacity" href="/open-abia-mobile">Procurement</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:opacity-80 transition-opacity" href="#">Inquiries</a>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant active:scale-95 transition-transform" data-icon="notifications">notifications</button>
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">FA</div>
</div>
</div>
</nav>
<main className="pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
{/*  Header Section  */}
<header className="mb-8">
<h1 className="font-display-lg text-display-lg text-forest-green">Open Abia Transparency Portal</h1>
<p className="font-body-lg text-body-lg text-slate-gray max-w-2xl">Centralized administration for the monitoring of state finance, MDA budget utilization, and public accountability metrics.</p>
</header>
{/*  Main Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Key Metric: Budget Utilization  */}
<section className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-6 rounded-lg shadow-sm">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<div className="w-1 h-6 bg-brass-gold"></div>
<h2 className="font-headline-md text-headline-md text-on-surface">Budget Utilization across MDAs</h2>
</div>
<button className="flex items-center gap-2 font-label-md text-label-md text-forest-green border border-forest-green px-4 py-1 rounded">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span> Export PDF
                    </button>
</div>
<div className="space-y-6">
{/*  Progress Item  */}
<div>
<div className="flex justify-between mb-2">
<span className="font-body-md text-body-md font-semibold">Ministry of Works</span>
<span className="font-label-md text-label-md">₦12.4B / ₦15.0B (82%)</span>
</div>
<div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[82%]"></div>
</div>
</div>
{/*  Progress Item  */}
<div>
<div className="flex justify-between mb-2">
<span className="font-body-md text-body-md font-semibold">Ministry of Health</span>
<span className="font-label-md text-label-md">₦4.2B / ₦8.5B (49%)</span>
</div>
<div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[49%]"></div>
</div>
</div>
{/*  Progress Item  */}
<div>
<div className="flex justify-between mb-2">
<span className="font-body-md text-body-md font-semibold">Abia State Road Maintenance Agency</span>
<span className="font-label-md text-label-md">₦6.8B / ₦7.0B (97%)</span>
</div>
<div className="w-full bg-surface-container h-3 rounded-full overflow-hidden">
<div className="bg-eagle-red h-full w-[97%]"></div>
</div>
</div>
</div>
</section>
{/*  Tender Volume Micro Chart  */}
<aside className="md:col-span-4 flex flex-col gap-6">
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg flex-1">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-forest-green" data-icon="contract">contract</span>
<h3 className="font-headline-md text-headline-md text-on-surface">Tender Volume</h3>
</div>
<div className="text-display-lg font-bold text-forest-green">1,402</div>
<p className="font-caption text-caption text-slate-gray mb-6">Active tender responses this quarter</p>
<div className="flex items-end gap-1 h-32">
<div className="bg-primary-container/20 w-full h-[40%] rounded-t-sm"></div>
<div className="bg-primary-container/20 w-full h-[60%] rounded-t-sm"></div>
<div className="bg-primary-container/20 w-full h-[30%] rounded-t-sm"></div>
<div className="bg-forest-green w-full h-[85%] rounded-t-sm"></div>
<div className="bg-primary-container/20 w-full h-[55%] rounded-t-sm"></div>
<div className="bg-primary-container/20 w-full h-[95%] rounded-t-sm"></div>
</div>
</div>
</aside>
{/*  Inquiry Tracker  */}
<section className="md:col-span-12 bg-surface-container-lowest border border-outline-variant p-0 rounded-lg overflow-hidden">
<div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
<h2 className="font-headline-md text-headline-md text-on-surface">Public Accountability Inquiries</h2>
<div className="flex gap-2">
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-caption font-bold">12 UNRESOLVED</span>
<span className="bg-surface-container-highest text-on-surface-variant px-3 py-1 rounded-full text-caption font-bold">85 RESOLVED</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-surface-container text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
<tr>
<th className="px-6 py-4">Ref ID</th>
<th className="px-6 py-4">Citizen Subject</th>
<th className="px-6 py-4">Target Agency</th>
<th className="px-6 py-4">Date Filed</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant font-body-md text-body-md">
<tr className="hover:bg-surface-bright transition-colors">
<td className="px-6 py-4 font-label-md">#AB-204</td>
<td className="px-6 py-4 font-semibold">Umuahia Road Repair Funding Inquiry</td>
<td className="px-6 py-4">Ministry of Works</td>
<td className="px-6 py-4">Oct 12, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-eagle-red">Overdue</span>
</td>
<td className="px-6 py-4">
<button className="text-forest-green hover:underline">Review</button>
</td>
</tr>
<tr className="hover:bg-surface-bright transition-colors">
<td className="px-6 py-4 font-label-md">#AB-208</td>
<td className="px-6 py-4 font-semibold">Education Grant Disbursement Details</td>
<td className="px-6 py-4">Ministry of Education</td>
<td className="px-6 py-4">Oct 14, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-secondary">In Review</span>
</td>
<td className="px-6 py-4">
<button className="text-forest-green hover:underline">Review</button>
</td>
</tr>
<tr className="hover:bg-surface-bright transition-colors">
<td className="px-6 py-4 font-label-md">#AB-211</td>
<td className="px-6 py-4 font-semibold">Aba Market Modernization Tender Inquiry</td>
<td className="px-6 py-4">Trade & Investment</td>
<td className="px-6 py-4">Oct 15, 2023</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-forest-green">Responded</span>
</td>
<td className="px-6 py-4">
<button className="text-forest-green hover:underline">Review</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
{/*  Decorative Visual: Modern Governance Shield  */}
<section className="md:col-span-4 bg-forest-green p-8 rounded-lg text-state-white relative overflow-hidden">
<div className="relative z-10">
<h3 className="font-headline-lg text-headline-lg mb-4">Integrity Driven Governance</h3>
<p className="font-body-md opacity-80 mb-6">"Open Abia" is more than a portal; it is the digital sovereign layer ensuring every Naira serves the people of the state.</p>
<div className="flex items-center gap-4">
<div className="p-3 bg-white/10 rounded-full">
<span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
</div>
<div>
<div className="font-label-md">SECURED BY</div>
<div className="font-bold">Abia Digital Infrastructure</div>
</div>
</div>
</div>
{/*  Abstract Pattern Background  */}
<div className="absolute -right-12 -bottom-12 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
</section>
{/*  Performance Card  */}
<section className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-6 rounded-lg flex flex-col justify-center">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="text-center p-4 border-r border-outline-variant last:border-0">
<div className="font-caption text-caption uppercase text-slate-gray mb-1">Average Response Time</div>
<div className="text-headline-lg font-bold text-on-surface">4.2 Days</div>
<div className="text-forest-green text-caption flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="trending_down">trending_down</span> -12% from last month
                        </div>
</div>
<div className="text-center p-4 border-r border-outline-variant last:border-0">
<div className="font-caption text-caption uppercase text-slate-gray mb-1">Transparency Score</div>
<div className="text-headline-lg font-bold text-on-surface">94/100</div>
<div className="text-forest-green text-caption flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="verified">verified</span> Peer-reviewed
                        </div>
</div>
<div className="text-center p-4 last:border-0">
<div className="font-caption text-caption uppercase text-slate-gray mb-1">Audit Compliance</div>
<div className="text-headline-lg font-bold text-on-surface">100%</div>
<div className="text-forest-green text-caption flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="shield">shield</span> Institutional Standard
                        </div>
</div>
</div>
</section>
</div>
</main>
{/*  Bottom Navigation Shell (Mobile)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 rounded-t-full bg-surface-container-lowest border-t border-outline-variant shadow-sm px-base pb-safe h-20 flex justify-around items-center">
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90 transition-transform" href="/home-mobile">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
<span className="font-label-md text-label-md">Hub</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 active:scale-90 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-label-md">Profile</span>
</a>
</nav>


      </div>
    </>
  );
}
