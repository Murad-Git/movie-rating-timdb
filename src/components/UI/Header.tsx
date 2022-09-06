import Image from 'next/image';
import HeaderItem from './HeaderItem';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className='flex flex-nowrap sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='Home' icon={faHouse} />
        <HeaderItem title='Home' icon={faHouse} />
        <HeaderItem title='Home' icon={faHouse} />
        <HeaderItem title='Home' icon={faHouse} />
        <HeaderItem title='Home' icon={faHouse} />
        <HeaderItem title='Home' icon={faHouse} />
      </div>
      <Image
        className='object-contain '
        src='https://links.papareact.com/ua6'
        width={200}
        height={100}
        alt='logo'
      />
    </header>
  );
};

export default Header;
