import { useEffect, useRef, useState } from "react";
import MealEditor from "../MealEditor/MealEditor";
import WeeklyMealListMain from "../WeeklyMealList/WeeklyMealListMain";
import uuid from "react-uuid";
import { useSelector } from "react-redux";
import { getSelectedDay } from "../../Redux/MealSlice";

const Main = () => {

  const [mealPlans, setMealPlans] = useState(
    localStorage.mealPlans 
      ? JSON.parse(localStorage.mealPlans) 
      : []
    );

  const selectedDay = useSelector(getSelectedDay);
  const selectedDayRef = useRef(null);
  

  useEffect(() => {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans]);

  const addMeal = () => {
    const newMeal = {
      id: uuid(),
      title: 'Today is',
      mealForBreakfast: '',
      mealForLunch: '',
      mealForDinner: '',
      ingredientsForBreakfast: '',
      ingredientsForLunch: '',
      ingredientsForDinner: '',
    }
    setMealPlans([newMeal, ...mealPlans])
  };

  const scrollToBottom = () => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    });
  };

  const deleteDay = (mealId) => {
    setMealPlans(mealPlans.filter(({id}) => id !== mealId))
  };

  const updateDay = (myUpdatedMeal) => {
    const updatedMeals = mealPlans.map((mealPlan) => {
      if(mealPlan.id === myUpdatedMeal.id) {
        return myUpdatedMeal;
      }
      return mealPlan;
    })
    setMealPlans(updatedMeals)
  };

  const getActiveMeal = () => {
    return mealPlans.find(({id}) => id === selectedDay)
  };

  const handleScrollToSelectedDay = () => {
    if (selectedDayRef && selectedDayRef.current) {
      selectedDayRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div className="main">
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-end g-lg-5 py-5">
          <WeeklyMealListMain
            selectedDayRef = { selectedDayRef }
            addMeal = { addMeal } 
            mealPlans = { mealPlans } 
            deleteDay = { deleteDay }
            scrollToBottom = { scrollToBottom }
          />
          <MealEditor 
            selectedDay = { getActiveMeal() } 
            updateDay = { updateDay }
            viewCard = { handleScrollToSelectedDay } 
          />
        </div>
      </div>
    </div>
  )
}

export default Main;