"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 12px;\n        }\n        .bento-item-large {\n            grid-column: span 2;\n        }\n        .custom-scroll-hide::-webkit-scrollbar {\n            display: none;\n        }\n        .custom-scroll-hide {\n            -ms-overflow-style: none;\n            scrollbar-width: none;\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
        
{/*  Top AppBar (Mobile Layout)  */}
<header className="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile h-16">
<div className="flex items-center gap-3">
<button className="text-primary dark:text-primary-fixed hover:bg-surface-variant/50 transition-colors p-2 rounded-full active:scale-95 duration-150">
<span className="material-symbols-outlined">menu</span>
</button>
<h1 className="font-headline-md text-headline-md-mobile font-bold text-primary dark:text-primary-fixed">Abia One</h1>
</div>
<div className="flex items-center gap-2">
<button className="text-primary dark:text-primary-fixed hover:bg-surface-variant/50 transition-colors p-2 rounded-full active:scale-95 duration-150">
<span className="material-symbols-outlined">emergency_share</span>
</button>
</div>
</header>
<main className="pt-20 pb-24 px-4 max-w-md mx-auto">
{/*  AI Academy Branding & Welcome  */}
<section className="mb-6 relative overflow-hidden rounded-xl p-6 bg-primary-container text-white">
<div className="relative z-10">
<span className="font-label-md text-label-md uppercase tracking-wider text-primary-fixed opacity-90">AI Academy</span>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile mt-1 font-bold">Good morning, Obi.</h2>
<p className="font-body-md text-body-md mt-2 text-primary-fixed opacity-80">Ready to advance your digital sovereignity?</p>
</div>
<div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary-fixed opacity-10 rounded-full blur-3xl"></div>
</section>
{/*  Progress Card: Active Course  */}
<section className="mb-8">
<h3 className="font-headline-md text-headline-md-mobile mb-4 text-slate-gray flex items-center gap-2">
<span className="w-1 h-6 bg-forest-green rounded-full"></span>
                In Progress
            </h3>
<div className="bg-state-white border border-outline-variant rounded-xl p-5 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="font-headline-md text-headline-md-mobile leading-tight">Digital Literacy 101</h4>
<p className="font-caption text-caption text-outline mt-1 uppercase tracking-tight">Module 4: Secure Governance</p>
</div>
<div className="bg-secondary-container text-on-secondary-container p-2 rounded-lg">
<span className="material-symbols-outlined">school</span>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between text-caption font-label-md">
<span className="text-on-surface-variant">65% Completed</span>
<span className="text-primary font-bold">12 / 18 Units</span>
</div>
<div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-forest-green rounded-full w-[65%] transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(0,104,56,0.3)]"></div>
</div>
</div>
<button className="w-full mt-6 py-3 bg-forest-green text-white font-medium rounded-lg flex justify-center items-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all">
                    Resume Learning
                    <span className="material-symbols-outlined text-[20px]">play_circle</span>
</button>
</div>
</section>
{/*  Next Milestone: Bento Item  */}
<section className="mb-8">
<div className="bg-on-background text-state-white rounded-xl p-5 relative overflow-hidden flex flex-col justify-between min-h-[140px]">
<div className="relative z-10">
<div className="flex items-center gap-2 text-brass-gold font-label-md text-caption uppercase tracking-widest mb-2">
<span className="material-symbols-outlined text-[16px]">military_tech</span>
                        Next Milestone
                    </div>
<h4 className="font-headline-md text-headline-md-mobile">Citizen Dev Badge</h4>
<p className="text-outline-variant text-body-md mt-1">Unlock with 2 more modules.</p>
</div>
<div className="mt-4 flex -space-x-2 relative z-10">
<div className="w-8 h-8 rounded-full border-2 border-on-background bg-slate-gray flex items-center justify-center text-[10px] font-bold">UI</div>
<div className="w-8 h-8 rounded-full border-2 border-on-background bg-primary flex items-center justify-center text-[10px] font-bold">DS</div>
<div className="w-8 h-8 rounded-full border-2 border-on-background bg-secondary flex items-center justify-center text-[10px] font-bold">AI</div>
</div>
<div className="absolute right-0 top-0 w-1/3 h-full opacity-20 pointer-events-none">
<div className="w-full h-full bg-gradient-to-l from-brass-gold to-transparent"></div>
</div>
</div>
</section>
{/*  Browse Courses: Grid  */}
<section className="mb-8">
<div className="flex justify-between items-end mb-4">
<h3 className="font-headline-md text-headline-md-mobile text-slate-gray">Explore Skills</h3>
<a className="text-primary font-label-md text-label-md font-bold flex items-center gap-1" href="#">
                    See All
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
<div className="bento-grid">
{/*  Course Card 1  */}
<div className="bg-surface-container-low border border-outline-variant rounded-xl p-4 flex flex-col h-full">
<div className="w-full h-24 rounded-lg bg-surface-variant mb-3 overflow-hidden">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="A high-tech digital laboratory setting where holographic data charts and neural network patterns float in mid-air above a sleek black desk. The lighting is dominated by professional forest green and cool teal tones, creating a focused, data-driven educational atmosphere. The visual style is clean, corporate, and emphasizes modern governance and technological advancement for the state." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpTsYeWsIPyde4YSWhKQUwmqDq_qmcEz9jZE19LXvbRu8nE53P7_tjpWgxf7dmcZJeWEM6WGxsnt9AvYsPs834Szw9Dwugrud_1e3Pf9eQIh2AlpN9t_99IyM96hFbNFujtXSLTZCFBxFy4iECL3l4cbqbSs0uWSnV5HmLga3hQyUI6kWUIGuTAp8qEic6drY6ZyOiCjwrqiuNgVgwHV2lT_WPObeymYmAItIxvjJf4L-NTOSXs92xSuSCl8r7kThNKhh7l_ikBSY"/>
</div>
<h5 className="font-headline-md text-[16px] leading-tight mb-1">Prompt Eng.</h5>
<p className="font-caption text-caption text-outline">Level 2 • 4h</p>
<div className="mt-auto pt-3">
<span className="text-primary bg-primary/10 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Popular</span>
</div>
</div>
{/*  Course Card 2  */}
<div className="bg-surface-container-low border border-outline-variant rounded-xl p-4 flex flex-col h-full">
<div className="w-full h-24 rounded-lg bg-surface-variant mb-3 overflow-hidden">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="A macro shot of a sophisticated circuit board glowing with golden light pulses, symbolizing the flow of data and artificial intelligence processing. The background is a deep, professional forest green, suggesting stability and state-led innovation. The image conveys high energy and a premium educational experience through soft bokeh and sharp technical details." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-PAeeLSobTky4hld5GeCF7xKMgEIkDSyq9h68eHlMwxIEglqC1kynB9XdbqTQOoXKReD1MTeMRuDUjZDOr_uqx2DcwQDOvjp1t0G1Pv3YEfjHnawZ0LnJK_iTxRz1y6HzX3bkk5z-Lzr4wKmNXQkiTT1K57GcuVADLNwQih82pSvxvl9Pd3c03vQw4dryNPyE2DvNZJ_oxfZUdhAeW5-u6ddeSI5as1DNUvak9a_12uDBsh2BGGlReCDZE1i1YfnlY2cTt8Nad1c"/>
</div>
<h5 className="font-headline-md text-[16px] leading-tight mb-1">Data Ethics</h5>
<p className="font-caption text-caption text-outline">Level 1 • 2h</p>
<div className="mt-auto pt-3">
<span className="text-secondary bg-secondary/10 px-2 py-0.5 rounded text-[10px] font-bold uppercase">New</span>
</div>
</div>
{/*  Course Card 3 (Bento Large)  */}
<div className="bento-item-large bg-surface-container-low border border-outline-variant rounded-xl p-4 flex items-center gap-4">
<div className="w-20 h-20 shrink-0 rounded-lg bg-surface-variant overflow-hidden">
<img className="w-full h-full object-cover" data-alt="An abstract visualization of digital security, featuring a complex web of interconnected lines and locks rendered in a minimalist white and gray palette with brass gold accents. The mood is secure and authoritative, suggesting a robust digital infrastructure. High-key lighting ensures a clean, modern, and trustworthy aesthetic for a state-sponsored cyber security course." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc0e4v4u48dYDVa01NyG8g_XnR7pja-uI214d7PzwGDSlwhb5nTSc8i1gz6nV_sJ6B4uwucwJxdiCKeZujZcYosWNjK7rlZvjtYyL700ipj0C3hWYSNv1yFpZ_wRgffM4lkeFTm55daC3wElCIBaQM37PIxTFHqRywwOCFUj23WNztUngYn6Sl9eCWc7YAHwAVVKhFYR6jcrvSiLyeVMUdv2u8jjBeD__tgElQV864naP0DfGASpn6ZzaiHRza41ZzORZX81bkWhk"/>
</div>
<div className="flex-1">
<h5 className="font-headline-md text-[18px]">Cyber Security for Public Service</h5>
<p className="font-body-md text-caption text-outline">12 Lessons • Advanced Cert.</p>
<div className="mt-2 flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-eagle-red">bolt</span>
<span className="text-[12px] font-label-md text-eagle-red">Priority Track</span>
</div>
</div>
</div>
</div>
</section>
{/*  Categories Scroller  */}
<section className="mb-8 overflow-hidden">
<h3 className="font-label-md text-label-md text-outline uppercase tracking-widest mb-3">Categories</h3>
<div className="flex gap-2 overflow-x-auto custom-scroll-hide pb-2">
<button className="whitespace-nowrap px-4 py-2 bg-primary text-white rounded-full font-label-md text-label-md shadow-sm">All Paths</button>
<button className="whitespace-nowrap px-4 py-2 bg-state-white border border-outline-variant text-on-surface-variant rounded-full font-label-md text-label-md">Public Ops</button>
<button className="whitespace-nowrap px-4 py-2 bg-state-white border border-outline-variant text-on-surface-variant rounded-full font-label-md text-label-md">Dev Tools</button>
<button className="whitespace-nowrap px-4 py-2 bg-state-white border border-outline-variant text-on-surface-variant rounded-full font-label-md text-label-md">Strategy</button>
</div>
</section>
</main>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 w-full z-50 bg-surface dark:bg-surface-container-highest border-t border-outline-variant dark:border-outline shadow-sm flex justify-around items-center px-4 py-2">
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary transition-all duration-200">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-[10px]">Dashboard</span>
</div>
<div className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 transition-all duration-200">
<span className="material-symbols-outlined">notifications_active</span>
<span className="font-label-md text-[10px]">Alerts</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary transition-all duration-200">
<span className="material-symbols-outlined">apps</span>
<span className="font-label-md text-[10px]">Hub</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary transition-all duration-200">
<span className="material-symbols-outlined">person</span>
<span className="font-label-md text-[10px]">Profile</span>
</div>
</nav>


      </div>
    </>
  );
}
