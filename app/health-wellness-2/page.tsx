"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .clinic-grid-pattern {\n            background-image: radial-gradient(#006838 0.5px, transparent 0.5px);\n            background-size: 24px 24px;\n            opacity: 0.05;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background font-body-md text-on-surface">
        
{/*  Top Navigation Shell  */}
<header className="bg-surface border-b border-outline-variant fixed top-0 w-full z-50">
<nav className="flex justify-between items-center w-full px-margin-desktop max-w-max-width mx-auto h-16">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md font-bold text-forest-green">ABIA ONE</span>
<span className="h-6 w-px bg-outline-variant"></span>
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Health</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="font-label-md text-label-md text-forest-green border-b-2 border-brass-gold pb-1 transition-colors" href="/invest-in-aba">Invest</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="/jobs-abia">Jobs</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="/serve-abia">Serve</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Verify</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="/local-governance">Governance</a>
</div>
<div className="flex items-center gap-6">
<div className="flex gap-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green">language</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green">notifications</span>
</div>
<button className="bg-forest-green text-state-white px-6 py-2 rounded-lg font-label-md text-label-md font-medium hover:opacity-90 transition-opacity">
                    Sign In
                </button>
</div>
</nav>
</header>
<main className="pt-16">
{/*  Hero Section  */}
<section className="relative h-[500px] flex items-center overflow-hidden bg-surface-container-low">
<div className="absolute inset-0 clinic-grid-pattern"></div>
<div className="max-w-max-width mx-auto px-margin-desktop w-full grid grid-cols-12 gap-gutter relative z-10">
<div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full mb-6 w-fit">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span className="font-label-md text-[12px] uppercase font-bold tracking-widest">State Insurance Scheme Active</span>
</div>
<h1 className="font-display-lg text-display-lg text-on-surface mb-4 leading-tight">
                        Quality Healthcare for <br /><span className="text-forest-green">Every Citizen.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-8">
                        The Abia State Ministry of Health is committed to a streamlined, data-driven approach to public wellness. Access your insurance, find facilities, and stay informed through the state's digital health infrastructure.
                    </p>
<div className="flex gap-4">
<button className="bg-forest-green text-state-white px-8 py-4 rounded-lg font-headline-md text-body-md font-semibold hover:bg-primary transition-all flex items-center gap-2">
                            Enroll in Insurance <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="border-2 border-brass-gold text-secondary px-8 py-4 rounded-lg font-headline-md text-body-md font-semibold hover:bg-secondary-fixed transition-all">
                            Find Facility
                        </button>
</div>
</div>
<div className="hidden lg:block col-span-5 relative h-full">
<div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-2xl border border-outline-variant overflow-hidden shadow-xl transform rotate-2">
<img alt="Modern Abia Health Center" className="w-full h-full object-cover opacity-90" data-alt="A brightly lit, modern medical facility interior with clean white walls and polished floors. A diverse group of professional healthcare workers in white coats and scrubs are seen consulting in a state-of-the-art diagnostic room. The lighting is soft and clinical, emphasizing high hygiene standards and advanced medical technology in a professional Abia State healthcare setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjm57LKdFu1gXUXkR-lQ_ZxE17fBMqmSkyG4QpsVh5bEy_Sp-QGuYQKkZ719x1Jvr9UMXVbW-9X2-ukHkej-kCRdJ8jsZkzQFny9QKlYVRuCpkJZqKVlaw83Jlh6BC5FytottZC7h2AWzzv6nR7cUjcS5epgMng3ytsjd2-oNevXYYVPzkqhC9ejH8iZ2av9fbqEDc3Da0Gzgdvx9Smb7IF7Xjfawy0rw3Mv2LbZQuqYpz_PasFI0IF7qQjpDO-lts6vmXkibf_v0" />
</div>
<div className="absolute -bottom-6 -left-6 bg-state-white p-6 rounded-xl border border-outline-variant shadow-lg max-w-[240px]">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-forest-green" style={{"fontVariationSettings":"'FILL' 1"}}>health_and_safety</span>
<span className="font-headline-md text-headline-md font-bold text-forest-green">98%</span>
</div>
<p className="font-caption text-caption text-on-surface-variant leading-tight">Vaccination coverage achieved in regional health centers during Q3 2024.</p>
</div>
</div>
</div>
</section>
{/*  Real-Time Alerts Bar  */}
<div className="bg-eagle-red text-state-white py-3">
<div className="max-w-max-width mx-auto px-margin-desktop flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined animate-pulse">emergency_home</span>
<span className="font-label-md text-label-md uppercase font-bold tracking-tighter">Public Health Alert:</span>
<span className="font-body-md text-body-md">Heatwave Warning: Stay hydrated and avoid outdoor activities between 12 PM and 4 PM.</span>
</div>
<button className="font-label-md text-label-md underline hover:text-white/80">View Details</button>
</div>
</div>
{/*  Bento Services Grid  */}
<section className="py-20 max-w-max-width mx-auto px-margin-desktop">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Health Ecosystem</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md mt-2">Integrated services designed for professional governance and citizen convenience.</p>
</div>
<div className="h-1 bg-brass-gold w-24"></div>
</div>
<div className="grid grid-cols-12 gap-6">
{/*  Insurance Card  */}
<div className="col-span-12 md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-8 hover:shadow-md transition-all group flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-6">
<div className="p-3 bg-primary-fixed rounded-lg text-forest-green">
<span className="material-symbols-outlined text-[32px]">payments</span>
</div>
<span className="bg-surface-container-high px-3 py-1 rounded-full text-label-md font-label-md">ABIA-CARE SCHEME</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-4">State Health Insurance (ASHIA)</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-xl">
                            Register yourself or your employees for full medical coverage across state and private partner hospitals. Manage premiums, claims, and dependent status through our secure portal.
                        </p>
</div>
<div className="flex gap-4 mt-auto">
<button className="bg-forest-green text-state-white px-6 py-2 rounded-lg font-label-md text-label-md">Access Dashboard</button>
<button className="text-forest-green font-label-md text-label-md flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
</div>
</div>
{/*  Quick Stats / Facility Finder Sidebar  */}
<div className="col-span-12 md:col-span-4 bg-forest-green text-state-white rounded-xl p-8 relative overflow-hidden">
<div className="relative z-10">
<span className="material-symbols-outlined text-brass-gold text-[40px] mb-4">location_on</span>
<h3 className="font-headline-md text-headline-md mb-2">Facility Finder</h3>
<p className="font-body-md text-body-md text-white/80 mb-8">Locate the nearest General Hospital or PHC in your LGA with live availability data.</p>
<div className="space-y-4">
<div className="bg-white/10 p-4 rounded-lg border border-white/20">
<div className="flex justify-between text-caption font-label-md opacity-80 uppercase mb-1">
<span>Federal Medical Centre</span>
<span>Open Now</span>
</div>
<p className="font-body-md font-semibold">Umuahia North, Abia</p>
</div>
<button className="w-full bg-brass-gold text-on-secondary-fixed py-3 rounded-lg font-label-md text-label-md font-bold uppercase tracking-widest">
                                Open Interactive Map
                            </button>
</div>
</div>
<div className="absolute -bottom-10 -right-10 opacity-10">
<span className="material-symbols-outlined text-[200px]" style={{"fontVariationSettings":"'FILL' 1"}}>local_hospital</span>
</div>
</div>
{/*  Wellness Programs Card  */}
<div className="col-span-12 md:col-span-4 bg-surface-container-low border border-outline-variant rounded-xl p-6 hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-secondary text-[32px] mb-4">spa</span>
<h4 className="font-headline-md text-[20px] text-on-surface mb-2">Wellness &amp; Prevention</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 text-sm">Access free resources for maternal health, lifestyle management, and routine check-up reminders.</p>
<a className="text-forest-green font-label-md text-label-md font-bold underline" href="#">Explore Programs</a>
</div>
{/*  Licensing Card  */}
<div className="col-span-12 md:col-span-4 bg-surface-container-low border border-outline-variant rounded-xl p-6 hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-secondary text-[32px] mb-4">verified</span>
<h4 className="font-headline-md text-[20px] text-on-surface mb-2">Practitioner Portal</h4>
<h5 className="text-xs uppercase font-label-md text-on-surface-variant mb-4 tracking-widest">Professional Services</h5>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 text-sm">License renewals, CPD tracking, and private facility registration for healthcare providers.</p>
<a className="text-forest-green font-label-md text-label-md font-bold underline" href="#">Staff Login</a>
</div>
{/*  Data & Reports  */}
<div className="col-span-12 md:col-span-4 bg-surface-container-low border border-outline-variant rounded-xl p-6 hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-secondary text-[32px] mb-4">monitoring</span>
<h4 className="font-headline-md text-[20px] text-on-surface mb-2">Health Statistics</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 text-sm">Transparent real-time data on disease surveillance, birth rates, and hospital capacity across the state.</p>
<a className="text-forest-green font-label-md text-label-md font-bold underline" href="/">View Dashboard</a>
</div>
</div>
</section>
{/*  Facility Finder Interactive Map Section  */}
<section className="bg-surface-container-highest py-20">
<div className="max-w-max-width mx-auto px-margin-desktop grid grid-cols-12 gap-gutter items-center">
<div className="col-span-12 lg:col-span-4">
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-6">Find Care Near You</h2>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-4 p-4 bg-state-white rounded-lg border-l-4 border-forest-green shadow-sm">
<span className="material-symbols-outlined text-forest-green mt-1">medical_services</span>
<div>
<p className="font-headline-md text-[16px] text-on-surface">General Hospitals</p>
<p className="font-body-md text-[14px] text-on-surface-variant leading-tight">24/7 emergency services and specialized care units available in all 17 LGAs.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-state-white rounded-lg border-l-4 border-brass-gold shadow-sm">
<span className="material-symbols-outlined text-brass-gold mt-1">home_health</span>
<div>
<p className="font-headline-md text-[16px] text-on-surface">Primary Health Centres</p>
<p className="font-body-md text-[14px] text-on-surface-variant leading-tight">Localized immunization and outpatient services within your neighborhood.</p>
</div>
</div>
</div>
<div className="relative">
<input className="w-full border-outline text-on-surface py-3 pl-10 rounded-lg focus:ring-forest-green focus:border-forest-green" placeholder="Enter your LGA or City" type="text" />
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
</div>
</div>
<div className="col-span-12 lg:col-span-8 h-[500px] bg-outline-variant rounded-2xl overflow-hidden relative border-4 border-state-white shadow-2xl">
<div className="absolute inset-0 grayscale opacity-80" data-location="Umuahia, Nigeria">
<img alt="Map of Abia" className="w-full h-full object-cover" data-alt="A clean, minimalist high-contrast digital map showing the 17 Local Government Areas of Abia State. The map uses a palette of forest green for the state boundaries and brass gold for major health facility pinpoints. The style is modern and data-driven, reminiscent of a professional logistics or governance interface, with subtle topographical textures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOmM-oXODVJOMX41emu8Y4l5aV5LUOhUw72DVVRy_GBT10OU-taPV6MQC-HcgxaGZ4C--5vjPDLS6PmtSjAI8RtQZeCrVgE6piDhxBlaCliuNL-1dW2raHXLUkmqowlXqIoliPHkihgzXXpVNPvMgwALPjk9viOVvL1sqxB3CKGYqRrr5z6HIRtMSUo3QmQ98Cf5I5EWzsGL5y5PCqdzqKRC7KaX66T1cswKSbnCSvX5tmZn0VpfnuysBzp0h8SZkHABz9kJqvDuM" />
</div>
{/*  Mock Map Overlays  */}
<div className="absolute top-10 left-10 p-3 bg-state-white rounded shadow-lg border border-outline flex items-center gap-2">
<span className="w-3 h-3 bg-forest-green rounded-full"></span>
<span className="font-label-md text-[12px] font-bold">14 Hospitals Online</span>
</div>
<div className="absolute bottom-10 right-10 p-4 bg-state-white/95 backdrop-blur rounded-xl shadow-xl border border-outline-variant w-64">
<div className="flex justify-between mb-2">
<span className="font-headline-md text-[14px]">Abia Specialist Hospital</span>
<span className="material-symbols-outlined text-forest-green text-[18px]">verified</span>
</div>
<p className="font-body-md text-[12px] text-on-surface-variant mb-3">Diagnostic center of excellence. Currently accepting new patients.</p>
<button className="w-full bg-forest-green text-state-white text-[12px] py-2 rounded font-bold uppercase tracking-widest">Get Directions</button>
</div>
</div>
</div>
</section>
{/*  Newsletter / Contact  */}
<section className="py-20 max-w-max-width mx-auto px-margin-desktop text-center">
<div className="max-w-2xl mx-auto">
<span className="material-symbols-outlined text-forest-green text-[48px] mb-4">mail</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Stay Informed</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Subscribe to receive monthly health tips, state wellness updates, and emergency alerts directly to your inbox.</p>
<form className="flex flex-col sm:flex-row gap-2">
<input className="flex-grow p-4 border border-outline rounded-lg focus:ring-forest-green outline-none" placeholder="Email Address" type="email" />
<button className="bg-forest-green text-state-white px-10 py-4 rounded-lg font-headline-md text-body-md font-semibold hover:bg-primary transition-colors whitespace-nowrap">Join Mailing List</button>
</form>
<p className="mt-4 font-caption text-caption text-on-surface-variant">We value your privacy. Unsubscribe at any time.</p>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-highest border-t border-outline-variant">
<div className="w-full py-12 px-margin-desktop flex flex-col md:flex-row justify-between items-start max-w-max-width mx-auto gap-12">
<div className="max-w-sm">
<div className="font-headline-sm text-headline-sm font-bold text-forest-green mb-4">ABIA ONE</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">
                    The official digital gateway for the Abia State Ministry of Health. Transforming healthcare delivery through transparency, technology, and trust.
                </p>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-forest-green flex items-center justify-center text-state-white cursor-pointer hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">share</span>
</div>
<div className="w-10 h-10 rounded-full bg-forest-green flex items-center justify-center text-state-white cursor-pointer hover:bg-primary transition-colors">
<span className="material-symbols-outlined text-[20px]">public</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12">
<div>
<h4 className="font-headline-md text-[16px] text-on-surface font-bold mb-4">Quick Links</h4>
<ul className="space-y-2">
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">ASHIA Enrollment</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Facility Directory</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="/ministry-of-health">Wellness Portal</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="/jobs-abia">Medical Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-headline-md text-[16px] text-on-surface font-bold mb-4">Governance</h4>
<ul className="space-y-2">
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Terms of Service</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="/news-press-center">Press Office</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="font-headline-md text-[16px] text-on-surface font-bold mb-4">Contact</h4>
<ul className="space-y-2 font-body-md text-body-md text-on-surface-variant">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">phone</span> +234 042 3344 55</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">mail</span> health@abiastate.gov.ng</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-[18px]">location_on</span> State Secretariat, Umuahia</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-outline-variant/30 py-6">
<div className="max-w-max-width mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-caption text-caption text-on-surface-variant">© 2024 Abia State Government. All Rights Reserved.</p>
<div className="flex gap-6 font-caption text-caption text-on-surface-variant">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> System Operational</span>
<span>Version 2.4.1 (AOS)</span>
</div>
</div>
</div>
</footer>


      </div>
    </>
  );
}
