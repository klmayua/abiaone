export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        @media (max-width: 768px) {\n            .bento-grid {\n                grid-template-columns: repeat(4, 1fr);\n                gap: 16px;\n            }\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-surface font-body-md text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
        
{/*  TopNavBar  */}
<nav className="bg-surface sticky top-0 z-50 border-b border-outline-variant">
<div className="flex justify-between items-center w-full px-margin-desktop max-w-max-width mx-auto h-16">
<div className="font-headline-md text-headline-md font-bold text-forest-green">ABIA ONE</div>
<div className="hidden md:flex items-center space-x-8">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Invest</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Jobs</a>
<a className="font-label-md text-label-md text-forest-green border-b-2 border-brass-gold pb-1" href="#">Serve</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Verify</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Governance</a>
</div>
<div className="flex items-center space-x-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green" data-icon="language">language</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green" data-icon="notifications">notifications</span>
<button className="bg-forest-green text-white px-6 py-2 rounded-lg font-label-md text-label-md hover:bg-primary transition-all">Sign In</button>
</div>
</div>
</nav>
<div className="flex min-h-screen max-w-max-width mx-auto">
{/*  SideNavBar (Desktop Only)  */}
<aside className="hidden md:flex flex-col w-64 bg-surface-container-low border-r border-outline-variant py-6 px-4 space-y-2 sticky top-16 h-[calc(100vh-64px)]">
<div className="mb-6 px-2">
<h2 className="font-headline-sm text-headline-sm font-bold text-forest-green">Command Center</h2>
<p className="font-caption text-caption text-on-surface-variant">State Operating System</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-on-primary-container bg-primary-container rounded-lg scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="hail">hail</span>
<span className="font-label-md text-label-md">Citizen Requests</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-md text-label-md">Revenue Tracking</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="account_tree">account_tree</span>
<span className="font-label-md text-label-md">Project Monitoring</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="badge">badge</span>
<span className="font-label-md text-label-md">Personnel</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="security">security</span>
<span className="font-label-md text-label-md">Security</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</nav>
<div className="pt-4 border-t border-outline-variant space-y-1">
<a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="font-label-md text-label-md">Support</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-label-md text-label-md">Sign Out</span>
</a>
</div>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 p-gutter md:p-margin-desktop overflow-x-hidden">
{/*  Hero Section  */}
<header className="mb-12 relative overflow-hidden rounded-xl bg-forest-green text-white p-8 md:p-12">
<div className="relative z-10 max-w-2xl">
<div className="flex items-center space-x-2 mb-4">
<span className="bg-brass-gold/20 text-brass-gold px-3 py-1 rounded-full font-label-md text-label-md border border-brass-gold/30">Community First</span>
</div>
<h1 className="font-headline-lg text-headline-lg mb-4">Social Welfare &amp; Youth Affairs</h1>
<p className="font-body-lg text-body-lg text-primary-fixed opacity-90 mb-8">Empowering the heart of Abia through structured social safety nets, dynamic youth development, and sustainable women’s empowerment initiatives.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-white text-forest-green px-8 py-3 rounded-lg font-label-md text-label-md font-bold hover:bg-surface-bright transition-all">Apply for Support</button>
<button className="border border-white/40 bg-white/10 hover:bg-white/20 px-8 py-3 rounded-lg font-label-md text-label-md transition-all">View Programs</button>
</div>
</div>
{/*  Abstract Atmospheric Background  */}
<div className="absolute inset-0 opacity-20 mix-blend-overlay">

</div>
</header>
{/*  Bento Grid Main Content  */}
<div className="bento-grid">
{/*  Social Safety Nets (Focus Card)  */}
<section className="col-span-12 lg:col-span-8 glass-card rounded-xl p-8 flex flex-col justify-between overflow-hidden relative group">
<div className="flex justify-between items-start mb-6">
<div>
<div className="w-12 h-1 bg-brass-gold mb-4"></div>
<h3 className="font-headline-md text-headline-md text-forest-green mb-2">Social Safety Nets</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-lg">Providing direct assistance and financial security for vulnerable families across all 17 LGAs.</p>
</div>
<span className="material-symbols-outlined text-4xl text-forest-green/20" data-icon="diversity_3">diversity_3</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant hover:border-forest-green transition-colors">
<h4 className="font-label-md text-label-md text-forest-green mb-1">Elderly Care</h4>
<p className="text-2xl font-bold">45,200+</p>
<p className="font-caption text-caption text-on-surface-variant">Active Beneficiaries</p>
</div>
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant hover:border-forest-green transition-colors">
<h4 className="font-label-md text-label-md text-forest-green mb-1">Health Stipends</h4>
<p className="text-2xl font-bold">₦1.2B</p>
<p className="font-caption text-caption text-on-surface-variant">Disbursed Q3 2024</p>
</div>
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant hover:border-forest-green transition-colors">
<h4 className="font-label-md text-label-md text-forest-green mb-1">Disability Grants</h4>
<p className="text-2xl font-bold">12,800</p>
<p className="font-caption text-caption text-on-surface-variant">Registered Users</p>
</div>
</div>
</section>
{/*  Youth Sports Programs (Vertical Card)  */}
<section className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-high rounded-xl overflow-hidden flex flex-col">
<div className="h-48 relative overflow-hidden">
<img alt="Young athletes training" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" data-alt="A dynamic shot of young African athletes training on a professional green turf field during the golden hour. The sunlight casts long, warm shadows, and the atmosphere is energetic and focused. In the background, modern stadium seating and a clear blue sky are visible, representing youth sports development and athletic excellence in a professional government-funded setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyhSz5J37iDdeDc1xJsV1LH656Pa4sPV1vBJ9HMl5ghiQPTDTU2crfk37xvbl8Xt7wqr5sDUsIcERog2EmFnrynXgQ0IgDBxxX_vN8t70C2hUVZMjgp_3wOYb8aJ0g_oKDCIv5Bk4tFGvvG70SKiFlXM6Tn7trlynPv_bo4Lhu113v6h5jUXozWmDuOwpJAgMqQkrrnpNg4w6RlEnXUf8pR3HCm6i6VbFoTTB8WRuFQfO3jtUvjxREiRwJj7pHtzS2f-R33gWuTuY" />
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div>
<div className="flex items-center space-x-2 mb-3">
<span className="material-symbols-outlined text-brass-gold" data-icon="sports_soccer">sports_soccer</span>
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Sports Development</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-3">Abia Youth Games 2024</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Registration is now open for the state-wide championships. 12 disciplines, talent scouting, and scholarship opportunities.</p>
</div>
<button className="mt-6 w-full border border-forest-green text-forest-green py-2 rounded-lg font-label-md text-label-md hover:bg-forest-green hover:text-white transition-all">Enroll Now</button>
</div>
</section>
{/*  Women's Empowerment (Landscape/Focus)  */}
<section className="col-span-12 md:col-span-6 lg:col-span-5 bg-white border border-outline-variant rounded-xl p-8 flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<span className="material-symbols-outlined text-primary p-3 bg-primary-fixed rounded-xl" data-icon="woman">woman</span>
<span className="font-label-md text-label-md text-forest-green bg-primary-fixed px-3 py-1 rounded-full">New Initiative</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Empower Abia Women</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">A holistic program providing vocational training, seed funding for micro-enterprises, and leadership mentorship for women across all sectors.</p>
<ul className="space-y-4">
<li className="flex items-center space-x-3 text-on-surface-variant">
<span className="material-symbols-outlined text-forest-green text-sm" data-icon="check_circle">check_circle</span>
<span className="font-body-md text-body-md">Interest-free Micro-loans</span>
</li>
<li className="flex items-center space-x-3 text-on-surface-variant">
<span className="material-symbols-outlined text-forest-green text-sm" data-icon="check_circle">check_circle</span>
<span className="font-body-md text-body-md">Digital Literacy Workshops</span>
</li>
<li className="flex items-center space-x-3 text-on-surface-variant">
<span className="material-symbols-outlined text-forest-green text-sm" data-icon="check_circle">check_circle</span>
<span className="font-body-md text-body-md">Maternal Health Resources</span>
</li>
</ul>
</div>
<a className="mt-8 flex items-center text-forest-green font-label-md text-label-md group" href="#">
                        Explore Hub 
                        <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-2" data-icon="arrow_forward">arrow_forward</span>
</a>
</section>
{/*  Status & Insights (Small Card)  */}
<section className="col-span-12 md:col-span-6 lg:col-span-3 bg-inverse-surface text-white rounded-xl p-8 flex flex-col justify-center text-center">
<span className="material-symbols-outlined text-5xl text-brass-gold mb-4" data-icon="query_stats">query_stats</span>
<h3 className="font-headline-md text-headline-md mb-2">Live Impact</h3>
<p className="font-body-md text-body-md opacity-80 mb-6">Real-time tracking of community welfare projects.</p>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
<span>Active Projects</span>
<span className="font-bold">142</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-white/10 pb-2">
<span>Fund Utilization</span>
<span className="font-bold">89%</span>
</div>
<div className="flex justify-between items-center text-sm">
<span>LGA Coverage</span>
<span className="font-bold text-brass-gold">100%</span>
</div>
</div>
</section>
{/*  Outreach Map (Small Card)  */}
<section className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container-highest rounded-xl overflow-hidden">
<div className="p-6">
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-2">Service Points</h4>
<p className="font-caption text-caption text-on-surface-variant mb-4">Find your nearest social welfare office.</p>
</div>
<div className="h-48 bg-slate-200">
<img alt="Map of Abia State" className="w-full h-full object-cover grayscale opacity-50 contrast-125" data-location="Umuahia, Abia State" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbZRIagQDBVnZu55zpDvuOuiMs0HuJXkumXLByPWITQLaQlFSBsuWXQdp4elf0Dj8S-wgCdPs2XEwmzgfIpC9mPHR0noziVtHBM6Xc9YKwxkzpCRI1nQ6PvKeAtf2gpAfUQ-jSxvJ1SvAAmFE0JRelPtHC9dD3BmePXbgoZTMwFnbZDeZ9FTCr9Yg4vi_OOy1xf49mPh5m85_mRo4ulxv9_r_bR7nCVaVKIZZtKbkX2HNFekkb5cNVOf_ZNBLcoXMPh4xKTcT0jMw" />
</div>
<div className="p-4 flex items-center justify-between bg-surface-container">
<span className="font-label-md text-label-md">17 Regional Centers</span>
<button className="text-forest-green font-label-md text-label-md flex items-center">
                            Locate
                            <span className="material-symbols-outlined ml-1 text-sm" data-icon="near_me">near_me</span>
</button>
</div>
</section>
</div>
{/*  News & Updates Section  */}
<section className="mt-16">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Citizen Bulletin</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Latest updates from the Ministry of Social Welfare.</p>
</div>
<button className="hidden md:block text-forest-green border-b border-forest-green font-label-md text-label-md">View All Updates</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
<div className="group cursor-pointer">
<div className="h-48 rounded-lg overflow-hidden mb-4 border border-outline-variant">
<img alt="Vocational training session" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A bright, high-key photograph of a diverse group of women participating in a modern vocational tailoring and design workshop. They are working with colorful fabrics on high-end sewing machines in a clean, well-lit studio. The overall mood is one of industriousness, collaboration, and professional advancement, maintaining the corporate yet community-focused aesthetic of the Abia State government programs." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfPAf1mOVWyVDDiVs_EfRqkUNna8QNUvBp4zqM_9XMkv36gnlXfc6WiFur_NtRdv2AtmCjaUpJG-2ba1SgZ9dyVegbgILp3Oi3pxCMRGM_nwJ_a_gE73Z0wmENE_N0zZSKuNQHwEDbrUI7QI4zZ2C04OmalfqZK_-gXRXuDnE6YiQnvuUGXN1c6ZBjk2HUfWpnSp6a84eHs0tor7KaJyvfC_pH6jjB1Q5kLreb7VfHgVdGaQn_RPJfFHRGBqjhpMQFQpVz82TuVb4" />
</div>
<span className="font-caption text-caption text-brass-gold mb-2 block">Empowerment</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-2 group-hover:text-forest-green transition-colors">Digital Skills Program for Rural Women Launches in Ohafia</h4>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Over 2,000 women to receive tablets and training in e-commerce and digital marketing this quarter.</p>
</div>
<div className="group cursor-pointer">
<div className="h-48 rounded-lg overflow-hidden mb-4 border border-outline-variant">
<img alt="Football stadium" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A panoramic view of a recently renovated community sports complex in Abia State, featuring a vibrant green football pitch under a clear blue sky. The architecture is modern and functional, with clean lines and the Abia State seal subtly visible. The lighting is crisp and midday, highlighting the high-quality infrastructure provided for youth development and sports excellence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABf2yX0Bs2spsnacpXOcgRl0LUzxgXczIqaatSN7Vw9Ll2JD83CTnKndrHYzPmiPw23-hAhLbiPqfZIiNKuQgH5JqwVQCAcFwB2HZEEsXb9jSR_7o7KuJqsqvl9j0G_qlJoficmJ3I8DJISVo8GaOLS1ubJUpBJ1JxnhcNKkj8n-3GuXDnqkYnuhh5P_zGjuaiCiBv83tvc6mihDXb1kmD2Emh2YmNhWHREq4l8VxuUYRb8hPBshMP8Ffr55O6p3CtxaYJZRvSJ9c" />
</div>
<span className="font-caption text-caption text-brass-gold mb-2 block">Youth Affairs</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-2 group-hover:text-forest-green transition-colors">State Stadium Renovation Completed for Youth Games</h4>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">The Enyimba International Stadium facility upgrade ensures world-class standards for upcoming sports festivals.</p>
</div>
<div className="group cursor-pointer">
<div className="h-48 rounded-lg overflow-hidden mb-4 border border-outline-variant">
<img alt="People holding hands" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A warm, close-up shot of two people of different generations holding hands, signifying community support and social safety nets. The background is a soft, out-of-focus garden setting with lush greenery. The lighting is soft and empathetic, reinforcing a sense of compassion and government care for the elderly and vulnerable. The color palette is natural and grounded, aligned with the forest-green and brass-gold brand tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtD8DHUmDy3pSC3xI45AiqVbt0JK2hVwTt3RTmwox_lavz1UnyCRCIec-b-geSHfOwOqw-hrZaM79jX-RBHwQp9Rz6t50kfGKJRGaDggwFtYLzyDFCqbFhw4_iiCurxLKRwzZwgVqgljGgYBFTOsyfvW-hKZpI91BE5EtxkrnlJNXdpWZuKYWbkiYrEekBNx9YNSRFG089RPyOz4mizSvr60uR7TEkCHPY1yrABPEX3Z3pl9iowQWirt024HSwcyhd4-Sz0Ro3VDE" />
</div>
<span className="font-caption text-caption text-brass-gold mb-2 block">Social Welfare</span>
<h4 className="font-headline-sm text-headline-sm text-on-surface mb-2 group-hover:text-forest-green transition-colors">Pension Arrears: New Digital Verification Portal Now Live</h4>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Senior citizens can now verify their status from home using the ABIA ONE biometric mobile application.</p>
</div>
</div>
</section>
{/*  CTA Bottom  */}
<section className="mt-20 bg-surface-container-lowest border border-outline-variant rounded-2xl p-10 text-center relative overflow-hidden">
<div className="relative z-10">
<h2 className="font-headline-lg text-headline-lg text-forest-green mb-4">Ready to access state services?</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl mx-auto">Join thousands of Abians already benefiting from our social programs. The digital application process takes less than 5 minutes.</p>
<div className="flex flex-col md:flex-row justify-center items-center gap-4">
<button className="bg-forest-green text-white px-10 py-4 rounded-lg font-headline-sm text-headline-sm hover:bg-primary transition-all shadow-lg shadow-forest-green/20">Apply for Benefits</button>
<button className="border border-outline text-on-surface-variant px-10 py-4 rounded-lg font-headline-sm text-headline-sm hover:bg-surface-container transition-all">Volunteer Programs</button>
</div>
</div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-fixed/30 blur-[100px] rounded-full -mr-32 -mb-32"></div>
<div className="absolute top-0 left-0 w-64 h-64 bg-brass-gold/10 blur-[100px] rounded-full -ml-32 -mt-32"></div>
</section>
</main>
</div>
{/*  Footer  */}
<footer className="bg-surface-container-highest border-t border-outline-variant">
<div className="w-full py-8 px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-max-width mx-auto">
<div className="mb-6 md:mb-0">
<div className="font-headline-sm text-headline-sm font-bold text-forest-green">ABIA ONE</div>
<p className="font-caption text-caption text-on-surface-variant mt-2">© 2024 Abia State Government. All Rights Reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Terms of Service</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Us</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Press Office</a>
</div>
</div>
</footer>
{/*  FAB (Suppressed for this page type as per instructions, but kept as placeholder if logic dictated otherwise)  */}


      </div>
    </>
  );
}
