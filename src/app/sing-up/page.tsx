"use client";
import Image from "next/image";
import Logo from "/public/logo.svg";
import Password from "/public/password.svg";
import Email from "/public/email.svg";
import Footer from "../components/Footer";
import { useState } from "react";
import supabase from "../lib/supabase/client";
import { useRouter } from "next/navigation";
import { SignUp } from "../lib/auth-functions";

function SingUpPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [Error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRetypePasswordChange = (e) => {
    setRetypePassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== retypePassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const result = await SignUp({ email, password, name });
      const { error } = JSON.parse(result);

      if (error) {
        setError(error);
      }
      router.push("/Home");
    } catch (error) {
      console.error("Error during sign in:", error.message);
      // Puedes manejar el error de inicio de sesión aquí
    }
  };

  const isEmailVisible = email.trim() === "";
  const isPasswordVisible = password.trim() === "";
  const isRetypePasswordVisible = retypePassword.trim() === "";
  const isNameVisible = name.trim() === "";

  return (
    <main className="bg-darkBlue w-full h-full">
      <header>
        <a href="/" className="flex items-center">
          <Image src={Logo} alt="logo" />
          <h1 className="text-golden text-5xl">Master Finance</h1>
        </a>
      </header>
      <section className="flex flex-col w-[400px] mx-auto md:bg-secondary rounded-[50px] p-6">
        <div className="flex justify-center w-full">
          <h2 className="text-textColor text-4xl mt-10">SIGN UP</h2>
        </div>
        <div>
          <form className="flex flex-col p-3" onSubmit={handleSubmit}>
            <label className="border-b-4 border-textColor mb-9 cursor-pointer">
              <span className="ml-3 absolute text-textColor flex gap-4">
                <Image src={Email} alt="email" />
                <p className={isNameVisible ? "block" : "hidden"}>Name</p>
              </span>
              <input
                name="name"
                type="text"
                value={name}
                onChange={handleNameChange}
                autoComplete="off"
                className="w-full bg-secondary px-10 text-textColor border-none outline-none"
              />
            </label>
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
                <p className={isPasswordVisible ? "block" : "hidden"}>
                  Password
                </p>
              </span>
              <input
                name="password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                autoComplete="new-password"
                className="w-full bg-secondary px-10 text-textColor  border-none outline-none"
              />
            </label>
            <label className="border-b-4 border-textColor mb-9 cursor-pointer">
              <span className="ml-3 absolute text-textColor flex gap-4">
                <Image src={Password} alt="password" />
                <p className={isRetypePasswordVisible ? "block" : "hidden"}>
                  Retype Password
                </p>
              </span>
              <input
                name="retypePassword"
                type="password"
                value={retypePassword}
                onChange={handleRetypePasswordChange}
                autoComplete="new-password"
                className="w-full bg-secondary px-10 text-textColor  border-none outline-none"
              />
            </label>
            <a href="/sing-in" className="text-textColor text-center mb-4">
              Alredy have an account? Sing In
            </a>
            <button
              type="submit"
              className="text-secondary border-2 border-textColor py-3 bg-golden rounded-2xl font-extrabold"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </section>
      {Error && (
        <p className="text-red-500 text-sm mb-3">{Error}</p>
      )}
      <Footer />
    </main>
  );
}

export default SingUpPage;
