import MovieCard from "../components/MovieCard";
import MovieGrid from "../components/MovieGrid";
import { useFavorites } from "../hooks/useFavorites";
import { useSearch } from "../hooks/useSearch";

function YourFavorites() {
  // Get favorites from context
  const { favorites } = useFavorites();

  const { searchQuery } = useSearch();

  // Conditional rendering based on whether there's a search query
  if (searchQuery && searchQuery.trim() !== "") {
    return <MovieGrid />;
  }

  return (
    <div className="justify-center py-5">
      <h1 className="text-3xl text-center py-3 text-slate-50 font-semibold">
        Your Favorites
      </h1>
      <div className="flex justify-center items-center p-5 mx-3 md:mx-56 rounded-2xl border-white border-[2px]">
        {favorites.length > 0 ? (
          <div className="flex flex-wrap gap-4 justify-center">
            {favorites.map((fav) => (
              <MovieCard movie={fav} key={fav.id} />
            ))}
          </div>
        ) : (
          <div className="">
            <h2 className="text-2xl text-center py-3 text-stone-50 font-semibold">
              No favorite movies yet? Browse our collection and click the heart
              icon on any movie to add it to your favorites!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default YourFavorites;
