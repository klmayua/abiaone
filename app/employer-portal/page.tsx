"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .card-border {\n            border: 1px solid #E2E8F0;\n        }\n        .custom-scrollbar::-webkit-scrollbar {\n            width: 4px;\n        }\n        .custom-scrollbar::-webkit-scrollbar-track {\n            background: transparent;\n        }\n        .custom-scrollbar::-webkit-scrollbar-thumb {\n            background: #D4AF37;\n            border-radius: 10px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md min-h-screen">
        
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 bg-background border-b border-outline-variant h-20">
<div className="flex justify-between items-center px-margin-desktop h-full max-w-max-width mx-auto">
<div className="flex items-center gap-8">
<span className="font-display-lg text-headline-md font-bold text-primary">ABIA ONE</span>
<nav className="hidden md:flex gap-6">
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="/economic-transformation">Economy</a>
<a className="text-primary border-b-2 border-brass-gold font-semibold pb-1 transition-colors cursor-pointer" href="/jobs-abia">Jobs</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="/local-governance">Governance</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="/secure-abia">Security</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden lg:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-1 focus:ring-forest-green focus:border-forest-green outline-none w-64 text-body-md" placeholder="Search artisans or roles..." type="text" />
</div>
<button className="bg-forest-green text-state-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all active:scale-95">Citizen Portal</button>
</div>
</div>
</header>
{/*  SideNavBar  */}
<aside className="fixed left-0 top-20 h-screen w-64 bg-surface-container-low border-r border-outline-variant hidden md:flex flex-col py-6">
<div className="px-6 mb-8">
<h2 className="font-headline-md text-primary font-bold">Navigation</h2>
<p className="text-on-surface-variant text-caption">State Operating System</p>
</div>
<nav className="flex-1 flex flex-col">
<a className="text-forest-green font-bold border-l-4 border-brass-gold bg-surface-container-high px-6 py-3 flex items-center gap-3" href="/economic-transformation">
<span className="material-symbols-outlined">dashboard</span> Economic Transformation
            </a>
<a className="text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors flex items-center gap-3" href="#">
<span className="material-symbols-outlined">work</span> Job Board
            </a>
<a className="text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors flex items-center gap-3" href="#">
<span className="material-symbols-outlined">groups</span> Artisan Matching
            </a>
<a className="text-on-surface-variant px-6 py-3 hover:bg-surface-variant transition-colors flex items-center gap-3" href="/sme-growth-support">
<span className="material-symbols-outlined">handshake</span> SME Support
            </a>
</nav>
<div className="mt-auto px-6 pb-24">
<button className="w-full bg-brass-gold/10 text-primary border border-brass-gold py-2 rounded-lg font-medium mb-4 hover:bg-brass-gold/20 transition-all">
                Launch Service
            </button>
<div className="flex flex-col gap-2">
<a className="text-on-surface-variant text-caption flex items-center gap-2 hover:text-primary" href="#">
<span className="material-symbols-outlined text-[18px]">settings</span> Settings
                </a>
<a className="text-on-surface-variant text-caption flex items-center gap-2 hover:text-primary" href="#">
<span className="material-symbols-outlined text-[18px]">help</span> Support
                </a>
</div>
</div>
</aside>
{/*  Main Content  */}
<main className="md:ml-64 pt-24 px-gutter pb-gutter max-w-max-width mx-auto">
{/*  Dashboard Header  */}
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div>
<h1 className="font-headline-lg text-primary">Employer Dashboard</h1>
<p className="text-on-surface-variant">Managing Abia's industrial growth through skilled human capital.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 border border-outline text-on-surface font-medium rounded-lg hover:bg-surface-container transition-all">
<span className="material-symbols-outlined">file_download</span> Reports
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-forest-green text-state-white font-medium rounded-lg hover:shadow-lg transition-all">
<span className="material-symbols-outlined">add</span> Post New Role
                </button>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="bento-grid">
{/*  Key Metrics  */}
<div className="col-span-12 lg:col-span-8 bento-grid">
<div className="col-span-12 md:col-span-4 bg-white p-6 rounded-lg card-border flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-on-surface-variant font-medium">Active Roles</span>
<span className="material-symbols-outlined text-forest-green">work</span>
</div>
<div>
<div className="text-display-lg font-bold text-primary">14</div>
<div className="text-caption text-forest-green flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +2 this week
                        </div>
</div>
</div>
<div className="col-span-12 md:col-span-4 bg-white p-6 rounded-lg card-border flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-on-surface-variant font-medium">Applicants</span>
<span className="material-symbols-outlined text-forest-green">person_search</span>
</div>
<div>
<div className="text-display-lg font-bold text-primary">142</div>
<div className="text-caption text-on-surface-variant">28 pending review</div>
</div>
</div>
<div className="col-span-12 md:col-span-4 bg-white p-6 rounded-lg card-border flex flex-col justify-between">
<div className="flex justify-between items-start">
<span className="text-on-surface-variant font-medium">Matches Found</span>
<span className="material-symbols-outlined text-brass-gold" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
</div>
<div>
<div className="text-display-lg font-bold text-primary">89%</div>
<div className="text-caption text-on-surface-variant">Artisan Cluster Match Rate</div>
</div>
</div>
{/*  Recent Applications Table  */}
<div className="col-span-12 bg-white rounded-lg card-border overflow-hidden">
<div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
<h3 className="font-headline-md text-primary text-body-md flex items-center gap-2">
<span className="w-1 h-6 bg-brass-gold"></span> Recent Applications
                        </h3>
<button className="text-forest-green font-medium text-caption hover:underline">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-surface-container-lowest text-on-surface-variant text-caption uppercase tracking-wider">
<tr>
<th className="px-6 py-3 font-semibold">Applicant</th>
<th className="px-6 py-3 font-semibold">Role</th>
<th className="px-6 py-3 font-semibold">Origin</th>
<th className="px-6 py-3 font-semibold">Status</th>
<th className="px-6 py-3 font-semibold">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold text-caption">CN</div>
<div>
<div className="font-semibold text-on-surface">Chidi Njoku</div>
<div className="text-[10px] text-on-surface-variant">Shoe Designer</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-body-md">Production Lead</td>
<td className="px-6 py-4"><span className="bg-surface-container px-2 py-1 rounded text-caption">Ariaria Cluster</span></td>
<td className="px-6 py-4"><span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold">INTERVIEWING</span></td>
<td className="px-6 py-4 text-forest-green cursor-pointer"><span className="material-symbols-outlined">visibility</span></td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-fixed flex items-center justify-center text-secondary font-bold text-caption">AO</div>
<div>
<div className="font-semibold text-on-surface">Amaka Okoro</div>
<div className="text-[10px] text-on-surface-variant">Garment Tech</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-body-md">Quality Control</td>
<td className="px-6 py-4"><span className="bg-surface-container px-2 py-1 rounded text-caption">Aba South</span></td>
<td className="px-6 py-4"><span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-[10px] font-bold">REVIEWING</span></td>
<td className="px-6 py-4 text-forest-green cursor-pointer"><span className="material-symbols-outlined">visibility</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
{/*  Side Cards  */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
{/*  Artisan Matching Spotlight  */}
<div className="bg-primary text-state-white p-8 rounded-lg relative overflow-hidden group">

<div className="relative z-10">
<div className="bg-brass-gold text-primary font-bold px-3 py-1 inline-block text-[10px] rounded mb-4">PREMIUM MATCHING</div>
<h3 className="font-headline-md text-headline-md mb-2">Ariaria Artisan Finder</h3>
<p className="text-primary-fixed text-body-md mb-6">Instantly connect with verified leather, garment, and metal-work specialists from Abia's industrial heart.</p>
<button className="w-full bg-state-white text-primary font-bold py-3 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined">location_searching</span> Start Matching
                        </button>
</div>
</div>
{/*  SME Support Feature  */}
<div className="bg-white p-6 rounded-lg card-border">
<h3 className="font-headline-md text-body-md text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-brass-gold">support_agent</span> SME Support Hub
                    </h3>
<div className="space-y-4">
<div className="flex gap-4 items-start p-3 hover:bg-surface-container-low rounded-lg transition-all cursor-pointer">
<div className="bg-secondary-container p-2 rounded">
<span className="material-symbols-outlined text-on-secondary-container">account_balance_wallet</span>
</div>
<div>
<h4 className="font-bold text-body-md">Hiring Grants</h4>
<p className="text-caption text-on-surface-variant">Apply for government wage subsidies for new hires.</p>
</div>
</div>
<div className="flex gap-4 items-start p-3 hover:bg-surface-container-low rounded-lg transition-all cursor-pointer">
<div className="bg-surface-container-highest p-2 rounded">
<span className="material-symbols-outlined text-on-surface-variant">model_training</span>
</div>
<div>
<h4 className="font-bold text-body-md">Upskilling Programs</h4>
<p className="text-caption text-on-surface-variant">Enroll your team in state-sponsored digital courses.</p>
</div>
</div>
</div>
<hr className="my-4 border-outline-variant" />
<button className="w-full text-forest-green font-bold text-caption flex items-center justify-center gap-1 hover:gap-2 transition-all">
                        Explore SME Benefits <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
{/*  Activity Feed  */}
<div className="bg-white p-6 rounded-lg card-border flex-1">
<h3 className="font-headline-md text-body-md text-primary mb-4">State Industrial Updates</h3>
<div className="space-y-6">
<div className="relative pl-6 border-l-2 border-outline-variant">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brass-gold border-4 border-white"></div>
<div className="text-[10px] text-outline font-bold">TODAY</div>
<p className="text-caption text-on-surface mt-1">Abia Industrial Zone Phase 2 launched. Logistics ease for employers increased.</p>
</div>
<div className="relative pl-6 border-l-2 border-outline-variant">
<div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-outline-variant border-4 border-white"></div>
<div className="text-[10px] text-outline font-bold">YESTERDAY</div>
<p className="text-caption text-on-surface mt-1">3 new artisans joined your 'Matched' list from the Shoe Cluster.</p>
</div>
</div>
</div>
</div>
</div>
{/*  Featured Artisan Profiles  */}
<section className="mt-12">
<div className="flex justify-between items-center mb-6">
<h2 className="font-headline-md text-primary">Top Verified Artisans</h2>
<div className="flex gap-2">
<button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-full hover:bg-white"><span className="material-symbols-outlined">chevron_left</span></button>
<button className="w-10 h-10 flex items-center justify-center border border-outline-variant rounded-full hover:bg-white"><span className="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Profile Card 1  */}
<div className="bg-white rounded-lg card-border p-4 hover:shadow-md transition-all group cursor-pointer">
<div className="relative h-40 w-full mb-4 rounded overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A portrait of a skilled African artisan focusing intently on stitching a piece of premium leather in a bright, modern workshop environment in Aba. The lighting is crisp and natural, highlighting the texture of the material and the artisan's precision. The background is slightly blurred showing tools of the trade neatly arranged on a wooden workbench, embodying the professional and high-quality industrial spirit of Abia State." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2uO1IO_5K7PmkCzmTXIiRkSn16aBchkUO-pSGRHZA95j0xgt6Y5-G3txUad4Qy1K-Zr1MLVSwooBBAbF_CeBcTj813-SZWL4M5dZHTfnYyW-_w02Zjl1DvQkALytxdxfaEvUtMMHCQwu5-csVoUhVICGh9UFowaShXZYEzSCgXoe1OTFhCScn9oC4sLkI0DiZ2_sIGsVmsaT1Vl1Ss91hX236R8ULMMaMmTqTVNT1qTuy0oNPRq6rGiqL6xhME3mBvizERrQy0YA" />
<div className="absolute top-2 right-2 bg-state-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-forest-green flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span> VERIFIED
                        </div>
</div>
<h4 className="font-bold text-body-md">Kalu Ikechukwu</h4>
<p className="text-caption text-on-surface-variant mb-3">Master Cordwainer • 12 yrs exp.</p>
<div className="flex gap-1 mb-4">
<span className="text-[10px] bg-surface-container px-2 py-0.5 rounded">Leather</span>
<span className="text-[10px] bg-surface-container px-2 py-0.5 rounded">Design</span>
</div>
<button className="w-full border border-forest-green text-forest-green font-bold py-2 rounded text-caption group-hover:bg-forest-green group-hover:text-state-white transition-all">View Portfolio</button>
</div>
{/*  Profile Card 2  */}
<div className="bg-white rounded-lg card-border p-4 hover:shadow-md transition-all group cursor-pointer">
<div className="relative h-40 w-full mb-4 rounded overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A high-angle view of an industrial sewing station where a professional tailor is working on a complex garment pattern. The workspace is bright and organized, following the clean corporate aesthetic of the Abia One ecosystem. Rich green and earthy brass gold tones are subtly integrated into the studio's decor, creating a sense of institutional reliability and modern manufacturing excellence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6UMkrFpnm4tLLJDDPYywYArCmfF0iIHB-p4Ja0tfCp0vAAXM1pvH2khw9wgNn74kZTk_h5Ke6zyH3u-_ch1maSLiyToEkM8-BDJ1clCG3WUxlsZ163oE8ZZiDbP0gpMZag1aQmGqOR3Qwct4f67ypAEnPh7y6hSgxa0c-xwk7uOCZVbqvXhnTPQn5Fpkce5J_o28FqWWmJsx8pxlndtrKbzB0712soJ7xG6971V-p24tebtUA2On15h0rlxefAJEjToH3olmj_Nw" />
<div className="absolute top-2 right-2 bg-state-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-forest-green flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span> VERIFIED
                        </div>
</div>
<h4 className="font-bold text-body-md">Blessing Nduka</h4>
<p className="text-caption text-on-surface-variant mb-3">Garment Specialist • 8 yrs exp.</p>
<div className="flex gap-1 mb-4">
<span className="text-[10px] bg-surface-container px-2 py-0.5 rounded">Textiles</span>
<span className="text-[10px] bg-surface-container px-2 py-0.5 rounded">QC</span>
</div>
<button className="w-full border border-forest-green text-forest-green font-bold py-2 rounded text-caption group-hover:bg-forest-green group-hover:text-state-white transition-all">View Portfolio</button>
</div>
{/*  Profile Card 3  */}
<div className="bg-white rounded-lg card-border p-4 hover:shadow-md transition-all group cursor-pointer">
<div className="relative h-40 w-full mb-4 rounded overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A close-up shot of a welder's hands precisely joining two metal parts with a steady spark. The scene is set in a controlled industrial environment representing the Ariaria metal-work cluster. The lighting is dramatic but clear, with a palette dominated by cool greys and the warm orange of the weld, reflecting a sophisticated, technical design system that values precision and industrial prowess." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd3us_gWhoztOr-WEzEpvRDahB5aDPftRgFuZoSqoWWH9mX1NIj38zP6Cf-WypzTx2xIlMwVOLAsOYMA_DmugyzQHT5qMkwTxHUHU-cB_CExepuPPSyO13W67lkHbrTS-oPjvVngtk_LGnBfdZVMd4mY20uIr0b2f1R-y0JV1HdmtVr2fJvLke27Qjqj0SLLCrnSLVpcZBv9Jw0qXb5NTpsQLSqcqTgtxRjfXkzOh5Z0OOEV7WnZMVmP01OVqDe6spySzwPlhcamQ" />
<div className="absolute top-2 right-2 bg-state-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-forest-green flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span> VERIFIED
                        </div>
</div>
<h4 className="font-bold text-body-md">Obinna Azubuike</h4>
<p className="text-caption text-on-surface-variant mb-3">Precision Welder • 15 yrs exp.</p>
<div className="flex gap-1 mb-4">
<span className="text-[10px] bg-surface-container px-2 py-0.5 rounded">Metalwork</span>
<span className="text-[10px] bg-surface-container px-2 py-0.5 rounded">Fabrication</span>
</div>
<button className="w-full border border-forest-green text-forest-green font-bold py-2 rounded text-caption group-hover:bg-forest-green group-hover:text-state-white transition-all">View Portfolio</button>
</div>
{/*  Profile Card 4  */}
<div className="bg-white rounded-lg card-border p-4 hover:shadow-md transition-all group cursor-pointer">
<div className="relative h-40 w-full mb-4 rounded overflow-hidden">
<img className="w-full h-full object-cover" data-alt="An expansive view of a modern industrial office in Umuahia, Abia State, featuring large windows and collaborative workspaces. The interior design follows a corporate-modern aesthetic with sleek lines and a professional color scheme of forest green and neutral tones. The atmosphere is vibrant and productive, symbolizing the growth of new businesses and employment opportunities within the state's digital and physical infrastructure." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQSUh6dP88AMKqi9c8ELJoIFx-5pM4loa96wau_rAtTqoO4Bh5yXiOSW5oWdj99750DmACkCieiVaYqjyw4-aOin3o1ywkNp0tNnN7lPk-OGM_S_WeyVTc23MHQ6a5D-xQQnMGm7KpRXqDcSFdgii7mrHi01Rlzhcy7SVsandKcYH_97Rev0JLsEBW0a_fQkM2KVfsELgztjeIKPc1I2N8L7--rlzcybCpCbKbmpGeqOVN8W-gOQAsl_sOmQRjBbFbml5FxXgB6xg" />
<div className="absolute top-2 right-2 bg-state-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-forest-green flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]" style={{"fontVariationSettings":"'FILL' 1"}}>verified</span> VERIFIED
                        </div>
</div>
<h4 className="font-bold text-body-md">Ngozi Adeleke</h4>
<p className="text-caption text-on-surface-variant mb-3">Logistics Manager • 5 yrs exp.</p>
<div className="flex gap-1 mb-4">
<span className="text-[10px] bg-surface-container px-2 py-0.5 rounded">Supply Chain</span>
<span className="text-[10px] bg-surface-container px-2 py-0.5 rounded">Mgmt</span>
</div>
<button className="w-full border border-forest-green text-forest-green font-bold py-2 rounded text-caption group-hover:bg-forest-green group-hover:text-state-white transition-all">View Portfolio</button>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-highest border-t border-outline-variant mt-20 relative">
<div className="flex flex-col md:flex-row justify-between items-center py-gutter px-margin-desktop max-w-max-width mx-auto">
<div className="mb-6 md:mb-0">
<span className="font-headline-md text-primary block">ABIA ONE</span>
<p className="text-caption text-on-surface-variant max-w-xs mt-2">© 2024 Abia State Government. All rights reserved. Built for the future of governance.</p>
</div>
<div className="flex flex-wrap gap-x-8 gap-y-4 justify-center md:justify-end">
<a className="text-on-surface-variant hover:text-primary underline-offset-4 hover:underline" href="#">Institutional Links</a>
<a className="text-on-surface-variant hover:text-primary underline-offset-4 hover:underline" href="#">Transparency Info</a>
<a className="text-on-surface-variant hover:text-primary underline-offset-4 hover:underline" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-primary underline-offset-4 hover:underline" href="#">Contact Support</a>
</div>
</div>
</footer>
{/*  FAB for Action (Task-Focused Only on Home/Dashboards)  */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-forest-green text-state-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined text-[28px]">chat</span>
</button>


      </div>
    </>
  );
}
