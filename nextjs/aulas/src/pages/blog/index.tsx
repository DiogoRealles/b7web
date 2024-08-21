import { Post } from '@/types/Post';
import Link from 'next/link';
import Layout from '@/components/Layout';
import Head from 'next/head';

type Props = {
  posts: Post[];
};

const Index = ({ posts }: Props) => {
  return (
    <Layout>
      <div>
        <Head>
          <title>B7 Web - Blog.</title>
        </Head>
        <h1>Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 7200,
  };
};

export default Index;
