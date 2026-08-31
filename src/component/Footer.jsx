import React from "react";
import { Globe, CreditCard, Wallet } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#070709] border-t border-zinc-800/80 text-zinc-400 text-xs sm:text-sm pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP SECTION: 4 COLUMNS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col items-start">
            <span className="text-2xl font-black tracking-tighter text-red-600 uppercase select-none">
              CINEPLEX
            </span>
            <p className="text-zinc-400 text-xs leading-relaxed mt-4 max-w-xs">
              Redefining the cinematic experience for the digital age. Immerse
              yourself in the best of global cinema.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3.5 mt-5">
              <a
                href="#"
                aria-label="Website"
                className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Platform Links */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              PLATFORM
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Movies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  TV Shows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Award Winners
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal Links */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              LEGAL
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div>
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              SUBSCRIBE
            </h3>
            <p className="text-xs text-zinc-400 mb-3">
              Get the latest cinema updates.
            </p>
            {/* Input & Join Button */}
            <form onSubmit={(e) => e.preventDefault()} className="flex items-stretch w-full max-w-sm">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-l-md px-3.5 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-700"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-xs uppercase px-4 py-2 rounded-r-md transition-all shrink-0 cursor-pointer"
              >
                JOIN
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM SUB-FOOTER */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2024 CINEPLEX. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-3 text-zinc-500">
            <CreditCard className="w-5 h-5" />
            <Wallet className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
