'use client';

import { SignUpForm } from '@/types/SignUpForm';
import { Input } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

const Index = () => {
  const { control, handleSubmit } = useForm<SignUpForm>();

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
        <Controller
          control={control}
          name="name"
          rules={{ required: true, minLength: 2, maxLength: 20 }}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              className="text-white"
              error={fieldState.invalid}
            />
          )}
        />
        <Controller
          control={control}
          name="lastname"
          render={({ field }) => <Input {...field} className="text-white" />}
        />
        <Controller
          control={control}
          name="age"
          render={({ field }) => <Input {...field} className="text-white" />}
          rules={{ required: true, min: 18 }}
        />

        <button className="" type="button">
          Register
        </button>
      </div>
    </form>
  );
};

export default Index;
