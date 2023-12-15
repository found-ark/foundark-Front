import { configureStore } from '@reduxjs/toolkit'
import harbrelReducer from './harbrel'
import ellaReducer from './ella'

export default configureStore({
  reducer: {
    harbrel:harbrelReducer,
    ella:ellaReducer,
  }
})