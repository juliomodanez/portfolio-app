import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react/cjs/react.development";

function Card({ allcards }) {
  const [IsModalVisible, setIsModalVisible] = useState(false);
  let obras = [];

  const cards = allcards.map((card) => {
    return (
      <div className="flex space-x-16 w-full h-full rounded-lg bg-gray-100 mx-12 mb-4 p-8 relative hover:shadow-lg bg-gradient-to-t hover:from-gray-300 hover:via-gray-200 hover:to-gray-200">
        <div className="flex flex-col leading-10 mr-10">
          <p className="text-xl">{card.title}</p>
          <p className="mt-10 text-justify text-sm pr-8">{card.description}</p>
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
          <li className="mt-74 -ml-16 text-xs text-gray-500 list-none	text-right">{card.tecInfo[0]}</li>
          <li className="-ml-16 text-xs text-gray-500 list-none	text-right">{card.tecInfo[1]}</li>
          <li className="-ml-16 text-xs text-gray-500 list-none	text-right">{card.tecInfo[2]}</li>


        </div>
      </div>
    );

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
      <div className="grid grid-cols-2 gap-6 xl:grid-cols-3 xl:mx-16">
        {cards}
      </div>
    </div>
  );
}

export default Card;
