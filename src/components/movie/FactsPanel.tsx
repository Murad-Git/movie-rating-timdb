import React from 'react';
import Keywords from '../UI/Keywords';
import Revenue from '../UI/Revenue';
import Socials from '../UI/Socials';

interface Props {
  facts: {
    revenue: {
      budget: number;
      revenue: number;
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
    <div className='flex justify-between lg:flex-col'>
      <Revenue revenue={facts.revenue} />
      <div className='keywords w-1/3  lg:w-full'>
        <div className='social_links lg:mb-6'>
          <Socials links={facts.links} homepage={facts.homepage} />
        </div>
        <Keywords keywords={facts.keywords} />
      </div>
    </div>
  );
};

export default FactsPanel;
