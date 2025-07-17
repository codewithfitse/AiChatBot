import React from "react";

export const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen flex bg-amber-500">
        <aside className="w-[20%] h-auto bg-amber-950">
          <h1 className="text-[30px] text-green-600">Home</h1>
        </aside>
        <main className="w-[80%] h-auto flex flex-col items-center bg-amber-900">
          <nav className="w-full h-[50px] bg-amber-800">
            <ul className="w-auto flex justify-around items-center">
              <li className="text-[30px] text-center text-black">Home</li>
              <li className="text-[30px] text-center text-black">Home</li>
              <li className="text-[30px] text-center text-black">Home</li>
            </ul>
          </nav>

          <div className="w-full mt-96 flex flex-col items-center justify-center bg-amber-50">
            <h1 className="text-[30px] text-green-600">Home</h1>
            <h1 className="text-[30px] text-green-600">Home</h1>
            <h1 className="text-[30px] text-green-600">Home</h1>
            <h1 className="text-[30px] text-green-600">Home</h1>
            <h1 className="text-[30px] text-green-600">Home</h1>
          </div>
        </main>
      </div>
    </>
  );
};
