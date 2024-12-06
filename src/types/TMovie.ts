interface TMovie {
  id: number; // Unique ID of the movie
  title: string; // Title of the movie
  overview: string; // Overview of the movie
  poster_path: string | null; // Path to the movie's poster image (relative path from TMDb)
  backdrop_path: string | null; // Path to the backdrop image (if available)
  release_date: string; // Release date of the movie (e.g., "2024-12-01")
  vote_average: number; // Average rating of the movie
  vote_count: number; // Number of votes cast
  popularity: number; // Popularity score
  original_language: string; // Original language of the movie (e.g., "en")
  genre_ids: number[]; // List of genre IDs associated with the movie
}

export default TMovie;
