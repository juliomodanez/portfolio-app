import React from "react";
import CuboPrint from '../Images/Cuboprint.png'

function Projetos() {
  return (
    <div className="grid grid-cols-2 w-full space-x-6 p-8 mt-40">
      <div className="flex w-full h-full rounded-lg bg-gray-200 mt-2 mb-2 p-10 relative items-center ">
        <div className="flex flex-col leading-10">
          <p className="text-xl px-6">P5</p>
          <p className="mt-4 px-6 text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ut impedit repellendus reprehenderit magni exercitationem cupiditate placeat temporibus sapiente, sit quia ea tenetur nobis aspernatur eius officiis porro enim eos! Aspernatur, eum. Exercitationem omnis illo ducimus eos ad excepturi, dolorem similique eligendi. Commodi veritatis aspernatur rerum mollitia illo? Totam, adipisci?</p>
          <p className="text-gray-500 px-6 mt-4"><a href="https://avesso-57409.web.app/" target="_blank">Link de Acesso</a></p>
        </div>
        <div className=""><img src={CuboPrint} alt="" className=""/></div>
      </div>
      <div className="flex w-full h-full rounded-lg bg-gray-200 mx-2 mt-2 mb-2 p-10 relative items-center ">
        <div className="flex flex-col leading-10">
          <p className="text-xl px-6">REVERSO</p>
          <p className="mt-4 px-6 text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ut impedit repellendus reprehenderit magni exercitationem cupiditate placeat temporibus sapiente, sit quia ea tenetur nobis aspernatur eius officiis porro enim eos! Aspernatur, eum. Exercitationem omnis illo ducimus eos ad excepturi, dolorem similique eligendi. Commodi veritatis aspernatur rerum mollitia illo? Totam, adipisci?</p>
          <p className="text-gray-500 px-6 mt-4"><a href="https://avesso-57409.web.app/" target="_blank">Link de Acesso</a></p>
        </div>
        <div className=""><img src={CuboPrint} alt="" className=""/></div>
      </div>
    </div>
  );
}

export default Projetos;
