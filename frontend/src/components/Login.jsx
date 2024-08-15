import React from "react";
import { Link } from "react-router-dom";
import { useForm} from "react-hook-form";
import axios from 'axios';
import { toast } from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const userInfo = {
      email: data.email,
      password: data.password,
    }
    try {
      const res = await axios.post('http://localhost:4000/user/login', userInfo);
      // console.log("res.data -> ",JSON.stringify(res.data));
      if(res.data){
        // alert("logedin Successfully");
        toast.success("logedin Successfully")
        document.getElementById('my_modal_2').close();
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        setTimeout(()=>{
          window.location.reload();
        }, 1000)
      }
    } catch (error) {
      console.log(error);
      if(error.response)
      // alert("Error : " + error.response.data.message)
      toast.error("Error : " + error.response.data.message)
    }

  }

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Login</h3>
        <p className="py-4">Enter Your Credentials</p>
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              UserName:
            </label>
            <input
              type="email"
              id="username"
              placeholder="Enter your Email"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white text-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("email", { required: true })}
            />
            {errors.username && <span className="text-sm text-red-600">This field is required</span>}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="text"
              id="password"
              placeholder="Enter your Password"
              className="text-black mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-sm text-red-600">This field is required</span>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Login
            </button>
          </div>
          <div>
            <p className="text-center">
              Not registered?{" "}
              {/* <a href="/signup" className="text-pink-600 hover:text-pink-700">
                Sign up
              </a> */}
              <Link to="/signup" className="text-pink-600 hover:text-pink-700">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Login;
