import { useContext } from "react";
import { SearchContext } from "./SearchContext";

interface SearchContextProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

// Custom hook to access the search context
export const useSearch = (): SearchContextProps => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }

  return context;
};
