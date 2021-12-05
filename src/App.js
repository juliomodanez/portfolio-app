import "./index.css";
import SideMenu from "./Components/SideMenu";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

function App() {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <div className="flex">
        <SideMenu />
        <div>
          <p className="text-center text-gray-400">Clique em um card para saber mais sobre a obra!</p>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
