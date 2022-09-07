import React, { useState } from 'react';
import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import MediaScroller from '../../src/components/movie/MediaScroller';
import VideoContent from '../../src/components/movie/VideoContent';
import MediaController from '../../src/components/movie/MediaController';
import { API_URL, TV_URL } from '../../src/utils/requests';
import { TV } from '../../types/tvTypings';
import FactsPanel from '../../src/components/movie/FactsPanel';
import ContentWrapper from '../../src/components/UI/ContentWrapper';
import HeroSection from '../../src/components/UI/HeroSection';
import SeasonSection from '../../src/components/tv/SeasonSection';
import Nav from '../../src/components/UI/Nav';

interface Props {
  tv: TV;
}

const TvPage: NextPage<Props> = ({ tv }) => {
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
        <title>{tv.original_name}</title>
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
                  <SeasonSection tv={tv.seasons[0]} title={tv.original_name} />
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const getData = context.params?.tvId;
  const tvId = (context.params?.tvId as string).split('-')[0];

  // console.log(`context params:${context.params.split("-")[0]}=======`);
  const query = '92783';
  // console.log(`context of movie${context.params.movie}`);
  const request = await fetch(
    `${TV_URL}${tvId}?${API_URL}&append_to_response=videos,keywords,recommendations,external_ids,credits,images`
  );
  const response = await request.json();
  // console.log(`res: ${response}`);
  return {
    props: { tv: response },
  };
};
