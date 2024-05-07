import React from 'react'

const page = () => {
  return (
    <>
    <div className="bg-slate-50 rounded-2xl p-6">
        <h6>Profile Details</h6>
        <form action="" method="post" className="flex flex-col">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 *:w-2/3">
                <div className="grid grid-cols-2 gap-x-8">
                    <input type="text" placeholder='First Name' name="firstname" id="firstname" className="rounded-lg border-gray-300 p-4" />
                    <input type="text" placeholder='Last Name' name="lastname" id="lastname" className="rounded-lg border-gray-300 p-4"/>
                </div>
                <input type="text" placeholder="com" autoComplete="com" name="comunication" id="comunication" className="rounded-lg border-gray-300 p-4"/>
                <input type="text" placeholder="Snow ui" autoComplete="com" name="company" id="company" className="rounded-lg border-gray-300 p-4"/>
                <input type="text" placeholder="com" autoComplete="com" name="companysite" id="companysite" className="rounded-lg border-gray-300 p-4"/>
                <input type="text" placeholder="com" autoComplete="com" name="country" id="country" className="rounded-lg border-gray-300 p-4"/>
                <input type="text" placeholder="com" autoComplete="com" name="language" id="language" className="rounded-lg border-gray-300 p-4"/>
                <label className="switch mr-2 !w-10" htmlFor="title-check">
                    <input type="checkbox" name="title-check" id="title-check"/>
                    <span className="slider round"></span>
                </label>
                <span className="">Title</span>
            </div>
        </form> 
    </div>
    <div className="bg-slate-50 rounded-2xl mt-6 p-6">
        <h6>Sign-in Method</h6>
        <div className="form-sighin flex flex-wrap *:w-2/3">
            <div className="g-email relative *:text-sm *:w-full">
                <label htmlFor="email" className="absolute top-2 left-4 text-gray-3400" >Email Address</label>
                <input type="text" placeholder="befood@gmail.com" autoComplete="befood@gmail.com" id="email" name="email" className="rounded-lg border-gray-300 pt-8 pb-4 px-4 placeholder:text-gray-300"/>
            </div>
            <div className="g-password relative *:text-sm *:w-full mt-6">
                <label htmlFor="password" className="absolute top-2 left-4 text-gray-400">Password</label>
                <input type="password" placeholder="coccsc" id="password" name="password" className="rounded-lg border-gray-300 pt-8 pb-4 px-4 placeholder:text-gray-300"/>
            </div>
            

            <div className="note bg-slate-200 rounded-2xl p-6 flex justify-between items-start !w-full mt-6">
                <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 256 256"><path fill="currentColor" d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.26 47 25.53a8 8 0 0 0 4.2 0c1-.27 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m0 72c0 37.07-13.66 67.16-40.6 89.42a129.3 129.3 0 0 1-39.4 22.2a128.25 128.25 0 0 1-38.92-21.81C61.82 179.51 48 149.3 48 112V56h160ZM82.34 141.66a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32l-56 56a8 8 0 0 1-11.32 0Z"/></svg>
                </div>
                <div className="content text-sm pr-24">
                    <h6 className="font-semibold">Secure Your Account</h6>
                    <p className="text-gray-400">Two-factor authentication adds an extra layer of security to your account. To log in, in addition you`l need to provide a 6 digit code.</p>
                </div>
                <button className="bg-gray-300 px-3 py-1 rounded-md">Enable</button>
            </div>
        </div>
    </div>
    <div className="bg-slate-50 rounded-2xl mt-6 p-6">
        <h6>Connected Accounts</h6>
        <div className="bg-slate-100 rounded-2xl mt-6 p-6 flex text-sm text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.26 47 25.53a8 8 0 0 0 4.2 0c1-.27 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m0 72c0 37.07-13.66 67.16-40.6 89.42a129.3 129.3 0 0 1-39.4 22.2a128.25 128.25 0 0 1-38.92-21.81C61.82 179.51 48 149.3 48 112V56h160ZM82.34 141.66a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32l-56 56a8 8 0 0 1-11.32 0Z"/></svg>
            <p className="pl-2">
            Two-factor authentication adds an extra layer of security to your account. To log in, in you`ll need to provide a 4 digit amazing code. <a href="#" className="text-violet-400">Learn More</a>
            </p>
        </div>
        <ul className="list-social grid grid-rows-3 *:border-b *:p-6">
            <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-none" width="45" height="45" viewBox="0 0 128 128"><path fill="#fff" d="M44.59 4.21a63.28 63.28 0 0 0 4.33 120.9a67.6 67.6 0 0 0 32.36.35a57.13 57.13 0 0 0 25.9-13.46a57.44 57.44 0 0 0 16-26.26a74.3 74.3 0 0 0 1.61-33.58H65.27v24.69h34.47a29.72 29.72 0 0 1-12.66 19.52a36.2 36.2 0 0 1-13.93 5.5a41.3 41.3 0 0 1-15.1 0A37.2 37.2 0 0 1 44 95.74a39.3 39.3 0 0 1-14.5-19.42a38.3 38.3 0 0 1 0-24.63a39.25 39.25 0 0 1 9.18-14.91A37.17 37.17 0 0 1 76.13 27a34.3 34.3 0 0 1 13.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.2 61.2 0 0 0 87.2 4.59a64 64 0 0 0-42.61-.38"/><path fill="#e33629" d="M44.59 4.21a64 64 0 0 1 42.61.37a61.2 61.2 0 0 1 20.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.3 34.3 0 0 0-13.64-8a37.17 37.17 0 0 0-37.46 9.74a39.25 39.25 0 0 0-9.18 14.91L8.76 35.6A63.53 63.53 0 0 1 44.59 4.21"/><path fill="#f8bd00" d="M3.26 51.5a63 63 0 0 1 5.5-15.9l20.73 16.09a38.3 38.3 0 0 0 0 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 0 1-5.5-40.9"/><path fill="#587dbd" d="M65.27 52.15h59.52a74.3 74.3 0 0 1-1.61 33.58a57.44 57.44 0 0 1-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0 0 12.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68"/><path fill="#319f43" d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0 0 44 95.74a37.2 37.2 0 0 0 14.08 6.08a41.3 41.3 0 0 0 15.1 0a36.2 36.2 0 0 0 13.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 0 1-25.9 13.47a67.6 67.6 0 0 1-32.36-.35a63 63 0 0 1-23-11.59A63.7 63.7 0 0 1 8.75 92.4"/></svg>
                <p className="flex-1 px-4 font-bold capitalize">
                    google
                    <span className="flex font-normal text-slate-400 text-sm">Plan properly your workflow</span>
                </p>
                <label className="switch mr-2 !w-10" htmlFor="google">
                    <input type="checkbox" id="google" name="google" />
                    <span className="slider round"></span>
                </label>
            </li>
            <li className="flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-none" width="45" height="45" viewBox="0 0 64 64"><path fill="black" d="M32 0C14 0 0 14 0 32c0 21 19 30 22 30c2 0 2-1 2-2v-5c-7 2-10-2-11-5c0 0 0-1-2-3c-1-1-5-3-1-3c3 0 5 4 5 4c3 4 7 3 9 2c0-2 2-4 2-4c-8-1-14-4-14-15c0-4 1-7 3-9c0 0-2-4 0-9c0 0 5 0 9 4c3-2 13-2 16 0c4-4 9-4 9-4c2 7 0 9 0 9c2 2 3 5 3 9c0 11-7 14-14 15c1 1 2 3 2 6v8c0 1 0 2 2 2c3 0 22-9 22-30C64 14 50 0 32 0"/></svg>
                <p className="flex-1 px-4 font-bold capitalize">
                    github
                    <span className="flex font-normal text-slate-400 text-sm">Keep eye on your Repositories</span>
                </p>
                <label className="switch mr-2 !w-10"  htmlFor="github">
                    <input type="checkbox" id="github" name="github"/>
                    <span className="slider round"></span>
                </label>
            </li>
            <li className="flex justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-none" width="45" height="45" viewBox="0 0 128 128"><path fill="#de1c59" d="M27.255 80.719c0 7.33-5.978 13.317-13.309 13.317S.63 88.049.63 80.719s5.987-13.317 13.317-13.317h13.309zm6.709 0c0-7.33 5.987-13.317 13.317-13.317s13.317 5.986 13.317 13.317v33.335c0 7.33-5.986 13.317-13.317 13.317c-7.33 0-13.317-5.987-13.317-13.317zm0 0"/><path fill="#35c5f0" d="M47.281 27.255c-7.33 0-13.317-5.978-13.317-13.309S39.951.63 47.281.63s13.317 5.987 13.317 13.317v13.309zm0 6.709c7.33 0 13.317 5.987 13.317 13.317s-5.986 13.317-13.317 13.317H13.946C6.616 60.598.63 54.612.63 47.281c0-7.33 5.987-13.317 13.317-13.317zm0 0"/><path fill="#2eb57d" d="M100.745 47.281c0-7.33 5.978-13.317 13.309-13.317s13.317 5.987 13.317 13.317s-5.987 13.317-13.317 13.317h-13.309zm-6.709 0c0 7.33-5.987 13.317-13.317 13.317s-13.317-5.986-13.317-13.317V13.946C67.402 6.616 73.388.63 80.719.63c7.33 0 13.317 5.987 13.317 13.317zm0 0"/><path fill="#ebb02e" d="M80.719 100.745c7.33 0 13.317 5.978 13.317 13.309s-5.987 13.317-13.317 13.317s-13.317-5.987-13.317-13.317v-13.309zm0-6.709c-7.33 0-13.317-5.987-13.317-13.317s5.986-13.317 13.317-13.317h33.335c7.33 0 13.317 5.986 13.317 13.317c0 7.33-5.987 13.317-13.317 13.317zm0 0"/></svg>
                <p className="flex-1 px-4 font-bold capitalize">
                    slack 
                    <span className="flex font-normal text-slate-400 text-sm">integrate Projects Discussions</span>
                </p>
                    <label className="switch mr-2 !w-10" htmlFor="slack">
                    <input type="checkbox" id="slack" name="slack"/>
                    <span className="slider round"></span>
                </label>
            </li>

        </ul>

    </div>
    <div className="bg-slate-50 rounded-2xl mt-6 p-6">
        <div className="flex justify-between">
            <h5 className="font-bold capitalize">Email preferences</h5>
            <div className="g-button flex gap-3 *:text-sm *:font-normal">
                <button className="bg-slate-100 rounded-md py-1 px-2">Cancel</button>
                <button className="bg-slate-950 text-white rounded-md py-1 px-2">Save Changes</button>
            </div>
        </div>
        <ul className="*:border-b *:p-6">
            <li className="flex last:border-none">
                <label htmlFor="choice-1" className="relative">
                    <input type="checkbox" id="choice-1" name="choice-1" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/check"/>
                    <span className="checkmark absolute top-2 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/check:bg-slate-950 peer-checked/check:border-slate-50 after:border-slate-50 after:peer-checked/check:block"></span>
                    <p className="font-bold capitalize flex-1 pl-12 pr-4">
                        Successful Payments
                        <span className="flex font-normal text-slate-400 text-sm">Receive a notification for every successful payment.</span>
                    </p>
                </label>
            </li>
            <li className="flex last:border-none">
                <label htmlFor="choice-2" className="relative">
                    <input type="checkbox" id="choice-2" name="choice-2" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/check"/>
                    <span className="checkmark absolute top-2 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/check:bg-slate-950 peer-checked/check:border-slate-50 after:border-slate-50 after:peer-checked/check:block"></span>
                    <p className="font-bold capitalize flex-1 pl-12 pr-4">
                        Fee Collection
                        <span className="flex font-normal text-slate-400 text-sm">Receive a notification for every successful payment.</span>
                    </p>
                </label>
            </li>
            <li className="flex last:border-none">
                <label htmlFor="choice-3" className="relative ">
                    <input type="checkbox" id="choice-3" name="choice-3" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/check"/>
                    <span className="checkmark absolute top-2 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/check:bg-slate-950 peer-checked/check:border-slate-50 after:border-slate-50 after:peer-checked/check:block"></span>
                    <p className="font-bold capitalize flex-1 pl-12 pr-4">
                        Customer Payment Dispute
                        <span className="flex font-normal text-slate-400 text-sm">Receive a notification for every successful payment.</span>
                    </p>
                </label>
            </li>
            <li className="flex last:border-none">
                <label htmlFor="choice-4" className="relative ">
                    <input type="checkbox" id="choice-4" name="choice-4" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/check"/>
                    <span className="checkmark absolute top-2 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/check:bg-slate-950 peer-checked/check:border-slate-50 after:border-slate-50 after:peer-checked/check:block"></span>
                    <p className="font-bold capitalize flex-1 pl-12 pr-4">
                        Refund Alerts
                        <span className="flex font-normal text-slate-400 text-sm">Receive a notification for every successful payment.</span>
                    </p>
                </label>
            </li>
            <li className="flex last:border-none">
                <label htmlFor="choice-5" className="relative">
                    <input type="checkbox" id="choice-5" name="choice-5" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/check"/>
                    <span className="checkmark absolute top-2 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/check:bg-slate-950 peer-checked/check:border-slate-50 after:border-slate-50 after:peer-checked/check:block"></span>
                    <p className="font-bold capitalize flex-1 pl-12 pr-4">
                        Invoice Payments
                        <span className="flex font-normal text-slate-400 text-sm">Receive a notification for every successful payment.</span>
                    </p>
                </label>
            </li>
            <li className="flex last:border-none">
                <label htmlFor="choice-6" className="relative ">
                    <input type="checkbox" id="choice-6" name="choice-6" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/check"/>
                    <span className="checkmark absolute top-2 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/check:bg-slate-950 peer-checked/check:border-slate-50 after:border-slate-50 after:peer-checked/check:block"></span>
                    <p className="font-bold capitalize flex-1 pl-12 pr-4">
                        Webhook API Endpoints
                        <span className="flex font-normal text-slate-400 text-sm">Receive a notification for every successful payment.</span>
                    </p>
                </label>
            </li>
        </ul>
    </div>
    <div className="bg-slate-50 rounded-2xl mt-6 p-6">
        <div className="flex justify-between">
            <h5 className="font-bold capitalize">Notifications</h5>
            <div className="g-button flex gap-3 *:text-sm *:font-normal">
                <button className="bg-slate-100 rounded-md py-1 px-2">Cancel</button>
                <button className="bg-slate-950 text-white rounded-md py-1 px-2">Save Changes</button>
            </div>
        </div>
        <ul className="*:border-b *:p-6">
            <li className="flex justify-between last:border-none">
                <p className="capitalize">
                    Notification
                </p>
                <div className="flex">
                    <label htmlFor="email-no" className="relative right-10">
                        <input type="checkbox" id="email-no" name="email-no" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/checknoti"/>
                        <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/checknoti:bg-slate-950 peer-checked/checknoti:border-slate-50 after:border-slate-50 after:peer-checked/checknoti:block"></span>
                        <p className="pl-10">Email</p>
                    </label>
                    <label htmlFor="phone-no" className="relative right-0">
                        <input type="checkbox" id="phone-no" name="phone-no" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/checknoti"/>
                        <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/checknoti:bg-slate-950 peer-checked/checknoti:border-slate-50 after:border-slate-50 after:peer-checked/checknoti:block"></span>
                        <p className="pl-10">Phone</p>
                    </label>
                </div>
            </li>
            <li className="flex justify-between last:border-none">
                <p className="capitalize">
                    Billing Updates
                </p>
                <div className="flex">
                    <label htmlFor="email-bill" className="relative right-10">
                        <input type="checkbox" id="email-bill" name="email-bill;" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/checknoti"/>
                        <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/checknoti:bg-slate-950 peer-checked/checknoti:border-slate-50 after:border-slate-50 after:peer-checked/checknoti:block"></span>
                        <p className="pl-10">Email</p>
                    </label>
                    <label htmlFor="phone-bill" className="relative right-0">
                        <input type="checkbox" id="phone-bill" name="phone-bill" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/checknoti"/>
                        <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/checknoti:bg-slate-950 peer-checked/checknoti:border-slate-50 after:border-slate-50 after:peer-checked/checknoti:block"></span>
                        <p className="pl-10">Phone</p>
                    </label>
                </div>
            </li>
            <li className="flex justify-between last:border-none">
                <p className="capitalize">
                    New Team Members
                </p>
                <div className="flex">
                    <label htmlFor="email-mem" className="relative right-10">
                        <input type="checkbox" id="email-mem" name="email-mem" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/checknoti"/>
                        <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/checknoti:bg-slate-950 peer-checked/checknoti:border-slate-50 after:border-slate-50 after:peer-checked/checknoti:block"></span>
                        <p className="pl-10">Email</p>
                    </label>
                    <label htmlFor="phone-mem" className="relative right-0">
                        <input type="checkbox" id="phone-mem" name="phone-mem" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/checknoti"/>
                        <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/checknoti:bg-slate-950 peer-checked/checknoti:border-slate-50 after:border-slate-50 after:peer-checked/checknoti:block"></span>
                        <p className="pl-10">Phone</p>
                    </label>
                </div>
            </li>
            <li className="flex justify-between last:border-none">
                <p className="capitalize">
                    Completed Projects
                </p>
                <div className="flex">
                    <label htmlFor="email-pro" className="relative right-10">
                        <input type="checkbox" id="email-pro" name="email-pro" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/checknoti"/>
                        <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/checknoti:bg-slate-950 peer-checked/checknoti:border-slate-50 after:border-slate-50 after:peer-checked/checknoti:block"></span>
                        <p className="pl-10">Email</p>
                    </label>
                    <label htmlFor="phone-pro" className="relative right-0">
                        <input type="checkbox" id="phone-pro" name="phone-pro" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/checknoti"/>
                        <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/checknoti:bg-slate-950 peer-checked/checknoti:border-slate-50 after:border-slate-50 after:peer-checked/checknoti:block"></span>
                        <p className="pl-10">Phone</p>
                    </label>
                </div>
            </li>
            <li className="flex justify-between last:border-none">
                <p className="capitalize">
                    NewsLetters
                </p>
                <div className="flex">
                    <label htmlFor="email-news" className="relative right-10">
                        <input type="checkbox" id="email-news" name="email-news" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/checknoti"/>
                        <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/checknoti:bg-slate-950 peer-checked/checknoti:border-slate-50 after:border-slate-50 after:peer-checked/checknoti:block"></span>
                        <p className="pl-10">Email</p>
                    </label>
                    <label htmlFor="phone-news" className="relative right-0">
                        <input type="checkbox" id="phone-news" name="phone-news" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/checknoti"/>
                        <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/checknoti:bg-slate-950 peer-checked/checknoti:border-slate-50 after:border-slate-50 after:peer-checked/checknoti:block"></span>
                        <p className="pl-10">Phone</p>
                    </label>
                </div>
            </li>
        </ul>
    </div>
    <div className="bg-slate-50 rounded-2xl mt-6 p-6">
        <div className="flex justify-between">
            <h5 className="font-bold capitalize">Deactivate Account</h5>
            <button className="bg-red-500 rounded-md py-1 px-2 text-white text-sm">Deactivate Account</button>
        </div>
        <div className="bg-slate-100 rounded-2xl mt-6 p-6 flex">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="black" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768a384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0a48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"/></svg>
            <p className="pl-2 text-sm text-slate-950 flex-col">
                <p className="">You Are Deactivating Your Account</p>
                <p className="text-xs text-slate-500">
                    For extra security, this requires you to confirm your email or phone number when you reset yousignr password. 
                    <a href="#" className="text-violet-400">Learn more</a></p>
            </p>
        </div>
        <div className="flex pl-6">
            <label htmlFor="comfirmdeac" className="relative mt-6">
                <input type="checkbox" id="comfirmdeac" name="comfirmdeac" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/check"/>
                <span className="checkmark absolute top-0 left-0 h-[22px] w-[22px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/check:bg-slate-950 peer-checked/check:border-slate-50 after:border-slate-50 after:peer-checked/check:block"></span>
                <p className="flex-1 pl-8">
                    I comfirm my account deactivation
                </p>
            </label>
        </div>
    </div>
    </>
  )
}

export default page