import { Search } from "lucide-react";
import { useSearch } from "../hooks/useSearch";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";

const MovieSearchInput: React.FC = () => {
  const { movies, searchQuery, setLastSearchQuery, setSearchQuery } =
    useSearch();
  const navigate = useNavigate();

  // Debounce search with 500ms delay
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const cachedMovies = movies;
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (debouncedSearchQuery.trim() === "") {
      alert("Please enter a searched movie...");
      return;
    }

    const firstMovie = cachedMovies.find((first) =>
      first.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()),
    );

    if (firstMovie) {
      navigate(`/details/${firstMovie.id}`);
      setLastSearchQuery(searchQuery);
      setSearchQuery("");
    }
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="text-black items-center justify-center flex gap-1 md:gap-3"
    >
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="rounded-lg w-40 md:w-72 lg:w-96 px-3 bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-8 md:h-10"
      />
      <button type="submit" className="text-slate-50">
        <Search className="w-6 h-6 md:w-8 md:h-8" />
      </button>
    </form>
  );
};

export default MovieSearchInput;
