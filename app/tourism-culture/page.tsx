"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".brass-accent-line {\n            position: relative;\n        }\n        .brass-accent-line::after {\n            content: '';\n            position: absolute;\n            bottom: -8px;\n            left: 0;\n            width: 40px;\n            height: 3px;\n            background-color: #D4AF37;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }\n        .mesh-bg {\n            background-color: #f6fbf3;\n            background-image: radial-gradient(at 0% 0%, rgba(0, 104, 56, 0.05) 0px, transparent 50%),\n                              radial-gradient(at 100% 100%, rgba(212, 175, 55, 0.05) 0px, transparent 50%);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background font-body-md text-on-surface mesh-bg">
        
{/*  TopNavBar (Shared Component)  */}
<header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant h-16 max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop flex justify-between items-center">
<div className="flex items-center gap-4">
<img src="/Logos/Abia_One_No_Background.png" alt="ABIA ONE" className="h-8 w-auto" />
</div>
<nav className="hidden md:flex gap-8 items-center h-full">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/economic-transformation">Economy</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/serve-abia">Digital Gov</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/local-governance">Governance</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/secure-abia">Security</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:block px-4 py-2 border border-brass-gold text-secondary font-medium text-sm rounded-lg hover:bg-secondary-container transition-all">Emergency</button>
<button className="bg-primary text-on-primary px-5 py-2 rounded-lg font-medium text-sm hover:opacity-90 active:scale-95 transition-all">Citizen Portal</button>
</div>
</header>
{/*  SideNavBar (Desktop Only)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-16 bg-surface-container-low border-r border-outline-variant z-40">
<div className="p-6 flex flex-col gap-1">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 bg-forest-green rounded-full flex items-center justify-center text-state-white">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>account_balance</span>
</div>
<div>
<h2 className="font-headline-md text-sm font-bold text-forest-deep leading-tight">ABIA ONE</h2>
<p className="text-[10px] text-outline uppercase tracking-widest font-bold">Modern Governance OS</p>
</div>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="/economic-transformation">
<span className="material-symbols-outlined text-[20px]">payments</span>
<span className="font-label-md text-sm">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg transition-all translate-x-1" href="/digital-archives-heritage">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings":"'FILL' 1"}}>mitre</span>
<span className="font-label-md text-sm">Cultural Heritage</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="/serve-abia">
<span className="material-symbols-outlined text-[20px]">account_balance</span>
<span className="font-label-md text-sm">Digital Government</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="/secure-abia">
<span className="material-symbols-outlined text-[20px]">security</span>
<span className="font-label-md text-sm">Public Trust</span>
</a>
</nav>
</div>
<div className="mt-auto p-4 border-t border-outline-variant">
<button className="w-full bg-forest-green text-state-white py-3 rounded-lg font-medium text-sm mb-4">Citizen Feedback</button>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant text-sm hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">settings</span>
<span>Settings</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant text-sm hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[18px]">help</span>
<span>Support</span>
</a>
</div>
</div>
</aside>
{/*  Main Content Shell  */}
<main className="lg:pl-64 pt-16 min-h-screen">
<div className="max-w-7xl mx-auto px-margin-mobile md:px-gutter py-12">
{/*  Hero Section  */}
<section className="relative mb-16 rounded-xl overflow-hidden min-h-[500px] flex items-center">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover" data-alt="A sweeping aerial panoramic view of the lush, rolling green hills and dense tropical rainforest of Abia State, Nigeria. The landscape is bathed in the warm, golden light of a late afternoon sun, casting long shadows across the undulating terrain. A distant river winds like a silver ribbon through the deep forest canopy. The atmosphere is majestic and serene, emphasizing the raw natural beauty and sovereign heritage of the region." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmUbMM1JCPXKeYJIQl9pZbKQOA5h7p_ODcS9RIp0dIqmTdfy9Ly3kEHnxp9k1mL7xn9uWC_zSIZtaqWwvEkC0wd7fBzU6MZTgJRFU-YDZDBoqUGVTIC_Sw7omM41HAItELOUel4ER2OeRVYdHkLF7lkqaG2twVSwXl_XclUAuZnWUo7z2EblfLbN7moTNg92oXY74GNMfDSQdN_k4H6hDjfWQwoChnkWJVeIpv3RmjJ_MfcIwkZRgHtfaWpyggCAv_4Ng3tTJuwko" />
<div className="absolute inset-0 bg-gradient-to-r from-forest-green/90 to-transparent"></div>
</div>
<div className="relative z-10 p-8 md:p-16 max-w-2xl">
<div className="mb-4 inline-block px-3 py-1 bg-brass-gold/20 border border-brass-gold text-brass-gold rounded-full text-xs font-bold tracking-widest uppercase">
                        State Sovereign Infrastructure
                    </div>
<h1 className="font-display-lg text-display-lg text-state-white mb-6">Timeless Heritage. <br /><span className="text-secondary-fixed">Future Infrastructure.</span></h1>
<p className="font-body-lg text-body-lg text-surface-container-highest mb-8 opacity-90">
                        Welcome to the Abia One Tourism Portal. We are digitizing our cultural legacy to bridge the gap between ancient wisdom and modern investment, preserving the soul of the 'God's Own State'.
                    </p>
<div className="flex gap-4">
<button className="bg-brass-gold text-on-secondary px-8 py-4 rounded-lg font-bold shadow-lg hover:brightness-110 transition-all">Explore Archives</button>
<button className="border-2 border-state-white text-state-white px-8 py-4 rounded-lg font-bold hover:bg-state-white hover:text-forest-green transition-all">Investor Directory</button>
</div>
</div>
</section>
{/*  Featured Heritage Grid  */}
<section className="mb-16">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div className="max-w-xl">
<h2 className="font-headline-lg text-headline-lg text-forest-deep brass-accent-line">Strategic Heritage Sites</h2>
<p className="font-body-md text-on-surface-variant mt-4">Curated locations under active development for global tourism standards and cultural preservation.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 border border-outline-variant flex items-center justify-center rounded-lg hover:bg-surface-variant"><span className="material-symbols-outlined">chevron_left</span></button>
<button className="w-10 h-10 border border-outline-variant flex items-center justify-center rounded-lg hover:bg-surface-variant"><span className="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Long Juju of Arochukwu  */}
<div className="md:col-span-7 group">
<div className="relative h-96 rounded-xl overflow-hidden border border-outline-variant shadow-sm transition-transform duration-500 hover:-translate-y-1">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A dark, atmospheric, and mysterious stone cave entrance nestled within a dense, ancient jungle. Moss-covered boulders and twisting vines frame the entrance to the Long Juju of Arochukwu heritage site. Flickering sunlight filters through a thick green canopy, illuminating historical artifacts and carvings on the stone walls. The aesthetic is cinematic and high-contrast, evoking a sense of deep historical significance and spiritual power." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6aVSe-Rp2GyMPedJzbeyeC8T25cOnZvaXcRoJDQ8ZUzniIlbaNaJgES9Oyct3NvZ8CbzaPvDk7jxrkvQqrfu5yfox7IrdcnEy7uZ-xpC1_h0hiaJLNA-XA-aBIY1_tWEQBA2SGxFiDIqYdjl3zxXDcDqWzpBWW2w9kPUyLuF4cWzKwgN7jM7x64c-trbY2epILxf5XlvCfjqJJighBBdxkyp27v-F1Y2fw4zWo5movznwCYLHPSooynmDrEBlRqsdvmpONMMw82w" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="bg-brass-gold text-[10px] font-bold text-state-white px-2 py-1 rounded-sm uppercase tracking-widest mb-3 inline-block">Ancestral Gateway</span>
<h3 className="font-headline-lg text-state-white text-2xl">Long Juju of Arochukwu</h3>
<p className="text-surface-variant text-sm mt-2 max-w-md">The historical religious and judicial complex. Currently undergoing UNESCO-standard digitization and site restoration.</p>
</div>
<div className="absolute top-6 right-6">
<div className="bg-state-white/20 backdrop-blur-md rounded-full px-4 py-2 text-state-white font-label-md text-xs border border-state-white/30">
                                    Status: Digital Mapping Phase
                                </div>
</div>
</div>
</div>
{/*  Azumini Blue River  */}
<div className="md:col-span-5 flex flex-col gap-gutter">
<div className="relative h-full rounded-xl overflow-hidden border border-outline-variant group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A crystalline, perfectly clear blue river flowing gently through a lush tropical landscape of white sand banks and emerald trees. The water of the Azumini Blue River is so transparent that every pebble on the riverbed is visible. Soft morning light creates sparkling highlights on the water's surface. The style is bright and ultra-high-definition, showcasing a luxurious and pristine eco-tourism destination with a corporate, clean finish." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl3RrrIia9xo8zLwC1-_yF44sDkIvGuEFxCddXPelnYxca2DIMjd72_VA2A4m01PHYHjnVoB9KwgoNlOKA93DUPVQ63IDv6IPNbSwP6ONQ2SZYdU0NK6sc7bshHxQWq8DAkXOii1g5nVLXqcySLfnlnRppAjq6xbuNV0Uj3Q-rkftpmnYrGoNUwU9oLUPs5L4b3EgH0HDjj-HqV7GsKFpfcKcbIn3MhbJPk1ZB5GURSrtsHx__0gPKdAHfuHHtsPAJeaDPOjK-jmY" />
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="font-headline-md text-state-white text-xl">Azumini Blue River</h3>
<p className="text-surface-variant text-xs mt-1">Hospitality Development Zone</p>
<button className="mt-4 text-secondary-fixed font-bold text-xs flex items-center gap-1 hover:underline">VIEW MASTERPLAN <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
</div>
</div>
</div>
</div>
</section>
{/*  Digital Archives & Statistics Bento  */}
<section className="mb-16">
<h2 className="font-headline-lg text-headline-lg text-forest-deep mb-8">Ecosystem Dashboard</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
{/*  Stat Card 1  */}
<div className="glass-card p-6 rounded-xl border border-outline-variant flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-primary mb-4 text-3xl">cloud_download</span>
<p className="font-label-md text-xs text-outline uppercase tracking-wider">Digital Artifacts</p>
<h4 className="font-display-lg text-4xl text-forest-green mt-2">12,480</h4>
</div>
<p className="text-xs text-on-surface-variant mt-4">+12% increase this quarter in museum metadata indexing.</p>
</div>
{/*  Archive Preview Card  */}
<div className="md:col-span-2 glass-card p-6 rounded-xl border border-outline-variant flex gap-6">
<div className="w-1/3 rounded-lg overflow-hidden h-full min-h-[140px] border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A collection of intricate, ancient African bronze artifacts and carved ivory sculptures displayed in a modern, minimalist museum setting with precise spotlights. The artifacts are from the Abia State digital archives, showing detailed geometric patterns and historical craftsmanship. The lighting is sophisticated, with deep shadows and sharp highlights, emphasizing a professional and sovereign archival environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaNe5sDAe1roaAzZUA8RtRTN-b9qyuYlJA0coAKOGuNh-4mStG365IyMEn9l_oeTQJ4T0WJlDbKjT5FmVHaqonku7LBTTzuZzX9L4W8d5y92Id9nHv6ytrm35GBZ6GMLAPz0852hU1_1rF-AOBAlGPUJTAvPOjIzO2rXaxZnIaMHv-CADVtLcE5HBAWOTq4yKGaESLypx05N8xPzTcXHYcJQDHuzcekGYyX_ZFOFv9yXDljvLUuSuhftfzFBWBUTqwO4N06aN43XA" />
</div>
<div className="flex-1 flex flex-col justify-center">
<h4 className="font-headline-md text-lg text-forest-deep">State Museum Digital Archive</h4>
<p className="font-body-md text-sm text-on-surface-variant mt-2">Access high-resolution 3D scans of the Ohafia War Dance regalia and historical Nok-influence ceramics.</p>
<a className="inline-flex items-center gap-2 text-forest-green font-bold text-sm mt-4 group" href="/open-abia">
                                Open Explorer <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
</a>
</div>
</div>
{/*  Map/Location Card  */}
<div className="glass-card p-6 rounded-xl border border-outline-variant bg-forest-deep text-state-white">
<div className="flex justify-between items-start mb-6">
<h4 className="font-headline-md text-sm uppercase tracking-widest text-secondary-fixed">Global Connectivity</h4>
<span className="material-symbols-outlined text-secondary-fixed">public</span>
</div>
<p className="text-xs opacity-80 leading-relaxed">Connecting Abia’s cultural nodes to the global tourism network via the Abia One OS.</p>
<div className="mt-6 pt-6 border-t border-state-white/10">
<div className="flex justify-between text-xs mb-2">
<span>Site Accessibility</span>
<span>88%</span>
</div>
<div className="w-full bg-state-white/10 h-1.5 rounded-full">
<div className="bg-brass-gold h-full rounded-full" style={{"width":"88%"}}></div>
</div>
</div>
</div>
</div>
</section>
{/*  Investor Directory Section  */}
<section className="bg-surface-container-high rounded-xl p-8 md:p-12 border border-outline-variant">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
<div className="lg:col-span-1">
<h2 className="font-headline-lg text-headline-lg text-forest-deep brass-accent-line">Hospitality Investor Directory</h2>
<p className="font-body-md text-on-surface-variant mt-8">Pre-approved development opportunities for international hotel chains and eco-lodge developers.</p>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3 text-sm font-medium">
<span className="material-symbols-outlined text-forest-green" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
                                Tax Incentives &amp; PPP Frameworks
                            </li>
<li className="flex items-center gap-3 text-sm font-medium">
<span className="material-symbols-outlined text-forest-green" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
                                Accelerated Land Acquisition
                            </li>
<li className="flex items-center gap-3 text-sm font-medium">
<span className="material-symbols-outlined text-forest-green" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
                                Infrastructure Co-funding
                            </li>
</ul>
</div>
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
{/*  Investor Card 1  */}
<div className="bg-state-white p-6 rounded-lg border border-outline-variant hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-surface-container-highest rounded flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green">hotel</span>
</div>
<div>
<h5 className="font-bold text-forest-deep">Eco-Lodge Project B</h5>
<p className="text-xs text-outline">Arochukwu Forest Rim</p>
</div>
</div>
<div className="flex justify-between text-xs font-label-md mb-4 bg-surface-container-low p-2 rounded">
<span className="text-on-surface-variant">CAPEX: $12M</span>
<span className="text-forest-green font-bold">OPEN FOR BID</span>
</div>
<button className="w-full border border-forest-green text-forest-green py-2 rounded font-bold text-xs hover:bg-forest-green hover:text-state-white transition-colors">Review Prospectus</button>
</div>
{/*  Investor Card 2  */}
<div className="bg-state-white p-6 rounded-lg border border-outline-variant hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-surface-container-highest rounded flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green">waves</span>
</div>
<div>
<h5 className="font-bold text-forest-deep">Azumini Resort Spa</h5>
<p className="text-xs text-outline">Blue Riverfront Development</p>
</div>
</div>
<div className="flex justify-between text-xs font-label-md mb-4 bg-surface-container-low p-2 rounded">
<span className="text-on-surface-variant">CAPEX: $45M</span>
<span className="text-forest-green font-bold">SHORTLISTING</span>
</div>
<button className="w-full border border-forest-green text-forest-green py-2 rounded font-bold text-xs hover:bg-forest-green hover:text-state-white transition-colors">Review Prospectus</button>
</div>
{/*  Investor Card 3  */}
<div className="bg-state-white p-6 rounded-lg border border-outline-variant hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-surface-container-highest rounded flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green">theater_comedy</span>
</div>
<div>
<h5 className="font-bold text-forest-deep">Cultural Village Hub</h5>
<p className="text-xs text-outline">Umuahia North Heritage Zone</p>
</div>
</div>
<div className="flex justify-between text-xs font-label-md mb-4 bg-surface-container-low p-2 rounded">
<span className="text-on-surface-variant">CAPEX: $8M</span>
<span className="text-brass-gold font-bold">PROPOSAL STAGE</span>
</div>
<button className="w-full border border-forest-green text-forest-green py-2 rounded font-bold text-xs hover:bg-forest-green hover:text-state-white transition-colors">Review Prospectus</button>
</div>
{/*  Investor Card 4  */}
<div className="bg-state-white p-6 rounded-lg border border-outline-variant hover:shadow-md transition-shadow">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-surface-container-highest rounded flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green">map</span>
</div>
<div>
<h5 className="font-bold text-forest-deep">Heritage Trail Signage</h5>
<p className="text-xs text-outline">Statewide Smart Signage</p>
</div>
</div>
<div className="flex justify-between text-xs font-label-md mb-4 bg-surface-container-low p-2 rounded">
<span className="text-on-surface-variant">CAPEX: $2.5M</span>
<span className="text-forest-green font-bold">RFP ACTIVE</span>
</div>
<button className="w-full border border-forest-green text-forest-green py-2 rounded font-bold text-xs hover:bg-forest-green hover:text-state-white transition-colors">Review Prospectus</button>
</div>
</div>
</div>
</section>
</div>
</main>
{/*  Footer (Shared Component)  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto py-12 border-t border-outline-variant">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<span className="font-headline-lg text-headline-lg text-forest-deep font-bold mb-4 block">ABIA ONE</span>
<p className="font-body-md text-on-surface-variant max-w-sm">
                        Building the world's most transparent and citizen-centric state operating system. Empowering the people of Abia through technology and modern governance.
                    </p>
</div>
<div>
<h5 className="font-label-md text-sm font-bold text-forest-deep mb-4 uppercase tracking-widest">Connect</h5>
<ul className="flex flex-col gap-2">
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="/invest-in-aba">Invest Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="/serve-abia">Serve Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="/build-abia">Build Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="/open-abia">Open Abia</a></li>
</ul>
</div>
<div>
<h5 className="font-label-md text-sm font-bold text-forest-deep mb-4 uppercase tracking-widest">Legal</h5>
<ul className="flex flex-col gap-2">
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
<p>© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-6">
<a className="hover:underline" href="#">Transparency Portal</a>
<a className="hover:underline" href="/local-governance">E-Governance Hub</a>
</div>
</div>
</div>
</footer>
{/*  FAB (Suppressed on Details/Task screens, active here for primary action)  */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-forest-green text-state-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined text-2xl">map</span>
</button>


      </div>
    </>
  );
}
