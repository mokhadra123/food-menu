import FilterItems from "./components/filterItems/FilterItems";
import ItemsContainer from "./components/itemsContainer/ItemsContainer";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FilterItems />
      <ItemsContainer />
    </div>
  );
}

export default App;
