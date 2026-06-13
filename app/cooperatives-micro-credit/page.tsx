"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".glass-card {
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .custom-scrollbar::-webkit-scrollbar {\n            width: 4px;\n        }\n        .custom-scrollbar::-webkit-scrollbar-thumb {\n            background: #D4AF37;\n            border-radius: 10px;\n        }\n        .active-tab-indicator {\n            height: 2px;\n            background: #D4AF37;\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            width: 100%;\n        }" 
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
        }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
        
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 dark:bg-forest-deep/80 backdrop-blur-md border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-4">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep dark:text-primary-fixed uppercase tracking-tight">ABIA ONE</span>
</div>
<nav className="hidden md:flex gap-8">
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="/economic-transformation">Economy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="/serve-abia">Digital Gov</a>
<a className="font-label-caps text-label-caps text-primary dark:text-primary-fixed-dim border-b-2 border-brass-gold pb-1" href="/local-governance">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="/secure-abia">Security</a>
</nav>
<div className="flex items-center gap-3">
<button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all">Citizen Portal</button>
<button className="border border-tertiary text-tertiary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-tertiary/5 transition-all">Emergency</button>
</div>
</header>
<div className="flex flex-1 pt-16">
{/*  SideNavBar (Desktop)  */}
<aside className="hidden lg:flex flex-col h-[calc(100vh-64px)] w-64 fixed left-0 top-16 bg-surface-container-low dark:bg-forest-deep border-r border-outline-variant">
<div className="p-6 border-b border-outline-variant">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined">account_balance</span>
</div>
<div>
<p className="font-label-sm text-label-sm font-bold text-primary">ABIA ONE</p>
<p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Governance OS</p>
</div>
</div>
</div>
<nav className="flex-1 py-4 space-y-1">
<a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all mx-2 rounded-lg" href="/economic-transformation">
<span className="material-symbols-outlined">payments</span>
<span className="font-body-md text-body-md">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 bg-secondary-container text-on-secondary-container rounded-lg mx-2 translate-x-1 duration-150" href="#">
<span className="material-symbols-outlined">mitre</span>
<span className="font-body-md text-body-md">Cooperative Portal</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all mx-2 rounded-lg" href="/serve-abia">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-body-md text-body-md">Digital Government</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all mx-2 rounded-lg" href="/secure-abia">
<span className="material-symbols-outlined">security</span>
<span className="font-body-md text-body-md">Public Trust</span>
</a>
</nav>
<div className="p-4 border-t border-outline-variant">
<button className="w-full bg-forest-green text-white py-3 rounded-lg font-label-md text-label-md flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">chat_bubble</span>
                    Citizen Feedback
                </button>
<div className="mt-4 flex items-center justify-around text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-primary">settings</span>
<span className="material-symbols-outlined cursor-pointer hover:text-primary">help</span>
</div>
</div>
</aside>
{/*  Main Content Area  */}
<main className="flex-1 lg:ml-64 p-margin-mobile md:p-8 max-w-7xl mx-auto w-full">
{/*  Hero Header  */}
<section className="mb-10 relative overflow-hidden rounded-xl h-64 flex items-end">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="A panoramic wide-angle shot of a vibrant Nigerian market at sunset, capturing the energy of local trade and entrepreneurship. The lighting is warm and golden, casting long shadows across stalls filled with textiles and produce. The overall atmosphere is industrious and hopeful, reflecting a modern, progressive African economic landscape with a clean, light-mode corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcLNXnfNnhdU2OLXwoaLdDLVmXdytR7W4XwoUDMcMa83ZMVcF3p89gtLvW-u_arFkiqtqLR1fUaow6_83shT5wwwWIk42gN4XhoxBF0hbSpOphm7ACGWwEcDF4QVep8h_rc1W_LrXox2JKrnNp0xg3bV8TbgzUaLGHDbeO8gTa8LMoyzxeRLRsDOv0ggVLcntBZa3Kd-ehEmHE4Uxy6RxToMny4W8-1cty-758yR8P43upUuhcrAK38wH7qMWlySAoom2rweEsrx8" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
<div className="relative z-10 p-8 w-full flex justify-between items-end">
<div>
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 inline-block">Sovereign Infrastructure</span>
<h1 className="font-display-lg text-white text-display-lg mb-2 leading-tight">Cooperative &amp; Micro-Credit Portal</h1>
<p className="text-on-primary-container font-body-lg text-body-lg max-w-2xl">Empowering Abia's local trade networks through digitized registration, transparent lending, and institutional support.</p>
</div>
<div className="hidden md:flex gap-4">
<div className="text-right text-white">
<p className="text-3xl font-bold">₦1.2B+</p>
<p className="text-xs opacity-80 uppercase tracking-widest">Disbursed This Quarter</p>
</div>
<div className="w-[1px] h-12 bg-white/20"></div>
<div className="text-right text-white">
<p className="text-3xl font-bold">450+</p>
<p className="text-xs opacity-80 uppercase tracking-widest">Active Cooperatives</p>
</div>
</div>
</div>
</section>
{/*  Bento Grid Section  */}
<div className="bento-grid">
{/*  Main Action Card: Registration  */}
<div className="col-span-12 lg:col-span-8 glass-card rounded-xl p-8 flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-6">
<h2 className="font-headline-lg text-headline-lg text-forest-green flex items-center gap-3">
<span className="material-symbols-outlined text-3xl">how_to_reg</span>
                                Cooperative Registration Portal
                            </h2>
<span className="text-label-md font-label-md text-brass-gold border border-brass-gold px-3 py-1 rounded">Open Enrollment</span>
</div>
<p className="text-on-surface-variant mb-8 max-w-xl">Formalize your trade group to unlock state benefits, including tax incentives, bulk purchasing power, and priority access to micro-loans.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="p-4 border border-outline-variant rounded-lg bg-surface-container-low hover:border-primary transition-all cursor-pointer">
<span className="material-symbols-outlined text-primary mb-2">group_add</span>
<p className="font-bold">New Registry</p>
<p className="text-xs text-on-surface-variant">Standard formation protocol</p>
</div>
<div className="p-4 border border-outline-variant rounded-lg bg-surface-container-low hover:border-primary transition-all cursor-pointer">
<span className="material-symbols-outlined text-primary mb-2">update</span>
<p className="font-bold">Renewal</p>
<p className="text-xs text-on-surface-variant">Annual status verification</p>
</div>
<div className="p-4 border border-outline-variant rounded-lg bg-surface-container-low hover:border-primary transition-all cursor-pointer">
<span className="material-symbols-outlined text-primary mb-2">description</span>
<p className="font-bold">Document Hub</p>
<p className="text-xs text-on-surface-variant">By-laws &amp; Member lists</p>
</div>
</div>
</div>
<button className="bg-forest-green text-white w-full py-4 rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                        Begin Registration Process
                        <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
{/*  Loan Status Quick View  */}
<div className="col-span-12 lg:col-span-4 bg-surface-container-highest rounded-xl p-6 border border-outline-variant">
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Live Loan Metrics</h3>
<div className="space-y-4">
<div className="bg-white p-4 rounded-lg border border-outline-variant">
<div className="flex justify-between items-center mb-2">
<span className="text-label-md font-label-md">Processing Time</span>
<span className="text-primary font-bold">4.2 Days</span>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[85%]"></div>
</div>
</div>
<div className="bg-white p-4 rounded-lg border border-outline-variant">
<div className="flex justify-between items-center mb-2">
<span className="text-label-md font-label-md">Repayment Rate</span>
<span className="text-forest-green font-bold">98.4%</span>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[98%]"></div>
</div>
</div>
</div>
<div className="mt-8">
<p className="font-label-caps text-label-caps text-on-surface-variant mb-4">Latest Disbursements</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="flex-1">Aba Textile Co-op</span>
<span className="font-mono text-xs">₦450k</span>
</li>
<li className="flex items-center gap-3 text-sm">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="flex-1">Ohafia Farmers Union</span>
<span className="font-mono text-xs">₦1.2M</span>
</li>
<li className="flex items-center gap-3 text-sm">
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<span className="flex-1">Umuahia Tech Hub</span>
<span className="font-mono text-xs italic">Pending</span>
</li>
</ul>
</div>
</div>
{/*  Loan Application Section  */}
<div className="col-span-12 lg:col-span-6 border border-outline-variant rounded-xl overflow-hidden bg-white">
<div className="bg-primary p-6 text-white">
<h3 className="font-headline-md text-headline-md mb-2">Loan Application &amp; Tracking</h3>
<p className="text-sm opacity-80">Access low-interest capital for scaling your business operations.</p>
</div>
<div className="p-6">
<form className="space-y-4">
<div>
<label className="block text-label-md font-label-md mb-1">Select Cooperative Society</label>
<select className="w-full border-slate-400 rounded-lg p-2 focus:ring-primary focus:border-primary">
<option>Aba Shoe Makers Guild</option>
<option>Leather Works Cooperative</option>
<option>Agro-Processing Unit B</option>
</select>
</div>
<div>
<label className="block text-label-md font-label-md mb-1">Requested Amount (₦)</label>
<input className="w-full border-slate-400 rounded-lg p-2 focus:ring-primary" placeholder="Enter amount" type="number" />
</div>
<div>
<label className="block text-label-md font-label-md mb-1">Purpose of Loan</label>
<textarea className="w-full border-slate-400 rounded-lg p-2 focus:ring-primary" placeholder="Briefly describe how funds will be used..." rows={3}></textarea>
</div>
<button className="w-full bg-forest-green text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-colors" type="submit">
<span className="material-symbols-outlined">send</span>
                                Submit Application
                            </button>
</form>
</div>
</div>
{/*  Literacy Hub (Asymmetric Layout)  */}
<div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
<div className="bg-surface-container-low border border-outline-variant rounded-xl p-6 flex-1">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-forest-green">Literacy Hub</h3>
<span className="material-symbols-outlined text-brass-gold">menu_book</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="group cursor-pointer">
<div className="relative h-32 rounded-lg overflow-hidden mb-2">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="A detailed, professional overhead view of a desk featuring a digital tablet showing financial charts, a modern fountain pen, and a leather notebook. The lighting is bright and clean, emphasizing a workspace focused on financial planning and meticulous record-keeping. The style is corporate and sophisticated, adhering to a light-mode color palette of soft whites and deep forest greens." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFrnKhv0GsuJ03GUg_i0AdS6R9hrrv_QVC_2_oanLM7-uF8raKDYIWY9ErNvD_mjxFmIuZDceQuphdHzYjgyr2eIxNxkLf8altT9xgjRACRdgfzXQcSYroECeMDqgNSz_LY1dWfb95_AkhUsSsemhqm-jLT1jhXV7-YoDZ8QBnyAI-8d0W7M-41s5GK6HHld00P9elWchB1c8HH4MJIHQUbGjwyZ8Wwn4pNSk1PjaqkTG9uvA2UdPuHUdH01gxazSjLPmghsAFttI" />
</div>
<h4 className="font-bold text-sm">Managing Cooperative Assets</h4>
<p className="text-xs text-on-surface-variant">Course • 45 mins</p>
</div>
<div className="group cursor-pointer">
<div className="relative h-32 rounded-lg overflow-hidden mb-2">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="A collaborative business meeting scene in a high-tech conference room, showing people discussing growth strategies with digital interfaces. The lighting is cool and professional, with a focus on data visualization and strategic planning. The aesthetic is clean and modern, representing the advancement of small-scale entrepreneurship through technology and state-backed resources." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrT1-JlJ2O2Re589iz3WIHL27lVYEwNB7Cn1AglWbqdI0F1bbUwn3xwl2KMux_rPAZMoRJAUf6r57E-DlwVv0lOtkpwU-330sjiObl6DjlV181gyZxGD1_m3z14BEMn78KDW1uKJpNtxLYZt7usL5k-JSZHusOSNCrklSDOqCrAxweCpSQitI0QvT0T_P4LKUfFKo7n4VE1nvpMa090EL1uZVWAR48TC5Zspx4p4xLdKKonCiXLCk4BViVUwrYDzuc17IHqeic-sQ" />
</div>
<h4 className="font-bold text-sm">Scaling Your Micro-Business</h4>
<p className="text-xs text-on-surface-variant">Video • 20 mins</p>
</div>
</div>
</div>
<div className="bg-secondary-container rounded-xl p-6 flex items-center justify-between border border-brass-gold/20">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-on-secondary-container rounded-full flex items-center justify-center text-secondary-container">
<span className="material-symbols-outlined">support_agent</span>
</div>
<div>
<p className="font-bold text-on-secondary-container">Need Advisory Support?</p>
<p className="text-sm text-on-secondary-fixed-variant">Talk to an Abia State Financial Consultant today.</p>
</div>
</div>
<button className="bg-on-secondary-container text-secondary-container px-6 py-2 rounded-lg font-bold text-sm">Schedule</button>
</div>
</div>
</div>
</main>
</div>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest dark:bg-forest-deep mt-auto border-t border-outline-variant dark:border-outline py-12">
<div className="max-w-container-max-width mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-2">
<p className="font-headline-lg text-headline-lg text-forest-deep dark:text-primary-fixed font-bold mb-4">ABIA ONE</p>
<p className="text-on-surface-variant max-w-sm font-body-md text-body-md">Building a sustainable digital ecosystem for every citizen of Abia State. Institutional integrity, economic prosperity.</p>
</div>
<div>
<p className="font-label-caps text-label-caps font-bold mb-4 text-on-surface">Ecosystem</p>
<ul className="space-y-2">
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors underline decoration-transparent hover:decoration-brass-gold" href="/invest-in-aba">Invest Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors underline decoration-transparent hover:decoration-brass-gold" href="/serve-abia">Serve Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors underline decoration-transparent hover:decoration-brass-gold" href="/build-abia">Build Abia</a></li>
</ul>
</div>
<div>
<p className="font-label-caps text-label-caps font-bold mb-4 text-on-surface">Legal &amp; Support</p>
<ul className="space-y-2">
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors underline decoration-transparent hover:decoration-brass-gold" href="#">Privacy Policy</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors underline decoration-transparent hover:decoration-brass-gold" href="#">Contact Us</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors underline decoration-transparent hover:decoration-brass-gold" href="/open-abia">Open Abia</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-on-surface-variant text-sm">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">face_nod</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">language</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">mail</span>
</div>
</div>
</div>
</footer>
{/*  BottomNavBar (Mobile)  */}
<nav className="md:hidden fixed bottom-0 w-full bg-surface-container-low border-t border-outline-variant flex justify-around py-3 z-50">
<div className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">home</span>
<span className="text-[10px] font-bold uppercase">Home</span>
</div>
<div className="flex flex-col items-center gap-1 text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>mitre</span>
<span className="text-[10px] font-bold uppercase">Portal</span>
</div>
<div className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">payments</span>
<span className="text-[10px] font-bold uppercase">Loans</span>
</div>
<div className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">person</span>
<span className="text-[10px] font-bold uppercase">Profile</span>
</div>
</nav>


      </div>
    </>
  );
}
