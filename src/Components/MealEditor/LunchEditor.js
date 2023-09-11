


const LunchEditor = () => {

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="lunch_meal" className="form-label">Lunch meal</label>
        <textarea className="form-control" id="lunch_meal" rows="3" />
      </div>
      <div className="mb-3">
        <label htmlFor="lunch_ingredients" className="form-label">Lunch meal ingredients</label>
        <textarea className="form-control" id="lunch_ingredients" rows="3" />
      </div>
    </div>
  )
}

export default LunchEditor;