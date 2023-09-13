
const BreakfastMeal = ({ mealForBreakfast, ingredientsForBreakfast }) => {

  return (
    <div className="breakfast_meal">
      <h6 className="m-0">For breakfast today is:</h6>
      <p className="text_one">
        { mealForBreakfast }
      </p>
      <h6 className="m-0">Breakfast ingredients you need:</h6>
      <p className="text_two">
        { ingredientsForBreakfast }
      </p>
    </div>
  )
}

export default BreakfastMeal;