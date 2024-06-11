import { students } from '@/data/students';
import StudentTable from './StudentTable';

const Index = () => {
  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 05</h1>
        <p>Componente com Props e Condicional</p>
      </header>

      <div className="place-content-center h-screen">
        <StudentTable students={students} />
      </div>
    </section>
  );
};

export default Index;
