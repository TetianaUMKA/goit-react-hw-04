import Modal from "react-modal";

import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function ImageModal({
  modalIsOpen,
  onCloseModal,
  dataForModal,
}) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      overlayClassName={css.Overlay}
    >
      <img src={dataForModal.src} alt={dataForModal.alt} />
      <p>
        {dataForModal.description} / {dataForModal.author} /{" "}
        {dataForModal.location}
      </p>
      <p></p>
    </Modal>
  );
}
