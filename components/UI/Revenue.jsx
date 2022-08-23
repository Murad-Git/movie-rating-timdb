import React from 'react';

const Revenue = ({ revenue }) => {
  const languageNames = new Intl.DisplayNames(['en'], { type: 'language' });
  return (
    <div className='facts lg:mb-8'>
      <div className='revenue'>
        <ul className='strong-block child:mb-2'>
          <li>
            <p>
              <strong>
                <bdi>Status</bdi>
              </strong>
              {revenue.status}
            </p>
          </li>
          <li>
            <p>
              <strong>
                <bdi>Original Language</bdi>
              </strong>
              {languageNames.of(revenue.language)}
            </p>
          </li>
          <li>
            <p>
              <strong>
                <bdi>Budget</bdi>
              </strong>
              {revenue.budget}
            </p>
          </li>
          <li>
            <p>
              <strong>
                <bdi>Revenue</bdi>
              </strong>
              {{ revenue }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Revenue;
