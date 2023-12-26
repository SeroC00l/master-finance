import Image from "next/image";
import Logo from "../../../public/logo.svg";

function SingUpPage() {
  return (
    <main className="bg-darkBlue w-full h-full">
      <header> 
        <a href="/" className="flex items-center">
          <Image src={Logo} alt="logo"/>
          <h1 className="text-golden text-5xl">Master Finance</h1>
        </a>
      </header>
      <div className="h-full">hola</div>
    </main>
  );
}

export default SingUpPage;
