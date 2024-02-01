import React, { useEffect, useState } from 'react';
import SideMenu from "./components/sideMenu";
import { Route, Routes, useLocation } from "react-router-dom";
import Category from "./components/category";
import Content from './contents/Content'
import IntroCarousel from "./art_portfolio_pages/intro";
import Home from './art_portfolio_pages/home';
import Bio from './art_portfolio_pages/bio';
import Projects from './art_portfolio_pages/projects';
import DetailedPage from './art_portfolio_pages/detailedPage';
import { AppProvider } from './AppContext';
import ProjectDetailedPage from './art_portfolio_pages/projectDetailedPage';
import MobileMessage from './components/mobileMessage';

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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <MobileMessage />
      ) : (
        <AppProvider>
          {location.pathname !== '/arte' && location.pathname !== '/' && <SideMenu handleClick={filter} />}
          <Routes>
            <Route path='/arte' exact element={<IntroCarousel />} />
            <Route path='/arte/inicial' exact element={<Home categories={tags} contentTag={content} />} />
            <Route path='/arte/esculturas' exact element={<Category title={'Esculturas'} categories={tags} contentTag={content} />} />
            <Route path='/arte/esculturas/:title' element={<DetailedPage />} />
            <Route path='/arte/pinturas' exact element={<Category title={'Pinturas'} categories={tags} contentTag={content} />} />
            <Route path='/arte/pinturas/:title' element={<DetailedPage />} />
            <Route path='/arte/gravuras' exact element={<Category title={'Gravuras'} categories={tags} contentTag={content} />} />
            <Route path='/arte/gravuras/:title' element={<DetailedPage />} />
            <Route path='/arte/modelagem3D' exact element={<Category title={'Modelagem 3D'} categories={tags} contentTag={content} />} />
            <Route path='/arte/modelagem3D/:title' element={<DetailedPage />} />
            <Route path='/arte/pinturadigital' exact element={<Category title={'Pintura Digital'} categories={tags} contentTag={content} />} />
            <Route path='/arte/pinturadigital/:title' element={<DetailedPage />} />
            <Route path='/arte/animacao' exact element={<Category title={'Animação'} categories={tags} contentTag={content} />} />
            <Route path='/arte/animacao/:title' element={<DetailedPage />} />
            <Route path='/arte/projetos' exact element={<Projects />} />
            <Route path='/arte/projetos/:title' element={<ProjectDetailedPage />} />
            <Route path='/arte/bio' exact element={<Bio />} />
          </Routes>
        </AppProvider>
      )}
    </div>
  )
}

export default App;