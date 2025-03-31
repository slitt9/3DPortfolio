import React from 'react';

const Alert = ({ show, text, type }) => {
    if (!show) return null;
  
    return (
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-1000">
        <div
          className={`${
            type === 'error' ? 'bg-red-600' : 'bg-blue-600'
          } text-white px-8 py-4 rounded-lg shadow-lg text-center text-lg font-bold border-4 border-white`}
        >
          {text}
        </div>
      </div>
    );
  };

  

export default Alert;
