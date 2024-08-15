import React from "react";
import axios from "axios";
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"

const Signup = () => {
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit =  async (data) => {
        // console.log(data);
        const userInfo = {
          fullname : data.fullname,
          email : data.email,
          password : data.password,
        }
        
        try {
          const res = await axios.post("http://localhost:4000/user/signup", userInfo);
          
          // console.log("res data is : = " ,res);
          if(res.data){
            // alert("Signup Successfull");
            toast.success("Signup Successfull")
            navigate(from, {replace:true});
            localStorage.setItem("Users", JSON.stringify(res.data.user));
            setTimeout(() => {
              window.location.reload();
            }, 1000)
          }
        } catch (error) {
            console.log(error);
            if(error.response){
              // alert("Error: " + error.response.data.message);
              toast.error("Error: " + error.response.data.message);
            }
        }
      }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <form 
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-6">
            <div>
                <label 
                className="block text-sm font-medium text-gray-700"
                htmlFor="name">FullName:</label>
                <input
                type="text"
                id="name"
                placeholder="Enter your Full Name"
                className=" text-black mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                {...register("fullname", { required: true })}
              /><br/>
              {errors.name && <span className="text-sm text-red-600">This field is required</span>}
            </div>
            <div>
              <label
                htmlFor="email"
                className=" block text-sm font-medium text-gray-700"
              >
                UserName:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className= "text-black mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("email", { required: true })}
              /><br/>
              {errors.email && <span className="text-sm text-red-600">This field is required</span>}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                className="text-black mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("password", { required: true })}
              /><br/>
              {errors.password && <span className="text-sm text-red-600">This field is required</span>}
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Sign Up
              </button>
            </div>
            <div>
              <p className="text-center ">
                Already have an account?{" "}
                <a
                  onClick={() => document.getElementById("my_modal_2").showModal()}
                 className="text-pink-600 hover:text-pink-700 cursor-pointer">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
