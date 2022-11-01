import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import MediaScroller from '../../src/components/movie/MediaScroller';
import VideoContent from '../../src/components/movie/VideoContent';
import MediaController from '../../src/components/movie/MediaController';
import { API_URL, MOVIE_URL, IMG_URL } from '../../src/utils/requests';
import FactsPanel from '../../src/components/movie/FactsPanel';
import { Movie } from '../../types/movieTypings';
import ContentWrapper from '../../src/components/UI/ContentWrapper';
import HeroSection from '../../src/components/UI/HeroSection';
import Nav from '../../src/components/UI/Nav';
import requests from '../../src/utils/requests';
import { MainType } from '../../types/mainTypings';
import { useRouter } from 'next/router';

interface Props {
  movie: Movie;
}

const MoviePage: NextPage<Props> = ({ movie }) => {
  const { query } = useRouter();
  const { movieId } = query;
  const media = {
    videos: movie?.videos,
    images: movie?.images,
  };
  const facts = {
    revenue: {
      budget: movie?.budget,
      revenue: movie?.revenue,
      status: movie?.status,
      language: movie?.original_language,
    },
    links: movie?.external_ids,
    homepage: movie?.homepage,
    keywords: movie?.keywords?.keywords || movie?.keywords?.results,
  };

  return (
    <>
      <Head>
        <title>{movie.title}</title>
        <link rel='icon' href='/icon.png' />
        {/* Primary Meta Tags */}
        <meta name='title' content={movie.title} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content={movie.overview ? movie.overview : 'Movies page'}
        />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`https://movie-rating-timdb.vercel.app/movie/${movieId}`}
        />
        <meta property='og:title' content={movie.title} />
        <meta
          property='og:description'
          content={movie.overview ? movie.overview : 'Movies page'}
        />
        <meta property='og:image' content='./public/page_screenshot.png' />

        {/* Twitter  */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content={`https://movie-rating-timdb.vercel.app/movie/${movieId}`}
        />
        <meta property='twitter:title' content={movie.title} />
        <meta
          property='twitter:description'
          content={movie.overview ? movie.overview : 'Movies page'}
        />
        <meta property='twitter:image' content='./public/page_screenshot.png' />
      </Head>
      <Nav />
      <div className=' flex-col flex-auto min-h-full h-auto relative top-0 left-0 '>
        <main className='main box-border justify-center relative'>
          {/* Hero section */}
          <HeroSection media={movie} />
          {/* Section media */}
          <ContentWrapper>
            <div className='main-content col-span-3'>
              {/* cast */}
              <section className='cast mb-6'>
                <h2 className='pageHeader'>Cast</h2>
                <div className='mb-5'>
                  <MediaScroller
                    cast={movie.credits.cast}
                    // media={movie.credits.cast}
                    height={500}
                    width={350}
                  />
                </div>
              </section>
              {/* Media */}
              <section className=' mb-6'>
                <div className='menu flex items-center mb-8'>
                  <h3 className='mr-12 pageHeader m-0'>Media</h3>
                  <MediaController media={media} />
                </div>
                <MediaScroller media={media} height={370} width={494} />
                {/* height={400}
                  width={500} */}
              </section>
              {/* Collections */}
              <section className='relative mb-6'>
                <h2 className='pageHeader'>Collections</h2>
                {movie.belongs_to_collection ? (
                  <>
                    <div className='collection-hero'>
                      <Image
                        priority
                        src={`${IMG_URL}${movie.belongs_to_collection.backdrop_path}`}
                        height={1080}
                        width={1920}
                        alt='collection'
                        className='object-cover rounded'
                        layout='responsive'
                      />
                    </div>
                    <div className='collec-info absolute bottom-7 left-4 z-10 w-full flex flex-col justify-start items-start'>
                      <h1 className='text-3xl font-semibold text-white mb-2'>
                        Part of the {movie.belongs_to_collection.name}
                      </h1>
                      <button className='bg-purple-600 hover:bg-purple-900 text-white text-base font-bold py-2 px-4 rounded-full mt-5'>
                        VIEW THE COLLECTION
                      </button>
                    </div>
                  </>
                ) : (
                  <h2>No collection was found</h2>
                )}
              </section>
              {/* Recommendations */}
              <section className=' mb-6'>
                <div className='menu'>
                  <h3 className='pageHeader'>Recommendations</h3>
                </div>
                {movie.recommendations.results.length > 0 ? (
                  <MediaScroller
                    mainMedia={movie.recommendations.results}
                    // media={movie.recommendations.results}
                    height={550}
                    width={400}
                  />
                ) : (
                  <h2>No recommendations were found</h2>
                )}
              </section>
            </div>
            <div className='info-content mb-4 col-span-1 text-lg relative'>
              <section className='movie-info'>
                <FactsPanel facts={facts} />
              </section>
            </div>
          </ContentWrapper>
          <VideoContent />
        </main>
      </div>
    </>
  );
};

export default MoviePage;

export const getStaticPaths = async () => {
  try {
    const [trendDayUrl, trendWeekUrl, discoverMovieUrl] = requests('main');
    const data = await Promise.allSettled(
      [trendDayUrl, trendWeekUrl, discoverMovieUrl].map((url) => fetch(url))
    );
    const [trendDRes, trendWRes, discMRes] = data;
    const trendDay = await trendDRes.value.json();
    const trendWeek = await trendWRes.value.json();
    const discMovie = await discMRes.value.json();

    const posts = [
      trendDay.results.filter(
        (trend: MainType) => trend.media_type === 'movie'
      ),
      trendWeek.results.filter(
        (trend: MainType) => trend.media_type === 'movie'
      ),
      discMovie.results,
    ];

    const paths = [...new Set(posts.flat().map((item) => item.id))].map(
      (post: MainType) => ({
        params: {
          movieId: post.toString(),
        },
      })
    );
    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    throw new Error(error);
  }
};

// consider to change fetching to getStaticProps
export const getStaticProps: GetStaticProps = async (context) => {
  try {
    // const getData = context.params?.movieId;
    const movieId = (context?.params?.movieId as string).split('-')[0];

    // const query = '616037';
    const request = await fetch(
      `${MOVIE_URL}${movieId}?${API_URL}&append_to_response=videos,keywords,recommendations,external_ids,credits,images,collection`
    );
    if (!request) {
      return {
        notFound: true,
      };
    }
    const response = await request.json();
    return {
      props: { movie: response },
      revalidate: 86400,
    };
  } catch (error) {
    throw new Error(error);
  }
};
