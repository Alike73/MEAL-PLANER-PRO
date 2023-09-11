import TabItem from "./TabItem";


const Tabs = () => {

  return (

    <div className="d-flex gap-2 justify-content-center py-2">
      {
        ['Breakfast', 'Lunch', 'Dinner'].map((tab, index) => (
            <TabItem key={ index } tab = { tab } index={ index } />
            ))
      }
    </div>
  )
}

export default Tabs;