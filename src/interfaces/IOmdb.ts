export interface IOmdbRating {
  Source: string
  Value: string
}

export interface IOmdbResponse {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Array<IOmdbRating>
  imdbRating: string
  imdbVotes: string
}