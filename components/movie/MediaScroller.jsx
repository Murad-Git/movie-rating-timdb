import React, { useContext, useRef } from 'react';
import { MainContext } from '../../store/main.context';
import MediaWrapper from '../UI/MediaWrapper';
import ScrollArrow from '../UI/ScrollArrow';

const MediaScroller = ({ mediaType, height, width }) => {
  const { mediaContent } = useContext(MainContext);
  const { title } = mediaContent;
  const scrollerRef = useRef(null);
  // const moveRight = () => {
  //   scrollerRef.current.scrollLeft += 200;
  // };
  // const moveLeft = () => {
  //   scrollerRef.current.scrollLeft -= 200;
  // };
  // console.log(mediaType);

  // console.log(
  //   `Media scroller: ${JSON.stringify(
  //     mediaContent,
  //     null,
  //     4
  //   )}-------------------------------`
  // );
  // console.log(
  //   `test media content: ${mediaContent.media['most']}-------------------------------`
  // );

  return (
    <div className='recs_scroller mb-5 relative'>
      <div
        ref={scrollerRef}
        className='scroller whitespace-nowrap overflow-y-hidden scroll-smooth'
      >
        {/* {mediaType && (
          <MediaWrapper
            mediaType={mediaType}
            media={mediaContent.media.most}
            height={height}
            width={width}
          />
        )} */}

        {mediaType === 'recs' &&
          mediaContent.media.recs.map((rec, i) => (
            <MediaWrapper
              key={i}
              recs={true}
              media={rec}
              height={height}
              width={width}
            />
          ))}
        {/* {media &&
          mediaContent[`${mediaContent.title}`].map((media, i) => (
            <MediaWrapper key={i} media={media} height={height} width={width} />
          ))} */}
        <div className='absolute top-0 right-0 bg-gradient-to-l from-[#ffff] h-full w-1/12 ' />
      </div>
      <ScrollArrow scrollerRef={scrollerRef} />
    </div>
  );
};

export default MediaScroller;

// : mediaContent[`${mediaContent.title}`].map((media, i) => (
//     <MediaWrapper
//       key={i}
//       media={media}
//       height={height}
//       width={width}
//     />
//   ))}
