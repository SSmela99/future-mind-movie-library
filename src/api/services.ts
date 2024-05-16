import { API, API_ROUTES } from "@/api";
import { FilterDataValues, MovieResponse, SearchMoviesResponse } from "@/types";

export async function fetchMovies(params: FilterDataValues) {
  const { date, title, type, page } = params;

  const queryString = [];
  if (date) queryString.push(`y=${date}`);
  if (title) queryString.push(`s=${title}`);
  if (type) queryString.push(`type=${type}`);
  if (page) queryString.push(`page=${page}`);

  const finalQueryString =
    queryString.length > 0 ? `?${queryString.join("&")}` : "";

  const { data } = await API.get<SearchMoviesResponse>(finalQueryString);
  return data;
}

export async function fetchMovie(id: string) {
  const { data } = await API.get<MovieResponse>(API_ROUTES.searchById(id));
  return data;
}
