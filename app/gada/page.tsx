"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }\n        .bento-item {\n            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n        }\n        .bento-item:hover {\n            transform: translateY(-4px);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-4">
<img src="/Logos/Abia_One_No_Background.png" alt="ABIA ONE" className="h-8 w-auto" />
</div>
<div className="hidden md:flex gap-8">
<a className="font-label-md text-label-md text-primary border-b-2 border-brass-gold pb-1 hover:text-primary transition-colors duration-200" href="/economic-transformation">Economy</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/serve-abia">Digital Gov</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/local-governance">Governance</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/secure-abia">Security</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden lg:block bg-forest-green text-state-white px-6 py-2 rounded-lg font-label-md text-label-md hover:opacity-90 transition-all">Citizen Portal</button>
<button className="bg-eagle-red text-state-white p-2 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined">emergency</span>
</button>
</div>
</nav>
<main className="pt-16">
{/*  Hero Section  */}
<section className="relative min-h-[870px] flex items-center px-margin-mobile md:px-margin-desktop overflow-hidden bg-forest-green">

<div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
<div className="text-state-white space-y-8">
<div className="inline-flex items-center gap-2 bg-brass-gold/20 border border-brass-gold/30 px-4 py-1 rounded-full">
<span className="w-2 h-2 rounded-full bg-brass-gold animate-pulse"></span>
<span className="font-label-md text-label-md text-brass-gold">GREATER ABA DEVELOPMENT AUTHORITY</span>
</div>
<h1 className="font-display-lg text-display-lg leading-[1.1] tracking-tight">
                        Aba: The City of <br /><span className="text-secondary-fixed">the Future.</span>
</h1>
<p className="font-body-lg text-body-lg text-primary-fixed/80 max-w-xl">
                        Revolutionizing Africa's industrial heartland through sustainable urban renewal, digital governance, and SME empowerment. Join the transformation of Enyimba City.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="bg-brass-gold text-on-secondary-fixed px-8 py-4 rounded-lg font-headline-md flex items-center gap-3 hover:scale-105 transition-transform">
<span className="material-symbols-outlined">report</span>
                            Report an Urban Issue
                        </button>
<button className="border border-state-white/30 bg-state-white/10 backdrop-blur-md text-state-white px-8 py-4 rounded-lg font-headline-md hover:bg-state-white/20 transition-all">
                            Explore Master Plan
                        </button>
</div>
</div>
<div className="hidden lg:grid grid-cols-2 gap-4 h-[500px]">
<div className="space-y-4 pt-12">
<div className="h-64 rounded-xl overflow-hidden shadow-2xl bento-item">
<img alt="Aba Industry" className="w-full h-full object-cover" data-alt="A high-angle architectural photography shot of a bustling industrial district in a modern African city. The scene features clean lines of concrete structures, vibrant green vegetation integrated into the urban design, and a bright, sun-drenched atmosphere that reflects the modern governance style. The color palette emphasizes deep forest greens and warm gold accents from the afternoon sun, symbolizing industrial excellence and progress." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOMn3U3ftSgWkKyrVKb3uKLPHx1FaUMrkFQQEYOG5XiShmLgxDUv7uRvN-xNC05zpT233D3dIRzOgkQNu9gsK0IesmH4nJ9RVorjUkG1BhBFMj3jAxHznHHVphuXTFdM3owSeHcM9vQp70U0bFS41vPMfFrpawvgHFnaFkDbH_vsdPOClQ8-qoA3d6GuZW_GqtZ5IGYgr8-6uRlV159wpYVilhkcFcKmItE-CMGMEu-Z3ylGPaH_qTJRPyqhVCSjEBf1vlsAePDgw" />
</div>
<div className="bg-secondary-container p-6 rounded-xl space-y-2 bento-item">
<span className="font-label-md text-label-md text-on-secondary-container">ACTIVE PROJECTS</span>
<div className="text-4xl font-bold text-on-secondary-container">142+</div>
<p className="text-sm opacity-80">Infrastructure sites across the metropolis</p>
</div>
</div>
<div className="space-y-4">
<div className="bg-surface-container-highest p-6 rounded-xl space-y-2 bento-item border border-outline-variant">
<span className="font-label-md text-label-md text-forest-green">SME GROWTH</span>
<div className="text-4xl font-bold text-forest-green">8.4k</div>
<p className="text-sm opacity-60">Artisans registered for GADA workshops</p>
</div>
<div className="h-80 rounded-xl overflow-hidden shadow-2xl bento-item">
<img alt="Modern City Skyline" className="w-full h-full object-cover" data-alt="A conceptual 3D render of a futuristic urban skyline for a Nigerian metropolis, showing sleek glass buildings with traditional architectural motifs subtly integrated. The lighting is early morning gold, casting long, soft shadows over wide, tree-lined boulevards and modern public transport systems. The visual style is crisp and professional, utilizing a high-key light mode palette with corporate forest green highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBThvDxgZ05_eSRBRgOzfqiFYDWG6fHVgE9X2sVN9J0GAQrPembrR0__c5u5-eVvU9H1UCu7FF6D6XvZt6k_W7wlUDzSonLQQgxHLlf1KuvU6zylpcyGfJQBL0z4H5RtQquphlweQLMOD4j5QcmnALlFPoyq-lO_gpi-YcbcL1wm9J8Bb5DG_sN-S4btAabuTOUcVJTfMnhUcx9raYQfhKdpolTeYLjMnhrDq6xvIF-DX338uhTx7DCS06YCF9ZxXw6hz1gpHbTnoI" />
</div>
</div>
</div>
</div>
</section>
{/*  Master Plan 2030 Viewer  */}
<section className="py-24 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="font-headline-lg text-headline-lg text-forest-green mb-4">Master Plan 2030</h2>
<p className="text-on-surface-variant font-body-lg">Tracking the structural evolution of Aba. Our vision is a sustainable, interconnected city that empowers commerce and residents alike.</p>
</div>
<div className="flex gap-2">
<button className="p-3 border border-outline-variant rounded-lg hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined">filter_list</span>
</button>
<button className="px-6 py-3 bg-primary text-state-white rounded-lg flex items-center gap-2 font-label-md">
<span className="material-symbols-outlined">map</span>
                        Interactive View
                    </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Ariaria Revitalization  */}
<div className="group relative bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant hover:shadow-xl transition-all h-[400px]">
<img alt="Market Progress" className="w-full h-full object-cover transition-transform group-hover:scale-105" data-alt="A detailed wide shot of a modern market complex under construction, featuring structured steel beams and large open spaces designed for airflow. The image is captured in bright, clear daylight with a professional corporate aesthetic. The focus is on the precision and quality of the engineering, with forest green safety equipment and gold-toned building materials visible in the composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBRUgxlArxbhLn5BDZB_Vv7LpcarfSSsKy-N4G4Qho30NAP8-p2q0Cjy5WpSs5HdIl9aOx80UP_p1K8lxzpz-3zgNIzJHohEXvh7jiEDD9edn7qOO9j8yY-EIyJY6bwWHs9L2ER6X4NZDo1OqKK9HxfIJy8we2RjfsWfvkACmEfX34S5WPwA9YzjeQgmv-gQYQz4eEw1WKngCwBDl7ixnzSpyc11cPQ-zsnOgpZ6dLuJPcD4QTC4qujtad_IMwP33dvO4d3C_leKY" />
<div className="absolute inset-0 bg-gradient-to-t from-forest-green/90 via-forest-green/20 to-transparent p-8 flex flex-col justify-end text-state-white">
<span className="text-brass-gold font-label-md mb-2">PHASE 2 IN PROGRESS</span>
<h3 className="font-headline-md text-headline-md mb-2">Ariaria International Revitalization</h3>
<p className="text-sm opacity-80 mb-4 line-clamp-2">Complete reconstruction of internal drainage systems and central power grid for West Africa's largest trading hub.</p>
<div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-3/4"></div>
</div>
<span className="text-xs mt-2 self-end">75% Complete</span>
</div>
</div>
{/*  Digital Hub  */}
<div className="group relative bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant hover:shadow-xl transition-all h-[400px]">
<img alt="Tech Hub" className="w-full h-full object-cover transition-transform group-hover:scale-105" data-alt="An interior shot of a minimalist, high-tech innovation center with glass walls, ergonomic wooden furniture, and sophisticated lighting systems. The environment is professional and data-driven, featuring subtle screens displaying data visualizations in teals and ochres. The overall mood is quiet concentration and technological advancement, reflecting a sovereign digital infrastructure for city management." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMyNAd7eKSW-A-m3Fq17vTo_DmK62HhnsJXtI2vUFkvbEOeCPJwZOUKuILfwEj_sD65jZSu0zpHDxHZVuoqsb3aqeK226IsBbRy4pomioxKJmVLCREcThfRST_VleHZfaRr3avmX1whLk3YgxAnz_eVGznxzcmRH8gayQeEuYi_hpWiRezJkuTuQpjsYLBXdDwKdX3EFXDU5aUiYKJbYafpJ5n3IF4llc7dSI5Tdguq8EfiZTbtsFA7px7WOBbEylHTIZ5mFClPcY" />
<div className="absolute inset-0 bg-gradient-to-t from-slate-gray/90 via-slate-gray/20 to-transparent p-8 flex flex-col justify-end text-state-white">
<span className="text-secondary-fixed font-label-md mb-2">NEW HUB</span>
<h3 className="font-headline-md text-headline-md mb-2">Enyimba Tech District</h3>
<p className="text-sm opacity-80 mb-4 line-clamp-2">Establishing a 50-hectare tech cluster to support digital startups and hardware engineers in the heart of Aba.</p>
<div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary-fixed h-full w-1/4"></div>
</div>
<span className="text-xs mt-2 self-end">Planning Phase</span>
</div>
</div>
{/*  Road Network  */}
<div className="group relative bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant hover:shadow-xl transition-all h-[400px]">
<img alt="Aba Roads" className="w-full h-full object-cover transition-transform group-hover:scale-105" data-alt="A sweeping drone shot of a newly paved multi-lane highway winding through a green, lush urban landscape. The asphalt is crisp and dark, with bright white and yellow road markings. The scene is illuminated by the cool light of dawn, emphasizing order and high-quality infrastructure. The aesthetic is clean and corporate, mirroring the modern governance philosophy of Abia State." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRDpIBv7ZfNm8f-696DzyVRVxDFrQFa3-rV7FGtFi4-I2zcV-PRiiXraSogfbqr5y5yk4D5Ws-3c3Dv12PyuLMB77a7PjpJxTsNQJX6ZEXaL5fqQO-sOIcgxsFHSijBMfmwbegBV6_nSYpNJRzuKpYwITY0GkKg66uEzhUVxAY3Jdv3e-D6oxKGSkf2COVsCpflI7ZNvcakOqGrlXjpvix6k1Y6onOfE-KvAM1xXOjszPhz-KKj7jnk_j2AqG2jg7nSxat0q6A8Jc" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-8 flex flex-col justify-end text-state-white">
<span className="text-primary-fixed font-label-md mb-2">INFRASTRUCTURE</span>
<h3 className="font-headline-md text-headline-md mb-2">Metropolitan Ring Road</h3>
<p className="text-sm opacity-80 mb-4 line-clamp-2">Expanding the city's arterial network to decongest the city center and facilitate 24/7 commercial logistics.</p>
<div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
<div className="bg-primary-fixed h-full w-1/2"></div>
</div>
<span className="text-xs mt-2 self-end">50% Complete</span>
</div>
</div>
</div>
</section>
{/*  Market Directory & SME Hub (Split Section)  */}
<section className="bg-surface-container-high py-24">
<div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
{/*  Market Directory  */}
<div className="space-y-8">
<div className="space-y-4">
<h2 className="font-headline-lg text-headline-lg text-on-surface">Market Directory</h2>
<p className="text-on-surface-variant font-body-md">Locate specialized clusters and authorized trade zones within the GADA jurisdiction.</p>
</div>
<div className="space-y-3">
<div className="bg-state-white p-4 rounded-lg border border-outline-variant flex items-center gap-4 hover:bg-surface transition-colors cursor-pointer group">
<div className="w-12 h-12 rounded bg-forest-green/10 flex items-center justify-center text-forest-green">
<span className="material-symbols-outlined">shopping_bag</span>
</div>
<div className="flex-1">
<h4 className="font-semibold text-on-surface">Ariaria International</h4>
<p className="text-sm text-on-surface-variant">General Merchandise, Apparel, Footwear</p>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-all">chevron_right</span>
</div>
<div className="bg-state-white p-4 rounded-lg border border-outline-variant flex items-center gap-4 hover:bg-surface transition-colors cursor-pointer group">
<div className="w-12 h-12 rounded bg-forest-green/10 flex items-center justify-center text-forest-green">
<span className="material-symbols-outlined">hardware</span>
</div>
<div className="flex-1">
<h4 className="font-semibold text-on-surface">Cemetery Road Cluster</h4>
<p className="text-sm text-on-surface-variant">Industrial Hardware &amp; Spare Parts</p>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-all">chevron_right</span>
</div>
<div className="bg-state-white p-4 rounded-lg border border-outline-variant flex items-center gap-4 hover:bg-surface transition-colors cursor-pointer group">
<div className="w-12 h-12 rounded bg-forest-green/10 flex items-center justify-center text-forest-green">
<span className="material-symbols-outlined">checkroom</span>
</div>
<div className="flex-1">
<h4 className="font-semibold text-on-surface">Ngwa Road Market</h4>
<p className="text-sm text-on-surface-variant">Textiles &amp; Finished Leather Goods</p>
</div>
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-all">chevron_right</span>
</div>
</div>
<button className="w-full py-4 border-2 border-primary text-primary rounded-lg font-headline-md hover:bg-primary hover:text-state-white transition-all">
                        View Full Cluster Map
                    </button>
</div>
{/*  SME Support Hub  */}
<div className="bg-forest-green rounded-2xl p-8 md:p-12 text-state-white relative overflow-hidden shadow-2xl">
<div className="absolute top-0 right-0 w-64 h-64 bg-brass-gold opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 space-y-8">
<div className="space-y-4">
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded font-label-md text-xs uppercase tracking-wider">Growth Accelerator</span>
<h2 className="font-headline-lg text-headline-lg">SME Support Hub</h2>
<p className="text-primary-fixed/80">Access GADA-led workshops, equipment grants, and export facilitation services for local artisans.</p>
</div>
<form className="space-y-4">
<div className="grid md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-label-md text-primary-fixed/60 uppercase">Full Name / Business Name</label>
<input className="w-full bg-state-white/10 border-state-white/20 rounded-lg py-3 px-4 focus:ring-brass-gold focus:border-brass-gold text-state-white placeholder-state-white/40" placeholder="e.g. Enyimba Leather Works" type="text" />
</div>
<div className="space-y-1">
<label className="text-xs font-label-md text-primary-fixed/60 uppercase">Business Category</label>
<select className="w-full bg-state-white/10 border-state-white/20 rounded-lg py-3 px-4 focus:ring-brass-gold focus:border-brass-gold text-state-white">
<option className="bg-forest-green">Leather Works</option>
<option className="bg-forest-green">Garment Production</option>
<option className="bg-forest-green">Tech/Software</option>
<option className="bg-forest-green">Metal Fabrication</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-label-md text-primary-fixed/60 uppercase">Primary Goal</label>
<textarea className="w-full bg-state-white/10 border-state-white/20 rounded-lg py-3 px-4 focus:ring-brass-gold focus:border-brass-gold text-state-white placeholder-state-white/40" placeholder="How can GADA support your growth?" rows={3}></textarea>
</div>
<button className="w-full py-4 bg-brass-gold text-on-secondary-fixed rounded-lg font-headline-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined">app_registration</span>
                                Register for SME Grants
                            </button>
</form>
<p className="text-xs text-center text-primary-fixed/40">Registration requires a valid Abia State Social Security Number (ASSSN).</p>
</div>
</div>
</div>
</section>
{/*  Reporting Widget (Quick Action)  */}
<section className="py-24 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto text-center">
<h2 className="font-headline-lg text-headline-lg text-forest-green mb-12">See Something? Fix Something.</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
<button className="flex flex-col items-center p-8 bg-surface border border-outline-variant rounded-xl hover:border-brass-gold hover:bg-white transition-all group">
<span className="material-symbols-outlined text-4xl mb-4 text-outline group-hover:text-brass-gold">phone</span>
<span className="font-label-md">Pothole</span>
</button>
<button className="flex flex-col items-center p-8 bg-surface border border-outline-variant rounded-xl hover:border-brass-gold hover:bg-white transition-all group">
<span className="material-symbols-outlined text-4xl mb-4 text-outline group-hover:text-brass-gold">lightbulb</span>
<span className="font-label-md">Street Light</span>
</button>
<button className="flex flex-col items-center p-8 bg-surface border border-outline-variant rounded-xl hover:border-brass-gold hover:bg-white transition-all group">
<span className="material-symbols-outlined text-4xl mb-4 text-outline group-hover:text-brass-gold">water_damage</span>
<span className="font-label-md">Drainage Block</span>
</button>
<button className="flex flex-col items-center p-8 bg-surface border border-outline-variant rounded-xl hover:border-brass-gold hover:bg-white transition-all group">
<span className="material-symbols-outlined text-4xl mb-4 text-outline group-hover:text-brass-gold">delete</span>
<span className="font-label-md">Waste Pickup</span>
</button>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto py-12 border-t border-outline-variant">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<span className="font-headline-lg text-headline-lg text-forest-deep">ABIA ONE</span>
<p className="text-on-surface-variant max-w-sm">
                        The sovereign digital infrastructure for the Greater Aba Development Authority. Committed to transparency, urban renewal, and economic prosperity.
                    </p>
</div>
<div>
<h5 className="font-label-md text-label-md text-on-surface mb-6 uppercase tracking-wider">Framework</h5>
<ul className="space-y-3">
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="/invest-in-aba">Invest Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="/serve-abia">Serve Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="/build-abia">Build Abia</a></li>
</ul>
</div>
<div>
<h5 className="font-label-md text-label-md text-on-surface mb-6 uppercase tracking-wider">Resources</h5>
<ul className="space-y-3">
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Us</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="/open-abia">Open Abia</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-outline flex flex-col md:flex-row justify-between gap-4">
<p className="text-on-surface-variant font-body-md">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-6">
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
<a className="text-on-surface-variant hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
</div>
</div>
</div>
</footer>


      </div>
    </>
  );
}
