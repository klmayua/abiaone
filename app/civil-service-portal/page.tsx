"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .active-nav-item {\n            font-variation-settings: 'FILL' 1;\n        }\n        body {\n            background-color: #f6fbf3;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-card {
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(10px);\n            border: 1px solid #E2E8F0;\n        }" 
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
        }} />
  
      {/* Screen markup */}
      <div className="font-body-md text-on-surface">
        
{/*  Sidebar Navigation Shell  */}
<aside className="flex flex-col fixed left-0 top-0 h-full py-6 px-4 space-y-2 bg-surface-container-low border-r border-outline-variant w-64 z-50">
<div className="mb-8 px-2">
<h1 className="font-headline-sm text-headline-sm font-bold text-forest-green">ABIA ONE</h1>
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-label-md">Civil Service Portal</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-on-primary-container bg-primary-container rounded-lg font-label-md transition-transform scale-95" href="/">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
<span>Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-md" href="#">
<span className="material-symbols-outlined">payments</span>
<span>Payroll &amp; Payslip</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-md" href="#">
<span className="material-symbols-outlined">calendar_today</span>
<span>Leave Manager</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-md" href="/ai-academy">
<span className="material-symbols-outlined">school</span>
<span>AI Academy</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-md" href="#">
<span className="material-symbols-outlined">trending_up</span>
<span>Performance</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-md" href="#">
<span className="material-symbols-outlined">forum</span>
<span>Notices</span>
</a>
</nav>
<div className="pt-6 border-t border-outline-variant space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-md" href="#">
<span className="material-symbols-outlined">help</span>
<span>Support</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-md" href="#">
<span className="material-symbols-outlined">logout</span>
<span>Sign Out</span>
</a>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="ml-64 min-h-screen p-8 max-w-max-width mx-auto">
{/*  Header / Top Bar  */}
<header className="flex justify-between items-center mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-forest-green">Welcome back, Dr. Okafor</h2>
<p className="text-on-surface-variant font-body-md">Senior Administrator • Ministry of Digital Economy &amp; Transformation</p>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-on-surface-variant hover:bg-surface-container transition-colors rounded-full relative">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-eagle-red rounded-full border-2 border-surface"></span>
</button>
<div className="w-12 h-12 rounded-full border-2 border-forest-green overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="A professional portrait of a confident middle-aged West African man in a tailored charcoal suit, set against a blurred corporate office background with soft natural lighting. The image conveys institutional authority and technical precision, fitting a modern governance dashboard aesthetic with a crisp, clean, and high-legibility style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzE97vosXC3rQ509Nfk3HO9sKMFvj0cLtmnu6mvCW89IOnlUILLVYZuH2DzdaHl6MPoxowBIsQmnp-2ioSyH3Mtuh7PHegKBaXsROlqye-lSmK5S4XAv6YSiuUcwTJOBAnYXC8sMX1hu5UW4UFYe7e4NHEz6uJwYBOGhviz_QotUrWNfAPvJg9cz_8shaP7A762Yd6P7CreFTTiX4kpJv0DJooA577RaZiojF3EJU-3iVCaAyGz5QZSm72Ugjp2W0YoRemk10AOuQ" />
</div>
</div>
</header>
{/*  Dashboard Bento Grid  */}
<div className="bento-grid">
{/*  Profile Summary Card  */}
<section className="col-span-12 lg:col-span-4 glass-card p-6 rounded-xl flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<span className="font-label-md text-forest-green uppercase tracking-wider text-xs">Profile Summary</span>
<span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-bold">GRADE 14</span>
</div>
<h3 className="font-headline-md text-headline-md mb-2">Dr. Chidi Okafor</h3>
<div className="space-y-2 border-l-2 border-brass-gold pl-4 mt-4">
<p className="text-sm text-on-surface-variant"><span className="font-semibold text-on-surface">Employee ID:</span> AB-9920-CS</p>
<p className="text-sm text-on-surface-variant"><span className="font-semibold text-on-surface">Department:</span> Policy &amp; Strategy</p>
<p className="text-sm text-on-surface-variant"><span className="font-semibold text-on-surface">Next Increment:</span> Oct 2024</p>
</div>
</div>
<button className="mt-6 w-full py-2 border border-brass-gold text-brass-gold rounded-lg font-label-md hover:bg-surface-container transition-colors">
                    Update Bio-Data
                </button>
</section>
{/*  Payroll Quick View  */}
<section className="col-span-12 lg:col-span-8 glass-card p-6 rounded-xl">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md flex items-center gap-2">
<span className="material-symbols-outlined text-forest-green">account_balance_wallet</span>
                        Payroll History
                    </h3>
<button className="text-forest-green flex items-center gap-1 font-label-md text-sm hover:underline">
                        View All Payslips <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="border-b border-outline-variant text-on-surface-variant font-label-md text-xs uppercase">
<th className="pb-3">Month</th>
<th className="pb-3">Net Pay</th>
<th className="pb-3">Deductions</th>
<th className="pb-3">Status</th>
<th className="pb-3 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="group hover:bg-surface-container-low transition-colors">
<td className="py-4 font-semibold">June 2024</td>
<td className="py-4">₦420,500.00</td>
<td className="py-4 text-eagle-red">-₦12,400</td>
<td className="py-4">
<span className="px-2 py-1 bg-primary-fixed-dim text-on-primary-fixed-variant rounded-full text-xs font-bold">PROCESSED</span>
</td>
<td className="py-4 text-right">
<button className="text-forest-green hover:scale-110 transition-transform">
<span className="material-symbols-outlined">download</span>
</button>
</td>
</tr>
<tr className="group hover:bg-surface-container-low transition-colors">
<td className="py-4 font-semibold">May 2024</td>
<td className="py-4">₦420,500.00</td>
<td className="py-4 text-eagle-red">-₦12,400</td>
<td className="py-4">
<span className="px-2 py-1 bg-primary-fixed-dim text-on-primary-fixed-variant rounded-full text-xs font-bold">PROCESSED</span>
</td>
<td className="py-4 text-right">
<button className="text-forest-green hover:scale-110 transition-transform">
<span className="material-symbols-outlined">download</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
{/*  Leave Management Card  */}
<section className="col-span-12 lg:col-span-5 glass-card p-6 rounded-xl">
<h3 className="font-headline-md text-headline-md mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-forest-green">event_available</span>
                    Leave Balance
                </h3>
<div className="grid grid-cols-3 gap-4 mb-6 text-center">
<div className="p-4 bg-surface-container rounded-lg border border-outline-variant">
<p className="text-xs text-on-surface-variant font-label-md mb-1 uppercase">Annual</p>
<p className="text-2xl font-bold text-forest-green">14</p>
<p className="text-[10px] text-on-surface-variant">Days Left</p>
</div>
<div className="p-4 bg-surface-container rounded-lg border border-outline-variant">
<p className="text-xs text-on-surface-variant font-label-md mb-1 uppercase">Sick</p>
<p className="text-2xl font-bold text-forest-green">08</p>
<p className="text-[10px] text-on-surface-variant">Available</p>
</div>
<div className="p-4 bg-surface-container rounded-lg border border-outline-variant">
<p className="text-xs text-on-surface-variant font-label-md mb-1 uppercase">Other</p>
<p className="text-2xl font-bold text-forest-green">--</p>
<p className="text-[10px] text-on-surface-variant">View Rules</p>
</div>
</div>
<div className="space-y-3">
<button className="w-full bg-forest-green text-on-primary py-3 rounded-lg font-label-md hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
<span className="material-symbols-outlined">add</span> Apply for Leave
                    </button>
<button className="w-full bg-white border border-outline text-on-surface-variant py-3 rounded-lg font-label-md hover:bg-surface-container transition-colors">
                        View History
                    </button>
</div>
</section>
{/*  AI Academy Integration  */}
<section className="col-span-12 lg:col-span-7 relative overflow-hidden bg-inverse-surface text-surface rounded-xl p-8 flex flex-col justify-center min-h-[300px]">
<div className="relative z-10 max-w-md">
<span className="bg-brass-gold text-on-secondary px-3 py-1 rounded-full text-xs font-bold font-label-md uppercase mb-4 inline-block">AI Academy Integration</span>
<h3 className="font-headline-lg text-headline-lg mb-4 text-primary-fixed">Master Data Governance with AI</h3>
<p className="text-surface-variant font-body-md mb-6 leading-relaxed">
                        Complete your mandatory 2024 Digital Literacy certification to maintain your Grade 14 eligibility. 
                    </p>
<div className="flex items-center gap-4">
<button className="px-6 py-3 bg-forest-green text-on-primary rounded-lg font-label-md hover:scale-95 transition-transform">
                            Continue Learning
                        </button>
<div className="flex -space-x-3 overflow-hidden">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-inverse-surface" data-alt="Portrait of a professional man in a professional context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO-DYgyfKVLvVohj_hHC_793-x8LKy1YefRs4SXfd4RpE_OKr3XngEmTjJMD8bbu7KfqHChBVJ0V2eOItAjUtIV6Aynd5QeuDDKfhSAaSkymMiJmqL9V-g-bRtFbSGA34RdR85LUsUykKEN2Nl8lwPQQECNwySWHpda4wFyBTMbm6Y9V9QReCnZM3kUEn31NAUjCxDvXJR6yyr0Zxr52IwyrO7ut4v4jtmhvY7PZJhDv2GmqOiUmgGZjtZP4XLUB9HrXKNWQNP_A0" />
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-inverse-surface" data-alt="Portrait of a professional woman in a professional context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhVAYsesEeViIHnWCtWZzArevY6BQTFPeImtNN4a_k_rfdGBv_cGoFLIpwKodgLZKTtnFF31NIDXfH_f6L8vWo9_PFWH6GnjXeDymaOxGCj-OgtXyp-YCxlzpJSp5gFOJA-5NwPq4rFmTZUdB5JtqIjNOPIrcVpwScTJnAhlhAWvZrIqza1zWgRAC9LoOAG858uYnSU7yHKhK4o29hAcI3lnsAMXdKDiuSe9Bfv2Qai1TAAA71AGGzCwYveSDuIipTZhBs3fHsQNA" />
<div className="flex items-center justify-center h-8 w-8 rounded-full bg-surface-container-highest ring-2 ring-inverse-surface text-[10px] text-on-surface font-bold">+12</div>
</div>
</div>
</div>
{/*  Subtle tech background decoration  */}
<div className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">

</div>
</section>
{/*  Performance Evaluation Tracking  */}
<section className="col-span-12 lg:col-span-8 glass-card p-6 rounded-xl">
<h3 className="font-headline-md text-headline-md mb-6">Performance Matrix</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-6">
<div>
<div className="flex justify-between mb-2">
<span className="font-label-md text-sm">Policy Implementation</span>
<span className="text-forest-green font-bold">92%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-forest-green h-2 rounded-full" style={{"width":"92%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="font-label-md text-sm">Team Leadership</span>
<span className="text-brass-gold font-bold">85%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-brass-gold h-2 rounded-full" style={{"width":"85%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="font-label-md text-sm">Fiscal Discipline</span>
<span className="text-forest-green font-bold">78%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-forest-green h-2 rounded-full" style={{"width":"78%"}}></div>
</div>
</div>
</div>
<div className="bg-surface p-4 rounded-lg border border-outline-variant flex flex-col items-center justify-center text-center">
<div className="relative w-32 h-32 mb-4">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-surface-container-high" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="12"></circle>
<circle className="text-forest-green" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="54.66" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-bold">A+</span>
<span className="text-[10px] text-on-surface-variant font-label-md">SCORE</span>
</div>
</div>
<p className="font-headline-sm text-headline-sm text-on-surface">Exceptional</p>
<p className="text-sm text-on-surface-variant px-4">Qualifies for promotion cycle in Q1 2025</p>
</div>
</div>
</section>
{/*  Secure Internal Communications  */}
<section className="col-span-12 lg:col-span-4 glass-card p-6 rounded-xl flex flex-col h-full">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md">Official Notices</h3>
<span className="material-symbols-outlined text-eagle-red" style={{"fontVariationSettings":"'FILL' 1"}}>security</span>
</div>
<div className="space-y-4 flex-1 overflow-y-auto pr-2">
<div className="p-4 bg-surface-container-low border-l-4 border-eagle-red rounded-r-lg">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold text-eagle-red font-label-md">URGENT</span>
<span className="text-[10px] text-on-surface-variant">2h ago</span>
</div>
<h4 className="font-semibold text-sm mb-1">Revised Security Protocol</h4>
<p className="text-xs text-on-surface-variant line-clamp-2">All employees must update their biometric tokens by Friday afternoon...</p>
</div>
<div className="p-4 bg-surface-container-low border-l-4 border-forest-green rounded-r-lg">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold text-forest-green font-label-md">GENERAL</span>
<span className="text-[10px] text-on-surface-variant">5h ago</span>
</div>
<h4 className="font-semibold text-sm mb-1">Civil Service Games 2024</h4>
<p className="text-xs text-on-surface-variant line-clamp-2">Registration for the Inter-Ministry athletics competition is now open.</p>
</div>
<div className="p-4 bg-surface-container-low border-l-4 border-brass-gold rounded-r-lg">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-bold text-on-secondary-fixed-variant font-label-md">TRAINING</span>
<span className="text-[10px] text-on-surface-variant">Yesterday</span>
</div>
<h4 className="font-semibold text-sm mb-1">Public Speaking Workshop</h4>
<p className="text-xs text-on-surface-variant line-clamp-2">Senior officers (Grade 12-16) are invited to a seminar on executive communication.</p>
</div>
</div>
<button className="mt-6 text-center text-forest-green font-label-md text-sm hover:underline py-2">
                    Open Bulletin Board
                </button>
</section>
</div>
</main>
{/*  Footer  */}
<footer className="ml-64 bg-surface-container-highest border-t border-outline-variant">
<div className="w-full py-8 px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-max-width mx-auto">
<div className="mb-4 md:mb-0">
<h4 className="font-headline-sm text-headline-sm font-bold text-forest-green">ABIA ONE</h4>
<p className="text-caption text-on-surface-variant mt-1">© 2024 Abia State Government. All Rights Reserved.</p>
</div>
<div className="flex gap-8">
<a className="text-on-surface-variant hover:text-brass-gold transition-colors font-body-md" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors font-body-md" href="#">Terms of Service</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors font-body-md" href="#">Contact Us</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors font-body-md" href="/news-press-center">Press Office</a>
</div>
</div>
</footer>


      </div>
    </>
  );
}
