"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        body {\n            -webkit-tap-highlight-color: transparent;\n            font-family: 'Hanken Grotesk', sans-serif;\n            background-color: #f6fbf3;\n        }\n        .card-shadow {\n            box-shadow: 0 1px 3px rgba(0,0,0,0.05);\n        }\n        .glass-nav {\n            backdrop-filter: blur(8px);\n            background-color: rgba(255, 255, 255, 0.9);\n        }\n        .transit-gradient {\n            background: linear-gradient(135deg, #006838 0%, #004d28 100%);\n        }\n        .transit-card-inner {\n            background-image: radial-gradient(circle at 100% 0%, rgba(212, 175, 55, 0.2) 0%, transparent 50%),\n                              radial-gradient(circle at 0% 100%, rgba(212, 175, 55, 0.1) 0%, transparent 50%);\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="text-on-background pb-24">
        
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-outline-variant">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full max-w-max-width mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" data-icon="account_balance">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green tracking-tight">ABIA ONE</h1>
</div>
<button className="material-symbols-outlined text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95 transition-transform" data-icon="notifications">notifications</button>
</div>
</header>
<main className="mt-20 px-margin-mobile space-y-6">
{/*  Welcome Section  */}
<section className="mt-4">
<h2 className="font-headline-md text-headline-md text-forest-green">Good Morning, Citizen</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Your daily commute is 4 minutes faster today.</p>
</section>
{/*  Abia Transit Card Digital Wallet (Bento Main)  */}
<section className="bg-forest-green rounded-xl p-6 text-on-primary overflow-hidden relative card-shadow transit-gradient">
<div className="absolute top-0 right-0 p-4 opacity-20">
<span className="material-symbols-outlined text-[120px]" data-icon="contactless">contactless</span>
</div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-8">
<div>
<p className="font-label-md text-label-md uppercase tracking-wider opacity-80">Transit Card Balance</p>
<h3 className="font-display-lg text-display-lg mt-1">₦12,450.00</h3>
</div>
<div className="bg-brass-gold/20 p-2 rounded-lg border border-brass-gold/30">
<span className="material-symbols-outlined text-brass-gold" data-icon="payments">payments</span>
</div>
</div>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-2">
<span className="font-label-md text-label-md">**** 5682</span>
</div>
<button className="bg-state-white text-forest-green px-4 py-2 rounded-lg font-label-md text-label-md font-bold active:scale-95 transition-transform">
                        TOP UP
                    </button>
</div>
</div>
</section>
{/*  Quick Actions Grid  */}
<section className="grid grid-cols-2 gap-4">
<div className="bg-surface-container rounded-xl p-4 border border-outline-variant flex flex-col items-center justify-center text-center gap-2 active:scale-95 transition-transform">
<div className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center mb-1">
<span className="material-symbols-outlined text-on-primary-container" data-icon="map">map</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">Trip Planner</span>
</div>
<div className="bg-surface-container rounded-xl p-4 border border-outline-variant flex flex-col items-center justify-center text-center gap-2 active:scale-95 transition-transform">
<div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center mb-1">
<span className="material-symbols-outlined text-on-secondary-container" data-icon="report">report</span>
</div>
<span className="font-label-md text-label-md text-on-surface font-bold">Report Issue</span>
</div>
</section>
{/*  Real-time Alerts Section  */}
<section className="space-y-4">
<div className="flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-on-surface">Live Road Conditions</h3>
<span className="text-error font-label-md text-label-md flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]" data-icon="fiber_manual_record" style={{"fontVariationSettings":"'FILL' 1"}}>fiber_manual_record</span>
                    LIVE
                </span>
</div>
<div className="space-y-3">
{/*  Condition Card 1  */}
<div className="bg-state-white p-4 rounded-xl border border-outline-variant flex gap-4 items-start card-shadow">
<div className="bg-error-container text-error p-2 rounded-lg">
<span className="material-symbols-outlined" data-icon="construction">construction</span>
</div>
<div className="flex-1">
<div className="flex justify-between">
<h4 className="font-body-md text-body-md font-bold text-on-surface">Aba-Owerri Road</h4>
<span className="font-caption text-caption text-on-surface-variant">2m ago</span>
</div>
<p className="font-caption text-caption text-on-surface-variant mt-1">Heavy congestion due to ongoing road rehabilitation. Expect 15min delay.</p>
<div className="mt-3 flex gap-2">
<span className="px-2 py-0.5 bg-error-container text-error rounded-full text-[10px] font-bold uppercase tracking-tighter">Congested</span>
<span className="px-2 py-0.5 bg-surface-variant text-on-surface-variant rounded-full text-[10px] font-bold uppercase tracking-tighter">Route 04</span>
</div>
</div>
</div>
{/*  Condition Card 2  */}
<div className="bg-state-white p-4 rounded-xl border border-outline-variant flex gap-4 items-start card-shadow">
<div className="bg-surface-container-low text-forest-green p-2 rounded-lg">
<span className="material-symbols-outlined" data-icon="check_circle">check_circle</span>
</div>
<div className="flex-1">
<div className="flex justify-between">
<h4 className="font-body-md text-body-md font-bold text-on-surface">Umuahia City Center</h4>
<span className="font-caption text-caption text-on-surface-variant">15m ago</span>
</div>
<p className="font-caption text-caption text-on-surface-variant mt-1">Traffic flowing smoothly. All transit terminals operating normally.</p>
<div className="mt-3 flex gap-2">
<span className="px-2 py-0.5 bg-surface-container-low text-forest-green rounded-full text-[10px] font-bold uppercase tracking-tighter">Clear</span>
</div>
</div>
</div>
</div>
</section>
{/*  Public Transit Schedule  */}
<section className="space-y-4">
<h3 className="font-headline-md text-headline-md text-on-surface">Upcoming Arrivals</h3>
<div className="bg-state-white rounded-xl border border-outline-variant overflow-hidden card-shadow">
<div className="divide-y divide-outline-variant">
<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-primary-container text-on-primary-container rounded flex items-center justify-center font-bold font-label-md">B1</div>
<div>
<p className="font-body-md text-body-md font-bold">Rapid Bus: Ariaria Exp</p>
<p className="font-caption text-caption text-on-surface-variant">Terminal 2 • Gate A</p>
</div>
</div>
<div className="text-right">
<p className="font-label-md text-label-md text-forest-green font-bold">4 MINS</p>
<p className="font-caption text-caption text-on-surface-variant line-through">08:30 AM</p>
</div>
</div>
<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-on-tertiary-fixed-variant text-on-tertiary rounded flex items-center justify-center font-bold font-label-md">T8</div>
<div>
<p className="font-body-md text-body-md font-bold">Light Rail: Hub North</p>
<p className="font-caption text-caption text-on-surface-variant">Central Station • Platform 3</p>
</div>
</div>
<div className="text-right">
<p className="font-label-md text-label-md text-on-surface font-bold">12 MINS</p>
<p className="font-caption text-caption text-on-surface-variant">08:45 AM</p>
</div>
</div>
</div>
<button className="w-full py-3 bg-surface-container text-forest-green font-label-md text-label-md font-bold active:bg-surface-variant transition-colors">
                    VIEW FULL SCHEDULE
                </button>
</div>
</section>
{/*  Map Snippet (Visual Placeholder)  */}
<section className="space-y-4">
<div className="h-48 w-full rounded-xl overflow-hidden relative border border-outline-variant">
<img alt="Traffic Map" className="w-full h-full object-cover" data-alt="A highly detailed and modern digital transport map of a bustling city center at dawn. The map displays clean, minimalist cartography with glowing green and amber traffic lines indicating flow. The visual style is sleek and professional, using a sophisticated color palette of deep forest greens, slate grays, and highlights of brass gold to emphasize key landmarks. The lighting is soft and ambient, suggesting a high-tech governance dashboard environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAnafJFom5semxDNcKP0MMsKyWzq-g7PrcYou8dD1hE6QY9JXrRjxwPfT95x314_II0qP_8U1HjpjW8jbmL46qlI5xhjRyKXdYNZ_8VSCwo2lzGml69kGvTHJ3vhV5xtxtX8Nm2h3iCSlXzNO6W3gPqGOR89o52mcmTjdotW1jNlZV6yqPcv5SsdvI33ogbsQsV3WX21Q_VHWrHU6K2Me3R0kDKWNiKayLyb-myEDb2Am8f2RJ4QjYYI5oeJ1Zj3XvZ8v0DDWFEZo"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
<span className="bg-state-white px-3 py-1 rounded-full text-[10px] font-bold text-on-background shadow-lg">CURRENT LOCATION: ABA HUB</span>
<button className="bg-forest-green text-state-white p-2 rounded-full shadow-lg active:scale-90 transition-transform">
<span className="material-symbols-outlined text-[20px]" data-icon="my_location">my_location</span>
</button>
</div>
</div>
</section>
</main>
{/*  FAB for Contextual Action (Reporting)  */}
<button className="fixed bottom-24 right-margin-mobile w-14 h-14 bg-forest-green text-on-primary rounded-xl shadow-xl flex items-center justify-center active:scale-95 transition-transform z-40">
<span className="material-symbols-outlined" data-icon="add_road" style={{"fontVariationSettings":"'wght' 600"}}>add_road</span>
</button>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-full bg-surface-container-lowest border-t border-outline-variant shadow-sm glass-nav">
<div className="flex justify-around items-center h-20 w-full px-base pb-safe">
{/*  Active Tab: Dashboard (Mapping to 'Hub' for Mobility)  */}
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90 transition-transform duration-200" href="/home-mobile">
<span className="material-symbols-outlined" data-icon="dashboard" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
<span className="font-label-md text-[10px] uppercase tracking-tighter font-bold">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-[10px] uppercase tracking-tighter">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
<span className="font-label-md text-[10px] uppercase tracking-tighter">Hub</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-[10px] uppercase tracking-tighter">Profile</span>
</a>
</div>
</nav>


      </div>
    </>
  );
}
