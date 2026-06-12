"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-panel {\n            background: rgba(246, 251, 243, 0.8);\n            backdrop-filter: blur(8px);\n            border: 1px solid #E2E8F0;\n        }\n        .scanline {\n            width: 100%;\n            height: 2px;\n            background: linear-gradient(to right, transparent, #006838, transparent);\n            position: absolute;\n            top: 0;\n            animation: scan 4s linear infinite;\n            z-index: 10;\n        }\n        @keyframes scan {\n            from { top: 0; }\n            to { top: 100%; }\n        }\n        ::-webkit-scrollbar {\n            width: 6px;\n        }\n        ::-webkit-scrollbar-track {\n            background: #f1f5ee;\n        }\n        ::-webkit-scrollbar-thumb {\n            background: #bec9be;\n            border-radius: 10px;\n        }\n        ::-webkit-scrollbar-thumb:hover {\n            background: #006838;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md min-h-screen flex overflow-hidden">
        
{/*  SideNavBar (Authority: JSON)  */}
<aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline flex flex-col py-6 px-4 z-50">
<div className="mb-10 px-2">
<h1 className="font-headline-md text-headline-md text-forest-green font-bold leading-tight">State Governance</h1>
<p className="font-label-md text-label-md text-on-surface-variant opacity-70">Abia One OS v2.0</p>
</div>
<nav className="flex-1 space-y-1">
{/*  Command Center is Active  */}
<a className="flex items-center gap-3 px-3 py-3 text-forest-green dark:text-primary-fixed-dim font-bold bg-surface-container-highest dark:bg-surface-variant rounded-lg transition-all group" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Command Center</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-inverse-surface transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">campaign</span>
<span className="font-label-md text-label-md">Communications</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-inverse-surface transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">agriculture</span>
<span className="font-label-md text-label-md">Agriculture</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-inverse-surface transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">medical_services</span>
<span className="font-label-md text-label-md">Health</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-inverse-surface transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">location_city</span>
<span className="font-label-md text-label-md">GADA</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-on-surface-variant dark:text-outline-variant hover:bg-surface-container dark:hover:bg-inverse-surface transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</a>
</nav>
<div className="mt-auto space-y-4">
<button className="w-full py-3 px-4 bg-forest-green text-white rounded-lg font-label-md flex items-center justify-center gap-2 hover:brightness-110 transition-all">
<span className="material-symbols-outlined text-sm">add</span>
                New Initiative
            </button>
<div className="pt-4 border-t border-outline-variant">
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-forest-green transition-colors" href="#">
<span className="material-symbols-outlined">cloud_done</span>
<span className="font-label-md text-label-md">System Status</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-forest-green transition-colors" href="#">
<span className="material-symbols-outlined">help_center</span>
<span className="font-label-md text-label-md">Support</span>
</a>
</div>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 ml-64 flex flex-col h-screen overflow-hidden">
{/*  TopAppBar (Authority: JSON)  */}
<header className="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline flex justify-between items-center px-gutter w-full h-16 z-40 sticky top-0">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md font-bold text-forest-green">Secure Abia</span>
<div className="hidden md:flex h-6 w-px bg-outline-variant mx-2"></div>
<div className="hidden md:flex items-center gap-6">
<a className="text-forest-green font-bold border-b-2 border-forest-green py-5 font-label-md text-label-md" href="#">Real-Time Ops</a>
<a className="text-on-surface-variant hover:text-forest-green py-5 transition-colors font-label-md text-label-md" href="#">Incident Logs</a>
<a className="text-on-surface-variant hover:text-forest-green py-5 transition-colors font-label-md text-label-md" href="#">Asset Tracking</a>
</div>
</div>
<div className="flex items-center gap-6">
<div className="relative">
<span className="material-symbols-outlined text-on-surface-variant hover:text-forest-green cursor-pointer">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-eagle-red rounded-full"></span>
</div>
<span className="material-symbols-outlined text-on-surface-variant hover:text-forest-green cursor-pointer">account_balance</span>
<span className="material-symbols-outlined text-on-surface-variant hover:text-forest-green cursor-pointer">settings</span>
<div className="w-10 h-10 rounded-full border border-outline overflow-hidden">
<img alt="User profile" className="w-full h-full object-cover" data-alt="A professional headshot of a government official in a sharp, modern suit, set against a blurred background of a clean, technologically advanced office. The lighting is soft and professional, reflecting a high-authority governance environment with a neutral and focused expression." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOvjIaUiZmsEbZT_xZfYN4_DsrklpKNFyIMTsMgUDwZJ3nCM-3UTaqRpnO6GSvWWm8y1_mapbDq66Y1ta-4jhljDNyJV57zpmW9xLKpwHXq3Vjv15ehoQBJXrLAx55q0PKmW33WfsYM4r3--n7pkR3Bmra3tCu2tQHfT06fa9ZqGgRsQXtwAhXrk2vR0gRBymLvgFjmiBkVyQ8UCE95m76mIubwF91MnrXXSVoI14D_Ph26I-PIjSXllchNwjIo--0ipNyFlvkGeY" />
</div>
</div>
</header>
{/*  Command Dashboard Grid  */}
<section className="flex-1 overflow-hidden grid grid-cols-12 p-6 gap-6">
{/*  Left: High-Level Metrics  */}
<div className="col-span-3 flex flex-col gap-6 overflow-y-auto pr-2">
<div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-lg">
<div className="flex items-center justify-between mb-4">
<span className="font-label-md text-on-surface-variant uppercase tracking-wider">System Health</span>
<span className="px-2 py-0.5 bg-primary-fixed text-on-primary-fixed-variant text-[10px] font-bold rounded-sm">NOMINAL</span>
</div>
<div className="space-y-4">
<div>
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-headline-md text-forest-green">99.98%</h3>
<span className="text-caption text-forest-green flex items-center gap-1"><span className="material-symbols-outlined text-xs">arrow_upward</span> 0.02%</span>
</div>
<p className="text-caption text-on-surface-variant uppercase">Uptime Reliability</p>
</div>
<div className="h-1 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-forest-green w-[99.98%]"></div>
</div>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-lg">
<div className="flex items-center justify-between mb-4">
<span className="font-label-md text-on-surface-variant uppercase tracking-wider">Response Index</span>
<span className="material-symbols-outlined text-brass-gold">bolt</span>
</div>
<div>
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-headline-md text-forest-green">4.2 <span className="text-body-md font-normal">mins</span></h3>
<span className="text-caption text-eagle-red flex items-center gap-1"><span className="material-symbols-outlined text-xs">arrow_downward</span> 12s</span>
</div>
<p className="text-caption text-on-surface-variant uppercase">Avg Response Time</p>
</div>
</div>
<div className="flex-1 bg-surface-container-lowest border border-outline-variant p-5 rounded-lg flex flex-col">
<h3 className="font-label-md text-on-surface-variant uppercase mb-4 border-b border-outline-variant pb-2 flex items-center justify-between">
                        Deployment Status
                        <span className="material-symbols-outlined text-sm">groups</span>
</h3>
<div className="space-y-6 flex-1 py-2">
<div className="flex items-center gap-4">
<div className="w-2 h-2 bg-forest-green rounded-full"></div>
<div className="flex-1">
<p className="text-body-md font-medium">Umuahia North</p>
<div className="w-full bg-surface-container h-1 rounded-full mt-1">
<div className="bg-forest-green w-[85%] h-full"></div>
</div>
</div>
<span className="font-label-md">85%</span>
</div>
<div className="flex items-center gap-4">
<div className="w-2 h-2 bg-forest-green rounded-full"></div>
<div className="flex-1">
<p className="text-body-md font-medium">Aba South</p>
<div className="w-full bg-surface-container h-1 rounded-full mt-1">
<div className="bg-forest-green w-[92%] h-full"></div>
</div>
</div>
<span className="font-label-md">92%</span>
</div>
<div className="flex items-center gap-4">
<div className="w-2 h-2 bg-brass-gold rounded-full"></div>
<div className="flex-1">
<p className="text-body-md font-medium">Ohafia Ops</p>
<div className="w-full bg-surface-container h-1 rounded-full mt-1">
<div className="bg-brass-gold w-[64%] h-full"></div>
</div>
</div>
<span className="font-label-md">64%</span>
</div>
<div className="flex items-center gap-4">
<div className="w-2 h-2 bg-forest-green rounded-full"></div>
<div className="flex-1">
<p className="text-body-md font-medium">Bende Patrol</p>
<div className="w-full bg-surface-container h-1 rounded-full mt-1">
<div className="bg-forest-green w-[78%] h-full"></div>
</div>
</div>
<span className="font-label-md">78%</span>
</div>
</div>
<button className="mt-4 w-full py-2 border border-outline text-on-surface-variant font-label-md text-sm hover:bg-surface-container transition-colors">VIEW DETAILED LOGS</button>
</div>
</div>
{/*  Center: Geospatial Intelligence Map  */}
<div className="col-span-6 relative rounded-lg border border-outline-variant overflow-hidden group">
{/*  Map Layer  */}
<div className="absolute inset-0 bg-slate-200">
<img alt="State Map" className="w-full h-full object-cover grayscale opacity-60" data-alt="A highly detailed satellite-style digital map overlay of a metropolitan area, rendered in muted slate grays and deep greens. Glowing data points and semi-transparent vector lines representing traffic flow and infrastructure grids are superimposed on the terrain, creating a sophisticated geospatial intelligence interface." data-location="Abia State, Nigeria" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNLD69D-DjGpmzdXXm4PMYhwbW3J0zHX84eSU7K-U3R3UYNxr9hKY39e-O9HzF0DdNDiJL1-WzJUIANISJEAK7TwOSo4pwas18xjhyMY5CWOp8knCIwRhoNjfmToEgzpmJwmJPS4vs-wFoG_SmqpjSOlUYZ05o9IYCCMSWtdiczBpqRQfh6MbV6ThS558YAyTMuQJJSn8Zb-kOaj8t-kXHgk3pf36P_ZwDD4nNsLD4nozirOuvJ_mbBfH1wtkiDUOOMQC01XaPGqk" />
<div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent pointer-events-none"></div>
</div>
{/*  Animated Scanline  */}
<div className="scanline"></div>
{/*  Map UI Overlays  */}
<div className="absolute top-4 left-4 flex gap-2">
<div className="glass-panel px-3 py-2 flex items-center gap-2 rounded shadow-sm">
<span className="w-2 h-2 bg-forest-green rounded-full animate-pulse"></span>
<span className="font-label-md text-xs uppercase text-slate-gray">Live Tracking: Active</span>
</div>
</div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div className="glass-panel p-4 flex gap-6 rounded-lg shadow-lg max-w-sm">
<div>
<p className="text-[10px] text-on-surface-variant uppercase font-bold mb-1">Active Patrols</p>
<p className="font-headline-md text-forest-green">142</p>
</div>
<div className="w-px bg-outline-variant h-10 self-center"></div>
<div>
<p className="text-[10px] text-on-surface-variant uppercase font-bold mb-1">Alert Points</p>
<p className="font-headline-md text-eagle-red">08</p>
</div>
<div className="w-px bg-outline-variant h-10 self-center"></div>
<div>
<p className="text-[10px] text-on-surface-variant uppercase font-bold mb-1">CCTV Nodes</p>
<p className="font-headline-md text-forest-green">1.2k</p>
</div>
</div>
<div className="flex flex-col gap-2">
<button className="w-10 h-10 bg-surface-container-lowest border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors shadow-md">
<span className="material-symbols-outlined">add</span>
</button>
<button className="w-10 h-10 bg-surface-container-lowest border border-outline-variant flex items-center justify-center hover:bg-surface-container transition-colors shadow-md">
<span className="material-symbols-outlined">remove</span>
</button>
<button className="w-10 h-10 bg-forest-green text-white flex items-center justify-center hover:brightness-110 transition-colors shadow-md">
<span className="material-symbols-outlined">my_location</span>
</button>
</div>
</div>
{/*  Interactive Marker Example  */}
<div className="absolute top-1/2 left-1/3 group/marker cursor-pointer">
<div className="relative">
<div className="absolute -inset-4 bg-eagle-red opacity-20 rounded-full animate-ping"></div>
<div className="relative w-4 h-4 bg-eagle-red rounded-full border-2 border-white shadow-lg"></div>
</div>
<div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover/marker:opacity-100 transition-opacity bg-inverse-surface text-inverse-on-surface text-[10px] p-2 whitespace-nowrap rounded pointer-events-none z-20">
<p className="font-bold">INCIDENT #4922</p>
<p>Traffic Congestion - Aba Rd</p>
</div>
</div>
</div>
{/*  Right: Real-time Intelligence Feed  */}
<div className="col-span-3 flex flex-col bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden">
<header className="p-4 border-b border-outline-variant flex items-center justify-between">
<h2 className="font-label-md text-on-surface-variant uppercase flex items-center gap-2">
<span className="material-symbols-outlined text-sm text-forest-green">rss_feed</span>
                        Intelligence Feed
                    </h2>
<span className="text-[10px] bg-surface-container px-2 py-1 rounded">LIVE</span>
</header>
<div className="flex-1 overflow-y-auto p-4 space-y-4">
{/*  Traffic Alert  */}
<div className="border-l-4 border-brass-gold bg-secondary-container/10 p-3 rounded-r-md">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold text-on-secondary-container uppercase">Traffic Alert</span>
<span className="text-[10px] text-on-surface-variant">2m ago</span>
</div>
<p className="text-body-md font-medium leading-snug">Heavy congestion reported at Osisioma Junction due to vehicle breakdown.</p>
<div className="mt-2 flex gap-2">
<button className="text-[10px] text-forest-green font-bold uppercase hover:underline">Deploy Units</button>
<button className="text-[10px] text-on-surface-variant font-bold uppercase hover:underline">Dismiss</button>
</div>
</div>
{/*  Weather Warning  */}
<div className="border-l-4 border-eagle-red bg-error-container/20 p-3 rounded-r-md">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold text-on-error-container uppercase">Weather Warning</span>
<span className="text-[10px] text-on-surface-variant">15m ago</span>
</div>
<p className="text-body-md font-medium leading-snug">Flash flood advisory for Bende areas. Rainfall exceeding 40mm expected within 2 hours.</p>
</div>
{/*  Community Update  */}
<div className="border-l-4 border-forest-green bg-primary-container/10 p-3 rounded-r-md">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold text-on-primary-container uppercase">Community</span>
<span className="text-[10px] text-on-surface-variant">42m ago</span>
</div>
<p className="text-body-md font-medium leading-snug">Successful neighborhood watch meeting concluded in Umuahia North. Integration with digital SOS system complete.</p>
</div>
{/*  Infrastructure  */}
<div className="border-l-4 border-slate-gray bg-surface-container/30 p-3 rounded-r-md">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold text-slate-gray uppercase">Infrastructure</span>
<span className="text-[10px] text-on-surface-variant">1h ago</span>
</div>
<p className="text-body-md font-medium leading-snug">Street light maintenance scheduled for Bank Road (22:00 - 04:00).</p>
</div>
{/*  Another Traffic Alert  */}
<div className="border-l-4 border-brass-gold bg-secondary-container/10 p-3 rounded-r-md">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold text-on-secondary-container uppercase">Traffic Alert</span>
<span className="text-[10px] text-on-surface-variant">2h ago</span>
</div>
<p className="text-body-md font-medium leading-snug">Rerouting successful for state convoy on Ikot Ekpene Road.</p>
</div>
</div>
<footer className="p-3 border-t border-outline-variant bg-surface-container-low">
<div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-2 rounded border border-outline-variant">
<span className="material-symbols-outlined text-sm text-on-surface-variant">search</span>
<input className="bg-transparent border-none focus:ring-0 text-xs flex-1 p-0" placeholder="Filter intelligence..." type="text" />
</div>
</footer>
</div>
</section>
{/*  Footer (Authority: JSON)  */}
<footer className="bg-surface-container dark:bg-surface-dim border-t border-outline-variant dark:border-outline w-full h-12 flex items-center z-40">
<div className="flex justify-between items-center px-gutter w-full max-w-max-width mx-auto">
<div className="flex items-center gap-6">
<span className="font-label-md text-label-md font-bold text-slate-gray">Abia One OS</span>
<span className="font-caption text-caption text-on-surface-variant">© 2024 Abia State Government | Digital Infrastructure Division</span>
</div>
<div className="flex gap-4">
<a className="font-caption text-caption text-on-surface-variant hover:text-forest-green transition-colors" href="#">Privacy Policy</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-forest-green transition-colors" href="#">Terms of Service</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-forest-green transition-colors" href="#">Security Audit</a>
</div>
</div>
</footer>
</main>


      </div>
    </>
  );
}
