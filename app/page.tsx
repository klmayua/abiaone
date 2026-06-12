export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(226, 232, 240, 0.5);\n        }\n        .brass-gradient {\n            background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);\n        }\n        .shadow-soft {\n            box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  TopNavBar Navigation Shell  */}
<header className="fixed top-0 w-full z-50 bg-background border-b border-outline-variant">
<nav className="flex justify-between items-center px-margin-desktop h-20 max-w-max-width mx-auto">
<div className="flex items-center gap-2">
<span className="font-display-lg text-display-lg font-bold text-primary">ABIA ONE</span>
</div>
<div className="hidden md:flex gap-8 items-center">
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Economy</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Digital Gov</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Governance</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Security</a>
<div className="h-6 w-px bg-outline-variant"></div>
<button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-medium hover:bg-primary-container transition-all active:opacity-80">Citizen Portal</button>
</div>
{/*  Mobile Menu Trigger (Simplified)  */}
<button className="md:hidden text-primary">
<span className="material-symbols-outlined">menu</span>
</button>
</nav>
</header>
{/*  SideNavBar (Persistent Desktop)  */}
<aside className="hidden md:flex fixed left-0 top-20 h-screen w-64 flex-col py-6 bg-surface-container-low border-r border-outline-variant z-40">
<div className="px-6 mb-8">
<h3 className="font-headline-md text-headline-md font-bold text-primary">Navigation</h3>
<p className="text-on-surface-variant text-caption uppercase tracking-widest mt-1">State Operating System</p>
</div>
<nav className="flex-1 space-y-1">
<div className="text-forest-green font-bold border-l-4 border-brass-gold bg-surface-container-high px-4 py-3 flex items-center gap-3 cursor-pointer">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span>Dashboard Central</span>
</div>
<div className="text-on-surface-variant px-4 py-3 hover:bg-surface-variant transition-colors flex items-center gap-3 cursor-pointer">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span>Economic Transformation</span>
</div>
<div className="text-on-surface-variant px-4 py-3 hover:bg-surface-variant transition-colors flex items-center gap-3 cursor-pointer">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
<span>Digital Government</span>
</div>
<div className="text-on-surface-variant px-4 py-3 hover:bg-surface-variant transition-colors flex items-center gap-3 cursor-pointer">
<span className="material-symbols-outlined" data-icon="gavel">gavel</span>
<span>Transparent Governance</span>
</div>
<div className="text-on-surface-variant px-4 py-3 hover:bg-surface-variant transition-colors flex items-center gap-3 cursor-pointer">
<span className="material-symbols-outlined" data-icon="verified_user">verified_user</span>
<span>Public Trust</span>
</div>
</nav>
<div className="p-6 border-t border-outline-variant">
<button className="w-full bg-forest-green text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>rocket_launch</span>
                Launch Service
            </button>
<div className="mt-6 space-y-2">
<div className="flex items-center gap-2 text-on-surface-variant text-sm cursor-pointer hover:text-primary">
<span className="material-symbols-outlined text-[18px]" data-icon="settings">settings</span> Settings
                </div>
<div className="flex items-center gap-2 text-on-surface-variant text-sm cursor-pointer hover:text-primary">
<span className="material-symbols-outlined text-[18px]" data-icon="help">help</span> Support
                </div>
</div>
</div>
</aside>
<main className="md:ml-64 pt-20">
{/*  Hero Section  */}
<section className="relative h-[500px] overflow-hidden flex items-center px-margin-desktop bg-surface-dim">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover mix-blend-overlay opacity-60" data-alt="High-angle cinematic shot of a modern, sustainable urban architecture development in a lush tropical environment. The scene features sleek glass facades, integrated vertical gardens, and solar panel arrays reflecting a warm morning sun. The color palette is dominated by deep forest greens, crisp whites, and architectural slate grays, conveying a sense of technological advancement rooted in natural harmony." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHP9w9C9oCTByr0ir170ifjO0PqAScnkUHXOpuZ7vEJnaU_Bpen9zQwflidQ85okPEdnrYk7prphF0ZmHHgYzc--vVpX2WHSqf696UOzM5m4syL9mvZwj-3j64s-6EWl3y3e0Ug2YvJ56k4YH3SSrxHf0iMEuGBy2hHAJzW7c9gyMYNS72QGUpejTshVdEExWCK7ba8gP-xYJqgYYIgMFSk0JxcdvR13GrDdNapEqDbIj2Z_GqhQHdWD_IamHXt-JK3pKedYSNTl4" />
<div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-2xl">
<div className="flex items-center gap-2 mb-4">
<span className="h-1 w-12 bg-brass-gold"></span>
<span className="font-label-md text-label-md uppercase text-primary font-bold">The Sovereign Hub</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary mb-6">Dashboard Central</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                    "Building the foundation for a sustainable, digital economy in the heart of Igboland."
                </p>
<div className="mt-8 flex gap-4">
<button className="bg-forest-green text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:bg-primary-container transition-all">
                        Explore Vision <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="border border-brass-gold text-primary px-8 py-4 rounded-lg font-semibold hover:bg-surface-container transition-all">
                        Investor Portal
                    </button>
</div>
</div>
</section>
{/*  Key Metrics Row  */}
<section className="px-margin-desktop -mt-12 relative z-20">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="glass-card p-6 shadow-soft rounded-xl border-l-4 border-forest-green">
<p className="text-on-surface-variant text-caption uppercase font-bold tracking-wider mb-2">GDP Growth</p>
<div className="flex items-end justify-between">
<span className="font-display-lg text-4xl text-primary font-extrabold">+4.2%</span>
<span className="text-forest-green flex items-center text-sm font-bold">
<span className="material-symbols-outlined">trending_up</span> YOY
                        </span>
</div>
</div>
<div className="glass-card p-6 shadow-soft rounded-xl border-l-4 border-brass-gold">
<p className="text-on-surface-variant text-caption uppercase font-bold tracking-wider mb-2">Digital Literacy</p>
<div className="flex items-end justify-between">
<span className="font-display-lg text-4xl text-primary font-extrabold">68%</span>
<div className="w-16 h-2 bg-surface-variant rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[68%]"></div>
</div>
</div>
</div>
<div className="glass-card p-6 shadow-soft rounded-xl border-l-4 border-eagle-red">
<p className="text-on-surface-variant text-caption uppercase font-bold tracking-wider mb-2">Active Investments</p>
<div className="flex items-end justify-between">
<span className="font-display-lg text-4xl text-primary font-extrabold">124</span>
<span className="text-on-surface-variant text-sm font-medium">Billion ₦</span>
</div>
</div>
<div className="glass-card p-6 shadow-soft rounded-xl border-l-4 border-primary">
<p className="text-on-surface-variant text-caption uppercase font-bold tracking-wider mb-2">Service Response</p>
<div className="flex items-end justify-between">
<span className="font-display-lg text-4xl text-primary font-extrabold">92%</span>
<span className="text-forest-green text-sm font-bold">Fast-track</span>
</div>
</div>
</div>
</section>
{/*  2035 Roadmap Tracker  */}
<section className="px-margin-desktop py-gutter">
<div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-xl shadow-soft">
<div className="flex justify-between items-center mb-10">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary">2035 Roadmap Progress</h2>
<p className="text-on-surface-variant">Monitoring the transition to the State Operating System</p>
</div>
<span className="bg-surface-container-high px-4 py-2 rounded-full font-label-md text-label-md text-primary">Phase 1: Foundations</span>
</div>
<div className="space-y-8">
{/*  Progress Item  */}
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="font-bold flex items-center gap-2"><span className="material-symbols-outlined text-brass-gold">bolt</span> Power Infrastructure</span>
<span className="font-label-md">74% Complete</span>
</div>
<div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[74%] relative">
<div className="absolute inset-0 bg-white/20 animate-pulse"></div>
</div>
</div>
</div>
{/*  Progress Item  */}
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="font-bold flex items-center gap-2"><span className="material-symbols-outlined text-forest-green">cloud_sync</span> Digital Migration</span>
<span className="font-label-md">42% Complete</span>
</div>
<div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[42%]"></div>
</div>
</div>
{/*  Progress Item  */}
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="font-bold flex items-center gap-2"><span className="material-symbols-outlined text-eagle-red">shield</span> State Security Grid</span>
<span className="font-label-md">89% Complete</span>
</div>
<div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
<div className="bg-eagle-red h-full w-[89%]"></div>
</div>
</div>
</div>
</div>
</section>
{/*  Transformation Layers Bento Grid  */}
<section className="px-margin-desktop py-gutter">
<h2 className="font-headline-lg text-headline-lg text-primary mb-8">Transformation Layers</h2>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-gutter h-auto md:h-[500px]">
{/*  Economy  */}
<div className="md:col-span-2 md:row-span-2 bg-white border border-outline-variant rounded-xl p-8 relative overflow-hidden group hover:border-primary transition-all shadow-soft flex flex-col justify-end">
<div className="absolute top-0 right-0 p-8">
<span className="material-symbols-outlined text-6xl text-surface-variant group-hover:text-primary transition-colors">monitoring</span>
</div>
<div className="relative z-10">
<span className="bg-primary-fixed text-on-primary-fixed text-caption px-3 py-1 rounded-full font-bold mb-4 inline-block">Active Growth</span>
<h3 className="font-headline-lg text-headline-lg text-primary mb-2">Sustainable Economy</h3>
<p className="text-on-surface-variant mb-6">Transitioning from commodity-reliance to an industrial and tech-driven ecosystem.</p>
<button className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                            View Economic Data <span className="material-symbols-outlined">arrow_right_alt</span>
</button>
</div>
</div>
{/*  Digital Gov  */}
<div className="md:col-span-1 bg-white border border-outline-variant rounded-xl p-6 shadow-soft hover:border-brass-gold transition-all">
<span className="material-symbols-outlined text-brass-gold text-4xl mb-4">devices</span>
<h3 className="font-headline-md text-headline-md text-primary mb-2">Digital Gov</h3>
<p className="text-on-surface-variant text-sm">Unified state services platform.</p>
</div>
{/*  Governance  */}
<div className="md:col-span-1 bg-white border border-outline-variant rounded-xl p-6 shadow-soft hover:border-brass-gold transition-all">
<span className="material-symbols-outlined text-brass-gold text-4xl mb-4">balance</span>
<h3 className="font-headline-md text-headline-md text-primary mb-2">Governance</h3>
<p className="text-on-surface-variant text-sm">Policy tracking and transparency.</p>
</div>
{/*  Security  */}
<div className="md:col-span-2 bg-white border border-outline-variant rounded-xl p-6 shadow-soft flex items-center justify-between hover:border-eagle-red transition-all">
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">Public Security</h3>
<p className="text-on-surface-variant text-sm">Smart surveillance and response coordination.</p>
</div>
<span className="material-symbols-outlined text-eagle-red text-5xl">verified_user</span>
</div>
</div>
</section>
{/*  Latest Opportunities Carousel  */}
<section className="px-margin-desktop py-gutter mb-20">
<div className="flex justify-between items-center mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary">Latest Opportunities</h2>
<p className="text-on-surface-variant">Investment and growth windows in Abia State</p>
</div>
<div className="flex gap-2">
<button className="p-2 border border-outline-variant rounded-full hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="p-2 border border-outline-variant rounded-full hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<div className="flex gap-gutter overflow-x-auto pb-6 snap-x no-scrollbar">
{/*  Opportunity Card 1  */}
<div className="min-w-[400px] snap-start bg-white border border-outline-variant rounded-xl overflow-hidden group">
<div className="h-56 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A wide-angle, high-resolution architectural visualization of the Aba Textile Hub Phase 2. The scene depicts a massive, modern industrial facility with solar panels on the roof and large glass viewing galleries. The surrounding landscape is clean and professionally landscaped with tropical flora. The image is captured in a high-key, morning light aesthetic, emphasizing the scale and clean, efficient engineering of the project." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuU_eRD8vVaw_2QIB8n-jOrrrKTNUpI0XI2Z4gk88BEf3vphq54iifMgl8xa-a1p_JJ0x99w370KsYUGYWp673XluWNsDz_n5BwC6DEsBELJClREG3qGs0M_aWZQCVHLv53MefoCLlH_ofk4uWp73suX8o40hElzAEUlvQFh3Z5Yja7FtYk43LmQzaU4uJgv4rSiNaJTYm1lUOjJSfJn-3hhsquQ-ISvhoyqiJjUD2sbRdV1TM5q_8UP_p83XrrWwKtcaxClOLqgc" />
<div className="absolute top-4 left-4 bg-primary text-white text-caption px-3 py-1 rounded-full font-bold">Invest Abia</div>
</div>
<div className="p-6">
<h4 className="font-headline-md text-xl text-primary mb-2">Aba Textile Hub Phase 2</h4>
<p className="text-on-surface-variant text-sm mb-4">PPP opportunity for advanced manufacturing infrastructure and export logistics.</p>
<div className="flex justify-between items-center">
<span className="font-label-md text-brass-gold">Target: $240M</span>
<button className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-1">Details <span className="material-symbols-outlined text-sm">open_in_new</span></button>
</div>
</div>
</div>
{/*  Opportunity Card 2  */}
<div className="min-w-[400px] snap-start bg-white border border-outline-variant rounded-xl overflow-hidden group">
<div className="h-56 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A vibrant, modern tech innovation laboratory interior in Umuahia. The space features open-plan coworking areas with sleek white desks, ergonomic seating, and high-tech hardware. Large floor-to-ceiling windows flood the space with soft, natural light. Young professionals and students are seen collaborating around a holographic projection table. The visual style is crisp, clean, and futuristic, following a professional light-mode design language." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvBedmZsqQQpK1zpUbsWyQ8erKiRYLWu2EI0rY_Epk-JN6-nS-I0M_waxNt_UvbcJGRwjoqbuUaAPQ1l1nUragq5PUcG6O1OtwPrUMxpjE5yoJxBpyFMb2yPxAeO4nW2HanfkiiL3hLQ9jwEoxC7CgzMChxhonHnMo5rSEsCng4scRiaDPqMX1pmBkEPPv-yqJTe-oyJiCdZl0kCXuHpRqDIH8eWRd-TbAFPwdYBG357HGgQaUAASfd3TnF44lqjSZY57LBxWVpnA" />
<div className="absolute top-4 left-4 bg-brass-gold text-on-secondary-fixed text-caption px-3 py-1 rounded-full font-bold">Innovation</div>
</div>
<div className="p-6">
<h4 className="font-headline-md text-xl text-primary mb-2">Umuahia Tech Lab</h4>
<p className="text-on-surface-variant text-sm mb-4">Grant-funded expansion of the regional incubation center for AI and Fintech.</p>
<div className="flex justify-between items-center">
<span className="font-label-md text-brass-gold">Open for Bids</span>
<button className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-1">Details <span className="material-symbols-outlined text-sm">open_in_new</span></button>
</div>
</div>
</div>
{/*  Opportunity Card 3  */}
<div className="min-w-[400px] snap-start bg-white border border-outline-variant rounded-xl overflow-hidden group">
<div className="h-56 relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A modern data center facility in Nigeria, showing rows of glowing server racks illuminated by subtle blue and green LED lights. The flooring is polished slate gray, reflecting the technological components. The environment is impeccably clean and organized, conveying security and state-of-the-art digital infrastructure. The lighting is focused and professional, highlighting the high-tech nature of the State Operating System." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvynNP2janHeEDr_DDxSr8kEVSB5EUn4lZwA9lvcRFZl_GmfTjFvXx4CQS7m5478kgsU2P8pQhVsCgxaOaYJtmJ81lJGBaGBecvBAPoCrI64WM95cEzt7dz94Q_-Fgjn_GJ6ODpklDtu5_IhRZUeZqcYL60eSo45U0xoogSBYdiUfvre7UYJP8gQ0SdR-eBcphJP_B_lZKUFYG2Y80bQ2kmmSafxRLB3u6h0fInzF7J-k8dgO523qs36_BYyKg5jrygqO1NX0M9Yk" />
<div className="absolute top-4 left-4 bg-eagle-red text-white text-caption px-3 py-1 rounded-full font-bold">Infrastructure</div>
</div>
<div className="p-6">
<h4 className="font-headline-md text-xl text-primary mb-2">State Cloud Expansion</h4>
<p className="text-on-surface-variant text-sm mb-4">Digital infrastructure project to house all ministerial databases securely.</p>
<div className="flex justify-between items-center">
<span className="font-label-md text-brass-gold">Q3 Completion</span>
<button className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-1">Details <span className="material-symbols-outlined text-sm">open_in_new</span></button>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="md:ml-64 bg-surface-container-highest border-t border-outline-variant">
<div className="flex flex-col md:flex-row justify-between items-center py-gutter px-margin-desktop max-w-max-width mx-auto">
<div className="mb-6 md:mb-0">
<span className="font-headline-md text-headline-md text-primary font-bold">ABIA ONE</span>
<p className="text-on-surface-variant text-caption mt-2">© 2024 Abia State Government. All rights reserved. Built for the future of governance.</p>
</div>
<div className="flex flex-wrap justify-center gap-8">
<a className="text-on-surface-variant font-medium hover:text-primary transition-all text-caption" href="#">Institutional Links</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-all text-caption" href="#">Transparency Info</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-all text-caption" href="#">Privacy Policy</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-all text-caption" href="#">Contact Support</a>
</div>
</div>
</footer>
{/*  FAB Suppression Rule Active: No FAB for Dashboard/Hub context unless specifically requested as task-based  */}


      </div>
    </>
  );
}
