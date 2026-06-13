"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { font-family: 'Hanken Grotesk', sans-serif; }\n        .sidebar-active { background-color: #fed65b; color: #241a00; border-radius: 0.25rem; }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .card-accent-line {\n            width: 40px;\n            height: 3px;\n            background-color: #D4AF37;\n            margin-bottom: 12px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background min-h-screen flex flex-col">
        
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 dark:bg-forest-deep/80 backdrop-blur-md border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-4">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep dark:text-primary-fixed"><img src="/Logos/Abia_One_No_Background.png" alt="ABIA ONE" className="h-8 w-auto" /></span>
</div>
<nav className="hidden md:flex gap-8 items-center">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="/economic-transformation">Economy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="/serve-abia">Digital Gov</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="/local-governance">Governance</a>
<a className="font-label-caps text-label-caps text-primary border-b-2 border-brass-accent pb-1" href="/secure-abia">Security</a>
</nav>
<div className="flex items-center gap-4">
<button className="px-4 py-2 border border-brass-gold text-secondary font-medium rounded-lg hover:bg-secondary-container transition-all">Emergency</button>
<button className="px-4 py-2 bg-forest-green text-state-white font-medium rounded-lg hover:opacity-90 transition-all">Citizen Portal</button>
</div>
</header>
<div className="flex flex-1 pt-16">
{/*  SideNavBar  */}
<aside className="hidden lg:flex flex-col h-[calc(100vh-64px)] w-64 fixed left-0 top-16 bg-surface-container-low border-r border-outline-variant overflow-y-auto">
<div className="p-6">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-state-white">
<span className="material-symbols-outlined">account_balance</span>
</div>
<div>
<p className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep">ABIA ONE</p>
<p className="text-xs uppercase tracking-widest text-outline">Governance OS</p>
</div>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="/economic-transformation">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-sm text-label-sm">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="/serve-abia">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
<span className="font-label-sm text-label-sm">Digital Government</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg font-bold" href="/local-governance">
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
<button className="w-full py-3 bg-primary-container text-on-primary-container rounded-lg mb-4 flex items-center justify-center gap-2">
<span className="material-symbols-outlined">chat</span>
                    Citizen Feedback
                </button>
<div className="space-y-1">
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-sm">Settings</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg" href="#">
<span className="material-symbols-outlined">help</span>
<span className="text-sm">Support</span>
</a>
</div>
</div>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 lg:ml-64 p-margin-mobile md:p-gutter">
<div className="max-w-max-width mx-auto">
{/*  Header / Hero Section  */}
<div className="mb-10">
<h1 className="font-display-lg text-display-lg text-primary mb-2">Youth &amp; Sports Transformation</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Empowering the next generation of Abia leaders and athletes through world-class infrastructure and systematic talent development.</p>
</div>
{/*  Dashboard Bento Grid  */}
<div className="bento-grid">
{/*  ABYES Portal Card (Large)  */}
<div className="col-span-12 md:col-span-8 bg-surface-container-lowest border border-outline-variant p-8 rounded-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 opacity-10 group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-[160px] text-forest-green" style={{"fontVariationSettings":"'FILL' 1"}}>groups</span>
</div>
<div className="card-accent-line"></div>
<h2 className="font-headline-md text-headline-md text-on-surface mb-4">Abia Youth Empowerment Scheme (ABYES)</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-lg">Current Application Cycle: Q3 2024. Over 15,000 grants disbursed this year. Access startup capital, mentorship, and enterprise tools.</p>
<div className="flex flex-wrap gap-4">
<button className="px-6 py-3 bg-forest-green text-state-white rounded-lg flex items-center gap-2 hover:shadow-lg transition-all">
<span className="material-symbols-outlined">rocket_launch</span>
                                Apply for Grant
                            </button>
<button className="px-6 py-3 border border-forest-green text-forest-green rounded-lg flex items-center gap-2 hover:bg-surface-container transition-all">
<span className="material-symbols-outlined">description</span>
                                View Guidelines
                            </button>
</div>
</div>
{/*  Statistics Card  */}
<div className="col-span-12 md:col-span-4 bg-primary text-on-primary p-8 rounded-xl flex flex-col justify-between">
<div>
<span className="font-label-md text-label-md text-primary-fixed uppercase tracking-widest">Active Talent Pipeline</span>
<div className="text-5xl font-bold mt-4">24,810</div>
<p className="text-sm mt-2 opacity-80">Youths currently enrolled in skill-acquisition programs across 17 LGAs.</p>
</div>
<div className="mt-8 pt-8 border-t border-primary-fixed-dim/30">
<div className="flex justify-between items-end">
<div>
<div className="text-2xl font-bold">₦4.2B</div>
<p className="text-xs opacity-80">Total Investment YTD</p>
</div>
<div className="bg-brass-gold text-on-secondary px-3 py-1 rounded text-xs font-bold">+12% YoY</div>
</div>
</div>
</div>
{/*  Vocational Training (Middle Row)  */}
<div className="col-span-12 md:col-span-4 bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md text-on-surface">Vocational Enrollment</h3>
<span className="material-symbols-outlined text-brass-gold">engineering</span>
</div>
<div className="space-y-4">
<div className="p-4 bg-surface-container-low rounded-lg flex items-center gap-4 hover:translate-x-1 transition-transform">
<div className="w-12 h-12 bg-surface-container-highest rounded flex items-center justify-center">
<span className="material-symbols-outlined">code</span>
</div>
<div className="flex-1">
<p className="font-bold text-sm">Tech &amp; Software</p>
<div className="w-full bg-outline-variant h-1.5 rounded-full mt-2">
<div className="bg-forest-green h-1.5 rounded-full" style={{"width":"85%"}}></div>
</div>
</div>
</div>
<div className="p-4 bg-surface-container-low rounded-lg flex items-center gap-4 hover:translate-x-1 transition-transform">
<div className="w-12 h-12 bg-surface-container-highest rounded flex items-center justify-center">
<span className="material-symbols-outlined">solar_power</span>
</div>
<div className="flex-1">
<p className="font-bold text-sm">Renewable Energy</p>
<div className="w-full bg-outline-variant h-1.5 rounded-full mt-2">
<div className="bg-forest-green h-1.5 rounded-full" style={{"width":"62%"}}></div>
</div>
</div>
</div>
<button className="w-full text-center py-3 text-forest-green font-bold text-sm border border-outline-variant hover:bg-surface-container-high transition-all">Explore All Programs</button>
</div>
</div>
{/*  Stadium Renewals Card  */}
<div className="col-span-12 md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col md:flex-row">
<div className="w-full md:w-1/2 min-h-[240px] relative">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="A modern architectural visualization of a renovated sports stadium in Nigeria. The stadium features sleek white cantilevered roofs, vibrant green natural turf, and seating in the Abia State colors. Dramatic cinematic lighting at sunset emphasizes the state-of-the-art sports infrastructure with a clean and professional aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5riLlwcNkqMW0FMIzhdAJ-lDzyS8r-cvBuIq9jwbUM7WFqiiK5u8xwu0TGrm8Uu1YwHmqIXp5SkTfr9wVMw6QeoNxCyLqqCWZ_9kuPTTNNgecqPCXcpn2x9VIfDlaYICVaTn4HQaoxz4xailnFVKCMdILpdPmX9Vi07Ccsi99GVrUNoGj0GsZ6ruxTdfPHFUQxHClPrCl3z9qz4aQK4rudLNIZbjsV6pOw1rA6tD-_APbB6y83WH4jC7OFVDhlTBpB6d9I_J29tY" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
<span className="bg-brass-gold text-on-secondary px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">92% Complete</span>
</div>
</div>
<div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
<div className="card-accent-line"></div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Stadium Infrastructure Renewals</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Phase 2: Enyimba International Stadium &amp; Umuahia Township Stadium. Modernizing pitches, lighting systems, and athlete recovery suites.</p>
<div className="flex gap-4">
<div className="flex-1 border-r border-outline-variant last:border-0">
<p className="text-xs text-outline uppercase font-bold">Capacity</p>
<p className="text-lg font-bold">30,000</p>
</div>
<div className="flex-1 border-r border-outline-variant last:border-0">
<p className="text-xs text-outline uppercase font-bold">Contractor</p>
<p className="text-lg font-bold">Julius Berger</p>
</div>
</div>
</div>
</div>
{/*  Talent Scouting Registry  */}
<div className="col-span-12 bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface">Talent Scouting Registry</h3>
<p className="text-sm text-on-surface-variant">Centralized database for verified youth talent across all sporting disciplines.</p>
</div>
<div className="flex gap-2">
<div className="relative">
<input className="pl-10 pr-4 py-2 bg-surface-container border-outline-variant rounded-lg text-sm focus:ring-forest-green" placeholder="Search athletes..." type="text" />
<span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-sm">search</span>
</div>
<button className="px-4 py-2 bg-forest-green text-state-white rounded-lg text-sm font-bold">Register Talent</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="border-b border-outline-variant">
<th className="pb-4 font-label-caps text-label-caps text-outline">Athlete Name</th>
<th className="pb-4 font-label-caps text-label-caps text-outline">Discipline</th>
<th className="pb-4 font-label-caps text-label-caps text-outline">Status</th>
<th className="pb-4 font-label-caps text-label-caps text-outline">LGA</th>
<th className="pb-4 font-label-caps text-label-caps text-outline">Last Assessment</th>
<th className="pb-4 font-label-caps text-label-caps text-outline">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr>
<td className="py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
<img data-alt="Close up portrait of a young professional athlete in a modern green sports uniform. Bright studio lighting with a clean professional background that emphasizes the energetic and high-performance theme of the design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjq5XiK9T-2vz-bsZXLzJaH2XJ-iHIe2kS3wwfeVYLGoNXY0rKUZPtx26JSjO8AMNo6TrTgS_UTZWRXSenSv397AoapgPYa5xVcINr4feGNA-E6P2o6fRpcNCFvOgjJ_5nZBTaqO72TGqIvIR-XFQScrKfItC1zhAOhcsGKuiMaQ8YuemdWBqt1ho1wwDE5aBoiZMTvqhdHQi0_XXUyZRM61Iat4vueo49CvYiC1t_x9N9ua1H38mhRzx4RcWWCNWXy0XNoUFjvV4" />
</div>
<span className="font-bold">Chijioke Okoro</span>
</div>
</td>
<td className="py-4">Football (ST)</td>
<td className="py-4"><span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">Elite Prospect</span></td>
<td className="py-4">Aba South</td>
<td className="py-4">12 Oct 2024</td>
<td className="py-4"><button className="text-forest-green font-bold text-sm hover:underline">View Stats</button></td>
</tr>
<tr>
<td className="py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
<img data-alt="A portrait of a focused young female runner in sportswear, her hair pulled back, with a determined expression. Soft, warm morning light in an outdoor stadium setting, conveying a sense of energy and sports transformation in Abia State." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJN0lilquWdrb9ig7RSyCeS3XDy3fLuavZlIgZiuXee4A7QUgFxFbzuwST62z9C62x3sPhxnGObZaG6nI2UEhvBPi_RoTItjdGh87YWiw7Vvv_coC_ejFvi0ZcpuVRklDAKwuIkR9CbVkLYTPOAHo8FNAOJtbhYCx0m4xZoJK7FNj14FIQo4mTGkPxs_LIFqlLNIULbfWAzsrEWo5IT3pTBgIYJ34iaZUJ3O5QuCIr6L4R69W_LB6fLcGMXqFOoWwa98n4b_mo0Vo" />
</div>
<span className="font-bold">Amarachi Nwosu</span>
</div>
</td>
<td className="py-4">Track (100m)</td>
<td className="py-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase">Emerging</span></td>
<td className="py-4">Ohafia</td>
<td className="py-4">05 Oct 2024</td>
<td className="py-4"><button className="text-forest-green font-bold text-sm hover:underline">View Stats</button></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>
</div>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest dark:bg-forest-deep py-12 border-t border-outline-variant">
<div className="max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<span className="font-headline-lg text-headline-lg text-forest-deep dark:text-primary-fixed block mb-4">ABIA ONE</span>
<p className="font-body-md text-body-md text-on-surface-variant">Modern Governance OS for the sustainable growth of Abia State. Built for the citizens, by the state.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
<div className="flex flex-col gap-2">
<p className="font-label-caps text-label-caps text-primary font-bold mb-2">Initiatives</p>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="/invest-in-aba">Invest Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="/serve-abia">Serve Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="/build-abia">Build Abia</a>
</div>
<div className="flex flex-col gap-2">
<p className="font-label-caps text-label-caps text-primary font-bold mb-2">Public Info</p>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="/open-abia">Open Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Contact Us</a>
</div>
</div>
</div>
<div className="max-w-max-width mx-auto mt-12 pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-body-md text-body-md text-on-surface-variant">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">face_nod</span>
<span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">public</span>
<span className="material-symbols-outlined text-outline cursor-pointer hover:text-primary">rss_feed</span>
</div>
</div>
</footer>


      </div>
    </>
  );
}
