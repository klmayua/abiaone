"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-panel {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(8px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }\n        ::-webkit-scrollbar {\n            width: 6px;\n        }\n        ::-webkit-scrollbar-track {\n            background: #f1f5ee;\n        }\n        ::-webkit-scrollbar-thumb {\n            background: #bec9be;\n            border-radius: 10px;\n        }\n        ::-webkit-scrollbar-thumb:hover {\n            background: #6f7a70;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-hidden h-screen flex">
        
{/*  SideNavBar Anchor  */}
<aside className="hidden md:flex flex-col h-full py-6 px-4 bg-surface-container-low border-r border-outline-variant w-64 shrink-0">
<div className="mb-8 px-2">
<h1 className="font-headline-md text-headline-md text-forest-green mb-1">State Governance</h1>
<p className="font-label-md text-label-md text-on-surface-variant opacity-70">Abia One OS v2.0</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-forest-green font-bold bg-surface-container-highest rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Command Center</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">campaign</span>
<span className="font-label-md text-label-md">Communications</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">agriculture</span>
<span className="font-label-md text-label-md">Agriculture</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">medical_services</span>
<span className="font-label-md text-label-md">Health</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">location_city</span>
<span className="font-label-md text-label-md">GADA</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</a>
</nav>
<div className="mt-auto pt-6 border-t border-outline-variant space-y-1">
<button className="w-full bg-forest-green text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 mb-4 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined">add</span>
<span className="font-label-md text-label-md">New Initiative</span>
</button>
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">cloud_done</span>
<span className="font-label-md text-label-md">System Status</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">help_center</span>
<span className="font-label-md text-label-md">Support</span>
</a>
</div>
</aside>
<div className="flex-1 flex flex-col min-w-0 overflow-hidden">
{/*  TopNavBar Anchor  */}
<header className="flex justify-between items-center px-gutter w-full h-16 bg-surface border-b border-outline-variant shrink-0">
<div className="flex items-center gap-4">
<h2 className="font-headline-md text-headline-md font-bold text-forest-green">Abia One OS</h2>
<div className="h-6 w-px bg-outline-variant"></div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">notifications_active</span>
<span className="font-label-md text-label-md uppercase tracking-widest text-error">Live Response Mode</span>
</div>
</div>
<div className="flex items-center gap-6">
<div className="relative hidden lg:block w-64">
<input className="w-full h-10 pl-10 pr-4 bg-surface-container-low border border-outline-variant rounded-lg text-body-md focus:outline-none focus:border-forest-green" placeholder="Search incidents..." type="text" />
<span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant">search</span>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green transition-colors">notifications</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green transition-colors">account_balance</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green transition-colors">settings</span>
<div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center overflow-hidden">
<img alt="User profile" className="w-full h-full object-cover" data-alt="A professional headshot of a government official wearing a clean white shirt against a neutral professional background. The lighting is bright and crisp, highlighting a sharp and reliable expression suitable for a state OS administrative profile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkJ-qJ_Mqe84ZNwDhcbi9KAdJVNcoZ_WYtJpwFmIshC6EGe5p2jxsRcITTavxeG8yyCRSUe0U1WbQrbXZ4R94or7toVzNjGrY5VA2FQgDeiO8RTgbU8z465wTvwGq5B_2DDQlqY804Eeq8oZJLMdkIW39RtmubIIErkgn2yy7W9ZCMRDjCwrrO4G0kImLGmaKgIJBvV1OoVA0S0dhJ8EAqqlSher2w5dtaMK_ZpdEvIyEe4sICOr-zGopXjLz2XCkF1dTDAcI6Vuc" />
</div>
</div>
</div>
</header>
{/*  Main Workspace  */}
<main className="flex-1 flex flex-row overflow-hidden bg-surface-container-low">
{/*  Feed Section  */}
<section className="flex-1 flex flex-col min-w-0 p-6 overflow-hidden">
<div className="mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-1">Live Incident Feed</h3>
<p className="font-body-md text-on-surface-variant">Real-time state emergency and public safety monitoring.</p>
</div>
<div className="flex flex-wrap items-center gap-2">
<button className="px-4 py-2 bg-surface-container-highest text-on-surface font-label-md text-label-md rounded-lg border border-outline-variant flex items-center gap-2 hover:bg-white transition-colors">
<span className="material-symbols-outlined text-[18px]">filter_list</span> Filters
                        </button>
<button className="px-4 py-2 bg-white text-error font-label-md text-label-md rounded-lg border border-error/20 flex items-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">emergency</span> Critical (4)
                        </button>
<button className="px-4 py-2 bg-white text-secondary font-label-md text-label-md rounded-lg border border-secondary/20 flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">pending_actions</span> Pending (12)
                        </button>
<button className="px-4 py-2 bg-white text-forest-green font-label-md text-label-md rounded-lg border border-forest-green/20 flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">visibility</span> Monitoring (28)
                        </button>
</div>
</div>
{/*  Table/List Integrated View  */}
<div className="flex-1 bg-white rounded-xl border border-outline-variant overflow-hidden flex flex-col shadow-sm">
<div className="grid grid-cols-12 gap-4 px-6 py-4 bg-surface-container text-on-surface-variant font-label-md text-label-md border-b border-outline-variant">
<div className="col-span-1">Severity</div>
<div className="col-span-3">Incident Description</div>
<div className="col-span-2">Location</div>
<div className="col-span-2">Timestamp</div>
<div className="col-span-2">Assigned Unit</div>
<div className="col-span-2 text-right">Actions</div>
</div>
<div className="flex-1 overflow-y-auto divide-y divide-outline-variant">
{/*  Critical Row  */}
<div className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-error/5 transition-colors group">
<div className="col-span-1">
<span className="inline-flex items-center justify-center px-2 py-1 bg-error-container text-on-error-container text-[10px] font-bold rounded-sm uppercase tracking-tighter">Critical</span>
</div>
<div className="col-span-3">
<p className="font-headline-sm font-semibold text-on-surface mb-0.5">Structural Damage - Umuahia North</p>
<p className="text-caption text-on-surface-variant line-clamp-1">Reported structural instability on main bridge artery.</p>
</div>
<div className="col-span-2 flex items-center gap-2">
<span className="material-symbols-outlined text-outline text-[18px]">location_on</span>
<span className="font-label-md text-label-md">Umuahia North</span>
</div>
<div className="col-span-2 font-label-md text-label-md text-on-surface-variant">
                                2 mins ago <br />
<span className="text-caption opacity-60">14:22:15 GMT</span>
</div>
<div className="col-span-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[14px]">engineering</span>
</div>
<span className="font-label-md text-label-md">Rapid Eng-02</span>
</div>
</div>
<div className="col-span-2 flex justify-end gap-2">
<button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-outline-variant transition-all">
<span className="material-symbols-outlined text-on-surface-variant">open_in_new</span>
</button>
<button className="px-3 py-2 bg-error text-white font-label-md text-label-md rounded-lg shadow-sm">Dispatch</button>
</div>
</div>
{/*  Pending Row  */}
<div className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-secondary-container/5 transition-colors">
<div className="col-span-1">
<span className="inline-flex items-center justify-center px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-sm uppercase tracking-tighter">Pending</span>
</div>
<div className="col-span-3">
<p className="font-headline-sm font-semibold text-on-surface mb-0.5">Power Outage - Aba South</p>
<p className="text-caption text-on-surface-variant line-clamp-1">Localized grid failure impacting 4 blocks in Ward 7.</p>
</div>
<div className="col-span-2 flex items-center gap-2">
<span className="material-symbols-outlined text-outline text-[18px]">location_on</span>
<span className="font-label-md text-label-md">Aba South</span>
</div>
<div className="col-span-2 font-label-md text-label-md text-on-surface-variant">
                                12 mins ago <br />
<span className="text-caption opacity-60">14:12:04 GMT</span>
</div>
<div className="col-span-2">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md text-on-surface-variant italic">Unassigned</span>
</div>
</div>
<div className="col-span-2 flex justify-end gap-2">
<button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-outline-variant transition-all">
<span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
</button>
<button className="px-3 py-2 border border-outline-variant text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container transition-colors">Review</button>
</div>
</div>
{/*  Monitoring Row  */}
<div className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-forest-green/5 transition-colors">
<div className="col-span-1">
<span className="inline-flex items-center justify-center px-2 py-1 bg-primary-container/20 text-forest-green text-[10px] font-bold rounded-sm uppercase tracking-tighter">Monitoring</span>
</div>
<div className="col-span-3">
<p className="font-headline-sm font-semibold text-on-surface mb-0.5">Agricultural Sensor Alert</p>
<p className="text-caption text-on-surface-variant line-clamp-1">Low soil moisture detected in Obingwa cluster sector 4.</p>
</div>
<div className="col-span-2 flex items-center gap-2">
<span className="material-symbols-outlined text-outline text-[18px]">location_on</span>
<span className="font-label-md text-label-md">Obingwa</span>
</div>
<div className="col-span-2 font-label-md text-label-md text-on-surface-variant">
                                45 mins ago <br />
<span className="text-caption opacity-60">13:39:22 GMT</span>
</div>
<div className="col-span-2 font-label-md text-label-md">AI-Auto-Bot 4</div>
<div className="col-span-2 flex justify-end gap-2">
<button className="px-3 py-2 border border-outline-variant text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container transition-colors">Manage</button>
</div>
</div>
{/*  Resolved Row  */}
<div className="grid grid-cols-12 gap-4 px-6 py-5 items-center opacity-60 hover:opacity-100 transition-all bg-surface-container-low/50">
<div className="col-span-1">
<span className="inline-flex items-center justify-center px-2 py-1 bg-outline-variant text-on-surface-variant text-[10px] font-bold rounded-sm uppercase tracking-tighter">Resolved</span>
</div>
<div className="col-span-3">
<p className="font-headline-sm font-semibold text-on-surface mb-0.5">Traffic Congestion - Osisioma Flyover</p>
<p className="text-caption text-on-surface-variant line-clamp-1">Heavy flow cleared after minor vehicle breakdown removal.</p>
</div>
<div className="col-span-2 flex items-center gap-2">
<span className="material-symbols-outlined text-outline text-[18px]">location_on</span>
<span className="font-label-md text-label-md">Osisioma</span>
</div>
<div className="col-span-2 font-label-md text-label-md text-on-surface-variant">
                                1 hour ago <br />
<span className="text-caption opacity-60">13:20:00 GMT</span>
</div>
<div className="col-span-2 font-label-md text-label-md">Traffic Mgmt</div>
<div className="col-span-2 flex justify-end gap-2">
<button className="px-3 py-2 border border-outline-variant text-on-surface font-label-md text-label-md rounded-lg flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">history</span> Log
                                </button>
</div>
</div>
</div>
{/*  Table Footer  */}
<div className="px-6 py-4 bg-surface-container-low border-t border-outline-variant flex justify-between items-center">
<span className="text-caption text-on-surface-variant">Showing 4 of 128 active events</span>
<div className="flex items-center gap-1">
<button className="p-1 text-on-surface-variant disabled:opacity-30" disabled={true}>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<span className="font-label-md text-label-md px-2">1 / 32</span>
<button className="p-1 text-on-surface-variant">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</section>
{/*  Live Map Sidebar  */}
<aside className="w-96 p-6 border-l border-outline-variant flex flex-col gap-6 shrink-0 bg-surface">
<div className="flex items-center justify-between">
<h4 className="font-headline-sm font-bold text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-forest-green">map</span> Geo-Cluster View
                    </h4>
<span className="text-[10px] bg-forest-green text-white px-2 py-0.5 rounded-full animate-pulse uppercase">Updating...</span>
</div>
<div className="flex-1 bg-surface-container-highest rounded-xl border border-outline-variant relative overflow-hidden group">
{/*  Placeholder for Map Visualization  */}
<div className="absolute inset-0 bg-slate-200">
<img className="w-full h-full object-cover mix-blend-multiply opacity-80" data-alt="A sophisticated satellite style map view of a city area with glowing data overlays. Red glowing circles indicate high-intensity incident clusters, while green dots represent monitoring stations. The style is dark-themed with neon cyan and gold accents to represent a high-tech state monitoring interface." data-location="Abia State, Nigeria" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzkDObva2UqKdiSa2XnlJCFxdJDcb5eYnavSKLp9Kk_lHhLk87iLztKIkfASolYhiJaXZZ3d3cEwrlKKcgVhYt0huefQ9oMIcv2tATu1rl3ucvq2k5ONTbWRWDYz1xvZ2tIhleibqy1ZZ56Wz3S3gEGfDN7GCDsYvthbyrb1Rr1niRYd0i-lsWCkcZvrCH_DSSDte8w-DDSgULetsCAf4gUYh9AImLlUWMiZ-5LM7dN16Cxl9S5dK2l1ZI3pphsQoq38Qf2yXfvkg" />
{/*  Animated "Live" Pulse Points  */}
<div className="absolute top-1/4 left-1/3 w-4 h-4 bg-error rounded-full animate-ping"></div>
<div className="absolute top-1/4 left-1/3 w-3 h-3 bg-error rounded-full"></div>
<div className="absolute top-1/2 right-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
<div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-forest-green rounded-full"></div>
</div>
{/*  Overlay UI for Map  */}
<div className="absolute bottom-4 left-4 right-4 p-3 glass-panel rounded-lg shadow-xl flex flex-col gap-2">
<div className="flex justify-between items-center">
<span className="font-label-md text-label-md text-on-surface">Umuahia Hotspot</span>
<span className="text-caption text-error font-bold">8 Active</span>
</div>
<div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-error w-3/4"></div>
</div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<h5 className="font-label-md text-label-md text-on-surface-variant font-bold uppercase tracking-wider">State Statistics</h5>
<span className="material-symbols-outlined text-outline text-[18px]">info</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="p-4 bg-surface-container border border-outline-variant rounded-lg">
<p className="text-caption text-on-surface-variant">Response Time</p>
<p className="font-headline-md text-headline-md text-forest-green">14.2<span className="text-caption">min</span></p>
<div className="mt-2 text-[10px] text-forest-green flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">trending_down</span> 8% from avg
                            </div>
</div>
<div className="p-4 bg-surface-container border border-outline-variant rounded-lg">
<p className="text-caption text-on-surface-variant">Resolution</p>
<p className="font-headline-md text-headline-md text-slate-gray">92<span className="text-caption">%</span></p>
<div className="mt-2 text-[10px] text-forest-green flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">trending_up</span> 2% this week
                            </div>
</div>
</div>
<div className="p-4 bg-tertiary-container text-white rounded-lg border border-tertiary shadow-lg">
<h6 className="font-label-md text-label-md font-bold mb-2 flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">warning</span> Security Protocol 4
                        </h6>
<p className="text-caption opacity-90 leading-relaxed mb-4">
                            Elevated monitoring state for critical infrastructure in Aba urban sector. Ensure all units maintain level 2 communication parity.
                        </p>
<button className="w-full py-2 bg-white/20 hover:bg-white/30 transition-colors border border-white/20 rounded font-label-md text-label-md">
                            View Protocol Docs
                        </button>
</div>
</div>
</aside>
</main>
{/*  Footer Anchor  */}
<footer className="bg-surface-container h-12 flex justify-between items-center px-gutter border-t border-outline-variant shrink-0">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md font-bold text-slate-gray">Abia One</span>
<span className="text-caption text-on-surface-variant opacity-60">© 2024 Abia State Government | Digital Infrastructure Division</span>
</div>
<div className="flex items-center gap-6">
<a className="text-caption text-on-surface-variant hover:text-forest-green transition-colors" href="#">Privacy Policy</a>
<a className="text-caption text-on-surface-variant hover:text-forest-green transition-colors" href="#">Terms of Service</a>
<a className="text-caption text-on-surface-variant hover:text-forest-green transition-colors font-bold flex items-center gap-1" href="#">
<span className="w-2 h-2 rounded-full bg-forest-green"></span>
                    Security Audit Passed
                </a>
</div>
</footer>
</div>
{/*  Micro-interactions Script  */}


      </div>
    </>
  );
}
