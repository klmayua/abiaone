export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .pulse-emergency {\n            animation: pulse-red 2s infinite;\n        }\n        @keyframes pulse-red {\n            0% { box-shadow: 0 0 0 0 rgba(196, 30, 58, 0.7); }\n            70% { box-shadow: 0 0 0 20px rgba(196, 30, 58, 0); }\n            100% { box-shadow: 0 0 0 0 rgba(196, 30, 58, 0); }\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(8px);\n        }\n        body {\n            background-color: #f6fbf3;\n        }" }} />
  
      {/* Screen markup */}
      <div className="font-body-md text-on-background min-h-screen pb-24">
        
{/*  Top App Bar  */}
<header className="flex justify-between items-center w-full px-margin-mobile h-16 z-50 sticky top-0 bg-surface border-b border-outline-variant">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary" data-icon="menu">menu</span>
<h1 className="font-headline-md text-headline-md-mobile font-bold text-primary">Abia One</h1>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary" data-icon="emergency_share">emergency_share</span>
</div>
</header>
<main className="px-margin-mobile pt-6 space-y-8">
{/*  Emergency SOS Section  */}
<section className="flex flex-col items-center justify-center py-4">
<div className="text-center mb-6">
<h2 className="font-headline-md text-headline-md text-on-background">Secure Abia</h2>
<p className="font-body-md text-on-surface-variant">Immediate response for citizens in danger.</p>
</div>
{/*  SOS BUTTON  */}
<button className="w-64 h-64 rounded-full bg-eagle-red flex flex-col items-center justify-center text-white shadow-xl active:scale-95 transition-all duration-150 pulse-emergency border-8 border-white/20" id="sos-trigger">
<span className="material-symbols-outlined text-6xl mb-2" data-icon="e911_emergency" style={{"fontVariationSettings":"'FILL' 1"}}>e911_emergency</span>
<span className="font-display-lg text-[32px] tracking-widest font-black">SOS</span>
<p className="font-label-md text-white/80 mt-1 uppercase">Hold for 3s</p>
</button>
</section>
{/*  Quick Reporting Grid  */}
<section className="space-y-4">
<h3 className="font-label-md text-on-surface-variant uppercase tracking-wider">Quick Report</h3>
<div className="grid grid-cols-3 gap-3">
<button className="flex flex-col items-center justify-center p-4 bg-white border border-outline-variant rounded-xl hover:bg-surface-variant/50 transition-colors active:scale-95">
<span className="material-symbols-outlined text-secondary text-3xl mb-2" data-icon="traffic">traffic</span>
<span className="font-label-md text-[12px]">Traffic</span>
</button>
<button className="flex flex-col items-center justify-center p-4 bg-white border border-outline-variant rounded-xl hover:bg-surface-variant/50 transition-colors active:scale-95">
<span className="material-symbols-outlined text-eagle-red text-3xl mb-2" data-icon="local_fire_department">local_fire_department</span>
<span className="font-label-md text-[12px]">Fire</span>
</button>
<button className="flex flex-col items-center justify-center p-4 bg-white border border-outline-variant rounded-xl hover:bg-surface-variant/50 transition-colors active:scale-95">
<span className="material-symbols-outlined text-forest-green text-3xl mb-2" data-icon="medical_services">medical_services</span>
<span className="font-label-md text-[12px]">Medical</span>
</button>
</div>
</section>
{/*  Safety Alerts Feed  */}
<section className="space-y-4">
<div className="flex justify-between items-end">
<h3 className="font-label-md text-on-surface-variant uppercase tracking-wider">Safety Alerts</h3>
<span className="font-label-md text-primary text-[12px]">View All</span>
</div>
<div className="space-y-3">
{/*  Alert Card 1  */}
<div className="flex gap-4 p-4 bg-white border border-outline-variant rounded-lg border-l-4 border-l-secondary">
<div className="flex-shrink-0">
<span className="material-symbols-outlined text-secondary" data-icon="warning" style={{"fontVariationSettings":"'FILL' 1"}}>warning</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="font-headline-md text-body-md font-bold text-on-background">Heavy Traffic: Port Harcourt Rd</h4>
<span className="font-caption text-outline">2m ago</span>
</div>
<p className="font-body-md text-on-surface-variant mt-1">Gridlock reported near the Aba main flyover due to stalled vehicle. Expect delays.</p>
</div>
</div>
{/*  Alert Card 2  */}
<div className="flex gap-4 p-4 bg-white border border-outline-variant rounded-lg border-l-4 border-l-eagle-red">
<div className="flex-shrink-0">
<span className="material-symbols-outlined text-eagle-red" data-icon="notifications_active" style={{"fontVariationSettings":"'FILL' 1"}}>notifications_active</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="font-headline-md text-body-md font-bold text-on-background">Weather Warning</h4>
<span className="font-caption text-outline">1h ago</span>
</div>
<p className="font-body-md text-on-surface-variant mt-1">Heavy thunderstorms predicted for Umuahia North. Flash flood risk in low-lying areas.</p>
</div>
</div>
{/*  Alert Card 3  */}
<div className="flex gap-4 p-4 bg-white border border-outline-variant rounded-lg border-l-4 border-l-forest-green">
<div className="flex-shrink-0">
<span className="material-symbols-outlined text-forest-green" data-icon="verified_user" style={{"fontVariationSettings":"'FILL' 1"}}>verified_user</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="font-headline-md text-body-md font-bold text-on-background">Security Checkpoint Clear</h4>
<span className="font-caption text-outline">3h ago</span>
</div>
<p className="font-body-md text-on-surface-variant mt-1">Enugu-Enugu express-way is currently clear and safe for transit. Patrols active.</p>
</div>
</div>
</div>
</section>
{/*  High-Speed Feature Cards  */}
<section className="grid grid-cols-2 gap-4">
<div className="p-5 bg-primary-container text-on-primary-container rounded-xl flex flex-col items-start justify-between min-h-[140px]">
<span className="material-symbols-outlined text-3xl" data-icon="my_location">my_location</span>
<div className="mt-4">
<p className="font-headline-md text-body-md font-bold">Track Unit</p>
<p className="font-caption opacity-80">ETA 05:22</p>
</div>
</div>
<div className="p-5 bg-secondary-container text-on-secondary-container rounded-xl flex flex-col items-start justify-between min-h-[140px]">
<span className="material-symbols-outlined text-3xl" data-icon="shield_with_heart">shield_with_heart</span>
<div className="mt-4">
<p className="font-headline-md text-body-md font-bold">Safe Zones</p>
<p className="font-caption opacity-80">12 near you</p>
</div>
</div>
</section>
{/*  Visual Anchor: Map Preview  */}
<section className="pb-10">
<div className="rounded-xl overflow-hidden border border-outline-variant h-48 relative">
<img className="w-full h-full object-cover grayscale opacity-50" data-alt="A clean, minimalist vector-style map of a metropolitan African city, with structured grid lines and a soft color palette of greens and slates. A prominent red pulsing dot indicates the current emergency location with high-tech data overlays and translucent scanning circles, reflecting a state-of-the-art government security system interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyA9hW2sR7jbuv3wQJ5pGmEwevzhXrqI_IEIAehvJ7P3ELYqKQdYPlz7FgHIBGJyamg8lYqfOky5UqMaITN9h9-_WUImuvfsrMlD2bK6xZyDgb_xNaTVHnvSJxwK81wwT8Vuy66iJycwL2Dvn72Mtq0WhLbYx6WpA7xy9a4qb8zTU1i3aaD_SlswfSXTstLI0CLnYGDpWF7fGhOBfOfwB-8avuO3ITRxiHJGFZNGyvCgV1-Hph95awR2OU3pZhgMy8e6iUgPq2DFE" />
<div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
<div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full border border-outline-variant flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-eagle-red pulse-emergency"></span>
<span className="font-label-md text-[12px] text-on-surface">Umuahia Sector B</span>
</div>
<button className="bg-primary text-white p-2 rounded-full shadow-lg">
<span className="material-symbols-outlined" data-icon="fullscreen">fullscreen</span>
</button>
</div>
</div>
</section>
</main>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface dark:bg-surface-container-highest border-t border-outline-variant shadow-sm rounded-t-full">
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="notifications_active" style={{"fontVariationSettings":"'FILL' 1"}}>notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="apps">apps</span>
<span className="font-label-md text-label-md">Hub</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant p-2 hover:text-primary transition-all duration-200" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-label-md">Profile</span>
</a>
</nav>


      </div>
    </>
  );
}
