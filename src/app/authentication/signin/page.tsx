import React from 'react'

const page = () => {
  return (
    <div className="rounded-xl w-full">
        <form id="signin" className="w-1/2 m-auto bg-slate-50 p-6 text-center rounded-2xl">
            <h5 className="font-bold text-xl">Sign In</h5>
            <p className="text-gray-400 text-md pt-3 pb-8">Your social Campaigns</p>

            <div className="flex gap-4 mb-4">
                <div className="google flex gap-2 border border-gray-300 rounded-xl p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"/><path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"/><path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"/><path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"/></svg>
                    Sign in with google
                </div>
                <div className="apple flex gap-2 border border-gray-300 rounded-xl p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128"><path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137c-.138.44-2.607 8.916-8.597 17.669c-5.178 7.568-10.553 15.108-19.018 15.266c-8.318.152-10.993-4.934-20.504-4.934c-9.508 0-12.479 4.776-20.354 5.086c-8.172.31-14.395-8.185-19.616-15.724C15.822 94.961 7.669 66.8 18.616 47.791c5.438-9.44 15.158-15.417 25.707-15.571c8.024-.153 15.598 5.398 20.503 5.398c4.902 0 14.106-6.676 23.782-5.696c4.051.169 15.421 1.636 22.722 12.324c-.587.365-13.566 7.921-13.425 23.639M82.272 21.719c4.338-5.251 7.258-12.563 6.462-19.836c-6.254.251-13.816 4.167-18.301 9.416c-4.02 4.647-7.54 12.087-6.591 19.216c6.971.54 14.091-3.542 18.43-8.796"/></svg>
                    Sign in with Apple
                </div>
            </div>

            <div className="w-full my-10">
                <div className="relative border-b w-full text-gray-400 before:content-['Or_with_Email'] before:text-sm before:absolute before:left-[35%] before:-top-2.5 before:z-10 before:bg-slate-50 before:px-4 before:block "></div>
            </div>

            <div className="w-full">
                <input type="email" name="email" id="email" placeholder="Email" className="rounded-xl border border-gray-300 w-full mb-4" />
                <input type="password" name="password" id="password" placeholder="Password" className="rounded-xl border border-gray-300 w-full"/>
                <a href="#" className="text-violet-300 text-right w-full block mt-2">Forgot Password?</a>
            </div>
            
            <div className="pt-4">
                <button className="bg-slate-950 rounded-xl text-center text-white w-full p-2 mb-4">Sign In</button>
                <p className="text-gray-400">Not a Member yes? <a href="#" className="text-violet-300 capitalize text-center">sign up</a></p>
            </div>
        </form>
    </div>
  )
}

export default page