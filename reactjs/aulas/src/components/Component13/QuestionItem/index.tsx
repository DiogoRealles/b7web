import { Question } from '@/types/Question';
import { useState } from 'react';

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
};

const Index = ({ question, count, onAnswer }: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const checkQuestion = (index: number) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(index);

      setTimeout(() => {
        onAnswer(index);
        setSelectedAnswer(null);
      }, 1000);
    }
  };

  return (
    <div>
      <div className="text-3xl font-bold mb-5">
        {count}. {question.question}
      </div>

      <div className="">
        {question.options.map((item, index) => (
          <div
            className={`border border-blue-300 px-3 py-2 rounded-md mb-4 bg-blue-100

            ${
              selectedAnswer !== null
                ? 'cursor-auto'
                : 'cursor-pointer hover:opacity-60'
            }
            ${
              selectedAnswer !== null &&
              selectedAnswer === question.answer &&
              selectedAnswer === index &&
              'bg-green-50 border-green-300'
            }
            ${
              selectedAnswer !== null &&
              selectedAnswer !== question.answer &&
              selectedAnswer === index &&
              'bg-red-100 border-red-300'
            }
            
            `}
            key={index}
            onClick={() => checkQuestion(index)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
