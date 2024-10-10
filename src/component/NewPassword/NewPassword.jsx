import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from "yup";
import {  useNavigate } from 'react-router-dom';



export default function NewPassword() {

    let {handleSubmit,values,handleChange,errors,touched,handleBlur} =useFormik({
      initialValues: {
        email: "",
        newPassword: "",
      },
      onSubmit:handelNewPassword,
      validationSchema:Yup.object({
        email: Yup.string().required('Email is required').email("Enter valid email "),
        newPassword:Yup.string().required('Password is required').matches(/^[a-zA-Z0-9]{6,20}$/,'Password must be between 6 and 18 characters')
    })
    });
      const [isLoading, setIsLoading] = useState(false);
      const [errorMsg, setErrorMsg] = useState("");
      const navigate = useNavigate()

    async function handelNewPassword() {
      setIsLoading(true);
        setErrorMsg("");
        try {
            await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',values) 
            navigate("/login");
            setIsLoading(false);
        } catch (error) {   
            console.log(error);
        }
    }



  return (
    <>
  <div className=" py-16 flex justify-center items-center">
    <div className=" w-full md:w-1/2 lg:w-1/3 mx-auto  bg-white  rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
  <h1 className="text-4xl font-bold text-center text-green-800  mb-8 ">New Password</h1>
  <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
    <div className="flex items-start flex-col justify-start">
      <label htmlFor="email" className="text-sm text-green-800  mr-2">Email:</label>
      <input onBlur={handleBlur}  onChange={handleChange} value={values.email} type="text" id="email" name="email" className="w-full px-3   py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        {touched.email && errors.email && <p className='text-red-500'>{errors.email}</p>}

    </div>
    <div className="flex items-start flex-col justify-start">
      <label htmlFor="newPassword" className="text-sm text-green-800  mr-2">newPassword:</label>
      <input onBlur={handleBlur}  onChange={handleChange} value={values.newPassword} type="Password" id="newPassword" name="newPassword" className="w-full px-3   py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            {touched.newPassword && errors.newPassword && <p className='text-red-500'>{errors.newPassword}</p>}
    </div>
    <button type="submit" className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md shadow-sm disabled:bg-gray-600" disabled={isLoading  }>Login {isLoading && <i className='fas fa-spinner fa-spin'></i>}</button>
    {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
  </form>

</div>

  </div>
    </>
  )
}
