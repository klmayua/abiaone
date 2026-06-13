"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .brass-border-accent {\n            border-left: 4px solid #D4AF37;\n        }\n        .bento-card {\n            transition: transform 0.2s ease, box-shadow 0.2s ease;\n        }\n        .bento-card:hover {\n            transform: translateY(-2px);\n        }\n        .glass-nav {\n            backdrop-filter: blur(12px);\n            -webkit-backdrop-filter: blur(12px);\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  TopNavBar (Shared Component)  */}
<nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-16 max-w-container-max-width mx-auto bg-surface/80 dark:bg-forest-deep/80 backdrop-blur-md border-b border-outline-variant">
<div className="flex items-center gap-4">
<img src="/Logos/Abia_One_No_Background.png" alt="ABIA ONE" className="h-8 w-auto" />
</div>
<div className="hidden md:flex gap-8 items-center">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/economic-transformation">Economy</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/serve-abia">Digital Gov</a>
<a className="font-label-md text-label-md text-primary border-b-2 border-brass-gold pb-1 transition-colors duration-200" href="/local-governance">Governance</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="/secure-abia">Security</a>
</div>
<div className="flex items-center gap-4">
<button className="bg-forest-green text-state-white px-6 py-2 rounded-lg font-label-md hover:opacity-90 transition-all active:scale-95">Citizen Portal</button>
<button className="hidden lg:flex items-center text-eagle-red border border-eagle-red px-4 py-2 rounded-lg font-label-md hover:bg-eagle-red/10">
<span className="material-symbols-outlined mr-2" data-icon="emergency">emergency</span>
                Emergency
            </button>
</div>
</nav>
{/*  Sidebar (Desktop only)  */}

<main className="pt-24 px-margin-mobile md:px-margin-desktop pb-24 max-w-container-max-width mx-auto">
{/*  Hero Section: Agri-Grow Abia  */}
<section className="relative h-[500px] rounded-xl overflow-hidden mb-12 flex flex-col justify-center px-8 md:px-16">
<div className="absolute inset-0 z-0">
<img alt="Agricultural Landscape" className="w-full h-full object-cover" data-alt="A lush and vast agricultural landscape in Abia State, Nigeria, at golden hour. The scene features rows of vibrant palm trees and cassava plants stretching towards the horizon under a soft, amber sky. The style is cinematic and professional, with a focus on growth and abundance, reflecting a modern governance aesthetic with rich forest green and golden highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRw2UywYClqIds_xg8Lyrgsrom733tW4JuFA5vxMbP6Lf_vVveyAQTitExG-mJr4XRf_VQwyZhMlit4XTCfArow4IxbNpgqcfQ2UQNZwVa_ChgjPMfixgVW1aNYQJGparIVdRoIEmDnvSOwJcEtlYgDxrOQnnmlwJTNN_CbYjZyS345dQQi1fm2ZA1vl5GhezImwbqFPbkQVmOl8Hn7j9Bo6cvNJoG1ArO0tpw5QRWXY5SznIOZNWvaSM6EhHvR1HRXdb6x9ihbeU" />
<div className="absolute inset-0 bg-gradient-to-r from-forest-green/90 via-forest-green/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-2xl text-state-white">
<div className="inline-flex items-center gap-2 bg-brass-gold/20 backdrop-blur-sm border border-brass-gold/30 px-4 py-1 rounded-full mb-6">
<span className="w-2 h-2 bg-brass-gold rounded-full animate-pulse"></span>
<span className="text-label-md font-label-md uppercase tracking-widest text-brass-gold">Government Initiative 2024</span>
</div>
<h1 className="font-display-lg text-display-lg mb-4 leading-tight">Agri-Grow Abia: Powering Our Breadbasket</h1>
<p className="font-body-lg text-body-lg mb-8 opacity-90">Building a food-secure state through technology, financial inclusion, and sustainable farming practices for all Abians.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-brass-gold text-on-surface px-8 py-4 rounded-lg font-headline-md hover:bg-white hover:text-forest-green transition-all shadow-lg flex items-center gap-3">
                        Smallholder Support Grant
                        <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
<button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-headline-md hover:bg-white/20 transition-all">
                        View Roadmap
                    </button>
</div>
</div>
</section>
{/*  Bento Grid: Core Services  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
{/*  Certified Distributors Directory  */}
<div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-8 rounded-xl bento-card" style={{"borderColor":"rgba(111, 122, 112, 0.4)"}}>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div>
<h3 className="font-headline-lg text-headline-lg text-forest-green">Certified Distributors</h3>
<p className="text-on-surface-variant font-body-md">Locate state-vetted seed and fertilizer providers near you.</p>
</div>
<div className="relative w-full md:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container border border-outline-variant rounded-lg text-body-md focus:ring-2 focus:ring-forest-green focus:border-forest-green outline-none" placeholder="Search by LGA or Product" type="text" />
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 border border-outline-variant rounded-lg hover:border-forest-green/40 transition-colors group">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-forest-green" data-icon="eco">eco</span>
<span className="bg-primary/10 text-primary px-2 py-1 rounded text-caption font-label-md">Verified</span>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface mb-1">Aba North Ag-Input</h4>
<p className="text-caption font-caption text-on-surface-variant mb-4">Stocking: Rice Seeds, NPK 15-15-15</p>
<button className="text-forest-green font-label-md flex items-center gap-1 group-hover:underline">
                            Get Directions <span className="material-symbols-outlined text-[16px]" data-icon="map">map</span>
</button>
</div>
<div className="p-4 border border-outline-variant rounded-lg hover:border-forest-green/40 transition-colors group">
<div className="flex justify-between items-start mb-2">
<span className="material-symbols-outlined text-forest-green" data-icon="precision_manufacturing">precision_manufacturing</span>
<span className="bg-primary/10 text-primary px-2 py-1 rounded text-caption font-label-md">Verified</span>
</div>
<h4 className="font-headline-md text-headline-md text-on-surface mb-1">Umuahia Fertilizer Hub</h4>
<p className="text-caption font-caption text-on-surface-variant mb-4">Stocking: Urea, Palm Nut Shellers</p>
<button className="text-forest-green font-label-md flex items-center gap-1 group-hover:underline">
                            Get Directions <span className="material-symbols-outlined text-[16px]" data-icon="map">map</span>
</button>
</div>
</div>
<button className="w-full mt-6 py-3 border border-dashed border-outline-variant text-outline font-label-md hover:bg-surface-container rounded-lg transition-colors">
                    View Full Directory (140+ entries)
                </button>
</div>
{/*  Farmer's Calendar Widget  */}
<div className="md:col-span-4 bg-forest-green text-state-white p-8 rounded-xl bento-card relative overflow-hidden" style={{"borderColor":"rgba(111, 122, 112, 0.4)"}}>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-6">
<span className="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
<h3 className="font-headline-md text-headline-md">Farmer's Calendar</h3>
</div>
<div className="space-y-6">
<div className="brass-border-accent pl-4">
<span className="text-label-md text-brass-gold block mb-1">CURRENT PHASE: PLANTING</span>
<h4 className="font-headline-md text-headline-md mb-2">Cassava &amp; Rice</h4>
<p className="text-caption opacity-80">Ensure soil pH is between 5.5-6.5. Apply NPK basal dressing within 48 hours of planting.</p>
</div>
<div className="border-l-4 border-white/20 pl-4 opacity-70">
<span className="text-label-md block mb-1">UPCOMING: HARVEST</span>
<h4 className="font-headline-md text-headline-md mb-2">Early Palm Oil</h4>
<p className="text-caption">Prepare processing mills. Expect peak season price fluctuations in regional markets.</p>
</div>
</div>
<button className="mt-8 flex items-center gap-2 font-label-md hover:translate-x-1 transition-transform">
                        Download Seasonal Guide
                        <span className="material-symbols-outlined" data-icon="download">download</span>
</button>
</div>
<div className="absolute -right-12 -bottom-12 opacity-10">
<span className="material-symbols-outlined text-[200px]" data-icon="wb_sunny">wb_sunny</span>
</div>
</div>
</div>
{/*  Youth in Ag Section  */}
<section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 py-12">
<div className="relative">
<div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl relative">
<img alt="Young Nigerian Farmers" className="w-full h-full object-cover" data-alt="A group of young, enthusiastic Nigerian agribusiness entrepreneurs in a modern greenhouse environment in Abia State. They are examining high-tech hydroponic systems and digital tablets, representing the intersection of youth, technology, and agriculture. The lighting is bright and optimistic, with a clean, professional aesthetic using the state's forest green and brass gold palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc0kodjcknoKy_wOh-96UY3HiYFURXUv0WLUyWusBEUaq-cUi-e4ppbX-EM-fAfMl-nQeMmxew4_tx6uxIYQfCC4SCYNISctHKPb_xbmVULodH8ny6hrhWOimUCW7bgXYve-bjGq_FDlol0Z61Z7ejLr3Kcqg7PXQs8oih_sgNFebpIrHI4BiYvBGdefX3sn1kx_BGnmTlUZA4f705pxzAikhw3Qch_IroS0sHxXe9j_fRz8wmVfsV4uTV979ML3qcY0Q999qqK8E" />
<div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-brass-gold/20">
<div className="text-forest-green font-bold text-headline-lg">2,500+</div>
<div className="text-caption font-caption text-on-surface-variant">Youth Enrolled 2023</div>
</div>
</div>
{/*  Decorative Elements  */}
<div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-dashed border-outline-variant rounded-2xl"></div>
</div>
<div>
<h2 className="font-display-lg text-display-lg text-forest-green mb-6">Youth in Ag: The Future Hub</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Abia State is transforming agriculture into a high-tech, profitable career path for the next generation. Our enrollment program provides access to drone technology training, greenhouse management, and direct agribusiness mentorship.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-4 p-4 bg-surface-container rounded-lg border border-outline-variant hover:border-forest-green transition-colors cursor-pointer">
<span className="w-10 h-10 flex items-center justify-center bg-forest-green text-white rounded-full">
<span className="material-symbols-outlined" data-icon="precision_manufacturing">precision_manufacturing</span>
</span>
<div>
<p className="font-headline-md text-headline-md leading-none">Smart Farming Course</p>
<p className="text-caption text-outline">8-Week Digital Certification</p>
</div>
</li>
<li className="flex items-center gap-4 p-4 bg-surface-container rounded-lg border border-outline-variant hover:border-forest-green transition-colors cursor-pointer">
<span className="w-10 h-10 flex items-center justify-center bg-forest-green text-white rounded-full">
<span className="material-symbols-outlined" data-icon="account_balance_wallet">account_balance_wallet</span>
</span>
<div>
<p className="font-headline-md text-headline-md leading-none">Start-up Micro-Credits</p>
<p className="text-caption text-outline">Up to ₦5M Interest-Free Loans</p>
</div>
</li>
</ul>
<button className="bg-forest-green text-state-white px-10 py-4 rounded-lg font-headline-md shadow-lg hover:opacity-90 transition-all flex items-center gap-2">
                    Start Your Application
                    <span className="material-symbols-outlined" data-icon="edit_note">edit_note</span>
</button>
</div>
</section>
{/*  Success Stories Grid  */}
<section className="mb-24">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="font-display-lg text-display-lg text-forest-green mb-2">Abia Agribusiness Success</h2>
<p className="text-on-surface-variant font-body-lg">Real stories of transformation from our regional agribusiness hubs.</p>
</div>
<button className="hidden md:flex text-forest-green font-label-md items-center gap-2 group">
                    View All Stories
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_right_alt">arrow_right_alt</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Story 1  */}
<div className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant group">
<div className="h-48 overflow-hidden">
<img alt="Cassava Success Story" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A focused Nigerian woman farmer proudly presenting a high-yield cassava harvest in her field. The background shows a modern processing facility under a clear blue sky. The visual style is crisp, bright, and professional, reflecting success and modern industrial agricultural practices in Abia State, using earth tones and forest green accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqf6sVqdAno4oJGW0h2R3s4kesTYp40Rhir_kcKJ0brOHd-mZQWqAf_APP9O3uihP4gUVnvUGArsicC6y2byrjD1QklTLSU3cTxKlOYqwrAvFkRDTaFqEfcQzsycVdjTdLybl5TS8SfOiM7YmNMarr4-BhMTtgYzQU4Y5AH4AcXeEpOXIt2zVkcHFzLFw2lhY_V-RYmVFOWg-yufktjXRgkaqlyo4NoQmOkhoslsNqt_Mos1-RW6JlB76KJagbf_F_-97xiwZ_X-g" />
</div>
<div className="p-6">
<span className="text-label-md text-brass-gold font-label-md block mb-2 uppercase">Umuahia South Cluster</span>
<h4 className="font-headline-md text-headline-md mb-3">Chidinma's Cassava Processing Leap</h4>
<p className="text-body-md text-on-surface-variant mb-4">How a ₦2M state grant helped Chidinma automate her garri processing, increasing output by 300%.</p>
<a className="text-forest-green font-label-md flex items-center gap-1 group-hover:underline" href="/open-abia">Read Story <span className="material-symbols-outlined text-[16px]" data-icon="open_in_new">open_in_new</span></a>
</div>
</div>
{/*  Story 2  */}
<div className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant group">
<div className="h-48 overflow-hidden">
<img alt="Palm Oil Success Story" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Modern palm oil extraction machinery in a clean, industrial facility in Abia State. The metal surfaces gleam under bright, professional lighting. The image emphasizes efficiency and industrial progress in agriculture, using a palette of metallic grays, forest greens, and golden oil tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAghJ_StwvXWEQ2xfsf1mqHnok-4qz-LDRehNM68V_kcq9myC0bKoZhpJhKEK-UXLGkGXtCHUvSSJZpAn1nztgsWb8eqx4mn1-7fBgEUOxaOqVvrzXyMg5lywbR2eLSCNpwsrR-mthOnHOpvQfCRvZsV6rMiyiyinV2DTozu76uWm2F92vzdtxRrSqPkYSvrOalOIJ3279F9braq4_k_WOjpuHchFyDqoEINqoZKOOLG05RmUgRRm8a1trhY7wPdjU11iqu6AV8uHc" />
</div>
<div className="p-6">
<span className="text-label-md text-brass-gold font-label-md block mb-2 uppercase">Aba North Industrial Zone</span>
<h4 className="font-headline-md text-headline-md mb-3">Reviving the Golden Oil Heritage</h4>
<p className="text-body-md text-on-surface-variant mb-4">The Obinna Cooperative revamped their communal palm plantation with state-certified seedlings and modern milling tools.</p>
<a className="text-forest-green font-label-md flex items-center gap-1 group-hover:underline" href="/open-abia">Read Story <span className="material-symbols-outlined text-[16px]" data-icon="open_in_new">open_in_new</span></a>
</div>
</div>
{/*  Story 3  */}
<div className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant group">
<div className="h-48 overflow-hidden">
<img alt="Rice Farming Success" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A wide view of a modern rice paddy in Abia State with innovative irrigation systems. The water reflects the bright sky, and the green rice stalks are vibrant. The scene is peaceful yet technically advanced, styled with a high-end corporate agricultural look, featuring the state's signature green and gold colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHGXXDhNQlfIyIGRhJxMO71vTICPaCRTfmGTRJyzsI2vTBtz8McfGaKbyeJn4l6gz8FCTEGbxQPmXdZF3v05dviQG_tmw3CcQ8SB_8IBlWZfCHeCuvbrMACOggXdoPMcHvQmeH7xLBJai5NzRPDGdvUutHasrrWQERzbiRP0bZvLjO7Yh1bbq630aZ_DedYIvKUmMlVAsTNGgOAiDK1awqZcL0zupRZy1wpA0NH4aWTcqnozb2iL05rzSAui9rPAX-OwS856VC4RI" />
</div>
<div className="p-6">
<span className="text-label-md text-brass-gold font-label-md block mb-2 uppercase">Bende LGA Rice Hub</span>
<h4 className="font-headline-md text-headline-md mb-3">Bende Rice: Scaling to National Markets</h4>
<p className="text-body-md text-on-surface-variant mb-4">Through the state's market-link program, Bende rice farmers now supply 15% of the region's top retail outlets.</p>
<a className="text-forest-green font-label-md flex items-center gap-1 group-hover:underline" href="/open-abia">Read Story <span className="material-symbols-outlined text-[16px]" data-icon="open_in_new">open_in_new</span></a>
</div>
</div>
</div>
</section>
</main>
{/*  Footer (Shared Component)  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest mt-auto py-12 border-t border-outline-variant">
<div className="max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs">
<span className="font-headline-lg text-headline-lg text-forest-deep font-bold mb-4 block">ABIA ONE</span>
<p className="text-body-md text-on-surface-variant mb-6">Empowering the people of Abia through sovereign digital infrastructure and modern governance solutions.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:text-forest-green hover:border-forest-green transition-colors" href="#"><span className="material-symbols-outlined" data-icon="public">public</span></a>
<a className="w-10 h-10 rounded-full border border-outline flex items-center justify-center hover:text-forest-green hover:border-forest-green transition-colors" href="#"><span className="material-symbols-outlined" data-icon="mail">mail</span></a>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
<div>
<h5 className="font-label-md text-label-md text-forest-green mb-4 uppercase tracking-wider">Government</h5>
<ul className="space-y-2">
<li className=""><a className="text-body-md text-on-surface-variant hover:text-brass-gold hover:underline transition-colors decoration-brass-gold" href="/invest-in-aba">Invest Abia</a></li>
<li className=""><a className="text-body-md text-on-surface-variant hover:text-brass-gold hover:underline transition-colors decoration-brass-gold" href="/serve-abia">Serve Abia</a></li>
<li className=""><a className="text-body-md text-on-surface-variant hover:text-brass-gold hover:underline transition-colors decoration-brass-gold" href="/build-abia">Build Abia</a></li>
</ul>
</div>
<div>
<h5 className="font-label-md text-label-md text-forest-green mb-4 uppercase tracking-wider">Resources</h5>
<ul className="space-y-2">
<li className=""><a className="text-body-md text-on-surface-variant hover:text-brass-gold hover:underline transition-colors decoration-brass-gold" href="/open-abia">Open Abia</a></li>
<li className=""><a className="text-body-md text-on-surface-variant hover:text-brass-gold hover:underline transition-colors decoration-brass-gold" href="#">Privacy Policy</a></li>
<li className=""><a className="text-body-md text-on-surface-variant hover:text-brass-gold hover:underline transition-colors decoration-brass-gold" href="#">Contact Us</a></li>
</ul>
</div>
<div className="col-span-2 sm:col-span-1">
<h5 className="font-label-md text-label-md text-forest-green mb-4 uppercase tracking-wider">State Seal</h5>
<div className="w-20 h-20 bg-forest-green/10 rounded-full flex items-center justify-center border border-forest-green/20">
<span className="material-symbols-outlined text-forest-green text-4xl" data-icon="account_balance">account_balance</span>
</div>
</div>
</div>
</div>
<div className="max-w-container-max-width mx-auto mt-12 pt-8 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-caption text-on-surface-variant">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
<div className="flex gap-4">
<span className="text-caption px-2 py-1 bg-forest-green/10 text-forest-green rounded border border-forest-green/20">Official Portal</span>
<span className="text-caption px-2 py-1 bg-brass-gold/10 text-on-secondary-fixed-variant rounded border border-brass-gold/20">SSL Secured</span>
</div>
</div>
</footer>




      </div>
    </>
  );
}
