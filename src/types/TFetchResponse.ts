import Movie from "../types/TMovie";

export interface FetchPopularMoviesResponse {
  page: number; // Current page
  results: Movie[]; // Array of movies for this page
  total_pages: number; // Total number of pages available
  total_results: number; // Total number of results
}
