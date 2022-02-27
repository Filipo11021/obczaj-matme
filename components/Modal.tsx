import React from "react";

const Modal = ({
  setIsOpen,
  children,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactChild;
}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full z-50 zoomIn overflow-y-hidden`}>
      <div
        className="w-full h-[110%] opacity-50 z-40 cursor-pointer background"
        onClick={() => {
          setIsOpen(false)
        }}
      >
      </div>
      <div className="absolute border mt-3 border-black flex flex-col left-1/2 top-1/2 -translate-x-1/2 p-5 -translate-y-1/2 bg-white min-w-[95vw] z-50 sm:min-w-[80vw]">
        <div>
          <button className="p-1 text-[50px] after:h-full after:w-full after:content-['✕'] after:text-black h-[50px] relative mb-6" onClick={() => setIsOpen(false)}>
        
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
