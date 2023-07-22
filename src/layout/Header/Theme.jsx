import { useEffect, useState } from "react";
import { BiSun } from "react-icons/bi";
import { BiSolidMoon } from "react-icons/bi";

const Theme = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("night");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <button className="mx-4" onClick={toggleTheme}>
      {theme === "light" ? (
        <BiSun className="text-xl" />
      ) : (
        <BiSolidMoon className="text-xl" />
      )}
    </button>
  );
};

export default Theme;
