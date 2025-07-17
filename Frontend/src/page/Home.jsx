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
            <h1 className="text-white text-[20px]">FitseGpt</h1>
            <h1 className="text-white text-[20px]">Home</h1>
            <h1 className="text-white text-[20px]">Home</h1>
          </nav>
          <div className="w-full h-full bg-amber-700">
            <div className="w-full h-full mt-52 flex flex-col ju items-center space-y-7">
              <h1 className="">Hey, User. Ready to dive in?</h1>

              <div className="chat">
                <img
                  src="logo.webp"
                  alt=""
                  srcset=""
                  className="size-[25px] m-4 bg-gray-600"
                />
                <p className="w-[80%] text-[20px]">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
                  corrupti delectus pariatur debitis sed. Consectetur natus ad
                  ipsa cumque nostrum exercitationem accusamus eligendi laborum
                  qui, rerum tenetur non sunt sit.
                </p>
              </div>

              <div className="w-[80%] h-fit flex items-center px-5 py-3 rounded-[10px] bg-amber-500 space-x-2">
                <input
                  type="text"
                  className="w-full h-[30px] p-2 bg-amber-50 rounded-[5px] placeholder:text-gray-900"
                  placeholder="Type whats on your mind?"
                />
                <button className="px-2 py-1 bg-amber-300 rounded-[5px]">
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
