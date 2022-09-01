import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openVideo } from '../../store/slices/mediaSlice';
import { IMG_URL } from '../../utils/requests';

function ActionsList({ voteAgerage, productions, trailers }) {
  const dispatch = useDispatch();
  const trailer = trailers.results.find((trailer, index) => trailer.official);

  return (
    <ul className='flex items-center child:mr-3 whitespace-nowrap font-semibold'>
      {voteAgerage && (
        <li>
          <div className='percentage-score'></div>
          <div className='text'>
            User <br />
            Score
          </div>
        </li>
      )}
      {productions &&
        productions
          .filter((item, index) => index < 3)
          .map((prod, index) =>
            prod.logo_path ? (
              <li className='w-14' key={index}>
                <a href=''>
                  <Image
                    layout='responsive'
                    src={`${IMG_URL}${prod.logo_path}`}
                    alt='production'
                    objectFit='cover'
                    height={500}
                    width={400}
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
            className='border-none bg-transparent will-change-auto transition-opacity ease-linear 1s hover:opacity-60 flex items-center text-gray-400 cursor-pointer'
            onClick={() =>
              dispatch(openVideo({ url: trailer.key, title: trailer.name }))
            }
          >
            <FontAwesomeIcon icon={faPlay} className='mr-1' />
            Play Trailer
          </a>
        </li>
      )}
    </ul>
  );
}

export default ActionsList;
