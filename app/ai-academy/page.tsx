"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .course-card-hover {\n            transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n        }\n        .course-card-hover:hover {\n            transform: translateY(-4px);\n            box-shadow: 0 4px 20px -4px rgba(0, 104, 56, 0.1);\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-accent {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(8px);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
        
{/*  Top Navigation Bar  */}
<header className="fixed top-0 w-full z-50 bg-background border-b border-outline-variant">
<nav className="flex justify-between items-center px-margin-desktop h-20 max-w-max-width mx-auto">
<div className="flex items-center gap-4">
<span className="font-display-lg text-headline-md font-bold text-primary">ABIA ONE</span>
<div className="hidden md:flex items-center gap-8 ml-12">
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Economy</a>
<a className="text-primary border-b-2 border-brass-gold font-semibold pb-1 cursor-pointer" href="#">Digital Gov</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Governance</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Security</a>
</div>
</div>
<div className="flex items-center gap-6">
<div className="relative hidden lg:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container border border-outline-variant rounded-lg text-body-md focus:outline-none focus:ring-1 focus:ring-forest-green w-64" placeholder="Search courses..." type="text" />
</div>
<button className="bg-forest-green text-state-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-all active:scale-95">
                    Citizen Portal
                </button>
</div>
</nav>
</header>
<div className="flex flex-1 pt-20">
{/*  Sidebar Navigation  */}
<aside className="hidden md:flex flex-col fixed left-0 top-20 h-[calc(100vh-80px)] w-64 bg-surface-container-low border-r border-outline-variant py-6">
<div className="px-6 mb-8">
<h2 className="font-headline-md text-headline-md font-bold text-primary">Navigation</h2>
<p className="font-body-md text-on-surface-variant opacity-70">State Operating System</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-body-md">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-forest-green font-bold border-l-4 border-brass-gold bg-surface-container-high" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-body-md">Digital Government</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined">gavel</span>
<span className="font-body-md">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 px-6 py-3 text-on-surface-variant hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined">verified_user</span>
<span className="font-body-md">Public Trust</span>
</a>
</nav>
<div className="px-6 mt-auto border-t border-outline-variant pt-6">
<button className="w-full bg-brass-gold/10 text-secondary border border-brass-gold py-2 rounded-lg font-medium hover:bg-brass-gold/20 transition-all mb-4">
                    Launch Service
                </button>
<div className="space-y-2">
<a className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors py-1" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-body-md">Settings</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors py-1" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-body-md">Support</span>
</a>
</div>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 md:ml-64 p-6 md:p-10 lg:p-12 max-w-[1200px] mx-auto">
{/*  Hero Header Section  */}
<section className="mb-12 relative overflow-hidden rounded-xl bg-primary-container p-8 md:p-12 text-state-white">
<div className="absolute inset-0 opacity-10">

</div>
<div className="relative z-10 max-w-2xl">
<span className="inline-block px-3 py-1 rounded bg-brass-gold text-on-secondary-fixed font-label-md text-label-md mb-4 uppercase">Enrollment Open</span>
<h1 className="font-display-lg text-headline-lg md:text-display-lg font-bold mb-4">Abia AI Academy</h1>
<p className="font-body-lg text-body-lg mb-8 opacity-90">Building the sovereign digital workforce of the future. Master artificial intelligence to serve the next generation of Abia State.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-state-white text-forest-green px-8 py-3 rounded font-bold hover:bg-surface-bright transition-colors">View All Courses</button>
<div className="flex -space-x-2">
<img alt="Student" className="w-10 h-10 rounded-full border-2 border-primary-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHQnmfWV-QOlLwWHTuLWVFpQw3BY2nXSXHEZvIhoRErb_mDZlDJL_DIpadX-8LIOy0OBgesQqrWimAuRz1kJHb5I-VkD0E7GFz4PAPey3efHwos_O8bd39pghcW4107ppcSjpImujvcd8scUaPE6PTJNV0dnFd4zSnxLpEOm1t9Kl1J7A7EkH49gCMALpqdhVtn-YuyN9Bq26jGtYTQEvLGqYj2ue1FWiQNv-Of4oPzyJ9qNkWN64edZt0MGXuQtg5SOP7VifZxAc" />
<img alt="Student" className="w-10 h-10 rounded-full border-2 border-primary-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA35l5tnz38K5YfRtflO64ZfH1sHkuXINu9tyl80zfoUrsSBihwWgqVoB39aF6lB5HmjtxgBUNF5p1DP9aQtYkH5rLUkwBZjBZk4tEyYgca95RLzvjIHIlcxeBe1CvO2DPPgmS0AiYj7i2PaLU_uycjGaXzmBe3bua46xwGJdB1Ucj8qB0usLIxEUeYZOz_46wyM0TuUxPEPywg2G-EHabM7jiS2tc96ne5OrX_ZO04VU60affWaQMkWqMomVryZudxDO1xvF9fBwg" />
<img alt="Student" className="w-10 h-10 rounded-full border-2 border-primary-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF0vfX8GFOT_oTABbWThRX8Fi1NhqfOnCKwz-FpVGcF-TgvvEr3GVU25bVsC-Gx-7JHFvoQsPYKFrGH332KZk4mRL0Hly7lkfd4vkOIqWlIn8pHm5k4dDibO6l06ZzdZ2Fg8cgPeZlLA8ybWOGHKmGa_Mfs_frzRnG0I-NCG6inNRi6R6jY9yRXE2JrGraC7680L07fJLfpPqlWrdwpWnPhKOCe-hRD5zPx0QT7JxeM483-25hYX93-YLxzHRF9JkiH7aRPDCvuw8" />
<div className="w-10 h-10 rounded-full border-2 border-primary-container bg-brass-gold flex items-center justify-center text-xs font-bold">+2k</div>
</div>
</div>
</div>
</section>
{/*  Stats & Partners Bar  */}
<section className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg">
<p className="text-caption font-caption text-on-surface-variant uppercase tracking-wider mb-1">Total Enrolled</p>
<p className="text-headline-md font-bold text-forest-green">14,280+</p>
</div>
<div className="bg-surface-container-low border border-outline-variant p-6 rounded-lg">
<p className="text-caption font-caption text-on-surface-variant uppercase tracking-wider mb-1">Completion Rate</p>
<p className="text-headline-md font-bold text-forest-green">87.4%</p>
</div>
<div className="md:col-span-2 bg-surface-container p-6 rounded-lg flex items-center justify-around border border-outline-variant">
<span className="text-caption font-caption font-bold text-on-surface-variant">PARTNERS:</span>
<img alt="University Logo" className="h-8 opacity-70 grayscale hover:grayscale-0 transition-all" data-alt="A clean, professional logo for a prestigious university technology department, featuring a stylized crest and modern sans-serif typography. The design is rendered in a deep forest green and gold palette to align with official Abia State branding, suggesting an atmosphere of academic excellence and institutional trust." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjan9oKUJbAwlQObLNsvdtcq34lQrYosGBOP2vMX_HfLM4eVxH110nGlkDRAsfrzkLQMkXynGCwRHmgvIFS2FvmxjRHB_i_Tbrz1do1CsaRyhdHpunnfCJ7ZAuh2tcdt3celv5l0rwduKV2ykPX__Npk5tF1oXTia93V4GwFUsMY1a7-gNnr4Ro6yz_a0SoxaK9fLfmcY8gjWDzxacCTCdnMhhykNV2fHWAG2cplR5oQyxGkZ9lRs80LUpduQGLEfxOUbC_flOXWI" />
<img alt="Tech Industry Logo" className="h-8 opacity-70 grayscale hover:grayscale-0 transition-all" data-alt="A sleek, minimalist corporate logo for a modern technology firm named Digital Abia. The logo features a geometric icon representing connectivity and data flow, using a high-contrast palette of slate gray and brass gold. The lighting is crisp and the overall aesthetic is professional, data-driven, and forward-thinking." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNAIy95O8V6t6nQgCmXkdvNW6ebyY1qHHRz-nI2FAXpCk85djNttEfv2oKtKQymmFMweVj7Dj1s1K8Ve6rQg4DzD5k9yV7niJjl3b884LSWghUUOkMlLYvB78dIwerGI8V3os55X4RhxIJ3lC2HEqNhnmVGVEDgs9yG9foDpfHGDQrslIPQ5kXFumlpH9beGFvrXVQsE7el3G2nuZI-IHZ3T3Wx41vkQ-aUNH7CADCFuWvqytC2UTA5ifPGf4LjGidFLB_jwHpmws" />
<img alt="Partner Logo" className="h-8 opacity-70 grayscale hover:grayscale-0 transition-all" data-alt="A sophisticated logo for an international GovTech organization. The visual style is corporate and authoritative, utilizing a balanced arrangement of an abstract globe icon and bold professional typography. The color scheme features deep emerald green and soft cream, evoking stability and global technological leadership." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8327_ubRqNjb4c-NPoDgEl4mlQ9z_anxQblb7tZLuFk3RKA7YKF-HpsqHrkHJzO1CwZkz-9iyWerRo8MUq6g8oVcp6dvTE0RBPGFDiFvRRHn3guI9651DMBmaD-MAiQqYJYtN4An4gVgrrLDmn83Nz73F1Y2tv3OxbtDAhd2pYXoQwp17OpumG080upsIiEBndzfyJBykYFscIubiN4hhwX1UTFLTSHASQBbhXXhZ9yXB4xQ_2zqmG7RMqDo3I-pORzmtGQ3etqc" />
</div>
</section>
{/*  Filter & Category Section  */}
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<h3 className="text-headline-md font-bold text-primary">Available Digital Skills Courses</h3>
<div className="flex gap-2">
<button className="px-4 py-1.5 rounded-full bg-forest-green text-state-white text-caption font-bold">All</button>
<button className="px-4 py-1.5 rounded-full border border-outline-variant hover:bg-surface-variant text-caption font-bold transition-colors">Foundation</button>
<button className="px-4 py-1.5 rounded-full border border-outline-variant hover:bg-surface-variant text-caption font-bold transition-colors">Specialist</button>
<button className="px-4 py-1.5 rounded-full border border-outline-variant hover:bg-surface-variant text-caption font-bold transition-colors">Advanced</button>
</div>
</div>
{/*  Course Grid (Bento Style Variation)  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/*  Card 1: AI Foundations  */}
<div className="course-card-hover bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col group">
<div className="h-48 relative overflow-hidden bg-surface-variant">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A high-quality close-up photograph of a sleek, modern laptop screen displaying complex neural network visualizations. The lighting is a mix of soft studio light and cool blue screen glow. The setting is a minimalist, modern office in Abia State with warm wooden textures and brass accents in the background, creating a professional yet innovative educational atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmq7nx6aJaIlx7HdNmPHMfqwU-yBXO6gFSzGVole12U7mptzpQWiBdO26DzKxmrT0kOfkGBrljqzHjkT5H9yrGHIOjup-h7WLPLVBX_TO53gy9q2T_AHUNn_3vGTgRn1oZ46T6piFog6-y4eoRPYZZqnAhXTWtJjPesbY4SUewRZN7i2A3MpPDOvUhzzPiE27ltUxQfg-5hdFJVMKbAGf81YHynFdl4MyhmJ3gavNpPT_cYzYVwLhiqT7ETAj3PLM867K7BBZ1QDY" />
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-forest-green text-state-white font-label-md text-[10px] uppercase rounded">Foundational</span>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<h4 className="font-headline-md text-body-lg font-bold text-primary">AI Foundations</h4>
<span className="material-symbols-outlined text-brass-gold" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
</div>
<p className="text-on-surface-variant font-body-md text-sm mb-6 line-clamp-2">Master the core principles of neural networks, machine learning, and generative AI for administrative efficiency.</p>
<div className="mt-auto space-y-4">
<div className="flex items-center justify-between text-caption font-caption">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">groups</span> 4,500 Enrolled</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> Oct 12 Cohort</span>
</div>
<button className="w-full py-2 border border-forest-green text-forest-green font-bold rounded hover:bg-forest-green hover:text-state-white transition-all">Enroll Now</button>
</div>
</div>
</div>
{/*  Card 2: GovTech Specialist  */}
<div className="course-card-hover bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col group md:col-span-2 lg:col-span-1">
<div className="h-48 relative overflow-hidden bg-surface-variant">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A professional architectural shot of a futuristic government data center hallway, illuminated by rhythmic green LED lighting strips along the walls. The perspective is symmetrical and deep, suggesting scale and security. The aesthetic is clean and corporate, utilizing a color palette of deep charcoal and forest green, representing Abia State's digital sovereign infrastructure." src="https://lh3.googleusercontent.com/aida-public/AB6AXuApptDGY3gQKxOTD31IjXiwKpwWWzeAgVapx9O5Z04kK3S3OPIz3Qx9nOAKxaXShB-MOrnDJYfz9rg2wchAsezp0QYqoNoh0yXKa3bVC-qD0wr2fCyOgtG-ch1QPZe_UsxoKvOZPACAZpxyqzNCxLlPx5oyeCRzzUY6Go7SLF66IGe5YJHmSkR1DF7B4if3_8NMPt1e1FAClIQoY3i6memDjE2CQhHV8b6SS750Mci83QIQSWlY224KTZifvQD-wzOH70WL19WfeEg" />
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-tertiary text-state-white font-label-md text-[10px] uppercase rounded">Specialist</span>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<h4 className="font-headline-md text-body-lg font-bold text-primary">GovTech Specialist</h4>
<span className="material-symbols-outlined text-brass-gold" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
</div>
<p className="text-on-surface-variant font-body-md text-sm mb-6 line-clamp-2">Advanced systems integration and automated governance tools designed specifically for state-level operations.</p>
<div className="mt-auto space-y-4">
<div className="flex items-center justify-between text-caption font-caption">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">groups</span> 1,200 Enrolled</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> Nov 05 Cohort</span>
</div>
<button className="w-full py-2 bg-forest-green text-state-white font-bold rounded hover:opacity-90 transition-all">Enroll Now</button>
</div>
</div>
</div>
{/*  Card 3: Data Analytics  */}
<div className="course-card-hover bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col group">
<div className="h-48 relative overflow-hidden bg-surface-variant">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A stunning data visualization dashboard projected on a glass wall in a bright, modern Abia State research hub. Vibrant charts and graphs in shades of ochre and teal represent economic indicators. The lighting is airy and natural, with soft shadows and high-key brightness, creating an atmosphere of transparency, intelligence, and professional rigor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzQo3Un8bV9hTM2m36TvGBZ7M2rQk6m_9a7GzSnUIrp6jzfn5i6Dr4Pxkk-N0bV_JXabbB-r8C6o5GzS6f6aEmFDh2F1TMzxOakWUsmc2NNWCi9TDBDCMp0_E0brMrJ37sj_b7SvSvBzdFXHa-NpzoVeXdj3v8-xRB2dsw81eeRqMazjJbUYnFHG4LmjkMee_siRqDLd25hR5UlqIHfSaeXGVe4TIcpIzg_Vt3MoBhK04AMcjel_5Yoqkoug5TjXzYgpNeBkFaSZk" />
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-secondary text-state-white font-label-md text-[10px] uppercase rounded">Intermediate</span>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h4 className="font-headline-md text-body-lg font-bold text-primary mb-2">Public Sector Analytics</h4>
<p className="text-on-surface-variant font-body-md text-sm mb-6 line-clamp-2">Learn to interpret large-scale citizen data to drive evidence-based policy making and resource allocation.</p>
<div className="mt-auto space-y-4">
<div className="flex items-center justify-between text-caption font-caption">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">groups</span> 2,800 Enrolled</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> Oct 30 Cohort</span>
</div>
<button className="w-full py-2 border border-forest-green text-forest-green font-bold rounded hover:bg-forest-green hover:text-state-white transition-all">Enroll Now</button>
</div>
</div>
</div>
{/*  Card 4: Cybersecurity for Gov  */}
<div className="course-card-hover bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col group">
<div className="h-48 relative overflow-hidden bg-surface-variant">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="An artistic representation of digital security featuring glowing circuit patterns resembling a shield. The background is a deep, professional navy blue with sharp green highlights that match the forest-green brand color. The lighting is dramatic and focused, highlighting the precision and technological sophistication required for state-level cybersecurity in Abia." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFeR7bvwAoEWH79iWeQPcgG8MPQtuR9d6-IVlIM4KfpSTJl71WyWz499NBFEGTHnD235hw5DWWVFOghc-LnPZQ5p4va03keJ1MWTyMgYloNOLMJE6eNE8fhkApJoeSBBF25z5i-SgNLhRdroPr5s57ddXxiKZtftb2oTLBvf6WNPGqjuTciHlSQ5aFo2qBB-rRi57XWKujV0cZwcmu3lj5z7ynAOPjqszzJTAKb8w4zl7IQtroOm5O1nvBnrV_4gK4hUxOQms9yzM" />
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-tertiary text-state-white font-label-md text-[10px] uppercase rounded">Critical</span>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h4 className="font-headline-md text-body-lg font-bold text-primary mb-2">Cyber Defenses</h4>
<p className="text-on-surface-variant font-body-md text-sm mb-6 line-clamp-2">Securing state digital assets and citizen privacy against sophisticated cyber threats and data breaches.</p>
<div className="mt-auto space-y-4">
<div className="flex items-center justify-between text-caption font-caption">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">groups</span> 940 Enrolled</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> Dec 01 Cohort</span>
</div>
<button className="w-full py-2 border border-forest-green text-forest-green font-bold rounded hover:bg-forest-green hover:text-state-white transition-all">Enroll Now</button>
</div>
</div>
</div>
{/*  Card 5: Digital Ethics  */}
<div className="course-card-hover bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col group">
<div className="h-48 relative overflow-hidden bg-surface-variant">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A thoughtful, professional scene depicting a group of diverse African officials in a sunlit, modern boardroom engaging in a collaborative discussion. The room features high-end minimalist design with brass details and large windows showing a lush, green urban landscape. The mood is calm, intellectual, and focused on responsible digital ethics for future governance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUBcuHsnkwDhQVPFcFKEYCMJuDlISMC8zxSY9gPi9kc1fIyUDMzybwkPq4M7f2DYKOU9eT4vzF7Ou2DaZONtuDfhVxu2fILeQdG5Hwak_6wZTjky4GGjXnok6ZnDLcUpOQEiqLGJJQlrjSBjD9SuuYHTf163K01yfecMi1GJK5ql4eIM-2-2WDtU1_e0XHI4BObRxC861bx44U1agnTw-sUEIa_MIEuSrfZuiv9pnqVpHUeal3wcW5llz85CFI0IdWLdpveIL36wo" />
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-outline text-state-white font-label-md text-[10px] uppercase rounded">Essential</span>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h4 className="font-headline-md text-body-lg font-bold text-primary mb-2">Ethics &amp; Compliance</h4>
<p className="text-on-surface-variant font-body-md text-sm mb-6 line-clamp-2">Frameworks for ethical AI deployment, bias mitigation, and transparent algorithmic decision-making.</p>
<div className="mt-auto space-y-4">
<div className="flex items-center justify-between text-caption font-caption">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">groups</span> 3,100 Enrolled</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> Oct 12 Cohort</span>
</div>
<button className="w-full py-2 border border-forest-green text-forest-green font-bold rounded hover:bg-forest-green hover:text-state-white transition-all">Enroll Now</button>
</div>
</div>
</div>
{/*  Card 6: Prompt Engineering for Civil Servants  */}
<div className="course-card-hover bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden flex flex-col group">
<div className="h-48 relative overflow-hidden bg-surface-variant">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A clean, minimalist workspace featuring a tablet and a digital stylus, with floating holographic text bubbles representing AI-citizen interactions. The color palette is light and airy, with slate gray and soft emerald green tones. The setting is bright and optimistic, emphasizing how human-AI collaboration can enhance the efficiency of state services in Abia." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuplsTT4nCFnTyY7VEAyxxP04Ut-3xwj67JDLh4WkWi7gcfcXgzEcsWJnY7VUDqVADEVUswNHvDqgCJjrr2d-K-YvjRU70AaxTo0YrK82mQW1wDee25QdEKDjZKokJDtFySuPdworU0ixTpWyYH7XwjEziALJqqdl-7zBOnD3kfYBR5cZGYoWkrrahO71eeKXeM9bQxqvW6ZQlNitXzAc0jHdumhKxFHX6jJFV9QlrQuWFIotfPd0qBXs2RmB1B63YeedTGchqIrM" />
<div className="absolute top-4 left-4">
<span className="px-2 py-1 bg-forest-green text-state-white font-label-md text-[10px] uppercase rounded">Popular</span>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h4 className="font-headline-md text-body-lg font-bold text-primary mb-2">AI Workflow Optimization</h4>
<p className="text-on-surface-variant font-body-md text-sm mb-6 line-clamp-2">Practical prompt engineering to automate documentation, report generation, and citizen inquiries.</p>
<div className="mt-auto space-y-4">
<div className="flex items-center justify-between text-caption font-caption">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">groups</span> 6,700 Enrolled</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> Ongoing</span>
</div>
<button className="w-full py-2 border border-forest-green text-forest-green font-bold rounded hover:bg-forest-green hover:text-state-white transition-all">Enroll Now</button>
</div>
</div>
</div>
</div>
{/*  Floating CTA for Help/Chat  */}
<div className="fixed bottom-10 right-10 z-50">
<button className="bg-forest-green text-state-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">
<span className="material-symbols-outlined">chat_bubble</span>
</button>
</div>
</main>
</div>
{/*  Global Footer  */}
<footer className="bg-surface-container-highest border-t border-outline-variant mt-20">
<div className="flex flex-col md:flex-row justify-between items-center py-gutter px-margin-desktop max-w-max-width mx-auto">
<div className="mb-6 md:mb-0">
<span className="font-headline-md text-headline-md text-primary font-bold">ABIA ONE</span>
<p className="font-caption text-caption text-on-surface-variant mt-2">© 2024 Abia State Government. All rights reserved. Built for the future of governance.</p>
</div>
<div className="flex flex-wrap justify-center gap-8">
<a className="text-on-surface-variant font-caption text-caption hover:text-primary transition-all underline-offset-4" href="#">Institutional Links</a>
<a className="text-on-surface-variant font-caption text-caption hover:text-primary transition-all underline-offset-4" href="#">Transparency Info</a>
<a className="text-on-surface-variant font-caption text-caption hover:text-primary transition-all underline-offset-4" href="#">Privacy Policy</a>
<a className="text-on-surface-variant font-caption text-caption hover:text-primary transition-all underline-offset-4" href="#">Contact Support</a>
</div>
</div>
</footer>


      </div>
    </>
  );
}
