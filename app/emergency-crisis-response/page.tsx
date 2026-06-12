export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .status-pulse {\n            animation: pulse-red 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n        }\n        @keyframes pulse-red {\n            0%, 100% { opacity: 1; }\n            50% { opacity: .5; }\n        }\n        .glass-panel {\n            backdrop-filter: blur(8px);\n            -webkit-backdrop-filter: blur(8px);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 dark:bg-forest-deep/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-4">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep dark:text-primary-fixed">ABIA ONE</span>
<div className="hidden md:flex gap-6 ml-8">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Economy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Digital Gov</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Governance</a>
<a className="font-label-caps text-label-caps text-primary border-b-2 border-brass-gold pb-1 transition-colors" href="#">Security</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="bg-error px-4 py-2 text-white font-label-caps text-label-caps rounded-lg hover:opacity-90 transition-all flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">emergency</span> Emergency
            </button>
<div className="h-10 w-10 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant">
<img alt="User Profile" data-alt="Close-up professional headshot of a government official with a focused expression, set against a clean, neutral background. The lighting is crisp and cinematic, reinforcing a sense of institutional authority and modern corporate leadership. The overall aesthetic is high-end, featuring a cool-toned professional color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGEVmn35bWLVoU3PsF9gTF0Nz5eAVS5nI8agEXl3g0Wv0_MReF5VDDxDrd7764Afdp-B-oBPtl0W8ze_QT7D4N0ZAJI0O-yleDbpbVf5KtgEPRYIHIP_6yoDxm9GaEGbm_4Zd637GMQjz0OO8ax6BoIE77Cb7UoDGsi1xgyz0aleDPOmxjfbN6wv3Ac4DO_q73WB5l8vC3-wunrJP6DuJzZoAy2z-gxUZ1OSZu2LliyUCB24vqHRk_pXPv_btp5yUGeKa4Va1tXgg" />
</div>
</div>
</header>
{/*  Sidebar (Desktop)  */}
<aside className="hidden lg:flex flex-col h-screen w-64 fixed left-0 top-0 pt-20 bg-surface-container-low border-r border-outline-variant z-40">
<div className="px-6 py-4">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 bg-primary-container rounded flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" style={{"fontVariationSettings":"'FILL' 1"}}>security</span>
</div>
<div>
<h2 className="font-headline-md text-headline-md text-primary leading-none">Security</h2>
<p className="text-caption text-on-surface-variant">Crisis Command</p>
</div>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg transition-all font-body-md" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
<span>Live Dispatch</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all font-body-md" href="#">
<span className="material-symbols-outlined">map</span>
<span>Territory Map</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all font-body-md" href="#">
<span className="material-symbols-outlined">ambulance</span>
<span>SEMA Units</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all font-body-md" href="#">
<span className="material-symbols-outlined">notification_important</span>
<span>Alert History</span>
</a>
</nav>
</div>
<div className="mt-auto px-6 py-8 border-t border-outline-variant">
<button className="w-full flex items-center justify-center gap-2 bg-forest-green text-white py-3 rounded hover:brightness-110 transition-all font-label-caps text-label-caps">
<span className="material-symbols-outlined text-[18px]">feedback</span> Citizen Feedback
            </button>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="lg:pl-64 pt-20 min-h-screen pb-12">
<div className="max-w-container-max-width mx-auto px-margin-mobile md:px-margin-desktop space-y-gutter">
{/*  Command Center Header  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<div className="flex items-center gap-2 text-error font-label-md mb-2">
<span className="status-pulse w-2 h-2 rounded-full bg-error"></span>
                        LIVE COMMAND CENTER
                    </div>
<h1 className="font-headline-lg text-headline-lg text-primary">Crisis Response &amp; Public Safety</h1>
</div>
<div className="flex gap-3">
<div className="bg-surface-container px-4 py-2 border border-outline-variant rounded flex items-center gap-2">
<span className="material-symbols-outlined text-primary">schedule</span>
<span className="font-label-md" id="current-time">18:38:37 WAT</span>
</div>
<div className="bg-surface-container px-4 py-2 border border-outline-variant rounded flex items-center gap-2">
<span className="material-symbols-outlined text-primary">location_on</span>
<span className="font-label-md">Umuahia, Abia</span>
</div>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-12 gap-6">
{/*  Real-time Incident Map (8 Cols)  */}
<div className="col-span-12 lg:col-span-8 bg-white border border-outline-variant rounded shadow-sm overflow-hidden min-h-[500px] flex flex-col">
<div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
<div className="flex items-center gap-2">
<span className="w-1 h-4 bg-brass-gold"></span>
<h3 className="font-headline-md text-[18px] text-primary">Real-time Incident Map</h3>
</div>
<div className="flex gap-2">
<span className="flex items-center gap-1 text-caption text-on-surface-variant bg-surface-container-highest px-2 py-1 rounded">
<span className="w-2 h-2 rounded-full bg-error"></span> Fire
                            </span>
<span className="flex items-center gap-1 text-caption text-on-surface-variant bg-surface-container-highest px-2 py-1 rounded">
<span className="w-2 h-2 rounded-full bg-primary"></span> Police
                            </span>
<span className="flex items-center gap-1 text-caption text-on-surface-variant bg-surface-container-highest px-2 py-1 rounded">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Medical
                            </span>
</div>
</div>
<div className="relative flex-grow">
{/*  Simulated Map with data-location  */}
<div className="absolute inset-0 bg-slate-100 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover grayscale opacity-50" data-alt="A detailed, high-resolution satellite map view of an urban landscape featuring structured city blocks, major roads, and green spaces. The visual style is data-centric with a professional, cool-toned aesthetic using dark blues and greys. Transparent overlays of technical grid lines and glowing data points suggest a sophisticated digital surveillance and dispatch interface." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdmzB41HYAiDlwEswGLd6uwZ-DM0rWP7YOOIGtQRgfPHAim2Cirn_CTROl7ti6j3bfQrW5Jnr5WP3XVPvUhEADS5LvZWzJDKvMvfNwSP90EeHcfe-E4R2hKqumhGYM2ybVSao7ap_wv0CudUlvKdBqGC_ahF1e_V_IIN7ck51KtkcyoeKPHvocUE20lemOLq1B5ozvZNP0rlICy1kQR8b2d6QpFJZm5J4Y-BCmFhXMfK5jglVy_dUyrYT6ZtSj9JeWhRuG_6pUUyw" />
{/*  Overlay UI elements  */}
<div className="absolute top-1/2 left-1/3 p-3 bg-error/90 text-white rounded-lg shadow-lg flex items-center gap-2 glass-panel border border-white/20">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>local_fire_department</span>
<div className="text-[10px] leading-tight">
<p className="font-bold">STRUCTURAL FIRE</p>
<p>Aba North Market</p>
</div>
</div>
<div className="absolute top-1/4 right-1/4 p-3 bg-primary/90 text-white rounded-lg shadow-lg flex items-center gap-2 glass-panel border border-white/20">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>local_police</span>
<div className="text-[10px] leading-tight">
<p className="font-bold">TRAFFIC ACCIDENT</p>
<p>Umuahia Express</p>
</div>
</div>
</div>
<div className="absolute bottom-4 right-4 flex flex-col gap-2">
<button className="w-10 h-10 bg-white border border-outline-variant rounded flex items-center justify-center hover:bg-surface-container transition-colors shadow-sm"><span className="material-symbols-outlined">add</span></button>
<button className="w-10 h-10 bg-white border border-outline-variant rounded flex items-center justify-center hover:bg-surface-container transition-colors shadow-sm"><span className="material-symbols-outlined">remove</span></button>
</div>
</div>
</div>
{/*  Live Dispatch Feed (4 Cols)  */}
<div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
<div className="bg-white border border-outline-variant rounded p-6 shadow-sm flex-grow">
<div className="flex items-center gap-2 mb-4">
<span className="w-1 h-4 bg-brass-gold"></span>
<h3 className="font-headline-md text-[18px] text-primary">911/112 Dispatch Feed</h3>
</div>
<div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
{/*  Incident Item  */}
<div className="p-3 border-l-4 border-error bg-error-container/20 rounded flex flex-col gap-1">
<div className="flex justify-between items-start">
<span className="font-label-caps text-[10px] text-error font-bold">CRITICAL • 2 MIN AGO</span>
<span className="material-symbols-outlined text-error text-[16px]">more_vert</span>
</div>
<h4 className="font-body-lg text-sm font-semibold">Fire Outbreak - Warehouse</h4>
<p className="text-caption text-on-surface-variant">Industrial Area, Aba. Heavy smoke reported.</p>
<div className="mt-2 flex gap-2">
<span className="text-[10px] bg-white border border-error/20 text-error px-2 py-0.5 rounded">FIRE TRUCK #42</span>
<span className="text-[10px] bg-white border border-error/20 text-error px-2 py-0.5 rounded">POLICE PATROL #12</span>
</div>
</div>
{/*  Incident Item  */}
<div className="p-3 border-l-4 border-secondary bg-secondary-container/10 rounded flex flex-col gap-1">
<div className="flex justify-between items-start">
<span className="font-label-caps text-[10px] text-secondary font-bold">PENDING • 8 MIN AGO</span>
</div>
<h4 className="font-body-lg text-sm font-semibold">Medical Emergency</h4>
<p className="text-caption text-on-surface-variant">Private Residence, Umuahia. Cardiac arrest.</p>
<div className="mt-2 flex gap-2">
<span className="text-[10px] bg-white border border-secondary/20 text-secondary px-2 py-0.5 rounded">AMBULANCE #09</span>
</div>
</div>
{/*  Incident Item  */}
<div className="p-3 border-l-4 border-primary bg-primary-container/5 rounded flex flex-col gap-1">
<div className="flex justify-between items-start">
<span className="font-label-caps text-[10px] text-primary font-bold">MONITORING • 15 MIN AGO</span>
</div>
<h4 className="font-body-lg text-sm font-semibold">Public Disturbance</h4>
<p className="text-caption text-on-surface-variant">Ariaria Market Junction. Police on scene.</p>
</div>
</div>
</div>
</div>
{/*  Resource Deployment Dashboard (12 Cols)  */}
<div className="col-span-12">
<div className="bg-white border border-outline-variant rounded p-6 shadow-sm">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<span className="w-1 h-4 bg-brass-gold"></span>
<h3 className="font-headline-md text-[18px] text-primary">Resource Deployment Status</h3>
</div>
<button className="text-primary font-label-caps text-label-caps flex items-center gap-1 hover:underline">
<span className="material-symbols-outlined text-[18px]">open_in_new</span> FULL INVENTORY
                            </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Resource Card  */}
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant flex items-center gap-4">
<div className="w-12 h-12 rounded bg-primary-container/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[32px]">local_police</span>
</div>
<div>
<p className="text-caption text-on-surface-variant">Police Units</p>
<div className="flex items-baseline gap-2">
<h4 className="font-headline-lg text-2xl text-primary">124</h4>
<span className="text-[10px] text-green-600 font-bold uppercase">82% Available</span>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full mt-1">
<div className="bg-primary h-1.5 rounded-full" style={{"width":"82%"}}></div>
</div>
</div>
</div>
{/*  Resource Card  */}
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant flex items-center gap-4">
<div className="w-12 h-12 rounded bg-error-container/10 flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[32px]">ambulance</span>
</div>
<div>
<p className="text-caption text-on-surface-variant">Ambulances</p>
<div className="flex items-baseline gap-2">
<h4 className="font-headline-lg text-2xl text-error">48</h4>
<span className="text-[10px] text-error font-bold uppercase">14% Critical</span>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full mt-1">
<div className="bg-error h-1.5 rounded-full" style={{"width":"86%"}}></div>
</div>
</div>
</div>
{/*  Resource Card  */}
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant flex items-center gap-4">
<div className="w-12 h-12 rounded bg-secondary-container/10 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[32px]">fire_truck</span>
</div>
<div>
<p className="text-caption text-on-surface-variant">Fire Engines</p>
<div className="flex items-baseline gap-2">
<h4 className="font-headline-lg text-2xl text-secondary">32</h4>
<span className="text-[10px] text-primary font-bold uppercase">Deployed: 12</span>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full mt-1">
<div className="bg-secondary h-1.5 rounded-full" style={{"width":"37%"}}></div>
</div>
</div>
</div>
{/*  Resource Card  */}
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant flex items-center gap-4">
<div className="w-12 h-12 rounded bg-brass-gold/10 flex items-center justify-center text-brass-gold">
<span className="material-symbols-outlined text-[32px]">volunteer_activism</span>
</div>
<div>
<p className="text-caption text-on-surface-variant">SEMA Responders</p>
<div className="flex items-baseline gap-2">
<h4 className="font-headline-lg text-2xl text-forest-green">210</h4>
<span className="text-[10px] text-primary font-bold uppercase">Ready</span>
</div>
<div className="w-full bg-surface-variant h-1.5 rounded-full mt-1">
<div className="bg-forest-green h-1.5 rounded-full" style={{"width":"95%"}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Community Safety Guidelines (6 Cols)  */}
<div className="col-span-12 lg:col-span-6 bg-white border border-outline-variant rounded p-6 shadow-sm overflow-hidden relative">
<div className="flex items-center gap-2 mb-6">
<span className="w-1 h-4 bg-brass-gold"></span>
<h3 className="font-headline-md text-[18px] text-primary">Community Safety Guidelines</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex gap-3">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>flood</span>
<div>
<h5 className="font-semibold text-sm">Flood Awareness</h5>
<p className="text-[12px] text-on-surface-variant">Move to higher ground if levels rise near Aba river.</p>
</div>
</div>
<div className="flex gap-3">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>health_and_safety</span>
<div>
<h5 className="font-semibold text-sm">First Aid Protocols</h5>
<p className="text-[12px] text-on-surface-variant">Basic CPR and trauma management guidelines for citizens.</p>
</div>
</div>
<div className="flex gap-3">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>shield</span>
<div>
<h5 className="font-semibold text-sm">Neighborhood Watch</h5>
<p className="text-[12px] text-on-surface-variant">Report suspicious activities via the ABIA ONE portal.</p>
</div>
</div>
<div className="flex gap-3">
<span className="material-symbols-outlined text-primary" style={{"fontVariationSettings":"'FILL' 1"}}>phone_in_talk</span>
<div>
<h5 className="font-semibold text-sm">Emergency Hotlines</h5>
<p className="text-[12px] text-on-surface-variant">Keep '911' and '112' saved in your speed dial.</p>
</div>
</div>
</div>
</div>
{/*  SEMA Alerts (6 Cols)  */}
<div className="col-span-12 lg:col-span-6 bg-forest-deep text-white border border-outline rounded p-6 shadow-sm relative overflow-hidden">

<div className="relative z-10">
<div className="flex items-center gap-2 mb-6">
<span className="w-1 h-4 bg-brass-gold"></span>
<h3 className="font-headline-md text-[18px]">SEMA Public Alerts</h3>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-white/10 rounded border border-white/10">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-brass-gold">warning</span>
<div>
<p className="text-sm font-bold">WEATHER ADVISORY</p>
<p className="text-[12px] text-surface-variant">Heavy rain expected in Ohafia region within 6 hrs.</p>
</div>
</div>
<button className="bg-brass-gold text-forest-deep px-3 py-1 rounded text-[10px] font-bold">BROADCAST</button>
</div>
<div className="flex items-center justify-between p-3 bg-white/10 rounded border border-white/10 opacity-60">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined">info</span>
<div>
<p className="text-sm font-bold">ROAD CLEARANCE</p>
<p className="text-[12px] text-surface-variant">Debris cleared from Ikot-Ekpene road. Traffic flowing.</p>
</div>
</div>
<span className="text-[10px] italic">Completed</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest dark:bg-forest-deep py-12 border-t border-outline-variant">
<div className="max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
<div className="space-y-4 max-w-sm">
<span className="font-headline-lg text-headline-lg text-forest-deep dark:text-primary-fixed block">ABIA ONE</span>
<p className="font-body-md text-on-surface-variant">© 2024 Government of Abia State, Nigeria. Built for the Future. Ensuring public safety through digital excellence.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4">
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Invest Abia</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Serve Abia</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Build Abia</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Open Abia</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Us</a>
</div>
</div>
</footer>


      </div>
    </>
  );
}
