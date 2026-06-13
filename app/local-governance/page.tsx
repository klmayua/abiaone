"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .brass-border-left {\n            border-left: 4px solid #D4AF37;\n        }\n        .sidebar-active {\n            background-color: #fed65b; /* secondary-container */\n            color: #745c00; /* on-secondary-container */\n            border-radius: 0.25rem;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(10px);\n            border: 1px solid #E2E8F0;\n        }\n        ::-webkit-scrollbar {\n            width: 6px;\n        }\n        ::-webkit-scrollbar-track {\n            background: #f1f5ee;\n        }\n        ::-webkit-scrollbar-thumb {\n            background: #6f7a70;\n            border-radius: 10px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-surface font-body-md text-on-surface flex min-h-screen">
        
{/*  SideNavBar (Authority: JSON Component)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant z-50">
<div className="p-6">
<img src="/Logos/Abia_One_No_Background.png" alt="ABIA ONE" className="h-8 w-auto" />
<p className="font-body-md text-body-md opacity-70">Modern Governance OS</p>
</div>
<nav className="flex-1 px-2 space-y-1">
{/*  Active: Governance  */}
<a className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg mx-2" href="/economic-transformation">
<span className="material-symbols-outlined mr-3" data-icon="payments">payments</span>
<span className="font-label-sm text-label-sm">Economic Transformation</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg mx-2" href="/serve-abia">
<span className="material-symbols-outlined mr-3" data-icon="account_balance">account_balance</span>
<span className="font-label-sm text-label-sm">Digital Government</span>
</a>
<a className="flex items-center px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg mx-2 translate-x-1 duration-150" href="/local-governance">
<span className="material-symbols-outlined mr-3" data-icon="vptree">mitre</span>
<span className="font-label-sm text-label-sm">Transparent Governance</span>
</a>
<a className="flex items-center px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg mx-2" href="/secure-abia">
<span className="material-symbols-outlined mr-3" data-icon="security">security</span>
<span className="font-label-sm text-label-sm">Public Trust</span>
</a>
</nav>
<div className="p-4 border-t border-outline-variant">
<button className="w-full bg-forest-green text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all">
<span className="material-symbols-outlined text-sm" data-icon="chat">chat</span>
                Citizen Feedback
            </button>
<div className="mt-4 space-y-1">
<a className="flex items-center px-4 py-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg" href="#">
<span className="material-symbols-outlined mr-3" data-icon="settings">settings</span>
<span className="text-sm">Settings</span>
</a>
<a className="flex items-center px-4 py-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg" href="#">
<span className="material-symbols-outlined mr-3" data-icon="help">help</span>
<span className="text-sm">Support</span>
</a>
</div>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 lg:ml-64 flex flex-col">
{/*  TopNavBar (Authority: JSON Component)  */}
<header className="sticky top-0 w-full z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant px-margin-mobile md:px-margin-desktop h-16 flex justify-between items-center">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined lg:hidden" data-icon="menu">menu</span>
<h2 className="font-headline-md text-headline-md font-bold text-forest-deep hidden md:block">LGA Admin Console</h2>
<span className="hidden md:block bg-secondary-container px-3 py-0.5 rounded-full text-on-secondary-container font-label-md text-[10px]">ABA NORTH</span>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-4">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="/local-governance">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="/secure-abia">Security</a>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-on-surface-variant"><span className="material-symbols-outlined" data-icon="notifications">notifications</span></button>
<div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="A professional portrait of a West African government official in a sharp charcoal suit, smiling confidently against a minimalist, high-key studio background. The lighting is soft and corporate, reflecting a modern light-mode UI aesthetic with clean lines and premium professional tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAazmTehzHJUeaIOSK3Y40JUtVg9YPqq91GAfVQycz2TLEgjg0O-0crII3DAj9wsB9LNa4Hli970LCDx-wANgpDefVTWVeXsniN8cJZ3T_jt_yaZXSnkHNtLvd6KgjKdS3Od54joSBMGUe-83k6cdRb-WD_YKWmKAfiN5Sp3LD7C6180A5LH2xQR55gMI567xHhvWr6NWwNVWyyxizQWXZG5vQr45JLUQOyKxqdyMBOVMVOdYS6l2Yfl2hBt2a_oOABUD1I7UQcWc" />
</div>
</div>
</div>
</header>
{/*  Dashboard Content  */}
<section className="p-6 md:p-10 max-w-container-max-width mx-auto w-full space-y-8">
{/*  Hero Stats / Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
<div className="md:col-span-2 glass-card rounded-xl p-6 relative overflow-hidden flex flex-col justify-between">
<div className="relative z-10">
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Revenue Target Q3</p>
<h3 className="font-display-lg text-display-lg mt-2 text-forest-deep">₦142.5M</h3>
<div className="mt-4 flex items-center gap-2 text-primary font-semibold">
<span className="material-symbols-outlined" data-icon="trending_up">trending_up</span>
<span>12.4% above last month</span>
</div>
</div>
<div className="mt-6 h-2 w-full bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-forest-green" style={{"width":"78%"}}></div>
</div>
<p className="mt-2 text-caption text-on-surface-variant">78% of quarterly target achieved</p>
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-[80px]" data-icon="account_balance_wallet">account_balance_wallet</span>
</div>
</div>
<div className="glass-card rounded-xl p-6 border-l-4 border-l-forest-green flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-forest-green mb-2" data-icon="health_and_safety" data-weight="fill">health_and_safety</span>
<p className="font-label-md text-label-md text-on-surface-variant">Health Centers</p>
<h3 className="font-headline-lg text-headline-lg mt-1">24/24</h3>
</div>
<p className="text-caption text-primary font-medium mt-4">All facilities operational</p>
</div>
<div className="glass-card rounded-xl p-6 border-l-4 border-l-brass-gold flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-brass-gold mb-2" data-icon="construction" data-weight="fill">construction</span>
<p className="font-label-md text-label-md text-on-surface-variant">Active Projects</p>
<h3 className="font-headline-lg text-headline-lg mt-1">18</h3>
</div>
<p className="text-caption text-on-surface-variant mt-4">4 nearing completion</p>
</div>
</div>
{/*  Revenue and Health Tracking Section  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
{/*  Project Reporting  */}
<div className="lg:col-span-2 glass-card rounded-xl p-0 overflow-hidden flex flex-col">
<div className="p-6 border-b border-outline-variant flex justify-between items-center">
<h4 className="font-headline-md text-headline-md brass-border-left pl-4">Grassroot Project Status</h4>
<button className="text-forest-green font-label-md text-label-md flex items-center gap-1 hover:underline">
<span className="material-symbols-outlined text-sm" data-icon="add">add</span> New Report
                        </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md">
<tr>
<th className="px-6 py-4">Project Name</th>
<th className="px-6 py-4">Category</th>
<th className="px-6 py-4">Progress</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-surface-bright transition-colors">
<td className="px-6 py-4 font-medium">Umuahia-North Market Road</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-surface-container rounded text-xs">Infrastructure</span></td>
<td className="px-6 py-4">
<div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-forest-green" style={{"width":"90%"}}></div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Final Stage</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
</td>
</tr>
<tr className="hover:bg-surface-bright transition-colors">
<td className="px-6 py-4 font-medium">Aba South Health Hub Expansion</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-surface-container rounded text-xs">Health</span></td>
<td className="px-6 py-4">
<div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-brass-gold" style={{"width":"45%"}}></div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">Ongoing</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
</td>
</tr>
<tr className="hover:bg-surface-bright transition-colors">
<td className="px-6 py-4 font-medium">Ohafia Rural Electrification</td>
<td className="px-6 py-4"><span className="px-2 py-1 bg-surface-container rounded text-xs">Energy</span></td>
<td className="px-6 py-4">
<div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-forest-green" style={{"width":"15%"}}></div>
</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Planned</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Revenue Management Side Panel  */}
<div className="glass-card rounded-xl p-6 flex flex-col space-y-6">
<h4 className="font-headline-md text-headline-md brass-border-left pl-4">Revenue Streams</h4>
<div className="space-y-4">
<div className="flex justify-between items-center p-3 bg-surface-container rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-forest-green" data-icon="store">store</span>
</div>
<div>
<p className="text-sm font-semibold">Market Levies</p>
<p className="text-[10px] text-on-surface-variant">Daily Collection</p>
</div>
</div>
<p className="font-label-md text-label-md">₦2.4M</p>
</div>
<div className="flex justify-between items-center p-3 bg-surface-container rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-forest-green" data-icon="directions_car">directions_car</span>
</div>
<div>
<p className="text-sm font-semibold">Transport Tax</p>
<p className="text-[10px] text-on-surface-variant">Fleet Management</p>
</div>
</div>
<p className="font-label-md text-label-md">₦1.8M</p>
</div>
<div className="flex justify-between items-center p-3 bg-surface-container rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-forest-green" data-icon="domain">domain</span>
</div>
<div>
<p className="text-sm font-semibold">Property Rates</p>
<p className="text-[10px] text-on-surface-variant">Commercial Zones</p>
</div>
</div>
<p className="font-label-md text-label-md">₦5.2M</p>
</div>
</div>
<div className="pt-4 border-t border-outline-variant">
<div className="bg-forest-deep text-white p-4 rounded-lg relative overflow-hidden">
<p className="text-xs opacity-70 uppercase">Total Collected (MTD)</p>
<h5 className="text-2xl font-bold mt-1">₦38.42M</h5>
<button className="mt-4 w-full bg-brass-gold text-forest-deep font-bold py-2 rounded-md text-xs hover:opacity-90 transition-opacity">Generate Audit Report</button>
<div className="absolute -right-4 -bottom-4 opacity-10">
<span className="material-symbols-outlined text-6xl" data-icon="analytics">analytics</span>
</div>
</div>
</div>
</div>
</div>
{/*  Health Center Monitor  */}
<div className="glass-card rounded-xl overflow-hidden">
<div className="p-6 border-b border-outline-variant bg-surface-container-low flex items-center justify-between">
<h4 className="font-headline-md text-headline-md brass-border-left pl-4">Community Health Center Live Monitor</h4>
<div className="flex gap-2">
<span className="flex items-center gap-1 text-xs text-green-600 font-medium">
<span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span> Live Data
                        </span>
</div>
</div>
<div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  PHC Map Placeholder/Visualization  */}
<div className="md:col-span-2 h-64 rounded-xl bg-surface-container border border-outline-variant relative group overflow-hidden">
<img alt="Local Area Map" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" data-alt="A top-down stylized geographic map of a Nigerian urban district with clean cartographic lines and professional data-visualization overlays. The color scheme is dominated by soft grays and forest greens, showing glowing nodes representing health centers in a modern, sophisticated governance interface style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP-ETlwflIom5jdaA4AZdFPWzdI83TyPi8k3wY4CHhiPSm6wnoD-byGHnDkcBYhIHq3TbliTn0fwlwz2Qhup8p4ZeC7w5pE11Z49n3XA_D9ff-gwnrC9w6tVcFV7imzr4HsLOlqHSLB1CoEGGtNs1UrTJxw1GeTLBfKYiS1hnmJH2-aRQRHIxW9d8HxxYwSNFT573qPhjGuJ-tdkCUHFmvddEpcD1XRR85Akyce27LHpsCiT9Unhg_iVLfXCHZZQ2PIQNj8VmhfNU" />
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center p-4">
<span className="material-symbols-outlined text-forest-green text-4xl mb-2" data-icon="map">map</span>
<p className="text-sm font-semibold text-on-surface">Interactive Catchment Map</p>
<p className="text-xs text-on-surface-variant">Aba North Primary Health Zones</p>
</div>
</div>
</div>
<div className="space-y-6">
<div className="p-4 border border-outline-variant rounded-lg">
<h6 className="font-label-md text-label-md text-on-surface-variant mb-3">Supply Levels</h6>
<div className="space-y-3">
<div>
<div className="flex justify-between text-xs mb-1">
<span>Essential Vaccines</span>
<span className="text-green-600">92%</span>
</div>
<div className="h-1.5 w-full bg-surface-container rounded-full"><div className="h-full bg-green-500 w-[92%]"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span>First Aid Kits</span>
<span className="text-amber-600">64%</span>
</div>
<div className="h-1.5 w-full bg-surface-container rounded-full"><div className="h-full bg-amber-500 w-[64%]"></div></div>
</div>
<div>
<div className="flex justify-between text-xs mb-1">
<span>General Meds</span>
<span className="text-forest-green">88%</span>
</div>
<div className="h-1.5 w-full bg-surface-container rounded-full"><div className="h-full bg-forest-green w-[88%]"></div></div>
</div>
</div>
</div>
<button className="w-full py-3 border border-forest-green text-forest-green font-bold text-sm rounded hover:bg-forest-green hover:text-white transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="inventory">inventory</span>
                            Manage Inventory
                        </button>
</div>
</div>
</div>
</section>
{/*  Footer (Authority: JSON Component)  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto py-12 border-t border-outline-variant">
<div className="max-w-container-max-width mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
<div className="lg:col-span-1">
<h2 className="font-headline-lg text-headline-lg text-forest-deep font-bold mb-4">ABIA ONE</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Sovereign digital infrastructure for the State of Abia, Nigeria. Empowering local government through transparency and technical precision.</p>
</div>
<div className="grid grid-cols-2 gap-4 lg:col-span-3">
<div>
<h6 className="font-label-caps text-label-caps text-forest-deep mb-4">Ecosystem</h6>
<ul className="space-y-2">
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="/invest-in-aba">Invest Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="/serve-abia">Serve Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="/build-abia">Build Abia</a></li>
</ul>
</div>
<div>
<h6 className="font-label-caps text-label-caps text-forest-deep mb-4">Transparency</h6>
<ul className="space-y-2">
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="/open-abia">Open Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline-variant/30">
<p className="font-body-md text-body-md text-on-surface-variant">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<span className="material-symbols-outlined text-forest-deep opacity-50 cursor-pointer" data-icon="public">public</span>
<span className="material-symbols-outlined text-forest-deep opacity-50 cursor-pointer" data-icon="mail">mail</span>
<span className="material-symbols-outlined text-forest-deep opacity-50 cursor-pointer" data-icon="policy">policy</span>
</div>
</div>
</div>
</footer>
</main>
{/*  Floating Action Button (FAB) - Suppression Logic Applied: Only on primary dashboard  */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-forest-green text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
<span className="material-symbols-outlined" data-icon="edit_square">edit_square</span>
<span className="absolute right-full mr-4 bg-forest-deep text-white px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Submit Report</span>
</button>


      </div>
    </>
  );
}
