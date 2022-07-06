import Modal from "components/Modal";
import { ModalContext } from "providers/ModalProvider";
import { useContext } from "react";
import EnrollForm from "./EnrollForm";

const EnrollModal = () => {
  const { enrollPopupIsOpen, setEnrollPopupIsOpen } = useContext(ModalContext);
  return enrollPopupIsOpen ? (
    <Modal setIsOpen={setEnrollPopupIsOpen}>
      <div className="flex justify-center items-center">
        <EnrollForm />
      </div>
    </Modal>
  ) : (
    <></>
  );
};
export default EnrollModal;
