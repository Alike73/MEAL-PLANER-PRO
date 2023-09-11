

const BreakfastEditor = () => {

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="breakfast_meal" className="form-label">Breakfast meal</label>
        <textarea className="form-control" id="breakfast_meal" rows="3" />
      </div>
      <div className="mb-3">
        <label htmlFor="breakfast_ingredients" className="form-label">Breakfast meal ingredients</label>
        <textarea className="form-control" id="breakfast_ingredients" rows="3" />
      </div>
    </div>
  )
}

export default BreakfastEditor;