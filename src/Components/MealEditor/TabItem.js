import { useDispatch, useSelector } from "react-redux";
import { getActiveTab, setActiveTab } from "../../Redux/MealSlice";


const TabItem = ({ tab, index }) => {

  const activeTab = useSelector(getActiveTab);
  const dispatch = useDispatch();

  const isActive = activeTab === index;

  return (
    <button 
      className={ isActive 
        ? 'btn btn-sm btn-danger rounded-pill px-3' 
        : 'btn btn-sm btn-success rounded-pill px-3'
      } 
      type="button"
      value = { index } 
      onClick={ () => dispatch(setActiveTab(index))}
      >
      { tab }
    </button>
  )
}

export default TabItem;