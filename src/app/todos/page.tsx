import Loading from "@/components/Loading";
import TodosList from "@/components/TodosList";
import React, { Suspense } from "react";

const page = async () => {
  return (
    <main className="flex items-center justify-center flex-col py-14 sm:py-16">
      <h1 className="text- sm:text-3xl font-bold text-zinc-900 mb-4">
        Your tooodooos
      </h1>
      <Suspense fallback={<Loading />}>
        <TodosList />
      </Suspense>
    </main>
  );
};

export default page;
