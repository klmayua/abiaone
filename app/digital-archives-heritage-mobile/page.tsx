"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .archive-gradient {\n            background: linear-gradient(180deg, rgba(0, 77, 40, 0.05) 0%, rgba(255, 255, 255, 0) 100%);\n        }\n        .bento-card {\n            border: 1px solid #E2E8F0;\n            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n        }\n        .bento-card:active {\n            transform: scale(0.98);\n            border-color: #D4AF37;\n        }\n        .brass-accent {\n            border-bottom: 2px solid #D4AF37;\n            display: inline-block;\n        }\n        body {\n            -webkit-tap-highlight-color: transparent;\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md text-body-md pb-24">
        
{/*  Top App Bar  */}
<header className="fixed top-0 left-0 w-full z-50 bg-background dark:bg-on-background border-b border-outline-variant dark:border-slate-gray">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full max-w-max-width mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green dark:text-primary-fixed-dim" data-icon="account_balance">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green dark:text-primary-fixed-dim tracking-tight">ABIA ONE</h1>
</div>
<button className="text-forest-green dark:text-primary-fixed-dim hover:opacity-80 transition-opacity active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</div>
</header>
<main className="pt-20 px-margin-mobile max-w-md mx-auto">
{/*  Hero Section  */}
<section className="mt-4 mb-8">
<div className="relative rounded-xl overflow-hidden h-48 mb-4 shadow-sm group">
<img alt="Heritage Cover" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A majestic aerial view of a historic Nigerian government building with colonial architecture, surrounded by lush tropical greenery and palm trees. The lighting is warm golden hour, casting soft long shadows. The atmosphere is dignified and serene, with a color palette of deep forest greens, weathered stone grays, and rich earthy browns, reflecting the institutional authority of a state repository." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxIaI3GJUFpdnhLFBVSjNjofAoztA684nUhoUMfPVd-s8hGzbTWAusORbMsL0UDwuvHyRbaXLbvCJZJgAhLTmOrKiWikUZU9BUri22r0IeMojYX_kXIL1ahXBhHA_JDnzVMg-WevzBP1qRh3o4ANVlFIhil-Et948yMto4RwdOstdByuXwTXUKIpkm74SKv3welNcjLdQKlkeqzOEBILRJWr7fvhvr_jOftbVvo5kpYoJ0rWV0lnaCWxP0G_EC7TbI8FJQG3WhRoI"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
<h2 className="font-headline-md text-headline-md text-state-white mb-1">State Heritage</h2>
<p className="text-state-white/80 font-body-md text-sm">Preserving the legacy of God's Own State for generations.</p>
</div>
</div>
</section>
{/*  Search Bar  */}
<div className="mb-8">
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="w-full pl-12 pr-4 py-3 bg-state-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none shadow-sm" placeholder="Search the archives..." type="text"/>
</div>
</div>
{/*  Quick Access Bento Grid  */}
<section className="grid grid-cols-2 gap-4 mb-10">
{/*  Voice of Elders  */}
<div className="col-span-2 bento-group">
<div className="bento-card bg-state-white p-4 rounded-xl flex flex-col gap-3 relative overflow-hidden group">
<div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-8xl" data-icon="settings_voice">settings_voice</span>
</div>
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-forest-green bg-surface-container p-2 rounded-lg" data-icon="record_voice_over">record_voice_over</span>
<span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">New Stories</span>
</div>
<div>
<h3 className="font-headline-md text-lg text-forest-green mb-1">Voice of Elders</h3>
<p className="text-sm text-on-surface-variant leading-tight">Oral histories and traditional folklore from our community sages.</p>
</div>
<button className="mt-2 text-forest-green font-bold text-xs flex items-center gap-1 uppercase tracking-widest group-active:translate-x-1 transition-transform">
                        Listen Now <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
{/*  Historical Documents  */}
<div className="bento-card bg-state-white p-4 rounded-xl flex flex-col gap-2">
<span className="material-symbols-outlined text-tertiary" data-icon="description">description</span>
<h3 className="font-bold text-forest-green text-sm">Documents</h3>
<p className="text-[11px] text-on-surface-variant">4,200+ digitized colonial and post-independence records.</p>
</div>
{/*  Hall of Fame  */}
<div className="bento-card bg-state-white p-4 rounded-xl flex flex-col gap-2">
<span className="material-symbols-outlined text-brass-gold" data-icon="workspace_premium">workspace_premium</span>
<h3 className="font-bold text-forest-green text-sm">Hall of Fame</h3>
<p className="text-[11px] text-on-surface-variant">Honoring the pioneers and icons of Abia State's history.</p>
</div>
</section>
{/*  Featured Story: Commemorative Section  */}
<section className="mb-10">
<div className="flex items-center justify-between mb-4">
<h2 className="font-headline-md text-lg text-forest-green brass-accent">Spotlight Exhibit</h2>
<span className="text-xs text-on-surface-variant font-label-md">VOL. 024</span>
</div>
<div className="bg-forest-green text-state-white rounded-xl p-6 shadow-lg relative overflow-hidden">
<div className="relative z-10">
<p className="text-[10px] uppercase tracking-widest text-primary-fixed mb-2 font-bold">Indigenous Craft Series</p>
<h3 className="font-headline-md text-xl mb-3">The Akwete Weavers: A Legacy in Every Thread</h3>
<p className="text-sm text-surface-container-low mb-6 opacity-90 leading-relaxed">Explore the intricate geometry and spiritual symbolism of the traditional Akwete fabric, a heritage spanning centuries of Ibo artistry.</p>
<div className="flex items-center gap-4">
<button className="bg-brass-gold text-forest-green px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider active:scale-95 transition-transform">View Gallery</button>
<button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider group">
<span className="material-symbols-outlined" data-icon="play_circle">play_circle</span>
                            Narrative
                        </button>
</div>
</div>
<div className="absolute -right-12 -bottom-12 w-48 h-48 bg-brass-gold/20 rounded-full blur-3xl"></div>
</div>
</section>
{/*  Audio Player Fragment (Sticky Preview)  */}
<div className="mb-10 bg-state-white border border-outline-variant p-4 rounded-2xl flex items-center gap-4 shadow-sm">
<div className="w-12 h-12 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
<img alt="Elder" className="w-full h-full object-cover" data-alt="A close-up portrait of an elderly African man with deeply lined skin, reflecting a lifetime of wisdom and history. He wears traditional Igbo attire including a red cap. The background is a soft-focus library or office setting with warm wood tones. The image style is professional portrait photography with high detail and a cinematic, respectful mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAls0QZ015AvpfN5mT2CVS1T2zduyRumOiY_aQkzygPB1600FSch6eN8mgAON_PkQ2m1vvCigaSOFPK2nktizFkchNRTD_pi1sdGS31kNg-jVblQzR2e_UnsJ0dEp3MdcXWIFxxEyG8HMhiI9NAJ1wijTUx5qOjrSkY7wZZq9bUmf7u63O7pkx5DsJHhYmGR3aCU8fjhk7unpTwm8E6lXPesUtpQoYJCpwvEwi5KLMLA2ge3Ogcl_RUMLI2GGBPHij7w3Xx6PKlGd0"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-xs font-bold text-forest-green truncate">Mazi Okoro: The Aba Uprising</h4>
<div className="flex items-center gap-1 mt-1">
<div className="h-1 flex-1 bg-surface-container rounded-full overflow-hidden">
<div className="w-1/3 h-full bg-brass-gold"></div>
</div>
<span className="text-[9px] text-on-surface-variant font-label-md">02:14 / 08:45</span>
</div>
</div>
<button className="w-10 h-10 bg-forest-green text-state-white rounded-full flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined" data-icon="play_arrow">play_arrow</span>
</button>
</div>
{/*  Hall of Fame Scroll  */}
<section className="mb-12 overflow-hidden">
<h2 className="font-headline-md text-lg text-forest-green mb-6 brass-accent">Hall of Fame</h2>
<div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-margin-mobile px-margin-mobile">
{/*  Hall of Fame Card 1  */}
<div className="flex-shrink-0 w-40 text-center group">
<div className="w-32 h-32 mx-auto rounded-full p-1 border-2 border-dashed border-brass-gold mb-3 transition-transform group-hover:rotate-12">
<div className="w-full h-full rounded-full overflow-hidden">
<img alt="Inductee" className="w-full h-full object-cover" data-alt="A black and white archival-style studio portrait of a distinguished African statesman from the mid-20th century, wearing a formal suit and spectacles. The aesthetic is grainy and vintage, evoking a sense of historical importance and reverence. The lighting is classic three-point lighting typical of professional mid-century photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZx9BXgYwQM7H05lUyLiS25aagzYyOPzrmaSHX-5dkHfjX2U_v2NB0N1Jm9M-P0_ZzD4KGQmDXPhUDbKNUdln25q34Q2ai6_uC8xdM3Cwjgsdk84TwZtL2maROgR2uXMuSIBEj8kdK10n9CCEzZogQZc07LIXvGl03oWcPJRgcvSIIoxkwxPpCMW4VRSicEJQtwE_kmRUEIDclQibOz-7kyK5yl1f_g9RmN8Ixz4zqjYowfS3Z_ACA426uKXDdiShRqbtJFXrFuiU"/>
</div>
</div>
<p className="text-xs font-bold text-forest-green">Dr. M.I. Okpara</p>
<p className="text-[10px] text-on-surface-variant">The Visionary Leader</p>
</div>
{/*  Hall of Fame Card 2  */}
<div className="flex-shrink-0 w-40 text-center group">
<div className="w-32 h-32 mx-auto rounded-full p-1 border-2 border-dashed border-brass-gold mb-3 transition-transform group-hover:rotate-12">
<div className="w-full h-full rounded-full overflow-hidden">
<img alt="Inductee" className="w-full h-full object-cover" data-alt="A profile photograph of a celebrated female educator in Nigeria, with her hair neatly styled and wearing an elegant traditional dress. The setting is a sunlit garden, and the lighting is high-key and optimistic. The overall aesthetic is professional yet warm, symbolizing progress and cultural pride." src="https://lh3.googleusercontent.com/aida-public/AB6AXuASbLpkOXQvWt62h2aMXHnifwQlTjXqVTjrFrRhl1Bb5FaLUGpEl0WfzX_fnrD5ttskNj8YfUpPJHJfL_djr1MMqI0Ec2zAkh_ux3vhMvBUtqomA-zQ5Sxzjs8kOkhiTytidOQpoPfAfgbcs0Xrk9UkJn5IP6Jo377qsoLHeYRUp1F0643Qt6r_o2oQaEkcKy6w-KC7h42LR3DSO1igDaxzp0JW_ymrv9OX-W2Bo631zuOQn8dC2134Z0mf_u3fDTym9RHM7DXcB58"/>
</div>
</div>
<p className="text-xs font-bold text-forest-green">Mrs. Victoria Aguiyi</p>
<p className="text-[10px] text-on-surface-variant">Pioneer Educator</p>
</div>
{/*  Hall of Fame Card 3  */}
<div className="flex-shrink-0 w-40 text-center group">
<div className="w-32 h-32 mx-auto rounded-full p-1 border-2 border-dashed border-brass-gold mb-3 transition-transform group-hover:rotate-12">
<div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-surface-container">
<span className="material-symbols-outlined text-4xl text-outline-variant" data-icon="add_circle">add_circle</span>
</div>
</div>
<p className="text-xs font-bold text-outline">Nominate</p>
<p className="text-[10px] text-on-surface-variant">Next Hero</p>
</div>
</div>
</section>
</main>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-full bg-surface-container-lowest dark:bg-on-background border-t border-outline-variant dark:border-slate-gray shadow-sm">
<div className="flex justify-around items-center h-20 w-full px-base pb-safe max-w-max-width mx-auto">
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:bg-surface-variant dark:hover:bg-on-surface-variant transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md mt-1">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:bg-surface-variant dark:hover:bg-on-surface-variant transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-label-md mt-1">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-primary-container text-on-secondary-container dark:text-on-primary-container rounded-full px-4 py-1 active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="grid_view" style={{"fontVariationSettings":"'FILL' 1"}}>grid_view</span>
<span className="font-label-md text-label-md mt-1">Hub</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:bg-surface-variant dark:hover:bg-on-surface-variant transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-label-md mt-1">Profile</span>
</a>
</div>
</nav>
{/*  Micro-interaction script  */}


      </div>
    </>
  );
}
