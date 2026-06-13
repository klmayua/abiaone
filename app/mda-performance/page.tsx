"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { font-family: 'Hanken Grotesk', sans-serif; }\n        .material-symbols-outlined {
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .brass-accent-line {\n            position: relative;\n        }\n        .brass-accent-line::after {\n            content: '';\n            position: absolute;\n            bottom: -4px;\n            left: 0;\n            width: 24px;\n            height: 2px;\n            background-color: #D4AF37;\n        }" 
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
        }} />
  
      {/* Screen markup */}
      <div className="bg-surface text-on-surface flex min-h-screen">
        
{/*  SideNavBar (Authority: SideNavBar JSON)  */}
<aside className="hidden lg:flex flex-col h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant z-50">
<div className="p-6">
<h1 className="font-headline-lg text-headline-lg font-bold text-forest-deep tracking-tight">ABIA ONE</h1>
<p className="font-body-md text-body-md text-on-surface-variant opacity-70">Modern Governance OS</p>
</div>
<nav className="flex-1 px-2 space-y-1">
<a className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg mx-2" href="/economic-transformation">
<span className="material-symbols-outlined mr-3" data-icon="payments">payments</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Economic Transformation</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg mx-2" href="/serve-abia">
<span className="material-symbols-outlined mr-3" data-icon="account_balance">account_balance</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Digital Government</span>
</a>
{/*  Active State: Transparent Governance (Mapping to Tracker intent)  */}
<a className="flex items-center px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg mx-2 translate-x-1 transition-all" href="/local-governance">
<span className="material-symbols-outlined mr-3" data-icon="vptree">mitre</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Transparent Governance</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg mx-2" href="/secure-abia">
<span className="material-symbols-outlined mr-3" data-icon="security">security</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider">Public Trust</span>
</a>
</nav>
<div className="mt-auto border-t border-outline-variant p-4 space-y-1">
<a className="flex items-center px-4 py-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg mx-2 transition-all" href="#">
<span className="material-symbols-outlined mr-3" data-icon="settings">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</a>
<a className="flex items-center px-4 py-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg mx-2 transition-all" href="#">
<span className="material-symbols-outlined mr-3" data-icon="help">help</span>
<span className="font-label-sm text-label-sm">Support</span>
</a>
<button className="mt-4 w-full bg-forest-green text-state-white py-3 rounded-lg font-headline-md text-label-md uppercase tracking-widest hover:opacity-90 transition-opacity">
                Citizen Feedback
            </button>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 lg:ml-64 flex flex-col">
{/*  TopNavBar (Authority: TopNavBar JSON)  */}
<header className="h-16 flex items-center justify-between px-6 md:px-margin-desktop bg-surface/80 backdrop-blur-md sticky top-0 z-40 border-b border-outline-variant">
<div className="flex items-center gap-8">
<span className="lg:hidden font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep">ABIA ONE</span>
<nav className="hidden md:flex gap-6">
<a className="font-label-caps text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/economic-transformation">Economy</a>
<a className="font-label-caps text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/serve-abia">Digital Gov</a>
<a className="font-label-caps text-label-md text-primary border-b-2 border-brass-gold pb-1" href="/local-governance">Governance</a>
<a className="font-label-caps text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/secure-abia">Security</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block bg-forest-green text-state-white px-4 py-1.5 rounded-lg text-label-md hover:opacity-90 transition-all">Citizen Portal</button>
<button className="text-eagle-red font-bold text-label-md border border-eagle-red/20 px-4 py-1.5 rounded-lg hover:bg-eagle-red/5 transition-all">Emergency</button>
<img alt="User Profile" className="w-8 h-8 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnnGEUdTFQ0wmjIZcjfI7hPjpL335_BVzpshEH0J1aHWVhS12yhE2lhkFGmtEzqKT-SRRmuHWKmjyUgYgeZwWznvz5ScgkfUMF4OrgCzqa475UiO4eD-QKeEPAgSYhtKXFptrKV_j61KDXVj_Uq4oL_yLjtDjNzzH5Wwnv-UbnvaRNa_o_dohZMdTiiiu-z0LALYJ0lUjD9lVDIUuF5gl-eL4tEdj8ZWplQbFSoZc57At4uMzF6mA5DfsAZcQ2Al1fLXnOUTrC4uY" />
</div>
</header>
{/*  Dashboard Content  */}
<div className="p-6 md:p-gutter max-w-container-max-width mx-auto w-full">
{/*  Page Title & Global Metrics  */}
<div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface brass-accent-line">Institutional Performance Tracker</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-2">Governor's Oversight Dashboard | Q3 2024</p>
</div>
<div className="flex gap-4">
<div className="bg-surface-container-low border border-outline-variant p-4 px-6 rounded-lg text-center">
<p className="font-label-md text-label-md text-on-surface-variant uppercase">Global KPI Index</p>
<p className="font-headline-lg text-headline-lg text-forest-green">87.4%</p>
</div>
<div className="bg-surface-container-low border border-outline-variant p-4 px-6 rounded-lg text-center">
<p className="font-label-md text-label-md text-on-surface-variant uppercase">Citizen Trust Score</p>
<p className="font-headline-lg text-headline-lg text-brass-gold">4.2/5</p>
</div>
</div>
</div>
{/*  Bento Grid Dashboard  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Performance Overview Card  */}
<div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-6 rounded-lg shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-on-surface brass-accent-line">MDA Performance Ranking</h3>
<button className="text-primary font-label-md flex items-center gap-2">View All <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
</div>
<div className="space-y-6">
{/*  Ranking Item  */}
<div className="flex items-center gap-4">
<div className="w-12 h-12 flex items-center justify-center bg-surface-container rounded-lg font-label-md text-headline-md text-on-surface">01</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="font-headline-md text-body-md font-semibold">Ministry of Digital Economy</span>
<span className="font-label-md text-label-md text-forest-green">94%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-forest-green h-full" style={{"width":"94%"}}></div>
</div>
</div>
</div>
{/*  Ranking Item  */}
<div className="flex items-center gap-4">
<div className="w-12 h-12 flex items-center justify-center bg-surface-container rounded-lg font-label-md text-headline-md text-on-surface">02</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="font-headline-md text-body-md font-semibold">Abia State Revenue Service</span>
<span className="font-label-md text-label-md text-forest-green">89%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-forest-green h-full" style={{"width":"89%"}}></div>
</div>
</div>
</div>
{/*  Ranking Item  */}
<div className="flex items-center gap-4">
<div className="w-12 h-12 flex items-center justify-center bg-surface-container rounded-lg font-label-md text-headline-md text-on-surface">03</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="font-headline-md text-body-md font-semibold">Ministry of Infrastructure</span>
<span className="font-label-md text-label-md text-brass-gold">81%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full" style={{"width":"81%"}}></div>
</div>
</div>
</div>
{/*  Ranking Item  */}
<div className="flex items-center gap-4">
<div className="w-12 h-12 flex items-center justify-center bg-surface-container rounded-lg font-label-md text-headline-md text-on-surface">04</div>
<div className="flex-1">
<div className="flex justify-between mb-1">
<span className="font-headline-md text-body-md font-semibold">Ministry of Health</span>
<span className="font-label-md text-label-md text-brass-gold">76%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full" style={{"width":"76%"}}></div>
</div>
</div>
</div>
</div>
</div>
{/*  Service Response Metrics  */}
<div className="md:col-span-4 bg-forest-green text-state-white p-6 rounded-lg relative overflow-hidden group">

<div className="relative z-10">
<h3 className="font-headline-md text-headline-md mb-6">Service Response</h3>
<div className="space-y-8">
<div>
<p className="font-label-md text-label-md opacity-80 uppercase mb-2">Avg. Response Time</p>
<p className="font-display-lg text-display-lg font-bold">14.2 hrs</p>
<p className="text-primary-fixed text-label-md mt-1">↓ 12% from last month</p>
</div>
<div>
<p className="font-label-md text-label-md opacity-80 uppercase mb-2">Tickets Resolved</p>
<p className="font-headline-lg text-headline-lg">12,402</p>
<div className="flex items-center gap-2 mt-2">
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border border-forest-green" data-alt="A professional Nigerian government official focusing intently on a digital screen, modern workspace environment, soft cinematic lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrsTVO6NywKN-LLSNu4H_dcwRAX6pwfuuAJH2ZUtcaYMRyzDSV0zdscf_LyTSV6Et2QW44qCaRzS2z2as2M8vLAD1zL6wCaUIXKl6N2fEBT0FSlLjeKRIW9mjYEeyyy7o42CGNVeMil6AgGB2v9Ur41828rIA17N6LyT6JIMm4chdoaqFVD3-PbfM1BtGI0tVwJlgYnN2c40aUTu9dsb_XolXmlzQHMQZaOZh_-3nGq16Q8XKBwZOpJgdRvP_ZnTCtrDNvJxXiY3g" />
<img className="w-6 h-6 rounded-full border border-forest-green" data-alt="A smiling West African bureaucrat working in a high-tech government operations center, vibrant greens and professional aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy1_Q0uK0i88Mf8eLX4oMW3jdf9PsiSaUB14Fm-JEOmf1uMM5AJU2quJuAGdPzfrpUHSzNMoPaT8EgGyNI1vpe5wDuiveNXI4Zsvpkw3MatAlWpvxiUL4oY6VJDahqTnGrNp8N_fAw6Z8khsj8tSQW6MX0Nb5-whumpDVXHxCiWK7fDDqFuoppFAgtcEGAXzmIixDsgNU_qSzVKa-SHwxhHFV4ImBozDuuzrUIPefLbETEl0T3-KalLuzG4GEFdC4vIYqMIZLuosI" />
</div>
<span className="text-caption font-caption opacity-80">+45 active agents</span>
</div>
</div>
</div>
</div>
</div>
{/*  Citizen Satisfaction Chart  */}
<div className="md:col-span-12 lg:col-span-4 bg-surface-container-low border border-outline-variant p-6 rounded-lg">
<h3 className="font-headline-md text-headline-md text-on-surface mb-6 brass-accent-line">Citizen Sentiments</h3>
<div className="h-64 flex items-end gap-4 justify-between px-4">
<div className="flex flex-col items-center gap-2 w-full">
<div className="bg-forest-green w-full rounded-t-lg transition-all hover:scale-105" style={{"height":"60%"}}></div>
<span className="font-caption text-caption">July</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="bg-forest-green w-full rounded-t-lg transition-all hover:scale-105" style={{"height":"75%"}}></div>
<span className="font-caption text-caption">Aug</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="bg-brass-gold w-full rounded-t-lg transition-all hover:scale-105" style={{"height":"85%"}}></div>
<span className="font-caption text-caption">Sep</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="bg-forest-green w-full rounded-t-lg transition-all hover:scale-105 animate-pulse" style={{"height":"92%"}}></div>
<span className="font-caption text-caption font-bold">Oct</span>
</div>
</div>
<div className="mt-6 p-4 bg-state-white rounded-lg border border-outline-variant">
<div className="flex items-center gap-2 text-forest-green">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>trending_up</span>
<span className="font-label-md text-label-md font-bold">92% Positive Feedback</span>
</div>
<p className="font-caption text-caption text-on-surface-variant mt-1">Main driver: Improved road maintenance reporting.</p>
</div>
</div>
{/*  Recent Activities / Notifications  */}
<div className="md:col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant p-6 rounded-lg">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-on-surface brass-accent-line">Real-time Performance Alerts</h3>
<div className="flex gap-2">
<span className="px-3 py-1 bg-error-container text-on-error-container text-caption rounded-full font-bold">2 CRITICAL</span>
<span className="px-3 py-1 bg-surface-variant text-on-surface-variant text-caption rounded-full">12 INFO</span>
</div>
</div>
<div className="divide-y divide-outline-variant">
<div className="py-4 flex gap-4 items-start">
<div className="w-10 h-10 bg-error-container text-error rounded-full flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">warning</span>
</div>
<div>
<p className="font-headline-md text-body-md font-bold text-on-surface">Delayed Response: Ministry of Lands</p>
<p className="font-body-md text-body-md text-on-surface-variant">Response threshold exceeded for 45 pending land title applications in Umuahia region.</p>
<p className="font-label-md text-caption text-outline mt-1">14 minutes ago • Action Required</p>
</div>
</div>
<div className="py-4 flex gap-4 items-start">
<div className="w-10 h-10 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">verified</span>
</div>
<div>
<p className="font-headline-md text-body-md font-bold text-on-surface">KPI Achieved: Health Sector</p>
<p className="font-body-md text-body-md text-on-surface-variant">Primary Healthcare vaccination target for rural zones surpassed by 15% this quarter.</p>
<p className="font-label-md text-caption text-outline mt-1">2 hours ago • Auto-archived</p>
</div>
</div>
<div className="py-4 flex gap-4 items-start">
<div className="w-10 h-10 bg-surface-variant text-on-surface-variant rounded-full flex items-center justify-center shrink-0">
<span className="material-symbols-outlined">info</span>
</div>
<div>
<p className="font-headline-md text-body-md font-bold text-on-surface">Data Sync: Revenue Portal</p>
<p className="font-body-md text-body-md text-on-surface-variant">End-of-day revenue reports from all local government kiosks successfully ingested.</p>
<p className="font-label-md text-caption text-outline mt-1">5 hours ago • System Update</p>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Footer (Authority: Footer JSON)  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto py-12 border-t border-outline-variant">
<div className="max-w-container-max-width mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
<div className="col-span-2">
<h4 className="font-headline-lg text-headline-lg text-forest-deep mb-4">ABIA ONE</h4>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xs">Driving transparency, efficiency, and growth for the people of Abia State through sovereign digital systems.</p>
</div>
<div className="space-y-4">
<p className="font-label-caps text-label-md font-bold text-on-surface">Ecosystem</p>
<ul className="space-y-2">
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="/invest-in-aba">Invest Abia</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="/serve-abia">Serve Abia</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="/build-abia">Build Abia</a></li>
</ul>
</div>
<div className="space-y-4">
<p className="font-label-caps text-label-md font-bold text-on-surface">Governance</p>
<ul className="space-y-2">
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="/open-abia">Open Abia</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline-variant/30 gap-4">
<p className="font-body-md text-body-md text-on-surface-variant">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-6">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">face_nod</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">language</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">share</span>
</div>
</div>
</div>
</footer>
</main>
{/*  Interactive Layer for data viz micro-interactions  */}


      </div>
    </>
  );
}
