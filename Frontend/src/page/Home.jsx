import React from "react";

export const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex bg-amber-500">
        <aside className="w-[20%] h-auto bg-amber-950">
          <h1 className="text-[30px] text-green-600 text-center">Home</h1>
        </aside>
        <main className="w-full h-full flex flex-col items-center bg-amber-900"></main>
      </div>
    </>
  );
};
