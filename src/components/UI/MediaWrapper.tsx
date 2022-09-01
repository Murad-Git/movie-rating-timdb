import Image from 'next/image';
import React from 'react';
import { IMG_URL, YT_URL } from '../../utils/requests';
import {
  Video,
  Backdrops,
  Posters,
  Recommendation,
  Cast,
} from '../../../types/movieTypings';
import { useDispatch } from 'react-redux';
import { openVideo } from '../../store/slices/mediaSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { urlTitle } from '../../utils/helpers';
interface MediaType {
  media?: Video | Backdrops | Posters;
  cast?: Cast;
  recommendation?: Recommendation;
  height: number;
  width: number;
}

const MediaWrapper = ({
  media,
  cast,
  recommendation,
  height,
  width,
}: MediaType) => {
  const dispatch = useDispatch();
  return (
    <div className='inline-block mr-4 group text-black'>
      <div className={`image_content ${cast ? 'w-[15rem]' : 'w-[30rem]'} `}>
        {/* cast */}
        {cast && (
          <div className='bg-mainText-color rounded-lg border  shadow-lg border-mainText-color'>
            <Link href='#'>
              <>
                <Image
                  layout='responsive'
                  objectFit='cover'
                  className='rounded-t-lg object-cover'
                  src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                  height={height}
                  width={width}
                  alt='actor'
                />
                <div className='p-3'>
                  <p className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    <a
                      className='hover:text-gray-400'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {cast.name}
                    </a>
                  </p>
                  <p className='font-normal text-gray-700 dark:text-gray-400 break-words text-lg'>
                    {cast.character}
                  </p>
                </div>
              </>
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
              src={`${YT_URL}${media.key}/hqdefault.jpg`}
              height={height}
              width={width}
              alt={media.name}
              className='object-cover rounded'
              layout='responsive'
            />
            <FontAwesomeIcon
              className='text-white opacity-50 absolute top-[40%] left-[40%] hover:opacity-80'
              size='5x'
              icon={faCirclePlay}
            />
          </a>
        )}
        {/* images */}
        {media && 'file_path' in media && (
          <a>
            <Image
              src={`${IMG_URL}${media.file_path}`}
              height={height}
              width={width}
              alt='media'
              className='object-cover rounded'
              layout='responsive'
            />
          </a>
        )}
        {/* recommendations */}
        {recommendation && (
          <Link
            className='cursor-pointer'
            href={`/movie/${urlTitle(
              recommendation.id,
              recommendation.title || recommendation.original_title
            )}`}
          >
            <div>
              <Image
                src={`${IMG_URL}${recommendation.backdrop_path}`}
                height={height}
                width={width}
                alt='media'
                className='object-cover rounded'
                layout='responsive'
              />
              <div className='invisible flex group-hover:visible meta bg-slate-50 relative -top-10 left-0 h-10 w-full z-10 box-border px-2.5 justify-between align-middle opacity-75'>
                <span className='text-md inline-flex align-middle'>
                  {recommendation.release_date.split('-').reverse().join('/')}
                </span>
                <span className='text-md inline-flex align-middle'>
                  {recommendation.title || recommendation.original_title}
                </span>
                <span className='box-border'></span>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MediaWrapper;
