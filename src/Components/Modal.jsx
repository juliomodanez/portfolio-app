import React from "react";

function Modal() {
  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl z-50">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">Modal Title</h3>
            <button className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none bg-red-200">
              <span className="bg-transparent text-black opacity-50 h-6 w-6 text-3xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos amet incidunt, dolores quidem ducimus odio quo, fugiat
              nulla magni obcaecati sed quod illum doloremque ab accusantium in
              id totam odit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
