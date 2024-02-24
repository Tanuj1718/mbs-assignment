import React from 'react';
import classNames from 'classnames';
const Buttons = ({ width, height, text, onClick, className }) => {
  
  const buttonStyle = {
    width,
    height,

    // Add more styles here as needed
  };
  const buttonClasses = classNames(
    ' hover:bg-orange-800 text-white font-bold rounded',
    className
  );

  return (
    <button
    className={buttonClasses}
      style={buttonStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Buttons;