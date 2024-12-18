import React from 'react'

function Contacts() {
  return (
    <>
     <div className=" flex items-center w-full justify-center md:pb-20 pb-16 md:px-6 pt-12 md:pt-0">
            <div className="max-w-lg border w-full bg-white md:p-8 p-5 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-7">Contact Us</h2>
                <form className="space-y-4">
                    {/* Name Field */}
                    <div className=''>
                    <label className="flex flex-col gap-2">
                        Name
                        <input
                            type="text"
                            name="name"
                            className="grow text-sm border py-1 px-2 outline-none rounded-md"
                            placeholder="Enter your name"
                            required
                        />
                    </label>
                    </div>

                    {/* Email Field */}
                    <label className="flex flex-col gap-2">
                        Email
                        <input
                            type="email"
                            name="email"
                            className="grow text-sm border py-1 px-2 outline-none rounded-md"
                            placeholder="Enter your email"
                            required
                        />
                    </label>

                    {/* Message Field */}
                    <label className="flex flex-col gap-2">
                        Message
                        <textarea
                            name="message"
                            className="grow text-sm border py-1 px-2 outline-none rounded-md"
                            placeholder="Enter your message"
                            rows="4"
                            required
                        ></textarea>
                    </label>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white text-lg rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 duration-200 mt-3"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Contacts