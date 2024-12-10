import { useQuery } from "@tanstack/react-query";
import { useSearch } from "../hooks/useSearch";
import Movie from "../types/TMovie";
import { fetchPopularMovies } from "../service/api";
import MovieGrid from "../components/MovieGrid";

export default function Home() {
  const { setMovies } = useSearch();

  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery<Movie[]>({
    queryKey: ["allMovies"],
    queryFn: fetchPopularMovies,
    staleTime: 1000 * 60 * 5,
  });

  if (movies.length > 0) {
    setMovies(movies);
  }

  if (isLoading)
    return (
      <p className="flex justify-center text-slate-50 text-center pt-14 text-xl">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="text-slate-50 justify-center text-center">
        Error loading movies.
      </p>
    );

  return (
    <div>
      <h1 className="text-3xl text-center py-3 text-slate-50 font-semibold">
        Meta Movies
      </h1>
      <MovieGrid />
    </div>
  );
}
