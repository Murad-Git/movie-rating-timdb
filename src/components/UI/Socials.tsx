import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

interface Props {
  links?: {
    facebook_id?: string;
    twitter_id?: string;
    instagram_id?: string;
    imdb_id?: string;
  };
  homepage?: string;
}

const Socials = ({ links, homepage }: Props) => {
  return (
    <ul className='socials flex flex-wrap child:mr-2  child:text-3xl lg:child:mr-3 child:text-slate-400 hover:child:text-mainText-color'>
      <li className='social'>
        <a
          target='_blank'
          rel='noreferrer'
          href={`https://www.facebook.com/${links?.facebook_id}`}
        >
          <FontAwesomeIcon icon={faFacebook} className='h-7' />
        </a>
      </li>
      <li className='social'>
        <a
          target='_blank'
          rel='noreferrer'
          href={`https://twitter.com/${links?.twitter_id}`}
        >
          <FontAwesomeIcon icon={faTwitter} className='h-7' />
        </a>
      </li>
      <li className='social'>
        <a
          target='_blank'
          rel='noreferrer'
          href={`https://instagram.com/${links?.instagram_id}`}
        >
          <FontAwesomeIcon icon={faInstagram} className='h-7' />
        </a>
      </li>
      <li className='social'>
        <a
          target='_blank'
          rel='noreferrer'
          href={`https://www.imdb.com/title/${links?.imdb_id}`}
        >
          <FontAwesomeIcon icon={faImdb} className='h-7' />
        </a>
      </li>
      <li className='social'>
        <a target='_blank' rel='noreferrer' href={homepage}>
          <FontAwesomeIcon icon={faHouse} className='h-7' />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
