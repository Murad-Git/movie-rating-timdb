import Image from 'next/image';
import React from 'react';
import { IMG_URL, YT_URL } from '../../utils/requests';
import {
  Video,
  Backdrops,
  Posters,
  Recommendation,
} from '../../../types/movieTypings';
import { useDispatch } from 'react-redux';
import { openVideo } from '../../store/slices/mediaSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { urlTitle } from '../../utils/helpers';

interface MediaType {
  media: Video | Backdrops | Posters | Recommendation;
  height: number;
  width: number;
}

function MediaWrapper({ media, height, width }: MediaType) {
  const dispatch = useDispatch();
  return (
    <div className='inline-block mr-2 group text-black'>
      <div className='image_content w-[30rem]'>
        {/* videos */}
        {'key' in media && (
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
        {'file_path' in media && (
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
        {'title' in media && (
          <Link
            className='cursor-pointer'
            href={`/movie/${urlTitle(
              media.id,
              media.title || media.original_title
            )}`}
          >
            <div>
              <Image
                src={`${IMG_URL}${media.backdrop_path}`}
                height={height}
                width={width}
                alt='media'
                className='object-cover rounded'
                layout='responsive'
              />
              <div className='invisible flex group-hover:visible meta bg-slate-50 relative -top-10 left-0 h-10 w-full z-10 box-border px-2.5 justify-between align-middle opacity-75'>
                <span className='text-md inline-flex align-middle'>
                  {media.release_date.split('-').reverse().join('/')}
                </span>
                <span className='text-md inline-flex align-middle'>
                  {media.title || media.original_title}
                </span>
                <span className='box-border'></span>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default MediaWrapper;
