import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React, { useRef } from 'react';
import ScrollArrow from '../UI/ScrollArrow';

const ActorScroller = ({ castList, height = 175, width = 138, children }) => {
  const scrollerRef = useRef(null);
  const moveRight = () => {
    scrollerRef.current.scrollLeft += 200;
  };
  const moveLeft = () => {
    scrollerRef.current.scrollLeft -= 200;
  };
  return (
    <div
      ref={scrollerRef}
      className='cast p-1.5 relative whitespace-nowrap flex overflow-x-auto overflow-y-hidden mb-4'
    >
      {castList
        .filter((cast, index) => index < 10)
        .map((cast, index) => (
          <div
            key={index}
            className='max-w-sm mr-2 bg-white rounded-lg border  shadow-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700'
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
            <div className='p-2'>
              <a>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {cast.name}
                </h5>
              </a>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                {cast.character}
              </p>
            </div>
          </div>
        ))}
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#ffff] h-full w-1/12 ' />
      <ScrollArrow moveLeft={moveLeft} moveRight={moveRight} />
    </div>
  );
};

export default ActorScroller;
