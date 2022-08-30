import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { closeVideo } from '../../store/slices/mediaSlice';

const VideoContent = () => {
  const {
    videoTitle: title,
    url,
    shown,
  } = useSelector((state: RootState) => state.media);
  const dispatch = useDispatch();

  if (!shown) return null;

  return (
    <div className={`top-6 w-full fixed z-50`}>
      {/* <div className={`${!shown && 'hidden'} top-6 w-full fixed z-50`}> */}
      {/* <div className='absolute left-2/4 top-1/4 z-50'> */}
      <div className='bg-black left-[5%] w-11/12 relative flex justify-between px-4 py-1'>
        <h2 className='font-semibold text-lg'>{title}</h2>
        <button onClick={() => dispatch(closeVideo())}>
          <FontAwesomeIcon icon={faCircleXmark} size='lg' />
        </button>
      </div>
      <div className='video-player overflow-hidden pb-[56.25%] relative h-0'>
        <iframe
          id='video'
          className='left-[5%] top-0 h-4/5 w-11/12 absolute'
          src={`https://www.youtube.com/embed/${url}`}
          frameBorder='0'
          width='853'
          height='480'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title={`${title}`}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoContent;
