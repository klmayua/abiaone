"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .hide-scrollbar::-webkit-scrollbar { display: none; }\n        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }\n        \n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(4, 1fr);\n            gap: 16px;\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md text-body-md min-h-screen pb-20">
        
{/*  Top App Bar  */}
<header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-margin-mobile h-16 z-50 sticky top-0">
<div className="flex items-center gap-4">
<button className="hover:bg-surface-variant/50 transition-colors p-2 rounded-full active:scale-95 duration-150">
<span className="material-symbols-outlined text-primary">menu</span>
</button>
<h1 className="font-headline-md text-headline-md-mobile font-bold text-primary">Abia One</h1>
</div>
<div className="flex items-center gap-2">
<button className="hover:bg-surface-variant/50 transition-colors p-2 rounded-full active:scale-95 duration-150">
<span className="material-symbols-outlined text-primary">emergency_share</span>
</button>
</div>
</header>
<main className="px-margin-mobile pt-6 space-y-8 max-w-md mx-auto">
{/*  Hero Section: Dynamic Engagement  */}
<section className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="font-headline-md text-headline-md-mobile text-on-surface">Connect Abia</h2>
<span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-label-md text-label-md">LIVE</span>
</div>
<div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-sm border border-outline-variant group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="A cinematic low-angle shot of a vibrant community gathering in a modern, open-air urban space in Abia State. Warm, golden hour sunlight washes over diverse citizens engaged in active conversation, surrounded by lush green tropical plants and sleek glass architectural elements. The atmosphere is optimistic and professional, with a clean color palette of forest green and soft cream. Professional corporate photography style, emphasizing civil unity and progress." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAh4STtZSgcg9hlexcKCcsip8HTg9bAUjR3P6FPlNKzyAkzXlEuHBZajbeyhHYfCYdsVlO-zWnZ8ylnQvpSTMkXKYPZeeNqE7qhSYmGNP0wWAU7rYIEUCFfU_lb77wKbRyDltsbDbQbgq-rPIzHbrRkIvj0C-Grmfh66MjiR_Mv1OsRTXnNByKJumIJThvYWakTicsGMvRary8zOdC_x-5BSUX-sR2jfLfxKMf11OhBQWmq3Vi0AvcqAnFsCJfpxdL2pZUJEQHktk"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-4">
<p className="font-label-md text-label-md text-white/80 uppercase tracking-widest">Town Hall</p>
<h3 className="font-headline-md text-headline-md-mobile text-white">Infrastructure Update: Umuahia 2025</h3>
<button className="mt-3 w-max bg-brass-gold text-on-background font-label-md text-label-md px-6 py-2 rounded-lg font-medium active:scale-95 transition-all">
                        Join Stream
                    </button>
</div>
</div>
</section>
{/*  Digital Town Hall: Upcoming Events  */}
<section className="space-y-4">
<div className="flex items-center justify-between">
<h2 className="font-headline-md text-headline-md-mobile text-on-surface">Town Hall Schedule</h2>
<button className="text-primary font-label-md text-label-md flex items-center gap-1">
                    See All <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
<div className="min-w-[280px] bg-white border border-outline-variant rounded-xl p-4 flex flex-col gap-3">
<div className="flex justify-between items-start">
<div className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded font-label-md text-xs">
                            MAY 12
                        </div>
<span className="material-symbols-outlined text-outline">calendar_today</span>
</div>
<h4 className="font-headline-md text-body-lg font-semibold">Agro-Innovation Forum</h4>
<p className="text-on-surface-variant font-body-md text-sm">Discussing the 2025 Farmer Support Program with the Commissioner.</p>
<div className="flex -space-x-2 mt-2">
<img className="w-8 h-8 rounded-full border-2 border-white" data-alt="Close-up headshot of a professional African man smiling warmly, representing an official government representative in a modern Abia State portal. The lighting is soft and studio-quality, with a background consisting of a blurred corporate office setting. The aesthetic is clean, professional, and trustworthy, using subtle green accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuANMEY91nNWrpo_2b4388cPwNrMzqMwt1kic6A0v_W3Yzh_c0jCl7zox1o0O9SC1OkxdsURkX01Ui3tZBhB-byhLaM5I1DkVRdoy1avoFpJ6bPB53ORZumcZhtWEsDcuPyoI6EzZ6VSwezhiABsdNChxGK3k_oq6tmOjF8mHNTnjxWNM4B-uGWUCOkn_IEnR3gff10brM2j7XjkPEq0CVfxqnaFHqHf1E_zZx8tajnf_sJGppzXupG76r_VTgJ_Ub8bYHuBxVYP3Ig"/>
<img className="w-8 h-8 rounded-full border-2 border-white" data-alt="Close-up headshot of a professional African woman with a confident expression, representing a technical expert in the Abia One ecosystem. High-key lighting highlights her features against a minimalist, white-walled architectural background. The overall style is modern governance, focusing on reliability and human-centric design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbYsjxauFfvBPjLHj3OdVcPgUqS8fDz-qNRfwffGCULHsXctXY8u0wij-3yrobW3CNFK9wy6lJFq7z69wi3Parm1L0-WCKU4Ts_GckwyjfSVCNykJ7o1NbOtG0pnYZJugd3LsdMogfvZy1LwqiumcrReNJMZVYV5ipapocZmfivOXvGp9-nLHFQvCJpTzUCZQfgHPZtqpA5Bpl181h-ByRD1FitY05x88kc3GKD0DRgwH_7Z-kLQESzG19i9kWAXXzaWKBwdp4Yt0"/>
<div className="w-8 h-8 rounded-full border-2 border-white bg-surface-variant flex items-center justify-center font-label-md text-[10px] text-on-surface-variant">
                            +4k
                        </div>
</div>
</div>
<div className="min-w-[280px] bg-white border border-outline-variant rounded-xl p-4 flex flex-col gap-3">
<div className="flex justify-between items-start">
<div className="bg-surface-variant text-on-surface-variant px-2 py-1 rounded font-label-md text-xs">
                            MAY 15
                        </div>
<span className="material-symbols-outlined text-outline">video_call</span>
</div>
<h4 className="font-headline-md text-body-lg font-semibold">SME Grant Q&amp;A</h4>
<p className="text-on-surface-variant font-body-md text-sm">Live walkthrough of the application process for trade grants.</p>
<div className="flex items-center gap-2 mt-2">
<span className="material-symbols-outlined text-primary text-sm">notifications</span>
<span className="text-primary font-label-md text-xs">Reminder set</span>
</div>
</div>
</div>
</section>
{/*  Voice Your Opinion: Surveys  */}
<section className="bg-primary rounded-2xl p-6 text-white space-y-6 relative overflow-hidden">

<div className="relative z-10">
<h2 className="font-headline-md text-headline-md-mobile">Voice Your Opinion</h2>
<p className="text-on-primary-container text-body-md mt-2">Help shape the future of Abia. Your feedback directly impacts policy decisions.</p>
</div>
<div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 relative z-10 space-y-4">
<div className="flex justify-between items-center">
<span className="font-label-md text-xs uppercase tracking-tighter opacity-80 text-white">Active Survey</span>
<span className="bg-brass-gold text-on-background px-2 py-0.5 rounded text-[10px] font-bold">TOPICAL</span>
</div>
<h4 className="font-headline-md text-body-lg font-medium leading-tight">Public Transport Expansion: Route Preferences</h4>
<div className="space-y-3 pt-2">
<button className="w-full text-left bg-white/5 border border-white/20 hover:bg-white/10 p-3 rounded-lg flex items-center justify-between transition-colors group">
<span className="font-body-md">Expand Aba-Port Harcourt Link</span>
<span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">check_circle</span>
</button>
<button className="w-full text-left bg-white/5 border border-white/20 hover:bg-white/10 p-3 rounded-lg flex items-center justify-between transition-colors group">
<span className="font-body-md">New Umuahia City Shuttles</span>
<span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">check_circle</span>
</button>
</div>
</div>
</section>
{/*  State News Feed  */}
<section className="space-y-4 pb-8">
<h2 className="font-headline-md text-headline-md-mobile text-on-surface">State News</h2>
{/*  Feed Item 1  */}
<article className="bg-white rounded-xl border border-outline-variant overflow-hidden">
<img className="w-full h-48 object-cover" data-alt="A professional aerial view of a newly constructed modern solar power plant in a lush green landscape in Abia State. Rows of dark blue solar panels reflect the clear sky, symbolizing technological advancement and clean energy initiatives. The lighting is bright and optimistic, with a clean, high-contrast finish that aligns with modern corporate governance aesthetic. Dominant colors are forest green and deep tech-blue." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBK_Gzt5_ZsxuL5-HjGGPwTnOL0oWZ_p_dfTBH2_jWVsJw0MWMtRGZ2eyJ6VEdF-86VJod0tbr7242V78DLIRN4bYGJzHjUG9_VJGxCH2wpEKl0va_BY7-Uf77AEJoUDjcZiHWddgj71gVdFwztukmeWoyGYBNF1i9om4u7qnDhZn9R95_Dd9JZ0EvJZ_06fl-yYRTqZ_CIItmPfiNr9v1VNcZiZ_5U46yUMO-0x2tbdg4z0qQYtKsN-7n6rVsUz_8T17THP7PyWKA"/>
<div className="p-4 space-y-2">
<div className="flex items-center gap-2 text-outline font-label-md text-xs">
<span className="material-symbols-outlined text-sm">description</span>
<span>Official Bulletin</span>
<span>•</span>
<span>2h ago</span>
</div>
<h3 className="font-headline-md text-body-lg font-bold">New Clean Energy Initiative Launched for Industrial Clusters</h3>
<p className="text-on-surface-variant font-body-md text-sm line-clamp-2">The state government today announced a partnership with private investors to provide 24/7 power to major manufacturing zones...</p>
<div className="flex items-center justify-between pt-4">
<div className="flex items-center gap-4 text-outline">
<button className="flex items-center gap-1 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">thumb_up</span>
<span className="font-label-md text-xs">842</span>
</button>
<button className="flex items-center gap-1 hover:text-primary transition-colors">
<span className="material-symbols-outlined text-lg">chat_bubble</span>
<span className="font-label-md text-xs">124</span>
</button>
</div>
<button className="material-symbols-outlined text-outline">share</button>
</div>
</div>
</article>
{/*  Feed Item 2  */}
<article className="bg-white rounded-xl border border-outline-variant p-4 flex gap-4">
<div className="flex-1 space-y-2">
<div className="flex items-center gap-2 text-outline font-label-md text-xs">
<span className="material-symbols-outlined text-sm">event</span>
<span>Jobs Portal Update</span>
</div>
<h3 className="font-headline-md text-body-md font-bold leading-snug">Governor Inspects Ongoing Digital Skills Training at Innovation Hub</h3>
<div className="flex items-center gap-3 text-outline pt-2">
<span className="material-symbols-outlined text-lg">favorite</span>
<span className="material-symbols-outlined text-lg">share</span>
</div>
</div>
<div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="A focused close-up of young Nigerian students working on high-end laptops in a bright, modern technology hub. The interior design is sleek with minimalist furniture and vibrant green wall accents. Soft, natural daylight pours in through large windows, creating a productive and professional atmosphere. The image emphasizes innovation, education, and digital transformation within Abia State." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBityRApugxm9FcJvE_VxwpdoLMj0dBkJtR2b9PBQAIQykHwY5mT6FDnOKZdjiT3_Ml7d5rUuwCEj8C0T7UjGgsv1R_UdP87BJjY1uhu9d_lMu3-o5DYCDFLVpUepgdqfVArj06yjHBNje6xyESZuSCa9pjkJmkort5mTG_UszFJmAYghugBzxfG1bf0psvMU4og2B3T7XXRtcoTCG-llajlth39VcogXfDxuweBdMR0-V_yeMcQ2mmRcQSixvqNa_FMHs0j0QdBCs"/>
</div>
</article>
</section>
</main>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface border-t border-outline-variant shadow-sm rounded-t-full">
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-all duration-200 ease-in-out" href="/home-mobile">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-[10px]">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">notifications_active</span>
<span className="font-label-md text-[10px]">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">apps</span>
<span className="font-label-md text-[10px]">Hub</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-md text-[10px]">Profile</span>
</a>
</nav>
{/*  Floating Action Button: Contextual for Hub/Engagement  */}
<button className="fixed right-6 bottom-24 w-14 h-14 bg-forest-green text-white rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform z-40">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>add</span>
</button>


      </div>
    </>
  );
}
