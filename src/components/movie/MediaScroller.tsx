import React, { RefObject, useRef } from 'react';
import MediaWrapper from '../UI/MediaWrapper';
import {
  Video,
  Backdrops,
  Posters,
  Recommendation,
  Cast,
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
  media?: MediaSection;
  cast?: Cast[];
  recommendations?: Recommendation[];
  height: number;
  width: number;
}

const MediaScroller = ({
  media,
  cast,
  recommendations,
  height,
  width,
}: MediaType) => {
  const currentMedia = useSelector(mediaValue);
  const scrollerRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  const getMedia: any = (media: MediaSection) => {
    if (media) {
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
    return;
  };
  const mediaData = getMedia(media);

  // console.log(
  //   `sliderleft, and sliderwith: ${JSON.stringify(
  //     { sliderLeft, sliderWith },
  //     null,
  //     4
  //   )}-------------------------------`
  // );
  return (
    <div className='recs_scroller mb-5 relative'>
      <div
        ref={scrollerRef}
        className='scroller whitespace-nowrap overflow-y-hidden scroll-smooth'
      >
        {media &&
          mediaData[currentMedia as keyof typeof mediaData].map(
            (media: Video | Backdrops | Posters, index: number) => (
              <MediaWrapper
                media={media}
                height={height}
                width={width}
                key={index}
              />
            )
          )}
        {cast &&
          cast
            ?.filter((actor, index) => index < 12)
            .map((media: Cast, index: number) => (
              <MediaWrapper
                cast={media}
                height={height}
                width={width}
                key={index}
              />
            ))}
        {recommendations &&
          recommendations.map((media: Recommendation, index: number) => (
            <MediaWrapper
              recommendation={media}
              height={height}
              width={width}
              key={index}
            />
          ))}
        {/* <div className='absolute top-0 right-0 bg-gradient-to-l from-[#ffff] h-full w-1/12 ' /> */}
      </div>
      <div
        className='hidden md:inline-block arrows-left left-7 cursor-pointer border-solid border-2 border-[rgba(255,255,255,0.7)] w-[4rem] py-6 pr-2 bg-[rgba(18,18,18,.5)] rounded group absolute top-[30%]'
        onClick={() => (scrollerRef.current!.scrollLeft -= 200)}
      >
        <ChevronLeftIcon className='h-10 absolute left-2 animate-[leftArrow_1.5s_ease-in-out_infinite] group-hover:text-[#ff893b] text-white' />
        <ChevronLeftIcon className='h-10 animate-[leftArrow_1.5s_ease-in-out_infinite_0.1s] group-hover:text-[#ff893b] text-white' />
      </div>
      <div
        className='hidden md:inline-block arrows-right left-[92%] cursor-pointer border-solid border-2 border-[rgba(255,255,255,0.7)] w-[4rem] py-6 px-3 bg-[rgba(18,18,18,.5)] rounded group absolute top-[30%]'
        onClick={() => (scrollerRef.current!.scrollLeft += 200)}
      >
        <ChevronRightIcon className='h-10 absolute left-5 animate-[rightArrow_1.5s_ease-in-out_infinite_0.1s] group-hover:text-[#ff893b] text-white' />
        <ChevronRightIcon className='h-10 animate-[rightArrow_1.5s_ease-in-out_infinite] group-hover:text-[#ff893b] text-white' />
      </div>
    </div>
  );
};

export default MediaScroller;
