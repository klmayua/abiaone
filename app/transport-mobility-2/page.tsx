export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md min-h-screen">
        
{/*  Top Navigation Bar  */}
<nav className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-margin-desktop max-w-max-width mx-auto h-16 sticky top-0 z-50">
<div className="font-headline-md text-headline-md font-bold text-forest-green flex items-center gap-2">
<span className="material-symbols-outlined">account_balance</span>
            ABIA ONE
        </div>
<div className="hidden md:flex items-center space-x-8">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Invest</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Jobs</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Serve</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Verify</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Governance</a>
</div>
<div className="flex items-center space-x-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">language</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">notifications</span>
<button className="bg-forest-green text-on-primary px-6 py-2 rounded-lg font-label-md transition-opacity active:opacity-80">Sign In</button>
</div>
</nav>
{/*  Side Navigation  */}
<aside className="flex flex-col fixed left-0 top-16 h-[calc(100vh-64px)] py-6 px-4 space-y-2 w-64 bg-surface-container-low border-r border-outline-variant hidden lg:flex">
<div className="px-2 mb-6">
<h3 className="font-headline-sm text-headline-md font-bold text-forest-green">Command Center</h3>
<p className="font-label-md text-on-surface-variant text-xs">State Operating System</p>
</div>
<a className="flex items-center space-x-3 p-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md">Dashboard</span>
</a>
<a className="flex items-center space-x-3 p-3 text-on-primary-container bg-primary-container rounded-lg transition-all scale-95" href="#">
<span className="material-symbols-outlined">traffic</span>
<span className="font-label-md">Mobility</span>
</a>
<a className="flex items-center space-x-3 p-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">hail</span>
<span className="font-label-md">Citizen Requests</span>
</a>
<a className="flex items-center space-x-3 p-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-md">Revenue Tracking</span>
</a>
<a className="flex items-center space-x-3 p-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">account_tree</span>
<span className="font-label-md">Project Monitoring</span>
</a>
<div className="mt-auto border-t border-outline-variant pt-4 space-y-2">
<a className="flex items-center space-x-3 p-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-label-md">Support</span>
</a>
<a className="flex items-center space-x-3 p-3 text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">logout</span>
<span className="font-label-md">Sign Out</span>
</a>
</div>
</aside>
{/*  Main Content Area  */}
<main className="lg:ml-64 p-margin-mobile md:p-gutter lg:p-margin-desktop space-y-12">
{/*  Hero Section  */}
<section className="relative h-[500px] rounded-xl overflow-hidden flex items-end">
<div className="absolute inset-0 bg-slate-900/40 z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover" data-alt="A wide-angle, high-resolution aerial photograph of a modern, multi-lane highway interchange in a sun-drenched Nigerian landscape. The infrastructure features crisp, white road markings and professional asphalt finishes, representing institutional order. The lighting is bright and optimistic, emphasizing a modern governance aesthetic with deep forest green accents in the surrounding vegetation. The overall mood is one of technical precision and progress within the Abia One digital ecosystem." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDINEYaevJXJKhC-mxrI_j3aeC-rz9_VfQdlXt9uXmDNkVcTVGohfmRX8EQJFt7tLqjtfPCOPQTBjibsYFrgBo83UtT_v13ESnSJhhCd_h7xSnjqNUatbD1czHSMsd36kk_Iz3Zp6LU8ELIdgsjAnXSYcIAhAVeGTypN_4jCcySgEhybeIZd41AB3P5xBdMrTz8CY5KOEhCCo73o0X4OmAfUYbO8RAnWx7925ixkH3lStyiu0gOvz_riVPvfKMPen-4EIDGP7gXF54"/>
<div className="relative z-20 p-12 text-white max-w-3xl">
<div className="flex items-center space-x-2 mb-4">
<span className="bg-brass-gold text-on-secondary-fixed px-3 py-1 rounded-full font-label-md text-xs">LOGISTICS &amp; TRANSIT</span>
</div>
<h1 className="font-display-lg text-display-lg mb-6 leading-tight">Modernizing the Abia <br/>Mobility Network</h1>
<p className="font-body-lg text-body-lg text-surface-variant max-w-xl">From the urban renewal of Aba to the state-wide digital tracking of infrastructure, we are building a seamless transport ecosystem for a new era of commerce.</p>
</div>
</section>
{/*  KPI Dashboard  */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-forest-green">engineering</span>
<span className="text-forest-green font-label-md text-xs font-bold">+12% vs LY</span>
</div>
<div className="text-on-surface-variant font-label-md uppercase tracking-wider text-xs">Road Maintenance Tracker</div>
<div className="font-headline-lg text-headline-lg mt-1">482 <span className="text-body-md font-normal">KM Active</span></div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-brass-gold">directions_bus</span>
<span className="text-forest-green font-label-md text-xs font-bold">ON TRACK</span>
</div>
<div className="text-on-surface-variant font-label-md uppercase tracking-wider text-xs">Public Transit Usage</div>
<div className="font-headline-lg text-headline-lg mt-1">1.2M <span className="text-body-md font-normal">Trips/mo</span></div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-eagle-red">warning</span>
<span className="text-eagle-red font-label-md text-xs font-bold">2 CRITICAL</span>
</div>
<div className="text-on-surface-variant font-label-md uppercase tracking-wider text-xs">Pothole Reports</div>
<div className="font-headline-lg text-headline-lg mt-1">84 <span className="text-body-md font-normal">Resolved</span></div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-6 rounded-lg">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-forest-green">account_balance_wallet</span>
<span className="text-forest-green font-label-md text-xs font-bold">REVENUE</span>
</div>
<div className="text-on-surface-variant font-label-md uppercase tracking-wider text-xs">Toll &amp; Levy Efficiency</div>
<div className="font-headline-lg text-headline-lg mt-1">94% <span className="text-body-md font-normal">Compliance</span></div>
</div>
</section>
{/*  Bento Grid: Modernization Initiatives  */}
<section className="space-y-6">
<div className="flex justify-between items-end">
<div className="space-y-1">
<h2 className="font-headline-lg text-headline-lg">Urban Renewal &amp; Infrastructure</h2>
<p className="font-body-md text-on-surface-variant">Strategic interventions across the Enyimba City and beyond.</p>
</div>
<button className="border border-forest-green text-forest-green px-6 py-2 rounded-lg font-label-md hover:bg-surface-container-high transition-colors">Download Masterplan</button>
</div>
<div className="bento-grid">
{/*  Aba Urban Renewal (Large)  */}
<div className="col-span-12 lg:col-span-8 glass-card rounded-xl overflow-hidden relative group">
<div className="h-96 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A cinematic, low-angle shot of a newly constructed modern urban street in Aba, featuring clean drainage systems and sophisticated solar-powered streetlights. The scene is captured during the golden hour, casting a warm, professional glow over the pristine asphalt. The architecture of the surrounding commercial buildings suggests a thriving, modernized trade center. The color palette is dominated by the charcoal grey of the road, the deep forest green of institutional branding, and the brass gold of the sunset." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXXyAzViIzDVG7fbL2bLW5urOBx0Xe4hipeqKy_mzF4TCY4n5REU_Qrd4yBYgcGyODXsVVjdffeTNeMR9qEUj5QNW3uzsoBFGpeuPRxMtbZYHcXfSGrK0bXDh1W8iUXPXWVJvOOclCbK1ikx0zjCaw1FotdR6cbRzlFfbCd8dcZkZO_C_CyObwL3H1_l9HBWF-SfjggHK6vMaBWmVfUs3IfLdtmvv6vL6LSg88RrXPv3b4_W08zOPADGTYinlt45vbnSP30q57z_I"/>
<div className="absolute inset-0 bg-gradient-to-t from-forest-green/90 to-transparent"></div>
<div className="absolute bottom-0 p-8 text-white">
<h3 className="font-headline-md text-headline-md mb-2">Aba Urban Renewal Phase II</h3>
<p className="font-body-md max-w-xl opacity-90">Revolutionizing the trade hub of Nigeria through structured road expansions, automated traffic management, and integrated drainage solutions.</p>
</div>
</div>
</div>
{/*  Live Map / Tracking (Square)  */}
<div className="col-span-12 lg:col-span-4 bg-surface-container-high rounded-xl p-8 border border-outline-variant flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<span className="font-label-md text-on-surface-variant font-bold uppercase text-xs">Asset Status</span>
<span className="flex h-3 w-3 bg-forest-green rounded-full animate-pulse"></span>
</div>
<h3 className="font-headline-md text-headline-md mb-4 leading-tight">Live Road Maintenance</h3>
<p className="font-body-md text-on-surface-variant mb-6 text-sm">Real-time geospatial tracking of ongoing road interventions across the 17 LGAs.</p>
</div>
<div className="bg-surface rounded-lg p-4 border border-outline-variant">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-label-md">Faulks Road Project</span>
<span className="text-xs font-label-md text-forest-green">82% Complete</span>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[82%]"></div>
</div>
</div>
</div>
{/*  Public Transit Card  */}
<div className="col-span-12 lg:col-span-5 bg-primary-container text-on-primary-container rounded-xl p-8 flex flex-col justify-between h-[400px]">
<div className="space-y-4">
<span className="material-symbols-outlined text-4xl">directions_bus</span>
<h3 className="font-headline-md text-headline-md">Digital Transit Modernization</h3>
<p className="font-body-md text-on-primary-container/80">Implementation of the 'Abia Transit Card' for cashless commuting and fleet telematics to ensure commuter safety and schedule reliability.</p>
</div>
<button className="bg-brass-gold text-on-secondary-fixed w-full py-4 rounded-lg font-label-md flex items-center justify-center space-x-2">
<span>Register Fleet</span>
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
{/*  Multi-modal Hubs (Tall)  */}
<div className="col-span-12 lg:col-span-7 rounded-xl overflow-hidden border border-outline-variant flex h-[400px]">
<div className="w-1/2 p-8 flex flex-col justify-center space-y-4">
<h3 className="font-headline-md text-headline-md">Integrated Transport Hubs</h3>
<p className="font-body-md text-on-surface-variant">Strategically located hubs connecting rail, road, and riverine transport to reduce congestion and boost inter-state commerce.</p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-surface-container-highest rounded text-xs font-label-md">RAILWAY</span>
<span className="px-3 py-1 bg-surface-container-highest rounded text-xs font-label-md">INLAND PORT</span>
</div>
</div>
<div className="w-1/2 relative">
<img className="w-full h-full object-cover" data-alt="A modern architectural visualization of a transport hub, featuring glass and steel structures integrated with natural greenery. The lighting is clean and professional, emphasizing high-tech functionality. The scene includes stylized representations of state buses and a light rail terminal, using a palette of forest green and slate gray. The atmosphere is bustling yet organized, reflecting the modernization of public transit in Abia State." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy68bJoRLISPwILFDcyzDaB6wWH22xl-sGSutDdaUhUewlZA_XKFT6DoH44hKDDWov9WzXPHzt5ok9Ewq0IZS_4E-wyb8HNm8jn1NMo9HKpghwJqK9HnUkjwaETw7Bb7l5lBwVjI184DkwukP_6Wd5jDuTYdRKy_E2F37iqvt3Owk5ehV6HLgP6wLCiZnA7AhYaZyWhQ_4vMPGT37PsSVsAB_6ptbJD2zMB2nvUBmXvErZf055jj9cPn1wAidJuev9f9LRcQL8wCs"/>
</div>
</div>
</div>
</section>
{/*  Data Visualisation & Reports  */}
<section className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
<div className="space-y-6">
<h3 className="font-headline-md text-headline-md border-b-2 border-brass-gold pb-2 inline-block">Infrastructure Spend Analysis</h3>
<div className="bg-surface-container rounded-xl p-8 h-80 flex items-center justify-center border border-outline-variant relative">
{/*  Fake Chart Visualization  */}
<div className="w-full flex items-end justify-between h-48 px-4 space-x-2">
<div className="bg-forest-green/20 w-full h-1/4 rounded-t relative group"><div className="absolute inset-x-0 bottom-0 h-1/4 bg-forest-green rounded-t transition-all group-hover:h-full"></div></div>
<div className="bg-forest-green/20 w-full h-1/2 rounded-t relative group"><div className="absolute inset-x-0 bottom-0 h-1/2 bg-forest-green rounded-t transition-all group-hover:h-full"></div></div>
<div className="bg-forest-green/20 w-full h-2/3 rounded-t relative group"><div className="absolute inset-x-0 bottom-0 h-2/3 bg-forest-green rounded-t transition-all group-hover:h-full"></div></div>
<div className="bg-forest-green/20 w-full h-3/4 rounded-t relative group"><div className="absolute inset-x-0 bottom-0 h-3/4 bg-forest-green rounded-t transition-all group-hover:h-full"></div></div>
<div className="bg-forest-green/20 w-full h-5/6 rounded-t relative group"><div className="absolute inset-x-0 bottom-0 h-5/6 bg-forest-green rounded-t transition-all group-hover:h-full"></div></div>
</div>
<div className="absolute bottom-4 inset-x-0 flex justify-around font-label-md text-[10px] text-on-surface-variant">
<span>2020</span><span>2021</span><span>2022</span><span>2023</span><span>2024</span>
</div>
</div>
</div>
<div className="space-y-6">
<h3 className="font-headline-md text-headline-md border-b-2 border-brass-gold pb-2 inline-block">Maintenance Tickets</h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-4 bg-surface border border-outline-variant rounded-lg">
<div className="flex items-center space-x-4">
<span className="bg-error-container text-on-error-container px-2 py-1 rounded text-[10px] font-bold">URGENT</span>
<div>
<p className="font-label-md text-sm">Aba-Owerri Road Drainage</p>
<p className="text-xs text-on-surface-variant">Reported 2 hours ago by Citizen A-482</p>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">chevron_right</span>
</div>
<div className="flex items-center justify-between p-4 bg-surface border border-outline-variant rounded-lg opacity-70">
<div className="flex items-center space-x-4">
<span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded text-[10px] font-bold">ACTIVE</span>
<div>
<p className="font-label-md text-sm">Umuahia Township Resurfacing</p>
<p className="text-xs text-on-surface-variant">Contractor mobilized 14.11.2024</p>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">chevron_right</span>
</div>
<div className="flex items-center justify-between p-4 bg-surface border border-outline-variant rounded-lg opacity-70">
<div className="flex items-center space-x-4">
<span className="bg-primary-fixed text-on-primary-fixed-variant px-2 py-1 rounded text-[10px] font-bold">RESOLVED</span>
<div>
<p className="font-label-md text-sm">Osisioma Flyover Lighting</p>
<p className="text-xs text-on-surface-variant">Completed 08.11.2024</p>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">check_circle</span>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-highest border-t border-outline-variant w-full py-12 px-margin-desktop flex flex-col md:flex-row justify-between items-start md:items-center max-w-max-width mx-auto gap-8 lg:ml-64 lg:w-[calc(100%-16rem)]">
<div className="space-y-4">
<div className="font-headline-sm text-headline-sm font-bold text-forest-green">ABIA ONE</div>
<p className="font-body-md text-on-surface-variant max-w-xs">© 2024 Abia State Government. All Rights Reserved. Building a sovereign digital infrastructure for all citizens.</p>
</div>
<div className="flex flex-wrap gap-8">
<div className="flex flex-col space-y-2">
<span className="font-label-md font-bold text-forest-green uppercase text-xs">Policy</span>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Terms of Service</a>
</div>
<div className="flex flex-col space-y-2">
<span className="font-label-md font-bold text-forest-green uppercase text-xs">Reach Out</span>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Us</a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Press Office</a>
</div>
</div>
</footer>


      </div>
    </>
  );
}
