import {createSlice} from "@reduxjs/toolkit";
import type {WeatherInfo} from "../../utils/type";

const initialState: WeatherInfo = {
    country: '',
    city: '',
    temp: 0,
    pressure: 0,
    sunset: 0
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setWeather: (_state, action) => action.payload
    }
})

export const {setWeather} = weatherSlice.actions;
export default weatherSlice.reducer;