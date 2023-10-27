import React from "react";

const ConfirmModal = ({
  isOpen,
  message,
  onConfirm,
  onCancel,
  confirmMsg,
  cancelMsg,
  confirmBgColor,
  cancelBgColor,
  cancelTextColor,
  confirmTextColor,
  cancelBorderColor,
  confirmBorderColor,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        id="modal-overlay"
        className="fixed inset-0 bg-black opacity-30"
      ></div>
      <div
        id="modal-container"
        className=" bg-white w-11/12 md:max-w-md mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
      >
        <div id="modal-content" className="py-4 text-left px-6">
          <p className="text-lg">{message}</p>
          <div className="mt-4 flex justify-end space-x-4">
            <button
              onClick={onCancel}
              className={`${cancelBgColor} ${cancelTextColor} ${cancelBorderColor} py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
            >
              {cancelMsg}
            </button>
            <button
              onClick={onConfirm}
              className={` ${confirmBgColor} ${confirmTextColor} ${confirmBorderColor} py-2 px-4 rounded-full focus:outline-none focus:shadow-outline`}
            >
              {confirmMsg}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
