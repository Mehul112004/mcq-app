"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import questions from "../../../constants/questions";
import Image from "next/image";

export default function Question({ params }) {
  const router = useRouter();
  const id = params.id;
  const questionIndex = parseInt(id, 10);
  const question = questions[questionIndex];

  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const storedScore = localStorage.getItem("score");
    setScore(storedScore ? parseInt(storedScore, 10) : 0);
  }, []);

  const handleNext = () => {
    if (selectedOption === question.correct) {
      const newScore = score + 1;
      setScore(newScore);
      localStorage.setItem("score", newScore);
    }
    if (questionIndex + 1 < questions.length) {
      router.push(`/question/${questionIndex + 1}`);
    } else {
      router.push("/result");
    }
  };

  if (!question) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen relative">
      <Image src={"/bg.jpg"} fill={true} alt="Background" />
      <div className="w-3/4 h-3/4 absolute flex justify-center items-center flex-col gap-10 rounded-2xl border drop-shadow-2xl backdrop-blur-2xl shadow-2xl shadow-black ">
        <div className="flex flex-col gap-8 px-10">
          <h2 className=" text-white sm:text-3xl text-lg font-semibold font-mono">{question.text}</h2>
          <div className="flex flex-col gap-2">
            {question.options.map((option, i) => (
              <div key={i} className="text-white flex gap-4">
                <input
                  type="radio"
                  id={`option${i}`}
                  name="option"
                  value={option}
                  onChange={() => setSelectedOption(option)}
                />
                <label htmlFor={`option${i}`} className="text-xl font-sans hover:cursor-pointer">{option}</label>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext} disabled={selectedOption === null} className=" px-8 py-4 bg-gray-500 text-white font-mono rounded-xl hover:bg-black hover:cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
}
