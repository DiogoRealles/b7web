import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Post } from '@/types/Post';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

type Props = {
  post: Post;
};

const Index = ({ post }: Props) => {
  const router = useRouter();

  return (
    <Layout>
      <div>
        <h1>Post</h1>
        <h2>{post.title}</h2>
        <p>{post.body}</p>

        <p>Pathname: {router.pathname}</p>
        <p>isFallback: {router.isFallback.toString()}</p>
      </div>
    </Layout>
  );
};

export default Index;

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));

  return { paths, fallback: true };
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};
