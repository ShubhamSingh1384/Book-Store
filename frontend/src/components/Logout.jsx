import React from 'react'
import { useAuth } from '../context/AuthProvider'
import {toast} from 'react-hot-toast'

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user:null,
            })
            localStorage.removeItem("Users");
            toast.success("Logout Successfully");
            setTimeout(()=>{
                window.location.reload();

            }, 1000)
        } catch (error) {
            toast.error("Error: " + error.message);
        }
    }
  return (
    <>
    <button
    className="mx-4 px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer"
    onClick={handleLogout}
    >
        Logout
    </button>
    </>
  )
}

export default Logout