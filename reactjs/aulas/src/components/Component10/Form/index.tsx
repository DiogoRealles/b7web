'use client';

import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { FormEvent, useState } from 'react';
import { TUser } from '@/types/User';

const Index = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [fullname, setFullname] = useState<TUser>({
    email: 'diogo@email.com',
    password: '@Mudar123',
  });

  const handleClearButton = () => {
    setFullname({ email: '', password: '' });
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (fullname.email === '' || fullname.password === '') {
      alert('Enter Email and Password! ⚠');

      return;
    }

    alert('Form Submited!');
    setFullname({ email: '', password: '' });
  };

  const handlePassword = () => setIsShow(!isShow);

  return (
    <form
      onSubmit={handleFormSubmit}
      action="#"
      method="POST"
      className="rounded-lg p-5 w-full max-w-72 bg-white/10"
    >
      <div className="flex flex-col gap-2 mb-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-white/10 ring-0 outline-none rounded-sm py-2 px-3"
          value={fullname.email}
          onChange={(event) =>
            setFullname({ ...fullname, email: event.target.value })
          }
        />
        <div className="relative">
          <input
            type={isShow ? 'text' : 'password'}
            placeholder="Enter your password"
            className="bg-white/10 ring-0 outline-none rounded-sm py-2 px-3"
            value={fullname.password}
            onChange={(event) =>
              setFullname({ ...fullname, password: event.target.value })
            }
          />
          <button
            className="absolute top-1/3 right-3 z-1"
            type="button"
            onClick={handlePassword}
          >
            {isShow && <FaEyeSlash />}
            {!isShow && <FaEye />}
          </button>
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <button
          className="flex-1 py-1 px-3 rounded-sm bg-white/20 hover:bg-white/10 transition-all ease-linear font-semibold text-lg"
          type="submit"
        >
          Login
        </button>
        <button
          className="flex-1 py-1 px-3 rounded-sm bg-white/5 hover:bg-white/10 transition-all ease-linear font-semibold text-lg"
          type="button"
          onClick={handleClearButton}
        >
          Clear
        </button>
      </div>

      <div className="mt-4">
        <p>{email}</p>
        <p> {password}</p>
      </div>
    </form>
  );
};

export default Index;
