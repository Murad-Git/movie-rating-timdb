import React from 'react';

const Keywords = (keywords) => {
  return (
    <div>
      <h4 className='font-bold text-lg mb-2'>Keywords</h4>
      <ul className='keyword-btn flex flex-wrap justify-start'>
        {keywords.map((word, i) => (
          <li key={i}>
            <a className='bg-gray-200 hover:bg-gray-100 text-black py-0.5 px-2 font-normal border-none hover:border-transparent rounded'>
              {word}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Keywords;
