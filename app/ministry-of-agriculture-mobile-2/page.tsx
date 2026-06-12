"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        body { font-family: 'Hanken Grotesk', sans-serif; background-color: #f6fbf3; }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 12px;\n        }\n        .bento-item-large {\n            grid-column: span 2;\n        }\n        .hide-scrollbar::-webkit-scrollbar { display: none; }\n        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background pb-24">
        
{/*  TopAppBar  */}
<header className="flex justify-between items-center w-full px-margin-mobile h-16 z-50 bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline fixed top-0 left-0 right-0">
<div className="flex items-center gap-3">
<button className="material-symbols-outlined text-primary hover:bg-surface-variant/50 transition-colors p-2 rounded-full active:scale-95 duration-150">menu</button>
<h1 className="font-headline-md text-headline-md-mobile font-bold text-primary dark:text-primary-fixed">Abia One</h1>
</div>
<div className="flex items-center gap-2">
<button className="material-symbols-outlined text-primary hover:bg-surface-variant/50 transition-colors p-2 rounded-full active:scale-95 duration-150">emergency_share</button>
</div>
</header>
<main className="pt-20 px-4 max-w-md mx-auto space-y-6">
{/*  Welcome Section  */}
<section className="mt-4">
<p className="font-label-md text-label-md text-outline uppercase tracking-widest">Farmer Support Portal</p>
<h2 className="font-headline-md text-headline-md text-on-surface mt-1">Hello, Chief Ebere</h2>
<div className="flex items-center gap-2 mt-2 text-forest-green">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span className="font-body-md text-body-md font-medium">Verified Producer • Umuahia North</span>
</div>
</section>
{/*  Voucher Status Card (High Priority)  */}
<section className="bg-surface-container border border-outline-variant rounded-xl overflow-hidden p-5 relative">
<div className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none">
<span className="material-symbols-outlined text-[96px] text-primary">confirmation_number</span>
</div>
<div className="flex flex-col gap-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-headline-md text-headline-md text-primary">Voucher Status</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Fertilizer Subsidy 2024</p>
</div>
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-md text-label-md">ACTIVE</span>
</div>
<div className="bg-surface p-4 rounded-lg border border-outline-variant flex items-center justify-between">
<div>
<p className="font-caption text-caption text-outline uppercase">Current Balance</p>
<p className="font-display-lg text-[28px] text-on-surface font-bold">₦45,200.00</p>
</div>
<button className="bg-forest-green text-state-white px-4 py-2 rounded-lg font-label-md text-label-md flex items-center gap-2 active:scale-95 transition-transform">
                        Redeem
                    </button>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">info</span>
<p className="font-caption text-caption">Valid at any certified Agro-Hub until Oct 30.</p>
</div>
</div>
</section>
{/*  Weather & Price Bento Grid  */}
<section className="bento-grid">
{/*  Weather Feed  */}
<div className="bg-white border border-outline-variant rounded-xl p-4 flex flex-col justify-between h-40 shadow-sm">
<div className="flex justify-between">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>early_on</span>
<span className="font-label-md text-label-md text-on-surface-variant">Umuahia</span>
</div>
<div>
<p className="font-display-lg text-[32px] text-on-surface font-bold leading-none">28°C</p>
<p className="font-body-md text-body-md text-forest-green font-medium">Scattered Rain</p>
</div>
<div className="border-t border-outline-variant pt-2">
<p className="font-caption text-caption text-outline">Ideal for planting maize</p>
</div>
</div>
{/*  Crop Price Feed  */}
<div className="bg-white border border-outline-variant rounded-xl p-4 flex flex-col justify-between h-40 shadow-sm">
<div className="flex justify-between">
<span className="material-symbols-outlined text-secondary" style={{"fontVariationSettings":"'FILL' 1"}}>trending_up</span>
<span className="font-label-md text-label-md text-on-surface-variant">Market Price</span>
</div>
<div>
<p className="font-body-md text-body-md font-bold text-on-surface">Cassava (100kg)</p>
<p className="font-display-lg text-[24px] text-primary font-bold">₦22,500</p>
</div>
<div className="flex items-center gap-1 text-on-error-container bg-error-container/30 px-2 py-0.5 rounded w-fit">
<span className="material-symbols-outlined text-[12px]">arrow_downward</span>
<p className="font-caption text-caption">-2.4%</p>
</div>
</div>
{/*  Find Nearest Hub (Map Trigger)  */}
<button className="bento-item-large bg-primary-container text-on-primary-container p-6 rounded-xl flex items-center justify-between shadow-md relative overflow-hidden group">
<div className="z-10">
<h3 className="font-headline-md text-headline-md mb-1">Find Nearest Hub</h3>
<p className="font-body-md text-body-md opacity-90">Locate certified fertilizer distribution points and processing centers.</p>
<div className="mt-4 flex items-center gap-2 bg-on-primary-container text-primary-container w-fit px-4 py-2 rounded-lg font-bold">
<span className="material-symbols-outlined">map</span>
                        Open Map
                    </div>
</div>
{/*  Mini Map Background Simulation  */}
<div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
<img alt="Satellite view of agricultural land" className="w-full h-full object-cover" data-alt="A stylized, high-contrast satellite map view showing lush green agricultural farmlands and winding dirt roads in a rural Nigerian landscape. The perspective is from directly above, emphasizing the geometric patterns of the fields. The lighting is bright and clear, reflecting a high-noon sun. The overall aesthetic is professional, data-driven, and serves as a background texture for a mapping interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRQhU3rboJGYrZjtKGS4_g3MBNnl0vOYGrHAjFJ2qRejmqPOd6b6w95TqwSQLaqKaLHDP1kh9HqDJ0avofT7BOexj6za1pQpIE0sIxP3t8JDsiL8M7bbku2248zE6_FU50fxqoAxCRa49NfivDw6q_74FyM_XwvNzOeLoWR4VWX2RT2hy5CxrwPp6OO9QC-PzS4rhCJy3zdesFYhFYwlGfutwhD6tSSPt-Qt9tRFzvZpQYuZiCpPqmNGS2rt26fvxVHLUx-GqI0Vc" />
</div>
</button>
</section>
{/*  Insights / News Section  */}
<section className="space-y-4">
<div className="flex justify-between items-end">
<h3 className="font-headline-md text-headline-md text-on-surface">Market Insights</h3>
<a className="font-label-md text-label-md text-forest-green font-bold" href="#">View All</a>
</div>
<div className="flex gap-4 overflow-x-auto hide-scrollbar snap-x pb-4">
<div className="snap-start min-w-[280px] bg-surface rounded-xl border border-outline-variant overflow-hidden flex flex-col">
<div className="h-32 bg-slate-200">
<img alt="Agro-processing" className="w-full h-full object-cover" data-alt="A macro photograph of high-quality organic fertilizers and modern agricultural tools neatly organized in a bright, modern government-funded distribution center in Abia State. The lighting is soft and professional, highlighting the textures of the soil and tools. The color palette features deep forest greens and earth tones, reflecting a sustainable and advanced farming future. The mood is optimistic and structured." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWgcUVYsCgKtfObrT7ZCoxEYZvEqFwhTPhHBTYflkAGb_I_4gXgv9zSXjKTaqBxhFQ-iCjtZe6mQw_TKJmiFaLnKFE0LVyrTNJD1MrlIqxqvOt_4kqo_NlGT2CGgeQZYArTBG1R3xEvtVgNbnKS0M7g3xRXH5E6CXVuyi8Oo0lRQQhdvoLsHqevW7kVKHCDRDyAK7uu077e3GsgqqoCrnT1rBFwqbHCIr5elahBI6VHvYpcb1wbYDIs4c8Rdl1uFNEsxPu2NazIXg" />
</div>
<div className="p-4">
<span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded font-label-md text-[10px] uppercase">Best Practice</span>
<h4 className="font-body-md text-body-md font-bold text-on-surface mt-2">Maximizing Yield in Early Rain Season</h4>
<p className="font-caption text-caption text-on-surface-variant mt-1">Abia ADP experts share key timing for cassava stem planting...</p>
</div>
</div>
<div className="snap-start min-w-[280px] bg-surface rounded-xl border border-outline-variant overflow-hidden flex flex-col">
<div className="h-32 bg-slate-200">
<img alt="Global crop market" className="w-full h-full object-cover" data-alt="A professional close-up shot of palm oil kernels being sorted in a modern, clean industrial facility. The lighting is warm and directional, accentuating the golden hues of the oil and the rich textures of the kernels. The scene communicates industrial scale and government-backed economic development within the Abia state agricultural sector. The composition is clean and technical." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQZePiJ0s_7ZWAhIQu9oVjGX0Gg39utzXH7ld43mLLhpg1kKxA018MUTSblgCgMY6iAMrPOUwmF045hJccSuTQ7DEFIWTPQcK5_oF_8REVmjXOjbLPGBHSCdQKxZczSfB79D5DZeaQY0BXY3c__wqsOpQE6Aoec-Lq_xqZaQUJ19dKH0Aabj8Zlyy4mQcWQcXVCnG3gic7zovHiScZ1TKbuWct5E4qeuqyrA0JWeb-izlQLw9uJZIaKALrk_oj0BTFezUGAj4Lkeo" />
</div>
<div className="p-4">
<span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded font-label-md text-[10px] uppercase">Export Watch</span>
<h4 className="font-body-md text-body-md font-bold text-on-surface mt-2">Palm Oil Export Prices Hit New High</h4>
<p className="font-caption text-caption text-on-surface-variant mt-1">Inter-state trade barriers lifted for palm oil cooperatives...</p>
</div>
</div>
</div>
</section>
{/*  CTA Floating (Contextual Support)  */}
<div className="fixed bottom-24 right-4 z-40">
<button className="bg-secondary shadow-lg text-on-secondary w-14 h-14 rounded-full flex items-center justify-center active:scale-95 transition-transform">
<span className="material-symbols-outlined">support_agent</span>
</button>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface dark:bg-surface-container-highest border-t border-outline-variant dark:border-outline shadow-sm rounded-t-full">
{/*  Dashboard Active  */}
<a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 transition-all duration-200 ease-in-out" href="/home-mobile">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
<span className="font-label-md text-[10px]">Dashboard</span>
</a>
{/*  Alerts Inactive  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">notifications_active</span>
<span className="font-label-md text-[10px]">Alerts</span>
</a>
{/*  Hub Inactive  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">apps</span>
<span className="font-label-md text-[10px]">Hub</span>
</a>
{/*  Profile Inactive  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-md text-[10px]">Profile</span>
</a>
</nav>
{/*  Micro-interaction Script  */}


      </div>
    </>
  );
}
