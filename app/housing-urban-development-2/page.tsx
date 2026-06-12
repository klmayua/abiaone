"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(226, 232, 240, 0.5);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
        
{/*  Top Navigation Shell  */}
<header className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline fixed top-0 w-full z-50">
<div className="flex justify-between items-center w-full px-margin-desktop max-w-max-width mx-auto h-16">
<div className="font-headline-md text-headline-md font-bold text-forest-green dark:text-primary-fixed-dim">
                ABIA ONE
            </div>
<nav className="hidden md:flex items-center space-x-8">
<a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-forest-green dark:hover:text-primary-fixed-dim transition-colors" href="/invest-in-aba">Invest</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-forest-green dark:hover:text-primary-fixed-dim transition-colors" href="/jobs-abia">Jobs</a>
<a className="font-label-md text-label-md text-forest-green dark:text-primary-fixed-dim border-b-2 border-brass-gold pb-1" href="/serve-abia">Serve</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-forest-green dark:hover:text-primary-fixed-dim transition-colors" href="#">Verify</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-forest-green dark:hover:text-primary-fixed-dim transition-colors" href="/local-governance">Governance</a>
</nav>
<div className="flex items-center space-x-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">language</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">notifications</span>
<button className="bg-forest-green text-on-primary px-6 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">Sign In</button>
</div>
</div>
</header>
{/*  Side Navigation Shell  */}
<aside className="flex flex-col fixed left-0 top-0 h-full py-6 px-4 space-y-2 bg-surface-container-low dark:bg-inverse-surface border-r border-outline-variant w-64 hidden xl:flex z-40 mt-16">
<div className="mb-8 px-2">
<h2 className="font-headline-sm text-headline-sm font-bold text-forest-green">Command Center</h2>
<p className="font-body-md text-label-md text-on-surface-variant opacity-70">State Operating System</p>
</div>
<div className="space-y-1">
<a className="flex items-center px-4 py-3 space-x-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="/">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md">Dashboard</span>
</a>
<a className="flex items-center px-4 py-3 space-x-3 text-on-primary-container bg-primary-container rounded-lg" href="#">
<span className="material-symbols-outlined">account_tree</span>
<span className="font-label-md">Project Monitoring</span>
</a>
<a className="flex items-center px-4 py-3 space-x-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-md">Revenue Tracking</span>
</a>
<a className="flex items-center px-4 py-3 space-x-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">hail</span>
<span className="font-label-md">Citizen Requests</span>
</a>
</div>
<div className="mt-auto border-t border-outline-variant pt-4 space-y-1">
<a className="flex items-center px-4 py-3 space-x-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-label-md">Support</span>
</a>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="xl:ml-64 pt-24 pb-16 px-margin-mobile md:px-gutter lg:px-margin-desktop">
<div className="max-w-max-width mx-auto">
{/*  Hero Section: Aba 2.0 Vision  */}
<section className="relative mb-12 rounded-xl overflow-hidden min-h-[500px] flex items-center">
<img alt="Aba 2.0 Urban Plan" className="absolute inset-0 w-full h-full object-cover" data-alt="A professional architectural rendering of a modern urban center featuring sleek glass skyscrapers, green rooftop gardens, and wide pedestrian walkways. The lighting is bright and airy, reflecting a high-end light-mode aesthetic. The color palette is dominated by forest green accents and brass gold details against a clean white and slate gray background, representing a futuristic Abia State infrastructure." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQnG71ul2-FlBnceGom_6lpqDo7MDoB8A7LNN6yEKwDZ48mjU8cbk3SuqQOZJtpuHFB4qDjUBiETT0Ig1beouv50evhx23yIp_5qQwyjTD2o1V1BAv5NEvlQHj7wC_YnHYFubwbpNJkvcyHFCEevJRBBwP7gKD0__SbWvpanRuLADa77kR1Tm5FEqd9rOBFQ78tBf2KyJHn9rH9Ars6g5bmdWsJZQDuMwVRQ_7N4tUnfQNlaV2UdJeh8oJcQ7g2pSBN-nG6Cec8mM"/>
<div className="absolute inset-0 bg-gradient-to-r from-forest-green/90 via-forest-green/40 to-transparent"></div>
<div className="relative z-10 px-12 max-w-2xl text-state-white">
<span className="inline-block px-4 py-1 bg-brass-gold text-on-secondary-fixed font-label-md text-label-md rounded mb-4 uppercase tracking-widest">Urban Renewal</span>
<h1 className="font-headline-lg text-headline-lg mb-6 leading-tight">Aba 2.0: Engineering the Future of Commerce &amp; Living</h1>
<p className="font-body-lg text-body-lg mb-8 opacity-90">A multi-billion naira infrastructure overhaul designed to transform Aba into a globally competitive industrial hub through smart urban planning and structural excellence.</p>
<div className="flex space-x-4">
<button className="bg-state-white text-forest-green px-8 py-3 rounded-lg font-label-md text-label-md font-bold hover:bg-surface-container-high transition-all">Explore Master Plan</button>
<button className="border border-state-white text-state-white px-8 py-3 rounded-lg font-label-md text-label-md font-bold hover:bg-state-white/10 transition-all">View Projects</button>
</div>
</div>
</section>
{/*  Key Metrics Bar  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
<div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg">
<p className="font-label-md text-label-md text-on-surface-variant uppercase">Projects Active</p>
<h3 className="font-headline-md text-headline-md text-forest-green">42</h3>
</div>
<div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg">
<p className="font-label-md text-label-md text-on-surface-variant uppercase">Housing Units</p>
<h3 className="font-headline-md text-headline-md text-forest-green">1,250+</h3>
</div>
<div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg">
<p className="font-label-md text-label-md text-on-surface-variant uppercase">Land Registry Trans.</p>
<h3 className="font-headline-md text-headline-md text-forest-green">98.4%</h3>
</div>
<div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg">
<p className="font-label-md text-label-md text-on-surface-variant uppercase">Planning Approvals</p>
<h3 className="font-headline-md text-headline-md text-forest-green">14 Days</h3>
</div>
</div>
{/*  Bento Grid: Projects & Land Registry  */}
<div className="bento-grid mb-16">
{/*  Large Card: Housing Development  */}
<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col md:flex-row shadow-sm">
<div className="w-full md:w-1/2 relative h-64 md:h-auto">
<img alt="Enyimba Smart City Housing" className="absolute inset-0 w-full h-full object-cover" data-alt="Modern affordable housing units with clean minimalist architecture, featuring large windows and sustainable building materials. The housing estate is surrounded by manicured green spaces and paved walkways, reflecting a sophisticated and professional urban development style. The lighting is warm and sunset-toned, emphasizing the brass-gold accents and forest green landscaping." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgG0w8S5FtEgsvJSBl_AlNWZBID0NSwwB784PKT2_HeFFtrQifnd0ek0KMllGCtOjDlPPSlaETTtSlh2_1oWdkhoYQ9q-073k7O57RvXqRLL87vCnOtQQLhoa9R1Hvz0hQwnmLZeKLWh5PClNnh30yshif-t2YAQ3RIKLj6upRaby4c2F35rjcliAq7HyfdN2zjUZObDgNwFz71kFmCiPuczD2VQvMjwEdxS6qI0Zbm15FfZxReyU9qe-7v-ur4yel26wdOLRc6D4"/>
</div>
<div className="w-full md:w-1/2 p-8">
<div className="flex justify-between items-start mb-4">
<h2 className="font-headline-md text-headline-md text-on-surface">Enyimba Heights</h2>
<span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed font-label-md text-caption rounded-full">Selling Now</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Phase 1 of our flagship affordable housing scheme. Modern 2 &amp; 3 bedroom apartments designed for young professionals and families, integrated with high-speed fiber optics and solar power.</p>
<div className="space-y-3 mb-8">
<div className="flex items-center space-x-2 text-on-surface-variant">
<span className="material-symbols-outlined text-forest-green">verified</span>
<span className="text-label-md font-label-md">Verified C of O on purchase</span>
</div>
<div className="flex items-center space-x-2 text-on-surface-variant">
<span className="material-symbols-outlined text-forest-green">electric_bolt</span>
<span className="text-label-md font-label-md">24/7 Hybrid Power Supply</span>
</div>
</div>
<button className="w-full border-2 border-forest-green text-forest-green font-label-md py-3 rounded-lg hover:bg-forest-green hover:text-on-primary transition-all">Download Brochure</button>
</div>
</div>
{/*  Land Registry Card  */}
<div className="col-span-12 lg:col-span-4 bg-forest-green text-state-white rounded-xl p-8 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-4xl mb-6" style={{"fontVariationSettings":"'FILL' 1"}}>security</span>
<h2 className="font-headline-md text-headline-md mb-4">Digital Land Registry</h2>
<p className="font-body-md text-body-md opacity-80 mb-6">Eliminate land disputes. Verify any title in Abia State in real-time through our blockchain-backed registry.</p>
</div>
<div className="bg-on-primary-fixed/20 p-4 rounded-lg border border-state-white/10 mb-8">
<p className="font-label-md text-caption uppercase tracking-wider mb-2">Registry Search</p>
<div className="flex space-x-2">
<input className="bg-state-white/10 border-state-white/30 text-state-white placeholder-state-white/50 w-full rounded focus:ring-brass-gold" placeholder="Plot ID / C of O No." type="text"/>
<button className="bg-brass-gold text-on-secondary-fixed px-3 rounded"><span className="material-symbols-outlined">search</span></button>
</div>
</div>
<a className="flex items-center justify-between font-label-md text-label-md border-b border-state-white/20 pb-2 hover:text-brass-gold transition-colors" href="#">
<span>Go to AGIS Portal</span>
<span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
{/*  Project Monitoring Card  */}
<div className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container border border-outline-variant rounded-xl p-6">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Street Light Solar Grid</h3>
<p className="font-caption text-caption text-on-surface-variant mb-4 uppercase tracking-tighter">Aba Road Corridor</p>
<div className="w-full bg-outline-variant h-2 rounded-full mb-4 overflow-hidden">
<div className="bg-forest-green h-full" style={{"width":"75%"}}></div>
</div>
<div className="flex justify-between text-label-md font-label-md mb-6">
<span>75% Complete</span>
<span className="text-forest-green">Phase 2/3</span>
</div>
<img alt="Solar Infrastructure" className="w-full h-40 object-cover rounded-lg mb-4" data-alt="A row of modern solar-powered streetlights along a wide, paved road in an urban Abia State setting. The sky is a clear morning blue, creating a high-contrast and professional look. The focus is on clean technology and sustainable infrastructure growth, with the forest green of nearby foliage complementing the slate gray of the asphalt." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3teb5pBt9rDxGJLFoCNtDFqsS9FVvGiAaJrckCAUCqF6ga8Q-yABxSBdg3g1V37NDmUqkr1i8sRXAG08HqeHAIT_P-Wucm86t4MC1ckWsLRMHm8JdUo2ta6C4ApY2R3H2iNI6sk6Xq_Z4CJoMVTDRX9YLfL-cjL8LrltTANMBZQGosTXNpbL1oUYOZvhYPo_vXSlYlUqLzHlUPJ5JcAd6Dz5dzaClJYg0PTAc14FBry7xGgSZ3T90h5aKAdKcJtcGhvd86MtxnWI"/>
<button className="w-full bg-surface-container-highest py-2 font-label-md text-label-md rounded">Live CCTV Feed</button>
</div>
{/*  Planning Portal Card  */}
<div className="col-span-12 md:col-span-6 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-8 flex flex-col justify-center">
<div className="max-w-xl">
<h2 className="font-headline-md text-headline-md text-forest-green mb-4 border-l-4 border-brass-gold pl-4">Digital Approval Portal</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-8">Obtain Building Plan Approvals within 14 working days. Our new digital workflow tracks your application from submission to physical site inspection.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex flex-col items-center text-center p-4 bg-surface-container-low rounded-lg border border-outline-variant/30">
<span className="material-symbols-outlined text-brass-gold text-3xl mb-2">upload_file</span>
<span className="font-label-md text-label-md">Submit Docs</span>
</div>
<div className="flex flex-col items-center text-center p-4 bg-surface-container-low rounded-lg border border-outline-variant/30">
<span className="material-symbols-outlined text-brass-gold text-3xl mb-2">engineering</span>
<span className="font-label-md text-label-md">Expert Review</span>
</div>
<div className="flex flex-col items-center text-center p-4 bg-surface-container-low rounded-lg border border-outline-variant/30">
<span className="material-symbols-outlined text-brass-gold text-3xl mb-2">verified</span>
<span className="font-label-md text-label-md">E-Certificate</span>
</div>
</div>
</div>
</div>
</div>
{/*  Urban Planning Map / Section  */}
<section className="mb-16">
<div className="flex flex-col md:flex-row justify-between items-end mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Interactive Master Plan</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Toggle layers to view planned industrial, residential, and green zones.</p>
</div>
<div className="flex space-x-2 mt-4 md:mt-0">
<button className="px-4 py-2 bg-forest-green text-on-primary rounded font-label-md">Industrial</button>
<button className="px-4 py-2 bg-surface-container-highest text-on-surface-variant rounded font-label-md">Residential</button>
<button className="px-4 py-2 bg-surface-container-highest text-on-surface-variant rounded font-label-md">Infrastructure</button>
</div>
</div>
<div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-outline-variant">
<img alt="Abia State Map Grid" className="w-full h-full object-cover grayscale opacity-40" data-location="Umuahia" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc61i4qnhykPr2mBXKEEXn4Fs1XH7rpbZdcyKge5NKwdNKWNKrVjsd4FQtpasp6Btk9VcgphXOwxHo0l4zC4eAebJPquILAGvam4zXeu00MnVNYzt_2LWNXOM_ISscVEZTWUrwBq2PG9nIhdStCNAyhMM96-ewe3VwZU7hKDpbypEdSYGi0YxeIo2_ZgOUHdf0XxlRZSVG2DIOmefWPDEiIuQQpWPTr0MQtVVN98ciTmZGCMTJaAqJvbGKwMmM6WUX8-f33CWjuOA"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
{/*  Visual representation of planning markers  */}
<div className="flex flex-col items-center animate-bounce">
<div className="w-8 h-8 bg-forest-green rounded-full border-4 border-state-white shadow-lg"></div>
<div className="mt-2 bg-state-white px-3 py-1 rounded shadow-md text-label-md font-bold text-forest-green">Project Ariaria 2.0</div>
</div>
</div>
{/*  Overlay Controls  */}
<div className="absolute bottom-8 right-8 flex flex-col space-y-2">
<button className="w-12 h-12 bg-state-white rounded-full shadow-xl flex items-center justify-center text-on-surface"><span className="material-symbols-outlined">add</span></button>
<button className="w-12 h-12 bg-state-white rounded-full shadow-xl flex items-center justify-center text-on-surface"><span className="material-symbols-outlined">remove</span></button>
</div>
<div className="absolute top-8 left-8 p-6 glass-card rounded-xl max-w-xs border-l-4 border-forest-green">
<h4 className="font-headline-md text-headline-md text-forest-green mb-2">Zone Analysis</h4>
<p className="font-caption text-caption text-on-surface-variant mb-4">Aba Integrated Zone - High density commercial &amp; light manufacturing.</p>
<ul className="space-y-2">
<li className="flex items-center text-label-md text-on-surface font-label-md">
<span className="w-3 h-3 bg-forest-green rounded-full mr-2"></span> Power Grid Active
                            </li>
<li className="flex items-center text-label-md text-on-surface font-label-md">
<span className="w-3 h-3 bg-brass-gold rounded-full mr-2"></span> Road Expansion 60%
                            </li>
</ul>
</div>
</div>
</section>
</div>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant">
<div className="w-full py-8 px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-max-width mx-auto">
<div className="mb-6 md:mb-0">
<div className="font-headline-sm text-headline-sm font-bold text-forest-green dark:text-primary-fixed-dim mb-2">ABIA ONE</div>
<p className="font-body-md text-caption text-on-surface-variant">© 2024 Abia State Government. All Rights Reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-8">
<a className="font-body-md text-label-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a>
<a className="font-body-md text-label-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Terms of Service</a>
<a className="font-body-md text-label-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Us</a>
<a className="font-body-md text-label-md text-on-surface-variant hover:text-brass-gold transition-colors" href="/news-press-center">Press Office</a>
</div>
</div>
</footer>


      </div>
    </>
  );
}
