import React from "react";
import profile from "../Images/profile.jpg";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

function Bio() {
  return (
    <div className="flex items-center">
      <div className="flex-col">
        <p className="px-24 ml-20 mt-12 text-xl tracking-wide text-justify leading-8">
          Artista multimidia, com interesse tanto por áreas manuais e
          tradicionais - como escultura, desenho e pintura - quanto por áreas
          voltadas a midias digitais, como modelagem e pintura digitais,
          animação e programação criativa. Nascido em 1995, desde pequeno sempre
          gostou de jogos, filmes ligados a mundos fantasiosos, desenhar e criar
          histórias.
        </p>

        <div className="grid grid-cols-3 ml-48 mt-32">
          <a
            href="https://www.instagram.com/juliomodanez/"
            className="flex items-center mt-12 text-2xl hover:text-gray-600 "
          >
            {<BsInstagram className="mr-4"/>} Instagram
          </a>
          <a
            href="https://www.twitter.com/juliomodanez/"
            className="flex items-center mt-12 text-2xl hover:text-gray-600"
          >
            {<BsTwitter className="mr-4"/>} Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/julio-modanez-962079228/"
            className="flex items-center mt-12 text-2xl hover:text-gray-600"
          >
            {<BsLinkedin className="mr-4"/>} Linkedin
          </a>
        </div>
      </div>
      <img src={profile} alt="" className="h-screen" />
    </div>
  );
}

export default Bio;
