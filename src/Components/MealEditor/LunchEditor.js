


const LunchEditor = ({ selectedDay, updateDay }) => {

  const editMyLunchMeal = (lunch_meal, value) => {
    updateDay({
      ...selectedDay,
      [lunch_meal]: value
    })
  };

  const editMyLunchIngredients = (lunch_ingredients, value) => {
    updateDay({
      ...selectedDay,
      [lunch_ingredients]: value
    })
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="mealForLunch" className="form-label">Lunch meal</label>
        <textarea 
          className="lunch_meal" 
          id="mealForLunch" 
          rows="3"
          placeholder="Type your lunch menu"  
          value={ selectedDay.mealForLunch }
          onChange={ (e) => editMyLunchMeal('mealForLunch', e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ingredientsForLunch" className="form-label">Lunch meal ingredients</label>
        <textarea 
          className="lunch_ingredients" 
          id="ingredientsForLunch" 
          rows="3"
          placeholder="Type ingredients you need"
          value={ selectedDay.ingredientsForLunch }
          onChange={ (e) => editMyLunchIngredients('ingredientsForLunch', e.target.value)} 
        />
      </div>
    </div>
  )
}

export default LunchEditor;