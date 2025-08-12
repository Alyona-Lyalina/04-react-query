import { useState } from "react";
import css from "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { fetchMovies } from "../services/moviesApi";
import type { Movie } from "../types/movie";
import MovieGrid from "../MovieGrid/MovieGrid";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import MovieModal from "../MovieModal/MovieModal";

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [load, setLoad] = useState(false);
  const [isError, setIsError] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSubmit = async (value: string) => {
    setLoad(true);
    setIsError(false);
    try {
      const data = await fetchMovies(value);
      if (!data.length) {
        return;
      }

      setMovies(data);
    } catch {
      setIsError(true);
    } finally {
      setLoad(false);
    }
  };

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className={css.appBackground}>
      <div className={css.content}>
        <SearchBar handleSubmit={handleSubmit} />
      </div>
      {load && <Loader />}
      {isError && <ErrorMessage />}
      {!load && <MovieGrid movies={movies} onSelect={handleSelectMovie} />}

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
}
