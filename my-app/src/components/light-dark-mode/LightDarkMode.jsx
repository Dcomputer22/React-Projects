import "./LightDarkMode.scss";
import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={"light-dark-mode-w"} data-theme={theme}>
      <div className={"light-dark-mode-w_content"}>
        <p>Hello World!</p>
        <p>This is a {theme} theme</p>
        <button onClick={handleChangeTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
