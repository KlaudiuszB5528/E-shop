import React, { useRef, useEffect } from "react";

interface Props {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const Dialog = (props: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!props.isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      e.key === "Escape" && props.isOpen && ref.current?.close();
      props.onClose();
    };
    window.addEventListener("keydown", handleEscape);
    ref.current?.showModal();
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [props.isOpen]);

  return (
    <dialog
      onClick={() => {
        ref.current?.close();
        props.onClose();
      }}
      ref={ref}
      className="overscroll-contain rounded-md shadow-md backdrop:bg-black/50 backdrop:backdrop-blur-sm"
    >
      {props.children}
    </dialog>
  );
};

export default Dialog;
