import React from "react";

function SideMenu() {
  return (
    <div className="w-40">
      <ul className="leading-10 mt-10">
        <li className="hover:bg-gray-800 hover:text-white p-2">Página Inicial</li>
        <li className="hover:bg-gray-800 hover:text-white p-2">Esculturas</li>
        <li className="hover:bg-gray-800 hover:text-white p-2">Pinturas</li>
        
        <br />
        <li className="hover:bg-gray-800 hover:text-white p-2">Bio | Contato</li>
        <li className="hover:bg-gray-800 hover:text-white p-2">Projetos</li>
        <li className="hover:bg-gray-800 hover:text-white p-2">Curriculo</li>
        <li className="hover:bg-gray-800 hover:text-white p-2">Impresso</li>
      </ul>
    </div>
  );
}


export default SideMenu;