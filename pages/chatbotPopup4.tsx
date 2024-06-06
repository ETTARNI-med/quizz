import React, { FunctionComponent, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';
import x from '../public/x.png';
import { useQuiz } from './QuizContext';

interface ChatbotPopup4Props {
  onClose: () => void;
}

const ChatbotPopup4: FunctionComponent<ChatbotPopup4Props> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { language, setLanguage, pdfType, theme, numberOfQuestions } = useQuiz();
  const router = useRouter();

  const handleCloseChat = (): void => {
    setIsOpen(false);
    onClose();
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  const handleNextClick = () => {
    const data = { pdfType, theme, numberOfQuestions, language };
    axios.post('http://127.0.0.1:5000/api/submit', data)
      .then(response => {
        console.log('Data sent successfully:', response.data);
        router.push('/quizPage');
      })
      .catch(error => {
        console.error('There was an error sending the data:', error);
      });
  };

  return isOpen ? (
    <div className="absolute inset-0 flex items-center justify-center z-50">
      <div className="relative z-50 w-80 h-96 bg-[#A7E92F] rounded-2xl shadow-lg">
        <button
          className="absolute top-0 right-0 p-2 text-sm rounded-full"
          onClick={handleCloseChat}
        >
          <Image
            className="h-6 w-6 justify-items-end cursor-pointer"
            alt="Close"
            src={x}
          />
        </button>
        <div className="flex flex-col">
          <p className="text-lg font-semibold flex items-center justify-center px-4 py-2">
            La langue du quiz
          </p>
          <div className="h-14 flex flex-col mt-10 rounded-b-2xl">
            <select
              className="px-4 py-2 m-3 text-base text-slate-950 bg-slate-50 rounded-xl mr-4"
              value={language}
              onChange={handleSelectChange}
            >
              <option value="Français">Français</option>
              <option value="Anglais">Anglais</option>
              <option value="Arabe">Arabe</option>
            </select>
            <button
              className="px-4 py-2 m-3 text-base text-slate-200 bg-blue-800 rounded-xl mr-4"
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ChatbotPopup4;
