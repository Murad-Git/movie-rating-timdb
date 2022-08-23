import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import React from 'react';

function ScrollArrow({ scrollerRef }) {
  const moveRight = () => {
    scrollerRef.current.scrollLeft += 200;
  };
  const moveLeft = () => {
    scrollerRef.current.scrollLeft -= 200;
  };

  return (
    <div className='arrows absolute top-36 z-30 flex justify-between w-full text-black'>
      <div
        className='arrows-left relative left-7 cursor-pointer'
        onClick={moveLeft}
      >
        <ChevronLeftIcon className='h-10 absolute left-2 animate-[leftArrow_1.5s_ease-in-out_infinite]' />
        <ChevronLeftIcon className='h-10 animate-[leftArrow_1.5s_ease-in-out_infinite_0.1s]' />
      </div>

      <div
        className='arrows-right relative right-7 cursor-pointer'
        onClick={moveRight}
      >
        <ChevronRightIcon className='h-10 absolute left-2 animate-[rightArrow_1.5s_ease-in-out_infinite_0.1s]' />
        <ChevronRightIcon className='h-10 animate-[rightArrow_1.5s_ease-in-out_infinite]' />
      </div>
    </div>
  );
}

export default ScrollArrow;
