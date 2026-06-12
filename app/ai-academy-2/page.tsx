export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(10px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant">
<div className="flex justify-between items-center h-16 px-margin-desktop max-w-max-width mx-auto">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md text-forest-green font-semibold">ABIA ONE</span>
<div className="h-6 w-[1px] bg-outline-variant hidden md:block"></div>
<span className="font-headline-md text-headline-md text-forest-green font-semibold hidden md:block">AI Academy</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="font-body-md text-body-md text-on-surface-variant hover:text-forest-green transition-colors cursor-pointer" href="#">Serve Abia</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-forest-green transition-colors cursor-pointer" href="#">Jobs Abia</a>
<a className="font-body-md text-body-md text-forest-green border-b-2 border-forest-green pb-1 cursor-pointer" href="#">AI Academy</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-forest-green transition-colors cursor-pointer" href="#">Connect Abia</a>
</nav>
<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center bg-surface-container rounded-lg px-3 py-1.5 border border-outline-variant">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
<input className="bg-transparent border-none focus:ring-0 text-sm w-48" placeholder="Search courses..." type="text" />
</div>
<button className="bg-forest-green text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all cursor-pointer">Citizen Portal</button>
</div>
</div>
</header>
<main className="mt-16">
{/*  Hero Section  */}
<section className="relative min-h-[819px] flex items-center overflow-hidden bg-surface-container-low">
<div className="absolute inset-0 opacity-10 pointer-events-none">
{/*  Using a decorative background pattern here  */}
<div className="absolute inset-0" style={{"backgroundImage":"radial-gradient(#006838 1px, transparent 1px)","backgroundSize":"40px 40px"}}></div>
</div>
<div className="px-margin-desktop max-w-max-width mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 py-20">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-sm font-semibold">
<span className="material-symbols-outlined text-[18px]">verified</span>
                        ENROLLMENT OPEN FOR Q3 2024
                    </div>
<h1 className="font-display-lg text-display-lg text-forest-green max-w-xl">Preparing Abia for the Global Digital Economy</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                        Empowering citizens with world-class artificial intelligence skills. Join the next generation of Abia's tech workforce and lead the digital transformation of governance and commerce.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-forest-green text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all">
                            Browse Catalog <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="border-2 border-brass-gold text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-secondary-container transition-all">
                            Watch Success Stories
                        </button>
</div>
<div className="flex items-center gap-8 pt-4">
<div>
<div className="font-headline-md text-forest-green">12.5k+</div>
<div className="font-caption text-on-surface-variant">Graduates Trained</div>
</div>
<div className="w-[1px] h-10 bg-outline-variant"></div>
<div>
<div className="font-headline-md text-forest-green">94%</div>
<div className="font-caption text-on-surface-variant">Job Placement Rate</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-xl overflow-hidden border-2 border-forest-green/20 p-2 glass-card">
<img alt="Abia Digital Training Center" className="w-full h-full object-cover rounded-lg" data-alt="A clean and modern digital classroom in Abia State where diverse Nigerian students are focused on high-end desktop computers. The environment is professional and high-tech, featuring glass partitions, warm institutional lighting, and forest green accents on the walls. The atmosphere is studious and innovative, suggesting a high-tier learning environment for artificial intelligence and data science." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP0E0FE6PoY2WguYVS9ucvi9epk4SYTlNfK8eNVO9qGGmH50vVz2pWfrEf9z54s4SjFYeL61pLKwLnVw3eGpcUah8_gXWvYR5M9r5xgWziHsNCkdZKTl-It9tobPy5LlWtb9ZcK7uC8Wcna9G_pg4faFE4ZbHLM6WpPLRh1RhA7q3sayKodba5Qf003yK4totF18sKpxoe-eM8jOMrtLh4OaSlsN_7GqmAjmk807yJS-IPD7bnYrTTvk7zsoqUeQWEcJauDVcJpK0" />
</div>
{/*  Floating Stat Card  */}
<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-outline-variant max-w-[240px] animate-bounce-subtle">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-secondary-container">trending_up</span>
</div>
<span className="font-semibold text-forest-green">State Growth</span>
</div>
<p className="text-sm text-on-surface-variant">AI-ready labor force increased by 45% since launch.</p>
</div>
</div>
</div>
</section>
{/*  Registered User Dashboard Snippet  */}
<section className="py-20 bg-surface">
<div className="px-margin-desktop max-w-max-width mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="font-headline-lg text-headline-lg text-forest-green mb-2">Welcome back, Dr. Okezie</h2>
<p className="text-on-surface-variant">Your learning journey is 64% complete. Keep it up!</p>
</div>
<button className="text-forest-green font-semibold flex items-center gap-1 hover:underline">
                        Go to Dashboard <span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/*  Progress Card  */}
<div className="md:col-span-2 glass-card rounded-xl p-8 border border-outline-variant flex flex-col md:flex-row gap-8 items-center">
<div className="relative w-32 h-32 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-surface-container-highest" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-forest-green transition-all duration-1000" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" strokeDasharray="364.4" strokeDashoffset="131.2" strokeWidth="8"></circle>
</svg>
<span className="absolute font-headline-md text-forest-green">64%</span>
</div>
<div className="flex-1 space-y-4">
<div className="flex justify-between items-start">
<div>
<h3 className="font-semibold text-lg text-on-surface">Data Analytics for Public Policy</h3>
<p className="text-sm text-on-surface-variant">Currently at: Module 4 - Visualizing Budget Data</p>
</div>
<span className="bg-secondary-container text-on-secondary-container text-xs font-bold px-2 py-1 rounded">IN PROGRESS</span>
</div>
<div className="flex gap-4">
<button className="flex-1 bg-forest-green text-white py-2 rounded-lg font-medium text-sm">Resume Learning</button>
<button className="flex-1 border border-outline text-on-surface py-2 rounded-lg font-medium text-sm">Course Details</button>
</div>
</div>
</div>
{/*  Achievements/Next Step  */}
<div className="bg-forest-green text-white rounded-xl p-8 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-brass-gold mb-4 text-4xl" data-weight="fill">workspace_premium</span>
<h3 className="font-headline-md text-white mb-2">Next Milestone</h3>
<p className="text-primary-fixed opacity-90 text-sm">Complete 'Module 4' to earn your Advanced Visualization Badge.</p>
</div>
<div className="mt-6 flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-forest-green bg-brass-gold flex items-center justify-center text-[10px] font-bold">AI</div>
<div className="w-8 h-8 rounded-full border-2 border-forest-green bg-slate-gray flex items-center justify-center text-[10px] font-bold">SQL</div>
<div className="w-8 h-8 rounded-full border-2 border-forest-green bg-primary-container flex items-center justify-center text-[10px] font-bold">+4</div>
</div>
</div>
</div>
</div>
</section>
{/*  Course Catalog  */}
<section className="py-24 bg-surface-container-low">
<div className="px-margin-desktop max-w-max-width mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg text-forest-green mb-4">Discover Your Future Path</h2>
<div className="w-24 h-1.5 bg-brass-gold mx-auto rounded-full mb-6"></div>
<p className="text-on-surface-variant max-w-2xl mx-auto">Selected curriculum designed by industry experts and government leaders to ensure immediate professional relevance in Abia's growing tech sector.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Course 1  */}
<div className="group bg-white border border-outline-variant rounded-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<img alt="AI Fundamentals" className="w-full h-full object-cover transition-transform group-hover:scale-110" data-alt="A high-tech digital representation of neural networks and glowing artificial intelligence nodes against a deep forest green and dark slate background. The image has a professional, analytical feel with clean lines and a subtle glow, matching a corporate digital education theme. High resolution, 3D rendered style with institutional authority." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_sAz6fVMjaDArH8Z_mdtYqSScouAOsxuRPeEGV46BVtvR0n-0kyNAPvI35RQlSOiHylsqErxsTNIOzOQHRZ5zAOWYKNnRLLNcNZSST_XYZNDC7SGeXRIZMCGht3nNx-WBqeTtxCpT1UvG6ybkEQT9h3dkhA-Thft4VnavXyC86Lm42_RrA-t3XpaD-ZETA84hHnUEhwRQQflxO6T5jRTkW1ETqXkBg3fyRDgwnFqIvKKs8AcSrwOGotvKhMpM3bC7tHVyOBw3zQI" />
<div className="absolute top-4 left-4 bg-forest-green text-white text-[10px] font-bold px-2 py-1 rounded">POPULAR</div>
</div>
<div className="p-6">
<h3 className="font-semibold text-lg text-on-surface mb-2">AI Fundamentals</h3>
<p className="text-sm text-on-surface-variant mb-6 h-12 overflow-hidden">Master the core concepts of machine learning, LLMs, and neural networks from scratch.</p>
<div className="flex items-center justify-between pt-4 border-t border-outline-variant">
<span className="text-xs text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">schedule</span> 8 Weeks
                                </span>
<span className="text-forest-green font-bold text-sm">Enroll Free</span>
</div>
</div>
</div>
{/*  Course 2  */}
<div className="group bg-white border border-outline-variant rounded-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<img alt="Digital Marketing" className="w-full h-full object-cover transition-transform group-hover:scale-110" data-alt="A professional workspace showing a modern laptop with vibrant analytics dashboards and social media growth charts. Soft morning lighting hits the wooden desk, creating a warm and productive atmosphere. The color palette emphasizes clean whites, slate grays, and forest green accents, symbolizing a high-end digital marketing learning environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSCMXPc4hMUVV9cXykoz4hJeIO2EmDO3GwFK1o2VVK2JfKL6nQQ6ijKhQwDuCFcuxV0aFgIob6isT92gFl0kUEITbFwGt8HwDS5UDnpaNdOOQfUcC8B47QaJhS6jiKFsayho2BT1tgrYWcAJANmvm9YXx6g5E5wrCCxBBt7XZWZDKXQnJoM88YEnKjym6m_s2iLblMaVTKxNNclBeOzXHrjfqfS3DdymBjwJ_hZIRYXxBdJRL2K3kSpoC73y7yeLVoJAbz3A6leVw" />
</div>
<div className="p-6">
<h3 className="font-semibold text-lg text-on-surface mb-2">Digital Marketing</h3>
<p className="text-sm text-on-surface-variant mb-6 h-12 overflow-hidden">Learn data-driven marketing strategies to scale local businesses globally.</p>
<div className="flex items-center justify-between pt-4 border-t border-outline-variant">
<span className="text-xs text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">schedule</span> 6 Weeks
                                </span>
<span className="text-forest-green font-bold text-sm">Enroll Free</span>
</div>
</div>
</div>
{/*  Course 3  */}
<div className="group bg-white border border-outline-variant rounded-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<img alt="Data Analytics" className="w-full h-full object-cover transition-transform group-hover:scale-110" data-alt="Intricate data visualizations and complex graphs displayed on a sleek glass screen. The lighting is low-key and dramatic, with glowing forest green and brass gold highlights. The style is ultra-modern and professional, suggesting deep analytical insights and advanced technical training for the Abia State digital economy." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdVyDmVy1_GBbMVEBOyF3vUGw4b8zteOINUmfz2o5yyuCoGOe-fLd6aqTHvh0Q3FoqvMta6Nff31a4Gn0bnT2Fm2jiqIOwPwSiu7XB6Bi7PALoVUarW7dtfmwH4Fo4Q-2oqOMbrwZxNZEzD7HdQLZ5FHXOTXv82b5_2fcM-XVVlkIVjA6pIbBassTmaCJxy0NeVo-wOvTey3KNRw0z3LQdZA95iT1JPm6DeYZS6KmEwiO038n7BxNaR6KBpkF8bWV3zBjV6zX7RAE" />
</div>
<div className="p-6">
<h3 className="font-semibold text-lg text-on-surface mb-2">Data Analytics</h3>
<p className="text-sm text-on-surface-variant mb-6 h-12 overflow-hidden">Harness the power of data to make informed decisions for business and governance.</p>
<div className="flex items-center justify-between pt-4 border-t border-outline-variant">
<span className="text-xs text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">schedule</span> 10 Weeks
                                </span>
<span className="text-forest-green font-bold text-sm">Enroll Free</span>
</div>
</div>
</div>
{/*  Course 4  */}
<div className="group bg-white border border-outline-variant rounded-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
<div className="h-48 overflow-hidden relative">
<img alt="GovTech Specialist" className="w-full h-full object-cover transition-transform group-hover:scale-110" data-alt="A boardroom-style collaboration space where professionals are discussing digital government solutions. The setting is clean, featuring large whiteboards with flowcharts and tablet computers. The lighting is bright and institutional, reflecting transparency and innovation in public service. The color scheme is dominated by white, slate, and Abia's signature forest green." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt9e84oyb7nw6S1RMbGb6xttvKH150H0ToKTM8-LpeKzGiNBUwtFPbdq70aEo2xJG1J6FaTerUpYLt1SfQv__KTaa8zWF0Vb7YDm9_hXPUURKK3T5CvSjEX9xCTNAIu5DviXTyEgRwM_o8Y9SW4gLd04_3QuDxKvmWTDPxOhHV4z7FgTX-pwz0NiFRqIYT5LPv3ej8fTMtYI9TtL3UhJYRWN4MpSjZINFzqalB8LRl2FSP2cU0yvO5Hm6uuWhG7OaGyJwIcn0vucM" />
<div className="absolute top-4 left-4 bg-brass-gold text-on-secondary-container text-[10px] font-bold px-2 py-1 rounded">STATE-CERTIFIED</div>
</div>
<div className="p-6">
<h3 className="font-semibold text-lg text-on-surface mb-2">GovTech Specialist</h3>
<p className="text-sm text-on-surface-variant mb-6 h-12 overflow-hidden">Modernizing public service through digital tools and transparent workflows.</p>
<div className="flex items-center justify-between pt-4 border-t border-outline-variant">
<span className="text-xs text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">schedule</span> 12 Weeks
                                </span>
<span className="text-forest-green font-bold text-sm">Enroll Free</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Success Stories  */}
<section className="py-24 bg-surface relative overflow-hidden">
<div className="px-margin-desktop max-w-max-width mx-auto grid lg:grid-cols-5 gap-12 items-center">
<div className="lg:col-span-2">
<h2 className="font-headline-lg text-headline-lg text-forest-green mb-6">Success Stories from Our Graduates</h2>
<p className="text-on-surface-variant mb-8">From Aba to the world. Our graduates are now working in top-tier tech firms and leading local startups that drive our economy.</p>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-forest-green">
<img alt="Alumni 1" data-alt="Close up portrait of a young professional Nigerian man smiling confidently. He is dressed in business casual attire. The background is a blurred modern office with warm lighting. Professional and high-quality photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5ajFxrxRqy8KKEpjZIe12Ai8jY22BbVelqg_7pxrfsW_j9ZMUqEf_320NenHa8Yzd7YPALOGmJ8wfyNPG_6R6NtdUf069chctJfVeL8MmbncSnLuRx0G4JPQxz3_Zb-ubzdGMnCDAmoDgEmrxslJMGbJ4Znnl88aAs2LgPW93DX_F0fEUmNkKGMsDgQ75M2RyDE40fftURFbQ28bPJdAX8dZ5w3_QX0vazPVqMxu182D7d_hrXUR_tePw4fi6UH_2sAJ1wqoVIOg" />
</div>
<div>
<h4 className="font-semibold text-on-surface">Chima Kalu</h4>
<p className="text-xs text-on-surface-variant">Now Data Lead at AbiaCloud</p>
</div>
</div>
<div className="flex items-center gap-4 group cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-outline">
<img alt="Alumni 2" data-alt="Portrait of a professional Nigerian woman in a tech environment, wearing headphones and looking at a laptop. She has a bright, ambitious expression. The setting is a clean, modern coworking space with natural light. High-end lifestyle tech photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHsFYpIH4q2HBrnlYqmnZ8J1N2qK9kW23kNPJ2NUvfb-SugGvIKRDJPQheJBhu3q-0tyNrtvNUv5nbiP0cp05hAah14EJfkfnSUKZCG2NQ7zf525KKXOqDhSbp6ucc6NGxbLrVoet0IpLUpPZuVlUmIP4MTGjFWBxNIduexb7WokAbTxmiqGGMpV_Bq_sfSzeOPYB6YPD8NjjPTDdqM9kUd-wcQC2BUuk25AmI7p9G0ZaU_8vTQj-Lu95tFwh9C8qK1rDMLl_eKt8" />
</div>
<div>
<h4 className="font-semibold text-on-surface">Adaobi Nwosu</h4>
<p className="text-xs text-on-surface-variant">Frontend Developer, GlobalConnect</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-3">
<div className="glass-card p-10 rounded-2xl relative border border-outline-variant">
<span className="material-symbols-outlined absolute top-8 left-8 text-6xl text-forest-green/10">format_quote</span>
<div className="relative z-10">
<p className="font-body-lg text-xl italic text-on-surface leading-relaxed mb-8">
                                "The AI Academy wasn't just about learning code; it was about shifting my mindset. I went from being a regular graduate to someone who understands how to build systems that solve real problems for my community in Aba. Within two weeks of finishing the Data Analytics path, I secured a role that doubled my income."
                            </p>
<div className="flex items-center justify-between">
<div>
<h4 className="font-bold text-forest-green">Chima Kalu</h4>
<p className="text-sm text-on-surface-variant">AI Academy Graduate, Class of 2023</p>
</div>
<div className="bg-forest-green p-3 rounded-full text-white cursor-pointer hover:bg-opacity-90">
<span className="material-symbols-outlined">play_arrow</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Enrollment Section  */}
<section className="py-24 bg-forest-green text-white relative overflow-hidden">
{/*  Background Decorative Element  */}
<div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4">
<span className="material-symbols-outlined text-[400px]">school</span>
</div>
<div className="px-margin-desktop max-w-max-width mx-auto text-center relative z-10">
<div className="bg-brass-gold text-on-secondary-container inline-block px-4 py-1 rounded mb-6 font-bold text-sm tracking-wider">NEXT COHORT</div>
<h2 className="font-headline-lg text-4xl mb-8">Join Cohort 4 — Starting Sept 2024</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
<div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
<div className="text-3xl font-bold mb-1">12</div>
<div className="text-xs uppercase tracking-widest opacity-80">Days Left</div>
</div>
<div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
<div className="text-3xl font-bold mb-1">18</div>
<div className="text-xs uppercase tracking-widest opacity-80">Hours</div>
</div>
<div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
<div className="text-3xl font-bold mb-1">45</div>
<div className="text-xs uppercase tracking-widest opacity-80">Minutes</div>
</div>
<div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
<div className="text-3xl font-bold mb-1">20</div>
<div className="text-xs uppercase tracking-widest opacity-80">Seconds</div>
</div>
</div>
<p className="text-lg opacity-90 max-w-2xl mx-auto mb-10">Limited seats available. Applications are reviewed on a rolling basis. Secure your future in the global digital economy today.</p>
<div className="flex justify-center gap-6">
<button className="bg-white text-forest-green px-10 py-4 rounded-lg font-bold hover:bg-primary-fixed transition-all">Apply Now</button>
<button className="border-2 border-white/50 text-white px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">Download Prospectus</button>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-low border-t border-outline-variant">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-12 max-w-max-width mx-auto">
<div className="space-y-6">
<span className="font-headline-md text-headline-md text-forest-green font-bold">ABIA ONE</span>
<p className="text-on-surface-variant text-sm">The unified digital interface for Abia State citizens, providing access to essential services, learning, and employment.</p>
<div className="flex gap-4">
<a className="text-forest-green hover:text-brass-gold transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
<a className="text-forest-green hover:text-brass-gold transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
<a className="text-forest-green hover:text-brass-gold transition-colors" href="#"><span className="material-symbols-outlined">call</span></a>
</div>
</div>
<div>
<h4 className="font-bold text-forest-green mb-6">Learning Portals</h4>
<ul className="space-y-4">
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">AI Fundamentals</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">Data Science</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">Digital Entrepreneurship</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">Web 3.0 Training</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-forest-green mb-6">Government</h4>
<ul className="space-y-4">
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">Transparency Portals</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">Institutional News</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">Contact Support</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">State Projects</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-forest-green mb-6">Resources</h4>
<ul className="space-y-4">
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">Privacy Policy</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">Terms of Service</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">Open Data Initiative</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors text-sm" href="#">API Documentation</a></li>
</ul>
</div>
</div>
<div className="border-t border-outline-variant py-8 px-margin-desktop">
<div className="max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-caption text-on-surface-variant">© 2024 Abia State Government. All Rights Reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-forest-green"></span>
<span className="text-caption text-on-surface-variant">Systems Operational</span>
</div>
</div>
</div>
</footer>


      </div>
    </>
  );
}
