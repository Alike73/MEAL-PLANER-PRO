


const DinnerEditor = ({ selectedDay, updateDay }) => {

  const editMyDinnerMeal = (dinner_meal, value) => {
    updateDay({
      ...selectedDay,
      [dinner_meal]: value
    })
  };

  const editMyDinnerIngredients = (dinner_ingredients, value) => {
    updateDay({
      ...selectedDay,
      [dinner_ingredients]: value
    })
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="mealForDinner" className="form-label">Dinner meal</label>
        <textarea 
          className="dinner_meal" 
          id="mealForDinner" 
          rows="3"
          placeholder="Type your dinner menu"
          value={ selectedDay.mealForDinner }
          onChange={ (e) => editMyDinnerMeal('mealForDinner', e.target.value)} 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="ingredientsForDinner" className="form-label">Dinner meal ingredients</label>
        <textarea 
          className="dinner_ingredients" 
          id="ingredientsForDinner" 
          rows="3"
          placeholder="Type ingredients you need"
          value={ selectedDay.ingredientsForDinner }
          onChange={ (e) => editMyDinnerIngredients('ingredientsForDinner', e.target.value)}  
        />
      </div>
    </div>
  )
}

export default DinnerEditor;