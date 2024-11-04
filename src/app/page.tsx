"use client";
import Image from "next/image";
import Hero from "../../public/hero.svg";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-hot-toast";

export default function Home() {
  const handleCopy = () => {
    const command = "git clone git@github.com:user/repo.git";
    navigator.clipboard.writeText(command).then(() => {
      toast.success("Command copied to clipboard!");
    });
  };

  return (
    <main className="justify-center items-center flex flex-col flex-grow overflow-x-hidden">
     
      <Image
        src={Hero}
        width={350}
        height={350}
        alt="hero image"
        className="ml-8 sm:ml-14 p-2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px]"
      />
      <div className="text-center px-2 sm:max-w-[500px]">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">
          Welcome to tooodooo
        </h1>
        <p className="text-lg text-zinc-400 mb-4">
          A simple project to learn NextJS, TypeScript, Prisma, Clerk, and
          TailwindCSS.
        </p>
        <div className="flex justify-center items-center gap-3">
          <code className="bg-gray-100 text-zinc-800 px-2 py-1 rounded-lg select-all">
            git clone git@github.com:user/repo.git
          </code>
          <FiCopy
            className="text-xl cursor-pointer text-zinc-600 hover:text-zinc-900"
            onClick={handleCopy}
            title="Copy"
          />
        </div>
      </div>
    </main>
  );
}
