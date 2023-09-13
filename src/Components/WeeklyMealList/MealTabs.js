import MealTabItems from "./MealTabItems";

const MealTabs = ({ showActiveDayTabs }) => {

  return (
    
    <div className="d-flex gap-2 justify-content-center py-2 mb-3">
      {
        ['Breakfast', 'Lunch', 'Dinner'].map((tab, index) => (
            <MealTabItems key={ index } tab = { tab } index={ index } showActiveDayTabs = { showActiveDayTabs } />
            ))
      }
    </div>
  )
}

export default MealTabs;