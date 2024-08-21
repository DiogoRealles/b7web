import { Student } from '@/types/Student';
import Image from 'next/image';

type Props = {
  students: Student[];
};

const Index = ({ students }: Props) => {
  return (
    <table className="w-full border border-gray-600 rounded-md overflow-hidden">
      <thead className="">
        <tr className="text-left border-b border-gray-600 bg-gray-800">
          <th className="p-3">Name</th>
          <th className="p-3">Status</th>
          <th className="p-3">Grade 1</th>
          <th className="p-3">Grade 2</th>
          <th className="p-3">Final Grade</th>
        </tr>
      </thead>
      <tbody className="">
        {students.map(({ id, name, avatar, active, email, grade1, grade2 }) => (
          <tr
            className="text-gray-800 bg-gray-400 border-b border-gray-600"
            key={id}
          >
            <td className="p-3 flex items-center">
              <Image
                className="w-10 h-10 rounded-full mr-3"
                src={avatar}
                alt={name}
                width={40}
                height={40}
              />
              <div className="">
                <div className="font-bold">{name}</div>
                <div className="text-black/60">{email}</div>
              </div>
            </td>
            <td className="p-3">
              {active && (
                <div className="py-1 px-2 inline-block rounded-md border border-green-800 bg-green-600 text-white text-xs">
                  Active
                </div>
              )}
              {!active && (
                <div className="py-1 px-2 inline-block rounded-md border border-red-800 bg-red-600 text-white text-xs">
                  Inactive
                </div>
              )}
            </td>
            <td className="p-3">{grade1.toFixed(1)}</td>
            <td className="p-3">{grade2.toFixed(1)}</td>
            <td className="p-3 font-bold">
              {active ? ((grade1 + grade2) / 2).toFixed(1) : '--'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Index;
