"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { font-family: 'Hanken Grotesk', sans-serif; background-color: #f6fbf3; }\n        .material-symbols-outlined {
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); } font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }\n        .bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px; }\n        .custom-scrollbar::-webkit-scrollbar { width: 4px; }\n        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }\n        .custom-scrollbar::-webkit-scrollbar-thumb { background: #bec9be; border-radius: 10px; }" 
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
        }} />
  
      {/* Screen markup */}
      <div className="text-on-surface">
        
{/*  Top Navigation Bar (JSON Anchor)  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 dark:bg-forest-deep/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-8">
<img src="/Logos/Abia_One_No_Background.png" alt="ABIA ONE" className="h-20 w-auto" />
<div className="hidden md:flex gap-6">
<a className="text-primary border-b-2 border-brass-accent pb-1 font-label-caps text-label-caps" href="/economic-transformation">Economy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps" href="/serve-abia">Digital Gov</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps" href="/local-governance">Governance</a>
<a className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps" href="/secure-abia">Security</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="px-4 py-2 border border-brass-gold text-primary font-semibold text-sm rounded-lg hover:bg-surface-variant transition-all">Emergency</button>
<button className="px-4 py-2 bg-primary text-on-primary font-semibold text-sm rounded-lg hover:opacity-90 active:scale-95 transition-all">Citizen Portal</button>
</div>
</nav>
{/*  Sidebar Navigation (JSON Anchor)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 pt-20 bg-surface-container-low border-r border-outline-variant">
<div className="px-6 mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-forest-green flex items-center justify-center text-state-white">
<span className="material-symbols-outlined">account_balance</span>
</div>
<div>
<p className="font-bold text-forest-deep">ABIA ONE</p>
<p className="text-xs text-on-surface-variant">Modern Governance OS</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg mx-2 translate-x-1 duration-150" href="/economic-transformation">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-sm text-label-sm">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 transition-all" href="/serve-abia">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-sm text-label-sm">Digital Government</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 transition-all" href="/local-governance">
<span className="material-symbols-outlined">mitre</span>
<span className="font-label-sm text-label-sm">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 transition-all" href="/secure-abia">
<span className="material-symbols-outlined">security</span>
<span className="font-label-sm text-label-sm">Public Trust</span>
</a>
</nav>
<div className="p-4 border-t border-outline-variant">
<button className="w-full py-3 bg-primary/10 text-primary font-bold rounded-lg hover:bg-primary/20 transition-all text-sm mb-4">Citizen Feedback</button>
<div className="space-y-1">
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary transition-all text-sm" href="#">
<span className="material-symbols-outlined">settings</span>
<span>Settings</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary transition-all text-sm" href="#">
<span className="material-symbols-outlined">help</span>
<span>Support</span>
</a>
</div>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="lg:ml-64 pt-24 pb-12 px-margin-mobile md:px-margin-desktop min-h-screen">
{/*  Header & Portfolio Summary  */}
<header className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="max-w-2xl">
<h1 className="font-display-lg text-display-lg text-forest-deep mb-2">State Sovereign Fund</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant">Strategic wealth management and institutional asset growth for the future of Abia State. Real-time transparency into sovereign portfolios and project finance.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-state-white border border-outline-variant rounded-lg font-semibold text-sm hover:bg-surface-container transition-all">
<span className="material-symbols-outlined text-sm">download</span>
                    Download Annual Report
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-semibold text-sm hover:opacity-90 shadow-sm transition-all">
<span className="material-symbols-outlined text-sm">add_chart</span>
                    Propose Project
                </button>
</div>
</header>
{/*  Bento Dashboard Grid  */}
<div className="bento-grid">
{/*  Main Performance Chart  */}
<section className="col-span-12 lg:col-span-8 bg-state-white border border-outline-variant rounded-xl p-6 relative overflow-hidden h-[450px] flex flex-col">
<div className="flex justify-between items-center mb-8 relative z-10">
<div>
<h3 className="font-headline-md text-headline-md text-forest-deep">Portfolio Performance Metrics</h3>
<p className="text-sm text-on-surface-variant">Annualized Growth &amp; Net Asset Value (NAV)</p>
</div>
<div className="flex items-center gap-2 bg-surface-container rounded-lg p-1">
<button className="px-3 py-1 bg-state-white shadow-sm rounded font-medium text-xs">1Y</button>
<button className="px-3 py-1 text-on-surface-variant font-medium text-xs">5Y</button>
<button className="px-3 py-1 text-on-surface-variant font-medium text-xs">Max</button>
</div>
</div>
<div className="flex-1 w-full relative">

{/*  Simulated Chart UI  */}
<div className="absolute inset-0 flex flex-col justify-end p-4">
<div className="flex justify-between items-end gap-1 h-3/4">
<div className="w-1/12 bg-forest-green/20 h-[30%] rounded-t-sm transition-all hover:bg-forest-green/40"></div>
<div className="w-1/12 bg-forest-green/20 h-[45%] rounded-t-sm transition-all hover:bg-forest-green/40"></div>
<div className="w-1/12 bg-forest-green/20 h-[40%] rounded-t-sm transition-all hover:bg-forest-green/40"></div>
<div className="w-1/12 bg-forest-green/30 h-[60%] rounded-t-sm transition-all hover:bg-forest-green/50"></div>
<div className="w-1/12 bg-forest-green/30 h-[55%] rounded-t-sm transition-all hover:bg-forest-green/50"></div>
<div className="w-1/12 bg-forest-green/40 h-[75%] rounded-t-sm transition-all hover:bg-forest-green/60"></div>
<div className="w-1/12 bg-forest-green/40 h-[70%] rounded-t-sm transition-all hover:bg-forest-green/60"></div>
<div className="w-1/12 bg-brass-gold h-[85%] rounded-t-sm animate-pulse"></div>
<div className="w-1/12 bg-forest-green/60 h-[80%] rounded-t-sm transition-all hover:bg-forest-green/70"></div>
<div className="w-1/12 bg-forest-green/60 h-[95%] rounded-t-sm transition-all hover:bg-forest-green/70"></div>
<div className="w-1/12 bg-forest-green/80 h-[90%] rounded-t-sm transition-all hover:bg-forest-green/90"></div>
<div className="w-1/12 bg-forest-green h-[100%] rounded-t-sm"></div>
</div>
<div className="flex justify-between mt-4 text-[10px] font-label-md text-on-surface-variant uppercase tracking-wider">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 mt-6 border-t border-outline-variant pt-6 relative z-10">
<div>
<p className="text-xs text-on-surface-variant uppercase font-label-md">Total Fund Value</p>
<p className="text-2xl font-bold text-forest-deep">$1.42B <span className="text-xs text-forest-green font-normal">+12.4%</span></p>
</div>
<div>
<p className="text-xs text-on-surface-variant uppercase font-label-md">Public Market Capital</p>
<p className="text-2xl font-bold text-forest-deep">$640.2M</p>
</div>
<div>
<p className="text-xs text-on-surface-variant uppercase font-label-md">Alternative Assets</p>
<p className="text-2xl font-bold text-forest-deep">$780.8M</p>
</div>
</div>
</section>
{/*  Key Figures & Quick Stats  */}
<section className="col-span-12 lg:col-span-4 flex flex-col gap-6">
<div className="bg-primary text-on-primary rounded-xl p-6 shadow-md relative overflow-hidden group">
<div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-on-primary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
<div className="relative z-10">
<span className="material-symbols-outlined text-brass-gold mb-4" style={{"fontVariationSettings":"'FILL' 1"}}>stars</span>
<h4 className="font-bold text-lg mb-1">Stability Rating</h4>
<p className="text-3xl font-display-lg mb-2">AA+</p>
<p className="text-sm opacity-80">Certified by Global Sovereign Index. Reflects transparent governance and strong asset-liability matching.</p>
</div>
</div>
<div className="bg-state-white border border-outline-variant rounded-xl p-6 flex-1">
<h4 className="font-bold text-forest-deep mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-brass-gold">pie_chart</span>
                        Asset Allocation
                    </h4>
<div className="space-y-4">
<div className="space-y-1">
<div className="flex justify-between text-sm">
<span>Infrastructure (Special Projects)</span>
<span className="font-bold">42%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[42%]"></div>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-sm">
<span>Equity &amp; Venture Capital</span>
<span className="font-bold">28%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[28%]"></div>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-sm">
<span>Digital Economy Bonds</span>
<span className="font-bold">15%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full w-[15%]"></div>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-sm">
<span>Cash &amp; Liquidity</span>
<span className="font-bold">15%</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-slate-gray h-full w-[15%]"></div>
</div>
</div>
</div>
</div>
</section>
{/*  Project Finance Breakdown  */}
<section className="col-span-12 lg:col-span-7 bg-state-white border border-outline-variant rounded-xl p-6">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="font-headline-md text-headline-md text-forest-deep">Project Finance Breakdown</h3>
<p className="text-sm text-on-surface-variant">Active infrastructure and direct investment pipeline</p>
</div>
<button className="text-primary font-semibold text-sm flex items-center gap-1 hover:underline">
                        View All Projects <span className="material-symbols-outlined text-xs">arrow_forward</span>
</button>
</div>
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-outline-variant">
<th className="pb-4 font-label-md text-xs text-on-surface-variant uppercase tracking-wider">Project Entity</th>
<th className="pb-4 font-label-md text-xs text-on-surface-variant uppercase tracking-wider">Sector</th>
<th className="pb-4 font-label-md text-xs text-on-surface-variant uppercase tracking-wider">Stage</th>
<th className="pb-4 font-label-md text-xs text-on-surface-variant uppercase tracking-wider text-right">Commitment</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors">
<td className="py-4">
<div className="flex items-center gap-3">
<img alt="Enyimba City" className="w-8 h-8 rounded-lg object-cover" data-alt="Close-up architectural detail of a modern futuristic eco-city development project with solar panels and green spaces under a clear blue sky. Professional high-end real estate photography style for a governance investment portfolio." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-hBpJeSbGJCvq2Qe3IuGnjMTFhqQExyxdF_gnsuR7jDiXx2j9jd3-9zRsXGI9-HZrZiCcuEXQeR2Qg8mU-QNu3mv2C6I1ppois8G0eY7O-zGP1h2fq9WE_zsQYojWdmEf8F8zVJ4Fl78Y4y0RvkoUFPtqghsUhX3MiwCaRk7TZK7w8oxatMk_eYRZzz0NlMc6QMmDMIpJ6TT1OR-vgE0p0MF3-aOxHjYQ_Ia5B2FkpbL8VLB5TOCwssDvvCWCIZN0tco4sx37cKw" />
<div>
<p className="font-bold">Enyimba Economic City</p>
<p className="text-[10px] text-on-surface-variant">ID: ABIA-EEC-024</p>
</div>
</div>
</td>
<td className="py-4"><span className="px-2 py-1 bg-primary-container/10 text-primary-container rounded text-xs">Industrial</span></td>
<td className="py-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-forest-green"></span>
                                        Execution
                                    </div>
</td>
<td className="py-4 text-right font-mono">$240.0M</td>
</tr>
<tr className="border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors">
<td className="py-4">
<div className="flex items-center gap-3">
<img alt="Agro-Processing" className="w-8 h-8 rounded-lg object-cover" data-alt="High-tech automated agriculture facility showing large scale processing machines and stainless steel containers. The lighting is clean and industrial, conveying a sense of modern efficient production within a state-managed investment fund." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJy856OeySUsZehg_K6h4xwEiNx-Bncs4TxW7K8a5uFIuBUMXDQM0sxWq9lbAPUggnt6sYaU5_qmdMl4RdA1JY27JmBrD3e5eo2zCzrnbjMt04dLS78ILEgrlo-2nb0QyuWRemcGvDzmmlpYNtqgo0K5tMOyUaR9rXz9QtDAgh9RQEINmF67RTKghLyRMb2UFOvexoNocQyE-V5gpVqeN51BMX6ICQaBg0pHwR4xD8yxIitRe_rsXimXxDNAtMQjKyHRC5uBtIOVM" />
<div>
<p className="font-bold">Abia Agro-Hub v2</p>
<p className="text-[10px] text-on-surface-variant">ID: ABIA-AGH-012</p>
</div>
</div>
</td>
<td className="py-4"><span className="px-2 py-1 bg-secondary-container/20 text-secondary rounded text-xs">Agriculture</span></td>
<td className="py-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-brass-gold"></span>
                                        Structuring
                                    </div>
</td>
<td className="py-4 text-right font-mono">$85.5M</td>
</tr>
<tr className="border-b border-outline-variant/30 hover:bg-surface-container-low transition-colors">
<td className="py-4">
<div className="flex items-center gap-3">
<img alt="Tech Hub" className="w-8 h-8 rounded-lg object-cover" data-alt="Interior of a modern data center or technology research hub with blue and violet server lights reflecting on glass surfaces. Cinematic professional tech photography suitable for a digital governance and state sovereign wealth fund dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj_pUDlKjjrEL_tOckPzneve4Z9VUwbaTCAws5q22iLg1VJI8WR-wzP8BQOy1awFwbgAPL64YcXL7MeoNpMv0KfDD628O3cyYA8AbS0OykPN5Q8pi7I_GjBRkE1o4bXDXgRTW1phsnMztdT19bnjL9-Zh8JGtvQHnjBe0HthYloEuskJ4P6k_VCPR5NIAGZv_3IHLLEo4AFYv5494tp7L1CGG8F6Os-_SnsyH6UGzvb7gJgWAsylErTzsSYoQ08JABZC8YezOKv6o" />
<div>
<p className="font-bold">Digital Infrastructure Bond</p>
<p className="text-[10px] text-on-surface-variant">ID: ABIA-DIB-001</p>
</div>
</div>
</td>
<td className="py-4"><span className="px-2 py-1 bg-tertiary-container/10 text-tertiary rounded text-xs">Technology</span></td>
<td className="py-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-forest-green"></span>
                                        Disbursement
                                    </div>
</td>
<td className="py-4 text-right font-mono">$112.2M</td>
</tr>
</tbody>
</table>
</div>
</section>
{/*  Institutional Investor Portal  */}
<section className="col-span-12 lg:col-span-5 bg-surface-container-high border border-outline-variant rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="font-bold text-forest-deep">Institutional Investor Portal</h3>
<span className="px-2 py-1 bg-forest-green text-state-white text-[10px] font-bold rounded uppercase tracking-tighter">Secure Access</span>
</div>
<div className="bg-state-white border border-outline-variant rounded-lg p-5 mb-6">
<p className="text-xs text-on-surface-variant uppercase font-label-md mb-3">Portfolio Inquiries</p>
<div className="space-y-4">
<div className="p-3 bg-surface-container rounded border border-outline-variant/30 flex items-center justify-between hover:border-primary cursor-pointer transition-all">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">description</span>
<span className="text-sm font-semibold">Q3 Sovereign Audit Report</span>
</div>
<span className="material-symbols-outlined text-sm">lock</span>
</div>
<div className="p-3 bg-surface-container rounded border border-outline-variant/30 flex items-center justify-between hover:border-primary cursor-pointer transition-all">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary">database</span>
<span className="text-sm font-semibold">Asset Inventory Dataset</span>
</div>
<span className="material-symbols-outlined text-sm">lock</span>
</div>
</div>
</div>
<div className="space-y-4">
<p className="text-sm font-medium">Investor Relations Contact</p>
<div className="flex items-center gap-4">
<img alt="Director" className="w-12 h-12 rounded-full object-cover grayscale" data-alt="Professional headshot of a female financial director in a formal business suit, set against a blurred corporate office background. The lighting is sophisticated and professional, capturing authority and transparency for a sovereign wealth management portal." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPh_TBYHwJUJdWmz7wpONIbxEjRq3pnWr_rFkGejABxIO0fpKeO8O497AQWQoVk_6dK4XqUb6WgP0mIPTqL2bj5vGnAEgHl9NZNSspiRLAuaSZljCJgnIgntW8FvM9bGD-5-9kkNYqLjTSnKkYve2t-FRyB6AmXPP0I-99gDHB0eQXbSbLcrnwcchnB044luxseKUaIkbFxoakZPUNA45CrrtLFFq4iWDLOJDb0OLQT_dpx3MTgPkNpgHpDGToKTVn-2NEoiJNCO8" />
<div>
<p className="font-bold text-sm">Dr. Amara Okoro</p>
<p className="text-xs text-on-surface-variant">Director of Strategic Investments</p>
</div>
</div>
<button className="w-full py-3 bg-primary text-on-primary rounded font-bold text-sm flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">mail</span>
                        Request Institutional Briefing
                    </button>
</div>
</section>
</div>
</main>
{/*  Footer (JSON Anchor)  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto border-t border-outline-variant py-12">
<div className="max-w-container-max-width mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="font-headline-lg text-headline-lg text-forest-deep font-bold">ABIA ONE</span>
<p className="mt-4 text-on-surface-variant text-sm">The digital sovereign foundation for the state of Abia, Nigeria. Empowering citizens through transparency and modern governance.</p>
</div>
<div className="col-span-1">
<p className="font-label-caps text-label-caps font-bold mb-6">Investment</p>
<ul className="space-y-3">
<li><a className="text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/invest-in-aba">Invest Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/build-abia">Build Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/open-abia">Open Abia</a></li>
</ul>
</div>
<div className="col-span-1">
<p className="font-label-caps text-label-caps font-bold mb-6">Support</p>
<ul className="space-y-3">
<li><a className="text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/serve-abia">Serve Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div className="col-span-1">
<p className="font-label-caps text-label-caps font-bold mb-6">Newsletter</p>
<div className="flex gap-2">
<input className="bg-state-white border border-outline-variant rounded px-3 py-2 text-sm flex-1 focus:ring-1 focus:ring-primary outline-none" placeholder="Email address" type="email" />
<button className="bg-primary text-on-primary px-4 py-2 rounded text-sm font-bold">Join</button>
</div>
</div>
</div>
<div className="pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-on-surface-variant text-sm font-body-md">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-6">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">public</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">share</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">policy</span>
</div>
</div>
</div>
</footer>


      </div>
    </>
  );
}
