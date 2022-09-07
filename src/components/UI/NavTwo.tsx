import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// flex flex-nowrap sm:flex-row justify-between items-center
const NavTwo = () => {
  const [offset, setOffset] = useState<number>(0);
  const [scrollDown, setScrollDown] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      const { scrollY } = window;
      setOffset((prevValue) => {
        setScrollDown(scrollY - prevValue > 0 ? true : false);
        return scrollY;
      });
    };

    window.removeEventListener('scroll', onScroll);

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`${
        scrollDown ? 'top-[-50px] md:top-[-64px]' : ''
      } fixed top-0 left-0 z-10 w-full h-[50px] md:h-[64px] bg-gray-900 text-white transition-all duration-300 m-0 px-10 lg:px-40`}
    >
      <nav className='content'>
        <div className='container flex flex-wrap justify-between items-center mx-auto'>
          <div className='menu flex items-center'>
            <div className='logo mr-5'>
              <a href='/' className='flex items-center'>
                <img src='/icon.png' className='mr-3 h-6 sm:h-8' alt='Logo' />
                <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
                  Movies
                </span>
              </a>
            </div>
            <div className='menu_items'>
              <div
                className='hidden justify-between items-center w-full md:flex md:w-auto '
                id='navbar-search'
              >
                <div className='relative mt-3 md:hidden'>
                  <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                    <svg
                      className='w-5 h-5 text-gray-500'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </div>
                  <input
                    type='text'
                    id='search-navbar'
                    className='block p-2 pl-10 w-full text-gray-900 bg-gray-50 
                    focus:outline-none rounded-lg   sm:text-sm  '
                    placeholder='Search...'
                  />
                </div>
                <ul className='flex flex-col items-center p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-mainText-color'>
                  <li>
                    <a
                      href='#'
                      className='block text-xl pr-4 pl-3 md:p-0'
                      aria-current='page'
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a href='#' className='block text-xl pr-4 pl-3'>
                      Theater
                    </a>
                  </li>
                  <li>
                    <a href='#' className='block text-xl pr-4 pl-3'>
                      Cinema
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex'>
            <button
              type='button'
              data-collapse-toggle='navbar-search'
              aria-controls='navbar-search'
              aria-expanded='false'
              className='md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1'
            >
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                ></path>
              </svg>
              <span className='sr-only'>Search</span>
            </button>
            <div className='hidden relative md:block'>
              <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-500'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='sr-only'>Search icon</span>
              </div>
              <input
                type='text'
                id='search-navbar'
                className='block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm  focus-visible:no-underline focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search...'
              />
            </div>
            <button
              data-collapse-toggle='navbar-search'
              type='button'
              className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-search'
              aria-expanded='false'
            >
              <span className='sr-only'>Open menu</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* <Image
        className='object-contain '
        src='https://links.papareact.com/ua6'
        width={200}
        height={100}
        alt='logo'
      /> */}
    </header>
  );
};

export default NavTwo;
