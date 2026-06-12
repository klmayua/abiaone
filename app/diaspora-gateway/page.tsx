"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { font-family: 'Hanken Grotesk', sans-serif; }\n        .glass-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(10px); }\n        .accent-line { position: relative; }\n        .accent-line::after { content: ''; position: absolute; left: 0; bottom: -4px; width: 40px; height: 3px; background: #D4AF37; }\n        .no-scrollbar::-webkit-scrollbar { display: none; }\n        .bento-item { transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); }\n        .bento-item:hover { transform: translateY(-4px); }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface">
        
{/*  Top Navigation Bar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 dark:bg-forest-deep/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-8">
<h1 className="font-headline-lg text-headline-lg font-bold text-forest-deep dark:text-primary-fixed">ABIA ONE</h1>
<nav className="hidden md:flex gap-6">
<a className="font-label-caps text-label-caps text-primary border-b-2 border-brass-gold pb-1" href="#">Economy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Digital Gov</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Security</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block px-4 py-2 border border-brass-gold text-brass-gold font-medium rounded-lg hover:bg-brass-gold hover:text-white transition-all text-label-md">Emergency</button>
<button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-medium shadow-sm hover:opacity-90 transition-all text-label-md">Citizen Portal</button>
</div>
</header>
{/*  Sidebar Navigation (Desktop)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 pt-24 bg-surface-container-low border-r border-outline-variant z-40">
<div className="px-6 mb-8">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-primary-container rounded-full flex items-center justify-center text-white">
<span className="material-symbols-outlined">payments</span>
</div>
<div>
<p className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep">DDI Portal</p>
<p className="text-xs text-on-surface-variant">Diaspora Direct Investment</p>
</div>
</div>
</div>
<nav className="flex-grow">
<a className="flex items-center gap-4 py-3 px-6 bg-secondary-container text-on-secondary-container mx-2 rounded-lg mb-1" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md">Overview</span>
</a>
<a className="flex items-center gap-4 py-3 px-6 text-on-surface-variant hover:bg-surface-variant/50 mx-2 rounded-lg mb-1 transition-all" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-md">Bonds &amp; Projects</span>
</a>
<a className="flex items-center gap-4 py-3 px-6 text-on-surface-variant hover:bg-surface-variant/50 mx-2 rounded-lg mb-1 transition-all" href="#">
<span className="material-symbols-outlined">mitre</span>
<span className="font-label-md">Business Concierge</span>
</a>
<a className="flex items-center gap-4 py-3 px-6 text-on-surface-variant hover:bg-surface-variant/50 mx-2 rounded-lg mb-1 transition-all" href="#">
<span className="material-symbols-outlined">security</span>
<span className="font-label-md">Security Trust</span>
</a>
</nav>
<div className="p-4 border-t border-outline-variant">
<button className="w-full py-3 bg-brass-gold/10 text-brass-gold border border-brass-gold/20 rounded-lg flex items-center justify-center gap-2 hover:bg-brass-gold hover:text-white transition-all">
<span className="material-symbols-outlined text-sm">chat</span>
<span className="font-label-md">Citizen Feedback</span>
</button>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="lg:ml-64 pt-24 pb-12 px-margin-mobile md:px-margin-desktop">
{/*  Hero Section / DDI Dashboard Header  */}
<section className="mb-12">
<div className="relative overflow-hidden rounded-xl bg-forest-deep p-8 md:p-12 text-white">

<div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
<div>
<h2 className="font-display-lg text-display-lg mb-4 leading-tight">Build the Future of <span className="text-brass-gold">Home.</span></h2>
<p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-md mb-8">Secure your legacy through State of Origin Bonds. Invest in infrastructure, healthcare, and digital transformation projects with sovereign state backing.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-brass-gold text-on-secondary-fixed px-8 py-3 rounded-lg font-bold hover:scale-105 transition-transform flex items-center gap-2">
<span className="material-symbols-outlined">trending_up</span>
                                Invest Now
                            </button>
<button className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-all">
                                View Bond Prospectus
                            </button>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md">
<p className="text-xs font-label-caps text-brass-gold mb-1">DDI VOLUME 2024</p>
<p className="text-3xl font-bold font-headline-lg">$14.2M</p>
<div className="flex items-center text-primary-fixed-dim text-xs mt-2">
<span className="material-symbols-outlined text-sm">arrow_upward</span>
<span>24% Increase YoY</span>
</div>
</div>
<div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md">
<p className="text-xs font-label-caps text-brass-gold mb-1">ACTIVE INVESTORS</p>
<p className="text-3xl font-bold font-headline-lg">1,248</p>
<div className="flex items-center text-primary-fixed-dim text-xs mt-2">
<span className="material-symbols-outlined text-sm">public</span>
<span>Across 42 Countries</span>
</div>
</div>
<div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md">
<p className="text-xs font-label-caps text-brass-gold mb-1">PROJECTED ROI</p>
<p className="text-3xl font-bold font-headline-lg">12.5%</p>
<div className="flex items-center text-primary-fixed-dim text-xs mt-2">
<span className="material-symbols-outlined text-sm">verified</span>
<span>State Guaranteed</span>
</div>
</div>
<div className="bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md">
<p className="text-xs font-label-caps text-brass-gold mb-1">PPP OPENINGS</p>
<p className="text-3xl font-bold font-headline-lg">12</p>
<div className="flex items-center text-primary-fixed-dim text-xs mt-2">
<span className="material-symbols-outlined text-sm">work</span>
<span>Strategic Sectors</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Bento Grid: Projects & Opportunities  */}
<section className="mb-16">
<div className="flex justify-between items-end mb-8">
<div>
<span className="font-label-caps text-label-caps text-brass-gold block mb-2">OPPORTUNITIES</span>
<h3 className="font-headline-lg text-headline-lg accent-line">Strategic PPP Projects</h3>
</div>
<a className="text-primary font-bold flex items-center gap-2 hover:underline" href="#">
                    View All Projects <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
{/*  Large Featured Card  */}
<div className="md:col-span-8 group relative overflow-hidden rounded-xl border border-outline-variant bg-surface-container bento-item">
<img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A large-scale modern architectural project under construction in a tropical environment, featuring sleek glass and steel structures integrated with lush greenery. The lighting is bright and optimistic, reflecting a vision of a sustainable future state-of-the-art infrastructure development. High-key light-mode aesthetic with institutional precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkf8qUM4YWqOC3Y-B3q6uu_NEIft2gAgjbDGaMUUjd710S9QIhLFV4BJ2hlVONw2wSHYAE_FjsPIExkVm6YlOyrBiRog9BNyMKWQooBIL0MldSBSXYsRXBX3YazQOy_DQnKaPJ_QtiQEGlUSBbLTmxjuB00Jh5MECqrnw4PB4Yv1cddbrjwjfKEKSeC1D_sHtQ-2INQ0yMj_IwL3r4gLbER7Le01mEJMmixtorefLu-YX21NfoMHSRDuU6HADDfldAv0tsrEuVKno" />
<div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/40 to-transparent"></div>
<div className="absolute bottom-0 p-8 text-white">
<div className="flex gap-2 mb-4">
<span className="px-3 py-1 bg-brass-gold text-on-secondary-fixed text-xs font-bold rounded">HOT INVESTMENT</span>
<span className="px-3 py-1 bg-white/20 backdrop-blur-md text-xs font-bold rounded">LOGISTICS HUB</span>
</div>
<h4 className="font-headline-md text-headline-md mb-2">Aba Smart Logistics Inland Port</h4>
<p className="max-w-xl text-primary-fixed-dim mb-6">A transformative $45M PPP project to modernize trade connectivity across the South East. 40% reserved for Diaspora Equity Participation.</p>
<div className="flex items-center gap-12">
<div>
<p className="text-xs text-white/60 font-label-caps mb-1">FUNDING SECURED</p>
<div className="w-48 h-2 bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-brass-gold w-[65%]"></div>
</div>
</div>
<button className="bg-white text-forest-deep px-6 py-2 rounded font-bold hover:bg-brass-gold hover:text-white transition-colors">Details</button>
</div>
</div>
</div>
{/*  Vertical Cards  */}
<div className="md:col-span-4 flex flex-col gap-6">
<div className="flex-1 bg-white border border-outline-variant rounded-xl p-6 bento-item">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-brass-gold text-4xl">medical_services</span>
<span className="px-2 py-1 bg-surface-container-high rounded text-[10px] font-bold">HEALTHCARE</span>
</div>
<h5 className="font-headline-md text-[18px] mb-2">Abia Specialist Hospital Network</h5>
<p className="text-on-surface-variant text-sm mb-4">Expansion of diagnostic centers through Diaspora-led Private Public Partnerships.</p>
<a className="text-primary font-bold text-sm flex items-center gap-1" href="#">Invest <span className="material-symbols-outlined text-sm">chevron_right</span></a>
</div>
<div className="flex-1 bg-surface-container-high border border-outline-variant rounded-xl p-6 bento-item">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-forest-green text-4xl">lightbulb</span>
<span className="px-2 py-1 bg-surface-variant rounded text-[10px] font-bold">ENERGY</span>
</div>
<h5 className="font-headline-md text-[18px] mb-2">Rural Electrification Mini-Grids</h5>
<p className="text-on-surface-variant text-sm mb-4">Powering over 100 rural communities via solar micro-grids. High social impact yield.</p>
<a className="text-primary font-bold text-sm flex items-center gap-1" href="#">Invest <span className="material-symbols-outlined text-sm">chevron_right</span></a>
</div>
</div>
</div>
</section>
{/*  Success Stories (Returnee-led)  */}
<section className="mb-16 bg-surface-container-low rounded-2xl p-8 md:p-12 border border-outline-variant">
<div className="text-center mb-12">
<span className="font-label-caps text-label-caps text-brass-gold block mb-2">INSPIRATION</span>
<h3 className="font-headline-lg text-headline-lg inline-block relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-brass-gold">Success Stories of Returnees</h3>
</div>
<div className="grid md:grid-cols-3 gap-8">
{/*  Story 1  */}
<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
<div className="h-48 relative">
<img className="w-full h-full object-cover" data-alt="A professional Nigerian entrepreneur woman standing in front of a modern tech office in Abia. She looks confident and successful, dressed in contemporary business attire. The environment is bright and reflects a high-growth technological workplace with a clean, professional aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUDsm34czKhn9aisLBycehfNuceYL6wrsjF1ydOF-CRvLqvjZbZJT-TibfPC9RXDRwNqRlo0-KEELNDgIXQjlvRuz1OJlecU2fpimYTT9iZfUYd91MEZurud-O0we4qyUTXgiS-2aNc89Ihgb_FfvWai-_XwJ-7znZO15LqzfktGzdmYFWY4rbrs3seqQO3FLaZbPqwSoCDIm4icYW9J441O05flMjGaZzxrOH5aOjK6gLLtrkaYognv0WKeLtQXAB8pANW4JJQVg" />
<div className="absolute top-4 right-4 bg-primary text-white text-xs px-2 py-1 rounded">Tech Sector</div>
</div>
<div className="p-6">
<h5 className="font-headline-md text-[20px] mb-2">Dr. Nkemdilim Okoro</h5>
<p className="text-xs font-label-caps text-brass-gold mb-4">FROM CHICAGO TO UMUAIA</p>
<p className="text-on-surface-variant text-sm italic mb-6">"ABIA ONE made the land acquisition for our diagnostic center seamless. The diaspora concierge handled everything."</p>
<button className="text-primary font-bold text-sm underline">Read Full Case Study</button>
</div>
</div>
{/*  Story 2  */}
<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
<div className="h-48 relative">
<img className="w-full h-full object-cover" data-alt="A sophisticated agro-processing facility interior showing modern machinery and staff in clean uniforms. The focus is on productivity and industrial modernization. Lighting is clear and functional, emphasizing the 'state-operating-system' vibe of transparent and efficient governance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPPZ13r1NTxCurCjYZIpp7qlOFEY_MU1JGatK8obmZJtzfgXkzzYg77pvhNg0xnRQk-Pwrqtzk9lFdmsZAbUUWYCExTCehIVTG1A3LwaNVkGneLXh8vyT1vnLM-lRlRrqScHS-tPMwZuYcgq4bE2baRlNPGfWVL5qvhxWr7x71RrE4I5u8MAPGvECqlvwtDPYbdusv2stb55tPYzjfgSJ4xB6l1qiwpDKdjlQSoyJpjHN9otyWnSJ11Lb0ZAHBibN-5PVmYdNWYNY" />
<div className="absolute top-4 right-4 bg-primary text-white text-xs px-2 py-1 rounded">Agribusiness</div>
</div>
<div className="p-6">
<h5 className="font-headline-md text-[20px] mb-2">Engr. Chima Eze</h5>
<p className="text-xs font-label-caps text-brass-gold mb-4">FROM LONDON TO ABA</p>
<p className="text-on-surface-variant text-sm italic mb-6">"By investing in State Bonds first, I built the trust and capital needed to launch our palm oil refinery."</p>
<button className="text-primary font-bold text-sm underline">Read Full Case Study</button>
</div>
</div>
{/*  Story 3  */}
<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-md transition-shadow">
<div className="h-48 relative">
<img className="w-full h-full object-cover" data-alt="A group of young professionals collaborating in a modern coworking space in Abia. Large windows show a bustling but orderly city in the background. The mood is collaborative, innovative, and forward-thinking, capturing the energy of a 'Digital Government' ecosystem." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoLlDNBAYBJiWGDydu2nEJ7-RJiIc2plRMA4SetvEWmMridH3XkjL491c2GJlevpFp6mpr2vM9fgC2lm8bEs9AKbH4JEOUwWgqSp6gcl5pSUlFeREqQpSFR95vW4ZoSgQtN25EjE2pz_KTQoGO9G5TETequ9dXbFRP4bQRz2usymF9TLakXNyK3SgzrE4fzfPveXTJ45-ruHlxV3iR1B4kVmasG6mCWk2e9yKuhWh0RWWOCCQjwUScCA3SY63vvChjwSFWBmlPlZE" />
<div className="absolute top-4 right-4 bg-primary text-white text-xs px-2 py-1 rounded">Education</div>
</div>
<div className="p-6">
<h5 className="font-headline-md text-[20px] mb-2">Adaora &amp; Ken Obi</h5>
<p className="text-xs font-label-caps text-brass-gold mb-4">FROM TORONTO TO OHAFIA</p>
<p className="text-on-surface-variant text-sm italic mb-6">"We co-founded a coding academy with the Ministry of Education. The public-private synergy is world-class."</p>
<button className="text-primary font-bold text-sm underline">Read Full Case Study</button>
</div>
</div>
</div>
</section>
{/*  Concierge Service Section  */}
<section className="grid md:grid-cols-2 gap-12 items-center mb-16">
<div className="order-2 md:order-1">
<div className="p-2 border border-outline-variant rounded-2xl bg-white shadow-xl rotate-[-2deg]">
<img className="rounded-xl w-full h-[400px] object-cover" data-alt="A clean, minimalist high-end office reception desk with the Abia State Crest prominently displayed on a polished wood wall behind it. A professional receptionist in a crisp white shirt is smiling warmly, representing the 'Concierge' service. Professional, authoritative, and welcoming." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBRZalAsU9SAXlvEvuITaxibJMUxdL4NI1ErAWve9CdE6-vKyS-nXYQi_diAPp0B1ABFmqCTZDdsr4h2hOkV1m_aIlEZrXzIOXVxkUiOR2b47363Orbcrqei2wbND7wWbgRs1sbqvYnaIxr-CdVTzqh_syVeVySQW_71B80EqqulraAZq4f7bDA_5LFjev1OJg-Etf9b6Zy2smxZy_h5s1gTTwdtFBxAXu-btff-CSJnfkJjgLrkfRgY4uCLWY3pjikcqnxJYGfFg" />
</div>
</div>
<div className="order-1 md:order-2">
<span className="font-label-caps text-label-caps text-brass-gold block mb-2">PERSONALIZED SUPPORT</span>
<h3 className="font-headline-lg text-headline-lg mb-6">Diaspora Business Concierge</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Moving your capital or business home shouldn't be a bureaucratic nightmare. Our dedicated team acts as your on-ground proxy to navigate legal, land, and regulatory hurdles.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<span className="font-body-md">One-Stop land acquisition and title verification.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<span className="font-body-md">Fast-track business registration and licensing.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<span className="font-body-md">Direct access to Sector-specific Commissioners.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<span className="font-body-md">Tax holiday advisory for returnee-led initiatives.</span>
</li>
</ul>
<button className="bg-primary text-white px-10 py-4 rounded-lg font-bold flex items-center gap-3 hover:shadow-lg transition-all">
<span className="material-symbols-outlined">support_agent</span>
                    Request Concierge Consult
                </button>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest py-16 border-t border-outline-variant">
<div className="max-w-container-max-width mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<h2 className="font-headline-lg text-headline-lg text-forest-deep font-bold mb-4">ABIA ONE</h2>
<p className="font-body-md text-on-surface-variant max-w-sm mb-6">Building a sovereign digital infrastructure to connect every Abian, home and abroad, to the wealth of our state.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-forest-deep text-white flex items-center justify-center hover:bg-brass-gold transition-colors" href="#">
<span className="material-symbols-outlined text-sm">language</span>
</a>
<a className="w-10 h-10 rounded-full bg-forest-deep text-white flex items-center justify-center hover:bg-brass-gold transition-colors" href="#">
<span className="material-symbols-outlined text-sm">mail</span>
</a>
<a className="w-10 h-10 rounded-full bg-forest-deep text-white flex items-center justify-center hover:bg-brass-gold transition-colors" href="#">
<span className="material-symbols-outlined text-sm">call</span>
</a>
</div>
</div>
<div>
<h6 className="font-label-caps text-label-caps text-primary mb-6">ECOSYSTEM</h6>
<ul className="space-y-4">
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Invest Abia</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Serve Abia</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Build Abia</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Open Abia</a></li>
</ul>
</div>
<div>
<h6 className="font-label-caps text-label-caps text-primary mb-6">SUPPORT</h6>
<ul className="space-y-4">
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Us</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Help Center</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Transparency Portal</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-body-md text-on-surface-variant text-sm">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-8">
<img className="h-8 w-auto grayscale hover:grayscale-0 transition-all" data-alt="A small, circular, high-detail digital crest of the Abia State Government featuring the state seal in gold and forest green. Professional, official, and authoritative graphic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAION-rmCFctXJyizZ0fRJNjvCuBRFhl-I-QVdCHBZ6FF8TmCXYLR3YIV2pPsmN6w9sK5sge6KSk2YJJLwgaezteLlkCyuNGOR3uCgXRu4G4EeYboskg-qjod00Vwo77SJt0oY8zeXzKkG6cKJZuovgCX2HgCkKHR-Dep91y4yLtN74iqpMQ0YZNcz4B37n6Dc-yq2BzrfEPxy5pnFnz2XOcJy4PsLUrIDFxSIZvq0xISRHJ33kPxJHZD6B0A6vef9_IGmGwWXfIlc" />
</div>
</div>
</div>
</footer>
{/*  Mobile Nav Bar  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-high flex justify-around items-center h-16 z-50 border-t border-outline-variant">
<button className="flex flex-col items-center gap-1 text-primary">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>home</span>
<span className="text-[10px] font-bold">HOME</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">account_balance_wallet</span>
<span className="text-[10px] font-bold">INVEST</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">person</span>
<span className="text-[10px] font-bold">PROFILE</span>
</button>
</nav>


      </div>
    </>
  );
}
