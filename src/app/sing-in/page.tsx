import Image from "next/image";
import Logo from "../../../public/logo.svg";

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
          <h2 className="text-textColor text-4xl mt-10">LOGIN</h2>
        </div>
        <div>
          <form className="flex flex-col p-3">
            <label className="border-b-4 border-textColor mb-9 cursor-pointer">
              <span className="ml-3 absolute text-textColor flex gap-4">
                <img src="/email.svg" />
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
                <img src="/password.svg"></img>
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
              LOGIN
            </button>
          </form>
        </div>
      </div>
      <footer className="flex mt-16 mb-2 md:mb-5 gap-4 md:gap-14 w-full justify-center">
        <img className="h-14 sm:h-19" src="/facebook.svg" alt="facebook" />
        <img className="h-14 sm:h-19" src="/instagram.svg" alt="instagram" />
        <img className="h-14 sm:h-19" src="/twitter.svg" alt="twitter" />
      </footer>
    </main>
  );
}

export default SingInPage;
