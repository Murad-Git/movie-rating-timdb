const Movie = ({ movie, cast }) => {
  const imagesList = [posterImg, actorImg, collectImg, videoBgImg, recommImg];
  const actualView = {
    most: imagesList[0],
    video: imagesList[1],
    backdrops: imagesList[2],
    posters: imagesList[3],
  };

  const [shown, setShown] = useState(false);
  const [viewList, setViewList] = useState(actualView.most);

  const router = useRouter();

  const showMoreHandler = () => {
    setShown((prevState) => !prevState);
  };

  const secondsToHm = (runtime) => {
    const d = Number(runtime);
    const h = Math.floor(d / 60);
    const m = Math.floor(d - h * 60);
    const hDisplay = h > 0 ? h + 'h' : '';
    const mDisplay = m > 0 ? m + 'm' : '';
    return `${hDisplay} ${mDisplay}`;
  };
  // const runtime = secondsToHm(movie.runtime);
  const formatNum = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  const mediaChangeHandler = (mediaType) => {
    // mediaType === 'most' ? setViewList(actualView[0]) : '';
    // mediaType === 'videos' ? setViewList(actualView[1]) : '';
    // mediaType === 'backdrops' ? setViewList(actualView[2]) : '';
    // mediaType === 'posters' ? setViewList(actualView[3]) : '';
    // return setViewList;
  };

  const mediaViewList = (context, num) => {
    const mostVideoList = (
      <div
        key={num}
        className=' w-48 mr-2 thumbnail max-w-sm rounded bg-white shadow-lg'
      >
        <Image
          src={context}
          height={300}
          width={200}
          alt='actor'
          className='object-cover'
          layout='responsive'
        />
      </div>
    );
    return mostVideoList;
  };

  return (
    <div>
      <Header />
      <div className='px-5 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
        {/* Hero section */}
        <section className='hero-section py-1 group transition duration-200 ease-in transform sm:hover:scale-105 hover:z-40 border-b-2 border-gray-50 mb-4'>
          <Image
            className='object-cover'
            layout='responsive'
            src={posterImg}
            sizes='(min-width: 75em) 33vw,
              (min-width: 48em) 50vw,
              100vw'
            height={700}
            // height={1080}
            // width={1920}
            width={500}
            alt='poster'
          />
          {/* <Image
            className='object-contain'
            layout='responsive'
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            sizes='(min-width: 75em) 33vw,
              (min-width: 48em) 50vw,
              100vw'
            height={700}
            // height={1080}
            // width={1920}
            width={500}
            alt='poster'
          /> */}
          <div className='[&>*]:mb-1'>
            <h1 className='mt-1 mr-1 text-2xl text-white transition-all duration-100 ease-in-out sm:group-hover:font-bold  cursor-pointer '>
              Thor: Love and Thunder
            </h1>
            {/* <h1 className='mt-1 mr-1 text-2xl text-white transition-all duration-100 ease-in-out sm:group-hover:font-bold'>
              {movie.title || movie.original_name}
            </h1> */}
            <p>2022 US • Action, Adventure, Fantasy • 1h 59m</p>
            <p>
              After his retirement is interrupted by Gorr the God Butcher, a
              galactic killer who seeks the extinction of the gods, Thor enlists
              the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster,
              who now inexplicably wields Mjolnir as the Mighty Thor. Together
              they embark upon a harrowing cosmic adventure to uncover the
              mystery of the God Butcher`s vengeance and stop him before it`s
              too late.
            </p>
            {/* <p className=' text-lg'>{`(${movie.release_date.substring(
              0,
              4
            )}) ${movie.production_coutries.map(c=> c.iso_3166_1)} • ${movie.genres.map(
              (genre) => ` ${genre.name}`
            )} • ${runtime}`}</p>
            <p className='font-light hidden sm:block'>
              <em> {movie.tagline}</em>
            </p>
            <h3 className='text-lg font-bold'>Overview</h3>
            <div onClick={showMoreHandler}>
              <p
                className={
                  !shown ? 'line-clamp-3 ' : undefined + 'line-clamp-3 max-w-md'
                }
              >
                {movie.overview}
              </p>
              <button>{shown ? 'show less' : 'show more'}</button>
            </div> */}
          </div>
        </section>
        <div className='movie-content border-b-2 border-gray-50'>
          {/* Cast */}
          <section className='cast relative whitespace-nowrap flex overflow-x-auto overflow-y-hidden mb-4 scrollbar-hide'>
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className=' w-48 mr-2 thumbnail max-w-sm rounded bg-white shadow-lg'
              >
                <div>
                  <Image
                    src={actorImg}
                    height={300}
                    width={200}
                    alt='actor'
                    className='object-cover'
                    layout='responsive'
                  />
                  {/* <Image
                      src={`https://image.tmdb.org/t/p/original/${cast.cast[0].profile_path}`}
                      height={300}
                      width={200}
                      alt='actor'
                                  className='object-cover'
            layout='responsive'
                    /> */}
                </div>
                <div className='px-6 py-2'>
                  <h2 className='font-bold text-xl mb-2 text-black'>
                    Chris Hemsworth
                  </h2>
                  <p className='text-gray-700 text-base'>Thor Odinson</p>
                  {/* <h2 className='font-bold text-xl mb-2 text-black'>
                      {cast.cast[0].name}
                    </h2>
                    <p className='text-gray-700 text-base'>
                      {cast.cast[0].character}
                    </p> */}
                </div>
              </div>
            ))}
            {/* <div className='absolute top-0 right-0 bg-gradient-to-l from-gray-600 h-full w-1/12 ' /> */}
          </section>
          <h3 className='my-2 text-xl text-white'>Full Cast</h3>
          {/* Collections */}
          <section className='collections relative'>
            <div className=''>
              <Image
                src={collectImg}
                height={1080}
                width={1920}
                alt='actor'
                className='object-cover'
                layout='responsive'
              />
              {/* <Image
                src={`https://image.tmdb.org/t/p/original/${
                  movie.belongs_to_collection.backdrop_path ||
                  movie.belongs_to_collection.poster_path
                }`}
                height={1080}
                width={1920}
                alt='actor'
                className='object-cover'
                layout='responsive'
              /> */}
            </div>
            <div className='collec-info absolute bottom-7 left-4 z-10'>
              <h1 className='text-xl text-white mb-2'>
                Part of the Thor Collection
              </h1>
              <h3 className='hidden sm:block'>
                Includes Thor, Thor: The Dark World, Thor: Ragnarok, and Thor:
                Love and Thunder
              </h3>
              <button className='bg-purple-600 hover:bg-purple-900 text-white text-base font-bold py-2 px-4 rounded-full'>
                VIEW THE COLLECTION
              </button>
            </div>
          </section>
          {/* Media */}
          <section>
            <div className='menu flex items-center'>
              <h3 className='mr-2'>Media</h3>
              <ul className='flex [&>*]:mr-1'>
                <li>
                  <a onClick={() => setViewList(actualView.most)}>
                    Most Popular
                  </a>
                </li>
                <li>
                  <a onClick={() => setViewList(actualView.video)}>
                    Videos <span>26</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setViewList(actualView.backdrops)}>
                    Backdrops <span>26</span>
                  </a>
                </li>
                <li>
                  <a onClick={() => setViewList(actualView.posters)}>
                    Posters <span>26</span>
                  </a>
                </li>
              </ul>
            </div>
            <MediaScroller mainImg={viewList} num={4} />
            {/* <div className='media_scroller'>
              <div className='scroll_content whitespace-nowrap mb-4 flex'>
                {[1, 2, 3, 4].map(
                  (num) => mediaViewList(actualView.most, num)

                )}
              </div>
              <div className='scroll_content flex whitespace-nowrap  overflow-x-auto overflow-y-hidden'>
                {[1, 2, 3].map((num) => (
                  <div key={num} className='video card no_border relative'>
                    <Image
                      src={videoBgImg}
                      className='wrapper object-contain'
                      height={400}
                      width={500}
                      alt='video'
                    />
                    <a
                      href='#'
                      // className='flex align-middle justify-center'
                      className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                      data-id='asdsad'
                    >
                      Play
                    </a>
                  </div>
                ))}
              </div>
            </div> */}
          </section>

          {/* Movie info */}
          <section className='movie-info'>
            <div className='flex justify-between'>
              <div className='facts'>
                <div className='revenue'>
                  <ul className='strong-block'>
                    {[1, 2, 3, 4].map((el) => (
                      <li key={el}>
                        <p>
                          <strong>
                            <bdi>Status</bdi>
                          </strong>
                          Released
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className='keywords w-1/3'>
                <div className='social_links'>
                  <ul className='socials flex [&>*]:mr-1'>
                    <li className='social'>
                      <a href='https://www.facebook.com/facebook_id'>FB</a>
                    </li>
                    <li className='social'>
                      <a href='https://twitter.com/twitter_id'>TW</a>
                    </li>
                    <li className='social'>
                      <a href='https://instagram.com/instagram_id'>IG</a>
                    </li>
                    <li className='social'>
                      <a href='https://www.imdb.com/title/tt10648342/imdb_id'>
                        IMDB
                      </a>
                    </li>
                    <li className='social'>
                      <a href='homepage'>HOME</a>
                    </li>
                  </ul>
                </div>
                <h4 className='bold'>Keywords</h4>
                <ul className='keyword-btn flex flex-wrap justify-start'>
                  {[1, 2, 3, 4, 5, 6].map((el) => (
                    <li key={el}>
                      <a
                        className='bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white py-0.5 px-1 border border-sky-500 hover:border-transparent rounded'
                        href='#'
                      >
                        hero
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          {/* Recommendations */}
          <section>
            <div className='menu flex'>
              <h3>Recommendations</h3>
            </div>
            <div className='recommendation_scroller mb-5'>
              <div className='scroller whitespace-nowrap  scrollbar-hide overflow-y-hidden'>
                {[1, 2, 3, 4, 5].map((el) => (
                  <div className='inline-block mr-2 group text-black' key={el}>
                    <div className='image_content w-64 h-36'>
                      <a href='/movie/438148' title='Minions: The Rise of Gru'>
                        <Image
                          src={recommImg}
                          height={370}
                          width={494}
                          alt='Minions: The Rise of Gru'
                          className='object-cover rounded'
                          layout='responsive'
                        />
                        <div className='invisible flex group-hover:visible meta bg-slate-50 relative -top-10 left-0 h-10 w-full z-10 box-border px-2.5 justify-between align-middle opacity-75'>
                          <span className='text-md inline-flex align-middle'>
                            06/29/2022
                          </span>
                          <span className='box-border'>Some info </span>
                        </div>
                      </a>
                    </div>
                    <p className='movie_title flex justify-between align-middle'>
                      <a href='/movie/438148'>Minions:The Rise of Gru</a>
                      <span>78%</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        {/* <div className='absolute aspect-w-16 aspect-h-9'>
          <iframe
            src='https://www.youtube.com/embed/4_hAjH8hK4U'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div> */}
        {/* <div
          className='video-player absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden max-w-full w-full z-50'
          style={{ paddingBottom: '56.25%' }}
        >
          <div className='bg-black'>
            <h2>Title of video</h2>
            <button>x</button>
          </div>
          <iframe
            className='absolute top-0 left-0 w-full h-full sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-4/5 sm:h-4/5'
            src='https://www.youtube.com/embed/4_hAjH8hK4U'
            frameBorder='0'
            allow='accelerometer; autoplayclipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='title of video'
          ></iframe>
        </div> */}
        <div className='video-player flex fixed flex-col h-1/2 w-full z-50 overflow-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <div className='bg-black px-1 flex justify-between'>
            <h2>Title of video</h2>
            <button>x</button>
          </div>
          <iframe
            className='top-0 left-0 w-full h-full sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-4/5 sm:h-4/5'
            src='https://www.youtube.com/embed/kFAbohd4FXk'
            frameBorder='0'
            allow='accelerometer; autoplayclipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='title of video'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Movie;

export const getServerSideProps = async (context) => {
  const query = '616037';
  // console.log(`context of movie${context.params.movie}`);

  // const promises = [
  //   fetch(`${Base_Url}/movie/${query}?api_key=${API_KEY}&language=en-US`),
  //   fetch(
  //     `${Base_Url}/movie/${query}/credits?api_key=${API_KEY}&language=en-US`
  //   ),
  // ];
  // const [resMov, resCast] = await Promise.allSettled(promises);
  // const movie = await resMov.value.json();
  // const cast = await resCast.value.json();
  // console.log(movie.status, cast.status);
  // console.log(
  //   `request is done: ${(movie, cast)}---------------------------------------`
  // );

  // const request1 = await fetch(
  //   `${Base_Url}/movie/${query}?api_key=${API_KEY}&language=en-US`
  // );
  // const res1 = await request1.json();
  // const request2 = await fetch(
  //   `${Base_Url}/movie/${query}/credits?api_key=${API_KEY}&language=en-US`
  // );
  // const res2 = await request2.json();
  // console.log(res1);
  return {
    props: {},
  };
};
