import React from 'react';

export interface Movie {
  children?: React.ReactNode | [React.ReactNode];
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
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
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: [
    {
      english_name: string;
      iso_639_1: string;
      name: string;
    }
  ];
  status: string;
  tagline: string;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
  videos: {
    results: [Video];
  };
  recommendations: Recommendations;
  credits: {
    cast: [Cast];
  };
  external_ids: {
    imdb_id: string;
    facebook_id: string;
    instagram_id: string;
    twitter_id: string;
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
  images: {
    backdrops: [Backdrops];
    posters: [Posters];
  };
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
  cast_id: number;
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
export interface Recommendation {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
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
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Recommendations {
  page: number;
  results: [Recommendation];
  total_pages: number;
  total_results: number;
}
