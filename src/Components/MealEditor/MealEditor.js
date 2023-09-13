
import { useDispatch, useSelector } from "react-redux";
import MealBanner from "./MealBanner";
import TabsMain from "./TabsMain";
import { getShowMeCardBtn, setShowMeCardBtn } from "../../Redux/MealSlice";
import { useEffect } from "react";

const MealEditor = ({ selectedDay, updateDay, viewCard }) => {
  

  const showMeCardBtn = useSelector(getShowMeCardBtn);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
          dispatch(setShowMeCardBtn(true))
        } else {
          dispatch(setShowMeCardBtn(false));
        }
    });
}, [dispatch]);

  const editMyMeal = (my_input, value) => {
    updateDay({
      ...selectedDay,
      [my_input]: value
    })
  }

  if(!selectedDay) return <MealBanner />

  return (
    <div className="col-md-10 mx-auto col-lg-5 meal_editor">
      <div className="tag-container">
        <div className="tag-inner">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Day of the week...</label>
            <input
              type="text" 
              className="form-control my_input" 
              id="title" 
              placeholder="Type the day of the week..."
              value={ selectedDay.title }
              onChange={ (e) => editMyMeal('title', e.target.value)} 
            />
          </div>
          <TabsMain 
            selectedDay = { selectedDay } 
            updateDay = { updateDay } 
          />
          { showMeCardBtn && (
            <button
              className="btn btn-sm btn-outline-warning rounded-pill px-3"
              type="button"
              onClick={viewCard}
              >
                Show me card
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MealEditor;