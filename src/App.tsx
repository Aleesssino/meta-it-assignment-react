import MovieCard from "./components/MovieCard";

const movie = {
  id: "ajfla",
  title: "Venom",
  year: "2003",
  posterUrl:
    "https://dokina.timg.cz/2018/04/24/927937-venom-tom-hardy-poster-711x1080.jpg?1587596281.0",
};

function App() {
  return (
    <div className="relative min-h-screen bg-radial-custom overflow-hidden">
      <h1 className="text-2xl text-center py-3  text-slate-50">Meta movies</h1>
      <div className="flex justify-center items-center py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 place-items-center gap-4">
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />

          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
          <MovieCard movie={movie} />
        </div>
      </div>
    </div>
  );
}

export default App;
