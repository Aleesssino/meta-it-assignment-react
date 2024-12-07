import { useSearch } from "../contexts/useSearch";
import MovieCard from "../components/MovieCard";

const MovieGrid: React.FC = () => {
  const { movies, searchQuery } = useSearch();

  // Filter movies based on the search query
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex justify-center items-center py-5">
      {filteredMovies.length > 4 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 place-items-center gap-4">
          {filteredMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:flex justify-center gap-4">
          {filteredMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieGrid;
