// components/ChatbotPopup4.tsx
import React, { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import x from '../public/x.png';

interface ChatbotPopup4Props {
  onClose: () => void;
}

const ChatbotPopup4: FunctionComponent<ChatbotPopup4Props> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseChat = (): void => {
    setIsOpen(false);
    onClose();
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
            <select className="px-4 py-2 m-3 text-base text-slate-950 bg-slate-50 rounded-xl mr-4">
              <option value="Français">Français</option>
              <option value="Anglais">Anglais</option>
              <option value="Arabe">Arabe</option>
            </select>
            <Link href="/quizPage">
              <button
                className="px-4 py-2 m-3 text-base text-slate-200 bg-blue-800 rounded-xl mr-4"
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ChatbotPopup4;