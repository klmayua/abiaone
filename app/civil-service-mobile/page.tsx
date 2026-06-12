"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        body {\n            font-family: 'Hanken Grotesk', sans-serif;\n            background-color: #f6fbf3;\n        }\n        .bento-card {\n            border: 1px solid #bec9be;\n            background: #ffffff;\n            transition: transform 0.2s ease, box-shadow 0.2s ease;\n        }\n        .bento-card:active {\n            transform: scale(0.98);\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="text-on-background">
        
{/*  TopAppBar Shell  */}
<header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-outline-variant">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full max-w-max-width mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" data-icon="account_balance">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green tracking-tight">ABIA ONE</h1>
</div>
<button className="hover:opacity-80 transition-opacity active:scale-95 transition-transform">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="notifications">notifications</span>
</button>
</div>
</header>
<main className="pt-20 pb-32 px-margin-mobile max-w-max-width mx-auto">
{/*  Welcome Section  */}
<section className="mb-8">
<p className="font-label-md text-label-md text-forest-green uppercase tracking-widest mb-1">Administrator Dashboard</p>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">Welcome back, Commissioner</h2>
</section>
{/*  KPI Bento Grid  */}
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bento-card p-5 col-span-2 rounded-xl flex flex-col justify-between overflow-hidden relative">
<div className="z-10">
<p className="font-label-md text-label-md text-on-surface-variant mb-1">Statewide Productivity</p>
<h3 className="font-headline-lg-mobile text-headline-lg-mobile text-forest-green">94.2%</h3>
<div className="flex items-center gap-1 text-on-primary-fixed-variant mt-1">
<span className="material-symbols-outlined text-sm" data-icon="trending_up">trending_up</span>
<span className="text-caption font-caption">+2.4% vs last month</span>
</div>
</div>
<div className="absolute right-[-20px] bottom-[-20px] opacity-10">
<span className="material-symbols-outlined text-[120px]" data-icon="monitoring">monitoring</span>
</div>
</div>
<div className="bento-card p-4 rounded-xl">
<p className="font-label-md text-label-md text-on-surface-variant mb-1">Leave Requests</p>
<div className="flex items-end justify-between">
<h3 className="font-headline-md text-headline-md text-eagle-red">12</h3>
<span className="font-caption text-caption text-on-surface-variant">Pending</span>
</div>
</div>
<div className="bento-card p-4 rounded-xl">
<p className="font-label-md text-label-md text-on-surface-variant mb-1">MDA Compliance</p>
<div className="flex items-end justify-between">
<h3 className="font-headline-md text-headline-md text-forest-green">88%</h3>
<span className="font-caption text-caption text-on-surface-variant">Avg</span>
</div>
</div>
</div>
{/*  Official Notice Action  */}
<section className="mb-8">
<div className="bg-forest-green text-on-primary p-6 rounded-xl shadow-lg relative overflow-hidden">
<div className="relative z-10">
<h4 className="font-headline-md text-headline-md mb-2">Publish Official Notice</h4>
<p className="font-body-md text-body-md text-on-primary-container mb-4">Broadcast critical updates to all 24,000 civil service employees instantly.</p>
<button className="bg-secondary-container text-on-secondary-container font-label-md text-label-md py-3 px-6 rounded-lg font-bold flex items-center gap-2 active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="campaign">campaign</span>
                        COMPOSE BROADCAST
                    </button>
</div>
{/*  Subtle Shader Background  */}
<div className="absolute inset-0 opacity-20 pointer-events-none">

</div>
</div>
</section>
{/*  Pending Approvals List  */}
<section className="mb-8">
<div className="flex items-center justify-between mb-4">
<h4 className="font-headline-md text-headline-md">Leave Approvals</h4>
<button className="text-forest-green font-label-md text-label-md flex items-center">
                    View All
                    <span className="material-symbols-outlined text-sm ml-1" data-icon="chevron_right">chevron_right</span>
</button>
</div>
<div className="space-y-3">
{/*  Request Item 1  */}
<div className="bento-card p-4 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant bg-surface-container-high">
<img alt="Officer Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a middle-aged female civil servant with a confident expression, wearing a tailored navy blue suit. The background is a soft-focus government office with warm, natural lighting and institutional green accents. The aesthetic is professional, sharp, and reflects high-level administrative authority." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPGQ8LE5Aawz2Ou6MbtiL3coltMZBm4_4P5ArH57fHOV52C_HA3xLxIIu8TRiSI4Ijj3_yxQcbiZRl6P1_NFpn3uV0VHHLSh2SFyLbOCyEyKzcpYiOXE-rKwzrWnJNWzYN4Lj-8-owBataajVmfuFhxTH5V3W_kdOv_99fpdNISJAMm19TjsPceagTtpac9IbGWMIyikrYOdf1n4J9BGJh7ifY68V7lIJlU2FWFFi44Jj0wU5B0OG44CHqqJuwXGKzbKLmTT33SXE"/>
</div>
<div>
<p className="font-body-lg text-body-lg font-semibold">Chidi Okafor</p>
<p className="font-caption text-caption text-on-surface-variant">Ministry of Finance • 5 Days</p>
</div>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-error text-error flex items-center justify-center active:bg-error-container">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
<button className="w-10 h-10 rounded-full bg-forest-green text-on-primary flex items-center justify-center active:bg-primary">
<span className="material-symbols-outlined" data-icon="check">check</span>
</button>
</div>
</div>
{/*  Request Item 2  */}
<div className="bento-card p-4 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant bg-surface-container-high">
<img alt="Officer Profile" className="w-full h-full object-cover" data-alt="A portrait of a male administrative officer in his late 30s, wearing a crisp white dress shirt and spectacles. He is smiling warmly in a bright, modern light-mode office setting. The composition uses high-key lighting to emphasize transparency and modern governance within the Abia State Civil Service." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwAFPMpDszy63qJV563SiDLUwHHcjs2PZHtvRI5KhmV_DS0aVjUgiu-_BpJ3Xl4gAOlXrNKsh-ZTLQH7qnGzP9LYFYi2_JaPY6RWDH1C5nJTvoMUP7AOnBNzGjZjU7UXQTFw3PgcrKYgg5qSGfCr0Ir8ue-JiPEtrs7SL6UfvEgaxDM_4buO10HYmUupjnFqDgp8B9f2s0Av9zL6INqSbKRbgy6dxI0VPPfQnLuKdCcqBjqiorfNghanACGg9hMx5e2tFjFlv2Y-E"/>
</div>
<div>
<p className="font-body-lg text-body-lg font-semibold">Bolanle Adeyemi</p>
<p className="font-caption text-caption text-on-surface-variant">Health Services • 14 Days</p>
</div>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-error text-error flex items-center justify-center active:bg-error-container">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
<button className="w-10 h-10 rounded-full bg-forest-green text-on-primary flex items-center justify-center active:bg-primary">
<span className="material-symbols-outlined" data-icon="check">check</span>
</button>
</div>
</div>
</div>
</section>
{/*  MDA Performance Chart Placeholder  */}
<section className="mb-8">
<h4 className="font-headline-md text-headline-md mb-4">MDA Performance Matrix</h4>
<div className="bento-card p-6 rounded-xl min-h-[280px] relative overflow-hidden flex flex-col justify-end">
<div className="absolute top-6 left-6 z-10">
<div className="flex items-center gap-2 mb-2">
<span className="w-3 h-3 bg-forest-green rounded-full"></span>
<span className="font-label-md text-label-md">Revenue Collection</span>
</div>
<div className="flex items-center gap-2">
<span className="w-3 h-3 bg-brass-gold rounded-full"></span>
<span className="font-label-md text-label-md">Project Delivery</span>
</div>
</div>
<div className="h-40 w-full flex items-end gap-3 px-2">
<div className="flex-1 bg-surface-container-high rounded-t-lg relative group">
<div className="absolute bottom-0 w-full bg-forest-green rounded-t-lg" style={{"height":"65%"}}></div>
<div className="absolute bottom-0 w-1/2 left-1/4 bg-brass-gold rounded-t-lg" style={{"height":"40%"}}></div>
<span className="absolute -bottom-6 left-0 w-full text-center font-caption text-caption">MoW</span>
</div>
<div className="flex-1 bg-surface-container-high rounded-t-lg relative group">
<div className="absolute bottom-0 w-full bg-forest-green rounded-t-lg" style={{"height":"85%"}}></div>
<div className="absolute bottom-0 w-1/2 left-1/4 bg-brass-gold rounded-t-lg" style={{"height":"70%"}}></div>
<span className="absolute -bottom-6 left-0 w-full text-center font-caption text-caption">MoE</span>
</div>
<div className="flex-1 bg-surface-container-high rounded-t-lg relative group">
<div className="absolute bottom-0 w-full bg-forest-green rounded-t-lg" style={{"height":"45%"}}></div>
<div className="absolute bottom-0 w-1/2 left-1/4 bg-brass-gold rounded-t-lg" style={{"height":"55%"}}></div>
<span className="absolute -bottom-6 left-0 w-full text-center font-caption text-caption">MoH</span>
</div>
<div className="flex-1 bg-surface-container-high rounded-t-lg relative group">
<div className="absolute bottom-0 w-full bg-forest-green rounded-t-lg" style={{"height":"95%"}}></div>
<div className="absolute bottom-0 w-1/2 left-1/4 bg-brass-gold rounded-t-lg" style={{"height":"90%"}}></div>
<span className="absolute -bottom-6 left-0 w-full text-center font-caption text-caption">MoA</span>
</div>
</div>
<div className="mt-10 pt-4 border-t border-outline-variant">
<p className="font-body-md text-body-md text-on-surface-variant">Top Performer: Ministry of Agriculture</p>
</div>
</div>
</section>
</main>
{/*  BottomNavBar Shell  */}
<nav className="fixed bottom-0 left-0 w-full z-50 bg-surface-container-lowest border-t border-outline-variant shadow-sm rounded-t-full">
<div className="flex justify-around items-center h-20 w-full px-base pb-safe">
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90 transition-transform duration-200" href="/home-mobile">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
<span className="font-label-md text-label-md">Hub</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-label-md">Profile</span>
</a>
</div>
</nav>


      </div>
    </>
  );
}
