import React from "react";

export default function GenreCard({
  title,
  icon: Icon,
  image,
  className = "",
}) {
  return (
    <div
      className={`relative w-full h-full rounded-xl overflow-hidden group cursor-pointer border border-zinc-800/80 hover:border-zinc-500 transition-all duration-300 shadow-lg bg-zinc-900 ${className}`}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent group-hover:via-black/15 transition-all duration-300" />

      {/* Content: Icon & Title at bottom-left */}
      <div className="absolute bottom-3.5 left-3.5 z-10 flex flex-col items-start gap-1 select-none">
        {Icon && (
          <div className="text-red-600 transition-transform duration-300 group-hover:scale-110">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.2} />
          </div>
        )}
        <h3 className="text-white font-extrabold text-sm sm:text-base tracking-wider uppercase group-hover:text-red-500 transition-colors drop-shadow">
          {title}
        </h3>
      </div>
    </div>
  );
}


