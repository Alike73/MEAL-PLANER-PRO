import MealEditor from "../MealEditor/MealEditor";
import WeeklyMealListMain from "../WeeklyMealList/WeeklyMealListMain";



const Main = () => {

  return (

    <div className="main">
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <WeeklyMealListMain />
          <MealEditor />
        </div>
      </div>
    </div>
  )
}

export default Main;