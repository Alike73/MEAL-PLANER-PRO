import { useDispatch, useSelector } from "react-redux";
import MealTabs from "./MealTabs";
import { getActiveTab, getSelectedDay, setSelectedDay } from "../../Redux/MealSlice";
import BreakfastMeal from "./BreakfastMeal";
import LunchMeal from "./LunchMeal";
import DinnerMeal from "./DinnerMeal";


const WeeklyMealListMain = ({ addMeal, mealPlans, deleteDay, scrollToBottom, selectedDayRef }) => {

  const activeTab = useSelector(getActiveTab);
  const selectedDay = useSelector(getSelectedDay);
  const dispatch = useDispatch();

  return (
    <div className="col-lg-7 text-center text-lg-start">
      <h1>
        Meal Planer
      </h1>
      <button 
        type="button" 
        className="Btn"
        onClick={ addMeal }
        >
        Add meal plan
      </button>
      <div>
        { mealPlans.map(({ 
          id, title, mealForBreakfast, mealForLunch, mealForDinner, 
          ingredientsForBreakfast, ingredientsForLunch, ingredientsForDinner }) => (
          <div 
          key={ id }
          ref={id === selectedDay ? selectedDayRef : null} 
          className={ `card mt-5 ${id === selectedDay ? 'selected tilt-in-bottom-1' : 'default'}` } 
          onClick={() => {
            dispatch(setSelectedDay(id));
            scrollToBottom();
          }}
          >

            <h2 className={id === selectedDay ? 'hideClickMe' : 'clickMe'}>
              Click me
            </h2>
            <div className="card-body">
              <h5 className={id === selectedDay ? 'selectedTitle' : 'defaultTitle'}>
              <span>
                { title }
              </span>
              </h5>

              <MealTabs showActiveDayTabs = { id === selectedDay } />
              { id === selectedDay && (
                <>
                  { activeTab === 0 && <BreakfastMeal 
                    mealForBreakfast = { mealForBreakfast } 
                    ingredientsForBreakfast = { ingredientsForBreakfast } 
                    />
                  }
                </>
              )}

              { id === selectedDay && (
                <>
                  { activeTab === 1 && <LunchMeal 
                    mealForLunch = { mealForLunch } 
                    ingredientsForLunch = { ingredientsForLunch } 
                    />
                  }
                </>
              )}

              { id === selectedDay && (
                <>
                  { activeTab === 2 && <DinnerMeal 
                    mealForDinner = { mealForDinner } 
                    ingredientsForDinner = { ingredientsForDinner }  
                    />
                  }
                </>
              )}
              <div className="pt-3 mt-3">
                <button 
                  type="button" 
                  className="btn btn-sm btn-outline-danger rounded-pill px-3"
                  onClick={ () => deleteDay(id)}
                  >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeeklyMealListMain;