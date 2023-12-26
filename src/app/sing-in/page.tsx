import Image from "next/image";
import Logo from "/public/logo.svg";
import Password from "/public/password.svg";
import Email from "/public/email.svg";
import Footer from "../components/Footer";

function SingInPage() {
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
          <h2 className="text-textColor text-4xl mt-10">SING IN</h2>
        </div>
        <div>
          <form className="flex flex-col p-3">
            <label className="border-b-4 border-textColor mb-9 cursor-pointer">
              <span className="ml-3 absolute text-textColor flex gap-4">
                <Image src={Email} alt="email" />
                <p>Email</p>
              </span>
              <input
                name="email"
                type="email"
                className="w-full bg-secondary px-10 text-textColor border-none outline-none"
              />
            </label>
            <label className="border-b-4 border-textColor mb-9 cursor-pointer">
              <span className="ml-3 absolute text-textColor flex gap-4">
                <Image src={Password} alt="password" />
                <p>Password</p>
              </span>
              <input
                name="password"
                type="password"
                className="w-full bg-secondary px-10 text-textColor  border-none outline-none"
              />
            </label>
            <label className="flex justify-between mb-9">
              <label>
                <input type="checkbox" name="remember" />
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
