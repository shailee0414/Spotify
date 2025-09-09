import { createContext, PropsWithChildren, useState } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import flavorTypes from '@/constants/style/flavor';
import { dark, Theme } from '@/constants/style/dark';
import { light } from '@/constants/style/light';

const initialValue = {
  theme: dark,
  toggleTheme: () => {},
};

type ContextType = {
  theme: Theme;
  toggleTheme: (theme: string) => void;
};

const ThemeContext = createContext<ContextType>(initialValue);

const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const isThemeDark = useColorScheme() ?? 'dark';

  const [theme, setTheme] = useState(isThemeDark ? dark : dark);
  console.log('isThemeDark', theme);
  const toggleTheme = (flavorParam: string) => {
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
        toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
