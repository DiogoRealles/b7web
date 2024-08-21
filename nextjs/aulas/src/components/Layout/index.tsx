import React, { ReactElement } from 'react';

import styles from '@/styles/layout.module.css';
import Navbar from '../Navbar';

type Props = {
  children: ReactElement;
};

const Index = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Navbar />
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <h1>FOOTER</h1>
      </footer>
    </div>
  );
};

export default Index;
