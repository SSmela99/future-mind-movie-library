export interface MovieTileProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface FilterDataValues {
  date: Date | string | null;
  title: string;
  type: string;
  page: string;
}

export interface SearchMoviesResponse {
  Search: MovieTileProps[];
  totalResults: string;
  Response: "True" | "False";
  Error: string;
}

export interface MovieResponse {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  BoxOffice: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
  Error: string;
}

export interface Rating {
  Source: string;
  Value: string;
}
