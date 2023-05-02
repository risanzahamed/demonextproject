import React from "react";

const FeedbackForm = () => {
  return (
    <div className="bg-primary-500 w-full h-full">
      <div className="grid place-items-center px-40 bg-transparent py-24">
        <h1 className="text-6xl font-semibold capitalize bg-transparent text-shades-500">On Your mind</h1>
        <form className="w-full py-10 grid grid-cols-2 gap-8 bg-transparent" action="">
          <input
            className="bg-shades-500 col-span-1 outline-none p-4 rounded-xl text-shades-900 text-lg placeholder:text-shades-900"
            type="text"
            name=""
            id=""
            placeholder="First Name"
          />
          <input
            className="bg-shades-500 col-span-1 outline-none p-4 rounded-xl text-shades-900 text-lg placeholder:text-shades-900"
            type="text"
            name=""
            id=""
            placeholder="Second Name"
          />
          <input
            className="bg-shades-500 col-span-1 outline-none p-4 rounded-xl text-shades-900 text-lg placeholder:text-shades-900"
            type="text"
            name=""
            id=""
            placeholder="Enter Email"
          />
          <input
            className="bg-shades-500 col-span-1 outline-none p-4 rounded-xl text-shades-900 text-lg placeholder:text-shades-900"
            type="text"
            name=""
            id=""
            placeholder="Enter Phone"
          />
          <input
            className="bg-shades-500 col-span-2 outline-none p-4 rounded-xl text-shades-900 text-lg placeholder:text-shades-900"
            type="text"
            name=""
            id=""
            placeholder="Address"
          />
          <textarea
            className="bg-shades-500 col-span-2 outline-none p-4 rounded-xl text-shades-900 text-lg placeholder:text-shades-900"
            name=""
            id=""
            placeholder="Enter Your message"
          />
          <input
            className="col-span-2 bg-secondary-500 hover:bg-neural-800 p-4 rounded-xl text-shades-500 text-lg uppercase tracking-wider font-semibold"
            type="submit"
            value="Send Message"
          />
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
