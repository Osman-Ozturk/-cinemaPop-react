import Movies from "./Movies";

const Modal = ({modalInfo}) => {
  return (
    <div className="modal">
      <div className="modalInfo">

          {modalInfo.title}

      </div>
    </div>
  );
};

export default Modal;