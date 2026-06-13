"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        body {\n            background-color: #f6fbf3;\n            color: #181d19;\n            font-family: 'Hanken Grotesk', sans-serif;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .custom-scrollbar::-webkit-scrollbar {\n            width: 4px;\n        }\n        .custom-scrollbar::-webkit-scrollbar-thumb {\n            background: #006838;\n            border-radius: 10px;\n        }" 
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
        }} />
  
      {/* Screen markup */}
      <div className="overflow-x-hidden">
        
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 glass-nav">
<nav className="flex justify-between items-center h-24 px-margin-desktop max-w-max-width mx-auto">
<img src="/Logos/Abia_One_Logo_Standard.png" alt="ABIA ONE" className="h-20 w-auto" />
<div className="hidden md:flex items-center gap-8 font-body-md text-body-md">
<a className="text-on-surface-variant dark:text-surface-variant hover:text-forest-green dark:hover:text-primary-fixed transition-colors" href="/serve-abia">Serve Abia</a>
<a className="text-forest-green dark:text-primary-fixed border-b-2 border-forest-green dark:border-primary-fixed pb-1" href="/jobs-abia">Jobs Abia</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:text-forest-green dark:hover:text-primary-fixed transition-colors" href="/ai-academy">AI Academy</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:text-forest-green dark:hover:text-primary-fixed transition-colors" href="/connect-abia">Connect Abia</a>
</div>
<div className="flex items-center gap-4">
<button className="px-6 py-2 bg-forest-green text-white font-medium rounded-lg hover:opacity-90 transition-all cursor-pointer">
                    Citizen Portal
                </button>
</div>
</nav>
</header>
<main className="mt-16">
{/*  Hero Section  */}
<section className="relative h-[600px] flex items-center overflow-hidden bg-primary text-state-white">

<div className="relative z-10 px-margin-desktop max-w-max-width mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h1 className="font-display-lg text-display-lg">Find Your Path in the New Abia</h1>
<p className="font-body-lg text-body-lg text-primary-fixed max-w-lg">
                        A sovereign digital marketplace connecting Abia's finest talents with global opportunities and local industrial giants.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<div className="relative flex-grow max-w-md">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full pl-12 pr-4 py-4 rounded-lg bg-surface text-on-surface border-none focus:ring-2 focus:ring-brass-gold outline-none" placeholder="Search for roles, skills, or artisans..." type="text" />
</div>
<button className="px-8 py-4 bg-brass-gold text-on-primary-fixed font-bold rounded-lg hover:bg-opacity-90 transition-all">Search Jobs</button>
</div>
</div>
<div className="hidden md:block">
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-low/10 backdrop-blur-md p-6 border border-white/10 rounded-xl">
<div className="text-secondary-fixed font-headline-lg">1,240+</div>
<div className="text-body-md">Active Listings</div>
</div>
<div className="bg-surface-container-low/10 backdrop-blur-md p-6 border border-white/10 rounded-xl mt-8">
<div className="text-secondary-fixed font-headline-lg">850+</div>
<div className="text-body-md">Verified Artisans</div>
</div>
<div className="bg-surface-container-low/10 backdrop-blur-md p-6 border border-white/10 rounded-xl -mt-4">
<div className="text-secondary-fixed font-headline-lg">24%</div>
<div className="text-body-md">Growth Support</div>
</div>
<div className="bg-surface-container-low/10 backdrop-blur-md p-6 border border-white/10 rounded-xl mt-4">
<div className="text-secondary-fixed font-headline-lg">12k</div>
<div className="text-body-md">Skill Matches</div>
</div>
</div>
</div>
</div>
</section>
{/*  Filters Section  */}
<section className="py-12 bg-surface-container-low border-b border-outline-variant">
<div className="px-margin-desktop max-w-max-width mx-auto flex flex-wrap items-center gap-6">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Filter by type:</span>
<div className="flex flex-wrap gap-3">
<button className="px-4 py-2 bg-primary text-white rounded-full font-body-md flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">work</span> Full-time
                    </button>
<button className="px-4 py-2 bg-white border border-outline-variant text-on-surface-variant rounded-full font-body-md flex items-center gap-2 hover:border-forest-green hover:text-forest-green transition-all">
<span className="material-symbols-outlined text-[18px]">handyman</span> Project-based
                    </button>
<button className="px-4 py-2 bg-white border border-outline-variant text-on-surface-variant rounded-full font-body-md flex items-center gap-2 hover:border-forest-green hover:text-forest-green transition-all">
<span className="material-symbols-outlined text-[18px]">school</span> Apprenticeship
                    </button>
<button className="px-4 py-2 bg-white border border-outline-variant text-on-surface-variant rounded-full font-body-md flex items-center gap-2 hover:border-forest-green hover:text-forest-green transition-all">
<span className="material-symbols-outlined text-[18px]">hub</span> Hybrid
                    </button>
</div>
</div>
</section>
{/*  Featured Listings: Bento Grid  */}
<section className="py-20 px-margin-desktop max-w-max-width mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<div className="w-12 h-1 bg-brass-gold mb-4"></div>
<h2 className="font-headline-lg text-headline-lg text-forest-green">Featured Listings</h2>
<p className="text-on-surface-variant mt-2">High-impact roles shaping the industrial landscape of Abia.</p>
</div>
<button className="text-forest-green font-semibold flex items-center gap-2 group">
                    View all jobs <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Job Card 1  */}
<div className="md:col-span-8 bg-white border border-outline-variant p-8 hover:shadow-lg transition-all group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4">
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-md text-xs">HOT ROLE</span>
</div>
<div className="flex flex-col h-full justify-between">
<div>
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 bg-surface-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green text-3xl">precision_manufacturing</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md group-hover:text-forest-green transition-colors">Senior Leather Craftsman</h3>
<p className="text-on-surface-variant">Aba Leather Hub • Full-time</p>
</div>
</div>
<p className="text-body-md text-on-surface leading-relaxed max-w-2xl">
                                We are seeking a master artisan to lead quality control and design refinement for export-grade footwear. Requires 10+ years of experience in traditional and modern leather working techniques.
                            </p>
</div>
<div className="flex items-center gap-6 mt-8 pt-8 border-t border-outline-variant">
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">payments</span>
<span className="font-body-md">Competitive + Equity</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">location_on</span>
<span className="font-body-md">Aba Industrial Zone</span>
</div>
<button className="ml-auto bg-forest-green text-white px-6 py-2 rounded-lg font-medium">Apply Now</button>
</div>
</div>
</div>
{/*  Job Card 2  */}
<div className="md:col-span-4 bg-surface-container-high border border-outline-variant p-8 hover:shadow-lg transition-all group">
<div className="flex flex-col h-full">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-forest-green">headset_mic</span>
</div>
<h3 className="font-headline-md text-xl mb-2 group-hover:text-forest-green transition-colors">Tech Support Specialist</h3>
<p className="text-on-surface-variant mb-6">Abia State Tech Hub • Hybrid</p>
<p className="text-body-md mb-8 flex-grow">
                            Supporting the statewide digital infrastructure. Multi-lingual skills in English and Igbo preferred.
                        </p>
<button className="w-full border border-forest-green text-forest-green py-3 rounded-lg font-medium hover:bg-forest-green hover:text-white transition-all">Quick Apply</button>
</div>
</div>
{/*  Job Card 3  */}
<div className="md:col-span-4 bg-white border border-outline-variant p-8 hover:shadow-lg transition-all group">
<div className="flex flex-col h-full">
<div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-forest-green">agriculture</span>
</div>
<h3 className="font-headline-md text-xl mb-2 group-hover:text-forest-green transition-colors">Agri-Tech Consultant</h3>
<p className="text-on-surface-variant mb-4">FarmAbia Initiative • Project</p>
<button className="mt-auto w-full border border-outline-variant text-on-surface-variant py-3 rounded-lg font-medium hover:border-forest-green hover:text-forest-green transition-all">View Details</button>
</div>
</div>
{/*  Job Card 4  */}
<div className="md:col-span-8 bg-forest-green text-white p-8 rounded-lg flex items-center justify-between overflow-hidden relative">
<div className="relative z-10">
<h3 className="font-headline-md text-2xl mb-2">Can't find the right fit?</h3>
<p className="text-primary-fixed mb-6">Create your talent profile and let recruiters find you.</p>
<button className="bg-brass-gold text-on-primary-fixed px-8 py-3 rounded-lg font-bold">Register as Candidate</button>
</div>
<span className="material-symbols-outlined text-[160px] opacity-10 absolute -right-4 bottom-0">person_search</span>
</div>
</div>
</section>
{/*  Artisan Directory  */}
<section className="py-24 bg-inverse-surface text-white">
<div className="px-margin-desktop max-w-max-width mx-auto">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg mb-4">Artisan Directory</h2>
<p className="text-surface-variant max-w-2xl mx-auto">Direct access to Abia's most skilled verified professionals for your private or commercial projects.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
{/*  Artisan Card 1  */}
<div className="bg-surface-container-highest/10 border border-white/10 p-6 rounded-xl group hover:bg-surface-container-highest/20 transition-all">
<div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-brass-gold">
<img alt="Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a skilled female artisan in her late 30s, looking confidently at the camera with a warm smile. She is in a workshop setting with tools and raw materials like wood and fabric softly blurred in the background. The lighting is warm and natural, emphasizing her expertise and professional demeanor. The overall aesthetic is clean and institutional, matching a corporate digital directory." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1XX0jGkXzde0kKyDl9S2znVOBoh5bck17KeavIsPvKb6rzmLf8Yawd5uIyn9HNpF9RKtbI9WDAVQ3lUkbc4aZHwCL03uLTGgOxZDjLCxB5mulvJhzJPYJV3in_q7OaFLA7VitXrSDYxmEb1uD5v0uD0PYErkkBwYWozni3NNP35YsC4imFq3f0pvl2SIcY31LgT44xAGluwXBZXj_lpI8wWzmGr0fM21CKBE1lKuYKpVr20GVsV_4AJ2PZUR6gq3wA9WofFrnnl0" />
</div>
<div className="text-center">
<h4 className="font-headline-md text-lg mb-1">Chukwudi Okafor</h4>
<p className="text-brass-gold font-label-md mb-4 uppercase">Master Carpenter</p>
<div className="flex justify-center gap-1 mb-6 text-secondary-fixed">
<span className="material-symbols-outlined fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined">star_half</span>
</div>
<button className="w-full py-2 border border-white/30 rounded font-medium hover:bg-white hover:text-forest-green transition-all">Request Quote</button>
</div>
</div>
{/*  Artisan Card 2  */}
<div className="bg-surface-container-highest/10 border border-white/10 p-6 rounded-xl group hover:bg-surface-container-highest/20 transition-all">
<div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-brass-gold">
<img alt="Profile" className="w-full h-full object-cover" data-alt="A professional portrait of a male artisan in a well-lit studio environment, wearing professional work attire. He has a focused and reliable expression, representing the high standard of craftsmanship in Abia. The background is a minimalist industrial space with subtle hints of technology and hand-made products. The lighting is crisp and even, highlighting a modern professional governance style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuByBrwwRaPIDRYY9OZCwu5xSJG0AMJ3H8fFYCZzAFoEv-PpQt_XbOP0PrOerOkzWLPbnETMvApuOa_t3FxfQmntFeUulfD0R_oWBI1sNNWuyqM2x5WS9A1PkWw8mOlZI1i65M44vlJVHbz8aMhRIwf3BuvsXUiC_SFgK4DVQTYAPZNzWAUTg6k3V_8-y9QDWXiUAY2Nk4Rusl1qglF1Ylcf5Y7NLIAZ0-9B2NzQx6a_s37tTeDBpI3FReunSjoFyCyhrVuiNrArPw8" />
</div>
<div className="text-center">
<h4 className="font-headline-md text-lg mb-1">Amaka Eze</h4>
<p className="text-brass-gold font-label-md mb-4 uppercase">Solar Technician</p>
<div className="flex justify-center gap-1 mb-6 text-secondary-fixed">
<span className="material-symbols-outlined fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
</div>
<button className="w-full py-2 border border-white/30 rounded font-medium hover:bg-white hover:text-forest-green transition-all">Request Quote</button>
</div>
</div>
{/*  Artisan Card 3  */}
<div className="bg-surface-container-highest/10 border border-white/10 p-6 rounded-xl group hover:bg-surface-container-highest/20 transition-all">
<div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-brass-gold">
<img alt="Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a middle-aged artisan in a clean, brightly lit workshop. The individual is wearing a professional apron and holding a small tool, suggesting a high level of detail-oriented skill. The aesthetic is corporate and modern, with a focus on trust and reliability. Soft focus on the background showing organized shelving and professional equipment. The color palette is dominated by neutral tones with forest green accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpCSUk0XVBMKcWJJlEP6Djhtgz3GWg8T6sZ9qFSQ4YbFw6e_dOMsiqPaPKilPhY5XDmvK0rZfFHZn0LxW2x2hG02Dpk0AvLCdMGqOT5WgvQbJz-GgsXcb4lBZc2JGBf4JyonT4XktrcNqgt3EMPSPXcZFQdJBU0-_G0xfx89_aEa2HzFJSJzbwTDA8YTHWWs87Np7L5AmqUPbYa7RVm4mDLtCWkzDPjf7l54WWXrLdibtEPov3lnus7s35B3MP5a4o0pKMQJsXuc8" />
</div>
<div className="text-center">
<h4 className="font-headline-md text-lg mb-1">Nnamdi Kalu</h4>
<p className="text-brass-gold font-label-md mb-4 uppercase">Industrial Plumber</p>
<div className="flex justify-center gap-1 mb-6 text-secondary-fixed">
<span className="material-symbols-outlined fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined">star</span>
</div>
<button className="w-full py-2 border border-white/30 rounded font-medium hover:bg-white hover:text-forest-green transition-all">Request Quote</button>
</div>
</div>
{/*  Artisan Card 4  */}
<div className="bg-surface-container-highest/10 border border-white/10 p-6 rounded-xl group hover:bg-surface-container-highest/20 transition-all">
<div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-brass-gold">
<img alt="Profile" className="w-full h-full object-cover" data-alt="A portrait of a young, skilled artisan in a modern creative studio. She is dressed in smart, professional workwear, looking directly into the camera with an air of competence. The environment is clean and reflects a 'Modern Governance' atmosphere, with efficient use of space and clear organization. The lighting is soft and professional, highlighting her features against a backdrop of technical drawings and artisan equipment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwCm1yZb1Sr_0pNSADhOw7AoK5F1PkZeP1Z9Pi-kj-CHOwQhBjJKzjRohSivo9lkC40VecTXxYLa5fPm7Tnxd9kZxsoBPnbRUkWcJXwkVZDinyQhaGufhQ2-HJJLLNlBeDNL_LXT5MTtAc3Y8zZVcJZLn4U348myxmse45BMVPR9SmiQBAWJ0XWq1a5pxbzL-8goRrU31SLvLDBzN91INV-Ki4O12AKyIpS-Svudms1XNjReRPZqDsl5TPiyzT8q3XJKSJnLG0Y6k" />
</div>
<div className="text-center">
<h4 className="font-headline-md text-lg mb-1">Ifeoma Balogun</h4>
<p className="text-brass-gold font-label-md mb-4 uppercase">HVAC Expert</p>
<div className="flex justify-center gap-1 mb-6 text-secondary-fixed">
<span className="material-symbols-outlined fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined">star</span>
</div>
<button className="w-full py-2 border border-white/30 rounded font-medium hover:bg-white hover:text-forest-green transition-all">Request Quote</button>
</div>
</div>
</div>
</div>
</section>
{/*  SME Growth Support Section  */}
<section className="py-24 bg-surface px-margin-desktop max-w-max-width mx-auto">
<div className="bg-surface-container border border-outline-variant p-12 rounded-2xl flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 space-y-6">
<span className="text-brass-gold font-bold tracking-tighter uppercase">Entrepreneurial Hub</span>
<h2 className="font-headline-lg text-4xl">SME Growth Support</h2>
<p className="text-body-lg text-on-surface-variant">
                        Are you an employer or a small business owner in Abia? Access grants, specialized training, and a pre-vetted labor pool to scale your enterprise.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3 p-4 bg-white border border-outline-variant rounded-lg">
<span className="material-symbols-outlined text-forest-green">account_balance</span>
<span className="font-medium">Business Grants</span>
</div>
<div className="flex items-center gap-3 p-4 bg-white border border-outline-variant rounded-lg">
<span className="material-symbols-outlined text-forest-green">groups</span>
<span className="font-medium">Vetted Labor Pool</span>
</div>
<div className="flex items-center gap-3 p-4 bg-white border border-outline-variant rounded-lg">
<span className="material-symbols-outlined text-forest-green">trending_up</span>
<span className="font-medium">Scale Consulting</span>
</div>
<div className="flex items-center gap-3 p-4 bg-white border border-outline-variant rounded-lg">
<span className="material-symbols-outlined text-forest-green">verified_user</span>
<span className="font-medium">Tax Incentives</span>
</div>
</div>
<button className="px-8 py-4 bg-forest-green text-white rounded-lg font-bold hover:shadow-lg transition-all">Access Support Portal</button>
</div>
<div className="flex-1 w-full max-w-md">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-forest-green to-brass-gold rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-white p-8 rounded-xl border border-outline-variant">
<h4 className="font-headline-md mb-4">Latest SME Resource</h4>
<div className="space-y-4">
<div className="p-3 bg-surface-container-low rounded flex gap-4">
<div className="w-12 h-12 bg-forest-green rounded flex items-center justify-center text-white">
<span className="material-symbols-outlined">description</span>
</div>
<div>
<p className="font-bold text-sm">2024 Hiring Guide</p>
<p className="text-xs text-on-surface-variant">PDF • 2.4 MB</p>
</div>
</div>
<div className="p-3 bg-surface-container-low rounded flex gap-4">
<div className="w-12 h-12 bg-brass-gold rounded flex items-center justify-center text-white">
<span className="material-symbols-outlined">video_library</span>
</div>
<div>
<p className="font-bold text-sm">Digital Transformation</p>
<p className="text-xs text-on-surface-variant">Workshop Video</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-low dark:bg-surface-container border-t border-outline-variant">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-12 max-w-max-width mx-auto">
<div className="space-y-4">
<div className="font-headline-md text-headline-md text-forest-green dark:text-primary-fixed font-bold">ABIA ONE</div>
<p className="text-on-surface-variant dark:text-surface-variant text-caption font-caption">
                    Empowering the citizens of Abia through digital innovation and sovereign governance infrastructure.
                </p>
</div>
<div className="flex flex-col gap-3">
<h5 className="text-forest-green dark:text-primary-fixed font-bold mb-2">Platform</h5>
<a className="text-on-surface-variant dark:text-surface-variant text-caption font-caption hover:text-brass-gold transition-colors" href="#">Transparency Portals</a>
<a className="text-on-surface-variant dark:text-surface-variant text-caption font-caption hover:text-brass-gold transition-colors" href="/news-press-center">Institutional News</a>
<a className="text-on-surface-variant dark:text-surface-variant text-caption font-caption hover:text-brass-gold transition-colors" href="/jobs-abia">Jobs Abia</a>
</div>
<div className="flex flex-col gap-3">
<h5 className="text-forest-green dark:text-primary-fixed font-bold mb-2">Legal</h5>
<a className="text-on-surface-variant dark:text-surface-variant text-caption font-caption hover:text-brass-gold transition-colors" href="#">Privacy Policy</a>
<a className="text-on-surface-variant dark:text-surface-variant text-caption font-caption hover:text-brass-gold transition-colors" href="#">Terms of Service</a>
</div>
<div className="flex flex-col gap-3">
<h5 className="text-forest-green dark:text-primary-fixed font-bold mb-2">Support</h5>
<a className="text-on-surface-variant dark:text-surface-variant text-caption font-caption hover:text-brass-gold transition-colors" href="#">Contact Support</a>
<div className="flex gap-4 mt-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green transition-colors">face_nod</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green transition-colors">share</span>
</div>
</div>
</div>
<div className="px-margin-desktop py-6 max-w-max-width mx-auto border-t border-outline-variant/30 flex justify-between items-center text-caption font-caption text-on-surface-variant">
<span>© 2024 Abia State Government. All Rights Reserved.</span>
<div className="flex gap-6">
<span>Accessibility</span>
<span>Security</span>
</div>
</div>
</footer>


      </div>
    </>
  );
}
