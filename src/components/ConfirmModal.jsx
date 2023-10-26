import React from "react";

const ConfirmModal = ({ isOpen, message, onConfirm, onCancel,confirmMsg,cancelMsg,confirmColor,cancelColor }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-30"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          <p className="text-lg">{message}</p>
          <div className="mt-4 flex justify-end space-x-4">
            <button
              onClick={onCancel}
              className={` ${cancelColor} text  text-black  py-2 px-4 rounded focus:outline-none focus:shadow-outline` }
            >
              {cancelMsg}
            </button>
            <button
              onClick={onConfirm}
              className={`text-black ${confirmColor}  py-2 px-4 rounded focus:outline-none focus:shadow-outline`} 
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
