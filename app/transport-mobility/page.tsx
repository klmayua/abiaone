export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .glass-panel {\n            background: rgba(246, 251, 243, 0.8);\n            backdrop-filter: blur(12px);\n            -webkit-backdrop-filter: blur(12px);\n        }\n        .brass-border {\n            border-bottom: 2px solid #D4AF37;\n        }\n        .hide-scrollbar::-webkit-scrollbar {\n            display: none;\n        }\n        .hide-scrollbar {\n            -ms-overflow-style: none;\n            scrollbar-width: none;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md min-h-screen flex flex-col">
        
{/*  TopNavBar Shell  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-8">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep">ABIA ONE</span>
<nav className="hidden md:flex gap-6">
<a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-caps text-label-caps" href="#">Economy</a>
<a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-caps text-label-caps" href="#">Digital Gov</a>
<a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-caps text-label-caps" href="#">Governance</a>
<a className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-label-caps text-label-caps" href="#">Security</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="bg-forest-green text-white px-4 py-2 rounded font-label-caps text-label-caps hover:opacity-90 transition-all">Citizen Portal</button>
<button className="border border-eagle-red text-eagle-red px-4 py-2 rounded font-label-caps text-label-caps hover:bg-error-container transition-all">Emergency</button>
</div>
</header>
<div className="flex flex-1 pt-16">
{/*  SideNavBar Shell  */}
<aside className="hidden lg:flex flex-col h-[calc(100vh-64px)] w-64 fixed left-0 top-16 bg-surface-container-low border-r border-outline-variant py-6">
<div className="px-4 mb-8">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-forest-deep rounded flex items-center justify-center text-white">
<span className="material-symbols-outlined">account_balance</span>
</div>
<div>
<p className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep leading-none">ABIA ONE</p>
<p className="text-[10px] font-label-md text-on-surface-variant opacity-70">Modern Governance OS</p>
</div>
</div>
</div>
<div className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 mx-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all group" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-sm text-label-sm">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-sm text-label-sm">Digital Government</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 bg-secondary-container text-on-secondary-container rounded-lg translate-x-1 shadow-sm" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>mitre</span>
<span className="font-label-sm text-label-sm font-semibold">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
<span className="material-symbols-outlined">security</span>
<span className="font-label-sm text-label-sm">Public Trust</span>
</a>
</div>
<div className="mt-auto px-4 pt-6 border-t border-outline-variant space-y-1">
<button className="w-full bg-brass-gold/10 border border-brass-gold text-secondary font-label-caps text-[12px] py-2 mb-4 hover:bg-brass-gold/20 transition-all">
                    Citizen Feedback
                </button>
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">settings</span>
<span className="text-sm">Settings</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-[20px]">help</span>
<span className="text-sm">Support</span>
</a>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 lg:ml-64 p-margin-mobile md:p-gutter bg-surface">
{/*  Header Section  */}
<div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<div className="flex items-center gap-2 text-forest-green mb-2">
<span className="material-symbols-outlined">directions_bus</span>
<span className="font-label-md text-label-md uppercase tracking-wider">Infrastructure &amp; Mobility</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-forest-deep">Transport Modernization</h1>
<p className="text-on-surface-variant max-w-2xl mt-1">Unified dashboard for Abia State Transport Management Agency (ASTPA) services, road safety metrics, and mass transit progress.</p>
</div>
<div className="flex gap-2">
<div className="bg-surface-container-high px-4 py-2 rounded-lg border border-outline-variant">
<p className="text-[10px] uppercase font-bold text-on-surface-variant">System Status</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-forest-green animate-pulse"></div>
<span className="font-label-md text-label-md">Network Active</span>
</div>
</div>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
{/*  Hero Feature: Mass Transit Progress  */}
<div className="md:col-span-8 bg-white border border-outline-variant rounded-lg overflow-hidden flex flex-col">
<div className="p-6 border-b border-outline-variant flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-forest-deep flex items-center gap-2">
                            Mass Transit Progress
                            <span className="w-8 h-[2px] bg-brass-gold"></span>
</h3>
<span className="bg-primary-container text-on-primary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Q3 Live Update</span>
</div>
<div className="relative h-64 w-full">
<img className="w-full h-full object-cover" data-alt="A professional architectural visualization of a modern bus terminal in Abia State Nigeria, featuring sleek glass structures and green energy buses. The lighting is bright mid-day sun reflecting off polished metallic surfaces, conveying a sense of rapid urban development and technological progress in the transport sector. The atmosphere is vibrant and orderly, with a clean corporate aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyFcBo14La0WklZfrHDURK1EoZJ_zIVq8IyW4xKQ5veC4z-ltKl8kOz1v6d0ZtFV2Jl9RN_yBiZo9LCIQsgDrvpOvBvl2_-xnZ1Ms_zWvzLHMCWOuyjam9wIBeWQsr-NKRCR02CHsZPGlN7JVD2PoImvbAwEMlon0EM5oYQi6mT1l2nvGea4hhOuFNzW0faxWPjeJ5tBQA1ydrtbVqDhHFo3JgLrD4zczCVrQ9OYp2Tu8pV0s7aLInwoGcB6sE6Q0YlQYNjJ9xD1w" />
<div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 to-transparent flex items-end p-8">
<div className="grid grid-cols-3 gap-8 w-full text-white">
<div>
<p className="text-brass-gold font-bold text-2xl">450+</p>
<p className="text-xs uppercase tracking-widest opacity-80">Eco-Buses Deployed</p>
</div>
<div>
<p className="text-brass-gold font-bold text-2xl">12</p>
<p className="text-xs uppercase tracking-widest opacity-80">Smart Terminals</p>
</div>
<div>
<p className="text-brass-gold font-bold text-2xl">82%</p>
<p className="text-xs uppercase tracking-widest opacity-80">Route Coverage</p>
</div>
</div>
</div>
</div>
<div className="p-6 flex-1 flex flex-col justify-between">
<div className="space-y-4">
<div className="flex justify-between items-center text-sm">
<span className="font-semibold text-on-surface">Umuahia - Aba Rapid Rail Link</span>
<span className="text-forest-green font-bold">64% Complete</span>
</div>
<div className="w-full bg-surface-container rounded-full h-2">
<div className="bg-forest-green h-full rounded-full" style={{"width":"64%"}}></div>
</div>
</div>
</div>
</div>
{/*  ASTPA Digital Ticketing  */}
<div className="md:col-span-4 bg-surface-container-low border border-outline-variant rounded-lg p-6 flex flex-col">
<h3 className="font-headline-md text-headline-md text-forest-deep mb-6">Digital Ticketing</h3>
<div className="bg-white p-4 rounded-xl border border-outline shadow-sm mb-6 relative overflow-hidden">
<div className="flex justify-between items-start mb-8">
<div className="flex flex-col">
<span className="text-[10px] uppercase font-bold text-on-surface-variant">ABIA PASS</span>
<span className="font-headline-lg-mobile text-headline-lg-mobile text-forest-deep">ASTPA Wallet</span>
</div>
<span className="material-symbols-outlined text-brass-gold text-3xl">contactless</span>
</div>
<div className="mb-4">
<p className="text-xs text-on-surface-variant opacity-60">Available Balance</p>
<p className="text-2xl font-bold font-headline-md">₦12,450.00</p>
</div>
<div className="flex justify-between items-end">
<p className="font-label-md text-label-md">CHIDI AZUBUIKE</p>
<img className="w-12 h-12 rounded bg-surface-variant p-1" data-alt="A high-tech digital security QR code displayed on a sleek smartphone screen. The image emphasizes digital sovereignty and modern infrastructure with a palette of deep greens and gold accents. Soft bokeh background of a modern urban transport hub adds context to the secure transaction theme." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfoytVce8FvI73Zx17rdicynZG9QF_ohzWh8F9niKd_gRGyng8J9y38c_24eeCrLYP4fxruKFiab2vz7avVhkix29YlxOiHDHEzhCGgM5eVzMOiP2U-njS0nkwdqchv67_Bi3vW6gsXNzPH5W2nT37kwx0cY_d1G7oWMrJOK_f6m9SbJMg8Zo8FwG3mKWhfogtoVARtQXc9KWh-jKTzkDPRgvGmKGlsnv2mX1A7zRWFBBFY7Cs5q9YxwZ4OlXlZt1FOJ7YMt1PXEE" />
</div>
{/*  Abstract overlay  */}
<div className="absolute -right-4 -top-4 w-24 h-24 bg-forest-green/5 rounded-full blur-2xl"></div>
</div>
<div className="space-y-3">
<button className="w-full bg-forest-deep text-white py-3 rounded font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">add_card</span>
                            Top-up Wallet
                        </button>
<button className="w-full border border-forest-deep text-forest-deep py-3 rounded font-bold hover:bg-white transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm">history</span>
                            Trip History
                        </button>
</div>
</div>
{/*  Road Safety Metrics  */}
<div className="md:col-span-6 bg-white border border-outline-variant rounded-lg p-6">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-forest-deep">Road Safety Analytics</h3>
<span className="material-symbols-outlined text-on-surface-variant">analytics</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-4 bg-surface-container rounded border border-outline-variant/30">
<p className="text-xs text-on-surface-variant uppercase font-bold">Accident Rate</p>
<div className="flex items-center gap-2">
<span className="text-2xl font-bold text-eagle-red">-14.2%</span>
<span className="material-symbols-outlined text-eagle-red text-sm">arrow_downward</span>
</div>
<p className="text-[10px] text-on-surface-variant">Compared to last month</p>
</div>
<div className="p-4 bg-surface-container rounded border border-outline-variant/30">
<p className="text-xs text-on-surface-variant uppercase font-bold">Response Time</p>
<div className="flex items-center gap-2">
<span className="text-2xl font-bold text-forest-green">4.2m</span>
<span className="material-symbols-outlined text-forest-green text-sm">check_circle</span>
</div>
<p className="text-[10px] text-on-surface-variant">Average EMS arrival</p>
</div>
</div>
<div className="h-40 w-full bg-surface-container rounded border border-outline-variant flex items-end justify-between p-4 overflow-hidden relative">
{/*  Mock Chart bars  */}
<div className="w-8 bg-forest-green/20 rounded-t h-[30%]"></div>
<div className="w-8 bg-forest-green/30 rounded-t h-[45%]"></div>
<div className="w-8 bg-forest-green/40 rounded-t h-[60%]"></div>
<div className="w-8 bg-forest-green/60 rounded-t h-[85%]"></div>
<div className="w-8 bg-forest-green/80 rounded-t h-[70%]"></div>
<div className="w-8 bg-forest-green rounded-t h-[95%]"></div>
<div className="w-8 bg-brass-gold rounded-t h-[100%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Today</div>
</div>
<div className="absolute inset-0 flex flex-col justify-between p-2 pointer-events-none opacity-20">
<div className="border-t border-on-surface w-full"></div>
<div className="border-t border-on-surface w-full"></div>
<div className="border-t border-on-surface w-full"></div>
</div>
</div>
</div>
{/*  Vehicle Inspection Booking  */}
<div className="md:col-span-6 bg-white border border-outline-variant rounded-lg overflow-hidden flex flex-col">
<div className="p-6">
<h3 className="font-headline-md text-headline-md text-forest-deep mb-2">Inspection Center Bookings</h3>
<p className="text-sm text-on-surface-variant mb-6">Schedule your mandatory vehicle fitness check at state-authorized centers.</p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-lg border border-outline-variant hover:border-forest-green transition-colors cursor-pointer group">
<div className="bg-surface-variant w-12 h-12 rounded flex items-center justify-center text-forest-deep group-hover:bg-forest-green group-hover:text-white transition-all">
<span className="material-symbols-outlined">location_on</span>
</div>
<div className="flex-1">
<p className="font-bold text-on-surface">Umuahia North VIC</p>
<p className="text-xs text-on-surface-variant">Ikot Ekpene Road, Umuahia</p>
</div>
<span className="bg-forest-green/10 text-forest-green px-2 py-1 rounded text-[10px] font-bold">OPEN</span>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg border border-outline-variant hover:border-forest-green transition-colors cursor-pointer group">
<div className="bg-surface-variant w-12 h-12 rounded flex items-center justify-center text-forest-deep group-hover:bg-forest-green group-hover:text-white transition-all">
<span className="material-symbols-outlined">location_on</span>
</div>
<div className="flex-1">
<p className="font-bold text-on-surface">Aba Central VIC</p>
<p className="text-xs text-on-surface-variant">Port Harcourt Road, Aba</p>
</div>
<span className="bg-eagle-red/10 text-eagle-red px-2 py-1 rounded text-[10px] font-bold">BUSY</span>
</div>
</div>
<div className="mt-6">
<button className="w-full bg-brass-gold text-on-secondary-fixed font-bold py-3 rounded-lg hover:brightness-105 transition-all shadow-sm">
                                Book New Inspection Slot
                            </button>
</div>
</div>
</div>
</div>
</main>
</div>
{/*  Footer Shell  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto py-12 border-t border-outline-variant">
<div className="max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
<div className="max-w-md">
<span className="font-headline-lg text-headline-lg text-forest-deep mb-4 block">ABIA ONE</span>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">The digital backbone of Abia State government, ensuring transparency, efficiency, and sovereign data management for all citizens.</p>
<div className="flex gap-4">
<span className="material-symbols-outlined text-forest-deep cursor-pointer hover:text-brass-gold transition-colors">public</span>
<span className="material-symbols-outlined text-forest-deep cursor-pointer hover:text-brass-gold transition-colors">hub</span>
<span className="material-symbols-outlined text-forest-deep cursor-pointer hover:text-brass-gold transition-colors">verified_user</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4">
<a className="text-on-surface-variant hover:text-brass-accent transition-colors font-label-caps text-label-caps" href="#">Invest Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors font-label-caps text-label-caps" href="#">Serve Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors font-label-caps text-label-caps" href="#">Build Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors font-label-caps text-label-caps" href="#">Open Abia</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors font-label-caps text-label-caps" href="#">Privacy Policy</a>
<a className="text-on-surface-variant hover:text-brass-accent transition-colors font-label-caps text-label-caps" href="#">Contact Us</a>
</div>
</div>
<div className="max-w-container-max-width mx-auto mt-12 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-on-surface-variant text-sm">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-forest-green flex items-center justify-center text-white">
<span className="material-symbols-outlined text-[16px]">security</span>
</div>
<span className="font-label-md text-label-md text-forest-deep">Sovereign Data Protection</span>
</div>
</div>
</footer>
{/*  FAB for quick ticketing (Contextual for Transport Screen)  */}
<button className="fixed bottom-8 right-8 w-16 h-16 bg-forest-green text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform z-40 group">
<span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">confirmation_number</span>
<div className="absolute right-20 bg-forest-deep text-white px-4 py-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Generate Quick Ticket
        </div>
</button>


      </div>
    </>
  );
}
