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
    if (e.target.getAttribute("data-action") === "close") {
      onClose();
    }
  };

  return (
    <>
      {showModal && (
        <div className={style.appModal} onClick={handleClick}>
          <div className={style.appModalOverlay} data-action="close">
            <div className={style.appModalClose} onClick={() => onClose()}>
              X
            </div>
            <div className={style.appModalContent}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
