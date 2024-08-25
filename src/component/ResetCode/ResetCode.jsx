import { useFormik } from 'formik';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function ResetCode() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: {
            resetCode: '',
        },
        onSubmit: handelResetCode,
        validationSchema: Yup.object({
            resetCode: Yup.string().required('Reset code is required'),
        })
    });

    async function handelResetCode() {
        setIsLoading(true);
        setErrorMsg("");
        try {
            let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', values);
            console.log(data);
            navigate("/newPassword");
        } catch (error) {
            console.log(error.response ? error.response.data : error.message);  
            setErrorMsg(error.response ? error.response.data.message : "An error occurred");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="py-16 flex justify-center items-center">
            <div className="w-full md:w-1/2 lg:w-1/3 mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
                <h1 className="text-4xl font-semibold text-center text-green-800 dark:text-gray-200 mb-8 font-sans">Reset Code</h1>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                    <div className="flex items-start flex-col justify-start">
                        <label htmlFor="resetCode" className="text-sm text-green-800 dark:text-gray-200 mr-2">Reset Code:</label>
                        <input
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.resetCode}
                            type="text"
                            id="resetCode"
                            name="resetCode"
                            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        />
                        {touched.resetCode && errors.resetCode && <p className='text-red-500'>{errors.resetCode}</p>}
                    </div>
                    <button type="submit" className="bg-green-700 hover:bg-green-800 text-white font-medium py-2 px-4 rounded-md shadow-sm disabled:bg-gray-600" disabled={isLoading}>
                        Submit {isLoading && <i className='fas fa-spinner fa-spin'></i>}
                    </button>
                    {errorMsg && <p className='text-red-500 text-center'>{errorMsg}</p>}
                </form>
            </div>
        </div>
    );
}
