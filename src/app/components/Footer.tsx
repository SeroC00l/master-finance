import Image from "next/image";
import Twitter from "/public/twitter.svg"
import Facebook from "/public/instagram.svg"
import Instagram from "/public/facebook.svg"

function Footer() {
  return (
    <footer className="flex mt-12 mb-2 md:mb-5 gap-4 md:gap-14 w-full justify-center">
      <Image className="h-14 sm:h-19" src={Facebook} alt="facebook" />
      <Image className="h-14 sm:h-19" src={Instagram} alt="instagram" />
      <Image className="h-14 sm:h-19" src={Twitter} alt="twitter" />
    </footer>
  );
}

export default Footer;
