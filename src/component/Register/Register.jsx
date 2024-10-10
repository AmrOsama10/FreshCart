import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as Yup from "yup";

export default function Register() {

    let {handleSubmit,values,handleChange,errors,touched,handleBlur} =useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
        rePassword: "",
        phone: "",
      },
      onSubmit:register,
      validationSchema:Yup.object({
        name: Yup.string().required('Name is required').min(3,"Name length must be more than 3 ").max(20,"Name length must be less than 20"),
        email: Yup.string().required('Email is required').email("Enter valid email "),
        password:Yup.string().required('Password is required').matches(/^[a-zA-Z0-9]{6,20}$/,'Password must be between 6 and 18 characters'),
        rePassword:Yup.string().required('rePassword is required').oneOf([Yup.ref('password')],"Password and rePassword must matched"),
        phone:Yup.string().required('phone is required').matches(/^01[0125]\d{8}$/,"mobile number starting with 01 followed by 8 digits")
    })
    });

    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [successMsg, setSuccessMsg] = useState("")
    


    async function register() {
      setIsLoading(true)
      setErrorMsg("")
      setSuccessMsg("")
        await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup",values).then(({data})=>{
          setIsLoading(false);
          setSuccessMsg(data.message);
        }).catch(err => {
          setIsLoading(false);
          setErrorMsg(err.response.data.message);
          
        })
    }

  return (
    <>
  <div className=" py-16 flex justify-center items-center">
    <div className=" w-full md:w-1/2 lg:w-1/3 mx-auto  bg-white rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
  <h1 className="text-xl font-bold text-center text-green-800  mb-8">Welcome to FreshCart</h1>
  <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
    <div className="flex items-start flex-col justify-start">
      <label htmlFor="firstName" className="text-sm text-green-800  mr-2">Name:</label>
      <input onBlur={handleBlur} onChange={handleChange} value={values.name} type="text" id="firstName" name="name" className="w-full px-3  py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500" />
        {touched.name && errors.name && <p className='text-red-500'>{errors.name}</p>}
    </div>

    <div className="flex items-start flex-col justify-start">
      <label htmlFor="email" className="text-sm text-green-800  mr-2">Email:</label>
      <input onBlur={handleBlur}  onChange={handleChange} value={values.email} type="text" id="email" name="email" className="w-full px-3  py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500" />
        {touched.email && errors.email && <p className='text-red-500'>{errors.email}</p>}

    </div>
    <div className="flex items-start flex-col justify-start">
      <label htmlFor="password" className="text-sm text-green-800  mr-2">Password:</label>
      <input onBlur={handleBlur}  onChange={handleChange} value={values.password} type="password" id="password" name="password" className="w-full px-3  py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500" />
            {touched.password && errors.password && <p className='text-red-500'>{errors.password}</p>}
    </div>
    <div className="flex items-start flex-col justify-start">
      <label htmlFor="confirmPassword" className="text-sm text-green-800  mr-2">Confirm Password:</label>
      <input onBlur={handleBlur}  onChange={handleChange} value={values.rePassword} type="password" id="confirmPassword" name="rePassword" className="w-full px-3  py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500" />
            {touched.rePassword && errors.rePassword && <p className='text-red-500'>{errors.rePassword}</p>}
    </div>
    <div className="flex items-start flex-col justify-start">
      <label htmlFor="phone" className="text-sm text-green-800  mr-2">Phone:</label>
      <input onBlur={handleBlur}  onChange={handleChange} value={values.phone} type="phone" id="phone" name="phone" className="w-full px-3  py-2 rounded-md border border-gray-300  focus:outline-none focus:ring-1 focus:ring-blue-500" />
            {touched.phone && errors.phone && <p className='text-red-500'>{errors.phone}</p>}
    </div>
    <button type="submit" className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md shadow-sm disabled:bg-gray-600" disabled={isLoading  }>Register {isLoading && <i className='fas fa-spinner fa-spin'></i>}</button>
      {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
      {successMsg && <p className='text-green-500 text-center'>{successMsg}</p>}
  </form>
  <div className="mt-4 text-center">
    <span className="text-sm text-gray-900 font-semibold">Already have an account? </span>
    <Link to={"/login"} className="text-green-800 hover:underline hover:text-green-800">Login</Link>
  </div>
</div>

  </div>
    </>
  )
}
