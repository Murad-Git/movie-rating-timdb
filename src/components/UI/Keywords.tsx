import React from 'react';

interface Props {
  keywords?: [{ id: number; name: string }];
}

const Keywords = ({ keywords }: Props) => {
  // console.log(
  //   `keywords: ${JSON.stringify(
  //     { keywords },
  //     null,
  //     4
  //   )}-------------------------------`
  // );
  return (
    <div>
      <h4 className='font-bold text-lg mb-2'>Keywords</h4>
      <ul className='keyword-btn flex flex-wrap justify-start'>
        {keywords?.map((word, i) => (
          <li key={i}>
            <a className='bg-mainText-color hover:bg-gray-100 text-black py-0.5 px-2 font-normal border-none hover:border-transparent rounded cursor-pointer'>
              {word.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Keywords;
