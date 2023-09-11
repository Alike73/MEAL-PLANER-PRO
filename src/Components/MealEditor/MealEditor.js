import TabsMain from "./TabsMain";


const MealEditor = () => {

  return (

    <div className="col-md-10 mx-auto col-lg-5">
      <div className="tag-container">
        <div className="tag-inner">

          <div className="mb-3">
            <label htmlFor="day_of_the_week" className="form-label">Day of the week...</label>
            <input type="text" className="form-control" id="day_of_the_week" placeholder="Type the day of the week..." />
          </div>

          <TabsMain />

        </div>
      </div>
    </div>
  )
}

export default MealEditor;