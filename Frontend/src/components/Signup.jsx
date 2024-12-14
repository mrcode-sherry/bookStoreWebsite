import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // Function to handle form submission
  const onSubmit = data => {
    console.log(data); // Logs form data to the console
  };

  return (
    <>
      <div className='flex justify-center h-screen items-center'>
        <div id="" className="rounded-lg border shadow-md">
          <div className="modal-box rounded-lg p-5">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <div className='flex justify-between'>
                <h3 className="font-bold text-xl mb-8 ">Signup</h3>
                <Link to='/' className="right-3 top-3 hover:bg-red-600 hover:text-white duration-200 w-6 px-1.5 font-semibold rounded-full h-6">✕</Link>
              </div>
              
              {/* Name */}
              <div className='space-y-1'>
                <span className='text-gray-700'>Name</span>
                <br />
                <input 
                  type="text" 
                  placeholder='Enter your name' 
                  className='w-80 outline-none border rounded-md p-1 px-2 text-sm' 
                  {...register("name", { 
                    required: "Name is required"
                  })} 
                />
                <br />
                {errors.name && <span className='text-sm text-red-500'>{errors.name.message}</span>} {/* Display error message */}
              </div>

              {/* Email */}
              <div className='space-y-1 mt-5'>
                <span className='text-gray-700'>Email</span>
                <br />
                <input 
                  type="email" 
                  placeholder='Enter your email' 
                  className='w-80 outline-none border rounded-md p-1 px-2 text-sm' 
                  {...register("email", { 
                    required: "Email is required", 
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                      message: "Invalid email address"
                    }
                  })} 
                />
                <br />
                {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>} {/* Display error message */}
              </div>

              {/* Password */}
              <div className='space-y-1 mt-5'>
                <span className='text-gray-700'>Password</span>
                <br />
                <input 
                  type="password" 
                  placeholder='Enter your password' 
                  className='w-80 outline-none border rounded-md p-1 px-2 text-sm' 
                  {...register("password", { 
                    required: "Password is required", 
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters"
                    }
                  })} 
                />
                <br />
                {errors.password && <span className='text-sm text-red-500'>{errors.password.message}</span>} {/* Display error message */}
              </div>

              {/* Button */}
              <div className='mt-6 flex justify-between'>
                <button type="submit" className='bg-pink-500 py-1 px-2 hover:bg-pink-700 text-white duration-200 rounded-md'>Signup</button>
                <p className='text-sm text-gray-700 pt-2'>Have an Account? <Link to='/login' className='cursor-pointer text-blue-500 hover:text-blue-700 text-md underline pl-1'>Login</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;
