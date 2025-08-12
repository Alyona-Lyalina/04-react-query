import { useState } from 'react';
import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { fetchMovies } from '../services/moviesApi';
import type { Movie } from '../types/movie';
import MovieGrid from '../MovieGrid/MovieGrid';
import Loader from '../Loader/Loader';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [load, setLoad] = useState(false)
  const handleSubmit = async (value: string) => {
        setLoad(true)
        const data = await fetchMovies(value);    
        setMovies(data);
        setLoad(false)
      };

  return (
      <div className={styles.appBackground}>
          <div className={styles.content}>
            <SearchBar handleSubmit={handleSubmit} />
      </div>
      {load && <Loader />}
      {!load && <MovieGrid movies={movies} onSelect={() => {}} />}
    </div>
  );
}