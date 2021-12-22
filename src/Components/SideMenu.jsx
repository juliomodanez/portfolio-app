import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo02.jpg";

function SideMenu({ handleClick }) {
  return (
    <div className="w-40">
      <div className="fixed">
        <Link to="/" onClick={() => handleClick("all")}>
          <img src={logo} alt="logo" className="mx-2 w-32 mt-6" />
        </Link>
        <br />
        <ul className="leading-10 mt-10">
          <li className="hover:bg-gray-800 hover:text-white p-2">
            <Link to="/" onClick={() => handleClick("all")}>
              Página Inicial
            </Link>
          </li>
          <li className="hover:bg-gray-800 hover:text-white p-2">
            <Link to="/esculturas" onClick={() => handleClick("escultura")}>
              Esculturas
            </Link>
          </li>
          <li className="hover:bg-gray-800 hover:text-white p-2">
            <Link to="/pinturas" onClick={() => handleClick("pintura")}>
              Pinturas
            </Link>
          </li>
          <li className="hover:bg-gray-800 hover:text-white p-2">
            <Link to="/projetos">Projetos</Link>
          </li>

          <br />
          <li className="hover:bg-gray-800 hover:text-white p-2">
            <Link to="/bio"> Bio | Contato</Link>
          </li>
          <li className="hover:bg-gray-800 hover:text-white p-2">
            <Link to="/curriculo">Curriculo</Link>
          </li>
          <li className="hover:bg-gray-800 hover:text-white p-2">
            <Link to="/impresso">Impresso</Link>
          </li>
        </ul>

        <br />
        
        <p className="flex text-center mt-60 mx-2 text-sm text-gray-400">
          Copyright © 2021 <br /> by Julio Modanez <br/> All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default SideMenu;
