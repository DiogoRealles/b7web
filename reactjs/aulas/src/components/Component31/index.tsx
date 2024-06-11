'use client';

import { Form, useForm } from 'react-hook-form';

const Index = () => {
  const { register, control } = useForm();

  const handleSuccess = () => {
    alert('[SUCCESS] New post created ✔');
  };

  const handleError = () => {
    alert('[ERROR] Try latter again ❌');
  };

  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 31</h1>
        <p>States</p>
      </header>

      <Form
        control={control}
        action={'https://jsonplaceholder.typicode.com/posts'}
        className="grid place-content-center h-screen gap-4"
        onSuccess={handleSuccess}
        onError={handleError}
        method="post"
      >
        <input
          {...register('userId', { required: true })}
          className="bg-white/10 ring-0 outline-none rounded py-2 px-3 text-white placeholder:text-white/40 border border-white p-3"
          placeholder="User ID"
        />
        <input
          {...register('title', { required: true })}
          className="bg-white/10 ring-0 outline-none rounded py-2 px-3 text-white placeholder:text-white/40 border border-white p-3"
          placeholder="Title"
        />
        <input
          {...register('body', { required: true })}
          className="bg-white/10 ring-0 outline-none rounded py-2 px-3 text-white placeholder:text-white/40 border border-white p-3"
          placeholder="Body..."
        />

        <button
          className="py-1 px-3 rounded-sm transition-all ease-linear font-semibold text-lg text-white bg-white/20"
          type="submit"
        >
          Register
        </button>
      </Form>
    </section>
  );
};

export default Index;
