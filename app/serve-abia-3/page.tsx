export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 1.5rem;\n        }\n        .card-shadow {\n            box-shadow: 0px 4px 20px rgba(0, 46, 30, 0.08);\n        }\n        .backdrop-glass {\n            backdrop-filter: blur(12px);\n            -webkit-backdrop-filter: blur(12px);\n        }\n        .custom-scrollbar::-webkit-scrollbar {\n            width: 4px;\n        }\n        .custom-scrollbar::-webkit-scrollbar-track {\n            background: transparent;\n        }\n        .custom-scrollbar::-webkit-scrollbar-thumb {\n            background: #bfc9c1;\n            border-radius: 10px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md text-body-md overflow-x-hidden min-h-screen flex flex-col">
        
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 dark:bg-forest-deep/80 backdrop-blur-md border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-3">
<img alt="Abia State Crest" className="h-10 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE3izPFfjpNfTlj3-6YrzlOE1H5OkjTDxWXEMONKK-L6RPS5sdFG4O0bHPM7wi9grvsfsf4Drgqi-lkOjPcJBXFac8iT4SeN7qpAiii4yoWx7-cQ1L3926ZtwJqmwYiKfwW-Al6vzGD2Op3Ej_ULlNKcKOusEFQsxtCzOt_uvXb5Mj6UgS2CGxGYgBXaS4EfONBJCtsRGk9VyE-XKaRWc6zLl3VIJzDjLI1XGbSwEHGKRsKpuMUg8x1lvGgMPZmevuz2XQutnR8rI" />
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep dark:text-primary-fixed">ABIA ONE</span>
</div>
<nav className="hidden md:flex gap-8">
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Economy</a>
<a className="font-label-caps text-label-caps text-primary dark:text-primary-fixed-dim border-b-2 border-brass-accent pb-1" href="#">Digital Gov</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Security</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden lg:flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-lg font-label-caps text-label-caps hover:bg-primary-container transition-all">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>account_circle</span>
                Citizen Portal
            </button>
<button className="p-2 text-error hover:bg-error-container rounded-full transition-colors">
<span className="material-symbols-outlined">emergency</span>
</button>
</div>
</header>
<main className="flex-grow pt-24 pb-12 px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto w-full">
{/*  Hero Section & Search  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
<div>
<h1 className="font-headline-xl text-headline-xl text-forest-deep mb-2">Serve Abia</h1>
<p className="text-on-surface-variant max-w-2xl font-body-lg text-body-lg">Access essential government services, track applications, and manage your civic responsibilities through our unified digital OS.</p>
</div>
<div className="w-full md:w-96">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-10 pr-4 py-3 bg-white border-b-2 border-outline-variant focus:border-brass-accent focus:ring-0 transition-all outline-none" placeholder="Search services (e.g. Tax, Permits...)" type="text" />
</div>
</div>
</div>
{/*  Service Categories Bento  */}
<div className="bento-grid">
{/*  Large Feature: Tax Portal  */}
<div className="col-span-12 lg:col-span-7 bg-white border border-outline-variant rounded-xl p-8 card-shadow relative overflow-hidden group">
<div className="relative z-10">
<span className="font-label-caps text-label-caps text-brass-accent mb-4 block">FINANCIAL SERVICES</span>
<h2 className="font-headline-lg text-headline-lg mb-4 text-forest-deep">Tax &amp; Revenue Portal</h2>
<p className="text-on-surface-variant mb-6 max-w-md">Seamlessly pay personal income tax, business levies, and property rates with instant digital receipts.</p>
<div className="flex gap-4">
<button className="bg-primary text-on-primary px-6 py-3 rounded-lg font-label-caps text-label-caps flex items-center gap-2 group-hover:translate-y-[-2px] transition-transform">
                                Pay Now <span className="material-symbols-outlined">payments</span>
</button>
<button className="border border-brass-accent text-brass-accent px-6 py-3 rounded-lg font-label-caps text-label-caps hover:bg-brass-accent/5">
                                View History
                            </button>
</div>
</div>
<div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-[180px]">account_balance_wallet</span>
</div>
</div>
{/*  Permits & Licenses  */}
<div className="col-span-12 md:col-span-6 lg:col-span-5 bg-forest-deep text-white rounded-xl p-8 card-shadow flex flex-col justify-between">
<div>
<span className="font-label-caps text-label-caps text-primary-fixed mb-4 block">PERMITS</span>
<h2 className="font-headline-lg text-headline-lg mb-4">Licenses &amp; Applications</h2>
<p className="text-primary-fixed-dim mb-8">Apply for building permits, business operating licenses, and land titles entirely online.</p>
</div>
<ul className="space-y-3">
<li className="flex items-center justify-between border-b border-primary-container pb-2">
<span>Business Registration</span>
<span className="material-symbols-outlined text-brass-accent">arrow_forward</span>
</li>
<li className="flex items-center justify-between border-b border-primary-container pb-2">
<span>Land Use Permits</span>
<span className="material-symbols-outlined text-brass-accent">arrow_forward</span>
</li>
<li className="flex items-center justify-between">
<span>Trade Licenses</span>
<span className="material-symbols-outlined text-brass-accent">arrow_forward</span>
</li>
</ul>
</div>
{/*  Citizen Dashboard / Tracking  */}
<div className="col-span-12 lg:col-span-8 bg-white border border-outline-variant rounded-xl p-8 card-shadow">
<div className="flex justify-between items-center mb-6">
<h3 className="font-label-caps text-label-caps text-forest-deep">MY ACTIVE APPLICATIONS</h3>
<span className="text-on-surface-variant text-sm">Last updated: 2 mins ago</span>
</div>
<div className="space-y-4">
<div className="flex flex-wrap md:flex-nowrap items-center gap-4 p-4 bg-surface-container-low rounded-lg border border-outline-variant/30">
<div className="p-3 bg-secondary-container rounded-lg">
<span className="material-symbols-outlined text-on-secondary-container">construction</span>
</div>
<div className="flex-grow">
<h4 className="font-semibold text-forest-deep">Building Permit - ABA/2024/0089</h4>
<div className="w-full bg-outline-variant h-2 rounded-full mt-2">
<div className="bg-primary h-full rounded-full w-3/4"></div>
</div>
</div>
<div className="text-right">
<span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-xs font-bold">IN REVIEW</span>
<p className="text-xs text-on-surface-variant mt-1">Due in 4 days</p>
</div>
</div>
<div className="flex flex-wrap md:flex-nowrap items-center gap-4 p-4 bg-surface-container-low rounded-lg border border-outline-variant/30">
<div className="p-3 bg-primary-container rounded-lg">
<span className="material-symbols-outlined text-on-primary-container">storefront</span>
</div>
<div className="flex-grow">
<h4 className="font-semibold text-forest-deep">New Enterprise License - UMU/2024/0521</h4>
<div className="w-full bg-outline-variant h-2 rounded-full mt-2">
<div className="bg-emerald-vibrant h-full rounded-full w-full"></div>
</div>
</div>
<div className="text-right">
<span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full text-xs font-bold">APPROVED</span>
<p className="text-xs text-on-surface-variant mt-1">Downloaded</p>
</div>
</div>
</div>
<button className="w-full mt-6 py-3 border-2 border-dashed border-outline-variant text-on-surface-variant rounded-lg hover:bg-surface-variant/20 transition-all font-label-caps text-label-caps">
                        + START NEW APPLICATION
                    </button>
</div>
{/*  Stats/Directory Card  */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
<div className="bg-surface-container-high rounded-xl p-6 border border-outline-variant">
<h3 className="font-label-caps text-label-caps mb-4">SERVICE STATUS</h3>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-vibrant"></div> Digital ID</span>
<span className="font-mono text-xs">ONLINE</span>
</div>
<div className="flex justify-between items-center">
<span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-vibrant"></div> Payment Gateway</span>
<span className="font-mono text-xs">ONLINE</span>
</div>
<div className="flex justify-between items-center">
<span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-brass-accent animate-pulse"></div> Land Registry</span>
<span className="font-mono text-xs">MAINTENANCE</span>
</div>
</div>
</div>
<div className="bg-brass-accent/10 rounded-xl p-6 border border-brass-accent/20 flex-grow">
<h3 className="font-label-caps text-label-caps text-brass-accent mb-2">CITIZEN FEEDBACK</h3>
<p className="text-on-surface-variant text-sm mb-4">Help us improve. Rate your recent service experience.</p>
<button className="bg-brass-accent text-white w-full py-2 rounded-lg font-label-caps text-label-caps hover:brightness-90 transition-all">SHARE EXPERIENCE</button>
</div>
</div>
</div>
</section>
{/*  Service Directory Tabs  */}
<section className="py-12 border-t border-outline-variant">
<h2 className="font-headline-lg text-headline-lg text-forest-deep mb-8">Service Directory</h2>
<div className="flex flex-wrap gap-2 mb-8">
<button className="px-6 py-2 bg-primary text-white rounded-full font-label-caps text-label-caps">All Services</button>
<button className="px-6 py-2 bg-white border border-outline-variant text-on-surface-variant rounded-full font-label-caps text-label-caps hover:bg-surface-variant/20">Business</button>
<button className="px-6 py-2 bg-white border border-outline-variant text-on-surface-variant rounded-full font-label-caps text-label-caps hover:bg-surface-variant/20">Infrastructure</button>
<button className="px-6 py-2 bg-white border border-outline-variant text-on-surface-variant rounded-full font-label-caps text-label-caps hover:bg-surface-variant/20">Education</button>
<button className="px-6 py-2 bg-white border border-outline-variant text-on-surface-variant rounded-full font-label-caps text-label-caps hover:bg-surface-variant/20">Health</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Service Cards  */}
<div className="bg-white p-6 rounded-xl border border-outline-variant hover:border-brass-accent group transition-all cursor-pointer">
<span className="material-symbols-outlined text-brass-accent mb-4">description</span>
<h4 className="font-bold text-forest-deep mb-2">Certificate of Occupancy</h4>
<p className="text-sm text-on-surface-variant">Request or renew land ownership documents digitally.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-outline-variant hover:border-brass-accent group transition-all cursor-pointer">
<span className="material-symbols-outlined text-brass-accent mb-4">school</span>
<h4 className="font-bold text-forest-deep mb-2">State Scholarship Portal</h4>
<p className="text-sm text-on-surface-variant">Apply for undergraduate and post-graduate aid.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-outline-variant hover:border-brass-accent group transition-all cursor-pointer">
<span className="material-symbols-outlined text-brass-accent mb-4">medical_services</span>
<h4 className="font-bold text-forest-deep mb-2">ABIA Care Health Insurance</h4>
<p className="text-sm text-on-surface-variant">Enroll in the state-backed healthcare scheme.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-outline-variant hover:border-brass-accent group transition-all cursor-pointer">
<span className="material-symbols-outlined text-brass-accent mb-4">badge</span>
<h4 className="font-bold text-forest-deep mb-2">Digital ID Registration</h4>
<p className="text-sm text-on-surface-variant">Sync your NIN with the Abia State Digital Registry.</p>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest dark:bg-forest-deep mt-auto border-t border-outline-variant dark:border-outline py-12">
<div className="max-w-container-max-width mx-auto">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
<div className="max-w-xs">
<span className="font-headline-lg text-headline-lg text-forest-deep dark:text-primary-fixed font-bold block mb-4">ABIA ONE</span>
<p className="text-on-surface-variant dark:text-surface-variant font-body-md text-body-md">The unified operating system for Abia State, delivering transparent governance and digital excellence to every citizen.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
<div className="flex flex-col gap-3">
<span className="font-label-caps text-label-caps text-forest-deep dark:text-primary-fixed mb-2">PROGRAMS</span>
<a className="text-on-surface-variant hover:text-brass-accent underline decoration-brass-accent transition-colors" href="#">Invest Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent underline decoration-brass-accent transition-colors" href="#">Serve Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent underline decoration-brass-accent transition-colors" href="#">Build Abia</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-label-caps text-label-caps text-forest-deep dark:text-primary-fixed mb-2">GOVERNMENT</span>
<a className="text-on-surface-variant hover:text-brass-accent underline decoration-brass-accent transition-colors" href="#">Open Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent underline decoration-brass-accent transition-colors" href="#">Contact Us</a>
<a className="text-on-surface-variant hover:text-brass-accent underline decoration-brass-accent transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-on-surface-variant dark:text-surface-variant font-label-sm text-label-sm">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">language</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">share</span>
</div>
</div>
</div>
</footer>
{/*  Side Navigation (Mobile Bottom Bar Alternative)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-outline-variant flex justify-around items-center h-16 z-50">
<button className="flex flex-col items-center gap-1 text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
<span className="text-[10px] font-bold">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">description</span>
<span className="text-[10px]">Services</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">payments</span>
<span className="text-[10px]">Payments</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">person</span>
<span className="text-[10px]">Profile</span>
</button>
</nav>


      </div>
    </>
  );
}
