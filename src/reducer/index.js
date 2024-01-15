import { configureStore } from "@reduxjs/toolkit";
import harbrelReducer from "./harbrel";
import ellaReducer from "./ella";
import choReducer from "./cho";

export default configureStore({
  reducer: {
    harbrel: harbrelReducer,
    ella: ellaReducer,
    cho: choReducer,
  },
});
