export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body {\n            background-color: #f6fbf3;\n            color: #181d19;\n            -webkit-tap-highlight-color: transparent;\n            overflow-x: hidden;\n        }\n        .material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .hide-scrollbar::-webkit-scrollbar {\n            display: none;\n        }\n        .glass-effect {\n            background: rgba(255, 255, 255, 0.7);\n            backdrop-filter: blur(10px);\n        }\n        .bento-grid {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 12px;\n        }\n        .bento-item-large {\n            grid-column: span 2;\n        }\n        @keyframes subtle-zoom {\n            0% { transform: scale(1); }\n            100% { transform: scale(1.05); }\n        }\n        .zoom-bg {\n            animation: subtle-zoom 20s infinite alternate linear;\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="font-body-md text-body-md pb-24">
        
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
<main className="mt-16 px-margin-mobile">
{/*  Hero Storytelling Section  */}
<section className="relative h-[420px] -mx-margin-mobile mb-8 overflow-hidden">
<div className="absolute inset-0 zoom-bg">
<img className="w-full h-full object-cover" data-alt="A cinematic, low-angle shot of the lush green landscapes of Abia State, Nigeria, featuring rolling hills and traditional architecture under a soft golden hour sun. The color palette is dominated by deep forest greens and warm brass golds, conveying a sense of institutional pride and natural beauty. The lighting is ethereal and professional, reflecting the modern governance aesthetic of the Abia One platform." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLzObWmQ0s_AUVEnpdze-WufTnR8SM0SC6ALOhucOzwXe2wJ9BUfcKmPGJaOAxng6xJbRUtus4Vwc3CaurCeLa9gJko9zUdzBf65IK299eZq6dEseZD5yFSn21n9wb2PVqzWo6vhhrIxtER2icIBiRD7i22yl-xjL21rrAYo9aS8TMQU0eas2PVNmPyYVHthmezJ8fr_BnRzOpyNfvSE5dmwYWfmVm0KjMlkJrCsmfRWwvavuP4vn7Fpz2Re1zhu-Ox1FQjbq1-f8"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-on-background via-on-background/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-margin-mobile">
<span className="inline-block bg-brass-gold text-on-secondary px-3 py-1 rounded-lg font-label-md text-label-md mb-3 uppercase tracking-widest">Featured</span>
<h2 className="font-headline-lg-mobile text-headline-lg-mobile text-state-white font-bold leading-tight mb-2">Abia Treasures: Journey into the Heartland</h2>
<p className="text-surface-variant font-body-md line-clamp-2">Discover the soul of God's Own State, from the historic Long Juju Slave Route to the rhythmic celebrations of Iri Ji.</p>
<button className="mt-4 bg-forest-green text-state-white px-6 py-3 rounded-lg font-headline-md text-sm flex items-center gap-2 active:scale-95 transition-transform">
                    Start Your Virtual Tour
                    <span className="material-symbols-outlined" data-icon="explore">explore</span>
</button>
</div>
</section>
{/*  Virtual Heritage Map Quick Access  */}
<section className="mb-8">
<div className="flex justify-between items-end mb-4">
<div>
<h3 className="font-headline-md text-headline-md text-forest-green">Heritage Map</h3>
<p className="text-on-surface-variant text-caption">Explore historical landmarks</p>
</div>
<button className="text-forest-green font-label-md text-label-md flex items-center gap-1">
                    View Full <span className="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="relative w-full h-48 rounded-xl overflow-hidden border border-outline-variant shadow-sm bg-surface-container">
<div className="absolute inset-0 opacity-40">

</div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="bg-state-white/90 backdrop-blur p-4 rounded-full border border-forest-green/20">
<span className="material-symbols-outlined text-forest-green text-4xl" data-icon="location_on" style={{"fontVariationSettings":"'FILL' 1"}}>location_on</span>
</div>
</div>
<div className="absolute bottom-3 left-3 flex gap-2">
<span className="bg-forest-green text-state-white px-2 py-1 rounded-md text-[10px] font-bold">LIVE COORDINATES</span>
<span className="bg-state-white text-forest-green px-2 py-1 rounded-md text-[10px] font-bold">128 SITES</span>
</div>
</div>
</section>
{/*  Festival Calendar (Iri Ji)  */}
<section className="mb-8">
<h3 className="font-headline-md text-headline-md text-forest-green mb-4">Cultural Calendar</h3>
<div className="flex gap-4 overflow-x-auto hide-scrollbar -mx-margin-mobile px-margin-mobile">
{/*  Card 1  */}
<div className="min-w-[280px] bg-state-white border border-outline-variant rounded-xl overflow-hidden flex flex-col">
<div className="h-32 relative">
<img className="w-full h-full object-cover" data-alt="A vibrant cultural festival scene in Abia State, showing performers in colorful traditional Igbo attire during the New Yam Festival. The lighting is bright and festive, with a deep green and gold color scheme that matches the state brand. The image captures the high energy and authentic atmosphere of Nigerian heritage celebrations." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj9LgkwgZUyihISQRLxB3J0g9hJcWIDsru9t-5YyOodavBWZ2SQvOiOoCJ-gCULZaAlX12it4RC7mhOrfMuEDexjhs9tlyFtcQkndasZVe40MhvlihInf-UGbLrkmHyc-mBfCAkUSlpCZLOBOKnfbqBLQEMz_bYD3qpm_f-HkMgArhk-PURzqC4rFVajTL8ib_TrtGIqFcN3ONw0_ImMbBTndCromYvAnlJ6OjgXVoRWpIk0qvf58FmCqhKA7WOy9BgnZpjLRs3EM"/>
<div className="absolute top-2 right-2 bg-eagle-red text-state-white px-2 py-1 rounded-md font-label-md text-[10px]">UPCOMING</div>
</div>
<div className="p-4">
<h4 className="font-headline-md text-lg text-on-background mb-1">Iri Ji (New Yam) Festival</h4>
<div className="flex items-center gap-2 text-on-surface-variant text-caption mb-3">
<span className="material-symbols-outlined text-[16px]" data-icon="calendar_today">calendar_today</span>
                            August 24 - 28, 2024
                        </div>
<p className="text-on-surface-variant text-sm mb-4 line-clamp-2">The grand celebration of harvest across Abia communities, featuring the King of Crops.</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-state-white bg-surface-container flex items-center justify-center text-[10px] font-bold">5k+</div>
<div className="w-8 h-8 rounded-full border-2 border-state-white bg-slate-gray"></div>
</div>
<button className="border border-forest-green text-forest-green px-4 py-1.5 rounded-lg font-label-md text-xs">RSVP</button>
</div>
</div>
</div>
{/*  Card 2  */}
<div className="min-w-[280px] bg-state-white border border-outline-variant rounded-xl overflow-hidden flex flex-col">
<div className="h-32 relative">
<img className="w-full h-full object-cover" data-alt="Close-up of traditional wooden masks and intricate carvings in an Abia heritage museum. The lighting is dramatic and focused, highlighting the textures of the wood and the artisan craftsmanship. The background is a clean, neutral surface that emphasizes the rich brown and gold tones of the artifacts." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOx86lOVvaqgscAfMnrwyg7bMpNugTEvzq0Src44nxLxd0fzcFb3W4LivzJ41jPPPs26nbpGFS4Xd0Dj098Be8P7SN6f_t-4g-45qfAYbs58uW04oYxiAa0ZOewbk9J1Nl4JBwPzBaBbuDHE4rBU3BVR5PTAaTU3h6JxWS4lSd_UXAkYISegOJW_2090W9s1R6FXnisrTAyG6hHpHyo_w69BV3cI4F-R7Xor5WzXuv7OtUrbQ6rWzSQ4mHACNDIL_N5SbWrHVPQn0"/>
<div className="absolute top-2 right-2 bg-forest-green text-state-white px-2 py-1 rounded-md font-label-md text-[10px]">CULTURAL</div>
</div>
<div className="p-4">
<h4 className="font-headline-md text-lg text-on-background mb-1">Ekpe Masquerade</h4>
<div className="flex items-center gap-2 text-on-surface-variant text-caption mb-3">
<span className="material-symbols-outlined text-[16px]" data-icon="calendar_today">calendar_today</span>
                            September 12, 2024
                        </div>
<p className="text-on-surface-variant text-sm mb-4 line-clamp-2">A secret society ritual turned public spectacle, showcasing ancient lore and dance.</p>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-state-white bg-surface-container flex items-center justify-center text-[10px] font-bold">2k+</div>
</div>
<button className="border border-forest-green text-forest-green px-4 py-1.5 rounded-lg font-label-md text-xs">View Info</button>
</div>
</div>
</div>
</div>
</section>
{/*  Artisan Market Guide (Bento Grid)  */}
<section className="mb-12">
<h3 className="font-headline-md text-headline-md text-forest-green mb-4">Artisan Market Guide</h3>
<div className="bento-grid">
{/*  Large Item  */}
<div className="bento-item-large relative h-48 rounded-xl overflow-hidden border border-outline-variant">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="A high-end artisan leather goods workshop in Aba, Abia State, featuring skilled craftsmen working on premium handmade shoes. The workspace is organized and modern, with tools laid out systematically. The lighting is bright and clean, emphasizing a professional industrial aesthetic consistent with the Abia One brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaYjvYtYN8G8N1m2-FxtP4tuBxKbjw_bptm_B940aLRMvuoJGTfp5KSTUvBoTPtp4-Al8t4cZrWJ4UMiqjYfOpkhHLe46WAL9h-cWZkyD2Iq1xHp5tG3gdnrn_Gy6SAjOZ7AGX-GphSihqHubrZmvVYFs7S3KCyrgD7Mgz8850102GqAOSkBVbCvYoiW1q7r5CsvfxZwY45i3IGAxZRKDiwnQybbPGnaR94BW4mg2sOSiWU1QuBVIdzUtrQ9uodaJvIHOjUZq6wz0"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-background/80 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="text-brass-gold font-label-md text-[10px] mb-1">CRAFTSMANSHIP</div>
<h5 className="text-state-white font-headline-md text-lg leading-tight">Aba Leather Hub: Custom Footwear</h5>
</div>
</div>
{/*  Small Item 1  */}
<div className="relative h-40 rounded-xl overflow-hidden border border-outline-variant">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="Intricately woven Akwete textiles from Abia State, showing geometric patterns and vibrant threads. The photo is a high-resolution close-up that highlights the texture and professional quality of the weaving. The overall feel is one of sophisticated heritage and luxury artistry." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnvNqH_4fRL87xCPhPSLlbTJqDbz1tQIUGk0Oi6RZGMEEW1x-1LtKP9ccpLRKM9MgOg9tpahzBXVVcPLOujhqXnEi2DaVzPwh0yDiel5bMRRAMr5igI7o6vjyA0QznDUZli792TR9JmGtZkNi90FjA2Hpy5NFxq65MO193f9r_thZR28y1GIUE0sSFCQ9-ZvZoGoCd9qZrFFtDt4YadCs0RLY6fPvcH-E-uFJmx7iHv-UHy5LQaV1eGfI-KGC2WZ5-8cJ-5xazjZw"/>
<div className="absolute inset-0 bg-on-background/40"></div>
<div className="absolute bottom-3 left-3">
<h5 className="text-state-white font-headline-md text-sm">Akwete Weaving</h5>
</div>
</div>
{/*  Small Item 2  */}
<div className="relative h-40 rounded-xl overflow-hidden border border-outline-variant">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="A modern display of traditional bronze and metal sculptures in a minimalist Abia gallery. The sculptures are lit with precision spotlights, creating a professional museum atmosphere. The color palette is composed of metallic ochre, deep greens, and neutral grays." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6xrXzB9exE9JI79L6Ck_khSNt5BOosXhcw9B8bfbGu3QXac8RUgf215eK-R2V_otWap0bb3vadxmv_C1QtpbWXruB0RNTzSyYAQBT1RlENkMLWnvmjIbmeqIYh9jRCHbHreSwLBm14tdO4j-F74xaY42inzeMLgLfxP0f9LcBrtc0ET-M1E5aOKfziiQizMkWzbn4K-VHDVLNb15YpaNfzuz3dE9WDGT6sp0X6TRfWwgXadfMcmoGwmfmxdMA09uCJtQresISf_s"/>
<div className="absolute inset-0 bg-on-background/40"></div>
<div className="absolute bottom-3 left-3">
<h5 className="text-state-white font-headline-md text-sm">Bronze Casting</h5>
</div>
</div>
</div>
</section>
{/*  Stats Counter Section  */}
<section className="bg-primary-container text-on-primary-container p-6 rounded-2xl mb-8 flex justify-around text-center border border-forest-green">
<div>
<div className="font-display-lg text-3xl font-bold mb-1">42</div>
<div className="font-label-md text-[10px] uppercase opacity-80">Heritage Sites</div>
</div>
<div className="w-[1px] bg-on-primary-container/20 h-full"></div>
<div>
<div className="font-display-lg text-3xl font-bold mb-1">12</div>
<div className="font-label-md text-[10px] uppercase opacity-80">Festivals / Year</div>
</div>
<div className="w-[1px] bg-on-primary-container/20 h-full"></div>
<div>
<div className="font-display-lg text-3xl font-bold mb-1">500+</div>
<div className="font-label-md text-[10px] uppercase opacity-80">Local Artisans</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-full border-t border-outline-variant bg-surface-container-lowest shadow-sm">
<div className="flex justify-around items-center h-20 w-full px-base pb-safe">
{/*  Hub is active because this is a core portal destination  */}
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</button>
<button className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1 active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="grid_view" style={{"fontVariationSettings":"'FILL' 1"}}>grid_view</span>
<span className="font-label-md text-label-md">Hub</span>
</button>
<button className="flex flex-col items-center justify-center text-on-surface-variant px-4 py-1 hover:bg-surface-variant transition-colors active:scale-90 transition-transform duration-200">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-md text-label-md">Profile</span>
</button>
</div>
</nav>
{/*  Contextual FAB - Suppression on Scroll/Sub-pages logic usually goes here  */}
<button className="fixed bottom-24 right-6 w-14 h-14 bg-forest-green text-state-white rounded-full shadow-lg flex items-center justify-center active:scale-95 transition-transform z-40 border border-on-primary/20">
<span className="material-symbols-outlined text-2xl" data-icon="travel_explore">travel_explore</span>
</button>


      </div>
    </>
  );
}
