"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        body { font-family: 'Hanken Grotesk', sans-serif; background-color: #f6fbf3; }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .card-governance {\n            background: #ffffff;\n            border: 1px solid #E2E8F0;\n            border-radius: 0.25rem;\n            transition: all 0.2s ease;\n        }\n        .card-governance:hover {\n            border-color: #D4AF37;\n        }\n        .brass-accent {\n            border-left: 4px solid #D4AF37;\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="text-on-surface pb-24 md:pb-0">
        
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 bg-background dark:bg-on-background border-b border-outline-variant dark:border-slate-gray">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full max-w-max-width mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green dark:text-primary-fixed-dim" data-icon="account_balance">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green dark:text-primary-fixed-dim tracking-tight">ABIA ONE</h1>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant dark:text-outline-variant hover:opacity-80 transition-opacity active:scale-95" data-icon="notifications">notifications</button>
<div className="hidden md:flex items-center gap-2 px-3 py-1 bg-surface-container rounded-full">
<span className="w-2 h-2 bg-forest-green rounded-full"></span>
<span className="font-label-md text-label-md text-on-surface">Live Network</span>
</div>
</div>
</div>
</header>
<main className="pt-24 px-4 md:px-margin-desktop max-w-max-width mx-auto mb-12">
{/*  Header Section  */}
<div className="mb-8">
<h2 className="font-headline-lg text-headline-lg text-primary mb-2">Agri-Transformation Strategy</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Real-time monitoring of sovereign agricultural performance and support systems.</p>
</div>
{/*  Dashboard Grid  */}
<div className="bento-grid">
{/*  Fertilizer Voucher Tracking (Large Card)  */}
<div className="col-span-12 lg:col-span-8 card-governance p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-forest-green" data-icon="confirmation_number">confirmation_number</span>
                        Fertilizer Voucher Redemption
                    </h3>
<span className="font-label-md text-label-md bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full">Q3 Cycle Active</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface-variant">Issued</span>
<span className="font-display-lg text-display-lg text-forest-green">45,200</span>
<span className="font-caption text-caption text-on-surface-variant">+12% vs last cycle</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface-variant">Redeemed</span>
<span className="font-display-lg text-display-lg text-forest-green">31,840</span>
<div className="w-full bg-surface-container rounded-full h-2 mt-2">
<div className="bg-forest-green h-2 rounded-full" style={{"width":"70%"}}></div>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface-variant">Utilization Rate</span>
<span className="font-display-lg text-display-lg text-forest-green">70.4%</span>
<span className="font-caption text-caption text-forest-green flex items-center gap-1">
<span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span> On Track
                        </span>
</div>
</div>
</div>
{/*  Rainfall Tracking (Medium Card)  */}
<div className="col-span-12 md:col-span-6 lg:col-span-4 card-governance p-6">
<h3 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-forest-green" data-icon="rainy">rainy</span>
                    Rainfall by Zone
                </h3>
<div className="space-y-4">
<div className="flex justify-between items-end border-b border-outline-variant pb-2">
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Abia North</p>
<p className="font-body-lg text-body-lg font-bold">142mm</p>
</div>
<span className="font-caption text-caption text-eagle-red">Below Avg</span>
</div>
<div className="flex justify-between items-end border-b border-outline-variant pb-2">
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Abia Central</p>
<p className="font-body-lg text-body-lg font-bold">188mm</p>
</div>
<span className="font-caption text-caption text-forest-green">Optimal</span>
</div>
<div className="flex justify-between items-end border-b border-outline-variant pb-2">
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Abia South</p>
<p className="font-body-lg text-body-lg font-bold">210mm</p>
</div>
<span className="font-caption text-caption text-brass-gold">Surplus</span>
</div>
</div>
</div>
{/*  Market Price Fluctuations (Medium Card)  */}
<div className="col-span-12 md:col-span-6 lg:col-span-5 card-governance p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-forest-green" data-icon="monitoring">monitoring</span>
                        Commodity Index
                    </h3>
<select className="bg-surface text-label-md font-label-md border-outline rounded px-2 py-1 focus:ring-forest-green">
<option>Weekly View</option>
<option>Monthly View</option>
</select>
</div>
<div className="space-y-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green" data-icon="grass">grass</span>
</div>
<div>
<p className="font-body-lg text-body-lg font-semibold">Cassava (Gari)</p>
<p className="font-caption text-caption text-on-surface-variant">per 100kg bag</p>
</div>
</div>
<div className="text-right">
<p className="font-body-lg text-body-lg font-bold">₦42,500</p>
<p className="font-caption text-caption text-eagle-red flex items-center justify-end">
<span className="material-symbols-outlined text-sm" data-icon="arrow_upward">arrow_upward</span> 4.2%
                            </p>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green" data-icon="bakery_dining">bakery_dining</span>
</div>
<div>
<p className="font-body-lg text-body-lg font-semibold">Yam (Large)</p>
<p className="font-caption text-caption text-on-surface-variant">per 10 units</p>
</div>
</div>
<div className="text-right">
<p className="font-body-lg text-body-lg font-bold">₦18,200</p>
<p className="font-caption text-caption text-forest-green flex items-center justify-end">
<span className="material-symbols-outlined text-sm" data-icon="arrow_downward">arrow_downward</span> 1.8%
                            </p>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green" data-icon="local_drink">local_drink</span>
</div>
<div>
<p className="font-body-lg text-body-lg font-semibold">Palm Oil</p>
<p className="font-caption text-caption text-on-surface-variant">per 25L galloon</p>
</div>
</div>
<div className="text-right">
<p className="font-body-lg text-body-lg font-bold">₦28,000</p>
<p className="font-caption text-caption text-on-surface-variant">Stable</p>
</div>
</div>
</div>
</div>
{/*  Pending Support Applications (Large/Wide List)  */}
<div className="col-span-12 lg:col-span-7 card-governance overflow-hidden">
<div className="p-6 border-b border-outline-variant flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-forest-green" data-icon="pending_actions">pending_actions</span>
                        Pending Support Applications
                    </h3>
<button className="text-forest-green font-label-md text-label-md flex items-center gap-1 hover:underline">
                        View All (142)
                    </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-surface-container-low font-label-md text-label-md text-on-surface-variant">
<tr>
<th className="px-6 py-3">Applicant</th>
<th className="px-6 py-3">Type</th>
<th className="px-6 py-3">Location</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3">Action</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md">
<tr className="border-b border-outline-variant hover:bg-surface transition-colors">
<td className="px-6 py-4">
<p className="font-semibold">Chioma Okeke</p>
<p className="font-caption text-caption text-on-surface-variant">Smallholder ID: 9942</p>
</td>
<td className="px-6 py-4">Micro-Grant</td>
<td className="px-6 py-4">Umuahia South</td>
<td className="px-6 py-4">
<span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full text-xs font-bold uppercase">Reviewing</span>
</td>
<td className="px-6 py-4">
<button className="text-forest-green hover:bg-forest-green hover:text-white p-2 rounded transition-colors">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
</td>
</tr>
<tr className="border-b border-outline-variant hover:bg-surface transition-colors">
<td className="px-6 py-4">
<p className="font-semibold">Ibrahim Tanimu</p>
<p className="font-caption text-caption text-on-surface-variant">Smallholder ID: 8810</p>
</td>
<td className="px-6 py-4">Equipment Lease</td>
<td className="px-6 py-4">Bende LGA</td>
<td className="px-6 py-4">
<span className="bg-error-container text-on-error-container px-2 py-1 rounded-full text-xs font-bold uppercase">Verification</span>
</td>
<td className="px-6 py-4">
<button className="text-forest-green hover:bg-forest-green hover:text-white p-2 rounded transition-colors">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
</td>
</tr>
<tr className="border-b border-outline-variant hover:bg-surface transition-colors">
<td className="px-6 py-4">
<p className="font-semibold">Ukaegbu Cooperative</p>
<p className="font-caption text-caption text-on-surface-variant">Group ID: 1205</p>
</td>
<td className="px-6 py-4">Bulk Fertilizer</td>
<td className="px-6 py-4">Isiala Ngwa</td>
<td className="px-6 py-4">
<span className="bg-surface-container-highest text-on-surface-variant px-2 py-1 rounded-full text-xs font-bold uppercase">Pending</span>
</td>
<td className="px-6 py-4">
<button className="text-forest-green hover:bg-forest-green hover:text-white p-2 rounded transition-colors">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Strategy Snapshot (Side Highlight)  */}
<div className="col-span-12 lg:col-span-5 card-governance bg-primary-container p-6 text-on-primary-container relative overflow-hidden">

<div className="relative z-10">
<h3 className="font-headline-md text-headline-md mb-4">Abia State Sovereign Yield Forecast</h3>
<div className="p-4 bg-white/10 rounded-lg backdrop-blur-md border border-white/20 mb-6">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined" data-icon="insights">insights</span>
<span className="font-label-md text-label-md">2024 Yield Prediction</span>
</div>
<p className="font-display-lg text-display-lg font-bold">128.4 <span className="text-body-lg font-normal">K/MT</span></p>
</div>
<p className="font-body-md text-body-md mb-6">Historical patterns suggest a 15% increase in total yield across cassava and maize corridors if rainfall stabilizes in Abia North by week 38.</p>
<button className="w-full bg-state-white text-forest-green font-label-md text-label-md py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-secondary-fixed transition-colors">
                        Download Full Strategy Report
                        <span className="material-symbols-outlined" data-icon="download">download</span>
</button>
</div>
</div>
</div>
</main>
{/*  BottomNavBar (Mobile Only)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 rounded-t-full bg-surface-container-lowest dark:bg-on-background border-t border-outline-variant dark:border-slate-gray shadow-sm">
<div className="flex justify-around items-center h-20 w-full px-base pb-safe">
<a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-primary-container text-on-secondary-container dark:text-on-primary-container rounded-full px-4 py-1 active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
<span className="font-label-md text-label-md">Hub</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-label-md">Profile</span>
</a>
</div>
</nav>
{/*  Desktop Floating Action Button (Only on Dashboard)  */}
<button className="hidden md:flex fixed bottom-8 right-8 w-14 h-14 bg-forest-green text-white rounded-full shadow-lg items-center justify-center hover:scale-110 active:scale-95 transition-all z-40">
<span className="material-symbols-outlined" data-icon="add">add</span>
</button>


      </div>
    </>
  );
}
