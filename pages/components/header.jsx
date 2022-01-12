import Image from "next/image";
import Link from "next/link";
import banner from "../../public/imgs/banner.jpg";

const Header = () => {
  return (
    <>
      <header className="">
        <Hero />
      </header>
    </>
  );
};

export default Header;

const Hero = () => {
  return (
    <>
      <div className="rounded-b-xl overflow-hidden">
        <Image src={banner} className="h-full" alt="banner" />
      </div>
    </>
  );
};
