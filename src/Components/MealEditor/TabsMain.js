
import Tabs from "./Tabs";
import BreakfastEditor from "./BreakfastEditor";
import LunchEditor from "./LunchEditor";
import DinnerEditor from "./DinnerEditor";
import { useSelector } from "react-redux";
import { getActiveTab } from "../../Redux/MealSlice";



const TabsMain = () => {

  // const [activeTab, setActiveTab] = useState(0);
  const activeTab = useSelector(getActiveTab);
  

  return (

    <div className="tabs_main">
      <Tabs />
      { activeTab === 0 && <BreakfastEditor />}
      { activeTab === 1 && <LunchEditor />}
      { activeTab === 2 && <DinnerEditor />}
    </div>
  )
}

export default TabsMain;