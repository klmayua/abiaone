export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { font-family: 'Hanken Grotesk', sans-serif; }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(10px);\n            border: 1px solid #E2E8F0;\n        }\n        .custom-scrollbar::-webkit-scrollbar {\n            width: 4px;\n        }\n        .custom-scrollbar::-webkit-scrollbar-track {\n            background: #f1f5f9;\n        }\n        .custom-scrollbar::-webkit-scrollbar-thumb {\n            background: #cbd5e1;\n            border-radius: 10px;\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background min-h-screen pb-24 md:pb-0">
        
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-outline-variant">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full max-w-max-width mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" data-icon="account_balance">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green tracking-tight">ABIA ONE</h1>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95" data-icon="search">search</button>
<button className="material-symbols-outlined text-forest-green hover:opacity-80 transition-opacity active:scale-95" data-icon="notifications">notifications</button>
</div>
</div>
</header>
<main className="pt-20 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto pb-8">
{/*  Dashboard Header  */}
<section className="mb-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="font-label-md text-label-md text-brass-gold uppercase tracking-widest">Greater Aba Development Authority</span>
<h2 className="font-headline-lg text-headline-lg mt-1">Field Management Portal</h2>
</div>
<div className="flex gap-3">
<button className="bg-forest-green text-white px-6 py-2 rounded-lg font-body-md flex items-center gap-2 active:scale-95 transition-transform">
<span className="material-symbols-outlined text-[20px]" data-icon="add_a_photo">add_a_photo</span>
                        Report Issue
                    </button>
</div>
</div>
</section>
{/*  Main Content Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
{/*  Left Column: Active Works & Inspector Tools  */}
<div className="lg:col-span-4 flex flex-col gap-6">
{/*  Active Works Section  */}
<div className="glass-card rounded-xl p-6 border border-outline-variant">
<div className="flex items-center justify-between mb-4">
<h3 className="font-headline-md text-headline-md flex items-center gap-2">
<span className="w-1 h-6 bg-brass-gold"></span>
                            Active Works
                        </h3>
<span className="text-label-md font-label-md text-forest-green">LIVE</span>
</div>
<div className="space-y-4">
{/*  Project Card 1  */}
<div className="group p-4 rounded-lg bg-surface-container-low border border-outline-variant hover:border-forest-green transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<h4 className="font-body-lg font-semibold">Port Harcourt Rd Ph 1</h4>
<span className="bg-primary-container text-on-primary-container text-[10px] px-2 py-0.5 rounded-full font-label-md">68%</span>
</div>
<p className="text-caption text-on-surface-variant mb-3">Drainage installation & sub-grade prep</p>
<div className="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[68%]"></div>
</div>
</div>
{/*  Project Card 2  */}
<div className="group p-4 rounded-lg bg-surface-container-low border border-outline-variant hover:border-forest-green transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<h4 className="font-body-lg font-semibold">Owerri Road Dualization</h4>
<span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded-full font-label-md">42%</span>
</div>
<p className="text-caption text-on-surface-variant mb-3">Utility relocation in progress</p>
<div className="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[42%]"></div>
</div>
</div>
{/*  Project Card 3  */}
<div className="group p-4 rounded-lg bg-surface-container-low border border-outline-variant hover:border-forest-green transition-colors cursor-pointer">
<div className="flex justify-between items-start mb-2">
<h4 className="font-body-lg font-semibold">Faulks Road Remediation</h4>
<span className="bg-tertiary-container text-white text-[10px] px-2 py-0.5 rounded-full font-label-md">91%</span>
</div>
<p className="text-caption text-on-surface-variant mb-3">Final asphalt overlay surfacing</p>
<div className="w-full bg-outline-variant h-1 rounded-full overflow-hidden">
<div className="bg-eagle-red h-full w-[91%]"></div>
</div>
</div>
</div>
</div>
{/*  Inspector Upload Card  */}
<div className="bg-forest-green text-white rounded-xl p-6 shadow-xl relative overflow-hidden">
<div className="relative z-10">
<h3 className="font-headline-md text-headline-md mb-2">Build Abia Dashboard</h3>
<p className="text-body-md opacity-90 mb-6">Upload site progress photos to the central infrastructure ledger.</p>
<label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-primary-fixed-dim rounded-lg cursor-pointer bg-primary-container/30 hover:bg-primary-container/50 transition-colors" htmlFor="photo-upload">
<div className="flex flex-col items-center justify-center pt-5 pb-6">
<span className="material-symbols-outlined text-[32px] mb-2" data-icon="cloud_upload">cloud_upload</span>
<p className="text-label-md font-label-md">Drop photos or tap to browse</p>
</div>
<input className="hidden" id="photo-upload" multiple="" type="file"/>
</label>
</div>
{/*  Subtle pattern overlay  */}
<div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
<span className="material-symbols-outlined text-[120px]" data-icon="construction" style={{"fontVariationSettings":"'FILL' 1"}}>construction</span>
</div>
</div>
</div>
{/*  Right Column: Map & Urban Issue Feed  */}
<div className="lg:col-span-8 flex flex-col gap-6">
{/*  Map Section  */}
<div className="glass-card rounded-xl border border-outline-variant overflow-hidden h-[400px] relative">
<div className="absolute top-4 left-4 z-10 flex gap-2">
<span className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-outline-variant flex items-center gap-2 font-label-md text-on-surface text-[12px]">
<span className="w-3 h-3 rounded-full bg-eagle-red"></span> Refuse Blockage
                        </span>
<span className="bg-white px-3 py-1.5 rounded-lg shadow-sm border border-outline-variant flex items-center gap-2 font-label-md text-on-surface text-[12px]">
<span className="w-3 h-3 rounded-full bg-secondary"></span> Drainage Issue
                        </span>
</div>
{/*  Map Placeholder  */}
<div className="w-full h-full bg-surface-container-highest flex items-center justify-center relative">
<img className="w-full h-full object-cover grayscale-[20%] opacity-80" data-alt="A sophisticated satellite map view of an urban grid layout focusing on the city of Aba. The map uses a clean, professional aesthetic with subtle forest green overlays for construction zones and red points of interest for reported urban issues. The lighting is bright and technical, emphasizing the data-driven nature of government infrastructure tracking in a modern light-mode interface." data-location="Aba, Nigeria" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7djUy7hvndqAfWYD1QbAAx7kJAeKXgyjPSfi1569nzvus7Hg06Psmk7VWGgv_ADNaaVWA7rlxgCXvck6EU-r0_hQj9ludNNXkwZJQjZ2DHrbIUFxUwgFAxVxgXmhl2FVdRullOgey8AoEvOkDXR8PNjvVGS3IraTim3XNh7sL6nLOdb4h07oRyc8dNVNGWOKaVf7rg4O_gxh6olXy7enuFF1_sQN4DZjn7SlZn2vj7VhTmAuGtQvtisl199L4QR65-58vJ3bQ3v0"/>
{/*  Pulse Points  */}
<div className="absolute top-1/3 left-1/4">
<span className="flex h-6 w-6 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eagle-red opacity-75"></span>
<span className="relative inline-flex rounded-full h-6 w-6 bg-eagle-red border-2 border-white shadow-md"></span>
</span>
</div>
<div className="absolute bottom-1/4 right-1/3">
<span className="flex h-6 w-6 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
<span className="relative inline-flex rounded-full h-6 w-6 bg-secondary border-2 border-white shadow-md"></span>
</span>
</div>
</div>
</div>
{/*  Recent Field Reports  */}
<div className="glass-card rounded-xl p-6 border border-outline-variant">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline-md text-headline-md flex items-center gap-2">
<span className="w-1 h-6 bg-forest-green"></span>
                            Urban Issue Feed
                        </h3>
<button className="text-label-md font-label-md text-forest-green flex items-center gap-1 hover:underline">
                            View All Reports <span className="material-symbols-outlined text-[16px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/*  Issue Card 1  */}
<div className="flex gap-4 p-3 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors">
<div className="w-20 h-20 rounded bg-surface-container-highest overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="A detailed close-up of a drainage infrastructure project under construction in a professional urban environment. The scene shows high-quality concrete work and steel reinforcement bars being installed by engineers. The visual style is clean and institutional, featuring a natural light-mode palette of greys, forest greens, and bright metallic accents consistent with state government engineering standards." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMhCKtSaEZ66ndqdVUN8RLtQwv55yUWYfy3ZYIv0eTjhm_rXPSfsC9Kfqj8MIAKSBPi8WxeBFxvT78ENYxKzw222SQ-GcUJ8DrD3unVaK6lj_5IHPBgA6D8Fiv1x9IqLI3uGZk3Y5rIhnqrdOMn6DTCOkPqqkoAL47T8g79BPfZovRSj4RYwvgpA36EQIctz0R1oQALOyHhRovzK1yVTFsXnbKRJd5GBkr2funMeB8vjjstEmGIfg8aACCJblsTObfe6i8H1FuUjs"/>
</div>
<div className="flex flex-col justify-between">
<div>
<h5 className="font-body-md font-bold text-on-surface">Drainage Blockage</h5>
<p className="text-caption text-on-surface-variant">Ariaria Market Zone A</p>
</div>
<div className="flex items-center gap-2">
<span className="bg-error-container text-on-error-container text-[10px] px-2 py-0.5 rounded-full font-label-md">CRITICAL</span>
<span className="text-[10px] font-label-md text-on-surface-variant">2h ago</span>
</div>
</div>
</div>
{/*  Issue Card 2  */}
<div className="flex gap-4 p-3 rounded-lg border border-outline-variant hover:bg-surface-container-low transition-colors">
<div className="w-20 h-20 rounded bg-surface-container-highest overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" data-alt="A clean urban waste management collection point showing professional refuse containers aligned neatly against a modern brick wall. The setting is bright and orderly, reflecting a well-maintained government waste disposal system. The color palette emphasizes clean whites, slate greys, and forest green accents, capturing a high-end municipal management aesthetic in a clear, sun-drenched environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuANhOyzpUDghIgw2kjhpYz3Uf_volp0kXwjQ1-FnFyrIWt6NtM8TuJZ0lGcZyu22fuGixEpFuv7MfC7n0E4OuEcCNKecXQjpmZzNaKpQXBuNV8X7NwjMp_lNp8ow-ZwEP1h_Xr8qJltRfR6FpNAwFC9PICpGu6igl3BZEil6mVy5kv-m3dTOMuxhchb7PMEmqr1EH4fxK68nTh9OxvwCczMDYGwi74XQIQWXvBMY47OZptdMs0EH2oo16UsvbH6cht86KdWKKS9VYg"/>
</div>
<div className="flex flex-col justify-between">
<div>
<h5 className="font-body-md font-bold text-on-surface">Refuse Accumulation</h5>
<p className="text-caption text-on-surface-variant">Osisioma Junction</p>
</div>
<div className="flex items-center gap-2">
<span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded-full font-label-md">PENDING</span>
<span className="text-[10px] font-label-md text-on-surface-variant">5h ago</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
{/*  BottomNavBar (Mobile Only)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full z-50 rounded-t-full bg-surface-container-lowest border-t border-outline-variant shadow-sm h-20">
<div className="flex justify-around items-center h-full px-base pb-safe">
<button className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 transition-transform active:scale-90 duration-200">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined" data-icon="grid_view">grid_view</span>
<span className="font-label-md text-label-md">Hub</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-label-md">Profile</span>
</button>
</div>
</nav>
{/*  Floating Action Button (Contextual for Home/Field Reporting)  */}
<button className="fixed bottom-24 right-6 md:bottom-8 md:right-8 bg-forest-green text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center active:scale-90 transition-transform z-40 group">
<span className="material-symbols-outlined text-[28px]" data-icon="photo_camera" style={{"fontVariationSettings":"'FILL' 1"}}>photo_camera</span>
<span className="absolute right-full mr-4 bg-on-background text-white px-3 py-1.5 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Quick Report
        </span>
</button>


      </div>
    </>
  );
}
