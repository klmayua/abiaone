export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            display: inline-block;\n            line-height: 1;\n            text-transform: none;\n            letter-spacing: normal;\n            word-wrap: normal;\n            white-space: nowrap;\n            direction: ltr;\n        }\n        .bento-inner-shadow {\n            box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);\n        }\n        .sos-pulse {\n            animation: pulse-red 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n        }\n        @keyframes pulse-red {\n            0%, 100% { opacity: 1; transform: scale(1); }\n            50% { opacity: .7; transform: scale(1.05); }\n        }\n        ::-webkit-scrollbar { width: 4px; }\n        ::-webkit-scrollbar-track { background: transparent; }\n        ::-webkit-scrollbar-thumb { background: #bec9be; border-radius: 10px; }\n        .map-mesh {\n            background-image: radial-gradient(#006838 0.5px, transparent 0.5px);\n            background-size: 16px 16px;\n            opacity: 0.1;\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
        
{/*  Top Navigation Anchor  */}
<header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-outline-variant">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full max-w-max-width mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" data-icon="account_balance">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green tracking-tight">ABIA ONE</h1>
</div>
<div className="flex items-center gap-4">
<button className="relative hover:opacity-80 transition-opacity active:scale-95">
<span className="material-symbols-outlined text-forest-green" data-icon="notifications">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-eagle-red rounded-full"></span>
</button>
</div>
</div>
</header>
<main className="pt-16 pb-24 min-h-screen px-margin-mobile flex flex-col gap-4">
{/*  Live Incident Map Section  */}
<section className="mt-4 rounded-xl border border-outline-variant overflow-hidden relative h-64 bg-surface-container shadow-sm">
<div className="absolute inset-0 z-0 grayscale contrast-125 opacity-50 bg-cover bg-center" data-location="Umuahia, Abia State" style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuCY491SoMsqt1ajTkOFNgpLIfXSr2ypFHmV9VOmr4yHLztBBnwYBX_brD4fo8EE4mPwwPzReiF_qxzkSAxiCJ8pMpp6o3MNgi_euNBvkBCPm3YjicF2u-mHSSTK1XIxskB7Tc64PtxvmHdQLJeQzpq1wuW9cI7O1JpvKaY4q6QutEroWw2k7pMUFctmWvzHFz68lTfZ1yXEJZJ2hWgTdTpeXChBv3qtsTfTGulqZTe4cpR0S5GKN4qacXxPXYlTYi4nAlyWaL1WGg0')"}}>
</div>
<div className="absolute inset-0 z-10 map-mesh"></div>
{/*  Heat Zones & Markers (Simulated UI)  */}
<div className="absolute inset-0 z-20 pointer-events-none">
{/*  Heat zone  */}
<div className="absolute top-1/3 left-1/4 w-32 h-32 bg-eagle-red opacity-20 rounded-full blur-3xl animate-pulse"></div>
{/*  SOS Marker  */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="sos-pulse bg-eagle-red text-white p-2 rounded-full shadow-lg">
<span className="material-symbols-outlined text-xl" data-icon="emergency" style={{"fontVariationSettings":"'FILL' 1"}}>emergency</span>
</div>
<span className="mt-1 bg-eagle-red text-white text-[10px] px-1 font-label-md rounded border border-white/20">SOS: 402</span>
</div>
</div>
<div className="absolute top-4 left-4 z-30">
<div className="bg-white/90 backdrop-blur-md border border-outline-variant rounded-lg p-2 flex flex-col gap-1">
<span className="font-label-md text-[10px] text-on-surface-variant uppercase tracking-widest">Live Feed</span>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-eagle-red animate-ping"></div>
<span className="font-headline-md text-sm text-forest-green">UMUAHIA CENTRAL</span>
</div>
</div>
</div>
<div className="absolute bottom-4 right-4 z-30 flex flex-col gap-2">
<button className="bg-white/95 p-2 rounded shadow-sm border border-outline-variant active:scale-95 transition-transform">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="my_location">my_location</span>
</button>
<button className="bg-white/95 p-2 rounded shadow-sm border border-outline-variant active:scale-95 transition-transform">
<span className="material-symbols-outlined text-on-surface-variant" data-icon="layers">layers</span>
</button>
</div>
</section>
{/*  Command Statistics Grid (Bento Lite)  */}
<div className="grid grid-cols-2 gap-3">
<div className="bg-surface-container-low border border-outline-variant rounded-xl p-4 flex flex-col justify-between">
<span className="material-symbols-outlined text-eagle-red" data-icon="crisis_alert">crisis_alert</span>
<div className="mt-4">
<h4 className="font-label-md text-[11px] text-on-surface-variant uppercase">Critical Incidents</h4>
<p className="font-headline-lg-mobile text-eagle-red">03</p>
</div>
</div>
<div className="bg-surface-container-low border border-outline-variant rounded-xl p-4 flex flex-col justify-between">
<span className="material-symbols-outlined text-forest-green" data-icon="shield">shield</span>
<div className="mt-4">
<h4 className="font-label-md text-[11px] text-on-surface-variant uppercase">Active Units</h4>
<p className="font-headline-lg-mobile text-forest-green">142</p>
</div>
</div>
</div>
{/*  Verified Field Reports Feed  */}
<section className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<h2 className="font-headline-md text-lg text-on-surface flex items-center gap-2">
<span className="material-symbols-outlined text-brass-gold" data-icon="fact_check">fact_check</span>
                    Field Reports
                </h2>
<button className="text-forest-green font-label-md text-xs hover:underline uppercase tracking-wider">Filter</button>
</div>
<div className="flex flex-col gap-3">
{/*  Report Card: SOS  */}
<article className="bg-eagle-red/5 border-l-4 border-eagle-red rounded-lg p-4 flex gap-4 transition-all hover:bg-eagle-red/10 border border-outline-variant/30">
<div className="flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-eagle-red/20 flex items-center justify-center text-eagle-red">
<span className="material-symbols-outlined" data-icon="emergency_share" style={{"fontVariationSettings":"'FILL' 1"}}>emergency_share</span>
</div>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-1">
<span className="font-label-md text-[10px] px-2 py-0.5 bg-eagle-red text-white rounded-full">PRIORITY: SOS</span>
<span className="font-caption text-on-surface-variant">09:41 AM</span>
</div>
<h3 className="font-headline-md text-sm text-on-surface">Armed Disturbance reported</h3>
<p className="font-body-md text-sm text-on-surface-variant mt-1">Umuahia-Enugu Expressway. Grid coordinates 5.52, 7.48. Multiple callers reporting roadblocks.</p>
<div className="mt-3 flex gap-2">
<button className="bg-eagle-red text-white text-[11px] font-label-md px-3 py-1 rounded shadow-sm hover:opacity-90 active:scale-95">DEPLOY RAPID RESPONSE</button>
<button className="bg-transparent border border-eagle-red text-eagle-red text-[11px] font-label-md px-3 py-1 rounded hover:bg-eagle-red/5 active:scale-95">DETAILS</button>
</div>
</div>
</article>
{/*  Report Card: Standard  */}
<article className="bg-surface-container-lowest border border-outline-variant rounded-lg p-4 flex gap-4 transition-all hover:shadow-md">
<div className="flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined" data-icon="minor_crash">minor_crash</span>
</div>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-1">
<span className="font-label-md text-[10px] px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded-full">TRAFFIC</span>
<span className="font-caption text-on-surface-variant">09:12 AM</span>
</div>
<h3 className="font-headline-md text-sm text-on-surface">Vehicle Collision - Tower Jn</h3>
<p className="font-body-md text-sm text-on-surface-variant mt-1">Minor accident blocking two lanes. Traffic wardens on scene. Towing unit requested.</p>
<div className="mt-3 flex items-center gap-4 border-t border-outline-variant/30 pt-3">
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-sm" data-icon="attachment">attachment</span>
<span className="font-caption">3 Images</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined text-sm" data-icon="verified_user">verified_user</span>
<span className="font-caption">Vetted by Officer 04</span>
</div>
</div>
</div>
</article>
</div>
</section>
{/*  Communication Hub - Quick Actions  */}
<section className="mt-4 p-5 bg-primary-container text-on-primary-container rounded-2xl relative overflow-hidden">
{/*  Decorative Seal background  */}
<span className="material-symbols-outlined absolute -bottom-8 -right-8 text-white/10 text-[180px] pointer-events-none" data-icon="account_balance">account_balance</span>
<h2 className="font-headline-md text-lg flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="hub">hub</span>
                Coordination Hub
            </h2>
<p className="font-body-md text-sm text-on-primary-container/80 mt-1 max-w-[80%]">Secure channel for inter-agency tactical data exchange.</p>
<div className="grid grid-cols-3 gap-3 mt-6">
<button className="bg-white/10 hover:bg-white/20 p-3 rounded-xl flex flex-col items-center gap-2 border border-white/10 transition-colors backdrop-blur-sm">
<span className="material-symbols-outlined text-white" data-icon="radio">radio</span>
<span className="font-label-md text-[10px] uppercase text-white">Comms</span>
</button>
<button className="bg-white/10 hover:bg-white/20 p-3 rounded-xl flex flex-col items-center gap-2 border border-white/10 transition-colors backdrop-blur-sm">
<span className="material-symbols-outlined text-white" data-icon="group_work">group_work</span>
<span className="font-label-md text-[10px] uppercase text-white">Agencies</span>
</button>
<button className="bg-white/10 hover:bg-white/20 p-3 rounded-xl flex flex-col items-center gap-2 border border-white/10 transition-colors backdrop-blur-sm">
<span className="material-symbols-outlined text-white" data-icon="local_hospital">local_hospital</span>
<span className="font-label-md text-[10px] uppercase text-white">Med-Evac</span>
</button>
</div>
</section>
</main>
{/*  Bottom Navigation Hub  */}
<nav className="fixed bottom-0 left-0 w-full z-50 bg-surface-container-lowest border-t border-outline-variant shadow-sm rounded-t-full">
<div className="flex justify-around items-center h-20 w-full px-base pb-safe">
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors px-4 py-1 active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md mt-1">Dashboard</span>
</button>
<button className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="notifications_active" style={{"fontVariationSettings":"'FILL' 1"}}>notifications_active</span>
<span className="font-label-md text-label-md mt-1">Alerts</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors px-4 py-1 active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
<span className="font-label-md text-label-md mt-1">Hub</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant transition-colors px-4 py-1 active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-label-md mt-1">Profile</span>
</button>
</div>
</nav>
{/*  Floating Action Button for Emergency Broadcast (Contextual)  */}
<button className="fixed bottom-24 right-6 w-14 h-14 bg-eagle-red text-white rounded-full shadow-2xl flex items-center justify-center z-40 active:scale-90 transition-transform hover:brightness-110">
<span className="material-symbols-outlined text-2xl" data-icon="broadcast_on_home" style={{"fontVariationSettings":"'FILL' 1"}}>broadcast_on_home</span>
</button>


      </div>
    </>
  );
}
