import Image from "next/image";
import Logo from "/public/logo.svg";
import Footer from "../components/Footer";
import { redirect } from "next/navigation";
import { UserSession } from "../lib/auth-functions";
import SingInForm from "../components/SingInForm";
import Link from "next/link";

export default async function SingInPage() {
  const { data } = await UserSession();

  if (data.session) {
    return redirect("/Home");
  }

  return (
    <main className="bg-darkBlue h-screen w-screen">
      <header>
        <Link href="/" className="flex items-center">
          <Image src={Logo} alt="logo" />
          <h1 className="text-golden text-5xl">Master Finance</h1>
        </Link>
      </header>
      <SingInForm />
      <Footer />
    </main>
  );
}
