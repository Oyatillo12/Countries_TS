import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountriesType } from "../components/CountreisList";

interface likedType {
    liked:Array<CountriesType>
}

const initialState:likedType ={
    liked:[],
}


export const LikeSLice = createSlice({
    name: "likes",
        initialState,
        reducers: {
           addLikes:(state, action:PayloadAction<CountriesType>):void => {
            const index:number = state.liked.findIndex((item:CountriesType) => item.name === action.payload.name);
            
            if(index === -1) {
                state.liked.push(action.payload);
            }else{
                state.liked.splice(index,1);
            }
           }
        }
});

export const {addLikes} = LikeSLice.actions;
