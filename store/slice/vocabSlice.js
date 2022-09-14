import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vocab: [
        {
          id: 1,
          word: "Abandon",
          meaning: "Ditinggalkan",
          example: "She abadon her kid"
        },
        {
          id: 2,
          word: "Ability",
          meaning: "Kemampuan",
          example: "She gave her ability"
        },
        {
          id: 3,
          word: "Able",
          meaning: "Bisa",
          example: "She able to help"
        },
        {
          id: 4,
          word: "Abortion",
          meaning: "Mengugurkan",
          example: "She had abortion"
        },
        {
          id: 5,
          word: "About",
          meaning: "Tentang",
          example: "She about to sleep"
        },
        {
          id: 6,
          word: "Above",
          meaning: "Diatas",
          example: "She above you"
        },
      ],
}

export const vocabSlice = createSlice({
    name: "vocab",
    initialState,
    reducers: {
        addVocab: (state, action) => {
            state.vocab.push({
              id: state.vocab.length + 1,
              ...action.payload
            });
        }
    }
})