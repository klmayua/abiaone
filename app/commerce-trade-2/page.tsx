"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .brass-accent-line {\n            position: relative;\n        }\n        .brass-accent-line::after {\n            content: '';\n            position: absolute;\n            bottom: -8px;\n            left: 0;\n            width: 40px;\n            height: 3px;\n            background-color: #D4AF37;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(10px);\n            border: 1px solid #E2E8F0;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-surface font-body-md text-on-surface selection:bg-brass-gold/30">
        
{/*  TopNavBar  */}
<header className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline fixed top-0 w-full z-50">
<div className="flex justify-between items-center w-full px-margin-desktop max-w-max-width mx-auto h-16">
<div className="flex items-center gap-8">
<span className="font-headline-md text-headline-md font-bold text-forest-green dark:text-primary-fixed-dim">ABIA ONE</span>
<nav className="hidden md:flex items-center gap-6">
<a className="font-label-md text-label-md text-forest-green dark:text-primary-fixed-dim border-b-2 border-brass-gold pb-1 transition-opacity opacity-80" href="/invest-in-aba">Invest</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-forest-green dark:hover:text-primary-fixed-dim transition-colors" href="/jobs-abia">Jobs</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-forest-green dark:hover:text-primary-fixed-dim transition-colors" href="/serve-abia">Serve</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-forest-green dark:hover:text-primary-fixed-dim transition-colors" href="#">Verify</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-forest-green dark:hover:text-primary-fixed-dim transition-colors" href="/local-governance">Governance</a>
</nav>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer" data-icon="language">language</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer" data-icon="notifications">notifications</span>
<button className="bg-forest-green text-on-primary px-6 py-2 rounded-lg font-headline-sm font-bold text-label-md hover:bg-primary transition-all">Sign In</button>
</div>
</div>
</header>
{/*  SideNavBar (Hidden on main landing, but kept for context as per JSON)  */}
<aside className="hidden lg:flex flex-col fixed left-0 top-16 h-[calc(100vh-64px)] py-6 px-4 space-y-2 w-64 bg-surface-container-low dark:bg-inverse-surface border-r border-outline-variant z-40">
<div className="mb-6 px-2">
<h2 className="font-headline-sm text-headline-sm font-bold text-forest-green dark:text-primary-fixed-dim">Command Center</h2>
<p className="font-label-md text-label-md text-on-surface-variant">State Operating System</p>
</div>
<div className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-on-primary-container bg-primary-container dark:bg-primary-fixed-dim dark:text-on-primary-fixed rounded-lg scale-95 transition-transform" href="/">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-label-md">Analytics</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-md">Revenue Tracking</span>
</a>
</div>
<div className="mt-auto border-t border-outline-variant pt-4">
<button className="w-full bg-brass-gold text-on-secondary px-4 py-2 rounded-lg font-label-md mb-4">Export Report</button>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-label-md">Sign Out</span>
</a>
</div>
</aside>
<main className="lg:ml-64 pt-20 pb-12 px-6 md:px-margin-desktop max-w-max-width mx-auto">
{/*  Hero Section  */}
<section className="mb-12">
<div className="relative h-[400px] rounded-xl overflow-hidden bg-forest-green flex items-center px-12">
<div className="absolute inset-0 opacity-20">

</div>
<div className="relative z-10 max-w-2xl text-white">
<span className="inline-block bg-brass-gold text-on-secondary-fixed font-label-md text-label-md px-3 py-1 rounded-full mb-4">COMMERCE &amp; TRADE SECTOR</span>
<h1 className="font-display-lg text-display-lg mb-4 leading-tight">Empowering the <span className="text-brass-gold underline">Japan of Africa</span></h1>
<p className="font-body-lg text-body-lg text-on-primary-container opacity-90 mb-8">From the artisan workshops of Aba to the global trade routes, Abia One provides the infrastructure for your business to scale across borders.</p>
<div className="flex gap-4">
<button className="bg-brass-gold text-on-secondary-fixed px-8 py-3 rounded-lg font-headline-sm font-bold flex items-center gap-2">
                            Explore Opportunities <span className="material-symbols-outlined" data-icon="trending_up">trending_up</span>
</button>
<button className="border border-white text-white px-8 py-3 rounded-lg font-headline-sm font-bold hover:bg-white/10 transition-colors">Apply for Grant</button>
</div>
</div>
</div>
</section>
{/*  Stats Bento Grid  */}
<section className="mb-16">
<h2 className="font-headline-lg text-headline-lg mb-8 brass-accent-line">Trade Statistics</h2>
<div className="bento-grid">
<div className="col-span-12 md:col-span-4 glass-card p-6 rounded-xl border border-outline-variant flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-forest-green text-4xl mb-4" data-icon="shopping_bag">shopping_bag</span>
<h3 className="font-headline-md text-headline-md mb-2">Aba Markets</h3>
<p className="font-body-md text-on-surface-variant">Daily economic volume processed through Ariaria and Ahia Ohuru.</p>
</div>
<div className="mt-8">
<span className="text-4xl font-bold text-forest-green">₦2.4B+</span>
<p className="font-caption text-caption text-on-surface-variant">Avg Daily Transactional Value</p>
</div>
</div>
<div className="col-span-12 md:col-span-8 glass-card p-6 rounded-xl border border-outline-variant relative overflow-hidden">
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md mb-2">Export Growth 2024</h3>
<p className="font-body-md text-on-surface-variant mb-6">Growth of Aba-made leather and garment exports to West African markets.</p>
<div className="h-48 w-full bg-surface-container-high rounded-lg flex items-end justify-between px-6 pb-4">
{/*  Simulating a chart with Tailwind  */}
<div className="w-12 bg-forest-green h-[40%] rounded-t-sm" title="Jan"></div>
<div className="w-12 bg-forest-green h-[55%] rounded-t-sm" title="Feb"></div>
<div className="w-12 bg-forest-green h-[45%] rounded-t-sm" title="Mar"></div>
<div className="w-12 bg-brass-gold h-[75%] rounded-t-sm" title="Apr"></div>
<div className="w-12 bg-forest-green h-[65%] rounded-t-sm" title="May"></div>
<div className="w-12 bg-forest-green h-[85%] rounded-t-sm" title="Jun"></div>
<div className="w-12 bg-eagle-red h-[95%] rounded-t-sm" title="Jul"></div>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-6 glass-card p-6 rounded-xl border border-outline-variant flex items-center gap-6">
<div className="bg-primary-fixed p-4 rounded-full">
<span className="material-symbols-outlined text-forest-green" data-icon="groups">groups</span>
</div>
<div>
<h4 className="font-headline-md text-headline-md">150k+</h4>
<p className="font-body-md text-on-surface-variant">Registered MSMEs in Abia One Ecosystem</p>
</div>
</div>
<div className="col-span-12 md:col-span-6 glass-card p-6 rounded-xl border border-outline-variant flex items-center gap-6">
<div className="bg-tertiary-fixed p-4 rounded-full">
<span className="material-symbols-outlined text-tertiary" data-icon="public">public</span>
</div>
<div>
<h4 className="font-headline-md text-headline-md">12+</h4>
<p className="font-body-md text-on-surface-variant">Countries importing "Aba-Made" Certified Goods</p>
</div>
</div>
</div>
</section>
{/*  Interactive Hubs Map  */}
<section className="mb-16">
<div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
<div>
<h2 className="font-headline-lg text-headline-lg brass-accent-line">Commercial Hubs</h2>
<p className="font-body-md text-on-surface-variant mt-4">Visualizing the strategic nodes of Abia's commerce network.</p>
</div>
<div className="flex gap-2">
<button className="bg-surface-container border border-outline-variant px-4 py-2 rounded-lg font-label-md flex items-center gap-2 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span> Filter Hubs
                    </button>
<button className="bg-surface-container border border-outline-variant px-4 py-2 rounded-lg font-label-md flex items-center gap-2 hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="map">map</span> View Grid
                    </button>
</div>
</div>
<div className="grid grid-cols-12 gap-6 h-[500px]">
<div className="col-span-12 md:col-span-8 rounded-xl overflow-hidden border border-outline-variant bg-slate-100 relative">
<img className="w-full h-full object-cover grayscale opacity-50 contrast-125" data-alt="A stylized digital cartography map of Abia State, Nigeria, highlighting the cities of Aba and Umuahia. The map uses a sophisticated dark green and brass gold color scheme with glowing neon markers for commercial hubs. The lighting is crisp and technological, suggesting a state-of-the-art logistics and trade monitoring system. The aesthetic is clean, professional, and high-contrast." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzAL1upvu4OHTzKyA9K5OHMVX9G3qTBo63Zv64XxZWsf9m80rMcckgF-F8FzXKb6KbBd93XYlNSw1Xlj_KygqTZX3KYIaxjR-acqmt3UmONqtzfoegxMVdbFV_pOiFnWc5azgWD_nntsMY6C7svxlJ-JjUsw88tmHHa1wTMjo3BUkm4F24xL_fQ49zIxw45jWG4rKcrn10CiL_XGccTyVh92mhsZHaY2QntAIjLa4-Rh2DIaW4ApGaT_RdCR1Fc46Y4zf38_Mw-tg" />
{/*  Map Markers  */}
<div className="absolute top-[60%] left-[45%] group cursor-pointer">
<div className="w-6 h-6 bg-forest-green rounded-full border-2 border-white animate-pulse"></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
<p className="font-headline-sm font-bold text-forest-green">Ariaria Intl Market</p>
<p className="text-xs text-on-surface-variant">Focus: Leather, Garments, Electronics</p>
</div>
</div>
<div className="absolute top-[30%] left-[55%] group cursor-pointer">
<div className="w-6 h-6 bg-brass-gold rounded-full border-2 border-white"></div>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
<p className="font-headline-sm font-bold text-forest-green">Umuahia Logistics Hub</p>
<p className="text-xs text-on-surface-variant">Focus: Agro-processing, Distribution</p>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-4 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
<div className="p-4 border border-outline-variant rounded-lg bg-surface-container-lowest hover:border-forest-green transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<h5 className="font-headline-sm font-bold">Aba North Shoe Plaza</h5>
<span className="bg-primary-fixed text-on-primary-fixed text-[10px] px-2 py-0.5 rounded-pill">HIGH CAPACITY</span>
</div>
<p className="font-caption text-on-surface-variant">Specializing in high-end leather footwear for export to European markets.</p>
</div>
<div className="p-4 border border-outline-variant rounded-lg bg-surface-container-lowest hover:border-forest-green transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<h5 className="font-headline-sm font-bold">Enyimba Industrial City</h5>
<span className="bg-secondary-fixed text-on-secondary-fixed text-[10px] px-2 py-0.5 rounded-pill">UNDER DEV</span>
</div>
<p className="font-caption text-on-surface-variant">The future of Abia's manufacturing. Integrated free trade zone.</p>
</div>
<div className="p-4 border border-outline-variant rounded-lg bg-surface-container-lowest hover:border-forest-green transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<h5 className="font-headline-sm font-bold">Ahia Ohuru (New Market)</h5>
<span className="bg-primary-fixed text-on-primary-fixed text-[10px] px-2 py-0.5 rounded-pill">VIBRANT</span>
</div>
<p className="font-caption text-on-surface-variant">The primary node for textile trade and artisan garment manufacturing.</p>
</div>
</div>
</div>
</section>
{/*  SME Support Section  */}
<section className="mb-16 bg-surface-container-low rounded-2xl p-10 border border-outline-variant">
<div className="max-w-4xl">
<h2 className="font-headline-lg text-headline-lg mb-4">Export &amp; SME Support</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-10">We provide the technical and financial leverage for Aba-made goods to compete globally. Scale your vision with the state’s digital backbone.</p>
<div className="grid md:grid-cols-3 gap-8">
<div className="space-y-4">
<div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm">
<span className="material-symbols-outlined text-forest-green" data-icon="verified">verified</span>
</div>
<h4 className="font-headline-sm font-bold">Quality Certification</h4>
<p className="font-body-md text-on-surface-variant">State-backed verification and standardization for international trade compliance.</p>
<a className="text-forest-green font-label-md flex items-center gap-1 hover:underline" href="#">Get Certified <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span></a>
</div>
<div className="space-y-4">
<div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm">
<span className="material-symbols-outlined text-forest-green" data-icon="payments">payments</span>
</div>
<h4 className="font-headline-sm font-bold">Credit Facilities</h4>
<p className="font-body-md text-on-surface-variant">Low-interest loans and revolving credit specifically for export-oriented manufacturing.</p>
<a className="text-forest-green font-label-md flex items-center gap-1 hover:underline" href="#">View Rates <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span></a>
</div>
<div className="space-y-4">
<div className="w-12 h-12 bg-white flex items-center justify-center rounded-lg shadow-sm">
<span className="material-symbols-outlined text-forest-green" data-icon="language">language</span>
</div>
<h4 className="font-headline-sm font-bold">E-Commerce Gateway</h4>
<p className="font-body-md text-on-surface-variant">Direct integration with global marketplaces and logistics providers via the Abia One API.</p>
<a className="text-forest-green font-label-md flex items-center gap-1 hover:underline" href="#">Setup Store <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span></a>
</div>
</div>
</div>
</section>
{/*  Dynamic Featured Card  */}
<section className="mb-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div className="rounded-xl overflow-hidden aspect-video border border-outline-variant shadow-lg group relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A highly detailed close-up of a skilled artisan crafting a premium leather shoe in a modern, well-lit workshop in Aba. The lighting is warm and cinematic, highlighting the texture of the leather and the precision of the tools. The background is a blurred high-tech manufacturing environment with green and gold accents. The atmosphere conveys excellence, heritage, and industrial progress." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaToJ1V3XdgjWpc_WZeCVMcfBbJTFh5ZowqJIgOxG-nO2dCR8wKruyH5P8OEW-BdDzYRysQM2ElmXq6Qb6-VhF4eXMOG-91LEpLMRywHDkClBy059X1x6P0Kzu8N7XR3Akh2KJAjdxNfjh3Zu4_rLD3gtdRbhdz1NY9cjoxR1E3TEgRjc3cGDeKoPX8oj-fWLiTG7eUgC_WMxVdDslDi9qKSc4izYx6XYSz_ZUEhQuWiMonVECco8MmrpFw-7v6WQZ7trAmhZ7I8E" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-label-md bg-forest-green/80 inline-block px-2 py-1 rounded mb-2">FEATURED STORY</p>
<h4 className="font-headline-md font-bold">From Aba to Milan: The Footwear Revolution</h4>
</div>
</div>
<div className="flex flex-col justify-center">
<h2 className="font-headline-lg text-headline-lg mb-4">Aba-Made Global</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-6 italic border-l-4 border-brass-gold pl-6">"Our goal is not just to trade, but to dominate the leather and garment manufacturing space in Africa through automation and standardisation."</p>
<p className="font-body-md text-on-surface-variant mb-8">Abia State is pioneering a "Producer's Economy." By digitalizing the trade lifecycle, we've reduced export friction by 40% in 18 months.</p>
<div>
<button className="bg-forest-green text-on-primary px-8 py-3 rounded-lg font-headline-sm font-bold hover:shadow-lg transition-all">Read Whitepaper</button>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant mt-12">
<div className="w-full py-8 px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-max-width mx-auto">
<div className="mb-6 md:mb-0">
<span className="font-headline-sm text-headline-sm font-bold text-forest-green dark:text-primary-fixed-dim">ABIA ONE</span>
<p className="font-caption text-caption text-on-surface-variant mt-2">© 2024 Abia State Government. All Rights Reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Terms of Service</a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Us</a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="/news-press-center">Press Office</a>
</div>
</div>
</footer>
{/*  FAB (Suppressed as per rules for detailed/transactional pages, but illustrating conditional logic)  */}
{/*  Determined this page is a high-level sector page, but no specific action maps to the FAB. Suppressing.  */}


      </div>
    </>
  );
}
