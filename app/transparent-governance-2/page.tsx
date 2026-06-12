"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { font-family: 'Hanken Grotesk', sans-serif; }\n        .bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px; }\n        .glass-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(8px); border: 1px solid #E2E8F0; }\n        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }\n        .brass-accent { border-left: 4px solid #D4AF37; }\n        ::-webkit-scrollbar { width: 6px; }\n        ::-webkit-scrollbar-track { background: #f1f5ee; }\n        ::-webkit-scrollbar-thumb { background: #004d28; border-radius: 10px; }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
        
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 bg-background dark:bg-inverse-surface border-b border-outline-variant dark:border-outline">
<div className="flex justify-between items-center px-margin-desktop h-20 max-w-max-width mx-auto">
<div className="font-display-lg text-display-lg font-bold text-primary dark:text-primary-fixed">ABIA ONE</div>
<nav className="hidden md:flex gap-8 items-center">
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Economy</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Digital Gov</a>
<a className="text-primary dark:text-primary-fixed-dim border-b-2 border-brass-gold font-semibold pb-1" href="#">Governance</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary dark:hover:text-primary-fixed transition-colors" href="#">Security</a>
</nav>
<div className="flex items-center gap-6">
<div className="relative hidden lg:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-low border-outline-variant focus:border-primary focus:ring-0 rounded-lg text-body-md w-64" placeholder="Search budget..." type="text" />
</div>
<button className="bg-forest-green text-state-white px-6 py-2 rounded-lg font-headline-md text-body-md hover:opacity-90 transition-all active:opacity-80">Citizen Portal</button>
</div>
</div>
</header>
{/*  SideNavBar  */}
<aside className="fixed left-0 top-20 h-[calc(100vh-80px)] w-64 bg-surface-container-low dark:bg-surface-dim border-r border-outline-variant hidden lg:flex flex-col py-6">
<div className="px-6 mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
<span className="material-symbols-outlined">account_balance</span>
</div>
<div>
<div className="font-headline-md text-body-md font-bold text-primary">Navigation</div>
<div className="text-caption text-on-surface-variant">State Operating System</div>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-variant transition-colors group" href="#">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">payments</span>
<span className="font-body-md">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-variant transition-colors group" href="#">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">account_balance</span>
<span className="font-body-md">Digital Government</span>
</a>
<a className="flex items-center gap-3 text-forest-green font-bold border-l-4 border-brass-gold bg-surface-container-high px-4 py-3" href="#">
<span className="material-symbols-outlined">gavel</span>
<span className="font-body-md">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-3 hover:bg-surface-variant transition-colors group" href="#">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">verified_user</span>
<span className="font-body-md">Public Trust</span>
</a>
</nav>
<div className="px-4 mt-auto space-y-1 border-t border-outline-variant pt-6">
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-2 hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-body-md">Settings</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant px-4 py-2 hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-body-md">Support</span>
</a>
<button className="w-full mt-4 bg-brass-gold text-on-secondary-fixed py-3 rounded-lg font-bold flex items-center justify-center gap-2">
                Launch Service <span className="material-symbols-outlined text-sm">open_in_new</span>
</button>
</div>
</aside>
{/*  Main Content Area  */}
<main className="lg:ml-64 mt-20 min-h-screen">
{/*  Hero Section  */}
<section className="relative h-[500px] flex items-center overflow-hidden">

<div className="relative z-10 px-margin-desktop max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<span className="inline-block bg-primary-container text-on-primary-container px-3 py-1 rounded-full font-label-md text-label-md mb-6 tracking-widest">GOVERNANCE LAYER</span>
<h1 className="font-display-lg text-display-lg text-primary mb-6 leading-tight">Transparency &amp; Transformation</h1>
<p className="font-body-lg text-on-surface-variant mb-8 max-w-lg">
                        Providing real-time access to the machinery of the State. Explore the budget, monitor active procurement cycles, and track the physical manifestation of infrastructure across every LGA.
                    </p>
<div className="flex gap-4">
<button className="bg-forest-green text-state-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all">Explore Budget</button>
<button className="border-2 border-brass-gold text-primary px-8 py-3 rounded-lg font-bold hover:bg-brass-gold/10 transition-all">Procurement Portal</button>
</div>
</div>
<div className="hidden md:grid grid-cols-2 gap-4">
<div className="glass-card p-6 rounded-xl space-y-2">
<div className="text-brass-gold font-display-lg text-3xl font-bold">₦1.2T</div>
<div className="text-caption text-on-surface-variant uppercase tracking-tighter">Total Assets Tracked</div>
</div>
<div className="glass-card p-6 rounded-xl space-y-2 mt-8">
<div className="text-forest-green font-display-lg text-3xl font-bold">150+</div>
<div className="text-caption text-on-surface-variant uppercase tracking-tighter">Active Projects</div>
</div>
<div className="glass-card p-6 rounded-xl space-y-2">
<div className="text-eagle-red font-display-lg text-3xl font-bold">94%</div>
<div className="text-caption text-on-surface-variant uppercase tracking-tighter">Execution Rate</div>
</div>
<div className="glass-card p-6 rounded-xl space-y-2 mt-8">
<div className="text-primary font-display-lg text-3xl font-bold">17/17</div>
<div className="text-caption text-on-surface-variant uppercase tracking-tighter">LGA Coverage</div>
</div>
</div>
</div>
</section>
{/*  Build Abia: Interactive Map  */}
<section className="py-16 px-margin-desktop max-w-max-width mx-auto">
<div className="mb-12">
<h2 className="font-headline-lg text-headline-lg text-primary brass-accent pl-4 mb-2">Build Abia</h2>
<p className="text-body-md text-on-surface-variant">Real-time infrastructure footprint across 17 Local Government Areas.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
<div className="lg:col-span-2 bg-surface-container h-[600px] rounded-xl overflow-hidden relative border border-outline-variant">
<div className="absolute top-4 left-4 z-10 space-y-2">
<div className="bg-state-white/90 backdrop-blur p-4 rounded-lg border border-outline shadow-sm">
<div className="font-bold text-primary mb-2">Filter by Sector</div>
<div className="flex flex-wrap gap-2">
<span className="bg-primary text-state-white px-2 py-1 text-xs rounded">All</span>
<span className="bg-state-white border border-outline text-xs px-2 py-1 rounded hover:bg-surface-variant cursor-pointer">Roads</span>
<span className="bg-state-white border border-outline text-xs px-2 py-1 rounded hover:bg-surface-variant cursor-pointer">Health</span>
<span className="bg-state-white border border-outline text-xs px-2 py-1 rounded hover:bg-surface-variant cursor-pointer">Education</span>
</div>
</div>
</div>
<img className="w-full h-full object-cover" data-alt="A sophisticated digital interactive map of Abia State Nigeria featuring numerous glowing data points indicating active construction sites and infrastructure projects. The map is rendered in a professional architectural style with semi-transparent layers of topography overlaid with bright forest green indicators. Soft ambient lighting illuminates the interface creating a high-tech data-driven governance aesthetic suitable for an official state operating system." data-location="Abia State, Nigeria" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv7Uf2dT1leb1fMjueIuf5hfkk7HdL3sHNsn4LWyNzIMRefICh71Un4q6qFXhK3FjayOWGu9NOVnAWXsB9-wmqNz9h_W8lKV-QBuph92EigxVEhfPGR65bFAyLbde7gDlcKTMHQfjTe2LUR7LXfkH9Hwg3enNhusuL-ETP9fCPUyYyjpcSGbEV29oe0MLSXKv0fEK5GN6J_nNRl0KnC3vZ4Qzai-zGQU48nF8g1QxOlSYpGKBoBvjXelWH-3gw0Q3EmkCpRpMGSYs" />
{/*  Faux Map Markers  */}
<div className="absolute top-1/3 left-1/2 w-4 h-4 bg-brass-gold rounded-full animate-ping"></div>
<div className="absolute top-1/2 left-1/4 w-4 h-4 bg-forest-green rounded-full shadow-lg border-2 border-white"></div>
</div>
<div className="space-y-6 overflow-y-auto max-h-[600px] pr-2">
<div className="glass-card p-6 rounded-xl border-l-4 border-forest-green">
<div className="flex justify-between items-start mb-2">
<span className="text-caption font-bold text-forest-green uppercase">Road Construction</span>
<span className="bg-primary-fixed text-on-primary-fixed px-2 py-0.5 rounded-full text-xs">85% Complete</span>
</div>
<h3 className="font-headline-md text-body-md font-bold mb-2">Aba-Owerri Road Dualization</h3>
<p className="text-caption text-on-surface-variant mb-4">Phase 1 structural work finished. Asphalt laying in progress.</p>
<div className="w-full bg-surface-variant h-1 rounded-full">
<div className="bg-forest-green h-1 rounded-full" style={{"width":"85%"}}></div>
</div>
</div>
<div className="glass-card p-6 rounded-xl border-l-4 border-brass-gold">
<div className="flex justify-between items-start mb-2">
<span className="text-caption font-bold text-brass-gold uppercase">Healthcare</span>
<span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full text-xs">Mobilized</span>
</div>
<h3 className="font-headline-md text-body-md font-bold mb-2">Umuahia Specialist Clinic</h3>
<p className="text-caption text-on-surface-variant mb-4">Procurement for medical equipment finalized. Site clearing complete.</p>
<div className="w-full bg-surface-variant h-1 rounded-full">
<div className="bg-brass-gold h-1 rounded-full" style={{"width":"15%"}}></div>
</div>
</div>
<div className="glass-card p-6 rounded-xl border-l-4 border-eagle-red">
<div className="flex justify-between items-start mb-2">
<span className="text-caption font-bold text-eagle-red uppercase">Agriculture</span>
<span className="bg-error-container text-on-error-container px-2 py-0.5 rounded-full text-xs">On Hold</span>
</div>
<h3 className="font-headline-md text-body-md font-bold mb-2">Abia Rice Mill Expansion</h3>
<p className="text-caption text-on-surface-variant mb-4">Awaiting environmental impact assessment approval.</p>
<div className="w-full bg-surface-variant h-1 rounded-full">
<div className="bg-eagle-red h-1 rounded-full" style={{"width":"40%"}}></div>
</div>
</div>
</div>
</div>
</section>
{/*  Project Showcase: Before & After  */}
<section className="py-16 bg-surface-container-low">
<div className="px-margin-desktop max-w-max-width mx-auto">
<div className="mb-12 flex justify-between items-end">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary brass-accent pl-4 mb-2">Project Showcase</h2>
<p className="text-body-md text-on-surface-variant">Visual evidence of the Abia transformation journey.</p>
</div>
<button className="text-primary font-bold flex items-center gap-2 hover:underline">View All Gallery <span className="material-symbols-outlined">arrow_forward</span></button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
<div className="group relative overflow-hidden rounded-2xl aspect-video bg-surface-dim border border-outline-variant">
<div className="flex h-full">
<div className="w-1/2 relative">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700" data-alt="A gritty high-contrast documentary-style photograph showing the dilapidated state of Aba Road before modernization. The image captures broken pavement, clogged drainage systems, and chaotic utility lines under a harsh midday sun creating a stark feeling of urban decay and institutional neglect. The color palette is dominated by dusty browns and muted grays representing the starting point of the state's transformation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDICeO3AXINXcxCJ1llkLCXU_DA1AEBH5oOBxKIQXbqjwCFJZLOIVe6bC6UuZGr22RChyjeC3L350brpgSFOKZX9rT0SxMMsjZ16fIF0bjQ7VQj21vHsOk4TMo5FpiK8RCdN_Sf6e4L9dRKVhfvRoc4T8H2GCOHCV7tNStx9q0IEDyypB-n1nSD3fMdgJIVPoyydx5n6Y6_sHNLwzkG5RCR3-5MVFeXIwIJHpab-O8gyGAIcIyVhQ1KgDuJ5Qcd_2tih7gh_ty_LPU" />
<span className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 font-bold uppercase backdrop-blur-sm">Before (2022)</span>
</div>
<div className="w-1/2 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" data-alt="A vibrant wide-angle photograph showcasing the modernized Aba Road after the governance transformation. The image features smooth black asphalt with crisp white lane markings, wide paved sidewalks, contemporary energy-efficient streetlights, and organized green medians. The lighting is the golden hour of sunset casting a warm professional glow across the orderly urban infrastructure. The overall aesthetic is one of progressive corporate modernity and functional governance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTbdcGjLaszNkNQ_as2Y-0Slyf3k4jI98WlXILJgo80hL40KEOK61uVqoVWKZRhf_pcDu2KcriuVv9L6aa-vLJfgUh40HDImYishuUYKqLhvwTiG1-qlbNlWEC2k3O78pQF47PxgMxLKcTLasLMIEJtPx8MFmehxmSeLHC9JfNMHTa1BhOisrGdIhs4wHV7ez4c8vXPr2XaKI6-umc8U9J1DBp9mFfSD8DXqlmGtlu5nju6vOJ-h8oeQottd9vWi_C53j8MAaB3G0" />
<span className="absolute top-4 right-4 bg-forest-green text-white text-xs px-2 py-1 font-bold uppercase shadow-lg">After (2024)</span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
<h4 className="font-bold text-body-lg">Port Harcourt Road - Aba Reconstruction</h4>
<p className="text-caption opacity-80">6-Lane expansion with integrated underground drainage.</p>
</div>
</div>
<div className="group relative overflow-hidden rounded-2xl aspect-video bg-surface-dim border border-outline-variant">
<div className="flex h-full">
<div className="w-1/2 relative">
<img className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700" data-alt="A sobering photograph of a crumbling public health center interior before renovation. Cracked walls, rusted medical beds, and dimly lit corridors highlight the desperate need for transformation. The scene is shot with a realistic flat lighting to emphasize the texture of the decay in a professional documentary style. The palette is a mix of sickly pale yellows and oxidized oranges reflecting years of abandonment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4SA-4BwZdsO4Mz0jUIK0F3Xyhn4wFUYvhv1z5Px3DdwZmhOGT-QDonL1GCM3W-wNpEDwHCuHXiZvnsL4jT1yYYVQDAsxDWo87CRGshPu8Qtc3I4Tevc1blMZ73uqNvenOmMXmvdmrvKk-sth-icaIJ1T0XOR_SCguPoEsVByW3kN_VJ0t3fDoAnxdTZYXSprpkB9_TruQpPDE1rQJaqh3kFVLWTX6h-0f8lrRt-V2qfhJt33Hda5Jq1PFFVuf8NzeYxWm3PzeTqg" />
<span className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 font-bold uppercase backdrop-blur-sm">Before</span>
</div>
<div className="w-1/2 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" data-alt="A pristine high-tech medical environment showing the renovated interior of an Abia State health facility. The image captures bright white sterile surfaces, modern digital medical equipment, ergonomic furniture, and soft diffused LED lighting. The color accents are a clean forest green and calming teal creating a professional medical atmosphere that communicates safety, efficiency, and world-class healthcare governance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjvZGttIkDrIcPQcAS2MT8gTlm1Dp7nrS2x9k6W6yeTVfb62_sg7j6o7IMYeXCC_6P_fR9zZgftEs7cJb0-o7-jSc8Or38Fg3elwtkPlht1c0nX6OQ_8KDK4fRZ_D_VJ7DUR1xgsV6q3gmfPx_eWTqTPdS5tJCR3wUhxZgPnAFpHPp3LGS9ALxpYohwcozdU_qRGt6jHIqdQEpJGQvKCwgUJbivpfoNtRw7eC2Y7FKL8zUl9JSdyg5gDo8VePLDXjXIkqzAR75yZk" />
<span className="absolute top-4 right-4 bg-forest-green text-white text-xs px-2 py-1 font-bold uppercase shadow-lg">After</span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
<h4 className="font-bold text-body-lg">General Hospital Renovation Project</h4>
<p className="text-caption opacity-80">Full facility upgrade including 100-bed solar power installation.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Open Abia: Procurement Dashboard  */}
<section className="py-16 px-margin-desktop max-w-max-width mx-auto">
<div className="mb-12">
<h2 className="font-headline-lg text-headline-lg text-primary brass-accent pl-4 mb-2">Open Abia</h2>
<p className="text-body-md text-on-surface-variant">Transparency in public procurement and resource allocation.</p>
</div>
<div className="bento-grid">
{/*  Recent Contract Awards Table  */}
<div className="col-span-12 lg:col-span-8 glass-card rounded-2xl overflow-hidden">
<div className="p-6 bg-surface-container-high border-b border-outline-variant flex justify-between items-center">
<h3 className="font-headline-md text-body-md font-bold text-primary">Recent Contract Awards</h3>
<button className="bg-state-white px-3 py-1 rounded border border-outline-variant text-caption flex items-center gap-2">
<span className="material-symbols-outlined text-sm">filter_list</span> Filter
                        </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container text-caption font-bold uppercase tracking-wider text-on-surface-variant">
<th className="px-6 py-4">Contractor</th>
<th className="px-6 py-4">Sector</th>
<th className="px-6 py-4">Amount (₦)</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4"></th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4">
<div className="font-bold text-body-md">Julius Berger Nig. PLC</div>
<div className="text-xs text-on-surface-variant">ID: AB/CON/2024/042</div>
</td>
<td className="px-6 py-4">
<span className="bg-primary-fixed text-on-primary-fixed-variant px-2 py-1 rounded-full text-xs">Infrastructure</span>
</td>
<td className="px-6 py-4 font-label-md">14,200,000,000</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 text-xs font-bold text-forest-green">
<span className="w-2 h-2 rounded-full bg-forest-green"></span> AWARDED
                                        </div>
</td>
<td className="px-6 py-4">
<button className="text-primary hover:text-brass-gold"><span className="material-symbols-outlined">visibility</span></button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4">
<div className="font-bold text-body-md">Harkins Med-Tech Ltd</div>
<div className="text-xs text-on-surface-variant">ID: AB/CON/2024/039</div>
</td>
<td className="px-6 py-4">
<span className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded-full text-xs">Healthcare</span>
</td>
<td className="px-6 py-4 font-label-md">2,450,000,000</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 text-xs font-bold text-brass-gold">
<span className="w-2 h-2 rounded-full bg-brass-gold"></span> PENDING
                                        </div>
</td>
<td className="px-6 py-4">
<button className="text-primary hover:text-brass-gold"><span className="material-symbols-outlined">visibility</span></button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4">
<div className="font-bold text-body-md">Global Power Solutions</div>
<div className="text-xs text-on-surface-variant">ID: AB/CON/2024/028</div>
</td>
<td className="px-6 py-4">
<span className="bg-primary-fixed text-on-primary-fixed-variant px-2 py-1 rounded-full text-xs">Energy</span>
</td>
<td className="px-6 py-4 font-label-md">8,900,000,000</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 text-xs font-bold text-forest-green">
<span className="w-2 h-2 rounded-full bg-forest-green"></span> AWARDED
                                        </div>
</td>
<td className="px-6 py-4">
<button className="text-primary hover:text-brass-gold"><span className="material-symbols-outlined">visibility</span></button>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4">
<div className="font-bold text-body-md">Digital Abia Tech</div>
<div className="text-xs text-on-surface-variant">ID: AB/CON/2024/015</div>
</td>
<td className="px-6 py-4">
<span className="bg-surface-variant text-on-surface-variant px-2 py-1 rounded-full text-xs">Education</span>
</td>
<td className="px-6 py-4 font-label-md">670,000,000</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 text-xs font-bold text-eagle-red">
<span className="w-2 h-2 rounded-full bg-eagle-red"></span> CANCELLED
                                        </div>
</td>
<td className="px-6 py-4">
<button className="text-primary hover:text-brass-gold"><span className="material-symbols-outlined">visibility</span></button>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 bg-surface-container-low text-center">
<button className="text-primary font-bold text-caption uppercase tracking-widest hover:text-brass-gold transition-colors">Download Annual Procurement Report (PDF)</button>
</div>
</div>
{/*  Budget Info Visualization  */}
<div className="col-span-12 lg:col-span-4 glass-card rounded-2xl p-6 flex flex-col">
<h3 className="font-headline-md text-body-md font-bold text-primary mb-6">2024 Budget Execution</h3>
<div className="flex-1 flex flex-col justify-center items-center relative py-8">
{/*  Faux Donut Chart  */}
<div className="w-48 h-48 rounded-full border-[16px] border-surface-variant relative flex items-center justify-center">
<div className="absolute inset-0 rounded-full border-[16px] border-forest-green" style={{"clipPath":"polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 0, 40% 0)"}}></div>
<div className="text-center">
<div className="text-3xl font-bold text-primary">68%</div>
<div className="text-[10px] text-on-surface-variant uppercase font-bold">Executed</div>
</div>
</div>
<div className="mt-8 w-full space-y-4">
<div className="flex justify-between items-center text-caption">
<span className="flex items-center gap-2"><span className="w-3 h-3 bg-forest-green rounded-sm"></span> Capital Expenditure</span>
<span className="font-bold">₦420.5B</span>
</div>
<div className="flex justify-between items-center text-caption">
<span className="flex items-center gap-2"><span className="w-3 h-3 bg-brass-gold rounded-sm"></span> Recurrent Expenditure</span>
<span className="font-bold">₦180.2B</span>
</div>
<div className="flex justify-between items-center text-caption">
<span className="flex items-center gap-2"><span className="w-3 h-3 bg-surface-variant rounded-sm"></span> Debt Servicing</span>
<span className="font-bold">₦45.1B</span>
</div>
</div>
</div>
<button className="w-full bg-forest-green text-state-white py-3 rounded-lg font-bold mt-4 flex items-center justify-center gap-2">
                        View Interactive Budget <span className="material-symbols-outlined">analytics</span>
</button>
</div>
</div>
</section>
{/*  Footer  */}
<footer className="bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant dark:border-outline">
<div className="flex flex-col md:flex-row justify-between items-center py-gutter px-margin-desktop max-w-max-width mx-auto">
<div className="flex flex-col mb-8 md:mb-0">
<div className="font-headline-md text-headline-md text-primary mb-2">ABIA ONE</div>
<div className="font-caption text-caption text-on-surface-variant max-w-xs">
                        © 2024 Abia State Government. All rights reserved. Built for the future of governance.
                    </div>
</div>
<div className="flex flex-wrap gap-x-12 gap-y-6">
<div className="flex flex-col gap-2">
<span className="font-bold text-primary text-caption uppercase tracking-wider">Resources</span>
<a className="text-on-surface-variant hover:text-primary transition-colors text-caption" href="#">Institutional Links</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-caption" href="#">Transparency Info</a>
</div>
<div className="flex flex-col gap-2">
<span className="font-bold text-primary text-caption uppercase tracking-wider">Legal</span>
<a className="text-on-surface-variant hover:text-primary transition-colors text-caption" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors text-caption" href="#">Contact Support</a>
</div>
<div className="flex flex-col gap-2">
<span className="font-bold text-primary text-caption uppercase tracking-wider">Social</span>
<div className="flex gap-4">
<span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">public</span>
<span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">alternate_email</span>
<span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">share</span>
</div>
</div>
</div>
</div>
</footer>
</main>


      </div>
    </>
  );
}
