import React, { useState } from "react";
import { sendMsgToOpenAi } from "../Openai";

export const Home = () => {
  const [input, setInput] = useState("");

  const handleClick = async () => {
    const res = await sendMsgToOpenAi(input);
    console.log(res);
  };

  return (
    <>
      <div className="w-full min-h-full flex bg-black text-white">
        <aside className="w-[20%] h-auto bg-gray-950">
          <h1 className="text-[15px] lg:text-[30px] text-center">Dashboard</h1>
        </aside>
        <main className="w-full h-full flex flex-col items-center bg-gray-900">
          <nav className="w-full h-[25px] lg:h-[50px] flex justify-around items-center text-[10px] lg:text-[20px] bg-white/2">
            <h1 className="">FitseGpt</h1>
            <h1 className="">Home</h1>
            <h1 className="">Home</h1>
          </nav>
          <div className="w-full h-full pb-10 bg-transparent">
            <div className="w-full h-full mt-20 lg:mt-40 flex flex-col ju items-center space-y-7">
              <h1 className="text-[20px] lg:text-[30px]">
                Hey, User. Ready to dive in?
              </h1>

              <div className="chat">
                <img
                  src="logo.webp"
                  alt=""
                  srcset=""
                  className="size-[25px] m-4 bg-gray-600"
                />
                <p className="w-[90%] text-[10px] lg:text-[18px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  corrupti delectus pariatur debitis sed.
                </p>
              </div>

              <div className="chat rounded-[10px]">
                <img
                  src="logo.webp"
                  alt=""
                  srcset=""
                  className="size-[25px] m-4 bg-gray-600"
                />
                <p className="w-[90%] text-[10px] lg:text-[18px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  corrupti delectus pariatur debitis sed. Consectetur natus ad
                  ipsa cumque nostrum exercitationem accusamus eligendi laborum
                  qui, rerum tenetur non sunt sit.
                </p>
              </div>

              <div className="w-[80%] h-fit flex items-center px-5 py-3 rounded-[10px] bg-gray-950 space-x-2">
                <input
                  type="text"
                  name={input}
                  value={input}
                  className="w-full h-[50px] p-3 bg-gray-900 rounded-[5px] placeholder:text-white"
                  placeholder="Type whats on your mind?"
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  className="px-3 bg-white text-black text-[30px] rounded-[5px]"
                  onClick={handleClick}
                >
                  ✓
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
