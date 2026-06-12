"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .tech-gradient {\n            background: linear-gradient(135deg, #006838 0%, #004d28 100%);\n        }\n        body {\n            font-family: 'Hanken Grotesk', sans-serif;\n            background-color: #f6fbf3;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-surface text-on-surface">
        
{/*  TopNavBar  */}
<header className="bg-surface border-b border-outline-variant fixed top-0 w-full z-50">
<div className="flex justify-between items-center w-full px-margin-desktop max-w-max-width mx-auto h-16">
<div className="font-headline-md text-headline-md font-bold text-forest-green">ABIA ONE</div>
<nav className="hidden md:flex space-x-8 items-center">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Invest</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Jobs</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Serve</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Verify</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Governance</a>
</nav>
<div className="flex items-center space-x-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">language</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer">notifications</span>
<button className="bg-forest-green text-white font-label-md text-label-md px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">Sign In</button>
</div>
</div>
</header>
{/*  SideNavBar  */}
<aside className="flex flex-col fixed left-0 top-0 h-full py-6 px-4 space-y-2 bg-surface-container-low border-r border-outline-variant w-64 pt-24 hidden lg:flex">
<div className="px-2 mb-6">
<h2 className="font-headline-sm text-headline-sm font-bold text-forest-green">Command Center</h2>
<p className="font-body-md text-label-md text-on-surface-variant">State Operating System</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined">hail</span>
<span className="font-label-md text-label-md">Citizen Requests</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-md text-label-md">Revenue Tracking</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-on-primary-container bg-primary-container rounded-lg scale-95 transition-transform" href="#">
<span className="material-symbols-outlined">account_tree</span>
<span className="font-label-md text-label-md">Project Monitoring</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined">badge</span>
<span className="font-label-md text-label-md">Personnel</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined">security</span>
<span className="font-label-md text-label-md">Security</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg group" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</nav>
<div className="pt-6 border-t border-outline-variant space-y-1">
<button className="w-full text-left flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:text-forest-green transition-colors">
<span className="material-symbols-outlined">help</span>
<span className="font-label-md text-label-md">Support</span>
</button>
<button className="w-full text-left flex items-center space-x-3 px-3 py-2 text-on-surface-variant hover:text-eagle-red transition-colors">
<span className="material-symbols-outlined">logout</span>
<span className="font-label-md text-label-md">Sign Out</span>
</button>
</div>
</aside>
{/*  Main Content  */}
<main className="lg:ml-64 pt-16 min-h-screen">
{/*  Hero Section  */}
<section className="relative h-[500px] flex items-center overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
<div className="relative px-margin-desktop max-w-max-width mx-auto w-full z-10">
<div className="max-w-2xl">
<span className="font-label-md text-label-md text-forest-green tracking-widest bg-primary-fixed/30 px-3 py-1 rounded-full border border-forest-green/20">STATE OPERATING SYSTEM V2.0</span>
<h1 className="font-display-lg text-display-lg text-on-surface mt-6 mb-4">Science &amp; Technology Architecture</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">Defining the digital sovereignty of Abia State through precision engineering, institutional research, and a world-class technology ecosystem.</p>
<div className="flex space-x-4">
<button className="bg-forest-green text-white font-label-md text-label-md px-8 py-4 rounded hover:opacity-90 transition-opacity flex items-center space-x-2">
<span>Explore Roadmap</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
<button className="border border-brass-gold text-secondary font-label-md text-label-md px-8 py-4 rounded hover:bg-surface-container-low transition-colors">Partner with R&amp;D</button>
</div>
</div>
</div>
</section>
{/*  Bento Grid: Roadmap & Infrastructure  */}
<section className="px-margin-desktop max-w-max-width mx-auto py-16">
<div className="mb-12">
<h2 className="font-headline-lg text-headline-lg text-on-surface">Transformation Roadmap</h2>
<div className="w-16 h-1 bg-brass-gold mt-2"></div>
</div>
<div className="bento-grid">
{/*  Large Card: Digital Infrastructure  */}
<div className="col-span-12 lg:col-span-8 glass-card rounded-xl p-8 flex flex-col justify-between group overflow-hidden relative opacity-100 translate-y-0">
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<span className="material-symbols-outlined text-4xl text-forest-green bg-surface p-3 rounded-lg shadow-sm">cloud_done</span>
<span className="font-label-md text-label-md text-forest-green font-bold">PHASE 01: ACTIVE</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">Statewide Fiber Backbone</h3>
<p className="font-body-md text-body-md text-on-surface-variant max-w-lg mb-6">Deploying 1,200km of high-speed fiber optics to connect all government secretariats, educational institutions, and healthcare centers by Q4 2024.</p>
<ul className="space-y-3">
<li className="flex items-center space-x-3 font-body-md text-body-md text-on-surface">
<span className="material-symbols-outlined text-forest-green text-lg">check_circle</span>
<span>65% Rural Connectivity Milestone</span>
</li>
<li className="flex items-center space-x-3 font-body-md text-body-md text-on-surface">
<span className="material-symbols-outlined text-forest-green text-lg">check_circle</span>
<span>Unified State Cloud Infrastructure</span>
</li>
</ul>
</div>
<div className="mt-8 relative z-10">
<button className="text-forest-green font-label-md text-label-md flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
<span>View Infrastructure Specs</span>
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-full opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">

</div>
</div>
{/*  Medium Card: Cyber Security  */}
<div className="col-span-12 lg:col-span-4 bg-inverse-surface rounded-xl p-8 text-surface flex flex-col justify-between opacity-100 translate-y-0">
<div>
<span className="material-symbols-outlined text-brass-gold mb-6 text-3xl">verified_user</span>
<h3 className="font-headline-md text-headline-md mb-2">Sovereign Data Security</h3>
<p className="font-body-md text-body-md text-surface-variant mb-6">Implementing zero-trust architecture for state records and citizen biometric data protection.</p>
</div>
<div className="p-4 bg-surface/10 rounded-lg border border-surface/20">
<div className="flex justify-between items-center mb-2">
<span className="font-label-md text-label-md opacity-70">Uptime</span>
<span className="font-label-md text-label-md text-primary-fixed">99.99%</span>
</div>
<div className="w-full bg-surface/20 h-1.5 rounded-full">
<div className="bg-primary-fixed h-full w-[99.99%] rounded-full shadow-[0_0_8px_rgba(158,245,184,0.5)]"></div>
</div>
</div>
</div>
{/*  Small Card: Research Partnerships  */}
<div className="col-span-12 md:col-span-6 lg:col-span-4 glass-card rounded-xl p-6 border-l-4 border-brass-gold opacity-100 translate-y-0">
<h4 className="font-headline-md text-headline-md mb-4">Academic R&amp;D</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Partnering with Abia State University to establish the Center for AI and Governance.</p>
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container overflow-hidden">
<img alt="Researcher" className="w-full h-full object-cover" data-alt="A close-up professional portrait of a tech researcher with a focused expression, set in a brightly lit modern laboratory with high-key lighting. The background features blurred scientific equipment and digital displays, adhering to the clean, institutional light-mode aesthetic of the Abia One brand. The style is sharp, corporate, and minimalist." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAftO2bM7cIVdsI236Kh1-z9OAQ-0TbVTrMVYdr3Mui1gpm3RcfEnaoC7ZyDViHaO3395BeqSGzgrPwSv_MczmTE0OAItRx68xBbxanxg5xx3IJjvbziYiG53KzwLBpO3PNfzzoYMSjnZLC_6n53QFSVvJx_IWpZ9-awo2BGUB-mTftlVWTSLeCpv5beZN6lg_TUWfYlVX0TZXU2iLP_3KefTIasguHFZa5Rk8aJx1xzZ8o54f91J0rCjoL-wGT-Dqzq8iEfXSdHVU" />
</div>
<div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container overflow-hidden">
<img alt="Researcher" className="w-full h-full object-cover" data-alt="A professional portrait of a female software architect smiling warmly, set against a soft-focus background of a clean, minimalist office with green plants and glass walls. The lighting is natural and bright, reinforcing a modern and transparent government digital initiative. The color palette emphasizes soft whites and forest greens." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChbb3-4N4FnKtVdn4Oktx0ZBMOommmql0T1QG6ydSvP7siwt39kqyIPSblm90ivN3kTC0lIJ8j2FY-4TQjs28493w1v08rQsyDlmgE6Mih2Q6RW1jVF2pj81UDgo6di8J9SGmDwYJhWNLRamwsWvUWcA0x-t6ZK6V1rnoLexispUwkrCTUoe_lQ267uZlSjLoPYDbgIr-hzUFAnlKXHnob-YrgE2C6kH7xF4SR1kEsmW-UtLnjopdtqAKhYmK63TfIGJgaO2khZBo" />
</div>
<div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center font-label-md text-label-md text-on-surface-variant">
                            +12
                        </div>
</div>
</div>
{/*  Large Card: Abia Tech Hub  */}
<div className="col-span-12 md:col-span-6 lg:col-span-8 rounded-xl overflow-hidden relative h-[300px] lg:h-auto opacity-100 translate-y-0">
<img alt="Tech Hub" className="absolute inset-0 w-full h-full object-cover" data-alt="A wide-angle shot of a state-of-the-art technology innovation hub featuring open collaborative workspaces, glass partitions, and sleek ergonomic furniture. The space is flooded with bright, natural daylight, reflecting a high-tech and forward-thinking institutional environment. The overall aesthetic is professional, corporate, and clean, with subtle brass gold and forest green accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbjadCjmUc4Xg11dOQH1iB6NiBHp91eCz3fUemFYoHq1JnVowSMsqc1hbl1mIMyYPJkSikr6Jjg16ppiCx-EhnWAk_0POtCjkJFxI8-KkbrnGCr-noMUvqwS1gWQDzlvrTFoKEnf9WV-RfBZUNmhxj9ntm1DzQ4PB8PB43Q96A0ATo7P2c34S1pKHVkt5vSY2BqWQ8TBulHoYyi-qT9Q_yP5WTdsXD4hOVAU8bZ8jRZWW_H-awZxapg5roe1rLlx7npDnHuTnqGsg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
<h3 className="font-headline-md text-headline-md text-white">Abia Innovation Hub (AIH)</h3>
<p className="font-body-md text-body-md text-white/80 max-w-md">Incubating over 50 startups in fintech, agritech, and e-governance solutions for the South-East region.</p>
<div className="mt-4">
<button className="bg-brass-gold text-on-secondary-fixed font-label-md text-label-md px-6 py-2 rounded-lg">Apply for Incubation</button>
</div>
</div>
</div>
</div>
</section>
{/*  Tech Stats Section  */}
<section className="bg-surface-container-high py-20 px-margin-desktop">
<div className="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center p-6 bg-surface rounded-lg border border-outline-variant shadow-sm">
<div className="font-display-lg text-display-lg text-forest-green mb-2">92%</div>
<div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Digital Literacy Rate</div>
<div className="text-xs font-body-md mt-2 text-on-surface-variant/60">Target by 2026</div>
</div>
<div className="text-center p-6 bg-surface rounded-lg border border-outline-variant shadow-sm">
<div className="font-display-lg text-display-lg text-forest-green mb-2">4.5k</div>
<div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Tech Jobs Created</div>
<div className="text-xs font-body-md mt-2 text-on-surface-variant/60">In 2023 FY</div>
</div>
<div className="text-center p-6 bg-surface rounded-lg border border-outline-variant shadow-sm">
<div className="font-display-lg text-display-lg text-forest-green mb-2">14</div>
<div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Patent Filings</div>
<div className="text-xs font-body-md mt-2 text-on-surface-variant/60">State Supported R&amp;D</div>
</div>
<div className="text-center p-6 bg-surface rounded-lg border border-outline-variant shadow-sm">
<div className="font-display-lg text-display-lg text-forest-green mb-2">$12M</div>
<div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Venture Funding</div>
<div className="text-xs font-body-md mt-2 text-on-surface-variant/60">Local Startup Growth</div>
</div>
</div>
</section>
{/*  Support Initiatives  */}
<section className="px-margin-desktop max-w-max-width mx-auto py-24">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
<div className="max-w-xl">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Empowering the Ecosystem</h2>
<p className="font-body-md text-body-md text-on-surface-variant">We provide the capital, mentorship, and legal framework required for the state's technology sector to thrive globally.</p>
</div>
<button className="font-label-md text-label-md text-forest-green flex items-center space-x-2 border border-outline-variant px-6 py-3 rounded-lg hover:bg-surface-container transition-all">
<span>View All Programs</span>
<span className="material-symbols-outlined">open_in_new</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 rounded-xl bg-surface border border-outline-variant group hover:border-forest-green transition-colors">
<span className="material-symbols-outlined text-4xl text-forest-green mb-6 block group-hover:scale-110 transition-transform">payments</span>
<h4 className="font-headline-md text-headline-md mb-3">Startup Seed Fund</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Equity-free grants up to ₦10M for innovative solutions addressing local challenges.</p>
<a className="font-label-md text-label-md text-forest-green font-bold group-hover:underline" href="#">Learn More</a>
</div>
<div className="p-8 rounded-xl bg-surface border border-outline-variant group hover:border-forest-green transition-colors">
<span className="material-symbols-outlined text-4xl text-forest-green mb-6 block group-hover:scale-110 transition-transform">school</span>
<h4 className="font-headline-md text-headline-md mb-3">Tech Talent Scholarship</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Full tuition coverage for Abia residents pursuing degrees in STEM and Robotics.</p>
<a className="font-label-md text-label-md text-forest-green font-bold group-hover:underline" href="#">Apply Now</a>
</div>
<div className="p-8 rounded-xl bg-surface border border-outline-variant group hover:border-forest-green transition-colors">
<span className="material-symbols-outlined text-4xl text-forest-green mb-6 block group-hover:scale-110 transition-transform">gavel</span>
<h4 className="font-headline-md text-headline-md mb-3">IP Protection Clinic</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Free legal consultation and patent filing assistance for Abia-based tech inventors.</p>
<a className="font-label-md text-label-md text-forest-green font-bold group-hover:underline" href="#">Book Session</a>
</div>
</div>
</section>
{/*  CTA Section  */}
<section className="mx-margin-desktop py-16 mb-24 rounded-2xl tech-gradient relative overflow-hidden">
<div className="absolute inset-0 opacity-20">

</div>
<div className="relative z-10 text-center max-w-3xl mx-auto px-6">
<h2 className="font-headline-lg text-headline-lg text-white mb-4">Build the Future of Abia</h2>
<p className="font-body-lg text-body-lg text-white/80 mb-10">Whether you are a developer, investor, or researcher, your contribution scales our digital sovereignty.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<button className="bg-state-white text-forest-green font-label-md text-label-md px-10 py-4 rounded shadow-lg hover:bg-opacity-90 transition-opacity">Submit Proposal</button>
<button className="bg-transparent border-2 border-white text-white font-label-md text-label-md px-10 py-4 rounded hover:bg-white/10 transition-colors">Contact Tech Taskforce</button>
</div>
</div>
</section>
{/*  Footer  */}
<footer className="bg-surface-container-highest border-t border-outline-variant">
<div className="w-full py-12 px-margin-desktop flex flex-col md:flex-row justify-between items-start max-w-max-width mx-auto gap-12">
<div className="max-w-sm">
<div className="font-headline-sm text-headline-sm font-bold text-forest-green mb-4 uppercase">ABIA ONE</div>
<p className="font-body-md text-body-md text-on-surface-variant">The unified digital interface for governance, commerce, and innovation in Abia State. Leading the South-East's digital renaissance.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
<div>
<h5 className="font-label-md text-label-md text-on-surface font-bold mb-4">Platform</h5>
<ul className="space-y-2">
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Invest</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Jobs</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Verify</a></li>
</ul>
</div>
<div>
<h5 className="font-label-md text-label-md text-on-surface font-bold mb-4">Legal</h5>
<ul className="space-y-2">
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h5 className="font-label-md text-label-md text-on-surface font-bold mb-4">Contact</h5>
<ul className="space-y-2">
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Us</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Press Office</a></li>
</ul>
</div>
</div>
</div>
<div className="w-full py-8 px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-max-width mx-auto border-t border-outline-variant">
<span className="font-caption text-caption text-on-surface-variant">© 2024 Abia State Government. All Rights Reserved.</span>
<div className="flex space-x-6 mt-4 md:mt-0">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green">language</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green">share</span>
</div>
</div>
</footer>
</main>


      </div>
    </>
  );
}
