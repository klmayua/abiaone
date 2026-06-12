"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body {\n            background-color: #f6fbf3;\n            color: #181d19;\n            -webkit-font-smoothing: antialiased;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(8px);\n            border: 1px solid #E2E8F0;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }" }} />
  
      {/* Screen markup */}
      <div className="font-body-md text-body-md">
        
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 bg-background dark:bg-inverse-surface border-b border-outline-variant dark:border-outline">
<nav className="flex justify-between items-center px-margin-desktop h-20 max-w-max-width mx-auto">
<div className="flex items-center gap-4">
<span className="font-display-lg text-display-lg font-bold text-primary dark:text-primary-fixed">ABIA ONE</span>
</div>
<div className="hidden md:flex gap-8 items-center">
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/economic-transformation">Economy</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/serve-abia">Digital Gov</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/local-governance">Governance</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors" href="/secure-abia">Security</a>
<div className="ml-4 px-6 py-2 bg-primary-container text-on-primary font-semibold rounded-lg cursor-pointer transition-all duration-200 active:opacity-80">
                    Citizen Portal
                </div>
</div>
{/*  Search Bar (on_right)  */}
<div className="flex items-center gap-2 bg-surface-container rounded-full px-4 py-2 border border-outline-variant">
<span className="material-symbols-outlined text-on-surface-variant">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md w-48" placeholder="Search services..." type="text" />
</div>
</nav>
</header>
{/*  SideNavBar  */}
<aside className="fixed left-0 top-20 h-screen w-64 bg-surface-container-low dark:bg-surface-dim border-r border-outline-variant flex flex-col py-6 hidden lg:flex">
<div className="px-6 mb-8">
<h2 className="font-headline-md text-headline-md font-bold text-primary">Navigation</h2>
<p className="text-caption font-caption text-on-surface-variant">State Operating System</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 text-on-surface-variant dark:text-surface-variant px-4 py-3 hover:bg-surface-variant dark:hover:bg-inverse-surface transition-colors" href="/economic-transformation">
<span className="material-symbols-outlined">payments</span>
<span>Economic Transformation</span>
</a>
<a className="flex items-center gap-3 text-forest-green dark:text-primary-fixed font-bold border-l-4 border-brass-gold bg-surface-container-high px-4 py-3" href="/serve-abia">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>account_balance</span>
<span>Digital Government</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-surface-variant px-4 py-3 hover:bg-surface-variant dark:hover:bg-inverse-surface transition-colors" href="/local-governance">
<span className="material-symbols-outlined">gavel</span>
<span>Transparent Governance</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-surface-variant px-4 py-3 hover:bg-surface-variant dark:hover:bg-inverse-surface transition-colors" href="#">
<span className="material-symbols-outlined">verified_user</span>
<span>Public Trust</span>
</a>
</nav>
<div className="mt-auto px-4 py-6 border-t border-outline-variant">
<button className="w-full bg-forest-green text-white py-3 rounded font-medium mb-4 transition-all duration-200 active:scale-95">Launch Service</button>
<div className="flex flex-col gap-2">
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-2 hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-2 hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined">help</span>
<span>Support</span>
</a>
</div>
</div>
</aside>
{/*  Main Canvas  */}
<main className="lg:ml-64 pt-24 pb-12 px-margin-mobile md:px-gutter max-w-max-width mx-auto">
{/*  Hero Section  */}
<section className="mb-12 relative h-80 rounded-xl overflow-hidden flex items-center px-12">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover" data-alt="An expansive, high-angle aerial view of lush agricultural land in Abia State, featuring a mix of cultivated fields and rolling green hills under a bright, clear morning sun. The lighting is golden and warm, highlighting the rich textures of the terrain. The aesthetic is clean and professional, using a natural color palette of deep greens and earthy browns to convey growth and potential. This scene represents the vast land resources of the state being mapped and managed digitally." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABvRDvNFkE3CS6ZDyFaLrMq7Cy6_MzkeIvHU2nXifi8_ZM9h47xKLmoBNHW27mSkQP21n93vvFmGaAnY2_NLcR-BxEZRhzBWJ8q7JI4UtnK7criMYeOByCmmBa_58Z1s-LMzIIH4Su9V0c3hN0OLc5jIAstgXqmTu9pPFbgRSFEpC4ExIyYWUdC-41wEOK8Gw7BomP_rNbyTxxP2LAC1_tF0JNyU7bmwpcLjgU1nJ5cwxhOjntMO8blWy5EHp3c6eVpfNDURb4TtE" />
<div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
</div>
<div className="relative z-10 text-white max-w-2xl">
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">Land &amp; Property Services</h1>
<p className="font-body-lg text-body-lg opacity-90">Streamlining Certificate of Occupancy, GIS Mapping, and Land Use Charge payments for a transparent Abia.</p>
</div>
</section>
{/*  Bento Grid Layout  */}
<div className="bento-grid">
{/*  Track Land Title Widget  */}
<div className="col-span-12 md:col-span-4 bg-white border border-outline-variant p-6 rounded-xl shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md text-primary">Track Land Title</h3>
<span className="material-symbols-outlined text-brass-gold">search_check</span>
</div>
<div className="space-y-4">
<div>
<label className="block text-caption font-caption text-on-surface-variant mb-1">Application Number</label>
<input className="w-full bg-surface-container border border-outline-variant rounded px-4 py-2 focus:ring-2 focus:ring-forest-green outline-none font-label-md" placeholder="AB/LAND/2024/XXXX" type="text" />
</div>
<button className="w-full bg-forest-green text-white py-3 rounded font-medium transition-all hover:opacity-90">Verify Status</button>
</div>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant flex gap-4">
<div className="flex-1">
<p className="text-caption font-caption text-on-surface-variant">Last Update</p>
<p className="font-medium">14 mins ago</p>
</div>
<div className="flex-1">
<p className="text-caption font-caption text-on-surface-variant">Total Queries</p>
<p className="font-medium">12,402</p>
</div>
</div>
</div>
{/*  Core Services  */}
<div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Service Card 1  */}
<div className="bg-white border border-outline-variant p-6 rounded-xl hover:border-brass-gold transition-colors group cursor-pointer">
<div className="w-12 h-12 bg-surface-container-highest rounded flex items-center justify-center mb-4 group-hover:bg-primary-container group-hover:text-white transition-colors">
<span className="material-symbols-outlined">description</span>
</div>
<h4 className="font-headline-md text-[20px] font-semibold mb-2">C of O Application</h4>
<p className="text-on-surface-variant font-body-md mb-4 leading-relaxed">Apply for digital Certificate of Occupancy with accelerated 30-day processing timelines.</p>
<div className="flex items-center text-primary font-semibold gap-2">
<span>Begin Application</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</div>
</div>
{/*  Service Card 2  */}
<div className="bg-white border border-outline-variant p-6 rounded-xl hover:border-brass-gold transition-colors group cursor-pointer">
<div className="w-12 h-12 bg-surface-container-highest rounded flex items-center justify-center mb-4 group-hover:bg-primary-container group-hover:text-white transition-colors">
<span className="material-symbols-outlined">payments</span>
</div>
<h4 className="font-headline-md text-[20px] font-semibold mb-2">Land Use Charge</h4>
<p className="text-on-surface-variant font-body-md mb-4 leading-relaxed">Secure payment gateway for annual property levies and institutional land use charges.</p>
<div className="flex items-center text-primary font-semibold gap-2">
<span>Pay Now</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</div>
</div>
{/*  GIS Mapping Card  */}
<div className="col-span-1 md:col-span-2 bg-inverse-surface text-white p-8 rounded-xl relative overflow-hidden">
<div className="relative z-10 md:w-1/2">
<span className="bg-brass-gold text-on-secondary px-3 py-1 text-caption font-label-md rounded mb-4 inline-block">GIS ACTIVE</span>
<h3 className="font-headline-lg text-headline-lg mb-4">Statewide GIS Mapping</h3>
<p className="opacity-80 mb-6">Interactive spatial data for investors and developers. Access topography, boundary lines, and infrastructure overlays in real-time.</p>
<button className="border-2 border-brass-gold text-brass-gold px-8 py-3 rounded font-bold hover:bg-brass-gold hover:text-on-secondary transition-all">Explore Map Layers</button>
</div>
<div className="absolute top-0 right-0 h-full w-1/2 hidden md:block opacity-40">
<img className="w-full h-full object-cover" data-alt="A sophisticated digital map interface displaying complex GIS data layers including topography, parcel boundaries, and utility lines. The UI is dark-themed with glowing neon blue and gold highlights to indicate data density. The composition is technical and precise, suggesting a powerful state-operated mapping software. It uses sharp lines and data visualizations to communicate transparency and institutional authority." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_6-0fxJUYVRYj-LVyh-DGg7e573D5BS8Ju-kGconlAzqBXY8RITK8q_cNTtabXy3sbUah_-rK6YmMwARanuaIQtDpT6cAX5ufG_JxMB2iyJUFgmv1PPAO-oB3mfnDSSwQa2koDH7Mru6weq8jBN-HNkWAQCfjTr1scuD435nQxQHa8hniYTYpV7jS6eLJxsS97UAqZ-zCTdyzooIyEey92ldost21Vir0cQnX9VAQYNT864gF-MQHXOgXhP1xEjwnjQbrZyzune8" />
</div>
</div>
</div>
{/*  Recent Notifications / Statistics  */}
<div className="col-span-12 md:col-span-7 bg-surface-container-low border border-outline-variant p-8 rounded-xl">
<h3 className="font-headline-md text-headline-md mb-6 flex items-center gap-3">
<span className="w-1 h-8 bg-brass-gold"></span>
                    Operational Statistics
                </h3>
<div className="grid grid-cols-3 gap-6">
<div className="text-center">
<p className="font-display-lg text-[40px] text-forest-green font-bold">8,540</p>
<p className="text-caption font-caption uppercase tracking-wider text-on-surface-variant">C of O Issued</p>
</div>
<div className="text-center">
<p className="font-display-lg text-[40px] text-forest-green font-bold">12.4k</p>
<p className="text-caption font-caption uppercase tracking-wider text-on-surface-variant">Mapped Plots</p>
</div>
<div className="text-center">
<p className="font-display-lg text-[40px] text-forest-green font-bold">98%</p>
<p className="text-caption font-caption uppercase tracking-wider text-on-surface-variant">Online Success</p>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-5 flex flex-col gap-6">
<div className="bg-white border border-outline-variant p-6 rounded-xl flex items-center gap-6">
<div className="bg-eagle-red/10 text-eagle-red p-3 rounded">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>warning</span>
</div>
<div>
<h5 className="font-bold">Public Notice</h5>
<p className="text-body-md text-on-surface-variant">Renewal of all commercial leases due by Oct 31st.</p>
</div>
</div>
<div className="bg-secondary-container p-6 rounded-xl flex items-center gap-6">
<div className="bg-on-secondary-container text-white p-3 rounded">
<span className="material-symbols-outlined">help_center</span>
</div>
<div>
<h5 className="font-bold text-on-secondary-container">Need Assistance?</h5>
<p className="text-body-md text-on-secondary-container">Talk to a Land Officer via Live Chat.</p>
</div>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="relative bottom-0 w-full bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant dark:border-outline">
<div className="flex flex-col md:flex-row justify-between items-center py-gutter px-margin-desktop max-w-max-width mx-auto gap-8">
<div className="flex flex-col items-center md:items-start">
<span className="font-headline-md text-headline-md text-primary mb-2">ABIA ONE</span>
<p className="font-caption text-caption text-on-surface-variant text-center md:text-left">
                    © 2024 Abia State Government. All rights reserved. Built for the future of governance.
                </p>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="text-on-surface-variant dark:text-surface-variant font-caption text-caption hover:text-primary transition-colors" href="#">Institutional Links</a>
<a className="text-on-surface-variant dark:text-surface-variant font-caption text-caption hover:text-primary transition-colors" href="#">Transparency Info</a>
<a className="text-on-surface-variant dark:text-surface-variant font-caption text-caption hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="text-on-surface-variant dark:text-surface-variant font-caption text-caption hover:text-primary transition-colors" href="#">Contact Support</a>
</div>
</div>
</footer>


      </div>
    </>
  );
}
