import React from "react";
import images from "../Content.js";

class Card extends React.Component {
  render() {
    return (
      <div className="grid grid-cols-3">
        {images.map((imageDetail, index) => {
          return (
            <div className="flex space-x-16 w-96 bg-gray-200 mx-2 mt-6 p-4 relative">
              <div className="flex flex-col leading-10">
                <h3 className="mr-4 text-lg text-gray-600">Title</h3>
                <p className="text-2xl">{images[index].title}</p>
                <p className="mt-32 mr-4 text-lg text-gray-600">Tags</p>
                <p className="text-sm text-gray-500">#{images[index].tags}</p>
              </div>
              <img
                src={images[index].source}
                alt=""
                className="object-contain max-h-64 absolute inset-y-0 top-2 right-6"
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Card;
