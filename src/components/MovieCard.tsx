import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Movie from "../types/TMovie";
import { useSearch } from "../contexts/useSearch";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { id, title, release_date, poster_path } = movie;
  const { setSearchQuery } = useSearch();

  function onLike() {
    alert("liked");
  }

  const handleDetailNavigation = () => {
    setSearchQuery(""); // Clear search query when navigating to details
  };

  return (
    <div className="relative overflow-hidden rounded-sm transition-transform hover:scale-105 group">
      <Link
        to={`/details/${id}`}
        onClick={handleDetailNavigation}
        className="z-10"
      >
        <div className="aspect-[2/3] w-32 md:w-56 xl:w-[17rem]">
          <img
            src={
              poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : ""
            }
            alt={`${title} poster`}
            className="h-full w-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent cursor-pointer">
            <div className="absolute bottom-0 w-full p-4">
              <h3 className="text-sm md:text-xl font-bold text-white line-clamp-2">
                {title}
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                {release_date.split("-")[0]}
              </p>
            </div>
          </div>
        </div>
      </Link>
      <button
        className="absolute top-2 right-2 p-2 rounded-full  text-white xl:opacity-0 md:group-hover:opacity-100 transition-opacity  focus:outline-none focus:ring focus:ring-blue-300 cursor-pointer z-10"
        onClick={onLike}
      >
        <Heart className="w-8 h-8 md:w-12 md:h-12" />
      </button>
    </div>
  );
};

export default MovieCard;
