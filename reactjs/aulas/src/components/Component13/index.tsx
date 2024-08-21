'use client';

import { questions } from '@/data/questions';

import { useState } from 'react';
import QuestionItem from './QuestionItem';
import Results from './Results';

const Index = () => {
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showresult, setShowResult] = useState(false);

  const title = 'Quiz something';

  const loadNextQuestion = () => {
    if (questions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  };

  const handleRestartButton = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <h2 className="p-5 font-bold text-2xl border-b border-gray-300">
          {title}
        </h2>
        <div className="p-5">
          {!showresult && (
            <QuestionItem
              question={questions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />
          )}

          {showresult && <Results questions={questions} answers={answers} />}
        </div>
        <div className="p-5 text-center border-r border-gray-300">
          {!showresult &&
            `${currentQuestion + 1} de ${questions.length} perguntas ${
              questions.length === 1 ? '' : 's'
            }
          `}

          {showresult && (
            <button
              className="px-3 py-2 rounded-md bg-blue-700 text-white"
              onClick={handleRestartButton}
            >
              Reinniciar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
