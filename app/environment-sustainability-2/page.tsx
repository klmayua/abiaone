"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        body {\n            background-color: #f6fbf3;\n            color: #181d19;\n            font-family: 'Hanken Grotesk', sans-serif;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(12px);\n            border: 1px solid #E2E8F0;\n        }" }} />
  
      {/* Screen markup */}
      <div className="flex overflow-x-hidden">
        
{/*  Side Navigation Shell (Mandatory for Desktop)  */}
<aside className="flex flex-col fixed left-0 top-0 h-full py-6 px-4 space-y-2 hidden md:flex bg-surface-container-low border-r border-outline-variant w-64 z-50">
<div className="mb-8 px-2">
<h1 className="font-headline-sm text-headline-sm font-bold text-forest-green">Command Center</h1>
<p className="font-body-md text-label-md text-on-surface-variant opacity-70">State Operating System</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-md" href="/">
<span className="material-symbols-outlined">dashboard</span> Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-md" href="#">
<span className="material-symbols-outlined">analytics</span> Analytics
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-md" href="#">
<span className="material-symbols-outlined">hail</span> Citizen Requests
            </a>
{/*  Active State: Monitoring for Environment  */}
<a className="flex items-center gap-3 px-3 py-2.5 text-on-primary-container bg-primary-container rounded-lg font-label-md scale-95 transition-transform" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>account_tree</span> Project Monitoring
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-md" href="#">
<span className="material-symbols-outlined">payments</span> Revenue Tracking
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-md" href="#">
<span className="material-symbols-outlined">badge</span> Personnel
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-md" href="/secure-abia">
<span className="material-symbols-outlined">security</span> Security
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-md" href="#">
<span className="material-symbols-outlined">settings</span> Settings
            </a>
</nav>
<div className="pt-6 border-t border-outline-variant space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-md" href="#">
<span className="material-symbols-outlined">help</span> Support
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg font-label-md" href="#">
<span className="material-symbols-outlined">logout</span> Sign Out
            </a>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 md:ml-64 min-h-screen flex flex-col">
{/*  TopAppBar Shell  */}
<header className="bg-surface border-b border-outline-variant sticky top-0 z-40 w-full">
<div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto h-16">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md font-bold text-forest-green">ABIA ONE</span>
<nav className="hidden lg:flex items-center gap-6 ml-8">
<a className="font-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="/invest-in-aba">Invest</a>
<a className="font-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="/jobs-abia">Jobs</a>
<a className="font-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="/serve-abia">Serve</a>
<a className="font-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Verify</a>
<a className="font-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="/local-governance">Governance</a>
</nav>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">language</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">notifications</span>
<button className="bg-forest-green text-white px-5 py-2 rounded-lg font-label-md hover:opacity-90 transition-opacity">
                        Sign In
                    </button>
</div>
</div>
</header>
{/*  Hero Section with Animation Backdrop  */}
<section className="relative overflow-hidden bg-forest-green text-white py-16 md:py-24">

<div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
<div className="max-w-2xl">
<span className="inline-block py-1 px-3 bg-brass-gold/20 text-brass-gold border border-brass-gold/30 rounded-full font-label-md mb-6 uppercase tracking-widest">Sovereign Ecology</span>
<h1 className="font-display-lg text-display-lg mb-6 leading-tight">Environment &amp; Sustainability Framework</h1>
<p className="font-body-lg text-body-lg text-surface-container-lowest/80 mb-8">Implementing a resilient state infrastructure through renewable energy transition, waste-to-wealth circularity, and precision flood management systems.</p>
<div className="flex gap-4">
<button className="bg-brass-gold text-on-secondary-fixed px-6 py-3 rounded-lg font-headline-md text-label-md hover:scale-105 transition-transform">Explore Initiatives</button>
<button className="border border-white/40 text-white px-6 py-3 rounded-lg font-headline-md text-label-md hover:bg-white/10 transition-colors">Sector Data</button>
</div>
</div>
</div>
</section>
{/*  Bento Grid Dashboard  */}
<section className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto py-16 w-full">
<div className="mb-12">
<h2 className="font-headline-lg text-headline-lg text-forest-green border-l-4 border-brass-gold pl-4">Strategic Pillars</h2>
<p className="font-body-md text-on-surface-variant mt-2">Data-driven governance for a resilient future.</p>
</div>
<div className="bento-grid">
{/*  Large Feature: Light-Up Abia  */}
<div className="col-span-12 lg:col-span-8 glass-card rounded-xl overflow-hidden relative group opacity-100 translate-y-0">
<div className="h-64 md:h-96 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" data-alt="A cinematic wide shot of a modern solar farm installation in a lush, green African landscape at sunset. The solar panels are sleek and reflective, capturing the warm golden hour light. In the background, modern wind turbines stand tall against a clear sky. The overall aesthetic is clean, professional, and hopeful, representing sustainable renewable energy growth in Abia State." style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJiRN0GQsTJoEpP5d0rFXdBkbylWr--jt3i-jgzXx9d_qbQcDrHNtfCIpp70fcP-Q7E_B35QVMYm0qVHIqrtenZPiRHCkn9-G9vMcd0IGchz3dMhCkcPJOjzXUefh1MzwdkjKNdYWqJOxa4i0gZko-TUO0f5mo799HtBnMrWWUg76bECDm_5DK3onQdNXKt0mksUo5JbytSkQry12Bu2uSAwy5t_HTrhsCoQOQB3gQg798hjM75uojch9To_QznHyNu8BvYBVrLgo')"}}>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline-md text-headline-md text-forest-green mb-1">Light-Up Abia Initiative</h3>
<p className="font-body-md text-on-surface-variant">Decentralized Renewable Grid</p>
</div>
<span className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full font-label-md">84% Operational</span>
</div>
<p className="font-body-md text-on-surface-variant mb-6">Transitioning public infrastructure and industrial hubs to solar and biomass-hybrid systems to ensure 24/7 productivity with zero carbon footprint.</p>
<div className="grid grid-cols-3 gap-4">
<div className="p-4 bg-surface-container rounded-lg border border-outline-variant">
<p className="font-label-md text-slate-gray opacity-70">Grid Stability</p>
<p className="font-headline-md text-forest-green">99.8%</p>
</div>
<div className="p-4 bg-surface-container rounded-lg border border-outline-variant">
<p className="font-label-md text-slate-gray opacity-70">CO2 Reduced</p>
<p className="font-headline-md text-forest-green">12k Tons</p>
</div>
<div className="p-4 bg-surface-container rounded-lg border border-outline-variant">
<p className="font-label-md text-slate-gray opacity-70">New Jobs</p>
<p className="font-headline-md text-forest-green">2.4k</p>
</div>
</div>
</div>
</div>
{/*  Vertical Card: Waste-to-Wealth  */}
<div className="col-span-12 md:col-span-6 lg:col-span-4 glass-card rounded-xl flex flex-col opacity-100 translate-y-0">
<div className="h-48 w-full bg-slate-gray/10 relative">

</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="font-headline-md text-headline-md text-forest-green mb-4">Waste-to-Wealth</h3>
<p className="font-body-md text-on-surface-variant mb-6">Transforming municipal solid waste into bio-fertilizers and recycled materials for the state's agricultural and construction sectors.</p>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-on-surface-variant font-body-md">
<span className="material-symbols-outlined text-forest-green">check_circle</span> Circular Economy Framework
                            </li>
<li className="flex items-center gap-3 text-on-surface-variant font-body-md">
<span className="material-symbols-outlined text-forest-green">check_circle</span> 5 Regional Sorting Hubs
                            </li>
<li className="flex items-center gap-3 text-on-surface-variant font-body-md">
<span className="material-symbols-outlined text-forest-green">check_circle</span> Plastics Upcycling Plant
                            </li>
</ul>
<button className="w-full py-3 border-2 border-brass-gold text-on-surface font-label-md hover:bg-brass-gold/10 transition-colors rounded-lg">View Program Stats</button>
</div>
</div>
{/*  Horizontal Small: Flood Management  */}
<div className="col-span-12 md:col-span-6 lg:col-span-6 glass-card rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center opacity-100 translate-y-0">
<div className="w-full md:w-1/3 aspect-square bg-surface-container-highest rounded-full overflow-hidden flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green text-6xl">water_damage</span>
</div>
<div className="flex-1">
<h3 className="font-headline-md text-headline-md text-forest-green mb-2">Flood Management System</h3>
<p className="font-body-md text-on-surface-variant mb-4">Precision drainage engineering and AI-driven early warning systems protecting vulnerable coastal and riverine communities.</p>
<div className="flex items-center gap-2 text-brass-gold font-label-md">
<span className="material-symbols-outlined">sensors</span> 24/7 Sensor Monitoring Active
                        </div>
</div>
</div>
{/*  Data Visual: Energy Mix  */}
<div className="col-span-12 lg:col-span-6 glass-card rounded-xl p-8 opacity-100 translate-y-0">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-forest-green">Current Energy Mix</h3>
<span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
</div>
<div className="h-32 flex items-end gap-2 px-2">
<div className="flex-1 bg-forest-green rounded-t-sm" style={{"height":"65%"}}></div>
<div className="flex-1 bg-brass-gold rounded-t-sm" style={{"height":"20%"}}></div>
<div className="flex-1 bg-secondary-container rounded-t-sm" style={{"height":"10%"}}></div>
<div className="flex-1 bg-outline-variant rounded-t-sm" style={{"height":"5%"}}></div>
</div>
<div className="grid grid-cols-4 mt-4 text-center">
<p className="font-caption text-caption text-on-surface-variant">Solar</p>
<p className="font-caption text-caption text-on-surface-variant">Gas</p>
<p className="font-caption text-caption text-on-surface-variant">Biomass</p>
<p className="font-caption text-caption text-on-surface-variant">Grid</p>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant">
<p className="font-body-md text-on-surface-variant italic">"By 2030, Abia aims for 100% renewable energy for all government facilities."</p>
</div>
</div>
</div>
</section>
{/*  Interactive Map Section  */}
<section className="bg-surface-container py-20 px-margin-mobile md:px-margin-desktop">
<div className="max-w-max-width mx-auto flex flex-col lg:flex-row gap-12 items-center">
<div className="w-full lg:w-1/2">
<h2 className="font-headline-lg text-headline-lg text-forest-green mb-6">State-wide Environmental Monitoring</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Access real-time data from our network of 450+ environmental sensors. Monitor air quality, water levels, and waste collection progress across all 17 LGAs.</p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
<div className="bg-primary-fixed p-3 rounded-lg"><span className="material-symbols-outlined text-forest-green">location_on</span></div>
<div>
<h4 className="font-headline-md text-label-md text-on-surface">Aba Urban Renewal</h4>
<p className="font-body-md text-on-surface-variant text-sm">Automated waste collection and bio-gas production plant.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
<div className="bg-secondary-fixed p-3 rounded-lg"><span className="material-symbols-outlined text-secondary">eco</span></div>
<div>
<h4 className="font-headline-md text-label-md text-on-surface">Umuahia Green Belt</h4>
<p className="font-body-md text-on-surface-variant text-sm">Reforestation project covering 500 hectares of native flora.</p>
</div>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden border border-outline shadow-2xl relative">
<div className="absolute inset-0 bg-slate-200" data-location="Umuahia, Abia State, Nigeria">
<img alt="Environmental Map" className="w-full h-full object-cover opacity-80" data-alt="A sophisticated, high-resolution 3D digital topographic map of Abia State, Nigeria. The map features various overlays indicating green zones, active renewable energy plants, and environmental monitoring sensors. The colors are muted earth tones with bright forest-green highlights for sustainable areas. The lighting is soft and professional, suggesting a futuristic command center display." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCplDH_ASU-I8dG1CmZk7Bsj2vXX6TA-Mz9vHQaUZOApHiIxMcuaE8X7JNnEi3GukQTmRoEPjgNE-dE1j5PVap-L-V8XaygsjIJfgMUA2KyiB4u7nCIAAwvt7dyXDG3pvnHXC0imTeHpYrYO1Bwh9zNry3KMR3Wc5OCemXagyzuDYqTmmoDeJoZHVdprC47hvLF9FZvnTaMXhEzvPasMbbtfa3Em1wvM9ftgGRbYbLIPTuEqU1pNP_UNLLGQJ0R6fjkPRW6J9NH2u8" />
<div className="absolute inset-0 bg-forest-green/10 flex items-center justify-center">
<button className="bg-white/90 backdrop-blur text-forest-green px-6 py-3 rounded-full font-label-md flex items-center gap-2 hover:bg-white transition-all shadow-lg">
<span className="material-symbols-outlined">map</span> Open Live GIS Portal
                            </button>
</div>
</div>
</div>
</div>
</section>
{/*  Newsletter / CTA  */}
<section className="py-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto text-center">
<h2 className="font-display-lg text-display-lg text-forest-green mb-6">Invest in Abia's Green Future</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">Join our sustainable ecosystem. Partner with us on renewable energy projects, carbon credit trading, or eco-infrastructure developments.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<input className="border border-outline-variant px-6 py-3 rounded-lg w-full sm:w-80 font-body-md focus:border-forest-green outline-none" placeholder="Enter your business email" type="email" />
<button className="bg-forest-green text-white px-8 py-3 rounded-lg font-headline-md text-label-md hover:bg-primary-container transition-colors">Partner With Us</button>
</div>
</section>
{/*  Footer Shell  */}
<footer className="bg-surface-container-highest border-t border-outline-variant mt-auto">
<div className="w-full py-12 px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start max-w-max-width mx-auto gap-8">
<div className="max-w-xs">
<h2 className="font-headline-sm text-headline-sm font-bold text-forest-green mb-4">ABIA ONE</h2>
<p className="font-body-md text-on-surface-variant text-sm opacity-80 leading-relaxed">The unified digital interface for the Government of Abia State. Driving modern governance through innovation and transparency.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
<div>
<h4 className="font-label-md text-forest-green mb-4">Ecosystem</h4>
<ul className="space-y-2">
<li><a className="font-body-md text-on-surface-variant text-sm hover:text-brass-gold transition-colors" href="/invest-in-aba">Invest Abia</a></li>
<li><a className="font-body-md text-on-surface-variant text-sm hover:text-brass-gold transition-colors" href="/jobs-abia">Jobs Portal</a></li>
<li><a className="font-body-md text-on-surface-variant text-sm hover:text-brass-gold transition-colors" href="#">Citizen Services</a></li>
</ul>
</div>
<div>
<h4 className="font-label-md text-forest-green mb-4">Governance</h4>
<ul className="space-y-2">
<li><a className="font-body-md text-on-surface-variant text-sm hover:text-brass-gold transition-colors" href="#">Policy Library</a></li>
<li><a className="font-body-md text-on-surface-variant text-sm hover:text-brass-gold transition-colors" href="/open-abia">Budget Portal</a></li>
<li><a className="font-body-md text-on-surface-variant text-sm hover:text-brass-gold transition-colors" href="#">State Gazette</a></li>
</ul>
</div>
<div>
<h4 className="font-label-md text-forest-green mb-4">Legal</h4>
<ul className="space-y-2">
<li><a className="font-body-md text-on-surface-variant text-sm hover:text-brass-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a className="font-body-md text-on-surface-variant text-sm hover:text-brass-gold transition-colors" href="#">Terms of Service</a></li>
<li><a className="font-body-md text-on-surface-variant text-sm hover:text-brass-gold transition-colors" href="/news-press-center">Press Office</a></li>
</ul>
</div>
<div>
<h4 className="font-label-md text-forest-green mb-4">Connect</h4>
<div className="flex gap-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green">share</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green">mail</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green">public</span>
</div>
</div>
</div>
</div>
<div className="border-t border-outline-variant py-6 text-center">
<p className="font-caption text-caption text-on-surface-variant opacity-60">© 2024 Abia State Government. All Rights Reserved.</p>
</div>
</footer>
</main>
{/*  Mobile Bottom NavBar (Mandatory for Mobile)  */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-outline-variant flex justify-around items-center h-16 px-4 z-50">
<a className="flex flex-col items-center text-forest-green" href="/">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
<span className="text-[10px] font-label-md">Home</span>
</a>
<a className="flex flex-col items-center text-on-surface-variant" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="text-[10px] font-label-md">Stats</span>
</a>
<div className="bg-forest-green text-white w-12 h-12 rounded-full -mt-8 flex items-center justify-center shadow-lg">
<span className="material-symbols-outlined">add</span>
</div>
<a className="flex flex-col items-center text-on-surface-variant" href="#">
<span className="material-symbols-outlined">notifications</span>
<span className="text-[10px] font-label-md">Alerts</span>
</a>
<a className="flex flex-col items-center text-on-surface-variant" href="#">
<span className="material-symbols-outlined">account_circle</span>
<span className="text-[10px] font-label-md">Profile</span>
</a>
</nav>
{/*  Micro-interactions Script  */}


      </div>
    </>
  );
}
