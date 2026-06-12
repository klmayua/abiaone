"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .brass-accent-line {\n            height: 2px;\n            width: 40px;\n            background-color: #D4AF37;\n            margin-bottom: 8px;\n        }\n        .water-card-gradient {\n            background: linear-gradient(135deg, #f6fbf3 0%, #ebefe8 100%);\n        }\n        ::-webkit-scrollbar {\n            width: 8px;\n        }\n        ::-webkit-scrollbar-track {\n            background: #f1f5ee;\n        }\n        ::-webkit-scrollbar-thumb {\n            background: #bec9be;\n            border-radius: 4px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
        
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-8">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep">ABIA ONE</span>
<div className="hidden md:flex gap-6">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/economic-transformation">Economy</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/serve-abia">Digital Gov</a>
<a className="font-label-md text-label-md text-primary border-b-2 border-brass-gold pb-1" href="/local-governance">Governance</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/secure-abia">Security</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 px-4 py-2 border border-brass-gold text-secondary font-medium rounded-lg hover:bg-secondary-container/20 transition-all">
<span className="material-symbols-outlined text-sm">emergency</span> Emergency
            </button>
<button className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:opacity-90 active:scale-95 transition-all">
                Citizen Portal
            </button>
</div>
</nav>
<div className="flex pt-16 flex-1">
{/*  SideNavBar (Desktop Only)  */}
<aside className="hidden lg:flex flex-col h-[calc(100vh-64px)] w-64 fixed left-0 top-16 bg-surface-container-low border-r border-outline-variant">
<div className="p-6 flex flex-col gap-1">
<div className="flex items-center gap-3 mb-6">
<img alt="Abia State Crest" className="w-10 h-10 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3K7rHSJXdihBHTghgaa_bXHHCHO3aJGX6r0eHlenb5H6f7Y0yoNI5OWrwfjJQUouBVC2r-MYYsIeAwoKpsgMK22llrN7M7IwxSmaEWmfJ8XxS_H6XQ9FDwlFnDF1YDA0Y4-43cAaqgYkQooQa06MEiYipA-RHw7hewCoOMgw4P22CXJxDQwbytPXLerphs4IwcPBtEVhcz3TDZgLzQ3_JZzwYT5YDgL1uj_zwb0qh9D_QAmk402Dp40OLmWIfKLKgJqoJlaZRceI" />
<div>
<p className="font-headline-md text-headline-md font-bold text-forest-deep leading-tight">ABIA ONE</p>
<p className="font-caption text-caption text-on-surface-variant">Modern Governance OS</p>
</div>
</div>
<nav className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="/economic-transformation">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-md text-label-md">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="/serve-abia">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-md text-label-md">Digital Government</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg translate-x-1" href="/local-governance">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>mitre</span>
<span className="font-label-md text-label-md">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="/secure-abia">
<span className="material-symbols-outlined">security</span>
<span className="font-label-md text-label-md">Public Trust</span>
</a>
</nav>
</div>
<div className="mt-auto p-6 border-t border-outline-variant">
<button className="w-full mb-6 py-2 px-4 bg-brass-gold/10 text-secondary border border-brass-gold rounded-lg font-medium hover:bg-brass-gold/20 transition-all">
                    Citizen Feedback
                </button>
<div className="flex flex-col gap-2">
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-label-md text-label-md">Support</span>
</a>
</div>
</div>
</aside>
{/*  Main Content  */}
<main className="flex-1 ml-0 lg:ml-64 p-margin-mobile md:p-8 max-w-7xl mx-auto w-full">
{/*  Hero Header  */}
<header className="mb-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">Infrastructure &amp; Environment</span>
<h1 className="font-display-lg text-display-lg text-primary mt-2">Water Resources &amp; Irrigation</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2 max-w-2xl">
                            Real-time management of the 'Clean Water for All' initiative, monitoring state-wide borehole health and agricultural irrigation efficiency.
                        </p>
</div>
<div className="flex gap-2">
<div className="p-4 bg-primary-container/10 border border-primary-container/20 rounded-lg text-center min-w-[120px]">
<p className="font-label-md text-label-md text-primary">Active Flow</p>
<p className="text-2xl font-bold text-primary">84.2%</p>
</div>
<div className="p-4 bg-secondary-container/10 border border-secondary-container/20 rounded-lg text-center min-w-[120px]">
<p className="font-label-md text-label-md text-secondary">Projects Live</p>
<p className="text-2xl font-bold text-secondary">142</p>
</div>
</div>
</div>
</header>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Water Infrastructure Map (Large)  */}
<section className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col h-[500px]">
<div className="p-6 border-b border-outline-variant flex justify-between items-center bg-white">
<div>
<div className="brass-accent-line"></div>
<h2 className="font-headline-md text-headline-md text-primary">Water Infrastructure Map</h2>
</div>
<div className="flex gap-2">
<span className="flex items-center gap-1 px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full border border-green-200">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Urban Supply
                            </span>
<span className="flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full border border-amber-200">
<span className="w-2 h-2 rounded-full bg-amber-500"></span> Borehole Health
                            </span>
</div>
</div>
<div className="flex-1 relative bg-slate-100 overflow-hidden group">
<img className="w-full h-full object-cover opacity-60 mix-blend-multiply" data-alt="A detailed digital satellite map of Abia State, Nigeria, overlaid with sophisticated blue and teal data points representing water pumping stations and urban pipelines. The map interface looks like a high-end government dashboard with clean typography, minimalist icons, and a professional aesthetic that highlights technical precision. Soft lighting and a neutral color palette emphasize the modern governance theme." data-location="Abia State" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr-5n7B3R8E1E_XJig0F_k3wn9QYy5T-PnPthxGRPJjyvRiwBXQteGgq3iOs3i9YBv_lHEyJoqgnIdJPO-Qqg0Mu0q7JChFWlXHhd8B7u7qtWRzqZ6VRsCBlw990msGX4vsEk7n4E4S5xyUzs9eoRwL2rOwkjvXwYGSkNqH3XeJ7thFjgpjgZOnUQCZWL2moIlPQwiGCX2j9EeL4k14bkABrrUYYPLSMCUSMPWfhsARhFN3rS895dZ0eoS5o3zdv2YSURDFSwAMc8" />
{/*  Map Overlay Controls  */}
<div className="absolute bottom-4 right-4 flex flex-col gap-2">
<button className="p-2 bg-white shadow-lg border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined">zoom_in</span>
</button>
<button className="p-2 bg-white shadow-lg border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined">zoom_out</span>
</button>
<button className="p-2 bg-white shadow-lg border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined">layers</span>
</button>
</div>
{/*  Data Points Mockup  */}
<div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg cursor-pointer transform hover:scale-150 transition-transform group-hover:animate-bounce"></div>
<div className="absolute top-1/2 left-2/3 w-4 h-4 bg-secondary rounded-full border-2 border-white shadow-lg cursor-pointer transform hover:scale-150 transition-transform"></div>
<div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg cursor-pointer transform hover:scale-150 transition-transform"></div>
</div>
</section>
{/*  Project Status Tracker (Tall)  */}
<aside className="md:col-span-4 bg-surface-container-low border border-outline-variant rounded-xl p-6 flex flex-col h-[500px]">
<div className="brass-accent-line"></div>
<h2 className="font-headline-md text-headline-md text-primary mb-6">Project Status</h2>
<div className="flex-1 overflow-y-auto space-y-4 pr-2">
{/*  Project Item 1  */}
<div className="p-4 bg-white border border-outline-variant rounded-lg shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-bold text-secondary uppercase">Irrigation</span>
<span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-bold rounded border border-green-200">85% COMPLETE</span>
</div>
<h3 className="font-bold text-on-surface">Umuahia North Rice Fields</h3>
<p className="text-xs text-on-surface-variant mt-1">Expansion of 2,000 hectares with solar-powered pumps.</p>
<div className="w-full bg-surface-container h-1.5 mt-3 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[85%]"></div>
</div>
</div>
{/*  Project Item 2  */}
<div className="p-4 bg-white border border-outline-variant rounded-lg shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-bold text-secondary uppercase">Urban Supply</span>
<span className="px-2 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded border border-amber-200">IN PLANNING</span>
</div>
<h3 className="font-bold text-on-surface">Aba Water Reticulation</h3>
<p className="text-xs text-on-surface-variant mt-1">Replacing colonial-era pipes in the Ariaria commercial hub.</p>
<div className="w-full bg-surface-container h-1.5 mt-3 rounded-full overflow-hidden">
<div className="bg-amber-400 h-full w-[15%]"></div>
</div>
</div>
{/*  Project Item 3  */}
<div className="p-4 bg-white border border-outline-variant rounded-lg shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-bold text-secondary uppercase">Clean Water</span>
<span className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded border border-blue-200">MAINTENANCE</span>
</div>
<h3 className="font-bold text-on-surface">Obingwa Borehole Cluster</h3>
<p className="text-xs text-on-surface-variant mt-1">Routine filter replacement for 12 community boreholes.</p>
<div className="w-full bg-surface-container h-1.5 mt-3 rounded-full overflow-hidden">
<div className="bg-blue-500 h-full w-[98%]"></div>
</div>
</div>
</div>
<button className="w-full mt-6 py-3 text-primary font-bold text-sm border-t border-outline-variant hover:bg-surface-variant/20 transition-colors flex justify-center items-center gap-2">
                        View Full Pipeline <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</aside>
{/*  Citizen Service Request (Full Width)  */}
<section className="md:col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/*  Request Form  */}
<div className="lg:col-span-2 bg-primary text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-1 bg-brass-gold mb-6"></div>
<h2 className="font-headline-lg text-headline-lg font-bold mb-2">Request Water Connection</h2>
<p className="text-primary-fixed-dim max-w-xl mb-8">
                                Connect your home or business to the state grid. Average processing time: 7 working days for site survey.
                            </p>
<form className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-1">
<label className="font-label-md text-xs text-primary-fixed uppercase font-bold">Property Address</label>
<input className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:bg-white/20 focus:ring-2 focus:ring-brass-gold outline-none transition-all" placeholder="123 Okigwe Road, Umuahia" type="text" />
</div>
<div className="flex flex-col gap-1">
<label className="font-label-md text-xs text-primary-fixed uppercase font-bold">Request Type</label>
<select className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:bg-white/20 focus:ring-2 focus:ring-brass-gold outline-none transition-all">
<option className="text-on-surface">Residential Meter</option>
<option className="text-on-surface">Commercial/Industrial</option>
<option className="text-on-surface">Agricultural Irrigation</option>
</select>
</div>
<div className="md:col-span-2">
<button className="w-full md:w-auto px-8 py-4 bg-brass-gold text-on-secondary-fixed font-bold rounded-lg hover:bg-secondary-fixed transition-all flex items-center justify-center gap-2">
                                        Submit Service Request <span className="material-symbols-outlined">send</span>
</button>
</div>
</form>
</div>
{/*  Decorative Abstract Background  */}
<div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">

</div>
</div>
{/*  Statistics / Support  */}
<div className="bg-surface-container-highest border border-outline-variant p-8 rounded-xl flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-secondary text-4xl mb-4" style={{"fontVariationSettings":"'FILL' 1"}}>waves</span>
<h3 className="font-headline-md text-headline-md text-primary mb-2">State Consumption</h3>
<div className="mt-6 space-y-4">
<div className="flex justify-between items-center">
<span className="text-on-surface-variant">Daily Output</span>
<span className="font-bold">4.2M Liters</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface-variant">Active Consumers</span>
<span className="font-bold">128,400</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface-variant">Non-Revenue Water</span>
<span className="font-bold text-eagle-red">12% Loss</span>
</div>
</div>
</div>
<button className="mt-8 flex items-center gap-2 text-primary font-bold hover:underline">
<span className="material-symbols-outlined text-sm">support_agent</span> Contact Water Board Support
                        </button>
</div>
</section>
</div>
</main>
</div>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto py-12 border-t border-outline-variant">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-md">
<span className="font-headline-lg text-headline-lg text-forest-deep font-bold">ABIA ONE</span>
<p className="font-body-md text-body-md text-on-surface-variant mt-4">
                    The sovereign digital infrastructure for the Government of Abia State. Focused on transparency, efficiency, and the digital well-being of every citizen.
                </p>
<p className="mt-6 font-label-md text-label-md text-on-surface-variant">
                    © 2024 Government of Abia State, Nigeria. Built for the Future.
                </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
<div className="flex flex-col gap-4">
<span className="font-label-caps text-label-caps text-on-surface font-bold">CORE ECOSYSTEM</span>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="/invest-in-aba">Invest Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="/serve-abia">Serve Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="/build-abia">Build Abia</a>
</div>
<div className="flex flex-col gap-4">
<span className="font-label-caps text-label-caps text-on-surface font-bold">GOVERNANCE</span>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="/open-abia">Open Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Contact Us</a>
</div>
</div>
</div>
</footer>
{/*  FAB Suppression Logic: Not rendered on specific portal screens as per instructions  */}


      </div>
    </>
  );
}
