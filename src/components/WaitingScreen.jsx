import React from "react";

const WaitingScreen = ({isOpen}) => {
    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-overlay fixed inset-0 bg-black opacity-30"></div>
      <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
        dsdasd
        </div>
      </div>
    </div>
  );
};

export default WaitingScreen;
