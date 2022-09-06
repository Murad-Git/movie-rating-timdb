import Image from 'next/image';
import { IMG_URL } from '../../utils/requests';
import { TrendingResult } from '../../../types/mainTypings';
import { ThumbUpIcon } from '@heroicons/react/outline';
import Link from 'next/dist/client/link';
import { urlTitle } from '../../utils/helpers';

interface Props {
  result: TrendingResult;
}

// eslint-disable-next-line react/display-name
const Thumbnail = ({ result }: Props) => {
  return (
    <Link
      href={`/movie/${urlTitle(
        result.id,
        result?.title || result?.original_name
      )}`}
    >
      {/* <Link href={`/movie/${result.id}-${title}`}> */}
      <div className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
        <Image
          layout='responsive'
          src={
            `${IMG_URL}${result.backdrop_path || result.poster_path}` ||
            `${IMG_URL}${result.poster_path}`
          }
          height={1080}
          width={1920}
          alt='movie'
        />
        <div className='p-2 block'>
          <p className='truncate max-w-md'>{result.overview}</p>
          <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
            {result.title || result.original_name}
          </h2>
          <p className='flex items-center opacity-0 group-hover:opacity-100'>
            {result.media_type && `${result.media_type} `}
            {result.release_date || result.first_air_date} •
            <ThumbUpIcon className='h-5 mx-2' />
            {result.vote_count}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Thumbnail;
