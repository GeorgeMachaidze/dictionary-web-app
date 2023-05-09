import { useState } from "react";
import "./App.css";
import DropdownMenu from "./dropDown.jsx";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className="main"
        style={{ backgroundColor: isDark ? "black" : "white" }}
      >
        <div className="flex justify-between p-6 headAndNav">
          <img src="./src/assets/images/logo.svg" alt="" />
          <DropdownMenu
            isOpen={isOpen}
            isDark={isDark}
            toggleMenu={toggleMenu}
            setIsOpen={setIsOpen}
          />
          <hr className="ml-4 border-l-2 border-rgba(233, 233, 233, 1)-500 h-10 transform-rotate-90"></hr>
          <div className="sliderAndIcon flex justify-center items-center">
            <label className="ml-4 toggle-switch">
              <input type="checkbox" checked={isDark} onChange={handleToggle} />
              <span
                className={`toggle-slider`}
                style={{
                  backgroundColor: isDark
                    ? "rgba(164, 69, 237, 1)"
                    : "rgba(117, 117, 117, 1)",
                }}
              ></span>
            </label>
            <img
              className="ml-3"
              src={
                isDark
                  ? "./src/assets/images/icon-moon-dark.svg"
                  : "./src/assets/images/icon-moon.svg"
              }
              alt=""
            />
          </div>
        </div>
      <input style={{backgroundColor: isDark ? "rgba(31, 31, 31, 1)" : "rgba(244, 244, 244, 1)" }}className="input rounded-md h-12 w-[327px] mr-6 ml-6 br-3" type="text" placeholder="Search for any word…"></input>
      </div>
    </>
  );
}

export default App;
