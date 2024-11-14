import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountriesType } from "../components/CountreisList";

interface SavedType {
    saved:Array<CountriesType>
}

const initialState:SavedType ={
    saved:[],
}


export const SavedSlice = createSlice({
    name: "saved",
        initialState,
        reducers: {
           addSaves:(state, action:PayloadAction<CountriesType>):void => {
            const index:number = state.saved.findIndex((item:CountriesType) => item.name === action.payload.name);
            if(index === -1) {
                state.saved.push(action.payload);
            }else{
                state.saved.splice(index,1);
            }
           }
        }
});

export const {addSaves} = SavedSlice.actions;
