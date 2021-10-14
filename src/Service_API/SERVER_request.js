import axios from "axios";

const imgURL = "https://image.tmdb.org/t/p/w200";
const KEY = "f93417762b0d5f1e87448cbe259e5b31";

// ------------------- INITIAL SCREEN -------------------
export const REQ_MOVIES_INITIAL = {
    async getMoviesInitial() {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&sort_by=popularity.desc`);
        return response.data.results;
    }
}

// ------------------- HOME SCREEN -------------------
export const REQ_MOVIES_POPULAR = {
    async getMoviesMostPopular() {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${KEY}&language=en-US&page=1`);
        return response.data.results;
    }
}
// ------------------- ONLY MOVIE SCREEN -------------------
export const REQ_MOVIES_ONLY = {
    async getMovie(movie_id) {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${KEY}&language=en-US`)
            return response.data
    }
}

// ------------------- CREDIT  -------------------
export const REQ_MOVIES_CREDIT = {
    async getCredit(movie_id) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${KEY}&language=en-US`)
            console.log(response)
            return response.data.cast
        } catch {
            return false
        }
    }
}

// ------------------- CATEGORIES  SCREEN -------------------
export const REQ_MOVIES_CATEGORIES = {
    async getCategories() {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=en-US`);
        return response.data.genres;
    }
}
// ------------------- GET MOVIES WITH CATEGORIES   -------------------
export const REQ_MOVIES_WITH_CATEGORIES = {
    async getMovies(genre_id) {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre_id}&with_watch_monetization_types=flatrate`);
        return response.data.results
    }
}

























// export const REQ_MOVIES = {
//     async getMoviesInitial() {
//         const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&sort_by=popularity.desc`);
//         return response.data.results;
//     },
//     async getMoviesMostPopular() {
//         const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${KEY}&language=en-US&page=1`);
//         return response.data.results;
//     },
//     async getMovie(movie_id) {
//         try {
//             const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${KEY}&language=en-US`)
//             return response.data
//         } catch {
//             return false
//         }
//     }, async getCredit(movie_id) {
//         try {
//             const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${KEY}&language=en-US`)
//             return response.data
//         } catch {
//             return false
//         }
//     },
//     async getCategories() {
//         const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=en-US`);
//         return response.data.genres;
//     },
//     async getMoviesWithCategories(genre_id) {
//         const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre_id}&with_watch_monetization_types=flatrate`);
//         return response.data.results
//     }
// }



