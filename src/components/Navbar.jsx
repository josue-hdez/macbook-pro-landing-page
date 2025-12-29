import { navLinks } from "../constants";

const Button = ({ src, alt }) => {
  return (
    <button className="bg-transparent border-none outline-none cursor-pointer">
      <img
        className="cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
        src={src}
        alt={alt}
      />
    </button>
  );
};

const NavBar = () => {
  return (
    <header className="w-screen bg-black fixed top-0 left-0 z-100 flex-center">
      <nav className="container mx-auto p-6 flex items-center justify-between">
        <img
          className="cursor-pointer hover:-translate-y-0.5 transition-all duration-300 ease-in-out"
          src="/icons/logo.svg"
          alt="Logo"
        />
        <ul className="flex-center gap-9">
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a
                className="hidden md:block text-white opacity-80 font-regular text-sm cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"
                href={`#${label.toLocaleLowerCase()}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <Button src={"/icons/search.svg"} alt={"Search"} />
          <Button src={"/icons/cart.svg"} alt={"Cart"} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
