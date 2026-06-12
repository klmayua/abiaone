export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .hero-gradient {\n            background: linear-gradient(135deg, rgba(0, 77, 40, 0.9) 0%, rgba(0, 104, 56, 0.7) 100%);\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(226, 232, 240, 0.5);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-background dark:bg-inverse-surface border-b border-outline-variant dark:border-outline">
<div className="flex justify-between items-center px-margin-desktop h-20 max-w-max-width mx-auto">
<div className="flex items-center gap-8">
<span className="font-display-lg text-display-lg font-bold text-primary dark:text-primary-fixed">ABIA ONE</span>
<div className="hidden md:flex gap-6">
<a className="text-primary dark:text-primary-fixed-dim border-b-2 border-brass-gold font-semibold pb-1 cursor-pointer transition-all duration-200 active:opacity-80" href="#">Economy</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer transition-all duration-200 active:opacity-80" href="#">Digital Gov</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer transition-all duration-200 active:opacity-80" href="#">Governance</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors cursor-pointer transition-all duration-200 active:opacity-80" href="#">Security</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="px-6 py-2 bg-forest-green text-state-white font-headline-md text-body-md rounded-lg hover:opacity-90 transition-opacity">Citizen Portal</button>
</div>
</div>
</nav>
{/*  SideNavBar  */}
<aside className="fixed left-0 top-20 h-[calc(100vh-80px)] w-64 bg-surface-container-low dark:bg-surface-dim border-r border-outline-variant hidden lg:flex flex-col py-6">
<div className="px-6 mb-8">
<h3 className="font-headline-md text-headline-md font-bold text-primary">Navigation</h3>
<p className="text-on-surface-variant font-caption text-caption uppercase tracking-wider">State Operating System</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 text-forest-green dark:text-primary-fixed font-bold border-l-4 border-brass-gold bg-surface-container-high px-4 py-3 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span>Economic Transformation</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-surface-variant px-4 py-3 hover:bg-surface-variant dark:hover:bg-inverse-surface transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
<span>Digital Government</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-surface-variant px-4 py-3 hover:bg-surface-variant dark:hover:bg-inverse-surface transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="gavel">gavel</span>
<span>Transparent Governance</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-surface-variant px-4 py-3 hover:bg-surface-variant dark:hover:bg-inverse-surface transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
<span>Public Trust</span>
</a>
</nav>
<div className="px-6 pt-6 border-t border-outline-variant">
<button className="w-full py-3 bg-secondary-container text-on-secondary-container font-semibold rounded-lg hover:shadow-md transition-all">Launch Service</button>
<div className="mt-4 space-y-2">
<a className="flex items-center gap-3 text-on-surface-variant font-caption text-caption px-2 py-1 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-sm" data-icon="settings">settings</span> Settings
                </a>
<a className="flex items-center gap-3 text-on-surface-variant font-caption text-caption px-2 py-1 hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-sm" data-icon="help">help</span> Support
                </a>
</div>
</div>
</aside>
{/*  Main Content  */}
<main className="lg:ml-64 pt-20 pb-20">
{/*  Hero Section  */}
<section className="relative h-[500px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 hero-gradient z-10"></div>
<img className="w-full h-full object-cover" data-alt="A wide cinematic shot of a bustling modern industrial port and manufacturing hub in West Africa at golden hour. Massive cargo ships are docked alongside state-of-the-art logistics facilities, with warm sunlight reflecting off solar panels and sleek steel structures. The atmosphere is one of immense economic power and technological progress, rendered in a professional, corporate photography style with deep forest green and golden highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0A2TLNNOi74Jd1mtBVCnHzVsZeKiGFYiMlSDEssRvvx6RyElXpPgeqCdJDMPKZ9j-lnE42UUp3Xkqd7I69FQ_mzDR7eYd7tvmB_4eU5TKxybJ66fEAZCJN5dgwnUS3Fw0UH73yGChkgAKFMP2kz--7rIffcLRXdcZXj8Tq-V-KNC6_ZeQ1c-NKMQPqPTlj6OUyN8QD3cECKcB9fuhBhSpHEKhJPg5o0LkgdQ2_lQJXTflZ_LV89pBzqwRkUwPbqdh4FjGsvEyKko" />
</div>
<div className="relative z-20 px-margin-desktop max-w-max-width">
<div className="max-w-2xl space-y-6">
<span className="inline-block py-1 px-4 bg-brass-gold text-on-secondary-fixed rounded-full font-label-md text-label-md">STRATEGIC LAYER 01</span>
<h1 className="font-display-lg text-display-lg text-state-white">Economic Transformation</h1>
<p className="font-headline-md text-headline-md text-primary-fixed-dim max-w-xl">Powering the next industrial revolution in West Africa through infrastructure, investment, and human capital.</p>
<div className="flex gap-4 pt-4">
<button className="px-8 py-3 bg-brass-gold text-on-secondary-fixed font-semibold rounded-lg hover:scale-105 transition-transform">Explore Opportunities</button>
<button className="px-8 py-3 border-2 border-state-white text-state-white font-semibold rounded-lg hover:bg-state-white/10 transition-colors">View Data Portal</button>
</div>
</div>
</div>
</section>
{/*  Bento Grid Sections  */}
<section className="px-margin-desktop py-16 max-w-max-width mx-auto">
<div className="bento-grid">
{/*  Industrial Hubs  */}
<div className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant p-8 rounded-xl shadow-sm">
<div className="flex justify-between items-end mb-8">
<div>
<div className="w-12 h-1 bg-brass-gold mb-2"></div>
<h2 className="font-headline-lg text-headline-lg text-primary">Industrial Hubs</h2>
<p className="text-on-surface-variant mt-1">Foundational infrastructure for the Manufacturing Renaissance.</p>
</div>
<span className="material-symbols-outlined text-primary text-4xl" data-icon="factory">factory</span>
</div>
<div className="space-y-8">
<div className="group">
<div className="flex justify-between mb-2">
<span className="font-headline-md text-body-md font-bold text-on-surface">Ariaria Industrial City</span>
<span className="font-label-md text-label-md text-forest-green">82% Complete</span>
</div>
<div className="h-4 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-forest-green transition-all duration-1000 ease-out w-[82%]"></div>
</div>
<p className="text-on-surface-variant text-sm mt-2">Specializing in leatherwork, garment production, and small-scale automation equipment.</p>
</div>
<div className="group">
<div className="flex justify-between mb-2">
<span className="font-headline-md text-body-md font-bold text-on-surface">Enyimba Economic City</span>
<span className="font-label-md text-label-md text-forest-green">45% Complete</span>
</div>
<div className="h-4 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-forest-green transition-all duration-1000 ease-out w-[45%]"></div>
</div>
<p className="text-on-surface-variant text-sm mt-2">A 9,500-hectare free trade zone focused on heavy industry, logistics, and global exports.</p>
</div>
</div>
</div>
{/*  ROI Metrics / Invest Abia  */}
<div className="col-span-12 lg:col-span-4 bg-primary text-state-white p-8 rounded-xl relative overflow-hidden">

<div className="relative z-10 h-full flex flex-col">
<h2 className="font-headline-lg text-headline-lg mb-2">Invest Abia</h2>
<p className="text-primary-fixed-dim mb-8">Direct portal for global institutional investors.</p>
<div className="flex-1 space-y-6">
<div className="bg-primary-container p-4 rounded-lg border border-primary-fixed/20">
<span className="text-caption font-caption uppercase tracking-wider text-primary-fixed">Avg. Industrial ROI</span>
<div className="text-display-lg font-bold">18.4%</div>
<span className="text-primary-fixed-dim text-sm flex items-center gap-1">
<span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span> +2.1% from Q3 2023
                                </span>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-primary-container p-4 rounded-lg border border-primary-fixed/20">
<span className="text-caption font-caption uppercase tracking-wider text-primary-fixed">FDI Inflow</span>
<div className="text-headline-md">$1.2B</div>
</div>
<div className="bg-primary-container p-4 rounded-lg border border-primary-fixed/20">
<span className="text-caption font-caption uppercase tracking-wider text-primary-fixed">Active Firms</span>
<div className="text-headline-md">412+</div>
</div>
</div>
</div>
<button className="mt-8 w-full py-4 bg-state-white text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                            Learn More <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
{/*  Jobs Abia Marketplace  */}
<div className="col-span-12 lg:col-span-7 bg-surface-container-low border border-outline-variant p-8 rounded-xl">
<div className="flex justify-between items-center mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary">Jobs Abia</h2>
<p className="text-on-surface-variant">The digital marketplace for the state's elite workforce.</p>
</div>
<button className="text-primary font-bold flex items-center gap-2 hover:underline">
                            Post a Role <span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
</button>
</div>
<div className="space-y-4">
<div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant flex justify-between items-center group hover:border-forest-green transition-colors cursor-pointer">
<div className="flex gap-4">
<div className="w-12 h-12 bg-surface-variant flex items-center justify-center rounded">
<span className="material-symbols-outlined text-primary" data-icon="handyman">handyman</span>
</div>
<div>
<h4 className="font-bold text-on-surface">Senior Leather Craftsman</h4>
<p className="text-sm text-on-surface-variant">Ariaria Footwear Hub • Full-time</p>
</div>
</div>
<div className="text-right">
<div className="text-forest-green font-bold">₦450k - ₦600k</div>
<span className="text-caption text-on-surface-variant">Posted 2h ago</span>
</div>
</div>
<div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant flex justify-between items-center group hover:border-forest-green transition-colors cursor-pointer">
<div className="flex gap-4">
<div className="w-12 h-12 bg-surface-variant flex items-center justify-center rounded">
<span className="material-symbols-outlined text-primary" data-icon="local_shipping">local_shipping</span>
</div>
<div>
<h4 className="font-bold text-on-surface">Logistics Operations Manager</h4>
<p className="text-sm text-on-surface-variant">Enyimba Dry Port • Project-based</p>
</div>
</div>
<div className="text-right">
<div className="text-forest-green font-bold">Competitive</div>
<span className="text-caption text-on-surface-variant">Posted 5h ago</span>
</div>
</div>
</div>
</div>
{/*  AI Academy  */}
<div className="col-span-12 lg:col-span-5 bg-white border border-outline-variant p-0 rounded-xl overflow-hidden flex flex-col">
<div className="h-48 relative">
<img className="w-full h-full object-cover" data-alt="A diverse group of young African professionals in a sleek, high-tech classroom setting, focused on modern laptops. They are collaborating on complex code and AI neural network visualizations displayed on large, minimalist screens in the background. The lighting is cool and professional, emphasizing a future-forward educational environment with subtle brass gold accents in the furniture design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjya1RPDxEFPm_WB3FnJ6WjplRvEtSj9V9mN-FFP1s-vbg6z5c25JvEmVhdtWWDv1OcnyhUaOL7QhOvZOu9T32C8Z8SFA6BQIUYZ_6GaTzk2ImEM6AdLgsAixuQNOHWqmLQ6i7bSugcgqaQJ2L0spOTlil_W199XaOrs8_7Jw_1hGXxKeKu2sa8MHGmR4_LhNAudyBIrOGpbaqbL4gjGSh3TDSywsTJZjT7vwSGObYU-XX6qPWvuM1NbZ9NwpGpwsErw60hKFwU4Q" />
<div className="absolute top-4 left-4 bg-forest-green text-state-white px-3 py-1 rounded text-caption font-bold">ENROLLING NOW</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h2 className="font-headline-lg text-headline-lg text-primary mb-2">AI Academy</h2>
<p className="text-on-surface-variant mb-6">Upskilling 50,000 Abia youth in Artificial Intelligence and Machine Learning for the global digital economy.</p>
<div className="flex items-center gap-4 mb-8">
<div className="flex -space-x-3">
<img alt="Student 1" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9sZKIUocwRaPhloS2BTqheTN-8RBRDClKK_rXzE2qEC_EMLBcIkwhSqhjwXFao-K2tZPBWJaAwRhmqMmDqgqN-JhaaiWYBo4Nj9rnC9cLSxAFZOWjnFl9PSGGuSq9iClqbLmDmfWPHukQT1OWI_SQyiNAVZNJcVho12FfNkuGkwdN3w8BrBqqkpr9nzHUwJiTnKlNmmR6qZvmPlw8trYNSMJtREsmk1c-T2-Ificq8Mh-k2i29Ifni_qw3CaBZaH8uVMKOpbkAk0" />
<img alt="Student 2" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsE7moBmiQyAH8GI3tQXUUe8SnHufHtuREKMkH2B_urIvr3ecHDCnkubpr0JAgOteM2zZPRDi_UwLkyWXIw7fe-OFcMesSROdPOp-1088ZgmOgTjvDAA2RWlygaz1c9RB8PiWS7Q8DgCOPRaeRAfYLHcu6cfWQjzIzDpzp6Rk5VZ_DoN8LX8Ur1JQkvrWxMbEBHfq6CXC3dP2CZLezQj-bouAwLTm2hpwv6Z2-TnRYL3V9gIGnYJJ5mYc7l-L2Vz73-P2r-7j7VfA" />
<img alt="Student 3" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeMOSJ2YzD4bnBltxE-SfIVRR6z9uLW-HopMWbZuawejwqaxltT7rwfkD67UwL0rBBphEK0XPazYX7xdMnbhbQDSNy-9sfR4XRbp5STVwgY-08Uq-S6sooABePeBGG9zEwQ4nGOdWPfey2Ou94ebATZ-FHH1fKAGMEgLo2ECXYUzFsYBfMZqH-tskVx9ebIyx1eqRoi8lhANON3EUmVRAVxwdb8atWR7-DMSnskgySMMk2uy4rpV5irLq8B-fns5_1uy5roySbvQ8" />
<div className="w-10 h-10 rounded-full bg-surface-variant border-2 border-white flex items-center justify-center text-xs font-bold">+12k</div>
</div>
<span className="text-caption font-medium text-on-surface-variant">Join 12,400+ active scholars</span>
</div>
<div className="mt-auto">
<button className="w-full py-4 bg-forest-green text-state-white font-bold rounded hover:bg-primary transition-colors">Apply for Cohort 4</button>
</div>
</div>
</div>
</div>
</section>
{/*  Data visualization section / Secondary Hero  */}
<section className="bg-surface-container-high py-16">
<div className="px-margin-desktop max-w-max-width mx-auto">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/2 space-y-6">
<h2 className="font-display-lg text-headline-lg text-primary">A Data-Driven Renaissance</h2>
<p className="text-body-lg text-on-surface-variant">We don't just build; we measure. Every industrial hub and human capital initiative is tracked in real-time through the Abia One Operating System to ensure transparency and performance for citizens and stakeholders alike.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-forest-green" data-icon="check_circle">check_circle</span>
<div>
<span className="font-bold">Real-time Project Tracking</span>
<p className="text-sm text-on-surface-variant">Live feeds from every construction site in the state.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-forest-green" data-icon="check_circle">check_circle</span>
<div>
<span className="font-bold">Automated ROI Audits</span>
<p className="text-sm text-on-surface-variant">Open-ledger accounting for all foreign direct investments.</p>
</div>
</li>
</ul>
</div>
<div className="md:w-1/2 bg-white p-6 rounded-2xl border border-outline-variant shadow-lg w-full">
<div className="flex justify-between items-center mb-6">
<h4 className="font-bold">Quarterly Growth Projection</h4>
<div className="flex gap-2">
<span className="w-3 h-3 bg-forest-green rounded-full"></span>
<span className="w-3 h-3 bg-brass-gold rounded-full"></span>
</div>
</div>
<div className="h-64 flex items-end justify-between gap-4 px-4">
<div className="w-full bg-forest-green/20 h-1/4 rounded-t relative group cursor-help">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-gray text-white text-[10px] px-2 py-1 rounded hidden group-hover:block">Q1</div>
</div>
<div className="w-full bg-forest-green/40 h-2/5 rounded-t relative group cursor-help">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-gray text-white text-[10px] px-2 py-1 rounded hidden group-hover:block">Q2</div>
</div>
<div className="w-full bg-forest-green/60 h-3/5 rounded-t relative group cursor-help">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-gray text-white text-[10px] px-2 py-1 rounded hidden group-hover:block">Q3</div>
</div>
<div className="w-full bg-forest-green h-4/5 rounded-t relative group cursor-help">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-gray text-white text-[10px] px-2 py-1 rounded hidden group-hover:block">Q4</div>
</div>
<div className="w-full bg-brass-gold h-full rounded-t relative group cursor-help">
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-gray text-white text-[10px] px-2 py-1 rounded hidden group-hover:block">Target</div>
</div>
</div>
<div className="mt-4 flex justify-between text-caption font-caption text-on-surface-variant">
<span>JAN</span><span>MAR</span><span>JUN</span><span>SEP</span><span>DEC</span>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="relative bottom-0 w-full bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant dark:border-outline">
<div className="flex flex-col md:flex-row justify-between items-center py-gutter px-margin-desktop max-w-max-width mx-auto">
<div className="mb-4 md:mb-0">
<span className="font-headline-md text-headline-md text-primary">ABIA ONE</span>
<p className="font-caption text-caption text-on-surface-variant max-w-xs mt-2">© 2024 Abia State Government. All rights reserved. Built for the future of governance.</p>
</div>
<div className="flex flex-wrap gap-8">
<div className="flex flex-col gap-2">
<span className="font-bold text-sm text-primary uppercase tracking-widest">Resources</span>
<a className="text-on-surface-variant hover:text-primary transition-colors text-caption font-caption" href="#">Institutional Links</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-caption font-caption" href="#">Transparency Info</a>
</div>
<div className="flex flex-col gap-2">
<span className="font-bold text-sm text-primary uppercase tracking-widest">Legal</span>
<a className="text-on-surface-variant hover:text-primary transition-colors text-caption font-caption" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-caption font-caption" href="#">Contact Support</a>
</div>
</div>
</div>
</footer>


      </div>
    </>
  );
}
