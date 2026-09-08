import React from "react";
import { Play, Plus, Clock, Share2 } from "lucide-react";
import heroImg from "../assets/ne.jpg";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[550px] sm:min-h-[620px] lg:min-h-[680px] flex items-center bg-[#070709] overflow-hidden">
      {/* BACKGROUND IMAGE & GRADIENT OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Interstellar Banner"
          className="w-full h-full object-cover object-center scale-105"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=2000&auto=format&fit=crop";
          }}
        />

        {/* Gradient Overlay Kiri ke Kanan */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-[#070709]/75 to-transparent" />

        {/* Gradient Overlay Bawah ke Atas */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-black/40" />
      </div>

      {/* KONTEN UTAMA HERO */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 flex items-center justify-between">
        {/* Kolom Kiri: Detail Film */}
        <div className="max-w-2xl">
          {/* BADGES: 4K ULTRA HD & IMAX */}
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-red-600 text-white font-black text-[11px] px-2 py-0.5 rounded tracking-wider uppercase">
              4K ULTRA HD
            </span>
            <span className="bg-zinc-800/90 border border-zinc-700/80 text-zinc-300 font-bold text-[11px] px-2.5 py-0.5 rounded tracking-wider uppercase">
              IMAX
            </span>
          </div>

          {/* JUDUL FILM */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white font-sans drop-shadow-2xl leading-none mb-4">
            INTERSTELLAR
          </h1>

          {/* METADATA: Year, Genre, Duration */}
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300 font-medium mb-8">
            <span>2014</span>
            <span className="text-zinc-500">•</span>
            <span>Sci-Fi, Adventure, Drama</span>
            <span className="text-zinc-500">•</span>
            <span className="text-amber-400 font-semibold inline-flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              2h 49m
            </span>
          </div>

          {/* TOMBOL AKSI (CTA BUTTONS) */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Tombol Play Movie */}
            <button className="flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-7 py-3 rounded-md shadow-lg shadow-red-600/30 transition-all duration-150 cursor-pointer">
              <Play className="w-4 h-4 fill-white" />
              <span>PLAY MOVIE</span>
            </button>

            {/* Tombol My List */}
            <button className="flex items-center justify-center gap-2 bg-zinc-900/90 hover:bg-zinc-800 active:scale-95 border border-zinc-700/80 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-5 sm:px-6 py-3 rounded-md backdrop-blur-sm transition-all duration-150 cursor-pointer">
              <Plus className="w-4 h-4" />
              <span>MY LIST</span>
            </button>

            {/* Tombol Share */}
            <button
              aria-label="Share"
              className="p-3 bg-zinc-900/90 hover:bg-zinc-800 active:scale-95 border border-zinc-700/80 text-zinc-200 hover:text-white rounded-md backdrop-blur-sm transition-all duration-150 cursor-pointer flex items-center justify-center"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
