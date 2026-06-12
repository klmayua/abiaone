"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            display: inline-block;\n            line-height: 1;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(226, 232, 240, 0.5);\n        }\n        .bento-item {\n            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n        }\n        .bento-item:hover {\n            transform: translateY(-4px);\n            box-shadow: 0 12px 24px -10px rgba(0, 77, 40, 0.15);\n        }\n        .brass-gradient {\n            background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-outline-variant h-20">
<div className="flex justify-between items-center px-margin-desktop h-full max-w-max-width mx-auto">
<div className="flex items-center gap-2">
<span className="font-display-lg text-[28px] font-bold text-primary tracking-tighter">ABIA ONE</span>
<div className="h-6 w-[2px] bg-brass-gold mx-2"></div>
<span className="font-headline-md text-sm font-semibold text-slate-gray tracking-widest uppercase">Invest</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-primary border-b-2 border-brass-gold font-semibold pb-1 cursor-pointer transition-all duration-200" href="/economic-transformation">Economy</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="/serve-abia">Digital Gov</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="/local-governance">Governance</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="/secure-abia">Security</a>
</div>
<div className="flex items-center gap-6">
<div className="relative hidden lg:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:outline-none focus:ring-1 focus:ring-primary w-64 text-sm" placeholder="Search marketplace..." type="text" />
</div>
<button className="bg-forest-green text-white px-6 py-2.5 rounded-lg font-headline-md text-sm hover:opacity-90 transition-all active:scale-95 shadow-sm">
                    Citizen Portal
                </button>
</div>
</div>
</nav>
<main className="pt-20">
{/*  Hero Section  */}
<section className="relative min-h-[870px] flex items-center overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
<div className="relative z-10 px-margin-desktop max-w-max-width mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/30 border border-secondary rounded-full">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="text-on-secondary-fixed-variant font-label-md text-xs uppercase tracking-wider">Marketplace Active</span>
</div>
<h1 className="font-display-lg text-6xl xl:text-7xl text-primary leading-tight">
                        Aba: The <br /><span className="text-brass-gold italic">Industrial Hub</span><br /> of Africa
                    </h1>
<p className="font-body-lg text-slate-gray max-w-xl">
                        Experience the rebirth of Africa's manufacturing powerhouse. Abia One provides the digital infrastructure to scale, export, and dominate global markets from the heart of Enyimba City.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-forest-green text-white px-8 py-4 rounded-lg font-headline-md flex items-center gap-2 hover:shadow-lg transition-all">
                            Explore Opportunities
                            <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="border-2 border-brass-gold text-secondary px-8 py-4 rounded-lg font-headline-md hover:bg-brass-gold/5 transition-all">
                            Export Support
                        </button>
</div>
<div className="flex items-center gap-8 pt-4">
<div>
<div className="text-2xl font-bold text-primary">50,000+</div>
<div className="text-xs text-outline uppercase font-label-md">Active Enterprises</div>
</div>
<div className="w-px h-8 bg-outline-variant"></div>
<div>
<div className="text-2xl font-bold text-primary">$2.4B+</div>
<div className="text-xs text-outline uppercase font-label-md">Annual Trade Volume</div>
</div>
<div className="w-px h-8 bg-outline-variant"></div>
<div>
<div className="text-2xl font-bold text-primary">24/7</div>
<div className="text-xs text-outline uppercase font-label-md">Power Priority Zones</div>
</div>
</div>
</div>
<div className="relative hidden lg:block h-[600px] rounded-2xl overflow-hidden border border-outline-variant shadow-2xl group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A cinematic high-angle wide shot of a modern industrial facility in Aba, Nigeria. The factory floor is bright and clean with advanced textile machinery and organized rows of leather goods in production. Soft morning light streams through large windows, creating a hopeful and productive atmosphere. The color palette features deep greens, crisp whites, and golden metallic accents, embodying a sophisticated, corporate industrial aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRDWkbpV9WkTZ3SYPaZhqBkig5ejRQX2axY2BtXmbreST6Km7XYtIEZefpAz03IwU-Q-D3WeINr_J7Qtt1H2fNQ-geiRrUt3RuLSqJ57Jcz76IVsxUx97Z18aiPb9cfxyBXR6nrGfr8uBmoczZ1agSiN6jKdFUPIqyrYS-9-H_M_sHLKm_9Ac_P0TX6nlyrnvjWYbte06aEJYj8IUCd2zWLmDVchCpIbyYUd8RiGJJf8bmpVvBzOVe3WUaLEnldeqwbU4qOgR6Ykc" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-xl">
<div className="flex justify-between items-end">
<div>
<p className="text-white font-headline-md text-lg">Enyimba Economic City</p>
<p className="text-white/80 text-sm">Phase 1 Infrastructure Ready</p>
</div>
<div className="bg-brass-gold text-white px-4 py-1 rounded text-xs font-bold uppercase tracking-widest">Featured</div>
</div>
</div>
</div>
</div>
</section>
{/*  Bento Investment Grid  */}
<section className="py-24 bg-surface-container-lowest">
<div className="px-margin-desktop max-width mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="font-headline-lg text-4xl text-primary mb-4">Core Investment Sectors</h2>
<div className="h-1 w-24 bg-brass-gold mb-6"></div>
<p className="text-slate-gray font-body-md">Strategically curated opportunities designed for high-yield returns and sustainable industrial growth within the Aba ecosystem.</p>
</div>
<a className="text-forest-green font-semibold flex items-center gap-2 group" href="#">
                        View All Sectors <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">trending_flat</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-gutter">
{/*  Leather Goods - Major  */}
<div className="md:col-span-2 lg:col-span-8 bento-item group bg-white border border-outline-variant rounded-xl overflow-hidden relative min-h-[400px] opacity-100 translate-y-0">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="A macro close-up of premium, hand-stitched leather goods including a sophisticated briefcase and boots, showcasing artisanal precision. The lighting is warm and directional, emphasizing the texture of the high-quality dark brown leather. The background is a clean, modern workshop with subtle hints of industrial tools. The mood is one of luxury, craftsmanship, and export-ready quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0qv9NN8qGVgXpZ8p-0IoChOPA1WFu-5pvkweAVLY01zG9cp3ylIvRRXnUrDtpXVbn8bQC5cn9A0z_gFmOuF4vYAdfE9roHEOcs6xzq8wFTB055SJq4EmUyDYR5tgTpCtUam_oPEsB3jo9gV6xGF8Y9DeNDusc7vzeD3JGFmVWveOwClK_9bISM9cqcPajjmOW_B_6SFEOz0LLoFPvXHZEdseJgjZjEchRYlVkxF00b_xdR6DRx4_YywpVi4_yuH-hZXTW5JoqDeg" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="bg-brass-gold text-on-primary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Primary Sector</span>
<h3 className="text-white font-headline-lg text-3xl mb-2">Leather &amp; Footwear Hub</h3>
<p className="text-white/80 max-w-md font-body-md">Invest in the complete value chain from tanning to global retail. 40,000+ skilled artisans ready for industrial scaling.</p>
</div>
</div>
{/*  Textiles - Minor  */}
<div className="md:col-span-2 lg:col-span-4 bento-item group bg-white border border-outline-variant rounded-xl p-8 flex flex-col justify-between opacity-100 translate-y-0">
<div>
<span className="material-symbols-outlined text-brass-gold text-4xl mb-4">apparel</span>
<h3 className="text-primary font-headline-md text-xl mb-3">Garment &amp; Textiles</h3>
<p className="text-slate-gray text-sm leading-relaxed">Modernizing the apparel production line. Aba's garment cluster produces over 1 million pieces weekly for West Africa.</p>
</div>
<div className="mt-8 flex items-center justify-between">
<span className="text-xl font-bold text-primary">12.4% <span className="text-xs font-normal text-outline">CAGR</span></span>
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-forest-green hover:text-white transition-all">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
{/*  Tech Hubs - Minor  */}
<div className="md:col-span-2 lg:col-span-4 bento-item group bg-white border border-outline-variant rounded-xl p-8 flex flex-col justify-between opacity-100 translate-y-0">
<div>
<span className="material-symbols-outlined text-brass-gold text-4xl mb-4">memory</span>
<h3 className="text-primary font-headline-md text-xl mb-3">Tech &amp; Hardware</h3>
<p className="text-slate-gray text-sm leading-relaxed">Developing the silicon valley of the East. Focus on hardware prototyping and software for industrial automation.</p>
</div>
<div className="mt-8 flex items-center justify-between">
<span className="text-xl font-bold text-primary">ROI 18%</span>
<button className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-forest-green hover:text-white transition-all">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
{/*  Manufacturing - Major  */}
<div className="md:col-span-2 lg:col-span-8 bento-item group bg-forest-green rounded-xl overflow-hidden relative min-h-[400px] opacity-100 translate-y-0">
<div className="absolute inset-0 overflow-hidden">

</div>
<div className="relative z-10 p-10 h-full flex flex-col justify-between">
<div className="max-w-lg">
<h3 className="text-white font-headline-lg text-4xl mb-6 leading-tight">Advanced Manufacturing Parks</h3>
<p className="text-white/70 font-body-lg mb-8">Secured land, dedicated power, and zero-tax incentives for foreign and local manufacturers in Abia's designated free trade zones.</p>
<ul className="space-y-4 text-white/90">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-brass-gold" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
                                        Automated Licensing Portal
                                    </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-brass-gold" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
                                        Integrated Logistics Support
                                    </li>
</ul>
</div>
<div className="flex gap-4">
<button className="bg-white text-forest-green px-6 py-3 rounded-lg font-bold">Apply for Space</button>
<button className="bg-white/10 text-white px-6 py-3 rounded-lg border border-white/20">Park Catalog</button>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Diaspora Gateway Section  */}
<section className="py-24 bg-surface-dim relative overflow-hidden">
<div className="px-margin-desktop max-w-max-width mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<img className="rounded-2xl shadow-2xl border border-outline-variant" data-alt="A diverse group of professional investors and government officials shaking hands in a sleek, modern conference room overlooking a bustling city. The environment is professional and high-end with minimalist furniture, clear glass partitions, and a warm, golden sunset light illuminating the scene. The image captures a sense of global partnership, mutual trust, and a corporate atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMqR7SUYM-DmYbQ2q0XLs_2O6NRhYtktk-ppnc0We_c0uLZmQT7uGPKFQr5M0uLEG6oSmDtJRZsUpkNXM2iQetUS6XZiGjbDNQmbxwsIYtSx-YWchEkfK0tRhjOBd4Tp8MYIufECW9x3HjrnBc90QNmp9muBOd0dwOdRVDbch-VcDoqEFbuxqZb4WbHgyyj4Bqdb5TqQ0bCsJYGhVImsACRcGMhI6IkVR0OcxCYf27uQAw9zQoRZuzhitosKNKypLKR9dzhAsz_cg" />
</div>
<div className="lg:w-1/2 space-y-8">
<span className="font-label-md text-brass-gold uppercase tracking-widest font-bold">Diaspora Gateway</span>
<h2 className="font-headline-lg text-4xl text-primary">Your Bridge to Homeland Wealth</h2>
<p className="text-slate-gray font-body-lg">The Diaspora Investment Gateway (DIG) provides a secure, transparent, and verified channel for Ndi Abia abroad to invest back home with full legal protection and ROI transparency.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="p-6 bg-background rounded-xl border border-outline-variant">
<span className="material-symbols-outlined text-forest-green mb-3">verified</span>
<h4 className="font-bold text-primary mb-2">Verified Projects</h4>
<p className="text-sm text-on-surface-variant">Every project is pre-vetted by the State Investment Agency.</p>
</div>
<div className="p-6 bg-background rounded-xl border border-outline-variant">
<span className="material-symbols-outlined text-forest-green mb-3">account_balance_wallet</span>
<h4 className="font-bold text-primary mb-2">Direct Remittance</h4>
<p className="text-sm text-on-surface-variant">Blockchain-secured investment tracking and returns.</p>
</div>
</div>
<button className="bg-forest-green text-white px-10 py-4 rounded-lg font-headline-md w-full sm:w-auto">Launch DIG Portal</button>
</div>
</div>
</section>
{/*  Talk to an Officer  */}
<section className="py-24 px-margin-desktop">
<div className="max-w-4xl mx-auto glass-card rounded-2xl p-12 border-2 border-forest-green/20 relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-forest-green/5 rounded-full blur-3xl"></div>
<div className="relative z-10 text-center space-y-6">
<h2 className="font-display-lg text-4xl text-primary">Need Bespoke Guidance?</h2>
<p className="text-slate-gray font-body-lg max-w-2xl mx-auto">Our Senior Investment Officers are available for private consultations to help you navigate local regulations, incentives, and partnership opportunities.</p>
<div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
<div className="flex items-center gap-4 px-6 py-4 bg-white rounded-xl border border-outline-variant">
<span className="material-symbols-outlined text-brass-gold">call</span>
<div className="text-left">
<div className="text-xs text-outline font-bold">HOTLINE</div>
<div className="text-primary font-bold">+234 800 ABIA ONE</div>
</div>
</div>
<button className="bg-forest-green text-white px-12 py-4 rounded-xl font-headline-md hover:scale-105 transition-transform">
                            Talk to an Officer
                        </button>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant mt-20">
<div className="flex flex-col md:flex-row justify-between items-center py-gutter px-margin-desktop max-w-max-width mx-auto">
<div className="mb-8 md:mb-0">
<div className="font-headline-md text-headline-md text-primary font-bold mb-2">ABIA ONE</div>
<p className="text-on-surface-variant text-caption max-w-xs">© 2024 Abia State Government. All rights reserved. Built for the future of governance.</p>
</div>
<div className="flex flex-wrap justify-center gap-8 text-caption">
<a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4" href="#">Institutional Links</a>
<a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4" href="#">Transparency Info</a>
<a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors underline-offset-4" href="#">Contact Support</a>
</div>
<div className="mt-8 md:mt-0 flex gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center cursor-pointer hover:bg-brass-gold hover:text-white transition-all">
<span className="material-symbols-outlined text-xl">share</span>
</div>
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center cursor-pointer hover:bg-brass-gold hover:text-white transition-all">
<span className="material-symbols-outlined text-xl">language</span>
</div>
</div>
</div>
</footer>


      </div>
    </>
  );
}
