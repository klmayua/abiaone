"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { font-family: 'Hanken Grotesk', sans-serif; }\n        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }\n        .glass-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(10px); border: 1px solid rgba(226, 232, 240, 0.8); }\n        .sidebar-active { background: #fed65b; color: #745c00; border-radius: 0.25rem; }" }} />
  
      {/* Screen markup */}
      <div className="bg-surface text-on-surface flex min-h-screen">
        
{/*  SideNavBar (Desktop)  */}
<aside className="hidden lg:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant z-40">
<div className="p-6">
<h1 className="font-headline-lg text-headline-lg font-bold text-forest-deep leading-none">ABIA ONE</h1>
<p className="font-body-md text-caption text-on-surface-variant mt-1">Modern Governance OS</p>
</div>
<nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-body-md text-body-md">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 bg-secondary-container text-on-secondary-container rounded-lg font-bold transition-all translate-x-1" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>account_balance</span>
<span className="font-body-md text-body-md">Digital Government</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">mitre</span>
<span className="font-body-md text-body-md">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">security</span>
<span className="font-body-md text-body-md">Public Trust</span>
</a>
<div className="pt-8 pb-2">
<span className="font-label-md text-label-md text-outline uppercase px-3">Internal Services</span>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">person_search</span>
<span className="font-body-md text-body-md">HR Management</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">psychology</span>
<span className="font-body-md text-body-md">AI Capacity</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">request_quote</span>
<span className="font-body-md text-body-md">Payroll &amp; Pension</span>
</a>
</nav>
<div className="p-4 border-t border-outline-variant space-y-2">
<button className="w-full bg-forest-green text-white font-headline-md py-2 px-4 rounded hover:opacity-90 transition-all text-sm uppercase tracking-wider">
                Citizen Feedback
            </button>
<div className="flex items-center gap-2 px-3 py-2 text-on-surface-variant hover:text-primary cursor-pointer">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</div>
</div>
</aside>
{/*  TopNavBar (Fixed)  */}
<header className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant z-30 flex items-center justify-between px-6 md:px-margin-desktop">
<div className="flex items-center gap-4">
<span className="lg:hidden font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep">ABIA ONE</span>
<div className="hidden md:flex items-center gap-6">
<a className="font-label-md text-label-md text-primary border-b-2 border-brass-accent pb-1" href="#">Governance</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Digital Gov</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Economy</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Security</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 px-4 py-1.5 border border-forest-green text-forest-green rounded text-sm font-bold uppercase tracking-tight hover:bg-forest-green hover:text-white transition-all">
                Emergency
            </button>
<div className="flex items-center gap-3 pl-4 border-l border-outline-variant">
<div className="text-right hidden sm:block">
<p className="font-body-md text-sm font-bold leading-none">Chidi Okoro</p>
<p className="font-caption text-xs text-on-surface-variant">Senior Admin Officer</p>
</div>
<img alt="User Profile" className="w-10 h-10 rounded-full border border-outline-variant object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Ly-2VOGhO-48eJSj358UvUKmeWddVgA3ubgAxtULO2BjgMqYJy28J3uEenjUVRvAv13YfYukwZer1IKRC6rO5PTCvhR9qjAdkVkx4oD1Qu5HQRdM9OvcgyyZWJicqe3O9Prdmi0ALmhkc5LUa0MZKgiWYI4v6s7Caj2is22QNwmvk_5C4_Y00GxqhIXAW5yM_EG1XlNRBIEhxlwuMm1UKvsmVQb9y861NNQieojg2eCI5UYxAYX34r6jQTOIn7uLxMiX-TgqIMw" />
</div>
</div>
</header>
{/*  Main Content Area  */}
<main className="flex-1 mt-16 ml-0 lg:ml-64 p-6 md:p-margin-desktop max-w-container-max-width mx-auto w-full transition-all duration-300">
{/*  Welcome Section  */}
<section className="mb-10">
<h2 className="font-headline-lg text-headline-lg text-forest-deep mb-2">Internal Portal</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">Welcome to the Abia State Civil Service OS. Manage your career, track performance, and access internal communications from one secure location.</p>
</section>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Head of Service Communication (Hero Card)  */}
<div className="md:col-span-8 bg-surface-container rounded-xl overflow-hidden border border-outline-variant relative flex flex-col md:flex-row h-full group">
<div className="p-8 flex-1 flex flex-col justify-between z-10">
<div>
<span className="inline-flex items-center px-3 py-1 bg-eagle-red text-white text-xs font-bold uppercase tracking-widest mb-4">Urgent Dispatch</span>
<h3 className="font-headline-md text-headline-md text-forest-deep mb-4">Internal Memo: Performance-Based Promotion Cycles</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-3">The Head of Service has announced a shift towards digital-first performance appraisals starting Q3. All civil servants are required to complete their AI literacy certification by August 30th to remain eligible for upcoming promotion cycles...</p>
</div>
<div className="flex items-center gap-4 mt-auto">
<button className="bg-forest-green text-white px-6 py-2.5 rounded font-bold hover:opacity-90 transition-all flex items-center gap-2">
                            Read Full Dispatch <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>
<div className="w-full md:w-1/3 min-h-[200px] relative">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="A professional Nigerian government official in a sharp dark suit standing in a modern, sunlit office with the Abia State crest subtly visible in the background. The lighting is authoritative yet warm, emphasizing transparency and modern governance. Professional corporate photography style with shallow depth of field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvBbYrivW8EN7hM_liOUXwwdNYmE0IEf8ix-YdQHkUPOrJsHIus3mu-o0B1hmL4Cp5UVyn0m6qKp6v7-CcIAQ459SblsVphuNw8OtlF0aJSp6-FOttF-e-8qEHmuZ5ScIXmLEHNaeRQKlw8_xujX6yIq_svRKf5kuTjxYGcAodtW3ksABbxDqGfFEbyDBUbDCNSBOuLbjEC4vX00cLGU-4F8ljuIwayX8rScATdILeEIbPxoDlEJptSHqB_j_nnjoVlJ9AUHOkvBE" />
</div>
</div>
{/*  Profile Summary Card  */}
<div className="md:col-span-4 glass-card p-6 rounded-xl flex flex-col justify-between border border-outline-variant">
<div className="flex justify-between items-start mb-6">
<div>
<h4 className="font-label-md text-label-md text-outline mb-1 uppercase tracking-wider">Employment Status</h4>
<span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded">PERMANENT &amp; PENSIONABLE</span>
</div>
<span className="material-symbols-outlined text-brass-gold">verified_user</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-outline-variant pb-2">
<span className="text-sm font-body-md text-on-surface-variant">Grade Level</span>
<span className="font-bold text-forest-deep">GL 12 / Step 4</span>
</div>
<div className="flex justify-between items-center border-b border-outline-variant pb-2">
<span className="text-sm font-body-md text-on-surface-variant">Years in Service</span>
<span className="font-bold text-forest-deep">8 Years</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm font-body-md text-on-surface-variant">Pension Accrued</span>
<span className="font-bold text-forest-deep">₦4.2M</span>
</div>
</div>
<button className="w-full mt-6 py-2 border border-outline text-on-surface hover:bg-surface-variant transition-all font-bold rounded flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">download</span> Export Service Record
                </button>
</div>
{/*  Capacity Building & AI Enrollment  */}
<div className="md:col-span-4 bg-primary text-on-primary p-6 rounded-xl border border-primary relative overflow-hidden flex flex-col justify-between">
<div className="absolute -right-8 -top-8 opacity-10">
<span className="material-symbols-outlined text-[160px]">psychology</span>
</div>
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md mb-2">AI Literacy Program</h3>
<p className="font-body-md text-sm opacity-90 mb-4">Master generative AI tools for modern administrative efficiency. Enrollment is open for Cohort 4.</p>
</div>
<div className="relative z-10 space-y-4">
<div className="bg-primary-container/20 p-3 rounded border border-on-primary/10">
<div className="flex justify-between text-xs mb-1">
<span>Your Progress</span>
<span>65%</span>
</div>
<div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary-container h-full" style={{"width":"65%"}}></div>
</div>
</div>
<button className="w-full bg-secondary-container text-on-secondary-container py-3 rounded font-bold hover:scale-[0.98] transition-transform">
                        Continue Learning
                    </button>
</div>
</div>
{/*  Performance Tracking  */}
<div className="md:col-span-8 bg-surface-container-high p-6 rounded-xl border border-outline-variant">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md text-forest-deep flex items-center gap-2">
<span className="material-symbols-outlined text-primary">analytics</span> Performance Tracking
                    </h3>
<select className="bg-transparent border-none font-label-md text-sm text-primary focus:ring-0 cursor-pointer">
<option>Annual Cycle 2024</option>
<option>Mid-Year Review</option>
</select>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="p-4 bg-surface rounded-lg border border-outline-variant">
<p className="font-caption text-xs text-on-surface-variant mb-1 uppercase">Punctuality</p>
<p className="text-2xl font-bold text-forest-deep">98.4%</p>
<span className="text-[10px] text-primary font-bold">Top 5% of Ministry</span>
</div>
<div className="p-4 bg-surface rounded-lg border border-outline-variant">
<p className="font-caption text-xs text-on-surface-variant mb-1 uppercase">Task Completion</p>
<p className="text-2xl font-bold text-forest-deep">42 / 45</p>
<span className="text-[10px] text-primary font-bold">On track for promotion</span>
</div>
<div className="p-4 bg-surface rounded-lg border border-outline-variant">
<p className="font-caption text-xs text-on-surface-variant mb-1 uppercase">Civic Engagement</p>
<p className="text-2xl font-bold text-forest-deep">Level 4</p>
<span className="text-[10px] text-brass-gold font-bold">Gold Commendation</span>
</div>
</div>
<div className="mt-6 flex justify-end">
<button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
                        Detailed Appraisal History <span className="material-symbols-outlined text-sm">open_in_new</span>
</button>
</div>
</div>
{/*  Payroll & Pension Quick Actions  */}
<div className="md:col-span-12 grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="glass-card p-6 rounded-xl border-l-4 border-l-forest-green hover:shadow-lg transition-all group cursor-pointer">
<div className="flex items-center gap-4 mb-2">
<span className="material-symbols-outlined p-2 bg-primary/10 text-primary rounded">wallet</span>
<h4 className="font-bold text-on-surface">Pay Slips</h4>
</div>
<p className="text-xs text-on-surface-variant mb-4">View and download your monthly salary breakdown.</p>
<span className="text-xs font-bold text-forest-green group-hover:underline">Latest: June 2024</span>
</div>
<div className="glass-card p-6 rounded-xl border-l-4 border-l-brass-gold hover:shadow-lg transition-all group cursor-pointer">
<div className="flex items-center gap-4 mb-2">
<span className="material-symbols-outlined p-2 bg-secondary-container/20 text-on-secondary-container rounded">event_note</span>
<h4 className="font-bold text-on-surface">Leave Portal</h4>
</div>
<p className="text-xs text-on-surface-variant mb-4">Apply for annual, sick, or maternity leave.</p>
<span className="text-xs font-bold text-primary group-hover:underline">22 Days Remaining</span>
</div>
<div className="glass-card p-6 rounded-xl border-l-4 border-l-eagle-red hover:shadow-lg transition-all group cursor-pointer">
<div className="flex items-center gap-4 mb-2">
<span className="material-symbols-outlined p-2 bg-error-container/20 text-on-error-container rounded">medical_services</span>
<h4 className="font-bold text-on-surface">Health Claims</h4>
</div>
<p className="text-xs text-on-surface-variant mb-4">Process medical insurance and state health bills.</p>
<span className="text-xs font-bold text-error group-hover:underline">1 Pending Claim</span>
</div>
<div className="glass-card p-6 rounded-xl border-l-4 border-l-slate-gray hover:shadow-lg transition-all group cursor-pointer">
<div className="flex items-center gap-4 mb-2">
<span className="material-symbols-outlined p-2 bg-surface-variant text-on-surface-variant rounded">history_edu</span>
<h4 className="font-bold text-on-surface">Service Record</h4>
</div>
<p className="text-xs text-on-surface-variant mb-4">Update your certifications and personal bio-data.</p>
<span className="text-xs font-bold text-slate-gray group-hover:underline">Verified Profile</span>
</div>
</div>
</div>
{/*  Footer  */}
<footer className="mt-16 pt-12 pb-8 border-t border-outline-variant">
<div className="flex flex-col md:flex-row justify-between items-start gap-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-forest-deep font-bold mb-4">ABIA ONE</h2>
<p className="font-body-md text-on-surface-variant max-w-sm mb-6">
                        The sovereign digital infrastructure for the Government of Abia State, Nigeria. Built for the Future.
                    </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
<div className="space-y-3">
<h5 className="font-label-md text-label-md text-primary font-bold">PLATFORMS</h5>
<ul className="space-y-2">
<li><a className="text-sm hover:text-brass-gold transition-colors" href="#">Invest Abia</a></li>
<li><a className="text-sm hover:text-brass-gold transition-colors" href="#">Serve Abia</a></li>
<li><a className="text-sm hover:text-brass-gold transition-colors" href="#">Build Abia</a></li>
</ul>
</div>
<div className="space-y-3">
<h5 className="font-label-md text-label-md text-primary font-bold">RESOURCES</h5>
<ul className="space-y-2">
<li><a className="text-sm hover:text-brass-gold transition-colors" href="#">Open Abia</a></li>
<li><a className="text-sm hover:text-brass-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm hover:text-brass-gold transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-on-surface-variant">© 2024 Government of Abia State, Nigeria. All Rights Reserved.</p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">face_nod</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">1k</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">dine_in</span>
</div>
</div>
</footer>
</main>
{/*  Mobile Navigation Bar  */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-md border-t border-outline-variant flex justify-around items-center py-3 z-50">
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">home</span>
<span className="text-[10px] font-bold">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
<span className="text-[10px] font-bold">Portal</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">history_edu</span>
<span className="text-[10px] font-bold">Records</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">person</span>
<span className="text-[10px] font-bold">Profile</span>
</button>
</nav>


      </div>
    </>
  );
}
