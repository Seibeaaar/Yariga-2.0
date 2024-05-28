import { APP_THEME } from "@/types/customization";
import {
    createContext,
    useState,
    useEffect,
    useCallback,
    FC,
    ReactNode,
  } from "react";
  
  export const ThemeContext = createContext({
    theme: APP_THEME.Light,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    changeTheme: (_value: APP_THEME) => {},
    isDarkTheme: false
  });
  
  type ThemeContextProps = {
    children: ReactNode;
  };
  
  const ThemeContextProvider: FC<ThemeContextProps> = ({ children }) => {
    const [theme, setTheme] = useState<APP_THEME>(APP_THEME.Light);
  
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
        setTheme(themeInStorage as APP_THEME);
        updateTailwindAppearance(themeInStorage === "dark");
      } else {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        setTheme(mq.matches ? APP_THEME.Dark : APP_THEME.Light);
        updateTailwindAppearance(mq.matches);
        const mqListener = (evt: MediaQueryListEvent) => {
          updateTailwindAppearance(evt.matches);
          setTheme(evt.matches ? APP_THEME.Dark : APP_THEME.Light);
        };
        mq.addEventListener("change", mqListener);
        return () => mq.removeEventListener("change", mqListener);
      }
    }, []);
  
    const updateAppTheme = useCallback((value: APP_THEME) => {
      setTheme(value);
      localStorage.setItem("theme", value);
      updateTailwindAppearance(value === APP_THEME.Dark);
    }, []);
  
    return (
      <ThemeContext.Provider
        value={{
          theme,
          changeTheme: updateAppTheme,
          isDarkTheme: theme === APP_THEME.Dark
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export default ThemeContextProvider;