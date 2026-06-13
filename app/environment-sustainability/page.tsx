"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }\n        .map-gradient-overlay {\n            background: linear-gradient(to right, rgba(246, 251, 243, 1) 0%, rgba(246, 251, 243, 0) 20%);\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .brass-accent-line {\n            position: relative;\n        }\n        .brass-accent-line::after {\n            content: '';\n            position: absolute;\n            bottom: -4px;\n            left: 0;\n            width: 32px;\n            height: 3px;\n            background-color: #D4AF37;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md selection:bg-primary-fixed-dim selection:text-on-primary-fixed">
        
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-8">
<img src="/Logos/Abia_One_No_Background.png" alt="ABIA ONE" className="h-8 w-auto" />
<div className="hidden md:flex gap-6">
<a className="font-label-md text-label-md text-primary border-b-2 border-brass-gold pb-1 hover:text-primary transition-colors duration-200" href="/economic-transformation">Economy</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/serve-abia">Digital Gov</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/local-governance">Governance</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/secure-abia">Security</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden lg:flex px-4 py-2 border border-brass-gold text-secondary font-headline-md text-sm rounded-lg hover:bg-secondary-container transition-all">Emergency</button>
<button className="px-5 py-2 bg-forest-green text-state-white font-headline-md text-sm rounded-lg hover:opacity-90 active:scale-95 transition-all">Citizen Portal</button>
<img alt="User Profile" className="w-10 h-10 rounded-full border-2 border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANM7NrcCOoQvwQqAPU8PyBh0zzpp2kJyaBlD9Srt_w2xKjOwK8Wo-CgyhePRsImYzNHytZgFyKsDAWk8wEZtDpB4f_4JYYEpNqWeN1TjXaqdFfpR-CaGIGpc0YzTy8i_mqUbUT9Rz70trPwHggGy1XeabhXYUtbyYVlPnKFN1II5XJf1bc_E80dvwoAww8MyxUTGtU61y88aGT__DRYkjPUy-ZOgzUIjMqx213v0NgtaL-PWIoOdkWt3lk-uJkUoCh2u7xFHHZG0U" />
</div>
</nav>
{/*  SideNavBar (Desktop Only)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-16 bg-surface-container-low border-r border-outline-variant z-40">
<div className="p-6 border-b border-outline-variant">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined" data-icon="eco">eco</span>
</div>
<div>
<p className="font-headline-md text-sm font-bold text-forest-deep">ABIA ONE</p>
<p className="font-caption text-xs opacity-70">Sustainability OS</p>
</div>
</div>
</div>
<nav className="flex-1 py-4 space-y-1">
<a className="flex items-center gap-3 px-6 py-3 bg-secondary-container text-on-secondary-container mx-2 rounded-lg transition-all translate-x-1" href="/economic-transformation">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-md text-sm">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 transition-all" href="/serve-abia">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
<span className="font-label-md text-sm">Digital Government</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 transition-all" href="/local-governance">
<span className="material-symbols-outlined" data-icon="vptree">mitre</span>
<span className="font-label-md text-sm">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 transition-all" href="/secure-abia">
<span className="material-symbols-outlined" data-icon="security">security</span>
<span className="font-label-md text-sm">Public Trust</span>
</a>
</nav>
<div className="p-4 border-t border-outline-variant">
<button className="w-full py-3 bg-brass-gold/10 text-secondary border border-brass-gold font-label-md text-sm rounded-lg hover:bg-brass-gold/20 mb-4 transition-all">Citizen Feedback</button>
<div className="space-y-1">
<a className="flex items-center gap-3 px-6 py-2 text-on-surface-variant hover:text-primary" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-md text-sm">Settings</span>
</a>
<a className="flex items-center gap-3 px-6 py-2 text-on-surface-variant hover:text-primary" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="font-label-md text-sm">Support</span>
</a>
</div>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="lg:ml-64 pt-16 min-h-screen">
{/*  Hero & GIS Header  */}
<section className="relative h-[450px] overflow-hidden bg-forest-deep flex items-center">

<div className="relative z-10 px-margin-mobile md:px-margin-desktop w-full max-w-7xl">
<div className="max-w-2xl">
<span className="inline-block px-3 py-1 bg-brass-gold text-forest-deep font-label-md text-xs mb-4 rounded-sm">GOVERNANCE OS / ENVIRONMENT</span>
<h1 className="font-display-lg text-display-lg text-state-white mb-6 leading-tight">Sovereign Environmental <br />Monitoring &amp; Waste-to-Wealth</h1>
<p className="font-body-lg text-body-lg text-primary-fixed mb-8 opacity-90">Abia State is leading Nigeria's green revolution with integrated GIS site monitoring, transparent industrial permit management, and a circular waste economy.</p>
<div className="flex flex-wrap gap-4">
<button className="px-8 py-4 bg-brass-gold text-on-secondary font-headline-md rounded-lg shadow-lg hover:translate-y-[-2px] transition-all">Apply for Permit</button>
<button className="px-8 py-4 bg-state-white/10 text-state-white border border-state-white/30 backdrop-blur font-headline-md rounded-lg hover:bg-state-white/20 transition-all">Explore Live Data</button>
</div>
</div>
</div>
{/*  GIS Stat Overlay  */}
<div className="absolute bottom-10 right-margin-desktop hidden xl:flex gap-6 z-10">
<div className="glass-card p-6 rounded-xl border border-outline-variant/30 text-state-white">
<p className="font-label-md text-xs opacity-70 mb-1">REAL-TIME AIR QUALITY</p>
<p className="font-headline-lg text-3xl">42 AQI</p>
<p className="text-xs text-primary-fixed mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                        Stable Conditions
                    </p>
</div>
<div className="glass-card p-6 rounded-xl border border-outline-variant/30 text-state-white">
<p className="font-label-md text-xs opacity-70 mb-1">WASTE COLLECTION</p>
<p className="font-headline-lg text-3xl">89%</p>
<p className="text-xs text-primary-fixed mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-xs" data-icon="verified">verified</span>
                        Weekly Efficiency
                    </p>
</div>
</div>
</section>
{/*  Core Initiatives Grid  */}
<section className="px-margin-mobile md:px-margin-desktop py-16 max-w-container-max-width mx-auto">
<div className="mb-12 flex justify-between items-end">
<div>
<h2 className="font-headline-lg text-headline-lg text-forest-deep brass-accent-line">Clean Abia Initiative</h2>
<p className="font-body-md text-on-surface-variant mt-4">Tracking progress across the three pilot zones: Aba, Umuahia, and Ohafia.</p>
</div>
<button className="text-primary font-label-md flex items-center gap-2 hover:underline">
                    View Full Strategy <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="bento-grid">
{/*  Waste to Wealth Tracker  */}
<div className="col-span-12 lg:col-span-8 glass-card rounded-xl p-8 flex flex-col md:flex-row gap-8">
<div className="flex-1">
<h3 className="font-headline-md text-forest-deep mb-4">Waste-to-Wealth Metrics</h3>
<p className="font-body-md text-on-surface-variant mb-6">Transparent ledger of recycled materials and energy generated from municipal solid waste streams.</p>
<div className="grid grid-cols-2 gap-6">
<div className="bg-surface-container rounded-lg p-4">
<p className="font-label-md text-xs text-outline mb-1">PLASTIC RECYCLED</p>
<p className="font-headline-md text-forest-green">1,420 Tons</p>
</div>
<div className="bg-surface-container rounded-lg p-4">
<p className="font-label-md text-xs text-outline mb-1">BIO-ENERGY GEN.</p>
<p className="font-headline-md text-forest-green">450 MWh</p>
</div>
<div className="bg-surface-container rounded-lg p-4">
<p className="font-label-md text-xs text-outline mb-1">JOBS CREATED</p>
<p className="font-headline-md text-forest-green">3,200+</p>
</div>
<div className="bg-surface-container rounded-lg p-4">
<p className="font-label-md text-xs text-outline mb-1">CARBON OFFSET</p>
<p className="font-headline-md text-forest-green">12k Co2e</p>
</div>
</div>
</div>
<div className="w-full md:w-64 flex flex-col justify-center items-center bg-forest-green/5 rounded-xl p-6 border border-primary/10">
<div className="w-32 h-32 rounded-full border-8 border-brass-gold border-t-transparent animate-spin-slow flex items-center justify-center mb-4">
<span className="font-headline-lg text-forest-green">74%</span>
</div>
<p className="font-label-md text-xs text-center text-on-surface-variant">TARGET ACHIEVEMENT FOR Q3 FY2024</p>
</div>
</div>
{/*  Industrial Permit Quick App  */}
<div className="col-span-12 lg:col-span-4 bg-forest-deep text-state-white rounded-xl p-8 relative overflow-hidden group">
<div className="relative z-10">
<h3 className="font-headline-md mb-2">EIA Permits</h3>
<p className="font-body-md opacity-80 mb-8">Digital Environmental Impact Assessment portal for industrial clusters.</p>
<div className="space-y-4">
<button className="w-full flex items-center justify-between p-4 bg-state-white/10 rounded-lg hover:bg-state-white/20 border border-state-white/20 transition-all">
<span className="font-label-md">New Application</span>
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
</button>
<button className="w-full flex items-center justify-between p-4 bg-state-white/10 rounded-lg hover:bg-state-white/20 border border-state-white/20 transition-all">
<span className="font-label-md">Track Status</span>
<span className="material-symbols-outlined" data-icon="location_searching">location_searching</span>
</button>
<button className="w-full flex items-center justify-between p-4 bg-state-white/10 rounded-lg hover:bg-state-white/20 border border-state-white/20 transition-all">
<span className="font-label-md">Compliance History</span>
<span className="material-symbols-outlined" data-icon="history">history</span>
</button>
</div>
</div>
<div className="absolute -bottom-8 -right-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
<span className="material-symbols-outlined text-[160px]" data-icon="description">description</span>
</div>
</div>
</div>
</section>
{/*  GIS Erosion Monitoring  */}
<section className="bg-surface-container-low py-20 px-margin-mobile md:px-margin-desktop">
<div className="max-w-container-max-width mx-auto flex flex-col lg:flex-row gap-12">
<div className="lg:w-1/3">
<span className="font-label-md text-secondary tracking-widest uppercase mb-4 block">Live Monitoring</span>
<h2 className="font-headline-lg text-headline-lg text-forest-deep mb-6">Erosion Control Site Map</h2>
<p className="font-body-md text-on-surface-variant mb-8 leading-relaxed">Utilizing satellite telemetry and IoT sensors across 12 high-risk erosion zones in Abia State to predict and prevent soil degradation.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-secondary-container rounded-lg">
<span className="material-symbols-outlined text-on-secondary-container" data-icon="warning" data-weight="fill">warning</span>
</div>
<div>
<p className="font-headline-md text-base text-forest-deep">Active Alerts: 02</p>
<p className="font-body-md text-sm text-on-surface-variant">Isialangwa North region reporting increased soil moisture saturation.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-primary-container rounded-lg">
<span className="material-symbols-outlined text-on-primary-container" data-icon="check_circle" data-weight="fill">check_circle</span>
</div>
<div>
<p className="font-headline-md text-base text-forest-deep">Stabilized Sites: 08</p>
<p className="font-body-md text-sm text-on-surface-variant">Remediation efforts completed in Umuahia South cluster.</p>
</div>
</div>
</div>
</div>
<div className="lg:w-2/3 h-[500px] rounded-2xl overflow-hidden relative border border-outline shadow-2xl group">
<img alt="Satellite view of Nigerian topography" className="w-full h-full object-cover" data-alt="A detailed aerial satellite map view of the lush, rolling green terrain of Abia State, Nigeria, overlaid with digital data visualization markers. Glowing teal and orange dots pinpoint active erosion monitoring sites. The map features a professional GIS interface aesthetic with topographical contour lines and minimalist data readouts in the corners. Lighting is bright and cinematic, emphasizing the vastness of the digital governance infrastructure." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFzWNEYCMoL4KVpM6gbeHpNc3Nv8OaocxPAVZK5u-iQXSs4C_p0eYXIiOJDK_kfKaxPlQ-sr6k1He-UCbW_Kg3cjIb15NCqk8IaTwUOf9pgU4H_xbSlnOcrV6LaHSOGu86JjBo1r1RY56VW78ykJdV59VtJqQk7NbHoV9UQkT0UtHtdu32gTfqqEuwH9asgjATjOZN4o1qT8HwEcfQ7WvFb6X79MDfza4oMd8w-t9IB5ecxpR1_mQRLrxumrrhs0dYT4O9H9CaaUU" />
<div className="absolute inset-0 map-gradient-overlay"></div>
{/*  GIS Control Overlay  */}
<div className="absolute top-6 right-6 flex flex-col gap-2">
<button className="p-2 bg-state-white rounded border border-outline-variant shadow-md hover:bg-surface-container"><span className="material-symbols-outlined" data-icon="add">add</span></button>
<button className="p-2 bg-state-white rounded border border-outline-variant shadow-md hover:bg-surface-container"><span className="material-symbols-outlined" data-icon="remove">remove</span></button>
<button className="p-2 bg-state-white rounded border border-outline-variant shadow-md hover:bg-surface-container mt-2"><span className="material-symbols-outlined" data-icon="layers">layers</span></button>
</div>
{/*  Popover Example  */}
<div className="absolute bottom-10 left-10 glass-card p-4 rounded-lg border-forest-green/30 w-64 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
<div className="flex justify-between items-center mb-2">
<span className="font-label-md text-xs font-bold text-forest-deep">SITE ID: #AB-ERO-042</span>
<span className="px-2 py-0.5 bg-error-container text-on-error-container text-[10px] rounded-full">ALERT</span>
</div>
<p className="font-body-md text-xs mb-3">Zone: Aba-Port Harcourt Highway</p>
<div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-error w-4/5"></div>
</div>
<p className="text-[10px] text-outline mt-1">Erosion Risk Index: 82/100</p>
</div>
</div>
</div>
</section>
{/*  Resource Hub  */}
<section className="py-20 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
<h2 className="font-headline-lg text-headline-lg text-forest-deep text-center mb-16">Environmental Citizen Services</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Service 1  */}
<div className="p-8 border border-outline-variant hover:border-brass-gold group transition-all rounded-lg bg-surface">
<div className="w-12 h-12 flex items-center justify-center bg-surface-container-high text-forest-deep rounded group-hover:bg-forest-green group-hover:text-state-white transition-all mb-6">
<span className="material-symbols-outlined" data-icon="delete">delete</span>
</div>
<h4 className="font-headline-md text-xl text-forest-deep mb-3">Waste Pickup Request</h4>
<p className="font-body-md text-on-surface-variant mb-6">Schedule on-demand evacuation for bulk industrial or residential waste.</p>
<a className="text-primary font-label-md hover:underline inline-flex items-center gap-1" href="/open-abia">Request Now <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span></a>
</div>
{/*  Service 2  */}
<div className="p-8 border border-outline-variant hover:border-brass-gold group transition-all rounded-lg bg-surface">
<div className="w-12 h-12 flex items-center justify-center bg-surface-container-high text-forest-deep rounded group-hover:bg-forest-green group-hover:text-state-white transition-all mb-6">
<span className="material-symbols-outlined" data-icon="report_problem">report_problem</span>
</div>
<h4 className="font-headline-md text-xl text-forest-deep mb-3">Report Pollution</h4>
<p className="font-body-md text-on-surface-variant mb-6">Submit geofenced reports of illegal dumping or environmental hazards.</p>
<a className="text-primary font-label-md hover:underline inline-flex items-center gap-1" href="/open-abia">Submit Report <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span></a>
</div>
{/*  Service 3  */}
<div className="p-8 border border-outline-variant hover:border-brass-gold group transition-all rounded-lg bg-surface">
<div className="w-12 h-12 flex items-center justify-center bg-surface-container-high text-forest-deep rounded group-hover:bg-forest-green group-hover:text-state-white transition-all mb-6">
<span className="material-symbols-outlined" data-icon="forest">forest</span>
</div>
<h4 className="font-headline-md text-xl text-forest-deep mb-3">Carbon Credits</h4>
<p className="font-body-md text-on-surface-variant mb-6">Explore the Abia Green Bonds and carbon offsetting for local businesses.</p>
<a className="text-primary font-label-md hover:underline inline-flex items-center gap-1" href="/open-abia">Learn More <span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span></a>
</div>
</div>
</section>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto border-t border-outline-variant py-12">
<div className="max-w-container-max-width mx-auto">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
<div className="max-w-xs">
<span className="font-headline-lg text-headline-lg text-forest-deep block mb-4">ABIA ONE</span>
<p className="font-body-md text-on-surface-variant">The unified digital governance system of the Abia State Government, Nigeria. Built for environmental sovereignty.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
<div>
<h5 className="font-label-md text-forest-deep mb-4 uppercase">Initiatives</h5>
<ul className="space-y-2">
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent" href="/invest-in-aba">Invest Abia</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent" href="/serve-abia">Serve Abia</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent" href="/build-abia">Build Abia</a></li>
</ul>
</div>
<div>
<h5 className="font-label-md text-forest-deep mb-4 uppercase">Governance</h5>
<ul className="space-y-2">
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent" href="/open-abia">Open Abia</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent" href="#">Privacy Policy</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h5 className="font-label-md text-forest-deep mb-4 uppercase">Social</h5>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-outline flex items-center justify-center hover:bg-forest-green hover:text-state-white transition-all" href="#"><span className="material-symbols-outlined text-sm" data-icon="language">language</span></a>
<a className="w-8 h-8 rounded-full border border-outline flex items-center justify-center hover:bg-forest-green hover:text-state-white transition-all" href="#"><span className="material-symbols-outlined text-sm" data-icon="groups">groups</span></a>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-outline/20 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-body-md text-sm text-on-surface-variant">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-forest-green rounded-full"></span>
<span className="font-label-md text-[10px] text-forest-deep">SYSTEM STATUS: OPTIMAL</span>
</div>
</div>
</div>
</footer>
</main>
{/*  FAB  */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-forest-green text-state-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined" data-icon="chat_bubble" data-weight="fill">chat_bubble</span>
</button>


      </div>
    </>
  );
}
