import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.jpg";

function SideMenu() {
  return (
    <div className="w-40">
      <div className="fixed">
        <img src={logo} alt="logo" className="mx-2 w-32" />

        <ul className="leading-10 mt-10">
          <li className="hover:bg-gray-800 hover:text-white p-2">
            <Link to="/">Página Inicial</Link>
          </li>
          <li className="hover:bg-gray-800 hover:text-white p-2">
            <Link to="/esculturas">Esculturas</Link>
          </li>
          <li className="hover:bg-gray-800 hover:text-white p-2">
            <Link to="/pinturas">Pinturas</Link>
          </li>

          <br />
          <li className="hover:bg-gray-800 hover:text-white p-2">
            Bio | Contato
          </li>
          <li className="hover:bg-gray-800 hover:text-white p-2">Projetos</li>
          <li className="hover:bg-gray-800 hover:text-white p-2">Curriculo</li>
          <li className="hover:bg-gray-800 hover:text-white p-2">Impresso</li>
        </ul>
      </div>
    </div>
  );
}

export default SideMenu;
