"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 12px;\n        }\n        .hide-scrollbar::-webkit-scrollbar {\n            display: none;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(0, 77, 40, 0.1);\n        }\n        .project-map-pin {\n            animation: pulse-pin 2s infinite;\n        }\n        @keyframes pulse-pin {\n            0% { transform: scale(1); opacity: 1; }\n            50% { transform: scale(1.2); opacity: 0.8; }\n            100% { transform: scale(1); opacity: 1; }\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md min-h-screen pb-24">
        
{/*  Top Navigation  */}
<header className="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline flex justify-between items-center w-full px-margin-mobile h-16 z-50 sticky top-0">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary" data-icon="menu">menu</span>
<h1 className="font-headline-md text-headline-md-mobile font-bold text-primary dark:text-primary-fixed">Abia One</h1>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-primary" data-icon="emergency_share">emergency_share</span>
</div>
</header>
<main className="px-margin-mobile pt-6">
{/*  Dashboard Header  */}
<section className="mb-8">
<h2 className="font-headline-md text-headline-md-mobile text-primary mb-1">Build Abia</h2>
<p className="font-body-md text-on-surface-variant">Real-time infrastructure transparency &amp; tracking.</p>
</section>
{/*  Interactive Map Section  */}
<section className="mb-8">
<div className="flex justify-between items-end mb-4">
<h3 className="font-headline-md text-headline-md-mobile text-on-surface">Near Your Location</h3>
<span className="font-label-md text-label-md text-primary underline">Expand Map</span>
</div>
<div className="relative w-full h-64 rounded-xl overflow-hidden shadow-sm border border-outline-variant">
<div className="absolute inset-0 bg-slate-200" data-location="Umuahia, Abia State" style={{}}>
<img alt="Map view of Umuahia" className="w-full h-full object-cover grayscale opacity-50" data-alt="A clean, professional digital map visualization of Umuahia city streets in Abia State. The map uses a minimalist color palette of soft grays and forest greens, indicating park areas and major infrastructure arteries. Several glowing circular pins in brass gold and forest green represent active construction projects. The lighting is soft and daylight-balanced, giving an informative and transparent government portal feel." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaqXEu88Sr-BW6CJgbLbcGP7SKc0eFZEn2kwi12VEmEFvplRISF9GWr4_j4NFKgsJCC-g-hdi5gO1AjNu315S2VsDDbeeF8Bxevz-1SkJN1pKZsgoNpul5xNdjvOguLlt0KXzmMimKzVLs5rqUexOC5n2ZC3Lv-qlDsqr_XIe1MSgzEtfgFGburUnF0NOHKC6SW0lt6TLtGcLlFf6GVhzBzExBDOmOZRkx0Cj5zdSxMCy4F3LrIz3Nhhe8Zhbz1uaO_5gxq_cgGi8"/>
</div>
{/*  Interactive Pins Overlay  */}
<div className="absolute top-1/3 left-1/4 project-map-pin">
<div className="bg-forest-green p-1.5 rounded-full shadow-lg border-2 border-white">
<span className="material-symbols-outlined text-white text-xs block" data-icon="construction" style={{"fontVariationSettings":"'FILL' 1"}}>construction</span>
</div>
</div>
<div className="absolute bottom-1/4 right-1/3 project-map-pin" style={{"animationDelay":"0.5s"}}>
<div className="bg-brass-gold p-1.5 rounded-full shadow-lg border-2 border-white">
<span className="material-symbols-outlined text-white text-xs block" data-icon="bolt" style={{"fontVariationSettings":"'FILL' 1"}}>bolt</span>
</div>
</div>
{/*  User Location Indicator  */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center border border-primary/40">
<div className="w-2.5 h-2.5 bg-primary rounded-full shadow-sm"></div>
</div>
</div>
{/*  Float Card  */}
<div className="absolute bottom-4 left-4 right-4 glass-card p-3 rounded-lg flex items-center gap-3">
<div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="road">road</span>
</div>
<div className="flex-1">
<p className="font-label-md text-[12px] text-on-surface-variant uppercase tracking-wider">Closest Project</p>
<p className="font-headline-md text-[16px] text-on-surface">Aba-Ikot Ekpene Road</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant" data-icon="chevron_right">chevron_right</span>
</div>
</div>
</section>
{/*  Open Budget Visualization  */}
<section className="mb-8">
<div className="p-6 bg-primary-container rounded-xl text-white shadow-sm overflow-hidden relative">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
<h3 className="font-headline-md text-headline-md-mobile">Open Budget 2024</h3>
</div>
<div className="flex justify-between items-baseline mb-2">
<span className="font-body-md opacity-80">Infrastructure Allocated</span>
<span className="font-headline-md text-headline-md">₦42.5B</span>
</div>
<div className="w-full h-3 bg-white/20 rounded-full mb-6 overflow-hidden">
<div className="h-full bg-secondary-fixed w-[68%] rounded-full shadow-[0_0_12px_rgba(255,224,136,0.5)]"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-black/10 p-3 rounded-lg border border-white/5">
<p className="font-caption opacity-80 mb-1">Spent to Date</p>
<p className="font-label-md text-lg">₦28.9B</p>
</div>
<div className="bg-black/10 p-3 rounded-lg border border-white/5">
<p className="font-caption opacity-80 mb-1">Efficiency Rate</p>
<p className="font-label-md text-lg text-secondary-fixed">94.2%</p>
</div>
</div>
</div>
{/*  Abstract Bg Pattern  */}
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
</div>
</section>
{/*  Progress Photos Gallery (Horizontal Scroll)  */}
<section className="mb-8">
<div className="flex justify-between items-center mb-4">
<h3 className="font-headline-md text-headline-md-mobile text-on-surface">Progress Photos</h3>
<span className="font-label-md text-label-md text-primary">Recent</span>
</div>
<div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-margin-mobile px-margin-mobile">
<div className="flex-shrink-0 w-64">
<div className="h-40 rounded-xl overflow-hidden mb-2 border border-outline-variant relative">
<img alt="Construction of bridge" className="w-full h-full object-cover" data-alt="A high-quality architectural photograph of a bridge under construction in a tropical, urban setting in Abia State. The image features a massive concrete span supported by heavy-duty steel scaffolding. Workers in high-visibility forest green vests and white hard hats are visible on-site. The lighting is crisp afternoon sun, casting sharp shadows that emphasize the structural complexity and progress of the engineering work." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8-T_iq7Z7ytdkWEjoV3rWkcovQL7Y1uLGgulZM5Ioq_Pj5vvNBrjkzAx9Yjo0SW2tkb3eY5UL2Wkh6IYLE__mdPg2WMzVu2WaiPFBIK1VbP-8TaQKFoPOcPxRFAzrqDGplJ2OZj7o27J678mmv8Hb-UVFZafGW3AZ8FTEx_Vhs03i5P0qaymIBJTX3--Kpiwo0q0a1GuK2EMVYc66ed-s29Vd0j7qsYGVyPIYVv0sfle_dzdXExr-Er0shll7TeA6eOrwz1Dj3M4"/>
<div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full backdrop-blur-sm">2 Days Ago</div>
</div>
<p className="font-label-md text-on-surface truncate">Enyimba Bridge Girders</p>
<p className="font-caption text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="location_on">location_on</span> Aba Central
                    </p>
</div>
<div className="flex-shrink-0 w-64">
<div className="h-40 rounded-xl overflow-hidden mb-2 border border-outline-variant relative">
<img alt="Road paving" className="w-full h-full object-cover" data-alt="A professional drone shot of a newly paved asphalt highway stretching through a lush green landscape in Abia. The black asphalt is perfectly smooth with crisp white and yellow lane markings. Construction machinery, including a steamroller in bright yellow, is parked neatly to the side. The overall mood is one of progress and cleanliness, under a clear blue sky with soft morning light." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0U-bRbA_4jO9NNJpDwZzBEHUc3AJEUNuDK5_YygwQbrVzdmcXRJksQyfVxlS9bQh93JZXP4JtIiY9zWKLPyioc4RfpP5X9KtDc19scuM6BWAFfVLgy8WWvauAFwu_AHAYCknx0boA2a92xkQzGejXGFC8xZaZAYHEln3CVwx2AlYlbv2VI2WqzKi4EX2ta7GKlFjFOGjozPHv-ySFGKVaRK4KW6BoHytaRhE-dEc9XtP7Qb-mFNAPl2aBtq5_AUeGUVs5WFS-HiY"/>
<div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full backdrop-blur-sm">Today</div>
</div>
<p className="font-label-md text-on-surface truncate">Ohafia Ring Road Paving</p>
<p className="font-caption text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="location_on">location_on</span> Ohafia
                    </p>
</div>
<div className="flex-shrink-0 w-64">
<div className="h-40 rounded-xl overflow-hidden mb-2 border border-outline-variant relative">
<img alt="Modern building facade" className="w-full h-full object-cover" data-alt="Close-up of a modern institutional building facade featuring glass panels and sustainable wood accents. The architecture is contemporary, representing a new government hub in Abia. Reflected in the glass is a vibrant garden area with palm trees. The lighting is soft and golden, characteristic of a late afternoon glow, projecting a sense of professional excellence and transparency." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY6w5qDFCwBc2JRF9l6QGhE13oIPQhd4jlJ73GgHUl-2r7F4RF0gdP8fKSX1FMB5CLQF0EeQtryE1grVglSZTj1DLxQVphAyBjBf_v-RL1zv2EuL33hNFM5vGF1tlgR272nuhqhKqA1snfSxHxSH5BHKMSOak_hZUZR_8FfmggsPJp_yKKGsHI9omIs1IMBC_pCUz0KyGAp2EWqD6RldhLDJ00RULyhqAmNmSamGq1RkPyWlO58IqXAZaWPdKfFAjSKJtRLMCqD8s"/>
<div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-full backdrop-blur-sm">1 Week Ago</div>
</div>
<p className="font-label-md text-on-surface truncate">Digital Hub External Glass</p>
<p className="font-caption text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="location_on">location_on</span> Umuahia
                    </p>
</div>
</div>
</section>
{/*  Project Status Grid (Bento Style)  */}
<section className="mb-12">
<h3 className="font-headline-md text-headline-md-mobile text-on-surface mb-4">Project Insights</h3>
<div className="bento-grid">
<div className="col-span-2 bg-surface-container-low border border-outline-variant p-4 rounded-xl">
<div className="flex justify-between items-start mb-4">
<div>
<p className="font-label-md text-on-surface-variant text-[12px] uppercase">Job Creation</p>
<p className="font-headline-md text-headline-md text-primary">12,480+</p>
</div>
<div className="bg-primary/10 p-2 rounded-lg">
<span className="material-symbols-outlined text-primary" data-icon="group">group</span>
</div>
</div>
<p className="font-caption text-on-surface-variant">Active local laborers and contractors employed across all state infrastructure projects this quarter.</p>
</div>
<div className="bg-surface-container-low border border-outline-variant p-4 rounded-xl flex flex-col justify-between">
<span className="material-symbols-outlined text-secondary text-2xl mb-2" data-icon="schedule">schedule</span>
<div>
<p className="font-headline-md text-lg">88%</p>
<p className="font-caption text-on-surface-variant leading-tight">Projects On Schedule</p>
</div>
</div>
<div className="bg-surface-container-low border border-outline-variant p-4 rounded-xl flex flex-col justify-between">
<span className="material-symbols-outlined text-eagle-red text-2xl mb-2" data-icon="warning">warning</span>
<div>
<p className="font-headline-md text-lg">12</p>
<p className="font-caption text-on-surface-variant leading-tight">Delayed Items Flagged</p>
</div>
</div>
</div>
</section>
{/*  Citizen Report CTA  */}
<section className="mb-6">
<button className="w-full bg-forest-green text-white py-4 rounded-lg font-headline-md text-[16px] flex items-center justify-center gap-2 active:scale-95 transition-all">
<span className="material-symbols-outlined" data-icon="add_a_photo">add_a_photo</span>
                Report Project Progress
            </button>
<p className="text-center font-caption text-on-surface-variant mt-3 px-4">
                Help us keep data accurate. Upload photos of projects in your neighborhood.
            </p>
</section>
</main>
{/*  Bottom Navigation Shell  */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface dark:bg-surface-container-highest border-t border-outline-variant dark:border-outline shadow-sm">
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary dark:hover:text-primary-fixed transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-[10px]">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary dark:hover:text-primary-fixed transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-[10px]">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="apps" style={{"fontVariationSettings":"'FILL' 1"}}>apps</span>
<span className="font-label-md text-[10px]">Hub</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary dark:hover:text-primary-fixed transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-[10px]">Profile</span>
</a>
</nav>


      </div>
    </>
  );
}
