import React from "react";
import { useParams } from "react-router-dom";
import { useSearch } from "../contexts/useSearch";

const MovieDetailsPage: React.FC = () => {
  const { searchQuery } = useSearch();

  // dummy data
  const movies = [
    {
      id: "m1",
      title: "Venom",
      year: "2003",
      posterUrl:
        "https://dokina.timg.cz/2018/04/24/927937-venom-tom-hardy-poster-711x1080.jpg?1587596281.0",
    },
    {
      id: "m2",
      title: "Inception",
      year: "2010",
      posterUrl: "https://m.media-amazon.com/images/I/51N8xrn5OtL._AC_.jpg",
    },
    {
      id: "m3",
      title: "The Dark Knight",
      year: "2008",
      posterUrl:
        "https://m.media-amazon.com/images/I/81AJdOIEIwL._AC_SY679_.jpg",
    },
    {
      id: "m4",
      title: "The Matrix",
      year: "1999",
      posterUrl:
        "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg",
    },
    {
      id: "m5",
      title: "Interstellar",
      year: "2014",
      posterUrl:
        "https://m.media-amazon.com/images/I/71nxd51G9XL._AC_SL1188_.jpg",
    },
    {
      id: "m6",
      title: "Avatar",
      year: "2009",
      posterUrl:
        "https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SY679_.jpg",
    },
    {
      id: "m7",
      title: "Titanic",
      year: "1997",
      posterUrl: "https://m.media-amazon.com/images/I/41mAlL2iD4L._AC_.jpg",
    },
    {
      id: "m8",
      title: "Jurassic Park",
      year: "1993",
      posterUrl:
        "https://m.media-amazon.com/images/I/61e9w24TkmL._AC_SY679_.jpg",
    },
    {
      id: "m9",
      title: "The Lion King",
      year: "1994",
      posterUrl:
        "https://m.media-amazon.com/images/I/71r0eKTxrxL._AC_SL1200_.jpg",
    },
    {
      id: "m10",
      title: "The Avengers",
      year: "2012",
      posterUrl:
        "https://m.media-amazon.com/images/I/71aFzlCW2zL._AC_SY679_.jpg",
    },
    {
      id: "m11",
      title: "Iron Man",
      year: "2008",
      posterUrl:
        "https://m.media-amazon.com/images/I/81LwQFvXjSL._AC_SY679_.jpg",
    },
    {
      id: "m12",
      title: "Black Panther",
      year: "2018",
      posterUrl: "https://m.media-amazon.com/images/I/51tOd8D8BCL._AC_.jpg",
    },
    {
      id: "m13",
      title: "Frozen",
      year: "2013",
      posterUrl:
        "https://m.media-amazon.com/images/I/71mqH4HHZ4L._AC_SY679_.jpg",
    },
    {
      id: "m14",
      title: "Harry Potter and the Sorcerer’s Stone",
      year: "2001",
      posterUrl: "https://m.media-amazon.com/images/I/51cHCz1hPGL._AC_.jpg",
    },
    {
      id: "m15",
      title: "Spider-Man: No Way Home",
      year: "2021",
      posterUrl:
        "https://m.media-amazon.com/images/I/71vKG2iy8PL._AC_SL1000_.jpg",
    },
  ];

  // this should be component
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const { id } = useParams<{ id: string }>();

  const movieDetails = {
    id,
  };

  return searchQuery && searchQuery.trim() !== "" ? (
    // Show search results if there's an active query
    <div className="flex justify-center items-center py-5">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 place-items-center gap-4">
        {filteredMovies.map((movie) => (
          <p key={movie.id} className="text-slate-50">
            {movie.id}
          </p>
        ))}
      </div>
    </div>
  ) : (
    <div className="p-6 flex items-center justify-center">
      <div className="flex gap-6 text-center text-slate-50">
        <h1 className="text-3xl font-bold">{movieDetails.id}</h1>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
