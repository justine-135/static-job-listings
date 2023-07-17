import data from "./data.json";
import Header from "./Header";
import Listings from "./Listings";

function App() {
  return (
    <div className="App ">
      <Header />
      <Listings data={data} />
    </div>
  );
}

export default App;
