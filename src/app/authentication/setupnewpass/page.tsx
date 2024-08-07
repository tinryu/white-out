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
        <form id="createpass" className="w-1/2 max-sm:w-full m-auto bg-slate-50 p-6 text-center rounded-2xl">
            <h5 className="font-bold text-xl">Setup New Password</h5>
            <p className="text-gray-400 text-sm pt-3 pb-10">Have you already reset the password ? <a href="#" className="text-violet-300">Sign in</a></p>

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
            
            <div className="pt-4">
                <button className="bg-slate-950 rounded-xl text-center text-white w-full p-2 mb-4">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Page