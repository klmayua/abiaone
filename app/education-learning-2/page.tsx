export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .brass-accent-line {\n            position: relative;\n        }\n        .brass-accent-line::after {\n            content: '';\n            position: absolute;\n            bottom: -4px;\n            left: 0;\n            width: 40px;\n            height: 3px;\n            background-color: #D4AF37;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(12px);\n            border: 1px solid #E2E8F0;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
        
{/*  Top Navigation Bar  */}
<header className="bg-surface sticky top-0 z-50 border-b border-outline-variant">
<div className="flex justify-between items-center w-full px-margin-desktop max-w-max-width mx-auto h-16">
<div className="font-headline-md text-headline-md font-bold text-forest-green">ABIA ONE</div>
<nav className="hidden md:flex items-center space-x-8">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Invest</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Jobs</a>
<a className="font-label-md text-label-md text-forest-green border-b-2 border-brass-gold pb-1" href="#">Serve</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Verify</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Governance</a>
</nav>
<div className="flex items-center space-x-6">
<div className="flex space-x-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green">language</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green">notifications</span>
</div>
<button className="bg-forest-green text-on-primary px-6 py-2 rounded-lg font-headline-sm text-[14px] font-semibold hover:opacity-90 transition-opacity">Sign In</button>
</div>
</div>
</header>
<div className="flex max-w-max-width mx-auto">
{/*  Sidebar Navigation  */}
<aside className="hidden lg:flex flex-col fixed left-0 top-16 h-[calc(100vh-64px)] w-64 py-6 px-4 space-y-2 bg-surface-container-low border-r border-outline-variant">
<div className="px-2 mb-6">
<div className="font-headline-sm text-headline-sm font-bold text-forest-green">Command Center</div>
<div className="font-body-md text-label-md text-on-surface-variant">State Operating System</div>
</div>
<a className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined mr-3">dashboard</span>
<span className="font-label-md">Dashboard</span>
</a>
<a className="flex items-center px-4 py-3 text-on-primary-container bg-primary-container rounded-lg" href="#">
<span className="material-symbols-outlined mr-3">school</span>
<span className="font-label-md">Education</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined mr-3">payments</span>
<span className="font-label-md">Revenue Tracking</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined mr-3">account_tree</span>
<span className="font-label-md">Project Monitoring</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined mr-3">badge</span>
<span className="font-label-md">Personnel</span>
</a>
<div className="mt-auto pt-6 space-y-1">
<button className="w-full flex items-center px-4 py-3 text-forest-green border border-forest-green rounded-lg hover:bg-forest-green hover:text-white transition-all mb-4">
<span className="material-symbols-outlined mr-2">download</span>
<span className="font-label-md">Export Report</span>
</button>
<a className="flex items-center px-4 py-2 text-on-surface-variant hover:bg-surface-container-highest rounded-lg" href="#">
<span className="material-symbols-outlined mr-3 text-[20px]">help</span>
<span className="font-label-md">Support</span>
</a>
<a className="flex items-center px-4 py-2 text-on-surface-variant hover:bg-surface-container-highest rounded-lg" href="#">
<span className="material-symbols-outlined mr-3 text-[20px]">logout</span>
<span className="font-label-md">Sign Out</span>
</a>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 lg:ml-64 px-margin-mobile md:px-gutter py-8">
{/*  Hero Section  */}
<section className="relative h-96 w-full rounded-xl overflow-hidden mb-12 flex items-center bg-forest-green">
<div className="absolute inset-0 opacity-40">
<img className="w-full h-full object-cover" data-alt="A wide-angle, cinematic photograph of a futuristic classroom in Abia State with students using high-tech tablets and interactive holographic displays. The lighting is bright and inspiring, emphasizing a modern light-mode governance aesthetic. The color palette features deep forest greens and subtle brass gold accents, reflecting a professional state operating system atmosphere. Students are diverse and focused, embodying a future-ready youth empowerment movement." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGKZ70pWqMWTVnbHtL6mNBf-519vptGcyA1qY0afx_bTEWjZkZErXSEShdW6fsHw-gKwYpSswZU7ejmCp-KQlIjX6C1iNOohjVqBSc1UIFdp9CjlBKdOmhmOzup7PGN7gF-aYi_5fobIHt4RRkk889Fm3nxp8-WUbjTXIpL7nqL_5sM3kioBQh0lk1LPpJV_xwQZwj-s4A74-4fy2kk-ZzFluiFQJb05APLPdSjcgParCKb6un3Hyywj6NrMj4c52o7jhMuygIZsY" />
</div>
<div className="relative z-10 px-12 max-w-2xl">
<span className="inline-block px-3 py-1 bg-brass-gold text-on-secondary-fixed text-label-md font-label-md rounded mb-4">FUTURE OF LEARNING</span>
<h1 className="font-headline-lg text-headline-lg text-white mb-4 leading-tight">Empowering the Next Generation of Abia’s Digital Leaders</h1>
<p className="font-body-lg text-body-lg text-primary-fixed mb-8">Building a resilient education ecosystem through technology, world-class infrastructure, and advanced AI integration.</p>
<div className="flex gap-4">
<button className="bg-state-white text-forest-green px-8 py-3 rounded-lg font-headline-sm text-label-md font-bold hover:bg-surface-container-low transition-colors">Explore Programs</button>
<button className="border border-state-white text-white px-8 py-3 rounded-lg font-headline-sm text-label-md font-bold hover:bg-white/10 transition-colors">Apply for AI Academy</button>
</div>
</div>
{/*  Subtle Shader Background Overlay  */}

</section>
{/*  Key Pillars Bento Grid  */}
<div className="mb-16">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-8 brass-accent-line">Strategic Focus Areas</h2>
<div className="bento-grid grid-cols-1 md:grid-cols-12">
{/*  AI Academy  */}
<div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center group hover:border-forest-green transition-all">
<div className="w-full md:w-1/2">
<div className="flex items-center gap-2 text-forest-green mb-4">
<span className="material-symbols-outlined">psychology</span>
<span className="font-label-md">ABIA AI ACADEMY</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Pioneering Machine Learning for Youth</h3>
<p className="font-body-md text-on-surface-variant mb-6">Our flagship integration preparing 50,000 students annually for the global AI economy. Courses include Python, Neural Networks, and Ethical AI governance.</p>
<div className="flex items-center gap-4">
<div className="px-4 py-2 bg-primary-fixed text-on-primary-fixed rounded-full text-caption font-caption">Cohort 3 Open</div>
<div className="px-4 py-2 bg-secondary-fixed text-on-secondary-fixed rounded-full text-caption font-caption">State-Funded</div>
</div>
</div>
<div className="w-full md:w-1/2 h-64 overflow-hidden rounded-lg">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A high-resolution close-up of a diverse group of young programmers collaborating in a high-tech lab. They are working on sleek laptops with code visible on screens, surrounded by warm, professional studio lighting. The aesthetic is clean, modern, and corporate, emphasizing the state's investment in elite digital education. Forest green accents and soft brass highlights frame the composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDa67h2q4VK1cSLK3JX-dFnLt0dhhowHpgtr3OxZZX2pxByaBo0Hwra80Mmj1xEOpy3_cbMPZ09nFAcjCvDYfhdQgHcjYhJtP__ilgU3uMOIiHF6HZHHXqYD_k1YgXd-uh4G0DwKC5D8cC9BlAbDI2wl8vV3W2tVC1RMCkkBqeUdqk8Po2mX5sMPzJdk6ubp0DszPnm1I25H69hMnenVNQGJgYUdweXKyS1xkwzZXALhRmm-J6UmP_uRbbD3_msbcgTzYATSRT33cE" />
</div>
</div>
{/*  School Infrastructure  */}
<div className="md:col-span-4 bg-surface-container border border-outline-variant p-8 rounded-xl hover:shadow-lg transition-all">
<div className="text-forest-green mb-4">
<span className="material-symbols-outlined text-[40px]">home_work</span>
</div>
<h3 className="font-headline-md text-headline-md mb-4">Infrastructure Upgrades</h3>
<p className="font-body-md text-on-surface-variant mb-4">Modernizing 450 secondary schools with smart labs, solar power, and high-speed fiber connectivity.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 font-label-md text-[14px]">
<span className="material-symbols-outlined text-[18px] text-forest-green">check_circle</span>
                                85% Completion in Umuahia
                            </li>
<li className="flex items-center gap-2 font-label-md text-[14px]">
<span className="material-symbols-outlined text-[18px] text-forest-green">check_circle</span>
                                100% Solar Powered Labs
                            </li>
</ul>
</div>
{/*  Digital Literacy  */}
<div className="md:col-span-4 bg-forest-green text-white p-8 rounded-xl flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-[40px] mb-4">devices</span>
<h3 className="font-headline-md text-headline-md mb-2">Digital Literacy</h3>
<p className="font-body-md text-primary-fixed">Universal digital access for primary schools. No student left behind in the digital age.</p>
</div>
<div className="mt-8">
<div className="text-display-lg font-display-lg">120K+</div>
<div className="font-label-md uppercase tracking-wider opacity-80">Students Trained</div>
</div>
</div>
{/*  Vocational Excellence  */}
<div className="md:col-span-8 bg-surface-container-high border border-outline-variant p-8 rounded-xl flex flex-col md:flex-row gap-8">
<div className="w-full md:w-1/3 h-48 overflow-hidden rounded-lg">
<img className="w-full h-full object-cover" data-alt="An industrial-chic workshop setting featuring modern engineering equipment and students in professional gear. The lighting is clear and focused, highlighting precise technical work. The color palette aligns with a professional governance system, using slate grays and forest greens to suggest institutional reliability and technical precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx3WSIWG_mf_MvQboPw-Jw6lpgr44fz1TkxrZFPsJ_wmwcyav8vKEYnZBplEDvFrIHdEYDVEmB7qbxNQnJ0XJNOBqSChPL_jXQPOwCdrEko3Z0vZhvFNUwyyASm_-3SGJFpxdOz3G3hRjd2oKDpfoQElBKgNhTy-wWIJel2nJXoImkvXnX6-dDXpGsOzhHdGATnP8fs2tNFlmRBWgYgSUaU8wuDdmvj4tqyJRrSa_viTKDIFXyGxyS0LHylKnntO_7soSZe666O3M" />
</div>
<div className="flex-1">
<h3 className="font-headline-md text-headline-md mb-4">Vocational Skills &amp; Trade</h3>
<p className="font-body-md text-on-surface-variant mb-4">Redefining craftsmanship. Our vocational hubs connect traditional Abia enterprise with modern manufacturing technologies.</p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/50 p-4 rounded-lg">
<div className="font-headline-sm text-forest-green">24</div>
<div className="text-caption font-caption text-on-surface-variant">Active Hubs</div>
</div>
<div className="bg-white/50 p-4 rounded-lg">
<div className="font-headline-sm text-forest-green">15k</div>
<div className="text-caption font-caption text-on-surface-variant">Graduates</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Program Statistics  */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 py-12 border-y border-outline-variant">
<div className="text-center">
<div className="text-headline-lg font-bold text-forest-green">94%</div>
<div className="font-body-md text-on-surface-variant">Literacy Rate Target</div>
</div>
<div className="text-center">
<div className="text-headline-lg font-bold text-forest-green">₦12B</div>
<div className="font-body-md text-on-surface-variant">Infrastructure Investment</div>
</div>
<div className="text-center">
<div className="text-headline-lg font-bold text-forest-green">1,200+</div>
<div className="font-body-md text-on-surface-variant">Trained Educators</div>
</div>
<div className="text-center">
<div className="text-headline-lg font-bold text-forest-green">22k</div>
<div className="font-body-md text-on-surface-variant">Broadband Connections</div>
</div>
</section>
{/*  Learning Dashboard Placeholder  */}
<section className="mb-16">
<div className="flex justify-between items-end mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Live Progress Tracker</h2>
<p className="font-body-md text-on-surface-variant">Real-time data from the Abia State Education Management Information System (EMIS).</p>
</div>
<button className="flex items-center gap-2 text-forest-green font-label-md hover:underline">
                        View Detailed Analytics <span className="material-symbols-outlined">trending_up</span>
</button>
</div>
<div className="bg-white border border-outline-variant rounded-xl p-8 shadow-sm">
{/*  Simple visualization placeholder using divs  */}
<div className="h-64 flex items-end justify-between gap-4">
<div className="w-full bg-surface-container-highest rounded-t-lg relative group">
<div className="absolute bottom-0 left-0 w-full bg-forest-green h-[65%] rounded-t-lg transition-all group-hover:opacity-80"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-caption font-label-md">65%</div>
</div>
<div className="w-full bg-surface-container-highest rounded-t-lg relative group">
<div className="absolute bottom-0 left-0 w-full bg-forest-green h-[82%] rounded-t-lg transition-all group-hover:opacity-80"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-caption font-label-md">82%</div>
</div>
<div className="w-full bg-surface-container-highest rounded-t-lg relative group">
<div className="absolute bottom-0 left-0 w-full bg-brass-gold h-[45%] rounded-t-lg transition-all group-hover:opacity-80"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-caption font-label-md">45%</div>
</div>
<div className="w-full bg-surface-container-highest rounded-t-lg relative group">
<div className="absolute bottom-0 left-0 w-full bg-forest-green h-[91%] rounded-t-lg transition-all group-hover:opacity-80"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-caption font-label-md">91%</div>
</div>
<div className="w-full bg-surface-container-highest rounded-t-lg relative group">
<div className="absolute bottom-0 left-0 w-full bg-forest-green h-[74%] rounded-t-lg transition-all group-hover:opacity-80"></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-caption font-label-md">74%</div>
</div>
</div>
<div className="flex justify-between mt-4 text-caption font-label-md text-on-surface-variant">
<span>Aba North</span>
<span>Umuahia South</span>
<span>Ohafia</span>
<span>Bende</span>
<span>Ikwuano</span>
</div>
</div>
</section>
</main>
</div>
{/*  Footer  */}
<footer className="bg-surface-container-highest border-t border-outline-variant mt-20">
<div className="w-full py-12 px-margin-desktop flex flex-col md:flex-row justify-between items-start max-w-max-width mx-auto gap-12">
<div className="max-w-sm">
<div className="font-headline-sm text-headline-sm font-bold text-forest-green mb-4">ABIA ONE</div>
<p className="font-body-md text-on-surface-variant mb-6 text-[14px]">The official digital infrastructure for the Abia State Government. Building a transparent, efficient, and technology-driven future for all citizens.</p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-forest-green cursor-pointer">face_nod</span>
<span className="material-symbols-outlined text-forest-green cursor-pointer">language</span>
<span className="material-symbols-outlined text-forest-green cursor-pointer">share</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12">
<div>
<h4 className="font-label-md text-on-surface font-bold mb-4 uppercase tracking-wider">Quick Links</h4>
<ul className="space-y-2 text-on-surface-variant text-[14px]">
<li><a className="hover:text-forest-green transition-colors" href="#">Apply for Jobs</a></li>
<li><a className="hover:text-forest-green transition-colors" href="#">Business Registration</a></li>
<li><a className="hover:text-forest-green transition-colors" href="#">Tax Portal</a></li>
<li><a className="hover:text-forest-green transition-colors" href="#">State Reports</a></li>
</ul>
</div>
<div>
<h4 className="font-label-md text-on-surface font-bold mb-4 uppercase tracking-wider">Resources</h4>
<ul className="space-y-2 text-on-surface-variant text-[14px]">
<li><a className="hover:text-forest-green transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-forest-green transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-forest-green transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-forest-green transition-colors" href="#">Press Office</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="font-label-md text-on-surface font-bold mb-4 uppercase tracking-wider">Newsletter</h4>
<p className="text-[12px] text-on-surface-variant mb-4">Stay updated with state-wide educational reforms.</p>
<div className="flex">
<input className="bg-surface border-outline p-2 text-sm rounded-l focus:ring-forest-green flex-1" placeholder="Email address" type="email" />
<button className="bg-forest-green text-white px-4 py-2 rounded-r material-symbols-outlined">send</button>
</div>
</div>
</div>
</div>
<div className="w-full py-6 px-margin-desktop bg-surface-container-low text-center border-t border-outline-variant">
<p className="font-body-md text-caption text-on-surface-variant">© 2024 Abia State Government. All Rights Reserved. Built for the Future of God's Own State.</p>
</div>
</footer>
{/*  Global FAB for quick action  */}
<button className="fixed bottom-8 right-8 w-16 h-16 bg-forest-green text-white rounded-full shadow-2xl flex items-center justify-center group hover:scale-110 transition-transform z-[100]">
<span className="material-symbols-outlined text-[32px]">support_agent</span>
<span className="absolute right-full mr-4 bg-forest-green text-white px-4 py-2 rounded-lg text-caption opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Citizen Support</span>
</button>


      </div>
    </>
  );
}
