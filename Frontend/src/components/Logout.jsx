import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
  const [authUser, setAuthUser] = useAuth()

  const handleLogout = () => {
    try {
      setAuthUser(null)  // Reset the user state to null (logged out)
      localStorage.removeItem('Users')  // Remove user from localStorage
      toast.success('Logout Successfully')
      // Optionally, you can navigate to another page after logout
      setTimeout(() => {
        window.location.reload()  // Reload the page or redirect to login
      }, 2000)
    } catch (error) {
      toast.error('Error: ', error.message)
    }
  }

  return (
    <button
      className='bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 duration-200 focus:outline-none'
      onClick={handleLogout}
    >
      Logout
    </button>
  )
}

export default Logout;
