import { createPortal } from "react-dom";

const Modal = () => {
  return createPortal(
    <>
      <div className="z-50 relative w-[20%] h-[40%] bg-red-500 ">Modal</div>

      <div className="top-0 z-40 w-screen h-screen backdrop-blur absolute"></div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
