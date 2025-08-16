import { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import ReactPaginate from "react-paginate";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../MovieModal/MovieModal";
import { fetchMovies } from "../../services/movieService";
import type { Movie } from "../../types/movie";
import css from "./App.module.css";

export const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const { data, isLoading, isError, isFetchedAfterMount } =
    useQuery({
      queryKey: ["movies", query, page],
      queryFn: () => fetchMovies(query, page),
      enabled: !!query,
      placeholderData: keepPreviousData,
    });

  if (isFetchedAfterMount && data?.results.length === 0) {
    toast.error("No movies found for your request.");
  }

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1);
  };

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const hasMovies = data && data.results.length > 0;
  const hasPagination = hasMovies && data.total_pages > 1;

  return (
    <div className={css.appBackground}>
      <div className={css.content}>
        <SearchBar onSubmit={handleSearch} />
        {hasPagination && (
          <div className={css.paginationContainer}>
            {" "}
            <ReactPaginate
              pageCount={data.total_pages}
              pageRangeDisplayed={5}
              marginPagesDisplayed={1}
              onPageChange={({ selected }) => setPage(selected + 1)}
              forcePage={page - 1}
              containerClassName={css.pagination}
              activeClassName={css.active}
              nextLabel="→"
              previousLabel="←"
            />
          </div>
        )}
      </div>

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {hasMovies && (
        <MovieGrid movies={data.results} onSelect={handleSelectMovie} />
      )}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
