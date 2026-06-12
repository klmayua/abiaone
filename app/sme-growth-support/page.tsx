"use client";

export default function Page() {
  return (
    <>
      
      {/* Visual stylesheet overrides for this screen */}
      <style dangerouslySetInnerHTML={{ __html: "body { font-family: 'Hanken Grotesk', sans-serif; }\n        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }\n        .glass-panel { backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }\n        .bento-card { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }\n        .bento-card:hover { transform: translateY(-4px); }\n        .brass-line { position: relative; }\n        .brass-line::after { content: ''; position: absolute; left: 0; bottom: -8px; width: 40px; height: 3px; background-color: #D4AF37; }\n        ::-webkit-scrollbar { width: 6px; }\n        ::-webkit-scrollbar-track { background: #f1f5ee; }\n        ::-webkit-scrollbar-thumb { background: #004d28; border-radius: 10px; }" }} />
  
      {/* Screen markup */}
      <div className="bg-background text-on-surface min-h-screen flex">
        
{/*  Sidebar Navigation  */}
<aside className="hidden lg:flex flex-col h-full w-64 fixed left-0 top-0 bg-surface-container-low dark:bg-forest-deep border-r border-outline-variant z-50">
<div className="p-6">
<h1 className="font-headline-lg text-headline-lg font-bold text-forest-deep dark:text-primary-fixed mb-1">ABIA ONE</h1>
<p className="font-label-md text-label-md text-on-surface-variant/70 uppercase tracking-widest">Modern Governance OS</p>
</div>
<nav className="flex-grow mt-4">
<div className="px-4 mb-2">
<p className="font-label-md text-label-md text-outline uppercase mb-2 px-2">Ecosystem</p>
<a className="flex items-center gap-3 px-4 py-3 mb-1 bg-secondary-container text-on-secondary-container rounded-lg mx-2 transition-all translate-x-1" href="/economic-transformation">
<span className="material-symbols-outlined">payments</span>
<span className="font-body-md text-body-md">Economic Transformation</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mb-1 text-on-surface-variant hover:bg-surface-variant/50 mx-2 transition-all" href="/serve-abia">
<span className="material-symbols-outlined">account_balance</span>
<span className="font-body-md text-body-md">Digital Government</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mb-1 text-on-surface-variant hover:bg-surface-variant/50 mx-2 transition-all" href="/local-governance">
<span className="material-symbols-outlined">mitre</span>
<span className="font-body-md text-body-md">Transparent Governance</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mb-1 text-on-surface-variant hover:bg-surface-variant/50 mx-2 transition-all" href="/secure-abia">
<span className="material-symbols-outlined">security</span>
<span className="font-body-md text-body-md">Public Trust</span>
</a>
</div>
</nav>
<div className="mt-auto p-4 border-t border-outline-variant">
<button className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary py-3 rounded-lg font-body-md font-semibold hover:opacity-90 transition-all active:scale-95 mb-4">
<span className="material-symbols-outlined">chat</span>
                Citizen Feedback
            </button>
<div className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-md text-label-md">Settings</span>
</a>
<a className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-lg transition-all" href="#">
<span className="material-symbols-outlined">help</span>
<span className="font-label-md text-label-md">Support</span>
</a>
</div>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-grow lg:ml-64 min-h-screen flex flex-col">
{/*  Top Navigation  */}
<header className="fixed top-0 right-0 left-0 lg:left-64 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant h-16 flex items-center justify-between px-6">
<div className="flex items-center gap-8">
<h2 className="font-headline-md text-headline-md font-bold text-forest-deep">SME Portal</h2>
<nav className="hidden md:flex items-center gap-6">
<a className="font-label-md text-label-md text-primary border-b-2 border-brass-gold pb-1" href="#">Directory</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Grants</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Aba Zone</a>
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" href="#">Certification</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 px-4 py-2 border border-brass-gold text-primary rounded-lg font-label-md hover:bg-brass-gold/10 transition-all">
                    Emergency
                </button>
<button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-md font-semibold hover:opacity-90 transition-all">
                    Citizen Portal
                </button>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-surface-container-high object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHjC75i236h9uBcRygmZ2Bau6ZFIPYnNU2hUvhifUIZmh16MKnPl8k0G5is_wY1nnRsl7yiZY7-Cw0EOmPXjEBAFh4PuvEq_BnFUjnS12pCQ8Lk4s7uu_3Zpw_hsO3-B8jLfP1gKu_IWE1To8Q40CjtRAZQScFZsEoOdmHmAnxK33VzU40ZUCj5wdmRxh8cYvtTOKDfqkTpm5bik-X4DddmiYn8jkD6UqY4_NWZMjjGwk8YiMASqO0-5EiV2m4IsB7Nndk4wlZ2Ss" />
</div>
</header>
<section className="pt-24 pb-12 px-6 max-w-7xl mx-auto w-full">
{/*  Hero Stats / Bento Header  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
<div className="md:col-span-8 relative overflow-hidden rounded-xl bg-forest-green p-8 text-on-primary flex flex-col justify-end min-h-[320px]">

<div className="relative z-10">
<span className="inline-block px-3 py-1 bg-brass-gold text-primary font-label-md rounded mb-4">ACTIVE INCENTIVE</span>
<h1 className="font-display-lg text-display-lg mb-4 leading-tight">Empowering Abia's Industrial Future</h1>
<p className="font-body-lg text-body-lg max-w-xl opacity-90">Access centralized resources for SME growth, from Aba's shared facilities to global export certifications. Abia is open for business.</p>
<div className="flex gap-4 mt-8">
<button className="bg-state-white text-primary px-6 py-3 rounded font-body-md font-bold hover:scale-105 transition-transform">Register SME</button>
<button className="border border-state-white text-state-white px-6 py-3 rounded font-body-md font-bold hover:bg-state-white/10 transition-all">View Directory</button>
</div>
</div>
</div>
<div className="md:col-span-4 grid grid-rows-2 gap-6">
<div className="bg-surface-container-high border border-outline-variant p-6 rounded-xl flex flex-col justify-between">
<div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase">Grant Funding</p>
<h3 className="font-headline-md text-headline-md text-forest-green mt-1">₦2.4B Available</h3>
</div>
<div className="flex items-center gap-2 text-primary font-body-md font-semibold">
<span>Apply Now</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</div>
</div>
<div className="bg-brass-gold/10 border border-brass-gold p-6 rounded-xl flex flex-col justify-between">
<div>
<p className="font-label-md text-label-md text-on-surface-variant uppercase">Aba Industrial Zone</p>
<h3 className="font-headline-md text-headline-md text-primary mt-1">84% Capacity</h3>
</div>
<div className="flex items-center gap-2 text-primary font-body-md font-semibold">
<span>Book Facility</span>
<span className="material-symbols-outlined text-sm">precision_manufacturing</span>
</div>
</div>
</div>
</div>
{/*  Bento Services Grid  */}
<h2 className="font-headline-lg text-headline-lg mb-8 brass-line">Support Services</h2>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
{/*  Shared Facilities  */}
<div className="bento-card col-span-1 md:col-span-2 bg-state-white border border-outline-variant p-6 rounded-xl flex flex-col md:flex-row gap-6">
<div className="flex-1">
<span className="material-symbols-outlined text-brass-gold text-4xl mb-4">factory</span>
<h4 className="font-headline-md text-headline-md mb-2">Shared Facility Centers</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Utilize industrial-grade machinery for shoemaking, garment manufacturing, and woodworking at subsidized rates.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 bg-surface-container text-on-surface-variant text-caption rounded">CNC Machines</span>
<span className="px-2 py-1 bg-surface-container text-on-surface-variant text-caption rounded">Laser Cutters</span>
<span className="px-2 py-1 bg-surface-container text-on-surface-variant text-caption rounded">Industrial Sewing</span>
</div>
<button className="text-primary font-bold flex items-center gap-2">Check availability <span className="material-symbols-outlined">chevron_right</span></button>
</div>
<div className="w-full md:w-48 h-48 md:h-full rounded-lg overflow-hidden bg-slate-200">
<img className="w-full h-full object-cover" data-alt="A modern, high-tech industrial manufacturing facility in Aba with industrial sewing machines and laser cutting equipment. The space is clean, well-lit with cool fluorescent lights, and organized for efficiency, reflecting a professional state-run manufacturing center with forest green and brass accents throughout the room architecture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvsM05RhL-kUfINkFaz9ZY9knJ3xR2Q_Z7B4u_mAvMn1CSHfPX9dqlyxZtlSS4_nfPWdOQJ1B6IIcAfqLOSZOB6B9QF1d3B77UepZtB6QG410KisLDnNBcSLsgEu8VSMSMq3uGaS1UPtwgyHyrk9bSbxmjzot6Yc4LM2lHtpDN8YifjaRUAqFHcUL39TYdWzDFjzq3vHjxpwuxhH6kphmqZRSl7M6jgiWpH9IsYmFx0o6-HcQgon-Fa81Nxzq4YiWBQEIZ0z_FUnk" />
</div>
</div>
{/*  Export Certification  */}
<div className="bento-card bg-state-white border border-outline-variant p-6 rounded-xl flex flex-col">
<span className="material-symbols-outlined text-eagle-red text-4xl mb-4">verified</span>
<h4 className="font-headline-md text-headline-md mb-2">Export Ready</h4>
<p className="font-body-md text-body-md text-on-surface-variant flex-grow">Obtain the 'Abia Standard' seal and international export certifications for global markets.</p>
<button className="mt-6 w-full py-2 border border-outline text-on-surface font-semibold rounded hover:bg-surface-variant transition-colors">Start Assessment</button>
</div>
{/*  Mentorship  */}
<div className="bento-card bg-primary text-on-primary p-6 rounded-xl flex flex-col">
<span className="material-symbols-outlined text-brass-gold text-4xl mb-4">diversity_3</span>
<h4 className="font-headline-md text-headline-md mb-2 text-on-primary-container">Mentorship Matching</h4>
<p className="font-body-md text-body-md opacity-90 flex-grow">Connect with seasoned industrialists and digital growth experts to scale your operation.</p>
<div className="flex -space-x-2 mt-4">
<img alt="Mentor 1" className="w-8 h-8 rounded-full border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpHj_e1yPrKUpfNcKID79HpeZvQpFu74wkc5lMMl-AQ2imsUCeaf6PHZ3MlTIPw0WZ9xhgG-2cN9IiooEEIDaxSBlyNDCHL4tCJl_YhU8oS2TParSXFms8sTJIfpA5XKRFbG3_usqz8xuNETC_xqV8TcM5Btoerbn28DoZYC1yyYCMf0mgW9Qus270fF6B5W73ePqziX5TOzgw4cXeKel0vu-LVBM-ZP-pn8_OKkD9jDbFZgUY8n4xqqxSSpDxgi_-TwB7Aw1bPKw" />
<img alt="Mentor 2" className="w-8 h-8 rounded-full border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNpCm7HfsWojSqRZ8-kxu_3i8mG7sdWNJSKIB0aBCsYNyynXskcFqHmDpdQuRcsv9e2qhakUjKulKJFD_XFgu9RABEpkSbeCGu7KZe64gCV6p4TGvx-kqyu8IiFa1OpNXWRMNOcfe8ycPTzjtkccn9InIYW0oQsO4AwKnBSKExzY63hN1L_-JZ3Z1e3x_Aghx_wa6fnBZViTcbAn00r6cy3uWvkBNallXJ0bGnX-Q2Lle9tXLDRADwGTIPN25FWrS0YHmJdX2nsZM" />
<img alt="Mentor 3" className="w-8 h-8 rounded-full border-2 border-primary" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUkjWEIjzg4CG2IuwcK3UBFm2aqCCOi2FIOmhy7zH3cjqKDP15Z6lqW3vpOGzLhrvCaklPtXo3vOUd8V_TowHlTYk_XR-eeCJ1M8clLaJujbmIoWZ0rM7LBH0mBInIqofp6QoG6MJi-r0oax504skkAMzR3jHitqMH95YkpCk9J5X4-afOCQ4PG_xcQOiWdRXbCAzF8A8dgUCeUgqdl-EwqAcvsdo5UuttZLZZ8KE-QL0XH9B5ey5apaoH1n_AvN4DQQmjUvFlcd0" />
<div className="w-8 h-8 rounded-full bg-brass-gold text-primary flex items-center justify-center text-xs font-bold border-2 border-primary">+12</div>
</div>
<button className="mt-6 w-full py-2 bg-on-primary-container text-primary font-bold rounded">Find a Mentor</button>
</div>
{/*  SME Grant Card (Full Width on Mobile)  */}
<div className="bento-card col-span-1 md:col-span-4 bg-surface-container-lowest border border-outline-variant p-8 rounded-xl grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<h4 className="font-headline-lg text-headline-lg mb-2">2024 SME Growth Grant</h4>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-6">Round 2 applications are now open for businesses in Agribusiness, Creative Industries, and Tech-enabled services.</p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green">check_circle</span>
<span className="font-body-md">Up to ₦5,000,000 in equity-free funding</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-forest-green">check_circle</span>
<span className="font-body-md">Access to Abia One Digital Suite</span>
</div>
</div>
</div>
<div className="md:col-span-2 bg-surface-container-low p-6 rounded-lg border border-outline-variant">
<h5 className="font-label-md text-label-md text-on-surface-variant mb-4 uppercase">Application Progress</h5>
<div className="space-y-6">
<div className="flex justify-between items-end mb-2">
<span className="font-label-md text-label-md">Profile Completion</span>
<span className="font-label-md text-label-md font-bold">65%</span>
</div>
<div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
<div className="bg-forest-green h-full w-[65%]"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-3 bg-state-white rounded border border-outline-variant">
<p className="text-caption text-on-surface-variant">Status</p>
<p className="font-body-md font-bold text-secondary">In Review</p>
</div>
<div className="p-3 bg-state-white rounded border border-outline-variant">
<p className="text-caption text-on-surface-variant">Deadline</p>
<p className="font-body-md font-bold">15 Oct</p>
</div>
</div>
<button className="w-full py-3 bg-primary text-on-primary rounded font-bold hover:opacity-90">Continue Application</button>
</div>
</div>
</div>
</div>
{/*  SME Directory Table-Style List  */}
<div className="flex items-center justify-between mb-6">
<h2 className="font-headline-lg text-headline-lg brass-line">Verified SME Directory</h2>
<div className="flex gap-2">
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
<input className="pl-10 pr-4 py-2 border border-outline-variant rounded-lg bg-state-white text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none min-w-[280px]" placeholder="Search by name or industry..." type="text" />
</div>
<button className="px-4 py-2 bg-state-white border border-outline-variant rounded-lg flex items-center gap-2 font-label-md hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-sm">filter_list</span>
                        Filters
                    </button>
</div>
</div>
<div className="bg-state-white border border-outline-variant rounded-xl overflow-hidden mb-12">
<table className="w-full text-left border-collapse">
<thead className="bg-surface-container-low border-b border-outline-variant">
<tr>
<th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant">Business Name</th>
<th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant">Sector</th>
<th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant">Location</th>
<th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant">Status</th>
<th className="px-6 py-4 font-label-md text-label-md text-on-surface-variant">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant">
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center text-on-primary-container font-bold">A</div>
<span className="font-body-md font-semibold">Ariaria Leather Works</span>
</div>
</td>
<td className="px-6 py-4 font-body-md text-on-surface-variant">Manufacturing</td>
<td className="px-6 py-4 font-body-md text-on-surface-variant">Aba North</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-bold">
<span className="w-1 h-1 bg-green-600 rounded-full"></span> Export Certified
                                </span>
</td>
<td className="px-6 py-4">
<button className="text-primary font-semibold text-sm hover:underline">View Profile</button>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold">K</div>
<span className="font-body-md font-semibold">Kasuva Digital Tech</span>
</div>
</td>
<td className="px-6 py-4 font-body-md text-on-surface-variant">Tech/SaaS</td>
<td className="px-6 py-4 font-body-md text-on-surface-variant">Umuahia</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">
<span className="w-1 h-1 bg-blue-600 rounded-full"></span> Grant Recipient
                                </span>
</td>
<td className="px-6 py-4">
<button className="text-primary font-semibold text-sm hover:underline">View Profile</button>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed font-bold">O</div>
<span className="font-body-md font-semibold">Ohuhu Farms Ltd</span>
</div>
</td>
<td className="px-6 py-4 font-body-md text-on-surface-variant">Agro-Processing</td>
<td className="px-6 py-4 font-body-md text-on-surface-variant">Umuahia North</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-bold">
<span className="w-1 h-1 bg-yellow-600 rounded-full"></span> Pending Verification
                                </span>
</td>
<td className="px-6 py-4">
<button className="text-primary font-semibold text-sm hover:underline">View Profile</button>
</td>
</tr>
</tbody>
</table>
<div className="px-6 py-4 bg-surface-container-low border-t border-outline-variant flex justify-between items-center">
<p className="font-label-md text-label-md text-on-surface-variant">Showing 3 of 1,284 SMEs</p>
<div className="flex gap-2">
<button className="px-3 py-1 border border-outline-variant rounded bg-state-white hover:bg-surface-variant disabled:opacity-50" disabled={true}>
<span className="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button className="px-3 py-1 border border-outline-variant rounded bg-state-white hover:bg-surface-variant">
<span className="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</section>
{/*  Footer Section  */}
<footer className="w-full px-margin-mobile md:px-margin-desktop bg-surface-container-highest dark:bg-forest-deep mt-auto border-t border-outline-variant py-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
<div className="max-w-xs">
<h3 className="font-headline-lg text-headline-lg text-forest-deep dark:text-primary-fixed font-bold mb-4">ABIA ONE</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">Building the sovereign digital infrastructure for the state of Abia, fostering industrial growth and transparent governance.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:text-brass-gold transition-colors" href="#">
<span className="material-symbols-outlined">public</span>
</a>
<a className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center hover:text-brass-gold transition-colors" href="#">
<span className="material-symbols-outlined">alternate_email</span>
</a>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
<div>
<h4 className="font-label-md text-label-md text-on-surface uppercase mb-4">Government</h4>
<ul className="space-y-2">
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold hover:underline decoration-brass-gold" href="/invest-in-aba">Invest Abia</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold hover:underline decoration-brass-gold" href="/serve-abia">Serve Abia</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold hover:underline decoration-brass-gold" href="/build-abia">Build Abia</a></li>
</ul>
</div>
<div>
<h4 className="font-label-md text-label-md text-on-surface uppercase mb-4">Resources</h4>
<ul className="space-y-2">
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold hover:underline decoration-brass-gold" href="/open-abia">Open Abia</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold hover:underline decoration-brass-gold" href="#">Privacy Policy</a></li>
<li><a className="font-body-md text-body-md text-on-surface-variant hover:text-brass-gold hover:underline decoration-brass-gold" href="#">Contact Us</a></li>
</ul>
</div>
<div className="col-span-2 sm:col-span-1">
<h4 className="font-label-md text-label-md text-on-surface uppercase mb-4">Support Center</h4>
<p className="font-body-md text-body-md text-on-surface-variant mb-2">Reach the SME Desk</p>
<p className="font-body-md text-body-md font-bold text-forest-green">0800-ABIA-SME</p>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant text-center">
<p className="font-body-md text-body-md text-on-surface-variant">© 2024 Government of Abia State, Nigeria. Built for the Future.</p>
</div>
</footer>
</main>
{/*  FAB for quick action (Conditional Suppression applied: Only on main SME dashboard)  */}
<button className="fixed bottom-8 right-8 w-14 h-14 bg-forest-green text-on-primary rounded-full shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined text-3xl">add_business</span>
</button>


      </div>
    </>
  );
}
