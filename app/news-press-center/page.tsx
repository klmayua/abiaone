"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            display: inline-block;\n            line-height: 1;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }\n        .brass-accent-line::after {\n            content: '';\n            display: block;\n            width: 40px;\n            height: 3px;\n            background-color: #D4AF37;\n            margin-top: 8px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-surface font-body-md text-on-surface">
        
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 dark:bg-forest-deep/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-8">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep dark:text-primary-fixed">ABIA ONE</span>
<div className="hidden md:flex gap-6">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Economy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Digital Gov</a>
<a className="font-label-caps text-label-caps text-primary dark:text-primary-fixed-dim border-b-2 border-brass-accent pb-1" href="#">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Security</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex bg-secondary-container text-on-secondary-container px-4 py-2 rounded font-label-caps text-label-caps hover:opacity-90 transition-all">Citizen Portal</button>
<button className="bg-primary text-on-primary px-4 py-2 rounded font-label-caps text-label-caps hover:opacity-90 transition-all">Emergency</button>
</div>
</nav>
{/*  Sidebar (Desktop)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant pt-20 z-40">
<div className="px-6 mb-8">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
</div>
<div>
<h2 className="font-headline-md text-[18px] text-forest-deep">ABIA ONE</h2>
<p className="font-caption text-caption text-on-surface-variant">Press &amp; Media</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 py-3 px-4 mx-2 bg-secondary-container text-on-secondary-container rounded-lg font-label-sm text-label-md" href="#">
<span className="material-symbols-outlined" data-icon="newspaper">newspaper</span>
                Abia Today
            </a>
<a className="flex items-center gap-3 py-3 px-4 mx-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg font-label-sm text-label-md transition-all" href="#">
<span className="material-symbols-outlined" data-icon="campaign">campaign</span>
                Official Statements
            </a>
<a className="flex items-center gap-3 py-3 px-4 mx-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg font-label-sm text-label-md transition-all" href="#">
<span className="material-symbols-outlined" data-icon="gavel">gavel</span>
                Executive Orders
            </a>
<a className="flex items-center gap-3 py-3 px-4 mx-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg font-label-sm text-label-md transition-all" href="#">
<span className="material-symbols-outlined" data-icon="folder_zip">folder_zip</span>
                Media Kit
            </a>
</nav>
<div className="p-4 border-t border-outline-variant">
<button className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-on-primary rounded font-label-md text-label-md">
<span className="material-symbols-outlined" data-icon="mail">mail</span>
                Press Subscription
            </button>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="lg:ml-64 pt-24 pb-12 px-margin-mobile md:px-margin-desktop min-h-screen">
{/*  Hero Shader Section  */}
<header className="relative rounded-xl overflow-hidden mb-12 h-[300px] flex items-center p-8 md:p-12">

<div className="relative z-10 max-w-2xl">
<span className="font-label-caps text-label-caps text-primary bg-primary-fixed px-3 py-1 rounded-full mb-4 inline-block">Official Press Center</span>
<h1 className="font-display-lg text-display-lg text-forest-deep mb-4 leading-tight">Truth and Transparency in Governance</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Access authoritative news, executive directives, and verified media assets directly from the Government of Abia State.</p>
</div>
</header>
{/*  Bento Grid News & Features  */}
<div className="bento-grid">
{/*  Featured: Abia Today Feed  */}
<section className="col-span-12 lg:col-span-8 space-y-6">
<div className="flex justify-between items-end border-b border-outline-variant pb-4">
<h2 className="font-headline-lg text-headline-lg text-forest-deep brass-accent-line">Abia Today</h2>
<a className="font-label-md text-label-md text-primary flex items-center gap-1" href="#">View Archive <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Feature Card 1  */}
<div className="glass-card rounded-lg overflow-hidden flex flex-col group transition-all hover:translate-y-[-4px]">
<div className="h-48 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A sophisticated architectural photograph of a modern glass government building in Abia State, Nigeria, reflecting the bright morning sun. The image is captured with professional sharp focus, emphasizing the clean lines and transparent materials of the structure, symbolizing modern governance. The lighting is high-key and natural, highlighting a palette of soft forest greens and clinical whites." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE8rmN6yp1M3WvcRWKR4SJXQ0Fpvc_qr2c2IOfok40VER_uAm_5Sc2QCrhZXhEFvE56extFf9hxSWi_BC0N2Gei04c10N89lOELE0QIjLQ8XLP-JaqFzAuUMA5pIZnOwSmOyc7KP0LkM4FyI1imAHKz4F4FIQ_gzFgHXpBL4l3X1ayaLB7tJJJz5mDGEn45GmRfMZJcoSoE6Be8l_nVtnrm6pYJXAQqPn79qC9h8hYWWvFU-mcBH8IBioejO2o4n7XcFceSVeyrv0" />
</div>
<div className="p-6">
<span className="font-label-caps text-[10px] text-tertiary-container bg-tertiary-fixed px-2 py-0.5 rounded">INFRASTRUCTURE</span>
<h3 className="font-headline-md text-[20px] mt-3 mb-2 group-hover:text-primary transition-colors">Strategic Roadmap for Regional Connectivity Unveiled</h3>
<p className="font-body-md text-on-surface-variant line-clamp-3 mb-4">The Executive Council has approved a multi-billion naira infrastructure development plan aimed at connecting rural agrarian communities with urban markets.</p>
<div className="flex justify-between items-center mt-auto">
<span className="font-caption text-caption text-slate-gray">Oct 24, 2024</span>
<span className="material-symbols-outlined text-primary" data-icon="open_in_new">open_in_new</span>
</div>
</div>
</div>
{/*  Feature Card 2  */}
<div className="glass-card rounded-lg overflow-hidden flex flex-col group transition-all hover:translate-y-[-4px]">
<div className="h-48 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A clean, data-driven visualization of economic growth charts displayed on a high-resolution screen in a modern Abia State command center. The visual style is sleek and corporate, with glowing teal and forest green data series against a deep charcoal background. The atmosphere is analytical and precise, representing the Digital Government initiatives of Abia One." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnJSCNYJ0WjM-iLo_U-bbUfwetczeYAx_pC1t7zM5XCGtkIj9-OcFc7A0r8-6JY9qC3cL3108x4ybesDZgdY1e94dB01nwF2Ed0mMbJ-cH7V-CQ6xkzOgYML4D8pJBHPpcpOsGCpDUNe-WkZ4cnh4WCVZ-Te90JLhamIw08mwZuZ6nW-0X0aeuHUAyNrRsnXVBEeaQrDA1z8DZSe4DnCO1hYocLS1ozFQuMYBM1mUKuygkA9BrMzF5-bALGuLtNnL1Y4hovVwJ2M0" />
</div>
<div className="p-6">
<span className="font-label-caps text-[10px] text-primary-container bg-primary-fixed px-2 py-0.5 rounded">DIGITAL GOV</span>
<h3 className="font-headline-md text-[20px] mt-3 mb-2 group-hover:text-primary transition-colors">Abia One Platform Hits 1 Million Users Milestone</h3>
<p className="font-body-md text-on-surface-variant line-clamp-3 mb-4">The state's digital operating system continues to streamline citizen services, recording record-breaking engagement in the third quarter.</p>
<div className="flex justify-between items-center mt-auto">
<span className="font-caption text-caption text-slate-gray">Oct 22, 2024</span>
<span className="material-symbols-outlined text-primary" data-icon="open_in_new">open_in_new</span>
</div>
</div>
</div>
</div>
{/*  Secondary News List  */}
<div className="space-y-4">
<div className="p-4 border border-outline-variant rounded-lg flex gap-4 bg-surface hover:bg-surface-container-low transition-colors group cursor-pointer">
<div className="w-16 h-16 bg-surface-variant rounded flex-shrink-0 flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green" data-icon="description">description</span>
</div>
<div className="flex-1">
<h4 className="font-headline-md text-body-md font-semibold group-hover:text-primary transition-colors">Official Statement: Resilience and Growth in the SME Sector</h4>
<p className="font-caption text-caption text-on-surface-variant mt-1">Released by: Office of the Chief Press Secretary • 2 hours ago</p>
</div>
</div>
<div className="p-4 border border-outline-variant rounded-lg flex gap-4 bg-surface hover:bg-surface-container-low transition-colors group cursor-pointer">
<div className="w-16 h-16 bg-surface-variant rounded flex-shrink-0 flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green" data-icon="gavel">gavel</span>
</div>
<div className="flex-1">
<h4 className="font-headline-md text-body-md font-semibold group-hover:text-primary transition-colors">Executive Order 007: Mandatory Transparency Reporting for MDAs</h4>
<p className="font-caption text-caption text-on-surface-variant mt-1">Released by: Executive Mansion • Yesterday</p>
</div>
</div>
</div>
</section>
{/*  Sidebar Assets & Tools  */}
<aside className="col-span-12 lg:col-span-4 space-y-8">
{/*  Media Kit Card  */}
<div className="bg-forest-deep text-state-white p-8 rounded-lg relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-[80px]" data-icon="photo_camera">photo_camera</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4 brass-accent-line">Media Kit</h3>
<p className="font-body-md text-primary-fixed-dim mb-6">Download official portraits, high-resolution state crests, and brand guidelines for press use.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-body-md border-b border-white/10 pb-2">
<span className="material-symbols-outlined text-brass-gold" data-icon="person">person</span> Official Portraits (ZIP)
                        </li>
<li className="flex items-center gap-3 text-body-md border-b border-white/10 pb-2">
<span className="material-symbols-outlined text-brass-gold" data-icon="shield">shield</span> State Crests (SVG/PNG)
                        </li>
<li className="flex items-center gap-3 text-body-md border-b border-white/10 pb-2">
<span className="material-symbols-outlined text-brass-gold" data-icon="palette">palette</span> Brand Identity Guide
                        </li>
</ul>
<button className="w-full bg-brass-gold text-forest-deep py-3 rounded font-label-md font-bold uppercase tracking-wider hover:bg-white transition-colors">Access Resource Vault</button>
</div>
{/*  Journalist Briefing Subscription  */}
<div className="glass-card p-8 rounded-lg border-2 border-primary-container/20">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-primary" data-icon="verified">verified</span>
<h3 className="font-headline-md text-[18px]">Verified Journalist Access</h3>
</div>
<p className="font-body-md text-on-surface-variant mb-6">Sign up for immediate embargoed releases, media advisories, and invitation-only press briefings.</p>
<form className="space-y-4">
<div>
<label className="font-label-caps text-label-caps block mb-1">Media Organization</label>
<input className="w-full bg-surface-container border border-slate-400 rounded p-3 focus:border-primary outline-none" placeholder="e.g. Abia News Network" type="text" />
</div>
<div>
<label className="font-label-caps text-label-caps block mb-1">Official Email</label>
<input className="w-full bg-surface-container border border-slate-400 rounded p-3 focus:border-primary outline-none" placeholder="journalist@org.com" type="email" />
</div>
<div className="flex items-center gap-2">
<input className="rounded border-slate-400 text-primary" id="sms" type="checkbox" />
<label className="font-caption text-caption" htmlFor="sms">Receive SMS breaking alerts</label>
</div>
<button className="w-full bg-primary text-on-primary py-3 rounded font-label-md hover:opacity-90 transition-all">Request Accreditation</button>
</form>
</div>
{/*  Contact & Feedback  */}
<div className="p-6 bg-surface-container-high rounded-lg border border-outline-variant">
<h4 className="font-headline-md text-body-md mb-2">Press Inquiries</h4>
<p className="font-caption text-caption text-on-surface-variant mb-4">For urgent media requests, contact the Director of Communication.</p>
<div className="space-y-2">
<a className="flex items-center gap-2 text-primary font-label-md" href="mailto:press@abiastate.gov.ng">
<span className="material-symbols-outlined text-[18px]" data-icon="mail">mail</span> press@abiastate.gov.ng
                        </a>
<a className="flex items-center gap-2 text-primary font-label-md" href="tel:+23400000000">
<span className="material-symbols-outlined text-[18px]" data-icon="call">call</span> +234 800 ABIA PRESS
                        </a>
</div>
</div>
</aside>
</div>
{/*  Social Wall / Press Reel  */}
<section className="mt-16">
<div className="flex justify-between items-end border-b border-outline-variant pb-4 mb-8">
<h2 className="font-headline-lg text-headline-lg text-forest-deep brass-accent-line">Multimedia Hub</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover" data-alt="A cinematic wide shot of a tech-enabled agricultural center in the Abia State heartland. Rows of vibrant green crops are being tended by automated systems under a bright afternoon sky. The image has a clean, saturated professional finish, dominated by natural greens and earthy ochres, illustrating the state's economic transformation through technology." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvXG8b0Tnd3sICpXgL5lOlgLnLr_px8dLmo5mfC6dn9hFFxLASVXgVOyzM9ePr1nxPxwibdTdsauhw17NOeQm3452MuDcwOkOEz7IdAtKm8qt1nH-eHNBSnWtWJw4YZxBbpC6wzl2veVAh_uZP-5axp8rpD78zGYsv0Yc_hr0DHFO6DoGBDZmkegTI7jcw52vDJxE413ofO0C0ohkYiSo6n8C7EyEK8MicFJ4kpbY2ntslpx0a5_zuliIMYmiSPVkD7XW9d6KofR0" />
<div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-white text-4xl" data-icon="play_circle">play_circle</span>
</div>
</div>
<div className="aspect-square rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover" data-alt="A sharp architectural photography piece of a newly developed commercial district in Umuahia, Abia State. The glass and steel buildings gleam under the golden hour sun, showing progress and urban renewal. The color palette features warm golds, deep forest greens from street trees, and a clear blue sky, evoking a sense of institutional reliability and modern growth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWtMpPbcR5PCNj8kGNY_HJ8ADOuNB2tXzEAY-L_9eYq2QOAvn2uGbcJqBrvLQ6AYFntBXhEPGDRDCGRoNLgEbQ4zz4gQkA1h-VzJmQ27RQFZiQy8R5vS2WbuloxRBrnZBmNhM0qRxgES6mT9a54d6ANsJa7VXjFR9q63w10tb6MXnUY_E8sKfOI5TQnMofMRst8UimMqZ_Nue_KhAvUsQ6HKHQ0rxNSV7fpxTCyOkcayePqOZq5_PrHhs1Y2CHFt-mBOB4x2ads7o" />
<div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-white text-4xl" data-icon="image">image</span>
</div>
</div>
<div className="aspect-square rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover" data-alt="A close-up, high-detail shot of a hand signing an official government document with a high-end fountain pen. The paper features an embossed Abia State seal. The lighting is soft and professional, highlighting the texture of the paper and the brass gold of the seal, conveying authority and the formal execution of governance in a modern state." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDND-mlFQVzBnIEZCPu-E5QTg_vouIiDbYuYX5NkU6PVk6r39lBft2vJGMfGuu3bYbDEQqvbSOoZnvDd6IpVaas7kxmg9cF1bOltPkC7Tx8R5FtU6RWGhk_UofPfCeCH8O2d-c5f367Ct-huGZrtA-9_K3U3cjyNaUb_SkXlYgpwJhX2icCS-PBz760gF-qNAwv45Xam3o__73XGYrn1ruM5m_mozrZXdDoB7GdTKAdz636lFnTKD7f6mWOAT-1pzYsqryv2vFCj3A" />
<div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-white text-4xl" data-icon="description">description</span>
</div>
</div>
<div className="aspect-square rounded-lg overflow-hidden relative group">
<img className="w-full h-full object-cover" data-alt="A dynamic shot of a modern town hall meeting in Abia, where officials are engaging with citizens in a brightly lit, high-ceilinged conference hall. The atmosphere is productive and collaborative, with diverse groups of people. The visual style is crisp and documentary-like, using a natural color palette to emphasize transparency and public trust." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhPDAMP-234cI0rCjtDgxgxqLJb70v6YFwiRWUTunE20_zumM-nUNeQ3fOBOTUXt8OGgBwC-dpqVBuhG6dLdHLA_PubD5cJtWtSD1bN9jR-odj-Qoufu_kmV1fR_wSZZXHE8rKzrzO4rZvCK2wHvFA0oUI7I1siADoeALHec3jGeRKxwdUbRZmsaN9TBHv4ewTjtdZCmdzQ3EUoCGmGAo11IFdfao441eO8mhyCg0k3UyNbJBG6qgHydIi5RQ_qVwCMKoyhdd5wJw" />
<div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="material-symbols-outlined text-white text-4xl" data-icon="videocam">videocam</span>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest dark:bg-forest-deep py-12 border-t border-outline-variant">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<span className="font-headline-lg text-headline-lg text-forest-deep dark:text-primary-fixed block mb-4">ABIA ONE</span>
<p className="font-body-md text-on-surface-variant max-w-sm">The official digital portal for the Abia State Government. Empowering citizens through transparency, technology, and economic growth.</p>
</div>
<div>
<h5 className="font-label-caps text-label-caps text-primary mb-6">QUICK LINKS</h5>
<ul className="space-y-4">
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent transition-colors underline decoration-brass-accent" href="#">Invest Abia</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Serve Abia</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Build Abia</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Open Abia</a></li>
</ul>
</div>
<div>
<h5 className="font-label-caps text-label-caps text-primary mb-6">LEGAL</h5>
<ul className="space-y-4">
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Privacy Policy</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Terms of Use</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="border-t border-outline-variant pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-caption text-caption text-on-surface-variant">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-6">
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined" data-icon="share">share</span></a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined" data-icon="rss_feed">rss_feed</span></a>
</div>
</div>
</footer>
{/*  Interactive Layer: Simple Scroll Effect  */}


      </div>
    </>
  );
}
