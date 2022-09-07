import React from 'react';
import Image from 'next/image';
import { IMG_URL } from '../../utils/requests';
interface Props {
  tv: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: undefined | string;
    poster_path: string;
    season_number: number;
  };
  title: string;
}
const SeasonSection = ({ tv, title }: Props) => {
  return (
    <>
      <a className='poster block w-[15rem] text-black'>
        <Image
          layout='responsive'
          objectFit='cover'
          className='overflow-hidden'
          src={
            tv.poster_path ? `${IMG_URL}/${tv.poster_path}` : '/no-media.png'
          }
          height={600}
          width={400}
          alt='season'
        />
      </a>
      <div className='content w-full p-[20px] flex-col flex box-border flex-wrap items-start justify-center'>
        <div className='mb-10'>
          <h2 className='boldText'>{tv.name}</h2>
          <h4 className='bolText'>
            {tv.air_date.split('-')[0]} | {tv.episode_count} Episodes
          </h4>
        </div>
        <div className='season_overview text-lg'>
          <p>
            Season 1 of {title} premiered on{' '}
            {tv.air_date.split('-').reverse().join('/')}.
          </p>
        </div>
      </div>
    </>
  );
};

export default SeasonSection;
