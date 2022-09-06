import React from 'react';
import content from '.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  icon: IconProp;
  title: string;
}

const HeaderItem = ({ icon, title }: Props) => {
  return (
    <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white'>
      <FontAwesomeIcon
        icon={icon}
        className='h-8 mb-1 group-hover:animate-bounce'
      />
      <p className='opacity-0 group-hover:opacity-100 tracking-widest'>
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
