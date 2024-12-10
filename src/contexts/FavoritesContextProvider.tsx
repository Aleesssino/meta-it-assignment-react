import React, { useState, ReactNode, useEffect } from "react";
import { FavoritesContext } from "./FavoritesContext";
import Movie from "../types/TMovie";

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<Movie[]>(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Function to add/remove faovorite movie
  const toggleFavorite = (movie: Movie) => {
    setFavorites((prev) => {
      const isFavorite = prev.some((fav) => fav.id === movie.id);
      if (isFavorite) {
        return prev.filter((fav) => fav.id !== movie.id);
      } else {
        return [...prev, movie];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
