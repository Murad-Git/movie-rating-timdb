import React, { useState } from 'react';
import Image from 'next/image';
import { GetServerSideProps, NextPage } from 'next';
import Header from '../../src/components/UI/Header';
import MediaScroller from '../../src/components/movie/MediaScroller';
// import { ColorExtractor } from 'react-color-extractor';
import VideoContent from '../../src/components/movie/VideoContent';
import { secondsToHm } from '../../src/utils/helpers';
import ActionsList from '../../src/components/movie/ActionsList';
import MediaController from '../../src/components/movie/MediaController';
import { API_URL, IMG_URL, TV_URL } from '../../src/utils/requests';
import { TV } from '../../types/tvTypings';
import FactsPanel from '../../src/components/movie/FactsPanel';
import { Movie } from '../../types/movieTypings';
import ContentWrapper from '../../src/components/UI/ContentWrapper';

interface Props {
  tv: TV;
}

const TvPage: NextPage<Props> = ({ tv }) => {
  return <div>TvPage</div>;
};

export default TvPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const getData = context.params?.movieId;
  const tvId = (context.params?.movieId as string).split('-')[0];

  // console.log(`context params:${context.params.split("-")[0]}=======`);
  const query = '92783';
  // console.log(`context of movie${context.params.movie}`);
  const request = await fetch(
    `${TV_URL}${tvId}?${API_URL}&append_to_response=videos,keywords,recommendations,external_ids,credits,images,collection`
  );
  const response = await request.json();
  // console.log(`res: ${response}`);
  return {
    props: { tv: response },
  };
};
