import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useSearch } from "../contexts/useSearch";
import { useNavigate } from "react-router-dom";
import Movie from "../types/TMovie";
import { useQueryClient } from "@tanstack/react-query";

// Debounce hook implementation
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

const MovieSearch: React.FC = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // Debounce search with 300ms delay
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!debouncedSearchQuery.trim()) {
      alert("Please enter a searched movie...");
      return;
    }

    const cachedMovies: Movie[] | undefined = queryClient.getQueryData([
      "allMovies",
    ]);

    if (!cachedMovies) return;

    const firstMovie = cachedMovies.find((movie) =>
      movie.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()),
    );

    if (firstMovie) {
      navigate(`/details/${firstMovie.id}`);
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

export default MovieSearch;
