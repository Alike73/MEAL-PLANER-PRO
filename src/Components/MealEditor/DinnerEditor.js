


const DinnerEditor = () => {

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="dinner_meal" className="form-label">Dinner meal</label>
        <textarea className="form-control" id="dinner_meal" rows="3" />
      </div>
      <div className="mb-3">
        <label htmlFor="dinner_ingredients" className="form-label">Dinner meal ingredients</label>
        <textarea className="form-control" id="dinner_ingredients" rows="3" />
      </div>
    </div>
  )
}

export default DinnerEditor;