"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .card-border {\n            border: 1px solid #E2E8F0;\n        }\n        .accent-line {\n            height: 2px;\n            width: 40px;\n            background-color: #D4AF37;\n            margin-bottom: 8px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md overflow-x-hidden">
        
{/*  SideNavBar (Mandatory Shell)  */}
<aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant z-50 flex flex-col py-6 px-4">
<div className="mb-10 px-2">
<h1 className="font-headline-md text-headline-md text-forest-green leading-none">State Governance</h1>
<p className="font-label-md text-label-md text-on-surface-variant opacity-70 mt-1">Abia One OS v2.0</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined">dashboard</span> Command Center
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined">campaign</span> Communications
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined">agriculture</span> Agriculture
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined">medical_services</span> Health
            </a>
{/*  ACTIVE TAB: GADA  */}
<a className="flex items-center gap-3 px-3 py-2.5 font-label-md text-label-md text-forest-green font-bold bg-surface-container-highest" href="#">
<span className="material-symbols-outlined">location_city</span> GADA
            </a>
<a className="flex items-center gap-3 px-3 py-2.5 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined">analytics</span> Analytics
            </a>
</nav>
<div className="mt-auto pt-6 border-t border-outline-variant space-y-1">
<button className="w-full mb-4 bg-forest-green text-white py-3 font-headline-md text-label-md rounded-lg hover:opacity-90 transition-opacity">
                New Initiative
            </button>
<a className="flex items-center gap-3 px-3 py-2 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container" href="#">
<span className="material-symbols-outlined">cloud_done</span> System Status
            </a>
<a className="flex items-center gap-3 px-3 py-2 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container" href="#">
<span className="material-symbols-outlined">help_center</span> Support
            </a>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="ml-64 min-h-screen">
{/*  TopAppBar (Mandatory Shell)  */}
<header className="flex justify-between items-center px-gutter w-full h-16 bg-surface border-b border-outline-variant sticky top-0 z-40">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md font-bold text-forest-green">Abia One OS</span>
<span className="text-outline-variant">/</span>
<span className="font-headline-md text-label-md text-on-surface-variant">Greater Aba Development Authority</span>
</div>
<div className="flex items-center gap-6">
<div className="relative">
<input className="bg-surface-container-low border border-outline-variant rounded-lg px-4 py-1.5 text-label-md w-64 focus:ring-1 focus:ring-forest-green focus:border-forest-green outline-none" placeholder="Search infrastructure..." type="text" />
</div>
<div className="flex items-center gap-4 text-on-surface-variant">
<span className="material-symbols-outlined cursor-pointer hover:text-forest-green transition-colors">notifications</span>
<span className="material-symbols-outlined cursor-pointer hover:text-forest-green transition-colors">account_balance</span>
<span className="material-symbols-outlined cursor-pointer hover:text-forest-green transition-colors">settings</span>
<div className="w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant overflow-hidden">
<img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzMnUymXIGThX94o5WFXeMnUMmRFKCXvWTIW-dfo-iCvVrFthWA8PeUPeS1-PpxyjRbLMFoXrA8Z__-CBzNKGqRZ4mdKzWWS2YMYZauUuqmdN3PhrXp9f1NMqZcTrnFDakmdzsjEOHRfZZDFMfYGI9lr0z6NPHZXqRXWRBip2gr1pkZ9pMAhaoAwB5Tt2whw1QjScCpcs937mK5HgTOHqkKZzx2_rdlfMPDWyfbYqkEJECP3GY6LT6zluvi-smdUVV6engBIPIViE" />
</div>
</div>
</div>
</header>
{/*  Dashboard Content  */}
<section className="p-gutter max-w-max-width mx-auto">
{/*  Hero Section: Aba Renewal Headline  */}
<div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="max-w-2xl">
<div className="accent-line"></div>
<h2 className="font-headline-lg text-headline-lg text-primary mb-2">Aba Renewal &amp; Industrialization</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">GADA Strategic Oversight: Monitoring the metamorphosis of West Africa's industrial hub through data-driven governance.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-6 py-3 bg-white border border-forest-green text-forest-green font-headline-md text-label-md rounded hover:bg-surface-container-low transition-all">
<span className="material-symbols-outlined text-[20px]">download</span> Export Report
                    </button>
<button className="flex items-center gap-2 px-6 py-3 bg-forest-green text-white font-headline-md text-label-md rounded hover:shadow-lg transition-all">
<span className="material-symbols-outlined text-[20px]">map</span> Master Plan 2030
                    </button>
</div>
</div>
{/*  Bento Grid Dashboard  */}
<div className="bento-grid">
{/*  Project Tracker (6 columns)  */}
<div className="col-span-12 lg:col-span-7 bg-white card-border p-6 rounded-lg relative overflow-hidden group">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="font-headline-md text-body-lg text-slate-gray">Urban Renewal Project Tracker</h3>
<p className="font-caption text-caption text-outline">Live Progress: Q3 2024</p>
</div>
<span className="text-forest-green font-label-md text-label-md flex items-center gap-1">
                            84% Active <span className="material-symbols-outlined text-[16px]">trending_up</span>
</span>
</div>
<div className="space-y-6">
{/*  Project Item 1  */}
<div className="bg-surface-container-low p-4 rounded border border-transparent hover:border-outline-variant transition-all">
<div className="flex justify-between items-center mb-2">
<span className="font-headline-md text-label-md text-forest-green">Ariaria Internal Roads</span>
<span className="font-label-md text-caption bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full">Phase 2: Paving</span>
</div>
<div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden mb-2">
<div className="bg-forest-green h-full w-[72%] transition-all duration-1000"></div>
</div>
<div className="flex justify-between text-caption font-caption text-on-surface-variant">
<span>Drainage: 95%</span>
<span>Road: 72%</span>
<span>Lighting: 40%</span>
</div>
</div>
{/*  Project Item 2  */}
<div className="bg-surface-container-low p-4 rounded border border-transparent hover:border-outline-variant transition-all">
<div className="flex justify-between items-center mb-2">
<span className="font-headline-md text-label-md text-forest-green">Port Harcourt Road Exp.</span>
<span className="font-label-md text-caption bg-tertiary-fixed text-on-tertiary-fixed px-2 py-0.5 rounded-full">Earthworks</span>
</div>
<div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden mb-2">
<div className="bg-forest-green h-full w-[38%] transition-all duration-1000"></div>
</div>
<div className="flex justify-between text-caption font-caption text-on-surface-variant">
<span>Relocation: 100%</span>
<span>Road: 38%</span>
<span>Lighting: 0%</span>
</div>
</div>
{/*  Project Item 3  */}
<div className="bg-surface-container-low p-4 rounded border border-transparent hover:border-outline-variant transition-all">
<div className="flex justify-between items-center mb-2">
<span className="font-headline-md text-label-md text-forest-green">Obohia-Ngwa-Ohanku Corridor</span>
<span className="font-label-md text-caption bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded-full">Asphalting</span>
</div>
<div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden mb-2">
<div className="bg-forest-green h-full w-[89%] transition-all duration-1000"></div>
</div>
<div className="flex justify-between text-caption font-caption text-on-surface-variant">
<span>Drainage: 100%</span>
<span>Road: 89%</span>
<span>Lighting: 65%</span>
</div>
</div>
</div>
</div>
{/*  SME Cluster Performance (5 columns)  */}
<div className="col-span-12 lg:col-span-5 bg-white card-border p-6 rounded-lg flex flex-col">
<h3 className="font-headline-md text-body-lg text-slate-gray mb-6">SME Cluster Performance</h3>
<div className="grid grid-cols-2 gap-4 flex-1">
<div className="bg-surface-container-lowest p-5 rounded border border-outline-variant flex flex-col justify-center items-center text-center">
<span className="material-symbols-outlined text-secondary text-4xl mb-2" style={{"fontVariationSettings":"'FILL' 1"}}>roller_skating</span>
<span className="font-headline-md text-headline-md text-on-surface">42,000+</span>
<span className="font-caption text-caption text-on-surface-variant">Shoe Artisans Active</span>
</div>
<div className="bg-surface-container-lowest p-5 rounded border border-outline-variant flex flex-col justify-center items-center text-center">
<span className="material-symbols-outlined text-forest-green text-4xl mb-2" style={{"fontVariationSettings":"'FILL' 1"}}>apparel</span>
<span className="font-headline-md text-headline-md text-on-surface">18,500+</span>
<span className="font-caption text-caption text-on-surface-variant">Garment Hub Units</span>
</div>
</div>
<div className="mt-6 space-y-4">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Export Readiness Index</span>
<span className="font-label-md text-label-md text-forest-green">6.8 / 10</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Financial Inclusion</span>
<span className="font-label-md text-label-md text-forest-green">74% Linked</span>
</div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Power Reliability</span>
<span className="font-label-md text-label-md text-secondary">16.4 hrs/avg</span>
</div>
</div>
<div className="mt-6 pt-6 border-t border-outline-variant">
<img alt="Aba Shoemaking Hub" className="w-full h-32 object-cover rounded shadow-inner" data-alt="A cinematic, high-detail photograph of a modern industrial artisan workshop in Aba, Nigeria. Skilled craftspeople are seen working on high-quality leather footwear using precision machinery. The environment is clean, bright, and highly professional, with natural light streaming through large windows. The color palette emphasizes deep forest greens and golden brass tones, reflecting a state-of-the-art manufacturing facility focused on quality and industrial pride." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBckF2U5oeqbXLLAwV04l4RIfEdDBxFxzeSR80KDdsbdQihz5tLOg4o7JHIvNBO-u4Z1Rk8C_SZSbtt-I0iC3eF_dIv5TmRshLajXY_0t-nsDAOjyoUuvpspMDJakFANeXAPORWn6MxcyXtPhi2KUOCncYRYq0X3LIQMqhPAHJlazFx7NhjKCDOV-yZOA1pWzIH5CEl2aq6iDzbaqyS4di7rJbFHfI51U5504wl-eY3bma4X5U5-Nj-AjMmBy2-k8k8f1TKq0ui3eE" />
</div>
</div>
{/*  Interactive City Master Plan (8 columns)  */}
<div className="col-span-12 lg:col-span-8 bg-inverse-surface text-white rounded-lg p-6 relative h-[450px] overflow-hidden">
<div className="absolute inset-0 opacity-20 pointer-events-none">

</div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-headline-md text-headline-md text-primary-fixed">Interactive Master Plan</h3>
<p className="font-body-md text-label-md text-outline-variant">Aba Urban Core Visualizer (GADA-GIS)</p>
</div>
<div className="flex bg-white/10 rounded-lg p-1">
<button className="px-3 py-1.5 font-label-md text-caption bg-forest-green rounded">Roads</button>
<button className="px-3 py-1.5 font-label-md text-caption hover:bg-white/10">Zoning</button>
<button className="px-3 py-1.5 font-label-md text-caption hover:bg-white/10">Industrial</button>
</div>
</div>
{/*  Map Placeholder Visualization  */}
<div className="flex-1 rounded-lg border border-white/20 bg-black/40 flex items-center justify-center overflow-hidden">
<div className="relative w-full h-full">
<img alt="Aba Satellite View" className="w-full h-full object-cover opacity-60" data-alt="An intricate satellite-style digital map overlay of a growing urban center. The visualization uses high-tech aesthetic lines and glowing data points to mark industrial clusters, major road arteries, and upcoming infrastructure projects. The color scheme is a sophisticated blend of dark slate, emerald green pulses, and golden highlights. The image conveys modern urban planning, precision engineering, and state-of-the-art geographic information systems for city management." data-location="Aba" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABECAahvcQ5SsyliDdMZFK3wk_d2VaPnGwcZanxh3BEeIv9KNq2FWiehXXQRJvowuCaJMfVmHgKLfkOqvDdT3SImHC6s0FWO8p_I_i0VAacVawoLNdAqrDb3jkWv3ROBzWcUT4ixPGNtdQGIomXaN762YUwmDtgsoDFfCusZrNL0yyu752BJ3HUeD5-K9jWiJwQvDfJAyk23uZmJhfVhmDflEX53MNRsNw1g_9n7iQPKZSJ1kz5FfgOuDrxgqRc6kzvIww5QW3l88" />
<div className="absolute top-1/4 left-1/3 p-2 bg-forest-green text-white text-[10px] rounded animate-pulse">Ariaria Hub</div>
<div className="absolute bottom-1/3 right-1/4 p-2 bg-brass-gold text-black text-[10px] rounded">New Industrial City</div>
</div>
</div>
</div>
</div>
{/*  Revenue Status (4 columns)  */}
<div className="col-span-12 lg:col-span-4 bg-white card-border p-6 rounded-lg flex flex-col">
<h3 className="font-headline-md text-body-lg text-slate-gray mb-6">GADA Revenue Collection</h3>
<div className="flex-1 flex flex-col justify-center">
<div className="flex justify-between items-end mb-1">
<span className="font-label-md text-label-md text-on-surface-variant">Annual Target: ₦18.4B</span>
<span className="font-headline-md text-headline-md text-forest-green">62.4%</span>
</div>
<div className="w-full h-4 bg-surface-container-high rounded-full overflow-hidden mb-8">
<div className="h-full bg-forest-green w-[62.4%]"></div>
</div>
<div className="space-y-4">
<div className="flex justify-between p-3 bg-surface rounded border-l-4 border-forest-green">
<div className="flex flex-col">
<span className="font-caption text-caption text-on-surface-variant uppercase">SME Levies</span>
<span className="font-headline-md text-label-md">₦4.2B</span>
</div>
<span className="material-symbols-outlined text-forest-green">check_circle</span>
</div>
<div className="flex justify-between p-3 bg-surface rounded border-l-4 border-brass-gold">
<div className="flex flex-col">
<span className="font-caption text-caption text-on-surface-variant uppercase">Infrastructure Fees</span>
<span className="font-headline-md text-label-md">₦3.1B</span>
</div>
<span className="material-symbols-outlined text-brass-gold">pending</span>
</div>
<div className="flex justify-between p-3 bg-surface rounded border-l-4 border-outline">
<div className="flex flex-col">
<span className="font-caption text-caption text-on-surface-variant uppercase">Property Rates</span>
<span className="font-headline-md text-label-md">₦2.8B</span>
</div>
<span className="material-symbols-outlined text-outline">history</span>
</div>
</div>
</div>
<button className="mt-8 w-full py-3 bg-surface-container-high text-on-surface font-headline-md text-label-md rounded border border-outline-variant hover:bg-surface-variant transition-colors">
                        View Detailed Audit
                    </button>
</div>
</div>
{/*  News & Updates Section  */}
<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-surface-container-low p-5 rounded-lg border border-outline-variant">
<span className="font-label-md text-caption text-forest-green bg-primary-fixed px-2 py-1 rounded">Update</span>
<h4 className="mt-3 font-headline-md text-body-lg text-on-surface">LED Lighting Rollout</h4>
<p className="mt-2 text-caption text-on-surface-variant">450 new solar-powered streetlights installed across Ngwa Road corridor this week.</p>
</div>
<div className="bg-surface-container-low p-5 rounded-lg border border-outline-variant">
<span className="font-label-md text-caption text-secondary bg-secondary-fixed px-2 py-1 rounded">Alert</span>
<h4 className="mt-3 font-headline-md text-body-lg text-on-surface">Flood Mitigation Works</h4>
<p className="mt-2 text-caption text-on-surface-variant">Scheduled drainage clearing at Faulks Road starting Monday. Traffic diversion in place.</p>
</div>
<div className="bg-surface-container-low p-5 rounded-lg border border-outline-variant">
<span className="font-label-md text-caption text-eagle-red bg-error-container px-2 py-1 rounded">Critical</span>
<h4 className="mt-3 font-headline-md text-body-lg text-on-surface">Revenue Amnesty Ends</h4>
<p className="mt-2 text-caption text-on-surface-variant">Final 48 hours for property rate discounts. Digital payment portals are active.</p>
</div>
</div>
</section>
{/*  Footer (Mandatory Shell)  */}
<footer className="mt-12 bg-surface-container border-t border-outline-variant py-4 px-gutter">
<div className="max-w-max-width mx-auto flex justify-between items-center">
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-slate-gray">GADA Digital Portal</span>
<span className="font-caption text-caption text-on-surface-variant opacity-70">© 2024 Abia State Government | Digital Infrastructure Division</span>
</div>
<div className="flex gap-6">
<a className="font-caption text-caption text-on-surface-variant hover:text-forest-green underline transition-colors" href="#">Privacy Policy</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-forest-green underline transition-colors" href="#">Terms of Service</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-forest-green underline transition-colors" href="#">Security Audit</a>
</div>
</div>
</footer>
</main>
{/*  FAB for Quick Actions (Contextual: Home/Dashboard)  */}
<div className="fixed bottom-8 right-8 z-50">
<button className="w-14 h-14 bg-forest-green text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform group">
<span className="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform">add</span>
</button>
</div>


      </div>
    </>
  );
}
