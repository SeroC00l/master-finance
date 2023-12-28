"use client";
import { useState } from "react";
import { SingIn } from "../lib/auth-functions";
import { useRouter } from "next/navigation";
import Password from "/public/password.svg";
import Email from "/public/email.svg";
import Image from "next/image";

function SingInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [Error, setError] = useState("");
  const router = useRouter();
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await SingIn({ email, password });
      
      const { error } = JSON.parse(result);

      if (error) {
        setError((error.message));
      }
      return router.push("/Home");
    } catch (error) {
      console.error("Error during sign in:", error.message);
    }
  };

  const isEmailVisible = email.trim() === "";
  const isPasswordVisible = password.trim() === "";

  return (
    <>
      <section className="flex flex-col w-[400px] mx-auto md:bg-secondary rounded-[50px] p-6">
        <div className="flex justify-center w-full">
          <h2 className="text-textColor text-4xl my-10">SING IN</h2>
        </div>
        <form className="flex flex-col p-3" onSubmit={handleSubmit}>
          <label className="border-b-4 border-textColor mb-9 cursor-pointer">
            <span className="ml-3 absolute text-textColor flex gap-4">
              <Image src={Email} alt="email" />
              <p className={isEmailVisible ? "block" : "hidden"}>Email</p>
            </span>
            <input
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              autoComplete="off"
              className="w-full bg-secondary px-10 text-textColor border-none outline-none"
            />
          </label>
          <label className="border-b-4 border-textColor mb-9 cursor-pointer">
            <span className="ml-3 absolute text-textColor flex gap-4">
              <Image src={Password} alt="password" />
              <p className={isPasswordVisible ? "block" : "hidden"}>Password</p>
            </span>
            <input
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="off"
              className="w-full bg-secondary px-10 text-textColor  border-none outline-none"
            />
          </label>
          <label className="flex justify-between mb-9">
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              <span className="text-textColor">Remember me</span>
            </label>
            <a href="/forgot-password" className="text-textColor">
              Forgot Password?
            </a>
          </label>
          <a href="/sing-up" className="text-textColor text-center mb-4">
            Don't have an account? Sign Up
          </a>
          <button
            type="submit"
            className="text-secondary border-2 border-textColor py-3 bg-golden rounded-2xl font-extrabold"
          >
            SING IN
          </button>
        </form>
      </section>
      {Error && <p className="absolute bg-red-500 text-white text-sm mb-3 inline-block p-4 rounded-md right-0 mr-4">{Error}</p>}
    </>
  );
}

export default SingInForm;
