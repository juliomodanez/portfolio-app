import React from "react";
import profile from "../Images/profile.jpg";

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

        <iframe
          title="mylinks"
          src="https://allmylinks.com/widget/profile/julio-modanez.html?dark=0&big=0"
          width="395"
          height="164"
          className="mt-16 ml-44"
          scrolling="no"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
      <img src={profile} alt="" className="h-screen" />
    </div>
  );
}

export default Bio;
