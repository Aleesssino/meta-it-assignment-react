import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearch } from "../hooks/useSearch";
import { fetchPopularMovies } from "../service/api";
import MovieGrid from "../components/MovieGrid";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Loading from "../components/Loading";
import Error from "../components/Error";
import ScrollMessage from "../components/ScrollMessage";

export default function Home() {
  const { setMovies, searchQuery } = useSearch();

  const { ref, inView } = useInView();

  const {
    data,
    error,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["popularMovies"],
    queryFn: fetchPopularMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  useEffect(() => {
    if (data?.pages) {
      // Flatten the movie pages into a single array
      const movies = data.pages.flatMap((page) => page.results) ?? [];

      const uniqueMovies = [
        ...new Map(movies.map((movie) => [movie.id, movie])).values(),
      ];

      setMovies(uniqueMovies);
    }
  }, [data, setMovies]);

  if (status === "pending") return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      <h1 className="text-3xl text-center py-3 text-slate-50 font-semibold">
        Meta Movies
      </h1>
      <MovieGrid />
      <div ref={ref} className="text-slate-50 justify-center text-center">
        <ScrollMessage
          searchQuery={searchQuery}
          isFetchingNextPage={isFetchingNextPage}
          hasNextPage={hasNextPage}
        />
      </div>
    </div>
  );
}
