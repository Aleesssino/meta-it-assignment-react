import { Search } from "lucide-react";
import { useSearch } from "../contexts/SearchContext";

const MovieSearch: React.FC = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <form className="text-black items-center justify-center  flex gap-1  md:gap-3">
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchQuery}
          onChange={handleChange}
          className="rounded-lg w-40 md:w-72 lg:w-96 px-3 bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-8 md:h-10"
        />
        <button type="submit" className="text-slate-50">
          <Search className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </form>
    </div>
  );
};

export default MovieSearch;
