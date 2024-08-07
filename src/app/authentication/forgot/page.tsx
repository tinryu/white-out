import React from 'react'

const page = () => {
  return (
    <div className="rounded-xl w-full">
        <form id="forgot" className="w-1/2 max-sm:w-full m-auto bg-slate-50 p-6 text-center rounded-2xl">
            <h5 className="font-semibold text-xl">Forgot Password ?</h5>
            <p className="text-gray-400 text-sm pt-3 pb-10">Enter your email to reset your password.</p>
            <input type="text" name="email" id="email" placeholder="Please enter your email address" className="rounded-xl border border-gray-300 w-full" />
            <div className="pt-8">
                <button className="bg-slate-950 rounded-xl text-center text-white w-full p-2 mb-4">Submit</button>
                <button className="bg-transparent rounded-xl text-center text-violet-300 w-full p-2">Back</button>
            </div>
        </form>
    </div>
  )
}

export default page