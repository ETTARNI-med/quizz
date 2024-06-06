import Image from "next/image";
// import Main from "./main";
import ChatBot from "../pages/Chatbot";
import { QuizProvider } from '../pages/QuizContext';

export default function Home() {
  return (
    <QuizProvider className="">
      <ChatBot></ChatBot>
    </QuizProvider>
  );
}
