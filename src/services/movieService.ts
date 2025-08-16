import axios from 'axios';
import type { Movie } from '../types/movie';

export interface MovieResponse {
  results: Movie[];
  total_pages: number;
}

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

 export async function fetchMovies(
  query: string,
  page = 1
): Promise<MovieResponse> {
  const response = await api.get<MovieResponse>("search/movie", {
    params: {
      query,
      include_adult: false,
      language: "en-US",
      page,
    },
  });

  return response.data;
}
