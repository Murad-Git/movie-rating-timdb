import React from 'react';
// import Thumbnail from '../UI/Thumbnail';
import Thumbnail from '../UI/Thumbnail';
import FlipMove from 'react-flip-move';

const Results = ({ results }) => {
  const moviesList = Object.entries(results).map(([key, values]) => values);

  return (
    <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {moviesList[1].map((movie) => (
        <Thumbnail key={movie.id} result={movie} />
      ))}
    </FlipMove>
  );
};

export default Results;
