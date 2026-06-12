export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { font-family: 'Hanken Grotesk', sans-serif; }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .nav-blur {\n            backdrop-filter: blur(12px);\n            -webkit-backdrop-filter: blur(12px);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface">
        
{/*  TopNavBar (Shared Component)  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-4">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep">ABIA ONE</span>
<div className="hidden md:flex gap-6 ml-8">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Economy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Digital Gov</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="#">Security</a>
</div>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md hover:opacity-90 transition-all">Citizen Portal</button>
<button className="px-4 py-2 border border-error text-error rounded-lg font-label-md text-label-md hover:bg-error/5 transition-all">Emergency</button>
</div>
</header>
{/*  SideNavBar (Shared Component - Desktop Only)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant pt-20 z-40">
<div className="px-4 mb-8">
<div className="flex items-center gap-3 p-3">
<div className="w-10 h-10 bg-primary-container rounded-full flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined">diversity_3</span>
</div>
<div>
<div className="font-headline-md text-headline-md text-sm font-bold text-forest-deep">ABIA ONE</div>
<div className="font-body-md text-xs text-on-surface-variant">Modern Governance OS</div>
</div>
</div>
</div>
<nav className="flex-grow space-y-1">
<a className="flex items-center gap-3 py-3 px-4 mx-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all font-label-sm text-label-sm" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span> Economic Transformation
            </a>
<a className="flex items-center gap-3 py-3 px-4 mx-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all font-label-sm text-label-sm" href="#">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span> Digital Government
            </a>
<a className="flex items-center gap-3 py-3 px-4 mx-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all font-label-sm text-label-sm" href="#">
<span className="material-symbols-outlined" data-icon="vptree">mitre</span> Transparent Governance
            </a>
<a className="flex items-center gap-3 py-3 px-4 mx-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all font-label-sm text-label-sm" href="#">
<span className="material-symbols-outlined" data-icon="security">security</span> Public Trust
            </a>
<div className="h-px bg-outline-variant mx-4 my-4"></div>
<a className="flex items-center gap-3 py-3 px-4 mx-2 bg-secondary-container text-on-secondary-container rounded-lg font-label-sm text-label-sm translate-x-1" href="#">
<span className="material-symbols-outlined" data-icon="female">female</span> Women &amp; Gender Affairs
            </a>
</nav>
<div className="p-4 mt-auto border-t border-outline-variant">
<button className="w-full py-2 bg-brass-gold text-on-primary font-label-md text-label-md rounded-lg mb-4">Citizen Feedback</button>
<div className="space-y-1">
<a className="flex items-center gap-3 py-2 px-4 text-on-surface-variant font-label-sm text-label-sm" href="#"><span className="material-symbols-outlined">settings</span> Settings</a>
<a className="flex items-center gap-3 py-2 px-4 text-on-surface-variant font-label-sm text-label-sm" href="#"><span className="material-symbols-outlined">help</span> Support</a>
</div>
</div>
</aside>
{/*  Main Content Area  */}
<main className="lg:ml-64 pt-20 pb-12 px-margin-mobile md:px-margin-desktop min-h-screen">
{/*  Hero Section with Animation  */}
<section className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden bg-primary-container flex items-center px-12">

<div className="relative z-10 max-w-2xl">
<span className="px-3 py-1 bg-brass-gold text-on-primary text-xs font-label-md rounded-full mb-4 inline-block">STATE INITIATIVE</span>
<h1 className="font-display-lg text-display-lg text-state-white mb-4">Empower Abia Women</h1>
<p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed mb-8">
                    Abia State is committed to building a future where every woman has the resources, protection, and opportunity to lead our economic and social transformation.
                </p>
<div className="flex gap-4">
<button className="px-8 py-3 bg-state-white text-primary font-label-md text-label-md rounded-lg hover:shadow-lg transition-all">Apply for Micro-Credit</button>
<button className="px-8 py-3 border border-state-white text-state-white font-label-md text-label-md rounded-lg hover:bg-state-white/10 transition-all">View Programs</button>
</div>
</div>
</section>
{/*  Bento Grid Initiatives  */}
<div className="bento-grid">
{/*  Micro-Credit Card (Span 8)  */}
<div className="col-span-12 md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-8 hover:shadow-md transition-all">
<div className="flex justify-between items-start mb-6">
<div>
<div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-on-secondary-container text-3xl">account_balance_wallet</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-forest-deep mb-2">Micro-Credit for Entrepreneurs</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Small-scale financing designed specifically for female-led businesses in commerce, agriculture, and tech.</p>
</div>
<div className="text-right">
<div className="text-3xl font-bold text-primary">₦2.5B</div>
<div className="text-xs font-label-md text-on-surface-variant uppercase">Fund Pool Available</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="p-4 bg-surface-container rounded-lg border border-outline-variant/30">
<div className="text-sm font-label-md text-on-surface-variant mb-1">Interest Rate</div>
<div className="text-lg font-bold text-forest-deep">4.5% Fixed</div>
</div>
<div className="p-4 bg-surface-container rounded-lg border border-outline-variant/30">
<div className="text-sm font-label-md text-on-surface-variant mb-1">Max Loan</div>
<div className="text-lg font-bold text-forest-deep">₦500,000</div>
</div>
<div className="p-4 bg-surface-container rounded-lg border border-outline-variant/30">
<div className="text-sm font-label-md text-on-surface-variant mb-1">Grace Period</div>
<div className="text-lg font-bold text-forest-deep">6 Months</div>
</div>
</div>
<button className="w-full py-4 bg-forest-green text-state-white rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 group">
                    Start New Application <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
{/*  Urgent Support (Span 4)  */}
<div className="col-span-12 md:col-span-4 bg-tertiary text-on-tertiary rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 bg-on-tertiary/20 rounded-lg flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-on-tertiary text-3xl">shield_with_heart</span>
</div>
<h2 className="font-headline-md text-headline-md mb-4 leading-tight">GBV Support &amp; Reporting</h2>
<p className="font-body-md text-body-md text-on-tertiary/80 mb-6">Confidential, immediate response and legal aid for gender-based violence survivors. You are not alone.</p>
</div>
<div className="relative z-10 space-y-4">
<button className="w-full py-3 bg-state-white text-tertiary font-bold rounded-lg flex items-center justify-center gap-2">
<span className="material-symbols-outlined">call</span> Call 0800-SAFE-ABIA
                    </button>
<button className="w-full py-3 border border-on-tertiary/40 hover:bg-on-tertiary/10 rounded-lg flex items-center justify-center gap-2">
<span className="material-symbols-outlined">chat_bubble</span> Anonymous Web Report
                    </button>
</div>
{/*  Subtle pattern  */}
<div className="absolute -bottom-8 -right-8 opacity-10">
<span className="material-symbols-outlined text-[12rem]">security</span>
</div>
</div>
{/*  Vocational Training (Span 6)  */}
<div className="col-span-12 md:col-span-6 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
<div className="h-48 w-full overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A bright, modern vocational training center in Abia State where diverse women are collaborating on digital textile design and fashion technology. The room is filled with high-end equipment, professional workspace tables, and vibrant fabric samples. The atmosphere is productive and professional, reflecting the modern governance OS style with soft natural lighting and clean, structured organization." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlx6FY5IHLuAE1f9_uSj2P-ZGEexlWGC-yZLg0nJs3Bsk5-D9YFJ4q6nY0w3fMgiRrnwcEUxSeMqj0NhOo0gVZdMZcURCTrlYtM4r9oPxTH76qcnSqxLmf-VKwGiY_2JGQFV14JtXJV2CRK6Hc41SCKIk7cnkPQt4PYS7rhGaZ07LlBtLj9PsxBFwN-jb27XLE5sKEgYsepNK2ZBaQWuy7d_aFcsTmh68nvAjCxjnvhD_SBSIPw8Uabld191MMSfffUrK4Imju9kI" />
</div>
<div className="p-8">
<h3 className="font-headline-md text-headline-md text-forest-deep mb-2">Vocational Skill Acquisition</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Register for the 2024 cohort in Textile Design, ICT, Agri-Processing, and Advanced Logistics.</p>
<div className="space-y-3 mb-8">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">check_circle</span>
<span className="text-sm font-body-md">Certification from State Board of Education</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">check_circle</span>
<span className="text-sm font-body-md">Post-training business starter kits</span>
</div>
</div>
<a className="inline-flex items-center gap-2 font-label-md text-label-md text-forest-green font-bold group" href="#">
                        Browse Courses <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
{/*  Maternal Health (Span 6)  */}
<div className="col-span-12 md:col-span-6 bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
<div className="h-48 w-full overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A clean, state-of-the-art maternal health clinic in Abia with soft teal and white walls. A female doctor is consulting with a smiling patient in a bright, modern consultation room equipped with the latest medical technology. The scene emphasizes high-quality healthcare infrastructure, institutional reliability, and professional care in a modern, light-mode aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuArsxKVpi50yWBW_LGWLTPH3CQEIDzOlSUU3Ow2vodw4BeXiTEoC7GsGfjny1T76ZsO4ws-uhHl1izxdhQ9qIdUxUjmARnLPTkrAMcNMEwgnVO6fxnLk-YuBUrEUG6Ogi-BnHnMvmLxbZoGietxSXwwWEsbJmGkp8Lma3Ehwx22VxmwCRzEyniL7QN-8qCXE2Zo1tWbJb9TVJcz7h_Rq2_3mgPrpA2vhffaSRvA146HG54_Ci6Zz4hi6BlvRDOoM2IwWnxVoLfb910" />
</div>
<div className="p-8">
<h3 className="font-headline-md text-headline-md text-forest-deep mb-2">Maternal Health Care Resources</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Access subsidized prenatal care, postnatal support, and expert nutritional guidance for mothers.</p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="p-3 bg-background rounded-lg text-center border border-outline-variant/30">
<div className="text-xs font-label-md text-on-surface-variant uppercase">Clinics Online</div>
<div className="text-lg font-bold">142</div>
</div>
<div className="p-3 bg-background rounded-lg text-center border border-outline-variant/30">
<div className="text-xs font-label-md text-on-surface-variant uppercase">E-Consults</div>
<div className="text-lg font-bold">24/7</div>
</div>
</div>
<a className="inline-flex items-center gap-2 font-label-md text-label-md text-forest-green font-bold group" href="#">
                        Find Nearby Clinic <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">location_on</span>
</a>
</div>
</div>
</div>
{/*  Progress Metrics  */}
<section className="mt-12 bg-forest-deep text-state-white rounded-xl p-10 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="text-center border-r border-state-white/10 last:border-0">
<div className="text-4xl font-bold mb-2">15,000+</div>
<div className="text-sm font-label-md text-primary-fixed uppercase tracking-wider">Women Trained</div>
</div>
<div className="text-center border-r border-state-white/10 last:border-0">
<div className="text-4xl font-bold mb-2">₦4.2B</div>
<div className="text-sm font-label-md text-primary-fixed uppercase tracking-wider">Disbursed</div>
</div>
<div className="text-center border-r border-state-white/10 last:border-0">
<div className="text-4xl font-bold mb-2">85%</div>
<div className="text-sm font-label-md text-primary-fixed uppercase tracking-wider">Success Rate</div>
</div>
<div className="text-center border-r border-state-white/10 last:border-0">
<div className="text-4xl font-bold mb-2">17</div>
<div className="text-sm font-label-md text-primary-fixed uppercase tracking-wider">LGAs Impacted</div>
</div>
</section>
</main>
{/*  Footer (Shared Component)  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto border-t border-outline-variant py-12">
<div className="max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<div className="font-headline-lg text-headline-lg text-forest-deep mb-4">ABIA ONE</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Driving the digital and economic sovereignty of Abia State through inclusive governance and transparent technology.</p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-forest-green cursor-pointer hover:scale-110 transition-transform">public</span>
<span className="material-symbols-outlined text-forest-green cursor-pointer hover:scale-110 transition-transform">share</span>
<span className="material-symbols-outlined text-forest-green cursor-pointer hover:scale-110 transition-transform">mail</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h4 className="font-label-caps text-label-caps font-bold mb-4">Platforms</h4>
<ul className="space-y-2">
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Invest Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Serve Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Build Abia</a></li>
</ul>
</div>
<div>
<h4 className="font-label-caps text-label-caps font-bold mb-4">Resources</h4>
<ul className="space-y-2">
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Open Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="font-label-caps text-label-caps font-bold mb-4">Newsletter</h4>
<div className="flex">
<input className="bg-surface-container border border-outline rounded-l-lg px-4 py-2 w-full focus:ring-primary focus:border-primary" placeholder="Email address" type="email" />
<button className="bg-primary text-on-primary px-4 py-2 rounded-r-lg font-label-md">Join</button>
</div>
</div>
</div>
</div>
<div className="max-w-container-max-width mx-auto mt-12 pt-8 border-t border-outline-variant text-center">
<p className="font-body-md text-body-md text-on-surface-variant">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
</div>
</footer>


      </div>
    </>
  );
}
