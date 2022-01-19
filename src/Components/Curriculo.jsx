import React from "react";
import {
  SiBlender,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
} from "react-icons/si";
import { GiPaintBrush, GiPhotoCamera, GiMuscularTorso } from "react-icons/gi";
import { FaAsterisk } from "react-icons/fa";

function Curriculo() {
  return (
    <div className="grid grid-cols-2 mt-32 w-full p-16 ml-40">
      <div className="flex-col">
        <h2 className="text-4xl font-semibold">Julio Modanez</h2>
        <ul className="leading-10">
          <li>___________________________________________________</li>
          <li className="text-lg leading-10 font-medium">Formação acadêmica</li>
          <li className="leading-6 mt-2">Curso superior em Artes visuais</li>
          <li className="leading-6 text-sm"> Universidade de São Paulo</li>
          <li className="leading-6 mt-2">Técnico em Informática</li>
          <li className="leading-6 text-sm">
            E.T.E.S.P. - Escola Técnica Estadual de São Paulo
          </li>
          <br></br>
          <li className="text-lg leading-10 font-medium">Cursos livres </li>
          <li className="leading-6 mt-2">
            {" "}
            Playgame - Desenvolvimento de Jogos digitais
          </li>
          <li className="leading-6 text-sm">
            SAGA - School of Art, Games and Animation
          </li>
          <li>___________________________________________________</li>
          <li className="text-lg leading-10 font-medium">
            Experiências profissionais
          </li>
          <li className="leading-6 mt-2">Escultor - Escola SAGA</li>
          <li className="leading-6 text-sm">(Jun/2016 - Out/2016)</li>
        </ul>
      </div>

      <div className="flex-col mt-12">
        <ul>
          <li>
            ___________________________________________________________________________
          </li>
          <li className="text-lg leading-10 mt-2 font-medium">
            Habilidades desenvolvidas
          </li>
          <ul className="flex grid grid-cols-2 mt-2">
            <li className="flex items-center leading-6 mt-2 text-lg">
              <SiBlender className="mr-2" /> Blender
            </li>
            <li className="flex items-center leading-6 mt-2 text-lg">
              <GiMuscularTorso className="mr-2" /> Escultura
            </li>
            <li className="flex items-center leading-6 mt-2 text-lg">
              <SiAdobephotoshop className="mr-2" /> Photoshop
            </li>
            <li className="flex items-center leading-6 mt-2 text-lg" text-lg>
              <GiPaintBrush className="mr-2" /> Pintura
            </li>
            <li className="flex items-center leading-6 mt-2 text-lg">
              <SiAdobeaftereffects className="mr-2" /> After Effects
            </li>
            <li className="flex items-center leading-6 mt-2 text-lg">
              <GiPhotoCamera className="mr-2" /> Fotografia
            </li>
            <li className="flex items-center leading-6 mt-2 text-lg">
              <SiAdobepremierepro className="mr-2" /> Premiere
            </li>
            <li> </li>
            <li className="flex items-center leading-6 mt-2 text-lg">
              <FaAsterisk className="mr-2" /> P5.js
            </li>
          </ul>

          <li className="mt-24">
            ___________________________________________________________________________
          </li>

          <li className="text-lg leading-10 font-medium">Exposições</li>
          <li className="leading-8 font-medium">- 2021 -</li>
          <li className="leading-6 mt-2 font-medium">nCubo 2021</li>
          <li className="leading-6 mt-2">
            Exposição digital realizada entre USP (ECA-CAP) e UNESP
            (IA-DeARTES).
          </li>
          <li>Realização Grupo de Pesquisa Realidades ECA-USP.</li>
          <li className="leading-6 text-sm">Trabalho(s): REVERSO</li>
        </ul>

        <button className="mt-20 mr-80 float-right bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-400">
          <a href="https://drive.google.com/file/d/1DcI9rjX-tnKs4rBn6v-mysxaZ0Q1ILIC/view?usp=sharing" target="_blank">Download</a>
        </button>
      </div>
    </div>
  );
}

export default Curriculo;
