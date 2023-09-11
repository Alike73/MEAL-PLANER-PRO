
import { createSlice } from '@reduxjs/toolkit';

export const mealSlice = createSlice({
    name: 'mealItems',

    initialState: {
        activeTab: 0,
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload;
        }
    },
    
});

export const getActiveTab = state => state.mealItems.activeTab;
export const { setActiveTab } = mealSlice.actions;
export default mealSlice.reducer;