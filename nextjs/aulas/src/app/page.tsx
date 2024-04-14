import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto">
      <ul className="w-full max-w-[180px]">
        <li className="border-b border-gray-700 py-2">
          <Link href="plataforms/" className="">
            Plataforma
          </Link>
        </li>
        <li className="border-b border-gray-700 py-2">
          <Link href="blog/" className="">
            Blog
          </Link>
        </li>
        <li className="border-b border-gray-700 py-2">
          <Link href="todo-server/" className="">
            Todo Server
          </Link>
        </li>
        <li className="border-b border-gray-700 py-2">
          <Link href="todo-client/" className="">
            Todo Client
          </Link>
        </li>
        <li className="border-b border-gray-700 py-2">
          <Link href="variable-private/" className="">
            Variável privada
          </Link>
        </li>
        <li className="border-b border-gray-700 py-2">
          <Link href="variable-public/" className="">
            Variável pública
          </Link>
        </li>
        <li className="border-b border-gray-700 py-2">
          <Link href="script/" className="">
            Script externo
          </Link>
        </li>
        <li className="border-b border-gray-700 py-2">
          <Link href="routerquery/" className="">
            useRouter
          </Link>
        </li>
        <li className="border-b border-gray-700 py-2">
          <Link href="css-module/" className="">
            CSS module
          </Link>
        </li>
        <li className="border-b border-gray-700 py-2">
          <Link href="layout/" className="">
            Layout
          </Link>
        </li>
      </ul>
    </main>
  );
}
