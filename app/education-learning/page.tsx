"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-panel {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }\n        .bento-card {\n            transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n        }\n        .bento-card:hover {\n            transform: translateY(-4px);\n        }\n        ::-webkit-scrollbar {\n            width: 8px;\n        }\n        ::-webkit-scrollbar-track {\n            background: #f1f5ee;\n        }\n        ::-webkit-scrollbar-thumb {\n            background: #004d28;\n            border-radius: 4px;\n        }" 
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
        }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md selection:bg-brass-gold selection:text-white">
        
{/*  TopNavBar from Shared Components  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-8">
<img src="/Logos/Abia_One_No_Background.png" alt="ABIA ONE" className="h-20 w-auto" />
<div className="hidden lg:flex gap-6">
<a className="font-label-caps text-label-caps text-primary border-b-2 border-brass-accent pb-1 hover:text-primary transition-colors duration-200" href="/economic-transformation">Economy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/serve-abia">Digital Gov</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/local-governance">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-200" href="/secure-abia">Security</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex px-4 py-2 border border-brass-gold text-brass-gold rounded-lg font-medium hover:bg-brass-gold/5 transition-all">Emergency</button>
<button className="px-6 py-2 bg-primary text-on-primary rounded-lg font-bold hover:opacity-90 active:scale-95 transition-all">Citizen Portal</button>
</div>
</nav>
{/*  SideNavBar (Hidden on Mobile)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 pt-20 bg-surface-container-low border-r border-outline-variant z-40">
<div className="px-6 mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container">school</span>
</div>
<div>
<p className="font-bold text-forest-deep">ABIA ONE</p>
<p className="text-[10px] uppercase tracking-widest text-outline">Modern Governance OS</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<div className="bg-secondary-container text-on-secondary-container rounded-lg mx-2 flex items-center px-4 py-3 gap-3">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-sm text-label-sm">Economic Transformation</span>
</div>
<div className="text-on-surface-variant hover:bg-surface-variant/50 mx-2 flex items-center px-4 py-3 gap-3 rounded-lg transition-all">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-sm text-label-sm">Digital Government</span>
</div>
<div className="text-on-surface-variant hover:bg-surface-variant/50 mx-2 flex items-center px-4 py-3 gap-3 rounded-lg transition-all">
<span className="material-symbols-outlined">mitre</span>
<span className="font-label-sm text-label-sm">Transparent Governance</span>
</div>
<div className="text-on-surface-variant hover:bg-surface-variant/50 mx-2 flex items-center px-4 py-3 gap-3 rounded-lg transition-all">
<span className="material-symbols-outlined">security</span>
<span className="font-label-sm text-label-sm">Public Trust</span>
</div>
</nav>
<div className="p-4 border-t border-outline-variant">
<button className="w-full py-3 bg-forest-green text-white rounded-lg flex items-center justify-center gap-2 hover:opacity-90">
<span className="material-symbols-outlined">feedback</span>
<span>Citizen Feedback</span>
</button>
</div>
</aside>
<main className="lg:ml-64 pt-24 pb-12 px-margin-mobile md:px-margin-desktop min-h-screen">
{/*  Hero Section: Digitalization Pulse  */}
<section className="mb-12 relative overflow-hidden rounded-xl bg-forest-deep p-8 md:p-12 text-white">
<div className="relative z-10 max-w-3xl">
<span className="inline-block px-3 py-1 bg-brass-gold text-forest-deep font-label-caps text-[10px] mb-4 rounded-sm">EDUCATION SECTOR TRANSFORMATION</span>
<h1 className="font-display-lg text-display-lg mb-6 leading-tight">One Student, One Tablet Initiative</h1>
<p className="font-body-lg text-body-lg text-primary-fixed mb-8 opacity-90">Revolutionizing Abia's learning landscape with 250,000+ digital learning devices distributed across secondary institutions. Bridging the digital divide for the future workforce.</p>
<div className="flex flex-wrap gap-4">
<button className="px-8 py-4 bg-brass-gold text-forest-deep font-bold rounded-lg hover:scale-105 transition-transform">Register Device</button>
<button className="px-8 py-4 border border-white/30 text-white font-bold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all">Download Curricula</button>
</div>
</div>
{/*  Background Decoration  */}
<div className="absolute right-0 top-0 w-1/3 h-full opacity-20 pointer-events-none">

</div>
</section>
{/*  Bento Grid Dashboard  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
{/*  School Accreditation Status  */}
<div className="md:col-span-8 glass-panel rounded-xl p-6 bento-card">
<div className="flex justify-between items-center mb-6">
<div>
<h2 className="font-headline-md text-headline-md text-forest-deep">School Accreditation Status</h2>
<p className="text-on-surface-variant font-caption">Live monitoring of statewide institutional quality standards</p>
</div>
<button className="p-2 hover:bg-surface-container rounded-full transition-colors">
<span className="material-symbols-outlined">refresh</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="border-b border-outline-variant font-label-md text-label-md text-outline">
<th className="pb-3">Institution Name</th>
<th className="pb-3">LGA</th>
<th className="pb-3">Compliance</th>
<th className="pb-3">Status</th>
<th className="pb-3">Action</th>
</tr>
</thead>
<tbody className="font-body-md divide-y divide-outline-variant/30">
<tr>
<td className="py-4 font-semibold">Government College Umuahia</td>
<td className="py-4">Umuahia North</td>
<td className="py-4">
<div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[95%]"></div>
</div>
</td>
<td className="py-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-bold">CERTIFIED</span></td>
<td className="py-4"><button className="text-primary font-bold hover:underline">View</button></td>
</tr>
<tr>
<td className="py-4 font-semibold">Abia Technical Institute</td>
<td className="py-4">Aba South</td>
<td className="py-4">
<div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[82%]"></div>
</div>
</td>
<td className="py-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-bold">CERTIFIED</span></td>
<td className="py-4"><button className="text-primary font-bold hover:underline">View</button></td>
</tr>
<tr>
<td className="py-4 font-semibold">Ohafia Model School</td>
<td className="py-4">Ohafia</td>
<td className="py-4">
<div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="bg-yellow-100 h-full w-[45%]"></div>
</div>
</td>
<td className="py-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full font-bold">PENDING</span></td>
<td className="py-4"><button className="text-primary font-bold hover:underline">Review</button></td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Scholarship Tracker  */}
<div className="md:col-span-4 bg-surface-container rounded-xl p-6 bento-card border border-outline-variant">
<h3 className="font-headline-md text-headline-md text-forest-deep mb-4">Scholarship Application Tracker</h3>
<div className="space-y-6">
<div className="relative pl-8 border-l-2 border-forest-green">
<div className="absolute -left-2 top-0 w-4 h-4 bg-forest-green rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-[10px] text-white" style={{"fontVariationSettings":"'FILL' 1"}}>check</span>
</div>
<p className="font-bold text-sm">Documentation Verification</p>
<p className="text-xs text-on-surface-variant">Completed on May 12, 2024</p>
</div>
<div className="relative pl-8 border-l-2 border-forest-green">
<div className="absolute -left-2 top-0 w-4 h-4 bg-forest-green rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-[10px] text-white" style={{"fontVariationSettings":"'FILL' 1"}}>check</span>
</div>
<p className="font-bold text-sm">Academic Review</p>
<p className="text-xs text-on-surface-variant">GPA Validation successful</p>
</div>
<div className="relative pl-8 border-l-2 border-outline">
<div className="absolute -left-2 top-0 w-4 h-4 bg-surface-container border-2 border-forest-green rounded-full animate-pulse"></div>
<p className="font-bold text-sm">Selection Board Decision</p>
<p className="text-xs text-on-surface-variant italic">Under internal review - Expected May 25</p>
</div>
<div className="relative pl-8">
<div className="absolute -left-2 top-0 w-4 h-4 bg-surface-dim rounded-full"></div>
<p className="font-bold text-sm text-outline">Disbursement Schedule</p>
</div>
</div>
<div className="mt-8 p-4 bg-white/50 border border-outline-variant rounded-lg">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-bold uppercase tracking-wider text-outline">Application ID</span>
<span className="font-label-md text-xs">AB-EDU-2024-8891</span>
</div>
<button className="w-full py-2 bg-primary text-white rounded font-bold text-sm hover:opacity-90">View Application Details</button>
</div>
</div>
{/*  Digital Skills Training Hubs  */}
<div className="md:col-span-12 glass-panel rounded-xl p-8 bento-card">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<div>
<h2 className="font-headline-md text-headline-md text-forest-deep">Digital Skills Training Hubs</h2>
<p className="text-on-surface-variant">Access state-of-the-art facilities across all 17 LGAs</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 bg-surface text-primary border border-outline rounded-lg font-bold text-sm hover:bg-surface-variant transition-colors">List View</button>
<button className="px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm flex items-center gap-2">
<span className="material-symbols-outlined text-sm">map</span> Map View
                        </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="group relative overflow-hidden rounded-xl h-64 border border-outline-variant">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A modern tech training center in Abia State featuring rows of high-end computers and large monitors. The space is bright and clinical, with forest green and brass gold accents on the walls reflecting the state's identity. Young Nigerian students are engaged in coding workshops with a focus on professional digital development. The lighting is crisp and even, emphasizing a high-tech governance atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVZgjNIglonvZ17VjZgbufDVSHWLWgdKvxq8THKcIhIOOkbOnOu_g6GbRGGkHoDX1LXaiPn6gLWsUmvNNs-3S60KtNn-9xp1qetdRDtIku2JecZN-7ltZeTyv_w93QeiGVqxGqxQZNIBQeRm2Wzsvm8x5EBouFFynFNmAZJAo1YJwJ2tmG0gxLnUL6qTsub4lRklc2G6KMeXNBffxrtLPJ2_AGT9yGaT-pHwiwfVCk2TPE9NYz814gwr6VKAYR-XsHGmbgbEc8JJ4" />
<div className="absolute inset-0 bg-gradient-to-t from-forest-deep to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 text-white">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-brass-gold" style={{"fontVariationSettings":"'FILL' 1"}}>location_on</span>
<span className="text-xs font-bold tracking-widest uppercase">Umuahia Innovation Center</span>
</div>
<h4 className="font-bold text-xl mb-2">Cloud Infrastructure Lab</h4>
<div className="flex items-center gap-4 text-xs">
<span><strong className="text-brass-gold">45</strong> Seats Available</span>
<span><strong className="text-brass-gold">12</strong> active courses</span>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl h-64 border border-outline-variant">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A specialized robotics and hardware laboratory in Aba, Nigeria. The room is filled with technical equipment, circuit boards, and 3D printers. The design is sleek and modern with a palette of forest deep and subtle metallic brass accents. Experts are working on localized hardware solutions for state infrastructure. The atmosphere is one of intense technical focus and industrial modernization." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8mD2GabqCJxUQCur5ux24tSHY6HGyks2AzmpyGITdpglfUFWHJq_sAFTqpOPa9ZsGNXoWm0aBbSD5UEqF_chrYbrpYnCh2heBBLYN7xFtpw0qREclz-xWeC6I9v1zuOUJamUjQF8fi2jmJuxfhPBKPnPKx1LQhcRVXEls43lZeMg2ToKSucgAjg4HXtMWIZOyfNVB8E9YcebSD5gnGySZhCiByFx9buhuqe1fmL5B9sV0v9mxIfQCxZgnjN3jFyXx_7OGomTZ3yk" />
<div className="absolute inset-0 bg-gradient-to-t from-forest-deep to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 text-white">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-brass-gold" style={{"fontVariationSettings":"'FILL' 1"}}>location_on</span>
<span className="text-xs font-bold tracking-widest uppercase">Aba Tech District</span>
</div>
<h4 className="font-bold text-xl mb-2">Robotics &amp; IoT Hub</h4>
<div className="flex items-center gap-4 text-xs">
<span><strong className="text-brass-gold">28</strong> Seats Available</span>
<span><strong className="text-brass-gold">8</strong> active courses</span>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-xl h-64 border border-outline-variant">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A vibrant collaborative workspace for creative digital skills training in Abia State. The interior features contemporary minimalist furniture and large windows allowing natural light to flood the room. The color scheme is professional, incorporating Abia's primary forest green and gold. Creative professionals are seen using tablets and high-performance laptops for graphic design and digital media production. The mood is inspiring and forward-thinking." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEif7FFrMqQpXBPjCJ2aC2fn799clOxQxHj7k_pDyu9qq_hrIBJbJg3j4uQxkoVq3SgeBuMTKw-6ZABDqDlF1f5IklwDmW4yAN6w31deAok9mg5ayJHdhtGPbpVVcRukR51Xz8vc6nYibZ0fS8WQxnwXm4_6A8hd6mu18irontL8nlLjSDu2BD2hqXwqIX2UYHkZSWl9uKMi6myJnvLCJxMmWSa-kQPYyL3u73BpYbkkGaYYW7s1JFpzV__7T8OLsb7dhi8Lh2eME" />
<div className="absolute inset-0 bg-gradient-to-t from-forest-deep to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6 text-white">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-brass-gold" style={{"fontVariationSettings":"'FILL' 1"}}>location_on</span>
<span className="text-xs font-bold tracking-widest uppercase">Ohafia Digital Outpost</span>
</div>
<h4 className="font-bold text-xl mb-2">Digital Content Studio</h4>
<div className="flex items-center gap-4 text-xs">
<span><strong className="text-brass-gold">20</strong> Seats Available</span>
<span><strong className="text-brass-gold">5</strong> active courses</span>
</div>
</div>
</div>
</div>
</div>
{/*  Teacher Certification Portal  */}
<div className="md:col-span-12 lg:col-span-6 bg-white border border-outline-variant rounded-xl p-8 bento-card relative overflow-hidden">
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md text-forest-deep mb-4">Teacher Certification Portal</h3>
<p className="text-on-surface-variant mb-6">Manage your professional teaching credentials and access digital pedagogy training modules.</p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="p-4 bg-surface-container rounded-lg border border-outline-variant">
<span className="text-3xl font-bold text-primary">12,402</span>
<p className="text-xs font-bold text-outline uppercase tracking-wider">Certified Teachers</p>
</div>
<div className="p-4 bg-surface-container rounded-lg border border-outline-variant">
<span className="text-3xl font-bold text-brass-gold">89%</span>
<p className="text-xs font-bold text-outline uppercase tracking-wider">Digital Literacy Rate</p>
</div>
</div>
<div className="flex gap-4">
<button className="flex-1 py-3 bg-primary text-white rounded-lg font-bold flex items-center justify-center gap-2">
<span className="material-symbols-outlined">badge</span>
                            Login to Portal
                        </button>
<button className="flex-1 py-3 border border-primary text-primary rounded-lg font-bold flex items-center justify-center gap-2">
                            Verify Certificate
                        </button>
</div>
</div>
<div className="absolute -right-12 -bottom-12 opacity-5 scale-150 rotate-12 pointer-events-none">
<span className="material-symbols-outlined text-[200px]">verified_user</span>
</div>
</div>
{/*  Key Metrics Card  */}
<div className="md:col-span-12 lg:col-span-6 bg-forest-deep text-white rounded-xl p-8 bento-card">
<h3 className="font-headline-md text-headline-md mb-6">Initiative Progress</h3>
<div className="space-y-6">
<div>
<div className="flex justify-between mb-2">
<span className="font-bold text-sm">Tablet Distribution Progress</span>
<span className="text-brass-gold font-bold">64%</span>
</div>
<div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[64%] shadow-[0_0_10px_#D4AF37]"></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="font-bold text-sm">E-Curriculum Implementation</span>
<span className="text-brass-gold font-bold">92%</span>
</div>
<div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[92%] shadow-[0_0_10px_#D4AF37]"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mt-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-brass-gold">tablet_mac</span>
</div>
<div>
<p className="text-xl font-bold">160k+</p>
<p className="text-[10px] text-white/60 uppercase">Units Deployed</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-brass-gold">wifi</span>
</div>
<div>
<p className="text-xl font-bold">420</p>
<p className="text-[10px] text-white/60 uppercase">Smart Schools</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
{/*  Footer from Shared Components  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto py-12 border-t border-outline-variant">
<div className="max-w-container-max-width mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<span className="font-headline-lg text-headline-lg text-forest-deep mb-4 block">ABIA ONE</span>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                        The unified digital operating system for the Government of Abia State, delivering transparent governance and modern infrastructure for all citizens.
                    </p>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-primary mb-6">RESOURCES</h4>
<ul className="space-y-3 font-body-md text-on-surface-variant">
<li><a className="hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/invest-in-aba">Invest Abia</a></li>
<li><a className="hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/serve-abia">Serve Abia</a></li>
<li><a className="hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/build-abia">Build Abia</a></li>
</ul>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-primary mb-6">GOVERNANCE</h4>
<ul className="space-y-3 font-body-md text-on-surface-variant">
<li><a className="hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/open-abia">Open Abia</a></li>
<li><a className="hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-body-md text-body-md text-on-surface-variant text-center md:text-left">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-6">
<span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">face_nod</span>
<span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">public</span>
<span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">mail</span>
</div>
</div>
</div>
</footer>


      </div>
    </>
  );
}
