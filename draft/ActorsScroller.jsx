import Image from 'next/image';
import React from 'react';

const ScrollWrap = ({ mainImg, num, height = 300, width = 200, children }) => {
  return (
    <div className='cast relative whitespace-nowrap flex overflow-x-auto overflow-y-hidden mb-4 scrollbar-hide'>
      {[...Array(num).keys()].map((num) => (
        <div
          key={num}
          className=' w-48 mr-2 thumbnail max-w-sm rounded bg-white shadow-lg'
        >
          <div>
            <Image
              src={mainImg}
              height={height}
              width={width}
              alt='actor'
              className='object-cover'
              layout='responsive'
            />
          </div>
          {children}
        </div>
      ))}
      )
    </div>
  );
};

export default ScrollWrap;
