"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body {\n            font-family: 'Hanken Grotesk', sans-serif;\n            -webkit-font-smoothing: antialiased;\n        }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .hover-lift {\n            transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n        }\n        .hover-lift:hover {\n            transform: translateY(-4px);\n        }\n        .brass-border {\n            border-bottom: 3px solid #D4AF37;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background">
        
{/*  Top Navigation Bar  */}
<header className="fixed top-0 w-full z-50 bg-background border-b border-outline-variant">
<div className="flex justify-between items-center px-margin-desktop h-20 max-w-max-width mx-auto">
<div className="flex items-center gap-2">
<span className="font-display-lg text-headline-md font-bold text-primary"><img src="/Logos/Abia_One_Logo_Standard.png" alt="ABIA ONE" className="h-8 w-auto" /></span>
<span className="font-label-md text-caption bg-secondary-container px-2 py-0.5 rounded text-on-secondary-container">PUBLIC PORTAL</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors" href="/economic-transformation">Economy</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors" href="/serve-abia">Digital Gov</a>
<a className="text-primary font-semibold border-b-2 border-brass-gold pb-1" href="/local-governance">Governance</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors" href="/secure-abia">Security</a>
</nav>
<div className="flex items-center gap-4">
<div className="relative group">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">search</span>
</div>
<button className="bg-forest-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary transition-all active:scale-95">
                    Citizen Portal
                </button>
</div>
</div>
</header>
<main className="pt-32 pb-20 px-margin-desktop max-w-max-width mx-auto">
{/*  Hero / Emergency Section  */}
<section className="mb-12">
<div className="bg-eagle-red text-white p-10 rounded-xl flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
{/*  Abstract Texture Overlay  */}
<div className="absolute inset-0 opacity-10 pointer-events-none">
<svg height="100%" width="100%"><rect fill="url(#pattern-dots)" height="100%" width="100%"></rect></svg>
<defs>
<pattern height="20" id="pattern-dots" patternUnits="userSpaceOnUse" width="20" x="0" y="0">
<circle cx="2" cy="2" fill="white" r="1"></circle>
</pattern>
</defs>
</div>
<div className="z-10 relative mb-8 md:mb-0">
<h1 className="font-headline-lg text-headline-lg mb-2">Emergency Dispatch</h1>
<p className="font-body-lg text-body-lg opacity-90 max-w-lg">Immediate response for life-threatening situations, fire, or active crime reporting. Operators are standing by 24/7.</p>
</div>
<div className="z-10 relative flex flex-col items-center md:items-end">
<div className="flex gap-4 mb-4">
<div className="bg-white/20 backdrop-blur-md px-8 py-6 rounded-lg text-center border border-white/30">
<span className="block font-label-md text-caption mb-1 uppercase tracking-widest">Global</span>
<span className="block font-display-lg text-[64px] leading-none font-extrabold">112</span>
</div>
<div className="bg-white/20 backdrop-blur-md px-8 py-6 rounded-lg text-center border border-white/30">
<span className="block font-label-md text-caption mb-1 uppercase tracking-widest">Local</span>
<span className="block font-display-lg text-[64px] leading-none font-extrabold">911</span>
</div>
</div>
<button className="bg-white text-eagle-red px-10 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-surface transition-colors shadow-lg active:scale-95">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>call</span>
                        INITIATE EMERGENCY CALL
                    </button>
</div>
</div>
</section>
{/*  Reporting Channels Bento Grid  */}
<section className="mb-16">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary">Public Reporting Channels</h2>
<p className="text-on-surface-variant font-body-md">Choose the appropriate channel for non-emergency state matters.</p>
</div>
<div className="h-1 w-24 bg-brass-gold mb-2"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Channel 1  */}
<div className="group bg-surface-container-low border border-outline-variant p-8 rounded-xl hover-lift cursor-pointer flex flex-col h-full">
<div className="w-16 h-16 bg-primary-container rounded-lg flex items-center justify-center mb-6 text-on-primary-container">
<span className="material-symbols-outlined text-4xl" data-icon="smartphone">smartphone</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-3">Abia Alert App</h3>
<p className="text-on-surface-variant font-body-md mb-8 flex-grow">Geo-tagged reporting for infrastructure issues, traffic violations, and environmental concerns directly from your device.</p>
<div className="flex gap-4">
<span className="text-forest-green font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                            Download Now <span className="material-symbols-outlined">arrow_forward</span>
</span>
</div>
</div>
{/*  Channel 2  */}
<div className="group bg-surface-container-low border border-outline-variant p-8 rounded-xl hover-lift cursor-pointer flex flex-col h-full">
<div className="w-16 h-16 bg-tertiary-container rounded-lg flex items-center justify-center mb-6 text-on-tertiary-container">
<span className="material-symbols-outlined text-4xl" data-icon="security">security</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-3">Whistleblower Portal</h3>
<p className="text-on-surface-variant font-body-md mb-8 flex-grow">Secure, anonymous channel for reporting governmental misconduct, corruption, or procedural anomalies. Protected by State Law.</p>
<div className="flex gap-4">
<span className="text-tertiary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                            Access Portal <span className="material-symbols-outlined">shield_person</span>
</span>
</div>
</div>
{/*  Channel 3  */}
<div className="group bg-surface-container-low border border-outline-variant p-8 rounded-xl hover-lift cursor-pointer flex flex-col h-full">
<div className="w-16 h-16 bg-secondary-container rounded-lg flex items-center justify-center mb-6 text-on-secondary-container">
<span className="material-symbols-outlined text-4xl" data-icon="chat_bubble">chat_bubble</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-3">General Feedback</h3>
<p className="text-on-surface-variant font-body-md mb-8 flex-grow">Share your thoughts on state services, suggest improvements, or submit inquiries to the Ministry of Information.</p>
<div className="flex gap-4">
<span className="text-secondary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                            Send Feedback <span className="material-symbols-outlined">send</span>
</span>
</div>
</div>
</div>
</section>
{/*  Community Contribution Section  */}
<section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-surface-container-highest rounded-2xl overflow-hidden border border-outline-variant">
<div className="p-12">
<h2 className="font-headline-lg text-headline-lg text-primary mb-6">Building the Future Together</h2>
<p className="text-on-surface-variant font-body-lg mb-8 leading-relaxed">
                    Governance is a collaborative journey. Beyond reporting, contribute to the state's vision through project sponsorships, volunteering for local initiatives, or providing expert consultancy on state developments.
                </p>
<div className="flex flex-wrap gap-4">
<button className="bg-forest-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary transition-all">Support Projects</button>
<button className="border border-brass-gold text-primary px-8 py-3 rounded-lg font-semibold hover:bg-brass-gold/10 transition-all">Volunteer Programs</button>
</div>
</div>
<div className="h-full min-h-[400px] relative">
<img alt="Modern City Skyline" className="absolute inset-0 w-full h-full object-cover" data-alt="A sweeping, wide-angle cinematic shot of a futuristic city skyline during the golden hour. The architecture is sleek and modern, with glass skyscrapers reflecting a warm, golden sunlight. The atmosphere is vibrant yet professional, using a clean color palette of forest greens, whites, and brass accents that represent a state operating system. The lighting is soft and ethereal, emphasizing a sense of progress and institutional stability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8IVdXfzoGU-e91hx80g-5Q18wOHmM1t4cHyVXvSsFZVNUlAtpUrM_2KSUMUeT7huC4lrnelamj2ZoKWQZvyVp9U9LjQymtF7kP2k1ADdJE8_b79St7mKgFz6kQZ7U6N3rFtsAIQ2q1VJs4QgiUTzBKlCnB6piH7fE_eAEZWHnPJXqgrf0TbEFcLY8X03x0pW5mXzqwSA02WmlpSMoaCNOBf2JvBZdgJ1pOcmK-o-xYBL28iB0AmTg-nPSFsM7yDKnEtQefztlX2A" />
<div className="absolute inset-0 bg-gradient-to-r from-surface-container-highest/60 to-transparent"></div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-highest border-t border-outline-variant py-12">
<div className="max-w-max-width mx-auto px-margin-desktop">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
<div className="max-w-xs">
<span className="font-display-lg text-headline-md font-bold text-primary block mb-4">ABIA ONE</span>
<p className="text-on-surface-variant font-caption">Empowering citizens through transparent infrastructure and direct communication channels. The official State Operating System of Abia.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12">
<div>
<h4 className="font-label-md text-primary mb-4">Resources</h4>
<ul className="space-y-2 font-caption text-on-surface-variant">
<li><a className="hover:text-primary transition-colors" href="/serve-abia">Digital Gov Docs</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Service Level Agreements</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-label-md text-primary mb-4">Support</h4>
<ul className="space-y-2 font-caption text-on-surface-variant">
<li><a className="hover:text-primary transition-colors" href="#">Contact Support</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Transparency Info</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Citizen Rights</a></li>
</ul>
</div>
<div>
<h4 className="font-label-md text-primary mb-4">Emergency</h4>
<ul className="space-y-2 font-caption text-on-surface-variant">
<li className="font-bold text-eagle-red">Dial 112 / 911</li>
<li>Fire Department</li>
<li>Medical Response</li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-caption text-on-surface-variant">© 2024 Abia State Government. All rights reserved. Built for the future of governance.</p>
<div className="flex gap-6">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">language</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">share</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">policy</span>
</div>
</div>
</div>
</footer>


      </div>
    </>
  );
}
