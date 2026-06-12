export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body {\n            background-color: #f6fbf3;\n            -webkit-tap-highlight-color: transparent;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 12px;\n        }\n        .scroll-hide::-webkit-scrollbar {\n            display: none;\n        }\n        .active-nav-indicator {\n            position: absolute;\n            bottom: -2px;\n            height: 3px;\n            width: 24px;\n            background-color: currentColor;\n            border-radius: 99px;\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="font-body-md text-on-background pb-24">
        
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-outline-variant">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full max-w-max-width mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" style={{"fontVariationSettings":"'FILL' 1"}}>account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green tracking-tight">ABIA ONE</h1>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95 transition-transform">search</button>
<div className="relative">
<span className="material-symbols-outlined text-forest-green hover:opacity-80 transition-opacity active:scale-95 transition-transform">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-eagle-red rounded-full border-2 border-background"></span>
</div>
</div>
</div>
</header>
<main className="pt-20 px-margin-mobile space-y-6">
{/*  Welcome & Profile Summary  */}
<section className="flex items-center justify-between">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Good Morning, Chidi</h2>
<p className="font-body-md text-on-surface-variant">Umuahia Micro-Entrepreneurs Coop</p>
</div>
<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-forest-green">
<img alt="Profile" className="w-full h-full object-cover" data-alt="A professional portrait of a confident West African male entrepreneur in a modern, sun-lit office setting. He is wearing a clean white shirt and has a warm, trustworthy expression. The background is slightly blurred, showing hints of modern agricultural technology and digital screens, emphasizing a mix of tradition and innovation in a high-utility corporate style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt_GYZwEVM5G2-BetyPo7dX70IubnHV9gUCfSzFR9uUdz6m6D4qmdFJ_x6sr3sxz5xGBxrlokPQ2OLKjKV9r9ZwJq8fkI0qC6DEm95JcYdZWotp4u8P1cj-mGYjJZtTaY0loJXxM80rmIyFJKllec7gqAtU6cl4tLRJNfS_lifV9bEkG2ujXwRRqm1kEcedmNZD9YLN2ZTHmJlw8sNGePTZF_A5qPtRr3SnFt9wF74TCC46ZU3xUgXinZ4_C_C3NwxJT2CSLN8f68"/>
</div>
</section>
{/*  Financial Summary Card (Hero Visual)  */}
<section className="relative overflow-hidden bg-forest-green rounded-xl p-6 text-on-primary shadow-lg">

<div className="relative z-10 space-y-4">
<div className="flex justify-between items-start">
<div>
<p className="font-label-md text-label-md opacity-80 uppercase tracking-wider">Active Loan Balance</p>
<h3 className="font-display-lg text-display-lg mt-1 font-bold">₦450,000.00</h3>
</div>
<span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-caption font-bold">82% REPAID</span>
</div>
<div className="w-full bg-on-primary/20 h-2 rounded-full overflow-hidden">
<div className="bg-secondary-container h-full w-[82%]"></div>
</div>
<div className="flex justify-between items-center pt-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">event_repeat</span>
<span className="font-label-md text-label-md">Next: ₦24,500 on Oct 12</span>
</div>
<button className="bg-state-white text-forest-green px-4 py-2 rounded-lg font-headline-md text-[14px] font-bold shadow-sm active:scale-95 transition-transform">
                        Pay Now
                    </button>
</div>
</div>
</section>
{/*  Quick Actions Bento  */}
<section className="bento-grid">
<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex flex-col justify-between aspect-square active:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-forest-green text-3xl">add_card</span>
<div>
<p className="font-headline-md text-[16px] text-on-surface">New Loan</p>
<p className="font-caption text-on-surface-variant">Apply for MSME credit</p>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex flex-col justify-between aspect-square active:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-brass-gold text-3xl">groups</span>
<div>
<p className="font-headline-md text-[16px] text-on-surface">Cooperative</p>
<p className="font-caption text-on-surface-variant">Manage memberships</p>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex flex-col justify-between aspect-square active:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-eagle-red text-3xl">history</span>
<div>
<p className="font-headline-md text-[16px] text-on-surface">History</p>
<p className="font-caption text-on-surface-variant">Past disbursements</p>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex flex-col justify-between aspect-square active:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-forest-green text-3xl">receipt_long</span>
<div>
<p className="font-headline-md text-[16px] text-on-surface">Tax Portal</p>
<p className="font-caption text-on-surface-variant">Check Abia State dues</p>
</div>
</div>
</section>
{/*  Loan Performance Chart (Asymmetric Layout)  */}
<section className="bg-surface-container-lowest border border-outline-variant p-5 rounded-xl space-y-4">
<div className="flex justify-between items-center">
<h4 className="font-headline-md text-[18px] text-on-surface">Yield Performance</h4>
<div className="flex gap-2">
<span className="w-3 h-3 rounded-full bg-forest-green"></span>
<span className="w-3 h-3 rounded-full bg-outline-variant"></span>
</div>
</div>
<div className="h-48 flex items-end justify-between px-2 gap-2">
{/*  Simple CSS Bar Chart  */}
<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-forest-green/20 rounded-t-sm h-[40%] relative">
<div className="absolute bottom-0 w-full bg-forest-green h-[60%] rounded-t-sm"></div>
</div>
<span className="font-label-md text-[10px]">MAY</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-forest-green/20 rounded-t-sm h-[65%] relative">
<div className="absolute bottom-0 w-full bg-forest-green h-[80%] rounded-t-sm"></div>
</div>
<span className="font-label-md text-[10px]">JUN</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-forest-green/20 rounded-t-sm h-[85%] relative">
<div className="absolute bottom-0 w-full bg-forest-green h-[95%] rounded-t-sm"></div>
</div>
<span className="font-label-md text-[10px]">JUL</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-forest-green/20 rounded-t-sm h-[55%] relative">
<div className="absolute bottom-0 w-full bg-forest-green h-[45%] rounded-t-sm"></div>
</div>
<span className="font-label-md text-[10px]">AUG</span>
</div>
<div className="flex flex-col items-center gap-2 w-full">
<div className="w-full bg-forest-green/20 rounded-t-sm h-[75%] relative">
<div className="absolute bottom-0 w-full bg-forest-green h-[70%] rounded-t-sm"></div>
</div>
<span className="font-label-md text-[10px]">SEP</span>
</div>
</div>
</section>
{/*  Active Memberships (Horizontal Scroll)  */}
<section className="space-y-3">
<div className="flex justify-between items-center">
<h4 className="font-headline-md text-[18px] text-on-surface">Cooperative Hubs</h4>
<button className="text-forest-green font-headline-md text-[14px]">View All</button>
</div>
<div className="flex overflow-x-auto gap-4 scroll-hide pb-2">
{/*  Coop Card 1  */}
<div className="min-w-[280px] bg-surface-container-high border border-outline-variant p-4 rounded-xl flex gap-4">
<div className="w-16 h-16 rounded-lg bg-forest-green flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-3xl">agriculture</span>
</div>
<div className="flex-1">
<p className="font-headline-md text-[16px] text-on-surface">Abia Agro-Tech</p>
<div className="flex items-center gap-1 mt-1">
<span className="w-2 h-2 rounded-full bg-forest-green"></span>
<p className="font-caption text-on-surface-variant">Active Member</p>
</div>
<div className="mt-2 flex justify-between items-center">
<span className="font-label-md text-label-md text-on-surface-variant">Dividends: <b className="text-on-surface">₦12k</b></span>
</div>
</div>
</div>
{/*  Coop Card 2  */}
<div className="min-w-[280px] bg-surface-container-high border border-outline-variant p-4 rounded-xl flex gap-4">
<div className="w-16 h-16 rounded-lg bg-brass-gold flex items-center justify-center text-on-secondary">
<span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
</div>
<div className="flex-1">
<p className="font-headline-md text-[16px] text-on-surface">Aba Leather Hub</p>
<div className="flex items-center gap-1 mt-1">
<span className="w-2 h-2 rounded-full bg-outline-variant"></span>
<p className="font-caption text-on-surface-variant">Pending Approval</p>
</div>
<div className="mt-2 flex justify-between items-center">
<span className="font-label-md text-label-md text-on-surface-variant">Waiting: <b className="text-on-surface">2d</b></span>
</div>
</div>
</div>
</div>
</section>
{/*  Disbursement Timeline  */}
<section className="space-y-4">
<h4 className="font-headline-md text-[18px] text-on-surface">Recent Activity</h4>
<div className="space-y-0 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-outline-variant">
{/*  Timeline Item 1  */}
<div className="flex gap-4 relative py-3">
<div className="w-10 h-10 rounded-full bg-primary-container border-4 border-background z-10 flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container text-[18px]">check</span>
</div>
<div className="flex-1 bg-surface-container-low p-3 rounded-lg border border-outline-variant/30">
<div className="flex justify-between items-start">
<p className="font-headline-md text-[15px] text-on-surface">Repayment Received</p>
<span className="font-label-md text-[12px] text-on-surface-variant">Today</span>
</div>
<p className="font-body-md text-[13px] text-on-surface-variant mt-1">₦24,500 successfully debited from Abia Pay wallet.</p>
</div>
</div>
{/*  Timeline Item 2  */}
<div className="flex gap-4 relative py-3">
<div className="w-10 h-10 rounded-full bg-secondary-container border-4 border-background z-10 flex items-center justify-center">
<span className="material-symbols-outlined text-on-secondary-container text-[18px]">info</span>
</div>
<div className="flex-1 bg-surface-container-low p-3 rounded-lg border border-outline-variant/30">
<div className="flex justify-between items-start">
<p className="font-headline-md text-[15px] text-on-surface">Loan Approved</p>
<span className="font-label-md text-[12px] text-on-surface-variant">24 Sep</span>
</div>
<p className="font-body-md text-[13px] text-on-surface-variant mt-1">Expansion Credit of ₦500,000 approved by Micro-Credit Board.</p>
</div>
</div>
</div>
</section>
</main>
{/*  FAB  */}
<button className="fixed bottom-24 right-6 w-14 h-14 bg-forest-green text-on-primary rounded-full shadow-xl flex items-center justify-center z-40 active:scale-90 transition-transform">
<span className="material-symbols-outlined text-2xl" style={{"fontVariationSettings":"'FILL' 1"}}>add</span>
</button>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-full border-t border-outline-variant bg-surface-container-lowest shadow-sm">
<div className="flex justify-around items-center h-20 w-full px-base pb-safe">
{/*  Active Tab: Dashboard  */}
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
{/*  Inactive: Alerts  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</a>
{/*  Inactive: Hub  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">grid_view</span>
<span className="font-label-md text-label-md">Hub</span>
</a>
{/*  Inactive: Profile  */}
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-md text-label-md">Profile</span>
</a>
</div>
</nav>


      </div>
    </>
  );
}
