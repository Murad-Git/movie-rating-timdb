import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import MediaScroller from '../../src/components/movie/MediaScroller';
import VideoContent from '../../src/components/movie/VideoContent';
import MediaController from '../../src/components/movie/MediaController';
import { API_URL, MOVIE_URL, IMG_URL } from '../../src/utils/requests';
import FactsPanel from '../../src/components/movie/FactsPanel';
import { Movie } from '../../types/movieTypings';
import ContentWrapper from '../../src/components/UI/ContentWrapper';
import HeroSection from '../../src/components/UI/HeroSection';
import Nav from '../../src/components/UI/Nav';

interface Props {
  movie: Movie;
}

const MoviePage: NextPage<Props> = ({ movie }) => {
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

  const [shown, setShown] = useState(false);
  // console.log(`from index.js${mediaContent.media}`);

  const showMoreHandler = () => {
    setShown((prevState) => !prevState);
  };

  return (
    <>
      <Head>
        <title>{movie.title}</title>
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
              <section className='cast  mb-6'>
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
// consider to change fetching to getStaticProps
export const getServerSideProps: GetServerSideProps = async (context) => {
  const getData = context.params?.movieId;
  const movieId = (context.params?.movieId as string).split('-')[0];

  // console.log(`context params:${context.params.split("-")[0]}=======`);
  // const query = '616037';
  // console.log(`context of movie${context.params.movie}`);
  const request = await fetch(
    `${MOVIE_URL}${movieId}?${API_URL}&append_to_response=videos,keywords,recommendations,external_ids,credits,images,collection`
  );

  const response = await request.json();
  // console.log(`res: ${response}`);
  return {
    props: { movie: response },
  };
};
