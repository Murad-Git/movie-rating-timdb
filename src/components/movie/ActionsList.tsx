import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openVideo } from '../../store/slices/mainSlice';
import { IMG_URL } from '../../utils/requests';
import { Video } from '../../../types/movieTypings';

interface Props {
  voteAgerage?: number;
  productions: [
    {
      id?: number;
      logo_path?: null | string;
      name?: string;
      origin_country?: string;
    }
  ];
  trailers: {
    results: [Video];
  };
}
function ActionsList({ voteAgerage, productions, trailers }: Props) {
  const dispatch = useDispatch();
  const trailer = trailers.results.find(
    (trailer) => trailer.name === 'Official Trailer' && trailer.official
  );

  return (
    <ul className='flex items-center child:mr-3 whitespace-nowrap font-semibold text-lg'>
      {voteAgerage && (
        <li className='flex items-center'>
          <div className='score inline-block mr-2'>
            <FontAwesomeIcon
              color='#f5c518'
              className='h-7'
              size='lg'
              icon={faStar}
            />
          </div>
          <div className='text inline-block'>{voteAgerage}</div>
        </li>
      )}
      {productions &&
        productions
          .filter((item, index) => index < 3)
          .map((prod, index) =>
            prod.logo_path ? (
              <li className='w-16' key={index}>
                <a href=''>
                  <Image
                    layout='responsive'
                    src={`${IMG_URL}${prod.logo_path}`}
                    alt='production'
                    objectFit='cover'
                    height={300}
                    width={900}
                  />
                </a>
              </li>
            ) : (
              <li key={index}>
                <a className='underline' href=''>
                  {prod.name}
                </a>
              </li>
            )
          )}
      {trailers && (
        <li>
          <a
            className='border-none bg-transparent will-change-auto transition-opacity ease-linear 1s hover:opacity-60 flex items-center text-[#F5C518] cursor-pointer'
            onClick={() =>
              dispatch(
                openVideo({
                  url: trailer?.key || 'no url key found',
                  title: trailer?.name || 'no trailer title found',
                })
              )
            }
          >
            <FontAwesomeIcon icon={faPlay} className='mr-1 h-5' />
            Play Trailer
          </a>
        </li>
      )}
    </ul>
  );
}

export default ActionsList;
