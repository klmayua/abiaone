export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;\n        }\n        .glass-card {\n            background: rgba(255, 255, 255, 0.8);\n            backdrop-filter: blur(8px);\n            border: 1px solid rgba(226, 232, 240, 1);\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(12, 1fr);\n            gap: 24px;\n        }\n        .no-scrollbar::-webkit-scrollbar {\n            display: none;\n        }\n        .no-scrollbar {\n            -ms-overflow-style: none;\n            scrollbar-width: none;\n        }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md">
        
{/*  Top Navigation Bar  */}
<header className="bg-surface border-b border-outline-variant fixed top-0 w-full z-50">
<nav className="flex justify-between items-center w-full px-margin-desktop max-w-max-width mx-auto h-16">
<div className="font-headline-md text-headline-md font-bold text-forest-green">ABIA ONE</div>
<div className="hidden md:flex items-center space-y-0 space-x-8">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Invest</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Jobs</a>
<a className="font-label-md text-label-md text-forest-green border-b-2 border-brass-gold pb-1 transition-colors" href="#">Serve</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Verify</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-forest-green transition-colors" href="#">Governance</a>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green">language</span>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-forest-green">notifications</span>
</div>
<button className="bg-forest-green text-state-white px-6 py-2 rounded-lg font-label-md text-label-md font-medium hover:opacity-90 transition-opacity">
                    Sign In
                </button>
</div>
</nav>
</header>
<main className="pt-16 min-h-screen">
{/*  Hero Section  */}
<section className="relative h-[819px] w-full flex items-center overflow-hidden">
<div className="absolute inset-0 z-0 opacity-100 translate-y-0">
<img alt="Abia Landscape" className="w-full h-full object-cover brightness-50" data-alt="A wide cinematic shot of the lush, rolling green hills of Abia State, Nigeria, at golden hour. The landscape is dotted with vibrant tropical vegetation and ancient rock formations. The lighting is warm and ethereal, casting long shadows across the landscape, embodying a serene and majestic atmosphere that highlights the natural heritage and beauty of the region." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV9UvWfc3a--DwMi0HfS9NTfGhf796emq8Yt6MLZ-GlwYx1qC2h7bbfeQw-xxwnF4T10mNZ0qKRm0FuTx5j9TLUioKyocBzTCKhYbC5BqZ4XBtkSnr4QMSsCJNWeH-kdOJcyajNQPQxqAqBebNWjEWIMFF0HSt6aSThTPQ7aDv8-SliTD0cskC-5ck0fDl265BB-FRyh7ZiFG0WiEMABkvZwBZWBDw5oYb_1nCVKXWr7rlDUVhcTn7jPfgPPQVMkJHsb69jXRTG3o" />
</div>
<div className="relative z-10 px-margin-desktop max-w-max-width mx-auto w-full opacity-100 translate-y-0">
<div className="max-w-3xl">
<span className="inline-block bg-brass-gold text-on-secondary-fixed px-4 py-1 rounded-full font-label-md text-label-md mb-6 uppercase tracking-widest">Cultural Heart of the East</span>
<h1 className="font-display-lg text-display-lg text-state-white mb-6 leading-tight">Heritage, Spirit, and the Creative Pulse of Abia.</h1>
<p className="font-body-lg text-body-lg text-surface-container-low mb-10 max-w-2xl">
                        Journey through the soul of God's Own State. From the ancient wonders of Long Juju to the vibrant rhythms of the Akwete weavers, explore a land where tradition fuels modern innovation.
                    </p>
<div className="flex gap-4">
<button className="bg-forest-green text-state-white px-8 py-4 rounded-lg font-headline-md hover:opacity-90 transition-all flex items-center gap-2">
                            Explore Sites <span className="material-symbols-outlined">explore</span>
</button>
<button className="border-2 border-state-white text-state-white px-8 py-4 rounded-lg font-headline-md hover:bg-state-white hover:text-forest-green transition-all">
                            Cultural Calendar
                        </button>
</div>
</div>
</div>
<div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-20 pointer-events-none opacity-100 translate-y-0">

</div>
</section>
{/*  Featured Experiences Bento Grid  */}
<section className="py-24 px-margin-desktop max-w-max-width mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 opacity-100 translate-y-0">
<div className="max-w-2xl">
<h2 className="font-headline-lg text-headline-lg text-forest-green mb-4">Timeless Treasures</h2>
<p className="font-body-md text-body-md text-on-surface-variant">Uncover the monumental landmarks and living traditions that define the identity of the Abia people. Each site is a portal to our storied past and visionary future.</p>
</div>
<button className="text-forest-green font-label-md flex items-center gap-2 group">
                    VIEW ALL DESTINATIONS <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-6 h-[800px] opacity-100 translate-y-0">
{/*  Long Juju of Arochukwu  */}
<div className="md:col-span-8 md:row-span-1 relative group overflow-hidden rounded-xl">
<img alt="Long Juju Shrine" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A mystical, low-light photograph of an ancient cavern entrance surrounded by dense, moss-covered tropical vines in the Arochukwu forest. Soft sunlight filters through the canopy above, creating dramatic beams of light that illuminate the damp stone floor. The atmosphere is ancient, sacred, and deeply historical, reflecting the spiritual significance of the Long Juju shrine." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5sLQ-90AakSza4h5ljpUi5u272ATsVzibyJnd-U9B-zWyTdmJB1PtA5VhkKy271bUFdlO-oYF_rEXPjX-wJITFwAlIRVbFIrWT09UINpI-rsXxlrJJHLzY49JfBRH3LGK6ekMoGdmm-bE8VkMBKZEVZxZk6V0HrpG9hW4uJeTwuFk2yr15wPoDPSWLTiVjynEV5lk5feAJgdIxLLCQPfO8EAs2sS1lJ_VwV5IT9AW1OqAhm5a9zi6iC7M0uPG40_ABFH2z1W_N8E" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
<h3 className="font-headline-md text-state-white mb-2">Long Juju of Arochukwu</h3>
<p className="text-surface-container-highest font-body-md max-w-lg">A sacred site of ancient justice and spiritual mystery, nestled deep within the lush Arochukwu forest.</p>
</div>
</div>
{/*  Akwete Weaving  */}
<div className="md:col-span-4 md:row-span-2 relative group overflow-hidden rounded-xl bg-forest-green">
<img alt="Akwete Weaver" className="w-full h-full object-cover mix-blend-overlay opacity-60 transition-transform duration-700 group-hover:scale-110" data-alt="Close-up macro photography of a traditional Igbo weaver's hands skillfully manipulating vibrant, colorful threads on a wooden loom. The patterns are intricate and geometric, featuring the rich greens, golds, and reds of the Abia cultural palette. The focus is sharp on the texture of the fabric, highlighting the artisanal precision and heritage of Akwete weaving." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxyihRDuqaa6x7snNvnYYQ90OJ5E--4xNvlHkFYtUlw1whgWj5ufex3TVEX80KID8NpZ2-oCmzSp-6En7rW-SRz8IYq9Q11KBw3hiQTEPonEbhlwHD3VJFknhokXLlTnuqqf0i7q4nDi5uiS7jHzrvrJ96EvV-27fd4GZlAYDVScfklP6OSwq0dZUG6jTTSm3SFpmHf4GmpLN6SsvV6e8CbSrlLCJ-922ZXMUPITCMbf2zhThfaB9fCxCnSrTRx2qmEPk8x4IRiWA" />
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<span className="bg-brass-gold w-fit text-on-secondary-fixed px-3 py-1 rounded-sm text-caption">LIVING ART</span>
<div>
<h3 className="font-headline-md text-state-white mb-2">Akwete Weaving Heritage</h3>
<p className="text-surface-container-highest font-body-md">Discover the intricate geometric patterns and centuries-old techniques of the Akwete people, the masters of thread and color.</p>
<button className="mt-6 border border-state-white text-state-white px-4 py-2 text-label-md hover:bg-state-white hover:text-forest-green transition-all">Support Artisans</button>
</div>
</div>
</div>
{/*  National War Museum  */}
<div className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-xl">
<img alt="War Museum Umuahia" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="A wide-angle outdoor shot of the National War Museum in Umuahia, showing the iconic bunker entrance and decommissioned historic military aircraft against a clear blue sky. The scene is respectful and historical, with manicured lawns and educational placards. The lighting is crisp and midday, emphasizing the preservation of history and the resilience of the nation." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBNPdPtsx-0gZEKPyI3iN1J79mZQIEUMtW7qiYuMXZHnaXxdut9pB7o38N6-oZrJ3sRzsQ2k1MP6IUGSi4x5X5EXwjE4zPrZGr8kKEoJK-mfExug0GiRnkWWuf8oFZN8CKJreI2xBTAsA1RXij58XkByun6Pn6xtaToZO3_V9WOnQO3svl4Hs1ivj8931CHm8Kz6sbScIsA1JNckKETP_iN7898bFHl5iTqf2ffS3LoCXVfUneAU-FRjClK4DSKpU11B2pAD7b-Fo" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
<h3 className="font-headline-md text-state-white mb-1">War Museum, Umuahia</h3>
<p className="text-surface-container-highest font-body-md">A somber yet inspiring tribute to resilience and technological ingenuity.</p>
</div>
</div>
{/*  Azumini Blue River  */}
<div className="md:col-span-4 md:row-span-1 relative group overflow-hidden rounded-xl">
<img alt="Azumini Blue River" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="The crystal-clear, azure waters of the Azumini Blue River flowing gently over smooth, white pebbles. The riverbank is lined with lush tropical greenery and tall palm trees reflected in the still water. The sunlight creates a shimmering effect on the surface, making the blue color appear vibrant and otherworldly. The mood is peaceful, refreshing, and serene." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAucnC-bhvCz2A6nl_W0nqdWIvcwtXymfTMHobjP6ZeYi76oF5ZJSe72a__I0dZgQZyQV2f_12jyS1b2ApNq857WxzKC63H5h2Wbd_0r-Eh0G4kOwnbjKEOog51kJuGraqyeUhbjRRzm1qjhaEDECdq2600QOwweIyy1VX4Y7i4wat-5BNue4egOIBeuU7S9jPAG6HE-vDxc9Vwkmz97Vi-FlwWvvRP2yKJS7FV4hYnm0C6k29-VKHvWZc0d1Rlhr74vMvvIdcMQ0U" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
<h3 className="font-headline-md text-state-white mb-1">Azumini Blue River</h3>
<p className="text-surface-container-highest font-body-md">Nature's masterpiece: shimmering azure waters and white pebble beaches.</p>
</div>
</div>
</div>
</section>
{/*  Cultural Festivals Calendar  */}
<section className="bg-surface-container-low py-24">
<div className="px-margin-desktop max-w-max-width mx-auto opacity-100 translate-y-0">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5">
<h2 className="font-headline-lg text-headline-lg text-forest-green mb-6">Experience the Pulse</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                            Abia's calendar is a tapestry of celebration. From the rhythmic drumbeats of New Yam festivals to the high-fashion runways of the creative economy, join us in the dance of life.
                        </p>
<ul className="space-y-6">
<li className="flex items-start gap-4 p-4 bg-surface rounded-lg border-l-4 border-brass-gold shadow-sm">
<div className="bg-forest-green text-state-white p-3 rounded flex flex-col items-center min-w-[60px]">
<span className="text-caption font-bold">AUG</span>
<span className="text-headline-md">15</span>
</div>
<div>
<h4 className="font-headline-md text-forest-green">Iri Ji (New Yam Festival)</h4>
<p className="font-body-md text-on-surface-variant">The biggest harvest celebration in Igbo land. Parades, masquerades, and community feasting.</p>
</div>
</li>
<li className="flex items-start gap-4 p-4 bg-surface rounded-lg border-l-4 border-eagle-red shadow-sm">
<div className="bg-on-surface-variant text-state-white p-3 rounded flex flex-col items-center min-w-[60px]">
<span className="text-caption font-bold">DEC</span>
<span className="text-headline-md">22</span>
</div>
<div>
<h4 className="font-headline-md text-on-surface">Abia Creative Summit</h4>
<p className="font-body-md text-on-surface-variant">Celebrating film, fashion, and tech in the heart of Aba. Where tradition meets future.</p>
</div>
</li>
</ul>
<button className="mt-10 bg-brass-gold text-on-secondary-fixed px-8 py-3 rounded-lg font-label-md flex items-center gap-2">
                            FULL EVENT CALENDAR <span className="material-symbols-outlined">calendar_month</span>
</button>
</div>
<div className="lg:col-span-7 relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
<img alt="Festival Celebration" className="w-full h-full object-cover" data-alt="A vibrant, high-action shot of an Igbo masquerade performance during a major festival. The performers are wearing elaborate, colorful traditional costumes with intricate raffia work and wooden masks. The scene is filled with energy, dust rising from the ground as they dance, and a crowd of joyful onlookers in the background. The sunlight is bright, highlighting the vivid oranges, greens, and reds of the costumes." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJRCNx2OEDkK5HEa95bJeQDan3jDDSwIf3mzAFkbWE6nZZvNsUgt5mI9Xlyxa2OIbRh9uuahABSqIKY3Pklz0BhIHG1dTxRJzEmTaA0YcxodHATP33NPTZgMO8-v_drQWLmatLlg7stqhyg4s216ffaMfxRbiS19xz-S-bSri4tl_bA075ueTBQ5pZ6oxjMIpidKNWFSbm-Sl_fNxir0Qpjo2RihQye4hnNa52w75oxFfe20NL4TeKpo97LUWZEdRWhWs6AYZ_qFI" />
<div className="absolute bottom-6 left-6 right-6 glass-card p-6 rounded-xl">
<div className="flex justify-between items-center">
<div>
<p className="text-caption text-forest-green font-bold uppercase mb-1">Coming Up Next</p>
<h3 className="font-headline-md text-on-surface">Ugwuta Cultural Fair</h3>
</div>
<span className="material-symbols-outlined text-4xl text-brass-gold">festival</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Creative Economy / Aba Hub  */}
<section className="py-24 px-margin-desktop max-w-max-width mx-auto">
<div className="bg-forest-green rounded-[32px] overflow-hidden relative opacity-100 translate-y-0">
<div className="absolute top-0 right-0 p-12 opacity-10">
<span className="material-symbols-outlined text-[200px]" style={{"fontVariationSettings":"'FILL' 1"}}>design_services</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
<div className="p-12 lg:p-20">
<h2 className="font-display-lg text-state-white mb-8">The Creative Epicenter</h2>
<p className="font-body-lg text-surface-container-highest mb-10 leading-relaxed">
                            Aba is more than a commercial hub; it's a creative powerhouse. From high-fashion leather works to artisanal craftsmanship, we are building the "Made in Abia" brand for the global stage. 
                        </p>
<div className="grid grid-cols-2 gap-6 mb-12">
<div className="border-l-2 border-brass-gold pl-6">
<h4 className="text-3xl font-bold text-state-white">10k+</h4>
<p className="text-caption text-surface-variant uppercase">Local Artisans</p>
</div>
<div className="border-l-2 border-brass-gold pl-6">
<h4 className="text-3xl font-bold text-state-white">25%</h4>
<p className="text-caption text-surface-variant uppercase">Creative Sector Growth</p>
</div>
</div>
<button className="bg-state-white text-forest-green px-10 py-4 rounded-lg font-headline-md hover:bg-brass-gold hover:text-on-secondary-fixed transition-all">
                            Invest in Creatives
                        </button>
</div>
<div className="relative h-full min-h-[400px]">
<img alt="Artisanal Workshop" className="w-full h-full object-cover" data-alt="A clean, modern artisanal leather-working studio in Aba. The image shows a craftsman meticulously stitching a high-quality leather handbag. The workbench is organized with professional tools, and in the background, rolls of premium leather in various earthy tones are visible. The lighting is soft and focused on the craftsmanship, presenting a professional and sophisticated 'Made in Abia' industrial aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVVyXAIBHlyuAAg9UKt11wSer_Bvn4KZarWvnE2j5nysKrIXWXl3trOx_PkEV0c2AySdwI6T3b1ckjloKL23HXFvZ9hKOxlYRmrp4Wocr9u2unhLYVlD1OsDIMgV4dwLv99PXUjvU5gwjaTtezhU6bVmpG7gTznrubGDuzNJ6ju6UhF7CWFjvr75FQd3ys6y1j7Nyfy1--_g0wPzKLczXYogSnYm7fv3RGcm8fSiGwheS15sqnmDsgbIUW33PDZ5GvZl3EUcpgwzc" />
</div>
</div>
</div>
</section>
{/*  CTA Section  */}
<section className="py-24 text-center px-margin-desktop max-w-3xl mx-auto">
<h2 className="font-display-lg text-forest-green mb-6">Plan Your Visit</h2>
<p className="font-body-lg text-on-surface-variant mb-10">Whether you're an investor, a researcher, or a traveler seeking soul, Abia welcomes you with open arms. Let us help you discover the magic of our heritage.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center opacity-100 translate-y-0">
<div className="flex items-center gap-3 bg-surface p-4 rounded-xl border border-outline shadow-sm flex-1">
<span className="material-symbols-outlined text-forest-green">hotel</span>
<div className="text-left">
<p className="text-caption font-bold">STAY</p>
<p className="text-on-surface font-body-md">Hotel Bookings</p>
</div>
</div>
<div className="flex items-center gap-3 bg-surface p-4 rounded-xl border border-outline shadow-sm flex-1">
<span className="material-symbols-outlined text-forest-green">directions_car</span>
<div className="text-left">
<p className="text-caption font-bold">TRAVEL</p>
<p className="text-on-surface font-body-md">Transport Hubs</p>
</div>
</div>
<div className="flex items-center gap-3 bg-surface p-4 rounded-xl border border-outline shadow-sm flex-1">
<span className="material-symbols-outlined text-forest-green">gite</span>
<div className="text-left">
<p className="text-caption font-bold">GUIDE</p>
<p className="text-on-surface font-body-md">Tour Services</p>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
<footer className="bg-surface-container-highest border-t border-outline-variant mt-24">
<div className="w-full py-12 px-margin-desktop flex flex-col md:flex-row justify-between items-start max-w-max-width mx-auto gap-12">
<div className="max-w-xs">
<div className="font-headline-sm text-headline-sm font-bold text-forest-green mb-4">ABIA ONE</div>
<p className="font-body-md text-on-surface-variant">The unified digital gateway for Abia State government services, investment, and cultural promotion.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-12 flex-1">
<div className="flex flex-col gap-4">
<h5 className="font-headline-md text-forest-green text-[18px]">Sectors</h5>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Agriculture</a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Tech Hub</a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Commerce</a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Tourism</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="font-headline-md text-forest-green text-[18px]">Governance</h5>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">The Governor</a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">State MDAs</a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Gazettes</a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Budget</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="font-headline-md text-forest-green text-[18px]">Quick Links</h5>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Verify IDs</a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Pay Taxes</a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">Job Portal</a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors" href="#">News Room</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="font-headline-md text-forest-green text-[18px]">Connect</h5>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors flex items-center gap-2" href="#">
<span className="material-symbols-outlined text-[20px]">mail</span> Contact
                    </a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors flex items-center gap-2" href="#">
<span className="material-symbols-outlined text-[20px]">public</span> Twitter
                    </a>
<a className="font-body-md text-on-surface-variant hover:text-brass-gold transition-colors flex items-center gap-2" href="#">
<span className="material-symbols-outlined text-[20px]">share</span> LinkedIn
                    </a>
</div>
</div>
</div>
<div className="w-full py-8 px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-max-width mx-auto border-t border-outline-variant/30">
<span className="font-caption text-on-surface-variant">© 2024 Abia State Government. All Rights Reserved.</span>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="font-caption text-on-surface-variant hover:text-forest-green underline" href="#">Privacy Policy</a>
<a className="font-caption text-on-surface-variant hover:text-forest-green underline" href="#">Terms of Service</a>
<a className="font-caption text-on-surface-variant hover:text-forest-green underline" href="#">Press Office</a>
</div>
</div>
</footer>


      </div>
    </>
  );
}
