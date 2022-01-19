import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo02.jpg";

function SideMenu({ handleClick }) {
  return (
    <div className="w-10 mr-10 sm:w-40 sm:mr-20 xl:mr-4">
      <div className="fixed">
        <Link to="/" onClick={() => handleClick("all")}>
          <img src={logo} alt="logo" className="mx-2 mt-6 w-16 sm:w-32" />
        </Link>
        <br />
        <ul className="leading-6 mt-4 text-xs sm:text-lg sm:leading-10 sm:mt-10">
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
            <Link to="/curriculo">Currículo</Link>
          </li>
          {/* <li className="hover:bg-gray-800 hover:text-white p-2">
            <Link to="/impresso">Impresso</Link>
          </li> */}
        </ul>

        <br />
        
        <p className="flex text-center mt-60 mx-2 text-xs sm:text-sm text-gray-400">
          Copyright © 2021 <br /> by Julio Modanez <br/> All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default SideMenu;
