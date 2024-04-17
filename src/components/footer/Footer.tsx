import React from "react";
import Logo from "../company-brand/Logo";

const Footer = () => {
  return (
    <div className="w-[100vw] h-[50vh]">
      <div className="flex">
        <footer className="w-full text-emerald-600 bg-black body-font">
          <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex flex-col items-start justify-start">
              <Logo />
              <span className="mt-4 px-2 text-white font-light text-sm text-right">
                Tel: + 1 978 888 7688
              </span>
              <span className="px-2 text-white font-light text-sm text-right">
                93 Whipple Street, Suite 3
              </span>
              <span className="px-2 text-white font-light text-sm text-right">
                Lowell, Massachusetts, 01852
              </span>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-emerald-600 uppercase title-font">
                  Company
                </h2>
                <nav className="mb-10 list-none text-white">
                  <ul>
                    <li className="mt-3">
                      <a className=" hover:text-emerald-600">About</a>
                    </li>
                    <li className="mt-3">
                      <a className=" hover:text-emerald-600">Services</a>
                    </li>
                    <li className="mt-3">
                      <a className=" hover:text-emerald-600">Latest News</a>
                    </li>
                    <li className="mt-3">
                      <a className=" hover:text-emerald-600">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-emerald-600 uppercase title-font">
                  Clients
                </h2>
                <nav className="mb-10 list-none text-white">
                  <ul>
                    <li className="mt-3">
                      <a className=" hover:text-emerald-600">Register</a>
                    </li>
                    <li className="mt-3">
                      <a className=" hover:text-emerald-600">Login</a>
                    </li>
                    <li className="mt-3">
                      <a className=" hover:text-emerald-600">Support</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-emerald-600 uppercase title-font">
                  Legal
                </h2>
                <nav className="mb-10 list-none text-white">
                  <ul>
                    <li className="mt-3">
                      <a className=" hover:text-emerald-600">
                        Terms of Service
                      </a>
                    </li>
                    <li className="mt-3">
                      <a className=" hover:text-emerald-600">Privacy</a>
                    </li>
                    <li className="mt-3">
                      <a className=" hover:text-emerald-600">FAQ</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-sm font-medium tracking-widest text-emerald-600 uppercase title-font">
                  Social
                </h2>
                <nav className="mb-10 list-none text-white">
                  <ul>
                    <li className="mt-3">
                      <a className=" hover:text-emerald-600">LinkedIn</a>
                    </li>
                    <li className="mt-3">
                      <a className=" hover:text-emerald-600">Twitter</a>
                    </li>
                    <li className="mt-3">
                      <a className=" hover:text-emerald-600">Facebook</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-950">
            <div className="container px-5 py-4 mx-auto">
              <p className="text-sm text-slate-300 capitalize xl:text-center">
                © 2024 All rights reserved{" - "} Blooming Brands LLC, Lowell
                Massachusetts 01852
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
