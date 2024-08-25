import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from './../Footer/Footer';


export default function Layout() {
  return (
    <>
      <Navbar />
        <div className=" w-5/6 mx-auto py-3">
          <Outlet />
        </div>
      <Footer />
    </>
  );
}
