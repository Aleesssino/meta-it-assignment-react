import { Heart } from "lucide-react";
// import { FC } from "react";

interface TMovie {
  id: string;
  title: string;
  year: string;
  posterUrl: string;
}

interface MovieCardProps {
  movie: TMovie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { title, year, posterUrl } = movie;

  function onLike() {
    alert("liked");
  }

  return (
    <div className="relative overflow-hidden rounded-sm transition-transform hover:scale-105 group">
      <div className="aspect-[2/3] w-32 md:w-56 xl:w-[17rem]">
        <img
          src={posterUrl}
          alt={`${title} poster`}
          className="h-full w-full object-cover"
          loading="lazy"
        />

        <button
          className="absolute top-2 right-2 p-2 rounded-full  text-white xl:opacity-0 md:group-hover:opacity-100 transition-opacity  focus:outline-none focus:ring focus:ring-blue-300 cursor-pointer z-10"
          onClick={onLike}
        >
          <Heart className="w-8 h-8 md:w-12 md:h-12" />
        </button>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent cursor-pointer">
          <div className="absolute bottom-0 w-full p-4">
            <h3 className="text-sm md:text-xl font-bold text-white line-clamp-2">
              {title}
            </h3>
            <p className="mt-1 text-sm text-gray-300">{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
