import Layout from '@/components/Layout';
import styles from '@/styles/css-module.module.css';
import Head from 'next/head';
import Image from 'next/image';

const Index = () => {
  const img_url =
    'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png';

  return (
    <Layout>
      <div className={styles.section}>
        <Head>
          <title>B7 Web - Css Modules</title>
        </Head>
        <h1>CSS Module</h1>

        <div className={styles.card}>
          <div className={styles.header}>
            <Image
              className={styles.img}
              src={img_url}
              alt=""
              width={280}
              height={280}
            />
          </div>
          <div className={styles.body}>
            <h4 className={styles.title}>Bulbasaur</h4>
            <p className={styles.text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              excepturi dignissimos explicabo corporis est pariatur
              necessitatibus vel odio unde quidem harum eius laudantium illo
              amet nulla ipsa cupiditate maxime.
            </p>

            <ul className={styles.list}>
              <li className={styles.item}>Grass</li>
              <li className={styles.item}>Poison</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
