import { createSlice } from "@reduxjs/toolkit";



export const themeList = {
    light: "light",
    dark: "dark",
  };
  

  const lightTheme = themeList.light
  const darkTheme = themeList.dark

  const getInitialTheme = () => {
    const theme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (theme) {
      return theme;
    }
    if (!theme) {
      if (prefersDark) {
        return darkTheme;
      }
      return lightTheme;
    }
  };
  
  const initialState = {
    theme: getInitialTheme(),
  };
  
  const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
      toggleTheme: (state) => {
        const newTheme = state.theme === lightTheme ? darkTheme : lightTheme;
        localStorage.setItem("theme", newTheme);
        state.theme = newTheme;
      },
    },
  });
  
  export const { toggleTheme } = themeSlice.actions;
  
  export default themeSlice.reducer;