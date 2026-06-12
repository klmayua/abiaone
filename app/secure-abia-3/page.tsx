"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body {\n            font-family: 'Hanken Grotesk', sans-serif;\n            background-color: #f6fbf3;\n        }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(8px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }" }} />
  
      {/* Screen markup */}
      <div className="text-on-surface">
        
{/*  TopNavBar  */}
<header className="bg-surface fixed top-0 w-full z-50 border-b border-outline-variant">
<nav className="flex justify-between items-center w-full px-margin-desktop max-w-max-width mx-auto h-16">
<div className="flex items-center gap-2">
<span className="font-headline-md text-headline-md font-bold text-forest-green">ABIA ONE</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Invest</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Jobs</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Serve</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Verify</a>
<a className="font-label-md text-label-md text-forest-green border-b-2 border-brass-gold pb-1" href="#">Governance</a>
</div>
<div className="flex items-center gap-6">
<div className="flex gap-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green">language</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green">notifications</span>
</div>
<button className="bg-forest-green text-white px-6 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">
                    Sign In
                </button>
</div>
</nav>
</header>
<main className="pt-16">
{/*  Hero Section  */}
<section className="relative h-[870px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-forest-green/90 to-transparent z-10"></div>
<img alt="Abia State Landmark" className="w-full h-full object-cover" data-alt="A panoramic high-definition view of Umuahia cityscape during the golden hour, showcasing modern Abia architecture and lush greenery under a serene sky. The composition emphasizes a peaceful, secure urban environment with soft warm sunlight reflecting off buildings, maintaining a professional and institutional aesthetic in line with the Abia State Government visual identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW1xTU686_QEgr_qxj061icb43-gYgyAUeERFIuUZVVBKH4bSAC_g-lgYVw4nYTt_F5cJQgfrYsY0sQMqAv3fKoKL8WEsNlt45vDl_WeYg8DkA3sbHK8vLacg3UXxXZdFDvf9qdMmTjYFNMfWY2hYJ0N0BZYNMEEcYabcoXfBIUU1veRXF77yHJXlYE9mRnKY5bvfaeRIcJVISt9j-LiXY7s-QWVoKS0-hCS_EbeKBF51TXc4ngz4PWniMttRV4-m2Cg972O0_JkM" />
</div>
<div className="relative z-20 px-margin-desktop max-w-max-width mx-auto w-full">
<div className="max-w-2xl text-white">
<h1 className="font-display-lg text-display-lg mb-6">Security for All: A Safer Abia Starts Together</h1>
<p className="font-body-lg text-body-lg mb-10 opacity-90">Our commitment to public safety is built on transparency, rapid response, and community-driven intelligence. Access resources and help us protect our home.</p>
<div className="flex flex-wrap gap-4">
<a className="bg-eagle-red hover:bg-red-700 text-white px-8 py-4 rounded font-headline-md flex items-center gap-3 transition-all transform hover:scale-105" href="tel:112">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>emergency</span>
                            Emergency: 112
                        </a>
<a className="bg-brass-gold hover:bg-yellow-600 text-on-secondary-fixed px-8 py-4 rounded font-headline-md flex items-center gap-3 transition-all" href="#resources">
<span className="material-symbols-outlined">security</span>
                            Safety Resources
                        </a>
</div>
</div>
</div>
</section>
{/*  Safety Resources Grid  */}
<section className="py-24 bg-surface px-margin-desktop" id="resources">
<div className="max-w-max-width mx-auto">
<div className="mb-16 border-l-4 border-brass-gold pl-6">
<h2 className="font-headline-lg text-headline-lg text-forest-green uppercase tracking-tight">Safety Resources</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-2">Tools and information designed to empower every citizen in maintaining a secure environment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Resource 1  */}
<div className="bg-white border border-outline-variant p-8 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 bg-surface-container-high rounded flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-forest-green text-3xl">location_on</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4">Station Finder</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Locate your nearest police command, fire station, or emergency medical service point in seconds.</p>
<a className="text-forest-green font-label-md flex items-center gap-2 hover:underline" href="#">
                            Open Map <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
{/*  Resource 2  */}
<div className="bg-white border border-outline-variant p-8 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 bg-surface-container-high rounded flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-forest-green text-3xl">campaign</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4">Reporting Guides</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Learn how to effectively report incidents, including anonymous tips and evidence preservation.</p>
<a className="text-forest-green font-label-md flex items-center gap-2 hover:underline" href="#">
                            Read Guides <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
{/*  Resource 3  */}
<div className="bg-white border border-outline-variant p-8 hover:shadow-lg transition-shadow">
<div className="w-12 h-12 bg-surface-container-high rounded flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-forest-green text-3xl">shield</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4">Safety Tips</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Daily safety protocols for home, transit, and business owners curated by security experts.</p>
<a className="text-forest-green font-label-md flex items-center gap-2 hover:underline" href="#">
                            View All Tips <span className="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
{/*  Community Intelligence Section  */}
<section className="py-24 bg-inverse-surface text-white relative overflow-hidden">
<div className="absolute right-0 top-0 w-1/3 h-full opacity-10">

</div>
<div className="max-w-max-width mx-auto px-margin-desktop grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-headline-lg text-headline-lg mb-8">Data-Driven Protection: Community Intelligence</h2>
<p className="font-body-lg text-body-lg mb-8 opacity-80 leading-relaxed">
                        Through the "Secure Abia" initiative, we utilize advanced data analytics to identify risk patterns before they escalate. By integrating citizen feedback with regional surveillance, we deploy resources precisely where they are needed most.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-brass-gold">check_circle</span>
<span className="font-body-md">Real-time incident heatmapping for tactical deployment.</span>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-brass-gold">check_circle</span>
<span className="font-body-md">Transparent reporting on response times and outcomes.</span>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-brass-gold">check_circle</span>
<span className="font-body-md">Community feedback loops integrated into state policy.</span>
</li>
</ul>
</div>
<div className="relative rounded-xl overflow-hidden border border-outline/30 aspect-video">
<img alt="Command Center" className="w-full h-full object-cover" data-alt="A sleek, modern government command center interior with large digital wall displays showing glowing heat maps and data visualizations of Abia State. The lighting is cool-toned and professional, featuring high-end ergonomic workstations where security analysts work collaboratively. The scene conveys high-tech precision, institutional authority, and transparent governance in a data-rich environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7UUAYwx6rMLMfJqUCV-kSXkAL4xDT2Gz0QdI437WjU7DWMR24TKhDVcdmWuQSrNbFq7GblcvOySU-EsxWoYGUcJ8zNoPl1NB6Zm2GfdXtYD3f4C6t8wZTxXYpJAUwBl_JWDY9z9_mckHobYho7Zi4tPYTqmbcoy96waMr8mlRuDRqLHrDWnUdZQ-ufVgeityDl-h9PC-BR6isffT8pEsli-R1coCF0QHMnkQMFMIY_LeMUUjIdY8JKyJ43G_QCGFJ86ItOBpvZlY" />
</div>
</div>
</section>
{/*  Transparency Feed  */}
<section className="py-24 bg-surface-container-low px-margin-desktop">
<div className="max-w-max-width mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="font-headline-lg text-headline-lg text-forest-green">Transparency Feed</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Real-time updates on state safety measures and community engagement.</p>
</div>
<button className="mt-4 md:mt-0 border border-forest-green text-forest-green px-6 py-2 rounded font-label-md hover:bg-forest-green hover:text-white transition-all">
                        Subscribe to Alerts
                    </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/*  Feed Item 1  */}
<div className="glass-card p-6 flex flex-col h-full opacity-100 translate-y-0">
<div className="flex justify-between items-center mb-4">
<span className="bg-forest-green/10 text-forest-green px-3 py-1 rounded-full font-label-md text-xs">OFFICIAL ALERT</span>
<span className="text-caption font-caption text-on-surface-variant">2 hours ago</span>
</div>
<h4 className="font-headline-md text-lg mb-3">Traffic Management: Aba-Owerri Road</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">New security checkpoints established for holiday transit. Expect minor delays but enhanced safety protocols.</p>
<div className="pt-4 border-t border-outline-variant flex justify-between items-center">
<span className="text-caption font-caption">Verified by ASG</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">share</span>
</div>
</div>
{/*  Feed Item 2  */}
<div className="glass-card p-6 flex flex-col h-full border-l-4 border-l-brass-gold opacity-100 translate-y-0">
<div className="flex justify-between items-center mb-4">
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-md text-xs">COMMUNITY MEETING</span>
<span className="text-caption font-caption text-on-surface-variant">Yesterday</span>
</div>
<h4 className="font-headline-md text-lg mb-3">Town Hall: Security Architecture</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Summary of the recent community policing dialogue held in Umuahia North. Key outcomes published.</p>
<div className="pt-4 border-t border-outline-variant flex justify-between items-center">
<span className="text-caption font-caption">Public Document</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">description</span>
</div>
</div>
{/*  Feed Item 3  */}
<div className="glass-card p-6 flex flex-col h-full opacity-100 translate-y-0">
<div className="flex justify-between items-center mb-4">
<span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-label-md text-xs">IMPROVEMENT</span>
<span className="text-caption font-caption text-on-surface-variant">3 days ago</span>
</div>
<h4 className="font-headline-md text-lg mb-3">Light-Up Abia: Phase 4 Complete</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-grow">Installation of solar-powered street lighting across 15 key residential corridors finished.</p>
<div className="pt-4 border-t border-outline-variant flex justify-between items-center">
<span className="text-caption font-caption">Infrastructure</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">image</span>
</div>
</div>
</div>
</div>
</section>
{/*  Final CTA  */}
<section className="py-16 bg-white border-y border-outline-variant">
<div className="max-w-max-width mx-auto px-margin-desktop text-center">
<h3 className="font-headline-lg text-headline-lg text-forest-green mb-4">Stay Vigilant. Stay Safe.</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-2xl mx-auto">Download the Abia One mobile app to receive instant geo-fenced safety alerts and direct access to emergency responders.</p>
<div className="flex justify-center gap-4">
<button className="bg-inverse-surface text-white px-8 py-3 rounded flex items-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined">apps</span> App Store
                    </button>
<button className="bg-inverse-surface text-white px-8 py-3 rounded flex items-center gap-2 hover:opacity-90 transition-opacity">
<span className="material-symbols-outlined">play_arrow</span> Google Play
                    </button>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-highest border-t border-outline-variant">
<div className="w-full py-8 px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-max-width mx-auto">
<div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
<span className="font-headline-sm text-headline-sm font-bold text-forest-green">ABIA ONE</span>
<p className="font-caption text-caption text-on-surface-variant mt-1">© 2024 Abia State Government. All Rights Reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Terms of Service</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Us</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Press Office</a>
</div>
</div>
</footer>


      </div>
    </>
  );
}
