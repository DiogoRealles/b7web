import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const STORAGE_THEME = 'contextTheme';

type ContextTheme = {
  theme: string;
  setTheme: (newTheme: string) => void;
};

type Props = {
  children: ReactNode;
};

export const ContextTheme = createContext<ContextTheme | null>(null);

export const ContextThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(
    localStorage.getItem(STORAGE_THEME) || 'light'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    localStorage.setItem(STORAGE_THEME, theme);
  }, [theme]);

  return (
    <ContextTheme.Provider value={{ theme, setTheme }}>
      {children}
    </ContextTheme.Provider>
  );
};

export const useContextTheme = () => useContext(ContextTheme);
