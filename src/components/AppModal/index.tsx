"use client";

import style from "./style.module.scss";

interface AppModalProps {
  onClose: () => void;
  showModal: boolean;
  children?: React.ReactNode;
}

export default function AppModal({
  onClose,
  showModal,
  children,
}: AppModalProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log("e.target", e.target);
    if (e.target.getAttribute("data-action") === "close") {
      onClose();
    }
  };

  return (
    <>
      {showModal && (
        <div
          className={style.appModal}
          onClick={handleClick}
          data-action="close"
        >
          <div className={style.appModalOverlay}>
            <div className={style.appModalClose} data-action="close">
              X
            </div>
            <div className={style.appModalContent}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
