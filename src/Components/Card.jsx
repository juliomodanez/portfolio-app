import { render } from "@testing-library/react";
import React, { useState } from "react";

function Card({ allcards }) {
  const [IsModalVisible, setIsModalVisible] = useState(false);
  let obras = [];

  const cards = allcards.map((card) => {
    if (card.tags === "3D") {
      return (
        <div className="flex space-x-16 rounded-lg bg-gray-100 mb-4 mx-10 max-h-30 p-24 sm:p-16 sm:mx-12 xl:p-8 xl:w-full xl:h-full relative hover:shadow-lg bg-gradient-to-t hover:from-gray-300 hover:via-gray-200 hover:to-gray-200">
          <div className="flex">
            <p className="absolute top-10 mr-24 sm:text-xl">{card.title}</p>
            <p className="absolute top-10 right-20 text-lg text-gray-600">
              Tags
            </p>
            <p className="absolute top-10 right-10 text-right text-lg text-gray-600">
              #{card.tags}
            </p>
          </div>
          <div className="py-4">
            {card.tecInfo[0] === "Animação 3D" ? (
              card.type === "pequena" ? (
                <iframe
                  title="video"
                  className="mx-16 mt-12 h-60 w-60 absolute"
                  src={card.source}
                ></iframe>
              ) : (
                <iframe
                  title="video"
                  className="mx-12 mt-28 h-47 w-82 absolute xl:right-16"
                  src={card.source}
                ></iframe>
              )
            ) : card.type === "pequena" ? (
              <img
                src={card.source}
                alt=""
                className="object-center object-contain max-h-64 absolute top-20 xl:top-24 right-36 xl:right-44"
                // onClick={() => modal()}
              />
            ) : (
              <img
                src={card.source}
                alt=""
                className="object-center object-contain max-h-64 absolute inset-y-0 top-20 xl:top-24 right-6 xl:right-12"
                // onClick={() => modal()}
              />
            )}

            <li className="mt-76 -ml-16 text-xs text-gray-500 list-none text-center">
              {card.tecInfo[0]}
            </li>
            <li className="-ml-16 text-xs text-gray-500 list-none text-center">
              {card.tecInfo[1]}
            </li>
            <li className="-ml-16 text-xs text-gray-500 list-none text-center">
              {card.tecInfo[2]}
            </li>
            <li className="-ml-16 text-xs text-gray-500 list-none text-center">
              {card.tecInfo[3]}
            </li>
            <p className="text-justify text-xs sm:mt-10 sm:pr-8">
              {card.description}
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex space-x-16 rounded-lg bg-gray-100 mb-4 mx-10 max-h-30 p-24 sm:p-16 sm:mx-12 xl:p-8 xl:w-full xl:h-full relative hover:shadow-lg bg-gradient-to-t hover:from-gray-300 hover:via-gray-200 hover:to-gray-200">
          <div className="flex flex-col leading-10 mr-10">
            <p className="sm:text-xl">{card.title}</p>
            <p className="text-justify text-xs mt-32 sm:mt-10 sm:pr-8">
              {card.description}
            </p>
            <p className=" absolute inset-y-0 top-80 mr-4 text-lg text-gray-600">
              Tags
            </p>
            <p className="absolute inset-y-0 top-80 mt-8 text-sm text-gray-500">
              #{card.tags}
            </p>
          </div>
          <div className="py-4 w-full">
            <img
              src={card.source}
              alt=""
              className="object-contain max-h-64 absolute inset-y-0 top-20 right-8"
              // onClick={() => modal()}
            />
            <li className="mt-74 -ml-16 text-xs text-gray-500 list-none	text-right">
              {card.tecInfo[0]}
            </li>
            <li className="-ml-16 text-xs text-gray-500 list-none	text-right">
              {card.tecInfo[1]}
            </li>
            <li className="-ml-16 text-xs text-gray-500 list-none	text-right">
              {card.tecInfo[2]}
            </li>
            <li className="-ml-16 text-xs text-gray-500 list-none	text-right">
              {card.tecInfo[3]}
            </li>
          </div>
        </div>
      );
    }
    function modal() {
      setIsModalVisible(true);
      obras.filter((obra) => obra.source === card.source);

      if (IsModalVisible === true) {
        render(
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
            <div className="relative w-1/2 h-auto my-4 mx-auto z-50">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{card.title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setIsModalVisible(false)}
                  >
                    <span className="bg-transparent text-black opacity-50 h-6 w-6 text-3xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="flex space-x-32 relative p-6">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {card.description}
                  </p>

                  <img
                    src={card.source}
                    alt=""
                    className="object-contain h-80 inset-y-0 top-2 right-0"
                  />
                </div>
              </div>
            </div>
            <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
          </div>
        );
      } else {
        render(null);
      }
    }
  });

  return (
    <div className="flex mt-48">
      <div className="grid gap-6 grid-cols-1 xl:grid-cols-2 xl:mx-16 2xl:grid-cols-3">
        {cards}
      </div>
    </div>
  );
}

export default Card;
