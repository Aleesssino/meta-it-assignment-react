import { useQuery } from "@tanstack/react-query";
import MovieCard from "../components/MovieCard";
import { useSearch } from "../contexts/useSearch";
import Movie from "../types/TMovie";
import { fetchPopularMovies } from "../service/api";

export default function Home() {
  const {
    data: movies = [],
    isLoading,
    error,
  } = useQuery<Movie[]>({
    queryKey: ["allMovies"],
    queryFn: fetchPopularMovies,
  });

  // Debug
  const ll = fetchPopularMovies();
  console.log({ movies, isLoading, error, ll });

  // const [searchQuery, setSearchQuery] = useState("");
  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   alert(searchQuery);
  // };

  const { searchQuery } = useSearch();

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies.</p>;

  return (
    <div>
      <h1 className="text-2xl text-center py-3 text-slate-50">Meta Movies</h1>
      <div className="flex justify-center items-center py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 place-items-center gap-4">
          {filteredMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
