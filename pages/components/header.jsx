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
    <div className="bg-primary">
      <nav className="mycontainer flex flex-col md:flex-row justify-between items-center">
        <div>
          <Link href="/">
            <a className="m-1 p-2 inline-block text-white font-bold text-xl">
              לוגו המותג
            </a>
          </Link>
        </div>
        <ul className="flex flex-row">
          <li>
            <Link href="/">
              <a className="m-1 py-2 px-4 inline-block text-base hover:bg-secondary transition-all duration-500 rounded-md text-white ">
                בית
              </a>
            </Link>
          </li>
          <li>
            <Link href="#carousel">
              <a className="m-1 py-2 px-4 inline-block text-base hover:bg-secondary transition-all duration-500 rounded-md text-white ">
                קרוסלה
              </a>
            </Link>
          </li>
          <li>
            <Link href="#share">
              <a className="m-1 py-2 px-4 inline-block text-base hover:bg-secondary transition-all duration-500 rounded-md text-white ">
                לַחֲלוֹק
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
      <div className="bg-secondary  bg-cover bg-center bg-no-repeat">
        <div className="mycontainer">
          <div className="h-72 "></div>
        </div>
      </div>
    </>
  );
};
