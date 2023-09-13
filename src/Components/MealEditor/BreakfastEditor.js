

const BreakfastEditor = ({ selectedDay, updateDay }) => {

  const editMyBreakfastMeal = (my_breakfast_meal, value) => {
    updateDay({
      ...selectedDay,
      [my_breakfast_meal]: value
    })
  };

  const editMyBreakfastIngredients = (my_breakfast_ingredients, value) => {
    updateDay({
      ...selectedDay,
      [my_breakfast_ingredients]: value
    })
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="mealForBreakfast" className="form-label">Breakfast meal</label>
        <textarea 
          className="my_breakfast_meal" 
          id="mealForBreakfast" 
          rows="3"
          placeholder="Type your breakfast menu" 
          value={ selectedDay.mealForBreakfast }
          onChange={ (e) => editMyBreakfastMeal('mealForBreakfast', e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ingredientsForBreakfast" className="form-label">Breakfast meal ingredients</label>
        <textarea 
          className="my_breakfast_ingredients" 
          id="ingredientsForBreakfast" 
          rows="3"
          placeholder="Type ingredients you need"
          value={ selectedDay.ingredientsForBreakfast }
          onChange={ (e) => editMyBreakfastIngredients('ingredientsForBreakfast', e.target.value)} 
        />
      </div>
    </div>
  )
}

export default BreakfastEditor;