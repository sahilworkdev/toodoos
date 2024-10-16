import Image from "next/image";
import Hero from "../../public/hero.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="justify-center items-center flex flex-col flex-grow overflow-x-hidden">
      <Image src={Hero} width={350} height={350} alt="hero png" className="ml-8 sm:ml-14 p-2 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px]" />
      <div className="text-center px-2 sm:max-w-[500px]">
        <h1 className="text-2xl sm:text-4xl font-bold  mb-4">
          Welcome to tooodooo
        </h1>
        <p className="text-lg text-zinc-400 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus
          beatae dolorem reprehenderit, repudiandae quibusdam tempore sit
          quisquam assumenda omnis?
        </p>
        <Link href='/add-todo' className="text-blue-400 font-medium underline">Add todo</Link>
      </div>
    </main>
  );
}
