import React, { useState } from 'react';

function DropdownMenu({isOpen, isDark, toggleMenu, setIsOpen}) {
  const [font, setFont] = useState("Sans Serif")

  const handleChange = (font) => {
    setFont(font);
    setIsOpen(!isOpen)
  };

  return (
    <div className="relative">
      <div className="drop flex justify-between items-center mt-2 ml-[75px]">
          <h1 style={{color: isDark ? "white" : "black"}}className='inter font-bold text-base leading-6'>{font}</h1>
          <img onClick={toggleMenu} className="ml-4 w-[12px] h-[6px]"src="./src/assets/images/icon-arrow-down.svg" alt="" />
      </div>
      {isOpen && (
        <div className="absolute ml-[75px]  bg-white">
          <button
            className="block px-auto py-4 font-bold text-base  leading-6 hover:bg-gray-200"
            onClick={() => handleChange('Sans Serif')}
          >
            Sans Serif
          </button>
          <button
            className="block px-4 py-2 font-bold text-base leading-6 hover:bg-gray-200"
            onClick={() => handleChange('Serif')}
          >
            Serif
          </button>
          <button
            className="block px-4 py-2 font-bold text-base leading-6 hover:bg-gray-200"
            onClick={() => handleChange('Mono')}
          >
            Mono
          </button>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;