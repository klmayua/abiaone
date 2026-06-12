export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        body {\n            background-color: #f6fbf3;\n            -webkit-tap-highlight-color: transparent;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 12px;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(8px);\n            border: 1px solid #E2E8F0;\n        }\n        .hide-scrollbar::-webkit-scrollbar {\n            display: none;\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="font-body-md text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
        
{/*  Top App Bar  */}
<header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-outline-variant">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full max-w-max-width mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" data-icon="account_balance">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green tracking-tight">ABIA ONE</h1>
</div>
<div className="flex items-center gap-4">
<button className="active:scale-95 transition-transform text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-high border border-outline-variant">
<img alt="Profile" data-alt="A professional portrait of a young Nigerian man with a friendly expression, wearing a clean white shirt. The background is a soft, out-of-focus urban environment in Aba, bathed in warm afternoon sunlight that aligns with the forest green and brass gold brand colors of Abia State." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVHL8dvnDgTv92Njugi7YmQHoKwWjub-_rR_u5nbrRJafBSQEoll99JCSGww9dHW4I-YRoF__sKZ_y55D2tsG3Ngi6Low-li5v_Kzme2WFHchwyT6vjUBmjOTAwnNpnB193LLVLUX0yTuthcfUrYpVsGK2NfkJsDlStrybJQOriL3b6Q1_Tmui4kePQMapuvqXEOlDXxwWmyz-CL_mLA1APtQ3vD3UYKUoLA1WxFfWoIyeZ26UDxpceJQvW4jL9Ov_FW2-mMV8NOY"/>
</div>
</div>
</div>
</header>
<main className="pt-20 pb-24 px-margin-mobile max-w-max-width mx-auto space-y-6">
{/*  Hero Section / Identity  */}
<section className="space-y-2">
<h2 className="font-headline-md text-headline-md text-forest-green">GADA Portal</h2>
<p className="font-body-md text-on-surface-variant">Empowering Aba residents through digital governance and rapid urban renewal.</p>
</section>
{/*  Civic Pulse (Bento Grid)  */}
<section className="bento-grid">
{/*  Report Issue (Primary Action)  */}
<div className="col-span-2 bg-forest-green text-on-primary p-5 rounded-xl shadow-sm relative overflow-hidden active:scale-[0.98] transition-transform">
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-4xl" data-icon="report_problem">report_problem</span>
<span className="bg-primary-container text-on-primary-container px-2 py-1 rounded text-caption font-label-md">LIVE REPUTATION</span>
</div>
<h3 className="font-headline-md text-headline-md mb-1">Report Urban Issue</h3>
<p className="text-on-primary-container opacity-90 text-caption font-body-md">Roads, waste, or infrastructure damage reporting.</p>
</div>
{/*  Subtle texture  */}
<div className="absolute -right-4 -bottom-4 opacity-10">
<span className="material-symbols-outlined text-9xl" data-icon="location_city">location_city</span>
</div>
</div>
{/*  Renewal Plan  */}
<div className="bg-state-white border border-outline-variant p-4 rounded-xl flex flex-col justify-between active:scale-[0.98] transition-transform">
<span className="material-symbols-outlined text-forest-green" data-icon="architecture">architecture</span>
<div>
<h4 className="font-headline-md text-headline-md-mobile text-[18px] leading-tight mt-2">Aba 2025</h4>
<p className="text-caption text-on-surface-variant font-body-md">Urban Masterplan</p>
</div>
</div>
{/*  Project Tracker  */}
<div className="bg-surface-container-low border border-outline-variant p-4 rounded-xl flex flex-col justify-between active:scale-[0.98] transition-transform">
<span className="material-symbols-outlined text-eagle-red" data-icon="potted_plant">potted_plant</span>
<div>
<h4 className="font-headline-md text-headline-md-mobile text-[18px] leading-tight mt-2">Green Spaces</h4>
<p className="text-caption text-on-surface-variant font-body-md">12 active projects</p>
</div>
</div>
</section>
{/*  Ongoing Renewal Projects (Horizontal Scroll)  */}
<section className="space-y-3">
<div className="flex justify-between items-end">
<h3 className="font-headline-md text-headline-md-mobile border-l-4 border-brass-gold pl-3">Active Works</h3>
<a className="font-label-md text-label-md text-forest-green" href="#">View Map</a>
</div>
<div className="flex overflow-x-auto gap-4 pb-2 hide-scrollbar">
{/*  Project Card 1  */}
<div className="min-w-[280px] bg-state-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="h-32 bg-surface-container-highest relative">
<img alt="Port Harcourt Road Reconstruction" className="w-full h-full object-cover" data-alt="A cinematic high-angle shot of a major road reconstruction project in a bustling West African city center. Workers in high-visibility vests and orange hard hats are operating modern paving machinery. The scene is bright and optimistic, emphasizing progress and high-quality civil engineering infrastructure development in Abia State." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCijYfezhxlWKG5PyO-h0g2GWOG8I2cEN_Mbj0DdTtGy7eijpg1CVPwiIan8BEM9eWJveRrRIMMZFkPvrhJaME3PLdaISTBqAYgjI5wkSF3qNXLc2ii80Imc3RKSY3V7hxuthzVEpS0S2HVU5YpC417VpWVhZFgNTXjEyiDuUTXzVlwJFMW0u7LO3TBhqDr3dlN8cPzC0sKKNVWjvjOvRGJPhAG_JMFIy2EWzY2jO2rcD0qrNW8WQEcaBrIqP9rDKifJzUTZ0nsHN0"/>
<div className="absolute top-2 right-2 bg-forest-green text-state-white px-2 py-1 rounded-full text-[10px] font-bold">75% COMPLETE</div>
</div>
<div className="p-3">
<h5 className="font-headline-md text-[16px]">Port Harcourt Rd Phase 1</h5>
<p className="text-caption text-on-surface-variant font-body-md mt-1">Dualization and drainage works near Flyover.</p>
</div>
</div>
{/*  Project Card 2  */}
<div className="min-w-[280px] bg-state-white border border-outline-variant rounded-xl overflow-hidden shadow-sm">
<div className="h-32 bg-surface-container-highest relative">
<img alt="Ariaria Market Digitalization" className="w-full h-full object-cover" data-alt="A clean, modern office interior with professional government officials discussing urban plans over large digital tablets and architectural blueprints. The aesthetic is corporate and modern with forest green accents. Large windows show a hint of a modernizing city skyline under clear blue skies." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6UZH0V-ftfIhknhmlbIZofhR1FOeLihxdzZaeGb95odWhu-H27L3vbFDT7HKnKClImCx9Ta8NB2tmZm00PrFz7PqQUvAcUzaauaWv8PnAdzhaYPX5wtztIns-KcYUD9BRiBd8jcPE1LPDnNCrs8tgFIiPDhVt8eXzV7qPHquT0vciRYMrKpyaf8SUcY9IFH_WzemDhzGfFLiwkVYtdQBghCuwdlz3YDRcVqnfEtjaT2y0l8M0vYKLhuJ07rZ1kdznAkt38MfG2c4"/>
<div className="absolute top-2 right-2 bg-brass-gold text-on-secondary-container px-2 py-1 rounded-full text-[10px] font-bold">PLANNING</div>
</div>
<div className="p-3">
<h5 className="font-headline-md text-[16px]">Ariaria Market Digital Hub</h5>
<p className="text-caption text-on-surface-variant font-body-md mt-1">Smart commerce integration for SME traders.</p>
</div>
</div>
</div>
</section>
{/*  Services Quick Access  */}
<section className="space-y-3">
<h3 className="font-headline-md text-headline-md-mobile border-l-4 border-brass-gold pl-3">Aba Services</h3>
<div className="grid grid-cols-1 gap-3">
{/*  Service Item  */}
<button className="flex items-center gap-4 p-4 bg-state-white border border-outline-variant rounded-lg active:bg-surface-container-low transition-colors text-left">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined" data-icon="electric_bolt">electric_bolt</span>
</div>
<div className="flex-1">
<div className="font-headline-md text-[16px]">Geometric Power Support</div>
<p className="text-caption text-on-surface-variant">Request meter or report power outage.</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant" data-icon="chevron_right">chevron_right</span>
</button>
{/*  Service Item  */}
<button className="flex items-center gap-4 p-4 bg-state-white border border-outline-variant rounded-lg active:bg-surface-container-low transition-colors text-left">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
</div>
<div className="flex-1">
<div className="font-headline-md text-[16px]">Levy Payments</div>
<p className="text-caption text-on-surface-variant">Pay trade licenses and tenement rates.</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant" data-icon="chevron_right">chevron_right</span>
</button>
{/*  Service Item  */}
<button className="flex items-center gap-4 p-4 bg-state-white border border-outline-variant rounded-lg active:bg-surface-container-low transition-colors text-left">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined" data-icon="health_and_safety">health_and_safety</span>
</div>
<div className="flex-1">
<div className="font-headline-md text-[16px]">ASCHIA Health</div>
<p className="text-caption text-on-surface-variant">Find the nearest primary healthcare center.</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</section>
{/*  Community Feed Overlay Preview  */}
<section className="glass-card p-5 rounded-2xl border-forest-green/20 relative overflow-hidden">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-eagle-red animate-pulse"></span>
<span className="font-label-md text-label-md text-on-surface-variant">ABA COMMUNITY FEED</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant" data-icon="groups">groups</span>
</div>
<div className="space-y-4">
<div className="flex gap-3 items-start">
<div className="w-8 h-8 rounded-full bg-primary-container flex-shrink-0"></div>
<div>
<p className="text-[13px] font-body-md"><span className="font-bold">Engr. Kalu</span> reported a drainage blockage at Umungasi.</p>
<p className="text-[11px] text-on-surface-variant font-caption">2 minutes ago</p>
</div>
</div>
<div className="flex gap-3 items-start opacity-70">
<div className="w-8 h-8 rounded-full bg-secondary-fixed flex-shrink-0"></div>
<div>
<p className="text-[13px] font-body-md"><span className="font-bold">Grace O.</span> shared a photo of the new street lights.</p>
<p className="text-[11px] text-on-surface-variant font-caption">15 minutes ago</p>
</div>
</div>
</div>
<button className="w-full mt-4 py-2 border border-forest-green text-forest-green rounded font-label-md active:bg-forest-green active:text-white transition-all">
                Join Conversation
            </button>
</section>
</main>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-full bg-surface-container-lowest border-t border-outline-variant shadow-sm">
<div className="flex justify-around items-center h-20 w-full px-base pb-safe">
{/*  Active Tab  */}
<button className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 duration-200">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 duration-200">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
<span className="font-label-md text-label-md">Hub</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 duration-200">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-label-md">Profile</span>
</button>
</div>
</nav>
{/*  Contextual FAB for Reporting  */}
<button className="fixed right-6 bottom-24 w-14 h-14 rounded-full bg-forest-green text-on-primary shadow-xl flex items-center justify-center active:scale-90 transition-transform z-40">
<span className="material-symbols-outlined text-3xl" data-icon="add_a_photo">add_a_photo</span>
</button>


      </div>
    </>
  );
}
