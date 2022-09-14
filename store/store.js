import { configureStore } from "@reduxjs/toolkit";
import { vocabSlice } from "./slice/vocabSlice";
import { pronunSlice } from "./slice/PronunSlice"

export const store = configureStore({
    reducer: {
        vocab: vocabSlice.reducer,
        pronun: pronunSlice.reducer
    }
})

export const { addVocab } = vocabSlice.actions;
export const { addPronun } = pronunSlice.actions;