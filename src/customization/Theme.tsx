import {
    createContext,
    useState,
    useEffect,
    useCallback,
    FC,
    ReactNode,
  } from "react";
  
  export type AppTheme = "light" | "dark";
  
  export const ThemeContext = createContext({
    theme: "light",
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    changeTheme: (_value: AppTheme) => {},
  });
  
  type ThemeContextProps = {
    children: ReactNode;
  };
  
  const ThemeContextProvider: FC<ThemeContextProps> = ({ children }) => {
    const [theme, setTheme] = useState<AppTheme>("light");
  
    const updateTailwindAppearance = (isDark: boolean) => {
      if (isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
  
    useEffect(() => {
      const themeInStorage = localStorage.getItem("theme");
      if (themeInStorage) {
        setTheme(themeInStorage as AppTheme);
        updateTailwindAppearance(themeInStorage === "dark");
      } else {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        setTheme(mq.matches ? "dark" : "light");
        updateTailwindAppearance(mq.matches);
        const mqListener = (evt: MediaQueryListEvent) => {
          updateTailwindAppearance(evt.matches);
          setTheme(evt.matches ? "dark" : "light");
        };
        mq.addEventListener("change", mqListener);
        return () => mq.removeEventListener("change", mqListener);
      }
    }, []);
  
    const updateAppTheme = useCallback((value: AppTheme) => {
      setTheme(value);
      localStorage.setItem("theme", value);
      updateTailwindAppearance(value === "dark");
    }, []);
  
    return (
      <ThemeContext.Provider
        value={{
          theme,
          changeTheme: updateAppTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export default ThemeContextProvider;