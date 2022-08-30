import React, { RefObject, useRef } from 'react';
import MediaWrapper from '../UI/MediaWrapper';
import ScrollArrow from '../UI/ScrollArrow';
import {
  Video,
  Backdrops,
  Posters,
  Recommendation,
} from '../../../types/movieTypings';
import { filterSeven } from '../../utils/helpers';
import { useSelector } from 'react-redux';
import { mediaValue } from '../../store/slices/mediaSlice';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

interface MediaSection {
  videos: {
    results: Video[];
  };
  images: {
    backdrops: Backdrops[];
    posters: Posters[];
  };
}

interface MediaType {
  media: MediaSection | Recommendation[];
  height: number;
  width: number;
}

const MediaScroller = ({ media, height, width }: MediaType) => {
  const currentMedia = useSelector(mediaValue);
  const scrollerRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollerRef.current!.scrollLeft -= 200;
  };
  const scrollRight = () => {
    scrollerRef.current!.scrollLeft += 200;
  };

  const getMedia: any = (media: MediaSection | Recommendation[]) => {
    if ('videos' in media) {
      const { videos, images } = media;
      const video = filterSeven(videos.results).filter(
        (video: Video) => video.site === 'YouTube'
      );
      const backdrops = filterSeven(images.backdrops);
      const posters = filterSeven(images.posters);

      const allMedia: { [key: string]: any } = {
        most: [video[0], backdrops[0], posters[0]],
        video,
        backdrops,
        posters,
      };
      return allMedia;
    }
    return media;
  };
  const mediaData = getMedia(media);

  return (
    <div className='recs_scroller mb-5 relative'>
      <div
        ref={scrollerRef}
        className='scroller whitespace-nowrap overflow-y-hidden scroll-smooth'
      >
        {'videos' in media
          ? mediaData[currentMedia as keyof typeof mediaData].map(
              (media: Video | Backdrops | Posters, index: number) => (
                <MediaWrapper
                  media={media}
                  height={height}
                  width={width}
                  key={index}
                />
              )
            )
          : mediaData.map((media: Recommendation, index: number) => (
              <MediaWrapper
                media={media}
                height={height}
                width={width}
                key={index}
              />
            ))}
        {/* <div className='absolute top-0 right-0 bg-gradient-to-l from-[#ffff] h-full w-1/12 ' /> */}
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
