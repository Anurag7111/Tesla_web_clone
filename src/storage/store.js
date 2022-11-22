import {configureStore} from '@reduxjs/toolkit';
import carReducer from "../Features/car/carSlice"

const store = configureStore({
    reducer: {
        car: carReducer
    },
});

export default store;