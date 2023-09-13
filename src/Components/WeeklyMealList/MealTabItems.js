import { useDispatch, useSelector } from "react-redux";
import { getActiveTab, setActiveTab } from "../../Redux/MealSlice";


const MealTabItems = ({ tab, index, showActiveDayTabs }) => {

  const activeTab = useSelector(getActiveTab);
  const dispatch = useDispatch();
  const isActive = activeTab === index;

  return (
    <button
      className={`btn btn-sm rounded-pill px-3 ${
        showActiveDayTabs ? (isActive ? 'btn-danger' : 'btn-outline-secondary') : 'btn-secondary'
      }`}
      type="button"
      value = { index } 
      onClick={ () => dispatch(setActiveTab(index))}
      >
      { tab }
    </button>
  )
}

export default MealTabItems;

