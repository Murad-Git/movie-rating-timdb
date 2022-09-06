export interface TV {
  children?: React.ReactNode | [React.ReactNode];
  adult: boolean;
  backdrop_path: string;
  created_by: [
    {
      id: number;
      credit_id: string;
      name: string;
      gender: number;
      profile_path: string;
    }
  ];
  episode_run_time: [number];
  first_air_date: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: [string];
  last_air_date: string;
  last_episode_to_air: {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: undefined | number;
    runtime: number;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  };
  name: string;
  next_episode_to_air: {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: undefined | string;
    production_code: undefined | number;
    runtime: null;
    season_number: number;
    show_id: number;
    still_path: null | string;
    vote_average: number;
    vote_count: number;
  };
  networks: [
    {
      id: number;
      name: string;
      logo_path: string;
      origin_country: string;
    }
  ];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: [string];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: [
    {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  ];
  production_countries: [
    {
      iso_3166_1: string;
      name: string;
    }
  ];
  seasons: [
    {
      air_date: string;
      episode_count: number;
      id: number;
      name: string;
      overview: undefined | string;
      poster_path: string;
      season_number: number;
    }
  ];
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];

  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
  videos: {
    results: [Video];
  };

  recommendations: Recommendations;
  images: {
    backdrops: [Backdrops];
    posters: [Posters];
  };
  external_ids: {
    imdb_id?: string;
    freebase_mid: null | number;
    freebase_id: null | string;
    tvdb_id: number;
    tvrage_id: null | number;
    facebook_id?: string;
    instagram_id?: string;
    twitter_id?: string;
  };
  credits: {
    cast: [Cast];
  };
  keywords: {
    keywords?: [
      {
        id: number;
        name: string;
      }
    ];
    results?: [
      {
        id: number;
        name: string;
      }
    ];
  };
}
export interface Recommendations {
  page: number;
  results: [Recommendation];
  total_pages: number;
  total_results: number;
}
export interface Recommendation {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title?: string;
  name?: string;
  original_language: string;
  original_name?: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: [string];
  popularity: number;
  release_date: string;
  first_air_date?: string;
  vote_average: number;
  vote_count: number;
  origin_country: [string];
}
export interface Backdrops {
  aspect_ratio: number;
  height: number;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}
export interface Posters {
  aspect_ratio: number;
  height: number;
  iso_639_1: string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}
export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  character: string;
  credit_id: string;
  order: number;
}
export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
