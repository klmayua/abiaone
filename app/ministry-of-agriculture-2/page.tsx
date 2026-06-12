"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            display: inline-block;\n            vertical-align: middle;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .custom-scrollbar::-webkit-scrollbar {\n            width: 4px;\n        }\n        .custom-scrollbar::-webkit-scrollbar-track {\n            background: #f1f5ee;\n        }\n        .custom-scrollbar::-webkit-scrollbar-thumb {\n            background: #006838;\n            border-radius: 2px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-surface font-body-md text-on-surface overflow-x-hidden">
        
{/*  SideNavBar (Predicted Anchor)  */}
<nav className="flex flex-col fixed left-0 top-0 h-full py-6 px-4 space-y-2 bg-surface-container-low dark:bg-inverse-surface border-r border-outline-variant w-64 z-50 hidden md:flex">
<div className="mb-8 px-2">
<span className="font-headline-sm text-headline-sm font-bold text-forest-green dark:text-primary-fixed-dim">Command Center</span>
<p className="font-label-md text-label-md text-on-surface-variant opacity-70">State Operating System</p>
</div>
<div className="space-y-1 flex-grow">
<a className="flex items-center space-x-3 p-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="/">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex items-center space-x-3 p-3 text-on-primary-container bg-primary-container dark:bg-primary-fixed-dim dark:text-on-primary-fixed rounded-lg scale-95 transition-transform" href="#">
<span className="material-symbols-outlined">account_tree</span>
<span className="font-label-md text-label-md">Project Monitoring</span>
</a>
<a className="flex items-center space-x-3 p-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</a>
<a className="flex items-center space-x-3 p-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">hail</span>
<span className="font-label-md text-label-md">Citizen Requests</span>
</a>
<a className="flex items-center space-x-3 p-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-md text-label-md">Revenue Tracking</span>
</a>
<a className="flex items-center space-x-3 p-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">badge</span>
<span className="font-label-md text-label-md">Personnel</span>
</a>
</div>
<div className="pt-6 border-t border-outline-variant space-y-1">
<a className="flex items-center space-x-3 p-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-label-md text-label-md">Support</span>
</a>
<a className="flex items-center space-x-3 p-3 text-eagle-red hover:bg-error-container transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">logout</span>
<span className="font-label-md text-label-md">Sign Out</span>
</a>
</div>
</nav>
<main className="md:ml-64 min-h-screen">
{/*  TopNavBar (Predicted Anchor)  */}
<header className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline sticky top-0 z-40">
<div className="flex justify-between items-center w-full px-6 md:px-margin-desktop max-w-max-width mx-auto h-16">
<div className="flex items-center space-x-8">
<span className="font-headline-md text-headline-md font-bold text-forest-green dark:text-primary-fixed-dim">ABIA ONE</span>
<nav className="hidden lg:flex space-x-6">
<a className="font-label-md text-label-md text-forest-green dark:text-primary-fixed-dim border-b-2 border-brass-gold pb-1 transition-colors" href="/invest-in-aba">Invest</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="/jobs-abia">Jobs</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="/serve-abia">Serve</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Verify</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="/local-governance">Governance</a>
</nav>
</div>
<div className="flex items-center space-x-4">
<div className="hidden md:flex items-center bg-surface-container-high rounded-lg px-3 py-1.5 border border-outline-variant">
<span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-48" placeholder="Search Command Center..." type="text" />
</div>
<button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-highest p-2 rounded-full">language</button>
<button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-highest p-2 rounded-full relative">
                        notifications
                        <span className="absolute top-2 right-2 w-2 h-2 bg-eagle-red rounded-full"></span>
</button>
<button className="bg-forest-green text-white px-5 py-2 rounded font-label-md text-label-md hover:opacity-90 transition-opacity">Sign In</button>
</div>
</div>
</header>
{/*  Hero Section  */}
<section className="relative h-[400px] flex items-center overflow-hidden">
<img alt="Abia State Agriculture" className="absolute inset-0 w-full h-full object-cover" data-alt="A wide panoramic shot of a technologically advanced palm plantation in Abia State during the golden hour. In the foreground, neat rows of palm trees stretch into the distance under a warm, glowing amber sky. A modern drone is captured mid-air, scanning the crops for data-driven precision farming. The overall aesthetic is professional, fertile, and institutional, using rich greens and earthy tones to signify agricultural prosperity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh4FjWIDFAR6wHvRrlPqpSdjs09qtKtRYUpjS87FTjAe-oGjpfHdc7YWFJ7Dgfnnjnn8C6hn959hMomzP9TlgNzYlHyv1Jd3hl7fUfrI0dCJ00HA9ZNqNLyVlHwP8PVo_8frIu6FIrPqSUPpDE_iVxdzNZqDCBe06wqK2KK2SOLj-aZ-5gwL1_Yoxe1D68UL5ClfN-PXg9bNECJImwoPYIMQlUiYA4bJorT6J7JTwBiG1Jk-3YD7S-S_ywU7XRdLj322Nt0mYoQaE" />
<div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
<div className="relative px-6 md:px-margin-desktop max-w-4xl">
<div className="flex items-center space-x-2 mb-4">
<span className="w-12 h-1 bg-brass-gold"></span>
<span className="text-brass-gold font-label-md text-label-md tracking-widest">MINISTRY OF AGRICULTURE</span>
</div>
<h1 className="font-headline-lg text-white mb-6 text-5xl md:text-6xl font-extrabold leading-tight">Agri-Transformation <br />Strategy 2025</h1>
<p className="text-white/80 font-body-lg max-w-xl mb-8">Implementing a sovereign digital infrastructure for food security, farmer empowerment, and rural development through the Abia One ecosystem.</p>
<div className="flex space-x-4">
<button className="bg-forest-green text-white px-8 py-3 rounded-lg font-headline-md text-sm hover:bg-forest-green/90 transition-colors shadow-lg">Explore Programs</button>
<button className="border border-white text-white px-8 py-3 rounded-lg font-headline-md text-sm hover:bg-white/10 transition-colors">Download Roadmap</button>
</div>
</div>
</section>
{/*  Stats Overview  */}
<section className="px-6 md:px-margin-desktop -mt-12 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="bg-white p-6 border border-outline-variant shadow-sm flex flex-col justify-between">
<span className="text-on-surface-variant font-label-md text-xs uppercase tracking-tighter">Total Cultivated Land</span>
<div className="mt-4">
<span className="text-forest-green font-headline-lg text-4xl font-bold">142k</span>
<span className="text-forest-green text-sm ml-1">Hectares</span>
</div>
<div className="mt-4 flex items-center text-forest-green text-xs font-semibold">
<span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                        +12.4% vs Last Cycle
                    </div>
</div>
<div className="bg-white p-6 border border-outline-variant shadow-sm flex flex-col justify-between">
<span className="text-on-surface-variant font-label-md text-xs uppercase tracking-tighter">Registered Smallholders</span>
<div className="mt-4">
<span className="text-forest-green font-headline-lg text-4xl font-bold">84,302</span>
</div>
<div className="mt-4 flex items-center text-forest-green text-xs font-semibold">
<span className="material-symbols-outlined text-sm mr-1">check_circle</span>
                        94% Verified
                    </div>
</div>
<div className="bg-white p-6 border border-outline-variant shadow-sm flex flex-col justify-between">
<span className="text-on-surface-variant font-label-md text-xs uppercase tracking-tighter">Rural Roads Built</span>
<div className="mt-4">
<span className="text-forest-green font-headline-lg text-4xl font-bold">412</span>
<span className="text-forest-green text-sm ml-1">KM</span>
</div>
<div className="mt-4 flex items-center text-brass-gold text-xs font-semibold">
<span className="material-symbols-outlined text-sm mr-1">construction</span>
                        18 Projects Active
                    </div>
</div>
<div className="bg-white p-6 border border-outline-variant shadow-sm flex flex-col justify-between">
<span className="text-on-surface-variant font-label-md text-xs uppercase tracking-tighter">Yield Forecast</span>
<div className="mt-4">
<span className="text-forest-green font-headline-lg text-4xl font-bold">82%</span>
</div>
<div className="mt-4 flex items-center text-forest-green text-xs font-semibold">
<span className="material-symbols-outlined text-sm mr-1">update</span>
                        Updated Real-Time
                    </div>
</div>
</div>
</section>
{/*  Main Content Area: Bento Grid Layout  */}
<section className="px-6 md:px-margin-desktop py-12 max-w-max-width mx-auto">
<div className="bento-grid">
{/*  Food Security Monitoring  */}
<div className="col-span-12 lg:col-span-8 bg-white border border-outline-variant p-8 relative overflow-hidden group">
<div className="flex justify-between items-start mb-8">
<div>
<div className="h-1 w-12 bg-brass-gold mb-3"></div>
<h2 className="font-headline-md text-headline-md text-forest-green">Food Security Initiatives</h2>
<p className="text-on-surface-variant mt-2">Real-time monitoring of essential crop reserves and market pricing across 17 LGAs.</p>
</div>
<button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container p-2 rounded-lg">fullscreen</button>
</div>
{/*  Data Visualization Placeholder  */}
<div className="h-64 bg-surface-container-low border border-dashed border-outline-variant flex items-end justify-between p-6 rounded-lg">
<div className="w-12 bg-forest-green/20 h-[40%] rounded-t-sm relative group/bar hover:bg-forest-green/40 transition-all cursor-pointer">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 font-label-md text-xs opacity-0 group-hover/bar:opacity-100 transition-opacity">Rice</span>
</div>
<div className="w-12 bg-forest-green/40 h-[65%] rounded-t-sm relative group/bar hover:bg-forest-green/60 transition-all cursor-pointer">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 font-label-md text-xs opacity-0 group-hover/bar:opacity-100 transition-opacity">Cassava</span>
</div>
<div className="w-12 bg-forest-green h-[90%] rounded-t-sm relative group/bar hover:bg-forest-green/80 transition-all cursor-pointer">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 font-label-md text-xs opacity-0 group-hover/bar:opacity-100 transition-opacity">Palm Oil</span>
</div>
<div className="w-12 bg-forest-green/30 h-[50%] rounded-t-sm relative group/bar hover:bg-forest-green/50 transition-all cursor-pointer">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 font-label-md text-xs opacity-0 group-hover/bar:opacity-100 transition-opacity">Maize</span>
</div>
<div className="w-12 bg-brass-gold/40 h-[35%] rounded-t-sm relative group/bar hover:bg-brass-gold/60 transition-all cursor-pointer">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 font-label-md text-xs opacity-0 group-hover/bar:opacity-100 transition-opacity">Yam</span>
</div>
<div className="w-12 bg-forest-green/10 h-[20%] rounded-t-sm relative group/bar hover:bg-forest-green/30 transition-all cursor-pointer">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 font-label-md text-xs opacity-0 group-hover/bar:opacity-100 transition-opacity">Soy</span>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mt-8">
<div className="p-4 bg-surface-bright border border-outline-variant">
<span className="font-label-md text-[10px] uppercase text-on-surface-variant block mb-1">Price Stability Index</span>
<span className="font-headline-md text-xl font-bold">Stable</span>
</div>
<div className="p-4 bg-surface-bright border border-outline-variant">
<span className="font-label-md text-[10px] uppercase text-on-surface-variant block mb-1">Strategic Reserve</span>
<span className="font-headline-md text-xl font-bold">88% Capacity</span>
</div>
<div className="p-4 bg-surface-bright border border-outline-variant">
<span className="font-label-md text-[10px] uppercase text-on-surface-variant block mb-1">Global Import Ratio</span>
<span className="font-headline-md text-xl font-bold text-eagle-red">-4.2%</span>
</div>
</div>
</div>
{/*  Active Support Programs (The "Asymmetric" Card)  */}
<div className="col-span-12 lg:col-span-4 flex flex-col space-y-6">
<div className="bg-forest-green text-white p-8 rounded-none relative overflow-hidden flex-grow">
<div className="relative z-10">
<h3 className="font-headline-md text-white mb-4">Farmer Support Portal</h3>
<p className="text-white/70 text-sm mb-6">Unified access for verified smallholders to fertilizers, mechanization, and credit facilities.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start space-x-3">
<span className="material-symbols-outlined text-brass-gold">check_circle</span>
<span className="text-sm">Voucher Disbursement: <b>Active</b></span>
</li>
<li className="flex items-start space-x-3">
<span className="material-symbols-outlined text-brass-gold">check_circle</span>
<span className="text-sm">Tractor Hiring Hubs: <b>12 Open</b></span>
</li>
<li className="flex items-start space-x-3">
<span className="material-symbols-outlined text-brass-gold">check_circle</span>
<span className="text-sm">Micro-Credit Claims: <b>Processing</b></span>
</li>
</ul>
<button className="w-full bg-white text-forest-green py-3 rounded font-headline-md text-sm hover:bg-brass-gold hover:text-white transition-all">Apply for Input Support</button>
</div>
<div className="absolute -right-12 -bottom-12 opacity-10">
<span className="material-symbols-outlined text-[200px]" style={{"fontVariationSettings":"'FILL' 1"}}>agriculture</span>
</div>
</div>
</div>
{/*  Rural Road Development Tracker  */}
<div className="col-span-12 lg:col-span-5 bg-white border border-outline-variant p-8">
<div className="flex items-center space-x-3 mb-6">
<span className="material-symbols-outlined text-forest-green">route</span>
<h3 className="font-headline-md text-forest-green">Access Road Tracker</h3>
</div>
<div className="space-y-6 custom-scrollbar overflow-y-auto max-h-[350px] pr-4">
<div className="border-l-2 border-forest-green pl-4 relative">
<div className="absolute -left-[9px] top-0 w-4 h-4 bg-forest-green rounded-full"></div>
<span className="font-label-md text-xs text-on-surface-variant block mb-1">Umuahia North - Farm Estate Road</span>
<p className="font-body-md font-bold text-sm">Phase 2: Asphalt Laying</p>
<div className="mt-2 w-full bg-surface-container rounded-full h-1.5">
<div className="bg-forest-green h-1.5 rounded-full w-[85%]"></div>
</div>
</div>
<div className="border-l-2 border-forest-green pl-4 relative opacity-60">
<div className="absolute -left-[9px] top-0 w-4 h-4 bg-forest-green rounded-full"></div>
<span className="font-label-md text-xs text-on-surface-variant block mb-1">Aba South - Industrial Hub Loop</span>
<p className="font-body-md font-bold text-sm">Phase 1: Grading &amp; Drainage</p>
<div className="mt-2 w-full bg-surface-container rounded-full h-1.5">
<div className="bg-forest-green h-1.5 rounded-full w-[40%]"></div>
</div>
</div>
<div className="border-l-2 border-outline-variant pl-4 relative opacity-40">
<div className="absolute -left-[9px] top-0 w-4 h-4 bg-outline-variant rounded-full"></div>
<span className="font-label-md text-xs text-on-surface-variant block mb-1">Obingwa - Rural Market Link</span>
<p className="font-body-md font-bold text-sm">Awaiting Commencement</p>
<div className="mt-2 w-full bg-surface-container rounded-full h-1.5">
<div className="bg-outline-variant h-1.5 rounded-full w-[5%]"></div>
</div>
</div>
<div className="border-l-2 border-forest-green pl-4 relative">
<div className="absolute -left-[9px] top-0 w-4 h-4 bg-forest-green rounded-full"></div>
<span className="font-label-md text-xs text-on-surface-variant block mb-1">Bende - Cocoa Farm Access</span>
<p className="font-body-md font-bold text-sm">Completed</p>
<div className="mt-2 w-full bg-surface-container rounded-full h-1.5">
<div className="bg-forest-green h-1.5 rounded-full w-[100%]"></div>
</div>
</div>
</div>
</div>
{/*  Agricultural Output Heatmap  */}
<div className="col-span-12 lg:col-span-7 bg-white border border-outline-variant p-0 overflow-hidden flex flex-col">
<div className="p-8">
<div className="flex justify-between items-center">
<h3 className="font-headline-md text-forest-green">Zonal Output Analysis</h3>
<div className="flex space-x-2">
<span className="flex items-center text-xs text-on-surface-variant">
<span className="w-3 h-3 bg-forest-green rounded-full mr-2"></span> High
                                </span>
<span className="flex items-center text-xs text-on-surface-variant">
<span className="w-3 h-3 bg-brass-gold rounded-full mr-2"></span> Low
                                </span>
</div>
</div>
</div>
<div className="flex-grow bg-surface-container-low relative">
{/*  Map Simulation  */}
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-full h-full p-4">
<img alt="State Map Output" className="w-full h-full object-cover rounded opacity-30 grayscale" data-alt="A stylized, top-down satellite view of lush green agricultural land parcels divided by clean geometric borders. The image is filtered with a technical overlay that suggests data heatmaps, using shades of forest green and highlights of ochre gold to indicate high productivity zones. The atmosphere is data-centric, professional, and sophisticated, emphasizing the state's modern approach to land management." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_vZK9ho01xVfWnFPtmiLit_1FwNfkvxGoYmcv-LBaa8Suq1ctCu12CCReJ1PBy_eXVt_Db49pkcXoqOPtQ0x04zRu2lBeyl5QHEEVmxgXa5eLp2ANXwyNdqRwvIAjIvmfshhqFjsza_2OePZff11SR3GCCV15i24nwTAMUNbPqrOdHh83BiUymolH2D0AyOrNMGYlQOWw7ymeq6EL8sA5FrWfydKXkKDgJk8uxBK16IdlbpBbuhIaadzLG4S6coHzreN-g47upTg" />
{/*  Callouts over "Map"  */}
<div className="absolute top-1/4 left-1/3 bg-white p-3 border border-outline shadow-xl rounded pointer-events-none">
<span className="font-label-md text-[10px] text-forest-green font-bold">ABIA NORTH</span>
<p className="text-xs">Yield: 92% (Optimal)</p>
</div>
<div className="absolute bottom-1/3 right-1/4 bg-white p-3 border border-outline shadow-xl rounded pointer-events-none">
<span className="font-label-md text-[10px] text-brass-gold font-bold">ABIA SOUTH</span>
<p className="text-xs">Yield: 64% (Delayed Rain)</p>
</div>
</div>
</div>
</div>
<div className="p-4 bg-surface-bright flex justify-between items-center border-t border-outline-variant">
<span className="text-xs text-on-surface-variant italic">Data updated: 14:00 GMT+1 Today</span>
<button className="text-forest-green font-label-md text-xs hover:underline">Download Data Set (CSV)</button>
</div>
</div>
</div>
</section>
{/*  Programs & Grants Grid  */}
<section className="bg-surface-container-low py-16">
<div className="px-6 md:px-margin-desktop max-w-max-width mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="font-headline-lg text-forest-green">Open Transformation Programs</h2>
<p className="text-on-surface-variant max-w-2xl mt-2">Active government-backed schemes designed to accelerate agricultural industrialization in Abia State.</p>
</div>
<a className="text-forest-green font-label-md border-b border-forest-green hover:text-brass-gold hover:border-brass-gold transition-colors pb-1 hidden md:block" href="#">View All Opportunities</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Program Card 1  */}
<div className="bg-white border border-outline-variant group hover:border-forest-green transition-colors flex flex-col">
<img alt="Agri-Tech Program" className="h-48 w-full object-cover" data-alt="A clean, close-up shot of a young agronomist's hand holding a high-tech tablet over a row of hydroponic lettuce. The lighting is bright and laboratory-clean, highlighting the intersection of technology and nature. The color palette is dominated by vibrant salad greens and professional silver-grays, reflecting a forward-looking, innovation-driven government program." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0NJ6S5y4CHCHX6hEim6VZ7lZPpb0pEV8nAok8XU7fEJe6CeNxHv5qhji82RtZz0K_qhsKLW_qHHKP7kT4gDLEarvMMX3JW8-uPkHvvwOQVh_Y4J8JypBC4bdluezGWpNQclw3GdmrjBDbh_CCjdiOIxYdmNh5PpeiRQrh8a0tzKlZksxW-97K40ZUy32MbqcGZXMxYMtE6qh4gZAKCjoF0usWxs7pSaYJyw8rb9Obh7gSIxU0OwSz6InxfycOFnjwt1b3Pi8KRpw" />
<div className="p-6 flex-grow">
<span className="inline-block bg-primary-container text-white text-[10px] font-bold px-2 py-0.5 mb-4 rounded-sm">GRANTS</span>
<h4 className="font-headline-md text-xl mb-3">Smallholder Digital Literacy</h4>
<p className="text-on-surface-variant text-sm mb-6">Equipping 20,000 farmers with smartphone tools for climate forecasting and market access.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-bold text-on-surface-variant">Ends Oct 2024</span>
<button className="text-forest-green material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</button>
</div>
</div>
</div>
{/*  Program Card 2  */}
<div className="bg-white border border-outline-variant group hover:border-forest-green transition-colors flex flex-col">
<img alt="Cassava Industrialization" className="h-48 w-full object-cover" data-alt="An expansive view of a modern cassava processing facility in Abia State. The interior is characterized by stainless steel machinery, bright industrial lighting, and workers in professional safety gear. The scene is organized and clinical, conveying a sense of transparency, high standards, and significant government investment in industrial processing infrastructure." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9NxwoO0YnYeB8KV1-C-2S7ePWmDwI__KxATcrp3EvZ9ISOLCRH0fS_L68ojTAFgay_WFjN6Wwr-G0TyfuUEFzdlSCtbyneFeRT8V6Fa5xg3rHfmmJbrVsbgyXpMjiPYyDDK3okEltwA4QevSoedeghTJ4BYlrwpgL9Z5Ndlc2eY_9CaTTpN702VlAEkRwivUn_WIj_HmHbvNDIL0rZ-v-9AKQGg-WpFPHYEu5HSGXyfgZlDbMJpQszVhJq3HJf3i46BsHQ4WDUU0" />
<div className="p-6 flex-grow">
<span className="inline-block bg-brass-gold text-on-secondary-fixed text-[10px] font-bold px-2 py-0.5 mb-4 rounded-sm">PPP VENTURE</span>
<h4 className="font-headline-md text-xl mb-3">Cassava Value-Chain Linkage</h4>
<p className="text-on-surface-variant text-sm mb-6">Connecting primary producers directly to industrial ethanol and starch factories.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-bold text-on-surface-variant">Ongoing</span>
<button className="text-forest-green material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</button>
</div>
</div>
</div>
{/*  Program Card 3  */}
<div className="bg-white border border-outline-variant group hover:border-forest-green transition-colors flex flex-col">
<img alt="Rural Market Initiative" className="h-48 w-full object-cover" data-alt="A bird's eye view of a newly renovated, modern rural market hub with organized stalls and paved access roads. The image is bright and vibrant, showing a hive of activity during a market day. The composition emphasizes order and infrastructure improvement, using a color palette of warm earth tones, blue skies, and busy market colors to show the human impact of rural road development." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtjrN8rsnPFvppXtcoWAXMEHkQclLS6a6pMy37caQ9gfD-7R17-taz9YBBD2o5ixBp3YXMp8Y2ywagWVKxgdOds-bIwXMciLgUjqpUj-4cLEXzrsL7-9D1JG7hIM5xQ_uBAEe03HvWS_SoDsZ1jnYLdYEVtjJyUBuV7B_i_AI5cuuMaas0cq_vEmlACFL-KKtQYPKWCFfzYsO8X_rWzOyJvmbmpCMecDHrqcSB-x-PvLJxrHfGAtjWU5K5VIbp3p0UP03sywi9BXM" />
<div className="p-6 flex-grow">
<span className="inline-block bg-tertiary-container text-white text-[10px] font-bold px-2 py-0.5 mb-4 rounded-sm">INFRASTRUCTURE</span>
<h4 className="font-headline-md text-xl mb-3">Rural Road Co-Investment</h4>
<p className="text-on-surface-variant text-sm mb-6">Community-led maintenance schemes for farm-to-market arterial roads.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-bold text-on-surface-variant">Waitlist Open</span>
<button className="text-forest-green material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</button>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Footer (Predicted Anchor)  */}
<footer className="bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant">
<div className="w-full py-12 px-6 md:px-margin-desktop flex flex-col md:flex-row justify-between items-start max-w-max-width mx-auto gap-8">
<div className="max-w-xs">
<span className="font-headline-sm text-headline-sm font-bold text-forest-green dark:text-primary-fixed-dim block mb-4">ABIA ONE</span>
<p className="font-body-md text-on-surface-variant mb-6">The sovereign digital gateway of the Abia State Government. Empowering citizens through transparency and digital infrastructure.</p>
<div className="flex space-x-4">
<a className="text-on-surface-variant hover:text-forest-green transition-colors" href="#"><span className="material-symbols-outlined">face_nod</span></a>
<a className="text-on-surface-variant hover:text-forest-green transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
<a className="text-on-surface-variant hover:text-forest-green transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h5 className="font-label-md text-forest-green mb-4">Governance</h5>
<ul className="space-y-2">
<li><a className="text-sm text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Executive Council</a></li>
<li><a className="text-sm text-on-surface-variant hover:text-brass-gold transition-colors" href="#">MDAs Portal</a></li>
<li><a className="text-sm text-on-surface-variant hover:text-brass-gold transition-colors" href="#">State Laws</a></li>
</ul>
</div>
<div>
<h5 className="font-label-md text-forest-green mb-4">Resources</h5>
<ul className="space-y-2">
<li><a className="text-sm text-on-surface-variant hover:text-brass-gold transition-colors" href="/open-abia">Open Data</a></li>
<li><a className="text-sm text-on-surface-variant hover:text-brass-gold transition-colors" href="/open-abia">Budget Report</a></li>
<li><a className="text-sm text-on-surface-variant hover:text-brass-gold transition-colors" href="/invest-in-aba">Investment Guide</a></li>
</ul>
</div>
<div>
<h5 className="font-label-md text-forest-green mb-4">Legal</h5>
<ul className="space-y-2">
<li><a className="text-sm text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-on-surface-variant hover:text-brass-gold transition-colors" href="/news-press-center">Press Office</a></li>
</ul>
</div>
</div>
</div>
<div className="w-full border-t border-outline-variant py-6 px-6 md:px-margin-desktop max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-center text-on-surface-variant opacity-60">
<span className="font-caption text-caption">© 2024 Abia State Government. All Rights Reserved.</span>
<span className="font-caption text-caption mt-2 md:mt-0">Official Portal of the Ministry of Agriculture</span>
</div>
</footer>
</main>
{/*  FAB (Contextual for Home/Dashboard)  */}
<button className="fixed bottom-8 right-8 bg-brass-gold text-on-secondary-fixed p-4 shadow-xl flex items-center space-x-2 group hover:pr-6 transition-all z-50" id="support-fab">
<span className="material-symbols-outlined">support_agent</span>
<span className="font-label-md text-label-md overflow-hidden w-0 group-hover:w-auto transition-all whitespace-nowrap">Agri-Helpdesk</span>
</button>


      </div>
    </>
  );
}
