import data from "./data.json";
import Header from "./header";
import Listings from "./Listings";

function App() {
  return (
    <div className="App bg-lgcBg ">
      <Header />
      <Listings data={data} />
    </div>
  );
}

export default App;
