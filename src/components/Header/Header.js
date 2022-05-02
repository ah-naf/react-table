import React from "react";
import "tw-elements";
import img from "./Ellipse 1.png";

const Header = () => {
  return (
    <>
      <nav
        className="
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-3
  bg-white
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  "
      >
        <div className="container-fluid w-full flex md:flex-wrap lg:flex-wrap xl:flex-wrap 2xl:flex-wrap sm:flex-nowrap items-center justify-between px-6">
          <div className="navbar-nav flex flex-row pl-0 list-style-none mr-auto">
            <div className="">
              <div>
                {/* Starbucks  */}
                <div className="dropdown relative">
                  <button
                    className="
          dropdown-toggle
          px-6
          py-2.5
          bg-white
          text-gray-700
          pl-2
          font-medium
          text-sm
          leading-tight
          flex
          items-center
          whitespace-nowrap
        "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Starbucks
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      className="w-2 ml-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* search input */}
            <div className="flex-grow lg:ml-32 xl:ml-32 2xl:ml-32 md:ml-0 sm:ml-0 hidden md:block sm:block lg:block xl:block 2xl:block ">
              <div className="">
                <div className="relative ">
                  <div className="absolute top-auto left-3 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-11 w-5 text-xs text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="bg bg-gray-100 h-10 w-full  pl-10 pr-16 rounded-xl z-0 focus:shadow focus:outline-none"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center relative">
            <div className="dropdown relative">
              <a
                className="
          text-gray-500
          hover:text-gray-700
          focus:text-gray-700
          md:mr-4
          lg:mr-4
          xl:mr-4
          2xl:mr-4
          sm:mr-0
          mr-4
         
          hidden-arrow
          flex items-center
        "
                href="/"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </a>
            </div>
            <div className="dropdown relative">
              <a
                className="dropdown-toggle flex items-center hidden-arrow"
                href="/"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={img}
                  className="rounded-full w-8 h-8 sm:h-6 sm:w-6 sm:m-2 md:h-8 md:w-8 md:m-0 lg:h-8 lg:w-8 xl:h-8 xl:w-8 2xl:w-8 2xl:h-8"
                  alt=""
                ></img>
              </a>
            </div>
            <div className="">
              <div>
                {/* John Doe */}
                <div className="dropdown relative">
                  <button
                    className="
          dropdown-toggle
          px-4
          sm:px-0
          md:px-3
          lg:px-4
          xl:px-4
          2xl:px-6
          lg:py-2.5
          xl:py-2.5
          2xl:py-2.5
          
          bg-white
          text-gray-700
          font-medium
          text-sm
          leading-tight
          flex
          items-center
          whitespace-nowrap
        "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    John Doe
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="caret-down"
                      className="w-2 ml-2"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
