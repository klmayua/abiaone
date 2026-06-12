"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(8px);\n            border: 1px solid rgba(226, 232, 240, 0.8);\n        }\n        .ashia-card-gradient {\n            background: linear-gradient(135deg, #004d28 0%, #006838 100%);\n        }\n        ::-webkit-scrollbar {\n            display: none;\n        }\n        body {\n            -ms-overflow-style: none;\n            scrollbar-width: none;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background min-h-screen pb-24">
        
{/*  Top App Bar  */}
<header className="bg-surface dark:bg-surface-dim border-b border-outline-variant dark:border-outline docked full-width top-0 flex justify-between items-center w-full px-margin-mobile h-16 z-50 sticky">
<div className="flex items-center gap-4">
<button className="hover:bg-surface-variant/50 transition-colors p-2 rounded-full active:scale-95 duration-150">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed">menu</span>
</button>
<h1 className="font-headline-md text-headline-md-mobile font-bold text-primary dark:text-primary-fixed">Abia One</h1>
</div>
<div className="flex items-center gap-2">
<button className="hover:bg-surface-variant/50 transition-colors p-2 rounded-full active:scale-95 duration-150">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed">emergency_share</span>
</button>
</div>
</header>
<main className="px-margin-mobile pt-6 space-y-6">
{/*  Public Health Alert Section (Asymmetric Banner)  */}
<section className="relative overflow-hidden bg-eagle-red rounded-xl p-4 text-white shadow-lg">
<div className="flex items-start justify-between">
<div className="z-10 max-w-[70%]">
<span className="font-label-md text-label-md bg-white/20 px-2 py-0.5 rounded text-[10px] uppercase tracking-widest">Public Health Alert</span>
<h2 className="font-headline-md text-headline-md-mobile mt-2 leading-tight">Seasonal Flu Vaccination Campaign</h2>
<p className="font-body-md text-body-md opacity-90 mt-1">Visit any ASHIA-accredited center for free immunization.</p>
</div>
<div className="z-10">
<span className="material-symbols-outlined text-4xl opacity-80" style={{"fontVariationSettings":"'FILL' 1"}}>campaign</span>
</div>
</div>
{/*  Decorative circle  */}
<div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full"></div>
</section>
{/*  ASHIA Membership Card (Modern Glassmorphism)  */}
<section>
<h3 className="font-label-md text-label-md text-outline uppercase mb-3">Membership Identity</h3>
<div className="ashia-card-gradient relative h-52 rounded-2xl p-6 text-white shadow-xl overflow-hidden">
<div className="flex justify-between items-start mb-8">
<div>
<p className="font-label-md text-label-md opacity-70">ASHIA Insurance</p>
<p className="font-headline-md text-headline-md-mobile">Abia State Health</p>
</div>
<div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
<span className="material-symbols-outlined text-3xl">health_metrics</span>
</div>
</div>
<div className="space-y-1">
<h4 className="font-headline-md text-headline-md-mobile tracking-wider">CHIDI K. OKORO</h4>
<p className="font-label-md text-label-md opacity-80">AB-HLTH-294-0129</p>
</div>
<div className="absolute bottom-4 right-6 flex items-center gap-2">
<div className="text-right">
<p className="font-caption text-caption opacity-60">Status</p>
<p className="font-label-md text-label-md text-secondary-fixed font-bold">ACTIVE</p>
</div>
</div>
{/*  Accent Lines  */}
<div className="absolute top-0 right-0 w-24 h-full bg-brass-gold/10 skew-x-12 transform translate-x-12"></div>
</div>
</section>
{/*  Hospital Finder Search (Clinical/Clean)  */}
<section className="space-y-4">
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-12 pr-4 py-4 bg-surface-container-low border border-slate-400 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-body-md text-body-md transition-all shadow-sm" placeholder="Find accredited hospitals near you..." type="text" />
</div>
{/*  Quick Filter Chips  */}
<div className="flex gap-2 overflow-x-auto pb-2">
<button className="flex items-center gap-1 bg-primary text-white px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap shadow-sm">
<span className="material-symbols-outlined text-sm">location_on</span> Nearby
                </button>
<button className="flex items-center gap-1 bg-surface-container-high border border-outline-variant px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap">
<span className="material-symbols-outlined text-sm">emergency</span> 24/7 ER
                </button>
<button className="flex items-center gap-1 bg-surface-container-high border border-outline-variant px-4 py-2 rounded-full font-label-md text-label-md whitespace-nowrap">
<span className="material-symbols-outlined text-sm">medical_services</span> Pharmacy
                </button>
</div>
</section>
{/*  Health Tips & News (Bento Grid Style)  */}
<section>
<div className="flex justify-between items-end mb-4">
<h3 className="font-headline-md text-headline-md-mobile">Wellness Feed</h3>
<a className="font-label-md text-label-md text-primary font-bold" href="#">View All</a>
</div>
<div className="grid grid-cols-2 gap-4">
{/*  Large Tip Card  */}
<div className="col-span-2 bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm flex flex-col">
<div className="h-40 w-full overflow-hidden">
<img alt="Yoga and mindfulness" className="w-full h-full object-cover" data-alt="A serene woman practicing yoga outdoors in a lush, green tropical park during the golden hour of sunset. The lighting is warm and ethereal, casting long soft shadows and emphasizing a calming, clinical wellness aesthetic. The high-quality photograph uses a clean and modern composition with a shallow depth of field, highlighting the peaceful subject against the blurred natural foliage of Abia State's landscape." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfOSUz-B92yLMS2sQljwRNiRgtvj6evDU1IOgIzmfMIKVVZ4fgUD795g129OyOjIx2AFqnoMZMWtqigh6Mpsrmgc8piy8MPNfDE8aJ27vl9g7xpL9f03zNvGFWssXpRwbTRiH3jwxTaC9QEbguMKJTDrWuKJCy4egvcyewevI9UhXGYdvTk1f7oumY-sP7qZHBEupYDIk1SO7LhzIUHoExqGiXqvzyD8JsZtz1xOKPfi7d4hrqAPjvkcny8GyNJPzacU5MYq8Nf28" />
</div>
<div className="p-4">
<span className="text-brass-gold font-bold text-[10px] uppercase tracking-tighter">Daily Habit</span>
<h4 className="font-headline-md text-[18px] leading-tight mt-1">Mindfulness for Civil Servants</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Reduce stress with these 5-minute desk exercises designed for busy professionals.</p>
</div>
</div>
{/*  Small Tip Card 1  */}
<div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant flex flex-col justify-between">
<span className="material-symbols-outlined text-primary mb-2" style={{"fontVariationSettings":"'FILL' 1"}}>water_drop</span>
<div>
<h5 className="font-headline-md text-[16px] leading-tight">Stay Hydrated</h5>
<p className="font-caption text-caption text-on-surface-variant mt-1">Drink 3L daily for better focus.</p>
</div>
</div>
{/*  Small Tip Card 2  */}
<div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant flex flex-col justify-between">
<span className="material-symbols-outlined text-eagle-red mb-2" style={{"fontVariationSettings":"'FILL' 1"}}>favorite</span>
<div>
<h5 className="font-headline-md text-[16px] leading-tight">Heart Check</h5>
<p className="font-caption text-caption text-on-surface-variant mt-1">New clinics opened in Umuahia.</p>
</div>
</div>
</div>
</section>
{/*  ASHIA Stats Card  */}
<section className="bg-surface-container-highest rounded-xl p-5 border border-outline-variant">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
<span className="material-symbols-outlined">receipt_long</span>
</div>
<div className="flex-1">
<h4 className="font-headline-md text-[16px]">Benefit Utilization</h4>
<p className="font-body-md text-body-md text-on-surface-variant">45% of annual cap remaining</p>
</div>
<div className="w-16 h-16 relative">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-outline-variant" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeWidth="4"></circle>
<circle className="text-primary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor" strokeDasharray="175" strokeDashoffset="96" strokeWidth="4"></circle>
</svg>
<span className="absolute inset-0 flex items-center justify-center font-label-md text-[10px]">45%</span>
</div>
</div>
</section>
</main>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface dark:bg-surface-container-highest border-t border-outline-variant dark:border-outline shadow-sm rounded-t-full">
<button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 ease-in-out">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 ease-in-out">
<span className="material-symbols-outlined">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</button>
<button className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 transition-all duration-200 ease-in-out">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>apps</span>
<span className="font-label-md text-label-md">Hub</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 ease-in-out">
<span className="material-symbols-outlined">person</span>
<span className="font-label-md text-label-md">Profile</span>
</button>
</nav>
{/*  Floating Action Button (Health Emergency)  */}
<button className="fixed right-6 bottom-24 w-14 h-14 bg-eagle-red text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform z-40">
<span className="material-symbols-outlined text-3xl">sos</span>
</button>


      </div>
    </>
  );
}
