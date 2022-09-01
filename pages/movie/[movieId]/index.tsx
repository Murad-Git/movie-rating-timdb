import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { GetServerSideProps, NextPage } from 'next';
import Header from '../../../src/components/UI/Header';
import MediaScroller from '../../../src/components/movie/MediaScroller';
// import { ColorExtractor } from 'react-color-extractor';
import VideoContent from '../../../src/components/movie/VideoContent';
import { secondsToHm } from '../../../src/utils/helpers';
import ActionsList from '../../../src/components/movie/ActionsList';
import MediaController from '../../../src/components/movie/MediaController';
import { API_URL, BASE_URL, IMG_URL } from '../../../src/utils/requests';
import FactsPanel from '../../../src/components/movie/FactsPanel';
import { Movie } from '../../../types/movieTypings';

interface Props {
  movie: Movie;
}

const Movie: NextPage<Props> = ({ movie }) => {
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
    keywords: movie?.keywords.keywords,
  };

  const [shown, setShown] = useState(false);
  // console.log(`from index.js${mediaContent.media}`);

  const showMoreHandler = () => {
    setShown((prevState) => !prevState);
  };

  return (
    <>
      <div className=' flex-col flex-auto min-h-full h-auto relative top-0 left-0 '>
        <Header />
        <main className='box-border justify-center relative'>
          {/* Hero section */}
          <div className='header '>
            <div className='hero-img object-cover hidden lg:block w-full'>
              <Image
                className=''
                src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
                alt='backdrop'
                objectFit='cover'
                layout='responsive'
                height={250}
                // height={250}
                width={700}
              />
            </div>
            <section className='original-header px-5 xl:px-16 py-5 border-b-2 md:grid md:grid-cols-2 md:gap-5 xl:gap-4 border-gray-50 mb-4 justify-center'>
              <div className='poster_wrapper mb-4 lg:max-w-sm 2xl:max-w-md relative lg:left-1/4'>
                <Image
                  className='rounded'
                  layout='responsive'
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  sizes='(min-width: 75em) 33vw,
              (min-width: 48em) 50vw,
              100vw'
                  height={700}
                  objectFit='cover'
                  width={500}
                  alt='poster'
                />
              </div>
              <div className='header_poster_wrapper'>
                <div className='title mb-6'>
                  <h1 className='text-4xl font-semibold'>
                    <a href={`${movie?.homepage}`}>{movie.original_title}</a>
                  </h1>
                  <div className='subheader'>
                    <ul className='flex'>
                      <li>
                        {movie.release_date.substring(0, 4)} $ (
                        {movie.production_countries.map((c) => c.iso_3166_1)}) •
                      </li>
                      <li>{movie.genres.map((genre) => genre.name)} •</li>
                      <li>{secondsToHm(movie.runtime)}</li>
                    </ul>
                  </div>
                </div>
                <div className='actions mb-5'>
                  <ActionsList
                    voteAgerage={movie.vote_average}
                    productions={movie.production_companies}
                    trailers={movie.videos}
                  />
                </div>
                <div className='header_info'>
                  {movie.tagline && (
                    <h3 className='font-light my-2'>
                      <em>{movie.tagline}</em>
                    </h3>
                  )}
                  {movie.overview ? (
                    <>
                      <h2 className='mt-4 mb-2 text-2xl font-bold'>Overview</h2>
                      <div className='text-lg text-justify'>
                        <p>{movie.overview}</p>
                      </div>
                    </>
                  ) : (
                    <div className='text-lg text-justify'>
                      <p>Could not find any overview</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
          {/* Section media */}
          <div className='media px-5 xl:px-16'>
            <div className='content_wrapper lg:grid lg:grid-cols-4 lg:gap-7 mb-10'>
              <div className='main-content col-span-3'>
                {/* cast */}
                <section className='cast'>
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
                <section>
                  <div className='menu flex items-center mb-5 '>
                    <h3 className='mr-12 boldText'>Media</h3>
                    <MediaController media={media} />
                  </div>
                  <MediaScroller media={media} height={370} width={494} />
                  {/* height={400}
                  width={500} */}
                </section>
                {/* Collections */}
                <section className='relative mb-5'>
                  {movie.belongs_to_collection ? (
                    <>
                      <div className='collection-hero'>
                        <Image
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
                <section>
                  <div className='menu mb-3'>
                    <h3 className='boldText'>Recommendations</h3>
                  </div>
                  {movie.recommendations.results.length > 0 ? (
                    <MediaScroller
                      recommendations={movie.recommendations.results}
                      // media={movie.recommendations.results}
                      height={370}
                      width={494}
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
            </div>
          </div>
          <VideoContent />
        </main>
      </div>
    </>
  );
};

export default Movie;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const getData = context.params?.movieId;
  const movieId = (context.params?.movieId as string).split('-')[0];

  // console.log(`context params:${context.params.split("-")[0]}=======`);
  const query = '616037';
  // console.log(`context of movie${context.params.movie}`);
  const request = await fetch(
    `${BASE_URL}${movieId}?${API_URL}&append_to_response=videos,keywords,recommendations,external_ids,credits,images,collection`
  );
  const response = await request.json();
  // console.log(`res: ${response}`);
  return {
    props: { movie: response },
  };
};
