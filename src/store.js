import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './Redux/reducer';

export default configureStore({
  reducer: {
    data: rootReducer,
  },
});
