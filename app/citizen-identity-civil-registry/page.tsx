"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { font-family: 'Hanken Grotesk', sans-serif; }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .card-accent-gold {\n            position: relative;\n        }\n        .card-accent-gold::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 4px;\n            height: 24px;\n            background-color: #D4AF37;\n            border-radius: 0 4px 4px 0;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface min-h-screen flex">
        
{/*  SideNavBar (The Anchor)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant z-50">
<div className="p-6">
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep">ABIA ONE</h1>
<p className="font-label-md text-label-md text-on-surface-variant/70 mt-1 uppercase tracking-widest">Modern Governance OS</p>
</div>
<nav className="flex-1 mt-4 px-2 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg mx-2" href="/economic-transformation">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-body-md text-body-md">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg mx-2 translate-x-1 duration-150" href="/serve-abia">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
<span className="font-body-md text-body-md">Digital Government</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg mx-2" href="/local-governance">
<span className="material-symbols-outlined" data-icon="vptree">mitre</span>
<span className="font-body-md text-body-md">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 transition-all rounded-lg mx-2" href="/secure-abia">
<span className="material-symbols-outlined" data-icon="security">security</span>
<span className="font-body-md text-body-md">Public Trust</span>
</a>
</nav>
<div className="p-4 border-t border-outline-variant space-y-1">
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="help">help</span>
<span className="font-label-sm text-label-sm">Support</span>
</a>
<button className="w-full mt-4 bg-primary text-on-primary py-3 rounded-lg font-label-md text-label-md hover:opacity-90 transition-opacity">
                Citizen Feedback
            </button>
</div>
</aside>
{/*  Main Canvas  */}
<main className="flex-1 lg:ml-64 flex flex-col min-h-screen">
{/*  TopAppBar  */}
<header className="fixed top-0 right-0 left-0 lg:left-64 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant h-16 flex items-center justify-between px-6">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined lg:hidden" data-icon="menu">menu</span>
<nav className="hidden md:flex gap-6 items-center">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/economic-transformation">Economy</a>
<a className="font-label-md text-label-md text-primary border-b-2 border-brass-accent pb-1" href="/serve-abia">Digital Gov</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/local-governance">Governance</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="/secure-abia">Security</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 bg-eagle-red/10 text-eagle-red px-4 py-2 rounded font-label-md text-label-md border border-eagle-red/20">
<span className="material-symbols-outlined text-sm" data-icon="emergency_home">emergency_home</span>
                    Emergency
                </button>
<button className="bg-forest-green text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md shadow-sm">
                    Citizen Portal
                </button>
<div className="h-10 w-10 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdBwroHZEkfcx4Gqiq7pTA-agK4KrepWtKV-zAp15d-yFhQmLd9b_MKaQN809A4fpzZcfXiyOeR8281cf51-hhenTCNd0dOIqi6Us_OqaQJ7qc15PU_9D17u-vecbUyPJp2l2CcTwWpZQvBzbUiQMXSHRvDwuZDuGA0BA5FuudmTOS6AH8847dhhUyW0IPIZ4FkrxWhgBhZY9nXy-fzEP34eciGsB9_-BxFEdb-RT4w6sf2Mn--l60va9yKKiT4gbtaLl70aZVLcQ" />
</div>
</div>
</header>
{/*  Content Area  */}
<div className="mt-16 p-6 md:p-10 max-w-7xl mx-auto w-full flex-1">
{/*  Page Header  */}
<div className="mb-10">
<h2 className="font-headline-lg text-headline-lg text-forest-deep">Citizen Identity &amp; Civil Registry</h2>
<p className="text-on-surface-variant font-body-lg text-body-lg mt-2">Manage your sovereign digital residency, vital records, and state verification services.</p>
</div>
{/*  Bento Grid Content  */}
<div className="bento-grid">
{/*  Digital Residency Dashboard (Main Feature)  */}
<section className="col-span-12 lg:col-span-8 bg-surface-container-lowest border border-outline-variant p-6 rounded-xl overflow-hidden relative group shadow-sm">
<div className="flex flex-col md:flex-row gap-8">
<div className="flex-1">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md text-forest-deep flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="badge">badge</span>
                                    Digital Residency Card
                                </h3>
<span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Verified</span>
</div>
<div className="space-y-6">
<div className="grid grid-cols-2 gap-4">
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Full Legal Name</p>
<p className="font-body-lg text-body-lg font-semibold">Chidi Nnamdi Kanu</p>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Residency ID</p>
<p className="font-label-md text-label-md font-bold tracking-tighter">ABI-774-0092-221</p>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Issue Date</p>
<p className="font-body-md text-body-md">January 14, 2024</p>
</div>
<div>
<p className="font-label-md text-label-md text-on-surface-variant">Linked NIN</p>
<p className="font-body-md text-body-md">********3221</p>
</div>
</div>
<div className="flex gap-3">
<button className="bg-forest-green text-on-primary px-6 py-2 rounded font-label-md text-label-md flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="download">download</span> Download e-ID
                                    </button>
<button className="border border-brass-gold text-secondary px-6 py-2 rounded font-label-md text-label-md">
                                        Renew Residency
                                    </button>
</div>
</div>
</div>
<div className="w-full md:w-64 bg-surface-container border border-outline-variant rounded-lg p-4 flex flex-col items-center justify-center relative overflow-hidden">

<div className="w-32 h-32 bg-white rounded-lg p-2 border border-outline-variant relative z-10 mb-4">
<img alt="Identity Portrait" className="w-full h-full object-cover rounded shadow-inner" data-alt="A professional, close-up identification portrait of a confident West African man with clean-shaven hair, looking directly at the camera. The lighting is soft and flat as used in official state documents, set against a light grey professional studio background. The style is clear, sharp, and institutional, conveying a sense of citizenship and official digital identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4P4EMBFWbHYjRG-HhMofg6Sb3aHMvlMW9c6lRoNHW08_1KxevUKpuHRYDdrGL6ugYBUMIzxvP09tB0m2iXFq3pT8LL83VVO-OOhtvyjnUSY-vK6YnkWjUUixc2C831dgZhEmksJ4xVTopgdzmav5ruyXguwSkYIn27HgEZEL_BNhA_hW36O9-KZXEt8KNxMiXXxV1X-_CmaxoWvDBRS7QblnxfKiu4u47vrPCzXxyh6mBUSG2V_Kh5cKxBgDfMWpe4i5LHiEZxNA" />
</div>
<div className="text-center relative z-10">
<span className="material-symbols-outlined text-4xl text-forest-green mb-1" data-icon="qr_code_2">qr_code_2</span>
<p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">State Verification Link</p>
</div>
</div>
</div>
</section>
{/*  Service Authentication Gateway  */}
<section className="col-span-12 lg:col-span-4 bg-forest-deep text-on-primary p-6 rounded-xl border border-outline shadow-md flex flex-col justify-between">
<div>
<h3 className="font-headline-md text-headline-md mb-2">Service Gateway</h3>
<p className="text-primary-fixed-dim/80 font-body-md mb-6">Seamlessly access social benefits and government grants through state-verified biometrics.</p>
<div className="space-y-3">
<div className="bg-white/10 p-3 rounded flex items-center gap-3 border border-white/5">
<span className="material-symbols-outlined text-brass-gold" data-icon="check_circle" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<span className="font-body-md text-body-md">Agricultural Grant Eligibility</span>
</div>
<div className="bg-white/10 p-3 rounded flex items-center gap-3 border border-white/5">
<span className="material-symbols-outlined text-brass-gold" data-icon="check_circle" style={{"fontVariationSettings":"'FILL' 1"}}>check_circle</span>
<span className="font-body-md text-body-md">State Health Insurance (ABIA-CARE)</span>
</div>
<div className="bg-white/10 p-3 rounded flex items-center gap-3 border border-white/5 opacity-60">
<span className="material-symbols-outlined text-slate-400" data-icon="pending" style={{"fontVariationSettings":"'FILL' 1"}}>pending</span>
<span className="font-body-md text-body-md">Public Transport Subsidy</span>
</div>
</div>
</div>
<button className="w-full bg-brass-gold text-forest-green py-3 mt-6 rounded font-label-md text-label-md hover:bg-white transition-colors">
                        Re-Verify Identity
                    </button>
</section>
{/*  Vital Statistics Records  */}
<section className="col-span-12 md:col-span-7 bg-surface-container-lowest border border-outline-variant p-6 rounded-xl shadow-sm card-accent-gold">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md text-forest-deep">Vital Statistics Records</h3>
<button className="text-primary font-label-md text-label-md hover:underline">View All Records</button>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="text-left border-b border-outline-variant">
<th className="pb-3 font-label-md text-label-md text-on-surface-variant">Record Type</th>
<th className="pb-3 font-label-md text-label-md text-on-surface-variant">Reference No.</th>
<th className="pb-3 font-label-md text-label-md text-on-surface-variant">Status</th>
<th className="pb-3 font-label-md text-label-md text-on-surface-variant">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr>
<td className="py-4 font-body-md text-body-md">Birth Registration</td>
<td className="py-4 font-label-md text-label-md text-on-surface-variant">BR-2023-9941</td>
<td className="py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">Approved</span></td>
<td className="py-4"><span className="material-symbols-outlined text-forest-green cursor-pointer" data-icon="visibility">visibility</span></td>
</tr>
<tr>
<td className="py-4 font-body-md text-body-md">Death Registry (Kin)</td>
<td className="py-4 font-label-md text-label-md text-on-surface-variant">DR-2024-1102</td>
<td className="py-4"><span className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">Processing</span></td>
<td className="py-4"><span className="material-symbols-outlined text-forest-green cursor-pointer" data-icon="info">info</span></td>
</tr>
<tr>
<td className="py-4 font-body-md text-body-md">Change of Name</td>
<td className="py-4 font-label-md text-label-md text-on-surface-variant">CN-2022-8837</td>
<td className="py-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold uppercase tracking-tighter">Certified</span></td>
<td className="py-4"><span className="material-symbols-outlined text-forest-green cursor-pointer" data-icon="visibility">visibility</span></td>
</tr>
</tbody>
</table>
</div>
<div className="mt-6 flex gap-4">
<button className="flex-1 border border-outline text-on-surface px-4 py-3 rounded flex items-center justify-center gap-2 font-label-md text-label-md hover:bg-surface-container">
<span className="material-symbols-outlined" data-icon="add_circle">add_circle</span> Register Birth
                        </button>
<button className="flex-1 border border-outline text-on-surface px-4 py-3 rounded flex items-center justify-center gap-2 font-label-md text-label-md hover:bg-surface-container">
<span className="material-symbols-outlined" data-icon="history_edu">history_edu</span> File Death Report
                        </button>
</div>
</section>
{/*  Integration Status  */}
<section className="col-span-12 md:col-span-5 flex flex-col gap-6">
<div className="bg-surface-container-high p-6 rounded-xl border border-outline-variant flex-1">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-white rounded flex items-center justify-center border border-outline-variant">
<span className="material-symbols-outlined text-forest-green" data-icon="hub">hub</span>
</div>
<div>
<h4 className="font-body-lg text-body-lg font-bold">NIN Integration</h4>
<p className="text-sm text-on-surface-variant">Federal Sync: Last updated 2h ago</p>
</div>
</div>
<div className="w-full bg-outline-variant/30 h-2 rounded-full mb-4 overflow-hidden">
<div className="bg-forest-green h-full w-[94%]"></div>
</div>
<p className="font-caption text-caption text-on-surface-variant italic">94% Data consistency across Abia &amp; National databases.</p>
</div>
<div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="h-24 bg-surface-variant relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-forest-deep/30 text-5xl" data-icon="fingerprint">fingerprint</span>
</div>
</div>
<div className="p-4">
<h4 className="font-label-md text-label-md font-bold mb-1">State Biometrics</h4>
<p className="font-body-md text-body-md text-on-surface-variant">Registered fingerprints and facial mapping are up to date. Used for instant service authentication.</p>
<a className="mt-4 block text-forest-green font-label-md text-label-md font-bold flex items-center gap-1 group" href="#">
                                Update Biometrics <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</section>
</div>
</div>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto border-t border-outline-variant py-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
<div className="max-w-xs">
<h2 className="font-headline-lg text-headline-lg text-forest-deep font-bold mb-4">ABIA ONE</h2>
<p className="font-body-md text-body-md text-on-surface-variant">The unified digital foundation for the Government of Abia State, powering citizen services and transparent governance for a better future.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
<div className="space-y-3">
<p className="font-label-caps text-label-caps text-on-surface font-bold">Services</p>
<ul className="space-y-2">
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/invest-in-aba">Invest Abia</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/serve-abia">Serve Abia</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/build-abia">Build Abia</a></li>
</ul>
</div>
<div className="space-y-3">
<p className="font-label-caps text-label-caps text-on-surface font-bold">Privacy &amp; Help</p>
<ul className="space-y-2">
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="#">Privacy Policy</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="#">Contact Us</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-accent hover:underline decoration-brass-accent transition-colors" href="/open-abia">Open Abia</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="font-body-md text-body-md text-on-surface-variant">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-on-surface-variant hover:text-forest-green cursor-pointer" data-icon="facebook">face_nod</span>
<span className="material-symbols-outlined text-on-surface-variant hover:text-forest-green cursor-pointer" data-icon="public">public</span>
<span className="material-symbols-outlined text-on-surface-variant hover:text-forest-green cursor-pointer" data-icon="alternate_email">alternate_email</span>
</div>
</div>
</footer>
</main>
{/*  Mobile Bottom Navigation (Platform & Layout Anchor)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-md border-t border-outline-variant flex justify-around py-3 px-2 z-50">
<a className="flex flex-col items-center gap-1 text-on-surface-variant" href="/">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="text-[10px] font-bold">Home</span>
</a>
<a className="flex flex-col items-center gap-1 text-primary" href="/citizen-identity-civil-registry">
<span className="material-symbols-outlined" data-icon="badge" style={{"fontVariationSettings":"'FILL' 1"}}>badge</span>
<span className="text-[10px] font-bold">Identity</span>
</a>
<a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
<span className="material-symbols-outlined" data-icon="description">description</span>
<span className="text-[10px] font-bold">Records</span>
</a>
<a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="text-[10px] font-bold">Profile</span>
</a>
</nav>


      </div>
    </>
  );
}
