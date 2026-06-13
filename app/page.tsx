"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: `.material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-nav {
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }
        .glass-card:hover {
            background: rgba(255, 255, 255, 0.85);
            border-color: rgba(212, 175, 55, 0.4);
            box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
            transform: translateY(-4px);
        }
        .glass-dark {
            background: rgba(0, 33, 14, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .glass-cta {
            background: linear-gradient(135deg, rgba(212, 175, 55, 0.9), rgba(184, 134, 11, 0.9));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(212, 175, 55, 0.3);
        }
        .glass-cta:hover {
            box-shadow: 0 16px 48px rgba(212, 175, 55, 0.4);
            transform: translateY(-2px);
        }
        .shadow-soft {
            box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
        }
        .section-container {
            max-width: 1280px;
            margin: 0 auto;
            padding-left: 24px;
            padding-right: 24px;
        }
        @media (min-width: 768px) {
            .section-container {
                padding-left: 48px;
                padding-right: 48px;
            }
        }` 
        .glass-nav { background: rgba(255, 255, 255, 0.75); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border-bottom: 1px solid rgba(255, 255, 255, 0.2); }
        }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
        
{/*  Glassmorphism Top Navigation  */}
<header className="fixed top-0 w-full z-50 glass-nav">
<nav className="flex justify-between items-center h-24 section-container">
<div className="flex items-center">
<img src="/Logos/Abia_One_Logo_Standard.png" alt="ABIA ONE" className="h-20 w-auto" />
</div>
<div className="hidden md:flex gap-8 items-center">
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="/citizen-consultations">Discover</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="/invest-abia">Invest</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="/serve-abia">Live</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="/jobs-abia">Work</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="/build-abia">Build</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="/governors-command-center">Govern</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-colors cursor-pointer" href="/open-abia">Connect</a>
</div>
<div className="flex items-center gap-4">
<a href="/citizen-identity-civil-registry" className="glass-cta text-white px-6 py-3 rounded-xl font-semibold transition-all cursor-pointer">
                    Citizens Portal
                </a>
<button className="md:hidden text-primary">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</nav>
</header>

<main className="pt-24">
{/*  Hero Section with Statue Image  */}
<section className="relative h-[600px] overflow-hidden flex items-center">
{/*  Background Image  */}
<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover" alt="Abia State iconic statue and roundabout" src="/Images/abia_statue.png" />
<div className="absolute inset-0 bg-gradient-to-r from-forest-green/80 via-forest-green/50 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
</div>

{/*  Hero Content  */}
<div className="relative z-10 section-container w-full">
<div className="max-w-2xl">
<div className="glass-dark rounded-2xl p-10">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-1 bg-brass-gold rounded-full"></div>
<span className="font-label-md text-label-md uppercase text-white/90 font-bold tracking-wider">The Sovereign Hub</span>
</div>
<h1 className="font-display-lg text-display-lg text-white mb-4 leading-tight">
                    Building the Future of
                    <span className="text-brass-gold block mt-2">Abia State</span>
                </h1>
<p className="font-body-lg text-lg text-white/80 leading-relaxed mb-8">
                    A unified digital platform connecting citizens, investors, and government for sustainable development in the heart of Igboland.
                </p>
<div className="flex flex-wrap gap-4">
<a href="/citizen-identity-civil-registry" className="glass-cta text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all">
                        Citizens Portal <span className="material-symbols-outlined">arrow_forward</span>
</a>
<a href="/invest-abia" className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all">
                        Investor Portal
                    </a>
</div>
</div>
</div>
</div>
</section>

{/*  Key Metrics Row  */}
<section className="section-container -mt-16 relative z-20 mb-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="glass-card p-6 rounded-2xl border-l-4 border-forest-green transition-all duration-300">
<p className="text-on-surface-variant text-caption uppercase font-bold tracking-wider mb-2">GDP Growth</p>
<div className="flex items-end justify-between">
<span className="font-display-lg text-4xl text-primary font-extrabold">+4.2%</span>
<span className="text-forest-green flex items-center text-sm font-bold">
<span className="material-symbols-outlined">trending_up</span> YOY
                        </span>
</div>
</div>
<div className="glass-card p-6 rounded-2xl border-l-4 border-brass-gold transition-all duration-300">
<p className="text-on-surface-variant text-caption uppercase font-bold tracking-wider mb-2">Digital Literacy</p>
<div className="flex items-end justify-between">
<span className="font-display-lg text-4xl text-primary font-extrabold">68%</span>
<div className="w-16 h-2 bg-surface-variant rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[68%]"></div>
</div>
</div>
</div>
<div className="glass-card p-6 rounded-2xl border-l-4 border-eagle-red transition-all duration-300">
<p className="text-on-surface-variant text-caption uppercase font-bold tracking-wider mb-2">Active Investments</p>
<div className="flex items-end justify-between">
<span className="font-display-lg text-4xl text-primary font-extrabold">124</span>
<span className="text-on-surface-variant text-sm font-medium">Billion ₦</span>
</div>
</div>
<div className="glass-card p-6 rounded-2xl border-l-4 border-primary transition-all duration-300">
<p className="text-on-surface-variant text-caption uppercase font-bold tracking-wider mb-2">Service Response</p>
<div className="flex items-end justify-between">
<span className="font-display-lg text-4xl text-primary font-extrabold">92%</span>
<span className="text-forest-green text-sm font-bold">Fast-track</span>
</div>
</div>
</div>
</section>

{/*  2035 Roadmap Tracker  */}
<section className="section-container mb-16">
<div className="glass-card p-8 rounded-2xl">
<div className="flex justify-between items-center mb-10">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary">2035 Roadmap Progress</h2>
<p className="text-on-surface-variant">Monitoring the transition to the State Operating System</p>
</div>
<span className="bg-primary-fixed text-on-primary-fixed px-4 py-2 rounded-full font-label-md text-label-md">Phase 1: Foundations</span>
</div>
<div className="space-y-8">
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="font-bold flex items-center gap-2"><span className="material-symbols-outlined text-brass-gold">bolt</span> Power Infrastructure</span>
<span className="font-label-md">74% Complete</span>
</div>
<div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
<div className="bg-brass-gold h-full w-[74%] relative">
<div className="absolute inset-0 bg-white/20 animate-pulse"></div>
</div>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="font-bold flex items-center gap-2"><span className="material-symbols-outlined text-forest-green">cloud_sync</span> Digital Migration</span>
<span className="font-label-md">42% Complete</span>
</div>
<div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[42%]"></div>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="font-bold flex items-center gap-2"><span className="material-symbols-outlined text-eagle-red">shield</span> State Security Grid</span>
<span className="font-label-md">89% Complete</span>
</div>
<div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
<div className="bg-eagle-red h-full w-[89%]"></div>
</div>
</div>
</div>
</div>
</section>

{/*  Transformation Layers Bento Grid  */}
<section className="section-container mb-16">
<h2 className="font-headline-lg text-headline-lg text-primary mb-8">Transformation Layers</h2>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[500px]">
{/*  Economy  */}
<div className="md:col-span-2 md:row-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group transition-all duration-300 flex flex-col justify-end">
<div className="absolute top-0 right-0 p-8">
<span className="material-symbols-outlined text-6xl text-surface-variant group-hover:text-primary transition-colors">monitoring</span>
</div>
<div className="relative z-10">
<span className="bg-primary-fixed text-on-primary-fixed text-caption px-3 py-1 rounded-full font-bold mb-4 inline-block">Active Growth</span>
<h3 className="font-headline-lg text-headline-lg text-primary mb-2">Sustainable Economy</h3>
<p className="text-on-surface-variant mb-6">Transitioning from commodity-reliance to an industrial and tech-driven ecosystem.</p>
<button className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                            View Economic Data <span className="material-symbols-outlined">arrow_right_alt</span>
</button>
</div>
</div>
{/*  Digital Gov  */}
<div className="md:col-span-1 glass-card rounded-2xl p-6 transition-all duration-300">
<span className="material-symbols-outlined text-brass-gold text-4xl mb-4">devices</span>
<h3 className="font-headline-md text-headline-md text-primary mb-2">Digital Gov</h3>
<p className="text-on-surface-variant text-sm">Unified state services platform.</p>
</div>
{/*  Governance  */}
<div className="md:col-span-1 glass-card rounded-2xl p-6 transition-all duration-300">
<span className="material-symbols-outlined text-brass-gold text-4xl mb-4">balance</span>
<h3 className="font-headline-md text-headline-md text-primary mb-2">Governance</h3>
<p className="text-on-surface-variant text-sm">Policy tracking and transparency.</p>
</div>
{/*  Security  */}
<div className="md:col-span-2 glass-card rounded-2xl p-6 flex items-center justify-between transition-all duration-300">
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">Public Security</h3>
<p className="text-on-surface-variant text-sm">Smart surveillance and response coordination.</p>
</div>
<span className="material-symbols-outlined text-eagle-red text-5xl">verified_user</span>
</div>
</div>
</section>

{/*  Latest Opportunities Carousel  */}
<section className="section-container mb-20">
<div className="flex justify-between items-center mb-8">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary">Latest Opportunities</h2>
<p className="text-on-surface-variant">Investment and growth windows in Abia State</p>
</div>
<div className="flex gap-2">
<button className="p-2 border border-outline-variant rounded-full hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="p-2 border border-outline-variant rounded-full hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto pb-6 snap-x no-scrollbar">
{/*  Opportunity Card 1  */}
<div className="min-w-[400px] snap-start glass-card rounded-2xl overflow-hidden group transition-all duration-300">
<div className="h-56 relative overflow-hidden bg-gradient-to-br from-forest-green/20 to-brass-gold/20">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Aba Textile Hub" src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80" />
<div className="absolute top-4 left-4 glass-cta text-white text-caption px-3 py-1 rounded-full font-bold">Invest Abia</div>
</div>
<div className="p-6">
<h4 className="font-headline-md text-xl text-primary mb-2">Aba Textile Hub Phase 2</h4>
<p className="text-on-surface-variant text-sm mb-4">PPP opportunity for advanced manufacturing infrastructure and export logistics.</p>
<div className="flex justify-between items-center">
<span className="font-label-md text-brass-gold">Target: $240M</span>
<button className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-1">Details <span className="material-symbols-outlined text-sm">open_in_new</span></button>
</div>
</div>
</div>
{/*  Opportunity Card 2  */}
<div className="min-w-[400px] snap-start glass-card rounded-2xl overflow-hidden group transition-all duration-300">
<div className="h-56 relative overflow-hidden bg-gradient-to-br from-brass-gold/20 to-forest-green/20">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Umuahia Tech Lab" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80" />
<div className="absolute top-4 left-4 glass-cta text-white text-caption px-3 py-1 rounded-full font-bold">Innovation</div>
</div>
<div className="p-6">
<h4 className="font-headline-md text-xl text-primary mb-2">Umuahia Tech Lab</h4>
<p className="text-on-surface-variant text-sm mb-4">Grant-funded expansion of the regional incubation center for AI and Fintech.</p>
<div className="flex justify-between items-center">
<span className="font-label-md text-brass-gold">Open for Bids</span>
<button className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-1">Details <span className="material-symbols-outlined text-sm">open_in_new</span></button>
</div>
</div>
</div>
{/*  Opportunity Card 3  */}
<div className="min-w-[400px] snap-start glass-card rounded-2xl overflow-hidden group transition-all duration-300">
<div className="h-56 relative overflow-hidden bg-gradient-to-br from-eagle-red/20 to-forest-green/20">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="State Cloud Data Center" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" />
<div className="absolute top-4 left-4 glass-cta text-white text-caption px-3 py-1 rounded-full font-bold">Infrastructure</div>
</div>
<div className="p-6">
<h4 className="font-headline-md text-xl text-primary mb-2">State Cloud Expansion</h4>
<p className="text-on-surface-variant text-sm mb-4">Digital infrastructure project to house all ministerial databases securely.</p>
<div className="flex justify-between items-center">
<span className="font-label-md text-brass-gold">Q3 Completion</span>
<button className="text-primary font-bold text-sm uppercase tracking-wider flex items-center gap-1">Details <span className="material-symbols-outlined text-sm">open_in_new</span></button>
</div>
</div>
</div>
</div>
</section>

{/*  Citizens Portal CTA Banner  */}
<section className="section-container mb-16">
<div className="glass-dark rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-6">
<div className="w-16 h-16 rounded-full bg-brass-gold/20 flex items-center justify-center">
<span className="material-symbols-outlined text-brass-gold text-4xl">account_circle</span>
</div>
<div>
<h2 className="font-headline-lg text-headline-lg text-white mb-2">Citizens Portal</h2>
<p className="text-white/70">Access all government services, track your applications, and connect with your community.</p>
</div>
</div>
<a href="/citizen-identity-civil-registry" className="glass-cta text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2 transition-all whitespace-nowrap">
                Access Portal <span className="material-symbols-outlined">arrow_forward</span>
</a>
</div>
</section>
</main>

{/*  Footer  */}
<footer className="bg-surface-container-highest border-t border-outline-variant">
<div className="flex flex-col md:flex-row justify-between items-center py-12 section-container">
<div className="mb-6 md:mb-0">
<img src="/Logos/Abia_One_No_Background.png" alt="ABIA ONE" className="h-16 w-auto mb-4" />
<p className="text-on-surface-variant text-caption">© 2024 Abia State Government. All rights reserved. Built for the future of governance.</p>
</div>
<div className="flex flex-wrap justify-center gap-8">
<a className="text-on-surface-variant font-medium hover:text-primary transition-all text-caption" href="#">Institutional Links</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-all text-caption" href="#">Transparency Info</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-all text-caption" href="#">Privacy Policy</a>
<a className="text-on-surface-variant font-medium hover:text-primary transition-all text-caption" href="#">Contact Support</a>
</div>
</div>
</footer>


      </div>
    </>
  );
}
