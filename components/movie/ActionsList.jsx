import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { useContext } from 'react';
import ReactScoreIndicator from 'react-score-indicator';
import { MainContext } from '../../store/main.context';

function ActionsList({ voteAgerage, productions, trailers }) {
  const { openVideo } = useContext(MainContext);
  const displayHandler = (url, title) => {
    openVideo(url, title);
  };
  const trailer = trailers.results.find((trailer, index) => trailer.official);
  // console.log(trailers);

  return (
    <ul className='flex items-center child:mr-2 whitespace-nowrap font-semibold '>
      {voteAgerage && (
        <li>
          <div className='percentage-score'>
            <ReactScoreIndicator
              value={Math.round(voteAgerage * 10)}
              maxValue={100}
            />
          </div>
          <div className='text'>
            User <br />
            Score
          </div>
        </li>
      )}
      {productions &&
        productions
          .filter((item, index) => index < 3)
          .map((prod) =>
            prod.img ? (
              <li className='w-1/5'>
                <a href=''>
                  <Image
                    src={prod.img}
                    alt='production'
                    // layout='responsive'
                    objectFit='cover'
                    // height={500}
                    // width={500}
                  />
                </a>
              </li>
            ) : (
              <li>
                <a className='underline' href=''>
                  {prod.name}
                </a>
              </li>
            )
          )}
      {trailers && (
        <li>
          <a
            className='border-none bg-transparent will-change-auto transition-opacity ease-linear 1s hover:opacity-60 flex items-center text-gray-400 '
            onClick={displayHandler(trailer.key, trailer.name)}
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
