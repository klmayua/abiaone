"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(12px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }\n        .accent-line {\n            height: 2px;\n            width: 40px;\n            background: #D4AF37;\n            margin-bottom: 12px;\n        }\n        ::-webkit-scrollbar { width: 6px; }\n        ::-webkit-scrollbar-track { background: #f1f1f1; }\n        ::-webkit-scrollbar-thumb { background: #006838; border-radius: 10px; }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  Top Navigation Bar  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 dark:bg-forest-deep/80 backdrop-blur-md border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-8">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep dark:text-primary-fixed">ABIA ONE</span>
<div className="hidden md:flex gap-6">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="/economic-transformation">Economy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="/serve-abia">Digital Gov</a>
<a className="font-label-caps text-label-caps text-primary border-b-2 border-brass-accent pb-1" href="/local-governance">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="/secure-abia">Security</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="px-4 py-2 border border-brass-gold text-forest-green font-medium rounded-lg hover:bg-brass-gold/10 transition-all text-sm">Emergency</button>
<button className="px-4 py-2 bg-forest-green text-state-white font-medium rounded-lg hover:opacity-90 transition-all text-sm">Citizen Portal</button>
</div>
</nav>
{/*  Sidebar Navigation  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 pt-20 bg-surface-container-low dark:bg-forest-deep border-r border-outline-variant z-40">
<div className="px-6 mb-8">
<h2 className="font-headline-md text-headline-md text-forest-deep">Innovation Hub</h2>
<p className="text-xs text-on-surface-variant opacity-70">Modern Governance OS</p>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg mx-2 transition-all translate-x-1" href="/science-technology">
<span className="material-symbols-outlined">mitre</span>
<span className="font-label-sm text-label-sm">Science &amp; Tech Hub</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-sm text-label-sm">Research Grants</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 transition-all rounded-lg" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-sm text-label-sm">IP Protection</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 transition-all rounded-lg" href="/secure-abia">
<span className="material-symbols-outlined">security</span>
<span className="font-label-sm text-label-sm">Tech Parks</span>
</a>
</nav>
<div className="p-4 mt-auto border-t border-outline-variant">
<button className="w-full py-3 bg-forest-green text-white rounded-lg flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">campaign</span>
<span className="font-label-sm text-label-sm">Citizen Feedback</span>
</button>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="lg:ml-64 pt-20 pb-12 px-margin-mobile md:px-margin-desktop min-h-screen">
{/*  Hero Section  */}
<header className="mb-12 relative overflow-hidden rounded-xl h-64 flex items-center p-8 lg:p-12">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-20 grayscale brightness-50" data-alt="A sophisticated, wide-angle shot of a high-tech research facility in Abia State, featuring clean laboratory benches, gleaming scientific equipment, and digital screens displaying complex data visualizations. The lighting is cold and clinical with blue and green undertones, reflecting a modern light-mode governance aesthetic. Soft sunlight filters through large glass windows, creating a bridge between institutional stability and futuristic scientific progress." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxfk5X2b7vr-YnHeVccfqP62AMsSd7U4_lbAtQOcYibBFxv352orMomQCGntfZYwl_z1qF9a1BgZcUMG9k148-iz4C-EUmudqzUXxnlpdXr6GB527HXm7M4lbwCk40ohuGGwpAItuFAycwNptfLGsi3QjsJHGrNVmc9AieFNO6n7rv6MDPPbfuvumjfDkMo4Tz9PlsnpWqpDxvgzw3mrUEZKcB2HNCdP9YZID1gheqaNlsvmd_TCkCX0KIQAxwBIYaYD6l3bNrqYM" />
</div>
<div className="absolute inset-0 bg-gradient-to-r from-forest-green/90 to-transparent z-10"></div>
<div className="relative z-20 max-w-2xl">
<div className="accent-line bg-brass-gold"></div>
<h1 className="font-display-lg text-display-lg text-state-white mb-4">Pioneering the Abia Digital Frontier</h1>
<p className="text-primary-fixed-dim font-body-lg max-w-lg">Managing the state's Research &amp; Development ecosystem, protecting intellectual capital, and scaling high-growth startups.</p>
</div>
</header>
{/*  Bento Grid Dashboard  */}
<div className="bento-grid">
{/*  Startup Incubation Tracker (Wide)  */}
<section className="col-span-12 lg:col-span-8 glass-card rounded-xl p-6 shadow-sm">
<div className="flex justify-between items-center mb-6">
<div>
<div className="accent-line"></div>
<h3 className="font-headline-md text-headline-md text-forest-green">Startup Incubation Tracker</h3>
</div>
<button className="text-primary font-label-caps text-xs flex items-center gap-1 hover:underline">
                        View Ecosystem Map <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="border-b border-outline-variant text-on-surface-variant font-label-md text-xs uppercase tracking-wider">
<th className="pb-4 font-semibold">Startup Entity</th>
<th className="pb-4 font-semibold">Vertical</th>
<th className="pb-4 font-semibold">Stage</th>
<th className="pb-4 font-semibold">Metric</th>
<th className="pb-4 font-semibold">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/30">
<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-4 font-semibold text-forest-green">Aba-Smart Logistics</td>
<td className="py-4 text-on-surface-variant">Supply Chain</td>
<td className="py-4"><span className="px-2 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full">SERIES A</span></td>
<td className="py-4 font-mono text-xs">84% Efficiency Gain</td>
<td className="py-4 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-forest-green animate-pulse"></div>
<span className="text-sm">Scaling</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-4 font-semibold text-forest-green">Umuahia Bio-Gen</td>
<td className="py-4 text-on-surface-variant">AgriTech</td>
<td className="py-4"><span className="px-2 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-bold rounded-full">SEED</span></td>
<td className="py-4 font-mono text-xs">12 Patents Pending</td>
<td className="py-4 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brass-gold"></div>
<span className="text-sm">R&amp;D Phase</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-4 font-semibold text-forest-green">Enyimba FinCore</td>
<td className="py-4 text-on-surface-variant">FinTech</td>
<td className="py-4"><span className="px-2 py-1 bg-primary-container text-on-primary-container text-[10px] font-bold rounded-full">PRE-SEED</span></td>
<td className="py-4 font-mono text-xs">$200k Raised</td>
<td className="py-4 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-forest-green animate-pulse"></div>
<span className="text-sm">Active</span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
{/*  IP Protection Card (Square)  */}
<section className="col-span-12 lg:col-span-4 glass-card rounded-xl p-6 border-l-4 border-brass-gold">
<div className="accent-line"></div>
<h3 className="font-headline-md text-headline-md text-forest-green mb-4">IP Protection Office</h3>
<p className="text-on-surface-variant mb-6 text-sm">Safeguarding the innovations of Abia's citizens through state-backed legal frameworks and international registry assistance.</p>
<div className="space-y-4">
<div className="p-4 bg-surface-container rounded-lg flex items-start gap-3">
<span className="material-symbols-outlined text-brass-gold">workspace_premium</span>
<div>
<p className="font-semibold text-sm">Active Patents</p>
<p className="text-2xl font-bold text-forest-green">1,248</p>
</div>
</div>
<div className="p-4 bg-surface-container rounded-lg flex items-start gap-3">
<span className="material-symbols-outlined text-brass-gold">gavel</span>
<div>
<p className="font-semibold text-sm">Legal Disputes Resolved</p>
<p className="text-2xl font-bold text-forest-green">142</p>
</div>
</div>
</div>
<button className="mt-6 w-full py-3 bg-white border border-forest-green text-forest-green font-bold rounded-lg hover:bg-forest-green hover:text-white transition-all">
                    Register New Invention
                </button>
</section>
{/*  Research Grant Applications (Full Row)  */}
<section className="col-span-12 glass-card rounded-xl p-8 overflow-hidden relative">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
<div className="max-w-xl">
<div className="accent-line"></div>
<h3 className="font-headline-md text-headline-md text-forest-green">Research Grant Applications</h3>
<p className="text-on-surface-variant mt-2">Active funding rounds for high-impact scientific research projects contributing to the Abia State 2030 Vision.</p>
</div>
<div className="flex gap-4">
<div className="text-right">
<p className="text-xs font-label-md text-on-surface-variant uppercase">Total Pool Available</p>
<p className="text-3xl font-bold text-forest-green">₦4.2B</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Grant Card 1  */}
<div className="p-6 bg-state-white rounded-xl border border-outline-variant hover:border-forest-green transition-all group">
<div className="flex justify-between items-start mb-4">
<span className="p-2 bg-primary-fixed-dim rounded-lg group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-forest-green">bolt</span>
</span>
<span className="text-[10px] font-bold text-eagle-red uppercase tracking-tighter bg-error-container px-2 py-1 rounded">2 Days Left</span>
</div>
<h4 className="font-bold text-lg text-forest-green mb-2">Sustainable Energy Initiative</h4>
<p className="text-sm text-on-surface-variant mb-6">Focus on solar grid innovations for industrial clusters in Aba.</p>
<div className="flex justify-between items-center mt-auto">
<span className="text-xs font-mono">Up to ₦50M</span>
<button className="p-2 rounded-full border border-forest-green text-forest-green hover:bg-forest-green hover:text-white transition-colors">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
{/*  Grant Card 2  */}
<div className="p-6 bg-state-white rounded-xl border border-outline-variant hover:border-forest-green transition-all group">
<div className="flex justify-between items-start mb-4">
<span className="p-2 bg-primary-fixed-dim rounded-lg group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-forest-green">agriculture</span>
</span>
<span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter bg-surface-variant px-2 py-1 rounded">Open</span>
</div>
<h4 className="font-bold text-lg text-forest-green mb-2">Advanced Agritech Systems</h4>
<p className="text-sm text-on-surface-variant mb-6">R&amp;D for pest-resistant crop variants and automated irrigation.</p>
<div className="flex justify-between items-center mt-auto">
<span className="text-xs font-mono">Up to ₦35M</span>
<button className="p-2 rounded-full border border-forest-green text-forest-green hover:bg-forest-green hover:text-white transition-colors">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
{/*  Grant Card 3  */}
<div className="p-6 bg-state-white rounded-xl border border-outline-variant hover:border-forest-green transition-all group">
<div className="flex justify-between items-start mb-4">
<span className="p-2 bg-primary-fixed-dim rounded-lg group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-forest-green">biotech</span>
</span>
<span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter bg-surface-variant px-2 py-1 rounded">Open</span>
</div>
<h4 className="font-bold text-lg text-forest-green mb-2">Molecular Bio-Labs Fund</h4>
<p className="text-sm text-on-surface-variant mb-6">Infrastructure grants for private biotech diagnostic facilities.</p>
<div className="flex justify-between items-center mt-auto">
<span className="text-xs font-mono">Up to ₦120M</span>
<button className="p-2 rounded-full border border-forest-green text-forest-green hover:bg-forest-green hover:text-white transition-colors">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
</div>
</section>
{/*  Digital Innovation Labs Directory  */}
<section className="col-span-12 lg:col-span-12">
<div className="mb-6">
<div className="accent-line"></div>
<h3 className="font-headline-md text-headline-md text-forest-green">Digital Innovation Labs Directory</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Lab 1  */}
<div className="glass-card p-4 rounded-xl flex flex-col items-center text-center">
<div className="w-full h-32 mb-4 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all">
<img className="w-full h-full object-cover" data-alt="A futuristic robotics lab interior with modular workstations, 3D printers in operation, and prototype mechanical arms. The scene is bright with clean white light and metallic surfaces reflecting the forest green and brass accents of the Abia One brand. The composition is sleek and professional, highlighting a high-density information environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy3UWuOKnS92yVE6_apo_I-wAzfa5ByUEHGkj9lPMyM-nuItVv5qBm0ecz5h1bw61_VtBEZQzaKZ9wKk772jppJazysK9EHzq87jJr2Ch_UEAPOQXTOzSOj0tZlVzDk4lvRtnrz6Ulru_OrIn1dMC4bI5BZ6zjpb82IBgkIUd6JbU6GPWX_JxXGkTTr1Mg1gzXzXiERRdTho_sORr05qqYveMurgzE2PW8OvC-Nc8qubOBnTo1NB---7qrArFwE34f43bsMxe92PA" />
</div>
<h5 className="font-bold text-forest-green">Abia Robotics Hub</h5>
<p className="text-xs text-on-surface-variant mt-1">Industrial Automation &amp; Drone Tech</p>
<div className="mt-4 flex gap-2">
<span className="material-symbols-outlined text-sm text-forest-green">location_on</span>
<span className="text-[10px] font-label-md">ABA DISTRICT</span>
</div>
</div>
{/*  Lab 2  */}
<div className="glass-card p-4 rounded-xl flex flex-col items-center text-center">
<div className="w-full h-32 mb-4 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all">
<img className="w-full h-full object-cover" data-alt="A sophisticated server room and data center with rows of illuminated blue and green server racks. The image captures a high-tech digital governance infrastructure atmosphere, with a sense of immense processing power and security. Clean, glossy floors reflect the blinking lights of the networking equipment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARkFA3iKDdmtHhXneNyFWPGfq7N0H5pdLX96qzpZ9-0ZJh2k9KFqFTua2RZok-51uVuNHa_EO_5LIKsJD4t2akKakf_J0j9P7PwWspgoeGCblt7DMCk-7yTEhk5mjHHPSL90oRwIzRPoTVQY0MIlfTNqHCHYjzyVWU-J30W6g5ISQhu2vCzXk1qT7KnqQ0_fgIGfqylAlvMBUtjUpNlVDOCkWimJz14WGLkQJl0Y_0mACmJylsjnH8Swh4zQI5U2SK36514XkOiMU" />
</div>
<h5 className="font-bold text-forest-green">Cloud Nexus Data Center</h5>
<p className="text-xs text-on-surface-variant mt-1">AI Training &amp; Big Data Storage</p>
<div className="mt-4 flex gap-2">
<span className="material-symbols-outlined text-sm text-forest-green">location_on</span>
<span className="text-[10px] font-label-md">UMUAHIA CENTRAL</span>
</div>
</div>
{/*  Lab 3  */}
<div className="glass-card p-4 rounded-xl flex flex-col items-center text-center">
<div className="w-full h-32 mb-4 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all">
<img className="w-full h-full object-cover" data-alt="A modern chemical and biological laboratory with scientists in white coats working with glass beakers and pipettes. The environment is orderly and professional, with bright, even lighting and a clinical aesthetic. The focus is on precision, safety, and institutional reliability in research." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_JCo5X2Si02RMybAi7prIcavFURXjeJyCltyl0rYmlgSsyjBbnF4MAh4I36zcdxeN-ghjmO-gAF6DhRchgUGNZsr15HbQfHBsryFOC_XHZwavT0p2WmMoFzpnjeiDolb5_hwy3_jwLGF458Xlb7ILGWRga085btx_kSsDLuDWo8ZUd_rnnZur1h2E-RjYTrwDH-kOCoxOBbI-dO0IlRMwxwBacWH_hVwdwsfc1ofyrtvkxzbPYUiSg00LDeBPIquir4rE31rIzLQ" />
</div>
<h5 className="font-bold text-forest-green">Bio-Future Research Lab</h5>
<p className="text-xs text-on-surface-variant mt-1">Genomic Sequencing &amp; Pharma R&amp;D</p>
<div className="mt-4 flex gap-2">
<span className="material-symbols-outlined text-sm text-forest-green">location_on</span>
<span className="text-[10px] font-label-md">OHAFIA TECH PARK</span>
</div>
</div>
{/*  Lab 4  */}
<div className="glass-card p-4 rounded-xl flex flex-col items-center text-center">
<div className="w-full h-32 mb-4 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all">
<img className="w-full h-full object-cover" data-alt="A minimalist, open-plan software development studio with ergonomic workstations, dual-monitor setups, and whiteboards covered in technical diagrams. The lighting is warm and natural, creating a productive yet high-tech workspace for coding and digital product design in the Abia tech ecosystem." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS2AnZrZxACkeWbhL6zmMGGOfzNtUTFBGVFiOY22PQmzx0OdHIBoquuFhp7Go3Qa5QH2hko88G-ktWu9p655xBqozZuw32xlml8TT2nc-ZUcpbfHERy2jYO64LYAik0fBS3qbj1XPUV4P7KeuQOboXpgftvJkWKG9c7S-DT-20pXwRIj47lCs-43YqHCijfrdCjNnI3zoXjhsKS5kE_c80YWqtLVjHrrfIFbdOhHsHOGbYDWMrscoX5wFH6wjRxKhW04KqTuQjazs" />
</div>
<h5 className="font-bold text-forest-green">CodeAbia Studio</h5>
<p className="text-xs text-on-surface-variant mt-1">Software Dev &amp; Cyber Security</p>
<div className="mt-4 flex gap-2">
<span className="material-symbols-outlined text-sm text-forest-green">location_on</span>
<span className="text-[10px] font-label-md">OWERRINTA HUB</span>
</div>
</div>
</div>
</section>
</div>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest dark:bg-forest-deep mt-auto py-12 border-t border-outline-variant">
<div className="max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<span className="font-headline-lg text-headline-lg text-forest-deep dark:text-primary-fixed font-bold">ABIA ONE</span>
<p className="text-sm text-on-surface-variant mt-4 leading-relaxed">The sovereign digital infrastructure of Abia State. Driving innovation through institutional excellence and transparent governance.</p>
</div>
<div className="col-span-1 flex flex-col gap-3">
<h6 className="font-label-caps text-label-caps font-bold text-forest-green">Ecosystem</h6>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors text-sm" href="/invest-in-aba">Invest Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors text-sm" href="/serve-abia">Serve Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors text-sm" href="/build-abia">Build Abia</a>
</div>
<div className="col-span-1 flex flex-col gap-3">
<h6 className="font-label-caps text-label-caps font-bold text-forest-green">Resources</h6>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors text-sm" href="#">IP Protection Hub</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors text-sm" href="/open-abia">Open Data Portal</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors text-sm" href="#">Privacy Policy</a>
</div>
<div className="col-span-1 flex flex-col gap-3">
<h6 className="font-label-caps text-label-caps font-bold text-forest-green">Contact</h6>
<p className="text-sm text-on-surface-variant">Govt House, Umuahia</p>
<p className="text-sm text-on-surface-variant">innovation@abia.gov.ng</p>
<div className="flex gap-4 mt-2">
<span className="material-symbols-outlined text-forest-green cursor-pointer">public</span>
<span className="material-symbols-outlined text-forest-green cursor-pointer">share</span>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-outline-variant/30 text-center">
<p className="font-body-md text-on-surface-variant opacity-60 text-sm">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
</div>
</footer>
{/*  Micro-interaction Scripts  */}


      </div>
    </>
  );
}
