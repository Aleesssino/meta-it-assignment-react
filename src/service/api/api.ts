import Movie from "../../types/TMovie";

// import config from "./envconfig";
//
// const { apiKey } = config;

// const apiKey = "f5b5838b48780091629896e69892c76e";
const apiKey = import.meta.env.VITE_API_KEY as string;
const base_url = "https://api.themoviedb.org/3";

export const fetchAllMovies = async (): Promise<Movie[]> => {
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
