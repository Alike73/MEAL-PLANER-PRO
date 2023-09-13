
const DinnerMeal = ({ mealForDinner, ingredientsForDinner }) => {

  return (
    <div>
      <h6 className="m-0">For dinner today is:</h6>
      <p className="text_one">
        { mealForDinner }
      </p>
      <h6 className="m-0">Dinner ingredients you need:</h6>
      <p className="text_two">
        { ingredientsForDinner }
      </p>
    </div>
  )
}

export default DinnerMeal;