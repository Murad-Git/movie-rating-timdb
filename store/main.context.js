import { createContext, useState } from 'react';

// default state
const contextDefaultValues = {
  video: {
    url: '',
    title: '',
    shown: false,
  },
  openVideo: () => {},
  closeVideo: () => {},
  mediaContent: {
    media: {},
    title: 'most',
  },
  setMediaContent: () => {},
};
// variables
export const MainContext = createContext(contextDefaultValues);

// provider recuder
const MainProvider = ({ children }) => {
  const [videoState, setVideoState] = useState(contextDefaultValues.video);
  const [mediaContent, setMediaState] = useState(
    contextDefaultValues.mediaContent
  );

  const openVideo = (url, title) => {
    setVideoState((prevState) => ({ ...prevState, url, title, shown: true }));
  };

  const closeVideo = () => {
    setVideoState((prevState) => ({ ...prevState, shown: false }));
  };
  const setMediaContent = (media, title) => {
    // setMediaState({ ...prevState, media, title });
    // console.log(
    //   `main.context: ${JSON.stringify(
    //     media,
    //     null,
    //     4
    //   )}-------------------------------`
    // );
    // setMediaState((prevState) => ({
    //   ...prevState,
    //   title,
    // }));
    setMediaState((prevState) => ({
      ...prevState,
      media: {
        ...prevState.media,
        ...media,
      },
      title: title,
    }));

  const contextValue = {
    video: videoState,
    openVideo,
    closeVideo,
    mediaContent,
    setMediaContent,
  };
  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};

export default MainProvider;
