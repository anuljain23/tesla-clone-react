import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: [
        {
            id: 'cybertruck',
            title: 'Cybertruck',
            description: '0% APR with FSD (Supervised) Purchase Ends September 30',
            backgroundImg: 'cybertruck.jpg',
            leftBtnText: 'Custom Order',
            rightBtnText: 'Existing Inventory',
            tag: 'Utility Truck',
        },
        {
            id: 'model-s',
            title: 'Model S',
            description: 'Now Includes Luxe Package With FSD (Supervised) and More',
            backgroundImg: 'model-s.jpg',
            leftBtnText: 'Custom Order',
            rightBtnText: 'Existing Inventory',
            tag: 'Luxury Sedan',
        },
        {
            id: 'model-y',
            title: 'Model Y',
            description: 'Now Includes Luxe Package With FSD (Supervised) and More',
            backgroundImg: 'model-y.jpg',
            leftBtnText: 'Custom Order',
            rightBtnText: 'Existing Inventory',
            tag: 'Midsize SUV',
        },
        {
            id: 'model-3',
            title: 'Model 3',
            description: 'Lease From $ 349/mo',
            backgroundImg: 'model-3.jpg',
            leftBtnText: 'Custom Order',
            rightBtnText: 'Existing Inventory',
            tag: 'Sports Sedan',
        },
        {
            id: 'model-x',
            title: 'Model X',
            description: '3.99% APR Available',
            backgroundImg: 'model-x.jpg',
            leftBtnText: 'Custom Order',
            rightBtnText: 'Existing Inventory',
            tag: 'Luxury SUV',
        }
    ]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {},
})

export const selectCars = state => state.car.cars

export default carSlice.reducer