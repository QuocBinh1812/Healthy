import React, { useContext } from "react";
import styled from "styled-components";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeSwitcherStyles = styled.div`
  label {
    --gap: 5px;
    --size: 20px;
    height: 30px;

    padding: 0 var(--gap);
    position: relative;
    cursor: pointer;
    border-radius: 50px;
    background: #cfc8f4;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon {
      height: var(--size);
      width: var(--size);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      width: 75%;
      color: var(--white);
    }
  }
  input {
    width: 0;
    height: 0;
    display: none;
    visibility: hidden;
  }
  label::after {
    position: absolute;
    content: "";
    border-radius: 50%;
    transform: translateY(-50%);
    top: 50%;
    left: var(--gap);
    height: var(--size);
    width: var(--size);
    background-color: var(--mediumSlateBlue);
    transition: 0.5s ease left;
    z-index: -1;
  }
  input:checked + label::after {
    left: calc(100% - var(--size) - var(--gap));
  }
`;

export default function ThemeSwitcher({ isDarkMode, setIsDarkMode }) {
  console.log("dark", isDarkMode);
  return (
    <ThemeSwitcherStyles>
      {/* <input
        type=""
        id="switcher"
        onChange={() => setIsDarkMode(!isDarkMode)}
        checked={isDarkMode === true}
      /> */}
      <label>
        {isDarkMode ? (
          <div className="icon">
            <FiSun onClick={() => setIsDarkMode(!isDarkMode)} />
          </div>
        ) : (
          <div className="icon">
            <FiMoon onClick={() => setIsDarkMode(!isDarkMode)} />
          </div>
        )}
      </label>
    </ThemeSwitcherStyles>
  );
}
