import {createContext, PropsWithChildren, useContext, useState} from "react";
import {useColorScheme} from "@/hooks/useColorScheme";
import flavorTypes from "@/constants/style/flavor";
import {dark, Theme} from "@/constants/style/dark";
import {light} from "@/constants/style/light";

const initialValue = {
  flavor: flavorTypes.DARK,
  theme: dark,
  toggleTheme: () => {},
};

type ContextType = {
  flavor: string;
  theme: Theme;
  toggleTheme: (theme: string) => void;
};

const ThemeContext = createContext<ContextType>(initialValue);

const ThemeProvider = ({children}: PropsWithChildren<{}>) => {
  const isThemeDark = useColorScheme() ?? "dark";
  const [flavor, setFlavor] = useState(
    isThemeDark ? flavorTypes?.DARK : flavorTypes?.DARK
  );
  const [theme, setTheme] = useState(isThemeDark ? dark : dark);

  const toggleTheme = (flavorParam:string) => {
    setFlavor(flavorParam);
    let selectedFlavor;
    switch (flavorParam) {
      case flavorTypes.DARK:
        selectedFlavor = dark;
        break;
      case flavorTypes.LIGHT:
        selectedFlavor = light;
      default:
        selectedFlavor = dark;
        break;
    }
    setTheme(selectedFlavor);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        flavor,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext, ThemeProvider};