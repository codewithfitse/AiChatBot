import React from "react";

export const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen flex bg-amber-500">
        <div className="w-[20%] h-auto bg-amber-950">
          <h1 className="text-[30px] text-green-600">Home</h1>
        </div>
        <div className="w-[80%] h-auto bg-amber-900">
          <nav className="w-full h-auto bg-amber-900">
            <ul className="w-auto flex justify-around">
              <li className="text-[30px] text-center text-black">Home</li>
              <li className="text-[30px] text-center text-black">Home</li>
              <li className="text-[30px] text-center text-black">Home</li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
