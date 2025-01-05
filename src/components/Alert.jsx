import React from 'react';

const Alert = ({ show, text, type }) => {
  if (!show) return null;

  return (
    <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`${
          type === 'error'
            ? 'bg-red-600'
            : 'bg-blue-600'
        } text-white px-4 py-2 rounded-lg shadow-lg text-center text-sm font-semibold`}
      >
        {text}
      </div>
    </div>
  );
};

export default Alert;
