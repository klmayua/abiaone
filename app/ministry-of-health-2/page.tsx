export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }\n        .card-accent-gold {\n            border-top: 3px solid #D4AF37;\n        }\n        body {\n            font-family: 'Hanken Grotesk', sans-serif;\n        }\n        h1, h2, h3, h4 {\n            font-family: 'Montserrat', sans-serif;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface flex flex-col min-h-screen">
        
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-16 h-16 max-w-full mx-auto bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-2">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep">ABIA ONE</span>
<div className="hidden md:block h-6 w-px bg-outline-variant mx-4"></div>
<span className="hidden md:block font-label-caps text-sm tracking-widest text-primary font-bold">HEALTH PORTAL</span>
</div>
<nav className="hidden lg:flex gap-8 items-center">
<a className="font-label-caps text-sm text-primary border-b-2 border-brass-gold pb-1 transition-all duration-200" href="#">Economy</a>
<a className="font-label-caps text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Digital Gov</a>
<a className="font-label-caps text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Governance</a>
<a className="font-label-caps text-sm text-on-surface-variant hover:text-primary transition-colors" href="#">Security</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 px-4 py-2 border border-eagle-red text-eagle-red rounded-lg font-medium hover:bg-eagle-red/5 transition-all">
<span className="material-symbols-outlined" style={{"fontSize":"18px"}}>emergency</span>
                Emergency
            </button>
<button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all shadow-sm">
                Citizen Portal
            </button>
</div>
</header>
<main className="flex-grow pt-16">
{/*  Hero Section  */}
<section className="relative w-full min-h-[716px] flex items-center overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
<div className="container mx-auto px-6 md:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full mb-6">
<span className="material-symbols-outlined" style={{"fontSize":"16px"}}>verified</span>
<span className="text-xs font-bold tracking-widest uppercase">Verified State Service</span>
</div>
<h1 className="font-display-lg text-4xl md:text-6xl font-extrabold text-primary leading-tight mb-6">
                        ABIA Care: <span className="text-forest-green">Healthcare for All</span>
</h1>
<p className="font-body-lg text-slate-gray mb-8 max-w-lg">
                        Providing every citizen of Abia State with accessible, transparent, and modern healthcare infrastructure. Your health, our priority.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-primary text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-lg">
<span className="material-symbols-outlined">location_on</span>
                            Find Your Nearest PHC
                        </button>
<button className="border-2 border-brass-gold text-primary px-8 py-4 rounded-lg font-bold hover:bg-brass-gold/5 transition-all">
                            Learn About ASCHIA
                        </button>
</div>
</div>
<div className="hidden lg:block">
<div className="relative">
<div className="absolute -inset-4 bg-brass-gold/10 rounded-full blur-3xl"></div>
<img alt="Healthcare services in Abia" className="rounded-xl shadow-2xl relative z-10 border border-white/50" data-alt="A professional medical environment featuring a compassionate healthcare worker in a clean, modern clinic setting. The lighting is bright and airy, reflecting a light-mode aesthetic with soft greens and gold accents. The atmosphere is trustworthy and professional, showing advanced medical equipment and a focus on patient care within the Abia State governance ecosystem." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcll2mj1wXSwwWLaITsG1X0H6s0P37gw5XuPt2YsZxec1sfX6OspbA1iDkrM27kruPxhGUdv2Mmj5fjJyB6oYC79JjUzVvGp0dQFqASy_KoSG-DPemYRPAD9NsZ9EyOwTLoAxM3DFeRbRr8ipm8lrwTNpvTJbJCZx4TOUZ-DsAHBMi9_Vk6hHdh2E7F6Ci3NCV_qY6U8e5pqECB6zihB8_6gvQHSrZvJmNh7G6uypMdy9RHlqiDdvGpzuQ37lwfhUy930q9VCxqOM" />
</div>
</div>
</div>
</section>
{/*  Bento Services Grid  */}
<section className="py-20 bg-surface-container-low">
<div className="container mx-auto px-6 md:px-16">
<div className="mb-12 text-center max-w-3xl mx-auto">
<h2 className="font-headline-lg text-3xl text-primary font-bold mb-4">Digital Health Ecosystem</h2>
<p className="text-slate-gray">Integrated tools designed for modern governance and transparent healthcare delivery.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Health Verification Tool  */}
<div className="md:col-span-8 glass-card rounded-xl p-8 card-accent-gold shadow-sm flex flex-col md:flex-row gap-8 items-center">
<div className="flex-grow">
<h3 className="font-headline-md text-2xl text-primary mb-3">Health Verification</h3>
<p className="text-slate-gray mb-6">Verify your Abia State Health Insurance Agency (ASCHIA) status or check medical practitioner credentials instantly.</p>
<div className="flex flex-wrap gap-4">
<input className="flex-grow max-w-xs border-outline-variant rounded-lg focus:ring-primary focus:border-primary" placeholder="Enter Enrollment ID" type="text" />
<button className="bg-forest-green text-white px-6 py-2 rounded-lg font-semibold">Verify Status</button>
</div>
</div>
<div className="w-full md:w-1/3 bg-primary/5 rounded-lg p-6 text-center border border-primary/10">
<span className="material-symbols-outlined text-5xl text-primary mb-2">shield_with_heart</span>
<div className="text-xs font-bold text-primary tracking-tighter">ASCHIA SECURE</div>
</div>
</div>
{/*  Report Concern  */}
<div className="md:col-span-4 bg-eagle-red/5 border border-eagle-red/20 rounded-xl p-8 flex flex-col justify-between">
<div>
<div className="w-12 h-12 bg-eagle-red text-white rounded-full flex items-center justify-center mb-4">
<span className="material-symbols-outlined">report_problem</span>
</div>
<h3 className="font-headline-md text-xl text-eagle-red font-bold mb-2">Public Health Concern</h3>
<p className="text-sm text-slate-gray">Report disease outbreaks, sanitation issues, or medical malpractice anonymously.</p>
</div>
<button className="mt-6 w-full py-3 border border-eagle-red text-eagle-red font-bold rounded-lg hover:bg-eagle-red hover:text-white transition-all">
                            Submit Report
                        </button>
</div>
{/*  Immunization Tracker  */}
<div className="md:col-span-6 glass-card rounded-xl p-8 flex flex-col">
<div className="flex justify-between items-start mb-6">
<h3 className="font-headline-md text-xl text-primary font-bold">Immunization &amp; Wellness</h3>
<span className="material-symbols-outlined text-brass-gold">event_note</span>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-4 p-3 bg-white rounded border border-outline-variant/30">
<div className="w-2 h-2 rounded-full bg-forest-green"></div>
<div className="flex-grow">
<div className="text-sm font-bold">BCG Vaccine</div>
<div className="text-xs text-slate-gray">Birth - 2 Weeks</div>
</div>
<span className="material-symbols-outlined text-forest-green" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</div>
<div className="flex items-center gap-4 p-3 bg-white rounded border border-outline-variant/30">
<div className="w-2 h-2 rounded-full bg-brass-gold"></div>
<div className="flex-grow">
<div className="text-sm font-bold">Pentavalent 1</div>
<div className="text-xs text-slate-gray">6 Weeks • Upcoming</div>
</div>
<button className="text-xs font-bold text-primary underline">Reminder</button>
</div>
</div>
<button className="mt-auto w-full py-3 bg-surface-container-highest text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
                            View Child Schedule
                        </button>
</div>
{/*  Outreach Calendar  */}
<div className="md:col-span-6 bg-forest-green text-white rounded-xl p-8 relative overflow-hidden">
<div className="relative z-10 h-full flex flex-col">
<h3 className="font-headline-md text-xl font-bold mb-2">Medical Outreach Calendar</h3>
<p className="text-primary-fixed text-sm mb-6">Mobile clinics coming to rural LGAs this month.</p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="bg-white/10 p-2 rounded text-center min-w-[50px]">
<div className="text-xs font-bold">OCT</div>
<div className="text-lg font-bold">12</div>
</div>
<div>
<div className="font-bold">Aba North Outreach</div>
<div className="text-xs text-primary-fixed">General Health Screening • 08:00 AM</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="bg-white/10 p-2 rounded text-center min-w-[50px]">
<div className="text-xs font-bold">OCT</div>
<div className="text-lg font-bold">15</div>
</div>
<div>
<div className="font-bold">Umuahia South Mobile Clinic</div>
<div className="text-xs text-primary-fixed">Maternal &amp; Child Care • 09:00 AM</div>
</div>
</div>
</div>
<button className="mt-8 bg-brass-gold text-primary-fixed font-bold py-3 rounded-lg hover:scale-[1.02] transition-transform">
                                Full Outreach Map
                            </button>
</div>
<div className="absolute -right-8 -bottom-8 opacity-10">
<span className="material-symbols-outlined" style={{"fontSize":"200px"}}>health_and_safety</span>
</div>
</div>
</div>
</div>
</section>
{/*  Health Tips & Blog  */}
<section className="py-20 bg-white">
<div className="container mx-auto px-6 md:px-16">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="font-headline-lg text-3xl text-primary font-bold mb-2">Healthy Abia</h2>
<p className="text-slate-gray">Expert advice from the Abia State Ministry of Health.</p>
</div>
<button className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
                        Explore All Tips <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Blog Card 1  */}
<div className="group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-4 h-48">
<img alt="Clean Water Initiative" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A detailed closeup of clean, sparkling water being poured into a clear glass, symbolizing public health and sanitation initiatives. The background is a soft, blurred scene of a modern Abia community under golden sunlight. The image is crisp and refreshing, adhering to a professional governance style with primary green and brass gold color hints." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLV6HxeXrtnrN47UkSsuwUji7_--lPzeePzweHc9u1an9SzR4DVmFf32DZOcp9wpqej3LJGpO_UfAV03jYjYrT7z-8J73Y__glEqYUZY7yOiNprp1GmerqLCtU-vG7LgSYUzeZjbj1inZbNmNhcERu9g0h0LhHTH3EACX5eezC_YayCgy33yTzN0IsgQuLDk_R-_byOtFUQVqasXlYXz1PIR7sXBF9z17wG7cCfFUh-fUKioxXHBDik4ZI2TwpfScshgoqrb8SaQc" />
</div>
<div className="flex gap-2 mb-2">
<span className="text-[10px] font-bold tracking-widest text-primary bg-primary/5 px-2 py-1 rounded">PREVENTION</span>
<span className="text-[10px] font-bold tracking-widest text-slate-gray px-2 py-1">5 MIN READ</span>
</div>
<h4 className="font-headline-md text-lg text-primary font-bold group-hover:text-forest-green transition-colors">Combating Malaria: The 2024 State Strategy</h4>
<p className="text-sm text-slate-gray mt-2 line-clamp-2">Learn about the free mosquito net distribution program and preventive measures for your household.</p>
</div>
{/*  Blog Card 2  */}
<div className="group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-4 h-48">
<img alt="Maternal Health" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A heartwarming and professional scene of a smiling mother holding her healthy newborn, with a female doctor in the background offering a reassuring gesture. The setting is a state-of-the-art maternal ward in Abia, glowing with warm, natural light and sophisticated medical decor. The visual language conveys safety, care, and the successful implementation of modern health governance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqpkBQbovk479AWymyJJ3pStWMPP632TuH8gZQDV9bagjjjnuMlpSv4P6zlHgJajrPhDDT89JMsJMQz8ChqPswBHzcBY02L4IEmI3zdP81xvImcM_LNWUci7jYe3r4rIAeXXAOmTyddTVBLTY2l7LVmcmwBqMlhA-Kbf2ySL4IwmVo5bVx_rdLXSW4xAOgIrpyy8ivDhL_9NdBab3wZ2jO_5rEIAlO32ZNVBqM2yHqi13nr_MNe7-2p1QipQA3_murQs7dpfGA2bk" />
</div>
<div className="flex gap-2 mb-2">
<span className="text-[10px] font-bold tracking-widest text-primary bg-primary/5 px-2 py-1 rounded">MATERNAL CARE</span>
<span className="text-[10px] font-bold tracking-widest text-slate-gray px-2 py-1">8 MIN READ</span>
</div>
<h4 className="font-headline-md text-lg text-primary font-bold group-hover:text-forest-green transition-colors">Safe Motherhood: Enrollment in ASCHIA Benefits</h4>
<p className="text-sm text-slate-gray mt-2 line-clamp-2">Comprehensive guide on accessing free maternal health services across all state primary health centers.</p>
</div>
{/*  Blog Card 3  */}
<div className="group cursor-pointer">
<div className="overflow-hidden rounded-xl mb-4 h-48">
<img alt="Nutrition and Wellness" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A vibrant display of fresh, locally grown fruits and vegetables arranged in a modern, minimalist kitchen setting. The lighting is bright and high-contrast, emphasizing the natural colors of greens, oranges, and reds. The aesthetic is clean and healthy, promoting wellness within the Abia One digital framework. No people are visible, focusing on the quality and abundance of healthy state resources." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB2-SdaqIssmvDN0BFG6L44-8P2SC0KzrWIpMNWZO5Qu10MFOhi89DSWqSc2RLWpnNVFz6h9lzK6gDuO6A_qZCxX0k7Cm6ZlRUvjxR4kIIiBMI432y1iPFX2xAnJGd7s78TZjmY9mn1xR0xfghjB7oh1WiEns-t-mDJ0ZGpiaI_e5f9Sw6eK7UMSevKpYDtoBBt6kU19pjzPGCmIMj8WJbKsmeJt9RtokQHzl2vJKjumG62gTMGJ5UsSTUWmMVjBD6YEqKFqVoT9U" />
</div>
<div className="flex gap-2 mb-2">
<span className="text-[10px] font-bold tracking-widest text-primary bg-primary/5 px-2 py-1 rounded">NUTRITION</span>
<span className="text-[10px] font-bold tracking-widest text-slate-gray px-2 py-1">4 MIN READ</span>
</div>
<h4 className="font-headline-md text-lg text-primary font-bold group-hover:text-forest-green transition-colors">Eating for Immunity: The Power of Local Produce</h4>
<p className="text-sm text-slate-gray mt-2 line-clamp-2">Discover the nutritional benefits of endemic Abia crops and how they support a robust immune system.</p>
</div>
</div>
</div>
</section>
{/*  Stats Counter  */}
<section className="py-12 bg-primary text-white">
<div className="container mx-auto px-6 md:px-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
<div>
<div className="text-4xl font-extrabold mb-2">290+</div>
<div className="text-xs font-label-caps opacity-80">Primary Health Centers</div>
</div>
<div>
<div className="text-4xl font-extrabold mb-2">1.2M+</div>
<div className="text-xs font-label-caps opacity-80">Citizens Enrolled</div>
</div>
<div>
<div className="text-4xl font-extrabold mb-2">15</div>
<div className="text-xs font-label-caps opacity-80">General Hospitals</div>
</div>
<div>
<div className="text-4xl font-extrabold mb-2">100%</div>
<div className="text-xs font-label-caps opacity-80">Digital Verification</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full px-4 md:px-16 bg-surface-container-highest dark:bg-forest-deep mt-auto border-t border-outline-variant py-12">
<div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<div className="font-headline-lg text-headline-lg text-forest-deep mb-4 font-bold">ABIA ONE</div>
<p className="font-body-md text-on-surface-variant max-w-sm mb-6">
                    A unified digital infrastructure serving the citizens of Abia State. Focused on transparency, efficiency, and modern governance.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined" style={{"fontSize":"20px"}}>public</span></a>
<a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined" style={{"fontSize":"20px"}}>mail</span></a>
<a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#"><span className="material-symbols-outlined" style={{"fontSize":"20px"}}>call</span></a>
</div>
</div>
<div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h5 className="font-label-caps text-primary font-bold mb-4">PLATFORMS</h5>
<ul className="space-y-2 text-sm text-on-surface-variant">
<li><a className="hover:text-brass-gold transition-colors" href="#">Invest Abia</a></li>
<li><a className="hover:text-brass-gold transition-colors" href="#">Serve Abia</a></li>
<li><a className="hover:text-brass-gold transition-colors" href="#">Build Abia</a></li>
<li><a className="hover:text-brass-gold transition-colors" href="#">Open Abia</a></li>
</ul>
</div>
<div>
<h5 className="font-label-caps text-primary font-bold mb-4">RESOURCES</h5>
<ul className="space-y-2 text-sm text-on-surface-variant">
<li><a className="hover:text-brass-gold transition-colors" href="#">PHC Locator</a></li>
<li><a className="hover:text-brass-gold transition-colors" href="#">ASCHIA Portal</a></li>
<li><a className="hover:text-brass-gold transition-colors" href="#">Health Stats</a></li>
<li><a className="hover:text-brass-gold transition-colors" href="#">Public Health News</a></li>
</ul>
</div>
<div>
<h5 className="font-label-caps text-primary font-bold mb-4">LEGAL</h5>
<ul className="space-y-2 text-sm text-on-surface-variant">
<li><a className="hover:text-brass-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brass-gold transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-brass-gold transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-brass-gold transition-colors" href="#">FOI Requests</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
<div className="font-body-md text-on-surface-variant text-sm">
                © 2024 Government of Abia State, Nigeria. Built for the Future.
            </div>
<div className="flex gap-6">
<span className="text-xs font-bold tracking-widest text-primary">NIGERIA FIRST</span>
<span className="text-xs font-bold tracking-widest text-brass-gold">GOD'S OWN STATE</span>
</div>
</div>
</footer>
{/*  FAB Suppression for non-contextual screens as per rules  */}
{/*  (No FAB rendered here)  */}


      </div>
    </>
  );
}
