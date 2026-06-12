export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { background-color: #f6fbf3; color: #181d19; }\n        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }\n        .bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px; }\n        .glass-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(10px); border: 1px solid rgba(226, 232, 240, 1); }\n        .border-accent { border-left: 4px solid #D4AF37; }\n        ::-webkit-scrollbar { width: 6px; }\n        ::-webkit-scrollbar-track { background: transparent; }\n        ::-webkit-scrollbar-thumb { background: #bec9be; border-radius: 10px; }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="font-body-md text-body-md overflow-x-hidden">
        
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-outline-variant">
<div className="flex items-center justify-between px-margin-mobile md:px-margin-desktop h-16 w-full max-w-max-width mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" data-icon="account_balance">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green tracking-tight">ABIA ONE</h1>
</div>
<div className="hidden md:flex items-center gap-8">
<nav className="flex gap-6">
<a className="font-label-md text-label-md text-forest-green hover:opacity-80 transition-opacity" href="#">Health Services</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:opacity-80 transition-opacity" href="#">Logistics</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:opacity-80 transition-opacity" href="#">Reporting</a>
</nav>
<button className="relative p-2 text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-eagle-red rounded-full"></span>
</button>
</div>
</div>
</header>
<main className="pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
{/*  Dashboard Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<p className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-2">Ministry of Health • Operational Command</p>
<h2 className="font-display-lg text-display-lg text-on-surface">Health Intelligence Dashboard</h2>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-6 py-2 border border-slate-400 font-label-md text-label-md rounded-lg hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-sm" data-icon="download">download</span>
                    EXPORT REPORT
                </button>
<button className="flex items-center gap-2 px-6 py-2 bg-forest-green text-state-white font-label-md text-label-md rounded-lg hover:opacity-90 active:scale-95 transition-all">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span>
                    NEW INCIDENT
                </button>
</div>
</div>
{/*  Bento Grid Content  */}
<div className="bento-grid">
{/*  Urgent Alerts: Fusion Centre (Col-Span 12 / Top Priority)  */}
<section className="col-span-12 glass-card rounded-xl p-6 border-l-8 border-eagle-red shadow-sm overflow-hidden relative">
<div className="absolute top-0 right-0 p-4 opacity-5">
<span className="material-symbols-outlined text-9xl" data-icon="warning">warning</span>
</div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
<div className="flex items-start gap-4">
<div className="bg-eagle-red/10 p-3 rounded-lg">
<span className="material-symbols-outlined text-eagle-red" data-icon="security" style={{"fontVariationSettings":"'FILL' 1"}}>security</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-eagle-red mb-1">State Intelligence Fusion Centre (SIFC) Alert</h3>
<p className="text-on-surface-variant max-w-2xl">Localized outbreak suspected in Umuahia North LGA. Preliminary data suggests elevated gastrointestinal cases reported from 3 PHC nodes within the last 24 hours.</p>
</div>
</div>
<div className="flex flex-col items-end">
<span className="font-label-md text-label-md text-eagle-red bg-eagle-red/10 px-3 py-1 rounded-full mb-2">URGENT ACTION REQUIRED</span>
<a className="text-eagle-red font-semibold flex items-center gap-1 hover:underline" href="#">
                            View Deployment Protocols
                            <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</section>
{/*  Hospital Capacity (Col-Span 8)  */}
<section className="col-span-12 lg:col-span-8 glass-card rounded-xl overflow-hidden border border-outline-variant">
<div className="p-6 border-b border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" data-icon="local_hospital">local_hospital</span>
<h3 className="font-headline-md text-headline-md">Hospital Capacity by LGA</h3>
</div>
<select className="bg-transparent border-none font-label-md text-label-md text-secondary focus:ring-0">
<option>Real-time (Live)</option>
<option>Last 24 Hours</option>
</select>
</div>
<div className="p-6 overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-on-surface-variant font-label-md text-label-md uppercase tracking-tighter">
<th className="pb-4 border-b border-outline-variant">LGA Region</th>
<th className="pb-4 border-b border-outline-variant">ICU Occupancy</th>
<th className="pb-4 border-b border-outline-variant">General Bed Gap</th>
<th className="pb-4 border-b border-outline-variant">Staffing Ratio</th>
<th className="pb-4 border-b border-outline-variant">Status</th>
</tr>
</thead>
<tbody className="font-body-md">
<tr className="hover:bg-surface-container transition-colors group">
<td className="py-4 border-b border-outline-variant font-semibold">Aba North</td>
<td className="py-4 border-b border-outline-variant">
<div className="w-32 h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div className="bg-forest-green h-full" style={{"width":"82%"}}></div>
</div>
<span className="text-caption font-label-md mt-1 block">82% (14/17 Beds)</span>
</td>
<td className="py-4 border-b border-outline-variant">-12</td>
<td className="py-4 border-b border-outline-variant">1:4.2</td>
<td className="py-4 border-b border-outline-variant">
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Elevated</span>
</td>
</tr>
<tr className="hover:bg-surface-container transition-colors group">
<td className="py-4 border-b border-outline-variant font-semibold">Umuahia North</td>
<td className="py-4 border-b border-outline-variant">
<div className="w-32 h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div className="bg-eagle-red h-full" style={{"width":"95%"}}></div>
</div>
<span className="text-caption font-label-md mt-1 block">95% (21/22 Beds)</span>
</td>
<td className="py-4 border-b border-outline-variant">-2</td>
<td className="py-4 border-b border-outline-variant">1:6.8</td>
<td className="py-4 border-b border-outline-variant">
<span className="bg-red-100 text-eagle-red px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Critical</span>
</td>
</tr>
<tr className="hover:bg-surface-container transition-colors group">
<td className="py-4 border-b border-outline-variant font-semibold">Ohafia</td>
<td className="py-4 border-b border-outline-variant">
<div className="w-32 h-2 bg-surface-container-highest rounded-full overflow-hidden">
<div className="bg-forest-green h-full" style={{"width":"45%"}}></div>
</div>
<span className="text-caption font-label-md mt-1 block">45% (9/20 Beds)</span>
</td>
<td className="py-4 border-b border-outline-variant">+42</td>
<td className="py-4 border-b border-outline-variant">1:3.1</td>
<td className="py-4 border-b border-outline-variant">
<span className="bg-green-100 text-forest-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Stable</span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
{/*  ASHIA Metrics (Col-Span 4)  */}
<section className="col-span-12 lg:col-span-4 glass-card rounded-xl p-6 flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-brass-gold" data-icon="verified_user">verified_user</span>
<h3 className="font-headline-md text-headline-md">ASHIA Enrollment</h3>
</div>
<div className="space-y-6">
<div className="flex items-end justify-between">
<div>
<p className="text-on-surface-variant font-label-md">Total Citizens Enrolled</p>
<p className="font-display-lg text-headline-lg text-on-surface">1,244,892</p>
</div>
<span className="text-forest-green font-bold flex items-center gap-1 text-sm">
<span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
                                4.2%
                            </span>
</div>
<div className="space-y-2">
<div className="flex justify-between text-caption font-label-md">
<span>Enrollment Target (FY24)</span>
<span>68% achieved</span>
</div>
<div className="h-4 bg-surface-container-highest rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[68%]"></div>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant">
<p className="text-on-surface-variant text-caption mb-4">Latest Enrollment Site Activity</p>
<div className="flex -space-x-2">
<img alt="Health Worker" className="w-8 h-8 rounded-full border-2 border-surface" data-alt="A professional headshot of a Nigerian health officer wearing a clinical white coat and a stethoscope, smiling confidently in a modern medical administrative setting with soft natural lighting and corporate green accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3DLrsV_QYiPr1o4Rfp2Nmq2_DOXXqI0g8acoYLT8uERFESAukYQLSoUp4nXJyG5O0K5kEhTZUxS6bUpHBCYlWRIV9kqlK4fnPMhKSQsjNcZX3yE7-H3I4Fn79Yo91cR2hSXDeJjHRciWL_hsLUa-8VgoMA8DM2VUXuI_dL3HZ7aYS5w4qVU-bgCPdN7FjoOC_VQrdct5mOtvD3wIP50nh14k_2dZomQy9AdbZQzIdGnbJ99CSkEc_97cG0rT0zQtmaewC_0lgA8s"/>
<img alt="Admin Specialist" className="w-8 h-8 rounded-full border-2 border-surface" data-alt="A close-up portrait of a West African female medical administrator in a bright office space, looking professional and capable. The lighting is crisp and modern, focusing on her friendly yet serious expression as a leader in state health services." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWoPuWVRf-gOJnSGdMl-5eV-u-I8IpdEwnRUduqeeaWjjKPgYHZT1HfMjnakyayhF5NOIfOLCZ7NpkRbQfOGK6Hfsdw2itzcHfr97Ad2jTe-lfd1UvtU6Khc8CenFuOUbFleP0arYv22vhiobqlGQWyh0sjaXC1_jvFtP8FQTbxamZ8cEv_LeYlcB5TYh_eEcZqIy5JuuAoVetJmD73T1YJOWxtigEMAyjfZh98N4-PsgxZOBVhc1Xz3sf1OpHi0LfojxlZXTpJPM"/>
<div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">+12</div>
</div>
</div>
</section>
{/*  Vaccine Distribution (Col-Span 12 / Dynamic Dashboard Row)  */}
<section className="col-span-12 glass-card rounded-xl p-8">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
<div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Vaccine Distribution Status</h3>
<p className="text-on-surface-variant max-w-xl">Tracking cold-chain integrity and stock levels for Routine Immunization and COVID-19 boosters across 17 LGAs.</p>
</div>
<div className="flex gap-4">
<div className="bg-surface-container p-4 rounded-lg text-center">
<p className="text-caption font-label-md text-on-surface-variant">Active Cold Chain</p>
<p className="text-headline-md font-bold text-forest-green">98.2%</p>
</div>
<div className="bg-surface-container p-4 rounded-lg text-center">
<p className="text-caption font-label-md text-on-surface-variant">Last-Mile Deliveries</p>
<p className="text-headline-md font-bold text-brass-gold">142/150</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="border border-outline-variant rounded-lg p-4 hover:border-forest-green transition-colors cursor-pointer group">
<div className="flex items-center justify-between mb-3">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-forest-green" data-icon="vaccines">vaccines</span>
<span className="text-xs bg-green-100 text-forest-green px-2 py-0.5 rounded">High Stock</span>
</div>
<h4 className="font-bold text-on-surface">BCG/Pentavalent</h4>
<p className="text-caption text-on-surface-variant">Main Depot: Umuahia Central</p>
<div className="mt-4 h-1 w-full bg-surface-container-highest rounded-full">
<div className="bg-forest-green h-full w-[88%]"></div>
</div>
</div>
<div className="border border-outline-variant rounded-lg p-4 hover:border-forest-green transition-colors cursor-pointer group">
<div className="flex items-center justify-between mb-3">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-forest-green" data-icon="thermostat">thermostat</span>
<span className="text-xs bg-yellow-100 text-secondary px-2 py-0.5 rounded">Cold-Chain Syncing</span>
</div>
<h4 className="font-bold text-on-surface">HPV Vaccine</h4>
<p className="text-caption text-on-surface-variant">Main Depot: Aba Logistics Hub</p>
<div className="mt-4 h-1 w-full bg-surface-container-highest rounded-full">
<div className="bg-brass-gold h-full w-[42%]"></div>
</div>
</div>
<div className="border border-outline-variant rounded-lg p-4 hover:border-forest-green transition-colors cursor-pointer group">
<div className="flex items-center justify-between mb-3">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-forest-green" data-icon="inventory_2">inventory_2</span>
<span className="text-xs bg-red-100 text-eagle-red px-2 py-0.5 rounded">Low Stock</span>
</div>
<h4 className="font-bold text-on-surface">COVID-19 Booster</h4>
<p className="text-caption text-on-surface-variant">Main Depot: Regional Central</p>
<div className="mt-4 h-1 w-full bg-surface-container-highest rounded-full">
<div className="bg-eagle-red h-full w-[12%]"></div>
</div>
</div>
<div className="relative rounded-lg overflow-hidden group cursor-pointer border border-outline-variant">
<img alt="Cold storage" className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A sophisticated close-up of a high-tech medical cold storage refrigerator used for vaccine distribution. The environment is sterile and professional, with a cool clinical blue and surgical white color palette. LED readouts and laboratory-grade glass shelves reflect a modern, data-driven governance aesthetic in a Nigerian healthcare facility." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB63DZJDZX1wGN-NIeMVkqJgGOfRwj6vmnR8MEIArlz-Oy0TzDkNYLwBVXgYZlB7x09sl4xqJEYNxuAgjZoVartpA2zQxMqpz6Qlz2peGSGrDG31kQuw1gjP3BHFyTYLlCxLMjVC029KSstfjwSw3zjEd55_JCndB3z_IknMofTiWYOW6QvvhuoQwwHbsa8rdWxG58duLrtlBoFvDD2gb6OJqdY1og5v4JlDmeg1YcZTg4Uv0rCJ2EKeCVXZ-M8PD98V4ArlnapQE"/>
<div className="relative z-10 p-4 h-full flex flex-col justify-between">
<h4 className="font-bold text-on-surface">Supply Chain Map</h4>
<div className="flex items-center gap-1 text-forest-green text-caption font-bold">
                                View Interactive Grid
                                <span className="material-symbols-outlined text-xs" data-icon="map">map</span>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
{/*  BottomNavBar (Mobile Only)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 rounded-t-full bg-surface-container-lowest border-t border-outline-variant shadow-sm px-base pb-safe h-20 flex justify-around items-center">
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 transition-transform active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 transition-transform active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 transition-transform active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
<span className="font-label-md text-label-md">Hub</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 transition-transform active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-label-md">Profile</span>
</a>
</nav>
{/*  Contextual FAB  */}
<button className="fixed bottom-24 right-6 md:bottom-8 md:right-8 bg-forest-green text-state-white w-14 h-14 rounded-xl flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all z-40 group">
<span className="material-symbols-outlined" data-icon="send">send</span>
<span className="absolute right-16 bg-on-background text-state-white px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Deploy Rapid Response Team</span>
</button>


      </div>
    </>
  );
}
