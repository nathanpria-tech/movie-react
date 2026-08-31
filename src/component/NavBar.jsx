import React, { useState } from "react";
import { Search, Bell, Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Trending");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Trending", "New Releases", "Genres", "Watchlist"];

  const handleNavClick = (item) => {
    setActiveTab(item);
    const targetId = item.toLowerCase().replace(/\s+/g, "-");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0d0d0f]/95 backdrop-blur-md border-b border-zinc-800/60 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* SISI KIRI: Logo & Menu Navigasi */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-red-600 select-none hover:opacity-90 transition-opacity">
                CINEPLEX
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {navItems.map((item) => {
                const isActive = activeTab === item;
                return (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`relative py-1 transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "text-red-500 font-semibold"
                        : "text-zinc-400 hover:text-zinc-100"
                    }`}
                  >
                    {item}
                    {/* Active Underline Indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 rounded-full animate-in fade-in" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* SISI KANAN: Search, Subscribe, Bell & Profile */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Bar Input */}
            <div className="relative flex items-center bg-zinc-900/90 border border-zinc-800 rounded-lg px-3 py-1.5 focus-within:border-zinc-600 transition-all">
              <Search className="w-4 h-4 text-zinc-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search movies..."
                className="w-28 sm:w-44 md:w-56 bg-transparent text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
              />
            </div>

            {/* Tombol Subscribe */}
            <button className="bg-red-600 hover:bg-red-700 active:scale-95 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-2 rounded-md shadow-md shadow-red-900/30 transition-all duration-150 whitespace-nowrap">
              SUBSCRIBE
            </button>

            {/* Icon Notifikasi */}
            <button
              aria-label="Notifications"
              className="p-1.5 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800/80 transition-colors relative"
            >
              <Bell className="w-5 h-5" />
              {/* Optional: Indicator dot merah */}
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full ring-2 ring-[#0d0d0f]" />
            </button>

            {/* Profile Avatar */}
            <button className="flex items-center focus:outline-none group">
              <div className="w-8 h-8 rounded-md overflow-hidden border border-zinc-700/80 group-hover:border-red-500 group-hover:ring-2 group-hover:ring-red-500/30 transition-all">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </button>

            {/* Hamburger Button untuk Tampilan Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 md:hidden text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5 text-zinc-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-zinc-800 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveTab(item);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-md text-sm font-medium ${
                  activeTab === item
                    ? "bg-zinc-800 text-red-500 font-semibold"
                    : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
