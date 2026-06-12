"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(8px);\n            border: 1px solid #E2E8F0;\n        }\n        .brass-accent {\n            border-bottom: 2px solid #D4AF37;\n        }\n        ::-webkit-scrollbar {\n            width: 6px;\n        }\n        ::-webkit-scrollbar-track {\n            background: #f1f5ee;\n        }\n        ::-webkit-scrollbar-thumb {\n            background: #006838;\n            border-radius: 10px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background min-h-screen flex">
        
{/*  SideNavBar Shell  */}
<aside className="flex flex-col fixed left-0 top-0 h-full py-6 px-4 space-y-2 bg-surface-container-low border-r border-outline-variant w-64 z-50">
<div className="mb-8 px-2">
<h1 className="font-headline-sm text-headline-sm font-bold text-forest-green">ABIA ONE</h1>
<p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mt-1">Command Center</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-on-primary-container bg-primary-container rounded-lg transition-transform scale-95" href="/">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
<span className="font-label-md text-label-md">Analytics</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="hail">hail</span>
<span className="font-label-md text-label-md">Citizen Requests</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-md text-label-md">Revenue Tracking</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="account_tree">account_tree</span>
<span className="font-label-md text-label-md">Project Monitoring</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="badge">badge</span>
<span className="font-label-md text-label-md">Personnel</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="/secure-abia">
<span className="material-symbols-outlined" data-icon="security">security</span>
<span className="font-label-md text-label-md">Security</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
</nav>
<div className="pt-6 border-t border-outline-variant space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="font-label-md text-label-md">Support</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest transition-all rounded-lg" href="#">
<span className="material-symbols-outlined" data-icon="logout">logout</span>
<span className="font-label-md text-label-md">Sign Out</span>
</a>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="ml-64 flex-1 flex flex-col min-h-screen">
{/*  TopAppBar Shell  */}
<header className="h-16 bg-surface border-b border-outline-variant flex justify-between items-center px-margin-desktop sticky top-0 z-40">
<div className="flex items-center gap-8">
<h2 className="font-headline-md text-headline-md font-bold text-forest-green">Micro-Credit Dashboard</h2>
<nav className="hidden md:flex gap-6">
<a className="font-label-md text-label-md text-forest-green border-b-2 border-brass-gold pb-1" href="/invest-in-aba">Invest</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="/jobs-abia">Jobs</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="/serve-abia">Serve</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Verify</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg focus:ring-1 focus:ring-forest-green text-body-md" placeholder="Search registry..." type="text" />
<span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant" data-icon="search">search</span>
</div>
<button className="material-symbols-outlined text-on-surface-variant hover:text-forest-green" data-icon="language">language</button>
<button className="material-symbols-outlined text-on-surface-variant hover:text-forest-green" data-icon="notifications">notifications</button>
<button className="bg-forest-green text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md">Apply for Credit</button>
</div>
</header>
<section className="p-8 max-w-max-width mx-auto w-full space-y-8">
{/*  Hero Stats Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
{/*  Large Stats Card  */}
<div className="md:col-span-2 glass-card rounded-xl p-6 flex flex-col justify-between overflow-hidden relative min-h-[200px]">
<div className="z-10">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">Total Loan Disbursement</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Empowering Aba's MSMEs</p>
<div className="flex items-baseline gap-2">
<span className="font-display-lg text-display-lg text-forest-green">₦4.2B</span>
<span className="text-on-primary-container bg-primary-container px-2 py-0.5 rounded-full text-caption font-bold">+12.4%</span>
</div>
</div>
<div className="absolute right-0 bottom-0 opacity-10">
<span className="material-symbols-outlined text-[120px]" data-icon="account_balance_wallet">account_balance_wallet</span>
</div>
</div>
{/*  Secondary Stats  */}
<div className="glass-card rounded-xl p-6 border-l-4 border-l-brass-gold">
<span className="material-symbols-outlined text-brass-gold mb-2" data-icon="group_work">group_work</span>
<h4 className="font-label-md text-label-md text-on-surface-variant uppercase">Registered Cooperatives</h4>
<p className="font-headline-md text-headline-md text-on-surface mt-2">1,248</p>
<p className="text-caption text-forest-green mt-1 font-bold">Active in all 17 LGAs</p>
</div>
<div className="glass-card rounded-xl p-6 border-l-4 border-l-forest-green">
<span className="material-symbols-outlined text-forest-green mb-2" data-icon="trending_up">trending_up</span>
<h4 className="font-label-md text-label-md text-on-surface-variant uppercase">Repayment Rate</h4>
<p className="font-headline-md text-headline-md text-on-surface mt-2">94.8%</p>
<div className="w-full bg-surface-container-high h-1.5 rounded-full mt-3">
<div className="bg-forest-green h-1.5 rounded-full" style={{"width":"94.8%"}}></div>
</div>
</div>
</div>
{/*  Main Content Area  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/*  Left: Impact & Performance  */}
<div className="lg:col-span-2 space-y-8">
{/*  Impact Spotlight  */}
<div className="bg-forest-green text-on-primary rounded-xl overflow-hidden flex flex-col md:flex-row h-auto md:h-64 shadow-xl">
<div className="w-full md:w-1/2 relative h-48 md:h-auto">
<img className="w-full h-full object-cover" data-alt="A focused Nigerian male artisan in a vibrant Aba market stall, expertly working on high-quality leather footwear with traditional tools. The lighting is warm and natural, capturing the dusty yet industrious atmosphere of a bustling local commerce hub. The scene is shot with a shallow depth of field, emphasizing the craftsman's hands and the intricate textures of the leather, reflecting a professional and trust-oriented documentary style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOXaUf3DVDySs8F4oFGiOYXF8kOjt-gkDsTDEUaLcTPSaq3WqAsOf4KVtFj32p74rHjHKPxrFZJnAEJvs5GvwPddKJ2nEBVIL0x_4uboL7xN_lfa25r6FeAAvYBBGR6eMaqwB6vzezzU1yv836qmmJ2LAAP0wjdAjP16bHZnG6hI7aOB3bEN0qdGXuFsFd-1TlbtSeW6-lw8goXi1gQUQwnTrM8UK-sIQ5rKeM68YMnZtY6s4IzaWEtBt_uyimvOLGmgvGxjLnsmE" />
<div className="absolute inset-0 bg-gradient-to-r from-forest-green via-transparent to-transparent"></div>
</div>
<div className="p-8 flex-1 flex flex-col justify-center">
<span className="text-brass-gold font-label-md text-label-md uppercase mb-2 tracking-widest">Impact Spotlight</span>
<h3 className="font-headline-md text-headline-md mb-2">Aba Leather Hub Empowerment</h3>
<p className="font-body-md text-body-md opacity-90 leading-relaxed mb-4">Through the "Micro-Credit For Artisans" initiative, 450 shoemakers in Ariaria International Market received operational capital to modernize production.</p>
<a className="text-brass-gold font-bold flex items-center gap-2 hover:underline" href="#">Read Success Stories <span className="material-symbols-outlined">arrow_forward</span></a>
</div>
</div>
{/*  Repayment Metrics Table  */}
<div className="glass-card rounded-xl overflow-hidden">
<div className="p-6 border-b border-outline-variant flex justify-between items-center">
<h3 className="font-headline-sm text-headline-sm text-on-surface brass-accent pb-1 inline-block">Cooperative Registry &amp; Performance</h3>
<button className="text-forest-green font-label-md text-label-md flex items-center gap-1">
<span className="material-symbols-outlined">filter_list</span> Filter LGAs
                            </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-surface-container text-on-surface-variant font-label-md text-label-md">
<tr>
<th className="px-6 py-4">Cooperative Name</th>
<th className="px-6 py-4">Members</th>
<th className="px-6 py-4">Credit Line</th>
<th className="px-6 py-4">Repayment</th>
<th className="px-6 py-4">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant font-body-md text-body-md">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4 font-semibold">Ariaria Traders Union</td>
<td className="px-6 py-4">420</td>
<td className="px-6 py-4">₦150M</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="text-forest-green font-bold">98%</span>
<div className="w-16 bg-surface-container-high h-1 rounded-full">
<div className="bg-forest-green h-1 rounded-full" style={{"width":"98%"}}></div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full text-caption font-bold">EXCELLENT</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4 font-semibold">Aba North Artisans Co-op</td>
<td className="px-6 py-4">158</td>
<td className="px-6 py-4">₦45M</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="text-forest-green font-bold">92%</span>
<div className="w-16 bg-surface-container-high h-1 rounded-full">
<div className="bg-forest-green h-1 rounded-full" style={{"width":"92%"}}></div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-caption font-bold">ACTIVE</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4 font-semibold">Umuahia Women In Agri-Biz</td>
<td className="px-6 py-4">285</td>
<td className="px-6 py-4">₦85M</td>
<td className="px-6 py-4">
<div className="flex items-center gap-2">
<span className="text-forest-green font-bold">89%</span>
<div className="w-16 bg-surface-container-high h-1 rounded-full">
<div className="bg-forest-green h-1 rounded-full" style={{"width":"89%"}}></div>
</div>
</div>
</td>
<td className="px-6 py-4">
<span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full text-caption font-bold">ACTIVE</span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-4 bg-surface-container-low text-center">
<button className="font-label-md text-label-md text-forest-green hover:underline">View All 1,248 Registered Cooperatives</button>
</div>
</div>
</div>
{/*  Right: Application Portal & Activity  */}
<div className="space-y-8">
{/*  Quick Portal  */}
<div className="glass-card rounded-xl p-6 bg-surface-container-highest border-t-4 border-t-forest-green">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-4">Application Portal</h3>
<div className="space-y-4">
<button className="w-full flex items-center justify-between p-4 bg-surface rounded-lg border border-outline-variant hover:border-forest-green transition-all group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" data-icon="app_registration">app_registration</span>
<div className="text-left">
<p className="font-label-md text-label-md font-bold">Register Cooperative</p>
<p className="text-caption text-on-surface-variant">Formalize your union</p>
</div>
</div>
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</button>
<button className="w-full flex items-center justify-between p-4 bg-surface rounded-lg border border-outline-variant hover:border-forest-green transition-all group">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-brass-gold" data-icon="account_balance">account_balance</span>
<div className="text-left">
<p className="font-label-md text-label-md font-bold">Apply for Micro-Loan</p>
<p className="text-caption text-on-surface-variant">Capital for MSMEs</p>
</div>
</div>
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
{/*  Recent Activities  */}
<div className="glass-card rounded-xl p-6">
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-6 brass-accent pb-1 inline-block">Real-time Feed</h3>
<div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant">
<div className="relative pl-10">
<span className="absolute left-0 top-0 w-6 h-6 rounded-full bg-forest-green text-state-white flex items-center justify-center">
<span className="material-symbols-outlined text-[14px]" data-icon="check_circle">check_circle</span>
</span>
<p className="font-body-md text-body-md font-bold">₦25M Disbursed</p>
<p className="text-caption text-on-surface-variant">To Obingwa Farmers Cooperative</p>
<p className="text-[10px] text-on-surface-variant mt-1 uppercase">2 minutes ago</p>
</div>
<div className="relative pl-10">
<span className="absolute left-0 top-0 w-6 h-6 rounded-full bg-brass-gold text-state-white flex items-center justify-center">
<span className="material-symbols-outlined text-[14px]" data-icon="verified_user">verified_user</span>
</span>
<p className="font-body-md text-body-md font-bold">New Registry</p>
<p className="text-caption text-on-surface-variant">Aba Garment Designers Union</p>
<p className="text-[10px] text-on-surface-variant mt-1 uppercase">1 hour ago</p>
</div>
<div className="relative pl-10">
<span className="absolute left-0 top-0 w-6 h-6 rounded-full bg-forest-green text-state-white flex items-center justify-center">
<span className="material-symbols-outlined text-[14px]" data-icon="payments">payments</span>
</span>
<p className="font-body-md text-body-md font-bold">Repayment Received</p>
<p className="text-caption text-on-surface-variant">₦1.2M from Ohafia Micro-Finance</p>
<p className="text-[10px] text-on-surface-variant mt-1 uppercase">3 hours ago</p>
</div>
</div>
</div>
{/*  Market Map Placeholder  */}
<div className="glass-card rounded-xl overflow-hidden">
<div className="p-4 bg-surface-container-low border-b border-outline-variant">
<p className="font-label-md text-label-md font-bold">Credit Impact Heatmap</p>
</div>
<div className="h-48 bg-surface-variant relative">
<img className="w-full h-full object-cover grayscale opacity-50" data-alt="A stylized, architectural map view of a metropolitan district, featuring a clean and professional color scheme of slate grays and muted teals. Glowing data points in vibrant forest green and brass gold indicate locations of thriving commercial activity and government investment. The lighting is digital and crisp, conveying a sense of transparency, data precision, and modern urban planning within a state-level operating system interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs0V0dFv5-oYrcid7NAQux0oAGK1OQ8TWCUVFdKHuIsNvut2_CznMlo3sv81S3RtIZxhRvP17ONcwnKbucYfN5yEntB6QPp5W67w3FIYvuacybdcGZpBiTUurb6CWy9S3auVfl7VKgwM-6NP6b7tb1karKBkHBY6mZT57y6suvZ5XZUFhZDTHLMMeUhSU7NbEGsrcHhMy80pwGuM8N7vIa81r6H0tlAxX2Kmh31yBzoPb_QtlVx3L8SFNf5_CsIL6j_ju4gGPXODQ" />
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-state-white/90 p-4 rounded-lg shadow-lg text-center">
<p className="font-bold text-forest-green">ABA CENTRAL</p>
<p className="text-caption text-on-surface-variant">Highest MSME Density</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Footer Shell  */}
<footer className="mt-auto w-full py-8 px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-max-width mx-auto border-t border-outline-variant bg-surface-container-highest">
<div className="mb-4 md:mb-0 text-center md:text-left">
<h4 className="font-headline-sm text-headline-sm font-bold text-forest-green">ABIA ONE</h4>
<p className="font-body-md text-body-md text-on-surface-variant">© 2024 Abia State Government. All Rights Reserved.</p>
</div>
<div className="flex flex-wrap justify-center gap-6">
<a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors underline" href="#">Privacy Policy</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors underline" href="#">Terms of Service</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors underline" href="#">Contact Us</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold transition-colors underline" href="/news-press-center">Press Office</a>
</div>
</footer>
</main>
{/*  Contextual FAB (Only for Dashboard/Home)  */}
<button className="fixed bottom-8 right-8 bg-forest-green text-on-primary p-4 rounded-full shadow-2xl flex items-center gap-2 group hover:pr-6 transition-all z-50">
<span className="material-symbols-outlined" data-icon="add">add</span>
<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all font-label-md text-label-md whitespace-nowrap">Apply Now</span>
</button>


      </div>
    </>
  );
}
