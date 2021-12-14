import "./index.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import images from "./Content.js";

import SideMenu from "./Components/SideMenu";
import Card from "./Components/Card";
import Bio from "./Components/Bio";

function App() {
  const [cards, setCards] = useState(images);
  const tags = ["all", ...new Set(images.map((image) => image.tags))];

  const filter = (tag) => {
    if (tag === "all") {
      setCards(images);
      return;
    }
    setCards(images.filter((item) => item.tags === tag));
  };
  return (
    <Router>
      <div className="flex">
        <SideMenu handleClick={filter} />

        <Routes>
          <Route
            path="/"
            exact
            element={<Card categories={tags} allcards={cards} />}
          />
          <Route
            path="/esculturas"
            exact
            element={<Card categories={tags} allcards={cards} />}
          />
          <Route
            path="/pinturas"
            exact
            element={<Card categories={tags} allcards={cards} />}
          />
          <Route path="/bio" exact element={<Bio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
