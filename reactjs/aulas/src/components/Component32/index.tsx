'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const SignUpFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Deve ter mínimo 2 letras' })
    .max(20, 'Máximo 20 letras'),
  lastname: z.string().min(2, 'Deve ter mínimo 2 letras').optional(),
  age: z
    .number({ invalid_type_error: 'Idade precisa ser um número!' })
    .min(18, 'Idade minima 18 anos!'),
});

const Index = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(SignUpFormSchema),
  });

  const handleSignUpForm = () => {
    alert('[SUCCESS] Form Submited ✔');
  };

  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 31</h1>
        <p>States</p>
      </header>

      <div className="grid place-content-center h-screen">
        <form
          onSubmit={handleSubmit(handleSignUpForm)}
          action={'https://jsonplaceholder.typicode.com/posts'}
          className="grid place-content-center h-screen gap-4"
          method="post"
        >
          <div className="">
            <input
              {...register('name')}
              className={`bg-white/10 ring-0 outline-none rounded py-2 px-3 text-white placeholder:text-white/40 border p-3 ${
                errors.name ? 'border-red-400' : 'border-white'
              }`}
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-400 text-sm">
                {errors.name.message as string}
              </p>
            )}
          </div>
          <div className="">
            <input
              {...register('lastname')}
              className={`bg-white/10 ring-0 outline-none rounded py-2 px-3 text-white placeholder:text-white/40 border p-3 ${
                errors.lastname ? 'border-red-400' : 'border-white'
              }`}
              placeholder="Lastname"
            />
            {errors.lastname && (
              <p className="text-red-400 text-sm">
                {errors.lastname.message as string}
              </p>
            )}
          </div>
          <div className="">
            <input
              {...register('age', { valueAsNumber: true })}
              className={`bg-white/10 ring-0 outline-none rounded py-2 px-3 text-white placeholder:text-white/40 border p-3 ${
                errors.age ? 'border-red-400' : 'border-white'
              }`}
              placeholder="Age"
            />
            {errors.age && (
              <p className="text-red-400 text-sm">
                {errors.age.message as string}
              </p>
            )}
          </div>

          <button
            className="py-1 px-3 rounded-sm transition-all ease-linear font-semibold text-lg text-white bg-white/20"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Index;
