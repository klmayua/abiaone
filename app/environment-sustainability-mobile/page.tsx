export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 16px;\n        }\n        .scroll-hide::-webkit-scrollbar { display: none; }\n        .scroll-hide { -ms-overflow-style: none; scrollbar-width: none; }\n        \n        @keyframes subtle-pulse {\n            0% { transform: scale(1); opacity: 0.8; }\n            50% { transform: scale(1.05); opacity: 1; }\n            100% { transform: scale(1); opacity: 0.8; }\n        }\n        .pulse-animation { animation: subtle-pulse 3s infinite ease-in-out; }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md min-h-screen pb-24">
        
{/*  TopAppBar Shell  */}
<header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-outline-variant">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full max-w-max-width mx-auto">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-forest-green" data-icon="account_balance">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green tracking-tight">ABIA ONE</h1>
</div>
<button className="hover:opacity-80 transition-opacity active:scale-95 transition-transform">
<span className="material-symbols-outlined text-forest-green" data-icon="notifications">notifications</span>
</button>
</div>
</header>
<main className="mt-20 px-margin-mobile">
{/*  Welcome Hero Section  */}
<section className="mb-8">
<div className="flex flex-col gap-1">
<p className="font-label-md text-label-md text-secondary uppercase tracking-widest">Sustainability Hub</p>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-bold">State Environment Portal</h2>
</div>
</section>
{/*  Dynamic Metrics (Bento Style)  */}
<div className="bento-grid mb-8">
{/*  Air Quality Index Card  */}
<div className="col-span-1 bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex flex-col justify-between h-40">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-forest-green" data-icon="air">air</span>
<span className="bg-green-100 text-green-800 text-[10px] px-2 py-0.5 rounded-full font-bold">HEALTHY</span>
</div>
<div>
<p className="font-label-md text-[12px] text-on-surface-variant">Umuahia AQI</p>
<div className="flex items-baseline gap-1">
<span className="font-headline-lg text-headline-lg text-forest-green">34</span>
<span className="font-caption text-caption text-outline">PM2.5</span>
</div>
</div>
</div>
{/*  Flood Risk Card  */}
<div className="col-span-1 bg-tertiary-fixed border border-outline-variant p-4 rounded-xl flex flex-col justify-between h-40 relative overflow-hidden">
<div className="z-10">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-eagle-red" data-icon="flood">flood</span>
<span className="bg-eagle-red text-white text-[10px] px-2 py-0.5 rounded-full font-bold">MODERATE</span>
</div>
<p className="mt-4 font-label-md text-[12px] text-on-tertiary-fixed-variant uppercase">Flood Risk Alert</p>
<p className="font-headline-md text-on-tertiary-fixed-variant leading-tight">Aba South Area</p>
</div>
<div className="absolute -bottom-4 -right-4 opacity-10">
<span className="material-symbols-outlined text-[100px]" data-icon="warning">warning</span>
</div>
</div>
{/*  Waste-to-Wealth Tracker (Full Width Bento)  */}
<div className="col-span-2 bg-surface-container-high border border-outline-variant p-6 rounded-xl relative overflow-hidden group">
<div className="flex justify-between items-center mb-4">
<div>
<h3 className="font-headline-md text-forest-green">Waste-to-Wealth</h3>
<p className="font-body-md text-on-surface-variant">Monthly Recycling Performance</p>
</div>
<div className="bg-forest-green p-3 rounded-lg text-white">
<span className="material-symbols-outlined" data-icon="recycling">recycling</span>
</div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-end">
<span className="font-label-md text-label-md">Goal: 500 Tons</span>
<span className="font-headline-md text-forest-green">82%</span>
</div>
<div className="w-full bg-surface-variant h-3 rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[82%] rounded-full"></div>
</div>
<p className="font-caption text-caption text-on-surface-variant">410 tons of plastic waste recovered this month across 17 LGAs.</p>
</div>
{/*  Micro-interaction overlay  */}
<div className="mt-6 flex gap-4">
<button className="bg-forest-green text-white font-label-md text-[12px] px-4 py-2 rounded-lg active:scale-95 transition-transform">Deposit Waste</button>
<button className="border border-forest-green text-forest-green font-label-md text-[12px] px-4 py-2 rounded-lg active:scale-95 transition-transform">View Rewards</button>
</div>
</div>
</div>
{/*  Featured Actions / Image Grid  */}
<section className="mb-8">
<h3 className="font-headline-md text-on-background mb-4">Eco Initiatives</h3>
<div className="flex overflow-x-auto gap-4 scroll-hide pb-4">
<div className="min-w-[280px] h-[360px] rounded-2xl relative overflow-hidden shadow-sm flex-shrink-0">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="A lush green reforestation project in a tropical climate, showing young saplings planted in neat rows under a bright, hazy morning sun. The scene reflects environmental restoration and government-led sustainability efforts with a focus on vibrant nature and organic growth. The style is professional and documentary-like." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhALxOyog7bhWHzh_B62wN7VL_JFBrf7GU9HFEjImzuqs03YbNc5c8s85AQLvV3wrVZ8R-bRTOfBHamPu1dI6KdSf8cy_VZ1mn6Spg7-jtCyQ-8uMz_mmRnBLRqReycUFpGzwwHY9dFNCj-FJDacK0hGUE7FPYMytbP02rKG7COmxBAuW7aKdrfuXAaQpUuAzQbK_dBh3t4IQuav6uOwsLn3eGFzz89iC2IwBuZ9gmWd-w6ewneW8jw1-xPc-93MjoKp8R69E0CEA"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 p-6 text-white">
<span className="font-label-md text-[10px] bg-brass-gold text-black px-2 py-0.5 rounded mb-2 inline-block">CAMPAIGN</span>
<h4 className="font-headline-md">1 Million Trees Abia</h4>
<p className="font-caption mt-2">Join our state-wide reforestation drive to combat soil erosion and carbon footprint.</p>
</div>
</div>
<div className="min-w-[280px] h-[360px] rounded-2xl relative overflow-hidden shadow-sm flex-shrink-0">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="A modern waste management facility in a clean industrial setting, showing specialized sorting machines for plastic and glass recycling. The lighting is bright and technical, emphasizing cleanliness and efficiency. The color palette incorporates deep greens and slate grays, representing the intersection of technology and the environment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhPWwkKHK3N9gTnrt0fvnT3qd4IrdKRDu_bb0Vk8YsGmSucK4eADCjiLsHiCl6un_KFydyXM5oIh5I04UHCkUZI9DgMzHBmpvpL3rX4Bplucrc6ibI_KVo16J3fscuAqtOVBhKY-eGMvVwexNjrplVgjyvXRiKF-xX4ikvuiPCZq7yzrlavEp-zBYJFcVR7OdWcrk6RGFdWwXcIIa9ZJ67ip5BthfpPeQfbnSYBkmhUXaZnihqA9bc8IQuJPDKXIC9NYmOIRNcPIg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-0 p-6 text-white">
<span className="font-label-md text-[10px] bg-forest-green text-white px-2 py-0.5 rounded mb-2 inline-block">INFRASTRUCTURE</span>
<h4 className="font-headline-md">Smart Waste Hubs</h4>
<p className="font-caption mt-2">Locate your nearest automated waste collection point for instant credits.</p>
</div>
</div>
</div>
</section>
{/*  Localized AQI Map Preview  */}
<section className="mb-12">
<div className="bg-surface-container-lowest border border-outline-variant p-2 rounded-2xl">
<div className="p-4">
<h3 className="font-headline-md text-on-surface">Interactive Bio-Map</h3>
<p className="font-body-md text-on-surface-variant">Real-time ecological sensor data across the state.</p>
</div>
<div className="h-64 rounded-xl bg-surface-variant relative overflow-hidden flex items-center justify-center">
{/*  Placeholder for Map Visualization  */}
<div className="absolute inset-0 opacity-50 pointer-events-none" data-location="Abia State, Nigeria" style={{}}>
<div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-forest-green/20 via-transparent to-transparent"></div>
</div>
<div className="z-10 flex flex-col items-center">
<span className="material-symbols-outlined text-forest-green text-4xl pulse-animation" data-icon="location_on">location_on</span>
<p className="font-label-md text-forest-green mt-2">12 Active Sensors in Umuahia</p>
</div>
{/*  Legend Overlay  */}
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-outline-variant shadow-sm text-[10px] font-label-md">
<div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Optimal</div>
<div className="flex items-center gap-2 mt-1"><div className="w-2 h-2 rounded-full bg-yellow-500"></div> Moderate</div>
<div className="flex items-center gap-2 mt-1"><div className="w-2 h-2 rounded-full bg-red-500"></div> High Risk</div>
</div>
</div>
<button className="w-full py-4 text-forest-green font-headline-md hover:bg-surface-container-low transition-colors rounded-b-xl border-t border-outline-variant mt-2">
                    Open Full Eco-Map
                </button>
</div>
</section>
{/*  Quick News Section  */}
<section className="mb-8 bg-surface-container rounded-2xl p-6 border border-outline-variant">
<h4 className="font-label-md text-secondary uppercase mb-4 tracking-tighter">Latest Environmental Policy</h4>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-forest-green border border-outline-variant">
<span className="material-symbols-outlined" data-icon="policy">policy</span>
</div>
<div>
<h5 className="font-headline-md text-body-md font-bold text-on-surface">New Plastic Ban Regulation</h5>
<p className="text-caption text-on-surface-variant">Single-use plastics phased out in government buildings by Q4 2024.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-forest-green border border-outline-variant">
<span className="material-symbols-outlined" data-icon="sunny">sunny</span>
</div>
<div>
<h5 className="font-headline-md text-body-md font-bold text-on-surface">Solar Farm Project phase 2</h5>
<p className="text-caption text-on-surface-variant">Connecting 5,000 rural households to the Abia Green Grid.</p>
</div>
</div>
</div>
</section>
</main>
{/*  BottomNavBar Shell  */}
<nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-full shadow-sm bg-surface-container-lowest border-t border-outline-variant">
<div className="flex justify-around items-center h-20 w-full px-base pb-safe">
{/*  Hub is active since this is the Sustainability Hub  */}
<div className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</div>
<div className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="grid_view" style={{"fontVariationSettings":"'FILL' 1"}}>grid_view</span>
<span className="font-label-md text-label-md">Hub</span>
</div>
<div className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-label-md">Profile</span>
</div>
</div>
</nav>


      </div>
    </>
  );
}
