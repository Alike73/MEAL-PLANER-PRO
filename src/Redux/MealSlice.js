
import { createSlice } from '@reduxjs/toolkit';

export const mealSlice = createSlice({
    name: 'mealItems',

    initialState: {
        activeTab: 0,
        selectedDay: false,
        showMeCardBtn: false
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        },
        setSelectedDay: (state, action) => {
            state.selectedDay = action.payload;
        },
        setShowMeCardBtn: (state, action) => {
            state.showMeCardBtn = action.payload;
        },
    },
    
});

export const getActiveTab = state => state.mealItems.activeTab;
export const getSelectedDay = state => state.mealItems.selectedDay;
export const getShowMeCardBtn = state => state.mealItems.showMeCardBtn;
export const { setActiveTab, setSelectedDay, setShowMeCardBtn } = mealSlice.actions;
export default mealSlice.reducer;