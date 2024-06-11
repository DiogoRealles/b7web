'use client';

import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { FormEvent, useState } from 'react';

const Index = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email === '' || password === '') {
      alert('Enter Email and Password! ⚠');

      return;
    }

    alert('Form Submited!');
    setEmail('');
    setPassword('');
  };

  const handlePassword = () => setIsShow(!isShow);

  return (
    <form
      onSubmit={handleFormSubmit}
      action="#"
      method="POST"
      className="rounded-lg p-5 w-full max-w-72 bg-black shadow-md dark:bg-white/5"
    >
      <header className="">
        <h2 className="text-center mb-10 text-white dark:text-orange-400 text-2xl font-bold">
          Login
        </h2>
      </header>

      <div className="flex flex-col gap-2 mb-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="border border-white/80 bg-white/10 ring-0 outline-none rounded-sm py-2 px-3 dark:border-orange-400 text-white placeholder:text-white/40"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <div className="relative">
          <input
            type={isShow ? 'text' : 'password'}
            placeholder="Enter your password"
            className="border border-white/80 bg-white/10 ring-0 outline-none rounded-sm py-2 px-3 dark:border-orange-400 text-white placeholder:text-white/40"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <button
            className="absolute top-1/3 right-3 z-1 text-white"
            type="button"
            onClick={handlePassword}
          >
            {isShow && <FaEyeSlash />}
            {!isShow && <FaEye />}
          </button>
        </div>
      </div>
      <button
        className="py-1 px-3 rounded-sm transition-all ease-linear font-semibold text-lg text-white border border-white bg-white/20 dark:text-orange-400 dark:border-orange-400"
        type="submit"
      >
        Login
      </button>

      <div className="mt-4">
        <p className="text-white/80">{email}</p>
        <p className="text-white/80"> {password}</p>
      </div>
    </form>
  );
};

export default Index;
