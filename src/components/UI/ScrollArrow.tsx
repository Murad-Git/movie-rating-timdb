import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import React from 'react';

interface Props {
  scrollerRef?: number | any;
}

const ScrollArrow: React.FC<Props> = ({ scrollerRef }) => {
  // console.log(
  //   `scrollref from scrollArrow: ${
  //     scrollerRef.current ? scrollerRef.current.offsetWidth : 0
  //   } ====`
  // );
  return (
    <>
      <div
        className='hidden md:inline-block arrows-left left-7 cursor-pointer border-solid border-2 border-[rgba(255,255,255,0.7)] w-[4rem] py-6 pr-2 bg-[rgba(18,18,18,.5)] rounded group absolute top-[30%]'
        onClick={() => (scrollerRef.current!.scrollLeft -= 200)}
      >
        <ChevronLeftIcon className='h-10 absolute left-2 animate-[leftArrow_1.5s_ease-in-out_infinite] group-hover:text-[#ff893b] text-white' />
        <ChevronLeftIcon className='h-10 animate-[leftArrow_1.5s_ease-in-out_infinite_0.1s] group-hover:text-[#ff893b] text-white' />
      </div>
      <div
        className='hidden md:inline-block arrows-right left-[92%] cursor-pointer border-solid border-2 border-[rgba(255,255,255,0.7)] w-[4rem] py-6 px-3 bg-[rgba(18,18,18,.5)] rounded group absolute top-[30%]'
        onClick={() => (scrollerRef.current!.scrollLeft += 200)}
      >
        <ChevronRightIcon className='h-10 absolute left-5 animate-[rightArrow_1.5s_ease-in-out_infinite_0.1s] group-hover:text-[#ff893b] text-white' />
        <ChevronRightIcon className='h-10 animate-[rightArrow_1.5s_ease-in-out_infinite] group-hover:text-[#ff893b] text-white' />
      </div>
    </>
  );
};

export default ScrollArrow;
