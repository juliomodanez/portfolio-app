import React, { useState } from 'react';
import SideMenu from "./components/sideMenu";
import { Route, Routes, useLocation } from "react-router-dom";
import Category from "./components/category";
import Content from './contents/Content'
import IntroCarousel from "./pages/intro";
import Home from './pages/home';
import Bio from './pages/bio';
import Projects from './pages/projects';
import DetailedPage from './pages/detailedPage';
import { AppProvider } from './AppContext';

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
      <AppProvider>
        {location.pathname !== '/' && <SideMenu handleClick={filter} />}
        <Routes>
          <Route path='/' exact element={<IntroCarousel />} />
          <Route path='/inicial' exact element={<Home categories={tags} contentTag={content} />} />
          <Route path='/esculturas' exact element={<Category title={'Esculturas'} categories={tags} contentTag={content} />} />
          <Route path='/esculturas/:title' element={<DetailedPage />} />
          <Route path='/pinturas' exact element={<Category title={'Pinturas'} categories={tags} contentTag={content} />} />
          <Route path='/pinturas/:title' element={<DetailedPage />} />
          <Route path='/gravuras' exact element={<Category title={'Gravuras'} categories={tags} contentTag={content} />} />
          <Route path='/gravuras/:title' element={<DetailedPage />} />
          <Route path='/modelagem3D' exact element={<Category title={'Modelagem 3D'} categories={tags} contentTag={content} />} />
          <Route path='/modelagem3D/:title' element={<DetailedPage />} />
          <Route path='/pinturadigital' exact element={<Category title={'Pintura Digital'} categories={tags} contentTag={content} />} />
          <Route path='/pinturadigital/:title' element={<DetailedPage />} />
          <Route path='/animacao' exact element={<Category title={'Animação'} categories={tags} contentTag={content} />} />
          <Route path='/animacao/:title' element={<DetailedPage />} />
          <Route path='/projetos' exact element={<Projects />} />
          <Route path='/projetos/:title' element={<DetailedPage />} />
          <Route path='/bio' exact element={<Bio />} />
        </Routes>
      </AppProvider>
    </div>
  )
}

export default App;