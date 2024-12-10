import { createContext } from "react";
import Movie from "../types/TMovie";

interface FavoritesContextProps {
  favorites: Movie[];
  toggleFavorite: (movie: Movie) => void;
}

export const FavoritesContext = createContext<
  FavoritesContextProps | undefined
>(undefined);
