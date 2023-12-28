import { redirect } from "next/navigation";
import { UserSession } from "./lib/auth-functions";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default async  function LandingPage() {

  const { data } = await UserSession()

  if(data.session){
    return redirect("/Home")
  }

  return (
    <>
      <Header />
      <main
        id="home-page"
        className="bg-darkBlue z-10 top-0 flex flex-col md:w-7/12 h-full"
      >
        <section className="text-textColor flex flex-col md:mt-36 mt-[267px] md:mr-52">
          <h2 className="text-4xl text-center lg:text-left sm:text-6xl w-full md:ml-12">
            Welcome
          </h2>
          <p className="text-xl mb-4 sm:mb-10 p-12 text-pretty">
            Welcome to our personal finance app! We're excited to help you
            achieve your financial goals and gain control of your money. With
            our app, you can easily track your income and expenses, set savings
            goals, and monitor your financial progress. Our user-friendly
            interface and intuitive design make it simple to use, so you can
            focus on what matters most - reaching your financial aspirations.
          </p>
          <a
            className="bg-golden rounded-full py-2 px-4 sm:py-3 sm:px-7 text-secondary font-semibold w-max mx-auto md:ml-12"
            href="/sing-up"
          >
            Get started
          </a>
        </section>
        <Footer />
      </main>
    </>
  );
}
