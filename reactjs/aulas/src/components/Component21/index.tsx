'use client';

import { ContextThemeProvider } from '@/contexts/ContextTheme';
import Container from './Container';
import Button from './Button';
import ThemeSwitch from './ThemeSwitch';
import Form from './Form';

const Index = () => {
  return (
    <ContextThemeProvider>
      <Container>
        <header className="pt-10 text-center">
          <h1 className="text-3xl">Component 24</h1>
          <p>Theme Dark & Light</p>
        </header>

        <section className="">
          <div className="grid place-content-center h-screen">
            <ThemeSwitch />
            <Form />
          </div>
        </section>
      </Container>
    </ContextThemeProvider>
  );
};

export default Index;
