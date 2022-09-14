import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pronun: [
        {
          id: 1,
          word: "Abandon",
        },
        {
          id: 2,
          word: "Ability",
        },
        {
          id: 3,
          word: "Able",
        },
        {
          id: 4,
          word: "Abortion",
        },
        {
          id: 5,
          word: "About",
        },
        {
          id: 6,
          word: "Above",
        },
      ],
}

export const pronunSlice = createSlice({
    name: "pronun",
    initialState,
    reducers: {
        addPronun: (state, action) => {
            state.pronun.push({
              id: state.pronun.length + 1,
              word: action.payload.word
            });
        }
    }
})