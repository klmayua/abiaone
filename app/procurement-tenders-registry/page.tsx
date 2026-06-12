"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(8px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        ::-webkit-scrollbar {\n            width: 6px;\n        }\n        ::-webkit-scrollbar-track {\n            background: #f1f5ee;\n        }\n        ::-webkit-scrollbar-thumb {\n            background: #6f7a70;\n            border-radius: 10px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant max-w-container-max-width mx-auto">
<div className="flex items-center gap-2">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep">ABIA ONE</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors" href="#">Economy</a>
<a className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors" href="#">Digital Gov</a>
<a className="text-primary font-label-md text-label-md border-b-2 border-brass-gold pb-1" href="#">Governance</a>
<a className="text-on-surface-variant font-label-md text-label-md hover:text-primary transition-colors" href="#">Security</a>
</div>
<div className="flex items-center gap-4">
<button className="bg-forest-green text-white px-4 py-2 rounded-lg font-label-md text-label-md">Citizen Portal</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-outline">
<img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdV5JzJO38dQOexLfUtN9Rh-4KSODtR-iMwBKKAiBWu6ezW9jl-vwuTfOPNxkjTtSOHHCVPuc5YefSiSWYIYKyJ43ACzpU0dM2DYW-kzzbUViKSM7KFpcRjY9-29SQgcGnJQMpbC5MK85DoHVYPB2OE6noRR0n8I_THlbACICaUFDQOT_gVYiNGu360KYu2qtQnIOrwj9dL7KF1uHqdnKSnvJ6edqXbWFcSpABLTtVbvZEDQmn0OOOv3opaw3zTGyiDdtHsCEaIeQ" />
</div>
</div>
</nav>
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant pt-20 z-40">
<div className="px-6 mb-8">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep">OPEN ABIA</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Procurement Registry</p>
</div>
<nav className="flex-grow space-y-1">
<a className="flex items-center gap-3 mx-2 px-4 py-3 rounded-lg bg-secondary-container text-on-secondary-container transition-all" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-sm text-label-sm">Procurement Dashboard</span>
</a>
<a className="flex items-center gap-3 mx-2 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-sm text-label-sm">Active Tenders</span>
</a>
<a className="flex items-center gap-3 mx-2 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
<span className="material-symbols-outlined">mitre</span>
<span className="font-label-sm text-label-sm">Vendor Compliance</span>
</a>
<a className="flex items-center gap-3 mx-2 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
<span className="material-symbols-outlined">security</span>
<span className="font-label-sm text-label-sm">Audit Trails</span>
</a>
</nav>
<div className="p-4 border-t border-outline-variant">
<button className="w-full bg-brass-gold/10 text-primary border border-brass-gold py-2 rounded-lg font-label-md text-label-md">Citizen Feedback</button>
</div>
</aside>
<main className="lg:ml-64 pt-24 pb-12 px-margin-mobile md:px-margin-desktop">
<header className="mb-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
<div>
<h1 className="font-display-lg text-display-lg text-forest-deep">Public Procurement &amp; Tenders</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Ensuring fiscal transparency and equal opportunity in Abia State through decentralized, open-access governance infrastructure.</p>
</div>
<div className="flex gap-3">
<button className="bg-forest-green text-white px-6 py-3 rounded-lg font-label-md text-label-md flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">add</span>
                        Register as Vendor
                    </button>
</div>
</div>
</header>
<section className="bento-grid mb-10">
<div className="col-span-12 md:col-span-8 glass-card rounded-xl p-6 relative overflow-hidden">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-forest-deep flex items-center gap-2">
<span className="w-1 h-6 bg-brass-gold rounded-full"></span>
                        Procurement Analytics Dashboard
                    </h3>
<div className="flex gap-2">
<span className="px-3 py-1 bg-primary/10 text-primary text-caption font-label-md rounded-full">2024 Fiscal Year</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="p-4 border border-outline-variant rounded-lg bg-surface-container-lowest">
<p className="text-caption text-on-surface-variant font-label-md uppercase tracking-wider">Total Contract Volume</p>
<p className="text-headline-lg font-bold text-primary mt-1">₦42.8B</p>
<div className="flex items-center gap-1 text-primary mt-2">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span className="text-caption font-label-md">+12.4% vs prev. month</span>
</div>
</div>
<div className="p-4 border border-outline-variant rounded-lg bg-surface-container-lowest">
<p className="text-caption text-on-surface-variant font-label-md uppercase tracking-wider">Active Tenders</p>
<p className="text-headline-lg font-bold text-forest-deep mt-1">142</p>
<div className="flex items-center gap-1 text-on-surface-variant mt-2">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span className="text-caption font-label-md">24 closing this week</span>
</div>
</div>
<div className="p-4 border border-outline-variant rounded-lg bg-surface-container-lowest">
<p className="text-caption text-on-surface-variant font-label-md uppercase tracking-wider">Verified Vendors</p>
<p className="text-headline-lg font-bold text-forest-deep mt-1">1,842</p>
<div className="flex items-center gap-1 text-primary mt-2">
<span className="material-symbols-outlined text-[16px]" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span>
<span className="text-caption font-label-md">98% compliance rate</span>
</div>
</div>
</div>
<div className="h-64 w-full bg-surface-container rounded-lg flex items-center justify-center relative">
<div className="absolute inset-0 opacity-10">
<img className="w-full h-full object-cover" data-alt="A sophisticated data visualization dashboard showing complex line graphs and bar charts in professional forest green and brass gold tones, representing government spending and fiscal transparency metrics on a sleek digital interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzNwzuRMt1ETKyUNXsJbFqkg-KOHRs_lBUyaRBp8XsVR8im5mijbNEPwDpBkA59ozMeM8MpIbOJ5sNMnUcBJl_N5Pfzo_HUXWYOEsFDaoo6JiYISd3mPM5aNBAPAeewZ7EbK307rVPV1es-j_1ReOJjq1ulXS95DuWAZ2NlkGaNfA2BLi9yLhcNYeZNlNGEFTODzK2soSFqkawI7B8c0BbdSzEdpVx7VMcFQ1u_nFk27kARXAhGF8jkBLQHw8hzhK_tjKdBKleqbE" />
</div>
<div className="z-10 text-center">
<p className="font-label-md text-label-md text-on-surface-variant mb-4">State Expenditure Distribution (Interactive View)</p>
<div className="flex gap-4 justify-center">
<div className="flex items-center gap-2"><div className="w-3 h-3 bg-forest-green rounded-full"></div><span className="text-caption">Infrastructure</span></div>
<div className="flex items-center gap-2"><div className="w-3 h-3 bg-brass-gold rounded-full"></div><span className="text-caption">Education</span></div>
<div className="flex items-center gap-2"><div className="w-3 h-3 bg-secondary rounded-full"></div><span className="text-caption">Healthcare</span></div>
</div>
</div>
</div>
</div>
<div className="col-span-12 md:col-span-4 glass-card rounded-xl p-6 flex flex-col">
<h3 className="font-headline-md text-headline-md text-forest-deep mb-6 flex items-center gap-2">
<span className="w-1 h-6 bg-eagle-red rounded-full"></span>
                    Live Bid Openings
                </h3>
<div className="flex-grow space-y-4">
<div className="p-4 border-l-4 border-eagle-red bg-error-container/20 rounded-r-lg relative">
<div className="absolute top-2 right-2">
<span className="flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eagle-red opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-eagle-red"></span>
</span>
</div>
<p className="text-caption font-label-md text-eagle-red uppercase">Live Now</p>
<p className="font-headline-md text-[18px] text-on-surface mt-1">Umuahia-Ikot Ekpene Road (Lot 2)</p>
<p className="text-caption text-on-surface-variant mt-2">Opening session started at 10:00 AM</p>
<button className="mt-3 text-primary font-label-md text-label-md flex items-center gap-1 hover:underline">
                            Watch Stream <span className="material-symbols-outlined text-[16px]">videocam</span>
</button>
</div>
<div className="p-4 border border-outline-variant rounded-lg">
<p className="text-caption font-label-md text-on-surface-variant uppercase">Coming Up: 2:30 PM</p>
<p className="font-headline-md text-[18px] text-on-surface mt-1">Smart Schools Initiative Phase III</p>
<div className="w-full bg-surface-container h-1.5 rounded-full mt-4 overflow-hidden">
<div className="bg-forest-green h-full" style={{"width":"75%"}}></div>
</div>
</div>
<div className="p-4 border border-outline-variant rounded-lg">
<p className="text-caption font-label-md text-on-surface-variant uppercase">Scheduled: Tomorrow</p>
<p className="font-headline-md text-[18px] text-on-surface mt-1">State Data Center Expansion</p>
</div>
</div>
<button className="w-full mt-6 py-3 border border-outline-variant rounded-lg font-label-md text-label-md hover:bg-surface-variant transition-colors">View Bid Calendar</button>
</div>
</section>
<section className="mb-10">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-forest-deep">Active Tenders &amp; Contracts</h3>
<div className="flex gap-2">
<div className="relative">
<input className="pl-10 pr-4 py-2 bg-surface border border-outline-variant rounded-lg text-sm focus:ring-primary focus:border-primary" placeholder="Search Tenders..." type="text" />
<span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px]">search</span>
</div>
<button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-sm font-medium hover:bg-surface-variant">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
                        Filter
                    </button>
</div>
</div>
<div className="overflow-x-auto border border-outline-variant rounded-xl bg-surface-container-lowest">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-low">
<tr>
<th className="p-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant">Tender ID</th>
<th className="p-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant">Project Title</th>
<th className="p-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant">Department</th>
<th className="p-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant">Status</th>
<th className="p-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant">Closing Date</th>
<th className="p-4 font-label-md text-label-md text-on-surface-variant border-b border-outline-variant text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-surface-variant/20 transition-colors">
<td className="p-4 font-label-md text-label-md">AB/WORKS/24/012</td>
<td className="p-4">
<p className="font-body-md font-semibold">Umuahia Urban Renewal - Drainage Systems</p>
<p className="text-caption text-on-surface-variant">Estimated Value: ₦240M</p>
</td>
<td className="p-4 text-on-surface-variant">Ministry of Works</td>
<td className="p-4">
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-caption font-label-md rounded-full">Open</span>
</td>
<td className="p-4 font-label-md">14 Oct, 2024</td>
<td className="p-4 text-right">
<button className="text-primary font-bold hover:underline">Apply</button>
</td>
</tr>
<tr className="hover:bg-surface-variant/20 transition-colors">
<td className="p-4 font-label-md text-label-md">AB/EDU/24/089</td>
<td className="p-4">
<p className="font-body-md font-semibold">Digital Literacy Labs for 12 Secondary Schools</p>
<p className="text-caption text-on-surface-variant">Estimated Value: ₦115M</p>
</td>
<td className="p-4 text-on-surface-variant">Ministry of Education</td>
<td className="p-4">
<span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-caption font-label-md rounded-full">Evaluating</span>
</td>
<td className="p-4 font-label-md">02 Oct, 2024</td>
<td className="p-4 text-right">
<button className="text-on-surface-variant font-bold hover:underline">View Results</button>
</td>
</tr>
<tr className="hover:bg-surface-variant/20 transition-colors">
<td className="p-4 font-label-md text-label-md">AB/AGRI/24/004</td>
<td className="p-4">
<p className="font-body-md font-semibold">Tractor Leasing Program - Rural Cooperatives</p>
<p className="text-caption text-on-surface-variant">Estimated Value: ₦500M</p>
</td>
<td className="p-4 text-on-surface-variant">Ministry of Agriculture</td>
<td className="p-4">
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-caption font-label-md rounded-full">Open</span>
</td>
<td className="p-4 font-label-md">28 Oct, 2024</td>
<td className="p-4 text-right">
<button className="text-primary font-bold hover:underline">Apply</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
<section className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div className="glass-card rounded-xl p-8 border-l-4 border-brass-gold">
<h3 className="font-headline-md text-headline-md text-forest-deep mb-4">Contractor Compliance Registry</h3>
<p className="font-body-md text-on-surface-variant mb-6">Maintain your eligibility for Abia State Government contracts by ensuring your documentation is up to date.</p>
<div className="space-y-4 mb-6">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<span className="font-body-md">CAC Registration Verification</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<span className="font-body-md">Tax Clearance Certificate (TCC)</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<span className="font-body-md">PenCom Compliance Certificate</span>
</div>
</div>
<div className="flex gap-4">
<button className="bg-forest-green text-white px-6 py-3 rounded-lg font-label-md text-label-md">Check Status</button>
<button className="border border-outline-variant px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-surface-variant">Renewal Guide</button>
</div>
</div>
<div className="relative rounded-xl overflow-hidden group">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A professional aerial view of a large-scale construction site in a modernizing African city, showing heavy machinery, organized infrastructure development, and engineers in safety gear, captured in bright daylight with a focus on progress and transparent government-funded projects." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5FsBgN6TBY-w4icJtNqqJ_7BoFbyy1BK1C7hOtaTVzbbG-67BvZw6qc95qZsFgf7jKXhFSRkspSi44NHqTKMQTUdAJt9kU06hPyGSfMUBbVbZXYoo7dk5GRolRlTFVXjgux90HzddGk_4PWL4sevy_m95a8xmcpru3C7fq_gxOAvx87C00oyd_Q51f1zuilO8dbUUDIThrKJSETzpAP5AloKfhMIDjySuWYtxpC7oz05AiNxOdw9NlmyxCFiHgLJ2_AF6mze2YSs" />
<div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-transparent p-8 flex flex-col justify-end">
<h3 className="font-headline-md text-headline-md text-white mb-2">Vendor Success Story</h3>
<p className="text-white/80 font-body-md mb-4">"The Abia One portal eliminated the middleman, allowing our local firm to compete and win on merit for the 2023 Rural Electrification Project."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden">
<img alt="Vendor Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9DF4F5-jxLTuilVP60VDybLhd-S7V5be0o-alr0mvpFQ70o4UCa0QU1NdNEUpypevOR_ybP6EbgKKmfVPS48j3NWnUZzS5zlOXk7P2v1eDtjYQ1bFxI92txBWGnb-nFiNNWAS1yw4-gVon2j7pdiqJgTdCB1OOE0b_0VtLF1ctC6xOPO4t6SrthW333JzsSNh1eiC9BWWKCEvegsExkzPH3-fkmzl4yMPPlxPlxEYn5_XJxCH0NsIBKcwb3oyMaKZZ7rCEZbECIw" />
</div>
<div>
<p className="text-white font-bold">Engr. Chinedu Okafor</p>
<p className="text-white/60 text-caption">CEO, Abia Tech Solutions</p>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto py-12 border-t border-outline-variant lg:ml-64 lg:w-[calc(100%-16rem)]">
<div className="max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between gap-8">
<div>
<h4 className="font-headline-lg text-headline-lg text-forest-deep font-bold mb-2">ABIA ONE</h4>
<p className="font-body-md text-on-surface-variant max-w-xs">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
<div className="space-y-4">
<p className="font-label-caps text-label-caps text-forest-deep font-bold">INITIATIVES</p>
<ul className="space-y-2">
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Invest Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Serve Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Build Abia</a></li>
</ul>
</div>
<div className="space-y-4">
<p className="font-label-caps text-label-caps text-forest-deep font-bold">LEGAL</p>
<ul className="space-y-2">
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Open Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div className="space-y-4">
<p className="font-label-caps text-label-caps text-forest-deep font-bold">SUPPORT</p>
<ul className="space-y-2">
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Us</a></li>
<li><a className="text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Help Desk</a></li>
</ul>
</div>
</div>
</div>
</footer>


      </div>
    </>
  );
}
