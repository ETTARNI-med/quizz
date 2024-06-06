import React, { createContext, useState, useContext, ReactNode } from 'react';

interface QuizContextType {
  pdfType: string;
  theme: string;
  numberOfQuestions: number;
  language: string;
  setPdfType: (pdfType: string) => void;
  setTheme: (theme: string) => void;
  setNumberOfQuestions: (numberOfQuestions: number) => void;
  setLanguage: (language: string) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [pdfType, setPdfType] = useState<string>('');
  const [theme, setTheme] = useState<string>('');
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(1);
  const [language, setLanguage] = useState<string>('');

  return (
    <QuizContext.Provider value={{ pdfType, theme, numberOfQuestions, language, setPdfType, setTheme, setNumberOfQuestions, setLanguage }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
