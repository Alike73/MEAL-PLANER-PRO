import { useSelector } from "react-redux";
import MealTabs from "./MealTabs";
import { getActiveTab } from "../../Redux/MealSlice";
import BreakfastMeal from "./BreakfastMeal";
import LunchMeal from "./LunchMeal";
import DinnerMeal from "./DinnerMeal";


const WeeklyMealListMain = () => {


  const activeTab = useSelector(getActiveTab);

  return (

    <div className="col-lg-7 text-center text-lg-start">
      <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
        Vertically centered hero sign-up form
      </h1>
      <p className="col-lg-10 fs-4">
        Below is an example form built entirely with Bootstrap’s form controls. 
      </p>
      <button type="button" className="Btn">Add meal plan</button>
      
      
      <div className="card shadow-sm">
        <div className="card-body">
          <h5>Day of the week...</h5>
          
            <MealTabs />

            { activeTab === 0 && <BreakfastMeal />}
            { activeTab === 1 && <LunchMeal />}
            { activeTab === 2 && <DinnerMeal />}
          
          <div className="pt-3 mt-3">
            <button 
              type="button" 
              className="btn btn-sm btn-outline-secondary"
              
              >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeeklyMealListMain;