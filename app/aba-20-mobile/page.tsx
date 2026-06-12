"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            display: inline-block;\n            line-height: 1;\n            text-transform: none;\n            letter-spacing: normal;\n            word-wrap: normal;\n            white-space: nowrap;\n            direction: ltr;\n        }\n        ::-webkit-scrollbar { width: 4px; }\n        ::-webkit-scrollbar-track { background: transparent; }\n        ::-webkit-scrollbar-thumb { background: #6f7a70; border-radius: 10px; }\n        .glass-panel {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(10px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden pb-24">
        
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-outline-variant">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full max-w-max-width mx-auto">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-forest-green" data-icon="account_balance">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green tracking-tight">ABIA ONE</h1>
</div>
<button className="hover:opacity-80 transition-opacity active:scale-95 transition-transform">
<span className="material-symbols-outlined text-forest-green" data-icon="notifications">notifications</span>
</button>
</div>
</header>
<main className="mt-16 px-margin-mobile pt-6 space-y-6">
{/*  Hero Section: Aba 2.0 Pulse  */}
<section className="relative h-48 rounded-xl overflow-hidden shadow-sm">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="A futuristic aerial drone view of a modern urban planning model for a Nigerian city, specifically Aba. The scene features lush green boulevards, structured circular interchanges, and high-tech modular commercial buildings under a warm sunset. The lighting is crisp and professional, using a primary palette of forest green and brass gold, reflecting a sovereign and data-driven administrative aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg1EM_4PQBamh8nKSzTXZVBikkFE3tGgy7cpugA9bMvJD8V0bY5Q2f0cBE1HCGKKo24Cf2eNdpc2b-jEblU8W-bCmsZO7P-gQf99egR3ZqMH8EFmCeuxl8Z9l4yFLapv-npyp3fBDl8yaJhQHeBz5JlFTKt04uLGaxsjHE2QQq9GT8u_1PnjeKL7YWIvKnou_j6jtOda86Uvlhoh8zoYZ1CfPx0sgn_HUS_HURrraO-PQm0oC-LQgOAop7QIbCutXWnUh7M6pqXQk" />
<div className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-1">
<span className="bg-forest-green text-state-white px-2 py-0.5 rounded-full font-label-md text-[10px] tracking-widest">LIVE TRACKER</span>
<span className="text-state-white/80 font-caption">Aba Urban Renewal Phase II</span>
</div>
<h2 className="font-headline-md text-headline-md text-state-white">Rebuilding the Enyimba City</h2>
</div>
</section>
{/*  Bento Stats Grid  */}
<div className="grid grid-cols-2 gap-4">
<div className="glass-panel p-4 rounded-xl flex flex-col justify-between">
<span className="material-symbols-outlined text-forest-green mb-2" data-icon="construction">construction</span>
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Active Projects</p>
<p className="font-headline-md text-headline-md text-forest-green">42</p>
</div>
</div>
<div className="glass-panel p-4 rounded-xl flex flex-col justify-between">
<span className="material-symbols-outlined text-brass-gold mb-2" data-icon="verified_user">verified_user</span>
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Land Verifications</p>
<p className="font-headline-md text-headline-md text-forest-green">1.2k</p>
</div>
</div>
</div>
{/*  Master Plan Interactive View Trigger  */}
<section className="space-y-3">
<div className="flex items-center justify-between">
<h3 className="font-headline-md text-[20px] text-on-background flex items-center gap-2">
<span className="w-1.5 h-6 bg-brass-gold rounded-full"></span>
                    Interactive Master Plan
                </h3>
<button className="text-forest-green font-label-md text-label-md flex items-center gap-1">
                    Fullscreen <span className="material-symbols-outlined text-sm" data-icon="open_in_full">open_in_full</span>
</button>
</div>
<div className="relative rounded-xl border border-outline-variant overflow-hidden bg-surface-container h-56 group">
{/*  Map Simulation  */}
<img className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 transition-all duration-500" data-alt="A high-resolution satellite map overlay of an urban layout with glowing green and gold vector lines marking new road networks and zoning areas. The aesthetic is modern and clinical, featuring data callouts and clean UI markers over a detailed street-level Nigerian city map. High-tech government infrastructure visualization with high contrast and professional clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgwTvHnn2j6iMLjGMagRu13S-6oOfkprUk1oNTOnizFum78QVRfh2tSGam4blNw94d9DMcirXzm98J6ZVjw2vfCAY8_WqhIosgedGfzbdgNweI7LTSNNaDIQjeXYLJsS8T6i4ry6Hieo5oZoNaSz_rj7-9EJtFIDwb02iVXgi-eJzVFYE81u4JNv3eqKOVQUzV07BGnggsYOkS3zOR4egaPHGq-4OOo2aL5bniYc7icxPPKBGMNf1_D6lumkf76etwZDgY7OTZh_k" />
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-12 h-12 bg-forest-green rounded-full flex items-center justify-center text-state-white animate-pulse">
<span className="material-symbols-outlined" data-icon="map">map</span>
</div>
</div>
<div className="absolute top-4 right-4 bg-state-white/90 p-2 rounded-lg shadow-sm border border-outline-variant flex flex-col gap-2">
<button className="w-8 h-8 flex items-center justify-center border border-slate-gray/20 rounded-md bg-state-white"><span className="material-symbols-outlined text-sm" data-icon="add">add</span></button>
<button className="w-8 h-8 flex items-center justify-center border border-slate-gray/20 rounded-md bg-state-white"><span className="material-symbols-outlined text-sm" data-icon="remove">remove</span></button>
</div>
</div>
</section>
{/*  Digital Land Registry Portal  */}
<section className="glass-panel p-5 rounded-xl border-l-4 border-l-forest-green space-y-4">
<div className="flex items-start justify-between">
<div>
<h3 className="font-headline-md text-headline-md text-on-background">Land Registry</h3>
<p className="font-body-md text-on-surface-variant leading-tight">Instant property title verification and GIS tracking.</p>
</div>
<span className="material-symbols-outlined text-forest-green text-3xl" data-icon="qr_code_scanner">qr_code_scanner</span>
</div>
<div className="space-y-3">
<div className="relative">
<span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
<span className="material-symbols-outlined text-lg" data-icon="search">search</span>
</span>
<input className="w-full pl-10 pr-4 py-3 bg-state-white border border-slate-400 rounded-lg font-body-md focus:ring-1 focus:ring-forest-green focus:border-forest-green transition-all outline-none" placeholder="Enter Certificate of Occupancy (C of O) No." type="text" />
</div>
<button className="w-full py-3 bg-forest-green text-state-white font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
                    Verify Ownership <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="pt-2 flex gap-4 overflow-x-auto pb-1">
<div className="flex-shrink-0 flex items-center gap-2 bg-surface-container px-3 py-2 rounded-full border border-outline-variant">
<span className="material-symbols-outlined text-sm text-forest-green" data-icon="history">history</span>
<span className="text-caption font-medium">Recent: AB/2023/X92</span>
</div>
<div className="flex-shrink-0 flex items-center gap-2 bg-surface-container px-3 py-2 rounded-full border border-outline-variant">
<span className="material-symbols-outlined text-sm text-forest-green" data-icon="history">history</span>
<span className="text-caption font-medium">Recent: AB/2021/Z04</span>
</div>
</div>
</section>
{/*  Project Timeline / Feed  */}
<section className="space-y-4">
<h3 className="font-headline-md text-[20px] text-on-background flex items-center gap-2">
<span className="w-1.5 h-6 bg-brass-gold rounded-full"></span>
                Active Renovations
            </h3>
<div className="space-y-3">
{/*  Project Card 1  */}
<div className="bg-state-white p-4 rounded-xl border border-outline-variant flex gap-4 hover:bg-surface-container transition-colors">
<div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="A construction site with scaffolding and modern architectural beams being integrated into an existing urban facade. The lighting is natural and bright, emphasizing professional development and modern renovation techniques. The overall tone is industrial yet refined, following the Abia One corporate forest green color scheme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDflWyvHoicmKAjD4sziq_VBy6i9yXu9mTeRZVT7pHVTn2dgBrV65XT_ZEaaPB6oS_ycAhisqr-W3rX7lJ_PLGCM50k8djuHMpsCjwe3f_0hM1OQVXZ63aU8IueQtWEtKiXhgLrInDrz3cJsqMqC5Hs5fKGoaXozYHxBLysP7PbVMuarCIZlrrF0Hnpx9g_knv1vBgRaZImW8I5tYMEXbtIIeMvHYMNp5-dEz1PyFY9BoPvd1QODbg8n_s_azSXlwOd4KXwvWFfVAI" />
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<h4 className="font-headline-md text-body-lg text-on-background leading-none">Ariaria Market Hub</h4>
<span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full font-label-md text-[10px] border border-green-200">85% DONE</span>
</div>
<p className="text-caption text-on-surface-variant mt-2 line-clamp-2">Modernization of Drainage and Power Grid Infrastructure in A-Zone.</p>
<div className="mt-2 flex items-center gap-4">
<div className="flex items-center gap-1 text-caption text-on-surface-variant">
<span className="material-symbols-outlined text-xs" data-icon="calendar_today">calendar_today</span>
                                Oct 2024
                            </div>
<div className="flex items-center gap-1 text-caption text-on-surface-variant">
<span className="material-symbols-outlined text-xs" data-icon="groups">groups</span>
                                1.2k Jobs
                            </div>
</div>
</div>
</div>
{/*  Project Card 2  */}
<div className="bg-state-white p-4 rounded-xl border border-outline-variant flex gap-4 hover:bg-surface-container transition-colors">
<div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Modern geometric facade of a newly renovated commercial office building in an African urban center. Reflections of clouds on glass windows, clean lines, and a touch of brass gold architectural trim. Professional and high-contrast photography with a focus on modern governance and urban renewal aesthetics." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8skGZW7i2k_N_tj6itAhWqSgJy7EfQ1ByWK0MWtt7umBZiR3WQ6nTXNt15q7kDAuWxkWmq4IIbLhyA5Z1kWX0iGaCPquMi2LMvUsIFSStwBMTzLeB13al9Ra4mJ9tb3ilA85Z5F2_S0tDuUdj7Md7aYeXvdZxRrkuno_lQcQsEKo3m9YAujL8B0IiRFUFJSB5FN299PmgqKoiKo_MyBkhwr-s5NOQ9yX0N5Xf0qRXGlor5y8i4uxo0W8T9LCy4CoF7Lrre5423A4" />
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<h4 className="font-headline-md text-body-lg text-on-background leading-none">Osisioma Flyover Ext.</h4>
<span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full font-label-md text-[10px] border border-yellow-200">PLANNING</span>
</div>
<p className="text-caption text-on-surface-variant mt-2 line-clamp-2">Dualization and landscaping of the main northern gateway.</p>
<div className="mt-2 flex items-center gap-4">
<div className="flex items-center gap-1 text-caption text-on-surface-variant">
<span className="material-symbols-outlined text-xs" data-icon="calendar_today">calendar_today</span>
                                Jan 2025
                            </div>
<div className="flex items-center gap-1 text-caption text-on-surface-variant">
<span className="material-symbols-outlined text-xs" data-icon="layers">layers</span>
                                Phase III
                            </div>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  FAB for Quick Report  */}
<button className="fixed bottom-24 right-margin-mobile w-14 h-14 bg-forest-green text-state-white rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform z-40 border-4 border-background">
<span className="material-symbols-outlined" data-icon="add_a_photo">add_a_photo</span>
</button>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-full bg-surface-container-lowest border-t border-outline-variant shadow-sm h-20 px-base pb-safe flex justify-around items-center">
{/*  Hub is active since this is the Urban Renewal Hub  */}
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined mb-1" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined mb-1" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</button>
<button className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined mb-1" data-icon="grid_view" style={{"fontVariationSettings":"'FILL' 1"}}>grid_view</span>
<span className="font-label-md text-label-md">Hub</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined mb-1" data-icon="person">person</span>
<span className="font-label-md text-label-md">Profile</span>
</button>
</nav>


      </div>
    </>
  );
}
