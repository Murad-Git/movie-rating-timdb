import Head from 'next/head';
import requests from '../src/utils/requests';
import React, { useEffect } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { MainTypes } from '../types/mainTypings';
import Nav from '../src/components/UI/Nav';
import MainController from '../src/components/main/mainController';
import MediaScroller from '../src/components/movie/MediaScroller';
import { mainPageTitles } from '../src/utils/helpers';
import { useSelector } from 'react-redux';
import { RootState } from '../src/store/store';
interface Props {
  trends: MainTypes;
  discover: MainTypes;
}

const Home: NextPage<Props> = ({ trends, discover }) => {
  const [hasMounted, setHasMounted] = React.useState(false);
  const { trendType } = useSelector((state: RootState) => state.media);
  const { discoverType } = useSelector((state: RootState) => state.media);

  const heroImg =
    trends[trendType].results[
      Math.floor(Math.random() * trends[trendType].results.length)
    ];
  const style: React.CSSProperties = {
    backgroundImage: `linear-gradient(to right, rgba(3,37,65, 0.8) 0%, #151a1f7f 100%), url('https://www.themoviedb.org/t/p/w1280_and_h720_multi_faces/${heroImg.backdrop_path}')`,
    width: 'inherit',
    height: 'calc(100vh/2)',
    backgroundPosition: 'top, center',
    backgroundSize: 'cover',
    minHeight: '300px',
    backgroundRepeat: 'no-repeat',

    margin: '0 auto',
  };

  useEffect(() => {
    setHasMounted(true);
  }, []);
  // if (!hasMounted) return null;

  return (
    <div>
      <Head>
        <link rel='icon' href='/icon.png' />
        {/* Primary Meta Tags */}
        <title>Movie rating page</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='title' content='Movie rating page' />
        <meta
          name='description'
          content='The page is movie and tv shows library. You can find The newest movies and tv shows and information of each of them.'
        />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content='https://movie-rating-timdb.vercel.app/'
        />
        <meta property='og:title' content='Movie rating page' />
        <meta
          property='og:description'
          content='The page is movie and tv shows library. You can find The newest movies and tv shows and information of each of them.'
        />
        <meta property='og:image' content='./public/page_screenshot.png' />

        {/* Twitter  */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content='https://movie-rating-timdb.vercel.app/'
        />
        <meta property='twitter:title' content='Movie rating page' />
        <meta
          property='twitter:description'
          content='The page is movie and tv shows library. You can find The newest movies and tv shows and information of each of them.'
        />
        <meta property='twitter:image' content='./public/page_screenshot.png' />
      </Head>

      <Nav />
      <main className='main flex flex-col justify-center mt-[50px] md:mt-[64px] text-mainText-color xl:w-10/12 mx-auto'>
        <section className='hidden md:block discover-media border-none'>
          <div
            className='discover-img w-full h-full bg-no-repeat bg-cover bg-right-top'
            style={hasMounted ? style : undefined}
          ></div>
        </section>
        <section className='trends px-5 lg:px-10 mt-5 md:mt-8'>
          <div className='menu flex items-center mb-5'>
            <h3 className='mr-12 pageHeader m-0'>Trending</h3>
            <MainController menu={mainPageTitles.trendMenu} />
          </div>
          <div>
            <MediaScroller
              mainMedia={trends[trendType].results}
              height={550}
              width={400}
            />
          </div>
        </section>
        <section className='discovery px-5 lg:px-10 mt-5 md:mt-8'>
          <div className='menu flex items-center mb-5'>
            <h3 className='mr-12 pageHeader m-0'>Discover</h3>
            <MainController menu={mainPageTitles.discoverMenu} />
          </div>
          <div>
            <MediaScroller
              mainMedia={discover[discoverType].results}
              height={550}
              width={400}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const [trendDayUrl, trendWeekUrl, discoverMovieUrl, discoverTvUrl] =
      requests('main');

    const data = await Promise.allSettled(
      [trendDayUrl, trendWeekUrl, discoverMovieUrl, discoverTvUrl].map((url) =>
        fetch(url)
      )
    );
    if (!data) {
      return {
        notFound: true,
      };
    }
    const [trendDRes, trendWRes, discMRes, discTRes] = data;
    const trendDay = await trendDRes?.value.json();
    const trendWeek = await trendWRes?.value.json();
    const discMovie = await discMRes?.value.json();
    const discTv = await discTRes?.value.json();

    return {
      props: {
        trends: {
          day: trendDay,
          week: trendWeek,
        },
        discover: {
          movie: discMovie,
          tv: discTv,
        },
      },
      revalidate: 86400,
    };
  } catch (error) {
    throw new Error(error);
  }
};
