"use client"
import React, { useState } from 'react'

const Page = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');

    const checkPasswordStrength = (password: any) => {
        let strength = 'Weak';
        const minLength = 8;
        const regex = {
          lower: /[a-z]/,
          upper: /[A-Z]/,
          number: /[0-9]/,
          special: /[!@#$%^&*(),.?":{}|<>]/
        };
        let passedCriteria = 0;
    
        if (password.length >= minLength) passedCriteria++;
        if (regex.lower.test(password)) passedCriteria++;
        if (regex.upper.test(password)) passedCriteria++;
        if (regex.number.test(password)) passedCriteria++;
        if (regex.special.test(password)) passedCriteria++;
        console.log('passedCriteria', passedCriteria);
        switch (passedCriteria) {
          case 5:
            strength = 'Very Strong';
            break;
          case 4:
            strength = 'Strong';
            break;
          case 3:
            strength = 'Medium';
            break;
          default:
            strength = 'Weak';
        }
    
        return strength;
    };

    const handleChange = (e: any) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setStrength(checkPasswordStrength(newPassword));
    };
  return (
    <div className="rounded-xl w-full">
        <form id="signup" className="w-1/2 m-auto bg-slate-50 p-6 text-center rounded-2xl">
            <h5 className="font-bold text-xl">Sign Up</h5>
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
                
                <span className="relative">
                    <input value={password} onChange={handleChange} type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="rounded-xl border border-gray-300 w-full" />
                    <span className="absolute -top-1 right-2">
                        { showPassword ? 
                        <svg onClick={() => setShowPassword((prev) => !prev)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M11.5 18c4 0 7.46-2.22 9.24-5.5C18.96 9.22 15.5 7 11.5 7s-7.46 2.22-9.24 5.5C4.04 15.78 7.5 18 11.5 18m0-12c4.56 0 8.5 2.65 10.36 6.5C20 16.35 16.06 19 11.5 19S3 16.35 1.14 12.5C3 8.65 6.94 6 11.5 6m0 2C14 8 16 10 16 12.5S14 17 11.5 17S7 15 7 12.5S9 8 11.5 8m0 1A3.5 3.5 0 0 0 8 12.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11.5 9"/></svg> : 
                        <svg onClick={() => setShowPassword((prev) => !prev)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M2.54 4.71L3.25 4L20 20.75l-.71.71l-3.34-3.35c-1.37.57-2.87.89-4.45.89c-4.56 0-8.5-2.65-10.36-6.5c.97-2 2.49-3.67 4.36-4.82zM11.5 18c1.29 0 2.53-.23 3.67-.66l-1.12-1.13c-.73.5-1.6.79-2.55.79C9 17 7 15 7 12.5c0-.95.29-1.82.79-2.55L6.24 8.41a10.64 10.64 0 0 0-3.98 4.09C4.04 15.78 7.5 18 11.5 18m9.24-5.5C18.96 9.22 15.5 7 11.5 7c-1.15 0-2.27.19-3.31.53l-.78-.78C8.68 6.26 10.06 6 11.5 6c4.56 0 8.5 2.65 10.36 6.5a11.47 11.47 0 0 1-4.07 4.63l-.72-.73c1.53-.96 2.8-2.3 3.67-3.9M11.5 8C14 8 16 10 16 12.5c0 .82-.22 1.58-.6 2.24l-.74-.74c.22-.46.34-.96.34-1.5A3.5 3.5 0 0 0 11.5 9c-.54 0-1.04.12-1.5.34l-.74-.74c.66-.38 1.42-.6 2.24-.6M8 12.5a3.5 3.5 0 0 0 3.5 3.5c.67 0 1.29-.19 1.82-.5L8.5 10.68c-.31.53-.5 1.15-.5 1.82"/></svg>}
                    </span>
                </span>
                <ul className="flex gap-3 my-2 *:border-4 *:rounded-xl *:w-full">
                    <li className={strength === 'Weak' ? "border-red-500" : "border-gray-400"}></li>
                    <li className={strength === 'Medium' ? "border-yellow-200" : "border-gray-400"}></li>
                    <li className={strength === 'Strong' ? "border-orange-400" : "border-gray-400"}></li>
                    <li className={strength === 'Very Strong' ? "border-green-400" : "border-gray-400"}></li>
                </ul>
                <span className="text-sm block text-right text-slate-950">{strength}</span>
                
                <p className="text-gray-400 text-sm mt-2 mb-4">Use 8 or more charaters with a mix of letter lower, upper, numbers & symbols.</p>

                <span className="relative">
                    <input type={showRePassword ? "text" : "password"} name="repassword" id="repassword" placeholder="Repeat Password" className="rounded-xl border border-gray-300 w-full" />
                    <span className="absolute -top-1 right-2">
                        { showPassword ? 
                        <svg onClick={() => setShowRePassword((prev) => !prev)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M11.5 18c4 0 7.46-2.22 9.24-5.5C18.96 9.22 15.5 7 11.5 7s-7.46 2.22-9.24 5.5C4.04 15.78 7.5 18 11.5 18m0-12c4.56 0 8.5 2.65 10.36 6.5C20 16.35 16.06 19 11.5 19S3 16.35 1.14 12.5C3 8.65 6.94 6 11.5 6m0 2C14 8 16 10 16 12.5S14 17 11.5 17S7 15 7 12.5S9 8 11.5 8m0 1A3.5 3.5 0 0 0 8 12.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 11.5 9"/></svg> : 
                        <svg onClick={() => setShowRePassword((prev) => !prev)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M2.54 4.71L3.25 4L20 20.75l-.71.71l-3.34-3.35c-1.37.57-2.87.89-4.45.89c-4.56 0-8.5-2.65-10.36-6.5c.97-2 2.49-3.67 4.36-4.82zM11.5 18c1.29 0 2.53-.23 3.67-.66l-1.12-1.13c-.73.5-1.6.79-2.55.79C9 17 7 15 7 12.5c0-.95.29-1.82.79-2.55L6.24 8.41a10.64 10.64 0 0 0-3.98 4.09C4.04 15.78 7.5 18 11.5 18m9.24-5.5C18.96 9.22 15.5 7 11.5 7c-1.15 0-2.27.19-3.31.53l-.78-.78C8.68 6.26 10.06 6 11.5 6c4.56 0 8.5 2.65 10.36 6.5a11.47 11.47 0 0 1-4.07 4.63l-.72-.73c1.53-.96 2.8-2.3 3.67-3.9M11.5 8C14 8 16 10 16 12.5c0 .82-.22 1.58-.6 2.24l-.74-.74c.22-.46.34-.96.34-1.5A3.5 3.5 0 0 0 11.5 9c-.54 0-1.04.12-1.5.34l-.74-.74c.66-.38 1.42-.6 2.24-.6M8 12.5a3.5 3.5 0 0 0 3.5 3.5c.67 0 1.29-.19 1.82-.5L8.5 10.68c-.31.53-.5 1.15-.5 1.82"/></svg>}
                    </span>
                </span>

                <label htmlFor="condition" className="text-gray-400 text-sm my-6 block text-left">
                    <input type="checkbox" name="codition" id="condition" className="mr-2 rounded-sm border-gray-300" />
                    I Agree & <a href="#" className="text-violet-300">Terms and conditions</a>
                </label>
            </div>
            
            <div className="pt-4">
                <button className="bg-slate-950 rounded-xl text-center text-white w-full p-2 mb-4">Sign Up</button>
                <p className="text-gray-400">Already have an Account? <a href="#" className="text-violet-300 capitalize text-center">sign in</a></p>
            </div>
        </form>
    </div>
  )
}

export default Page