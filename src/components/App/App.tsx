import { useState } from "react";
import styles from './App.module.css';
import SearchBar from '../SearchBar/SearchBar'
import { fetchMovies } from "../services/moviesApi";
import type { Movie } from "../types/movie";
import MovieGrid from "../MovieGrid/MovieGrid";

export default function App() {
      const [movies, setMovies] = useState<Movie[]>([]);
      const handleSubmit = async (value: string) => {
        const data = await fetchMovies(value);    
          
        setMovies(data);
      };

  return (
      <div className={styles.appBackground}>
          <div className={styles.content}>
            <SearchBar handleSubmit={handleSubmit} />
      </div>
      
      <MovieGrid movies={movies} onSelect={() => {}} />
    </div>
  );
}
