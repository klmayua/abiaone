export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(191, 201, 193, 0.4);\n        }\n        .map-container {\n            background-image: radial-gradient(circle at 2px 2px, #bfc9c1 1px, transparent 0);\n            background-size: 24px 24px;\n        }\n        ::-webkit-scrollbar {\n            width: 6px;\n        }\n        ::-webkit-scrollbar-track {\n            background: #f2f4f0;\n        }\n        ::-webkit-scrollbar-thumb {\n            background: #707972;\n            border-radius: 10px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  Emergency Banner  */}
<div className="w-full bg-forest-deep text-white py-2 px-margin-mobile md:px-margin-desktop flex justify-center items-center gap-4 z-[100]">
<span className="material-symbols-outlined text-brass-accent" data-icon="campaign">campaign</span>
<p className="font-label-caps text-label-caps tracking-widest uppercase">Live Accountability Data Stream: FY2024 Q3 Audit Report Released</p>
</div>
{/*  TopNavBar Shell  */}
<nav className="fixed top-10 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width left-1/2 -translate-x-1/2 bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-4">
<img alt="Abia State Crest" className="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE3izPFfjpNfTlj3-6YrzlOE1H5OkjTDxWXEMONKK-L6RPS5sdFG4O0bHPM7wi9grvsfsf4Drgqi-lkOjPcJBXFac8iT4SeN7qpAiii4yoWx7-cQ1L3926ZtwJqmwYiKfwW-Al6vzGD2Op3Ej_ULlNKcKOusEFQsxtCzOt_uvXb5Mj6UgS2CGxGYgBXaS4EfONBJCtsRGk9VyE-XKaRWc6zLl3VIJzDjLI1XGbSwEHGKRsKpuMUg8x1lvGgMPZmevuz2XQutnR8rI" />
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep">ABIA ONE</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Economy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Digital Gov</a>
<a className="font-label-caps text-label-caps text-primary border-b-2 border-brass-accent pb-1" href="#">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Security</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden lg:flex items-center gap-2 px-6 py-2 bg-primary text-white font-label-caps text-label-caps rounded transition-all active:scale-95 active:opacity-80">
                Citizen Portal
            </button>
<button className="material-symbols-outlined p-2 text-on-surface-variant hover:bg-surface-variant rounded-full" data-icon="search">search</button>
</div>
</nav>
<main className="pt-32 pb-20">
{/*  Hero Section  */}
<section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop mb-16">
<div className="flex flex-col md:flex-row justify-between items-end gap-8">
<div className="max-w-2xl">
<h1 className="font-headline-xl text-headline-xl text-forest-deep mb-4 leading-tight">Transparency &amp; <br /><span className="text-brass-accent">State Transformation</span></h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">The Open Abia portal provides real-time access to budget performance, procurement cycles, and infrastructure progress. We are building trust through radical transparency.</p>
</div>
<div className="flex gap-4 mb-2">
<div className="bg-surface-container p-6 rounded-lg text-center min-w-[140px]">
<span className="block font-headline-lg text-headline-lg text-primary">₦42.8B</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Capital Budget</span>
</div>
<div className="bg-surface-container p-6 rounded-lg text-center min-w-[140px]">
<span className="block font-headline-lg text-headline-lg text-emerald-vibrant">86%</span>
<span className="font-label-caps text-label-caps text-on-surface-variant">Project Health</span>
</div>
</div>
</div>
</section>
{/*  Build Abia: Interactive Project Map & Bento Grid  */}
<section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop mb-24">
<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-1 bg-brass-accent"></div>
<h2 className="font-headline-lg text-headline-lg text-forest-deep uppercase tracking-tighter">Build Abia</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
{/*  Map Anchor  */}
<div className="lg:col-span-8 h-[600px] rounded-xl overflow-hidden glass-card relative group shadow-sm border border-outline-variant">
<div className="absolute inset-0 map-container opacity-40"></div>
{/*  Mock Map Markers  */}
<div className="absolute top-1/4 left-1/3 p-4 bg-white shadow-xl rounded-lg border border-primary/20 animate-pulse cursor-pointer">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-emerald-vibrant"></div>
<span className="font-label-caps text-[10px] text-forest-deep">Aba Smart Road Ph1</span>
</div>
</div>
<div className="absolute bottom-1/3 right-1/4 p-4 bg-white shadow-xl rounded-lg border border-primary/20 cursor-pointer">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-brass-accent"></div>
<span className="font-label-caps text-[10px] text-forest-deep">Umuahia Terminal</span>
</div>
</div>
<div className="absolute bottom-6 left-6 p-6 bg-forest-deep/90 text-white rounded-lg backdrop-blur-md max-w-xs">
<h4 className="font-label-caps text-label-caps text-brass-accent mb-2">Live Status</h4>
<p className="font-body-md text-[14px]">Currently tracking <span className="font-bold text-primary-fixed">142</span> active infrastructure projects across 17 LGAs.</p>
<button className="mt-4 text-primary-fixed-dim font-label-caps text-[11px] underline">Open Fullscreen Map</button>
</div>
</div>
{/*  Side Content (Infrastructure Progress)  */}
<div className="lg:col-span-4 flex flex-col gap-gutter-desktop">
<div className="flex-1 bg-surface-container-low p-6 rounded-xl border border-outline-variant">
<h3 className="font-label-caps text-label-caps mb-4 text-forest-deep">Project Showcase: Before &amp; After</h3>
<div className="space-y-4">
<div className="relative rounded-lg overflow-hidden h-40 group">
<img className="w-full h-full object-cover" data-alt="A side-by-side high-quality comparison of a dusty rural road before construction and a smooth newly paved asphalt highway with proper drainage and streetlights in Abia State. The lighting is crisp and daylight-focused, emphasizing the industrial progress and clean infrastructure. The overall aesthetic is professional, architectural, and highlights the transformation from neglect to modernization using the primary forest green and sand tones of the brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGfaXBL_KGf1mzL7uIMWSxI1w4Iu9VrBBtOBaxkGviewJfLXb1twi5VihbTRkM_7kKn_y983y9SIwktGple5xQcNj1pH-gy__p6amGptvHFkATXLUQ-if7EBZpTrFV61Q1j1CUfaPybyYdKzxqXMX498gP1p-9qtujp4Lvt1c0MhQeSYpSQs09pg9kpub2qx_IaJeU3FqTAnMZXK6jSwFSoVBw0yYm9znW0s21-adqNQvTMEJgwyQ405plPl_a3hvioDmEvympLno" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
<span className="text-white font-label-caps text-[10px]">Port Harcourt Road, Aba</span>
</div>
<div className="absolute top-2 right-2 px-2 py-1 bg-emerald-vibrant text-white text-[10px] font-label-caps">COMPLETED</div>
</div>
<div className="relative rounded-lg overflow-hidden h-40 group">
<img className="w-full h-full object-cover" data-alt="A dramatic architectural photo of a modern transport terminal under construction in Nigeria. High-contrast lighting captures the geometric steel structures against a clear blue sky. The scene is clean, organized, and emphasizes structural integrity. The visual style is minimalist and industrial, reflecting the OS-like governance model of ABIA ONE with a focus on stability and forward-looking leadership." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSbXwtcPd-enMQABgzhbW76LMB36nP8IICwMPu6pA2nu9gVJo_9up-eSPduDp2wxOnjPxmWvy4p2Aki4zpWv8d048en0dHJ_56ki70gSC_wzZzy9jaHH3ECqTx4urRIlFJmWfTeyRh5W2dESdaWRXUbSn51ywOYFTSWbwuCjnvGDp2c5mKHehmn8Snoi7WIEGqQMHhT1Lumh0qstOHyrt12xPcisZgGXp4N4gCIL1wPqyOgKVJ1GoCC0AUFymUzWopWa1wkeKOFXI" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
<span className="text-white font-label-caps text-[10px]">Central Terminal, Umuahia</span>
</div>
<div className="absolute top-2 right-2 px-2 py-1 bg-brass-accent text-white text-[10px] font-label-caps">60% PROGRESS</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Open Abia: Procurement & Budget Portal  */}
<section className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-8 h-1 bg-brass-accent"></div>
<h2 className="font-headline-lg text-headline-lg text-forest-deep uppercase tracking-tighter">Open Abia</h2>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 bg-surface-container-highest font-label-caps text-label-caps rounded hover:bg-outline-variant transition-colors">Export CSV</button>
<button className="px-4 py-2 bg-primary text-white font-label-caps text-label-caps rounded shadow-md">Portal Login</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-desktop mb-12">
{/*  Data Card 1: Procurement  */}
<div className="bg-white p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col">
<div className="flex items-center gap-4 mb-6">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="contract">contract</span>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile text-forest-deep">Procurement</h3>
</div>
<p className="font-body-md text-on-surface-variant mb-6">View all active tenders, bidding documents, and pre-qualification requirements for state contractors.</p>
<div className="mt-auto space-y-3">
<div className="flex justify-between py-2 border-b border-surface-variant">
<span className="font-label-sm text-label-sm">Active Tenders</span>
<span className="font-bold">24</span>
</div>
<div className="flex justify-between py-2 border-b border-surface-variant">
<span className="font-label-sm text-label-sm">Bids Under Review</span>
<span className="font-bold">118</span>
</div>
</div>
</div>
{/*  Data Card 2: Budget  */}
<div className="bg-white p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col">
<div className="flex items-center gap-4 mb-6">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="account_balance_wallet">account_balance_wallet</span>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile text-forest-deep">Budget Info</h3>
</div>
<p className="font-body-md text-on-surface-variant mb-6">Access the citizen's budget, state appropriation bills, and quarterly budget performance reports.</p>
<div className="mt-auto">
<div className="w-full bg-surface-variant h-2 rounded-full mb-2 overflow-hidden">
<div className="bg-emerald-vibrant h-full w-[72%]"></div>
</div>
<span className="font-label-sm text-label-sm">Budget Execution: 72% for Q3</span>
</div>
</div>
{/*  Data Card 3: Registry  */}
<div className="bg-white p-8 rounded-xl border border-outline-variant shadow-sm flex flex-col">
<div className="flex items-center gap-4 mb-6">
<span className="material-symbols-outlined text-primary text-3xl" data-icon="verified">verified</span>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile text-forest-deep">Contracts</h3>
</div>
<p className="font-body-md text-on-surface-variant mb-6">Verified register of all awarded contracts, including contractor names, amounts, and expected completion dates.</p>
<button className="mt-auto w-full py-3 border border-primary text-primary font-label-caps text-label-caps rounded hover:bg-primary hover:text-white transition-all">Search Registry</button>
</div>
</div>
{/*  Tabular View: Recent Awards  */}
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
<h3 className="font-label-caps text-label-caps text-forest-deep">Recent Contract Awards</h3>
<div className="flex items-center gap-2">
<input className="text-label-sm font-label-sm border border-outline-variant rounded px-3 py-1 bg-surface ring-0 focus:ring-0 focus:border-brass-accent" placeholder="Filter by sector..." type="text" />
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-high border-b border-outline-variant">
<th className="px-6 py-4 font-label-caps text-label-sm text-on-surface-variant">Contract Reference</th>
<th className="px-6 py-4 font-label-caps text-label-sm text-on-surface-variant">Contractor</th>
<th className="px-6 py-4 font-label-caps text-label-sm text-on-surface-variant">Sector</th>
<th className="px-6 py-4 font-label-caps text-label-sm text-on-surface-variant">Amount (₦)</th>
<th className="px-6 py-4 font-label-caps text-label-sm text-on-surface-variant">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-variant">
<tr className="hover:bg-sand-neutral transition-colors">
<td className="px-6 py-4 font-body-md text-sm">AB/WORKS/2024/089</td>
<td className="px-6 py-4 font-body-md text-sm">CGC Nigeria Limited</td>
<td className="px-6 py-4">
<span className="px-2 py-1 bg-blue-100 text-status-economic text-[10px] font-label-caps rounded">Infrastructure</span>
</td>
<td className="px-6 py-4 font-mono text-sm font-bold">12,450,000,000</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-vibrant"></div>
<span className="text-sm">Active</span>
</div>
</td>
</tr>
<tr className="hover:bg-sand-neutral transition-colors">
<td className="px-6 py-4 font-body-md text-sm">AB/DIGI/2024/012</td>
<td className="px-6 py-4 font-body-md text-sm">SoftTech Solutions</td>
<td className="px-6 py-4">
<span className="px-2 py-1 bg-emerald-50 text-emerald-vibrant text-[10px] font-label-caps rounded">Digital</span>
</td>
<td className="px-6 py-4 font-mono text-sm font-bold">450,200,000</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brass-accent"></div>
<span className="text-sm">Mobilizing</span>
</div>
</td>
</tr>
<tr className="hover:bg-sand-neutral transition-colors">
<td className="px-6 py-4 font-body-md text-sm">AB/EDU/2024/201</td>
<td className="px-6 py-4 font-body-md text-sm">Abia Builders Ltd</td>
<td className="px-6 py-4">
<span className="px-2 py-1 bg-orange-50 text-tertiary text-[10px] font-label-caps rounded">Education</span>
</td>
<td className="px-6 py-4 font-mono text-sm font-bold">89,000,000</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-vibrant"></div>
<span className="text-sm">Active</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</main>
{/*  Side Navigation Shell (Hidden on Mobile)  */}
<aside className="hidden lg:flex flex-col h-full border-r border-outline-variant fixed left-0 top-0 w-64 bg-surface-container-low pt-24 pb-8 z-40">
<div className="px-6 mb-8">
<h4 className="font-label-caps text-label-caps text-on-surface-variant mb-4">TRANSFORMATION LAYERS</h4>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all mx-2" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-sm text-label-sm">Economic</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-lg transition-all mx-2 translate-x-1" href="#">
<span className="material-symbols-outlined" data-icon="vptree">mitre</span>
<span className="font-label-sm text-label-sm">Governance</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all mx-2" href="#">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
<span className="font-label-sm text-label-sm">Digital Gov</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all mx-2" href="#">
<span className="material-symbols-outlined" data-icon="security">security</span>
<span className="font-label-sm text-label-sm">Public Trust</span>
</a>
</nav>
</div>
<div className="mt-auto px-6 border-t border-outline-variant pt-6">
<button className="w-full py-2 bg-brass-accent text-white font-label-caps text-label-caps rounded flex items-center justify-center gap-2 mb-4">
<span className="material-symbols-outlined text-sm" data-icon="chat">chat</span>
                Citizen Feedback
            </button>
<div className="flex gap-4 px-2">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer" data-icon="settings">settings</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer" data-icon="help">help</span>
</div>
</div>
</aside>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest py-16 mt-20 border-t border-outline-variant">
<div className="max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-sm">
<div className="flex items-center gap-3 mb-6">
<img alt="Abia State Crest" className="h-8 w-auto grayscale opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE3izPFfjpNfTlj3-6YrzlOE1H5OkjTDxWXEMONKK-L6RPS5sdFG4O0bHPM7wi9grvsfsf4Drgqi-lkOjPcJBXFac8iT4SeN7qpAiii4yoWx7-cQ1L3926ZtwJqmwYiKfwW-Al6vzGD2Op3Ej_ULlNKcKOusEFQsxtCzOt_uvXb5Mj6UgS2CGxGYgBXaS4EfONBJCtsRGk9VyE-XKaRWc6zLl3VIJzDjLI1XGbSwEHGKRsKpuMUg8x1lvGgMPZmevuz2XQutnR8rI" />
<span className="font-headline-lg text-headline-lg text-forest-deep">ABIA ONE</span>
</div>
<p className="font-body-md text-on-surface-variant mb-6">Building a sustainable, transparent, and digitally-powered economy for all citizens of Abia State.</p>
<p className="font-label-caps text-label-caps text-on-surface-variant opacity-60">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<h5 className="font-label-caps text-label-caps text-forest-bold mb-6">Ecosystem</h5>
<ul className="space-y-4">
<li><a className="font-body-md text-sm text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-all" href="#">Invest Abia</a></li>
<li><a className="font-body-md text-sm text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-all" href="#">Serve Abia</a></li>
<li><a className="font-body-md text-sm text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-all" href="#">Build Abia</a></li>
</ul>
</div>
<div>
<h5 className="font-label-caps text-label-caps text-forest-bold mb-6">Governance</h5>
<ul className="space-y-4">
<li><a className="font-body-md text-sm text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-all" href="#">Open Abia</a></li>
<li><a className="font-body-md text-sm text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-all" href="#">Privacy Policy</a></li>
<li><a className="font-body-md text-sm text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-all" href="#">Contact Us</a></li>
</ul>
</div>
</div>
</div>
</footer>


      </div>
    </>
  );
}
