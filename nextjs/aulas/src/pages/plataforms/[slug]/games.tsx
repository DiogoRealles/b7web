import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Head from 'next/head';

const Games = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <div>
        <Head>
          <title>Games de: {slug}</title>
        </Head>
        <h1>Games de: {slug}</h1>
        <ul>
          <li>Game 1</li>
          <li>Game 2</li>
          <li>Game 3</li>
        </ul>
      </div>
    </Layout>
  );
};

export default Games;
