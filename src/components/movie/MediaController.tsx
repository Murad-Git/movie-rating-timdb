import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Backdrops, Posters, Video } from '../../../types/movieTypings';
import { changeMedia, mediaValue } from '../../store/slices/mainSlice';

interface MediaSection {
  media: {
    videos: {
      results: Video[];
    };
    images: {
      backdrops: Backdrops[];
      posters: Posters[];
    };
  };
}
const MediaController = ({ media }: MediaSection) => {
  const currentMedia = useSelector(mediaValue);
  const dispatch = useDispatch();

  return (
    <ul className='flex w-full media-list flex-col lg:flex-row child:mb-1 lg:mb-0 '>
      <li className={currentMedia === 'most' ? 'selected' : ''}>
        <a
          className='cursor-pointer'
          onClick={() => dispatch(changeMedia('most'))}
        >
          Most Popular <span>3</span>
        </a>
      </li>
      <li className={currentMedia === 'video' ? 'selected' : ''}>
        <a
          className='cursor-pointer'
          onClick={() => dispatch(changeMedia('video'))}
        >
          Videos <span>{media.videos.results.length}</span>
        </a>
      </li>
      <li className={currentMedia === 'backdrops' ? 'selected' : ''}>
        <a
          className='cursor-pointer'
          onClick={() => dispatch(changeMedia('backdrops'))}
        >
          Backdrops <span>{media.images.backdrops.length}</span>
        </a>
      </li>
      <li className={currentMedia === 'posters' ? 'selected' : ''}>
        <a
          className='cursor-pointer'
          onClick={() => dispatch(changeMedia('posters'))}
        >
          Posters <span>{media.images.posters.length}</span>
        </a>
      </li>
    </ul>
  );
};

export default MediaController;
