import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React, { RefObject, useEffect, useRef } from 'react';
import { Cast } from '../../../types/movieTypings';
import ScrollArrow from '../UI/ScrollArrow';

interface MediaType {
  castList: Cast[];
  height: number;
  width: number;
}

const ActorScroller = ({ castList, height, width }: MediaType) => {
  const scrollerRef: RefObject<HTMLUListElement> =
    useRef<HTMLUListElement>(null);
  console.log(scrollerRef.current?.scrollWidth);
  return (
    <div className='relative'>
      <ul
        ref={scrollerRef}
        className='cast flex mr-2 p-1.5 whitespace-nowrap overflow-y-hidden scroll-smooth  '
        // className='cast p-1.5 relative whitespace-nowrap flex overflow-x-auto overflow-y-hidden mb-4'
      >
        {castList
          .filter((cast: Cast, index) => index < 10)
          .map((cast: Cast, index) => (
            <li
              key={index}
              className='w-full min-w-[210px] bg-mainText-color rounded-lg border  shadow-lg border-mainText-color  dark:bg-gray-800 dark:border-gray-700 mr-2 cursor-pointer'
            >
              <a>
                <Image
                  layout='responsive'
                  objectFit='cover'
                  className='rounded-t-lg object-cover'
                  src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                  height={height}
                  width={width}
                  alt='actor'
                />
              </a>
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
                {/* <a>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {cast.name}
                  </h5>
                </a>
                <p className='font-normal text-gray-700 dark:text-gray-400'>
                  {cast.character}
                </p> */}
              </div>
            </li>
          ))}
        {/* <div className='absolute top-0 right-0 bg-gradient-to-l from-[#ffff] h-full w-12 ' /> */}
        <ScrollArrow scrollerRef={scrollerRef} />
      </ul>
    </div>
  );
};

export default ActorScroller;