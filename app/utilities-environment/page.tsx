"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .active-gold-border::after {\n            content: '';\n            display: block;\n            width: 40px;\n            height: 3px;\n            background-color: #D4AF37;\n            margin-top: 4px;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-surface text-on-surface font-body-md selection:bg-brass-gold selection:text-white">
        
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 dark:bg-forest-deep/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-8">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep dark:text-primary-fixed uppercase tracking-tighter">ABIA ONE</span>
<div className="hidden md:flex gap-6 items-center">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="/economic-transformation">Economy</a>
<a className="font-label-caps text-label-caps text-primary border-b-2 border-brass-accent pb-1" href="/serve-abia">Digital Gov</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="/local-governance">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="/secure-abia">Security</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden lg:flex items-center gap-2 px-4 py-2 border border-brass-gold text-secondary font-medium rounded-lg hover:bg-secondary-container transition-all">
<span className="material-symbols-outlined text-sm">emergency</span>
                Emergency
            </button>
<button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-medium hover:opacity-90 active:scale-95 transition-all">
                Citizen Portal
            </button>
</div>
</nav>
{/*  Sidebar (Desktop Only)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 pt-20 bg-surface-container-low border-r border-outline-variant z-40">
<div className="px-6 mb-8">
<h2 className="font-headline-md text-headline-md text-forest-deep">Utilities</h2>
<p className="text-caption font-caption text-on-surface-variant">Infrastructure OS v2.4</p>
</div>
<nav className="flex-1 space-y-2 px-4">
<a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg group" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>delete</span>
<span className="font-body-md font-semibold">Waste Management</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all group" href="/water-resources-irrigation">
<span className="material-symbols-outlined">water_drop</span>
<span className="font-body-md">Water Projects</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all group" href="#">
<span className="material-symbols-outlined">construction</span>
<span className="font-body-md">Public Works</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all group" href="/open-abia">
<span className="material-symbols-outlined">description</span>
<span className="font-body-md">Active Tenders</span>
</a>
</nav>
<div className="p-4 border-t border-outline-variant">
<button className="w-full flex items-center justify-center gap-2 py-3 bg-forest-green/10 text-forest-green rounded-lg font-semibold hover:bg-forest-green hover:text-white transition-all">
<span className="material-symbols-outlined">feedback</span>
                Citizen Feedback
            </button>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="lg:ml-64 pt-20 pb-12 px-margin-mobile md:px-margin-desktop min-h-screen">
{/*  Hero Section  */}
<header className="relative mb-12 rounded-xl overflow-hidden h-[400px] flex items-end p-8 md:p-12">
<img alt="Abia Utility Management" className="absolute inset-0 w-full h-full object-cover" data-alt="A professional, wide-angle cinematic shot of a modern, clean waste management facility with eco-friendly trucks parked in a neat row under a bright blue sky. The scene is bright and airy, representing efficient governance and environmental cleanliness in Abia State. The lighting is crisp and optimistic, with subtle green and gold accents in the environment reflecting a corporate, high-end infrastructure aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqSqeG5sF-hY0FCbYMdkUWLj2xmFTI05zMaLzkHbQSjY_PtL2takQobVdrSbZrZzCijRsO1masqQcB-B5mszhq-WVdDv7iF5n6GEvbb6u6oGyTZk0Gd0T3yIahUETSn878CV5txENGAwDWkw9fOjYHBZHv3HemyKkC3u1uATF0ctnVDC-6mW4R4y-E_n9HRZ-98Teqpf5-3ocxQT6PP8iAR6BYTEWGx672jHw0mTPOEN24QVmlTpl0OwAQGbk4FLHga0ez4qV6nuI" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
<div className="relative z-10 max-w-2xl">
<div className="flex items-center gap-2 mb-4">
<span className="bg-brass-gold text-on-secondary px-3 py-1 rounded-full text-caption font-label-md uppercase tracking-widest">Active Governance</span>
<span className="text-white/80 text-caption font-caption">• Aba &amp; Umuahia Corridors</span>
</div>
<h1 className="font-display-lg text-display-lg text-white mb-4 leading-tight">Clean Abia: Utility &amp; Infrastructure Hub</h1>
<p className="text-body-lg font-body-lg text-white/90">A unified digital platform for waste collection tracking, water infrastructure status, and transparent public work tendering.</p>
</div>
</header>
{/*  Bento Grid Dashboard  */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
{/*  Waste Management Card (Live Map)  */}
<div className="md:col-span-8 glass-card rounded-xl p-6 flex flex-col shadow-sm">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="font-headline-md text-headline-md text-forest-deep flex items-center gap-2">
<span className="material-symbols-outlined">location_on</span>
                            Waste Collection Zones
                        </h3>
<p className="text-on-surface-variant font-body-md mt-1">Real-time truck tracking and frequency zones for Aba &amp; Umuahia</p>
</div>
<div className="flex gap-2">
<span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-[12px] font-bold flex items-center gap-1">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> 94% Operational
                        </span>
</div>
</div>
<div className="relative h-80 rounded-lg overflow-hidden border border-outline-variant bg-surface-dim">
<img alt="Interactive Map" className="w-full h-full object-cover" data-alt="A high-detail cartographic visualization of a city map showing color-coded zones for waste management. The map features sophisticated UI elements like floating data points, smooth path lines indicating truck routes, and semi-transparent overlays in forest green and gold. The overall aesthetic is data-driven, professional, and clean, mimicking a high-tech government monitoring screen." data-location="Aba, Nigeria" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpNEUUodeJcGrHcvDBTCxsVCAcsPUUVmjdibziicRdpH23IQKpOSWDZgBZDPiUsogAQ8yD_HhvpClXluDrN3fQlYyEkkHKd02IWeeXVqtUYWPkIXPhfM0BkxjKLin00GLf3k42hej2HrCowiJPbiSD8S557jksiW-ldHtfXZIUvBWkO84aMgncP4eyfV8330WrLqVkg_UTnOhTpuI7SD2luCmwPrMSMaAnLWK86B54zyqyTkjgrqHi8XcyPdgaCxk2F57wbtiU0xA" />
{/*  Overlay Controls  */}
<div className="absolute top-4 right-4 flex flex-col gap-2">
<button className="bg-white/90 p-2 rounded shadow hover:bg-white transition-colors"><span className="material-symbols-outlined">add</span></button>
<button className="bg-white/90 p-2 rounded shadow hover:bg-white transition-colors"><span className="material-symbols-outlined">remove</span></button>
</div>
<div className="absolute bottom-4 left-4 bg-white/95 p-3 rounded-lg border border-outline-variant flex gap-4">
<div className="flex items-center gap-2"><div className="w-3 h-3 bg-forest-green rounded-full"></div> <span className="text-caption">Zone A (Active)</span></div>
<div className="flex items-center gap-2"><div className="w-3 h-3 bg-brass-gold rounded-full"></div> <span className="text-caption">Zone B (Scheduled)</span></div>
</div>
</div>
</div>
{/*  Water Status Stats  */}
<div className="md:col-span-4 space-y-6">
{/*  Aba Water Project Card  */}
<div className="glass-card rounded-xl p-6 border-l-4 border-l-primary flex flex-col justify-between">
<div>
<h4 className="font-headline-md text-headline-md-mobile text-forest-deep mb-2">Aba Water Progress</h4>
<div className="flex items-end gap-2 mb-4">
<span className="text-4xl font-bold text-primary">78%</span>
<span className="text-on-surface-variant pb-1 font-caption">Pipeline Expansion</span>
</div>
</div>
<div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[78%] transition-all duration-1000"></div>
</div>
<p className="text-[12px] text-on-surface-variant mt-4 italic">Next Milestone: Ariaria Market Connection (Sept 2024)</p>
</div>
{/*  Umuahia Water Status Card  */}
<div className="glass-card rounded-xl p-6 border-l-4 border-l-brass-gold flex flex-col justify-between">
<div>
<h4 className="font-headline-md text-headline-md-mobile text-forest-deep mb-2">Umuahia Utility</h4>
<div className="flex items-end gap-2 mb-4">
<span className="text-4xl font-bold text-brass-gold">Active</span>
<span className="text-on-surface-variant pb-1 font-caption">Grid Distribution</span>
</div>
</div>
<div className="flex gap-2">
<div className="w-full bg-brass-gold/20 h-2 rounded-full overflow-hidden flex">
<div className="bg-brass-gold h-full w-[45%]"></div>
<div className="bg-brass-gold/40 h-full w-[55%]"></div>
</div>
</div>
<p className="text-[12px] text-on-surface-variant mt-4">Maintenance cycle: 12 days remaining</p>
</div>
</div>
</section>
{/*  Public Works Tendering Section  */}
<section className="mb-12">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-forest-deep active-gold-border">Environmental Tenders</h2>
<p className="text-on-surface-variant mt-2">Transparent procurement for state-wide ecological projects.</p>
</div>
<button className="text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    View All Tenders <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Tender Card 1  */}
<div className="bg-white border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
<div className="flex justify-between mb-4">
<span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded font-label-md text-[10px]">REF: AB/EN/24/009</span>
<span className="text-eagle-red flex items-center gap-1 text-caption font-bold">
<span className="material-symbols-outlined text-sm">alarm</span> 4 Days Left
                        </span>
</div>
<h5 className="font-headline-md text-body-lg text-forest-deep mb-3 group-hover:text-primary transition-colors">Erosion Control System: Ohuhu Corridor</h5>
<p className="text-on-surface-variant text-body-md mb-6 line-clamp-2">Detailed engineering design and construction of drainage networks to combat seasonal flooding.</p>
<div className="flex items-center justify-between pt-4 border-t border-outline-variant">
<div>
<p className="text-caption text-on-surface-variant uppercase">Estimated Value</p>
<p className="font-bold text-forest-deep">₦120.5M</p>
</div>
<button className="bg-primary-container text-on-primary-fixed-variant px-4 py-2 rounded font-semibold text-caption hover:bg-primary hover:text-white transition-colors">Apply Now</button>
</div>
</div>
{/*  Tender Card 2  */}
<div className="bg-white border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
<div className="flex justify-between mb-4">
<span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded font-label-md text-[10px]">REF: AB/WA/24/014</span>
<span className="text-on-surface-variant flex items-center gap-1 text-caption font-bold">
<span className="material-symbols-outlined text-sm">check_circle</span> Open
                        </span>
</div>
<h5 className="font-headline-md text-body-lg text-forest-deep mb-3 group-hover:text-primary transition-colors">Solar-Powered Borehole Integration</h5>
<p className="text-on-surface-variant text-body-md mb-6 line-clamp-2">Installation of 12 sustainable water points across Obingwa LGA with automated filtration systems.</p>
<div className="flex items-center justify-between pt-4 border-t border-outline-variant">
<div>
<p className="text-caption text-on-surface-variant uppercase">Estimated Value</p>
<p className="font-bold text-forest-deep">₦45.0M</p>
</div>
<button className="bg-primary-container text-on-primary-fixed-variant px-4 py-2 rounded font-semibold text-caption hover:bg-primary hover:text-white transition-colors">Apply Now</button>
</div>
</div>
{/*  Tender Card 3  */}
<div className="bg-white border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-all duration-300 group">
<div className="flex justify-between mb-4">
<span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded font-label-md text-[10px]">REF: AB/UT/24/021</span>
<span className="text-on-surface-variant flex items-center gap-1 text-caption font-bold">
<span className="material-symbols-outlined text-sm">check_circle</span> Open
                        </span>
</div>
<h5 className="font-headline-md text-body-lg text-forest-deep mb-3 group-hover:text-primary transition-colors">Smart Waste Bin Pilot Program</h5>
<p className="text-on-surface-variant text-body-md mb-6 line-clamp-2">Procurement of IoT-enabled sensors and collection logistics for Umuahia Central District.</p>
<div className="flex items-center justify-between pt-4 border-t border-outline-variant">
<div>
<p className="text-caption text-on-surface-variant uppercase">Estimated Value</p>
<p className="font-bold text-forest-deep">₦18.2M</p>
</div>
<button className="bg-primary-container text-on-primary-fixed-variant px-4 py-2 rounded font-semibold text-caption hover:bg-primary hover:text-white transition-colors">Apply Now</button>
</div>
</div>
</div>
</section>
{/*  Utility Connection Service  */}
<section className="bg-forest-deep rounded-2xl overflow-hidden relative">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="p-8 md:p-12 z-10 flex flex-col justify-center">
<h3 className="font-display-lg text-headline-lg text-white mb-6">Connect Your Property to the Future</h3>
<p className="text-primary-fixed-dim font-body-lg mb-8">Streamlined digital applications for new water connections, waste disposal permits, and environmental certifications.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-brass-gold text-on-secondary px-8 py-3 rounded-lg font-bold hover:scale-105 transition-transform flex items-center gap-2">
<span className="material-symbols-outlined">add_business</span>
                            Business Connection
                        </button>
<button className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-all flex items-center gap-2">
<span className="material-symbols-outlined">home</span>
                            Residential Connection
                        </button>
</div>
</div>
<div className="relative h-[300px] md:h-auto min-h-[400px]">
<img alt="Utility Infrastructure" className="absolute inset-0 w-full h-full object-cover opacity-60" data-alt="A futuristic and clean industrial design of underground utility pipes and wiring, highlighted with neon green and soft gold light strips. The composition is artistic and modern, suggesting high-end technological infrastructure hidden beneath a clean city. The mood is powerful, secure, and professional, aligning with the Abia State governance visual identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAalyUm3OeA9wuuPITFD1D_cBS0loVVOy5jpjPrPWhYJktxndKe9XG0r_T3-S1SD3KAlFw222x24VTnwBmNLq3_Lp4ixTOYt2egf-VokGd7taazcyg0jmizkG5bCuQ2zitXN1ATwRavR-ltfG2vfMV2qQ4jFZRUEl49K7dAnbE8TY1CBNcYAeL-bkmdfk6laOXzGZZ_qarqdMw-WP4Tsmv3-ejmAdKdeFapPn09QEJhz2-deJ9Zi3NfryDnl7d6E3KAoMAT4JeH3WE" />
<div className="absolute inset-0 bg-gradient-to-l from-forest-deep via-transparent to-transparent hidden md:block"></div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto border-t border-outline-variant py-12">
<div className="max-w-container-max-width mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<h4 className="font-headline-lg text-headline-lg text-forest-deep mb-4 uppercase font-bold">ABIA ONE</h4>
<p className="text-on-surface-variant max-w-sm">The digital operating system for Abia State. Powering transparent governance, modern infrastructure, and citizen-first utilities.</p>
<div className="flex gap-4 mt-6">
<a className="w-10 h-10 rounded-full bg-forest-green flex items-center justify-center text-white hover:bg-brass-gold transition-colors" href="#"><span className="material-symbols-outlined text-sm">public</span></a>
<a className="w-10 h-10 rounded-full bg-forest-green flex items-center justify-center text-white hover:bg-brass-gold transition-colors" href="#"><span className="material-symbols-outlined text-sm">mail</span></a>
<a className="w-10 h-10 rounded-full bg-forest-green flex items-center justify-center text-white hover:bg-brass-gold transition-colors" href="#"><span className="material-symbols-outlined text-sm">call</span></a>
</div>
</div>
<div>
<h5 className="font-label-caps text-label-caps text-forest-deep mb-6 font-bold">Government</h5>
<ul className="space-y-3">
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="/invest-in-aba">Invest Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="/serve-abia">Serve Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="/build-abia">Build Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="/open-abia">Open Abia</a></li>
</ul>
</div>
<div>
<h5 className="font-label-caps text-label-caps text-forest-deep mb-6 font-bold">Legal &amp; Access</h5>
<ul className="space-y-3">
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Us</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">FOI Requests</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-outline flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-body-md text-on-surface-variant text-center md:text-left">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex items-center gap-2">
<img alt="Abia State Logo" className="h-10 opacity-80 hover:opacity-100 transition-opacity" data-alt="A clean, vector-style official crest of Abia State, Nigeria, featuring traditional heraldry elements like the eagle and the coat of arms. The logo is displayed in a monochrome forest green to maintain a professional, modern government aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDseR9NDmm-ifIkv0DcD01qaKIFE6f6JKSDTtrkKs2vM20w0jLlYnkBuK50DWFXQo5QK5WdXsgNPCSwRUMeymat_aOBbIrCdaZ5HzP6oS7zyyVaVstauLBCX6Y0xaIJH9wyWPN9SwxnsaqH0voEPBrfBVGn5v65RAbv5bM1CggVSfGqZSjYlJaUX8vs4qdPV8WMNYb15b_AGO4vOJbZ6VnlI5ttgJ9mt-IkIAEOOl1vtExcDh4YYTxXQpgYwpS2JNTLHnm4SNUDjHA" />
</div>
</div>
</div>
</footer>


      </div>
    </>
  );
}
