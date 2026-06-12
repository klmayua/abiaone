export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { font-family: 'Hanken Grotesk', sans-serif; }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            display: inline-block;\n            vertical-align: middle;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .status-pulse {\n            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n        }\n        @keyframes pulse {\n            0%, 100% { opacity: 1; }\n            50% { opacity: 0.4; }\n        }\n        .custom-scrollbar::-webkit-scrollbar {\n            width: 6px;\n        }\n        .custom-scrollbar::-webkit-scrollbar-track {\n            background: #f1f5ee;\n        }\n        .custom-scrollbar::-webkit-scrollbar-thumb {\n            background: #bec9be;\n            border-radius: 10px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
        
{/*  Sidebar Navigation  */}
<aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline flex flex-col py-6 px-4 z-50">
<div className="mb-8 px-2">
<h1 className="font-headline-md text-headline-md text-forest-green">State Governance</h1>
<p className="font-label-md text-label-md text-on-surface-variant opacity-70">Abia One OS v2.0</p>
</div>
<nav className="flex-grow space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-forest-green dark:text-primary-fixed-dim font-bold bg-surface-container-highest dark:bg-surface-variant rounded-lg transition-all scale-98" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Command Center</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-inverse-surface rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">campaign</span>
<span className="font-label-md text-label-md">Communications</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-inverse-surface rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">agriculture</span>
<span className="font-label-md text-label-md">Agriculture</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-inverse-surface rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">medical_services</span>
<span className="font-label-md text-label-md">Health</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-inverse-surface rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">location_city</span>
<span className="font-label-md text-label-md">GADA</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-inverse-surface rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</a>
</nav>
<div className="mt-auto space-y-1 border-t border-outline-variant pt-4">
<button className="w-full bg-forest-green text-white py-2 rounded-lg font-headline-md text-sm mb-4 flex items-center justify-center gap-2 hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-sm">add</span>
                New Initiative
            </button>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-inverse-surface rounded-lg" href="#">
<span className="material-symbols-outlined">cloud_done</span>
<span className="font-label-md text-label-md">System Status</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-inverse-surface rounded-lg" href="#">
<span className="material-symbols-outlined">help_center</span>
<span className="font-label-md text-label-md">Support</span>
</a>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="ml-64 min-h-screen">
{/*  Top Nav Bar  */}
<header className="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline sticky top-0 z-40">
<div className="flex justify-between items-center px-gutter w-full max-w-max-width mx-auto h-16">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md font-bold text-forest-green dark:text-primary-fixed-dim">Abia One OS</span>
<span className="h-6 w-[1px] bg-outline-variant"></span>
<h2 className="font-headline-md text-headline-md text-on-surface">Emergency Response Center</h2>
</div>
<div className="flex items-center gap-6">
<div className="relative">
<input className="pl-10 pr-4 py-1.5 bg-surface-container-low border border-outline-variant rounded-full text-sm focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none w-64" placeholder="Search resources..." type="text" />
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">search</span>
</div>
<div className="flex items-center gap-4 text-on-surface-variant">
<button className="hover:text-forest-green transition-colors relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-eagle-red rounded-full"></span>
</button>
<button className="hover:text-forest-green transition-colors">
<span className="material-symbols-outlined">account_balance</span>
</button>
<button className="hover:text-forest-green transition-colors">
<span className="material-symbols-outlined">settings</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
<img alt="User profile" data-alt="A professional headshot of a government official wearing a clean suit, looking focused and authoritative. The lighting is crisp and studio-quality, emphasizing a modern corporate aesthetic. The background is a soft, out-of-focus office environment with neutral tones, aligning with a high-fidelity digital governance platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxsJyzW4sSWLxX_efKKi8swhc-JNx7elEV1KC1dR5Ag1r_FNgW3BGlo_7UrdiuHZVQXz_5j6HOmQRnSdqdSGcd07tlzffOPdj_FcJtrCwEEE8f-TdBXA4HynU_drQFaTMI1PVnC51o80zAwevLN5fZcwwEGAl7-nzvnW2rcVmdWb6gQUeJNPUSHLTy0e1eAgTaLzNqPH19AC169aYdMVR8bIur_9NC0w_QYGIZ1T_DdRJuw5NThJYVA7ZoQszH4esJXbr8tbaVe-c" />
</div>
</div>
</div>
</div>
</header>
<div className="p-gutter max-w-max-width mx-auto">
{/*  Alert Banner  */}
<div className="mb-8 flex items-center justify-between p-4 bg-tertiary-container text-on-tertiary-container rounded-lg border border-tertiary animate-pulse">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-3xl">warning</span>
<div>
<p className="font-bold font-headline-md text-sm">CRITICAL ALERT: SEVERE WEATHER WARNING</p>
<p className="text-xs font-body-md opacity-90">Heavy flash flood warning for Umuahia North. Responders on high alert. Deploy emergency drainage teams to Sector 4.</p>
</div>
</div>
<button className="bg-on-tertiary-container text-tertiary px-4 py-1.5 rounded font-bold text-xs uppercase hover:opacity-90 transition-opacity">Acknowledge</button>
</div>
{/*  Dashboard Grid  */}
<div className="bento-grid">
{/*  Resource Deployment Visualization (Large Card)  */}
<section className="col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
<span className="w-1 h-6 bg-brass-gold"></span>
                            Resource Deployment
                        </h3>
<div className="flex gap-2">
<span className="px-3 py-1 bg-surface-container rounded-full text-xs font-label-md text-on-surface-variant">Live Sync</span>
<span className="px-3 py-1 bg-on-primary-container text-forest-green rounded-full text-xs font-label-md flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-forest-green rounded-full status-pulse"></span> Optimal
                            </span>
</div>
</div>
{/*  Stats Grid  */}
<div className="grid grid-cols-3 gap-6 mb-8">
<div className="p-4 bg-surface-container rounded-lg border border-outline-variant/30">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-primary-container">local_police</span>
<span className="text-xs font-label-md text-forest-green">88% Active</span>
</div>
<p className="text-2xl font-bold font-display-lg text-on-surface">142/160</p>
<p className="text-xs text-on-surface-variant font-body-md mb-3">Police Units Deployed</p>
<div className="w-full bg-outline-variant/20 h-1.5 rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[88%]"></div>
</div>
</div>
<div className="p-4 bg-surface-container rounded-lg border border-outline-variant/30">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-eagle-red">medical_services</span>
<span className="text-xs font-label-md text-eagle-red">65% Active</span>
</div>
<p className="text-2xl font-bold font-display-lg text-on-surface">42/65</p>
<p className="text-xs text-on-surface-variant font-body-md mb-3">Ambulances En Route</p>
<div className="w-full bg-outline-variant/20 h-1.5 rounded-full overflow-hidden">
<div className="bg-eagle-red h-full w-[65%]"></div>
</div>
</div>
<div className="p-4 bg-surface-container rounded-lg border border-outline-variant/30">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-brass-gold">engineering</span>
<span className="text-xs font-label-md text-on-secondary-container">92% Active</span>
</div>
<p className="text-2xl font-bold font-display-lg text-on-surface">210/228</p>
<p className="text-xs text-on-surface-variant font-body-md mb-3">SEMA Responders</p>
<div className="w-full bg-outline-variant/20 h-1.5 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[92%]"></div>
</div>
</div>
</div>
{/*  Map/Visual Section  */}
<div className="relative h-80 rounded-xl overflow-hidden border border-outline-variant bg-surface-dim">
<img className="w-full h-full object-cover grayscale opacity-60 mix-blend-multiply" data-alt="A highly detailed satellite map view of an urban Nigerian city, specifically Umuahia, showing intricate street networks and dense building layouts. The map is overlaid with digital data markers in neon forest-green and eagle-red, representing emergency resource locations and incident hotspots. The aesthetic is clean, professional, and analytical, utilizing a desaturated color palette to emphasize the data visualization layers." data-location="Umuahia, Nigeria" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaYnLU9e1BpyFMIRMAMJrVNfBN3PfIYe3Uu2x6ramMLk-hz2a81ml4AnFngTvnjYVPDrdtbd2i01lcv03kAIu5qhRv_yYY1re3-AQuEbN008r1AifvNINJzRkpM7ojWG1VMDnPkUbZpKPBisin2WCXVpvQTNDA0dNWpoZtVP5-1-I4QzfZMFKkEFl3DW0yZztWvw8Ofa70jIzCOn1AstrzYFqTuevE6lxz3q9AZSKuu0L1CU1g1b9JJXEpN7sIfRjtyLvihAB6qIs" />
<div className="absolute top-4 right-4 flex flex-col gap-2">
<button className="bg-surface-container-lowest p-2 shadow-lg rounded-lg hover:bg-surface-container transition-colors"><span className="material-symbols-outlined">layers</span></button>
<button className="bg-surface-container-lowest p-2 shadow-lg rounded-lg hover:bg-surface-container transition-colors"><span className="material-symbols-outlined">my_location</span></button>
</div>
{/*  Mock Map Pins  */}
<div className="absolute top-1/4 left-1/3 w-4 h-4 bg-eagle-red rounded-full border-2 border-white status-pulse shadow-lg"></div>
<div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-forest-green rounded-full border-2 border-white shadow-lg"></div>
<div className="absolute top-1/2 right-1/2 w-3 h-3 bg-brass-gold rounded-full border-2 border-white shadow-lg"></div>
</div>
</section>
{/*  Public Alerts Section  */}
<section className="col-span-4 flex flex-col gap-6">
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm h-full">
<h3 className="font-headline-md text-headline-md text-on-surface mb-6 flex items-center gap-2">
<span className="w-1 h-6 bg-eagle-red"></span>
                            Public Alerts
                        </h3>
<div className="space-y-4 custom-scrollbar overflow-y-auto max-h-[400px] pr-2">
{/*  Weather Advisory  */}
<div className="p-4 bg-surface rounded-lg border-l-4 border-brass-gold shadow-sm">
<div className="flex justify-between items-start mb-1">
<span className="font-bold text-sm text-on-surface">Weather Advisory</span>
<span className="text-[10px] font-label-md text-on-surface-variant">12 MIN AGO</span>
</div>
<p className="text-xs text-on-surface-variant font-body-md leading-relaxed">Incoming storm system expected to reach Aba-Port Harcourt Expressway by 18:00. High risk of hydroplaning.</p>
</div>
{/*  Flash Flood Alert  */}
<div className="p-4 bg-error-container/20 rounded-lg border-l-4 border-error shadow-sm">
<div className="flex justify-between items-start mb-1">
<span className="font-bold text-sm text-on-surface">Flood Warning</span>
<span className="text-[10px] font-label-md text-error">CRITICAL</span>
</div>
<p className="text-xs text-on-surface-variant font-body-md leading-relaxed">River Aba water levels exceeding 4.2m. Low-lying areas in Ndiegoro must evacuate immediately.</p>
</div>
{/*  Health Alert  */}
<div className="p-4 bg-surface rounded-lg border-l-4 border-forest-green shadow-sm">
<div className="flex justify-between items-start mb-1">
<span className="font-bold text-sm text-on-surface">Cholera Prevention</span>
<span className="text-[10px] font-label-md text-on-surface-variant">2 HRS AGO</span>
</div>
<p className="text-xs text-on-surface-variant font-body-md leading-relaxed">State Ministry of Health advises boiling water in Umuahia North following pipeline maintenance.</p>
</div>
</div>
<button className="w-full mt-6 py-2 border border-outline-variant text-on-surface-variant font-label-md text-xs hover:bg-surface-container transition-colors rounded">View All Broadcasts</button>
</div>
</section>
{/*  Road Clearance Status (Full Width Bottom)  */}
<section className="col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-2">
<span className="w-1 h-6 bg-slate-gray"></span>
                            Road Clearance Status
                        </h3>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-forest-green"></span>
<span className="text-xs text-on-surface-variant">Clear</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-brass-gold"></span>
<span className="text-xs text-on-surface-variant">Slow/Work Zone</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-eagle-red"></span>
<span className="text-xs text-on-surface-variant">Blocked</span>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="border-b border-outline-variant">
<tr>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant">Route Name</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant">Current Status</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant">Active Incident</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant">Est. Clearance</th>
<th className="py-3 px-4 font-label-md text-label-md text-on-surface-variant">Assigned Team</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">
<tr className="hover:bg-surface transition-colors">
<td className="py-4 px-4">
<div className="font-bold text-sm text-on-surface">Umuahia - Ikot Ekpene Rd</div>
<div className="text-[10px] text-on-surface-variant">Section KM 12.5</div>
</td>
<td className="py-4 px-4">
<span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold uppercase">Slow</span>
</td>
<td className="py-4 px-4 text-xs font-body-md">Minor Road Surface Repair</td>
<td className="py-4 px-4 text-xs font-label-md">14:45 (Today)</td>
<td className="py-4 px-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border border-surface bg-slate-gray flex items-center justify-center text-[10px] text-white">TM</div>
<div className="w-6 h-6 rounded-full border border-surface bg-forest-green flex items-center justify-center text-[10px] text-white">SE</div>
</div>
</td>
</tr>
<tr className="hover:bg-surface transition-colors">
<td className="py-4 px-4">
<div className="font-bold text-sm text-on-surface">Enugu-Port Harcourt Expy</div>
<div className="text-[10px] text-on-surface-variant">Arungwa Junction</div>
</td>
<td className="py-4 px-4">
<span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container text-[10px] font-bold uppercase">Blocked</span>
</td>
<td className="py-4 px-4 text-xs font-body-md text-error">Heavy Vehicle Collision</td>
<td className="py-4 px-4 text-xs font-label-md text-error">Calculating...</td>
<td className="py-4 px-4">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border border-surface bg-eagle-red flex items-center justify-center text-[10px] text-white">ER</div>
<div className="w-6 h-6 rounded-full border border-surface bg-slate-gray flex items-center justify-center text-[10px] text-white">LE</div>
<div className="w-6 h-6 rounded-full border border-surface bg-brass-gold flex items-center justify-center text-[10px] text-white">HE</div>
</div>
</td>
</tr>
<tr className="hover:bg-surface transition-colors">
<td className="py-4 px-4">
<div className="font-bold text-sm text-on-surface">Aba-Owerri Road</div>
<div className="text-[10px] text-on-surface-variant">Osisioma Flyover Area</div>
</td>
<td className="py-4 px-4">
<span className="px-2 py-0.5 rounded-full bg-on-primary-container/20 text-forest-green text-[10px] font-bold uppercase border border-forest-green/20">Clear</span>
</td>
<td className="py-4 px-4 text-xs font-body-md">None</td>
<td className="py-4 px-4 text-xs font-label-md">N/A</td>
<td className="py-4 px-4">
<span className="text-[10px] text-on-surface-variant italic">Monitoring Only</span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
</div>
{/*  Footer  */}
<footer className="mt-12 bg-surface-container dark:bg-surface-dim border-t border-outline-variant dark:border-outline w-full py-6">
<div className="flex justify-between items-center px-gutter w-full max-w-max-width mx-auto">
<div className="flex items-center gap-4">
<span className="font-label-md text-label-md font-bold text-slate-gray uppercase">Abia One OS</span>
<span className="text-on-surface-variant text-caption font-caption">© 2024 Abia State Government | Digital Infrastructure Division</span>
</div>
<div className="flex gap-6">
<a className="text-on-surface-variant dark:text-outline-variant font-caption text-caption hover:text-forest-green transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a className="text-on-surface-variant dark:text-outline-variant font-caption text-caption hover:text-forest-green transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
<a className="text-on-surface-variant dark:text-outline-variant font-caption text-caption hover:text-forest-green transition-colors opacity-80 hover:opacity-100" href="#">Security Audit</a>
</div>
</div>
</footer>
</main>


      </div>
    </>
  );
}
