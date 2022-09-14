import React from 'react';
import { formatNum } from '../../utils/helpers';

interface Props {
  revenue: {
    budget?: number;
    revenue?: number;
    status: string;
    language: string;
  };
}

const Revenue = ({ revenue }: Props) => {
  const languageNames = new Intl.DisplayNames(['en'], { type: 'language' });
  // const languageName = languageNames.of(revenue.language);
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
          {revenue.budget && revenue.budget > 0 ? (
            <li>
              <p>
                <strong>
                  <bdi>Budget</bdi>
                </strong>
                {formatNum.format(revenue.budget)}
              </p>
            </li>
          ) : (
            <li>
              <p>
                <strong>
                  <bdi>Budget</bdi>
                </strong>
                Not Found
              </p>
            </li>
          )}
          {revenue.revenue && revenue.revenue > 0 ? (
            <li>
              <p>
                <strong>
                  <bdi>Revenue</bdi>
                </strong>
                {formatNum.format(revenue.revenue)}
              </p>
            </li>
          ) : (
            <li>
              <p>
                <strong>
                  <bdi>Revenue</bdi>
                </strong>
                Not Found
              </p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Revenue;
