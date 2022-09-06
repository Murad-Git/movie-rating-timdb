import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

export interface MainTypes {
  page: number;
  results: [MainType];
  total_pages: number;
  total_results: number;
}
export interface MainType {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title?: string;
  original_name?: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type?: string;
  genre_ids: [number];
  popularity: number;
  release_date?: string;
  first_air_date?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export type ServerProps<
  P extends { [key: string]: any } = { [key: string]: any }
> = (
  context: GetServerSidePropsContext
) => Promise<GetServerSidePropsResult<P>>;
