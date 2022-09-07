import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface MediaState {
  mediaType: string;
  trendType: string;
  discoverType: string;
  url: string;
  videoTitle: string;
  shown: boolean;
}

const initialState: MediaState = {
  mediaType: 'most',
  trendType: 'day',
  discoverType: 'movie',
  url: '',
  videoTitle: '',
  shown: false,
};

export const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    changeMedia: (state, action: PayloadAction<string>) => {
      state.mediaType = action.payload;
    },
    changeTrend: (state, action: PayloadAction<string>) => {
      state.trendType = action.payload;
    },
    changeDiscover: (state, action: PayloadAction<string>) => {
      state.discoverType = action.payload;
    },

    openVideo: (
      state,
      { payload }: PayloadAction<{ url: string; title: string }>
    ) => {
      state.url = payload.url;
      state.videoTitle = payload.title;
      state.shown = true;
    },
    closeVideo: (state) => {
      state.shown = false;
      state.url = '';
      state.videoTitle = '';
      // window.frames[0].stop();
    },
  },
});

export const {
  changeMedia,
  changeTrend,
  changeDiscover,
  openVideo,
  closeVideo,
} = mediaSlice.actions;
export const mediaValue = (state: RootState) => state.media.mediaType;
export default mediaSlice.reducer;
