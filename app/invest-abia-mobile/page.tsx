export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .hero-gradient {\n            background: linear-gradient(135deg, rgba(0, 77, 40, 0.95) 0%, rgba(0, 104, 56, 0.8) 100%);\n        }\n        .card-border {\n            border: 1px solid #E2E8F0;\n        }\n        .brass-accent {\n            border-left: 4px solid #D4AF37;\n        }\n        body {\n            background-color: #f6fbf3;\n            color: #181d19;\n            overflow-x: hidden;\n        }" }} />
  
      {/* Screen markup */}
      <div className="pb-24">
        
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 bg-background dark:bg-on-background border-b border-outline-variant dark:border-slate-gray">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full max-w-max-width mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green dark:text-primary-fixed-dim" data-icon="account_balance">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green dark:text-primary-fixed-dim tracking-tight">ABIA ONE</h1>
</div>
<button className="text-forest-green dark:text-primary-fixed-dim hover:opacity-80 transition-opacity active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</div>
</header>
<main className="mt-16">
{/*  Hero Section  */}
<section className="relative h-[320px] w-full overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover" data-alt="A professional aerial view of a modern industrial park with clean architectural lines, featuring green landscape integration and state-of-the-art logistics infrastructure. The lighting is bright and clear, reflecting a modern corporate governance aesthetic with Forest Green and Brass Gold accents subtly present in the environment. High-fidelity and authoritative mood." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0U-f0HOToSDqt3xpPityJ6dWSzWhEbVT25nYh2W0AqEWLGKMn7Zbo6z1WRVRE7eMkgDEvG5yfixvEh1zKNzX6Co1i73LX0ffZg7sPYeSYYBL8-iaQ6R2Xbqi6Bodhao6M0UDbmSiIi0spFc9Vh4d3reyC1nwfza8wrgpZ8Fr3GU-ANHl02JoCVVBygo_-K3F-G7dYY1pIX6nox4ZIIIOvCV6dsb-pbcLznXLDU0RjYqv9BG2IhTglnh9w-_JH9y_9UjB9rQl634A" />
<div className="absolute inset-0 hero-gradient"></div>
</div>
<div className="relative z-10 px-margin-mobile pt-12 text-state-white">
<h2 className="font-headline-lg-mobile text-headline-lg-mobile font-bold mb-2">Sovereign Investment Gateway</h2>
<p className="font-body-md text-body-md opacity-90 max-w-xs mb-6">Securing the future through strategic industrial partnerships and capital excellence.</p>
<div className="flex gap-3">
<button className="bg-forest-green text-state-white px-6 py-2 rounded-lg font-medium font-body-md shadow-lg border border-primary">Explore Portfolio</button>
<button className="bg-transparent border border-brass-gold text-brass-gold px-6 py-2 rounded-lg font-medium font-body-md">Diaspora Portal</button>
</div>
</div>
</section>
{/*  Key Metrics Bento Layout  */}
<section className="px-margin-mobile -mt-8 relative z-20 grid grid-cols-2 gap-3">
<div className="bg-state-white card-border p-4 rounded-xl flex flex-col justify-between">
<span className="text-on-surface-variant font-label-md text-caption uppercase tracking-wider">Aba Hub Growth</span>
<div className="flex items-end gap-2 mt-2">
<span className="text-forest-green font-headline-md text-headline-md">+14.2%</span>
<span className="material-symbols-outlined text-forest-green text-sm pb-1" data-icon="trending_up">trending_up</span>
</div>
</div>
<div className="bg-state-white card-border p-4 rounded-xl flex flex-col justify-between">
<span className="text-on-surface-variant font-label-md text-caption uppercase tracking-wider">Active Projects</span>
<div className="flex items-end gap-2 mt-2">
<span className="text-on-surface font-headline-md text-headline-md">24</span>
<span className="material-symbols-outlined text-brass-gold text-sm pb-1" data-icon="factory">factory</span>
</div>
</div>
</section>
{/*  Diaspora Bridge  */}
<section className="px-margin-mobile mt-8">
<div className="bg-primary-container text-on-primary-container p-6 rounded-xl relative overflow-hidden">
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md mb-2 flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="public">public</span>
                        Diaspora Bridge
                    </h3>
<p className="font-body-md text-body-md mb-4 text-on-primary-container/90">Direct capital inflow channels for Ndi Abia abroad. Secure, transparent, and high-impact sovereign bonds.</p>
<div className="bg-state-white/10 p-4 rounded-lg border border-state-white/20">
<div className="flex justify-between items-center mb-1">
<span className="font-label-md text-caption">Total Inflow FY24</span>
<span className="font-label-md text-caption font-bold">$12.4M</span>
</div>
<div className="w-full bg-state-white/20 h-1.5 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[65%]"></div>
</div>
</div>
</div>

</div>
</section>
{/*  Industrial Hub Highlights  */}
<section className="px-margin-mobile mt-8">
<div className="flex items-center justify-between mb-4">
<h3 className="font-headline-md text-headline-md text-forest-green brass-accent pl-3">Strategic Hubs</h3>
<span className="text-forest-green font-label-md text-caption cursor-pointer">See All</span>
</div>
<div className="flex flex-col gap-4">
{/*  Leather Hub  */}
<div className="bg-state-white card-border rounded-xl overflow-hidden flex flex-row">
<div className="w-32 h-32 flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="Close up of high-quality brown leather craftsmanship in a professional workshop setting. Warm, directional lighting highlights the textures and fine stitching, embodying institutional excellence and the leather industrial hub of Abia. The atmosphere is productive and artisan-focused, presented in a clean, modern corporate UI style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD-sx4QTbR5rUwHnBk0tK68xgFIMPbIEsNtGFAuYhUIo794lvdd6oKo_uROYxg6IGEEImMtfOPyFziK-F9hzshOp4x89h_zMRgaqF3_tJ98RMo56KJ638FYFDDOvTjrs7sZSbcHDP4klfMGVdkUcC9vBSkA2Ysetf-hq-3sg0B9MqVwxKH7_0EnihaPS5RVdt4ka1mnyZMfaDh0L42FB4VnnzsKa_tL8d-hU0mTNDzc_1pH9N7enXqJJvZrFF2qX-oInQBN0CSyog" />
</div>
<div className="p-4 flex flex-col justify-center">
<span className="bg-secondary-container text-on-secondary-container text-[10px] uppercase font-bold px-2 py-0.5 rounded-full w-fit mb-1">Leather Hub</span>
<h4 className="font-headline-md text-body-lg font-bold">Aria Road Cluster</h4>
<p className="text-on-surface-variant font-body-md text-caption line-clamp-1">Mechanized production lines for global export.</p>
<div className="flex items-center gap-4 mt-2">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm text-forest-green" data-icon="groups">groups</span>
<span className="font-label-md text-[12px]">2.5k Jobs</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm text-brass-gold" data-icon="star">star</span>
<span className="font-label-md text-[12px]">4.8 Rating</span>
</div>
</div>
</div>
</div>
{/*  Garment Hub  */}
<div className="bg-state-white card-border rounded-xl overflow-hidden flex flex-row">
<div className="w-32 h-32 flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="A clean, modern garment factory floor with organized rows of high-end sewing machinery. Bright, white studio lighting creates a professional and efficient atmosphere. Soft focus on the background to highlight the scale of the garment industrial hub. The color palette aligns with the forest green and slate gray of the Abia governance system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg_JEVR6ui9-Hgz85P89PQPkWpkuzXvfB6YcbKmOtHaUZMFujq34_BZNzb386og5xAZStuOpLZ6y2hL1EYZknQFJp1WLuphddFjG0xev3vReV5AmyYcUEAYtPvMW_2AWQpZe4b2T3SCK5NqlFvlm890dtqYjnbh50Tid9BVZd-OvaZncuJxWN8GclGKow7eatGHZBS1CsvN_R9fv5enGJdyXMgakpN82FxDc_iy2fVbsasU3Pdx3jS0cbrToX6C2i_jNTWq-UAM_I" />
</div>
<div className="p-4 flex flex-col justify-center">
<span className="bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] uppercase font-bold px-2 py-0.5 rounded-full w-fit mb-1">Garment Hub</span>
<h4 className="font-headline-md text-body-lg font-bold">Enyimba Fashion Estate</h4>
<p className="text-on-surface-variant font-body-md text-caption line-clamp-1">Automated textile weaving &amp; high-fashion assembly.</p>
<div className="flex items-center gap-4 mt-2">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm text-forest-green" data-icon="groups">groups</span>
<span className="font-label-md text-[12px]">4.1k Jobs</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm text-brass-gold" data-icon="star">star</span>
<span className="font-label-md text-[12px]">4.9 Rating</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Project Pipeline / Global Opportunities  */}
<section className="px-margin-mobile mt-8 mb-8">
<h3 className="font-headline-md text-headline-md text-forest-green brass-accent pl-3 mb-4">Investment Pipeline</h3>
<div className="grid grid-cols-1 gap-4">
<div className="bg-state-white card-border p-5 rounded-xl">
<div className="flex justify-between items-start mb-3">
<div>
<h5 className="font-headline-md text-body-lg text-on-surface">Agro-Processing Zone 1</h5>
<p className="text-on-surface-variant font-body-md text-caption">Palm Oil &amp; Kernel Crushing Facility</p>
</div>
<span className="bg-surface-container-high text-on-surface px-2 py-1 rounded text-[10px] font-bold">STAGE: BIDDING</span>
</div>
<div className="flex items-center justify-between mb-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-state-white bg-slate-gray flex items-center justify-center text-[10px] text-white">UK</div>
<div className="w-8 h-8 rounded-full border-2 border-state-white bg-forest-green flex items-center justify-center text-[10px] text-white">NG</div>
<div className="w-8 h-8 rounded-full border-2 border-state-white bg-brass-gold flex items-center justify-center text-[10px] text-white">CN</div>
</div>
<span className="text-forest-green font-label-md text-[12px]">$45M CapEx</span>
</div>
<button className="w-full bg-forest-green text-state-white py-3 rounded-lg font-bold font-body-md active:scale-[0.98] transition-transform">Download Prospectus</button>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-full shadow-sm border-t border-outline-variant dark:border-slate-gray bg-surface-container-lowest dark:bg-on-background">
<div className="flex justify-around items-center h-20 w-full px-base pb-safe">
{/*  Dashboard Tab (Inactive)  */}
<button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:bg-surface-variant dark:hover:bg-on-surface-variant transition-colors active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</button>
{/*  Hub Tab (Active - Chosen as closest intent for 'Invest Gateway')  */}
<button className="flex flex-col items-center justify-center bg-secondary-container dark:bg-primary-container text-on-secondary-container dark:text-on-primary-container rounded-full px-4 py-1 active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="grid_view" style={{"fontVariationSettings":"'FILL' 1"}}>grid_view</span>
<span className="font-label-md text-label-md">Hub</span>
</button>
{/*  Alerts Tab (Inactive)  */}
<button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:bg-surface-variant dark:hover:bg-on-surface-variant transition-colors active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</button>
{/*  Profile Tab (Inactive)  */}
<button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline-variant px-4 py-1 hover:bg-surface-variant dark:hover:bg-on-surface-variant transition-colors active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-label-md">Profile</span>
</button>
</div>
</nav>
{/*  Contextual FAB (Only for Home/Dashboard context)  */}
<button className="fixed right-6 bottom-24 bg-forest-green text-state-white w-14 h-14 rounded-2xl shadow-xl flex items-center justify-center active:scale-90 transition-transform z-40">
<span className="material-symbols-outlined" data-icon="add_chart">add_chart</span>
</button>


      </div>
    </>
  );
}
