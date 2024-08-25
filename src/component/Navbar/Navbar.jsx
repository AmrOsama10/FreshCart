import React, { useContext, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import logo from "../../imgs/freshcart-logo.svg"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  let { userToken, setUserToken } = useContext(AuthContext);

  const navigate = useNavigate();

  function sigOut() {
    setUserToken("");
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (
    <section className="">
      <nav className=" w-full fixed top-0 bg-slate-50 shadow-md z-10">
        <div className="flex flex-col p-6 6 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-4 xl:px-20 lg:text-xs xl:text-lg ">
          <img src={logo} alt="Logo" className="w-32 md:w-48" />
          {userToken && (
            <div
              className={`mt-14 flex items-center text-green-800  flex-col space-y-8 lg:mt-0 lg:flex lg:flex-row lg:space-x-1 lg:space-y-0 ${
                isOpen ? "" : "hidden"
              }`}
            >
              <NavLink
                to="/"
                className="  lg:px-6 lg:py-4 hover:text-green-500"
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className="  lg:px-6 lg:py-4 hover:text-green-500"
              >
                Products
              </NavLink>
              <NavLink
                to="/categories"
                className="  lg:px-6 lg:py-4 hover:text-green-500"
              >
                Categories
              </NavLink>
              <NavLink
                to="/brands"
                className="  lg:px-6 lg:py-4 hover:text-green-500"
              >
                Brands
              </NavLink>
              <NavLink
                to="/wishlist"
                className="  lg:px-6 lg:py-4 hover:text-green-500"
              >
                Wish list
              </NavLink>
              <NavLink
                to="/cart"
                className="  lg:px-6 lg:py-4 hover:text-green-500"
              >
                Cart
              </NavLink>
            </div>
          )}

          <div
            className={`flex flex-col items-center lg:flex lg:flex-row lg:space-y-0 ${
              isOpen ? "" : "hidden"
            }`}
          >
            <div className="flex items-center mx-8 gap-x-5 text-slate-700 cursor-pointer ">
              <i className="fa-brands fa-facebook" />
              <i className="fa-brands fa-instagram" />
              <i className="fa-brands fa-tiktok" />
              <i className="fa-brands fa-linkedin" />
              <i className="fa-brands fa-twitter" />
              <i className="fa-brands fa-youtube" />
            </div>

            {!userToken && (
              <>
                <NavLink
                  to="/register"
                  className="  lg:py-4 text-green-800 hover:text-green-500"
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to={"/login"}
                  className=" py-4 text-center mx-5 text-green-800 hover:text-green-500"
                >
                  Login
                </NavLink>
              </>
            )}
            {userToken && (
              <button
                onClick={sigOut}
                className=" py-4 text-center text-green-800 hover:text-green-500"
              >
                SinOut
              </button>
            )}
          </div>

          <button
            className="absolute right-5 lg:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 12H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3.75 6H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3.75 18H20.25"
                stroke="#160042"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </section>
  );
}
