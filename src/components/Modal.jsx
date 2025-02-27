import React from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <dialog>{children}</dialog>,
    document.getElementById("modal-root")
  );
}

export default Modal;
