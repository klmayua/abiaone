"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { background-color: #f6fbf3; color: #181d19; overflow-x: hidden; }\n        .bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 24px; }\n        .glass-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(12px); border: 1px solid #E2E8F0; }\n        .active-nav-link { border-bottom: 2px solid #006838; padding-bottom: 4px; color: #006838; }\n        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }\n        .custom-scrollbar::-webkit-scrollbar { width: 6px; }\n        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f5ee; }\n        .custom-scrollbar::-webkit-scrollbar-thumb { background: #006838; border-radius: 10px; }\n    \n\n                @keyframes scroll {\n                    0% { transform: translateX(0); }\n                    100% { transform: translateX(-50%); }\n                }\n                .animate-scroll {\n                    display: flex;\n                    width: 200%;\n                    animation: scroll 40s linear infinite;\n                }\n            \n\n                @keyframes scroll {\n                    0% { transform: translateX(0); }\n                    100% { transform: translateX(-50%); }\n                }\n                .animate-scroll {\n                    display: flex;\n                    width: 200%;\n                    animation: scroll 40s linear infinite;\n                }" }} />
  
      {/* Screen markup */}
      <div className="font-body-md text-body-md selection:bg-primary-fixed selection:text-on-primary-fixed">
        
{/*  TopNavBar  */}
<header className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant">
<div className="flex justify-between items-center h-16 px-margin-desktop max-w-max-width mx-auto">
<div className="flex items-center gap-4">
<span className="font-headline-md text-headline-md text-forest-green font-semibold">ABIA ONE</span>
</div>
<nav className="hidden md:flex gap-8 items-center">
<a className="font-body-md text-body-md text-on-surface-variant hover:text-forest-green transition-colors cursor-pointer" href="/serve-abia">Serve Abia</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-forest-green transition-colors cursor-pointer" href="/jobs-abia">Jobs Abia</a>
<a className="font-body-md text-body-md text-on-surface-variant hover:text-forest-green transition-colors cursor-pointer" href="/ai-academy">AI Academy</a>
<a className="font-body-md text-body-md text-forest-green border-b-2 border-forest-green pb-1 cursor-pointer" href="/connect-abia">Connect Abia</a>
</nav>
<div className="flex items-center gap-4">
<button className="bg-forest-green text-state-white px-6 py-2 rounded font-body-md font-medium hover:opacity-90 active:opacity-80 transition-all">
                    Citizen Portal
                </button>
</div>
</div>
</header>
<main className="mt-16">
{/*  Hero Section  */}
<section className="relative h-[600px] flex items-center overflow-hidden bg-surface-container-low">

<div className="relative z-10 px-margin-desktop max-w-max-width mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="animate-in fade-in slide-in-from-left duration-1000">
<span className="font-label-md text-label-md text-forest-green bg-primary-fixed px-3 py-1 rounded-full">CITIZEN ENGAGEMENT</span>
<h1 className="font-display-lg text-display-lg mt-6 mb-4 text-on-surface">Your Voice, Our Progress</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
                        Connect Abia is the digital bridge between the government and its citizens. Participate in shaping the future of our state through direct feedback, town halls, and real-time updates.
                    </p>
<div className="flex gap-4">
<button className="bg-forest-green text-state-white px-8 py-4 rounded font-body-md font-bold hover:shadow-lg transition-all flex items-center gap-2">
                            Share Feedback <span className="material-symbols-outlined">send</span>
</button>
<button className="border-2 border-brass-gold text-secondary px-8 py-4 rounded font-body-md font-bold hover:bg-secondary-fixed transition-all">
                            View Updates
                        </button>
</div>
</div>
<div className="hidden md:block relative h-full">
<div className="glass-card p-6 rounded-xl shadow-xl transform rotate-3 absolute right-0 top-0 w-64 z-20">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-forest-green">check_circle</span>
<span className="font-label-md text-label-md">Status: Active</span>
</div>
<p className="font-body-md font-semibold text-on-surface">Road Construction Update: Umueze Road</p>
<div className="w-full bg-surface-container mt-4 h-2 rounded-full">
<div className="bg-forest-green h-full w-3/4 rounded-full"></div>
</div>
<span className="text-caption mt-1 inline-block">75% Complete</span>
</div>
<img className="rounded-xl shadow-2xl w-full h-[400px] object-cover -rotate-2 border-4 border-white" data-alt="A professional aerial view of a vibrant, sunlit modern administrative district in Abia State, featuring clean architectural lines, lush green boulevards, and people walking between sleek buildings. The lighting is crisp and optimistic, emphasizing a corporate light-mode aesthetic with Forest Green accents in the landscaping. The scene conveys a sense of structured governance and technological advancement within a peaceful community setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxjIZKvh0UwioZr3H2uJwJEOT83j2lgUGnoD0z2YE47fAaKoQZnTcEmJ3TXfpWWSWJP3Nyq9KOLZdgtW2yHhc7lgrLUe9JtgkjXqWPYqjPKveBrwFeGU7J2_6rj49PdoqIn4-4zxPOSvFp5xvFD7NUhWOvi8CEaebBYAU6UN-RMxPPKNzyF1A32NuLLe9v700W65Jwx2ztwNtE0FEmiOSpSE-2aglmWKvjKCWnTPEiUUoC98tY3BFOu3b-nk0FIUB21Avi-F_iCE0" />
</div>
</div>
</section>
{/*  Main Content Bento Grid  */}
<section className="px-margin-desktop py-20 max-w-max-width mx-auto">
<div className="bento-grid">
{/*  State Transformation Updates  */}
<div className="col-span-12 md:col-span-8 flex flex-col gap-6">
<div className="flex justify-between items-end mb-4">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">State Transformation Updates</h2>
<div className="w-24 h-1 bg-brass-gold mt-2"></div>
</div>
<button className="text-forest-green font-label-md flex items-center gap-1 hover:underline">
                            View Newsroom <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/*  News Card 1  */}
<div className="bg-state-white border border-outline-variant p-6 flex flex-col group cursor-pointer hover:shadow-md transition-all">
<div className="overflow-hidden rounded mb-4 h-48">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="An interior shot of a high-tech education center in Abia State, where young adults are engaged with modern computer workstations. The room is bright, using a minimalist color scheme of white and cool grays, reflecting the Modern Governance aesthetic. The focus is on progress, skill acquisition, and digital inclusion, captured with professional depth-of-field and clean studio-style lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlIclmJW73B_oKZ8GUpkhHmr0Kcq44kEeEKMoeGSvmkLDR1_OwU1hiAn7gSh3x_94ORxBqxxRDuLu1ap5_byQ_1VdW5uDo9WX1b0bYjp_6rZ6d35xbY6sLcDyjSRI7GbtstBKgQoG8IgsBI6hC3lHOpoglrOFSMUfnQej6_lFb9N6EIQ6-R43qPLSArECSAcM0amoOk6n_imnN_ps_w_xHAjGExqrT2Q2zGrGEXgeHeueeXDMR4QoqnpG0ZyqM73g5bgesHqo9ldk" />
</div>
<span className="font-label-md text-caption text-forest-green mb-2">INFRASTRUCTURE • 2H AGO</span>
<h3 className="font-headline-md text-on-surface group-hover:text-forest-green transition-colors">Abia AI Academy Launches Pilot Program in Umuahia</h3>
<p className="text-body-md text-on-surface-variant mt-3 flex-grow">Equipping 5,000 youths with cutting-edge artificial intelligence skills to drive the state's digital economy.</p>
</div>
{/*  News Card 2  */}
<div className="bg-state-white border border-outline-variant p-6 flex flex-col group cursor-pointer hover:shadow-md transition-all">
<div className="overflow-hidden rounded mb-4 h-48">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A modern architectural facade of a new government complex in Abia, showcasing glass walls and sustainable design features. The lighting is soft afternoon sun, casting long shadows that highlight the textures of the stone and glass. The visual style is corporate and professional, using a palette of white, Forest Green, and subtle Brass Gold accents in the signage." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoU96uDUEBXV8A6fLR8swtSND8ZBdC1zivEzRZ2_uEM1yT3bdSI2QAQMmWq9OkmZsoUQcGQ3J-FgVG_cfOcPDBqLbHmoU-fq_X1vsIoXh2z6GT4bnV86UEma9tmyCo_zAm2c-Fuu8_ktcyHGF0s9F_2erRFHAKERhwKDlMnOQd2WtxpLd-UOBvubtUWbZtxLhe6C3NJR4KDg4wTMgZmTZyNbfPGLAy_6icyNDzooIT08uHHwA8PDS8ERL3Fzw7Jf-gyNADAmcEJ_M" />
</div>
<span className="font-label-md text-caption text-forest-green mb-2">GOVERNANCE • 1D AGO</span>
<h3 className="font-headline-md text-on-surface group-hover:text-forest-green transition-colors">Transparency Portal: Q3 Expenditure Report Published</h3>
<p className="text-body-md text-on-surface-variant mt-3 flex-grow">Citizens can now access detailed breakdowns of all infrastructure investments made in the last quarter.</p>
</div>
</div>
</div>
{/*  Digital Town Halls Sidebar  */}
<div className="col-span-12 md:col-span-4 glass-card p-8 rounded-xl border-forest-green/20">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-forest-green text-3xl">event</span>
<h2 className="font-headline-md text-on-surface">Digital Town Halls</h2>
</div>
<div className="space-y-6">
{/*  Event 1  */}
<div className="border-l-4 border-brass-gold pl-4">
<span className="font-label-md text-caption text-secondary">LIVE IN 3 DAYS</span>
<h4 className="font-body-md font-bold text-on-surface mt-1">Healthcare Reform Strategy</h4>
<p className="text-caption text-on-surface-variant mt-1">Led by: Commissioner of Health</p>
<button className="mt-3 text-forest-green font-label-md flex items-center gap-1 hover:gap-2 transition-all">
                                Set Reminder <span className="material-symbols-outlined text-sm">notifications</span>
</button>
</div>
{/*  Event 2  */}
<div className="border-l-4 border-outline-variant pl-4">
<span className="font-label-md text-caption text-on-surface-variant">NOV 24, 10:00 AM</span>
<h4 className="font-body-md font-bold text-on-surface mt-1">Urban Renewal: Aba 2.0</h4>
<p className="text-caption text-on-surface-variant mt-1">Led by: Governor's Office</p>
<button className="mt-3 text-forest-green font-label-md flex items-center gap-1 hover:gap-2 transition-all">
                                Register <span className="material-symbols-outlined text-sm">edit_square</span>
</button>
</div>
{/*  Event 3  */}
<div className="border-l-4 border-outline-variant pl-4">
<span className="font-label-md text-caption text-on-surface-variant">DEC 02, 2:00 PM</span>
<h4 className="font-body-md font-bold text-on-surface mt-1">Agricultural Subsidy Review</h4>
<p className="text-caption text-on-surface-variant mt-1">Led by: Ministry of Agric</p>
<button className="mt-3 text-forest-green font-label-md flex items-center gap-1 hover:gap-2 transition-all">
                                Register <span className="material-symbols-outlined text-sm">edit_square</span>
</button>
</div>
</div>
</div>
{/*  Interactive Polls Section  */}
<div className="col-span-12 bg-inverse-surface text-state-white p-10 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="md:col-span-1">
<h3 className="font-headline-lg text-primary-fixed mb-4">State Polls</h3>
<p className="font-body-md opacity-80 mb-6">Your opinion directly influences policy priority. Vote on current initiatives to help us understand what matters most to your community.</p>
<div className="flex items-center gap-2 text-primary-fixed font-label-md">
<span className="material-symbols-outlined">how_to_vote</span>
<span>12,402 Votes this week</span>
</div>
</div>
<div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-surface-container/10 p-6 rounded-lg border border-white/10">
<h4 className="font-body-md font-bold mb-4">Which sector needs the most urgent digital upgrade?</h4>
<div className="space-y-3">
<button className="w-full text-left p-3 rounded bg-white/5 border border-white/20 hover:bg-white/20 transition-all flex justify-between items-center group">
<span>Public Transportation</span>
<span className="text-caption opacity-0 group-hover:opacity-100 transition-opacity">Vote</span>
</button>
<button className="w-full text-left p-3 rounded bg-white/5 border border-white/20 hover:bg-white/20 transition-all flex justify-between items-center group">
<span>Land Tiling &amp; Registry</span>
<span className="text-caption opacity-0 group-hover:opacity-100 transition-opacity">Vote</span>
</button>
<button className="w-full text-left p-3 rounded bg-white/5 border border-white/20 hover:bg-white/20 transition-all flex justify-between items-center group">
<span>Waste Management</span>
<span className="text-caption opacity-0 group-hover:opacity-100 transition-opacity">Vote</span>
</button>
</div>
</div>
<div className="bg-surface-container/10 p-6 rounded-lg border border-white/10">
<h4 className="font-body-md font-bold mb-4">Preferred frequency for community town halls?</h4>
<div className="space-y-4">
<div>
<div className="flex justify-between text-caption mb-1">
<span>Monthly</span>
<span>64%</span>
</div>
<div className="h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-brass-gold w-[64%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-caption mb-1">
<span>Bi-Weekly</span>
<span>22%</span>
</div>
<div className="h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-primary-fixed w-[22%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-caption mb-1">
<span>Quarterly</span>
<span>14%</span>
</div>
<div className="h-2 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white/20 w-[14%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Citizen Feedback Form  */}
<div className="col-span-12 md:col-span-7 bg-state-white border border-outline-variant p-10 flex flex-col justify-center">
<h2 className="font-headline-lg text-on-surface mb-2">Citizen Feedback</h2>
<p className="text-body-md text-on-surface-variant mb-8">Have a suggestion or need to report an issue? Our team reviews every submission within 48 hours.</p>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="font-label-md text-caption uppercase text-on-surface-variant">Full Name</label>
<input className="border border-slate-400 p-3 rounded focus:border-forest-green focus:ring-1 focus:ring-forest-green outline-none" placeholder="Abia Citizen" type="text" />
</div>
<div className="flex flex-col gap-2">
<label className="font-label-md text-caption uppercase text-on-surface-variant">Email Address</label>
<input className="border border-slate-400 p-3 rounded focus:border-forest-green focus:ring-1 focus:ring-forest-green outline-none" placeholder="citizen@example.com" type="email" />
</div>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-md text-caption uppercase text-on-surface-variant">Subject / Category</label>
<select className="border border-slate-400 p-3 rounded focus:border-forest-green focus:ring-1 focus:ring-forest-green outline-none appearance-none">
<option>Infrastructure Suggestion</option>
<option>Community Service Feedback</option>
<option>Policy Inquiry</option>
<option>Report an Issue</option>
<option>Other</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="font-label-md text-caption uppercase text-on-surface-variant">Your Message</label>
<textarea className="border border-slate-400 p-3 rounded focus:border-forest-green focus:ring-1 focus:ring-forest-green outline-none" placeholder="How can we improve Abia State?" rows={4}></textarea>
</div>
<button className="bg-forest-green text-state-white px-10 py-4 rounded font-body-md font-bold hover:bg-primary transition-all self-start" type="button">
                            Submit Message
                        </button>
</form>
</div>
{/*  Call to Action Side Card  */}
<div className="col-span-12 md:col-span-5 bg-surface-container flex flex-col p-10 relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col">
<h3 className="font-headline-lg text-on-surface mb-6">Stay Connected, Everywhere.</h3>
<p className="text-body-md text-on-surface-variant mb-10">Download the Abia One mobile app to receive real-time notifications about local town halls, urgent state announcements, and personalized service updates.</p>
<div className="mt-auto space-y-4">
<button className="w-full flex items-center justify-center gap-4 bg-on-surface text-state-white p-4 rounded hover:bg-slate-gray transition-all">
<span className="material-symbols-outlined">apps</span>
<div className="text-left">
<p className="text-[10px] leading-tight">Download on the</p>
<p className="text-body-md font-bold leading-tight">App Store</p>
</div>
</button>
<button className="w-full flex items-center justify-center gap-4 bg-on-surface text-state-white p-4 rounded hover:bg-slate-gray transition-all">
<span className="material-symbols-outlined">play_arrow</span>
<div className="text-left">
<p className="text-[10px] leading-tight">Get it on</p>
<p className="text-body-md font-bold leading-tight">Google Play</p>
</div>
</button>
</div>
</div>
<div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-primary-fixed/30 group-hover:scale-125 transition-transform duration-1000"></div>
</div>
</div>
</section>
{/*  Dynamic State Feed (Micro-Interactions)  */}
<section className="bg-surface-container-low py-12 border-y border-outline-variant overflow-hidden">
<div className="flex gap-12 animate-scroll whitespace-nowrap px-margin-desktop">
<div className="flex items-center gap-4 text-on-surface-variant font-label-md">
<span className="w-2 h-2 rounded-full bg-forest-green"></span>
                    NEW SCHOOL OPENED IN OHAFIA
                </div>
<div className="flex items-center gap-4 text-on-surface-variant font-label-md">
<span className="w-2 h-2 rounded-full bg-forest-green"></span>
                    WATER PROJECT IN ABA 90% COMPLETE
                </div>
<div className="flex items-center gap-4 text-on-surface-variant font-label-md">
<span className="w-2 h-2 rounded-full bg-forest-green"></span>
                    INVEST ABIA SUMMIT REGISTRATION OPEN
                </div>
<div className="flex items-center gap-4 text-on-surface-variant font-label-md">
<span className="w-2 h-2 rounded-full bg-forest-green"></span>
                    DIGITAL LAND TITLING NOW LIVE
                </div>
<div className="flex items-center gap-4 text-on-surface-variant font-label-md">
<span className="w-2 h-2 rounded-full bg-forest-green"></span>
                    ABIA AI ACADEMY ADMISSIONS EXTENDED
                </div>
</div>

</section>
</main>
{/*  Footer  */}
<footer className="bg-surface-container">
<div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-12 max-w-max-width mx-auto">
<div className="col-span-1">
<span className="font-headline-md text-headline-md text-forest-green font-bold">ABIA ONE</span>
<p className="font-caption text-caption text-on-surface-variant mt-4 leading-relaxed">
                    The official digital operating system of Abia State. Empowering citizens through technology and transparent governance.
                </p>
</div>
<div className="col-span-1 flex flex-col gap-3">
<span className="font-label-md text-forest-green font-bold mb-2">Connect</span>
<a className="font-caption text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Transparency Portals</a>
<a className="font-caption text-on-surface-variant hover:text-brass-gold transition-colors" href="/news-press-center">Institutional News</a>
<a className="font-caption text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Support</a>
</div>
<div className="col-span-1 flex flex-col gap-3">
<span className="font-label-md text-forest-green font-bold mb-2">Legal</span>
<a className="font-caption text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a>
<a className="font-caption text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Terms of Service</a>
<a className="font-caption text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Data Protection</a>
</div>
<div className="col-span-1">
<span className="font-label-md text-forest-green font-bold mb-4 block">Newsletter</span>
<div className="flex gap-2">
<input className="bg-surface p-2 text-caption rounded w-full border-none focus:ring-1 focus:ring-forest-green outline-none" placeholder="Your email" type="email" />
<button className="bg-forest-green text-state-white px-4 py-2 rounded font-caption">Join</button>
</div>
</div>
</div>
<div className="border-t border-outline-variant/30 py-6 px-margin-desktop text-center">
<p className="font-caption text-caption text-on-surface-variant">© 2024 Abia State Government. All Rights Reserved.</p>
</div>
</footer>


      </div>
    </>
  );
}
