import React from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import MediaScroller from '../../src/components/movie/MediaScroller';
import VideoContent from '../../src/components/movie/VideoContent';
import MediaController from '../../src/components/movie/MediaController';
import requests, { API_URL, TV_URL } from '../../src/utils/requests';
import { TV } from '../../types/tvTypings';
import FactsPanel from '../../src/components/movie/FactsPanel';
import ContentWrapper from '../../src/components/UI/ContentWrapper';
import HeroSection from '../../src/components/UI/HeroSection';
import SeasonSection from '../../src/components/tv/SeasonSection';
import Nav from '../../src/components/UI/Nav';
import { MainType } from '../../types/mainTypings';
import { useRouter } from 'next/router';

interface Props {
  tv: TV;
}

const TvPage: NextPage<Props> = ({ tv }) => {
  const { query } = useRouter();
  const { tvId } = query;

  const media = {
    videos: tv?.videos,
    images: tv?.images,
  };
  const facts = {
    revenue: {
      status: tv?.status,
      language: tv?.original_language,
    },
    links: tv?.external_ids,
    homepage: tv?.homepage,
    keywords: tv?.keywords?.keywords || tv?.keywords?.results,
  };

  return (
    <>
      <Head>
        <title>{tv.name}</title>
        <link rel='icon' href='/icon.png' />
        {/* Primary Meta Tags */}
        <meta name='title' content={tv.name} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='description'
          content={tv.overview ? tv.overview : 'Tv show page'}
        />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`https://movie-rating-timdb.vercel.app/movie/${tvId}`}
        />
        <meta property='og:title' content={tv.name} />
        <meta
          property='og:description'
          content={tv.overview ? tv.overview : 'Tv show page'}
        />
        <meta property='og:image' content='./public/page_screenshot.png' />

        {/* Twitter  */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content={`https://movie-rating-timdb.vercel.app/movie/${tvId}`}
        />
        <meta property='twitter:title' content={tv.name} />
        <meta
          property='twitter:description'
          content={tv.overview ? tv.overview : 'Tv show page'}
        />
        <meta property='twitter:image' content='./public/page_screenshot.png' />
      </Head>
      <Nav />
      <div className=' flex-col flex-auto min-h-full h-auto relative top-0 left-0 '>
        <main className='main box-border justify-center relative'>
          {/* Hero section */}
          <HeroSection media={tv} />

          {/* Section media */}
          <ContentWrapper>
            <div className='main-content col-span-3'>
              {/* cast */}
              <section className='cast '>
                <h2 className='pageHeader'>Series Cast</h2>
                <div className='mb-5'>
                  <MediaScroller
                    cast={tv.credits.cast}
                    // media={movie.credits.cast}
                    height={500}
                    width={350}
                  />
                </div>
              </section>
              {/* {Current Season} */}
              <section>
                <h2 className='pageHeader'>Current Season</h2>
                <div className='season_card flex rounded shadow-lg border-mainText-color mb-6'>
                  <SeasonSection tv={tv.seasons} title={tv.name} />
                </div>
              </section>
              {/* Media */}
              <section className=''>
                <div className='menu flex items-center mb-8'>
                  <h2 className='mr-12 pageHeader m-0'>Media</h2>
                  <MediaController media={media} />
                </div>
                <MediaScroller media={media} height={370} width={494} />
              </section>
              {/* Recommendations */}
              <section className=''>
                <div className='menu pageHeader'>
                  <h2 className='boldText'>Recommendations</h2>
                </div>
                {tv.recommendations.results.length > 0 ? (
                  <MediaScroller
                    mainMedia={tv.recommendations.results}
                    height={550}
                    width={400}
                  />
                ) : (
                  <h2>No recommendations were found</h2>
                )}
              </section>
            </div>
            <div className='info-content mb-4 col-span-1 text-lg relative'>
              <section className='movie-info'>
                <FactsPanel facts={facts} />
              </section>
            </div>
          </ContentWrapper>
          <VideoContent />
        </main>
      </div>
    </>
  );
};

export default TvPage;

export const getStaticPaths = async () => {
  try {
    const [trendDayUrl, trendWeekUrl, discoverMovieUrl, discoverTvUrl] =
      requests('main');
    const data = await Promise.allSettled(
      [trendDayUrl, trendWeekUrl, discoverTvUrl].map((url) => fetch(url))
    );
    const [trendDRes, trendWRes, discTvRes] = data;
    const trendDay = await trendDRes.value.json();
    const trendWeek = await trendWRes.value.json();
    const discTv = await discTvRes.value.json();

    const posts = [
      trendDay.results.filter((trend: MainType) => trend.media_type === 'tv'),
      trendWeek.results.filter((trend: MainType) => trend.media_type === 'tv'),
      discTv.results,
    ];

    const paths = [...new Set(posts.flat().map((item) => item.id))].map(
      (post: MainType) => ({
        params: {
          tvId: post.toString(),
        },
      })
    );
    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    // const getData = context.params?.tvId;
    const tvId = (context?.params?.tvId as string).split('-')[0];

    // const query = '92783';
    const request = await fetch(
      `${TV_URL}${tvId}?${API_URL}&append_to_response=videos,keywords,recommendations,external_ids,credits,images`
    );
    if (!request) {
      return {
        notFound: true,
      };
    }

    const response = await request.json();
    return {
      props: { tv: response },
      revalidate: 86400,
    };
  } catch (error) {
    throw new Error(error);
  }
};
