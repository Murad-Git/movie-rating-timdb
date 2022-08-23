import Image from 'next/image';
import React, { useContext } from 'react';
import ReactScoreIndicator from 'react-score-indicator';
import { MainContext } from '../../store/main.context';
import { IMG_URL } from '../../utils/requests';

function MediaWrapper({ media, height, width }) {
  const { openVideo } = useContext(MainContext);
  console.log(`media from mediawapper ${media}=================`);
  const onDisplayHandler = () => {
    openVideo(media.key, media.name);
  };
  return (
    <div className='inline-block mr-2 group text-black'>
      <div className='image_content w-96 h-36'>
        <a
          className={`${media.key ? 'cursor-pointer' : ''}`}
          onClick={media.key && onDisplayHandler}
          title={`${media?.title}`}
        >
          <Image
            src={
              `${IMG_URL}${media.file_path}` ||
              `${YT_URL}${media.key}/maxresdefault.jpg` ||
              `${IMG_URL}${media.backdrop_path}`
            }
            height={height}
            width={width}
            //   height={400}
            //   width={500}
            alt={`${media.title || 'media'}`}
            className='object-cover rounded'
            layout='responsive'
          />
          {mediaType === 'recs' && (
            <div className='invisible flex group-hover:visible meta bg-slate-50 relative -top-10 left-0 h-10 w-full z-10 box-border px-2.5 justify-between align-middle opacity-75'>
              <span className='text-md inline-flex align-middle'>
                {media.release_date.split('-').reverse().join('/')}
              </span>
              <span className='box-border'>
                <ReactScoreIndicator
                  value={(media.vote_average * 10).trunc()}
                  maxValue={100}
                />
              </span>
            </div>
          )}
        </a>
      </div>
    </div>
  );
}

export default MediaWrapper;
