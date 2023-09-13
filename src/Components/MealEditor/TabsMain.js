
import Tabs from "./Tabs";
import BreakfastEditor from "./BreakfastEditor";
import LunchEditor from "./LunchEditor";
import DinnerEditor from "./DinnerEditor";
import { useSelector } from "react-redux";
import { getActiveTab } from "../../Redux/MealSlice";


const TabsMain = ({ selectedDay, updateDay }) => {
  
  const activeTab = useSelector(getActiveTab);

  return (
    <div className="tabs_main">
      <Tabs />
      { activeTab === 0 && <BreakfastEditor selectedDay = { selectedDay } updateDay = { updateDay } />}
      { activeTab === 1 && <LunchEditor selectedDay = { selectedDay } updateDay = { updateDay } />}
      { activeTab === 2 && <DinnerEditor selectedDay = { selectedDay } updateDay = { updateDay } />}
    </div>
  )
}

export default TabsMain;