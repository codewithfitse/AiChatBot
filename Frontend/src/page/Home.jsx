import React from "react";

export const Home = () => {
  return (
    <>
      <div className="w-full h-screen flex bg-amber-500">
        <aside className="w-[20%] h-auto bg-amber-950">
          <h1 className="text-[30px] text-green-600 text-center">Home</h1>
        </aside>
        <main className="w-full h-full flex flex-col items-center bg-amber-900">
          <nav className="w-full h-[50px] flex justify-around items-center bg-amber-800">
            <h1 className="text-white text-[20px]">Home</h1>
            <h1 className="text-white text-[20px]">Home</h1>
            <h1 className="text-white text-[20px]">Home</h1>
          </nav>
          <div className="w-full h-full flex justify-center bg-amber-700">
            <h1 className="">Hey, Fitsum. Ready to dive in?</h1>
            <div className="w-fit h-fit mt-52 px-5 py-3 rounded-2xl bg-amber-500">
              <h1 className="">Ask</h1>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
