'use client';

import { SignUpForm } from '@/types/SignUpForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from './Input';

const Index = () => {
  const { control, handleSubmit, setValue } = useForm<SignUpForm>();

  const handleFormSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      action="#"
      method="POST"
      className="rounded-lg p-5 w-full max-w-72 bg-white/10 shadow-md"
    >
      <header className="">
        <h2 className="text-center mb-10 text-white dark:text-orange-400 text-2xl font-bold">
          Register
        </h2>
      </header>

      <div className="flex flex-col gap-2 mb-4">
        <Input
          control={control}
          name="name"
          rules={{ required: true, minLength: 2, maxLength: 20 }}
        />
        <Input control={control} name="lastname" rules={{}} />
        <Input
          control={control}
          name="age"
          rules={{
            required: 'Age need min. 18 or max. 120',
            min: 18,
            max: 120,
          }}
        />
      </div>
      <button
        className="py-1 px-3 rounded-sm transition-all ease-linear font-semibold text-lg text-white border border-white bg-white/20 dark:text-orange-400 dark:border-orange-400"
        type="submit"
      >
        Register
      </button>
      <button onClick={() => setValue('age', 18)} type="button">
        +18
      </button>
    </form>
  );
};

export default Index;
