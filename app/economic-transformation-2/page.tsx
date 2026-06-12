"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            display: inline-block;\n            vertical-align: middle;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .hero-gradient {\n            background: linear-gradient(135deg, #002E1E 0%, #004d31 100%);\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.03);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(255, 255, 255, 0.1);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  TopNavBar Execution  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 dark:bg-forest-deep/80 backdrop-blur-md border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-4">
<img alt="Abia State" className="h-10 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE3izPFfjpNfTlj3-6YrzlOE1H5OkjTDxWXEMONKK-L6RPS5sdFG4O0bHPM7wi9grvsfsf4Drgqi-lkOjPcJBXFac8iT4SeN7qpAiii4yoWx7-cQ1L3926ZtwJqmwYiKfwW-Al6vzGD2Op3Ej_ULlNKcKOusEFQsxtCzOt_uvXb5Mj6UgS2CGxGYgBXaS4EfONBJCtsRGk9VyE-XKaRWc6zLl3VIJzDjLI1XGbSwEHGKRsKpuMUg8x1lvGgMPZmevuz2XQutnR8rI" />
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep dark:text-primary-fixed">ABIA ONE</span>
</div>
<div className="hidden md:flex gap-8 items-center">
<a className="font-label-caps text-label-caps text-primary dark:text-primary-fixed-dim border-b-2 border-brass-accent pb-1 transition-colors duration-200" href="/economic-transformation">Economy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="/serve-abia">Digital Gov</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="/local-governance">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="/secure-abia">Security</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden lg:block px-6 py-2 bg-primary text-on-primary font-label-caps text-label-caps rounded-lg hover:opacity-90 transition-all">Citizen Portal</button>
<button className="p-2 text-error"><span className="material-symbols-outlined">emergency</span></button>
</div>
</nav>
{/*  SideNavBar (Desktop Shell Only)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-16 bg-surface-container-low dark:bg-forest-deep border-r border-outline-variant z-40">
<div className="p-6">
<p className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Core Layers</p>
</div>
<div className="space-y-1">
<div className="bg-secondary-container dark:bg-primary-container text-on-secondary-container dark:text-on-primary-container rounded-lg mx-2 flex items-center gap-3 p-3 transition-all translate-x-1">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-sm text-label-sm">Economic Transformation</span>
</div>
<div className="text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant/50 mx-2 flex items-center gap-3 p-3 rounded-lg transition-all">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-sm text-label-sm">Digital Government</span>
</div>
<div className="text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant/50 mx-2 flex items-center gap-3 p-3 rounded-lg transition-all">
<span className="material-symbols-outlined">mitre</span>
<span className="font-label-sm text-label-sm">Transparent Governance</span>
</div>
<div className="text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant/50 mx-2 flex items-center gap-3 p-3 rounded-lg transition-all">
<span className="material-symbols-outlined">security</span>
<span className="font-label-sm text-label-sm">Public Trust</span>
</div>
</div>
<div className="mt-auto p-4 space-y-4">
<button className="w-full py-3 bg-brass-accent text-on-primary font-label-caps text-label-caps rounded-lg">Citizen Feedback</button>
<div className="pt-4 border-t border-outline-variant space-y-2">
<div className="flex items-center gap-3 p-2 text-on-surface-variant hover:text-primary cursor-pointer">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</div>
<div className="flex items-center gap-3 p-2 text-on-surface-variant hover:text-primary cursor-pointer">
<span className="material-symbols-outlined">help</span>
<span className="font-label-sm text-label-sm">Support</span>
</div>
</div>
</div>
</aside>
<main className="lg:ml-64 pt-16 min-h-screen">
{/*  Hero Section  */}
<section className="relative h-[600px] flex items-center px-margin-mobile md:px-margin-desktop overflow-hidden bg-forest-deep text-on-primary">

<div className="relative z-10 max-w-3xl">
<p className="font-label-caps text-label-caps text-secondary-fixed mb-4">ABIA STATE OPERATING SYSTEM</p>
<h1 className="font-headline-xl text-headline-xl mb-6">Economic <br /><span className="text-brass-accent">Transformation</span></h1>
<p className="font-body-lg text-body-lg mb-8 text-surface-variant max-w-2xl">Powering the next industrial revolution in West Africa through integrated clusters, digital education, and artisan modernization. Abia is open for business.</p>
<div className="flex gap-4">
<button className="bg-brass-accent text-on-primary px-8 py-4 rounded-lg font-headline-lg text-[16px] hover:scale-105 transition-transform">Explore Opportunities</button>
<button className="border border-outline-variant text-on-primary px-8 py-4 rounded-lg font-headline-lg text-[16px] hover:bg-white/10 transition-all">Download Report</button>
</div>
</div>
</section>
{/*  Industrial Transformation Section  */}
<section className="py-20 px-margin-mobile md:px-margin-desktop">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<p className="font-label-caps text-label-caps text-brass-accent mb-2">MANUFACTURING EDGE</p>
<h2 className="font-headline-lg text-headline-lg">Industrial Transformation</h2>
</div>
<p className="max-w-md font-body-md text-on-surface-variant">Modernizing the 'Aba Spirit' with technology-first infrastructure and global supply chain integration.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Cluster 1  */}
<div className="bg-surface-container-low p-8 border border-outline-variant hover:border-brass-accent transition-colors group">
<div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 text-on-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">factory</span>
</div>
<h3 className="font-headline-lg text-[20px] mb-4">Ariaria Industrial City</h3>
<p className="text-on-surface-variant mb-6">Automated leatherworks and garment clusters with 24/7 power supply and shared facility centers.</p>
<div className="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[85%]"></div>
</div>
<p className="font-label-caps text-[10px] mt-2">85% INFRASTRUCTURE COMPLETE</p>
</div>
{/*  Cluster 2  */}
<div className="bg-surface-container-low p-8 border border-outline-variant hover:border-brass-accent transition-colors group">
<div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 text-on-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">precision_manufacturing</span>
</div>
<h3 className="font-headline-lg text-[20px] mb-4">Enyimba Economic City</h3>
<p className="text-on-surface-variant mb-6">Free trade zone status with multi-modal transport links connecting Abia to regional markets.</p>
<div className="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[60%]"></div>
</div>
<p className="font-label-caps text-[10px] mt-2">60% OPERATIONAL CAPACITY</p>
</div>
{/*  Cluster 3  */}
<div className="bg-surface-container-low p-8 border border-outline-variant hover:border-brass-accent transition-colors group">
<div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6 text-on-primary group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">hub</span>
</div>
<h3 className="font-headline-lg text-[20px] mb-4">Umuahia Agribusiness Hub</h3>
<p className="text-on-surface-variant mb-6">Centralized processing plants for palm oil and cassava to maximize value addition and export.</p>
<div className="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[45%]"></div>
</div>
<p className="font-label-caps text-[10px] mt-2">45% VALUE CHAIN INTEGRATION</p>
</div>
</div>
</section>
{/*  Invest Abia Bento Grid  */}
<section className="py-20 bg-forest-deep text-on-primary px-margin-mobile md:px-margin-desktop">
<div className="max-w-container-max-width mx-auto">
<p className="font-label-caps text-label-caps text-secondary-fixed mb-4">PARTNERSHIP FOR GROWTH</p>
<h2 className="font-headline-lg text-headline-lg mb-12">Invest Abia</h2>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl border border-white/10">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" data-alt="A cinematic aerial view of a sprawling industrial manufacturing plant in Nigeria featuring modern infrastructure, shipping containers, and heavy machinery under a warm, glowing sunset. The style is professional and corporate, reflecting large-scale economic investment and growth with deep forest greens and golden brass accents in the highlights." style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDqKAOlj8X7lxiV2sk4HlqJpK_dcI8mFkxI44zQYfjrXAdEhq2zuwqwlAHh1UOhxOtYWXG3BwMzH7BGBx30WTJ2GDVP2WZodpjP1Ek8WEB5Wf5Vp5DfMAcwCmyIrnjLRv39qyD_8qfUCwk3hhK5KbMA1OHYKGJfFG0w9RcrOWhLV6KwUDkEuI2tViub6nHTXBLeR8K4NzPvkgwvoPllHsO4FCsckyqbOLQ0BgjjrYgzHETHUb1LEjioMp0UKNeslJ3R0qr7DIA8cTU')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-forest-deep to-transparent opacity-80"></div>
<div className="absolute bottom-0 p-8">
<h4 className="font-headline-lg text-headline-lg mb-2">Foreign Direct Investment</h4>
<p className="text-surface-variant mb-6">Incentivized entry for global manufacturing partners with 10-year tax holidays.</p>
<button className="bg-white text-forest-deep px-6 py-2 font-label-caps text-label-caps rounded">Learn More</button>
</div>
</div>
<div className="md:col-span-2 bg-primary-container p-8 rounded-xl flex flex-col justify-center border border-white/10">
<span className="material-symbols-outlined text-brass-accent text-4xl mb-4">handshake</span>
<h4 className="font-headline-lg text-[24px] mb-2">Public-Private Partnerships</h4>
<p className="text-on-primary-container">Structured frameworks for infrastructure development and sustainable energy projects.</p>
</div>
<div className="bg-surface-variant/10 p-6 rounded-xl border border-white/10 hover:bg-white/5 transition-all">
<h5 className="font-label-caps text-label-caps text-brass-accent mb-4">TEXTILES</h5>
<p className="text-sm font-body-md">Reviving the heritage of Aba fabrics for the global runway.</p>
</div>
<div className="bg-surface-variant/10 p-6 rounded-xl border border-white/10 hover:bg-white/5 transition-all">
<h5 className="font-label-caps text-label-caps text-brass-accent mb-4">LOGISTICS</h5>
<p className="text-sm font-body-md">Warehouse solutions for regional distribution across SE Nigeria.</p>
</div>
</div>
</div>
</section>
{/*  Jobs Abia & AI Academy Dual Section  */}
<section className="py-24 px-margin-mobile md:px-margin-desktop bg-sand-neutral">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
{/*  Jobs Abia  */}
<div>
<div className="flex items-center gap-4 mb-8">
<div className="p-3 bg-emerald-vibrant/10 text-emerald-vibrant rounded-full">
<span className="material-symbols-outlined">work</span>
</div>
<h2 className="font-headline-lg text-headline-lg">Jobs Abia</h2>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-10">Our digital marketplace connects skilled artisans and certified professionals with local and international opportunities.</p>
<div className="space-y-4">
<div className="p-6 bg-white border-b-2 border-outline-variant hover:border-primary transition-all flex justify-between items-center group cursor-pointer shadow-sm">
<div>
<h4 className="font-headline-lg text-[18px] mb-1">Senior Leather Craftsman</h4>
<p className="text-label-sm text-on-surface-variant">Ariaria Cluster • Full-time</p>
</div>
<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</div>
<div className="p-6 bg-white border-b-2 border-outline-variant hover:border-primary transition-all flex justify-between items-center group cursor-pointer shadow-sm">
<div>
<h4 className="font-headline-lg text-[18px] mb-1">Logistics Operations Manager</h4>
<p className="text-label-sm text-on-surface-variant">Enyimba City • Remote Hybrid</p>
</div>
<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</div>
<div className="p-6 bg-white border-b-2 border-outline-variant hover:border-primary transition-all flex justify-between items-center group cursor-pointer shadow-sm">
<div>
<h4 className="font-headline-lg text-[18px] mb-1">Artisan Matching Profile</h4>
<p className="text-label-sm text-on-surface-variant">For Individual Contractors</p>
</div>
<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">person_search</span>
</div>
</div>
<button className="mt-8 font-label-caps text-label-caps text-primary border-b-2 border-primary flex items-center gap-2 hover:opacity-70">
                        View All Listings <span className="material-symbols-outlined text-[16px]">open_in_new</span>
</button>
</div>
{/*  AI Academy  */}
<div className="bg-forest-deep rounded-2xl p-10 text-on-primary relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-brass-accent/10 rounded-full blur-[80px]"></div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-8">
<div className="p-3 bg-brass-accent/20 text-brass-accent rounded-full border border-brass-accent/30">
<span className="material-symbols-outlined">psychology</span>
</div>
<h2 className="font-headline-lg text-headline-lg">AI Academy</h2>
</div>
<p className="font-body-lg text-body-lg text-surface-variant mb-10">Upskilling 50,000 Abia youth in Artificial Intelligence, Machine Learning, and Digital Governance systems.</p>
<div className="grid grid-cols-2 gap-4 mb-10">
<div className="p-4 bg-white/5 rounded-lg border border-white/10">
<p className="font-headline-lg text-[24px] text-brass-accent mb-1">12k+</p>
<p className="text-label-sm text-surface-variant uppercase">Students Enrolled</p>
</div>
<div className="p-4 bg-white/5 rounded-lg border border-white/10">
<p className="font-headline-lg text-[24px] text-brass-accent mb-1">85%</p>
<p className="text-label-sm text-surface-variant uppercase">Job Placement</p>
</div>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-emerald-vibrant" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<div>
<h5 className="font-label-caps text-label-caps">Machine Learning Foundations</h5>
<p className="text-sm text-surface-variant">Practical AI for industrial automation.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-emerald-vibrant" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<div>
<h5 className="font-label-caps text-label-caps">GovTech Specialist</h5>
<p className="text-sm text-surface-variant">Building the next generation of civil service tools.</p>
</div>
</div>
</div>
<button className="w-full mt-12 py-4 bg-primary text-primary-fixed border border-primary-fixed/30 rounded-lg font-headline-lg text-[16px] hover:bg-emerald-vibrant transition-all">Apply for Cohort 4</button>
</div>
</div>
</div>
</section>
{/*  Dynamic Data Visualizer  */}
<section className="py-20 px-margin-mobile md:px-margin-desktop bg-white">
<div className="max-w-4xl mx-auto text-center mb-16">
<h2 className="font-headline-lg text-headline-lg mb-4">Economic Trajectory</h2>
<p className="text-on-surface-variant">Real-time indicators of state transformation and industrial output.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col items-center">
<div className="relative w-48 h-48 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-surface-container-high" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-emerald-vibrant" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.92" strokeDashoffset="110" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-headline-xl text-[40px] text-primary">82%</span>
</div>
</div>
<p className="font-label-caps text-label-caps mt-6">EXPORT GROWTH</p>
</div>
<div className="flex flex-col items-center">
<div className="relative w-48 h-48 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-surface-container-high" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-brass-accent" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.92" strokeDashoffset="200" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-headline-xl text-[40px] text-primary">64%</span>
</div>
</div>
<p className="font-label-caps text-label-caps mt-6">TECH ADOPTION</p>
</div>
<div className="flex flex-col items-center">
<div className="relative w-48 h-48 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-surface-container-high" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-primary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.92" strokeDashoffset="40" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-headline-xl text-[40px] text-primary">94%</span>
</div>
</div>
<p className="font-label-caps text-label-caps mt-6">SME COMPLIANCE</p>
</div>
</div>
</section>
</main>
{/*  Footer Execution  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest dark:bg-forest-deep mt-auto py-12 border-t border-outline-variant dark:border-outline">
<div className="max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs">
<div className="flex items-center gap-3 mb-6">
<img alt="Abia State" className="h-12 w-auto grayscale brightness-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE3izPFfjpNfTlj3-6YrzlOE1H5OkjTDxWXEMONKK-L6RPS5sdFG4O0bHPM7wi9grvsfsf4Drgqi-lkOjPcJBXFac8iT4SeN7qpAiii4yoWx7-cQ1L3926ZtwJqmwYiKfwW-Al6vzGD2Op3Ej_ULlNKcKOusEFQsxtCzOt_uvXb5Mj6UgS2CGxGYgBXaS4EfONBJCtsRGk9VyE-XKaRWc6zLl3VIJzDjLI1XGbSwEHGKRsKpuMUg8x1lvGgMPZmevuz2XQutnR8rI" />
<span className="font-headline-lg text-headline-lg text-forest-deep dark:text-primary-fixed">ABIA ONE</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">The unified operating system for Abia State government services and economic growth.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h6 className="font-label-caps text-label-caps mb-6 text-primary">TRANSFORM</h6>
<ul className="space-y-4">
<li><a className="text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/invest-in-aba">Invest Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/serve-abia">Serve Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/build-abia">Build Abia</a></li>
</ul>
</div>
<div>
<h6 className="font-label-caps text-label-caps mb-6 text-primary">GOVERNANCE</h6>
<ul className="space-y-4">
<li><a className="text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/open-abia">Open Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-container-max-width mx-auto mt-16 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-label-sm text-label-sm text-on-surface-variant opacity-70">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-6">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">public</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">share</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">campaign</span>
</div>
</div>
</footer>
{/*  FAB Suppression: Not rendered on focused Landing screens  */}


      </div>
    </>
  );
}
