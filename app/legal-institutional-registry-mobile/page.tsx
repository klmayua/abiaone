"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            display: inline-block;\n            line-height: 1;\n            text-transform: none;\n            letter-spacing: normal;\n            word-wrap: normal;\n            white-space: nowrap;\n            direction: ltr;\n        }\n        .hide-scrollbar::-webkit-scrollbar {\n            display: none;\n        }\n        .hide-scrollbar {\n            -ms-overflow-style: none;\n            scrollbar-width: none;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(8px);\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md min-h-screen pb-32">
        
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 bg-background dark:bg-on-background border-b border-outline-variant dark:border-slate-gray">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full max-w-max-width mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green dark:text-primary-fixed-dim" data-icon="account_balance">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green dark:text-primary-fixed-dim tracking-tight">ABIA ONE</h1>
</div>
<button className="active:scale-95 transition-transform hover:opacity-80">
<span className="material-symbols-outlined text-on-surface-variant dark:text-outline-variant" data-icon="notifications">notifications</span>
</button>
</div>
</header>
<main className="pt-20 px-margin-mobile max-w-max-width mx-auto">
{/*  Hero Branding Section  */}
<section className="relative overflow-hidden rounded-xl bg-primary-container mb-6 h-48 flex flex-col justify-end p-6 group">
<div className="absolute inset-0 z-0">

<div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent"></div>
</div>
<div className="relative z-10">
<h2 className="font-headline-md text-headline-md text-on-primary-container mb-1">Legal Registry</h2>
<p className="font-body-md text-on-primary-container/80 max-w-[240px]">Authoritative access to Abia State legal frameworks and institutional data.</p>
</div>
</section>
{/*  Bento Grid: Main Registry Actions  */}
<div className="grid grid-cols-4 gap-4 mb-8">
{/*  Citizen Law Library  */}
<div className="col-span-4 rounded-xl border border-outline-variant bg-state-white p-5 flex flex-col justify-between hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green" data-icon="menu_book">menu_book</span>
</div>
<span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-label-md text-[10px] uppercase tracking-wider">Public Access</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md mb-2">Citizen Law Library</h3>
<p className="font-body-md text-on-surface-variant mb-4">A simplified guide to your rights, state laws, and legislative updates.</p>
<button className="w-full bg-forest-green text-state-white py-3 rounded-lg font-headline-md text-base hover:opacity-90 active:scale-[0.98] transition-all">
                        Explore Library
                    </button>
</div>
</div>
{/*  Legal Aid Request  */}
<div className="col-span-2 rounded-xl border border-outline-variant bg-surface-container-low p-5 flex flex-col">
<span className="material-symbols-outlined text-eagle-red mb-3" data-icon="gavel" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>gavel</span>
<h4 className="font-headline-md text-lg mb-1 leading-tight">Legal Aid Portal</h4>
<p className="font-caption text-on-surface-variant mb-4 flex-grow">Request legal assistance and state-funded mediation.</p>
<button className="text-forest-green font-headline-md text-sm flex items-center gap-1 group">
                    Apply Now <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
{/*  MDA Registry  */}
<div className="col-span-2 rounded-xl border border-outline-variant bg-surface-container-low p-5 flex flex-col">
<span className="material-symbols-outlined text-brass-gold mb-3" data-icon="corporate_fare" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>corporate_fare</span>
<h4 className="font-headline-md text-lg mb-1 leading-tight">MDA Registry</h4>
<p className="font-caption text-on-surface-variant mb-4 flex-grow">Verified list of Ministries, Departments, and Agencies.</p>
<button className="text-forest-green font-headline-md text-sm flex items-center gap-1 group">
                    View Registry <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
{/*  Featured Institutional Assets  */}
<section className="mb-8">
<div className="flex justify-between items-end mb-4 px-1">
<h3 className="font-headline-md text-xl">Legal Frameworks</h3>
<a className="font-label-md text-forest-green text-xs" href="#">View All</a>
</div>
<div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 -mx-margin-mobile px-margin-mobile">
{/*  Framework Card 1  */}
<div className="min-w-[260px] rounded-xl overflow-hidden border border-outline-variant bg-state-white shadow-sm">
<div className="h-32 w-full relative">
<img className="w-full h-full object-cover" data-alt="A detailed close-up of an old leather-bound legal book and a wooden judge's gavel resting on a mahogany desk. The lighting is dramatic and academic, utilizing soft side-lighting to highlight the textures of the leather and the polished wood. The background is a blurred library with thousands of books, conveying a sense of deep history, institutional trust, and authoritative knowledge in a professional light-mode aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-nJ2BBfMfAkzTzWGpknqNQCpgdOEPLeYcV5Q6NNjPgkD1H-JskAZRikQTPGWj4_mJBjP2Mbi3Zuz_vMX_DXD9rk-w_dsxSy0f-aMDc8_3Muz3VBC8dwASKCbzyDNC1bC8aI4JSAtnV6HiGrPkMJXOTwHWgAIPhPTc6YrfdHAS15DekAL3iwzPerWUeoPdfS73eyVg3tbqun34glAKBdE8aoM_GpZ9VU_ckpUlAoOBDqI1BkgegKfwUKf2zErAQ1AT1p3oZ697RhU"/>
<div className="absolute top-2 right-2 bg-state-white/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold text-forest-green">LATEST</div>
</div>
<div className="p-4">
<h5 className="font-headline-md text-sm mb-2 line-clamp-1">Economic Development Act 2024</h5>
<p className="font-caption text-on-surface-variant mb-3 line-clamp-2">Understanding the incentives and regulations for new state investors and local entrepreneurs.</p>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-base text-outline" data-icon="picture_as_pdf">picture_as_pdf</span>
<span className="font-caption text-xs text-outline">PDF Document • 4.2MB</span>
</div>
</div>
</div>
{/*  Framework Card 2  */}
<div className="min-w-[260px] rounded-xl overflow-hidden border border-outline-variant bg-state-white shadow-sm">
<div className="h-32 w-full relative">
<img className="w-full h-full object-cover" data-alt="A high-contrast photograph of a formal signing ceremony with a silver fountain pen resting on a crisp white legal document. The composition is clean and modern, featuring bright natural sunlight from a large window reflecting off the white paper. The color palette is dominated by professional greys, deep forest greens, and metallic highlights, creating a mood of transparency, official documentation, and modern governance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABZVMdfhuPERW9ot5WzjwzG9oQyDcRstLFGENrZf99_sf8UjP5aMGa0uW9C0YlHTUVpPiwutXNG1q7PmUbZD0LDpQsd78vcclLP6sndNXGyVUZJy85GuEpTSppXxAEZh9ban-4Gn5lOQ_ijq7levSmp7kc2b2HJ03hewEn6n6maX2577lxC5oQNWKwu1w_ILVBkQOb5O1RaeQT44tz_k9_qLsjmwK7aBoBZeiqxxi1Q-NjkuB0TCVt_5UjEYr2u66i9KR2dV4NoDE"/>
</div>
<div className="p-4">
<h5 className="font-headline-md text-sm mb-2 line-clamp-1">Civil Rights &amp; Protection Bill</h5>
<p className="font-caption text-on-surface-variant mb-3 line-clamp-2">A comprehensive guide to civil liberties and state protection mechanisms for residents.</p>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-base text-outline" data-icon="picture_as_pdf">picture_as_pdf</span>
<span className="font-caption text-xs text-outline">PDF Document • 2.8MB</span>
</div>
</div>
</div>
</div>
</section>
{/*  Regulatory Timeline / Updates  */}
<section className="mb-8">
<h3 className="font-headline-md text-xl mb-4 px-1">Institutional Alerts</h3>
<div className="space-y-3">
<div className="flex gap-4 p-4 rounded-lg bg-surface-container-high border border-outline-variant/30">
<div className="flex-shrink-0 w-1 bg-brass-gold rounded-full"></div>
<div>
<span className="font-label-md text-[10px] text-brass-gold uppercase">Amendment Notice</span>
<p className="font-body-md text-sm text-on-surface mt-1">Land Use Act regulation updates for commercial zones in Aba North.</p>
<span className="font-caption text-[11px] text-on-surface-variant mt-2 block">Published 2 hours ago</span>
</div>
</div>
<div className="flex gap-4 p-4 rounded-lg bg-surface-container border border-outline-variant/20">
<div className="flex-shrink-0 w-1 bg-forest-green rounded-full"></div>
<div>
<span className="font-label-md text-[10px] text-forest-green uppercase">New Appointment</span>
<p className="font-body-md text-sm text-on-surface mt-1">Registry of MDAs updated with the new Board of Internal Revenue Executives.</p>
<span className="font-caption text-[11px] text-on-surface-variant mt-2 block">Yesterday at 4:15 PM</span>
</div>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-full shadow-sm bg-surface-container-lowest dark:bg-on-background border-t border-outline-variant dark:border-slate-gray">
<div className="flex justify-around items-center h-20 w-full px-base pb-safe">
{/*  Hub is active because it houses the Registry/Library within the ecosystem  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:bg-surface-variant dark:hover:bg-on-surface-variant transition-colors active:scale-90 duration-200" href="/home-mobile">
<span className="material-symbols-outlined mb-1" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:bg-surface-variant dark:hover:bg-on-surface-variant transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined mb-1" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-primary-container text-on-secondary-container dark:text-on-primary-container rounded-full px-4 py-1 active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined mb-1" data-icon="grid_view" data-weight="fill" style={{"fontVariationSettings":"'FILL' 1"}}>grid_view</span>
<span className="font-label-md text-label-md">Hub</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:bg-surface-variant dark:hover:bg-on-surface-variant transition-colors active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined mb-1" data-icon="person">person</span>
<span className="font-label-md text-label-md">Profile</span>
</a>
</div>
</nav>


      </div>
    </>
  );
}
