export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .brass-accent-line {\n            position: relative;\n        }\n        .brass-accent-line::after {\n            content: '';\n            position: absolute;\n            bottom: -8px;\n            left: 0;\n            width: 40px;\n            height: 3px;\n            background-color: #D4AF37;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(12px);\n            border: 1px solid #E2E8F0;\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-surface font-body-md text-on-surface">
        
{/*  TopNavBar  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 dark:bg-forest-deep/80 backdrop-blur-md border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-4">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep dark:text-primary-fixed">ABIA ONE</span>
</div>
<div className="hidden md:flex gap-8 items-center">
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors" href="#">Economy</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors" href="#">Digital Gov</a>
<a className="font-label-caps text-label-caps text-primary dark:text-primary-fixed-dim border-b-2 border-brass-accent pb-1" href="#">Governance</a>
<a className="font-label-caps text-label-caps text-on-surface-variant dark:text-surface-variant hover:text-primary transition-colors" href="#">Security</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden lg:block px-6 py-2 bg-primary text-on-primary rounded-lg font-medium">Citizen Portal</button>
<button className="p-2 text-eagle-red">
<span className="material-symbols-outlined">emergency</span>
</button>
</div>
</nav>
{/*  SideNavBar (Hidden on Mobile)  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 bg-surface-container-low dark:bg-forest-deep border-r border-outline-variant pt-20">
<div className="px-6 mb-8">
<div className="flex items-center gap-3">
<img alt="Abia State Crest" className="w-10 h-10 object-contain" data-alt="The official crest of Abia State Nigeria featuring an eagle a shield and the state motto presented in high detail with gold and green highlights against a clean professional background representing institutional authority." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhY1q8t2hxFLp4iOHg75ah0FJOTxETLJIvK3gtPgO11Y_lQcpTSIqtyLU-dbIzcUfr22isdmxW4sSWlFc2jN18n8a8BD1ED9oPus-6LOWRUoD69HD24fZMbsQf0Ez4LAn8cz6i_JZkQKms3VVuF1StRwVVEjE6q4cNlha_2NtJfhfo_X_b3M9RS-8NFlo71mXXJ4Hg5u2Dl8WHpnL3s0C5SZ3ioUUr_IyS7as4QuuOuWyyiZH0HTd5mMqzRSj5HjTUqzM90i066b4" />
<div>
<p className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep">ABIA ONE</p>
<p className="text-[10px] uppercase tracking-widest text-outline">Modern Governance OS</p>
</div>
</div>
</div>
<nav className="flex-1 flex flex-col gap-1">
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="font-label-sm text-label-sm">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-label-sm text-label-sm">Digital Government</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg mx-2 transition-all translate-x-1" href="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>mitre</span>
<span className="font-label-sm text-label-sm">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 mx-2 rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">security</span>
<span className="font-label-sm text-label-sm">Public Trust</span>
</a>
</nav>
<div className="p-4 border-t border-outline-variant">
<button className="w-full py-3 bg-brass-gold/10 text-secondary font-semibold rounded-lg flex items-center justify-center gap-2 border border-brass-gold/20">
<span className="material-symbols-outlined text-sm">chat</span>
                Citizen Feedback
            </button>
</div>
<footer className="p-4 flex flex-col gap-2">
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-xl">settings</span>
<span className="text-sm">Settings</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-xl">help</span>
<span className="text-sm">Support</span>
</a>
</footer>
</aside>
{/*  Main Content Area  */}
<main className="lg:ml-64 pt-24 px-margin-mobile md:px-margin-desktop pb-20 max-w-container-max-width mx-auto">
{/*  Hero Section  */}
<section className="mb-12 relative rounded-xl overflow-hidden h-80 flex flex-col justify-center px-8 md:px-16 text-state-white">
<div className="absolute inset-0 z-0">
<img alt="Inclusion Hero" className="w-full h-full object-cover" data-alt="A warm and uplifting photograph of diverse community members including an elderly person and a young child interacting in a sunlit modern community center. The lighting is soft and natural creating a compassionate and inclusive atmosphere. The scene is framed with clean lines and professional composition reflecting the modern governance style of Abia State." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHzZdemak-HV31VO4ixaC9lwPp55ANwnnOFjo2-FoSk8QEso_X60ScTu8SqHqpYET1f5l24Rx-HpRfPsrAoxb8VJmlS39ZOWzbCgTSIublbB66GmPbw_gaRFjNxX0qP9rgAIR7uFOQW-w0GCRppBkov75wYXq-w-qGNpuNBBvXMSOL3WnAJ0qaBu2RrMcUOFhs2yvibsbTV_JhHlPFX7O74xtwumAKPqcmUdPCpgt39m8gH1EbI86FuiQ8Y1GaL8dynsoP6RlSzqM" />
<div className="absolute inset-0 bg-gradient-to-r from-forest-green/90 to-transparent"></div>
</div>
<div className="relative z-10 max-w-2xl">
<span className="font-label-md text-label-md uppercase tracking-widest text-secondary-container mb-4 block">Social Safety Net</span>
<h1 className="font-display-lg text-display-lg mb-4">Building an Inclusive Abia for Every Citizen</h1>
<p className="font-body-lg text-body-lg text-surface-variant max-w-xl">
                    Our commitment is to ensure no citizen is left behind. Access social services, support registries, and community grants with dignity and transparency.
                </p>
</div>
</section>
{/*  Search & Quick Filters  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row gap-6 items-end justify-between">
<div className="w-full md:max-w-xl">
<label className="block text-sm font-semibold text-outline mb-2">How can we support you today?</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full pl-12 pr-4 py-4 rounded-lg border-outline-variant focus:border-primary focus:ring-primary transition-all bg-surface-container-lowest" placeholder="Search for benefits, grants, or care programs..." type="text" />
</div>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-medium border border-outline-variant hover:bg-primary/10 transition-colors">Safety Net</button>
<button className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-medium border border-outline-variant hover:bg-primary/10 transition-colors">Disability</button>
<button className="px-4 py-2 bg-surface-container-high rounded-full text-sm font-medium border border-outline-variant hover:bg-primary/10 transition-colors">Elderly</button>
</div>
</div>
</section>
{/*  Bento Grid Service Selection  */}
<section className="bento-grid mb-16">
{/*  Social Safety Net Registry (Primary Card)  */}
<div className="col-span-12 md:col-span-8 p-8 rounded-xl border border-outline-variant bg-white shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-primary text-3xl">diversity_3</span>
</div>
<h3 className="font-headline-md text-headline-md mb-2 brass-accent-line">Social Safety Net Registry</h3>
<p className="text-on-surface-variant font-body-md max-w-md mt-6">
                        Register your household for the state's unified social protection scheme. Access cash transfers, nutrition support, and basic healthcare vouchers.
                    </p>
</div>
<div className="mt-8 flex gap-4">
<button className="px-6 py-3 bg-forest-green text-white rounded font-medium flex items-center gap-2">
                        Register Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
<button className="px-6 py-3 border border-brass-gold text-secondary rounded font-medium">Verify Status</button>
</div>
</div>
{/*  Community Grants (Vertical Card)  */}
<div className="col-span-12 md:col-span-4 p-8 rounded-xl border border-outline-variant bg-surface-container-high flex flex-col justify-between hover:border-brass-gold transition-colors">
<div>
<div className="w-12 h-12 bg-brass-gold/10 rounded-lg flex items-center justify-center mb-6">
<span className="material-symbols-outlined text-secondary text-3xl">volunteer_activism</span>
</div>
<h3 className="font-headline-md text-headline-md mb-2">Community Grants</h3>
<p className="text-on-surface-variant font-body-md mt-4">
                        Funding for local infrastructure, youth cooperatives, and community-led development projects.
                    </p>
</div>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-2 text-sm text-secondary font-medium"><span className="material-symbols-outlined text-xs">check_circle</span> Rural Water Initiative</li>
<li className="flex items-center gap-2 text-sm text-secondary font-medium"><span className="material-symbols-outlined text-xs">check_circle</span> Tech for Abia Youth</li>
</ul>
<button className="w-full mt-8 py-3 bg-white border border-outline-variant text-on-surface rounded font-medium hover:bg-primary hover:text-white transition-all">Apply for Funding</button>
</div>
{/*  Disability Support (Square Card)  */}
<div className="col-span-12 md:col-span-6 p-8 rounded-xl border border-outline-variant bg-white flex items-start gap-6 group">
<div className="w-16 h-16 bg-blue-50 rounded-full flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-blue-600 text-4xl">accessible_forward</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md mb-2">Disability Support</h3>
<p className="text-on-surface-variant font-body-md mb-4">
                        Assistive technology grants, vocational training for the differently-abled, and inclusive workspace certification.
                    </p>
<a className="text-primary font-semibold flex items-center gap-1 hover:underline" href="#">
                        Explore Services <span className="material-symbols-outlined text-sm">open_in_new</span>
</a>
</div>
</div>
{/*  Elderly Care (Square Card)  */}
<div className="col-span-12 md:col-span-6 p-8 rounded-xl border border-outline-variant bg-white flex items-start gap-6 group">
<div className="w-16 h-16 bg-orange-50 rounded-full flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-orange-600 text-4xl">elderly</span>
</div>
<div>
<h3 className="font-headline-md text-headline-md mb-2">Elderly Care Programs</h3>
<p className="text-on-surface-variant font-body-md mb-4">
                        Pension management, community health outreach, and 'Golden Years' engagement centers across all 17 LGAs.
                    </p>
<a className="text-primary font-semibold flex items-center gap-1 hover:underline" href="#">
                        Access Benefits <span className="material-symbols-outlined text-sm">open_in_new</span>
</a>
</div>
</div>
</section>
{/*  Live Statistics / Impact Tracking  */}
<section className="mb-16">
<h2 className="font-headline-lg text-headline-lg mb-8 text-center">Our Collective Impact</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="p-6 bg-surface-container-low border border-outline-variant rounded-lg text-center">
<p className="text-3xl font-bold text-forest-green">142,000+</p>
<p className="text-sm font-medium text-outline uppercase tracking-wider mt-2">Households Verified</p>
</div>
<div className="p-6 bg-surface-container-low border border-outline-variant rounded-lg text-center">
<p className="text-3xl font-bold text-forest-green">₦2.4B</p>
<p className="text-sm font-medium text-outline uppercase tracking-wider mt-2">Grants Disbursed</p>
</div>
<div className="p-6 bg-surface-container-low border border-outline-variant rounded-lg text-center">
<p className="text-3xl font-bold text-forest-green">17</p>
<p className="text-sm font-medium text-outline uppercase tracking-wider mt-2">Care Centers Open</p>
</div>
<div className="p-6 bg-surface-container-low border border-outline-variant rounded-lg text-center">
<p className="text-3xl font-bold text-forest-green">98%</p>
<p className="text-sm font-medium text-outline uppercase tracking-wider mt-2">Satisfaction Rate</p>
</div>
</div>
</section>
{/*  Accessibility Tools & Resources  */}
<section className="bg-surface-container-highest rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10">
<div className="md:w-1/2">
<h2 className="font-headline-lg text-headline-lg mb-4">Committed to Universal Accessibility</h2>
<p className="text-on-surface-variant font-body-md mb-6">
                    Abia One is designed to be usable by everyone. Use our accessibility toolkit to adjust font sizes, contrast, or activate screen reading capabilities.
                </p>
<div className="grid grid-cols-2 gap-4">
<button className="flex items-center gap-3 p-4 bg-white rounded border border-outline-variant hover:shadow-sm">
<span className="material-symbols-outlined text-primary">text_fields</span>
<span className="font-medium">Text Resize</span>
</button>
<button className="flex items-center gap-3 p-4 bg-white rounded border border-outline-variant hover:shadow-sm">
<span className="material-symbols-outlined text-primary">contrast</span>
<span className="font-medium">High Contrast</span>
</button>
<button className="flex items-center gap-3 p-4 bg-white rounded border border-outline-variant hover:shadow-sm">
<span className="material-symbols-outlined text-primary">hearing</span>
<span className="font-medium">Audio Assist</span>
</button>
<button className="flex items-center gap-3 p-4 bg-white rounded border border-outline-variant hover:shadow-sm">
<span className="material-symbols-outlined text-primary">translate</span>
<span className="font-medium">Igbo / Local Dialect</span>
</button>
</div>
</div>
<div className="md:w-1/2">
<img alt="Support Specialist" className="rounded-xl shadow-lg border-4 border-white" data-alt="A portrait of a professional and empathetic social welfare officer in a bright modern office in Abia State. She is smiling kindly wearing local professional attire suggesting a approachable and compassionate government service. The background is softly blurred showing a clean organized institutional environment with natural light and hints of the state's branding." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWBpJXbSc7Nux7FKO4CmjN6MthyrMB3TwQFEIkiaP-gXNy8OrePEemsdrG7VHdICmfFgFTyDqCCj1AwFMB6NK8XuXTiNQsmuoYCv8fPDN9UepO8PT0XBPGBQWt6J4ajWm4EdJh8E_FT6hHOQIcV9Z6h90NQ5Vzp5fLx_sDGsZvpf0epceYCBr72mVMLyCzcAgPo2JXW03UDF0F431BGqydzwm0eT-ZArLgOvrVuG85ZD4MSPGKuT2C-_deMnqs9JJjjU9VVRxF1Uw" />
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest dark:bg-forest-deep mt-auto border-t border-outline-variant dark:border-outline py-12">
<div className="max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<span className="font-headline-lg text-headline-lg text-forest-deep dark:text-primary-fixed block mb-4">ABIA ONE</span>
<p className="font-body-md text-on-surface-variant">
                    Empowering citizens through transparent digital governance and inclusive social infrastructure.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h4 className="font-label-caps text-label-caps font-bold mb-4">Ecosystem</h4>
<ul className="space-y-2">
<li><a className="text-on-surface-variant hover:text-brass-accent underline decoration-brass-accent" href="#">Invest Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent" href="#">Serve Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent" href="#">Build Abia</a></li>
</ul>
</div>
<div>
<h4 className="font-label-caps text-label-caps font-bold mb-4">Policy</h4>
<ul className="space-y-2">
<li><a className="text-on-surface-variant hover:text-brass-accent" href="#">Open Abia</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-label-caps text-label-caps font-bold mb-4">Connect</h4>
<ul className="space-y-2">
<li><a className="text-on-surface-variant hover:text-brass-accent" href="#">Contact Us</a></li>
<li><a className="text-on-surface-variant hover:text-brass-accent" href="#">Emergency Lines</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-container-max-width mx-auto mt-12 pt-8 border-t border-outline-variant/30 text-center">
<p className="font-body-md text-on-surface-variant italic">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
</div>
</footer>
{/*  Contextual FAB for quick support  */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined text-3xl">chat_bubble</span>
</button>


      </div>
    </>
  );
}
