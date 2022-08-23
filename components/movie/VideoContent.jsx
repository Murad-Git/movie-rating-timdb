import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { MainContext } from '../../store/main.context';

const VideoContent = () => {
  const { video } = useContext(MainContext);
  const { closeVideo } = useContext(MainContext);

  const closeWindowHandler = () => {
    closeVideo();
  };

  return (
    <div className={`${!video.shown && 'hidden'} top-6 w-full fixed z-50`}>
      {/* <div className='absolute left-2/4 top-1/4 z-50'> */}
      <div className='bg-black text-white left-[5%] w-11/12 relative flex justify-between px-4 py-1'>
        <h2 className='font-semibold text-lg'>{video.title}</h2>
        <button onClick={closeWindowHandler}>
          <FontAwesomeIcon icon={faCircleXmark} size='lg' />
          {/* <XCircleIcon className='h-6' /> */}
        </button>
      </div>
      <div className='video-player overflow-hidden pb-[56.25%] relative h-0'>
        <iframe
          className='left-[5%] top-0 h-4/5 w-11/12 absolute'
          src={`https://www.youtube.com/embed/${video.url}`}
          frameBorder='0'
          width='853'
          height='480'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title={`${video.title}`}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoContent;
