"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body {\n            font-family: 'Hanken Grotesk', sans-serif;\n            -webkit-font-smoothing: antialiased;\n        }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .card-shadow {\n            border: 1px solid #E2E8F0;\n        }\n        .brass-accent {\n            position: relative;\n        }\n        .brass-accent::after {\n            content: '';\n            position: absolute;\n            bottom: -4px;\n            left: 0;\n            width: 32px;\n            height: 2px;\n            background-color: #D4AF37;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background">
        
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 bg-background border-b border-outline-variant">
<div className="flex justify-between items-center px-64 h-20 max-w-[1440px] mx-auto">
<div className="font-display-lg text-display-lg font-bold text-primary">ABIA ONE</div>
<nav className="hidden md:flex gap-8">
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Economy</a>
<a className="text-primary border-b-2 border-brass-gold font-semibold pb-1 cursor-pointer" href="#">Digital Gov</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Governance</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="#">Security</a>
</nav>
<button className="bg-primary text-on-primary px-6 py-2 font-medium rounded-lg hover:opacity-90 transition-all active:opacity-80">Citizen Portal</button>
</div>
</header>
{/*  SideNavBar (Desktop)  */}
<aside className="fixed left-0 top-20 h-screen w-64 bg-surface-container-low border-r border-outline-variant py-6 hidden lg:flex flex-col">
<div className="px-6 mb-8">
<h2 className="font-headline-md text-headline-md font-bold text-primary">Navigation</h2>
<p className="text-caption text-on-surface-variant">State Operating System</p>
</div>
<nav className="flex-1">
<div className="flex flex-col">
<a className="flex items-center gap-3 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors group" href="#">
<span className="material-symbols-outlined group-hover:text-primary">payments</span>
<span className="font-body-md">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 text-forest-green font-bold border-l-4 border-brass-gold bg-surface-container-high px-6 py-3" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-body-md">Digital Government</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors group" href="#">
<span className="material-symbols-outlined group-hover:text-primary">gavel</span>
<span className="font-body-md">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors group" href="#">
<span className="material-symbols-outlined group-hover:text-primary">verified_user</span>
<span className="font-body-md">Public Trust</span>
</a>
</div>
</nav>
<div className="px-6 mt-auto flex flex-col gap-2 pb-24">
<a className="flex items-center gap-3 text-on-surface-variant py-2 hover:text-primary" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-caption">Settings</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant py-2 hover:text-primary" href="#">
<span className="material-symbols-outlined">help</span>
<span className="text-caption">Support</span>
</a>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="lg:ml-64 pt-20 min-h-screen">
{/*  Hero Section  */}
<section className="relative h-80 flex items-center overflow-hidden bg-primary-container">

<div className="relative z-10 px-margin-desktop max-w-max-width">
<h1 className="font-display-lg text-display-lg text-on-primary mb-4">Serve Abia</h1>
<p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl">Access essential government services, apply for permits, and track your applications in real-time. Abia's digital layer for seamless citizen interaction.</p>
<div className="mt-8 flex gap-4">
<div className="relative flex-1 max-w-md">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full pl-12 pr-4 py-3 bg-surface-container-lowest rounded-lg border-none focus:ring-2 focus:ring-brass-gold text-on-surface" placeholder="Search for a service (e.g. Tax, Land Permit)" type="text" />
</div>
<button className="bg-brass-gold text-on-secondary-fixed px-8 py-3 font-semibold rounded-lg hover:bg-opacity-90 transition-all">Quick Search</button>
</div>
</div>
</section>
<div className="p-margin-desktop max-w-max-width mx-auto">
{/*  Bento Grid Section  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
{/*  Tax & Revenue Portal  */}
<div className="md:col-span-8 bg-surface-container-lowest p-8 rounded-xl card-shadow group hover:border-forest-green transition-colors">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="font-headline-md text-headline-md text-primary brass-accent">Tax &amp; Revenue Portal</h3>
<p className="text-on-surface-variant mt-4 font-body-md">Settle individual or corporate taxes through our encrypted gateway.</p>
</div>
<span className="material-symbols-outlined text-4xl text-brass-gold">payments</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<button className="flex items-center justify-between p-4 bg-surface-container rounded border border-outline-variant hover:bg-primary hover:text-white transition-all group/btn">
<span className="font-medium">Direct Assessment</span>
<span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="flex items-center justify-between p-4 bg-surface-container rounded border border-outline-variant hover:bg-primary hover:text-white transition-all group/btn">
<span className="font-medium">Company Tax (CIT)</span>
<span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="flex items-center justify-between p-4 bg-surface-container rounded border border-outline-variant hover:bg-primary hover:text-white transition-all group/btn">
<span className="font-medium">Property Rates</span>
<span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="flex items-center justify-between p-4 bg-surface-container rounded border border-outline-variant hover:bg-primary hover:text-white transition-all group/btn">
<span className="font-medium">Generate ASIN</span>
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
{/*  Active Applications Dashboard  */}
<div className="md:col-span-4 bg-surface-dim p-8 rounded-xl card-shadow flex flex-col">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-primary">pending_actions</span>
<h3 className="font-headline-md text-headline-md text-on-surface">My Applications</h3>
</div>
<div className="space-y-4 flex-1">
<div className="bg-surface-container-lowest p-4 rounded-lg border-l-4 border-brass-gold">
<div className="flex justify-between items-start">
<span className="font-semibold text-primary">Building Permit</span>
<span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] uppercase font-bold rounded">In Review</span>
</div>
<p className="text-caption text-on-surface-variant mt-1">Ref: AB-2024-8812</p>
<div className="w-full bg-surface-container-high h-1.5 mt-3 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[65%]"></div>
</div>
</div>
<div className="bg-surface-container-lowest p-4 rounded-lg border-l-4 border-forest-green">
<div className="flex justify-between items-start">
<span className="font-semibold text-primary">Business Reg.</span>
<span className="px-2 py-1 bg-primary-fixed text-on-primary-fixed text-[10px] uppercase font-bold rounded">Approved</span>
</div>
<p className="text-caption text-on-surface-variant mt-1">Ref: AB-BUS-0042</p>
<div className="w-full bg-surface-container-high h-1.5 mt-3 rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-full"></div>
</div>
</div>
</div>
<button className="mt-6 text-primary font-semibold flex items-center gap-2 hover:underline">
                        View All Applications <span className="material-symbols-outlined">east</span>
</button>
</div>
{/*  Licenses & Applications  */}
<div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl card-shadow hover:shadow-lg transition-all cursor-pointer group">
<div className="w-12 h-12 bg-primary-container text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">domain</span>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface mb-2">Business Registration</h4>
<p className="text-on-surface-variant font-body-md mb-4">Start and formalize your enterprise in Abia with integrated CAC tracking.</p>
<span className="text-forest-green font-bold text-sm">Start Application →</span>
</div>
<div className="bg-white p-6 rounded-xl card-shadow hover:shadow-lg transition-all cursor-pointer group">
<div className="w-12 h-12 bg-primary-container text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">landscape</span>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface mb-2">Land Use Permits</h4>
<p className="text-on-surface-variant font-body-md mb-4">Digital processing for Certificate of Occupancy (C of O) and Land verification.</p>
<span className="text-forest-green font-bold text-sm">Apply Now →</span>
</div>
<div className="bg-white p-6 rounded-xl card-shadow hover:shadow-lg transition-all cursor-pointer group">
<div className="w-12 h-12 bg-primary-container text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined">traffic</span>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface mb-2">Vehicle Licensing</h4>
<p className="text-on-surface-variant font-body-md mb-4">Renew driver's licenses, plate numbers, and roadworthiness certificates.</p>
<span className="text-forest-green font-bold text-sm">Fast Track →</span>
</div>
</div>
</div>
{/*  Service Directory Section  */}
<section className="mt-16">
<div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary brass-accent">Service Directory</h2>
<p className="text-on-surface-variant mt-4">Browse our full catalog of state services categorized by sector.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 bg-primary text-on-primary rounded font-medium">All Sectors</button>
<button className="px-4 py-2 bg-surface-container-high text-on-surface-variant rounded font-medium hover:bg-surface-variant">Health</button>
<button className="px-4 py-2 bg-surface-container-high text-on-surface-variant rounded font-medium hover:bg-surface-variant">Education</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Business Sector  */}
<div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary">business_center</span>
<h5 className="font-semibold text-primary">Business</h5>
</div>
<ul className="space-y-3 text-sm text-on-surface-variant">
<li className="hover:text-primary cursor-pointer transition-colors">• Trade Fair Registration</li>
<li className="hover:text-primary cursor-pointer transition-colors">• SME Grant Applications</li>
<li className="hover:text-primary cursor-pointer transition-colors">• Export Readiness Certification</li>
<li className="hover:text-primary cursor-pointer transition-colors">• Industrial Park Access</li>
</ul>
</div>
{/*  Infrastructure  */}
<div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary">construction</span>
<h5 className="font-semibold text-primary">Infrastructure</h5>
</div>
<ul className="space-y-3 text-sm text-on-surface-variant">
<li className="hover:text-primary cursor-pointer transition-colors">• Utility Connection Requests</li>
<li className="hover:text-primary cursor-pointer transition-colors">• Public Works Tendering</li>
<li className="hover:text-primary cursor-pointer transition-colors">• Road Maintenance Reports</li>
<li className="hover:text-primary cursor-pointer transition-colors">• Town Planning Consult</li>
</ul>
</div>
{/*  Education  */}
<div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary">school</span>
<h5 className="font-semibold text-primary">Education</h5>
</div>
<ul className="space-y-3 text-sm text-on-surface-variant">
<li className="hover:text-primary cursor-pointer transition-colors">• Scholarship Portal</li>
<li className="hover:text-primary cursor-pointer transition-colors">• Teacher Certification</li>
<li className="hover:text-primary cursor-pointer transition-colors">• School Accreditation</li>
<li className="hover:text-primary cursor-pointer transition-colors">• Library Digital Access</li>
</ul>
</div>
{/*  Health  */}
<div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary">medical_services</span>
<h5 className="font-semibold text-primary">Health</h5>
</div>
<ul className="space-y-3 text-sm text-on-surface-variant">
<li className="hover:text-primary cursor-pointer transition-colors">• State Health Insurance</li>
<li className="hover:text-primary cursor-pointer transition-colors">• Pharmacy Licensing</li>
<li className="hover:text-primary cursor-pointer transition-colors">• Birth/Death Registration</li>
<li className="hover:text-primary cursor-pointer transition-colors">• Medical Facility Search</li>
</ul>
</div>
</div>
</section>
{/*  Bottom CTA / Support  */}
<section className="my-20 bg-forest-green rounded-2xl p-12 text-center text-on-primary relative overflow-hidden">
<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute top-0 left-0 w-full h-full" style={{"backgroundImage":"radial-gradient(circle at 2px 2px, white 1px, transparent 0)","backgroundSize":"40px 40px"}}></div>
</div>
<div className="relative z-10">
<h2 className="font-headline-lg text-headline-lg mb-4">Need Personalized Assistance?</h2>
<p className="font-body-lg mb-8 max-w-xl mx-auto">Our support team is available 24/7 to help you navigate through state services and application processes.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-forest-green px-8 py-3 font-bold rounded-lg hover:bg-opacity-90 transition-all">Chat with Support</button>
<button className="border-2 border-white text-white px-8 py-3 font-bold rounded-lg hover:bg-white hover:text-forest-green transition-all">Knowledge Base</button>
</div>
</div>
</section>
</div>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-highest border-t border-outline-variant">
<div className="flex flex-col md:flex-row justify-between items-center py-gutter px-64 max-w-[1440px] mx-auto">
<div className="flex flex-col items-center md:items-start">
<div className="font-headline-md text-headline-md text-primary mb-2">ABIA ONE</div>
<p className="text-caption text-on-surface-variant">© 2024 Abia State Government. All rights reserved. Built for the future of governance.</p>
</div>
<div className="flex gap-8 mt-6 md:mt-0">
<a className="text-on-surface-variant hover:text-primary transition-colors text-caption" href="#">Institutional Links</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-caption" href="#">Transparency Info</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-caption" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-caption" href="#">Contact Support</a>
</div>
</div>
</footer>


      </div>
    </>
  );
}
