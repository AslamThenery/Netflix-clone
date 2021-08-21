import {API_KEY} from "./constants"

export const horrorMovies = `discover/movie?api_key=${API_KEY}&with_genres=27`
export const commedyMovies = `discover/movie?api_key=${API_KEY}&with_genres=35`
export const trailer = `https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=<<api_key>>&language=en-US`
export const search = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`
export const trending =`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
export const latestTvShows = `https://api.themoviedb.org/3/movie/upcoming?api_key=f8ddf6b67b66a1e4d0ac19326b4b4793&language=en-US&page=1`
export const popularTvShows =`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
export const topratedTvShows = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`