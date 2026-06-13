"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(10px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }\n        .brass-gradient {\n            background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);\n        }\n        .hide-scrollbar::-webkit-scrollbar {\n            display: none;\n        }\n        .hide-scrollbar {\n            -ms-overflow-style: none;\n            scrollbar-width: none;\n        }" 
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
        }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-8">
<img src="/Logos/Abia_One_No_Background.png" alt="ABIA ONE" className="h-20 w-auto" />
<nav className="hidden md:flex gap-6">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/economic-transformation">Economy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/serve-abia">Digital Gov</a>
<a className="font-label-caps text-label-caps text-primary border-b-2 border-brass-accent pb-1" href="/local-governance">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/secure-abia">Security</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex bg-primary text-on-primary px-6 py-2 rounded-lg font-label-md">Citizen Portal</button>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-primary">account_circle</span>
</div>
</div>
</header>
{/*  SideNavBar (Hidden on Mobile)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-16 bg-surface-container-low border-r border-outline-variant z-40 py-8">
<div className="px-6 mb-8">
<h2 className="font-headline-md text-headline-md text-forest-deep leading-tight">Housing &amp; Urban</h2>
<p className="font-body-md text-on-surface-variant text-sm">Abia Development Authority</p>
</div>
<nav className="flex-grow flex flex-col gap-2">
<a className="flex items-center gap-4 px-6 py-3 bg-secondary-container text-on-secondary-container rounded-lg mx-2 transition-all" href="/">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md">Overview</span>
</a>
<a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 rounded-lg transition-all" href="/aba-20">
<span className="material-symbols-outlined">home_work</span>
<span className="font-label-md">Housing Registry</span>
</a>
<a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">architecture</span>
<span className="font-label-md">Urban Gazettes</span>
</a>
<a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">handshake</span>
<span className="font-label-md">PPP Projects</span>
</a>
</nav>
<div className="mt-auto px-4 pb-12">
<button className="w-full flex items-center justify-center gap-2 bg-brass-accent text-white py-3 rounded-lg font-bold shadow-sm hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined">feedback</span>
                Citizen Feedback
            </button>
</div>
</aside>
{/*  Main Canvas  */}
<main className="lg:ml-64 pt-24 px-margin-mobile md:px-margin-desktop pb-20 max-w-7xl mx-auto">
{/*  Hero Dashboard Summary  */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-12">
<div className="md:col-span-8 relative rounded-xl overflow-hidden min-h-[340px] flex items-end p-8 bg-forest-deep">
<img alt="Urban Development" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-700" data-alt="A sophisticated architectural visualization of a modern, sustainable urban housing complex in Umuahia, Abia State. The scene features clean lines, lush vertical gardens, and solar panels integrated into the roofs, captured during a warm golden hour sunset. The image uses a professional high-fidelity aesthetic with deep forest greens and metallic brass accents, reflecting a vision of modern governance and ecological progress." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeGaioN6HYf-jrxGF9Is2iQhxAU2Z-Dn5dWx8LhxrQYmRkgsFUXChONfcJOliO4cHVDzv9fBSbHM0L89sGfQs_moYZd-5jdmKi_Mpdi8XdFKMLlB13DbWwJA_8xdfFYJQwt2pTMbtbWpY55a2svZIZ85xv-z13pvSS-xMH30Uw27EWtvz1nMSG4Lj2kWu6M_pWqToKotCq0Xin6zhUI_NMw54e-VMG5AQDRDvjSC2Mwj2DYR2m46MtsxHl_AwGhTDGRD3C4zDoNME" />
<div className="relative z-10 w-full">
<span className="inline-block bg-brass-accent text-on-primary font-label-caps text-label-caps px-3 py-1 mb-4 rounded-sm">STRATEGIC PRIORITY</span>
<h1 className="font-display-lg text-display-lg text-state-white mb-2 leading-tight">Master Plan 2030: <br />Urban Renewal</h1>
<p className="font-body-lg text-surface-variant max-w-xl">Reimagining Abia's city centers with integrated transit, resilient housing, and digital-first infrastructure.</p>
</div>
</div>
<div className="md:col-span-4 flex flex-col gap-gutter">
<div className="glass-card p-6 rounded-xl flex-1 border-l-4 border-brass-gold">
<h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4">ACTIVE REGISTRATIONS</h3>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-primary">14,208</span>
<span className="text-primary-container font-label-md text-xs text-green-600 flex items-center">
<span className="material-symbols-outlined text-sm">trending_up</span> 12%
                        </span>
</div>
<p className="text-sm text-on-surface-variant mt-2">Verified applicants for Abia Eco-Estate Phase II.</p>
</div>
<div className="glass-card p-6 rounded-xl flex-1 border-l-4 border-forest-green">
<h3 className="font-label-caps text-label-caps text-on-surface-variant mb-4">COMMISSIONED UNITS</h3>
<div className="flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-forest-deep">2,450</span>
</div>
<p className="text-sm text-on-surface-variant mt-2">Subsidized housing units delivered in Q3 2024.</p>
</div>
</div>
</section>
{/*  Home Ownership Tracking Dashboard  */}
<section className="mb-12">
<div className="flex items-center justify-between mb-6">
<h2 className="font-headline-lg text-headline-lg text-forest-deep">Home Ownership Tracking</h2>
<button className="flex items-center gap-2 text-primary font-label-md hover:underline">
                    View All Statuses <span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Tracking Card 1  */}
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
<div className="flex justify-between items-start mb-6">
<div className="p-2 bg-secondary-container rounded-lg">
<span className="material-symbols-outlined text-on-secondary-container">fact_check</span>
</div>
<span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">Verified</span>
</div>
<h4 className="font-headline-md text-sm mb-1">Enyimba Heights Subsidized Apt</h4>
<p className="text-xs text-on-surface-variant mb-4">Application ID: AB-HOU-2024-0921</p>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mb-2">
<div className="bg-primary h-1.5 rounded-full" style={{"width":"100%"}}></div>
</div>
<div className="flex justify-between text-xs font-label-md text-on-surface-variant">
<span>Application Status</span>
<span className="text-primary font-bold">100% Complete</span>
</div>
</div>
{/*  Tracking Card 2  */}
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
<div className="flex justify-between items-start mb-6">
<div className="p-2 bg-primary-container rounded-lg">
<span className="material-symbols-outlined text-on-primary-container">foundation</span>
</div>
<span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">In Progress</span>
</div>
<h4 className="font-headline-md text-sm mb-1">Aba Urban Renewal Site C</h4>
<p className="text-xs text-on-surface-variant mb-4">Property Deed: #A-7721-LX</p>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mb-2">
<div className="bg-brass-accent h-1.5 rounded-full" style={{"width":"65%"}}></div>
</div>
<div className="flex justify-between text-xs font-label-md text-on-surface-variant">
<span>Construction Phase</span>
<span className="text-brass-gold font-bold">65% Complete</span>
</div>
</div>
{/*  Tracking Card 3  */}
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
<div className="flex justify-between items-start mb-6">
<div className="p-2 bg-surface-container-high rounded-lg">
<span className="material-symbols-outlined text-on-surface-variant">pending_actions</span>
</div>
<span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">Review</span>
</div>
<h4 className="font-headline-md text-sm mb-1">New Ohambele Green Village</h4>
<p className="text-xs text-on-surface-variant mb-4">Lot Allocation: Pending</p>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mb-2">
<div className="bg-outline h-1.5 rounded-full" style={{"width":"15%"}}></div>
</div>
<div className="flex justify-between text-xs font-label-md text-on-surface-variant">
<span>Legal Vetting</span>
<span className="text-on-surface-variant font-bold">15% Complete</span>
</div>
</div>
</div>
</section>
{/*  Affordable Housing Registry: Bento Grid Layout  */}
<section className="mb-12">
<h2 className="font-headline-lg text-headline-lg text-forest-deep mb-8">Affordable Housing Registry</h2>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
<div className="md:col-span-2 md:row-span-2 bg-white border border-outline-variant rounded-xl overflow-hidden flex flex-col group">
<div className="h-1/2 relative overflow-hidden">
<img alt="Luxury Affordable" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A clean, minimalist high-density residential development project featuring sustainable local materials and Abia-inspired geometric architectural patterns. The setting is an organized neighborhood with wide paved roads, solar street lighting, and family-friendly parks. The lighting is bright morning light, emphasizing a sense of safety, cleanliness, and premium state-governed quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG8XF0Bu1xuN7afRYI6ZUfG_1ekdSDDAHfN3-FcGMwPeb0_tlg3aW38YJv2QzorVnBQTdqn7wxGCXd9H9EgEwmufALRbKoUGRbw8ZYy0hH8qk3JGy3UtusZDb2A1gA4Z2FQxqA-mYUlNNv_hiLVr1mW5UJX0CkRIBtoaL18IgOQ_3wAUyiRUwFh3fGeQL83tATf56JoT8tk4aHs6iiyG4aUUjD-RIp0uEqDcZrTkZ1k8DJVoX7hi0FqvEbJS5ZswaU_JdgcBAkfSA" />
<div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">FEATURED SCHEME</div>
</div>
<div className="p-8 flex flex-col justify-center flex-grow">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline-md text-xl text-forest-deep">Golden Jubilee Estate</h3>
<p className="text-on-surface-variant">Location: Obingwa LGA</p>
</div>
<span className="text-primary font-bold text-lg">₦15M - ₦25M</span>
</div>
<p className="text-on-surface-variant mb-6 text-sm">Our flagship affordable housing project designed for young professionals and civil servants. Phase 1 ready for occupancy.</p>
<div className="flex gap-4 mt-auto">
<button className="flex-1 bg-primary text-white py-3 rounded font-label-md hover:bg-forest-green transition-colors">Apply Now</button>
<button className="px-4 border border-outline-variant rounded text-on-surface-variant hover:bg-surface-variant/20"><span className="material-symbols-outlined mt-1">favorite</span></button>
</div>
</div>
</div>
<div className="md:col-span-2 md:row-span-1 glass-card rounded-xl p-6 flex flex-col justify-between border-t-4 border-brass-gold">
<div>
<div className="flex justify-between items-center mb-2">
<span className="font-label-md text-brass-accent">PPP Partnership</span>
<span className="material-symbols-outlined text-brass-accent">handshake</span>
</div>
<h3 className="font-headline-md text-lg text-forest-deep">Ohafia Smart City Cluster</h3>
<p className="text-sm text-on-surface-variant mt-2">A collaborative project between Abia State Govt and Zenith Housing Consortium featuring 500 tech-ready units.</p>
</div>
<div className="flex items-center gap-4 mt-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400"></div>
</div>
<span className="text-xs text-on-surface-variant font-label-md">120 Investors Joined</span>
</div>
</div>
<div className="md:col-span-1 md:row-span-1 bg-primary-container text-on-primary-container rounded-xl p-6 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-4xl mb-4">payments</span>
<h3 className="font-headline-md text-base">Mortgage Subsidy Calculator</h3>
<p className="text-xs opacity-80 mt-2">Estimate your monthly repayments with state-backed low interest rates.</p>
</div>
<button className="mt-4 w-full py-2 bg-on-primary-container text-primary rounded text-xs font-bold uppercase tracking-widest">Calculate</button>
</div>
<div className="md:col-span-1 md:row-span-1 bg-surface-container-high rounded-xl p-6 flex flex-col justify-between border border-outline-variant">
<div>
<span className="material-symbols-outlined text-4xl mb-4 text-forest-deep">history_edu</span>
<h3 className="font-headline-md text-base text-forest-deep">Deed Digitalization</h3>
<p className="text-xs text-on-surface-variant mt-2">Convert your physical C-of-O to a verifiable digital sovereign token.</p>
</div>
<button className="mt-4 w-full py-2 border border-primary text-primary rounded text-xs font-bold uppercase tracking-widest">Start Process</button>
</div>
</div>
</section>
{/*  Urban Planning Gazettes  */}
<section>
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-forest-deep">Urban Planning Gazettes</h2>
<p className="text-on-surface-variant">Access the latest regulatory frameworks and urban design guidelines.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 border border-outline-variant rounded-full flex items-center justify-center hover:bg-white transition-colors">
<span className="material-symbols-outlined">filter_list</span>
</button>
<button className="w-10 h-10 border border-outline-variant rounded-full flex items-center justify-center hover:bg-white transition-colors">
<span className="material-symbols-outlined">search</span>
</button>
</div>
</div>
<div className="overflow-x-auto hide-scrollbar -mx-margin-mobile md:mx-0 px-margin-mobile md:px-0">
<div className="flex gap-6 min-w-max pb-4">
{/*  Gazette Item 1  */}
<div className="w-72 glass-card rounded-xl overflow-hidden group">
<div className="h-40 bg-slate-100 flex items-center justify-center relative">
<span className="material-symbols-outlined text-5xl text-outline-variant group-hover:scale-110 transition-transform">map</span>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-bold">PDF • 12.4 MB</div>
</div>
<div className="p-5">
<span className="text-[10px] font-bold text-brass-accent tracking-widest uppercase">Zoning Law</span>
<h4 className="font-headline-md text-sm mt-1 line-clamp-2">Aba Central Business District Zoning Code 2024</h4>
<div className="flex items-center justify-between mt-4">
<span className="text-xs text-on-surface-variant">Published Oct 12</span>
<button className="text-primary"><span className="material-symbols-outlined">download</span></button>
</div>
</div>
</div>
{/*  Gazette Item 2  */}
<div className="w-72 glass-card rounded-xl overflow-hidden group">
<div className="h-40 bg-slate-100 flex items-center justify-center relative">
<span className="material-symbols-outlined text-5xl text-outline-variant group-hover:scale-110 transition-transform">eco</span>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-bold">PDF • 4.8 MB</div>
</div>
<div className="p-5">
<span className="text-[10px] font-bold text-brass-accent tracking-widest uppercase">Sustainability</span>
<h4 className="font-headline-md text-sm mt-1 line-clamp-2">Abia Green Building Standards &amp; Incentives</h4>
<div className="flex items-center justify-between mt-4">
<span className="text-xs text-on-surface-variant">Published Sep 30</span>
<button className="text-primary"><span className="material-symbols-outlined">download</span></button>
</div>
</div>
</div>
{/*  Gazette Item 3  */}
<div className="w-72 glass-card rounded-xl overflow-hidden group">
<div className="h-40 bg-slate-100 flex items-center justify-center relative">
<span className="material-symbols-outlined text-5xl text-outline-variant group-hover:scale-110 transition-transform">commute</span>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-bold">PDF • 22.1 MB</div>
</div>
<div className="p-5">
<span className="text-[10px] font-bold text-brass-accent tracking-widest uppercase">Infrastructure</span>
<h4 className="font-headline-md text-sm mt-1 line-clamp-2">Transit-Oriented Development (TOD) Master Plan</h4>
<div className="flex items-center justify-between mt-4">
<span className="text-xs text-on-surface-variant">Published Aug 15</span>
<button className="text-primary"><span className="material-symbols-outlined">download</span></button>
</div>
</div>
</div>
{/*  Gazette Item 4  */}
<div className="w-72 glass-card rounded-xl overflow-hidden group">
<div className="h-40 bg-slate-100 flex items-center justify-center relative">
<span className="material-symbols-outlined text-5xl text-outline-variant group-hover:scale-110 transition-transform">gavel</span>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-[10px] font-bold">PDF • 8.2 MB</div>
</div>
<div className="p-5">
<span className="text-[10px] font-bold text-brass-accent tracking-widest uppercase">Regulation</span>
<h4 className="font-headline-md text-sm mt-1 line-clamp-2">Land Use (Amendment) Act - State Guidelines</h4>
<div className="flex items-center justify-between mt-4">
<span className="text-xs text-on-surface-variant">Published Jul 22</span>
<button className="text-primary"><span className="material-symbols-outlined">download</span></button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-20 border-t border-outline-variant py-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs">
<span className="font-headline-lg text-headline-lg text-forest-deep block mb-4">ABIA ONE</span>
<p className="font-body-md text-on-surface-variant text-sm mb-6">Empowering citizens through transparent governance and digital infrastructure. A sovereign initiative for the people of Abia.</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-outline flex items-center justify-center text-primary" href="#"><span className="material-symbols-outlined text-sm">share</span></a>
<a className="w-8 h-8 rounded-full border border-outline flex items-center justify-center text-primary" href="#"><span className="material-symbols-outlined text-sm">public</span></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h5 className="font-label-caps text-label-caps text-on-surface mb-4">ECOSYSTEM</h5>
<ul className="flex flex-col gap-2 text-sm text-on-surface-variant">
<li><a className="hover:text-brass-accent underline decoration-brass-accent" href="/invest-in-aba">Invest Abia</a></li>
<li><a className="hover:text-brass-accent" href="/serve-abia">Serve Abia</a></li>
<li><a className="hover:text-brass-accent" href="/build-abia">Build Abia</a></li>
</ul>
</div>
<div>
<h5 className="font-label-caps text-label-caps text-on-surface mb-4">GOVERNANCE</h5>
<ul className="flex flex-col gap-2 text-sm text-on-surface-variant">
<li><a className="hover:text-brass-accent" href="/open-abia">Open Abia</a></li>
<li><a className="hover:text-brass-accent" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brass-accent" href="#">Contact Us</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h5 className="font-label-caps text-label-caps text-on-surface mb-4">EMERGENCY</h5>
<button className="bg-error text-white px-6 py-2 rounded font-bold text-xs uppercase tracking-widest w-full">Report Building Violation</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant text-center">
<p className="text-xs text-on-surface-variant font-label-md">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
</div>
</footer>
{/*  Micro-interaction Scripts  */}


      </div>
    </>
  );
}
