import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  hp: {0:14,12:3,1:3,11:3,3:3,9:3,5:3,7:3,6:3},
  time: {0:100,12:100,1:100,11:100,3:100,9:100,5:100,7:100,6:100},
  totalTime: 65,
  totalTimeFlag: false,
  yellowCount: 0,
  blueCount: 0,
}

const harbrelSlice = createSlice({
  name: 'harbrel',
  initialState,
  reducers: {
    //action명:(state,action)=>{state.state명으로 접근, action.payload로 접근}
    setHp:(state,action)=>{
      const { index, value } = action.payload;
      state.hp[index] = value;
    },
    attack:(state,action)=>{
      const { index, value } = action.payload;
      state.hp[index] = Math.max(state.hp[index]-value,0);
    },
    //각 섹터 시간
    setTime:(state,action)=>{
      const { index, value } = action.payload;
      state.time[index]=value;
    },
    countTime:(state,action)=>{
      const { index } = action.payload;
      state.time[index]-=1;
    },
    //전체 시간 리셋
    setTotaltime:(state,action)=>{
      const { plusTime } = action.payload;
      if (plusTime === 0) {
        state.totalTime = 60;
      } else {
        state.totalTime += plusTime;
      }
    },
    timeStart:(state)=>{
      state.totalTimeFlag = !state.totalTimeFlag;
    },
    //전체 노랑떨어진 갯수, 파랑 떨어진 갯수
    addYellowCount:(state)=>{
      state.yellowCount+=1;
    },
    addBlueCount:(state)=>{
      state.blueCount+=1;
    }
  }
})

export const { setHp, attack, setTime, countTime, setTotaltime, timeStart, addYellowCount, addBlueCount } = harbrelSlice.actions
export default harbrelSlice.reducer