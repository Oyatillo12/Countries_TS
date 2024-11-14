import { configureStore } from "@reduxjs/toolkit";
import { LikeSLice } from "./LikeSlice";
import { SavedSlice } from "./SavedSlice";


export const store = configureStore({
    reducer: {
        likedArray: LikeSLice.reducer,
        savedArray: SavedSlice.reducer,
    },

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

