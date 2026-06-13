"use client";

import { useState } from "react";

const routes = [
  { category: "Core Experiences", title: "Discover Abia", path: "/citizen-consultations", device: "DESKTOP" },
  { category: "Core Experiences", title: "Invest in Abia", path: "/invest-abia", device: "DESKTOP" },
  { category: "Core Experiences", title: "Live in Abia", path: "/serve-abia", device: "DESKTOP" },
  { category: "Core Experiences", title: "Work in Abia", path: "/jobs-abia", device: "DESKTOP" },
  { category: "Core Experiences", title: "Build Abia", path: "/build-abia", device: "DESKTOP" },
  { category: "Core Experiences", title: "Govern Abia", path: "/governors-command-center", device: "DESKTOP" },
  { category: "Core Experiences", title: "Connect Abia", path: "/open-abia", device: "DESKTOP" },

  { category: "Dashboards", title: "Governor's Command Center", path: "/governors-command-center", device: "DESKTOP" },
  { category: "Dashboards", title: "MDA Performance Dashboard", path: "/mda-performance", device: "DESKTOP" },
  { category: "Dashboards", title: "Live Incident Feed", path: "/live-incident-feed", device: "DESKTOP" },

  { category: "Ministries", title: "Ministry of Agriculture", path: "/ministry-of-agriculture", device: "DESKTOP" },
  { category: "Ministries", title: "Ministry of Health", path: "/ministry-of-health", device: "DESKTOP" },
  { category: "Ministries", title: "Ministry of Communication", path: "/ministry-of-communication", device: "DESKTOP" },
];

export default function PortalDirectory() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredRoutes = routes.filter(r => 
    r.title.toLowerCase().includes(search.toLowerCase()) ||
    r.category.toLowerCase().includes(search.toLowerCase())
  );

  // Group by category
  const categories: { [key: string]: typeof routes } = {};
  filteredRoutes.forEach(r => {
    if (!categories[r.category]) {
      categories[r.category] = [];
    }
    categories[r.category].push(r);
  });

  return (
    <>
      {/* Floating Toggle Button */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[99999] bg-forest-green hover:bg-[#00522b] text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 cursor-pointer transition-all border border-brass-gold/30 hover:scale-105 active:scale-95"
      >
        <span className="material-symbols-outlined text-[20px]">{isOpen ? "close" : "dashboard_customize"}</span>
        <span className="font-semibold text-sm tracking-wide uppercase font-sans">Portal Directory</span>
      </div>

      {/* Full screen overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[99998] bg-[#00210e]/70 backdrop-blur-md flex justify-end transition-opacity duration-300">
          <div className="w-full max-w-4xl bg-surface p-8 shadow-2xl flex flex-col h-full border-l border-outline-variant overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
<div className="flex items-center gap-3">
<img src="/Logos/Abia_One_No_Background.png" alt="ABIA ONE" className="h-10 w-auto" />
<span className="text-xl font-bold text-primary">Portal Navigator</span>
</div>
                <p className="text-on-surface-variant text-sm mt-1">Jump to any core experience, dashboard, or ministry</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-on-surface-variant hover:text-primary hover:bg-surface-container-high p-2 rounded-full transition-all flex items-center"
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>

            {/* Search Input */}
            <div className="relative mb-6">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">search</span>
              <input 
                type="text" 
                placeholder="Search portals, dashboards, ministries..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-surface-container border border-outline-variant/60 rounded-full pl-12 pr-4 py-3 outline-none text-on-surface focus:border-forest-green transition-all"
              />
              {search && (
                <button 
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary font-sans text-xs uppercase"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Categories and Routes Grid */}
            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-8 pb-10">
              {Object.keys(categories).length === 0 ? (
                <div className="text-center py-16">
                  <span className="material-symbols-outlined text-5xl text-outline-variant">info</span>
                  <p className="text-on-surface-variant mt-4 font-medium">No directories match your search.</p>
                </div>
              ) : (
                Object.entries(categories).map(([catName, catItems]) => (
                  <div key={catName} className="space-y-3">
                    <h3 className="text-xs uppercase font-extrabold text-brass-gold tracking-widest border-b border-outline-variant/30 pb-1 font-sans">{catName}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {catItems.map((item) => (
                        <a 
                          key={item.path}
                          href={item.path}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center justify-between p-4 bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 rounded-xl transition-all duration-200 group hover:shadow-sm"
                        >
                          <div className="flex items-center gap-3">
                            <span className={`material-symbols-outlined ${item.device === 'MOBILE' ? 'text-brass-gold' : 'text-forest-green'} text-lg`}>
                              {item.device === 'MOBILE' ? "stay_current_portrait" : "desktop_windows"}
                            </span>
                            <span className="font-semibold text-sm text-on-surface group-hover:text-primary transition-colors text-left">{item.title}</span>
                          </div>
                          <span className="material-symbols-outlined text-outline-variant group-hover:text-primary group-hover:translate-x-1 transition-all text-[16px]">arrow_forward_ios</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {/* Footer Status */}
            <div className="border-t border-outline-variant/30 pt-4 flex justify-between items-center text-xs text-on-surface-variant">
              <span>Status: Active Operating System (55 Routes Live)</span>
              <span>© Abia State Government</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
