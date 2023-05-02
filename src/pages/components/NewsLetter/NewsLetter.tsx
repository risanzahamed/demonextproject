import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-neural-800 h-60 grid grid-cols-2 place-items-center">
        <h1 className="bg-transparent text-5xl text-shades-500 font-bold uppercase tracking-wider">
          Get the notification
        </h1>
        <div className="w-full px-2 bg-transparent grid grid-cols-12">
          <input
            className="p-4 col-span-8"
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <input
            className="col-span-4 p-4 bg-primary-500 text-shades-500 text-lg uppercase tracking-wider font-semibold"
            type="submit"
            value="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
