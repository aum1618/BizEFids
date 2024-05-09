import {createSlice} from '@reduxjs/toolkit';
import {keys} from '../../shared/constants/keys';
import config from '../../shared/constants/config';

const initialState = {
  locale: config.languages.en,
  theme: config.themes.light,
  showOnboarding: true,
  authenticated: false,
};

const appConfigSlice = createSlice({
  name: keys.appConfig,
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.locale = action.payload;
    },
    toggleTheme: state => {
      state.theme =
        state.theme === config.themes.light
          ? config.themes.dark
          : config.themes.light;
    },
    completeOnboarding: state => {
      state.showOnboarding = !state.showOnboarding;
    },
    login: state => {
      state.authenticated = true;
    },
    logout: state => {
      state.authenticated = false;
    },
  },
});

export const {setLanguage, toggleTheme, completeOnboarding, login, logout} =
  appConfigSlice.actions;
export default appConfigSlice.reducer;
