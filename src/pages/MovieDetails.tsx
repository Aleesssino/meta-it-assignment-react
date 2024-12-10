import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import MovieGrid from "../components/MovieGrid";
import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetails } from "../service/api";
import Movie from "../types/TMovie";

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { searchQuery, setSearchQuery, lastSearchQuery } = useSearch();

  const navigate = useNavigate();

  const {
    data: movie,
    isLoading,
    error,
  } = useQuery<Movie>({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieDetails(id!),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading)
    return (
      <p className="flex justify-center text-slate-50 text-center pt-14 text-xl">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="text-slate-50 justify-center text-center">
        Error loading movies.
      </p>
    );

  const handleBackToSearch = () => {
    setSearchQuery(lastSearchQuery);
    navigate("/");
  };

  // Conditional rendering based on whether there's a search query
  if (searchQuery && searchQuery.trim() !== "") {
    return <MovieGrid />;
  }

  // If there's no search query, render the details of the selected movie
  return (
    <div className="m-4 flex justify-center text-slate-50">
      <div className="text-center space-y-12 ">
        <h1 className="text-3xl font-bold">{movie?.title}</h1>
        <section className="md:mx-48 flex flex-col md:flex-row">
          <div className="flex justify-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt={movie?.title}
              className="w-64 md:w-[510px] "
            />
          </div>
          <div className="text-xl md:mx-2 px-5 w-96 pt-2 pb-5">
            <p>{movie?.overview}</p>
            <div className="mt-5">
              <p>
                <strong>Release Date: </strong>
                {movie?.release_date}
              </p>
              <p>
                <strong>Rating: </strong>
                {movie?.vote_average} / 10
              </p>
              <p>
                <strong>Votes: </strong>
                {movie?.vote_count}
              </p>
            </div>

            <div className="mt-4">
              <button
                onClick={handleBackToSearch}
                className="text-black font-semibold bg-stone-200 text-xl rounded-lg px-2 cursor-pointer transition-transform hover:scale-105 z-10"
              >
                {lastSearchQuery !== ""
                  ? "Back to search Results"
                  : "Back to Homepage"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
