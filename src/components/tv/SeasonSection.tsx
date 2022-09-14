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
  }[];
  title: string;
}
const SeasonSection = ({ tv, title }: Props) => {
  const lastSeason = Object.entries(tv)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .at(-1)![1];

  return (
    <>
      <a className='poster block w-[15rem] text-black'>
        <Image
          layout='responsive'
          objectFit='cover'
          className='overflow-hidden'
          src={
            lastSeason.poster_path
              ? `${IMG_URL}/${lastSeason.poster_path}`
              : '/no-media.png'
          }
          height={800}
          width={400}
          alt='season'
        />
      </a>
      <div className='content w-full p-[20px] flex-col flex box-border flex-wrap items-start justify-start'>
        <div className='mb-10'>
          <h2 className='text-lg lg:text-3xl mb-2'>{lastSeason.name}</h2>
          <h4 className='text-base lg:text-lg'>
            {lastSeason.air_date ? lastSeason.air_date.split('-')[0] : ''} |{' '}
            {lastSeason.episode_count} Episodes
          </h4>
        </div>
        <div className='season_overview text-base md:text-xl'>
          <p>
            Season 1 of {title} premiered on{' '}
            {lastSeason.air_date
              ? lastSeason.air_date.split('-').reverse().join('/')
              : ''}
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default SeasonSection;
