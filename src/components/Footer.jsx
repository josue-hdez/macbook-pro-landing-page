import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="container mx-auto p-6 mt-12">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm">
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 1-800-MY-APPLE.
        </p>
        <img src="/icons/logo.svg" alt="Logo" />
      </div>
      <hr className="my-6 text-dark-100" />
      <div className="flex flex-col lg:flex-row gap-6 lg:items-center justify-between text-sm">
        <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
        <ul className="lg:divide-x flex flex-col lg:flex-row gap-3">
          {footerLinks.map(({ label, link }) => (
            <li
              className="lg:px-6 cursor-pointer hover:text-blue transition-all duration-300 ease-in-out"
              key={label}
            >
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
