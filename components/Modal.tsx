import React from "react";

const Modal = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full`}>
      <div
        className="w-full h-full bg-black opacity-50 z-40"
        onClick={() => setIsOpen(false)}
      ></div>
      <div className="absolute flex flex-col left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white min-w-[80vw] min-h-[70vh]">
        <div>
          <button onClick={() => setIsOpen(false)}>x</button>
        </div>
        <div className="flex-1">halo</div>
      </div>
    </div>
  );
};

export default Modal;
