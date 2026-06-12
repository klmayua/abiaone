export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        vertical-align: middle;\n      }\n      .custom-scrollbar::-webkit-scrollbar { width: 6px; }\n      .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }\n      .custom-scrollbar::-webkit-scrollbar-thumb { background: #bec9be; border-radius: 10px; }\n      .brass-accent { border-left: 4px solid #D4AF37; }\n      .glass-effect { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(8px); }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
        
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-background border-b border-outline-variant h-20">
<div className="flex justify-between items-center px-margin-desktop h-full max-w-max-width mx-auto">
<div className="font-display-lg text-display-lg font-bold text-primary">ABIA ONE</div>
<div className="hidden md:flex gap-8">
<a className="text-primary border-b-2 border-brass-gold font-semibold pb-1 cursor-pointer transition-all duration-200" href="#">Economy</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Digital Gov</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Governance</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Security</a>
</div>
<button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-medium hover:opacity-90 active:opacity-80 transition-all">Citizen Portal</button>
</div>
</nav>
{/*  SideNavBar  */}
<aside className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 bg-surface-container-low border-r border-outline-variant hidden md:flex flex-col py-6">
<div className="px-6 mb-8">
<h2 className="font-headline-md text-headline-md font-bold text-primary">Navigation</h2>
<p className="font-caption text-caption text-on-surface-variant opacity-70">State Operating System</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-4 text-forest-green font-bold border-l-4 border-brass-gold bg-surface-container-high px-6 py-3 transition-all duration-200" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-body-md">Economic Transformation</span>
</a>
<a className="flex items-center gap-4 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-all duration-200" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-body-md">Digital Government</span>
</a>
<a className="flex items-center gap-4 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-all duration-200" href="#">
<span className="material-symbols-outlined">gavel</span>
<span className="font-body-md">Transparent Governance</span>
</a>
<a className="flex items-center gap-4 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-all duration-200" href="#">
<span className="material-symbols-outlined">verified_user</span>
<span className="font-body-md">Public Trust</span>
</a>
</nav>
<div className="px-6 mt-auto space-y-4">
<button className="w-full bg-forest-green text-on-primary py-3 rounded-lg font-medium shadow-sm">Launch Service</button>
<div className="pt-4 border-t border-outline-variant flex flex-col gap-2">
<a className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors py-1" href="#">
<span className="material-symbols-outlined text-[20px]">settings</span>
<span className="text-sm">Settings</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors py-1" href="#">
<span className="material-symbols-outlined text-[20px]">help</span>
<span className="text-sm">Support</span>
</a>
</div>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="md:ml-64 pt-20 min-h-screen">
<div className="max-w-max-width mx-auto px-6 md:px-margin-desktop py-10 space-y-12">
{/*  Hero Section  */}
<section className="relative h-[480px] rounded-xl overflow-hidden shadow-sm group">
<img alt="Investment Gateway" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A modern, high-angle architectural photograph of a sleek glass skyscraper reflecting a clear blue sky, symbolizing Abia State's urban growth and investment potential. The lighting is bright and professional, emphasizing sharp lines and structural integrity. The scene represents a corporate, progressive governance environment with a palette of deep greens and metallic golds visible in the structural accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHfMpjsAP-ehhlllDtTe3g4StlEx5k1pQsc405zuPoo4InfXhLiRESwEdfnbvhbenvtxGPhp_SlgLBlKlMjHezxHfzmn5PQEsigASczG5WJURoCywqoE1Uj9dNO5bQ3dj5SJ9KSV9BT9PChRW7SZMCM1EUh4dV1wWxY8F3fUKtd6dIeDOEeLAl2tA-CqCTpOs02-Jm31FWaOOBWpmAgIaABWiyYW6ZaKVaBoaBYNYj8NHE5vM9Xr3PEfQFCzTJrC-bU0UKwGNv9Ec" />
<div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent flex flex-col justify-center px-12 text-white">
<div className="inline-flex items-center gap-2 bg-brass-gold/20 backdrop-blur-md border border-brass-gold/30 px-3 py-1 rounded-full w-fit mb-6">
<span className="material-symbols-outlined text-brass-gold text-[18px]" style={{"fontVariationSettings":"'FILL' 1"}}>stars</span>
<span className="font-label-md text-white text-xs tracking-wider uppercase">Institutional Investment</span>
</div>
<h1 className="font-display-lg text-display-lg max-w-2xl leading-tight mb-4">The Gateway to Abia's <span className="text-brass-gold">Economic Renaissance</span></h1>
<p className="font-body-lg text-body-lg max-w-xl text-white/80 mb-8">Secure, transparent, and sovereign digital infrastructure for institutional investors and the global diaspora.</p>
<div className="flex gap-4">
<button className="bg-brass-gold text-on-secondary-fixed px-8 py-3 rounded font-semibold hover:opacity-90 transition-all">Explore Opportunities</button>
<button className="border border-white/50 text-white px-8 py-3 rounded font-semibold hover:bg-white/10 transition-all">Download Roadmap</button>
</div>
</div>
</section>
{/*  KPI Row (FDI Data)  */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="bg-white border border-outline-variant p-6 rounded-lg brass-accent shadow-sm">
<p className="text-on-surface-variant font-label-md text-xs uppercase mb-2">Total FDI 2024</p>
<h3 className="font-headline-lg text-headline-lg text-primary">$420M<span className="text-forest-green text-sm ml-2">↑ 14%</span></h3>
<div className="w-full bg-surface-variant h-1 mt-4 rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[75%]"></div>
</div>
</div>
<div className="bg-white border border-outline-variant p-6 rounded-lg brass-accent shadow-sm">
<p className="text-on-surface-variant font-label-md text-xs uppercase mb-2">Active Projects</p>
<h3 className="font-headline-lg text-headline-lg text-primary">128</h3>
<p className="text-on-surface-variant font-caption text-xs mt-2">Sovereign-backed guarantees</p>
</div>
<div className="bg-white border border-outline-variant p-6 rounded-lg brass-accent shadow-sm">
<p className="text-on-surface-variant font-label-md text-xs uppercase mb-2">Job Creation</p>
<h3 className="font-headline-lg text-headline-lg text-primary">12.5k+</h3>
<p className="text-on-surface-variant font-caption text-xs mt-2">New direct opportunities</p>
</div>
<div className="bg-white border border-outline-variant p-6 rounded-lg brass-accent shadow-sm">
<p className="text-on-surface-variant font-label-md text-xs uppercase mb-2">Diaspora Capital</p>
<h3 className="font-headline-lg text-headline-lg text-primary">$85M</h3>
<p className="text-on-surface-variant font-caption text-xs mt-2">Via Diaspora Direct Bonds</p>
</div>
</section>
{/*  Sector Marketplace Bento Grid  */}
<section>
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary mb-2">Priority Sectors</h2>
<p className="text-on-surface-variant font-body-md">Modular investment vehicles targeting the state's strategic competitive advantages.</p>
</div>
<button className="flex items-center gap-2 text-forest-green font-semibold hover:gap-3 transition-all">
                        View All Sectors <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[240px]">
{/*  Agro-processing  */}
<div className="md:col-span-8 bg-white border border-outline-variant rounded-xl overflow-hidden relative group cursor-pointer">
<img alt="Agro-processing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A clean, highly organized industrial agro-processing facility featuring modern stainless steel machinery for palm oil extraction. The scene is bathed in bright, natural light from overhead skylights, highlighting the cleanliness and efficiency of Abia's manufacturing sector. The color palette is composed of metallic silvers, deep greens from palm leaves, and bright white walls." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZdP1owX6J7glZnm_pRuZbWOvhvUS4qqRW1fs77h9K-xgQjEMFlggZAU_YUDxj7Qesp51seTgjVRkHs8igKIFHR6p6VaaHcyDZE1DVio4hgrqfxneCU6cXUDKFox6_s1c7XjENE3wPpJWYz_wKKO7S_1wOlaYTtNLCZa2HK_3iBCRbff7zkmwLQCoYUm8qJYIUwJH2BletsVNaXVm3uPtl1o3X9fpVnaGuNH7a_z0pPkSINlaQV94NIfzlotrLnzpDOzJjDi4LWs4" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
<span className="text-brass-gold font-label-md text-xs uppercase mb-2 tracking-widest">High Yield</span>
<h4 className="text-white font-headline-md text-headline-md mb-2">Agro-Processing Hubs</h4>
<p className="text-white/70 max-w-md font-body-md">Revolutionizing the palm oil and cassava value chains through integrated specialized processing clusters.</p>
</div>
</div>
{/*  Tech  */}
<div className="md:col-span-4 bg-white border border-outline-variant rounded-xl overflow-hidden relative group cursor-pointer">
<div className="absolute inset-0 bg-forest-green/90 z-10"></div>

<div className="relative z-20 p-8 h-full flex flex-col justify-between">
<span className="material-symbols-outlined text-brass-gold text-4xl" style={{"fontVariationSettings":"'FILL' 1"}}>terminal</span>
<div>
<h4 className="text-white font-headline-md text-headline-md mb-2">Abia Tech Hubs</h4>
<p className="text-white/80 font-body-md">Aba digital innovation and software development corridors.</p>
</div>
</div>
</div>
{/*  Manufacturing  */}
<div className="md:col-span-5 bg-white border border-outline-variant rounded-xl p-8 flex flex-col justify-between cursor-pointer hover:shadow-lg transition-shadow">
<div>
<div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary">precision_manufacturing</span>
</div>
<h4 className="text-primary font-headline-md text-headline-md mb-2">Light Manufacturing</h4>
<p className="text-on-surface-variant font-body-md">Export-ready production facilities for footwear and textiles in Aba.</p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-outline-variant">
<span className="text-forest-green font-semibold">$120M Capex Target</span>
<span className="material-symbols-outlined text-on-surface-variant">arrow_outward</span>
</div>
</div>
{/*  Power  */}
<div className="md:col-span-7 bg-white border border-outline-variant rounded-xl overflow-hidden relative group cursor-pointer">
<img alt="Independent Power" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="An evening shot of a modern electric power substation with glowing blue lights and intricate metal structures. The atmosphere is professional and technologically advanced, representing Abia's independent power initiatives. The scene uses a deep dusk palette with highlights of neon cyan and forest green accents in the background foliage." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9eP2EDpuMCPHdOtIKUoGA1C71dF7VKx_CRmCDfd-V4ZBeF2SMaCAyhgYW_IXihEPXZmNBwOsIDo4S38J8NnRlpZa_hPzwnS4B8tRDvm34_w44RXTSCfz73Gik6SrWOdVf5UoVVPLt9dj-__UxV9efWTfWU4jVpLkQzLStVbZ_QbeY3zbomRMtuizLi3Jf0xzX1hqC0N_R0rsHtdPo600ucKmobErh2VLCIDdtAk5-Veu-o6yQ9XRnw7m0EdaKm80iP1iOTKRTKOo" />
<div className="absolute inset-0 bg-black/40 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded text-white text-xs font-label-md">Infrastructure</span>
<div className="bg-brass-gold text-on-secondary-fixed text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Critical</div>
</div>
<div>
<h4 className="text-white font-headline-md text-headline-md mb-1">Independent Power Projects</h4>
<p className="text-white/90 font-body-md">Powering the manufacturing boom through decentralized gas-to-power solutions.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Diaspora Investment CTA Section  */}
<section className="bg-inverse-surface text-inverse-on-surface rounded-2xl p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">

</div>
<div className="relative z-10 max-w-2xl">
<h2 className="font-display-lg text-display-lg mb-6">Invest in the <span className="text-brass-gold">State of Origin</span></h2>
<p className="font-body-lg text-white/80 mb-8">The Diaspora Direct Investment (DDI) portal allows Abia citizens globally to participate in sovereign-backed infrastructure development with transparent, real-time monitoring of impact.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-forest-green text-on-primary px-10 py-4 rounded font-bold shadow-lg hover:-translate-y-0.5 transition-all">Launch DDI Portal</button>
<button className="border border-outline text-white px-10 py-4 rounded font-bold hover:bg-white/5 transition-all">Watch Official Briefing</button>
</div>
<div className="mt-12 flex gap-12 border-t border-outline/30 pt-8">
<div>
<span className="block font-headline-md text-brass-gold">8.2%</span>
<span className="text-xs uppercase font-label-md opacity-60">Projected Yield</span>
</div>
<div>
<span className="block font-headline-md text-brass-gold">100%</span>
<span className="text-xs uppercase font-label-md opacity-60">Asset Backed</span>
</div>
<div>
<span className="block font-headline-md text-brass-gold">Quarterly</span>
<span className="text-xs uppercase font-label-md opacity-60">Yield Distribution</span>
</div>
</div>
</div>
</section>
</div>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-highest border-t border-outline-variant mt-20">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center py-gutter px-margin-desktop max-w-max-width mx-auto gap-8">
<div>
<div className="font-headline-md text-headline-md text-primary mb-2">ABIA ONE</div>
<p className="font-caption text-caption text-on-surface-variant max-w-xs">
                    The sovereign digital operating system for Abia State Government. Empowering citizens through technology.
                </p>
</div>
<div className="grid grid-cols-2 md:flex gap-8 md:gap-12">
<div className="flex flex-col gap-2">
<p className="font-bold text-primary mb-2">Institutional Links</p>
<a className="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Abia Investment House</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Ministry of Finance</a>
</div>
<div className="flex flex-col gap-2">
<p className="font-bold text-primary mb-2">Transparency</p>
<a className="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Annual Budget Reports</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</a>
</div>
<div className="flex flex-col gap-2">
<p className="font-bold text-primary mb-2">Support</p>
<a className="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Investor Relations</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Support</a>
</div>
</div>
</div>
<div className="py-8 border-t border-outline-variant/30 text-center">
<p className="font-caption text-caption text-on-surface-variant">
                © 2024 Abia State Government. All rights reserved. Built for the future of governance.
            </p>
</div>
</footer>
{/*  Micro-interaction Scripts  */}


      </div>
    </>
  );
}
