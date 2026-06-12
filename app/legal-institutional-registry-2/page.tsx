"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { font-family: 'Hanken Grotesk', sans-serif; }\n        .legal-gradient { background: linear-gradient(135deg, #004d28 0%, #006838 100%); }\n        .brass-accent { border-left: 4px solid #D4AF37; }\n        .glass-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(10px); border: 1px solid rgba(226, 232, 240, 1); }\n        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }" }} />
  
      {/* Screen markup */}
      <div className="bg-surface text-on-surface">
        
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 dark:bg-forest-deep/80 backdrop-blur-md border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-4">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep dark:text-primary-fixed">ABIA ONE</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Economy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Digital Gov</a>
<a className="font-label-caps text-label-caps text-primary dark:text-primary-fixed-dim border-b-2 border-brass-accent pb-1" href="#">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200" href="#">Security</a>
</div>
<div className="flex items-center gap-4">
<button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-caps text-label-caps hover:bg-primary-container transition-all">Citizen Portal</button>
<button className="material-symbols-outlined text-eagle-red">emergency</button>
</div>
</nav>
{/*  SideNavBar (Desktop Only)  */}
<aside className="hidden lg:flex flex-col h-full border-r border-outline-variant fixed left-0 top-0 w-64 bg-surface-container-low dark:bg-forest-deep z-40 pt-20">
<div className="px-6 mb-8">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep dark:text-primary-fixed">ABIA ONE</h2>
<p className="font-body-md text-body-md text-on-surface-variant opacity-70">Modern Governance OS</p>
</div>
<nav className="flex-grow space-y-1">
<a className="flex items-center gap-3 py-3 px-4 mx-2 text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-sm text-label-sm">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 py-3 px-4 mx-2 text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-sm text-label-sm">Digital Government</span>
</a>
<a className="flex items-center gap-3 py-3 px-4 mx-2 bg-secondary-container dark:bg-primary-container text-on-secondary-container dark:text-on-primary-container rounded-lg translate-x-1" href="#">
<span className="material-symbols-outlined">mitre</span>
<span className="font-label-sm text-label-sm">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 py-3 px-4 mx-2 text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">security</span>
<span className="font-label-sm text-label-sm">Public Trust</span>
</a>
</nav>
<div className="p-6 border-t border-outline-variant">
<button className="w-full py-2 bg-brass-gold text-on-secondary-fixed font-bold rounded-lg mb-6">Citizen Feedback</button>
<div className="space-y-4">
<a className="flex items-center gap-3 text-on-surface-variant hover:text-primary" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant hover:text-primary" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-label-sm text-label-sm">Support</span>
</a>
</div>
</div>
</aside>
{/*  Main Content  */}
<main className="lg:ml-64 pt-20 pb-12 px-margin-mobile md:px-margin-desktop">
{/*  Hero Section  */}
<header className="mb-12 relative overflow-hidden rounded-xl h-64 flex items-center p-8 text-on-primary">

<div className="relative z-10 max-w-2xl">
<h1 className="font-display-lg text-display-lg mb-2">Legal &amp; Institutional Repository</h1>
<p className="font-body-lg text-body-lg opacity-90">Access the sovereign digital laws, gazettes, and frameworks defining the new Abia State.</p>
</div>
</header>
{/*  Quick Access Bento Grid  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
{/*  State Constitution  */}
<div className="glass-card p-6 rounded-lg brass-accent flex flex-col justify-between group hover:shadow-lg transition-all cursor-pointer">
<div>
<span className="material-symbols-outlined text-forest-green text-4xl mb-4">gavel</span>
<h3 className="font-headline-md text-headline-md mb-2">State Constitution</h3>
<p className="font-body-md text-body-md text-on-surface-variant">The fundamental legal document outlining the powers and duties of the state government.</p>
</div>
<div className="mt-6 flex items-center text-primary font-bold gap-2">
<span>View Repository</span>
<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</div>
</div>
{/*  Laws of Abia State  */}
<div className="glass-card p-6 rounded-lg brass-accent flex flex-col justify-between group hover:shadow-lg transition-all cursor-pointer">
<div>
<span className="material-symbols-outlined text-forest-green text-4xl mb-4">menu_book</span>
<h3 className="font-headline-md text-headline-md mb-2">Laws of Abia State</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Comprehensive digital archive of all enacted legislation, sorted by category and year.</p>
</div>
<div className="mt-6 flex items-center text-primary font-bold gap-2">
<span>Explore Index</span>
<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</div>
</div>
{/*  State Gazettes  */}
<div className="glass-card p-6 rounded-lg brass-accent flex flex-col justify-between group hover:shadow-lg transition-all cursor-pointer">
<div>
<span className="material-symbols-outlined text-forest-green text-4xl mb-4">newspaper</span>
<h3 className="font-headline-md text-headline-md mb-2">State Gazettes</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Official public notices, judicial news, and legislative announcements published weekly.</p>
</div>
<div className="mt-6 flex items-center text-primary font-bold gap-2">
<span>Search Gazettes</span>
<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</div>
</div>
</section>
<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
{/*  Legislative Progress Tracker  */}
<div className="xl:col-span-2 space-y-6">
<div className="flex items-center justify-between mb-2">
<h2 className="font-headline-md text-headline-md flex items-center gap-2">
<span className="material-symbols-outlined text-brass-gold">timeline</span>
                        Legislative Progress Tracker
                    </h2>
<a className="text-primary font-label-md text-label-md underline" href="#">View All Bills</a>
</div>
{/*  Bill Cards  */}
<div className="space-y-4">
<div className="bg-white border border-outline-variant p-5 rounded-lg">
<div className="flex justify-between items-start mb-4">
<div>
<span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-caption font-label-md rounded mb-2 inline-block">AB/HB/2024/042</span>
<h4 className="font-headline-md text-headline-md text-lg">Digital Infrastructure Sovereign Fund Bill</h4>
</div>
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>account_balance</span>
<span className="font-label-md text-label-md">House of Assembly</span>
</div>
</div>
{/*  Progress Bar  */}
<div className="relative pt-1">
<div className="flex mb-2 items-center justify-between">
<div>
<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-forest-green bg-primary-fixed">
                                        Second Reading
                                    </span>
</div>
<div className="text-right">
<span className="text-xs font-semibold inline-block text-forest-green">
                                        65%
                                    </span>
</div>
</div>
<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-surface-container">
<div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-forest-green" style={{"width":"65%"}}></div>
</div>
<div className="grid grid-cols-4 text-[10px] text-on-surface-variant uppercase font-label-md">
<div className="text-left font-bold text-forest-green">Introduction</div>
<div className="text-center font-bold text-forest-green">First Reading</div>
<div className="text-center font-bold text-forest-green">Second Reading</div>
<div className="text-right opacity-40">Final Passage</div>
</div>
</div>
</div>
<div className="bg-white border border-outline-variant p-5 rounded-lg">
<div className="flex justify-between items-start mb-4">
<div>
<span className="px-2 py-1 bg-surface-container-high text-on-surface-variant text-caption font-label-md rounded mb-2 inline-block">AB/HB/2024/038</span>
<h4 className="font-headline-md text-headline-md text-lg">State Forestry &amp; Conservation Act Amendment</h4>
</div>
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined">eco</span>
<span className="font-label-md text-label-md">Committee Review</span>
</div>
</div>
<div className="relative pt-1">
<div className="flex mb-2 items-center justify-between">
<div>
<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-on-secondary-container bg-secondary-container">
                                        In Committee
                                    </span>
</div>
<div className="text-right">
<span className="text-xs font-semibold inline-block text-on-secondary-container">
                                        30%
                                    </span>
</div>
</div>
<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-surface-container">
<div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-brass-gold" style={{"width":"30%"}}></div>
</div>
</div>
</div>
</div>
</div>
{/*  FOI Portal  */}
<div className="space-y-6">
<h2 className="font-headline-md text-headline-md flex items-center gap-2">
<span className="material-symbols-outlined text-eagle-red">mail</span>
                    FOI Request Portal
                </h2>
<div className="bg-surface-container-highest border border-outline p-6 rounded-lg">
<p className="font-body-md text-body-md text-on-surface mb-6">Submit a formal request for information under the Abia State Freedom of Information Framework.</p>
<form className="space-y-4">
<div>
<label className="block font-label-md text-label-md mb-1">Full Legal Name</label>
<input className="w-full border-slate-400 rounded-lg p-3 bg-white focus:ring-primary focus:border-primary" placeholder="Enter your name" type="text" />
</div>
<div>
<label className="block font-label-md text-label-md mb-1">Information Requested</label>
<textarea className="w-full border-slate-400 rounded-lg p-3 bg-white focus:ring-primary focus:border-primary" placeholder="Describe the records you wish to access..." rows={4}></textarea>
</div>
<div className="flex items-center gap-2 mb-4">
<input className="rounded border-slate-400 text-primary" id="consent" type="checkbox" />
<label className="text-caption font-caption text-on-surface-variant" htmlFor="consent">I agree to the terms of the FOI framework.</label>
</div>
<button className="w-full py-3 bg-forest-green text-white font-bold rounded-lg hover:bg-primary transition-all" type="submit">Submit Formal Request</button>
</form>
<div className="mt-6 pt-6 border-t border-outline-variant">
<div className="flex justify-between items-center text-caption font-caption">
<span>Avg Response Time:</span>
<span className="text-forest-green font-bold">14 Business Days</span>
</div>
<div className="flex justify-between items-center text-caption font-caption mt-2">
<span>Requests This Month:</span>
<span className="text-on-surface font-bold">1,204</span>
</div>
</div>
</div>
{/*  Legal Identity Card  */}
<div className="relative rounded-lg overflow-hidden h-40 group">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A grand marble interior of a high court building with classical columns and golden state emblems, captured in dramatic architectural photography. The lighting is cold and professional, reflecting a sense of institutional authority and transparency. In the background, modern glass elements merge with traditional stone, signifying the modernization of governance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4RXgb02JgD1-IdbNIr6OnVszxp3mXh-vVZQQTdsVOh5PO3qk63agZw8qvGIVzZN4hjPnf2Kc7A531cbHIMe0DByUigL7xkdMU6hQoK__eo61Q0f68AnIavOzw8jk9WNS0Tvngzp-O257jgmMF17qtZj4JiBt6pbhOylfKuuhddC7LKA-iqVJm0JoYxyyDo5xSPYyy-8fvmapKMoRILXD0FXzPskyn-keCpf9MR42hsdCED3x262lidl8DXf-8b6Cevqc1fKehrQ4" />
<div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] flex items-end p-4">
<h3 className="text-white font-headline-md text-headline-md">Judicial Updates</h3>
</div>
</div>
</div>
</div>
{/*  Document Library Table  */}
<section className="mt-16 bg-white border border-outline-variant rounded-lg overflow-hidden shadow-sm">
<div className="p-6 border-b border-outline-variant flex justify-between items-center">
<h3 className="font-headline-md text-headline-md">Recent Publications</h3>
<div className="flex gap-2">
<button className="px-4 py-1 border border-outline-variant rounded-full text-caption font-label-md hover:bg-surface-container transition-colors">Most Recent</button>
<button className="px-4 py-1 border border-outline-variant rounded-full text-caption font-label-md hover:bg-surface-container transition-colors">Popular</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps border-b border-outline-variant">
<tr>
<th className="px-6 py-4">Title</th>
<th className="px-6 py-4">Reference</th>
<th className="px-6 py-4">Date</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant font-body-md">
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4 font-semibold">2024 Revenue Consolidation Order</td>
<td className="px-6 py-4 font-label-md">AB-SL-0024-RC</td>
<td className="px-6 py-4 text-on-surface-variant">Oct 24, 2024</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-bold uppercase">Effective</span>
</td>
<td className="px-6 py-4">
<button className="material-symbols-outlined text-primary hover:scale-110 transition-transform">download</button>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4 font-semibold">Public Procurement Guidelines v2.0</td>
<td className="px-6 py-4 font-label-md">AB-PP-2024-GD</td>
<td className="px-6 py-4 text-on-surface-variant">Oct 12, 2024</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs font-bold uppercase">Effective</span>
</td>
<td className="px-6 py-4">
<button className="material-symbols-outlined text-primary hover:scale-110 transition-transform">download</button>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4 font-semibold">Special Economic Zones (Amendment)</td>
<td className="px-6 py-4 font-label-md">AB-SEZ-2024-AM</td>
<td className="px-6 py-4 text-on-surface-variant">Sep 30, 2024</td>
<td className="px-6 py-4">
<span className="px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold uppercase">Pending assent</span>
</td>
<td className="px-6 py-4">
<button className="material-symbols-outlined text-on-surface-variant opacity-50 cursor-not-allowed">visibility_off</button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 bg-surface-container-low text-center">
<button className="text-primary font-bold font-label-md hover:underline">Show 42 more publications</button>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest dark:bg-forest-deep mt-auto border-t border-outline-variant py-12">
<div className="max-w-container-max-width mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-2">
<span className="font-headline-lg text-headline-lg text-forest-deep dark:text-primary-fixed block mb-4">ABIA ONE</span>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">The unified digital operating system for the Government of Abia State. Ensuring transparency, accountability, and citizen-led governance for a prosperous future.</p>
</div>
<div className="grid grid-cols-2 col-span-2 gap-8">
<div>
<h4 className="font-label-caps text-label-caps text-on-surface font-bold mb-4">Frameworks</h4>
<ul className="space-y-2 text-on-surface-variant font-body-md">
<li><a className="hover:text-brass-accent transition-colors" href="#">Invest Abia</a></li>
<li><a className="hover:text-brass-accent transition-colors" href="#">Serve Abia</a></li>
<li><a className="hover:text-brass-accent transition-colors" href="#">Build Abia</a></li>
<li><a className="hover:text-brass-accent transition-colors" href="#">Open Abia</a></li>
</ul>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-on-surface font-bold mb-4">Legal</h4>
<ul className="space-y-2 text-on-surface-variant font-body-md">
<li><a className="hover:text-brass-accent transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brass-accent transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-brass-accent transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-brass-accent transition-colors" href="#">Sitemap</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-body-md text-body-md text-on-surface-variant opacity-70">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-6">
<span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">face_nod</span>
<span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">public</span>
<span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer">share</span>
</div>
</div>
</div>
</footer>
{/*  Scripts  */}


      </div>
    </>
  );
}
