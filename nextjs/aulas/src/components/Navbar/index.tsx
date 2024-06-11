import { navigationLinks } from '@/utils/data';
import Link from 'next/link';
import React from 'react';
import styles from './style.module.css';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles.container}>
        {navigationLinks.map((link, index) => (
          <li className={styles.item} key={index}>
            <Link className={styles.link} href={link.path}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Index;
