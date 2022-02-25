import React from "react";

const Modal = ({
  setIsOpen,
  children,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactChild;
}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full z-50 zoomIn`}>
      <div
        className="w-full h-full bg-black opacity-50 z-40 cursor-pointer"
        onClick={() => {
          setIsOpen(false)
        }}
      ></div>
      <div className="absolute flex flex-col left-1/2 top-1/2 -translate-x-1/2 p-5 -translate-y-1/2 bg-white min-w-[95vw] z-50 sm:min-w-[80vw]">
        <div>
          <button className="w-[50px] h-[50px] relative after:content-['&#xd7;'] after:text-[50px] after:absolute after:top-0 after:bottom-0 after:right-0 after:left-0 after:w-full after:h-full after:text-black" onClick={() => setIsOpen(false)}>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
