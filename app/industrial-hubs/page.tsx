"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(12px);\n            border: 1px solid #E2E8F0;\n        }\n        .progress-line {\n            background: linear-gradient(90deg, #006838 0%, #D4AF37 100%);\n        }\n        body {\n            scroll-behavior: smooth;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 bg-background border-b border-outline-variant h-20 flex justify-between items-center px-6 md:px-margin-desktop">
<div className="flex items-center gap-8">
<span className="font-display-lg text-[24px] md:text-display-lg font-bold text-primary">ABIA ONE</span>
<nav className="hidden md:flex items-center gap-6">
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Economy</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Digital Gov</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Governance</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Security</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="bg-primary text-on-primary px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-all">Citizen Portal</button>
</div>
</header>
<div className="flex min-h-screen pt-20">
{/*  SideNavBar  */}
<aside className="hidden md:flex flex-col fixed left-0 top-20 h-[calc(100vh-80px)] w-64 bg-surface-container-low border-r border-outline-variant py-6">
<div className="px-6 mb-8">
<p className="font-headline-md text-headline-md font-bold text-primary">Navigation</p>
<p className="text-on-surface-variant text-sm">State Operating System</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 text-forest-green font-bold border-l-4 border-brass-gold bg-surface-container-high px-6 py-3 transition-all" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-body-md">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-body-md">Digital Government</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined">gavel</span>
<span className="font-body-md">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined">verified_user</span>
<span className="font-body-md">Public Trust</span>
</a>
</nav>
<div className="px-6 mt-auto pt-6 space-y-4">
<button className="w-full bg-brass-gold text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
<span className="material-symbols-outlined">rocket_launch</span>
                    Launch Service
                </button>
<div className="flex flex-col gap-2 border-t border-outline-variant pt-4">
<a className="flex items-center gap-2 text-on-surface-variant text-sm" href="#">
<span className="material-symbols-outlined text-[18px]">settings</span> Settings
                    </a>
<a className="flex items-center gap-2 text-on-surface-variant text-sm" href="#">
<span className="material-symbols-outlined text-[18px]">help</span> Support
                    </a>
</div>
</div>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 ml-0 md:ml-64 p-6 md:p-margin-desktop max-w-max-width mx-auto">
{/*  Hero Header  */}
<section className="mb-12">
<div className="relative rounded-xl overflow-hidden h-[400px] mb-8 group">
<img alt="Industrial Hub" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A cinematic aerial view of a futuristic industrial city in Nigeria, featuring expansive modular factory complexes, paved transit arteries, and high-voltage power substations. The scene is bathed in the warm, golden light of sunset, highlighting the precision-engineered architecture and lush green landscaping surrounding the industrial zones. The style is modern, professional, and optimistic, capturing the essence of a sovereign digital and physical infrastructure for economic growth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBA_UA8YoS1OG2wxa53JfvcvblkOFYOr-qpakW273zPezN-s0joAZW2QiZHjFDfoUoGWbuKC_5fSOueRTXL_rmpfFjTKL-aysGZdj4J_NrHLW1X4dxnMKSEXYeTCUGC7fNIySPkJm_ez2C288qJWZo6CVe4mtRrD49RNkFFfP5t9Qv9vLRhUSGIl-NaeDi5Zb9SsWDKWnjXUZYj1m3wDDqqIZUE5ZJVLi8W3goDDskMn-zun7bubCBRuW6UklARXGc64qDSjn8_BM" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-12">
<span className="text-brass-gold font-label-md uppercase tracking-widest mb-2">Sovereign Industrial Zones</span>
<h1 className="text-white font-display-lg text-headline-lg md:text-display-lg mb-4">Economic Engines of Abia</h1>
<p className="text-white/80 max-w-2xl font-body-lg">Powering the next generation of African manufacturing through world-class infrastructure, 24/7 sustainable energy, and digital-first logistics.</p>
</div>
</div>
</section>
{/*  Hub Selection Bento Grid  */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-12">
{/*  Ariaria Industrial City  */}
<div className="lg:col-span-6 bg-white border border-outline-variant rounded-lg p-8 hover:shadow-lg transition-all">
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="font-headline-lg text-headline-lg text-forest-green">Ariaria Industrial City</h2>
<p className="text-on-surface-variant">The Commercial Heart of Aba</p>
</div>
<span className="bg-forest-green/10 text-forest-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">Operational</span>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-lg">
<span className="material-symbols-outlined text-brass-gold" style={{"fontVariationSettings":"'FILL' 1"}}>bolt</span>
<div>
<p className="font-bold text-sm">24/7 Dedicated Power</p>
<p className="text-xs text-on-surface-variant">Independent IPP Grid Connection</p>
</div>
</div>
{/*  Progress Tracker  */}
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-semibold">Infrastructure Completion</span>
<span className="text-brass-gold font-label-md">87%</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div className="progress-line h-full w-[87%] rounded-full"></div>
</div>
<div className="grid grid-cols-3 gap-2 mt-4">
<div className="text-center">
<p className="text-[10px] uppercase font-bold text-on-surface-variant">Roads</p>
<div className="h-1 bg-forest-green rounded-full mt-1"></div>
</div>
<div className="text-center">
<p className="text-[10px] uppercase font-bold text-on-surface-variant">Water</p>
<div className="h-1 bg-forest-green rounded-full mt-1"></div>
</div>
<div className="text-center">
<p className="text-[10px] uppercase font-bold text-on-surface-variant">Data</p>
<div className="h-1 bg-brass-gold rounded-full mt-1"></div>
</div>
</div>
</div>
<button className="w-full py-3 border border-brass-gold text-secondary font-bold rounded-lg hover:bg-brass-gold/5 transition-colors flex items-center justify-center gap-2">
                            Explore Facilities
                            <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
{/*  Enyimba Economic City  */}
<div className="lg:col-span-6 bg-white border border-outline-variant rounded-lg p-8 hover:shadow-lg transition-all">
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="font-headline-lg text-headline-lg text-forest-green">Enyimba Economic City</h2>
<p className="text-on-surface-variant">Global Logistics &amp; Manufacturing Hub</p>
</div>
<span className="bg-brass-gold/10 text-brass-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">Under Construction</span>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-lg">
<span className="material-symbols-outlined text-brass-gold" style={{"fontVariationSettings":"'FILL' 1"}}>movie_filter</span>
<div>
<p className="font-bold text-sm">Dry Port Integration</p>
<p className="text-xs text-on-surface-variant">Direct Rail-to-Sea Logistics</p>
</div>
</div>
{/*  Progress Tracker  */}
<div>
<div className="flex justify-between items-end mb-2">
<span className="text-sm font-semibold">Phase 1 Development</span>
<span className="text-brass-gold font-label-md">42%</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div className="progress-line h-full w-[42%] rounded-full shadow-[0_0_8px_rgba(212,175,55,0.4)]"></div>
</div>
<div className="grid grid-cols-3 gap-2 mt-4">
<div className="text-center">
<p className="text-[10px] uppercase font-bold text-on-surface-variant">Clearance</p>
<div className="h-1 bg-forest-green rounded-full mt-1"></div>
</div>
<div className="text-center">
<p className="text-[10px] uppercase font-bold text-on-surface-variant">Power Plant</p>
<div className="h-1 bg-brass-gold rounded-full mt-1"></div>
</div>
<div className="text-center">
<p className="text-[10px] uppercase font-bold text-on-surface-variant">Housing</p>
<div className="h-1 bg-outline-variant rounded-full mt-1"></div>
</div>
</div>
</div>
<button className="w-full py-3 border border-forest-green text-primary font-bold rounded-lg hover:bg-forest-green/5 transition-colors flex items-center justify-center gap-2">
                            View Master Plan
                            <span className="material-symbols-outlined">map</span>
</button>
</div>
</div>
{/*  Facilities Booking Portal (Full Width)  */}
<div className="lg:col-span-12 bg-inverse-surface text-white rounded-lg p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">

<div className="relative z-10 flex-1">
<div className="flex items-center gap-2 text-brass-gold mb-2">
<span className="material-symbols-outlined">event_available</span>
<span className="font-label-md uppercase">Manufacturer Services</span>
</div>
<h3 className="font-headline-lg text-headline-lg mb-4">Book Your Production Space</h3>
<p className="text-surface-variant max-w-xl">Access modular warehouse units, cold storage facilities, and testing laboratories. Instant booking with digital contract signing.</p>
</div>
<div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-4">
<button className="bg-forest-green text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-3">
<span className="material-symbols-outlined">factory</span>
                            Facility Booking
                        </button>
<button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-3">
<span className="material-symbols-outlined">description</span>
                            Lease Guidelines
                        </button>
</div>
</div>
{/*  Infrastructure Statistics  */}
<div className="lg:col-span-4 bg-surface-container p-6 rounded-lg border border-outline-variant">
<h4 className="font-headline-md text-primary mb-6">Live Power Metrics</h4>
<div className="space-y-6">
<div className="flex justify-between items-center">
<span className="text-on-surface-variant">Current Load</span>
<span className="font-label-md text-forest-green">14.2 MW</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface-variant">Uptime (30d)</span>
<span className="font-label-md text-forest-green">99.98%</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface-variant">Source</span>
<span className="bg-brass-gold/20 text-secondary text-[10px] px-2 py-0.5 rounded font-bold uppercase">Solar + Gas IPP</span>
</div>
<div className="pt-4 mt-4 border-t border-outline-variant">
<p className="text-[10px] text-on-surface-variant uppercase font-bold mb-2">Recent Outages</p>
<p className="text-sm font-bold text-forest-green">No recorded downtime in last 72 hours</p>
</div>
</div>
</div>
{/*  Logistics Connectivity  */}
<div className="lg:col-span-8 bg-white p-6 rounded-lg border border-outline-variant">
<h4 className="font-headline-md text-primary mb-6">Multimodal Connectivity</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="border-l-2 border-brass-gold pl-4">
<p className="font-bold text-forest-green">Aba-Port Harcourt Expressway</p>
<p className="text-sm text-on-surface-variant">Complete rehabilitation of KM 0-45 providing seamless heavy-truck movement to Onne Seaport.</p>
</div>
<div className="border-l-2 border-brass-gold pl-4">
<p className="font-bold text-forest-green">Railway Cargo Terminal</p>
<p className="text-sm text-on-surface-variant">Dedicated spurs connected to the Eastern Line for bulk material transport and export logistics.</p>
</div>
<div className="border-l-2 border-brass-gold pl-4">
<p className="font-bold text-forest-green">Digital Customs Integration</p>
<p className="text-sm text-on-surface-variant">Paperless clearing system for manufacturers operating within the Special Economic Zone (SEZ).</p>
</div>
<div className="border-l-2 border-brass-gold pl-4">
<p className="font-bold text-forest-green">24/7 Armed Transit Security</p>
<p className="text-sm text-on-surface-variant">Dedicated security corridor monitoring all industrial cargo entering and leaving the state.</p>
</div>
</div>
</div>
</section>
</main>
</div>
{/*  Footer  */}
<footer className="bg-surface-container-highest border-t border-outline-variant mt-20">
<div className="max-w-max-width mx-auto px-6 md:px-margin-desktop py-gutter flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="font-headline-md text-primary mb-2">ABIA ONE</p>
<p className="text-caption text-on-surface-variant max-w-sm">© 2024 Abia State Government. All rights reserved. Built for the future of governance.</p>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Institutional Links</a>
<a className="text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Transparency Info</a>
<a className="text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Support</a>
</div>
</div>
</footer>
{/*  FAB for Contextual Action  */}
<button className="fixed bottom-8 right-8 bg-forest-green text-on-primary p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-40 group">
<span className="material-symbols-outlined">support_agent</span>
<span className="absolute right-full mr-4 bg-surface-dark text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Industrial Support</span>
</button>


      </div>
    </>
  );
}
