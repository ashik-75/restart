import React from "react";

const TimeLine: React.FC = () => {
  return (
    <div className="font-inter mx-auto max-w-5xl space-y-5 p-5">
      <h1 className="underline underline-offset-2 dark:text-zinc-300">
        My Work History
      </h1>

      <div className="flex gap-x-10 ">
        <div className="max-w-20 whitespace-nowrap text-sm dark:text-zinc-400">
          5 March 2022
        </div>
        <div className="relative  after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:bg-slate-600">
          <div className="flex h-7 w-7 items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-zinc-600 dark:bg-zinc-50"></div>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold dark:text-zinc-300 md:text-2xl">
            Frontend Software Engineer
          </h1>
          <p className="mb-5 text-sm dark:text-zinc-400">
            Devnest LLC, Savar Dhaka
          </p>
          <p className="max-w-md dark:text-zinc-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius modi
            magnam natus inventore? Qui inventore recusandae atque? Repudiandae,
            qui quo?
          </p>
        </div>
      </div>

      <div className="flex gap-x-10 ">
        <div className="max-w-20 whitespace-nowrap text-sm dark:text-zinc-400">
          10 March 2023
        </div>
        <div className="relative  after:absolute after:bottom-0 after:start-3.5 after:top-7 after:w-px after:bg-slate-600">
          <div className="flex h-7 w-7 items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-zinc-600 dark:bg-zinc-50"></div>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold dark:text-zinc-300 md:text-2xl">
            Frontend Software Engineer
          </h1>
          <p className="mb-5 text-sm dark:text-zinc-400">
            Gigatech solution, Savar Dhaka
          </p>
          <p className="max-w-md dark:text-zinc-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius modi
            magnam natus inventore? Qui inventore recusandae atque? Repudiandae,
            qui quo?
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
