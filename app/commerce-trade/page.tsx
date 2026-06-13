"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body {\n            font-family: 'Hanken Grotesk', sans-serif;\n            background-color: #f6fbf3;\n            color: #181d19;\n            overflow-x: hidden;\n        }\n        .material-symbols-outlined {
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .card-shadow {\n            box-shadow: 0 1px 2px rgba(0,0,0,0.05);\n        }\n        .glass-panel {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(10px);\n            border: 1px solid rgba(226, 232, 240, 0.5);\n        }" 
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
        }} />
  
      {/* Screen markup */}
      <div className="min-h-screen flex flex-col">
        
{/*  Top Navigation Bar  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 dark:bg-forest-deep/80 backdrop-blur-md border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-8">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep dark:text-primary-fixed"><img src="/Logos/Abia_One_No_Background.png" alt="ABIA ONE" className="h-20 w-auto" /></span>
<div className="hidden md:flex gap-6">
<a className="font-label-md text-label-md text-primary dark:text-primary-fixed-dim border-b-2 border-brass-accent pb-1 hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="/economic-transformation">Economy</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="/serve-abia">Digital Gov</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="/local-governance">Governance</a>
<a className="font-label-md text-label-md text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="/secure-abia">Security</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md transition-all active:scale-95">Citizen Portal</button>
<button className="px-4 py-2 border border-eagle-red text-eagle-red rounded-lg font-label-md hover:bg-eagle-red hover:text-white transition-all">Emergency</button>
</div>
</nav>
{/*  Side Navigation Bar (Desktop)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 pt-20 bg-surface-container-low dark:bg-forest-deep border-r border-outline-variant z-40">
<div className="px-6 mb-8">
<h2 className="font-headline-md text-headline-md text-forest-deep">Trade Portal</h2>
<p className="font-body-md text-on-surface-variant opacity-70">Aba Industrial Hub</p>
</div>
<nav className="flex-grow space-y-1">
<div className="bg-secondary-container dark:bg-primary-container text-on-secondary-container dark:text-on-primary-container rounded-lg mx-2 flex items-center p-3 gap-3 cursor-pointer translate-x-1 duration-150">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>payments</span>
<span className="font-label-md">Economic Transformation</span>
</div>
<div className="text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant/50 mx-2 flex items-center p-3 gap-3 cursor-pointer transition-all">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-md">Digital Government</span>
</div>
<div className="text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant/50 mx-2 flex items-center p-3 gap-3 cursor-pointer transition-all">
<span className="material-symbols-outlined">mitre</span>
<span className="font-label-md">Transparent Governance</span>
</div>
<div className="text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant/50 mx-2 flex items-center p-3 gap-3 cursor-pointer transition-all">
<span className="material-symbols-outlined">security</span>
<span className="font-label-md">Public Trust</span>
</div>
</nav>
<div className="p-4 border-t border-outline-variant">
<button className="w-full py-3 bg-brass-gold text-white rounded-lg font-bold flex items-center justify-center gap-2">
<span className="material-symbols-outlined">feedback</span>
                Citizen Feedback
            </button>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-grow pt-24 lg:pl-64 px-margin-mobile md:px-margin-desktop pb-12">
<div className="max-w-container-max-width mx-auto">
{/*  Hero Section  */}
<section className="relative mb-12 rounded-xl overflow-hidden h-80 flex items-center">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover brightness-50" data-alt="A cinematic wide shot of a bustling, ultra-modern industrial park in Aba, Abia State. The scene features sleek architectural structures with clean lines, large solar arrays, and high-tech manufacturing units. The lighting is early morning gold, casting long dramatic shadows and highlighting the forest green and brass gold accents of the state brand. The atmosphere is productive, sophisticated, and represents the pinnacle of modern African governance and trade." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxJHHKjYXlD7Bc7VO_sDEIRzyM1wLlfVwHjf-nc1OSArHDM_3Y87HPEYsHcK_MMZcFiwj7sXNO6UhmqSbLzZOGzoCDGHKgqV5YEm-lHQYdO9IT4CUif1Y0S0y3qGL_BcyvuVEVpwHZh8hov597ogbJ5Ib388Yhohs9MK0pN0JwvjOqTcgWHLEhEdBrXEzaPMemGZBz9x20jGT3XdYQCNEMqBPkE0GHjB-H9-n6JePWn2Vm3BLI1XyvrAmXe7r_x-5goKTUMyIpidw" />
</div>
<div className="relative z-10 px-12 text-white max-w-2xl">
<span className="inline-block px-3 py-1 bg-brass-gold text-white text-xs font-bold rounded mb-4">COMMERCE &amp; TRADE</span>
<h1 className="font-display-lg text-display-lg mb-4">The Digital Pulse of Aba Trade</h1>
<p className="font-body-lg text-body-lg opacity-90">Revolutionizing the Ariaria ecosystem with sovereign digital infrastructure, real-time export tracking, and seamless wholesaler licensing.</p>
</div>
</section>
{/*  Bento Grid Dashboard  */}
<div className="bento-grid">
{/*  Ariaria Digital Marketplace (Large)  */}
<div className="col-span-12 lg:col-span-8 bg-white border border-outline-variant rounded-xl p-8 card-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-[120px]">storefront</span>
</div>
<div className="flex justify-between items-start mb-6">
<div>
<div className="w-12 h-1 bg-brass-gold mb-2"></div>
<h3 className="font-headline-md text-headline-md text-forest-green">Ariaria Digital Marketplace</h3>
<p className="text-on-surface-variant font-body-md">Onboarding 50,000+ local artisans to the global stage.</p>
</div>
<button className="flex items-center gap-1 text-primary font-bold group-hover:translate-x-1 transition-transform">
                            Enter Market <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
<div className="p-4 bg-surface-container rounded-lg">
<span className="text-3xl font-bold text-forest-green">12.4k</span>
<p className="text-xs font-label-md uppercase tracking-wider text-on-surface-variant">Active Merchants</p>
</div>
<div className="p-4 bg-surface-container rounded-lg">
<span className="text-3xl font-bold text-forest-green">₦2.1B</span>
<p className="text-xs font-label-md uppercase tracking-wider text-on-surface-variant">Trade Volume (MTD)</p>
</div>
<div className="p-4 bg-surface-container rounded-lg">
<span className="text-3xl font-bold text-forest-green">98.2%</span>
<p className="text-xs font-label-md uppercase tracking-wider text-on-surface-variant">Seller Rating</p>
</div>
</div>
<div className="mt-8 overflow-hidden rounded-lg border border-outline-variant">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-variant/50">
<tr>
<th className="p-4 font-label-md text-on-surface">Category</th>
<th className="p-4 font-label-md text-on-surface">Trend</th>
<th className="p-4 font-label-md text-on-surface">Stock Level</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr>
<td className="p-4 font-body-md font-semibold">Leather Works</td>
<td className="p-4 text-forest-green flex items-center gap-1"><span className="material-symbols-outlined text-sm">trending_up</span> +14%</td>
<td className="p-4">
<div className="w-full bg-outline-variant h-1.5 rounded-full overflow-hidden">
<div className="bg-forest-green h-full" style={{"width":"85%"}}></div>
</div>
</td>
</tr>
<tr>
<td className="p-4 font-body-md font-semibold">Textiles &amp; Apparel</td>
<td className="p-4 text-forest-green flex items-center gap-1"><span className="material-symbols-outlined text-sm">trending_up</span> +22%</td>
<td className="p-4">
<div className="w-full bg-outline-variant h-1.5 rounded-full overflow-hidden">
<div className="bg-forest-green h-full" style={{"width":"60%"}}></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Trade Licensing (Sidebar Vertical)  */}
<div className="col-span-12 lg:col-span-4 bg-surface-container-low border border-outline-variant rounded-xl p-8 card-shadow">
<h3 className="font-headline-md text-headline-md text-forest-green mb-6">Wholesale Licensing</h3>
<div className="space-y-4">
<div className="bg-white p-4 rounded border border-outline-variant hover:border-brass-gold transition-colors cursor-pointer group">
<div className="flex justify-between items-center mb-2">
<span className="material-symbols-outlined text-forest-green">verified_user</span>
<span className="bg-secondary-container text-[10px] font-bold px-2 py-0.5 rounded">NEW</span>
</div>
<h4 className="font-semibold text-body-md group-hover:text-brass-gold">Export Wholesaler Permit</h4>
<p className="text-sm text-on-surface-variant mt-1">Required for cross-border logistics of leather and textile goods.</p>
</div>
<div className="bg-white p-4 rounded border border-outline-variant hover:border-brass-gold transition-colors cursor-pointer group">
<div className="flex justify-between items-center mb-2">
<span className="material-symbols-outlined text-forest-green">factory</span>
</div>
<h4 className="font-semibold text-body-md group-hover:text-brass-gold">Industrial Site License</h4>
<p className="text-sm text-on-surface-variant mt-1">Operational permit for factories within the Aba Economic Zone.</p>
</div>
<div className="bg-white p-4 rounded border border-outline-variant hover:border-brass-gold transition-colors cursor-pointer group opacity-60">
<div className="flex justify-between items-center mb-2">
<span className="material-symbols-outlined text-forest-green">inventory_2</span>
</div>
<h4 className="font-semibold text-body-md group-hover:text-brass-gold">Warehousing Bond</h4>
<p className="text-sm text-on-surface-variant mt-1">Customs-cleared storage licensing for international transit.</p>
</div>
</div>
<button className="w-full mt-8 py-3 border-2 border-brass-gold text-secondary font-bold rounded hover:bg-brass-gold hover:text-white transition-colors">Apply for New License</button>
</div>
{/*  Export Logistics Tracking (Full Width High Intensity)  */}
<div className="col-span-12 bg-white border border-outline-variant rounded-xl p-8 card-shadow overflow-hidden">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div>
<div className="w-12 h-1 bg-brass-gold mb-2"></div>
<h3 className="font-headline-md text-headline-md text-forest-green">Global Export Logistics</h3>
<p className="text-on-surface-variant font-body-md">Live monitoring of Abia-made goods across international borders.</p>
</div>
<div className="flex bg-surface-container rounded-lg p-1">
<button className="px-4 py-1.5 bg-white shadow-sm rounded font-label-md text-forest-green">Active Shipments</button>
<button className="px-4 py-1.5 rounded font-label-md text-on-surface-variant">Completed</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Tracking Card 1  */}
<div className="p-6 rounded-lg border-l-4 border-brass-gold bg-surface-bright glass-panel transition-transform hover:-translate-y-1">
<div className="flex justify-between items-start mb-4">
<span className="font-label-md text-brass-gold">ABX-2940-L</span>
<span className="px-2 py-0.5 bg-secondary-container text-[10px] font-bold rounded-full">IN TRANSIT</span>
</div>
<h4 className="font-bold text-lg mb-1">Handcrafted Footwear</h4>
<p className="text-xs text-on-surface-variant mb-4">Dest: Houston, USA</p>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-forest-green text-lg">flight_takeoff</span>
<div className="flex-grow h-0.5 bg-outline-variant relative">
<div className="absolute left-0 top-0 h-full bg-forest-green" style={{"width":"65%"}}></div>
</div>
<span className="material-symbols-outlined text-outline text-lg">location_on</span>
</div>
<p className="text-[11px] font-medium text-on-surface-variant">Current: Lagos Hub (Customs Clear)</p>
</div>
{/*  Tracking Card 2  */}
<div className="p-6 rounded-lg border-l-4 border-forest-green bg-surface-bright glass-panel transition-transform hover:-translate-y-1">
<div className="flex justify-between items-start mb-4">
<span className="font-label-md text-forest-green">ABX-8812-T</span>
<span className="px-2 py-0.5 bg-primary-container text-on-primary-container text-[10px] font-bold rounded-full">SHIPPED</span>
</div>
<h4 className="font-bold text-lg mb-1">Textile Machinery</h4>
<p className="text-xs text-on-surface-variant mb-4">Dest: Accra, Ghana</p>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-forest-green text-lg">local_shipping</span>
<div className="flex-grow h-0.5 bg-outline-variant relative">
<div className="absolute left-0 top-0 h-full bg-forest-green" style={{"width":"100%"}}></div>
</div>
<span className="material-symbols-outlined text-forest-green text-lg" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</div>
<p className="text-[11px] font-medium text-on-surface-variant">Arrived: Accra South Terminal</p>
</div>
{/*  Tracking Card 3  */}
<div className="p-6 rounded-lg border-l-4 border-brass-gold bg-surface-bright glass-panel transition-transform hover:-translate-y-1">
<div className="flex justify-between items-start mb-4">
<span className="font-label-md text-brass-gold">ABX-3310-M</span>
<span className="px-2 py-0.5 bg-secondary-container text-[10px] font-bold rounded-full">PROCESSING</span>
</div>
<h4 className="font-bold text-lg mb-1">Raw Palm Oil (Premium)</h4>
<p className="text-xs text-on-surface-variant mb-4">Dest: London, UK</p>
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-forest-green text-lg">dock</span>
<div className="flex-grow h-0.5 bg-outline-variant relative">
<div className="absolute left-0 top-0 h-full bg-forest-green" style={{"width":"15%"}}></div>
</div>
<span className="material-symbols-outlined text-outline text-lg">anchor</span>
</div>
<p className="text-[11px] font-medium text-on-surface-variant">Location: Aba Packaging Center</p>
</div>
{/*  Add Tracking Action  */}
<div className="p-6 rounded-lg border-2 border-dashed border-outline-variant flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-4xl text-outline mb-2 group-hover:scale-110 transition-transform">add_circle</span>
<h4 className="font-bold text-on-surface-variant">Register Shipment</h4>
<p className="text-xs text-on-surface-variant mt-1">Onboard new export batch</p>
</div>
</div>
</div>
{/*  Aba Innovation Hub Visual  */}
<div className="col-span-12 lg:col-span-12 bg-forest-green rounded-xl overflow-hidden relative min-h-[300px] flex flex-col justify-center p-12">
<div className="absolute inset-0 opacity-20">

</div>
<div className="relative z-10 text-white max-w-xl">
<h2 className="font-display-lg text-display-lg mb-4">Enyimba Economic City Hub</h2>
<p className="font-body-lg mb-8 opacity-80">Connecting local production to the African Continental Free Trade Area (AfCFTA). Access venture capital, industrial scaling tools, and direct export corridors.</p>
<div className="flex gap-4">
<button className="px-8 py-3 bg-brass-gold text-white font-bold rounded hover:brightness-110 transition-all">Investment Guide</button>
<button className="px-8 py-3 border border-white/50 text-white font-bold rounded hover:bg-white/10 transition-all">Virtual Tour</button>
</div>
</div>
<div className="hidden xl:block absolute right-12 bottom-0 h-72">
<img className="h-full rounded-t-xl object-cover shadow-2xl" data-alt="A high-contrast digital data visualization showing a 3D bar chart rising from a map of Abia State, Nigeria. The bars represent economic growth and trade volumes, rendered in shimmering forest green and metallic brass gold colors. The background is a clean, dark forest green with subtle grid lines, conveying a sense of sophisticated data-driven governance and institutional authority." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDTcMNYMRiT1XKmiLnGWThrAcWJHd-9gGmA6m-RyAOO3S9EUbqJYV1fMhFLnd2QSnXbwcNjvlgsMKzc5Ep5rb6TgKuajmfndevFSz53bYc2T5XBo3xdtlDDgGIzyX8yxr2SXl38wwi-DB3NRrQnUtP5PEL9v5EmQgvNP74Mxm-PkImYQti56-EXe_uvKHZ61qCDcCS5PSmlcp_h7WyssOxXaMf6aXFX77I7OH8A8zAHmk_Op66mMZYrl7cklu65EZ9_jWCoFwYOiY" />
</div>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest dark:bg-forest-deep mt-auto py-12 border-t border-outline-variant dark:border-outline">
<div className="max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs">
<h2 className="font-headline-lg text-headline-lg text-forest-deep dark:text-primary-fixed mb-4">ABIA ONE</h2>
<p className="font-body-md text-on-surface-variant">The sovereign digital operating system of Abia State. Empowering trade, governance, and every citizen.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div className="flex flex-col gap-3">
<span className="font-label-caps text-label-caps text-forest-green font-bold">ECOSYSTEM</span>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors hover:underline decoration-brass-accent" href="/invest-in-aba">Invest Abia</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors hover:underline decoration-brass-accent" href="/serve-abia">Serve Abia</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors hover:underline decoration-brass-accent" href="/build-abia">Build Abia</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-label-caps text-label-caps text-forest-green font-bold">RESOURCES</span>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors hover:underline decoration-brass-accent" href="/open-abia">Open Abia</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors hover:underline decoration-brass-accent" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors hover:underline decoration-brass-accent" href="#">Contact Us</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-label-caps text-label-caps text-forest-green font-bold">SUPPORT</span>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">mail</span>
<span>trade@abia.gov.ng</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">phone</span>
<span>0800-ABIA-ONE</span>
</div>
</div>
</div>
</div>
<div className="max-w-container-max-width mx-auto mt-12 pt-8 border-t border-outline-variant/30 text-center">
<p className="font-body-md text-on-surface-variant opacity-70">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
</div>
</footer>
{/*  FAB for Search/Market Actions  */}
<button className="fixed bottom-8 right-8 w-16 h-16 bg-forest-green text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined text-3xl">shopping_cart</span>
</button>


      </div>
    </>
  );
}
