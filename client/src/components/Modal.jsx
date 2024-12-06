import React from "react";

const Modal = ({ title, message, onClose, actions }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center  z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        {title && <h2 className="text-lg font-bold mb-4">{title}</h2>}

        {message && <p className="mb-6">{message}</p>}

        <div className="flex justify-end space-x-4">
          {actions?.map((action, index) => {
            return (
              <button
                key={index}
                onClick={action.click}
                className={`px-4 py-2 rounded-md text-gray-800 ${action.className}`}
              >
                {action.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
