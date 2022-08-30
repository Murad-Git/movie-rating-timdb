import React from 'react';
// import Thumbnail from '../UI/Thumbnail';
import Thumbnail from '../UI/Thumbnail';
import FlipMove from 'react-flip-move';
import { TrendingResult } from '../../../types/mainTypings';
interface Props {
  results: [TrendingResult];
}

const Results = ({ results }: Props) => {
  const moviesList = Object.entries(results).map(([key, values]) => values);

  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {results.map((movie) => (
        <Thumbnail key={movie.id} result={movie} />
      ))}
    </div>
  );
};

export default Results;
