import { Route, Routes } from "react-router-dom";
import Category from "./pages/category";
import { useState } from "react";
import Content from './Content'
import SideMenu from "./components/sideMenu";

function App() {
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
        <SideMenu handleClick={filter} />

        <Routes>
          <Route path='/' exact element={<Category categories={tags} allContent={content} />} />
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