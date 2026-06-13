"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .archive-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(8px);\n            border: 1px solid #E2E8F0;\n        }\n        .bento-tall { grid-row: span 2; }\n        .bento-wide { grid-column: span 2; }\n        \n        /* Custom Scrollbar for Scholarly feel */\n        ::-webkit-scrollbar { width: 8px; }\n        ::-webkit-scrollbar-track { background: #f1f5ee; }\n        ::-webkit-scrollbar-thumb { background: #006838; border-radius: 4px; }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  Top Navigation Anchor  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-8">
<img src="/Logos/Abia_One_No_Background.png" alt="ABIA ONE" className="h-8 w-auto" />
<div className="hidden md:flex gap-6 items-center">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/economic-transformation">Economy</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/serve-abia">Digital Gov</a>
<a className="font-label-md text-label-md text-primary border-b-2 border-brass-gold pb-1" href="/local-governance">Governance</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/secure-abia">Security</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="px-4 py-2 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:opacity-90 transition-all">Citizen Portal</button>
<button className="p-2 text-eagle-red hover:bg-error-container rounded-full transition-colors">
<span className="material-symbols-outlined">emergency</span>
</button>
</div>
</nav>
{/*  Sidebar (Desktop)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 pt-20 bg-surface-container-low border-r border-outline-variant z-40">
<div className="px-6 mb-8">
<h2 className="font-headline-md text-headline-md text-forest-deep">Archives</h2>
<p className="font-caption text-caption text-outline">Modern Governance OS</p>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-4 py-3 mx-2 bg-secondary-container text-on-secondary-container rounded-lg translate-x-1 duration-150" href="/digital-archives-heritage">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-md text-label-md">Executive Archives</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
<span className="material-symbols-outlined">mitre</span>
<span className="font-label-md text-label-md">Traditional Registry</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-md text-label-md">Economic Records</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="/secure-abia">
<span className="material-symbols-outlined">security</span>
<span className="font-label-md text-label-md">Public Trust Data</span>
</a>
</nav>
<div className="mt-auto p-4 border-t border-outline-variant">
<button className="w-full py-2 border border-brass-gold text-brass-gold font-label-md text-label-md rounded-lg hover:bg-brass-gold/10 transition-colors">Citizen Feedback</button>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="lg:ml-64 pt-24 px-margin-mobile md:px-margin-desktop pb-20">
{/*  Hero Search Section  */}
<section className="mb-12">
<div className="max-w-4xl">
<h1 className="font-display-lg text-display-lg text-on-surface mb-4 leading-tight">Preserving the Sovereign <span className="text-forest-green">Legacy</span> of Abia.</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-8">Access the complete digital memory of the state—from executive gazettes to the lineage of traditional rulers and the photographic evolution of our infrastructure.</p>
<div className="relative flex items-center max-w-2xl">
<span className="material-symbols-outlined absolute left-4 text-outline">search</span>
<input className="w-full pl-12 pr-4 py-4 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-sm font-body-md" placeholder="Search archives, names, or historical documents..." type="text" />
<button className="absolute right-3 px-6 py-2 bg-primary text-on-primary rounded-lg font-label-md">Browse Catalog</button>
</div>
</div>
</section>
{/*  Bento Grid Repository  */}
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 auto-rows-[200px] gap-6">
{/*  Featured: Traditional Leadership  */}
<div className="md:col-span-2 lg:col-span-3 row-span-2 relative overflow-hidden rounded-xl group border border-outline-variant">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A dignified close-up portrait of an elderly African traditional leader in ceremonial regalia with ornate gold jewelry and a red cap, set against a blurred background of a historic palace courtyard. The lighting is dramatic and warm, highlighting the textures of the fabric and the wisdom in the subject's expression, fitting the Modern Governance aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwnMByCyV57vF7NDblRP4kztM-bXZxu6W5Xtrnw5Gl9gHK6Xq3L-4MdQkNzwM_cj8Tlow1eUuIEAC1Ya3n0Wm6-_aBDSGrMkpnoGGsSkW_sKgyvfbXdXnWC22XVeI59KNylg1oxwj23AL3KtQuPZlNQuzZuGBHsPCmQt6hHQVeG5zWLs2aApBTn8InG8UmdHt_wrvx09goQM4Ihn2NLjCFArN5GvoQZVwgwF-LWMpFVNZYU2QZ6yPdnAd6yhXnFif0Q21WHNhmMFk" />
<div className="absolute inset-0 bg-gradient-to-t from-forest-green/90 via-forest-green/20 to-transparent"></div>
<div className="absolute bottom-0 p-8 text-white">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-1 bg-brass-gold/20 backdrop-blur-md rounded border border-brass-gold/40 text-[10px] font-label-md uppercase tracking-widest">Mandatory Registry</span>
</div>
<h3 className="font-headline-lg text-headline-lg mb-2">Registry of Traditional Rulers</h3>
<p className="font-body-md text-white/80 max-w-sm">The definitive lineage of Abia's sovereign traditional leadership across 17 LGAs.</p>
</div>
</div>
{/*  Executive Orders  */}
<div className="md:col-span-2 lg:col-span-3 row-span-1 glass-card rounded-xl p-6 flex flex-col justify-between border-l-4 border-l-primary hover:shadow-md transition-shadow">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-primary text-4xl">gavel</span>
<span className="font-label-md text-caption text-outline">LATEST UPDATE: 24 OCT 2024</span>
</div>
<div>
<h4 className="font-headline-md text-headline-md text-on-surface mb-1">Executive Gazettes</h4>
<p className="font-body-md text-on-surface-variant">Archived policy documents and administrative directives from 1991.</p>
</div>
</div>
{/*  Photo Archive  */}
<div className="md:col-span-2 lg:col-span-2 row-span-2 relative overflow-hidden rounded-xl border border-outline-variant group">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A cinematic black and white aerial photograph of a developing Nigerian city from the 1990s, showing early road networks and emerging modern architecture. The image is crisp with high contrast, evoking a sense of historical preservation and scholarly research. It captures the transition from past to present within the Abia state infrastructure." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0E3-WqBife6yU4S9P_-mLwRjEWv-rHe7d5kpeN4xhchEwmrbCYfD_E0vpF-lfuYEqLwIpYKMwcOSgJ8-g7BGK6vqVFMADfsHLk0tbnTDp2SnmruJltfnCVyqL8uN4-F8NWhXGcDAOstn84f_oA9ONiABjpYtlV3BHPQny3NPKTO5nJdVhsJXHxppJ6_JjcMJvwJF9vLSnuULrkWZDFYKdYgJbAst6syPzx2yy9zBoiPDPyui2PtofgobuI0rBANjvSLRL5047rc8" />
<div className="absolute inset-0 bg-on-surface/40 group-hover:bg-on-surface/20 transition-colors"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
<h4 className="font-headline-md text-headline-md">Visual Evolution</h4>
<p className="font-body-md opacity-0 group-hover:opacity-100 transition-opacity">12,000+ digitized photographs of state history.</p>
</div>
</div>
{/*  Digital Sovereignty Chart (Mini Interaction)  */}
<div className="md:col-span-2 lg:col-span-1 row-span-1 bg-surface-container-high rounded-xl p-6 flex flex-col items-center justify-center text-center">
<span className="text-4xl font-bold text-forest-green">98%</span>
<span className="font-label-md text-caption uppercase text-outline mt-2">Digitization Progress</span>
</div>
{/*  Historical Maps  */}
<div className="md:col-span-2 lg:col-span-3 row-span-1 glass-card rounded-xl p-6 flex items-center gap-6 group cursor-pointer hover:border-brass-gold/50 transition-colors">
<div className="w-20 h-20 bg-secondary-container/30 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-4xl">map</span>
</div>
<div>
<h4 className="font-headline-md text-headline-md">Cartographic History</h4>
<p className="font-body-md text-on-surface-variant">Maps detailing the evolution of regional boundaries since independence.</p>
</div>
</div>
</div>
{/*  Document List Section (Scholarly Accessibility)  */}
<section className="mt-16">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Recent Repository Additions</h2>
<div className="h-1 w-24 bg-brass-gold mt-2"></div>
</div>
<div className="flex gap-2">
<button className="p-2 border border-outline-variant rounded hover:bg-surface-variant"><span className="material-symbols-outlined">filter_list</span></button>
<button className="p-2 border border-outline-variant rounded hover:bg-surface-variant"><span className="material-symbols-outlined">grid_view</span></button>
</div>
</div>
<div className="space-y-4">
{/*  Document Row 1  */}
<div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white border border-outline-variant rounded-lg hover:border-primary transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<div className="p-3 bg-error-container/20 text-eagle-red rounded">
<span className="material-symbols-outlined">picture_as_pdf</span>
</div>
<div>
<h5 className="font-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors">Abia State Founding Decree No. 41 of 1991</h5>
<p className="font-caption text-outline">Executive Registry • 4.2 MB • Digitized 2023</p>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-6">
<span className="px-3 py-1 bg-surface-container-high rounded-full font-label-md text-caption">Public Record</span>
<button className="text-primary hover:underline font-label-md">Download</button>
</div>
</div>
{/*  Document Row 2  */}
<div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white border border-outline-variant rounded-lg hover:border-primary transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<div className="p-3 bg-primary-container/10 text-primary rounded">
<span className="material-symbols-outlined">article</span>
</div>
<div>
<h5 className="font-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors">Lineage Records: The Enachioken of Abiriba (1890 - Present)</h5>
<p className="font-caption text-outline">Traditional Leadership • 12.8 MB • Restricted Access</p>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-6">
<span className="px-3 py-1 bg-secondary-container/20 text-on-secondary-container rounded-full font-label-md text-caption">Academic Request Only</span>
<button className="text-primary hover:underline font-label-md">Request Access</button>
</div>
</div>
{/*  Document Row 3  */}
<div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white border border-outline-variant rounded-lg hover:border-primary transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<div className="p-3 bg-forest-green/10 text-forest-green rounded">
<span className="material-symbols-outlined">camera</span>
</div>
<div>
<h5 className="font-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors">Inaugural Session of the 1st House of Assembly Photo Reel</h5>
<p className="font-caption text-outline">Multimedia Archives • 85 MB • High Resolution</p>
</div>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-6">
<span className="px-3 py-1 bg-surface-container-high rounded-full font-label-md text-caption">Public Record</span>
<button className="text-primary hover:underline font-label-md">View Gallery</button>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto border-t border-outline-variant py-12">
<div className="max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-sm">
<span className="font-headline-lg text-headline-lg text-forest-deep block mb-4">ABIA ONE</span>
<p className="font-body-md text-on-surface-variant">Building the digital foundation for a sovereign, transparent, and historical government infrastructure.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div className="flex flex-col gap-2">
<span className="font-label-md text-label-md uppercase text-outline mb-2">Ecosystem</span>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="/invest-in-aba">Invest Abia</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="/serve-abia">Serve Abia</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="/build-abia">Build Abia</a>
</div>
<div className="flex flex-col gap-2">
<span className="font-label-md text-label-md uppercase text-outline mb-2">Resources</span>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="/open-abia">Open Abia</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Us</a>
</div>
<div className="col-span-2 md:col-span-1">
<span className="font-label-md text-label-md uppercase text-outline mb-4 block">Archive Certification</span>
<div className="flex items-center gap-4 p-4 bg-white/50 border border-outline-variant rounded">
<span className="material-symbols-outlined text-brass-gold text-3xl">verified</span>
<span className="text-caption font-medium">Official State Registry Authenticated</span>
</div>
</div>
</div>
</div>
<div className="max-w-container-max-width mx-auto mt-12 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between text-caption text-outline">
<span>© 2024 Government of Abia State, Nigeria. Built for the Future.</span>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:underline" href="#">Digital Sovereignty Act</a>
<a className="hover:underline" href="#">Terms of Access</a>
</div>
</div>
</footer>
{/*  Interactive Micro-Interactions  */}


      </div>
    </>
  );
}
