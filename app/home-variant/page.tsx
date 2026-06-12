export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { font-family: 'Inter', sans-serif; }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            display: inline-block;\n            vertical-align: middle;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-panel {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(191, 201, 193, 0.4);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-sand-neutral text-on-surface">
        
{/*  TopNavBar (Shared Component)  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-5 md:px-16 h-16 max-w-[1280px] mx-auto left-0 right-0 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-4">
<img alt="Abia State Logo" className="h-10 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE3izPFfjpNfTlj3-6YrzlOE1H5OkjTDxWXEMONKK-L6RPS5sdFG4O0bHPM7wi9grvsfsf4Drgqi-lkOjPcJBXFac8iT4SeN7qpAiii4yoWx7-cQ1L3926ZtwJqmwYiKfwW-Al6vzGD2Op3Ej_ULlNKcKOusEFQsxtCzOt_uvXb5Mj6UgS2CGxGYgBXaS4EfONBJCtsRGk9VyE-XKaRWc6zLl3VIJzDjLI1XGbSwEHGKRsKpuMUg8x1lvGgMPZmevuz2XQutnR8rI" />
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep">ABIA ONE</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="font-label-caps text-label-caps text-primary border-b-2 border-brass-accent pb-1" href="#">Economy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Digital Gov</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Security</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden lg:block px-4 py-2 bg-primary text-on-primary font-label-caps text-label-caps rounded-lg hover:opacity-90 transition-all active:scale-95">Citizen Portal</button>
<button className="p-2 text-error hover:bg-error-container rounded-full transition-colors">
<span className="material-symbols-outlined">emergency</span>
</button>
<div className="h-10 w-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant">
<span className="material-symbols-outlined text-on-surface-variant">person</span>
</div>
</div>
</nav>
{/*  SideNavBar (Shared Component - Desktop Only)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 pt-20 bg-surface-container-low border-r border-outline-variant z-40">
<div className="px-6 mb-8">
<h2 className="font-label-caps text-label-caps text-on-surface-variant opacity-60">ADMINISTRATIVE LAYERS</h2>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 py-3 px-4 mx-2 bg-secondary-container text-on-secondary-container rounded-lg translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>payments</span>
<span className="font-label-sm text-label-sm">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 py-3 px-4 mx-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-sm text-label-sm">Digital Government</span>
</a>
<a className="flex items-center gap-3 py-3 px-4 mx-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">mitre</span>
<span className="font-label-sm text-label-sm">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 py-3 px-4 mx-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">security</span>
<span className="font-label-sm text-label-sm">Public Trust</span>
</a>
</nav>
<div className="p-6 border-t border-outline-variant">
<button className="w-full py-3 bg-forest-deep text-white rounded-lg font-label-caps text-label-caps hover:bg-primary transition-all">Citizen Feedback</button>
<div className="mt-6 flex items-center justify-around text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-primary">settings</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary">help</span>
</div>
</div>
</aside>
{/*  Main Content Area  */}
<main className="lg:pl-64 pt-20 pb-12 min-h-screen">
<div className="max-w-[1280px] mx-auto px-5 md:px-16 py-8">
{/*  Hero Dashboard Header  */}
<header className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="font-label-caps text-label-caps text-brass-accent">STATE OPERATING SYSTEM</span>
<h1 className="font-headline-xl text-headline-xl text-forest-deep mt-2">Dashboard Central</h1>
</div>
<div className="flex gap-4">
<div className="bg-surface-container-highest p-4 rounded-xl flex items-center gap-4 border border-outline-variant">
<div className="w-12 h-12 rounded-full bg-emerald-vibrant flex items-center justify-center text-white">
<span className="material-symbols-outlined">trending_up</span>
</div>
<div>
<p className="font-label-caps text-[10px] text-on-surface-variant">GDP GROWTH</p>
<p className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep">+4.2%</p>
</div>
</div>
<div className="bg-surface-container-highest p-4 rounded-xl flex items-center gap-4 border border-outline-variant">
<div className="w-12 h-12 rounded-full bg-brass-accent flex items-center justify-center text-white">
<span className="material-symbols-outlined">verified_user</span>
</div>
<div>
<p className="font-label-caps text-[10px] text-on-surface-variant">DIGITAL LITERACY</p>
<p className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep">68%</p>
</div>
</div>
</div>
</div>
</header>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Governor's Message  */}
<section className="md:col-span-8 bg-forest-deep rounded-xl p-8 text-white relative overflow-hidden flex flex-col justify-between min-h-[340px]">
<div className="relative z-10 max-w-lg">
<span className="inline-block px-3 py-1 bg-brass-accent/20 border border-brass-accent rounded-full text-[10px] font-label-caps text-brass-accent mb-6">OFFICE OF THE GOVERNOR</span>
<h2 className="font-headline-lg text-headline-lg mb-4">"Building the foundation for a sustainable, digital economy in the heart of Igboland."</h2>
<p className="font-body-md text-body-md text-surface-variant/80 mb-6">Our administration is committed to the Abia 2035 vision, transforming the state through infrastructure, security, and digital empowerment.</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/20"></div>
<div>
<p className="font-label-sm text-label-sm font-bold">His Excellency, Dr. Alex Otti</p>
<p className="font-label-sm text-[10px] opacity-70 uppercase">Executive Governor of Abia State</p>
</div>
</div>
</div>
{/*  Decorative Asset  */}
<div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-20 pointer-events-none">

</div>
</section>
{/*  Abia 2035 Tracker  */}
<section className="md:col-span-4 bg-white border border-outline-variant rounded-xl p-6 flex flex-col">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="font-label-caps text-label-caps text-on-surface-variant">ABIA 2035 TRACKER</h3>
<p className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep mt-1">Goal: Industrial Hub</p>
</div>
<span className="material-symbols-outlined text-brass-accent">flag</span>
</div>
<div className="space-y-6 flex-1">
<div>
<div className="flex justify-between text-[11px] font-label-caps mb-2">
<span>POWER ELECTRIFICATION</span>
<span className="text-emerald-vibrant">72%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-emerald-vibrant h-full w-[72%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[11px] font-label-caps mb-2">
<span>DIGITAL GOV MIGRATION</span>
<span className="text-brass-accent">45%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-brass-accent h-full w-[45%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[11px] font-label-caps mb-2">
<span>SECURITY COVERAGE</span>
<span className="text-status-security">88%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-status-security h-full w-[88%]"></div>
</div>
</div>
</div>
<button className="mt-8 text-primary font-label-caps text-label-caps flex items-center gap-2 hover:underline">
                        VIEW FULL ROADMAP <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</section>
{/*  Transformation Layers (Icon Grid)  */}
<section className="md:col-span-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group bg-white border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-status-economic/10 text-status-economic flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">finance_chip</span>
</div>
<h4 className="font-headline-lg-mobile text-headline-lg-mobile font-bold mb-2">Economy</h4>
<p className="font-body-md text-sm text-on-surface-variant">Market digitization &amp; SME support hubs.</p>
</div>
<div className="group bg-white border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-emerald-vibrant/10 text-emerald-vibrant flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">cloud_done</span>
</div>
<h4 className="font-headline-lg-mobile text-headline-lg-mobile font-bold mb-2">Digital Gov</h4>
<p className="font-body-md text-sm text-on-surface-variant">Paperless administration &amp; citizen portal.</p>
</div>
<div className="group bg-white border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-brass-accent/10 text-brass-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">visibility</span>
</div>
<h4 className="font-headline-lg-mobile text-headline-lg-mobile font-bold mb-2">Governance</h4>
<p className="font-body-md text-sm text-on-surface-variant">Open data initiatives &amp; budget tracking.</p>
</div>
<div className="group bg-white border border-outline-variant rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-status-security/10 text-status-security flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">shield_with_heart</span>
</div>
<h4 className="font-headline-lg-mobile text-headline-lg-mobile font-bold mb-2">Security</h4>
<p className="font-body-md text-sm text-on-surface-variant">Community policing &amp; emergency response.</p>
</div>
</section>
{/*  Invest Abia Carousel (Latest Opportunities)  */}
<section className="md:col-span-12">
<div className="flex items-center justify-between mb-6">
<h3 className="font-label-caps text-label-caps text-on-surface-variant">INVEST ABIA: LATEST OPPORTUNITIES</h3>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
<div className="min-w-[300px] bg-white border border-outline-variant rounded-xl overflow-hidden group">
<div className="h-40 bg-surface-container-high relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A high-altitude drone view of a modern industrial park under construction in a lush tropical African landscape. The scene features large warehouse structures with silver roofs, paved roads, and clear architectural planning. Sunlight reflects off glass windows, projecting a sense of economic progress and industrialization within the Abia State design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpMNkJKXCibgCp2usmmiejkWUJvg7rGq4mYEL-Yu_tE2jABGkwU7DbX46oYJxj5W5lIXJOX2LWRcNOvIiDke6GtN2mWhJhtTy9OU4JJ9_kDOOxMNy5VPfatEXHu8hr5Bv864m6RVjKa2qlouHdmgn-RKPIIo4h1zQ21ImL1BjtlqAD7TjZuiOERMmhesvO19oCK168l_gByYTpyjUpiiKRb0s4OGKRm3cmuv5GSwcNvypp8QrcpGQGL6MraPppz4Ex3L9OoHvsrj8" />
<span className="absolute top-4 left-4 bg-emerald-vibrant text-white text-[10px] font-label-caps px-2 py-1 rounded">MANUFACTURING</span>
</div>
<div className="p-6">
<h5 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep mb-2">Aba Textile Hub Phase 2</h5>
<p className="text-sm text-on-surface-variant mb-4">Investment opportunity in modern garment production facilities.</p>
<div className="flex items-center justify-between">
<span className="font-label-sm text-brass-accent">EST. ROI: 12%</span>
<span className="material-symbols-outlined text-on-surface-variant">open_in_new</span>
</div>
</div>
</div>
<div className="min-w-[300px] bg-white border border-outline-variant rounded-xl overflow-hidden group">
<div className="h-40 bg-surface-container-high relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A macro shot of digital data visualizations on a sleek, high-resolution monitor. Bright blue and gold charts and graphs illustrate economic growth and market trends. The lighting is low and cinematic, emphasizing the professional, data-driven nature of the Abia One State Operating System and its focus on transparent governance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_ru-I8D-ulH-TCv05rLg2oLqLRdor6QIFO9nApsmmWVJOhTeWvmMoa1V-KNo6B7dE2pcle1qTmNbJ-OFjT2K8aMnfYG1Hps96YlgFkK_FZeO7qSavYxMTRpIUXIzujbLvaq12kMke6z8hGY42dwkqs8327v8Z-sIBOl1zY_4sIjCFE-u_VYkQP5E1mWVbaw_dvFEFb9DWGUF3TgaroSfJJDurBvcIxF6-p5l6iho_FtiG6bHdOjNinS16fuhOaqNMC4ML2MIP2qo" />
<span className="absolute top-4 left-4 bg-status-economic text-white text-[10px] font-label-caps px-2 py-1 rounded">TECHNOLOGY</span>
</div>
<div className="p-6">
<h5 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep mb-2">Umuahia Tech Innovation Lab</h5>
<p className="text-sm text-on-surface-variant mb-4">Funding call for the regional AI and software development incubator.</p>
<div className="flex items-center justify-between">
<span className="font-label-sm text-brass-accent">EST. ROI: 18%</span>
<span className="material-symbols-outlined text-on-surface-variant">open_in_new</span>
</div>
</div>
</div>
<div className="min-w-[300px] bg-white border border-outline-variant rounded-xl overflow-hidden group">
<div className="h-40 bg-surface-container-high relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A wide panoramic shot of fertile agricultural farmlands in Nigeria under a golden sunset. Vibrant green crops are arranged in neat rows stretching toward the horizon, where tropical trees stand tall. The lighting is warm and inspiring, capturing the essence of sustainable agriculture and food security, a core pillar of the Abia 2035 state vision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3O_7UoItnP2ihDFlEDU_cz5N5PhnUGQ0kD6p5He05xD8kKZBAWYJN7oi0Mb6yqOesd03Gqa0fJ85rM5PmxLNbokm1IwC6icfHVrxUeuNd3PVxsmaazO0lADKvTbm_jfweuSJWe0xtVbA-tM3ErwdbvYHfklSy6MaQ3Bs0qQyoYtKoCCPFAZg5hfWlqvizEXFTo7bNILHmCO87GhShlolO9ENY5zCkTeiUgkHfogqVvmVLJ9dt-oSdaYoNiJrAhKnksI-zH_tbNuo" />
<span className="absolute top-4 left-4 bg-forest-deep text-white text-[10px] font-label-caps px-2 py-1 rounded">AGRI-TECH</span>
</div>
<div className="p-6">
<h5 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep mb-2">Sustainable Palm Oil Estates</h5>
<p className="text-sm text-on-surface-variant mb-4">Modernizing traditional palm oil processing for global export.</p>
<div className="flex items-center justify-between">
<span className="font-label-sm text-brass-accent">EST. ROI: 15%</span>
<span className="material-symbols-outlined text-on-surface-variant">open_in_new</span>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</main>
{/*  Footer (Shared Component)  */}
<footer className="lg:pl-64 w-full px-5 md:px-16 bg-surface-container-highest mt-auto border-t border-outline-variant py-12">
<div className="max-w-[1280px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
<div className="space-y-4">
<span className="font-headline-lg text-headline-lg text-forest-deep font-bold">ABIA ONE</span>
<p className="font-body-md text-body-md text-on-surface-variant">The unified digital interface for governance, commerce, and security in Abia State. Built for the citizens, by the future.</p>
</div>
<div className="grid grid-cols-2 gap-4">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-all" href="#">Invest Abia</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-all" href="#">Serve Abia</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-all" href="#">Build Abia</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-all" href="#">Open Abia</a>
</div>
<div className="flex flex-col items-start md:items-end gap-4">
<span className="font-label-caps text-label-caps text-on-surface-variant">CITIZEN ASSISTANCE</span>
<button className="px-6 py-2 bg-brass-accent text-white rounded-lg font-label-caps text-label-caps hover:opacity-90">Contact Us</button>
<div className="flex gap-4 mt-2">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">public</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">share</span>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline-variant gap-4">
<p className="font-body-md text-sm text-on-surface-variant">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-6">
<a className="font-label-caps text-[10px] text-on-surface-variant hover:text-primary" href="#">Privacy Policy</a>
<a className="font-label-caps text-[10px] text-on-surface-variant hover:text-primary" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


      </div>
    </>
  );
}
