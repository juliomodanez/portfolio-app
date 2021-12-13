import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Card from "./Components/Card";
import SideMenu from "./Components/SideMenu";

function App() {
  return (
    <Router>
      <div className="flex">
        <SideMenu />

        <Routes>
          <Route path="/" exact element={<Card props={""} />} />
          <Route
            path="/esculturas"
            exact
            element={<Card props={"escultura"} />}
          />
          <Route path="/pinturas" exact element={<Card props={"pintura"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
