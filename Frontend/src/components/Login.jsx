import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(true);  // State to manage modal visibility
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();  // For programmatic navigation after successful login

  // Function to handle form submission
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password
    };

    try {
      const res = await axios.post('http://localhost:3000/user/login', userInfo);
      console.log(res.data);
      if (res.data) {
        toast.success('Login Successfully');
        // Close the modal and redirect
        setIsModalOpen(false);  // Close the modal
        localStorage.setItem("Users", JSON.stringify(res.data.user)); // Store user in localStorage
        setTimeout(() => {
          navigate('/');
          window.location.reload() // Redirect to homepage or any other page after login
        }, 1000);
      }
    } catch (err) {
      if (err.response) {
        console.error(err);
        toast.error('Invalid Email or Password');
      }
    }
  };

  return (
    <div className={`flex justify-center h-screen items-center ${isModalOpen ? '' : 'hidden'}`}>
      <div id="my_modal_3" className="rounded-lg border shadow-md">
        <div className="modal-box rounded-lg p-5">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <div className='flex justify-between'>
              <h3 className="font-bold text-xl mb-8">Login</h3>
              <Link to='/'
                type="button"
                className="right-3 top-3 hover:bg-red-600 hover:text-white duration-200 w-6 px-1.5 font-semibold rounded-full h-6"
                onClick={() => setIsModalOpen(false)}  // Close modal on clicking the '✕'
              >
                ✕
              </Link>
            </div>

            {/* Email */}
            <div className='space-y-1'>
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
              {errors.email && <span className='text-sm text-red-500'>{errors.email.message}</span>}
            </div>

            {/* Password */}
            <div className='space-y-1 mt-5'>
              <span className='text-gray-700'>Password</span>
              <br />
              <input 
                type="password"
                placeholder='Enter your Password' 
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
              {errors.password && <span className='text-sm text-red-500'>{errors.password.message}</span>}
            </div>

            {/* Button */}
            <div className='mt-6 flex justify-between'>
              <button 
                type="submit" 
                className='bg-pink-500 py-1 px-2 hover:bg-pink-700 text-white duration-200 rounded-md'>
                Login
              </button>
              <p className='text-sm text-gray-700 pt-2'>
                Not Registered? <Link to="/signup" className='cursor-pointer text-blue-500 hover:text-blue-700 text-md underline pl-1'>
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
