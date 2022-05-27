import React, {useState, useContext, createContext, useEffect} from "react";

type contextType = {
  theme: string;
  toggleTheme: (type: themeType) => void;
};

const defaultState = {} as contextType;

const ThemeContext = createContext<contextType>(defaultState);

type themeType = "light" | "dark";

export default function ThemeProvider({children}: {children: React.ReactNode}): JSX.Element {
  const localTheme = localStorage.getItem("theme");
  const defaultTheme =
    localTheme !== null && (localTheme === "light" || localTheme === "dark") ? localTheme : "light";
  const [theme, setTheme] = useState<themeType>(defaultTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = (type: themeType) => {
    if (type === "dark") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else if (type === "light") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>;
}

export const useTheme = (): contextType => useContext(ThemeContext);
