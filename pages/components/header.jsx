import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="">
        <Topmenu />
        <Hero />
      </header>
    </>
  );
};

export default Header;

const Topmenu = () => {
  return (
    <div className="bg-indigo-700">
      <nav className="mycontainer flex flex-col md:flex-row justify-between items-center">
        <div>
          <Link href="/">
            <a className="m-1 p-2 inline-block text-white font-bold text-xl">
              Brand Logo
            </a>
          </Link>
        </div>
        <ul className="flex flex-row">
          <li>
            <Link href="/">
              <a className="m-1 py-2 px-4 inline-block text-base hover:bg-indigo-500 transition-all duration-500 rounded-md text-white ">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="m-1 py-2 px-4 inline-block text-base hover:bg-indigo-500 transition-all duration-500 rounded-md text-white ">
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="m-1 py-2 px-4 inline-block text-base hover:bg-indigo-500 transition-all duration-500 rounded-md text-white ">
                About
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <div className="bg-gray-200 bg-hero bg-cover bg-center bg-no-repeat">
        <div className="mycontainer">
          <div className="h-72 "></div>
        </div>
      </div>
    </>
  );
};
