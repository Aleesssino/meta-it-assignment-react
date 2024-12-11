import { FetchPopularMoviesResponse } from "../types/TFetchResponse";
import Movie from "../types/TMovie";

const apiKey = import.meta.env.VITE_API_KEY as string;
const base_url = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}): Promise<FetchPopularMoviesResponse> => {
  const response = await fetch(
    `${base_url}/movie/popular?api_key=${apiKey}&page=${pageParam}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch movies");
  }

  const data: FetchPopularMoviesResponse = await response.json();
  return data;
};

export const fetchMovieDetails = async (id: string): Promise<Movie> => {
  const response = await fetch(`${base_url}/movie/${id}?api_key=${apiKey}`);
  if (!response.ok) {
    throw new Error("Failed to fetch movie details");
  }
  return response.json();
};
