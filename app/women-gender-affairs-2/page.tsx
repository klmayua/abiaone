export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n            vertical-align: middle;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(10px);\n            border: 1px solid rgba(0, 104, 56, 0.1);\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .brass-accent-line {\n            position: relative;\n        }\n        .brass-accent-line::after {\n            content: '';\n            position: absolute;\n            bottom: -4px;\n            left: 0;\n            width: 40px;\n            height: 3px;\n            background-color: #D4AF37;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  Top Navigation Bar  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-8">
<span className="font-headline-lg text-headline-lg font-bold text-forest-deep">ABIA ONE</span>
<div className="hidden md:flex gap-6 items-center">
<a className="font-label-caps text-label-caps text-primary border-b-2 border-brass-gold pb-1 transition-all" href="#">Empowerment</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Healthcare</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Leadership</a>
<a className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors" href="#">Protection</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block bg-secondary text-on-secondary px-6 py-2 font-label-caps rounded-lg hover:opacity-90 transition-all">Citizen Portal</button>
<button className="bg-eagle-red text-on-error px-4 py-2 font-label-caps rounded-lg flex items-center gap-2 animate-pulse">
<span className="material-symbols-outlined text-[18px]">emergency</span>
                SOS
            </button>
</div>
</nav>
{/*  Sidebar for Desktop  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant pt-20">
<div className="px-6 mb-8">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 bg-forest-green rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-state-white">account_balance</span>
</div>
<div>
<p className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-forest-deep leading-tight">ABIA ONE</p>
<p className="text-[10px] text-outline uppercase tracking-widest font-bold">Women Affairs</p>
</div>
</div>
</div>
<div className="flex-grow space-y-1 px-2">
<a className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg mx-2 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="payments">payments</span>
<span className="font-label-sm text-label-sm">Abia Women Business</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg mx-2 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
<span className="font-label-sm text-label-sm">Maternal Health</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg mx-2 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="vptree">mitre</span>
<span className="font-label-sm text-label-sm">Leadership Circle</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg mx-2 transition-all" href="#">
<span className="material-symbols-outlined" data-icon="security">security</span>
<span className="font-label-sm text-label-sm">GBV Support Center</span>
</a>
</div>
<div className="p-4 border-t border-outline-variant">
<button className="w-full bg-forest-green text-white py-3 rounded-lg font-label-md hover:brightness-110 transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined">feedback</span>
                Citizen Feedback
            </button>
</div>
</aside>
{/*  Main Content Area  */}
<main className="lg:ml-64 pt-20 pb-12 px-margin-mobile md:px-margin-desktop">
{/*  Hero Section  */}
<header className="relative mb-12 rounded-xl overflow-hidden min-h-[400px] flex items-center">
<img className="absolute inset-0 w-full h-full object-cover brightness-50" data-alt="A powerful group portrait of diverse Nigerian women leaders standing confidently in a modern, sun-drenched government hall in Abia State. The lighting is golden and warm, emphasizing their strong expressions and professional attire. The overall aesthetic is one of institutional authority, empowerment, and hope, using a palette of forest greens, brass golds, and ivory whites." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP_-89kwwtuUk9a2t4T0KBbjr-4TIsWJ6p5-a8SWv6DgVzcp3d3GeRxFD_xzvHpZuQR8NmiqgjcOFt7ruJPwXV1i2sQgE1_EKs9dVe1uGl2N7HIJDyyujdtPveib6UP2fgKc-7_1jdCQz1WTwxtJRX_rFcD2BdsbsJpZn5yMO6OxHB8mABr40iYZJ5-HOedOGY24vV8Q9RoPNIy5xKzcfUJURpyROEVMwG-QOKP_NadnZ_Z_nJ7bFPE7nPfPjrQjAvPBwBq2jWoEw" />
<div className="relative z-10 px-8 md:px-16 max-w-3xl">
<span className="inline-block bg-brass-gold/20 text-brass-gold font-label-md px-3 py-1 rounded-sm border border-brass-gold/30 mb-4">Empowering Every Woman</span>
<h1 className="font-display-lg text-display-lg text-state-white mb-6 leading-tight">Elevating the Voices and Potential of Abia's Women.</h1>
<p className="font-body-lg text-body-lg text-surface-variant mb-8">Access institutional resources for business growth, healthcare, and civic leadership through our unified governance portal.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-forest-green text-state-white px-8 py-3 rounded-lg font-headline-md flex items-center gap-2 hover:bg-forest-green/90 transition-all">
                        Apply for Grant
                        <span className="material-symbols-outlined">arrow_forward</span>
</button>
<button className="bg-white/10 backdrop-blur-md border border-white/20 text-state-white px-8 py-3 rounded-lg font-headline-md hover:bg-white/20 transition-all">
                        Explore Programs
                    </button>
</div>
</div>
</header>
{/*  Bento Grid Ecosystem  */}
<div className="bento-grid">
{/*  Abia Women in Business Card  */}
<div className="col-span-12 md:col-span-8 bg-state-white border border-outline-variant rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center group cursor-pointer transition-shadow hover:shadow-lg">
<div className="w-full md:w-1/2">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-forest-green text-4xl" data-weight="fill">payments</span>
<h2 className="font-headline-lg text-headline-lg brass-accent-line">Abia Women in Business</h2>
</div>
<p className="font-body-md text-on-surface-variant mb-6">A transformative seed-funding initiative providing up to ₦2,000,000 in non-repayable grants for female-led SMEs across 17 LGAs.</p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="p-3 bg-surface-container rounded-lg">
<p className="text-forest-green font-bold text-xl">₦1.2B</p>
<p className="text-xs uppercase font-label-md">Total Disbursed</p>
</div>
<div className="p-3 bg-surface-container rounded-lg">
<p className="text-forest-green font-bold text-xl">4,200+</p>
<p className="text-xs uppercase font-label-md">Beneficiaries</p>
</div>
</div>
<button className="text-forest-green font-bold flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                        Check Eligibility Criteria <span className="material-symbols-outlined">arrow_right_alt</span>
</button>
</div>
<div className="w-full md:w-1/2 h-64 rounded-xl overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A focused Nigerian woman entrepreneur working on a laptop in a brightly lit, modern office environment. Behind her, blurry visual hints of a successful textile or tech startup can be seen. The lighting is crisp and professional, conveying a message of modern digital productivity and government-supported economic growth within Abia State." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDZrZJ_XiT6KC1eA4g-NgH5uW42gk7GIw0V7rHHVJ75VDSMfnQKLZnv1aSOStEJZqi9jJmj9MiR6H1Okx0XjQYIu_MvqfDwxxIQDlFQ06Pca_hkUtnqp8-xSkppAo88jKHsKQ-l6rI1VmUG6IMtMawgRTiM6vRfV65t0rjQvQ-VdC3qAjxBnyqHvc13NNPJ-KZguRFU6hJCGseGhG-_JXZNNDksPTci3IUHC4INUgkPF0uaBdYjfn7WpgcQvl8FhBXcfeW85pHYNo" />
</div>
</div>
{/*  GBV Support Card  */}
<div className="col-span-12 md:col-span-4 bg-error-container/20 border border-error/20 rounded-xl p-8 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-eagle-red text-4xl mb-4">shield_person</span>
<h2 className="font-headline-md text-headline-md text-eagle-red mb-2">Safe Abia Network</h2>
<p className="font-body-md text-on-surface-variant mb-6">Confidential 24/7 reporting and support for victims of gender-based violence. Your safety is our mandate.</p>
</div>
<div className="space-y-3">
<a className="flex items-center justify-between p-4 bg-eagle-red text-state-white rounded-lg font-bold" href="tel:0800SAFEABIA">
<span>Emergency Hotline</span>
<span>0800-SAFE-ABIA</span>
</a>
<button className="w-full border-2 border-eagle-red text-eagle-red py-3 rounded-lg font-bold hover:bg-eagle-red hover:text-white transition-all">
                        Report an Incident
                    </button>
</div>
</div>
{/*  Maternal Health Card  */}
<div className="col-span-12 md:col-span-5 bg-state-white border border-outline-variant rounded-xl overflow-hidden group">
<div className="h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A high-tech maternal health clinic interior with clean white surfaces and state-of-the-art medical equipment. The scene is bright and reassuring, featuring soft teal and forest green accents that evoke a sense of safety and professional care. A digital display shows healthy vital signs, symbolizing Abia State's commitment to modern healthcare infrastructure." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1uhpRjB5SNp4544uBozwoOTSUXHnsdxdWWIdap6KEmrS-DE_wVXwJTWGLwo5l6WhJsyttU4kwdnmv8fs9RJRhjCtZ0egLfaLZFpp43MrlTbgKbZYIls7W9x71Fu1DOfC995ZyXTdidXeMekxTCgZFeq0tn5kmIc73Z9igtR7SHHYP2pqAScYlljlTK8HiuEVBnXstiy2vCEMKDVizKrOKR7EBtTW02nbQJnfVljUjxEGbHkIBQ8uTmzfMKIgluKODnAbLubShFzo" />
</div>
<div className="p-6">
<h3 className="font-headline-md text-headline-md mb-2">Maternal Excellence</h3>
<p className="font-body-md text-on-surface-variant mb-4">Free prenatal care and digital health tracking for expectant mothers across all public health centers.</p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-surface-container rounded-full text-xs font-label-md">Free Kits</span>
<span className="px-3 py-1 bg-surface-container rounded-full text-xs font-label-md">24/7 Midwives</span>
</div>
</div>
</div>
{/*  Leadership Training Card  */}
<div className="col-span-12 md:col-span-7 glass-card border border-outline-variant rounded-xl p-8 relative overflow-hidden">
<div className="absolute -right-12 -bottom-12 opacity-10">
<span className="material-symbols-outlined text-[200px] text-forest-green" data-weight="fill">mitre</span>
</div>
<div className="relative z-10">
<h3 className="font-headline-lg text-headline-lg mb-4">Abia Leadership Circle</h3>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-6">Nurturing the next generation of female public servants and private sector executives through structured mentorship with top government officials.</p>
<div className="flex items-center -space-x-4 mb-8">
<img alt="Mentor 1" className="w-12 h-12 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzaOudiBduFCZjYGh89uzEtwsUGM9CSwIUEY-mMFY_UeKprPriWi06SKpuxpTyhRFjKKs9G4qPj6dh63qpOJgTEDGnceTaiFcg1U2Hh_TlMbBcRuHYG8NQxhFNL0AFowjEoKBs8OYSwZx-saLcRd0bWGFvKePpz4Y-QgnGJKzpQPhktlcSG18SQjt6K1tpDXv0OhgXVhWRb2eEb2jI2xr59ne4Er-pkzaT81L2dtRNPvJnRMO0BuybiaELJiZ5VV8Sk6YMG0CE6nM" />
<img alt="Mentor 2" className="w-12 h-12 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3_4IQxQISxDJI4Fwv9rrYQqSxFIhBpldRjIFfYblFNJF-E3-WmBzB47c9S-6aZgavELE89MrOeqNk0h1nm1ymblyGJDeiuj8zd19qwzZI-qUXLGyV2ah_-HmBPZLVmCMP3Xr0pshDBPih7XjCKSm9XaUhyEbl4RbcptNvrL4OEeXnZaCvh40N5-Qo04clSBtmpoTkJ1SHK4S07XU8gQyam3jHI7N6Sw51e1Ig1-hIbCyOgqTJgtDdZKB9kxghQMwh_moTUWnuw60" />
<img alt="Mentor 3" className="w-12 h-12 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuChnqT8lAiCJqS2iDr3j2-YhjUdNg2mZfXTnpsaN4-4e9Jj6nAtvfErt3rq-WB96p8sUw_L9DIhVL3PQc1uaCrZtFlyptoTCjVciIPCpuSpBCdiUNc2A54Wr65cBV3HzWJN_VZSGM4nS6AJKIRwg2h-x7PHcdHSnM1wfeAs-BDOlVP40DvJDGzDvSOAkovteEBnWfk51f0kkekL132abwsRKR5OlQruyqD3RpU6EgNKWvalBvODhenzqNOVq--b2vW-cQeHVTGtZVo" />
<div className="w-12 h-12 rounded-full bg-brass-gold flex items-center justify-center text-white font-bold border-2 border-white">+12</div>
<span className="ml-8 font-label-md text-on-surface-variant italic">Mentors from State Cabinet</span>
</div>
<button className="bg-secondary text-on-secondary px-6 py-2 rounded-lg font-headline-md">Join Next Cohort</button>
</div>
</div>
</div>
{/*  Impact Statistics Section  */}
<section className="mt-16 py-12 px-8 bg-forest-green rounded-2xl text-state-white">
<div className="text-center mb-12">
<h2 className="font-headline-lg text-headline-lg mb-2">Our Collective Progress</h2>
<p className="font-body-md opacity-80">Measuring the impact of gender empowerment initiatives across the state.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="text-center p-6 border-r border-white/10 last:border-0">
<div className="text-4xl font-display-lg mb-1">85%</div>
<div className="text-xs uppercase tracking-widest font-label-md opacity-70">Maternal Health Access</div>
</div>
<div className="text-center p-6 border-r border-white/10 last:border-0">
<div className="text-4xl font-display-lg mb-1">₦4.5B</div>
<div className="text-xs uppercase tracking-widest font-label-md opacity-70">Credit Facility Enabled</div>
</div>
<div className="text-center p-6 border-r border-white/10 last:border-0">
<div className="text-4xl font-display-lg mb-1">12k+</div>
<div className="text-xs uppercase tracking-widest font-label-md opacity-70">Students Mentored</div>
</div>
<div className="text-center p-6 border-r border-white/10 last:border-0">
<div className="text-4xl font-display-lg mb-1">40%</div>
<div className="text-xs uppercase tracking-widest font-label-md opacity-70">Female Cabinet Representation</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto py-12 border-t border-outline-variant">
<div className="max-w-container-max-width mx-auto">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
<div className="max-w-xs">
<h2 className="font-headline-lg text-headline-lg text-forest-deep mb-4">ABIA ONE</h2>
<p className="font-body-md text-on-surface-variant">The digital gateway for the Government of Abia State, dedicated to transparent governance and citizen empowerment.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<h4 className="font-label-caps text-label-caps text-primary mb-4">Initiatives</h4>
<ul className="space-y-2">
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Invest Abia</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Serve Abia</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Build Abia</a></li>
</ul>
</div>
<div>
<h4 className="font-label-caps text-label-caps text-primary mb-4">Resources</h4>
<ul className="space-y-2">
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Open Abia</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="font-label-caps text-label-caps text-primary mb-4">Stay Informed</h4>
<div className="flex gap-2">
<input className="bg-surface border border-outline px-4 py-2 rounded-lg text-sm focus:ring-forest-green focus:border-forest-green outline-none" placeholder="Email address" type="email" />
<button className="bg-forest-green text-white p-2 rounded-lg"><span className="material-symbols-outlined">send</span></button>
</div>
</div>
</div>
</div>
<div className="border-t border-outline-variant pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-body-md text-on-surface-variant">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-6">
<a className="text-on-surface-variant hover:text-forest-green transition-colors" href="#"><span className="material-symbols-outlined">face_nod</span></a>
<a className="text-on-surface-variant hover:text-forest-green transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
<a className="text-on-surface-variant hover:text-forest-green transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
</div>
</div>
</div>
</footer>
{/*  Bottom Navigation Bar (Mobile only)  */}
<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-outline-variant flex justify-around py-3 z-50">
<a className="flex flex-col items-center text-primary" href="#">
<span className="material-symbols-outlined" data-weight="fill">home</span>
<span className="text-[10px] font-label-md">Home</span>
</a>
<a className="flex flex-col items-center text-on-surface-variant" href="#">
<span className="material-symbols-outlined">payments</span>
<span className="text-[10px] font-label-md">Grants</span>
</a>
<a className="flex flex-col items-center text-on-surface-variant" href="#">
<span className="material-symbols-outlined">medical_services</span>
<span className="text-[10px] font-label-md">Health</span>
</a>
<a className="flex flex-col items-center text-on-surface-variant" href="#">
<span className="material-symbols-outlined">security</span>
<span className="text-[10px] font-label-md">Safety</span>
</a>
</nav>


      </div>
    </>
  );
}
