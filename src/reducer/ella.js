import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: true,
  hanTextStr:"",
  timer:undefined,
  hanText: [[]],//한글을 입력한것
  ellaText: [[]],//엘라어키보드로 입력한것
}

const ellaSlice = createSlice({
  name: 'ella',
  initialState,
  reducers: {
    clear:(state)=>{
      state.hanTextStr="";
      state.hanText=[[]];
      state.ellaText=[[]];
      clearTimeout(state.timer);
    },
    open:(state)=>{
      state.isOpen = !state.isOpen;
    },
    hanTextInput:(state,action)=>{
      const {value} = action.payload;
      state.hanTextStr = value;
    },
    hanInput:(state,action)=>{
      const {value} = action.payload;
      state.hanText = value;
    },
    ellaInputAdd:(state,action)=>{
      const {value} = action.payload;
      state.ellaText[state.ellaText.length-1].push(value);
    },
    ellaInputNewline:(state)=>{
      state.ellaText.push([]);
    },
    ellaInputDel:(state)=>{
      if(state.ellaText[state.ellaText.length-1].pop()===undefined){
        if(state.ellaText.length>1){
            //현재 줄 삭제
            state.ellaText.pop()
            //다음줄 한글자 삭제
            state.ellaText[state.ellaText.length-1].pop()
        }
      }
    },
    ellaInputClear:(state)=>{
      state.ellaText=[[]];
    },
    setTimer:(state,action)=>{
      const { timer } = action.payload;
      state.timer = timer;
    }
  }
})

export const { open, clear, hanTextInput, hanInput, ellaInputAdd, ellaInputNewline, ellaInputDel, ellaInputClear, setTimer } = ellaSlice.actions
export default ellaSlice.reducer