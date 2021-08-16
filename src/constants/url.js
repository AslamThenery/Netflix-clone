import {API_KEY} from "./constants"

export const horrorMovies = `discover/movie?api_key=${API_KEY}&with_genres=27`
export const commedyMovies = `discover/movie?api_key=${API_KEY}&with_genres=35`
export const trailer = `https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US`
