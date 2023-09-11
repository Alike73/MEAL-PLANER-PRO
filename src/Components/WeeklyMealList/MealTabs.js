import MealTabItems from "./MealTabItems";


const MealTabs = () => {

  return (
    <div className="d-flex gap-2 justify-content-center py-2">
      {
        ['Breakfast', 'Lunch', 'Dinner'].map((tab, index) => (
            <MealTabItems key={ index } tab = { tab } index={ index } />
            ))
      }
    </div>
  )
}

export default MealTabs;