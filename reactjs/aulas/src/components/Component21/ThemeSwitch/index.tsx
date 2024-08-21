import { useContextTheme } from '@/contexts/ContextTheme';
import React from 'react';

const Index = () => {
  const themeCtx = useContextTheme();

  const handleThemeToggle = () => {
    if (themeCtx) {
      themeCtx.setTheme(themeCtx.theme === 'dark' ? 'light' : 'dark');
    }
  };

  return (
    <div className="p-3 text-center cursor-pointer" onClick={handleThemeToggle}>
      {themeCtx?.theme === 'dark' && 'Mudar para Light'}
      {themeCtx?.theme === 'light' && 'Mudar para Dark'}
    </div>
  );
};

export default Index;
