export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        .brass-accent { border-left: 4px solid #D4AF37; }\n        .hide-scrollbar::-webkit-scrollbar { display: none; }\n        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 bg-background dark:bg-inverse-surface border-b border-outline-variant dark:border-outline h-20">
<div className="flex justify-between items-center px-64 h-full max-w-max-width mx-auto">
<div className="flex items-center gap-4">
<span className="font-display-lg text-display-lg font-bold text-primary dark:text-primary-fixed">ABIA ONE</span>
</div>
<div className="hidden md:flex gap-8 items-center">
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary transition-colors" href="#">Economy</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary transition-colors" href="#">Digital Gov</a>
<a className="text-primary dark:text-primary-fixed-dim border-b-2 border-brass-gold font-semibold pb-1" href="#">Governance</a>
<a className="text-on-surface-variant dark:text-surface-variant font-medium hover:text-primary transition-colors" href="#">Security</a>
<div className="h-6 w-px bg-outline-variant mx-2"></div>
<button className="bg-forest-green text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all cursor-pointer">Citizen Portal</button>
</div>
</div>
</nav>
{/*  Sidebar & Main Content Wrapper  */}
<div className="pt-20 flex min-h-screen">
{/*  SideNavBar  */}
<aside className="fixed left-0 top-20 h-screen w-64 bg-surface-container-low dark:bg-surface-dim border-r border-outline-variant flex flex-col py-6">
<div className="px-6 mb-8">
<h2 className="font-headline-md text-headline-md font-bold text-primary">Navigation</h2>
<p className="text-on-surface-variant text-caption">State Operating System</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 text-on-surface-variant dark:text-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined">payments</span>
<span>Economic Transformation</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span>Digital Government</span>
</a>
<a className="flex items-center gap-3 text-forest-green dark:text-primary-fixed font-bold border-l-4 border-brass-gold bg-surface-container-high px-6 py-3" href="#">
<span className="material-symbols-outlined">gavel</span>
<span>Transparent Governance</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant dark:text-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined">verified_user</span>
<span>Public Trust</span>
</a>
</nav>
<div className="mt-auto px-6 space-y-4">
<button className="w-full bg-secondary text-on-secondary px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all">Launch Service</button>
<div className="border-t border-outline-variant pt-4 space-y-2">
<a className="flex items-center gap-3 text-on-surface-variant text-sm py-2 hover:text-primary" href="#">
<span className="material-symbols-outlined text-sm">settings</span>
<span>Settings</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant text-sm py-2 hover:text-primary" href="#">
<span className="material-symbols-outlined text-sm">help</span>
<span>Support</span>
</a>
</div>
</div>
</aside>
{/*  Main Content Area  */}
<main className="ml-64 w-full p-8 bg-background">
<header className="max-w-6xl mx-auto mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="font-headline-lg text-headline-lg text-primary mb-2">Legal &amp; Institutional Registry</h1>
<p className="text-body-lg text-on-surface-variant max-w-2xl">The official digital repository for Abia State laws, institutional structures, and public accountability instruments.</p>
</div>
<div className="flex gap-3">
<div className="relative">
<input className="bg-surface-container-low border border-slate-400 rounded-lg px-4 py-2 pl-10 focus:ring-2 focus:ring-forest-green outline-none w-64 transition-all" placeholder="Search statutes, gazettes..." type="text"/>
<span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant">search</span>
</div>
</div>
</div>
</header>
<section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
{/*  State Law Library (Bento Style)  */}
<div className="md:col-span-8 bg-white border border-slate-200 rounded-lg p-8 relative overflow-hidden flex flex-col justify-between group hover:border-brass-gold transition-colors duration-300">
<div>
<div className="flex justify-between items-start mb-6">
<div className="brass-accent pl-4">
<h3 className="font-headline-md text-headline-md text-on-surface">Digital Law Library</h3>
<p className="text-on-surface-variant">Access the Laws of Abia State (LAS) and Executive Orders.</p>
</div>
<span className="material-symbols-outlined text-primary text-4xl">menu_book</span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 border border-slate-100 rounded-lg hover:bg-surface-container transition-colors cursor-pointer">
<p className="font-label-md text-primary mb-1">RECENT PUBLICATION</p>
<p className="font-semibold">Economic Revitalization Act 2024</p>
<p className="text-caption mt-2">Gazetted: Nov 12, 2024</p>
</div>
<div className="p-4 border border-slate-100 rounded-lg hover:bg-surface-container transition-colors cursor-pointer">
<p className="font-label-md text-primary mb-1">ARCHIVE</p>
<p className="font-semibold">Local Government Administration Law</p>
<p className="text-caption mt-2">Volume IV • Section 12-B</p>
</div>
</div>
</div>
<div className="mt-8">
<button className="border border-brass-gold text-secondary font-medium px-6 py-2 rounded-lg hover:bg-secondary-fixed transition-colors">Browse Full Library</button>
</div>
</div>
{/*  MDA Institutional Registry  */}
<div className="md:col-span-4 bg-primary text-white rounded-lg p-8 flex flex-col relative overflow-hidden">
<div className="absolute -right-12 -top-12 opacity-10">
<span className="material-symbols-outlined text-[160px]">account_balance</span>
</div>
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md mb-4">MDA Registry</h3>
<p className="text-on-primary-container text-body-md mb-8">Official directory of Ministries, Departments, and Agencies. Verify mandates and leadership.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 border-b border-primary-container pb-2">
<span className="material-symbols-outlined text-brass-gold">check_circle</span>
<span className="text-sm">94 Verified Entities</span>
</li>
<li className="flex items-center gap-3 border-b border-primary-container pb-2">
<span className="material-symbols-outlined text-brass-gold">check_circle</span>
<span className="text-sm">Mandate Verification API</span>
</li>
</ul>
</div>
<button className="w-full bg-brass-gold text-primary font-bold py-3 rounded-lg mt-auto hover:bg-white transition-colors">Search MDAs</button>
</div>
</section>
{/*  State Contract Registry Table  */}
<section className="max-w-6xl mx-auto mb-12">
<div className="bg-surface-container-low rounded-lg p-8 border border-slate-200">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<div className="brass-accent pl-4">
<h3 className="font-headline-md text-headline-md text-on-surface">State Contract Registry</h3>
<p className="text-on-surface-variant">Public disclosure of procurement and active contracts.</p>
</div>
<div className="flex gap-2">
<button className="bg-white border border-slate-300 px-4 py-2 rounded text-sm font-medium hover:bg-slate-50 transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-sm">filter_list</span> Filter
                            </button>
<button className="bg-white border border-slate-300 px-4 py-2 rounded text-sm font-medium hover:bg-slate-50 transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-sm">download</span> Export Data
                            </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant text-on-surface-variant font-label-md">
<th className="py-4 px-4 font-medium">REFERENCE</th>
<th className="py-4 px-4 font-medium">PROJECT NAME</th>
<th className="py-4 px-4 font-medium">CONTRACTOR</th>
<th className="py-4 px-4 font-medium">VALUE (₦)</th>
<th className="py-4 px-4 font-medium">STATUS</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-outline-variant hover:bg-white transition-colors">
<td className="py-4 px-4 font-label-md">AB/WORKS/2024/001</td>
<td className="py-4 px-4 font-medium">Port Harcourt Road Reconstruction</td>
<td className="py-4 px-4">Julius Berger Nig. PLC</td>
<td className="py-4 px-4">32,500,000,000</td>
<td className="py-4 px-4">
<span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-semibold">ACTIVE</span>
</td>
</tr>
<tr className="border-b border-outline-variant hover:bg-white transition-colors">
<td className="py-4 px-4 font-label-md">AB/ICT/2024/014</td>
<td className="py-4 px-4 font-medium">Abia One Digital Infrastructure</td>
<td className="py-4 px-4">TechNexus Solutions Ltd</td>
<td className="py-4 px-4">1,200,000,000</td>
<td className="py-4 px-4">
<span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-xs font-semibold">ONGOING</span>
</td>
</tr>
<tr className="border-b border-outline-variant hover:bg-white transition-colors">
<td className="py-4 px-4 font-label-md">AB/EDU/2023/102</td>
<td className="py-4 px-4 font-medium">Model Secondary School Ariaria</td>
<td className="py-4 px-4">BuildAbia Construction</td>
<td className="py-4 px-4">850,000,000</td>
<td className="py-4 px-4">
<span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full text-xs font-semibold">COMPLETED</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
{/*  Justice for All Section  */}
<section className="max-w-6xl mx-auto mb-16">
<div className="relative overflow-hidden rounded-lg bg-surface-container-high border border-slate-200 p-8 md:p-12">
<div className="md:flex items-center gap-12">
<div className="md:w-1/2">
<h2 className="font-headline-lg text-headline-lg text-tertiary mb-4">Justice For All</h2>
<p className="text-body-lg mb-8">Access legal aid, mediation services, and report human rights violations directly to the Ministry of Justice.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
<span className="material-symbols-outlined text-tertiary mb-3">volunteer_activism</span>
<h4 className="font-bold mb-2">Legal Aid Request</h4>
<p className="text-sm text-on-surface-variant">Free legal representation for eligible citizens.</p>
<a className="inline-block mt-4 text-tertiary font-bold text-sm hover:underline" href="#">Apply Now →</a>
</div>
<div className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow">
<span className="material-symbols-outlined text-tertiary mb-3">diversity_3</span>
<h4 className="font-bold mb-2">Multi-Door Courthouse</h4>
<p className="text-sm text-on-surface-variant">Alternative dispute resolution and mediation.</p>
<a className="inline-block mt-4 text-tertiary font-bold text-sm hover:underline" href="#">Learn More →</a>
</div>
</div>
</div>
<div className="md:w-1/2 mt-8 md:mt-0 relative">
<div className="aspect-video rounded-lg bg-slate-300 overflow-hidden shadow-2xl border-4 border-white">
<img className="w-full h-full object-cover" data-alt="An authoritative and professional wide-angle shot of a high court chambers in Abia State. The setting includes polished dark wood desks, a large state seal mounted on the wall, and leather-bound legal volumes lined up on shelves. The lighting is focused and warm, highlighting the dignity and official nature of the environment with a modern, high-contrast corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj2LRaCKu3NqVq579sDqY247_TJmjcxMVxZAi3cGCC5D8ECOOCiAxd4Iy6M75yGLASIZ_v9O15Q8UJ0OMEKAGLaD5oNd80Lx_1d_IlCBf_YXxVlkcRurkwavGE1gcRATdGYL751s4F1FybIltjjpcUHjGn7k0-KmfMAfc9AsFtJiQaPvbGDqK4nzm3JLuNlyusFTI9yrDXOfpLxzUDPZTo8RWnWNn6FcNLfeOI9ebsbDmuCrXDeXVLGuieYI5MeORRkKbJCusczfg"/>
</div>
</div>
</div>
</div>
</section>
</main>
</div>
{/*  Footer  */}
<footer className="bg-surface-container-highest dark:bg-inverse-surface border-t border-outline-variant dark:border-outline py-12">
<div className="flex flex-col md:flex-row justify-between items-center px-64 max-w-max-width mx-auto gap-8">
<div className="text-center md:text-left">
<div className="font-headline-md text-headline-md text-primary mb-2">ABIA ONE</div>
<p className="font-caption text-caption text-on-surface-variant max-w-xs">
                    © 2024 Abia State Government. All rights reserved. Built for the future of governance.
                </p>
</div>
<div className="flex gap-8">
<a className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors text-sm underline-offset-4" href="#">Institutional Links</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors text-sm underline-offset-4" href="#">Transparency Info</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors text-sm underline-offset-4" href="#">Privacy Policy</a>
<a className="text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors text-sm underline-offset-4" href="#">Contact Support</a>
</div>
</div>
</footer>
{/*  Simple Interactivity  */}


      </div>
    </>
  );
}
