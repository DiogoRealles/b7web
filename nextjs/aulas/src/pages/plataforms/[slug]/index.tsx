import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Head from 'next/head';

const AboutPlataform = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <div>
        <Head>
          <title>Plataforma: {slug}</title>
        </Head>
        <h1>Plataforma: {slug}</h1>
        <a href={`${slug}/games`}>Games</a>
      </div>
    </Layout>
  );
};

export default AboutPlataform;
