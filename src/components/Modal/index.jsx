/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Modal = ({ isOpen, onClose, BgColor , children }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 items-center justify-center`}>
      <div className={`fixed ${BgColor} opacity-50`} onClick={onClose}></div>
      <div className={`${BgColor} rounded-lg text-white shadow-lg  p-6 w-full max-w-md mx-4`}>
        <div className="flex justify-end">
          <button onClick={onClose} className="text-white hover:text-gray-800">&times;</button>
        </div>
        <div>
          {/* <ul> */}
            {children}
          {/* </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
