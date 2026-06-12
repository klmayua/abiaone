"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .card-border {\n            border: 1px solid #E2E8F0;\n        }\n        .brass-accent {\n            border-left: 3px solid #D4AF37;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md">
        
{/*  Sidebar Navigation (SideNavBar)  */}
<aside className="h-screen w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant flex flex-col py-6 px-4 z-50">
<div className="mb-8 px-2">
<h2 className="font-headline-md text-headline-md text-forest-green">Abia One OS</h2>
<p className="font-label-md text-label-md text-on-surface-variant opacity-70">v2.0 Infrastructure</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-3 py-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all" href="/">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                Command Center
            </a>
<a className="flex items-center gap-3 px-3 py-3 font-label-md text-label-md text-forest-green font-bold bg-surface-container-highest" href="/ministry-of-communication">
<span className="material-symbols-outlined" data-icon="campaign" style={{"fontVariationSettings":"'FILL' 1"}}>campaign</span>
                Communications
            </a>
<a className="flex items-center gap-3 px-3 py-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all" href="/ministry-of-agriculture">
<span className="material-symbols-outlined" data-icon="agriculture">agriculture</span>
                Agriculture
            </a>
<a className="flex items-center gap-3 px-3 py-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all" href="/ministry-of-health">
<span className="material-symbols-outlined" data-icon="medical_services">medical_services</span>
                Health
            </a>
<a className="flex items-center gap-3 px-3 py-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all" href="/greater-aba-development-authority">
<span className="material-symbols-outlined" data-icon="location_city">location_city</span>
                GADA
            </a>
<a className="flex items-center gap-3 px-3 py-3 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
                Analytics
            </a>
</nav>
<div className="mt-auto space-y-1 pt-6 border-t border-outline-variant">
<button className="w-full bg-forest-green text-white font-headline-md text-[14px] py-3 rounded-lg flex items-center justify-center gap-2 mb-4">
<span className="material-symbols-outlined text-[18px]" data-icon="add">add</span>
                New Initiative
            </button>
<a className="flex items-center gap-3 px-3 py-2 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined" data-icon="cloud_done">cloud_done</span>
                System Status
            </a>
<a className="flex items-center gap-3 px-3 py-2 font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-all" href="#">
<span className="material-symbols-outlined" data-icon="help_center">help_center</span>
                Support
            </a>
</div>
</aside>
{/*  Main Content Area  */}
<main className="ml-64 min-h-screen">
{/*  TopAppBar  */}
<header className="h-16 flex justify-between items-center px-gutter w-full sticky top-0 bg-surface border-b border-outline-variant z-40">
<div className="flex items-center gap-4">
<h1 className="font-headline-md text-headline-md font-bold text-forest-green">The Voice of Abia</h1>
<span className="h-6 w-[1px] bg-outline-variant"></span>
<span className="font-label-md text-label-md text-on-surface-variant">Ministry of Communication</span>
</div>
<div className="flex items-center gap-6">
<div className="relative group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant" data-icon="search">search</span>
<input className="pl-10 pr-4 py-1.5 bg-surface-container-low border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-forest-green focus:border-transparent outline-none w-64 transition-all" placeholder="Search directives..." type="text" />
</div>
<div className="flex items-center gap-4 text-on-surface-variant">
<button className="hover:text-forest-green transition-colors"><span className="material-symbols-outlined" data-icon="notifications">notifications</span></button>
<button className="hover:text-forest-green transition-colors"><span className="material-symbols-outlined" data-icon="account_balance">account_balance</span></button>
<button className="hover:text-forest-green transition-colors"><span className="material-symbols-outlined" data-icon="settings">settings</span></button>
<img alt="User profile" className="w-8 h-8 rounded-full border border-forest-green object-cover" data-alt="A professional headshot of a senior government official wearing a crisp white shirt and a green tie, set against a blurred office background with warm wooden tones and soft morning light. The style is clean, corporate, and authoritative." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFNOwlRSx-HLkStL1GtzP0sRRNAq4NLPc96POHd75atfYMQJK0Qp90rljb6PmlTvIOFKUjkRO_f5ghs-JMjGTc65SlbX5yzkt2EXCF2qgGlOwtKBbQAca3n-ndYrYZypWgd47-xkrluiSsro6FcjZDZ8cu67svtH66Q9SFTfUzC5M6yidt1_A2FYKpJVXLfaUZQtF0oc5dZ5MVG4LnA5JgAlGRUvPKknW8dY1zaT3hO1cdhUBJgW2XeWfwwY_7Omx3Jrzx22xQrDY" />
</div>
</div>
</header>
{/*  Dashboard Content  */}
<div className="p-gutter max-w-max-width mx-auto">
{/*  Hero Row: Global Perception & Crisis Status  */}
<div className="grid grid-cols-12 gap-6 mb-8">
{/*  Public Perception Index Widget  */}
<div className="col-span-12 lg:col-span-8 card-border bg-white p-6 rounded-xl relative overflow-hidden">
<div className="flex justify-between items-start mb-8">
<div>
<h3 className="font-headline-md text-[18px] text-slate-gray mb-1">Public Perception Index</h3>
<p className="text-caption text-on-surface-variant">Real-time aggregate sentiment across digital channels</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-green-100 text-forest-green rounded-full text-caption flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="trending_up">trending_up</span>
                                +4.2% This Week
                            </span>
</div>
</div>
<div className="flex items-end gap-4 h-48">
{/*  Simulated Chart  */}
<div className="flex-1 flex items-end justify-between gap-2 px-2">
<div className="w-full bg-surface-container rounded-t-sm hover:bg-forest-green transition-colors h-[40%]" title="Mon"></div>
<div className="w-full bg-surface-container rounded-t-sm hover:bg-forest-green transition-colors h-[55%]" title="Tue"></div>
<div className="w-full bg-surface-container rounded-t-sm hover:bg-forest-green transition-colors h-[45%]" title="Wed"></div>
<div className="w-full bg-surface-container rounded-t-sm hover:bg-forest-green transition-colors h-[70%]" title="Thu"></div>
<div className="w-full bg-surface-container rounded-t-sm hover:bg-forest-green transition-colors h-[85%]" title="Fri"></div>
<div className="w-full bg-forest-green rounded-t-sm h-[92%]" title="Sat"></div>
<div className="w-full bg-surface-container rounded-t-sm hover:bg-forest-green transition-colors h-[75%]" title="Sun"></div>
</div>
<div className="w-32 flex flex-col justify-between h-full border-l border-outline-variant pl-6">
<div className="text-center">
<p className="text-[32px] font-bold text-forest-green">82.4</p>
<p className="text-caption font-label-md uppercase tracking-wider text-on-surface-variant">Current Score</p>
</div>
<div className="space-y-2">
<div className="flex justify-between text-caption">
<span>Positive</span>
<span className="font-bold">68%</span>
</div>
<div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-forest-green w-[68%]"></div>
</div>
</div>
</div>
</div>
</div>
{/*  Crisis Communication Status  */}
<div className="col-span-12 lg:col-span-4 card-border bg-white p-6 rounded-xl flex flex-col">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-eagle-red" data-icon="emergency_home">emergency_home</span>
<h3 className="font-headline-md text-[18px] text-slate-gray">Crisis Status</h3>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center p-4 bg-surface-container-low rounded-lg border border-dashed border-outline-variant">
<div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-forest-green text-[32px]" data-icon="check_circle" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
</div>
<p className="font-headline-md text-[16px] text-forest-green mb-1">Condition: Green</p>
<p className="text-caption text-on-surface-variant">No critical misinterpretations or communication threats detected in the last 24 hours.</p>
</div>
<button className="mt-6 w-full py-2.5 border border-eagle-red text-eagle-red font-headline-md text-[14px] rounded hover:bg-eagle-red hover:text-white transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="warning">warning</span>
                        Initiate Response Protocol
                    </button>
</div>
</div>
{/*  Main Features Grid  */}
<div className="grid grid-cols-12 gap-6">
{/*  Press Release Control Center  */}
<div className="col-span-12 md:col-span-8 card-border bg-white rounded-xl overflow-hidden flex flex-col">
<div className="p-6 border-b border-outline-variant flex justify-between items-center">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" data-icon="news">news</span>
<h3 className="font-headline-md text-[18px] text-slate-gray">Press Release Control Center</h3>
</div>
<button className="text-forest-green text-caption font-bold hover:underline">View All Drafts</button>
</div>
<div className="p-0 overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-md text-caption uppercase tracking-wider">
<th className="px-6 py-3">Subject</th>
<th className="px-6 py-3 text-center">Status</th>
<th className="px-6 py-3">Embargo</th>
<th className="px-6 py-3">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4">
<p className="text-body-md font-semibold text-on-surface">Abia North Agricultural Subsidy Rollout</p>
<p className="text-caption text-on-surface-variant">Authored by: Commissioner Anyanwu</p>
</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-0.5 rounded-full bg-yellow-100 text-secondary text-[10px] font-bold">PENDING APPROVAL</span>
</td>
<td className="px-6 py-4 text-caption font-label-md">24 OCT, 08:00</td>
<td className="px-6 py-4">
<div className="flex gap-2">
<button className="material-symbols-outlined text-[20px] text-on-surface-variant hover:text-forest-green" data-icon="edit">edit</button>
<button className="material-symbols-outlined text-[20px] text-on-surface-variant hover:text-eagle-red" data-icon="delete">delete</button>
</div>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4">
<p className="text-body-md font-semibold text-on-surface">Digital Infrastructure Audit: Q3 Results</p>
<p className="text-caption text-on-surface-variant">Authored by: Tech Directorate</p>
</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-0.5 rounded-full bg-green-100 text-forest-green text-[10px] font-bold">PUBLISHED</span>
</td>
<td className="px-6 py-4 text-caption font-label-md">22 OCT, 14:30</td>
<td className="px-6 py-4">
<div className="flex gap-2">
<button className="material-symbols-outlined text-[20px] text-on-surface-variant" data-icon="visibility">visibility</button>
<button className="material-symbols-outlined text-[20px] text-on-surface-variant" data-icon="share">share</button>
</div>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4">
<p className="text-body-md font-semibold text-on-surface">Infrastructure Bond Issuance Strategy</p>
<p className="text-caption text-on-surface-variant">Authored by: Gov. Media Office</p>
</td>
<td className="px-6 py-4 text-center">
<span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold">DRAFT</span>
</td>
<td className="px-6 py-4 text-caption font-label-md">--</td>
<td className="px-6 py-4">
<div className="flex gap-2">
<button className="material-symbols-outlined text-[20px] text-on-surface-variant hover:text-forest-green" data-icon="edit">edit</button>
<button className="material-symbols-outlined text-[20px] text-on-surface-variant hover:text-eagle-red" data-icon="delete">delete</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/*  Recent Official Statements  */}
<div className="col-span-12 md:col-span-4 card-border bg-white p-6 rounded-xl flex flex-col">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined text-brass-gold" data-icon="campaign">campaign</span>
<h3 className="font-headline-md text-[18px] text-slate-gray">Official Statements</h3>
</div>
<div className="space-y-4 flex-1">
<div className="brass-accent bg-surface-container-lowest p-3 rounded shadow-sm">
<p className="text-caption font-label-md text-forest-green mb-1">GOVERNOR'S OFFICE</p>
<p className="text-body-md font-semibold leading-tight mb-2">On the successful launch of the Ariaria MSME Power Hub.</p>
<div className="flex justify-between items-center">
<span className="text-[10px] text-on-surface-variant font-medium">Shared with 45 Media Partners</span>
<span className="text-[10px] text-on-surface-variant">2h ago</span>
</div>
</div>
<div className="brass-accent bg-surface-container-lowest p-3 rounded shadow-sm opacity-80">
<p className="text-caption font-label-md text-forest-green mb-1">MINISTRY OF HEALTH</p>
<p className="text-body-md font-semibold leading-tight mb-2">Notice regarding the 2024 Pediatric Vaccination Drive.</p>
<div className="flex justify-between items-center">
<span className="text-[10px] text-on-surface-variant font-medium">Shared with 22 Media Partners</span>
<span className="text-[10px] text-on-surface-variant">Yesterday</span>
</div>
</div>
<div className="brass-accent bg-surface-container-lowest p-3 rounded shadow-sm opacity-80">
<p className="text-caption font-label-md text-forest-green mb-1">STATE LOGISTICS OFFICE</p>
<p className="text-body-md font-semibold leading-tight mb-2">Commencement of Road Maintenance in Umuahia Central.</p>
<div className="flex justify-between items-center">
<span className="text-[10px] text-on-surface-variant font-medium">Shared with 18 Media Partners</span>
<span className="text-[10px] text-on-surface-variant">2 days ago</span>
</div>
</div>
</div>
<button className="mt-6 text-on-surface-variant font-label-md text-[12px] flex items-center justify-center gap-2 hover:text-forest-green transition-all">
                        View Statement Archive
                        <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
{/*  Sentiment Analysis & Media Library (Bottom Row)  */}
<div className="col-span-12 lg:col-span-6 card-border bg-white p-6 rounded-xl">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" data-icon="forum">forum</span>
<h3 className="font-headline-md text-[18px] text-slate-gray">Social Sentiment Analysis</h3>
</div>
<select className="bg-surface-container-low border-none rounded text-caption font-label-md py-1">
<option>Platform: All</option>
<option>X (Twitter)</option>
<option>Facebook</option>
<option>Instagram</option>
</select>
</div>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="text-center p-3 bg-green-50 rounded-lg">
<p className="text-headline-md text-forest-green">64%</p>
<p className="text-caption uppercase font-bold text-forest-green opacity-70">Positive</p>
</div>
<div className="text-center p-3 bg-gray-50 rounded-lg">
<p className="text-headline-md text-slate-gray">28%</p>
<p className="text-caption uppercase font-bold text-slate-gray opacity-70">Neutral</p>
</div>
<div className="text-center p-3 bg-red-50 rounded-lg">
<p className="text-headline-md text-eagle-red">8%</p>
<p className="text-caption uppercase font-bold text-eagle-red opacity-70">Negative</p>
</div>
</div>
<div className="space-y-3">
<p className="text-caption font-label-md uppercase text-on-surface-variant mb-2">Trending Themes</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-surface-container border border-outline-variant rounded-full text-caption">#AbiaGrowth</span>
<span className="px-3 py-1 bg-surface-container border border-outline-variant rounded-full text-caption">#RoadReconstruction</span>
<span className="px-3 py-1 bg-surface-container border border-outline-variant rounded-full text-caption">#SmallBizSupport</span>
<span className="px-3 py-1 bg-surface-container border border-outline-variant rounded-full text-caption">#CivilServiceReform</span>
</div>
</div>
</div>
<div className="col-span-12 lg:col-span-6 card-border bg-white rounded-xl overflow-hidden flex">
<div className="w-1/3 relative">
<img className="h-full w-full object-cover" data-alt="A high-end professional camera lens on a tripod, positioned overlooking a modern government press briefing room. The room features elegant wood paneling and a large Abia State seal in the background, bathed in soft, bright lighting to create a clean, modern governance aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB97kIobX3fwUiO70_NByI2csRGx7nbIPmkeqZlbf8qX-IrkINGgD0OvI_oO2ia_1nxOrbVy6swA1WxBkgmBOxg0LLLHc_Bwligli_nKJICXyMlfTEW_IAjP9v-x1SJ1OlZk9k_i2azac-1MFBRtOOSR11balHI2lRVqPMLov4vzEXMyhBTyH2dpnG4u-gunhNIkhdKs830QKxtTNEWZbtkavIU3g3uOPCjAelD4oXlOAp99SySniLS3WA7PoYtt8RSNQg37rQGRIk" />
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-white"></div>
</div>
<div className="w-2/3 p-6 relative">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-forest-green" data-icon="photo_library">photo_library</span>
<h3 className="font-headline-md text-[18px] text-slate-gray">Official Media Library</h3>
</div>
<p className="text-body-md text-on-surface-variant mb-6">Access approved photography, video b-roll, and official branding assets for publication.</p>
<div className="grid grid-cols-2 gap-3 mb-6">
<div className="p-2 border border-outline-variant rounded flex items-center gap-3 hover:bg-surface-container-low cursor-pointer transition-all">
<span className="material-symbols-outlined text-forest-green" data-icon="image">image</span>
<span className="text-caption font-bold">Photos</span>
</div>
<div className="p-2 border border-outline-variant rounded flex items-center gap-3 hover:bg-surface-container-low cursor-pointer transition-all">
<span className="material-symbols-outlined text-eagle-red" data-icon="videocam">videocam</span>
<span className="text-caption font-bold">Videos</span>
</div>
<div className="p-2 border border-outline-variant rounded flex items-center gap-3 hover:bg-surface-container-low cursor-pointer transition-all">
<span className="material-symbols-outlined text-brass-gold" data-icon="description">description</span>
<span className="text-caption font-bold">Brand Kit</span>
</div>
<div className="p-2 border border-outline-variant rounded flex items-center gap-3 hover:bg-surface-container-low cursor-pointer transition-all">
<span className="material-symbols-outlined text-slate-gray" data-icon="archive">archive</span>
<span className="text-caption font-bold">Logos</span>
</div>
</div>
<button className="text-forest-green font-headline-md text-[14px] flex items-center gap-2 group">
                            Launch Full Asset Manager
                            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" data-icon="open_in_new">open_in_new</span>
</button>
</div>
</div>
</div>
</div>
{/*  Footer  */}
<footer className="mt-12 border-t border-outline-variant bg-surface-container py-6">
<div className="max-w-max-width mx-auto px-gutter flex justify-between items-center">
<div className="flex items-center gap-4">
<p className="font-label-md text-label-md font-bold text-slate-gray">Abia One OS</p>
<p className="text-caption text-on-surface-variant">© 2024 Abia State Government | Digital Infrastructure Division</p>
</div>
<div className="flex gap-6">
<a className="text-caption text-on-surface-variant hover:text-forest-green transition-colors" href="#">Privacy Policy</a>
<a className="text-caption text-on-surface-variant hover:text-forest-green transition-colors" href="#">Terms of Service</a>
<a className="text-caption text-on-surface-variant hover:text-forest-green transition-colors" href="/secure-abia">Security Audit</a>
</div>
</div>
</footer>
</main>
{/*  Contextual FAB (Only relevant for core action)  */}
<button className="fixed bottom-8 right-8 bg-forest-green text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform z-50 group">
<span className="material-symbols-outlined text-[28px]" data-icon="post_add" style={{"fontVariationSettings":"'FILL' 1"}}>post_add</span>
<span className="absolute right-16 bg-forest-green text-white px-4 py-2 rounded text-caption font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">New Press Release</span>
</button>


      </div>
    </>
  );
}
