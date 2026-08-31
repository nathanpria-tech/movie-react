import React, { useRef } from "react";
import {
  Flame,
  Skull,
  Drama,
  Rocket,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Hero from "../component/hero";
import MovieCard from "../component/MovieCard";
import GenreCard from "../component/GenreCard";
import { trendingMovies, newReleaseMovies } from "../data/Movie";

// Import Foto Genre Asli Milik Kamu dari Assets
import actionImg from "../assets/mobil.jpg";
import horrorImg from "../assets/HORORR.jpg";
import dramaImg from "../assets/Drama.jpg";
import scifiImg from "../assets/SCI-FI.jpg";

function Home() {
  const newReleasesRef = useRef(null);

  const scrollNewReleases = (direction) => {
    if (newReleasesRef.current) {
      const scrollAmount = 320;
      newReleasesRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="w-full pb-16">
      {/* HERO SECTION */}
      <Hero />

      {/* TRENDING NOW SECTION */}
      <section
        id="trending"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16"
      >
        {/* Section Header */}
        <div className="flex items-end justify-between mb-6 pb-2 border-b border-zinc-800/80">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans">
              TRENDING NOW
            </h2>
            {/* Red Underline Accent */}
            <div className="h-[3px] w-14 bg-red-600 rounded-full mt-2" />
          </div>

          <button className="text-xs sm:text-sm font-bold uppercase tracking-wider text-red-600 hover:text-red-500 transition-colors cursor-pointer pb-1">
            VIEW ALL
          </button>
        </div>

        {/* Horizontal Slider / Carousel: 4 Full Cards + 5th Card Half Visible */}
        <div className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scroll-smooth py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {trendingMovies.map((movie) => (
            <div
              key={movie.id}
              className="w-[175px] sm:w-[215px] md:w-[245px] lg:w-[265px] shrink-0"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </section>

      {/* BROWSE GENRES SECTION */}
      <section
        id="genres"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >
        {/* Section Header */}
        <div className="mb-6 pb-2 border-b border-zinc-800/80">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans">
            BROWSE GENRES
          </h2>
        </div>

        {/* Bento Grid: 4 Kolom x 2 Baris yang Presisi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3.5 md:h-[400px]">
          {/* Action: 1 Kolom x 2 Baris Penuh (Kiri) */}
          <div className="sm:col-span-1 md:col-span-1 md:row-span-2 h-64 md:h-auto">
            <GenreCard
              title="ACTION"
              icon={Flame}
              image={actionImg}
              className="w-full h-full"
            />
          </div>

          {/* Horror: 1 Kolom x 1 Baris (Tengah Atas) */}
          <div className="sm:col-span-1 md:col-span-1 md:row-span-1 h-44 md:h-auto">
            <GenreCard
              title="HORROR"
              icon={Skull}
              image={horrorImg}
              className="w-full h-full"
            />
          </div>

          {/* Sci-Fi: 2 Kolom x 1 Baris (Kanan Atas) */}
          <div className="sm:col-span-2 md:col-span-2 md:row-span-1 h-44 md:h-auto">
            <GenreCard
              title="SCI-FI"
              icon={Rocket}
              image={scifiImg}
              className="w-full h-full"
            />
          </div>

          {/* Drama: 1 Kolom x 1 Baris (Tengah Bawah, Tepat di Bawah Horror) */}
          <div className="sm:col-span-1 md:col-span-1 md:row-span-1 md:col-start-2 md:row-start-2 h-44 md:h-auto">
            <GenreCard
              title="DRAMA"
              icon={Drama}
              image={dramaImg}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* NEW RELEASES SECTION */}
      <section
        id="new-releases"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
      >
        {/* Section Header with Left/Right Arrows */}
        <div className="flex items-center justify-between mb-6 pb-2 border-b border-zinc-800/80">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-sans">
              NEW RELEASES
            </h2>
          </div>

          {/* Slider Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollNewReleases("left")}
              aria-label="Scroll left"
              className="w-8 h-8 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-800 flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollNewReleases("right")}
              aria-label="Scroll right"
              className="w-8 h-8 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-800 flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider for New Releases */}
        <div
          ref={newReleasesRef}
          className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scroll-smooth py-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {newReleaseMovies.map((movie) => (
            <div
              key={movie.id}
              className="w-[175px] sm:w-[215px] md:w-[245px] lg:w-[265px] shrink-0"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
