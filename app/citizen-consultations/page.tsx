export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .active-gold-accent {\n            position: relative;\n        }\n        .active-gold-accent::after {\n            content: '';\n            position: absolute;\n            bottom: -4px;\n            left: 0;\n            width: 24px;\n            height: 3px;\n            background-color: #D4AF37;\n        }\n        ::-webkit-scrollbar { width: 6px; }\n        ::-webkit-scrollbar-track { background: #f1f5ee; }\n        ::-webkit-scrollbar-thumb { background: #bec9be; border-radius: 10px; }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  Top Navigation Bar  */}
<header className="fixed top-0 w-full z-50 bg-background border-b border-outline-variant h-20">
<div className="flex justify-between items-center px-margin-desktop h-full max-w-max-width mx-auto">
<div className="flex items-center gap-2">
<span className="font-display-lg text-headline-md font-bold text-primary">ABIA ONE</span>
<span className="hidden md:inline-block h-6 w-[1px] bg-outline-variant mx-4"></span>
<span className="hidden md:inline-block font-label-md text-label-md text-on-surface-variant uppercase tracking-widest">Connect Abia</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-primary border-b-2 border-brass-gold font-semibold pb-1 cursor-pointer transition-all duration-200 active:opacity-80" href="#">Governance</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer active:opacity-80" href="#">Economy</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer active:opacity-80" href="#">Digital Gov</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer active:opacity-80" href="#">Security</a>
</nav>
<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center bg-surface-container px-4 py-2 rounded-lg border border-outline-variant">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md placeholder-on-surface-variant ml-2 w-48" placeholder="Search consultations..." type="text" />
</div>
<button className="bg-primary text-state-white px-6 py-2.5 rounded-lg font-medium hover:opacity-90 transition-all cursor-pointer">Citizen Portal</button>
</div>
</div>
</header>
{/*  Sidebar Navigation  */}
<aside className="fixed left-0 top-20 h-screen w-64 bg-surface-container-low border-r border-outline-variant hidden md:flex flex-col py-6">
<div className="px-6 mb-8">
<h2 className="font-headline-md text-headline-md font-bold text-primary">Navigation</h2>
<p className="font-body-md text-caption text-on-surface-variant">State Operating System</p>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-6 py-4 text-on-surface-variant hover:bg-surface-variant transition-colors group cursor-pointer" href="#">
<span className="material-symbols-outlined group-hover:text-primary">payments</span>
<span className="font-body-md">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 px-6 py-4 text-on-surface-variant hover:bg-surface-variant transition-colors group cursor-pointer" href="#">
<span className="material-symbols-outlined group-hover:text-primary">account_balance</span>
<span className="font-body-md">Digital Government</span>
</a>
<a className="flex items-center gap-3 px-6 py-4 text-on-surface-variant hover:bg-surface-variant transition-colors group cursor-pointer" href="#">
<span className="material-symbols-outlined group-hover:text-primary">gavel</span>
<span className="font-body-md">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 px-6 py-4 text-forest-green font-bold border-l-4 border-brass-gold bg-surface-container-high cursor-pointer" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>verified_user</span>
<span className="font-body-md">Public Trust</span>
</a>
</nav>
<div className="px-6 pt-6 border-t border-outline-variant space-y-4">
<button className="w-full py-3 bg-brass-gold text-primary font-bold rounded-lg hover:brightness-110 transition-all">Launch Service</button>
<div className="flex flex-col gap-2">
<a className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors py-2" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-caption">Settings</span>
</a>
<a className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors py-2" href="#">
<span className="material-symbols-outlined">help</span>
<span className="text-caption">Support</span>
</a>
</div>
</div>
</aside>
{/*  Main Content  */}
<main className="md:ml-64 pt-20 min-h-screen">
<div className="max-w-max-width mx-auto px-margin-mobile md:px-12 py-10">
{/*  Hero Header  */}
<section className="mb-12 relative overflow-hidden rounded-xl bg-primary-container p-8 md:p-16 flex flex-col md:flex-row items-center gap-10">
<div className="absolute inset-0 opacity-10">

</div>
<div className="relative z-10 md:w-3/5">
<div className="inline-flex items-center gap-2 bg-brass-gold/20 text-brass-gold px-3 py-1 rounded-full text-caption font-bold mb-6">
<span className="material-symbols-outlined text-[14px]">podcasts</span>
                        LIVE PARTICIPATION
                    </div>
<h1 className="font-display-lg text-headline-lg md:text-display-lg text-state-white mb-6">Connect Abia: Your Voice in Governance</h1>
<p className="font-body-lg text-body-lg text-on-primary-container mb-8 max-w-xl">
                        Direct participation in the legislative and executive processes. Join live town halls, respond to surveys, and shape the future of our state infrastructure and policies.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-state-white text-primary px-8 py-4 rounded font-bold hover:bg-surface-bright transition-all flex items-center gap-2">
                            Join Active Consultation <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="border border-state-white text-state-white px-8 py-4 rounded font-bold hover:bg-state-white/10 transition-all">
                            View Policy Archive
                        </button>
</div>
</div>
<div className="relative z-10 md:w-2/5 hidden lg:block">
<div className="bg-surface/10 backdrop-blur-md p-6 rounded-xl border border-state-white/20">
<div className="flex justify-between items-center mb-4">
<span className="text-state-white font-bold">Participation Stats</span>
<span className="text-brass-gold font-mono text-label-md">Live</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-end">
<span className="text-on-primary-container text-caption uppercase">Active Citizens</span>
<span className="text-state-white font-bold text-headline-md">12,842</span>
</div>
<div className="w-full bg-state-white/10 h-2 rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[75%]"></div>
</div>
<div className="flex justify-between text-caption text-on-primary-container">
<span>Engagement Goal: 15k</span>
<span>85% reached</span>
</div>
</div>
</div>
</div>
</section>
{/*  Bento Grid - Live Consultations & Feedback  */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-16">
{/*  Live Town Halls (Main Bento Item)  */}
<div className="lg:col-span-8 space-y-6">
<div className="flex justify-between items-end border-l-4 border-brass-gold pl-4">
<div>
<h2 className="font-headline-lg text-headline-md text-primary">Live Consultations</h2>
<p className="text-on-surface-variant font-body-md">Join real-time discussions with government representatives.</p>
</div>
<a className="text-primary font-bold text-caption hover:underline" href="#">View All Sessions</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  Town Hall Card 1  */}
<div className="bg-state-white border border-outline-variant p-6 rounded-lg group hover:shadow-lg transition-all">
<div className="relative h-48 mb-6 overflow-hidden rounded">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A professional government assembly hall with modern digital screens displaying data visualizations. The room is filled with diverse citizens and officials engaged in a structured discussion. The lighting is crisp and even, emphasizing a transparent, high-tech institutional atmosphere with forest green and brass gold accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUkefASQGrEIXb7Vah5wgKC76AKBGDkj1dFPX-xjMujbtnkwhK8iHbXiJbP37AddNEvI8jeFgF16rMpFPruPqNd856w2O-91Zb_65qAfgIejSmJAJ-7cLTK5GCOAavyQiYKB3vFm6HIAClbL3seOA6S8TwIfaRLk-dppHHp4JNh1YpSAmuBixBUDhDLtjMWTuH1WUgZiW9Km6u3OQZGDPGrp5TgJVqx4HOQ88Y7PKMcgMJyMByj_hKpmbr8IsTqsuric6VGWwXgDU" />
<div className="absolute top-3 left-3 bg-eagle-red text-state-white px-3 py-1 rounded text-caption font-bold flex items-center gap-1">
<span className="animate-pulse w-2 h-2 bg-state-white rounded-full"></span> LIVE NOW
                                </div>
</div>
<h3 className="font-headline-md text-[20px] text-primary mb-2 group-hover:text-forest-green transition-colors">Urban Infrastructure Renewal Plan 2024</h3>
<p className="text-on-surface-variant text-body-md mb-6 line-clamp-2">Discussing the phase 2 expansion of the Aba Ring Road and smart traffic systems integration.</p>
<div className="flex items-center justify-between pt-4 border-t border-outline-variant">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-state-white bg-surface-container flex items-center justify-center text-[10px] font-bold">JD</div>
<div className="w-8 h-8 rounded-full border-2 border-state-white bg-surface-container flex items-center justify-center text-[10px] font-bold">AS</div>
<div className="w-8 h-8 rounded-full border-2 border-state-white bg-surface-container flex items-center justify-center text-[10px] font-bold">+12</div>
</div>
<button className="text-forest-green font-bold text-caption flex items-center gap-1 group-hover:gap-2 transition-all">
                                    JOIN SESSION <span className="material-symbols-outlined text-[16px]">play_circle</span>
</button>
</div>
</div>
{/*  Town Hall Card 2  */}
<div className="bg-state-white border border-outline-variant p-6 rounded-lg group hover:shadow-lg transition-all">
<div className="relative h-48 mb-6 overflow-hidden rounded">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A bright, modern workspace where professional administrators are reviewing digital policy documents on large tablets. The environment is clean and sophisticated, featuring minimalist architecture and subtle natural light. The aesthetic is professional and calm, reflecting transparent governance and meticulous digital oversight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh5N2xSovTHe2zaVoyqaGU5o5seBmFaRdexplHu43FtLsQsfEfcQypm4ee6FzXKCuzfPAkOrdO7cL88vAS-_Tw5zr1uwra-4kEkUeuLPm0TluR2e0coUFWooLzTQE1xYhZH35CN0Kxt-XF8xcZBEyns7XRRzxHoHE4BlY1K7dnZ8OJIYcVW-JgN0ooCuIjByenbAzSTMPM6Q3wGy8ZwCeaNL5KnlpT54VMYpJg-iah48OYKaKEoh23PlaEadm9qBm8Rywl4Z04R94" />
<div className="absolute top-3 left-3 bg-forest-green text-state-white px-3 py-1 rounded text-caption font-bold">STARTS AT 2:00 PM</div>
</div>
<h3 className="font-headline-md text-[20px] text-primary mb-2 group-hover:text-forest-green transition-colors">Education Digitalization Survey</h3>
<p className="text-on-surface-variant text-body-md mb-6 line-clamp-2">Public review of the 'One Student One Tablet' initiative for state-owned secondary schools.</p>
<div className="flex items-center justify-between pt-4 border-t border-outline-variant">
<div className="flex items-center gap-2 text-on-surface-variant text-caption">
<span className="material-symbols-outlined text-[16px]">calendar_today</span>
                                    Today, Oct 24
                                </div>
<button className="text-forest-green font-bold text-caption flex items-center gap-1 group-hover:gap-2 transition-all">
                                    SET REMINDER <span className="material-symbols-outlined text-[16px]">notifications</span>
</button>
</div>
</div>
</div>
</div>
{/*  Feedback Sidebar (Bento Item)  */}
<div className="lg:col-span-4 bg-surface-container border border-outline-variant rounded-lg p-8 h-fit lg:sticky lg:top-24">
<div className="mb-8">
<h2 className="font-headline-md text-headline-md text-primary mb-2">Submit Feedback</h2>
<div className="w-12 h-1 bg-brass-gold mb-4"></div>
<p className="text-on-surface-variant text-body-md leading-relaxed">
                            Every voice matters. Your feedback directly impacts how we refine state policies.
                        </p>
</div>
<form className="space-y-4" onClick={() => {}}>
<div>
<label className="block text-caption font-bold text-on-surface uppercase tracking-wider mb-2">Policy Area</label>
<select className="w-full bg-state-white border border-outline-variant rounded p-3 text-body-md focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all appearance-none">
<option>Select a category...</option>
<option>Infrastructure &amp; Roads</option>
<option>Healthcare Services</option>
<option>Education &amp; Skills</option>
<option>Civil Service Reform</option>
<option>Security &amp; Safety</option>
</select>
</div>
<div>
<label className="block text-caption font-bold text-on-surface uppercase tracking-wider mb-2">Your Feedback</label>
<textarea className="w-full bg-state-white border border-outline-variant rounded p-3 text-body-md focus:border-forest-green focus:ring-1 focus:ring-forest-green transition-all" placeholder="Be specific and constructive..." rows="4"></textarea>
</div>
<div className="flex items-center gap-2 mb-4">
<input className="rounded border-outline-variant text-forest-green focus:ring-forest-green" id="anon" type="checkbox" />
<label className="text-caption text-on-surface-variant" htmlFor="anon">Submit as anonymous profile</label>
</div>
<button className="w-full bg-primary text-state-white font-bold py-4 rounded hover:bg-forest-green shadow-sm active:scale-[0.98] transition-all" type="submit">
                            SUBMIT TO GOVERNANCE HUB
                        </button>
</form>
<div className="mt-10 p-4 bg-brass-gold/10 rounded-lg border border-brass-gold/20 flex gap-4">
<span className="material-symbols-outlined text-brass-gold shrink-0">shield_lock</span>
<div className="text-caption leading-tight text-on-surface-variant">
<strong>Privacy Guaranteed:</strong> Your identity is protected by the Abia State Data Protection Framework.
                        </div>
</div>
</div>
</section>
{/*  Public Trust Metrics Section  */}
<section className="mb-16">
<div className="mb-8">
<h2 className="font-headline-lg text-headline-md text-primary text-center mb-2">Transparency &amp; Impact</h2>
<p className="text-on-surface-variant text-body-md text-center">How citizen feedback is transforming state operations.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-state-white p-6 border border-outline-variant rounded-lg flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-forest-green mb-4">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>how_to_reg</span>
</div>
<div className="text-display-lg text-headline-md font-bold text-primary mb-1">84%</div>
<div className="text-caption text-on-surface-variant uppercase font-bold tracking-widest">Resolution Rate</div>
<p className="text-caption mt-4 text-on-surface-variant">of actionable feedback addressed within 30 days.</p>
</div>
<div className="bg-state-white p-6 border border-outline-variant rounded-lg flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-forest-green mb-4">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>groups</span>
</div>
<div className="text-display-lg text-headline-md font-bold text-primary mb-1">210k+</div>
<div className="text-caption text-on-surface-variant uppercase font-bold tracking-widest">Citizens Engaged</div>
<p className="text-caption mt-4 text-on-surface-variant">Active participants across all digital town halls.</p>
</div>
<div className="bg-state-white p-6 border border-outline-variant rounded-lg flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-forest-green mb-4">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>policy</span>
</div>
<div className="text-display-lg text-headline-md font-bold text-primary mb-1">45</div>
<div className="text-caption text-on-surface-variant uppercase font-bold tracking-widest">Policies Shaped</div>
<p className="text-caption mt-4 text-on-surface-variant">Executive bills modified based on citizen input.</p>
</div>
<div className="bg-state-white p-6 border border-outline-variant rounded-lg flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-forest-green mb-4">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>stars</span>
</div>
<div className="text-display-lg text-headline-md font-bold text-primary mb-1">4.8</div>
<div className="text-caption text-on-surface-variant uppercase font-bold tracking-widest">Trust Index</div>
<p className="text-caption mt-4 text-on-surface-variant">Average citizen satisfaction with platform transparency.</p>
</div>
</div>
</section>
{/*  Active Public Surveys Section  */}
<section className="mb-16">
<div className="flex items-center gap-4 mb-8">
<h2 className="font-headline-lg text-headline-md text-primary">Public Surveys</h2>
<div className="h-[1px] flex-1 bg-outline-variant"></div>
</div>
<div className="space-y-4">
{/*  Survey Item 1  */}
<div className="bg-state-white border border-outline-variant p-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-6 hover:border-forest-green transition-all">
<div className="flex gap-6 items-start">
<div className="w-16 h-16 rounded bg-primary/5 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[32px]">park</span>
</div>
<div>
<h3 className="font-headline-md text-body-lg text-primary mb-1">Green Spaces &amp; Park Development</h3>
<p className="text-on-surface-variant text-body-md mb-2">Identifying locations for new recreational zones in Umuahia North.</p>
<div className="flex gap-4">
<span className="text-caption bg-surface-container px-2 py-1 rounded">5 mins to complete</span>
<span className="text-caption text-forest-green font-bold">3,200 Participants</span>
</div>
</div>
</div>
<button className="w-full md:w-auto px-8 py-3 border-2 border-brass-gold text-primary font-bold rounded hover:bg-brass-gold hover:text-primary transition-all">TAKE SURVEY</button>
</div>
{/*  Survey Item 2  */}
<div className="bg-state-white border border-outline-variant p-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-6 hover:border-forest-green transition-all">
<div className="flex gap-6 items-start">
<div className="w-16 h-16 rounded bg-primary/5 flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary text-[32px]">health_and_safety</span>
</div>
<div>
<h3 className="font-headline-md text-body-lg text-primary mb-1">Rural Healthcare Access Audit</h3>
<p className="text-on-surface-variant text-body-md mb-2">Help us assess the quality of primary healthcare centers in your local government.</p>
<div className="flex gap-4">
<span className="text-caption bg-surface-container px-2 py-1 rounded">8 mins to complete</span>
<span className="text-caption text-forest-green font-bold">12,500 Participants</span>
</div>
</div>
</div>
<button className="w-full md:w-auto px-8 py-3 border-2 border-brass-gold text-primary font-bold rounded hover:bg-brass-gold hover:text-primary transition-all">TAKE SURVEY</button>
</div>
</div>
</section>
</div>
</main>
{/*  Footer  */}
<footer className="relative bottom-0 w-full bg-surface-container-highest border-t border-outline-variant">
<div className="flex flex-col md:flex-row justify-between items-center py-gutter px-margin-desktop max-w-max-width mx-auto">
<div className="mb-6 md:mb-0 text-center md:text-left">
<div className="font-headline-md text-headline-md text-primary mb-2">ABIA ONE</div>
<p className="font-caption text-caption text-on-surface-variant max-w-xs">
                    © 2024 Abia State Government. All rights reserved. Built for the future of governance.
                </p>
</div>
<div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
<a className="text-on-surface-variant font-caption hover:text-primary transition-colors underline-offset-4" href="#">Institutional Links</a>
<a className="text-on-surface-variant font-caption hover:text-primary transition-colors underline-offset-4" href="#">Transparency Info</a>
<a className="text-on-surface-variant font-caption hover:text-primary transition-colors underline-offset-4" href="#">Privacy Policy</a>
<a className="text-on-surface-variant font-caption hover:text-primary transition-colors underline-offset-4" href="#">Contact Support</a>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all cursor-pointer">
<span className="material-symbols-outlined text-[20px]">share</span>
</div>
<div className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all cursor-pointer">
<span className="material-symbols-outlined text-[20px]">public</span>
</div>
</div>
</div>
</footer>
{/*  FAB (Suppressed for this detail screen as per instructions, but kept logic for potential context)  */}


      </div>
    </>
  );
}
