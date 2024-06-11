import { Question } from '@/types/Question';

type Props = {
  questions: Question[];
  answers: number[];
};

const Index = ({ questions, answers }: Props) => {
  return (
    <div className="">
      {questions.map((item, index) => (
        <div className="mb-3" key={index}>
          <p className="font-bold">
            {index + 1}. {item.question}
          </p>

          <div className="">
            <span className="">
              ({item.answer === answers[index] ? 'Acertô' : 'Errrooou!'}) -{' '}
            </span>{' '}
            {item.options[item.answer]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;
