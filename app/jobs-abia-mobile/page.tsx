"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .hide-scrollbar::-webkit-scrollbar {\n            display: none;\n        }\n        .hide-scrollbar {\n            -ms-overflow-style: none;\n            scrollbar-width: none;\n        }\n        .job-card-gradient {\n            background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(246,251,243,1) 100%);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
        
{/*  Top AppBar  */}
<header className="bg-surface sticky top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-16 border-b border-outline-variant">
<div className="flex items-center gap-3">
<button className="p-2 hover:bg-surface-variant/50 transition-colors active:scale-95 duration-150 rounded-lg">
<span className="material-symbols-outlined text-primary">menu</span>
</button>
<h1 className="font-headline-md text-headline-md-mobile font-bold text-primary">Jobs Abia</h1>
</div>
<button className="p-2 hover:bg-surface-variant/50 transition-colors active:scale-95 duration-150 rounded-lg">
<span className="material-symbols-outlined text-primary">emergency_share</span>
</button>
</header>
<main className="pb-24">
{/*  Hero Search Section  */}
<section className="px-margin-mobile pt-6 pb-4">
<div className="relative group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline">search</span>
</div>
<input className="w-full h-14 pl-12 pr-4 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none shadow-sm" placeholder="Search for opportunities..." type="text" />
<div className="absolute inset-y-0 right-4 flex items-center">
<button className="p-2 text-primary">
<span className="material-symbols-outlined">tune</span>
</button>
</div>
</div>
</section>
{/*  Quick Filters  */}
<section className="flex gap-3 px-margin-mobile overflow-x-auto hide-scrollbar pb-6">
<button className="flex-none px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center gap-2 transition-transform active:scale-95">
<span className="material-symbols-outlined text-[18px]">near_me</span>
                Nearby
            </button>
<button className="flex-none px-4 py-2 bg-surface-container-high text-on-surface-variant border border-outline-variant rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-surface-variant transition-all">
<span className="material-symbols-outlined text-[18px]">home_work</span>
                Work from Home
            </button>
<button className="flex-none px-4 py-2 bg-surface-container-high text-on-surface-variant border border-outline-variant rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-surface-variant transition-all">
<span className="material-symbols-outlined text-[18px]">precision_manufacturing</span>
                Aba Clusters
            </button>
<button className="flex-none px-4 py-2 bg-surface-container-high text-on-surface-variant border border-outline-variant rounded-lg font-label-md text-label-md flex items-center gap-2 hover:bg-surface-variant transition-all">
<span className="material-symbols-outlined text-[18px]">agriculture</span>
                Agriculture
            </button>
</section>
{/*  CTAs: Skills & Resume  */}
<section className="px-margin-mobile grid grid-cols-2 gap-4 pb-8">
<div className="relative overflow-hidden rounded-xl bg-primary-container p-4 flex flex-col justify-between min-h-[140px] shadow-sm">
<div className="z-10">
<h3 className="font-headline-md text-[18px] text-on-primary leading-tight font-bold">Skills Academy</h3>
<p className="text-[12px] text-on-primary-container mt-1 opacity-90">Upskill for Abia's future</p>
</div>
<button className="z-10 self-start mt-4 px-3 py-1.5 bg-on-primary text-primary text-[12px] font-bold rounded-lg flex items-center gap-1">
                    Join Now
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
<div className="absolute -right-4 -bottom-4 opacity-20">
<span className="material-symbols-outlined text-[100px] text-white" style={{"fontVariationSettings":"'FILL' 1"}}>school</span>
</div>
</div>
<div className="relative overflow-hidden rounded-xl bg-secondary-container p-4 flex flex-col justify-between min-h-[140px] shadow-sm">
<div className="z-10">
<h3 className="font-headline-md text-[18px] text-on-secondary-container leading-tight font-bold">Resume Builder</h3>
<p className="text-[12px] text-on-secondary-container mt-1 opacity-90">Get noticed by top firms</p>
</div>
<button className="z-10 self-start mt-4 px-3 py-1.5 bg-on-secondary-container text-secondary-container text-[12px] font-bold rounded-lg flex items-center gap-1">
                    Create
                    <span className="material-symbols-outlined text-[14px]">edit_note</span>
</button>
<div className="absolute -right-4 -bottom-4 opacity-20">
<span className="material-symbols-outlined text-[100px] text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>description</span>
</div>
</div>
</section>
{/*  Featured Jobs  */}
<section className="px-margin-mobile">
<div className="flex justify-between items-end mb-4">
<h2 className="font-headline-md text-headline-md-mobile text-primary font-bold">Featured Opportunities</h2>
<button className="text-secondary font-label-md text-label-md flex items-center gap-1">
                    View all
                    <span className="material-symbols-outlined text-[18px]">keyboard_arrow_right</span>
</button>
</div>
<div className="space-y-4">
{/*  Job Card 1: Aba Leather  */}
<div className="job-card-gradient border border-outline-variant rounded-xl p-4 shadow-sm relative overflow-hidden group active:bg-surface-variant transition-colors">
<div className="flex justify-between items-start mb-3">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A macro close-up of a premium, deep-brown textured leather surface with intricate stitching, representing the artisanal craftsmanship of the Aba Leather Industry. The lighting is warm and dramatic, highlighting the rich quality and cultural heritage of the material. The aesthetic is sophisticated, professional, and reflects industrial excellence in a modern Abia State context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK9kUMtUanCpqq0Cg5DOtEMTo_me7a799gHUMiRS95QDzeUhdJgd_sKFARQFF3okPythhMb40LM9L77VY0szaj9rBzoLJxrj45OHRTx1feVoBnZTyNjraGA07RP1BGGCgP0ncndIPd0J_UgwuWrJfP6spltLhOyN7XLlahN1EbhAr7YwyQUyZWHxLRTM_fnbsaJMroiWiq-ZXXGID2TkZf5kMCUmepPOSA7G7Zv92GkQf6PfbE7-_rGCsQhIKhUC1GJqeiX_JfjC8" />
</div>
<button className="p-2 text-outline hover:text-primary">
<span className="material-symbols-outlined">bookmark</span>
</button>
</div>
<div className="space-y-1">
<h4 className="font-headline-md text-[18px] text-on-background font-bold">Master Craftsman - Footwear</h4>
<p className="text-on-surface-variant text-body-md font-medium">Aba Leather Hub</p>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full text-[12px] font-medium border border-outline-variant">Ariaria, Aba</span>
<span className="px-3 py-1 bg-green-50 text-primary rounded-full text-[12px] font-medium border border-primary/20">Full-time</span>
<span className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full text-[12px] font-medium border border-outline-variant">₦250k - 400k</span>
</div>
<div className="mt-4 flex items-center text-caption text-outline">
<span className="material-symbols-outlined text-[14px] mr-1">schedule</span>
                        Posted 2 hours ago
                    </div>
</div>
{/*  Job Card 2: Tech  */}
<div className="job-card-gradient border border-outline-variant rounded-xl p-4 shadow-sm relative overflow-hidden group active:bg-surface-variant transition-colors">
<div className="flex justify-between items-start mb-3">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A futuristic coding environment with lines of glowing code across multiple high-resolution monitors in a sleek, minimalist tech office setting. The palette is dominated by deep blues and vibrant greens, evoking a sense of high-performance software engineering and digital innovation. The lighting is cool and focused, suggesting a professional and cutting-edge work culture at an Abia-based tech firm." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkjFq3QTPKjVh1Y9J8C2dtv5tYhQMopLpFRmeoeZGok3mWvpJoAL-FuagplWKCA-Rmnq4vqaJvPG0VfnuiZ4Hv7wxLzhJqIKKDDBFA1timWFc73syPgCkvE2cM1vUK7TgWuHDNUiSm8TOQqTA63h1BAp_8nbZw2PV9J3Iu1I_FqDGp8ghOgXslc7VFgHelmhDepbJAXUGNz1bFxdDdEcyykzxtQSBoNi17W7swZ2qcsKGzPYpMiuTPBTrrWdPS9Q0ZmbqZeqV0MAY" />
</div>
<button className="p-2 text-outline hover:text-primary">
<span className="material-symbols-outlined">bookmark</span>
</button>
</div>
<div className="space-y-1">
<h4 className="font-headline-md text-[18px] text-on-background font-bold">Senior Fullstack Developer</h4>
<p className="text-on-surface-variant text-body-md font-medium">Abia Tech Innovation Park</p>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full text-[12px] font-medium border border-outline-variant">Remote / Umuahia</span>
<span className="px-3 py-1 bg-green-50 text-primary rounded-full text-[12px] font-medium border border-primary/20">Contract</span>
<span className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full text-[12px] font-medium border border-outline-variant">Competitive</span>
</div>
<div className="mt-4 flex items-center text-caption text-outline">
<span className="material-symbols-outlined text-[14px] mr-1">schedule</span>
                        Posted 5 hours ago
                    </div>
</div>
{/*  Job Card 3: Agriculture  */}
<div className="job-card-gradient border border-outline-variant rounded-xl p-4 shadow-sm relative overflow-hidden group active:bg-surface-variant transition-colors">
<div className="flex justify-between items-start mb-3">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A vast, vibrant palm oil plantation in rural Abia, captured from a low angle showing healthy, emerald-green palm fronds under a clear, bright blue sky. The lighting is natural and luminous, conveying the richness and fertility of the land. The visual style is crisp and modern, representing a professional, data-driven approach to sustainable large-scale agriculture in the state." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3UdRLRcZU3nkiSzJgT-Fr65IR4KrpZVlm2mSpo1W5G-t5C39-6iBLkrZOrxeRovyU_sn4dao0ZEwmNIMNxxlObKjVDqkgQ-whqnnZVKqeeLkwxsMHOZh2axyixDDqXj9CqFMx8wCyHzWnZWJtZwCdE8v829xgLWY7Bgpo4gyoxrzLSSjSyF9AUtssFPw-HD787SEukERwYXjDTss2FPSMC8GestfIUZ7TzcrJK0FGp0uEXUl7S7rbgwjd098IV3UaWaNonT5Bs1M" />
</div>
<button className="p-2 text-outline hover:text-primary">
<span className="material-symbols-outlined">bookmark</span>
</button>
</div>
<div className="space-y-1">
<h4 className="font-headline-md text-[18px] text-on-background font-bold">Agro-Processing Manager</h4>
<p className="text-on-surface-variant text-body-md font-medium">Bende Integrated Farms</p>
</div>
<div className="flex flex-wrap gap-2 mt-4">
<span className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full text-[12px] font-medium border border-outline-variant">Bende, Abia</span>
<span className="px-3 py-1 bg-green-50 text-primary rounded-full text-[12px] font-medium border border-primary/20">Permanent</span>
<span className="px-3 py-1 bg-surface-container-low text-on-surface-variant rounded-full text-[12px] font-medium border border-outline-variant">Benefits Included</span>
</div>
<div className="mt-4 flex items-center text-caption text-outline">
<span className="material-symbols-outlined text-[14px] mr-1">schedule</span>
                        Posted Yesterday
                    </div>
</div>
</div>
</section>
{/*  Stats Section (Asymmetric Layout)  */}
<section className="px-margin-mobile py-10">
<div className="bg-on-background text-white rounded-2xl p-6 relative overflow-hidden">
<div className="flex flex-col gap-6 relative z-10">
<div>
<p className="text-secondary-fixed text-label-md font-label-md mb-1">State Progress</p>
<h3 className="text-headline-md font-headline-md font-bold leading-tight">Empowering Abia's Workforce</h3>
</div>
<div className="flex gap-8">
<div>
<span className="block text-[28px] font-bold text-secondary-fixed">12.5k</span>
<span className="text-[12px] opacity-70">Jobs Created</span>
</div>
<div className="w-px h-10 bg-white/20 self-center"></div>
<div>
<span className="block text-[28px] font-bold text-secondary-fixed">450+</span>
<span className="text-[12px] opacity-70">SMEs Hiring</span>
</div>
</div>
<button className="w-full py-3 bg-primary-fixed text-on-primary-fixed rounded-lg font-bold text-label-md hover:brightness-110 active:scale-95 transition-all">
                        Join the Talent Registry
                    </button>
</div>
{/*  Abstract Design Elements  */}
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
<div className="absolute bottom-0 left-0 w-24 h-24 bg-eagle-red/10 rounded-full blur-2xl -ml-12 -mb-12"></div>
</div>
</section>
</main>
{/*  Bottom Navigation  */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface border-t border-outline-variant shadow-sm rounded-t-full">
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
<span className="font-label-md text-[10px] mt-0.5">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-all" href="#">
<span className="material-symbols-outlined">notifications_active</span>
<span className="font-label-md text-[10px] mt-0.5">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-all" href="#">
<span className="material-symbols-outlined">apps</span>
<span className="font-label-md text-[10px] mt-0.5">Hub</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-all" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-md text-[10px] mt-0.5">Profile</span>
</a>
</nav>


      </div>
    </>
  );
}
