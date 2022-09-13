import React from 'react';
import Image from 'next/image';
import { Movie } from '../../../types/movieTypings';
import { TV } from '../../../types/tvTypings';
import { secondsToHm } from '../../utils/helpers';
import ActionsList from '../movie/ActionsList';
import { IMG_URL } from '../../utils/requests';

interface Props {
  media: Movie | TV;
}

const HeroSection = ({ media }: Props) => {
  return (
    <div className='header text-xl'>
      <div className='hero-img object-cover hidden lg:block w-full'>
        <Image
          className=''
          src={`https://www.themoviedb.org/t/p/w1280_and_h720_multi_faces/${media.backdrop_path}`}
          // src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
          alt='backdrop'
          objectFit='cover'
          layout='responsive'
          height={250}
          width={700}
          priority
        />
      </div>
      <section className='original-header px-5 xl:px-16 py-5 md:grid md:grid-cols-2 md:gap-5 xl:gap-4 border-b-2 border-gray-50 mb-6 justify-center'>
        <div className='poster_wrapper mb-4 lg:max-w-sm 2xl:max-w-md relative lg:left-1/4'>
          <Image
            className='rounded'
            layout='responsive'
            src={`${IMG_URL}/${media.poster_path}`}
            sizes='(min-width: 75em) 33vw,
              (min-width: 48em) 50vw,
              100vw'
            height={700}
            objectFit='cover'
            width={500}
            alt='poster'
            priority
          />
        </div>
        <div className='header_poster_wrapper'>
          <div className='title mb-6'>
            <h1 className='text-4xl font-semibold'>
              <a href={`${media?.homepage}`}>
                {'name' in media && media.name}
                {'title' in media && media.title}
              </a>
            </h1>
            <div className='subheader'>
              <ul className='flex child:mx-1'>
                <li>
                  {'release_date' in media
                    ? media.release_date.substring(0, 4)
                    : media.first_air_date.substring(0, 4)}{' '}
                  $ ({media.production_countries.map((c) => c.iso_3166_1)}) •
                </li>
                <li>{media.genres.map((genre) => ` ${genre.name} `)} • </li>
                <li>
                  {secondsToHm(
                    'runtime' in media
                      ? media.runtime
                      : media.episode_run_time[0]
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className='actions mb-5'>
            <ActionsList
              voteAgerage={Math.round(media.vote_average * 100) / 100}
              productions={media.production_companies}
              trailers={media.videos}
            />
          </div>
          <div className='header_info'>
            {media.tagline && (
              <h3 className='font-light my-2 text-xl'>
                <em>{media.tagline}</em>
              </h3>
            )}
            {media.overview ? (
              <>
                <h2 className='mt-4 mb-2 text-3xl font-bold'>Overview</h2>
                <div className='text-lg text-justify'>
                  <p>{media.overview}</p>
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
  );
};

export default HeroSection;
