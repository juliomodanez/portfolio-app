import React, { useState } from 'react';
import SideMenu from "./components/sideMenu";
import { Route, Routes, useLocation } from "react-router-dom";
import Category from "./components/category";
import Content from './contents/Content'
import IntroCarousel from "./pages/intro";
import Home from './pages/home';

function App() {
  const location = useLocation();
  const [content, setContent] = useState(Content);
  const tags = ["all", ...new Set(content.map((image) => image.tags))];

  const filter = (tag) => {
    if (tag === "all") {
      setContent(Content);
      return;
    }
    setContent(Content.filter((item) => item.tags === tag));
  };



  return (
    <div>
      {location.pathname !== '/' && <SideMenu handleClick={filter} />}
      <Routes>
        <Route path='/' exact element={<IntroCarousel />} />
        <Route path='/inicial' exact element={<Home categories={tags} allContent={content} />} />
        <Route path='/esculturas' exact element={<Category categories={tags} allContent={content} />} />
        <Route path='/pinturas' exact element={<Category categories={tags} allContent={content} />} />
        <Route path='/gravuras' exact element={<Category categories={tags} allContent={content} />} />
        <Route path='/modelagem3D' exact element={<Category categories={tags} allContent={content} />} />
        <Route path='/pinturadigital' exact element={<Category categories={tags} allContent={content} />} />
        <Route path='/animacao' exact element={<Category categories={tags} allContent={content} />} />
        <Route path='/bio' />
        <Route path='/contato' />
      </Routes>
    </div>
  )
}

export default App;