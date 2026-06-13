"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { font-family: 'Hanken Grotesk', sans-serif; }\n        .material-symbols-outlined {
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); } font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }\n        .glass-panel { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }\n        .no-scrollbar::-webkit-scrollbar { display: none; }\n        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }\n        .before-after-slider { position: relative; width: 100%; height: 400px; overflow: hidden; border-radius: 0.25rem; }\n        .slider-handle { position: absolute; top: 0; bottom: 0; width: 4px; background: white; cursor: ew-resize; z-index: 10; display: flex; align-items: center; justify-content: center; transform: translateX(-50%); }\n        .slider-handle::after { content: \"↔\"; background: #004d28; color: white; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; }\n        .img-after { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; }\n        .img-before { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; clip-path: inset(0 50% 0 0); transition: none; }" 
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
        }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background selection:bg-brass-gold/30">
        
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 dark:bg-forest-deep/80 backdrop-blur-md border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-4">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep dark:text-primary-fixed"><img src="/Logos/Abia_One_No_Background.png" alt="ABIA ONE" className="h-20 w-auto" /></span>
<span className="hidden md:block h-6 w-px bg-outline-variant"></span>
<span className="hidden md:block font-label-md text-label-md text-on-surface-variant tracking-wider">ABA 2.0 PORTAL</span>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-primary dark:text-primary-fixed-dim border-b-2 border-brass-accent pb-1 font-label-md" href="/economic-transformation">Economy</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 font-label-md" href="/serve-abia">Digital Gov</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 font-label-md" href="/local-governance">Governance</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 font-label-md" href="/secure-abia">Security</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-lg font-label-md hover:opacity-90 transition-all">
<span className="material-symbols-outlined text-sm">emergency_home</span> Emergency
            </button>
<button className="px-6 py-2 bg-primary text-on-primary rounded-lg font-label-md hover:shadow-lg transition-all active:scale-95">Citizen Portal</button>
</div>
</nav>
{/*  SideNavBar (Desktop Dashboard View)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-16 bg-surface-container-low dark:bg-forest-deep border-r border-outline-variant z-40">
<div className="p-6">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container">location_city</span>
</div>
<div>
<p className="font-headline-md text-headline-md text-primary leading-tight">ABA 2.0</p>
<p className="font-caption text-caption text-on-surface-variant">Urban Renewal OS</p>
</div>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-4 py-3 bg-secondary-container dark:bg-primary-container text-on-secondary-container dark:text-on-primary-container rounded-lg transition-all translate-x-1" href="/economic-transformation">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-sm text-label-sm">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="/serve-abia">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
<span className="font-label-sm text-label-sm">Digital Government</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="/local-governance">
<span className="material-symbols-outlined" data-icon="vptree">mitre</span>
<span className="font-label-sm text-label-sm">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="/secure-abia">
<span className="material-symbols-outlined" data-icon="security">security</span>
<span className="font-label-sm text-label-sm">Public Trust</span>
</a>
</nav>
</div>
<div className="mt-auto p-6 border-t border-outline-variant">
<button className="w-full mb-6 py-3 px-4 bg-brass-gold/10 text-on-secondary-container border border-brass-gold/30 rounded-lg font-label-md flex items-center justify-center gap-2">
<span className="material-symbols-outlined">forum</span> Citizen Feedback
            </button>
<div className="space-y-1">
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant font-label-sm hover:underline" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span> Settings
                </a>
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant font-label-sm hover:underline" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span> Support
                </a>
</div>
</div>
</aside>
{/*  Main Content Area  */}
<main className="lg:ml-64 pt-24 pb-12 px-margin-mobile md:px-margin-desktop min-h-screen">
{/*  Hero Section: Data Overlay  */}
<header className="relative mb-12 rounded-xl overflow-hidden h-[400px] flex items-end">
<img alt="Aba Road Construction" className="absolute inset-0 w-full h-full object-cover" data-alt="A wide angle high-altitude drone shot of a massive road construction site in Aba, Nigeria, featuring modern asphalt pavers and steamrollers working on a multi-lane highway. The lighting is warm golden hour sunlight, highlighting the contrast between the fresh dark asphalt and the red earth. The visual style is crisp and professional, emphasizing large-scale civil engineering and urban development." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOfQw1ZkscDvVFSdXYSSU9Mky60YIym8iH3AxzK-N3bsD1f_WkpGdIl7Nnv_uZAT6eSiulQsam5v-fTGb89S9JmbfPgeQlTFbuA8d7Sx1GX62g445013pt0si6PtpGAdJsi-EgUdWwjIfHrUN6TMArO4B0aIw775CrlqQ4Y3u5tdk9ihTbB0kk90Jlb5qL_oJVw4aF0F3ISExwFuxsEE0pitpwlnO7eBYAFbuWxWkH-9fCecMu_7LzDNpyQnSlZEargNCrb9mKGB8" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
<div className="relative p-8 md:p-12 w-full max-w-4xl">
<span className="bg-brass-gold text-primary-fixed-dim px-3 py-1 rounded font-label-md text-xs uppercase tracking-widest mb-4 inline-block">Infrastructure Flagship</span>
<h1 className="font-display-lg text-display-lg text-state-white mb-4">The Aba 2.0 Evolution</h1>
<p className="font-body-lg text-body-lg text-primary-fixed max-w-2xl">Building the sovereign digital and physical infrastructure of the Enyimba City. Modern roads, integrated drainage, and smart lighting systems.</p>
</div>
</header>
{/*  Stats Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-12">
<div className="md:col-span-1 bg-surface-container-low p-6 border border-outline-variant rounded-lg">
<p className="font-label-md text-on-surface-variant mb-2">ROAD NETWORK</p>
<h3 className="font-headline-lg text-headline-lg text-primary">142<span className="text-xl font-normal ml-1">km</span></h3>
<p className="font-caption text-caption text-forest-green mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">trending_up</span> 14% increase this quarter
                </p>
</div>
<div className="md:col-span-1 bg-surface-container-low p-6 border border-outline-variant rounded-lg">
<p className="font-label-md text-on-surface-variant mb-2">SMART LIGHTING</p>
<h3 className="font-headline-lg text-headline-lg text-primary">3,450+</h3>
<p className="font-caption text-caption text-forest-green mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-xs">bolt</span> Solar-integrated
                </p>
</div>
<div className="md:col-span-2 bg-primary p-6 rounded-lg text-on-primary flex justify-between items-center relative overflow-hidden">
<div className="relative z-10">
<p className="font-label-md text-primary-fixed-dim mb-2 uppercase">Project Status</p>
<h3 className="font-headline-md text-headline-md mb-1">Aba-Owerri Expansion</h3>
<div className="flex items-center gap-4 mt-4">
<div className="w-48 h-2 bg-on-primary/20 rounded-full overflow-hidden">
<div className="h-full bg-brass-gold" style={{"width":"78%"}}></div>
</div>
<span className="font-label-md">78% Complete</span>
</div>
</div>
<span className="material-symbols-outlined text-8xl opacity-10 absolute -right-4 -bottom-4">engineering</span>
</div>
</div>
{/*  Before/After Section  */}
<section className="mb-12">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary">Before &amp; After Showcase</h2>
<div className="w-24 h-1 bg-brass-gold mt-2"></div>
</div>
<p className="hidden md:block font-body-md text-on-surface-variant max-w-sm">Witness the physical transformation of Aba's most critical transit corridors through high-precision engineering.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
{/*  Project 1: Port Harcourt Road  */}
<div className="bg-surface-container p-4 border border-outline-variant rounded-lg group">
<div className="before-after-slider mb-4" id="slider-ph-road">
<img alt="PH Road After" className="img-after" data-alt="A newly completed, wide six-lane asphalt highway in Aba, Nigeria, with crisp white lane markings and modern LED streetlights. The environment looks clean and orderly with paved sidewalks and concrete drainage gutters. The visual style is architectural and optimistic, showcasing successful urban development in a bright, sun-drenched day. The color palette is dominated by deep charcoal asphalt and bright white lines." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOdfkX9kDdyQCFotKx527lZ9jcSnCOhQ_SWPF3Nqz2Skv1E2NhG1KDEREHrn-KaVds5udh0cumeXQjywEU-1x-L1WNqjFDidr24hCtvl75_jL34Aj8y6_-KNHJsIVY_lanmyyPPr8JUTJb8IMbbi6yJF1IjA6dEWEk0c-7C5hawxQNpgmbu9wi0y5V_Wxq9liBLtk6jwprFYhCshKYSYg9znpNeH1fX0BA_-oWqODLdz7m3FEBkcTDkcsvzqBNXlgOv6KpOxv7xM0" />
<img alt="PH Road Before" className="img-before" data-alt="A dilapidated, pothole-ridden dusty road in an urban commercial area with muddy puddles and chaotic surrounding structures. The lighting is harsh and dusty, creating a sense of neglect and urgent need for repair. The atmosphere is congested and disorganized. The color palette is earthy, with browns, greys, and muted greens." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP7T4XzM0LdUapXh52imFXkthRGAb1BASg-MbWAhqk8RzpKLzQf4clfzc9jASHFm62OAo8dMcYRsz0h87LAIFSYoUYnYZEXswewQn-FYZJn6ekla6gkHht4gJA13uiJgcJPJMjYc6xOjejPgspKPrxrSHyt-M8AFTrTf3vrlLGHU6d-_qEXZQ2RymEVoT6aubIUIjoMG632f9ShNfjl0LLLY1pu-q84c14Y9B2PJrQoDIpj1qyI7Xxe98e2bg7DkcYegHm5kc3cEI" />
<div className="slider-handle" style={{"left":"50%"}}></div>
</div>
<div className="flex justify-between items-center">
<div>
<h4 className="font-headline-md text-headline-md">Port Harcourt Road</h4>
<p className="font-caption text-caption text-on-surface-variant uppercase">Integrated Drainage &amp; Lighting</p>
</div>
<span className="px-3 py-1 bg-primary text-on-primary text-xs font-label-md rounded">COMPLETED</span>
</div>
</div>
{/*  Project 2: Aba-Owerri Road  */}
<div className="bg-surface-container p-4 border border-outline-variant rounded-lg group">
<div className="before-after-slider mb-4" id="slider-owerri-road">
<img alt="Aba Owerri Road After" className="img-after" data-alt="A high-speed expressway interchange in a modern city setting at dusk, with long exposure tail lights creating trails of light. The road is flanked by smart city poles that emit a soft blue glow. The architecture of the road is smooth and curvilinear. The mood is high-tech and efficient, with a dark forest green and neon blue lighting aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrB7uBDlpAZs9K6149G8tP9PWRwDs0rSONToE1d0DPAy4sGc8Y06lfWbp0_nNBL2DdX_Qb4DjNF6ejk4BOCC0YSeAlFk4aa2ohdE6Oh59zRxdR9vsyY4bED_dJ3MdRrjxItDeMBr29Jg_pb0mFYyynrNbmLVaaiPIpcp4GCDuyw5RGWkc81eBtGPnE1kchm0Q61oaMUXQ1Uz9ewcJWaWiCeIhqot-dljb25QmUjc-E71HSpTZDjh9LMCvG6lRO5FOxGfE4OVqY-oU" />
<img alt="Aba Owerri Road Before" className="img-before" data-alt="An old, narrow two-lane road with broken edges and overgrown vegetation on the sides. The sky is overcast and grey, creating a gloomy and stagnant atmosphere. The infrastructure is clearly outdated and insufficient for heavy traffic. The color palette is dull with desaturated colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7abrSnKLPZ0ByMIuD4dnntVzGorpJNWRa6T2_qlV9g0dDT3T5ab3et2LEdJuD0fanh-nnG7PA_xN4O5-lbfxBh3qoM0P1T35CIiA83UW3kpcyXASXfBfFi2akDFerH4xUbGdQw3ozjAqdwg2qI4LWPx_EyLm-w7Fz-bp_wSDKvzBKtLV_bxTlYB2IM7pBU95OW8oAjFHsVjnGAhVo_4hvJNsa1mRHre2DjxZZ6ldof4K7S3FIpnWZkfKyev-NPxe3tiGdcYd_8ac" />
<div className="slider-handle" style={{"left":"50%"}}></div>
</div>
<div className="flex justify-between items-center">
<div>
<h4 className="font-headline-md text-headline-md">Aba-Owerri Expansion</h4>
<p className="font-caption text-caption text-on-surface-variant uppercase">Dual-Carriageway Extension</p>
</div>
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-xs font-label-md rounded">78% IN PROGRESS</span>
</div>
</div>
</div>
</section>
{/*  Integrated Features: Interactive Grid  */}
<section className="mb-12">
<h2 className="font-headline-lg text-headline-lg text-primary mb-8">Integrated Urban Systems</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Smart Lighting Card  */}
<div className="bg-white p-8 border border-outline-variant rounded-lg hover:border-brass-gold transition-colors duration-300">
<div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-on-secondary-container" data-icon="light_mode" style={{"fontVariationSettings":"'FILL' 1"}}>light_mode</span>
</div>
<h3 className="font-headline-md text-headline-md mb-3">Adaptive Lighting</h3>
<p className="font-body-md text-on-surface-variant mb-6">Smart LED arrays that adjust intensity based on traffic flow and ambient light, powered by the Abia State Solar Grid.</p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm font-label-md text-primary">
<span className="material-symbols-outlined text-xs">check_circle</span> 65% Energy reduction
                        </li>
<li className="flex items-center gap-2 text-sm font-label-md text-primary">
<span className="material-symbols-outlined text-xs">check_circle</span> Real-time failure alerts
                        </li>
</ul>
</div>
{/*  Drainage Card  */}
<div className="bg-white p-8 border border-outline-variant rounded-lg hover:border-brass-gold transition-colors duration-300">
<div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-on-primary-container" data-icon="water_drop" style={{"fontVariationSettings":"'FILL' 1"}}>water_drop</span>
</div>
<h3 className="font-headline-md text-headline-md mb-3">Integrated Drainage</h3>
<p className="font-body-md text-on-surface-variant mb-6">Underground storm-water management systems designed for 100-year flood events, featuring automated silt traps.</p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm font-label-md text-primary">
<span className="material-symbols-outlined text-xs">check_circle</span> 42km Underground network
                        </li>
<li className="flex items-center gap-2 text-sm font-label-md text-primary">
<span className="material-symbols-outlined text-xs">check_circle</span> Watershed integration
                        </li>
</ul>
</div>
{/*  Fiber Optics Card  */}
<div className="bg-white p-8 border border-outline-variant rounded-lg hover:border-brass-gold transition-colors duration-300">
<div className="w-12 h-12 bg-tertiary-container rounded-full flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-on-tertiary-container" data-icon="router" style={{"fontVariationSettings":"'FILL' 1"}}>router</span>
</div>
<h3 className="font-headline-md text-headline-md mb-3">Digital Backbone</h3>
<p className="font-body-md text-on-surface-variant mb-6">Dedicated conduit systems installed beneath all new roads to house high-speed fiber optic cables for Enyimba Tech Hub.</p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm font-label-md text-primary">
<span className="material-symbols-outlined text-xs">check_circle</span> 5G Ready infrastructure
                        </li>
<li className="flex items-center gap-2 text-sm font-label-md text-primary">
<span className="material-symbols-outlined text-xs">check_circle</span> Tech corridor backbone
                        </li>
</ul>
</div>
</div>
</section>
{/*  Project Map / Location Focus  */}
<section className="bg-surface-container-high rounded-xl p-8 border border-outline">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-1">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">Aba Network Map</h2>
<p className="font-body-md text-on-surface-variant mb-8">Navigate through the active renewal zones. Click on a corridor to view real-time heavy equipment telemetry and current completion percentages.</p>
<div className="space-y-4">
<div className="p-4 bg-white rounded border-l-4 border-primary">
<p className="font-label-md text-xs text-on-surface-variant">ZONE A</p>
<p className="font-headline-md text-sm">Industrial Cluster Roads</p>
</div>
<div className="p-4 bg-white rounded border-l-4 border-brass-gold">
<p className="font-label-md text-xs text-on-surface-variant">ZONE B</p>
<p className="font-headline-md text-sm">Ariaria Market Bypass</p>
</div>
</div>
</div>
<div className="lg:col-span-2 relative h-[400px] rounded-lg overflow-hidden border border-outline-variant">
{/*  Map Placeholder with data-location  */}
<div className="w-full h-full bg-slate-200" data-location="Aba, Nigeria">
<img alt="Aba Construction Map" className="w-full h-full object-cover opacity-80" data-alt="A stylized digital map of Aba, Nigeria, focusing on major road arteries and urban layout. The map uses a sophisticated UI aesthetic with dark forest green lines for primary roads and golden highlights for active construction zones. Clean, modern typography labels key landmarks. The lighting is digital and glowing, suggesting a smart city command center display." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIXtOE8MWcMydwz83QmRpL6CUvbQbRnT0T9QLhoKuueTtyf8lkPMUXfpwOf05H5e84M0xvo4MxnJpfC-1_wOLWIy5JlhgMtZOhL-q2DnkYTesrJxpi_mgWYUAf20KlW1QoRuhahR_RW-p4esDvkW6dfXKcJ-YanIkwuYC9H8y1-zmlgCtK_Ozb8g2Fcst7GvY9RgnuGNzdZH65a3M8YOpcpBUf82mMa_pJhFS_-rorrruaPDk8kUnkHhb6KybRBqzV4wefds-4wEM" />
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/90 backdrop-blur px-6 py-4 rounded-full border border-primary shadow-xl flex items-center gap-3">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
</span>
<span className="font-label-md text-primary">LIVE: PH Road Asphalt Laying</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest dark:bg-forest-deep mt-auto py-12 border-t border-outline-variant dark:border-outline">
<div className="max-w-container-max-width mx-auto">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
<div className="max-w-sm">
<span className="font-headline-lg text-headline-lg text-forest-deep dark:text-primary-fixed block mb-4">ABIA ONE</span>
<p className="font-body-md text-on-surface-variant">The unified digital interface for the Government of Abia State. Driving transparency and rapid urban renewal through data-driven governance.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<p className="font-label-caps text-label-caps text-on-surface mb-4">PLATFORM</p>
<ul className="space-y-2">
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/invest-in-aba">Invest Abia</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/serve-abia">Serve Abia</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/build-abia">Build Abia</a></li>
</ul>
</div>
<div>
<p className="font-label-caps text-label-caps text-on-surface mb-4">LEGAL</p>
<ul className="space-y-2">
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="#">Privacy Policy</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/open-abia">Open Abia</a></li>
</ul>
</div>
<div>
<p className="font-label-caps text-label-caps text-on-surface mb-4">CONTACT</p>
<ul className="space-y-2">
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="#">Contact Us</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/citizen-consultations">Town Hall</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-body-md text-on-surface-variant text-sm">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-6">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">face_nod</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">public</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">mail</span>
</div>
</div>
</div>
</footer>


      </div>
    </>
  );
}
