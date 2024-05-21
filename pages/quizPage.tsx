// pages/quizPage.tsx
import React from 'react';
import Quiz from '../components/Quiz';

const QuizPage: React.FC = () => {
  const questions = [
    {
      question: "What are the key elements of a storyboard? Select one answer",
      options: ["Theme", "Pole", "Scene"],
      correctAnswerIndex: 0,
    },
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswerIndex: 0,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswerIndex: 1,
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#A7E92F]">
      <Quiz questions={questions} />
    </div>
  );
};

export default QuizPage;
