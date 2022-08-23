import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';

import Header from '../../../components/UI/Header';
import MediaScroller from '../../../components/movie/MediaScroller';
import ActorScroller from '../../../components/movie/ActorScroller';
// import { ColorExtractor } from 'react-color-extractor';
import VideoContent from '../../../components/movie/VideoContent';
import { secondsToHm } from '../../../utils/helpers';
import ActionsList from '../../../components/movie/ActionsList';
import MediaController from '../../../components/movie/MediaController';
import { API_URL, BASE_URL, IMG_URL } from '../../../utils/requests';
import { MainContext } from '../../../store/main.context';
import FactsPanel from '../../../components/movie/FactsPanel';

const Movie = ({ movie }) => {
  const { setMediaContent } = useContext(MainContext);
  const { mediaContent } = useContext(MainContext);
  const { title } = mediaContent;
  // console.log(`title of mediacontent ${title}`);
  const recs = movie.recommendations.results;
  const revenue = {
    budget: movie.budget,
    language: movie.original_language,
    revenue: movie.revenue,
    status: movie.status,
  };
  useEffect(() => {
    setMediaContent(recs, 'recs');
  }, []);

  const [shown, setShown] = useState(false);
  console.log(`from index.js${mediaContent.media.media}`);

  const showMoreHandler = () => {
    setShown((prevState) => !prevState);
  };

  // const runtime = secondsToHm(movie.runtime);
  // const formatBudget = formatNum(200000)

  return (
    <>
      <div className=' flex-col flex-auto min-h-full h-auto relative top-0 left-0 '>
        <Header />
        <main className='box-border justify-center relative'>
          {/* Hero section */}
          <div className='header '>
            <div className='hero-img object-cover hidden lg:block max-w-fit bg-right-top'>
              <Image
                className='bg-right-top'
                src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
                alt='backdrop'
                layout='responsive'
                height={1080}
                width={1920}
              />
            </div>
            <section className='original-header px-5 xl:px-16 py-5 border-b-2 md:grid md:grid-cols-2 md:gap-5 border-gray-50 mb-4 justify-center'>
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
                  // height={1080}
                  // width={1920}
                  width={500}
                  alt='poster'
                />
              </div>
              <div className='header_poster_wrapper'>
                <div className='title mb-6'>
                  <h1 className='text-4xl font-semibold'>
                    <a href={`${movie.homepage}`}>{movie.original_title}</a>
                  </h1>
                  <div className='subheader'>
                    <ul className='flex'>
                      <li>
                        {movie.release_date.substring(0, 4)} $ (
                        {movie.production_countries.map((c) => c.iso_3166_1)}) •
                      </li>
                      <li>
                        {movie.genres.map((genre) => {
                          genre.name;
                        })}{' '}
                        •
                      </li>
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
            <div className='content_wrapper lg:grid lg:grid-cols-4 lg:gap-7'>
              <div className='main-content col-span-3'>
                {/* cast */}
                <section className='cast'>
                  <ActorScroller castList={movie.credits.cast} />
                </section>
                {/* Media */}
                <section>
                  <div className='menu flex items-center mb-5 '>
                    <h3 className='mr-12 font-semibold text-2xl'>Media</h3>
                    <MediaController
                      videos={movie.videos}
                      images={movie.images}
                    />
                  </div>
                  <MediaScroller mediaType={title} height={400} width={500} />
                </section>
                {/* Collections */}
                <section className='relative'>
                  <div className='collection-hero'>
                    <Image
                      src={`${IMG_URL}${movie.belongs_to_collection.backdrop_path}`}
                      height={1080}
                      width={1920}
                      alt='actor'
                      className='object-cover rounded'
                      layout='responsive'
                    />
                  </div>
                  <div className='collec-info absolute bottom-7 left-4 z-10 w-full flex flex-col justify-start items-start'>
                    <h1 className='text-3xl font-semibold text-white mb-2'>
                      Part of the {movie.belongs_to_collection.name}
                    </h1>
                    {/* <h3 className='hidden sm:block w-4/5 text-white text-lg'>
                      Includes Thor, Thor: The Dark World, Thor: Ragnarok, and
                      Thor: Love and Thunder
                    </h3> */}
                    <button className='bg-purple-600 hover:bg-purple-900 text-white text-base font-bold py-2 px-4 rounded-full mt-5'>
                      VIEW THE COLLECTION
                    </button>
                  </div>
                </section>
                {/* Recommendations */}
                <section>
                  <div className='menu '>
                    <h3>Recommendations</h3>
                  </div>
                  <MediaScroller mediaType='recs' height={370} width={494} />
                </section>
              </div>
              <div className='info-content mb-4 col-span-1 text-lg relative lg:left-1/4'>
                <section className='movie-info'>
                  <FactsPanel
                    links={movie.external_ids}
                    revenue={revenue}
                    keywords={movie.keywords.keywords}
                  />
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

export const getServerSideProps = async (context) => {
  const query = '616037';
  // console.log(`context of movie${context.params.movie}`);
  const request = await fetch(
    `${BASE_URL}${query}?${API_URL}&append_to_response=videos,keywords,recommendations,external_ids,credits,images,collection`
  );
  const response = await request.json();
  // console.log(`res: ${response}`);
  return {
    props: { movie: response },
  };
};
