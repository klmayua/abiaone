"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        body {\n            -webkit-tap-highlight-color: transparent;\n            overscroll-behavior-y: contain;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 12px;\n        }\n        .bento-item-large {\n            grid-column: span 2;\n        }\n        .scroll-hide::-webkit-scrollbar {\n            display: none;\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md text-body-md overflow-x-hidden pb-24">
        
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 bg-background border-b border-outline-variant">
<div className="flex items-center justify-between px-margin-mobile h-16 w-full max-w-max-width mx-auto">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green" data-icon="account_balance">account_balance</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-green tracking-tight">ABIA ONE</h1>
</div>
<button className="hover:opacity-80 transition-opacity active:scale-95 transition-transform">
<span className="material-symbols-outlined text-forest-green" data-icon="notifications">notifications</span>
</button>
</div>
</header>
<main className="mt-20 px-margin-mobile">
{/*  Hero Section / Identity  */}
<section className="mb-8">
<div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-4">
<img className="w-full h-full object-cover" data-alt="A professional Nigerian female entrepreneur in a brightly lit modern office setting, smiling confidently. She is dressed in colorful, elegant business attire. The environment is clean and professional with soft natural light, conveying a sense of empowerment, modern governance, and corporate success. The color palette features subtle forest green and brass gold accents to align with the ministry's brand identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1DTR-s9phwMyPFi8B_3rSeJcyi4nvJB5ReNp8iJ0LmUGW8rGwRhxcOfpEO344x0i2c-WAYfqrHgyxKSo3dJ0JMZWXGZSsoxzoTOhx0YW0pZRihdjO48RLyapb6-sLrG2lsX2znaZFOmdfjyFwIc8x3UEb2FLVKykoCag1a9epjTt7Ixh4pB2X2zDhUPwoORSl-Xt7ybOeiewDYvZrxJG2EhmWrbVmTGD7vINKM2UpU7PxRBj5KAWX5BK_Nxztch_qV4nx5uDWbDs"/>
<div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 to-transparent flex flex-col justify-end p-6">
<h2 className="font-headline-md text-headline-md text-state-white mb-1">Women’s Portal</h2>
<p className="font-body-md text-body-md text-state-white/90">Empowering the pillars of Abia State.</p>
</div>
</div>
</section>
{/*  Quick Stats  */}
<div className="flex gap-4 overflow-x-auto scroll-hide mb-8 pb-2">
<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg min-w-[140px] flex-shrink-0">
<span className="font-caption text-caption text-on-surface-variant block mb-1">Loan Status</span>
<span className="font-headline-md text-headline-md text-forest-green">₦250k</span>
<div className="flex items-center gap-1 mt-1">
<span className="material-symbols-outlined text-forest-green text-[14px]" data-icon="check_circle">check_circle</span>
<span className="font-caption text-caption text-forest-green">Approved</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg min-w-[140px] flex-shrink-0">
<span className="font-caption text-caption text-on-surface-variant block mb-1">Skills Level</span>
<span className="font-headline-md text-headline-md text-forest-green">Lvl 4</span>
<div className="w-full bg-surface-variant h-1 rounded-full mt-3 overflow-hidden">
<div className="bg-forest-green h-full w-3/4"></div>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant p-4 rounded-lg min-w-[140px] flex-shrink-0">
<span className="font-caption text-caption text-on-surface-variant block mb-1">Health Update</span>
<span className="font-headline-md text-headline-md text-eagle-red">Day 14</span>
<span className="font-caption text-caption text-on-surface-variant block mt-1">Cycle Tracking</span>
</div>
</div>
{/*  Main Bento Services  */}
<h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Digital Services</h3>
<div className="bento-grid mb-8">
{/*  Micro-Credit  */}
<div className="bento-item-large bg-surface-container-lowest border border-outline-variant p-5 rounded-lg flex items-center justify-between group active:scale-[0.98] transition-transform">
<div className="flex flex-col">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-forest-green" data-icon="payments">payments</span>
<h4 className="font-headline-md text-headline-md text-forest-green">Micro-Credit</h4>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-[200px]">Access soft loans for your business growth.</p>
</div>
<div className="bg-secondary-container p-3 rounded-full">
<span className="material-symbols-outlined text-on-secondary-container" data-icon="arrow_forward">arrow_forward</span>
</div>
</div>
{/*  Vocational Training  */}
<div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-lg flex flex-col active:scale-[0.98] transition-transform">
<span className="material-symbols-outlined text-forest-green mb-4" data-icon="school">school</span>
<h4 className="font-headline-md text-headline-md text-on-surface mb-2">Skills Hub</h4>
<p className="font-caption text-caption text-on-surface-variant">Track your vocational progress and certificates.</p>
</div>
{/*  Maternal Health  */}
<div className="bg-surface-container-lowest border border-outline-variant p-5 rounded-lg flex flex-col active:scale-[0.98] transition-transform">
<span className="material-symbols-outlined text-eagle-red mb-4" data-icon="medical_services">medical_services</span>
<h4 className="font-headline-md text-headline-md text-on-surface mb-2">Health</h4>
<p className="font-caption text-caption text-on-surface-variant">Access maternal resources and clinical appointments.</p>
</div>
{/*  Community Forums  */}
<div className="bento-item-large bg-forest-green p-5 rounded-lg flex items-center justify-between text-state-white active:scale-[0.98] transition-transform">
<div className="flex flex-col">
<h4 className="font-headline-md text-headline-md mb-1">Empowerment Forum</h4>
<p className="font-body-md text-body-md opacity-90">Connect with fellow female leaders in Abia.</p>
</div>
<span className="material-symbols-outlined text-[40px] opacity-20" data-icon="groups">groups</span>
</div>
</div>
{/*  Recent Activity / News  */}
<h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Announcement Box</h3>
<div className="space-y-3 mb-12">
<div className="flex gap-4 p-4 bg-surface-container-low rounded-lg border-l-4 border-brass-gold">
<div className="flex-shrink-0 w-12 h-12 rounded bg-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green" data-icon="campaign">campaign</span>
</div>
<div>
<h5 className="font-headline-md text-[16px] leading-tight text-on-surface">New Grant for Agro-Entrepreneurs</h5>
<p className="font-caption text-caption text-on-surface-variant mt-1">Applications open Monday. Eligibility criteria updated in the portal docs.</p>
</div>
</div>
<div className="flex gap-4 p-4 bg-surface-container-low rounded-lg">
<div className="flex-shrink-0 w-12 h-12 rounded bg-surface-variant flex items-center justify-center">
<span className="material-symbols-outlined text-forest-green" data-icon="event">event</span>
</div>
<div>
<h5 className="font-headline-md text-[16px] leading-tight text-on-surface">Gender Equality Summit 2024</h5>
<p className="font-caption text-caption text-on-surface-variant mt-1">Umuahia Convention Center. Registration is free for all portal users.</p>
</div>
</div>
</div>
</main>
{/*  FAB for quick action  */}
<button className="fixed bottom-24 right-6 w-14 h-14 bg-forest-green text-state-white rounded-full shadow-lg flex items-center justify-center active:scale-90 transition-transform z-40">
<span className="material-symbols-outlined" data-icon="add" style={{"fontVariationSettings":"'FILL' 0, 'wght' 600"}}>add</span>
</button>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 bg-surface-container-lowest border-t border-outline-variant shadow-sm rounded-t-full">
<div className="flex justify-around items-center h-20 w-full px-base pb-safe">
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200" href="/home-mobile">
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
