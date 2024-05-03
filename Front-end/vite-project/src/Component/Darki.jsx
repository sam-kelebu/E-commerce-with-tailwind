import React from "react";

const Darki = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="dark-mode-toggle">
      <label htmlFor="darkModeToggle">
        <input
          type="checkbox"
          id="darkModeToggle"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        Dark Mode
      </label>
    </div>
  );
};

export default Darki;