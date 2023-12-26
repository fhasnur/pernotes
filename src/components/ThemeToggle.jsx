import { useState, useEffect } from 'react';
import { FiMoon } from 'react-icons/fi';
import { FiSun } from 'react-icons/fi';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme('night');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  return (
    <div className="flex-none text-custom-txt cursor-pointer">
      <button className="btn btn-square rounded-full btn-ghost">
        <label className="swap swap-rotate w-12 h-12">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === 'light' ? false : true}
          />
          <FiSun size={24} className="text-custom-txt-secondary swap-on" />
          <FiMoon size={24} className="text-custom-txt-primary swap-off" />
        </label>
      </button>
    </div>
  );
};

export default ThemeToggle;
