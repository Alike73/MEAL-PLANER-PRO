
const LunchMeal = ({ mealForLunch, ingredientsForLunch }) => {

  return (
    <div className="lunch_meal">
      <h6 className="m-0">For lunch today is:</h6>
      <p className="text_one">
        { mealForLunch }
      </p>
      <h6 className="m-0">Lunch ingredients you need:</h6>
      <p className="text_two">
        { ingredientsForLunch }
      </p>
    </div>
  )
}

export default LunchMeal;