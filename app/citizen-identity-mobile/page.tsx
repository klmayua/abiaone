"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: ".material-symbols-outlined {\n            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;\n        }\n        .id-card-gloss {\n            background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);\n            backdrop-filter: blur(10px);\n        }\n        .micro-texture {\n            background-image: radial-gradient(#004d28 0.5px, transparent 0.5px);\n            background-size: 10px 10px;\n            opacity: 0.05;\n        }\n    \n\n    body {\n      min-height: max(884px, 100dvh);\n    }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-background font-body-md min-h-screen pb-24">
        
{/*  TopAppBar  */}
<header className="bg-surface dark:bg-surface-dim flex justify-between items-center w-full px-margin-mobile h-16 z-50 fixed top-0 border-b border-outline-variant dark:border-outline">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-on-surface-variant transition-all active:scale-95 duration-150 p-2 hover:bg-surface-variant/50 rounded-full" data-icon="menu">menu</span>
<h1 className="font-headline-md text-headline-md-mobile font-bold text-primary dark:text-primary-fixed">Abia One</h1>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary dark:text-primary-fixed transition-all active:scale-95 duration-150 p-2 hover:bg-surface-variant/50 rounded-full" data-icon="emergency_share">emergency_share</span>
</div>
</header>
<main className="pt-20 px-margin-mobile space-y-6">
{/*  Identity Hero Section  */}
<section className="relative">
<div className="flex justify-between items-end mb-4">
<div>
<p className="font-label-md text-label-md text-secondary uppercase tracking-widest">Sovereign Identity</p>
<h2 className="font-headline-md text-headline-md text-on-surface">Digital State ID</h2>
</div>
<div className="bg-primary/10 px-3 py-1 rounded-full flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-forest-green animate-pulse"></span>
<span className="font-label-md text-caption text-forest-green">Verified</span>
</div>
</div>
{/*  Virtual ID Card  */}
<div className="relative w-full aspect-[1.586/1] bg-primary rounded-xl overflow-hidden shadow-xl p-6 flex flex-col justify-between border border-white/10 group active:scale-[0.98] transition-transform duration-200">

<div className="absolute inset-0 micro-texture pointer-events-none"></div>
{/*  Card Header  */}
<div className="relative z-10 flex justify-between items-start">
<div className="flex gap-3">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1 overflow-hidden">
<img alt="Nigeria" className="w-full h-auto" data-alt="A close up of the Nigerian national flag displayed with high resolution details of the green and white vertical bands. The fabric texture is visible, set against a soft, clean studio background to maintain a professional and official government aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy8a4LA2xDKauOzkn36oAJ_JrZtAoG-PUv9De_4yyH1_GA2OvlMv8ofMG-8ZP07LgtCyUxN9ru7uxA8yQh4D2cYp_sdoCFWYejckLoVI4R2uJTv2TkKmXl1F2H604j_aq1fUWnGkdPhn-VV7dkAPkycuPlUtzuRoON8yTzh1VXJ2MxwfV78rU9hEzuVuxxT74TDYKbCmDCPGRSo5T7wHhh0y9CUNtIw1K57cu1tKvJ5WDH3P35qfgzagzCcQ8p0civ_gbATZ9N8-M"/>
</div>
<div>
<p className="font-headline-md text-[14px] leading-tight text-white font-extrabold uppercase">Abia State Government</p>
<p className="font-label-md text-[10px] text-primary-fixed/80">Digital Certificate of Residence</p>
</div>
</div>
<div className="text-right">
<span className="material-symbols-outlined text-white text-3xl" data-icon="contactless">contactless</span>
</div>
</div>
{/*  Card Body  */}
<div className="relative z-10 flex gap-4 mt-2">
<div className="w-24 h-28 bg-surface-container rounded-lg border-2 border-brass-gold/30 overflow-hidden relative">
<img alt="Citizen Photo" className="w-full h-full object-cover grayscale brightness-110" data-alt="A professional, high-contrast portrait of a Nigerian man in his late 30s with a confident expression, set against a neutral, light gray studio backdrop. The lighting is crisp and clear, reminiscent of official government identification photography, using a corporate and modern visual style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXmdKA_lVBU28nxb-XabO8EP1SM9YP1cVz8VkSoR_alEGjs65AZwxPM8N910_IlAk1iN6JNjdWPUACBYVC_4lEnAMQIJoiK_CJYqcWJA0db52zAAe0gG7737_KuduuThwQvYIEGI8vYFZf2IjqKjiESsp7RJVlNlZlc_dLI1aOMed5HTamPbwIomqqxN32zs4CEfWVaAxw8gVzRWV46mvfFRYFyoZ3uMITKI38qfYNLT5jE6SdmTsSvsjMQiRvJOvnb8EfwDUNs3E"/>
<div className="absolute inset-0 bg-forest-green/10 mix-blend-overlay"></div>
</div>
<div className="flex-1 space-y-1">
<div className="mb-2">
<p className="font-label-md text-[10px] text-primary-fixed/60 uppercase">Full Name</p>
<p className="font-headline-md text-body-lg text-white font-bold">CHIJIOKE OKECHUKWU</p>
</div>
<div className="grid grid-cols-2 gap-2">
<div>
<p className="font-label-md text-[10px] text-primary-fixed/60 uppercase">Date of Birth</p>
<p className="font-label-md text-label-md text-white">12 MAY 1985</p>
</div>
<div>
<p className="font-label-md text-[10px] text-primary-fixed/60 uppercase">Citizen ID</p>
<p className="font-label-md text-label-md text-white">AB-093284-X</p>
</div>
</div>
</div>
</div>
{/*  Card Footer  */}
<div className="relative z-10 flex justify-between items-end">
<div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded border border-white/20">
<p className="font-label-md text-[10px] text-white">ISSUE DATE: 15 JAN 2024</p>
</div>
<div className="w-12 h-12 bg-white rounded p-1">
<img alt="QR Code" className="w-full h-full" data-alt="A clean, minimalist QR code generated with high contrast black and white pixels, intended for digital security authentication. The design is framed with a thin, precise border in a modern digital UI context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG3_UOIPNpbtPmijUWvFn0A6hz2wLa_0fzNcEX6YSJLlGBr6sk-gPwepCkWofSIXH2vUOzmmNzI7SsrdlakIYQ65V7fxMrbsi3CMqciodYqVY_NN0nKHDKrimItTNhGDbFjJaUuq8bzPXHqEC8HpZjrgXK6E28pUD1TcnERaxSDR33f-AR3Pm1m9qZzNSTBGiCUNVQhcjxEC_SehlLQ1iky9MGGLsP2SUNjNHTMJqGbHa0oeOu66-LxH_GKL74EVRp03k0CU7BTBo"/>
</div>
</div>
</div>
</section>
{/*  Biometric Status Bento  */}
<section className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-low border border-outline-variant p-4 rounded-xl flex flex-col gap-3">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined" data-icon="fingerprint">fingerprint</span>
<span className="font-label-md text-label-md">Biometrics</span>
</div>
<div>
<h3 className="font-headline-md text-body-md text-on-surface">Live Scan</h3>
<p className="text-caption text-on-surface-variant">Active &amp; Secured</p>
</div>
<div className="mt-auto flex gap-1">
<div className="h-1 flex-1 bg-forest-green rounded-full"></div>
<div className="h-1 flex-1 bg-forest-green rounded-full"></div>
<div className="h-1 flex-1 bg-forest-green rounded-full"></div>
<div className="h-1 flex-1 bg-forest-green rounded-full opacity-30"></div>
</div>
</div>
<div className="bg-surface-container-low border border-outline-variant p-4 rounded-xl flex flex-col gap-3">
<div className="flex items-center gap-2 text-eagle-red">
<span className="material-symbols-outlined" data-icon="shield_person">shield_person</span>
<span className="font-label-md text-label-md">Security</span>
</div>
<div>
<h3 className="font-headline-md text-body-md text-on-surface">Level 3 Auth</h3>
<p className="text-caption text-on-surface-variant">Deep Encryption</p>
</div>
<button className="text-left font-label-md text-[11px] text-primary underline underline-offset-4 font-bold">RE-VERIFY</button>
</div>
</section>
{/*  Civil Registry Requests  */}
<section className="space-y-4">
<div className="flex justify-between items-center">
<h3 className="font-headline-md text-body-lg text-on-surface font-semibold">Civil Registry Services</h3>
<span className="font-label-md text-caption text-secondary font-bold">VIEW ALL</span>
</div>
<div className="space-y-3">
{/*  Request Card  */}
<div className="group bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex items-center justify-between hover:bg-surface-variant/20 transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined" data-icon="child_care">child_care</span>
</div>
<div>
<p className="font-headline-md text-body-md text-on-surface">Birth Certificate</p>
<p className="text-caption text-on-surface-variant">Registry Request • Last: N/A</p>
</div>
</div>
<span className="material-symbols-outlined text-outline" data-icon="chevron_right">chevron_right</span>
</div>
{/*  Request Card  */}
<div className="group bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex items-center justify-between hover:bg-surface-variant/20 transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="favorite">favorite</span>
</div>
<div>
<p className="font-headline-md text-body-md text-on-surface">Marriage License</p>
<p className="text-caption text-on-surface-variant">Processing • Est. 4 days</p>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<span className="bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded-full text-[10px] font-bold">PENDING</span>
<span className="material-symbols-outlined text-outline text-sm" data-icon="chevron_right">chevron_right</span>
</div>
</div>
{/*  Request Card  */}
<div className="group bg-surface-container-lowest border border-outline-variant p-4 rounded-xl flex items-center justify-between hover:bg-surface-variant/20 transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-slate-gray/10 flex items-center justify-center text-slate-gray">
<span className="material-symbols-outlined" data-icon="description">description</span>
</div>
<div>
<p className="font-headline-md text-body-md text-on-surface">Death Certificate</p>
<p className="text-caption text-on-surface-variant">Apply for kin records</p>
</div>
</div>
<span className="material-symbols-outlined text-outline" data-icon="chevron_right">chevron_right</span>
</div>
</div>
</section>
{/*  Governance Info Card  */}
<section className="bg-primary-container text-on-primary-container p-6 rounded-2xl relative overflow-hidden">
<div className="relative z-10">
<h4 className="font-headline-md text-body-lg mb-2">State Governance Portal</h4>
<p className="text-body-md opacity-90 mb-4">You are currently logged into the Abia One secure ecosystem. Your data is protected by the sovereign encryption standards of Abia State.</p>
<div className="flex items-center gap-2">
<div className="h-10 px-4 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center font-label-md text-label-md transition-colors cursor-pointer">
                        SECURITY SETTINGS
                    </div>
</div>
</div>
<span className="material-symbols-outlined absolute -bottom-6 -right-6 text-9xl opacity-10" data-icon="account_balance">account_balance</span>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface dark:bg-surface-container-highest border-t border-outline-variant dark:border-outline shadow-sm rounded-t-full">
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-label-md text-label-md">Dashboard</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="notifications_active">notifications_active</span>
<span className="font-label-md text-label-md">Alerts</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-outline p-2 hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="apps">apps</span>
<span className="font-label-md text-label-md">Hub</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 transition-all duration-200 ease-in-out" href="#">
<span className="material-symbols-outlined" data-icon="person" style={{"fontVariationSettings":"'FILL' 1"}}>person</span>
<span className="font-label-md text-label-md">Profile</span>
</a>
</nav>


      </div>
    </>
  );
}
