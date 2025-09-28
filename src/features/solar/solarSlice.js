import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    solars: [
        {
            id: 'solar-panels',
            title: 'Solar Panels',
            description: 'Use Solar Energy to Power Your Home and Charge Your Tesla',
            backgroundImg: 'solar-panel.jpg',
            leftBtnText: 'Order Now',
            rightBtnText: 'Learn More',
        },
        {
            id: 'solar-roof',
            title: 'Solar Roof',
            description: 'Generate Clean Energy With Your Roof',
            backgroundImg: 'solar-roof.jpg',
            leftBtnText: 'Order Now',
            rightBtnText: 'Learn More',
        },
        {
            id: 'powerwall',
            title: 'Powerwall',
            description: 'Keep Your Lights On During Outages',
            backgroundImg: 'powerwall.jpg',
            leftBtnText: 'Order Now',
            rightBtnText: 'Learn More',
        },
        {
            id: 'megapack',
            title: 'Megapack',
            description: 'Massive Batteries for Massive Energy Support',
            backgroundImg: 'megapack.jpg',
            rightBtnText: 'Learn More',
        },
    ]
}

const solarSlice = createSlice({
    name: "solar",
    initialState,
    reducers: {},
})

export const selectSolar = state => state.solar.solars

export default solarSlice.reducer