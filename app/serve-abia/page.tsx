export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(8px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .custom-scrollbar::-webkit-scrollbar {\n            width: 4px;\n        }\n        .custom-scrollbar::-webkit-scrollbar-track {\n            background: transparent;\n        }\n        .custom-scrollbar::-webkit-scrollbar-thumb {\n            background: #006838;\n            border-radius: 10px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-surface text-on-surface font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
        
{/*  Top Navigation Bar  */}
<header className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant">
<nav className="flex justify-between items-center h-16 px-margin-desktop max-w-max-width mx-auto">
<div className="flex items-center gap-8">
<span className="font-headline-md text-headline-md text-forest-green font-semibold tracking-tighter cursor-pointer">ABIA ONE</span>
<div className="hidden md:flex gap-6">
<a className="font-body-md text-body-md text-forest-green border-b-2 border-forest-green pb-1 cursor-pointer transition-all" href="#">Serve Abia</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-forest-green transition-colors cursor-pointer" href="#">Jobs Abia</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-forest-green transition-colors cursor-pointer" href="#">AI Academy</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-forest-green transition-colors cursor-pointer" href="#">Connect Abia</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 px-6 py-2 bg-forest-green text-state-white font-body-md rounded-lg active:opacity-80 transition-all">
<span className="material-symbols-outlined text-[20px]">account_balance</span>
                    Citizen Portal
                </button>
<span className="material-symbols-outlined md:hidden text-on-surface cursor-pointer">menu</span>
</div>
</nav>
</header>
<main className="pt-16 min-h-screen">
{/*  Hero Section  */}
<section className="relative w-full py-24 overflow-hidden">

<div className="max-w-max-width mx-auto px-margin-desktop relative z-10">
<div className="max-w-3xl">
<h1 className="font-display-lg text-display-lg text-on-surface mb-6 leading-tight">
                        Government Services, <br /> <span className="text-forest-green">Simplified for You.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
                        Access state services, track applications, and manage your interactions with the Abia State Government through one secure digital gateway.
                    </p>
<div className="relative group">
<div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline">search</span>
</div>
<input className="w-full bg-state-white border-2 border-outline-variant h-16 pl-14 pr-32 rounded-xl font-body-lg focus:border-forest-green focus:ring-0 transition-all shadow-sm group-hover:shadow-md" placeholder="Search for a service (e.g. Land Permit, Tax)" type="text" />
<button className="absolute right-3 top-3 bottom-3 px-8 bg-forest-green text-state-white font-body-md rounded-lg hover:bg-primary transition-colors">
                            Find Service
                        </button>
</div>
<div className="mt-6 flex flex-wrap gap-4">
<span className="font-label-md text-label-md text-on-surface-variant">Popular:</span>
<a className="text-forest-green font-label-md underline underline-offset-4 decoration-outline-variant hover:decoration-forest-green transition-all" href="#">TIN Registration</a>
<a className="text-forest-green font-label-md underline underline-offset-4 decoration-outline-variant hover:decoration-forest-green transition-all" href="#">ASOPADEC Grant</a>
<a className="text-forest-green font-label-md underline underline-offset-4 decoration-outline-variant hover:decoration-forest-green transition-all" href="#">School Portal</a>
</div>
</div>
</div>
</section>
{/*  Quick Services Grid & Tracker  */}
<section className="max-w-max-width mx-auto px-margin-desktop py-12">
<div className="bento-grid">
{/*  Quick Services  */}
<div className="col-span-12 lg:col-span-8">
<div className="flex items-center justify-between mb-6">
<h2 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3">
<span className="w-1.5 h-8 bg-brass-gold"></span>
                            Quick Services
                        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Service Card 1  */}
<div className="group bg-state-white p-6 rounded-xl border border-outline-variant hover:border-forest-green hover:shadow-lg transition-all cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-4 group-hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-forest-green group-hover:text-state-white">business_center</span>
</div>
<h3 className="font-headline-md text-[18px] text-on-surface mb-2">Business Registration</h3>
<p className="font-body-md text-on-surface-variant mb-4">Register new business names and incorporate companies with the state ministry.</p>
<span className="text-forest-green font-label-md flex items-center gap-1 group-hover:translate-x-1 transition-transform">Start Application <span className="material-symbols-outlined text-[16px]">arrow_forward</span></span>
</div>
{/*  Service Card 2  */}
<div className="group bg-state-white p-6 rounded-xl border border-outline-variant hover:border-forest-green hover:shadow-lg transition-all cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-4 group-hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-forest-green group-hover:text-state-white">directions_car</span>
</div>
<h3 className="font-headline-md text-[18px] text-on-surface mb-2">Vehicle Licensing</h3>
<p className="font-body-md text-on-surface-variant mb-4">Renew vehicle documents, plate numbers, and driver certifications instantly.</p>
<span className="text-forest-green font-label-md flex items-center gap-1 group-hover:translate-x-1 transition-transform">Manage Fleet <span className="material-symbols-outlined text-[16px]">arrow_forward</span></span>
</div>
{/*  Service Card 3  */}
<div className="group bg-state-white p-6 rounded-xl border border-outline-variant hover:border-forest-green hover:shadow-lg transition-all cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-4 group-hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-forest-green group-hover:text-state-white">real_estate_agent</span>
</div>
<h3 className="font-headline-md text-[18px] text-on-surface mb-2">Property Taxes</h3>
<p className="font-body-md text-on-surface-variant mb-4">Check LUC status, pay land charges, and download official payment receipts.</p>
<span className="text-forest-green font-label-md flex items-center gap-1 group-hover:translate-x-1 transition-transform">Pay Now <span className="material-symbols-outlined text-[16px]">arrow_forward</span></span>
</div>
{/*  Service Card 4  */}
<div className="group bg-state-white p-6 rounded-xl border border-outline-variant hover:border-forest-green hover:shadow-lg transition-all cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center mb-4 group-hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-forest-green group-hover:text-state-white">health_and_safety</span>
</div>
<h3 className="font-headline-md text-[18px] text-on-surface mb-2">Health Insurance</h3>
<p className="font-body-md text-on-surface-variant mb-4">Enroll in Abia State Health Insurance Scheme (ASHIA) for affordable care.</p>
<span className="text-forest-green font-label-md flex items-center gap-1 group-hover:translate-x-1 transition-transform">Enroll Today <span className="material-symbols-outlined text-[16px]">arrow_forward</span></span>
</div>
</div>
</div>
{/*  Application Tracker Widget  */}
<div className="col-span-12 lg:col-span-4">
<div className="bg-surface-container-low border border-outline-variant rounded-xl p-8 sticky top-24 h-fit">
<div className="flex items-center justify-between mb-8">
<h2 className="font-headline-md text-[20px] text-on-surface">Application Tracker</h2>
<span className="material-symbols-outlined text-forest-green">monitoring</span>
</div>
<div className="space-y-6">
{/*  Track Item  */}
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-forest-green flex items-center justify-center text-state-white">
<span className="material-symbols-outlined text-[18px]" data-weight="fill">check</span>
</div>
<div className="w-0.5 h-full bg-outline-variant"></div>
</div>
<div className="pb-6">
<p className="font-headline-md text-[16px] text-on-surface">Business Permit Application</p>
<p className="font-caption text-caption text-on-surface-variant">Ref: AB-2024-88912</p>
<div className="mt-2 inline-flex px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-[12px] font-bold">Approved</div>
</div>
</div>
{/*  Track Item  */}
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined text-[18px]">sync</span>
</div>
<div className="w-0.5 h-full bg-outline-variant"></div>
</div>
<div className="pb-6">
<p className="font-headline-md text-[16px] text-on-surface">Certificate of Occupancy</p>
<p className="font-caption text-caption text-on-surface-variant">Ref: AB-2024-77211</p>
<div className="mt-2 inline-flex px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant text-[12px] font-bold">Reviewing Docs</div>
</div>
</div>
{/*  Track Item  */}
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border-2 border-outline flex items-center justify-center text-outline">
<span className="material-symbols-outlined text-[18px]">pending</span>
</div>
</div>
<div>
<p className="font-headline-md text-[16px] text-on-surface">Civil Servant ID Portal</p>
<p className="font-caption text-caption text-on-surface-variant">Ref: AB-2024-90123</p>
<div className="mt-2 inline-flex px-3 py-1 rounded-full bg-surface-variant text-on-surface-variant text-[12px] font-bold">Pending</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant">
<label className="block font-label-md text-on-surface-variant mb-2">Track by ID</label>
<div className="flex gap-2">
<input className="w-full h-10 px-4 bg-state-white border border-outline-variant rounded focus:border-forest-green focus:ring-0" placeholder="Enter Ref ID" type="text" />
<button className="h-10 px-4 bg-forest-green text-state-white rounded">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Service Directory  */}
<section className="bg-surface-container py-20">
<div className="max-w-max-width mx-auto px-margin-desktop">
<div className="mb-12">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Service Directory</h2>
<p className="font-body-md text-on-surface-variant">Comprehensive listing of all state government digital touchpoints.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{/*  Business Sector  */}
<div className="space-y-6">
<div className="flex items-center gap-3 border-b-2 border-brass-gold pb-3">
<span className="material-symbols-outlined text-forest-green">storefront</span>
<h3 className="font-headline-md text-[18px] text-on-surface uppercase tracking-wider">Business</h3>
</div>
<ul className="space-y-3">
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Tax Clearance Certificates</a></li>
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Trade Licenses</a></li>
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Small Business Grants</a></li>
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Export Permits</a></li>
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Contractor Registration</a></li>
</ul>
</div>
{/*  Infrastructure Sector  */}
<div className="space-y-6">
<div className="flex items-center gap-3 border-b-2 border-brass-gold pb-3">
<span className="material-symbols-outlined text-forest-green">foundation</span>
<h3 className="font-headline-md text-[18px] text-on-surface uppercase tracking-wider">Infrastructure</h3>
</div>
<ul className="space-y-3">
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Building Plan Approval</a></li>
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Land Ownership Records</a></li>
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Utility Connections</a></li>
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Waste Management Fees</a></li>
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">GIS Mapping Services</a></li>
</ul>
</div>
{/*  Education Sector  */}
<div className="space-y-6">
<div className="flex items-center gap-3 border-b-2 border-brass-gold pb-3">
<span className="material-symbols-outlined text-forest-green">school</span>
<h3 className="font-headline-md text-[18px] text-on-surface uppercase tracking-wider">Education</h3>
</div>
<ul className="space-y-3">
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Scholarship Applications</a></li>
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Primary School Enrollment</a></li>
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Teacher Certification</a></li>
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Adult Literacy Programs</a></li>
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Library Digital Access</a></li>
</ul>
</div>
{/*  Health Sector  */}
<div className="space-y-6">
<div className="flex items-center gap-3 border-b-2 border-brass-gold pb-3">
<span className="material-symbols-outlined text-forest-green">medical_services</span>
<h3 className="font-headline-md text-[18px] text-on-surface uppercase tracking-wider">Health</h3>
</div>
<ul className="space-y-3">
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Health Facility Finder</a></li>
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Immunization Schedules</a></li>
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Medical Practitioner License</a></li>
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Blood Bank Registry</a></li>
<li><a className="text-body-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Vital Statistics Reports</a></li>
</ul>
</div>
</div>
</div>
</section>
{/*  CTA Section with Image  */}
<section className="relative h-96 w-full flex items-center justify-center overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="A professional collaborative workspace with modern office design in Abia State. The scene features light-filled interiors, sleek wooden desks, and young Nigerian professionals engaged in technical discussions around laptops and large data displays. The lighting is bright and airy, reflecting a light-mode corporate aesthetic with Forest Green accents in the decor and digital interfaces. The atmosphere conveys innovation, government efficiency, and a prosperous digital future for the state." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWncER5DaRvyXOnn1jSt6tETHIspglQSQKYNu-dnhqL1gPKo6Ke8RE13rfK9-ASH-TpZinrbxcOTyVxz_iRgc5CqDcn0J3j9DyomZQj9r-DdxtOob-zyBSV09MVscE2cJ-6eFYPjOeNLyyfCLNtmvqsBCKl7RBRXN2Spmlj4BV2L_Se9wKVxCmWqtDgyK2IT5zxZzKCLE5JZkAGGkMCRtUUXM5jepvCBoSktgTHsw-w8YoAttPQGfpYjLSnGOEXJz9cul7NZuawq4" />
<div className="absolute inset-0 bg-forest-green/80 backdrop-blur-sm"></div>
<div className="relative z-10 text-center max-w-2xl px-margin-mobile">
<h2 className="font-headline-lg text-headline-lg text-state-white mb-6">Need expert assistance?</h2>
<p className="font-body-lg text-state-white/90 mb-8">Our help desk is available 24/7 to guide you through any application process or technical issue.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-3 bg-brass-gold text-on-secondary-fixed font-bold rounded hover:opacity-90 transition-all">Start Live Chat</button>
<button className="px-8 py-3 bg-transparent border-2 border-state-white text-state-white font-bold rounded hover:bg-state-white/10 transition-all">Visit FAQ Center</button>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-low border-t border-outline-variant">
<div className="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-12">
<div className="md:col-span-1">
<span className="font-headline-md text-headline-md text-forest-green font-bold mb-4 block">ABIA ONE</span>
<p className="font-caption text-caption text-on-surface-variant max-w-xs">The unified digital operating system for the Abia State Government. Empowering citizens through technology and transparent governance.</p>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-label-md text-on-surface font-bold uppercase mb-2">Resources</h4>
<a className="font-caption text-caption text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Transparency Portals</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Institutional News</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-brass-gold transition-colors" href="#">State Budget</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-label-md text-on-surface font-bold uppercase mb-2">Legal</h4>
<a className="font-caption text-caption text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Terms of Service</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-brass-gold transition-colors" href="#">FOI Requests</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-label-md text-on-surface font-bold uppercase mb-2">Support</h4>
<a className="font-caption text-caption text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Support</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Office Locator</a>
<a className="font-caption text-caption text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Report a Bug</a>
</div>
</div>
<div className="max-w-max-width mx-auto px-margin-desktop py-6 border-t border-outline-variant flex justify-between items-center">
<p className="font-caption text-caption text-on-surface-variant">© 2024 Abia State Government. All Rights Reserved.</p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-outline hover:text-forest-green cursor-pointer">face_nod</span>
<span className="material-symbols-outlined text-outline hover:text-forest-green cursor-pointer">public</span>
<span className="material-symbols-outlined text-outline hover:text-forest-green cursor-pointer">mail</span>
</div>
</div>
</footer>
{/*  Mobile Bottom Navigation  */}
<div className="md:hidden fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant h-16 flex items-center justify-around px-4 z-50">
<button className="flex flex-col items-center gap-1 text-forest-green">
<span className="material-symbols-outlined" data-weight="fill">home</span>
<span className="text-[10px] font-bold">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">explore</span>
<span className="text-[10px]">Directory</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">description</span>
<span className="text-[10px]">Track</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">person</span>
<span className="text-[10px]">Profile</span>
</button>
</div>


      </div>
    </>
  );
}
