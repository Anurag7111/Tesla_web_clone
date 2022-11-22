import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y"],
    menuBar: ["Existing Inventory", "Used Inventory", "Trade-in", "Test Drive", "Insurance", "Cybertruck", "Roadaster", "Semi", "Charging", "Powewall", "Commercial Energy", "Utilities", "Find us", "Support", "Investor Relations"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars
export const selectMenu = state => state.car.menuBar

export default carSlice.reducer