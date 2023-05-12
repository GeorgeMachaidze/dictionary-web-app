function DropdownMenu({isOpen, font, setFont, isDark, toggleMenu, setIsOpen}) {
  

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
        <div style={{backgroundColor: isDark ? "black" : "white"}} className="absolute  flex flex-col w-32 ml-12 rounded-md">
          <button style={{color: isDark ? "white" : "black"}}
            className="block px-auto py-4 font-bold text-base  leading-6 hover:bg-gray-200"
            onClick={() => handleChange('Sans Serif')}
          >
            Sans Serif
          </button>
          <button style={{color: isDark ? "white" : "black"}}
            className="block px-4 py-2 font-bold text-base leading-6 hover:bg-gray-200"
            onClick={() => handleChange('Serif')}
          >
            Serif
          </button>
          <button style={{color: isDark ? "white" : "black"}}
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