import React, { useContext, useEffect } from 'react';
import { MainContext } from '../../store/main.context';
import { filterSeven } from '../../utils/helpers';

function MediaController({ videos, images }) {
  const { mediaContent } = useContext(MainContext);
  const { setMediaContent } = useContext(MainContext);

  const video = filterSeven(videos.results).filter(
    (video) => video.site === 'YouTube'
  );
  const backdrops = filterSeven(images.backdrops);
  const posters = filterSeven(images.posters);
  const most = [video[0], backdrops[0], posters[0]];

  // console.log(video);
  // console.log(
  //   `main.context: ${JSON.stringify(
  //     { video },
  //     null,
  //     4
  //   )}-------------------------------`
  // );
  useEffect(() => {
    setMediaContent({ video }, 'video');
  }, []);

  console.log(
    `Media controller: ${JSON.stringify(
      mediaContent,
      null,
      4
    )}-------------------------------`
  );
  const setMediaHandler = (data, title) => {
    setMediaContent(data, title);
  };

  return (
    <ul className='flex w-full media-list'>
      <li className={mediaContent.title === 'most' ? 'selected' : ''}>
        <a
          className='cursor-pointer'
          onClick={setMediaHandler(most, 'most')}
          // onClick={setMediaContent(() => {
          //   most;
          // }, 'most')}
        >
          Most Popular
        </a>
      </li>
      <li className={mediaContent.title === 'video' ? 'selected' : ''}>
        <a className='cursor-pointer' onClick={setMediaHandler(video, 'video')}>
          Videos <span>26</span>
        </a>
      </li>
      <li className={mediaContent.title === 'backdrops' ? 'selected' : ''}>
        <a
          className='cursor-pointer'
          onClick={setMediaHandler(backdrops, 'backdrops')}
        >
          Backdrops <span>26</span>
        </a>
      </li>
      <li className={mediaContent.title === 'posters' ? 'selected' : ''}>
        <a
          className='cursor-pointer'
          onClick={setMediaHandler(posters, 'posters')}
        >
          Posters <span>26</span>
        </a>
      </li>
    </ul>
  );
}

export default MediaController;
