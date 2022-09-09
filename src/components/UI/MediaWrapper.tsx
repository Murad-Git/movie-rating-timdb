import Image from 'next/image';
import React from 'react';
import { IMG_URL, YT_URL } from '../../utils/requests';
import {
  Video,
  Backdrops,
  Posters,
  MovieRecommendation,
  MovieCast,
} from '../../../types/movieTypings';
import { MainType } from '../../../types/mainTypings';
import { TvRecommendation, TvCast } from '../../../types/tvTypings';
import { useDispatch } from 'react-redux';
import { openVideo } from '../../store/slices/mainSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { urlTitle } from '../../utils/helpers';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface MediaType {
  media?: Video | Backdrops | Posters;
  cast?: MovieCast | TvCast;
  mainMedia?: MainType | MovieRecommendation | TvRecommendation;
  height: number;
  width: number;
}

const MediaWrapper = ({ media, cast, mainMedia, height, width }: MediaType) => {
  const { discoverType } = useSelector((state: RootState) => state.media);
  const dispatch = useDispatch();

  const mainPageLink =
    mainMedia && mainMedia.media_type && mainMedia.media_type.length > 0
      ? `/${mainMedia.media_type}/${urlTitle(
          mainMedia.id,
          mainMedia.title || mainMedia.name
        )}`
      : mainMedia &&
        `/${discoverType}/${urlTitle(
          mainMedia.id,
          mainMedia.title || mainMedia.name
        )}`;
  // const mainPageLink =
  //   mainMedia && mainMedia.media_type === 'movie'
  //     ? `/movie/${urlTitle(
  //         mainMedia.id,
  //         mainMedia.title || mainMedia.title
  //       )}`
  //     : mainMedia &&
  //       `/tv/${urlTitle(
  //         mainMedia.id,
  //         mainMedia.original_name || mainMedia.name
  //       )}`;

  return (
    <div className={`inline-block mr-1 lg:mr-4 mb-2 group text-black`}>
      <div
        className={`image_content ${
          cast
            ? 'w-[10rem] lg:w-[15rem]'
            : mainMedia
            ? 'w-[10rem] md:w-[15rem]'
            : 'w-[30rem]'
        } `}
      >
        {/* cast */}
        {cast && (
          <div className='bg-mainText-color rounded-lg border  shadow-lg border-mainText-color'>
            <Link href=''>
              <div>
                <Image
                  layout='responsive'
                  objectFit='cover'
                  className='rounded-t-lg object-cover'
                  src={
                    cast.profile_path
                      ? `${IMG_URL}/${cast.profile_path}`
                      : '/no-person.png'
                  }
                  height={height}
                  width={width}
                  alt='actor'
                />
                <div className='p-3'>
                  <p className='text-lg lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    <a
                      className='hover:text-gray-400'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {cast.name}
                    </a>
                  </p>
                  <p className='font-normal text-gray-700 dark:text-gray-400 break-words text-md lg:text-lg'>
                    {cast.character}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        )}
        {/* videos */}
        {media && 'key' in media && (
          <a
            className={'cursor-pointer relative'}
            onClick={() =>
              dispatch(openVideo({ url: media.key, title: media.name }))
            }
            title={media.name}
          >
            <Image
              src={
                media.key
                  ? `${YT_URL}${media.key}/hqdefault.jpg`
                  : '/no-media.png'
              }
              height={height}
              width={width}
              alt={media.name}
              className='object-cover rounded'
              layout='responsive'
            />
            <FontAwesomeIcon
              className='text-white opacity-50 absolute top-[40%] left-[40%] hover:opacity-80 h-20'
              icon={faCirclePlay}
            />
          </a>
        )}
        {/* images */}
        {media && 'file_path' in media && (
          <a>
            <Image
              src={
                media.file_path
                  ? `${IMG_URL}${media.file_path}`
                  : '/no-media.png'
              }
              height={height}
              width={width}
              alt='media'
              className='object-cover rounded'
              layout='responsive'
            />
          </a>
        )}
        {/* media list */}
        {mainMedia && (
          <Link href={mainPageLink as string} target='_blank'>
            <div className='bg-mainText-color rounded-lg  shadow-lg cursor-pointer'>
              <Image
                layout='responsive'
                objectFit='cover'
                className='rounded-t-lg object-cover'
                src={
                  mainMedia.poster_path
                    ? `${IMG_URL}${mainMedia.poster_path}`
                    : '/no-media.png'
                }
                height={height}
                width={width}
                alt='actor'
              />
              <div className='p-3'>
                <div className='whitespace-pre-wrap break-words text-lg lg:text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-1 md:mb-3 min-h-[6rem]'>
                  <a
                    className='hover:text-gray-400 cursor-pointer'
                    rel='noopener noreferrer'
                  >
                    {mainMedia.original_name || mainMedia.title}
                  </a>
                </div>
                <p className='text-gray-700 dark:text-gray-400 break-words text-md md:text-lg mb-1 md:mb-3 font-medium'>
                  {(mainMedia.release_date || mainMedia.first_air_date)
                    ?.split('-')
                    .reverse()
                    .join('/')}
                </p>
                <div className='flex items-center'>
                  <div className='score inline-block mr-2'>
                    <FontAwesomeIcon
                      className='h-5 md:h-7 text-accent-color'
                      icon={faStar}
                    />
                  </div>
                  <div className='inline-block text-md lg:text-lg font-semibold'>
                    {Math.round(mainMedia.vote_average * 100) / 100}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MediaWrapper;
