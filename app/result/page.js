"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Result() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const storedScore = localStorage.getItem("score");
    setScore(storedScore ? parseInt(storedScore, 10) : 0);
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen relative">
      <Image src={"/bg.jpg"} fill={true} alt="Background" />
      <div className="w-3/4 h-3/4 absolute flex justify-center items-center flex-col gap-10 rounded-2xl border drop-shadow-2xl backdrop-blur-2xl shadow-2xl shadow-black">
        <h2 className=" text-4xl text-white font-mono font-thin">
          Your Score: {score}
        </h2>
        <Link
          href="/"
          onClick={() => {
            localStorage.setItem("score", 0);
          }}
          className=" px-8 py-4 bg-gray-500 text-white font-mono rounded-xl hover:bg-black hover:cursor-pointer"
        >
          Restart Quiz
        </Link>
      </div>
    </div>
  );
}
