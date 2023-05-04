import React from 'react';
import styles from "../styles/login&signup.module.css";

const login = () => {
  return (
    <div
      className={`${styles.login_bg} flex items-center justify-center bg-shades-700 bg-blend-multiply`}
    >
      <div className="flex items-center justify-center text-center bg-tra w-2/5 h-3/4 border-2 border-shades-500 rounded-xl bg-transparent p-32 backdrop-blur">
        <form className="bg-transparent">
          <h1 className="text-4xl uppercase text-accent-400 text-center font-semibold tracking-wider bg-transparent">
            Welcome back to us
          </h1>
          <div className="py-8 bg-transparent">
            <input
              className="w-full h-10 border-b border-shades-500 outline-none text-lg bg-transparent text-shades-500 placeholder:text-shades-500"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
          </div>

          <div className='bg-transparent'>
            <input
              className="w-full h-10 border-b border-shades-500 outline-none text-lg bg-transparent text-shades-500 placeholder:text-shades-500"
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="py-3 bg-transparent"></div>
          <input
            className="bg-primary-900 w-full py-3 rounded-sm text-shades-500 uppercase text-lg tracking-wider font-semibold hover:bg-primary-600"
            type="submit"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default login;