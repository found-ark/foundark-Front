import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: true,
  hanText: "",
  ellaText: "",
}

const ellaSlice = createSlice({
  name: 'ella',
  initialState,
  reducers: {
    open:(state)=>{
      state.isOpen = !state.isOpen;
    },
    hanInput:(state,action)=>{
      const {value} = action.payload;
      state.hanText = value;
    },
    ellaInput:(state,action)=>{
      const {value} = action.payload;
      state.ellaText = value;
    }
  }
})

export const { open } = ellaSlice.actions
export default ellaSlice.reducer