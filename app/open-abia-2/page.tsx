"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-panel {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(10px);\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        ::-webkit-scrollbar {\n            width: 8px;\n        }\n        ::-webkit-scrollbar-track {\n            background: #f1f5ee;\n        }\n        ::-webkit-scrollbar-thumb {\n            background: #bec9be;\n            border-radius: 4px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md overflow-x-hidden">
        
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-background dark:bg-inverse-surface border-b border-outline-variant dark:border-outline">
<div className="flex justify-between items-center px-margin-desktop h-20 max-w-max-width mx-auto">
<div className="flex items-center gap-4">
<span className="font-display-lg text-display-lg font-bold text-primary dark:text-primary-fixed">ABIA ONE</span>
<div className="h-8 w-px bg-outline-variant mx-2 hidden md:block"></div>
<span className="font-headline-md text-headline-md text-primary dark:text-inverse-primary hidden md:block">Registry</span>
</div>
<div className="hidden lg:flex gap-8 items-center">
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary transition-colors" href="/economic-transformation">Economy</a>
<a className="text-primary dark:text-primary-fixed-dim border-b-2 border-brass-gold font-semibold pb-1" href="/serve-abia">Digital Gov</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary transition-colors" href="/local-governance">Governance</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary transition-colors" href="/secure-abia">Security</a>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden md:block">
<input className="bg-surface-container-low border border-outline px-4 py-2 pl-10 rounded-lg text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="Search registry..." type="text" />
<span className="material-symbols-outlined absolute left-3 top-2 text-on-surface-variant">search</span>
</div>
<button className="bg-forest-green text-on-primary px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all active:scale-95">Citizen Portal</button>
</div>
</div>
</nav>
{/*  SideNavBar  */}
<aside className="fixed left-0 top-20 h-screen w-64 bg-surface-container-low dark:bg-surface-dim border-r border-outline-variant hidden lg:flex flex-col py-6">
<div className="px-6 mb-8">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 rounded-full overflow-hidden border border-brass-gold">
<img className="w-full h-full object-cover" data-alt="Close up professional portrait of a government official with a friendly yet authoritative expression. The lighting is soft and corporate, set against a blurred modern architectural interior featuring clean lines and neutral tones, emphasizing a professional governance aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhdeF1Ub6lYwH9olBR5OnowrTZmYkLXr-I1wxToHQucbd8HL7ATHjafCUPNT_Ly4xIGO7th-xLBK-SqI4UWIflshlAVsUvblIvIqMxfRNBOy2yvs33R-nGCK06Gz-6NhgLrTKkLpzYI63iQ0MNaP0rmQVcgs1p9XzruZIJoGo2o_iM_8vPZb9yWe2Cn2vnUfUpRDaqqyZWrMEzs1YpmCO2ulEQyDfre3onky1XtvzcumZF0mvdwMs1hhLHw2QTFWdRPSeuG_R9ROw" />
</div>
<div>
<p className="font-headline-md text-sm font-bold text-primary">State OS</p>
<p className="text-xs text-on-surface-variant">Active Session</p>
</div>
</div>
</div>
<div className="flex-grow">
<nav className="space-y-1">
<a className="flex items-center gap-4 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors" href="/economic-transformation">
<span className="material-symbols-outlined">payments</span>
<span className="font-body-md">Economic Transformation</span>
</a>
<a className="flex items-center gap-4 text-forest-green font-bold border-l-4 border-brass-gold bg-surface-container-high px-6 py-3" href="/serve-abia">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>account_balance</span>
<span className="font-body-md">Digital Government</span>
</a>
<a className="flex items-center gap-4 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors" href="/local-governance">
<span className="material-symbols-outlined">gavel</span>
<span className="font-body-md">Transparent Governance</span>
</a>
<a className="flex items-center gap-4 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined">verified_user</span>
<span className="font-body-md">Public Trust</span>
</a>
</nav>
</div>
<div className="px-6 mt-auto pb-24 border-t border-outline-variant pt-4">
<a className="flex items-center gap-4 text-on-surface-variant py-2 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-sm">Settings</span>
</a>
<a className="flex items-center gap-4 text-on-surface-variant py-2 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">help</span>
<span className="text-sm">Support</span>
</a>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="lg:ml-64 pt-24 pb-12 px-4 md:px-gutter">
<div className="max-w-max-width mx-auto">
{/*  Header Section  */}
<div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
<div>
<h1 className="font-headline-lg text-headline-lg text-primary mb-2">Procurement Registry</h1>
<p className="text-body-md text-on-surface-variant max-w-2xl">Ensuring transparency and accountability in all state contract awards and tender processes. Real-time monitoring of Abia State's developmental expenditures.</p>
</div>
<div className="flex gap-3 w-full md:w-auto">
<button className="flex-1 md:flex-none flex items-center justify-center gap-2 border-2 border-brass-gold text-secondary font-medium px-6 py-2 rounded-lg hover:bg-secondary-container transition-colors" id="exportCsv">
<span className="material-symbols-outlined text-xl">download</span>
                        Export CSV
                    </button>
<button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-forest-green text-on-primary font-medium px-6 py-2 rounded-lg hover:opacity-90 shadow-sm transition-all active:scale-95">
<span className="material-symbols-outlined text-xl">add</span>
                        New Tender
                    </button>
</div>
</div>
{/*  Bento Stats Grid  */}
<div className="bento-grid mb-8">
<div className="col-span-12 md:col-span-4 bg-surface-container-low border border-outline-variant p-6 rounded-xl flex items-center gap-5">
<div className="w-12 h-12 rounded-lg bg-primary-container flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined text-3xl">contract</span>
</div>
<div>
<p className="text-on-surface-variant text-sm font-medium">Active Tenders</p>
<p className="font-display-lg text-2xl font-bold text-primary">142</p>
</div>
</div>
<div className="col-span-12 md:col-span-4 bg-surface-container-low border border-outline-variant p-6 rounded-xl flex items-center gap-5">
<div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined text-3xl">payments</span>
</div>
<div>
<p className="text-on-surface-variant text-sm font-medium">Total Awarded (Q3)</p>
<p className="font-display-lg text-2xl font-bold text-primary">₦12.4B</p>
</div>
</div>
<div className="col-span-12 md:col-span-4 bg-surface-container-low border border-outline-variant p-6 rounded-xl flex items-center gap-5">
<div className="w-12 h-12 rounded-lg bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
<span className="material-symbols-outlined text-3xl">trending_up</span>
</div>
<div>
<p className="text-on-surface-variant text-sm font-medium">Avg. Performance Rating</p>
<div className="flex items-center gap-2">
<p className="font-display-lg text-2xl font-bold text-primary">4.8</p>
<span className="text-xs text-forest-green bg-primary-fixed px-2 py-0.5 rounded">+0.3%</span>
</div>
</div>
</div>
</div>
{/*  Filters Bar  */}
<div className="bg-surface-container p-4 rounded-lg mb-6 border border-outline-variant flex flex-wrap gap-4 items-center">
<span className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Filters:</span>
<select className="bg-white border border-outline px-3 py-2 rounded text-sm focus:ring-forest-green outline-none min-w-[160px]">
<option>All Sectors</option>
<option>Infrastructure</option>
<option>Health</option>
<option>Education</option>
<option>Digital Economy</option>
</select>
<select className="bg-white border border-outline px-3 py-2 rounded text-sm focus:ring-forest-green outline-none min-w-[160px]">
<option>All Status</option>
<option>Awarded</option>
<option>Active Tender</option>
<option>Evaluation</option>
</select>
<div className="flex-grow"></div>
<div className="flex bg-white rounded border border-outline overflow-hidden">
<button className="px-4 py-2 text-sm bg-surface-container-highest text-primary font-bold">List View</button>
<button className="px-4 py-2 text-sm text-on-surface-variant hover:bg-surface-variant">Grid View</button>
</div>
</div>
{/*  Transparent Registry Table  */}
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-outline-variant">
<th className="px-6 py-4 font-headline-md text-sm text-primary uppercase tracking-wider">Project Details</th>
<th className="px-6 py-4 font-headline-md text-sm text-primary uppercase tracking-wider">Sector</th>
<th className="px-6 py-4 font-headline-md text-sm text-primary uppercase tracking-wider">Value</th>
<th className="px-6 py-4 font-headline-md text-sm text-primary uppercase tracking-wider">Status</th>
<th className="px-6 py-4 font-headline-md text-sm text-primary uppercase tracking-wider">Performance</th>
<th className="px-6 py-4 font-headline-md text-sm text-primary uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
{/*  Row 1  */}
<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="px-6 py-5">
<div>
<p className="font-bold text-on-surface">Umuahia Township Road Reconstruction</p>
<p className="text-xs text-on-surface-variant">ID: AB/WORKS/2024/082</p>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
<span className="material-symbols-outlined text-sm">construction</span> Infrastructure
                                    </span>
</td>
<td className="px-6 py-5">
<span className="font-label-md text-sm">₦1,240,000,000</span>
</td>
<td className="px-6 py-5">
<span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 uppercase tracking-tighter">Awarded</span>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-1 text-brass-gold">
<span className="material-symbols-outlined text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star_half</span>
<span className="text-on-surface-variant text-xs ml-1">(4.5)</span>
</div>
</td>
<td className="px-6 py-5 text-right">
<button className="text-forest-green hover:underline font-bold text-sm">View Details</button>
</td>
</tr>
{/*  Row 2  */}
<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="px-6 py-5">
<div>
<p className="font-bold text-on-surface">Digital Skills Training Hub (Aba North)</p>
<p className="text-xs text-on-surface-variant">ID: AB/DIGI/2024/015</p>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200">
<span className="material-symbols-outlined text-sm">computer</span> Digital Gov
                                    </span>
</td>
<td className="px-6 py-5">
<span className="font-label-md text-sm">₦450,000,000</span>
</td>
<td className="px-6 py-5">
<span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 uppercase tracking-tighter">Active Tender</span>
</td>
<td className="px-6 py-5">
<span className="text-xs text-on-surface-variant italic">New Contractor</span>
</td>
<td className="px-6 py-5 text-right">
<button className="text-forest-green hover:underline font-bold text-sm">Submit Bid</button>
</td>
</tr>
{/*  Row 3  */}
<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="px-6 py-5">
<div>
<p className="font-bold text-on-surface">State General Hospital Medical Supply</p>
<p className="text-xs text-on-surface-variant">ID: AB/HEALTH/2024/009</p>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-red-50 text-red-700 text-xs font-bold border border-red-200">
<span className="material-symbols-outlined text-sm">medical_services</span> Health
                                    </span>
</td>
<td className="px-6 py-5">
<span className="font-label-md text-sm">₦85,000,000</span>
</td>
<td className="px-6 py-5">
<span className="px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800 uppercase tracking-tighter">Awarded</span>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-1 text-brass-gold">
<span className="material-symbols-outlined text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="text-on-surface-variant text-xs ml-1">(5.0)</span>
</div>
</td>
<td className="px-6 py-5 text-right">
<button className="text-forest-green hover:underline font-bold text-sm">View Details</button>
</td>
</tr>
{/*  Row 4  */}
<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="px-6 py-5">
<div>
<p className="font-bold text-on-surface">Public School Furniture Procurement</p>
<p className="text-xs text-on-surface-variant">ID: AB/EDU/2024/112</p>
</div>
</td>
<td className="px-6 py-5">
<span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
<span className="material-symbols-outlined text-sm">school</span> Education
                                    </span>
</td>
<td className="px-6 py-5">
<span className="font-label-md text-sm">₦120,000,000</span>
</td>
<td className="px-6 py-5">
<span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 uppercase tracking-tighter">Evaluation</span>
</td>
<td className="px-6 py-5">
<div className="flex items-center gap-1 text-brass-gold">
<span className="material-symbols-outlined text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-lg">star</span>
<span className="material-symbols-outlined text-lg">star</span>
<span className="text-on-surface-variant text-xs ml-1">(3.2)</span>
</div>
</td>
<td className="px-6 py-5 text-right">
<button className="text-forest-green hover:underline font-bold text-sm">View Details</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-4 border-t border-outline-variant bg-surface-container-low flex justify-between items-center">
<p className="text-xs text-on-surface-variant">Showing 1 to 10 of 142 projects</p>
<div className="flex gap-2">
<button className="w-8 h-8 rounded border border-outline flex items-center justify-center text-on-surface-variant hover:bg-white transition-all"><span className="material-symbols-outlined">chevron_left</span></button>
<button className="w-8 h-8 rounded bg-forest-green text-white font-bold text-xs">1</button>
<button className="w-8 h-8 rounded border border-outline flex items-center justify-center text-on-surface-variant hover:bg-white transition-all text-xs font-bold">2</button>
<button className="w-8 h-8 rounded border border-outline flex items-center justify-center text-on-surface-variant hover:bg-white transition-all text-xs font-bold">3</button>
<button className="w-8 h-8 rounded border border-outline flex items-center justify-center text-on-surface-variant hover:bg-white transition-all"><span className="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
</div>
{/*  Transparency Visualization Section  */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-lg text-primary">Sector Allocation Breakdown</h3>
<span className="material-symbols-outlined text-on-surface-variant">pie_chart</span>
</div>
<div className="space-y-4">
<div className="space-y-1">
<div className="flex justify-between text-sm">
<span>Infrastructure</span>
<span className="font-bold">54%</span>
</div>
<div className="w-full bg-outline-variant h-2 rounded-full overflow-hidden">
<div className="bg-forest-green h-full rounded-full" style={{"width":"54%"}}></div>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-sm">
<span>Health</span>
<span className="font-bold">22%</span>
</div>
<div className="w-full bg-outline-variant h-2 rounded-full overflow-hidden">
<div className="bg-eagle-red h-full rounded-full" style={{"width":"22%"}}></div>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-sm">
<span>Digital Economy</span>
<span className="font-bold">18%</span>
</div>
<div className="w-full bg-outline-variant h-2 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full rounded-full" style={{"width":"18%"}}></div>
</div>
</div>
</div>
</div>
<div className="bg-white border-2 border-dashed border-outline-variant p-6 rounded-xl flex flex-col items-center justify-center text-center">
<div className="w-16 h-16 rounded-full bg-surface-container mb-4 flex items-center justify-center">
<span className="material-symbols-outlined text-3xl text-forest-green">verified</span>
</div>
<h3 className="font-headline-md text-lg text-primary mb-2">Verified Open Contracting</h3>
<p className="text-sm text-on-surface-variant max-w-xs mb-6">All data presented here follows the Open Contracting Data Standard (OCDS) for global transparency benchmarks.</p>
<button className="bg-brass-gold text-secondary font-bold px-6 py-2 rounded shadow-sm hover:scale-105 transition-all">Audit Full Log</button>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="relative bottom-0 w-full bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant dark:border-outline">
<div className="flex flex-col md:flex-row justify-between items-center py-gutter px-margin-desktop max-w-max-width mx-auto">
<div className="mb-6 md:mb-0">
<span className="font-headline-md text-headline-md text-primary block mb-2">ABIA ONE</span>
<p className="font-caption text-caption text-on-surface-variant">© 2024 Abia State Government. All rights reserved. Built for the future of governance.</p>
</div>
<div className="flex gap-8">
<a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium underline underline-offset-4" href="#">Institutional Links</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium underline underline-offset-4" href="#">Transparency Info</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium underline underline-offset-4" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-sm font-medium underline underline-offset-4" href="#">Contact Support</a>
</div>
</div>
</footer>


      </div>
    </>
  );
}
