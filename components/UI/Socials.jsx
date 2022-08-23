import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Socials = ({ links }) => {
  return (
    <ul className='socials flex flex-wrap child:mr-2  child:text-3xl lg:child:mr-3 child:text-slate-600 hover:child:text-slate-800'>
      <li className='social'>
        <a href={`https://www.facebook.com/${links.facebook_id}`}>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </li>
      <li className='social'>
        <a href={`https://twitter.com/${links.twitter_id}`}>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li className='social'>
        <a href={`https://instagram.com/${links.instagram_id}`}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li className='social'>
        <a href={`https://www.imdb.com/title/${links.imdb_id}`}>
          <FontAwesomeIcon icon={faImdb} />
        </a>
      </li>
      <li className='social'>
        <a href={homepage}>
          <FontAwesomeIcon icon={faHouse} />
        </a>
      </li>
    </ul>
  );
};

export default Socials;