import React, { RefObject, useRef } from 'react';
import MediaWrapper from '../UI/MediaWrapper';
import {
  Video,
  Backdrops,
  Posters,
  MovieRecommendation,
  MovieCast,
} from '../../../types/movieTypings';
import { TvRecommendation } from '../../../types/tvTypings';
import { TvCast } from '../../../types/tvTypings';
import { MainType } from '../../../types/mainTypings';
import { filterSeven } from '../../utils/helpers';
import { useSelector } from 'react-redux';
import { mediaValue } from '../../store/slices/mainSlice';
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
  cast?: MovieCast[] | TvCast[];
  mainMedia?: MainType[] | MovieRecommendation[] | TvRecommendation[];
  height: number;
  width: number;
}

const MediaScroller = ({
  media,
  cast,
  mainMedia,
  height,
  width,
}: MediaType) => {
  const currentMedia = useSelector(mediaValue);

  const scrollerRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  // media from movie page
  const getMedia: any = (media: MediaSection) => {
    if (media) {
      const { videos, images } = media;
      const video = (filterSeven(videos.results) as Video[]).filter(
        (video) => video.site === 'YouTube'
      );
      const backdrops = filterSeven(images.backdrops);
      const posters = filterSeven(images.posters);

      const allMedia: { [key: string]: any } = {
        most: [
          videos.results.find(
            (video) => video.name === 'Official Trailer' && video.official
          ),
          backdrops[0],
          posters[0],
        ],
        video,
        backdrops,
        posters,
      };
      return allMedia;
    }
    return;
  };
  const mediaData = getMedia(media);

  return (
    <div className='recs_scroller mb-5 relative'>
      <div
        ref={scrollerRef}
        className='scroller whitespace-nowrap overflow-y-hidden scroll-smooth grid grid-flow-col gap-2'
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
            .map((media: MovieCast | TvCast, index: number) => (
              <MediaWrapper
                cast={media}
                height={height}
                width={width}
                key={index}
              />
            ))}

        {mainMedia &&
          mainMedia.map((media, index) => (
            <MediaWrapper
              key={index}
              mainMedia={media}
              height={height}
              width={width}
            />
          ))}
        {/* <div className='absolute top-0 right-0 bg-gradient-to-l from-[#ffff] h-full w-1/12 ' /> */}
      </div>
      <div
        className='hidden md:inline-block arrows-left left-7 cursor-pointer border-solid border-2 border-[rgba(255,255,255,0.7)] w-[4rem] py-6 pr-2 bg-[rgba(18,18,18,.5)] rounded group absolute top-[30%]'
        onClick={() => (scrollerRef.current!.scrollLeft -= 200)}
      >
        <ChevronLeftIcon className='h-10 absolute left-2 animate-[leftArrow_1.5s_ease-in-out_infinite] group-hover:text-accent-color text-white' />
        <ChevronLeftIcon className='h-10 animate-[leftArrow_1.5s_ease-in-out_infinite_0.1s] group-hover:text-accent-color text-white' />
      </div>
      <div
        className='hidden md:inline-block arrows-right left-[92%] cursor-pointer border-solid border-2 border-[rgba(255,255,255,0.7)] w-[4rem] py-6 px-3 bg-[rgba(18,18,18,.5)] rounded group absolute top-[30%]'
        onClick={() => (scrollerRef.current!.scrollLeft += 200)}
      >
        <ChevronRightIcon className='h-10 absolute left-5 animate-[rightArrow_1.5s_ease-in-out_infinite_0.1s] group-hover:text-accent-color text-white' />
        <ChevronRightIcon className='h-10 animate-[rightArrow_1.5s_ease-in-out_infinite] group-hover:text-accent-color text-white' />
      </div>
    </div>
  );
};

export default MediaScroller;
