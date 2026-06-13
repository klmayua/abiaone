"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(12px);\n            border: 1px solid #E2E8F0;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .brass-accent-line {\n            height: 2px;\n            width: 40px;\n            background-color: #D4AF37;\n            margin-bottom: 8px;\n        }" 
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
        }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md min-h-screen flex flex-col">
        
{/*  TopNavBar Implementation  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 dark:bg-forest-deep/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-4">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep dark:text-primary-fixed"><img src="/Logos/Abia_One_No_Background.png" alt="ABIA ONE" className="h-20 w-auto" /></span>
<nav className="hidden md:flex gap-8 ml-12">
<a className="font-label-caps text-label-caps text-primary border-b-2 border-brass-accent pb-1" href="/economic-transformation">Economy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/serve-abia">Digital Gov</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/local-governance">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/secure-abia">Security</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block px-4 py-2 border border-brass-gold text-secondary font-medium rounded-lg hover:bg-secondary-container/20 transition-all">Emergency</button>
<button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all">Citizen Portal</button>
</div>
</header>
<div className="flex flex-1 pt-16">
{/*  SideNavBar Implementation  */}
<aside className="hidden lg:flex flex-col h-[calc(100vh-64px)] w-64 fixed left-0 top-16 bg-surface-container-low border-r border-outline-variant overflow-y-auto">
<div className="p-6">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary" data-icon="account_balance">account_balance</span>
</div>
<div>
<div className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep">ABIA ONE</div>
<div className="font-label-sm text-[10px] uppercase tracking-wider text-outline">Modern Governance OS</div>
</div>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 p-3 bg-secondary-container text-on-secondary-container rounded-lg mx-0 translate-x-1 duration-150" href="/economic-transformation">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-md text-label-md">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="/serve-abia">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
<span className="font-label-md text-label-md">Digital Government</span>
</a>
<a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="/local-governance">
<span className="material-symbols-outlined" data-icon="vptree">mitre</span>
<span className="font-label-md text-label-md">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 p-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="/secure-abia">
<span className="material-symbols-outlined" data-icon="security" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>security</span>
<span className="font-label-md text-label-md">Public Trust</span>
</a>
</nav>
</div>
<div className="mt-auto p-6 border-t border-outline-variant space-y-4">
<button className="w-full py-3 px-4 bg-primary text-on-primary font-bold rounded-lg text-sm">Citizen Feedback</button>
<div className="space-y-1">
<a className="flex items-center gap-3 p-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</a>
<a className="flex items-center gap-3 p-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="font-label-sm text-label-sm">Support</span>
</a>
</div>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 lg:ml-64 p-margin-mobile md:p-margin-desktop">
<header className="mb-12">
<div className="flex items-center gap-2 mb-2">
<span className="text-brass-gold font-bold">●</span>
<span className="font-label-md text-label-md uppercase text-outline">Agriculture &amp; Agribusiness</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary mb-4">Umuahia Agribusiness Hub</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">Strategic oversight of Abia State's agricultural transformation, focusing on the high-yield value chains of Palm Oil and Cassava through digital supply-chain tracking.</p>
</header>
{/*  Dashboard Stats Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-12">
<div className="glass-card p-6 rounded-xl">
<span className="material-symbols-outlined text-primary mb-4" data-icon="agriculture">agriculture</span>
<div className="text-on-surface-variant font-label-md text-label-md uppercase mb-1">Smallholders Supported</div>
<div className="font-headline-lg text-headline-lg text-primary">12,482</div>
<div className="flex items-center gap-1 text-green-600 mt-2">
<span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
<span className="font-caption text-caption">+14% vs LY</span>
</div>
</div>
<div className="glass-card p-6 rounded-xl">
<span className="material-symbols-outlined text-secondary mb-4" data-icon="oil_barrel">oil_barrel</span>
<div className="text-on-surface-variant font-label-md text-label-md uppercase mb-1">Palm Oil Output</div>
<div className="font-headline-lg text-headline-lg text-secondary">84.2k <span className="text-sm font-normal">Tons</span></div>
<div className="flex items-center gap-1 text-green-600 mt-2">
<span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
<span className="font-caption text-caption">+8.2%</span>
</div>
</div>
<div className="glass-card p-6 rounded-xl">
<span className="material-symbols-outlined text-tertiary mb-4" data-icon="token">token</span>
<div className="text-on-surface-variant font-label-md text-label-md uppercase mb-1">Cassava Value Chain</div>
<div className="font-headline-lg text-headline-lg text-tertiary">₦1.2B</div>
<div className="flex items-center gap-1 text-on-surface-variant mt-2">
<span className="material-symbols-outlined text-sm" data-icon="sync">sync</span>
<span className="font-caption text-caption">Active Processing</span>
</div>
</div>
<div className="glass-card p-6 rounded-xl">
<span className="material-symbols-outlined text-primary mb-4" data-icon="public">public</span>
<div className="text-on-surface-variant font-label-md text-label-md uppercase mb-1">'Abia Grown' Exports</div>
<div className="font-headline-lg text-headline-lg text-forest-green">$12.4M</div>
<div className="flex items-center gap-1 text-green-600 mt-2">
<span className="material-symbols-outlined text-sm" data-icon="expand_less">expand_less</span>
<span className="font-caption text-caption">New Market Access</span>
</div>
</div>
</div>
{/*  Bento Grid Main Content  */}
<div className="bento-grid">
{/*  Map Section  */}
<div className="col-span-12 lg:col-span-8 glass-card rounded-xl overflow-hidden min-h-[500px] flex flex-col">
<div className="p-6 border-b border-outline-variant flex justify-between items-center">
<div>
<div className="brass-accent-line"></div>
<h3 className="font-headline-md text-headline-md text-primary">State Agricultural Clusters</h3>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase">Live Sat-Data</span>
</div>
</div>
<div className="flex-1 relative bg-surface-container overflow-hidden">
<img alt="Abia State Map" className="w-full h-full object-cover opacity-80" data-alt="A sophisticated, high-resolution satellite-style topographic map of Abia State, Nigeria, featuring glowing interactive nodes for agricultural clusters in Umuahia, Aba, and Bende. The map utilizes a professional dashboard aesthetic with deep forest green and golden-yellow markers to represent different crop value chains. Overlaid are thin, glowing digital lines connecting rural production hubs to central processing units, all rendered with a modern, high-contrast light-mode technical interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjHkPVEQTua3OYbHiv0qSISwNlYTHz70jcZn-xoFGNFUPVqXmCYFmGZbsbYu3MmtrILpk5a3VwJDACAzkMIe7GkIU7Rx2XpVL658JN-h65Zp-vafdPyLwBaWXMBsNXEKKlm0VTty6Y9e4mTj7QZvnrAh9zSPz1ir8x3CKVCCesti1K5nDuAKf3LXRMAlHhEgd95MKMrhNZAc4tI1ClUrpXKPK9gr_9nRcJOp3dz0BkPs7juSqDEgjb5mMqhdMQEJ_yN_24TCDpym0" />
<div className="absolute bottom-6 left-6 space-y-2">
<div className="flex items-center gap-2 bg-white/90 p-2 rounded shadow-sm">
<span className="w-3 h-3 rounded-full bg-forest-green"></span>
<span className="font-caption text-caption">Umuahia Agribusiness Hub</span>
</div>
<div className="flex items-center gap-2 bg-white/90 p-2 rounded shadow-sm">
<span className="w-3 h-3 rounded-full bg-brass-gold"></span>
<span className="font-caption text-caption">Cassava Processing Zone</span>
</div>
</div>
</div>
</div>
{/*  Export Tracking  */}
<div className="col-span-12 lg:col-span-4 glass-card p-6 rounded-xl flex flex-col">
<div className="brass-accent-line"></div>
<h3 className="font-headline-md text-headline-md text-primary mb-6">'Abia Grown' Export Flow</h3>
<div className="space-y-6 flex-1">
<div className="space-y-2">
<div className="flex justify-between items-center text-sm font-medium">
<span>Refined Palm Oil</span>
<span className="text-primary">42%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-primary h-2 rounded-full" style={{"width":"42%"}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center text-sm font-medium">
<span>Industrial Starch</span>
<span className="text-primary">28%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-primary h-2 rounded-full" style={{"width":"28%"}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center text-sm font-medium">
<span>Cassava Flour (HQCF)</span>
<span className="text-primary">15%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-primary h-2 rounded-full" style={{"width":"15%"}}></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center text-sm font-medium">
<span>Kernel Cakes</span>
<span className="text-primary">10%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-primary h-2 rounded-full" style={{"width":"10%"}}></div>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-outline-variant">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md">Total Monthly Revenue</span>
<span className="font-headline-md text-headline-md text-forest-green">₦418M</span>
</div>
<button className="w-full mt-4 py-3 border border-brass-gold text-secondary font-bold rounded-lg hover:bg-secondary-container transition-all">View Export Ledgers</button>
</div>
</div>
{/*  Palm Oil Tracking Card  */}
<div className="col-span-12 md:col-span-6 glass-card p-6 rounded-xl">
<div className="flex items-start justify-between mb-8">
<div>
<div className="brass-accent-line"></div>
<h3 className="font-headline-md text-headline-md text-primary">Palm Oil Supply Chain</h3>
<p className="text-on-surface-variant font-caption text-caption mt-1">Direct from Umuahia Mill Clusters</p>
</div>
<span className="material-symbols-outlined text-brass-gold text-4xl" data-icon="waves">waves</span>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-surface-container-low rounded-lg">
<div className="text-[10px] uppercase font-bold text-outline">Harvested FFB</div>
<div className="text-xl font-bold text-primary">14.2k Tons</div>
</div>
<div className="p-4 bg-surface-container-low rounded-lg">
<div className="text-[10px] uppercase font-bold text-outline">Extraction Rate</div>
<div className="text-xl font-bold text-primary">19.4%</div>
</div>
</div>
<div className="mt-6">
<img alt="Palm Oil Processing" className="w-full h-40 object-cover rounded-lg mb-4" data-alt="A clean, industrial-grade palm oil processing facility in Nigeria, showcasing stainless steel machinery and organized workers in safety gear. The lighting is bright and professional, highlighting a modern factory environment that emphasizes cleanliness and efficiency. The color palette features metallic silvers, deep rich palm oil reds, and forest green accents, reflecting a high-tech approach to traditional agriculture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQYrppT6HRALB_gUQn5tBanwe89tjMb4l1rdPQjlBPOti7PHjkIJ7WicC1UO5Ec0zlpPiWHmlzkNkPn5LxK8-43eA8CwFckwco9iUq901sb6M6ixspkbPOnl1rDw7oFEA_2eaxCGlzpLI6Yljxm9TMmbIct9sdYcYRA-iO-kWkaqidItgI6cpctYp7y1tDB71Gbppk-BZiyLax4B-zWQKsijgbPSTYIyOhKMDbfssA7mtcwk7RnxinE2KTxw1HIrddHj5xh_JqEXY" />
<div className="flex justify-between items-center">
<span className="text-sm font-medium">Umuahia North Mill Complex</span>
<span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded">OPERATIONAL</span>
</div>
</div>
</div>
{/*  Smallholder Farmer Support  */}
<div className="col-span-12 md:col-span-6 glass-card p-6 rounded-xl flex flex-col">
<div className="flex items-start justify-between mb-8">
<div>
<div className="brass-accent-line"></div>
<h3 className="font-headline-md text-headline-md text-primary">Farmer Support Hub</h3>
<p className="text-on-surface-variant font-caption text-caption mt-1">State Seed &amp; Fertilizer Distribution</p>
</div>
<span className="material-symbols-outlined text-primary text-4xl" data-icon="diversity_3">diversity_3</span>
</div>
<div className="space-y-4 mb-6">
<div className="flex items-center gap-4 p-3 border border-outline-variant rounded-lg">
<span className="material-symbols-outlined bg-primary/10 p-2 rounded text-primary" data-icon="inventory_2">inventory_2</span>
<div className="flex-1">
<div className="text-xs font-bold uppercase text-outline">Input Distribution</div>
<div className="text-sm font-medium">850 Tons Fertilizer Dispatched</div>
</div>
<span className="text-xs font-bold text-primary">82%</span>
</div>
<div className="flex items-center gap-4 p-3 border border-outline-variant rounded-lg">
<span className="material-symbols-outlined bg-secondary/10 p-2 rounded text-secondary" data-icon="account_balance_wallet">account_balance_wallet</span>
<div className="flex-1">
<div className="text-xs font-bold uppercase text-outline">Micro-Credit Fund</div>
<div className="text-sm font-medium">₦145M Disbursed to 1.2k Farmers</div>
</div>
<span className="material-symbols-outlined text-green-600" data-icon="check_circle">check_circle</span>
</div>
</div>
<div className="bg-forest-green text-white p-4 rounded-lg mt-auto">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined" data-icon="campaign">campaign</span>
<span className="font-bold">Recent Announcement</span>
</div>
<p className="text-sm leading-relaxed opacity-90">Dry season cassava stems are now available for pickup at the Umuahia Central Depot. Register via USSD *712*4#.</p>
</div>
</div>
</div>
</main>
</div>
{/*  Footer Implementation  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto py-12 border-t border-outline-variant">
<div className="max-w-container-max-width mx-auto">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
<div className="max-w-sm">
<div className="font-headline-lg text-headline-lg text-forest-deep mb-4 font-bold">ABIA ONE</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Securing the future of Abia through sovereign digital infrastructure and economic industrialization.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-xl" data-icon="language">language</span>
</a>
<a className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
<span className="material-symbols-outlined text-xl" data-icon="share">share</span>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<div className="font-label-caps text-label-caps text-primary font-bold mb-4">Invest Abia</div>
<ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
<li><a className="hover:text-brass-accent underline-offset-4 hover:underline" href="/ministry-of-agriculture">Agriculture</a></li>
<li><a className="hover:text-brass-accent underline-offset-4 hover:underline" href="#">Industry</a></li>
<li><a className="hover:text-brass-accent underline-offset-4 hover:underline" href="#">Tech Parks</a></li>
</ul>
</div>
<div>
<div className="font-label-caps text-label-caps text-primary font-bold mb-4">Serve Abia</div>
<ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
<li><a className="hover:text-brass-accent underline-offset-4 hover:underline" href="/education-learning">Education</a></li>
<li><a className="hover:text-brass-accent underline-offset-4 hover:underline" href="/ministry-of-health">Health</a></li>
<li><a className="hover:text-brass-accent underline-offset-4 hover:underline" href="#">Welfare</a></li>
</ul>
</div>
<div>
<div className="font-label-caps text-label-caps text-primary font-bold mb-4">Open Abia</div>
<ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
<li><a className="hover:text-brass-accent underline-offset-4 hover:underline" href="#">Data Portal</a></li>
<li><a className="hover:text-brass-accent underline-offset-4 hover:underline" href="/open-abia">Budget</a></li>
<li><a className="hover:text-brass-accent underline-offset-4 hover:underline" href="#">Laws</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-body-md text-body-md text-on-surface-variant">© 2024 Government of Abia State, Nigeria. Built for the Future.</div>
<div className="flex gap-6 font-label-caps text-label-caps text-on-surface-variant">
<a className="hover:text-primary" href="#">Privacy Policy</a>
<a className="hover:text-primary" href="#">Contact Us</a>
</div>
</div>
</div>
</footer>


      </div>
    </>
  );
}
