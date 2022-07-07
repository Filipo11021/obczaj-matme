import React, { createContext, useEffect, useState } from "react";
import { ModalContent } from "types/contentModal";

type ModalContextType = {
  setEnrollPopupIsOpen:
    | React.Dispatch<React.SetStateAction<boolean>>
    | (() => void);
  enrollPopupIsOpen: boolean;
  setModalContent: React.Dispatch<
    React.SetStateAction<ModalContent | undefined>
  >;
  modalContent: ModalContent | undefined;
  termsOfServiceUrl: string;
  setTermsOfServiceUrl: React.Dispatch<React.SetStateAction<string>>;
};

export const ModalContext = createContext<ModalContextType>({
  setEnrollPopupIsOpen: () => {},
  enrollPopupIsOpen: false,
  modalContent: undefined,
  setModalContent: () => {},
  termsOfServiceUrl: "",
  setTermsOfServiceUrl: () => {},
});
export const ModalProvider: React.FC = ({ children }) => {
  const [enrollPopupIsOpen, setEnrollPopupIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>();
  const [termsOfServiceUrl, setTermsOfServiceUrl] = useState("");

  useEffect(() => {
    const html = document.querySelector<HTMLElement>("html")!;
    if (enrollPopupIsOpen) {
      html.style.overflowY = "hidden";
    } else {
      html.style.overflowY = "initial";
    }
  }, [enrollPopupIsOpen]);

  return (
    <ModalContext.Provider
      value={{
        setEnrollPopupIsOpen,
        enrollPopupIsOpen,
        modalContent,
        setModalContent,
        termsOfServiceUrl,
        setTermsOfServiceUrl,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalProvider;
