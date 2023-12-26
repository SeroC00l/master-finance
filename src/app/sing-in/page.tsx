"use client";
import Image from "next/image";
import Logo from "/public/logo.svg";
import Password from "/public/password.svg";
import Email from "/public/email.svg";
import Footer from "../components/Footer";
import supabase from "../supabase/client";
import { useState } from "react";

function SingInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberMeChange = (e) => setRememberMe(e.target.checked);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      console.log("User signed in:", data);
      // Puedes redirigir al usuario a la página de inicio después del inicio de sesión
    } catch (error) {
      console.error("Error during sign in:", error.message);
      // Puedes manejar el error de inicio de sesión aquí
    }
  };

  const isEmailVisible = email.trim() === "";
  const isPasswordVisible = password.trim() === "";

  return (
    <main className="bg-darkBlue h-screen w-screen">
      <header>
        <a href="/" className="flex items-center">
          <Image src={Logo} alt="logo" />
          <h1 className="text-golden text-5xl">Master Finance</h1>
        </a>
      </header>
      <div className="flex flex-col w-[400px] mx-auto md:bg-secondary rounded-[50px] p-6">
        <div className="flex justify-center w-full">
          <h2 className="text-textColor text-4xl my-10">SING IN</h2>
        </div>
        <div>
          <form className="flex flex-col p-3" onSubmit={handleSignIn}>
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
            <button
              type="submit"
              className="text-secondary border-2 border-textColor py-3 bg-golden rounded-2xl font-extrabold"
            >
              SING IN
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default SingInPage;
