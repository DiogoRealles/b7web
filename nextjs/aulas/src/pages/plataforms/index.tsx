import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';

const Index = () => {
  return (
    <Layout>
      <div className="">
        <Head>
          <title>B7 Web - Plataformas</title>
        </Head>
        <h1>Plataformas</h1>
        <nav>
          <ul>
            <li>
              <a href="plataforms/xbox">Xbox</a>
            </li>
            <li>
              <a href="plataforms/ps5">PS5</a>
            </li>
            <li>
              <a href="plataforms/pc">PC</a>
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  );
};

export default Index;
