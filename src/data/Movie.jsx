// Import gambar poster lokal dari assets
import silentVoidImg from "../assets/echo-rom.jpg";
import stargazerImg from "../assets/poster_stargazer.jpg";
import nightReckoningImg from "../assets/poster_night_reckoning.jpg";
import lastChapterImg from "../assets/poster_last_chapter.jpg";
import frozenHorizonImg from "../assets/frozen.jpg";

// Import gambar poster New Releases dari assets
import echo from "../assets/the echo.jpg";
import abysall from "../assets/aquarium.jpg";
import sy from "../assets/syn.jpg";
import sun from "../assets/ethernah suun.jpg";
import velocity from "../assets/lari.jpg";
import theAttic from "../assets/the attic.jpg";

export const trendingMovies = [
  {
    id: 1,
    title: "THE SILENT VOID",
    genre: "Drama",
    year: "2024",
    rating: 8.6,
    image: silentVoidImg,
  },
  {
    id: 2,
    title: "STARGAZER",
    genre: "Adventure",
    year: "2024",
    rating: 8.9,
    image: stargazerImg,
  },
  {
    id: 3,
    title: "NIGHT RECKONING",
    genre: "Action",
    year: "2024",
    rating: 9.1,
    image: nightReckoningImg,
  },
  {
    id: 4,
    title: "THE LAST CHAPTER",
    genre: "Mystery",
    year: "2023",
    rating: 8.3,
    image: lastChapterImg,
  },
  {
    id: 5,
    title: "FROZEN HORIZON",
    genre: "Fantasy",
    year: "2024",
    rating: 8.7,
    image: frozenHorizonImg,
  },
];

export const newReleaseMovies = [
  {
    id: 101,
    title: "ECLIPSE",
    genre: "Thriller",
    rating: 8.5,
    isNew: true,
    image: echo,
  },
  {
    id: 102,
    title: "ABYSSAL",
    genre: "Sci-Fi",
    rating: 7.9,
    image: abysall,
  },
  {
    id: 103,
    title: "SYNDICATE",
    genre: "Crime",
    rating: 8.1,
    image: sy,
  },
  {
    id: 104,
    title: "ETERNAL SUN",
    genre: "Romance",
    rating: 9.0,
    image: sun,
  },
  {
    id: 105,
    title: "VELOCITY",
    genre: "Sports",
    rating: 7.5,
    image: velocity,
  },
  {
    id: 106,
    title: "THE ATTIC",
    genre: "Horror",
    rating: 6.8,
    image: theAttic,
  },
];

