import React from 'react';
import Keywords from '../UI/Keywords';
import Revenue from '../UI/Revenue';
import Socials from '../UI/Socials';

const FactsPanel = ({ links, revenue, keywords }) => {
  return (
    <div className='flex justify-between lg:flex-col'>
      <Revenue revenue={revenue} />
      <div className='keywords w-1/3  lg:w-full'>
        <div className='social_links lg:mb-6'>
          <Socials links={links} />
        </div>
        <Keywords keywords={keywords} />
      </div>
    </div>
  );
};

export default FactsPanel;
