
import { configureStore } from '@reduxjs/toolkit';
import mealItems from './MealSlice';

export default configureStore({
    reducer: {
        mealItems: mealItems
    }
})