"use client";

import Image from "next/image";
import Link from "next/link";
import NavSearch from "./NavSearch";
import { useState } from "react";
import { usePathname } from "next/navigation";
import CartModal from "../modal/CartModal";

const Navbar = () => {
  const [openAccount, setOpenAccount] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const pathName = usePathname();
  const mappedPath = pathName.split("/").join("");
  return (
    <nav className="bg-white dark:bg-gray-800 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <Link aria-label="go to " href="/" title="" className="">
                <Image
                  height={156}
                  width={180}
                  src="/logo.png"
                  alt="nav logo"
                />
              </Link>
            </div>
          </div>

          {/* nave search  */}
          <NavSearch />

          <div className="relative flex items-center lg:space-x-2">
            {/* login button */}
            <Link
              aria-label="go to login"
              href="/login"
              className="top-0 right-0 p-2 text-gray-900 text-md font-medium leading-none border select-none bg-white rounded-sm hover:border-orange-400"
            >
              Login
            </Link>
            {/* cart button */}

            {mappedPath === "cart" ? null : (
              <Link
                aria-label="go to cart"
                href={"/cart"}
                data-dropdown-toggle="myCartDropdown1"
                className="inline-flex items-center rounded-sm justify-center p-2 border hover:border hover:border-orange-400 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 "
              >
                <span className="sr-only">Cart</span>
                <svg
                  className="w-5 h-5 lg:me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg>
                <span className="hidden sm:flex">My Cart</span>
                <svg
                  className="hidden sm:flex w-4 h-4 text-gray-900 dark:text-white ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </Link>
            )}

            {openCart && (
              <div>
                <CartModal />
              </div>
            )}

            <button
              onClick={() => setOpenAccount((prev) => !prev)}
              id="userDropdownButton1"
              data-dropdown-toggle="userDropdown1"
              type="button"
              className="inline-flex items-center rounded-sm justify-center p-2 border hover:border hover:border-orange-400 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
            >
              <svg
                className="w-5 h-5 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              Account
              <svg
                className="w-4 h-4 text-gray-900 dark:text-white ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            {openAccount && (
              <div
                id="userDropdown1"
                className="z-10 absolute top-12 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow dark:divide-gray-600 dark:bg-gray-700"
              >
                <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                  <li>
                    <Link
                      aria-label="go to "
                      href="#"
                      title=""
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {" "}
                      My Account{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="go to "
                      href="#"
                      title=""
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {" "}
                      My Orders{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="go to "
                      href="#"
                      title=""
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {" "}
                      Settings{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      aria-label="go to "
                      href="#"
                      title=""
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {" "}
                      Favourites{" "}
                    </Link>
                  </li>
                </ul>

                <div className="p-2 text-sm font-medium text-gray-900 dark:text-white">
                  <Link
                    aria-label="go to "
                    onClick={() => setOpenAccount(false)}
                    href="#"
                    title=""
                    className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm bg-orange-200 dark:hover:bg-gray-600"
                  >
                    {" "}
                    Sign Out{" "}
                  </Link>
                </div>
              </div>
            )}

            <button
              type="button"
              data-collapse-toggle="ecommerce-navbar-menu-1"
              aria-controls="ecommerce-navbar-menu-1"
              aria-expanded="false"
              className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
            >
              <span className="sr-only">Open Menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="ecommerce-navbar-menu-1"
          className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4"
        >
          <ul className="text-gray-900  text-sm font-medium dark:text-white space-y-3">
            <li>
              <Link
                aria-label="go to "
                href="#"
                className="hover:text-orange-700 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                aria-label="go to "
                href="#"
                className="hover:text-orange-700 "
              >
                Best Sellers
              </Link>
            </li>
            <li>
              <Link
                aria-label="go to "
                href="#"
                className="hover:text-orange-700 "
              >
                Gift Ideas
              </Link>
            </li>
            <li>
              <Link
                aria-label="go to "
                href="#"
                className="hover:text-orange-700 "
              >
                Games
              </Link>
            </li>
            <li>
              <Link
                aria-label="go to "
                href="#"
                className="hover:text-orange-700 "
              >
                Electronics
              </Link>
            </li>
            <li>
              <Link
                aria-label="go to "
                href="#"
                className="hover:text-orange-700 "
              >
                Home & Garden
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
