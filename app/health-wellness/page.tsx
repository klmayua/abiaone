"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        body { font-family: 'Hanken Grotesk', sans-serif; }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(10px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .brass-accent-line::after {\n            content: '';\n            display: block;\n            width: 40px;\n            height: 3px;\n            background-color: #D4AF37;\n            margin-top: 8px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface">
        
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 dark:bg-forest-deep/80 backdrop-blur-md border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-4">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep dark:text-primary-fixed">ABIA ONE</span>
<div className="hidden md:flex gap-6 ml-8">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="/economic-transformation">Economy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="/serve-abia">Digital Gov</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="/local-governance">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="/secure-abia">Security</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block px-4 py-2 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps rounded-lg hover:opacity-80 transition-all">Emergency</button>
<button className="px-6 py-2 bg-primary text-on-primary font-label-caps text-label-caps rounded-lg hover:opacity-90 transition-all">Citizen Portal</button>
<div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-fixed">
<img alt="User Profile" data-alt="A professional headshot of a middle-aged Nigerian man with a friendly expression, set against a neutral, high-key studio background. The lighting is soft and professional, emphasizing clarity and trust, suitable for a government official or professional profile. The overall aesthetic is clean and modern, aligning with the Abia State digital governance style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkIckX7_XvQlwVX-jFkfQQ3ThpDZh19ZJ7kp_levwIH__p4qZycJdWhac2uJLGU44sr5nE2_Th_BazxHNqD9PBCCc-5dwHNnUbR_ENI8vaFIyYPcmseMAOKrHgIOe1pffUoYWhjuczT6wD9X7SNqBq67IkZb6Vd2g5p2iZOBQDb-i1whF7H-s6Xegq-xu-0iJriE6vY_vL6X9ba1sht9I3WJprhKpwSESP6bHJzXEGTSG8f2LnzjJRGA5Em9HfffLxmUyGrwTGt60" />
</div>
</div>
</nav>
{/*  SideNavBar (Desktop Only)  */}
<aside className="hidden lg:flex flex-col h-full border-r border-outline-variant w-64 fixed left-0 top-0 bg-surface-container-low pt-24 z-40">
<div className="px-6 mb-8">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep">ABIA ONE</h2>
<p className="font-body-md text-body-md text-on-surface-variant opacity-70">ABIA Care Health OS</p>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center gap-4 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg mx-2 transition-all translate-x-1" href="/ministry-of-health">
<span className="material-symbols-outlined">health_and_safety</span>
<span className="font-label-sm text-label-sm">Health Metrics</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 transition-all" href="#">
<span className="material-symbols-outlined">local_hospital</span>
<span className="font-label-sm text-label-sm">Facility Finder</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 transition-all" href="#">
<span className="material-symbols-outlined">vaccines</span>
<span className="font-label-sm text-label-sm">Immunization</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 transition-all" href="#">
<span className="material-symbols-outlined">architecture</span>
<span className="font-label-sm text-label-sm">Hospital Rehab</span>
</a>
</nav>
<div className="p-4 border-t border-outline-variant space-y-2">
<a className="flex items-center gap-4 px-4 py-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</a>
<a className="flex items-center gap-4 px-4 py-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-label-sm text-label-sm">Support</span>
</a>
</div>
</aside>
{/*  Main Content  */}
<main className="lg:ml-64 pt-24 px-margin-mobile md:px-margin-desktop pb-12 max-w-container-max-width mx-auto">
{/*  Header & State Stats  */}
<header className="mb-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="font-label-caps text-label-caps text-brass-gold mb-2 block">GOVERNANCE &amp; PUBLIC HEALTH</span>
<h1 className="font-display-lg text-display-lg text-primary brass-accent-line">ABIA Care Health OS</h1>
<p className="font-body-lg text-body-lg text-slate-gray max-w-2xl mt-4">Real-time health infrastructure monitoring and citizen healthcare management for the modern Abia State.</p>
</div>
<div className="flex gap-4">
<div className="bg-surface-container-high px-6 py-4 rounded-lg border border-outline-variant">
<p className="font-label-caps text-label-caps text-on-surface-variant">Active Insurance</p>
<p className="font-headline-lg text-headline-lg text-forest-green">1.2M +</p>
</div>
<div className="bg-surface-container-high px-6 py-4 rounded-lg border border-outline-variant">
<p className="font-label-caps text-label-caps text-on-surface-variant">Live Projects</p>
<p className="font-headline-lg text-headline-lg text-eagle-red">14</p>
</div>
</div>
</div>
</header>
{/*  Dashboard Grid  */}
<div className="bento-grid">
{/*  State Health Metrics Chart  */}
<section className="col-span-12 lg:col-span-8 glass-card rounded-xl p-6 overflow-hidden relative min-h-[400px]">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-primary">State Health Index</h3>
<div className="flex gap-2">
<span className="px-3 py-1 bg-primary/10 text-primary font-label-md text-label-md rounded-full">Primary Care</span>
<span className="px-3 py-1 bg-brass-gold/10 text-brass-gold font-label-md text-label-md rounded-full">Secondary Care</span>
</div>
</div>
{/*  Data Visualization Placeholder Area  */}
<div className="w-full h-64 bg-surface-container-lowest rounded-lg relative overflow-hidden group">

<div className="absolute inset-0 flex items-end justify-around px-8 pb-4">
{/*  Simulated Data Bars  */}
<div className="w-12 bg-primary/40 h-[40%] rounded-t-lg transition-all hover:h-[45%]"></div>
<div className="w-12 bg-primary/60 h-[65%] rounded-t-lg transition-all hover:h-[70%]"></div>
<div className="w-12 bg-primary h-[85%] rounded-t-lg transition-all hover:h-[90%]"></div>
<div className="w-12 bg-brass-gold h-[55%] rounded-t-lg transition-all hover:h-[60%]"></div>
<div className="w-12 bg-primary/80 h-[75%] rounded-t-lg transition-all hover:h-[80%]"></div>
<div className="w-12 bg-eagle-red/40 h-[30%] rounded-t-lg transition-all hover:h-[35%]"></div>
<div className="w-12 bg-primary h-[92%] rounded-t-lg transition-all hover:h-[95%]"></div>
</div>
<div className="absolute inset-0 border border-outline-variant/30 pointer-events-none"></div>
</div>
<div className="grid grid-cols-4 mt-6 gap-4">
<div className="text-center">
<p className="font-label-caps text-[10px] text-on-surface-variant">Vaccination Rate</p>
<p className="font-headline-md text-headline-md text-forest-green">88%</p>
</div>
<div className="text-center">
<p className="font-label-caps text-[10px] text-on-surface-variant">Maternal Health</p>
<p className="font-headline-md text-headline-md text-forest-green">94%</p>
</div>
<div className="text-center">
<p className="font-label-caps text-[10px] text-on-surface-variant">ER Response</p>
<p className="font-headline-md text-headline-md text-brass-gold">12m</p>
</div>
<div className="text-center">
<p className="font-label-caps text-[10px] text-on-surface-variant">Bed Capacity</p>
<p className="font-headline-md text-headline-md text-primary">76%</p>
</div>
</div>
</section>
{/*  Facility Finder Quick Tool  */}
<section className="col-span-12 lg:col-span-4 glass-card rounded-xl p-6 bg-forest-green text-state-white">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-brass-gold">my_location</span>
<h3 className="font-headline-md text-headline-md">Facility Finder</h3>
</div>
<div className="space-y-4">
<div className="relative">
<input className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-state-white placeholder:text-white/60 focus:ring-brass-gold focus:border-brass-gold font-body-md text-body-md" placeholder="Search Hospital or Clinic..." type="text" />
<span className="material-symbols-outlined absolute right-3 top-3 opacity-60">search</span>
</div>
<div className="bg-white/5 p-4 rounded-lg border border-white/10">
<p className="font-label-caps text-[10px] text-brass-gold mb-1">NEAREST ACCREDITED</p>
<p className="font-body-lg font-bold">Federal Medical Center, Umuahia</p>
<p className="font-caption text-caption opacity-80">1.2km away • Emergency Open 24/7</p>
<button className="mt-3 w-full py-2 bg-brass-gold text-primary font-label-caps text-label-caps rounded-lg hover:brightness-110 transition-all">Get Directions</button>
</div>
<div className="flex items-center justify-between opacity-80 pt-2">
<div className="flex gap-2">
<span className="material-symbols-outlined text-sm">filter_alt</span>
<span className="font-label-md text-label-md">Specialization</span>
</div>
<span className="material-symbols-outlined cursor-pointer">arrow_forward</span>
</div>
</div>
</section>
{/*  General Hospital Renovation Project Tracking  */}
<section className="col-span-12 lg:col-span-7 glass-card rounded-xl overflow-hidden flex flex-col">
<div className="p-6 border-b border-outline-variant flex justify-between items-center">
<div>
<h3 className="font-headline-md text-headline-md text-primary">Hospital Rehabilitation Hub</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Infrastructure Monitoring System (IMS)</p>
</div>
<span className="px-4 py-1 bg-eagle-red text-white font-label-caps text-label-caps rounded-full animate-pulse">LIVE UPDATES</span>
</div>
<div className="flex-1 p-6 grid md:grid-cols-2 gap-6">
<div className="relative rounded-lg overflow-hidden h-48 md:h-full">
<img alt="Hospital Renovation" className="w-full h-full object-cover" data-alt="A wide-angle shot of a modern hospital wing under professional renovation in a bright, sunny environment. The architecture features clean, contemporary lines with large glass windows reflecting a clear blue sky. Construction workers in safety gear are visible in the background, subtly suggesting active progress. The lighting is crisp and natural, emphasizing the transformation from an older structure to a state-of-the-art medical facility." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwu811V-ZPPAZgPNsMObVn1aOMITaPjCDgHdh1zIYrhyZCFO0f3GvP4FOim4XL0sc2Xqjk96rzOL3HG_4WZiiOHxeq0vakGvNrQuZR4nEitd9JEeLpXYnA1aIiP6jXNsXH-dkagx0f-3dKNuX7yprnz1XTBul4tERiBufdx8CkIJbeMs7j0T5VifKs66XnIi6eLmGdrvdZ7lsDF16Nyg6fIssDF7cHRFFKLE8S17AsrmBKdEXqGOvcQwTTC-MBgeSXYRohNGbYiZ4" />
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
<p className="text-white font-label-caps text-label-caps">ABIA GENERAL HOSPITAL, ABA</p>
<p className="text-brass-gold font-body-md font-bold">92% Completion</p>
</div>
</div>
<div className="space-y-4">
<div className="p-4 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex justify-between items-start">
<p className="font-body-md font-bold text-primary">General Hospital, Ohafia</p>
<span className="material-symbols-outlined text-primary-fixed-dim" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</div>
<div className="w-full bg-surface-container-highest h-2 mt-2 rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[78%]"></div>
</div>
<p className="font-caption text-caption mt-1 text-on-surface-variant">Target Opening: Oct 2024</p>
</div>
<div className="p-4 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex justify-between items-start">
<p className="font-body-md font-bold text-primary">Okpuala Ngwa Hospital</p>
<span className="material-symbols-outlined text-brass-gold">pending</span>
</div>
<div className="w-full bg-surface-container-highest h-2 mt-2 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[45%]"></div>
</div>
<p className="font-caption text-caption mt-1 text-on-surface-variant">Procurement Phase: Equipment</p>
</div>
<div className="p-4 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
<div className="flex justify-between items-start">
<p className="font-body-md font-bold text-primary">Specialist Clinic, Arochukwu</p>
<span className="material-symbols-outlined text-eagle-red">warning</span>
</div>
<div className="w-full bg-surface-container-highest h-2 mt-2 rounded-full overflow-hidden">
<div className="bg-eagle-red h-full w-[15%]"></div>
</div>
<p className="font-caption text-caption mt-1 text-on-surface-variant">Initial Structural Assessment</p>
</div>
</div>
</div>
</section>
{/*  Immunization Schedule Tracker  */}
<section className="col-span-12 lg:col-span-5 glass-card rounded-xl p-6 flex flex-col">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md text-primary">Immunization Tracker</h3>
<button className="text-primary hover:text-brass-gold transition-colors">
<span className="material-symbols-outlined">add_circle</span>
</button>
</div>
<div className="bg-surface-container-low rounded-lg p-4 mb-4 border border-outline-variant/50">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>child_care</span>
</div>
<div>
<p className="font-label-caps text-label-caps text-on-surface-variant">CURRENT PATIENT</p>
<p className="font-headline-md text-[18px] text-primary">Obioma Chiziterem</p>
</div>
</div>
</div>
<div className="space-y-4 flex-1">
<div className="flex items-center gap-4 group">
<div className="w-2 h-2 rounded-full bg-forest-green"></div>
<div className="flex-1 py-3 border-b border-outline-variant group-last:border-0">
<div className="flex justify-between">
<p className="font-body-md font-semibold text-primary">BCG Vaccine</p>
<span className="font-label-md text-label-md text-forest-green">Completed</span>
</div>
<p className="font-caption text-caption text-on-surface-variant">Administered: 12 June 2024</p>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-2 h-2 rounded-full bg-brass-gold"></div>
<div className="flex-1 py-3 border-b border-outline-variant group-last:border-0">
<div className="flex justify-between">
<p className="font-body-md font-semibold text-primary">Pentavalent (Dose 1)</p>
<span className="font-label-md text-label-md text-brass-gold">Due in 4 Days</span>
</div>
<p className="font-caption text-caption text-on-surface-variant">Recommended: 15 July 2024</p>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-2 h-2 rounded-full bg-slate-gray/30"></div>
<div className="flex-1 py-3 border-b border-outline-variant group-last:border-0">
<div className="flex justify-between">
<p className="font-body-md font-semibold text-on-surface-variant">OPV (Dose 1)</p>
<span className="font-label-md text-label-md text-on-surface-variant">Pending</span>
</div>
<p className="font-caption text-caption text-on-surface-variant">Recommended: 22 July 2024</p>
</div>
</div>
</div>
<button className="mt-6 w-full py-4 border-2 border-dashed border-outline hover:border-primary hover:bg-primary/5 transition-all text-on-surface-variant font-label-caps text-label-caps rounded-lg">
                    DOWNLOAD STATE E-HEALTH CARD
                </button>
</section>
</div>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest dark:bg-forest-deep mt-auto py-12 border-t border-outline-variant dark:border-outline">
<div className="max-w-container-max-width mx-auto">
<div className="flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-sm">
<h2 className="font-headline-lg text-headline-lg text-forest-deep dark:text-primary-fixed font-bold mb-4">ABIA ONE</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">The sovereign digital gateway to Abia State, Nigeria. Modernizing governance through transparency and technical precision.</p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-primary cursor-pointer hover:text-brass-gold transition-colors">public</span>
<span className="material-symbols-outlined text-primary cursor-pointer hover:text-brass-gold transition-colors">share</span>
<span className="material-symbols-outlined text-primary cursor-pointer hover:text-brass-gold transition-colors">notifications</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h4 className="font-label-caps text-label-caps text-primary font-bold mb-4">ECOSYSTEM</h4>
<ul className="space-y-2">
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-accent transition-colors hover:underline decoration-brass-accent" href="/invest-in-aba">Invest Abia</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-accent transition-colors hover:underline decoration-brass-accent" href="/serve-abia">Serve Abia</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-accent transition-colors hover:underline decoration-brass-accent" href="/build-abia">Build Abia</a></li>
</ul>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-primary font-bold mb-4">LEGAL</h4>
<ul className="space-y-2">
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-accent transition-colors hover:underline decoration-brass-accent" href="#">Privacy Policy</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-accent transition-colors hover:underline decoration-brass-accent" href="#">Terms of Use</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-accent transition-colors hover:underline decoration-brass-accent" href="/open-abia">Open Abia</a></li>
</ul>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-primary font-bold mb-4">SUPPORT</h4>
<ul className="space-y-2">
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-accent transition-colors hover:underline decoration-brass-accent" href="#">Contact Us</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-accent transition-colors hover:underline decoration-brass-accent" href="/secure-abia">Emergency Lines</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-outline-variant/30 text-center">
<p className="font-body-md text-body-md text-on-surface-variant opacity-60">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
</div>
</div>
</footer>


      </div>
    </>
  );
}
