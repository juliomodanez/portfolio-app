import React from "react";
import CuboPrint from '../Images/Cuboprint.png'
import P5Print from '../Images/p5.PNG'

function Projetos() {
  return (
    <div className="grid grid-cols-2 w-full space-x-6 p-8 mt-40">

      <div className="flex w-full h-full rounded-lg bg-gray-200 mt-2 mb-2 p-10 relative items-center ">
        <div className="flex flex-col leading-10">
          <p className="text-xl px-12">Paisagens Interativas</p>
          <p className="mt-4 text-justify px-12 text-lg text-gray-600">Realizado por meio da biblioteca P5.js (biblioteca online para JavaScript), o trabalho foi pensado de forma a propor interatividade entre o visitante e o desenho. A paisagem é gerada e alterada por quem acessa o site e a exploração do cenário é elemento principal para que as diferentes possibilidades de iluminação se deem na tela. </p>
          <p className="px-12">_____________________________________________________________________</p>
         <p className="text-gray-500 px-12 mt-4 hover:text-gray-600"><a href="https://editor.p5js.org/juliomodanez/full/PUGW9zUid" target="_blank">Link de Acesso</a></p>
        </div>
        <div className=""><img src={P5Print} alt="" className="mr-8"/></div>
      </div>

      <div className="flex w-full h-full rounded-lg bg-gray-200 mt-2 mb-2 p-10 relative items-center ">
        <div className="flex flex-col leading-10">
          <p className="text-xl px-12">REVERSO</p>
          <p className="mt-4 text-justify px-12 text-lg text-gray-600">Projeto realizado em grupo, REVERSO propõe uma reflexão acerca dos sentidos que a interação social e a relação dos indivíduos com os espaços públicos da cidade assumiram após um longo período sob a ameaça de um contágio de proporções pandêmicas. Remetendo ao gesto de desejo transmutado em perigo iminente e, também, à noção de liberdade – comumente representada pelo mundo externo – reduzida à experiência claustrofóbica do confinamento pelo medo de uma ameaça invisível, a obra explora os paradoxos oriundos do flagelo.</p>
          <p className="px-12">_____________________________________________________________________</p>
          <p className="text-gray-500 px-12 mt-4 hover:text-gray-600"><a href="https://avesso-57409.web.app/" target="_blank">Link de Acesso</a></p>
        </div>
        <div className=""><img src={CuboPrint} alt="" className=""/></div>
      </div>
    </div>
  );
}

export default Projetos;
