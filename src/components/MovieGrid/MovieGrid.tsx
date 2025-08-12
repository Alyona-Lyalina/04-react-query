import css from './MovieGrid.module.css';
import type { Movie } from '../types/movie';


interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
  if (!movies || movies.length === 0) {
    return null;
  }

  return (
    <ul className={css.grid}>
      {movies.map((movie) => {
        const posterUrl = movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "/images/no-backdrop.jpg";

        return (
          <li key={movie.id}>
            <div
              className={css.card}
              onClick={() => onSelect(movie)}
              role="button"
              tabIndex={0}
            >
              <img
                className={css.image}
                src={posterUrl}
                alt={movie.title}
                loading="lazy"
              />
              <h2 className={css.title}>{movie.title}</h2>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

