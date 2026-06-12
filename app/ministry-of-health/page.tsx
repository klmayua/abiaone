"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { font-family: 'Hanken Grotesk', sans-serif; }\n        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }\n        .custom-scrollbar::-webkit-scrollbar { width: 4px; }\n        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }\n        .custom-scrollbar::-webkit-scrollbar-thumb { background: #bec9be; border-radius: 10px; }\n        .bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px; }\n        .card-clinical { background: #ffffff; border: 1px solid #E2E8F0; transition: box-shadow 0.2s ease; }\n        .card-clinical:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.05); }\n        .brass-accent { border-top: 3px solid #D4AF37; }" }} />
  
      {/* Screen markup */}
      <div className="bg-surface text-on-surface">
        
{/*  SIDE NAVIGATION (SideNavBar Anchor)  */}
<aside className="hidden md:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant py-6 px-4 z-50">
<div className="mb-10 px-2">
<h2 className="font-headline-md text-headline-md text-forest-green font-bold leading-tight">Abia State</h2>
<p className="font-label-md text-label-md text-on-surface-variant opacity-70">Health OS v2.0</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-forest-green font-bold bg-surface-container-highest transition-all" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Health Index</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined">medical_services</span>
<span className="font-label-md text-label-md">Facility Readiness</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined">vaccines</span>
<span className="font-label-md text-label-md">Immunization</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined">inventory_2</span>
<span className="font-label-md text-label-md">Supply Chain</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined">forum</span>
<span className="font-label-md text-label-md">Citizen Feedback</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-md text-label-md">Public Records</span>
</a>
</nav>
<div className="mt-auto pt-6 border-t border-outline-variant space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined">cloud_done</span>
<span className="font-label-md text-label-md">System Status</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined">help_center</span>
<span className="font-label-md text-label-md">Support</span>
</a>
<div className="mt-4 px-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-forest-green/10 flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green text-sm">person</span>
</div>
<div>
<p className="font-label-md text-label-md font-bold leading-none">Hon. Comm.</p>
<p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Health Ministry</p>
</div>
</div>
</div>
</aside>
{/*  MAIN CONTENT  */}
<main className="md:ml-64 min-h-screen">
{/*  TOP NAV BAR (TopNavBar Anchor)  */}
<header className="flex justify-between items-center px-gutter w-full h-16 bg-surface border-b border-outline-variant sticky top-0 z-40">
<div className="flex items-center gap-4">
<h1 className="font-headline-md text-headline-md font-bold text-forest-green">ABIA Care Health OS</h1>
<span className="bg-primary-fixed text-on-primary-fixed text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-widest">Sovereign Data</span>
</div>
<div className="flex items-center gap-6">
<div className="relative hidden lg:block">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span>
<input className="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-1.5 w-64 text-sm focus:ring-2 focus:ring-forest-green transition-all" placeholder="Search facilities, staff, or codes..." type="text" />
</div>
<div className="flex items-center gap-4 text-on-surface-variant">
<button className="hover:text-forest-green transition-colors"><span className="material-symbols-outlined">notifications</span></button>
<button className="hover:text-forest-green transition-colors"><span className="material-symbols-outlined">account_balance</span></button>
<button className="hover:text-forest-green transition-colors"><span className="material-symbols-outlined">settings</span></button>
</div>
</div>
</header>
{/*  DASHBOARD BODY  */}
<div className="p-gutter max-w-max-width mx-auto">
{/*  ALERT HEADER (Urgent Intervention)  */}
<div className="mb-8 flex flex-col md:flex-row items-center gap-4 p-4 bg-eagle-red/5 border border-eagle-red/20 rounded-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-eagle-red animate-pulse" style={{"fontVariationSettings":"'FILL' 1"}}>warning</span>
<span className="font-bold text-eagle-red font-headline-md text-body-md uppercase tracking-wider">Urgent Intervention Alerts:</span>
</div>
<div className="flex-1 overflow-hidden">
<div className="whitespace-nowrap font-body-md text-on-surface-variant">
<span className="font-bold">Cholera Watch:</span> High incidence detected in Aba South. Deployment of medical teams required. &nbsp;&nbsp; | &nbsp;&nbsp; <span className="font-bold">Facility Offline:</span> Umuahia General Hospital reporting generator failure.
                    </div>
</div>
<button className="px-4 py-1.5 bg-eagle-red text-white font-label-md text-label-md rounded hover:bg-tertiary transition-colors">Action Protocol</button>
</div>
{/*  PRIMARY BENTO GRID  */}
<div className="bento-grid">
{/*  STATE HEALTH INDEX  */}
<section className="col-span-12 lg:col-span-8 card-clinical brass-accent p-6 rounded-xl relative overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">State Health Index</h3>
<p className="font-body-md text-on-surface-variant">Cumulative performance across 17 LGAs</p>
</div>
<div className="text-right">
<span className="text-display-lg font-display-lg text-forest-green">84.2<span className="text-headline-md">%</span></span>
<p className="font-label-md text-label-md text-secondary">+2.4% vs last Qtr</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="font-label-md text-label-md uppercase text-on-surface-variant">Primary Health Care (PHC)</span>
<span className="font-bold text-forest-green">88%</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full">
<div className="bg-forest-green h-full rounded-full w-[88%]"></div>
</div>
<p className="text-caption font-caption text-on-surface-variant">154/180 facilities operational with essential medicine stocks.</p>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="font-label-md text-label-md uppercase text-on-surface-variant">Secondary Care (Hospitals)</span>
<span className="font-bold text-brass-gold">76%</span>
</div>
<div className="w-full bg-surface-container-high h-2 rounded-full">
<div className="bg-brass-gold h-full rounded-full w-[76%]"></div>
</div>
<p className="text-caption font-caption text-on-surface-variant">Specialized equipment readiness and specialist staffing levels.</p>
</div>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant grid grid-cols-3 gap-4">
<div className="text-center">
<p className="text-display-lg font-display-lg text-slate-gray/20 absolute -bottom-4 right-4 pointer-events-none">ABIA</p>
<p className="font-headline-md text-headline-md text-on-surface">1.2M</p>
<p className="text-caption font-caption text-on-surface-variant uppercase">Patients Treated</p>
</div>
<div className="text-center">
<p className="font-headline-md text-headline-md text-on-surface">320</p>
<p className="text-caption font-caption text-on-surface-variant uppercase">Medical Staff Hired</p>
</div>
<div className="text-center">
<p className="font-headline-md text-headline-md text-on-surface">92%</p>
<p className="text-caption font-caption text-on-surface-variant uppercase">Digital EHR Adoption</p>
</div>
</div>
</section>
{/*  FACILITY READINESS MAP  */}
<section className="col-span-12 lg:col-span-4 card-clinical p-0 rounded-xl overflow-hidden flex flex-col">
<div className="p-6 border-b border-outline-variant bg-surface-container-low">
<h3 className="font-headline-md text-headline-md text-on-surface">Facility Readiness</h3>
<p className="font-body-md text-on-surface-variant">Real-time capacity tracking</p>
</div>
<div className="flex-1 min-h-[300px] relative bg-slate-100 group">
{/*  Simulated Map View  */}
<img className="w-full h-full object-cover" data-alt="A sophisticated data-driven digital map of a territory, showing geographical regions highlighted in varying shades of forest green and brass gold to represent medical facility readiness. The map is overlaid with clean white markers and pulsing data points. The lighting is bright and modern, suggesting a high-trust institutional control room environment. Professional, sleek, and analytical aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC40xx5bsRnvqMgWPqTBiEpcx0b87QECKXOyLWt24tk7tdTUHTUqRWmY8SICXy1_QceYqvWWh8WpD9lIm09xFfyh28M12weHSi1OCul3esToMPjCZPjwv80kBiz3BfoS8VcSHfWnBESWpigBEqkyGtwjGOkI3rXWo6zbQCTwhHhtug1B-SwzC8Q_0tmDcigqz1XogShDfT0X1C8z80g_6zXkVMjTcNuvcYnazGan0-HaHtS0TkouU7XI-o6SWyhnPUkC2FnmSRux68" />
<div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all pointer-events-none"></div>
{/*  Map Legend Overlay  */}
<div className="absolute bottom-4 left-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-lg border border-outline-variant shadow-lg">
<div className="flex justify-between items-center text-caption font-caption">
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-forest-green"></span> Full Readiness</div>
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-brass-gold"></span> Maintenance</div>
<div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-eagle-red"></span> Critical</div>
</div>
</div>
</div>
</section>
{/*  IMMUNIZATION COVERAGE TRACKER  */}
<section className="col-span-12 md:col-span-6 lg:col-span-4 card-clinical p-6 rounded-xl">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md text-on-surface">Immunization</h3>
<span className="material-symbols-outlined text-forest-green">vaccines</span>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center font-bold text-forest-green">BCG</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="font-label-md text-label-md">Coverage</span>
<span className="font-bold">94%</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[94%]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center font-bold text-forest-green">OPV</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="font-label-md text-label-md">Coverage</span>
<span className="font-bold">89%</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[89%]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded bg-surface-container-highest flex items-center justify-center font-bold text-forest-green">COV</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="font-label-md text-label-md">Coverage</span>
<span className="font-bold">62%</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[62%]"></div>
</div>
</div>
</div>
</div>
<button className="w-full mt-6 py-2 border border-outline text-on-surface-variant font-label-md text-label-md rounded hover:bg-surface-container transition-all">View Campaign Details</button>
</section>
{/*  MEDICAL SUPPLY CHAIN STATUS  */}
<section className="col-span-12 md:col-span-6 lg:col-span-5 card-clinical p-6 rounded-xl">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md text-on-surface">Supply Chain</h3>
<span className="material-symbols-outlined text-forest-green">local_shipping</span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="border-b border-outline-variant">
<tr>
<th className="pb-3 font-label-md text-label-md text-on-surface-variant">Item</th>
<th className="pb-3 font-label-md text-label-md text-on-surface-variant">Stock Level</th>
<th className="pb-3 font-label-md text-label-md text-on-surface-variant">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr>
<td className="py-4 font-body-md">Anti-Malarials</td>
<td className="py-4">
<span className="font-label-md text-label-md">14,200 Units</span>
</td>
<td className="py-4">
<span className="px-2 py-1 rounded-full bg-forest-green/10 text-forest-green font-bold text-[10px] uppercase">Healthy</span>
</td>
</tr>
<tr>
<td className="py-4 font-body-md">Surgical Kits</td>
<td className="py-4">
<span className="font-label-md text-label-md">840 Units</span>
</td>
<td className="py-4">
<span className="px-2 py-1 rounded-full bg-secondary-container text-on-secondary-container font-bold text-[10px] uppercase">Reorder</span>
</td>
</tr>
<tr>
<td className="py-4 font-body-md">Insulin Vials</td>
<td className="py-4">
<span className="font-label-md text-label-md">2,150 Units</span>
</td>
<td className="py-4">
<span className="px-2 py-1 rounded-full bg-forest-green/10 text-forest-green font-bold text-[10px] uppercase">Healthy</span>
</td>
</tr>
<tr>
<td className="py-4 font-body-md">Oxytocin</td>
<td className="py-4">
<span className="font-label-md text-label-md">120 Units</span>
</td>
<td className="py-4">
<span className="px-2 py-1 rounded-full bg-eagle-red/10 text-eagle-red font-bold text-[10px] uppercase opacity-50">Critical</span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
{/*  CITIZEN HEALTH SENTIMENT  */}
<section className="col-span-12 lg:col-span-3 card-clinical p-6 rounded-xl bg-surface-container">
<div className="mb-4">
<h3 className="font-headline-md text-headline-md text-on-surface">Citizen Sentiment</h3>
<p className="font-body-md text-on-surface-variant">Real-time public trust index</p>
</div>
<div className="flex flex-col items-center justify-center py-4">
<div className="relative w-32 h-32">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-surface-container-highest" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-forest-green transition-all duration-1000" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="91.1" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-display-lg text-headline-md text-forest-green">75%</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Positive</span>
</div>
</div>
</div>
<div className="space-y-4 mt-2">
<div className="p-3 bg-white rounded border border-outline-variant">
<p className="text-caption font-caption text-on-surface italic">"Wait times at Aba General have improved significantly this month."</p>
<p className="text-[10px] font-bold text-forest-green mt-1">— Verified Resident</p>
</div>
<div className="p-3 bg-white rounded border border-outline-variant">
<p className="text-caption font-caption text-on-surface italic">"We need more doctors in the rural clinics near Bende."</p>
<p className="text-[10px] font-bold text-brass-gold mt-1">— Feedback Portal</p>
</div>
</div>
</section>
</div>
</div>
{/*  FOOTER (Footer Anchor)  */}
<footer className="mt-12 bg-surface-container border-t border-outline-variant">
<div className="flex justify-between items-center px-gutter w-full max-w-max-width mx-auto py-8">
<div>
<p className="font-label-md text-label-md font-bold text-slate-gray">ABIA ONE OS</p>
<p className="font-caption text-caption text-on-surface-variant">© 2024 Abia State Government | Digital Infrastructure Division</p>
</div>
<div className="flex gap-8">
<a className="font-caption text-caption text-on-surface-variant hover:text-forest-green transition-colors" href="#">Privacy Policy</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-forest-green transition-colors" href="#">Terms of Service</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-forest-green transition-colors" href="#">Security Audit</a>
</div>
</div>
</footer>
</main>
{/*  FAB (Contextual)  */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-forest-green text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 transition-transform active:scale-95 group z-50">
<span className="material-symbols-outlined">add</span>
<div className="absolute right-16 bg-inverse-surface text-inverse-on-surface px-4 py-2 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            New Health Initiative
        </div>
</button>


      </div>
    </>
  );
}
