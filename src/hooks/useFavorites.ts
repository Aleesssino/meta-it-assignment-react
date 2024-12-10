import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

// Custom hook to access the FavoritesContext safely
export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used withi a FavoritesProvider");
  }

  return context;
};
