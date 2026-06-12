export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        .map-pin {\n            cursor: pointer;\n            transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n        }\n        .map-pin:hover {\n            transform: scale(1.3) translateY(-4px);\n        }\n        .custom-scrollbar::-webkit-scrollbar {\n            width: 4px;\n        }\n        .custom-scrollbar::-webkit-scrollbar-track {\n            background: transparent;\n        }\n        .custom-scrollbar::-webkit-scrollbar-thumb {\n            background: #bec9be;\n            border-radius: 10px;\n        }\n        .bento-card {\n            border: 1px solid #E2E8F0;\n            transition: all 0.3s ease;\n        }\n        .bento-card:hover {\n            border-color: #D4AF37;\n            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n        }\n        .active-pill {\n            background: linear-gradient(90deg, #006838 0%, #004d28 100%);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md text-body-md overflow-x-hidden">
        
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 bg-background border-b border-outline-variant h-20">
<div className="flex justify-between items-center px-margin-desktop h-full max-w-max-width mx-auto">
<div className="flex items-center gap-8">
<span className="font-display-lg text-display-lg font-bold text-primary">ABIA ONE</span>
<nav className="hidden md:flex gap-6 items-center">
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Economy</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Digital Gov</a>
<a className="text-primary border-b-2 border-brass-gold font-semibold pb-1 cursor-pointer" href="#">Governance</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Security</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center bg-surface-container rounded px-3 py-1.5 gap-2 border border-outline-variant">
<span className="material-symbols-outlined text-on-surface-variant">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md w-48" placeholder="Search projects..." type="text" />
</div>
<button className="bg-primary-container text-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-all active:scale-95 shadow-sm">
                    Citizen Portal
                </button>
</div>
</div>
</header>
{/*  Sidebar (SideNavBar)  */}
<aside className="fixed left-0 top-20 h-screen w-64 bg-surface-container-low border-r border-outline-variant hidden md:flex flex-col py-6">
<div className="px-6 mb-8">
<h2 className="font-headline-md text-headline-md font-bold text-primary">Navigation</h2>
<p className="font-caption text-caption text-on-surface-variant">State Operating System</p>
</div>
<nav className="flex flex-col space-y-1">
<a className="flex items-center gap-3 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined">payments</span>
<span>Economic Transformation</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span>Digital Government</span>
</a>
<a className="flex items-center gap-3 text-forest-green font-bold border-l-4 border-brass-gold bg-surface-container-high px-6 py-3" href="#">
<span className="material-symbols-outlined">gavel</span>
<span>Transparent Governance</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined">verified_user</span>
<span>Public Trust</span>
</a>
</nav>
<div className="mt-auto px-6 space-y-4">
<div className="p-4 bg-primary text-white rounded-xl">
<p className="font-label-md text-label-md mb-2">PROJECTS TRACKER</p>
<p className="font-caption text-caption opacity-80 mb-3">Live updates on infrastructure</p>
<button className="w-full bg-brass-gold text-primary py-2 rounded font-semibold text-sm">Launch Service</button>
</div>
<div className="border-t border-outline-variant pt-4 pb-12">
<a className="flex items-center gap-3 text-on-surface-variant px-2 py-2 hover:text-primary" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-caption">Settings</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant px-2 py-2 hover:text-primary" href="#">
<span className="material-symbols-outlined">help</span>
<span className="text-caption">Support</span>
</a>
</div>
</div>
</aside>
{/*  Main Content Area  */}
<main className="md:ml-64 pt-20 min-h-screen bg-background">
<div className="max-w-max-width mx-auto p-gutter grid grid-cols-12 gap-gutter">
{/*  Map Header & Controls  */}
<div className="col-span-12 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
<div>
<h1 className="font-headline-lg text-headline-lg text-primary">Abia Project Map</h1>
<p className="font-body-md text-on-surface-variant">Real-time infrastructure development visualization across 17 LGAs.</p>
</div>
<div className="flex gap-2 bg-surface-container p-1 rounded-lg border border-outline-variant">
<button className="px-4 py-1.5 rounded bg-white shadow-sm font-medium text-primary text-sm">All Regions</button>
<button className="px-4 py-1.5 rounded hover:bg-white/50 text-on-surface-variant text-sm transition-all">Umuahia</button>
<button className="px-4 py-1.5 rounded hover:bg-white/50 text-on-surface-variant text-sm transition-all">Aba</button>
<button className="px-4 py-1.5 rounded hover:bg-white/50 text-on-surface-variant text-sm transition-all">Ohafia</button>
</div>
</div>
{/*  Map Section  */}
<div className="col-span-12 lg:col-span-8 h-[600px] relative rounded-xl border border-outline-variant overflow-hidden bg-surface-container shadow-inner">
{/*  Map Placeholder  */}
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-60 grayscale-[0.3]" data-alt="A highly detailed cartographic 3D map representation of Abia State, Nigeria, showing topographical features, major road networks, and river systems. The map is rendered in a professional, modern governance style with a clean light-mode aesthetic using soft greens, brass gold highlights, and slate gray lines. Subtle glowing data points represent active infrastructure projects, casting a soft ambient light across the terrain in a high-tech geospatial visualization." data-location="Abia State, Nigeria" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWOBiBmzSskGaEW8VaeRp4FUDHFkTllZq_U7cM6a0fpq9VUrTaeBhI8fxvpS5fVvd5W26iRn5i66ONCHC2ZND2_1a-tCGE4rCjytdmvb-QBALRYcKhwDqB0aRSjXBLeBH8NMiX-QwNVdiq6MlH05kBE0MnLYJxaJUdKFiRDiXAUehHJ_YMCHrjsl-r9vXavy5-nuAdksIB3xGUjdHbf81iI4Sz3uvFCR7B5kIwRohIl5tpxC1PKPw_LfAh0rq8B_tNIW849Ejj8sU" />
</div>
{/*  Interactive Pins  */}
<div className="absolute top-1/4 left-1/3 z-10 group" onClick={() => {}}>
<div className="map-pin text-primary drop-shadow-lg">
<span className="material-symbols-outlined text-4xl" style={{"fontVariationSettings":"'FILL' 1"}}>location_on</span>
</div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-lg shadow-xl border border-brass-gold opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
<p className="font-bold text-sm text-primary">Aba Road Expansion</p>
<p className="text-caption text-on-surface-variant">Umuahia South • 85% Complete</p>
</div>
</div>
<div className="absolute top-2/3 left-1/2 z-10 group" onClick={() => {}}>
<div className="map-pin text-eagle-red drop-shadow-lg">
<span className="material-symbols-outlined text-4xl" style={{"fontVariationSettings":"'FILL' 1"}}>location_on</span>
</div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-lg shadow-xl border border-brass-gold opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
<p className="font-bold text-sm text-primary">Ariaria Market Hub</p>
<p className="text-caption text-on-surface-variant">Aba North • Ongoing</p>
</div>
</div>
{/*  Floating Legend  */}
<div className="absolute bottom-6 right-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-outline-variant shadow-lg max-w-[200px]">
<h4 className="font-bold text-xs uppercase tracking-wider text-on-surface-variant mb-3">Map Legend</h4>
<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="text-caption">Infrastructure</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-eagle-red"></span>
<span className="text-caption">Commerce</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-brass-gold"></span>
<span className="text-caption">Agriculture</span>
</div>
</div>
</div>
</div>
{/*  Recently Completed Sidebar  */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-gutter">
<div className="bento-card bg-surface-container-low rounded-xl p-6 h-full flex flex-col">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md text-primary">Recent Completions</h3>
<span className="material-symbols-outlined text-brass-gold">check_circle</span>
</div>
<div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-4">
{/*  Project Item  */}
<div className="p-4 bg-white rounded-lg border border-outline-variant hover:border-primary transition-all group cursor-pointer">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">Port Harcourt Rd</h4>
<p className="text-caption text-on-surface-variant">6.8km Dualization • Aba</p>
</div>
<span className="bg-forest-green/10 text-forest-green text-[10px] px-2 py-0.5 rounded-full font-bold">COMPLETED</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1">
<div className="bg-forest-green h-1 rounded-full w-full"></div>
</div>
</div>
<div className="p-4 bg-white rounded-lg border border-outline-variant hover:border-primary transition-all group cursor-pointer">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">Ossah Road Bridge</h4>
<p className="text-caption text-on-surface-variant">Structural Rehab • Umuahia</p>
</div>
<span className="bg-forest-green/10 text-forest-green text-[10px] px-2 py-0.5 rounded-full font-bold">COMPLETED</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1">
<div className="bg-forest-green h-1 rounded-full w-full"></div>
</div>
</div>
<div className="p-4 bg-white rounded-lg border border-outline-variant hover:border-primary transition-all group cursor-pointer">
<div className="flex justify-between items-start mb-2">
<div>
<h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">Ohafia Tech Hub</h4>
<p className="text-caption text-on-surface-variant">Digital Infrastructure</p>
</div>
<span className="bg-forest-green/10 text-forest-green text-[10px] px-2 py-0.5 rounded-full font-bold">COMPLETED</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1">
<div className="bg-forest-green h-1 rounded-full w-full"></div>
</div>
</div>
</div>
<button className="w-full mt-6 py-3 bg-surface-container-high text-primary font-bold rounded hover:bg-surface-variant transition-colors border border-outline-variant">
                        View Full Archive
                    </button>
</div>
</div>
{/*  Details Panel (Bento Style)  */}
<div className="col-span-12 grid grid-cols-12 gap-gutter mt-4" id="project-details">
{/*  Before/After Visualizer  */}
<div className="col-span-12 lg:col-span-7 bento-card bg-white rounded-xl p-6 overflow-hidden">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="font-headline-md text-headline-md text-primary">Aba Road Expansion (Current Focus)</h3>
<p className="font-body-md text-on-surface-variant">Visual Progress Monitoring</p>
</div>
<div className="flex items-center gap-4 text-sm font-medium">
<span className="text-on-surface-variant">Before</span>
<div className="w-12 h-6 bg-surface-container rounded-full relative p-1 cursor-pointer" onClick={() => {}}>
<div className="w-4 h-4 bg-primary rounded-full transition-transform translate-x-6" id="toggle-knob"></div>
</div>
<span className="text-primary font-bold">After</span>
</div>
</div>
<div className="relative h-[350px] rounded-lg overflow-hidden group">
<img className="w-full h-full object-cover transition-opacity duration-500" data-alt="A cinematic split-screen comparison of an infrastructure project in Abia State. The left side shows a dusty, dilapidated road with poor drainage, while the right side displays a modern, asphalted dual-carriageway with paved sidewalks, solar street lights, and clean drainage systems. The lighting is bright and optimistic, showcasing the transformative power of governance. Professional architectural photography style with high contrast and vibrant greens." id="comp-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAal3y5BNybX-e0hk7B3rCQM7radk0-m3f6uOU-NZdPyXJy6DvArnaIfrcf39EtYSVKspg5YvPkLhaXpKsDAbFtD2exiFb8dLEj8l53dBBRkkE9duMe-HjpYcMpH5qTrlZEQv2pOu6dGdjW8pUZQtiL9A-3Ybua2Bq4edYkpWxG5S2_9uZT4QKRM8NQC825MME59ags4YJ3Av7nZVFHPgAy8DmjD40g6RlbHTr6UCDcjF6_c-Sizz-GdbO3iOkVw-ZUUoFmzImGID8" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity">
<p className="text-white font-bold text-lg">Modernization of Umuahia Transit Corridors</p>
<p className="text-white/80 text-sm">Expected completion: Q4 2024</p>
</div>
</div>
</div>
{/*  Funding & Metrics  */}
<div className="col-span-12 lg:col-span-5 flex flex-col gap-gutter">
<div className="bento-card bg-primary text-white rounded-xl p-6 flex-1">
<h4 className="font-label-md text-label-md opacity-80 mb-4">FUNDING STATUS</h4>
<div className="flex items-center justify-between mb-2">
<span className="text-display-lg font-bold">72%</span>
<span className="material-symbols-outlined text-4xl text-brass-gold">account_balance_wallet</span>
</div>
<p className="text-body-md mb-6">Disbursed from Sovereign Fund &amp; Private Partnership.</p>
<div className="space-y-3">
<div className="flex justify-between text-caption border-b border-white/20 pb-2">
<span>Total Budget</span>
<span className="font-bold">₦4.2B</span>
</div>
<div className="flex justify-between text-caption border-b border-white/20 pb-2">
<span>Verified Spent</span>
<span className="font-bold">₦2.8B</span>
</div>
<div className="flex justify-between text-caption">
<span>LGA Contribution</span>
<span className="font-bold">₦0.5B</span>
</div>
</div>
</div>
<div className="bento-card bg-surface-container-highest rounded-xl p-6">
<h4 className="font-label-md text-label-md text-primary mb-4">SOCIO-ECONOMIC IMPACT</h4>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-lg border border-outline-variant text-center">
<p className="text-headline-md font-bold text-forest-green">1,200+</p>
<p className="text-caption text-on-surface-variant">Jobs Created</p>
</div>
<div className="bg-white p-4 rounded-lg border border-outline-variant text-center">
<p className="text-headline-md font-bold text-forest-green">45min</p>
<p className="text-caption text-on-surface-variant">Time Saved/Day</p>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Footer Component  */}
<footer className="bg-surface-container-highest mt-20 border-t border-outline-variant">
<div className="flex flex-col md:flex-row justify-between items-center py-gutter px-margin-desktop max-w-max-width mx-auto">
<div className="mb-8 md:mb-0">
<h3 className="font-headline-md text-headline-md text-primary mb-2">ABIA ONE</h3>
<p className="font-caption text-caption text-on-surface-variant max-w-xs">
                        © 2024 Abia State Government. All rights reserved. Built for the future of governance.
                    </p>
</div>
<div className="flex flex-wrap justify-center gap-8">
<div className="flex flex-col gap-2">
<span className="font-bold text-primary text-sm">Transparency</span>
<a className="text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Institutional Links</a>
<a className="text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Transparency Info</a>
</div>
<div className="flex flex-col gap-2">
<span className="font-bold text-primary text-sm">Legal &amp; Support</span>
<a className="text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Support</a>
</div>
</div>
</div>
</footer>
</main>


      </div>
    </>
  );
}
