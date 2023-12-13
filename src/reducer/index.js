import { configureStore } from '@reduxjs/toolkit'
import harbrelReducer from './harbrel'

export default configureStore({
  reducer: {
    harbrel:harbrelReducer
  }
})