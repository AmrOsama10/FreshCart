import { useFormik } from 'formik'
import React, {  useState } from 'react'
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Yup  from 'yup';


export default function ForgetPassword() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const {handleSubmit,values,handleChange,handleBlur,touched,errors} = useFormik({
        initialValues:{
            email:'',
        },
        onSubmit:forgetPassword,
        validationSchema:Yup.object({
        email: Yup.string().required('Email is required').email("Enter valid email "),
        })
    })

    async function forgetPassword() {
        setIsLoading(true);
        setErrorMsg("");
        try {
            await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',values) 
            navigate("/resetCode");
            setIsLoading(false);
        } catch (error) {   
            console.log(error);
        }
    }

return (
    <div className=" py-16 flex justify-center items-center">
    <div className=" w-full md:w-1/2 lg:w-1/3 mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
    <h1 className="text-4xl font-semibold text-center text-green-800 dark:text-gray-200 mb-8 font-sans ">Forget Password</h1>
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
    

    <div className="flex items-start flex-col justify-start">
        <label htmlFor="email" className="text-sm text-green-800 dark:text-gray-200 mr-2">Email:</label>
        <input onBlur={handleBlur}  onChange={handleChange} value={values.email} type="text" id="email" name="email" className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        {touched.email && errors.email && <p className='text-red-500'>{errors.email}</p>}
    </div>
    <button type="submit" className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md shadow-sm disabled:bg-gray-600" disabled={isLoading  }>Submit {isLoading && <i className='fas fa-spinner fa-spin'></i>}</button>
    {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
    </form>
</div>

</div>
    )
}
