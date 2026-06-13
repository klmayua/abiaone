"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .archival-gradient {\n            background: radial-gradient(circle at top right, rgba(212, 175, 55, 0.05), transparent),\n                        radial-gradient(circle at bottom left, rgba(0, 77, 40, 0.05), transparent);\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(8px);\n            border: 1px solid #E2E8F0;\n        }\n        ::-webkit-scrollbar { width: 6px; }\n        ::-webkit-scrollbar-track { background: transparent; }\n        ::-webkit-scrollbar-thumb { background: #D4AF37; border-radius: 10px; }" }} />
  
      {/* Screen markup */}
      <div className="bg-background font-body-md text-on-surface overflow-x-hidden">
        
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-4">
<img src="/Logos/Abia_One_No_Background.png" alt="ABIA ONE" className="h-8 w-auto" />
</div>
<nav className="hidden md:flex gap-8">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/economic-transformation">Economy</a>
<a className="font-label-caps text-label-caps text-primary border-b-2 border-brass-gold pb-1" href="/serve-abia">Digital Gov</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/local-governance">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/secure-abia">Security</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:block px-6 py-2 border border-brass-gold text-secondary font-medium rounded-lg hover:bg-secondary-container transition-all">Emergency</button>
<button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all">Citizen Portal</button>
</div>
</header>
{/*  SideNavBar (Hidden on Mobile)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 pt-20 bg-surface-container-low border-r border-outline-variant z-40">
<div className="px-6 mb-8">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep">ABIA ONE</h2>
<p className="text-caption text-on-surface-variant">Modern Governance OS</p>
</div>
<nav className="flex-1 px-2 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all group" href="/economic-transformation">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary" data-icon="payments">payments</span>
<span className="font-label-sm text-label-sm">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg transition-all" href="/serve-abia">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
<span className="font-label-sm text-label-sm">Digital Government</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all group" href="/local-governance">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary" data-icon="vptree">mitre</span>
<span className="font-label-sm text-label-sm">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all group" href="/secure-abia">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary" data-icon="security">security</span>
<span className="font-label-sm text-label-sm">Public Trust</span>
</a>
</nav>
<div className="px-4 py-6 border-t border-outline-variant">
<button className="w-full bg-forest-green text-on-primary py-3 rounded-lg font-label-md text-label-md mb-4 shadow-md">Citizen Feedback</button>
<div className="space-y-1">
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="font-label-sm text-label-sm">Support</span>
</a>
</div>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="lg:pl-64 pt-16 min-h-screen archival-gradient">
<div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop py-12">
{/*  Hero Section  */}
<section className="mb-16">
<div className="relative rounded-xl overflow-hidden h-[400px] flex items-center p-12">
<img alt="Heritage Library" className="absolute inset-0 w-full h-full object-cover brightness-50" data-alt="A grand, high-contrast digital library archive with towering mahogany shelves reaching into a misty, golden-lit ceiling. The atmosphere is quiet and institutional, featuring professional architectural lighting that highlights dust motes dancing in sunbeams. The scene is captured in a wide-angle perspective, emphasizing a modern yet timeless archival aesthetic with forest green and brass gold color accents throughout." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFFdKTFAxyD-mcCl8TGwjmGOa4LqvqD4NWISvPkm8yP14wpXypyn3iu3b2BydTqyHHVvTFjxOtemoCLusyTky1qgWV40eUBzBYbtegtTi3d5QdrSewL73XsfHo7kmYJlUNrgv1TpQlVa9lD9CVh2KE7llxnzj0yoiLb85qG5c46gp7E52wFknQiof8O1StmK8-AdDCyV2IfKg2XZ5tfF5QVjvZqJiyKPMyviyunzAQJqTPljSjt9xwnjP8ZwifIp6gjmvir333azw"/>
<div className="relative z-10 max-w-2xl">
<span className="inline-block px-4 py-1 bg-brass-gold/20 text-brass-gold font-label-caps text-label-md border border-brass-gold/30 rounded-full mb-4">SOVEREIGN DIGITAL INFRASTRUCTURE</span>
<h1 className="font-display-lg text-display-lg text-state-white mb-6">Digital Archives &amp; State Heritage</h1>
<p className="font-body-lg text-body-lg text-state-white/80 mb-8">Preserving the legacy of the 'God's Own State'. Explore centuries of documented history, artifacts, and the pioneering spirits of Abia.</p>
<div className="flex gap-4">
<button className="bg-forest-green text-on-primary px-8 py-4 rounded-lg font-semibold hover:translate-y-[-2px] transition-all shadow-lg">Start Exploring</button>
<button className="bg-state-white/10 backdrop-blur-md text-state-white border border-state-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-state-white/20 transition-all">Submit Archive</button>
</div>
</div>
</div>
</section>
{/*  Quick Access Stats  */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
<div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg">
<p className="text-caption text-on-surface-variant font-label-caps mb-1">DIGITIZED DOCUMENTS</p>
<p className="font-headline-lg text-headline-lg text-forest-green">1.2M+</p>
</div>
<div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg">
<p className="text-caption text-on-surface-variant font-label-caps mb-1">STATE ARTIFACTS</p>
<p className="font-headline-lg text-headline-lg text-forest-green">4,850</p>
</div>
<div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg">
<p className="text-caption text-on-surface-variant font-label-caps mb-1">REGISTERED HEROES</p>
<p className="font-headline-lg text-headline-lg text-forest-green">124</p>
</div>
<div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg">
<p className="text-caption text-on-surface-variant font-label-caps mb-1">VIRTUAL VISITORS</p>
<p className="font-headline-lg text-headline-lg text-forest-green">85.4K</p>
</div>
</div>
{/*  Bento Grid: Main Repository  */}
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 border-l-4 border-brass-gold pl-6">Heritage Repository</h2>
<div className="bento-grid mb-20">
{/*  Large Feature: Virtual Museum  */}
<div className="col-span-12 md:col-span-8 bg-surface-container-highest rounded-xl overflow-hidden border border-outline-variant group hover:shadow-xl transition-shadow duration-300">
<div className="grid md:grid-cols-2 h-full">
<div className="p-8 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-brass-gold text-4xl mb-4" data-icon="museum">museum</span>
<h3 className="font-headline-md text-headline-md mb-3">Abia Virtual Museum</h3>
<p className="text-on-surface-variant mb-6">A high-fidelity 3D experience exploring the Akwete weaving traditions, Bronze works of the old Bende region, and pre-colonial governance structures.</p>
</div>
<a className="inline-flex items-center gap-2 text-forest-green font-bold group-hover:gap-4 transition-all" href="#">
                                ENTER EXHIBITION <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
<div className="relative h-64 md:h-auto overflow-hidden">
<img alt="3D Artifact" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A detailed 3D macro shot of an ancient bronze artifact from the Bende region of Abia State, Nigeria. The artifact is displayed in a sleek, minimalist digital museum setting with soft, volumetric lighting. The color palette features warm bronze tones contrasted against a cool forest green and slate gray background. The overall aesthetic is professional, modern, and highlights the intricate textures of the historical craftsmanship." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBarJDZNVo3LhCgu5o6VY1hno6ixNutS-_kGYuZm7vf4mkInqZdgG8R3WsL2ALigP3YXFzVO82TsvicOv22vrZGhaev3Dw_M6RV-PMIKBlmnmwECZj6B2HkYTehZ8ojyK6Cpi2z5iZXXc0Qh_tzHnaKXcA9A4uPbHsik7ZkZTdT7_qPtzYm2fe8aJ_MSwiC-tmLbUzHQJvYL7hB5ErVRMat2acFLrd80akqtjiME-ur7ayBwLyDdompsCugsvIYDSv29yHR4tbkpPk"/>
</div>
</div>
</div>
{/*  Card: Document Archive  */}
<div className="col-span-12 md:col-span-4 glass-card rounded-xl p-8 flex flex-col border border-outline-variant hover:border-brass-gold transition-colors">
<span className="material-symbols-outlined text-forest-green text-3xl mb-4" data-icon="menu_book">menu_book</span>
<h3 className="font-headline-md text-headline-md mb-2">Historical Records</h3>
<p className="text-on-surface-variant mb-8">Access digitized gazettes, land treaties, and administrative papers from 1900 to present day.</p>
<div className="mt-auto space-y-3">
<div className="flex items-center gap-3 text-caption font-label-md text-on-surface-variant bg-surface p-2 rounded border border-outline-variant/30">
<span className="material-symbols-outlined text-sm" data-icon="search">search</span>
                            Search 12,000+ Records
                        </div>
<button className="w-full py-3 border border-forest-green text-forest-green font-bold rounded-lg hover:bg-forest-green hover:text-on-primary transition-all">BROWSE ARCHIVE</button>
</div>
</div>
{/*  Card: Oral History  */}
<div className="col-span-12 md:col-span-4 bg-forest-green text-on-primary rounded-xl p-8 relative overflow-hidden group">

<div className="relative z-10">
<span className="material-symbols-outlined text-secondary-container text-3xl mb-4" data-icon="record_voice_over">record_voice_over</span>
<h3 className="font-headline-md text-headline-md mb-2">Voice of Elders</h3>
<p className="opacity-80 mb-6">A collection of audio narratives and folklore captured from the custodians of tradition across the 17 LGAs.</p>
<button className="px-6 py-2 bg-secondary-container text-on-secondary-container rounded-lg font-bold">LISTEN NOW</button>
</div>
</div>
{/*  Large Section: State Heroes  */}
<div className="col-span-12 md:col-span-8 bg-surface-container-low rounded-xl p-8 border border-outline-variant">
<div className="flex justify-between items-center mb-8">
<h3 className="font-headline-md text-headline-md">State Heroes Hall of Fame</h3>
<a className="text-brass-gold font-label-md hover:underline" href="#">VIEW ALL BIOGRAPHIES</a>
</div>
<div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
{/*  Hero Avatar 1  */}
<div className="flex-shrink-0 w-48 text-center group">
<div className="w-32 h-32 mx-auto rounded-full border-2 border-brass-gold p-1 mb-4 group-hover:scale-105 transition-transform">
<img alt="Hero 1" className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="A dignified black and white studio portrait of an elderly African statesperson with an expression of wisdom and leadership. The lighting is dramatic and artistic, reminiscent of classic archival photography. The setting is clean and minimalist, emphasizing the subject's character. The image serves as a high-end digital portrait for a government Hall of Fame, maintaining a prestigious and modern archival aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0GcPUDi_2Te4rsfxgIzcj64MvEYzCdnPLU6-pnJ6BsjBqY2NhnS9iFU1uqUPKvFG6nP0PdK5CUpVpuUDLt9ZJcQwWXZrtlyZ5zddKx-pvmA4-w7UlMU8cziouANfw0sqJuUJamy8IxtE6WlyYkVitnEk5qf15MXhFFX_UltCajlM-LZl5vKn74Epr13VogRXAswgpXrUGnvmYTtUEQF1aanPQzKA6ZbfxMHgsbrXws-VZCN-HewAgj45H_tRJXMhbxPneFdT0xgw"/>
</div>
<h4 className="font-bold text-on-surface">M.I. Okpara</h4>
<p className="text-caption text-on-surface-variant">The Visionary Premier</p>
</div>
{/*  Hero Avatar 2  */}
<div className="flex-shrink-0 w-48 text-center group">
<div className="w-32 h-32 mx-auto rounded-full border-2 border-outline p-1 mb-4 group-hover:border-brass-gold transition-colors">
<img alt="Hero 2" className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="A professional and elegant portrait of a pioneering female figure in Nigerian history, captured with soft, natural lighting in a contemporary archival style. The image highlights her intelligence and grace, with a neutral background that focuses entirely on the subject. The style is consistent with a high-end digital heritage repository, emphasizing prestige and modern archival excellence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnA7NImLenWJ-IuN8mZRr-HOVCPbgu5AkRtd6DPFYj5EkJqm-G8rb6p6LcCHKBU72BTuNkt6IMyv5Rz9GvP3zbc_0-BQTX4kP5pkyT-yMmPgMlUIVUcrXmavbgDVzSgNdFN22sVzfFGftN8x5Dy4TBRaSliSRa6MPtPB7siNH71McjYMBkEpwuZk9p5QFVV5R4WK_kHRqkTkEs3CxJhgAfin9RtHhQzrFSiq7S35tmWkGgUqPzcZUMhYm-TN2J7ZvpgZLzAFRdUvs"/>
</div>
<h4 className="font-bold text-on-surface">Margaret Ekpo</h4>
<p className="text-caption text-on-surface-variant">Pioneer Activist</p>
</div>
{/*  Hero Avatar 3  */}
<div className="flex-shrink-0 w-48 text-center group">
<div className="w-32 h-32 mx-auto rounded-full border-2 border-outline p-1 mb-4 group-hover:border-brass-gold transition-colors">
<div className="w-full h-full rounded-full bg-surface-container flex items-center justify-center text-outline">
<span className="material-symbols-outlined text-4xl" data-icon="person">person</span>
</div>
</div>
<h4 className="font-bold text-on-surface">Nominate Hero</h4>
<p className="text-caption text-on-surface-variant">Community Choice</p>
</div>
</div>
</div>
</div>
{/*  Featured Document Section  */}
<section className="bg-surface rounded-2xl border border-outline-variant p-12 mb-20 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">

</div>
<div className="max-w-3xl">
<h2 className="font-headline-lg text-headline-lg mb-4">Document of the Month</h2>
<p className="font-label-md text-label-md text-brass-gold mb-8">THE ABIA CHARTER OF EQUITY (1991)</p>
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-64 aspect-[3/4] bg-surface-container-high border-2 border-outline-variant shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 p-4">
<div className="w-full h-full bg-white flex flex-col p-6 border border-outline-variant/30">
<div className="h-4 w-2/3 bg-on-surface-variant/10 mb-4"></div>
<div className="space-y-2">
<div className="h-2 w-full bg-on-surface-variant/5"></div>
<div className="h-2 w-full bg-on-surface-variant/5"></div>
<div className="h-2 w-3/4 bg-on-surface-variant/5"></div>
</div>
<div className="mt-auto h-12 w-full bg-forest-green/5 flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green/20" data-icon="policy">policy</span>
</div>
</div>
</div>
<div className="flex-1">
<p className="text-body-lg mb-6 leading-relaxed">This foundational document outlines the principles of rotational governance and power-sharing designed to ensure peace and inclusivity among the diverse groups within Abia State.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-forest-green text-on-primary px-6 py-3 rounded-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="visibility">visibility</span> VIEW FULL DOCUMENT
                                </button>
<button className="border border-outline text-on-surface px-6 py-3 rounded-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="download">download</span> DOWNLOAD PDF (2.4MB)
                                </button>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto border-t border-outline-variant">
<div className="max-w-[1440px] mx-auto py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<span className="font-headline-lg text-headline-lg text-forest-deep mb-4 block">ABIA ONE</span>
<p className="text-body-md text-on-surface-variant max-w-sm mb-6">The definitive digital infrastructure of Abia State, Nigeria. Built to preserve our history and empower our future through transparency and innovation.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-outline-variant hover:text-brass-gold transition-colors" href="#">
<span className="material-symbols-outlined text-xl" data-icon="public">public</span>
</a>
<a className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-outline-variant hover:text-brass-gold transition-colors" href="#">
<span className="material-symbols-outlined text-xl" data-icon="share">share</span>
</a>
</div>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-on-surface mb-6">RESOURCE PORTALS</h4>
<ul className="space-y-4">
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="/invest-in-aba">Invest Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="/serve-abia">Serve Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="/build-abia">Build Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="/open-abia">Open Abia</a></li>
</ul>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-on-surface mb-6">GOVERNANCE</h4>
<ul className="space-y-4">
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Us</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">State Gazette</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Archive Access</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-caption text-on-surface-variant">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-forest-green rounded-full"></span>
<span className="text-caption text-on-surface-variant font-label-md">SYSTEMS ONLINE</span>
</div>
</div>
</div>
</footer>


      </div>
    </>
  );
}
