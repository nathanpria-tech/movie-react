import React from "react";
import { Plus, Play } from "lucide-react";

export default function MovieCard({ movie }) {
  return (
    <div className="group cursor-pointer flex flex-col gap-2.5 transition-all duration-300">
      {/* POSTER WRAPPER */}
      <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800/80 shadow-md group-hover:border-zinc-700 group-hover:shadow-xl group-hover:shadow-red-950/20 transition-all duration-300">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
        />

        {/* Dark Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          {/* Play Icon on Hover */}
          <div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-all duration-200">
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>
        </div>

        {/* NEW Badge if isNew */}
        {movie.isNew && (
          <span className="absolute top-2 right-2 z-10 bg-red-600 text-white font-black text-[10px] px-1.5 py-0.5 rounded shadow tracking-wider uppercase">
            NEW
          </span>
        )}

        {/* Plus / Watchlist Button (Top Right, when not isNew or on hover) */}
        {!movie.isNew && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              // Handle add to watchlist
            }}
            aria-label="Add to Watchlist"
            className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-red-600 hover:border-red-600 transition-all duration-200"
          >
            <Plus className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* MOVIE INFO */}
      <div className="flex flex-col">
        <h3 className="text-white font-bold text-sm sm:text-base tracking-wide uppercase group-hover:text-red-500 transition-colors line-clamp-1">
          {movie.title}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium mt-0.5">
          <span>{movie.genre}</span>
          {movie.year && (
            <>
              <span>•</span>
              <span>{movie.year}</span>
            </>
          )}
          {movie.rating && !movie.year && (
            <>
              <span>•</span>
              <span className="text-amber-400 font-bold">{movie.rating}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
