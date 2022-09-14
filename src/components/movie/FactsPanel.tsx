import React from 'react';
import Keywords from '../UI/Keywords';
import Revenue from '../UI/Revenue';
import Socials from '../UI/Socials';

interface Props {
  facts: {
    revenue: {
      budget?: number;
      revenue?: number;
      status: string;
      language: string;
    };
    links?: Object;
    homepage?: string;
    keywords?: [{ id: number; name: string }];
  };
}

const FactsPanel = ({ facts }: Props) => {
  return (
    <div className='lg:flex-col'>
      <div className='flex items-center justify-between'>
        <h1 className='boldText'>Facts</h1>
        <div className='social_links'>
          <Socials links={facts.links} homepage={facts.homepage} />
        </div>
      </div>
      <div className='grid grid-cols-2 mt-2'>
        {facts.revenue && <Revenue revenue={facts.revenue} />}
        <div className='keywords w-full lg:w-full'>
          <Keywords keywords={facts.keywords} className='mb-6' />
        </div>
      </div>
    </div>
  );
};

export default FactsPanel;
