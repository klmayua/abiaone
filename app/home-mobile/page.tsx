export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".no-scrollbar::-webkit-scrollbar { display: none; }\n        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }\n        \n        .brass-accent::after {\n            content: '';\n            display: block;\n            width: 24px;\n            height: 2px;\n            background-color: #D4AF37;\n            margin-top: 4px;\n        }\n\n        .active-nav-glow {\n            box-shadow: 0 0 12px rgba(254, 214, 91, 0.3);\n        }\n\n        body {\n            background-color: #f6fbf3;\n            color: #181d19;\n            font-family: 'Hanken Grotesk', sans-serif;\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="min-h-screen flex flex-col pb-24">
        
{/*  Top AppBar (JSON Component Mapping)  */}
<header className="flex justify-between items-center w-full px-margin-mobile h-16 z-50 bg-surface fixed top-0 border-b border-outline-variant">
<div className="flex items-center gap-3">
<button className="material-symbols-outlined text-primary hover:bg-surface-variant/50 transition-colors p-2 rounded-full active:scale-95 duration-150">
                menu
            </button>
<span className="font-headline-md text-headline-md-mobile font-bold text-primary">Abia One</span>
</div>
<button className="material-symbols-outlined text-primary hover:bg-surface-variant/50 transition-colors p-2 rounded-full active:scale-95 duration-150">
            emergency_share
        </button>
</header>
<main className="mt-16 px-4 flex-grow">
{/*  Personalized Hero Section  */}
<section className="py-6 animate-fade-in">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-full border-2 border-primary/20 p-0.5 overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover rounded-full" data-alt="A professional headshot of a smiling woman with a focused, confident expression, set against a blurred modern office background with soft lighting. The image maintains a high-trust, corporate aesthetic with a clean and professional atmosphere, using a natural color palette that emphasizes reliability and institutional authority." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxWQ4gtuiy8ym9d_NII_XyHEBaYH3BRzSES3Y2-7btYTEZI0izQbIqdD12icLyhR1COUk5_cumqnKruQPvFsQk1bfqGGa_9ITFUM-12d4a1HnsI3B8TtJuswDJp3uFfb2h1_JN-PBwun3kS43621x41jH3XhmvDFBIPZ2EM9FWyjYO1AEohppEr7uxgApxBj9F3rkALUvUIhLAgvRyQTpQqNWBbbi3jjXE8JgTJuQt5_zuCXs64_Go93svanIHeUBvrkglK1WQtxY"/>
</div>
<div>
<h1 className="font-headline-md text-headline-md-mobile text-on-background">Good morning, Chidi</h1>
<p className="font-body-md text-on-surface-variant">Wednesday, 24 May 2024</p>
</div>
</div>
{/*  Quick Stats Cards (Bento Style)  */}
<div className="grid grid-cols-2 gap-3 mb-6">
<div className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col justify-between hover:shadow-sm transition-shadow">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>account_balance_wallet</span>
<span className="bg-green-100 text-primary px-2 py-0.5 rounded-full font-label-md text-[10px] uppercase">Cleared</span>
</div>
<div>
<p className="font-label-md text-on-surface-variant uppercase text-[10px]">Tax Status</p>
<p className="font-headline-md text-lg text-on-surface">Up to date</p>
</div>
</div>
<div className="bg-surface border border-outline-variant rounded-xl p-4 flex flex-col justify-between hover:shadow-sm transition-shadow">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-eagle-red">pending_actions</span>
<div className="flex items-center justify-center bg-eagle-red text-white w-5 h-5 rounded-full text-[10px] font-bold">2</div>
</div>
<div>
<p className="font-label-md text-on-surface-variant uppercase text-[10px]">Active Apps</p>
<p className="font-headline-md text-lg text-on-surface">Reviewing</p>
</div>
</div>
</div>
</section>
{/*  Core Shortcuts Grid  */}
<section className="mb-8">
<h2 className="font-headline-md text-headline-md text-on-background mb-4 brass-accent">Core Ecosystem</h2>
<div className="grid grid-cols-2 gap-4">
{/*  Serve Abia  */}
<button className="flex flex-col items-center justify-center p-6 bg-primary text-on-primary rounded-xl transition-all active:scale-95 group">
<div className="mb-3 bg-white/10 p-3 rounded-lg group-hover:bg-white/20 transition-colors">
<span className="material-symbols-outlined text-3xl">account_balance</span>
</div>
<span className="font-headline-md text-body-md">Serve Abia</span>
<span className="font-caption text-primary-fixed opacity-70">Services</span>
</button>
{/*  Invest Abia  */}
<button className="flex flex-col items-center justify-center p-6 bg-surface border border-outline-variant rounded-xl transition-all active:scale-95 group">
<div className="mb-3 bg-secondary-container p-3 rounded-lg group-hover:bg-secondary-container/80 transition-colors">
<span className="material-symbols-outlined text-3xl text-on-secondary-container">trending_up</span>
</div>
<span className="font-headline-md text-body-md text-on-surface">Invest Abia</span>
<span className="font-caption text-on-surface-variant">Opportunities</span>
</button>
{/*  Jobs Abia  */}
<button className="flex flex-col items-center justify-center p-6 bg-surface border border-outline-variant rounded-xl transition-all active:scale-95 group">
<div className="mb-3 bg-tertiary-container/20 p-3 rounded-lg group-hover:bg-tertiary-container/30 transition-colors">
<span className="material-symbols-outlined text-3xl text-tertiary-container">work_history</span>
</div>
<span className="font-headline-md text-body-md text-on-surface">Jobs Abia</span>
<span className="font-caption text-on-surface-variant">Careers</span>
</button>
{/*  AI Academy  */}
<button className="flex flex-col items-center justify-center p-6 bg-slate-gray text-white rounded-xl transition-all active:scale-95 group">
<div className="mb-3 bg-white/10 p-3 rounded-lg group-hover:bg-white/20 transition-colors">
<span className="material-symbols-outlined text-3xl">psychology</span>
</div>
<span className="font-headline-md text-body-md">AI Academy</span>
<span className="font-caption text-slate-200">Education</span>
</button>
</div>
</section>
{/*  State News (Horizontal Scroll)  */}
<section className="mb-6 -mx-4 overflow-hidden">
<div className="px-4 flex justify-between items-end mb-4">
<h2 className="font-headline-md text-headline-md text-on-background brass-accent">State News</h2>
<a className="font-label-md text-primary text-xs flex items-center gap-1" href="#">View All <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
</div>
<div className="flex overflow-x-auto gap-4 px-4 pb-4 no-scrollbar snap-x snap-mandatory">
{/*  News Card 1  */}
<div className="min-w-[85%] snap-center bg-white rounded-xl overflow-hidden border border-outline-variant shadow-sm flex flex-col">
<div className="h-32 bg-surface-variant relative">
<img className="w-full h-full object-cover" data-alt="A wide-angle landscape shot of a modern sustainable infrastructure development project in a tropical environment. The scene features clean energy solar panels and new, well-paved roads lined with lush greenery under a clear blue sky. The visual style is professional and optimistic, emphasizing progress and state governance through high-quality photography with natural, bright lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDApmdPN1jza6xWfBh8wNJiL2V5oT62YW8-ENmMCh0KkP-aRi2HCfzJldZaIXJ9Jv98mz4PGNqq5Z6Ydvv8TLYRwB9x0TQZIcdGQqEkXOOoFOH3cyZMRJ5G2td4EEAKpu8IZvNze4ut16WYDJkIbE4vSeQykbwkk2EyR4oU9rKDxZg34dJTgr-_lKWlLzwsI_ERqYAOrxdt6XlPDMCtKboESduUhlsy0KRkP5NJEPDktjoM_Jsy-BNxEP9sAYprJR_wfZXmLz8k5QQ"/>
<div className="absolute top-2 left-2 bg-primary text-on-primary px-2 py-1 rounded-lg font-label-md text-[10px]">Infrastructure</div>
</div>
<div className="p-4">
<h3 className="font-headline-md text-base mb-1 line-clamp-1">New Aba-Owerri Road Project Update</h3>
<p className="font-body-md text-sm text-on-surface-variant line-clamp-2">Governor Otti flags off phase 2 of the industrial hub road expansion project...</p>
</div>
</div>
{/*  News Card 2  */}
<div className="min-w-[85%] snap-center bg-white rounded-xl overflow-hidden border border-outline-variant shadow-sm flex flex-col">
<div className="h-32 bg-surface-variant relative">
<img className="w-full h-full object-cover" data-alt="A sophisticated data visualization dashboard displayed on a sleek tablet screen in a bright, modern government office. The charts show positive economic trends with greens and golds reflecting the Abia State brand colors. The setting is clean and high-tech, conveying a message of transparency and data-driven governance in a professional light-mode aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu0-9fLZJS08mLErNcKDBMV1kwBuUB0Cz1o7Zinka7-l4ncHkbgkRXYJvsml5Ga6_ve2VPKrBFjNv5vw-fPxqAZVnDTP8DWZ_M_zK_paez3eR91og_fM9vgdEq5_WRt_In-NTHhkrWWWCU8S0t0A5UaARa0Gx_U5vNZCC5GzBLvp_DCUAL8tynxrVMnIIotuRFzhx2IWqUX6j4C0KRUK-Ikj98BodWY16XNmzsGtDf3P6cYxSORqHgCJUAJjsz_6nEu8dJfijM_n0"/>
<div className="absolute top-2 left-2 bg-secondary text-on-secondary px-2 py-1 rounded-lg font-label-md text-[10px]">Economy</div>
</div>
<div className="p-4">
<h3 className="font-headline-md text-base mb-1 line-clamp-1">Q2 Fiscal Transparency Report Released</h3>
<p className="font-body-md text-sm text-on-surface-variant line-clamp-2">The State Treasury reveals a 15% increase in non-oil revenue through digital...</p>
</div>
</div>
</div>
</section>
{/*  Informational Banner  */}
<section className="mb-12 bg-secondary-container/30 border border-secondary-container p-6 rounded-2xl flex items-center gap-4">
<div className="bg-secondary-container p-3 rounded-full">
<span className="material-symbols-outlined text-on-secondary-container text-2xl">campaign</span>
</div>
<div>
<h4 className="font-headline-md text-sm text-on-secondary-container">Community Alert</h4>
<p className="font-body-md text-xs text-on-surface-variant">Tree planting exercise scheduled for Umuahia North this Saturday. Join us!</p>
</div>
</section>
</main>
{/*  Bottom Nav Bar (JSON Component Mapping)  */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface border-t border-outline-variant shadow-sm rounded-t-full">
{/*  Dashboard (Active)  */}
<button className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active-nav-glow transition-all duration-200 ease-in-out">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
<span className="font-label-md text-[10px]">Dashboard</span>
</button>
{/*  Alerts  */}
<button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-all duration-200 ease-in-out">
<span className="material-symbols-outlined">notifications_active</span>
<span className="font-label-md text-[10px]">Alerts</span>
</button>
{/*  Hub  */}
<button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-all duration-200 ease-in-out">
<span className="material-symbols-outlined">apps</span>
<span className="font-label-md text-[10px]">Hub</span>
</button>
{/*  Profile  */}
<button className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-all duration-200 ease-in-out">
<span className="material-symbols-outlined">person</span>
<span className="font-label-md text-[10px]">Profile</span>
</button>
</nav>


      </div>
    </>
  );
}
