import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../features/toggleTheme/toggleThemeSlice";

export default configureStore({
  reducer: {
    toggleTheme: toggleReducer,
  },
});
