import Movie from "../types/TMovie";

const apiKey = import.meta.env.VITE_API_KEY as string;
const base_url = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async (): Promise<Movie[]> => {
  const response = await fetch(`${base_url}/movie/popular?api_key=${apiKey}`);
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data = await response.json();

  if (Array.isArray(data.results)) {
    return data.results;
  }

  return [];
};

export const fetchMovieDetails = async (id: string): Promise<Movie> => {
  const response = await fetch(`${base_url}/movie/${id}?api_key=${apiKey}`);
  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }
  return response.json();
};
