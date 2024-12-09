import React, { useState, ReactNode } from "react";
import Movie from "../types/TMovie";
import { SearchContext } from "./SearchContext";

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]); // Store movies here

  return (
    <SearchContext.Provider
      value={{ searchQuery, setSearchQuery, movies, setMovies }}
    >
      {children}
    </SearchContext.Provider>
  );
};
