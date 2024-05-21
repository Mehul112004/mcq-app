"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    localStorage.setItem("score", 0);
  });
  const [show, setShow] = useState(false);
  return (
    <div className="flex justify-center items-center w-screen h-screen relative">
      <Image
        src={"/bg.jpg"}
        fill={true}
        alt="Background"
        onLoadingComplete={() => setShow(true)}
      />
      <div className=" w-3/4 h-3/4 absolute flex justify-center items-center flex-col gap-10 rounded-2xl border drop-shadow-2xl backdrop-blur-2xl shadow-2xl shadow-black ">
        <h1 className=" px-8 py-4 bg-gray-500 text-white font-mono rounded-xl">
          MCQ Game
        </h1>
        <Link
          href="/question/0"
          className="px-8 py-4 bg-[#B391FF] text-white font-mono rounded-xl animate-scaled"
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
