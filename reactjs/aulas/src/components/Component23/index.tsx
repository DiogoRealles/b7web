'use client';

import { useEffect, useState } from 'react';
import { User } from '@/types/UserFetch';
import Image from 'next/image';
import Link from 'next/link';

const Index = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
      })
      .catch((error) => {
        console.log('[ERROR]: ', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 23</h1>
        <p>HTTP GET: (THEN / CATCH / FINNALY)</p>
      </header>

      <div className="flex place-content-center h-screen">
        {loading && 'Loading...'}
        {!loading && users.length > 0 && (
          <ul className="flex gap-8 flex-wrap justify-center">
            {users.map((user) => (
              <li
                className="bg-purple-400 text-black rounded-xl w-full max-w-60"
                key={user.id}
              >
                <div className="border-2 border-gray-500 overflow-hidden w-28 h-28 rounded-full mx-auto">
                  <Image
                    className="w-full h-full mx-auto inline-block object-cover align-middle"
                    src={`https://randomuser.me/api/portraits/women/${
                      user.id + 1
                    }.jpg`}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>

                <div className="bg-white p-5 rounded-es-xl rounded-ee-xl pt-10">
                  <h4 className="text-xl font-bold text-center">{user.name}</h4>
                  <p className="text-base font-normal text-center text-black/80 mb-5">
                    {user.address.city}
                  </p>

                  <ul className="flex justify-center items-center">
                    <li className="text-center text-sm text-black/40">
                      <Link href={`mailto:${user.email.toLowerCase()}`}>
                        {user.email.toLowerCase()}
                      </Link>
                    </li>
                  </ul>

                  <ul className="pt-5">
                    <li className="flex justify-center items-center">
                      <Link
                        className="bg-black/80 text-white text-sm text-center py-2 px-8 rounded-full mx-auto inline-block"
                        href={`tel:+${user.phone}`}
                      >
                        Contact me
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        )}
        {!loading && users.length === 0 && 'Não há usuários para exibir.'}
      </div>
    </section>
  );
};

export default Index;
