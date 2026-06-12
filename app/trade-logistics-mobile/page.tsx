export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        body {\n            background-color: #f6fbf3;\n            color: #181d19;\n            overflow-x: hidden;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(8px);\n            border: 1px solid #bec9be;\n        }\n        .custom-scrollbar::-webkit-scrollbar {\n            width: 4px;\n        }\n        .custom-scrollbar::-webkit-scrollbar-track {\n            background: transparent;\n        }\n        .custom-scrollbar::-webkit-scrollbar-thumb {\n            background: #bec9be;\n            border-radius: 10px;\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="font-body-md text-body-md">
        
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-outline-variant">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full max-w-max-width mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" data-icon="account_balance">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green tracking-tight">ABIA ONE</h1>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant">
<span className="material-symbols-outlined text-outline" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-label-md font-label-md w-64" placeholder="Search Gateway Assets..." type="text"/>
</div>
<button className="hover:opacity-80 transition-opacity active:scale-95 transition-transform">
<span className="material-symbols-outlined text-forest-green" data-icon="notifications">notifications</span>
</button>
</div>
</div>
</header>
<main className="pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
{/*  Regional Gateway Strategy Header  */}
<div className="mb-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="font-label-md text-label-md text-secondary uppercase tracking-widest bg-secondary-container/30 px-2 py-1 rounded">Regional Gateway Strategy</span>
<h2 className="font-display-lg text-display-lg mt-2 text-forest-green">Logistics &amp; Trade Hub</h2>
</div>
<div className="flex gap-2">
<div className="flex items-center gap-2 px-4 py-2 bg-state-white border border-outline-variant rounded-lg">
<div className="w-2 h-2 rounded-full bg-forest-green animate-pulse"></div>
<span className="font-label-md text-label-md">LIVE SYSTEM STATUS: OPTIMAL</span>
</div>
</div>
</div>
</div>
{/*  Bento Grid Main Content  */}
<div className="bento-grid">
{/*  Real-time Trade Facilitation Metrics  */}
<div className="col-span-12 lg:col-span-8 glass-card rounded-xl p-6 relative overflow-hidden">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md flex items-center gap-2">
<span className="w-1 h-6 bg-brass-gold"></span>
                        Trade Facilitation Velocity
                    </h3>
<div className="flex gap-4">
<button className="font-label-md text-label-md text-forest-green border-b-2 border-forest-green">Hourly</button>
<button className="font-label-md text-label-md text-outline hover:text-forest-green">Daily</button>
</div>
</div>
<div className="h-64 w-full relative">

{/*  Overlay Grid Simulation  */}
<div className="absolute inset-0 grid grid-cols-6 grid-rows-4 pointer-events-none opacity-20">
<div className="border-r border-b border-outline"></div><div className="border-r border-b border-outline"></div><div className="border-r border-b border-outline"></div><div className="border-r border-b border-outline"></div><div className="border-r border-b border-outline"></div><div className="border-b border-outline"></div>
<div className="border-r border-b border-outline"></div><div className="border-r border-b border-outline"></div><div className="border-r border-b border-outline"></div><div className="border-r border-b border-outline"></div><div className="border-r border-b border-outline"></div><div className="border-b border-outline"></div>
<div className="border-r border-b border-outline"></div><div className="border-r border-b border-outline"></div><div className="border-r border-b border-outline"></div><div className="border-r border-b border-outline"></div><div className="border-r border-b border-outline"></div><div className="border-b border-outline"></div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant">
<p className="font-label-md text-label-md text-outline">Avg. Clearance</p>
<p className="font-headline-md text-headline-md text-forest-green">4.2 Hrs</p>
<p className="text-caption font-caption text-forest-green mt-1">↓ 12% from Oct</p>
</div>
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant">
<p className="font-label-md text-label-md text-outline">Active Containers</p>
<p className="font-headline-md text-headline-md text-forest-green">1,842</p>
<p className="text-caption font-caption text-eagle-red mt-1">↑ 4% Surge</p>
</div>
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant">
<p className="font-label-md text-label-md text-outline">Revenue Flow</p>
<p className="font-headline-md text-headline-md text-forest-green">₦84.2M</p>
<p className="text-caption font-caption text-forest-green mt-1">Within Target</p>
</div>
<div className="bg-surface-container-low p-4 rounded-lg border border-outline-variant">
<p className="font-label-md text-label-md text-outline">Compliance Rate</p>
<p className="font-headline-md text-headline-md text-forest-green">98.4%</p>
<p className="text-caption font-caption text-secondary mt-1">Stable</p>
</div>
</div>
</div>
{/*  Enyimba Economic City Hub Capacity  */}
<div className="col-span-12 md:col-span-6 lg:col-span-4 glass-card rounded-xl p-6 border-l-4 border-l-forest-green">
<h3 className="font-headline-md text-headline-md mb-6">Enyimba Hub Capacity</h3>
<div className="space-y-6">
<div>
<div className="flex justify-between mb-2">
<span className="font-label-md text-label-md text-on-surface">Manufacturing Zone A</span>
<span className="font-label-md text-label-md font-bold">88%</span>
</div>
<div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden">
<div className="bg-forest-green h-full" style={{"width":"88%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="font-label-md text-label-md text-on-surface">Dry Port Staging</span>
<span className="font-label-md text-label-md font-bold">42%</span>
</div>
<div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full" style={{"width":"42%"}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="font-label-md text-label-md text-on-surface">Bonded Warehouse</span>
<span className="font-label-md text-label-md font-bold">65%</span>
</div>
<div className="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden">
<div className="bg-forest-green h-full" style={{"width":"65%"}}></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant">
<img alt="Aerial view of a modern logistics hub" className="w-full h-32 object-cover rounded-lg mb-4" data-alt="A highly detailed aerial photograph of the Enyimba Economic City Hub, showcasing vast organized industrial zones and logistics terminals. The scene is bathed in golden hour sunlight, highlighting the precise geometry of white warehouse roofs and the dark forest green accenting of the administrative buildings. The atmosphere is productive and orderly, representing modern African sovereign infrastructure with a clear, sharp commercial aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGH1FiMmeOzCG2cgvrpQ6m8wq5dV-JtMBI0O9FhvAIYJCxmtECFBV3w_gnAd0WqrA_0fcIjOaujbNlIBDSZzsBeItVVK23GzOpCPafnBNb5in6UhFR6Vbu5yiCafLhs0oo1PpimFjCUjYSh75ucLemZYAPzcs0yknHd5VPkpMH-A1zRdwV79hu3bF0FQ2YcKGMDqN_jLYESs29O4A0wSQM4GnVoQqMSjctOO6vun-4Wva5wtgDo-iv6S3GdbSZozIJFSXelz-uS0Q"/>
<button className="w-full py-3 bg-forest-green text-state-white font-label-md text-label-md rounded-lg hover:opacity-90 transition-all">Expand Capacity Map</button>
</div>
</div>
{/*  Cold Chain Sensor Data  */}
<div className="col-span-12 md:col-span-6 lg:col-span-5 glass-card rounded-xl p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md flex items-center gap-2">
<span className="material-symbols-outlined text-forest-green" data-icon="ac_unit">ac_unit</span>
                        Cold Chain Telemetry
                    </h3>
<span className="px-2 py-1 bg-primary-fixed text-on-primary-fixed font-label-md text-label-md rounded">Active Sensors: 412</span>
</div>
<div className="space-y-4 max-h-80 overflow-y-auto custom-scrollbar pr-2">
{/*  Sensor Item  */}
<div className="p-4 bg-surface-container-low rounded-lg border border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-forest-green">
<span className="material-symbols-outlined" data-icon="thermostat">thermostat</span>
</div>
<div>
<p className="font-label-md text-label-md font-bold">Zone 4: Pharma Storage</p>
<p className="text-caption font-caption text-outline">Last update: 2m ago</p>
</div>
</div>
<div className="text-right">
<p className="font-headline-md text-headline-md text-forest-green">2.4°C</p>
<span className="text-caption font-caption text-forest-green">OPTIMAL</span>
</div>
</div>
{/*  Sensor Item  */}
<div className="p-4 bg-surface-container-low rounded-lg border border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-eagle-red">
<span className="material-symbols-outlined" data-icon="warning">warning</span>
</div>
<div>
<p className="font-label-md text-label-md font-bold">Zone 1: Agri-Export</p>
<p className="text-caption font-caption text-outline">Sensor ID: CC-772</p>
</div>
</div>
<div className="text-right">
<p className="font-headline-md text-headline-md text-eagle-red">8.1°C</p>
<span className="text-caption font-caption text-eagle-red">CRITICAL</span>
</div>
</div>
{/*  Sensor Item  */}
<div className="p-4 bg-surface-container-low rounded-lg border border-outline-variant flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-forest-green">
<span className="material-symbols-outlined" data-icon="thermostat">thermostat</span>
</div>
<div>
<p className="font-label-md text-label-md font-bold">Zone 9: Seafood Cold Room</p>
<p className="text-caption font-caption text-outline">Last update: 5m ago</p>
</div>
</div>
<div className="text-right">
<p className="font-headline-md text-headline-md text-forest-green">-18.2°C</p>
<span className="text-caption font-caption text-forest-green">OPTIMAL</span>
</div>
</div>
</div>
</div>
{/*  Regional Gateway Map  */}
<div className="col-span-12 lg:col-span-7 glass-card rounded-xl p-0 overflow-hidden relative h-[400px]">
<div className="absolute top-4 left-4 z-10 bg-state-white/90 p-4 rounded-lg shadow-sm border border-outline-variant max-w-xs">
<h4 className="font-headline-md text-headline-md text-forest-green mb-1">Aba Dry Port Terminal</h4>
<p className="text-body-md font-body-md text-on-surface-variant">Strategic linkage point for rail-to-road transshipment in the Eastern Corridor.</p>
</div>
{/*  Mock Map Background with data-location  */}
<div className="w-full h-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img alt="Satellite map of logistics corridors" className="w-full h-full object-cover" data-alt="A clean, minimalist satellite map rendering of the Aba region in Nigeria, showing simplified logistics arteries, highways, and the dry port terminal. The map uses a professional color palette of forest greens for vegetation, slate grays for infrastructure, and glowing brass gold points for active trade hubs. The lighting is bright and architectural, giving a sense of digital governance and strategic planning." data-location="Aba, Nigeria" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2Gi9xlbtkPNGaPc9tNgMya5PAWDElKWCLKuBL8WxRKTNTXLLEsxdEL141-s3_W65-9iYOLw0jOKppJ1SPUlA9pMkXBERCBLrDamjvjvwlr7_x4-ZqWqkA-qXInUGwu6SrgxlPhNco_3KRHXQS0egPvvFoI1IWtj5L2fi3rrkKa3sFmEHmMilCzKVjG2E4ecpTMbNjd0KgO8Owh6e69OLHKVbqcio_6KPKNi6YX5oIflHDTdzApbaLnJkRMjUe8HFfyO-lvZbquvU"/>
</div>
<div className="absolute bottom-4 right-4 flex flex-col gap-2">
<button className="p-3 bg-state-white rounded-full shadow-lg border border-outline-variant text-forest-green hover:bg-forest-green hover:text-state-white transition-colors">
<span className="material-symbols-outlined" data-icon="zoom_in">zoom_in</span>
</button>
<button className="p-3 bg-state-white rounded-full shadow-lg border border-outline-variant text-forest-green hover:bg-forest-green hover:text-state-white transition-colors">
<span className="material-symbols-outlined" data-icon="zoom_out">zoom_out</span>
</button>
</div>
</div>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-full bg-surface-container-lowest border-t border-outline-variant shadow-sm md:hidden">
<div className="flex justify-around items-center h-20 w-full px-base pb-safe">
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
<span className="font-label-md text-label-md">Hub</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-label-md">Profile</span>
</a>
</div>
</nav>
{/*  Desktop Sidebar Placeholder (Simplified for single-page)  */}
<div className="hidden md:flex fixed left-0 top-16 bottom-0 w-20 bg-background border-r border-outline-variant flex-col items-center py-8 gap-8">
<button className="p-3 text-forest-green bg-secondary-container rounded-lg shadow-sm">
<span className="material-symbols-outlined" data-icon="dashboard" style={{"fontVariationSettings":"'FILL' 1"}}>dashboard</span>
</button>
<button className="p-3 text-outline hover:text-forest-green hover:bg-surface-container-low rounded-lg transition-all">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
</button>
<button className="p-3 text-outline hover:text-forest-green hover:bg-surface-container-low rounded-lg transition-all">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
</button>
<button className="p-3 text-outline hover:text-forest-green hover:bg-surface-container-low rounded-lg transition-all mt-auto">
<span className="material-symbols-outlined" data-icon="person">person</span>
</button>
</div>
{/*  Micro-interactions Script  */}


      </div>
    </>
  );
}
