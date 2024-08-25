import axios from 'axios';
import { useFormik } from 'formik';
import React, { useContext, useState } from 'react'
import * as Yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';


export default function Login() {

    let {handleSubmit,values,handleChange,errors,touched,handleBlur} =useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit:login,
      validationSchema:Yup.object({
        email: Yup.string().required('Email is required').email("Enter valid email "),
        password:Yup.string().required('Password is required').matches(/^[a-zA-Z0-9]{6,20}$/,'Password must be between 6 and 18 characters'),})
    });
      const [isLoading, setIsLoading] = useState(false);
      const [errorMsg, setErrorMsg] = useState("");
      const navigate = useNavigate()
      let { setUserToken } = useContext(AuthContext);

    async function login() {
      setIsLoading(true);
      setErrorMsg("");
      await axios
        .post("https://ecommerce.routemisr.com/api/v1/auth/signin", values)
        .then(({ data }) => {
          setIsLoading(false);
          setUserToken(data.token)
          localStorage.setItem("token", data.token)
          navigate('/')
        })
        .catch((err) => {
          setIsLoading(false);
          setErrorMsg(err.response.data.message);
        });
    }



  return (
    <>
  <div className=" py-16 flex justify-center items-center">
    <div className=" w-full md:w-1/2 lg:w-1/3 mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
  <h1 className="text-4xl font-bold text-center text-green-800 dark:text-gray-200 mb-8 ">Welcome to FreshCart</h1>
  <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
    

    <div className="flex items-start flex-col justify-start">
      <label htmlFor="email" className="text-sm text-green-800 dark:text-gray-200 mr-2">Email:</label>
      <input onBlur={handleBlur}  onChange={handleChange} value={values.email} type="text" id="email" name="email" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        {touched.email && errors.email && <p className='text-red-500'>{errors.email}</p>}

    </div>
    <div className="flex items-start flex-col justify-start">
      <label htmlFor="password" className="text-sm text-green-800 dark:text-gray-200 mr-2">Password:</label>
      <input onBlur={handleBlur}  onChange={handleChange} value={values.password} type="password" id="password" name="password" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            {touched.password && errors.password && <p className='text-red-500'>{errors.password}</p>}
    </div>
    <button type="submit" className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md shadow-sm disabled:bg-gray-600" disabled={isLoading  }>Login {isLoading && <i className='fas fa-spinner fa-spin'></i>}</button>
    {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
  </form>
  <div className="mt-4 text-center">
    <span className="text-sm text-gray-00 dark:text-gray-300 font-semibold">Already have an account? </span>
    <Link to={"/register"} className="text-green-800 hover:underline hover:text-green-800">Register</Link>
  </div>
  <div className="text-center">
    {/* <span className="text-sm text-gray-00 dark:text-gray-300 font-semibold">Forgot your password? </span> */}
    <Link to={"/forgetPassword"} className="text-green-800 font-semibold hover:underline hover:text-green-800">Forgot your password?</Link>
  </div>
</div>

  </div>
    </>
  )
}
