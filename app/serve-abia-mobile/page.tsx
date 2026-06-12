export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        body {\n            background-color: #f6fbf3;\n            color: #181d19;\n            -webkit-font-smoothing: antialiased;\n        }\n        .brass-accent {\n            border-left: 3px solid #D4AF37;\n        }\n        .service-card-hover:active {\n            background-color: rgba(0, 77, 40, 0.05);\n            transform: scale(0.98);\n        }" }} />
  
      {/* Screen markup */}
      <div className="flex flex-col min-h-screen pb-24">
        
{/*  Top AppBar Component  */}
<header className="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline flex justify-between items-center w-full px-margin-mobile h-16 z-50 sticky top-0">
<div className="flex items-center gap-3">
<button className="hover:bg-surface-variant/50 transition-colors active:scale-95 duration-150 p-2 rounded-lg">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed">menu</span>
</button>
<h1 className="font-headline-md text-headline-md-mobile font-bold text-primary dark:text-primary-fixed">Abia One</h1>
</div>
<div className="flex items-center gap-2">
<button className="hover:bg-surface-variant/50 transition-colors active:scale-95 duration-150 p-2 rounded-lg">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed">emergency_share</span>
</button>
</div>
</header>
<main className="flex-1 w-full max-w-md mx-auto px-margin-mobile pt-6 space-y-6">
{/*  Search Section  */}
<section className="space-y-4">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full bg-surface-container-low border border-outline-variant rounded-xl py-4 pl-12 pr-4 font-body-md text-body-md focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Search for services (e.g. Taxes)" type="text" />
</div>
</section>
{/*  Track Application Status Card  */}
<section>
<div className="bg-white border border-outline-variant rounded-xl p-4 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-3">
<span className="material-symbols-outlined text-brass-gold animate-pulse">radar</span>
</div>
<h2 className="font-headline-md text-[18px] text-on-surface mb-1">Track Application</h2>
<p className="font-body-md text-caption text-on-surface-variant mb-4">View your active filing progress</p>
<div className="flex items-center gap-4 bg-surface-container-lowest border border-outline-variant/30 rounded-lg p-3">
<div className="h-10 w-10 bg-secondary-container rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-on-secondary-container" style={{"fontVariationSettings":"'FILL' 1"}}>description</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="font-label-md text-label-md text-on-surface">#AB-9283-LP</span>
<span className="font-label-md text-[11px] text-secondary font-bold uppercase">Processing</span>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-full w-[65%] rounded-full"></div>
</div>
</div>
</div>
<button className="w-full mt-4 py-2 border border-secondary text-secondary font-headline-md text-[14px] rounded-lg hover:bg-secondary/5 transition-colors">
                    View My History
                </button>
</div>
</section>
{/*  Main Services Grid  */}
<section className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="font-headline-md text-[20px] text-on-surface brass-accent pl-3">Popular Services</h3>
<button className="text-primary font-label-md text-label-md hover:underline">See All</button>
</div>
<div className="grid grid-cols-1 gap-3">
{/*  Service Item: Land Registry  */}
<div className="service-card-hover bg-white border border-outline-variant rounded-xl p-4 flex items-center gap-4 transition-all active:scale-95">
<div className="h-12 w-12 flex-shrink-0 bg-primary/10 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-[28px]">terrain</span>
</div>
<div className="flex-1">
<h4 className="font-headline-md text-[16px] text-on-surface">Land Registry</h4>
<p className="font-body-md text-caption text-on-surface-variant">C of O, Search &amp; Titling</p>
</div>
<span className="material-symbols-outlined text-outline-variant">chevron_right</span>
</div>
{/*  Service Item: Business Permits  */}
<div className="service-card-hover bg-white border border-outline-variant rounded-xl p-4 flex items-center gap-4 transition-all active:scale-95">
<div className="h-12 w-12 flex-shrink-0 bg-secondary-container/20 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-[28px]">domain</span>
</div>
<div className="flex-1">
<h4 className="font-headline-md text-[16px] text-on-surface">Business Permits</h4>
<p className="font-body-md text-caption text-on-surface-variant">Operating Licenses &amp; Renewals</p>
</div>
<span className="material-symbols-outlined text-outline-variant">chevron_right</span>
</div>
{/*  Service Item: Civil Registry  */}
<div className="service-card-hover bg-white border border-outline-variant rounded-xl p-4 flex items-center gap-4 transition-all active:scale-95">
<div className="h-12 w-12 flex-shrink-0 bg-tertiary-fixed/30 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary text-[28px]">family_history</span>
</div>
<div className="flex-1">
<h4 className="font-headline-md text-[16px] text-on-surface">Civil Registry</h4>
<p className="font-body-md text-caption text-on-surface-variant">Births, Deaths &amp; Marriages</p>
</div>
<span className="material-symbols-outlined text-outline-variant">chevron_right</span>
</div>
{/*  Service Item: Taxes  */}
<div className="service-card-hover bg-white border border-outline-variant rounded-xl p-4 flex items-center gap-4 transition-all active:scale-95">
<div className="h-12 w-12 flex-shrink-0 bg-error-container/20 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-eagle-red text-[28px]">payments</span>
</div>
<div className="flex-1">
<h4 className="font-headline-md text-[16px] text-on-surface">Taxes</h4>
<p className="font-body-md text-caption text-on-surface-variant">Personal &amp; Corporate Filings</p>
</div>
<span className="material-symbols-outlined text-outline-variant">chevron_right</span>
</div>
</div>
</section>
{/*  Help Banner  */}
<section className="pb-12">
<div className="bg-forest-green rounded-2xl p-6 text-white relative overflow-hidden">
{/*  Decorative pattern using CSS  */}
<div className="absolute inset-0 opacity-10 pointer-events-none" style={{"backgroundImage":"radial-gradient(circle at 2px 2px, white 1px, transparent 0)","backgroundSize":"24px 24px"}}></div>
<h3 className="font-headline-md text-headline-md-mobile relative z-10">Need Assistance?</h3>
<p className="font-body-md text-body-md text-primary-fixed relative z-10 mb-4 mt-2">Chat with our dedicated state support agents available 24/7 for civil matters.</p>
<button className="bg-brass-gold text-on-background px-6 py-3 rounded-lg font-headline-md text-[14px] flex items-center gap-2 relative z-10 active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings":"'FILL' 1"}}>support_agent</span>
                    Start Live Chat
                </button>
</div>
</section>
</main>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface dark:bg-surface-container-highest border-t border-outline-variant dark:border-outline shadow-sm rounded-t-full">
{/*  Dashboard  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
{/*  Alerts  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</a>
{/*  Hub (Active based on "Serve Abia" intent)  */}
<a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>apps</span>
<span className="font-label-md text-label-md">Hub</span>
</a>
{/*  Profile  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-md text-label-md">Profile</span>
</a>
</nav>


      </div>
    </>
  );
}
