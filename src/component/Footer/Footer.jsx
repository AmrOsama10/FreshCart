import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../imgs/freshcart-logo.svg'

export default function Footer() {
  return (
    <>
    
 <footer className="font-sans relative pt-5 pb-3 md:pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="flex w-full md:w-5/12">
        <div className="text-lg px-4">
          <img src={img} alt="logo image" />
          <p className="mt-2 mb-4 text-gray-600 dark:text-gray-400 text-sm">
            The largest e-commerce store in Egypt
          </p>
          <div className='flex gap-3 '>
              <i className="fa-brands fa-facebook cursor-pointer " />
              <i className="fa-brands fa-instagram cursor-pointer " />
              <i className="fa-brands fa-tiktok cursor-pointer " />
              <i className="fa-brands fa-linkedin cursor-pointer " />
              <i className="fa-brands fa-twitter cursor-pointer " />
              <i className="fa-brands fa-youtube cursor-pointer " />
          </div>
        </div>

      </div>
      <div className="flex w-full md:w-5/12 px-4">
        <div className="text-2xl">
          <p className="font-bold text-green-800 dark:text-gray-100">Subsrcibe</p>
          <p className="mt-2 mb-4 text-gray-600 dark:text-gray-400 text-sm">Get the latest posts delivered right
            to your inbox</p>
          <div className="my-4">
            <form id="footerForm" action="/subscribe/" method="POST" className="form-horizontal">
              <input type="email" name="email" size={14} className="p-2 border border-grey-light rounded text-black placeholder-gray-400 text-sm h-auto
                focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" placeholder="Enter Email Address" required="required" />
              <input type="submit" id="emailBtn" defaultValue="Subscribe" className=" cursor-pointer bg-green-600 text-white active:bg-green-600
                                      rounded shadow hover:shadow-lg outline-none focus:outline-none h-auto text-xs p-3" />
              </form>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-2/12 px-4">
        <div className="flex flex-wrap items-top">
          <div className="w-full  ml-auto">
            <p className="font-bold text-2xl text-green-800 dark:text-gray-100">Popular Tags</p>
            <ul className="list-unstyled mt-2 mb-4">
              <li>
                <Link className="text-green-700 hover:text-green-900 hover:underline py-1 text-sm" >roadmap</Link>
              </li>
              <li>
                <Link className="text-green-700 hover:text-green-900 hover:underline py-1 text-sm" >features</Link>
              </li>
              <li>
                <Link className="text-green-700 hover:text-green-900 hover:underline py-1 text-sm" >defi</Link>
              </li>
              <li>
                <Link className="text-green-700 hover:text-green-900 hover:underline py-1 text-sm" >blockchain</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-3 md:my-6 border-gray-400" />
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-gray-600 py-1">
          ©
          <span id="year">2024 </span>
          <a href="https://github.com/AmrOsama10" target='_blank' className=" text-green-700 font-semibold font-serif hover:underline hover:text-green-900">amr
            osama</a>.
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}
