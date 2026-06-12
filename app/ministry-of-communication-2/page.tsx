"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".brass-underline::after {\n            content: '';\n            display: block;\n            width: 40px;\n            height: 3px;\n            background-color: #D4AF37;\n            margin-top: 8px;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-4">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep">ABIA ONE</span>
</div>
<nav className="hidden md:flex gap-8">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/economic-transformation">Economy</a>
<a className="font-label-caps text-label-caps text-primary border-b-2 border-brass-accent pb-1" href="/serve-abia">Digital Gov</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/local-governance">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/secure-abia">Security</a>
</nav>
<div className="flex items-center gap-4">
<button className="bg-primary text-white px-4 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all">Citizen Portal</button>
<button className="text-eagle-red border border-eagle-red px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-eagle-red hover:text-white transition-all">Emergency</button>
</div>
</header>
{/*  SideNavBar (Desktop Only)  */}

{/*  Main Content  */}
<main className="pt-16 min-h-screen">
{/*  Hero Section  */}
<section className="relative h-[400px] overflow-hidden flex items-center px-margin-mobile md:px-margin-desktop">

<div className="relative z-10 max-w-2xl">
<div className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-label-md font-label-md mb-4 rounded">MINISTRY OF COMMUNICATION</div>
<h1 className="font-display-lg text-display-lg text-primary leading-tight mb-4">The Voice of Abia: Stay Informed</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">A unified portal for verified updates, official executive records, and transparency in government communication.</p>
<div className="mt-8 flex gap-4">
<button className="bg-forest-green text-white px-6 py-3 rounded-lg font-label-md text-label-md flex items-center gap-2">
<span className="material-symbols-outlined">rss_feed</span> Latest Updates
                    </button>
<button className="border border-brass-gold text-secondary px-6 py-3 rounded-lg font-label-md text-label-md">Media Portal</button>
</div>
</div>
</section>
<div className="px-margin-mobile md:px-margin-desktop py-12 max-w-container-max-width mx-auto">
<div className="bento-grid">
{/*  Verified News Feed  */}
<div className="col-span-12 md:col-span-8 bg-white border border-outline-variant p-8 rounded-lg">
<div className="flex justify-between items-center mb-6">
<h2 className="font-headline-md text-headline-md text-primary brass-underline">Verified News Feed</h2>
<span className="flex items-center gap-2 text-forest-green font-label-md"><span className="material-symbols-outlined text-sm" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span> LIVE UPDATES</span>
</div>
<div className="space-y-6">
<article className="flex flex-col md:flex-row gap-6 p-4 hover:bg-surface-container-low transition-colors border-b border-outline-variant last:border-0">
<div className="w-full md:w-48 h-32 flex-shrink-0 bg-surface-variant overflow-hidden rounded">
<img className="w-full h-full object-cover" data-alt="A cinematic aerial view of a modern infrastructure development project in Abia State, Nigeria, featuring new roads and bridge construction under a clear blue sky. The lighting is crisp and natural, highlighting the vibrant colors of the landscape and the organized nature of the engineering project. The style is professional and authoritative, suitable for a government news portal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl316lzA9G9maQ72eDpYEkrHynCG_Kc9BbJDBpF8-0mG0MxVkM0u3Mly8EGyQdTWK-IdhuMnwSjDikJlpaiUqBvp6URFW0zKH06_iIEpKHzdpIxNcobnQkh7EwDZzcxYgfMFL9RHKdky0c1iuExrvCapQ6RsNNRhEmBWUeXz9SJJ6v3D-TwBLNQzGPXX4Aj4KRNDlTgKuyP8D2An1pAwh4AAMqy4ewgwgeCiVnye8d_w_w-wGH19y0DV_5BBDyQqILWru-E_bl0Co" />
</div>
<div className="flex-1">
<span className="text-caption font-label-md text-brass-gold mb-1 block">INFRASTRUCTURE • 2H AGO</span>
<h3 className="font-headline-md text-on-surface mb-2">Governor Otti Commissioned New Aba-Port Harcourt Expressway Section</h3>
<p className="text-on-surface-variant line-clamp-2">The state government has successfully completed the first phase of the strategic road expansion, aiming to boost inter-state commerce...</p>
<a className="mt-4 inline-block text-primary font-label-md font-bold hover:underline" href="#">Read Full Release →</a>
</div>
</article>
<article className="flex flex-col md:flex-row gap-6 p-4 hover:bg-surface-container-low transition-colors border-b border-outline-variant last:border-0">
<div className="w-full md:w-48 h-32 flex-shrink-0 bg-surface-variant overflow-hidden rounded">
<img className="w-full h-full object-cover" data-alt="A group of diverse professionals in a high-tech boardroom in Abia State, focused on digital monitors displaying data visualizations and state development metrics. The atmosphere is collaborative and professional, lit by cool corporate lighting that emphasizes a modern digital governance aesthetic. The visual style is clean and sharp, conveying transparency and progress." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6vO5s7BtdgxY-2J4HH9N8ybP7OSOOp0RkqzSLCRBB9AmnsnRsjskHIr29cGdDUWNyu1SN7GBfv_N6u6RTXNOSm8D_CZSXxmV4EujkMXCgjelp6UGScXROK2qxjaD4jPqejUnzPjzEtpp7XTe83HvzW8YAsh0vbcZ9np2QOrtrWqLLsqyFwj6kx0itciJQN83Zh9KaXgSCM8dF6EXlvxeS3gFKwhxI26MCw3YNZWqtnS_GAjwnOkzwrXFEj2acOmTq5iVLsCxGpFI" />
</div>
<div className="flex-1">
<span className="text-caption font-label-md text-brass-gold mb-1 block">POLICY • 5H AGO</span>
<h3 className="font-headline-md text-on-surface mb-2">New Digital Governance Framework Announced</h3>
<p className="text-on-surface-variant line-clamp-2">The Ministry of Communication unveils the 'Abia One' roadmap for complete digitization of all state services by 2025...</p>
<a className="mt-4 inline-block text-primary font-label-md font-bold hover:underline" href="#">Read Full Release →</a>
</div>
</article>
</div>
</div>
{/*  Executive Order Registry  */}
<div className="col-span-12 md:col-span-4 bg-primary text-white p-8 rounded-lg">
<h2 className="font-headline-md text-headline-md mb-6 border-b border-primary-fixed-dim pb-4">Executive Order Registry</h2>
<div className="space-y-4">
<div className="group cursor-pointer">
<span className="text-caption text-primary-fixed-dim block mb-1">ORDER NO. 042-2024</span>
<p className="font-headline-md text-sm group-hover:text-brass-gold transition-colors">Public Health Infrastructure Modernization Act</p>
<div className="flex items-center gap-2 mt-2 text-caption">
<span className="material-symbols-outlined text-xs">calendar_today</span> Oct 12, 2024
                                <span className="material-symbols-outlined text-xs">download</span> PDF (2.4MB)
                            </div>
</div>
<div className="group cursor-pointer border-t border-primary-fixed-dim pt-4">
<span className="text-caption text-primary-fixed-dim block mb-1">ORDER NO. 041-2024</span>
<p className="font-headline-md text-sm group-hover:text-brass-gold transition-colors">Emergency Response Fleet Decentralization</p>
<div className="flex items-center gap-2 mt-2 text-caption">
<span className="material-symbols-outlined text-xs">calendar_today</span> Oct 05, 2024
                                <span className="material-symbols-outlined text-xs">download</span> PDF (1.8MB)
                            </div>
</div>
<div className="group cursor-pointer border-t border-primary-fixed-dim pt-4">
<span className="text-caption text-primary-fixed-dim block mb-1">ORDER NO. 040-2024</span>
<p className="font-headline-md text-sm group-hover:text-brass-gold transition-colors">Agricultural Seed Subsidy Extension</p>
<div className="flex items-center gap-2 mt-2 text-caption">
<span className="material-symbols-outlined text-xs">calendar_today</span> Sep 28, 2024
                                <span className="material-symbols-outlined text-xs">download</span> PDF (1.2MB)
                            </div>
</div>
</div>
<button className="w-full mt-8 border border-primary-fixed-dim py-3 rounded-lg font-label-md hover:bg-white hover:text-primary transition-all">Browse Full Archive</button>
</div>
{/*  Media Toolkit & Radio/TV Schedule  */}
<div className="col-span-12 md:col-span-6 bg-surface-container-high p-8 rounded-lg">
<h2 className="font-headline-md text-headline-md text-primary mb-6 brass-underline">Media Toolkit</h2>
<p className="text-on-surface-variant mb-6">Official assets for journalists, broadcasters, and content creators reporting on State activities.</p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 border border-outline-variant rounded flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary">
<span className="material-symbols-outlined text-primary text-3xl mb-2">image</span>
<span className="font-label-md">Hi-Res Assets</span>
</div>
<div className="bg-white p-4 border border-outline-variant rounded flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary">
<span className="material-symbols-outlined text-primary text-3xl mb-2">movie</span>
<span className="font-label-md">Press Footage</span>
</div>
<div className="bg-white p-4 border border-outline-variant rounded flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary">
<span className="material-symbols-outlined text-primary text-3xl mb-2">description</span>
<span className="font-label-md">Fact Sheets</span>
</div>
<div className="bg-white p-4 border border-outline-variant rounded flex flex-col items-center justify-center text-center cursor-pointer hover:border-primary">
<span className="material-symbols-outlined text-primary text-3xl mb-2">campaign</span>
<span className="font-label-md">Style Guide</span>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-6 bg-white border border-outline-variant p-8 rounded-lg relative overflow-hidden">
<div className="flex justify-between items-center mb-6">
<h2 className="font-headline-md text-headline-md text-primary brass-underline">State Radio/TV Schedule</h2>
<span className="bg-eagle-red text-white text-[10px] px-2 py-1 rounded-full animate-pulse">ON AIR</span>
</div>
<div className="space-y-4">
<div className="flex gap-4 items-center p-3 bg-background border-l-4 border-forest-green">
<span className="font-label-md text-primary">09:00</span>
<div>
<p className="font-headline-md text-sm">Morning Dialogue: State Economy</p>
<p className="text-caption text-on-surface-variant">Live with Commissioner of Finance</p>
</div>
</div>
<div className="flex gap-4 items-center p-3">
<span className="font-label-md text-on-surface-variant">12:30</span>
<div>
<p className="font-headline-md text-sm">News Digest (Mid-day)</p>
<p className="text-caption text-on-surface-variant">Daily summary of state events</p>
</div>
</div>
<div className="flex gap-4 items-center p-3">
<span className="font-label-md text-on-surface-variant">15:00</span>
<div>
<p className="font-headline-md text-sm">Agro-Future Abia</p>
<p className="text-caption text-on-surface-variant">Technology in modern farming</p>
</div>
</div>
</div>
<div className="mt-6 p-4 bg-secondary-container/30 rounded-lg flex items-center gap-4">
<span className="material-symbols-outlined text-secondary">radio</span>
<div>
<p className="font-label-md text-secondary">Broadcasting Live on BCA 88.1 FM</p>
<a className="text-primary font-bold text-caption hover:underline" href="#">Listen Online Now</a>
</div>
</div>
</div>
{/*  Misinformation Reporting Form  */}
<div className="col-span-12 bg-surface-container-highest p-8 rounded-lg border-2 border-dashed border-outline-variant">
<div className="max-w-3xl mx-auto text-center">
<span className="material-symbols-outlined text-eagle-red text-4xl mb-2">gpp_maybe</span>
<h2 className="font-headline-md text-headline-md text-primary mb-2">Combat Misinformation</h2>
<p className="text-on-surface-variant mb-8">Report suspected false government notices or news stories. Help us maintain the integrity of public information.</p>
<form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
<div className="flex flex-col gap-2">
<label className="text-label-md font-label-md text-on-surface">Source of Information</label>
<input className="bg-white border-slate-400 rounded p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="e.g. WhatsApp Group, Facebook Page" type="text" />
</div>
<div className="flex flex-col gap-2">
<label className="text-label-md font-label-md text-on-surface">Subject / Headline</label>
<input className="bg-white border-slate-400 rounded p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Summary of the claim" type="text" />
</div>
<div className="flex flex-col gap-2 md:col-span-2">
<label className="text-label-md font-label-md text-on-surface">Details / URL</label>
<textarea className="bg-white border-slate-400 rounded p-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Provide more context or a link to the misinformation..." rows={3}></textarea>
</div>
<div className="md:col-span-2 flex justify-center">
<button className="bg-primary text-white px-10 py-3 rounded-lg font-label-md hover:opacity-90 transition-all shadow-sm" type="submit">Submit Report for Verification</button>
</div>
</form>
</div>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest py-12 border-t border-outline-variant">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
<div>
<span className="font-headline-lg text-headline-lg text-forest-deep block mb-4">ABIA ONE</span>
<p className="max-w-xs text-on-surface-variant">Empowering citizens through transparent communication and digital accessibility. The official operating system of the Abia State Government.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
<div className="flex flex-col gap-3">
<span className="font-label-caps text-label-caps text-primary font-bold">INITIATIVES</span>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors underline decoration-brass-accent" href="/invest-in-aba">Invest Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors underline decoration-brass-accent" href="/serve-abia">Serve Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors underline decoration-brass-accent" href="/build-abia">Build Abia</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-label-caps text-label-caps text-primary font-bold">GOVERNANCE</span>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors underline decoration-brass-accent" href="/open-abia">Open Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors underline decoration-brass-accent" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors underline decoration-brass-accent" href="#">Contact Us</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-label-caps text-label-caps text-primary font-bold">SOCIAL</span>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors underline decoration-brass-accent" href="#">X (Twitter)</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors underline decoration-brass-accent" href="#">Facebook</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors underline decoration-brass-accent" href="#">LinkedIn</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-on-surface-variant text-caption">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-4">
<img className="h-8 grayscale opacity-50" data-alt="A small, elegant emblem or coat of arms representational of Abia State, showing traditional symbols of strength and agriculture, rendered in a crisp vector-style icon with forest green and brass gold accents. The design is modern yet respectful of heritage." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCqVPc4oVDluluds5TF9AbOIZkbHF305OmUUlocZ3pZMzgFXVfgWmNNj7q96s_vHPajgXVqXsxcOq-FkjRby7sYBXl2Bd0uWRvO9t55RdhmmRssQYMQ-g0zFstsYqY1ohasVEP2byYSknpSWvE2L82G8i2z1exhifO2DvMNXnRxeOTMal5ZIF4t5a2p2nvakRgBP2IuNi4JPy-b-pxfCubTCn2n52-wUueeoHSqZE9JQgQOWDcRgRw1alrIvNLCj767sYq0bH_1sQ" />
</div>
</div>
</footer>




      </div>
    </>
  );
}
