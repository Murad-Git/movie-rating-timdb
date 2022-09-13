export const API_KEY = process.env.API_KEY;
export const API_URL = `api_key=${API_KEY}`;
export const YT_URL = 'https://i.ytimg.com/vi/'; //add /maxresdefault.jpg` at the end
export const IMG_URL = 'https://image.tmdb.org/t/p/w780';
// https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/7ZO9yoEU2fAHKhmJWfAc2QIPWJg.jpg
export const MOVIE_URL = 'https://api.themoviedb.org/3/movie/';
export const TV_URL = 'https://api.themoviedb.org/3/tv/';
export const BASE_URL = 'https://api.themoviedb.org/3/';
interface Props {
  (
    main?: string,
    movie?: {
      id: string;
    }
  ): any;
}
const requests: Props = (main, movie) => {
  if (main) {
    return [
      `${BASE_URL}trending/all/day?language=en-US&${API_URL}`,
      `${BASE_URL}trending/all/week?language=en-US&${API_URL}`,
      `${BASE_URL}discover/movie?${API_URL}&language=en-US&sort_by=popularity.desc`,
      `${BASE_URL}discover/tv?${API_URL}&language=en-US&sort_by=popularity.desc`,
    ];
  }

  if (movie)
    `${BASE_URL}movie/${movie.id}?${API_URL}&append_to_response=videos,keywords,recommendations,external_ids,credits,images,collection`;
};

// url: `https://api.themoviedb.org/3/discover/movie?api_key=b80f69574417e368cc1ef5c516f5787f&language=en-US&sort_by=popularity.desc&include_adult=false&page=1` full url for sorting by popularity

export default requests;
