import { createContext } from "react";
import Movie from "../types/TMovie";

interface SearchContextProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
}

export const SearchContext = createContext<SearchContextProps | undefined>(
  undefined,
);
