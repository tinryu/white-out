"use client";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Progress } from "flowbite-react";
import Image from "next/image";
import ChartVerticalBarOne from "../components/Chart/ChartVerticalBarOne";

const customTheme: CustomFlowbiteTheme["progress"] = {
  "base": "w-full overflow-hidden rounded-md bg-gray-200 dark:bg-gray-700 text-xs",
  "label": "mb-1 flex justify-between font-medium",
  "bar": "space-x-2 rounded-md text-center font-medium leading-6 text-slate-50 dark:text-cyan-100",
  "color": {
    "purple": "bg-purple-300 dark:bg-purple-300"
  }
};

const Page = () => {
  
  return (
    <>
    <div className="bg-slate-50 rounded-2xl p-6">
      <div className="flex justify-between">
        <span className="font-semibold text-md capitalize">Nani oni chan</span>
        <Image priority={true} src="/Cuudles.svg" alt="pepper" width={40} height={40} className="p-1 bg-purple-300 rounded-full"/>
      </div>
      <div className="flex *:flex *:items-center *:mr-2 mb-4 text-gray-400 text-sm max-sm:flex-wrap">
        <p><svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50"><path fill="currentColor" d="M25.1 42c-9.4 0-17-7.6-17-17s7.6-17 17-17s17 7.6 17 17s-7.7 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.8-15-15-15"/><path fill="currentColor" d="m15.3 37.3l-1.8-.8c.5-1.2 2.1-1.9 3.8-2.7c1.7-.8 3.8-1.7 3.8-2.8v-1.5c-.6-.5-1.6-1.6-1.8-3.2c-.5-.5-1.3-1.4-1.3-2.6c0-.7.3-1.3.5-1.7c-.2-.8-.4-2.3-.4-3.5c0-3.9 2.7-6.5 7-6.5c1.2 0 2.7.3 3.5 1.2c1.9.4 3.5 2.6 3.5 5.3c0 1.7-.3 3.1-.5 3.8c.2.3.4.8.4 1.4c0 1.3-.7 2.2-1.3 2.6c-.2 1.6-1.1 2.6-1.7 3.1V31c0 .9 1.8 1.6 3.4 2.2c1.9.7 3.9 1.5 4.6 3.1l-1.9.7c-.3-.8-1.9-1.4-3.4-1.9c-2.2-.8-4.7-1.7-4.7-4v-2.6l.5-.3s1.2-.8 1.2-2.4v-.7l.6-.3c.1 0 .6-.3.6-1.1c0-.2-.2-.5-.3-.6l-.4-.4l.2-.5s.5-1.6.5-3.6c0-1.9-1.1-3.3-2-3.3h-.6l-.3-.5c0-.4-.7-.8-1.9-.8c-3.1 0-5 1.7-5 4.5c0 1.3.5 3.5.5 3.5l.1.5l-.4.5c-.1 0-.3.3-.3.7c0 .5.6 1.1.9 1.3l.4.3v.5c0 1.5 1.3 2.3 1.3 2.4l.5.3v2.6c0 2.4-2.6 3.6-5 4.6c-1.1.4-2.6 1.1-2.8 1.6"/></svg>Developer</p>
        <p><svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50"><path fill="currentColor" d="m25 42.5l-.8-.9C23.7 41.1 12 27.3 12 19c0-7.2 5.8-13 13-13s13 5.8 13 13c0 8.3-11.7 22.1-12.2 22.7zM25 8c-6.1 0-11 4.9-11 11c0 6.4 8.4 17.2 11 20.4c2.6-3.2 11-14 11-20.4c0-6.1-4.9-11-11-11"/><path fill="currentColor" d="M25 24c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5m0-8c-1.7 0-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3"/></svg>SG, HCM</p>
        <p><svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"/></svg>evelopsuck@gmail.com</p>
      </div>
      <div className="flex flex-wrap max-sm:*:w-full">
        <div className="border-r-2 max-sm:border-r-0 max-sm:pr-0 pr-6">
          <div className="w-40 max-sm:w-full">
            <Progress theme={customTheme} progress={60} progressLabelPosition="inside" textLabel="Profile Compleation" textLabelPosition="outside" color="purple" size="xl" labelProgress labelText/>
          </div>
        </div>
        <div className="border-r-2 max-sm:border-r-0 max-sm:px-0 px-6">
          <div className="font-medium">Earnings</div>
          <div className="font-bold">$5,000</div>
        </div>
        <div className="border-r-2 max-sm:border-r-0 max-sm:px-0 px-6">
          <div className="font-medium">Project</div>
          <div className="font-bold">75</div>
        </div>
        <div className="px-6 max-sm:px-0">
          <div className="font-medium">Success Rate</div>
          <div className="font-bold">60%</div>
        </div>
      </div>
    </div>
    <div className="bg-slate-50 rounded-2xl p-6 mt-5">
      <div className="flex justify-between">
        <h5 className="font-bold text-md">Profile Details</h5>
        <a href="#" className="font-light text-gray-400 text-sm">Edit Profile</a>
      </div>
      <div className="flex mt-6 text-md">
        <div className="w-1/4 *:flex *:items-center *:mb-4 text-gray-400">
          <div>Company</div>
          <div>Contact Phone <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-.01 6c.558 0 1.01.452 1.01 1.01v5.124A1 1 0 0 1 12.5 18h-.49A1.01 1.01 0 0 1 11 16.99V12a1 1 0 1 1 0-2zM12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"/></g></svg></div>
          <div>Company Site</div>
          <div>Country <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-.01 6c.558 0 1.01.452 1.01 1.01v5.124A1 1 0 0 1 12.5 18h-.49A1.01 1.01 0 0 1 11 16.99V12a1 1 0 1 1 0-2zM12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"/></g></svg></div>
          <div>Communication</div>
          <div>Allow Changes</div>
        </div>
        <div className="w-3/4 *:flex *:items-center *:mb-4">
          <div>Cold Desgin</div>
          <div>032555554 55 <span className="bg-green-100 text-green-400 px-3 rounded-full ml-2">Complete</span> </div>
          <div>Byewind.com</div>
          <div>United States</div>
          <div>Email, Phone</div>
          <div>Yes</div>
        </div>
      </div>
      <div className="bg-slate-100 rounded-2xl p-6">
        <h5 className="flex items-center">
          <svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16M11 7h2v2h-2zm0 4h2v6h-2z"/></svg>
          We need your attention!
        </h5>
        <p className="ml-7 text-gray-400">Your payment was declined. To start using tools, please <a href="#" className="text-purple-300">Add Payment Method.</a></p>
      </div>
    </div>

    <div className="flex space-x-5 max-sm:space-x-0 mt-5 max-sm:w-full max-sm:flex-col">
      <div className="bg-slate-50 rounded-2xl p-6 w-3/4 max-sm:w-full">
        <div className="flex justify-between font-semibold">
          <h6>Top Selling Categories</h6>
          <a href="#">...</a>
        </div>
        <div className="chart">
          <ChartVerticalBarOne/>
        </div>
      </div>
      <div className="bg-slate-50 rounded-2xl p-6 w-1/4 max-sm:w-full">
        <h5 className="w-full text-center font-semibold text-xl">Have you tried new Mobie application?</h5>
        <Image priority={true} src="/Cuudles.svg" alt="pepper" width={40} height={40} className="p-1 bg-purple-300 rounded-full w-full my-8"/>
        <div className="flex justify-between space-x-2 text-sm font-semibold">
          <button className="bg-gray-100 p-1 rounded-md w-1/2 mr-1">Learn more</button>
          <button className="bg-gray-100 p-1 rounded-md w-1/2">Try now</button>
        </div>
      </div>
    </div>

    <div className="flex space-x-5 max-sm:space-x-0 mt-5 max-sm:w-full max-sm:flex-col">
      <div className="bg-slate-50 rounded-2xl p-6  w-1/2 max-sm:w-full">
        <div className="flex justify-between mb-6">
          <h6 className="font-bold text-md">Product Delivery</h6>
          <a href="#" className="font-normal text-gray-400 text-sm">Order Details</a>
        </div>
        <ul className="*:mb-4 text-sm">
          <li className="flex space-x-2">
            <div className="w-1/5">
              <Image priority={true} src="/Cuudles.svg" alt="pepper" width={12} height={12} className="p-1 bg-slate-100 w-full"/>
            </div>
            <div className="w-3/5">
              <h5>Hanes Women’s Perfect-T Long Sleeve T-shirt</h5>
              <p>To: Jason Bourne</p>
            </div>
            <div className="w-1/5 flex flex-col items-end">
              <a href="#" className="my-3">...</a>
              <span className="bg-purple-200 text-purple-400 rounded-full px-2 py-1 text-xs block text-center">In Progress</span>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="w-1/5">
              <Image priority={true} src="/Cuudles.svg" alt="pepper" width={12} height={12} className="p-1 bg-slate-100 w-full"/>
            </div>
            <div className="w-3/5">
              <h5>Hanes Women’s Perfect-T Long Sleeve T-shirt</h5>
              <p>To: Jason Bourne</p>
            </div>
            <div className="w-1/5 flex flex-col items-end">
              <a href="#" className="my-3">...</a>
              <span className="bg-blue-200 text-blue-400 rounded-full px-2 py-1 text-xs block text-center">Pending</span>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="w-1/5">
              <Image priority={true} src="/Cuudles.svg" alt="pepper" width={12} height={12} className="p-1 bg-slate-100 w-full"/>
            </div>
            <div className="w-3/5">
              <h5>Hanes Women’s Perfect-T Long Sleeve T-shirt</h5>
              <p>To: Jason Bourne</p>
            </div>
            <div className="w-1/5 flex flex-col items-end">
              <a href="#" className="my-3">...</a>
              <span className="bg-yellow-200 text-yellow-400 rounded-full px-2 py-1 text-xs block text-center">Approved</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-slate-50 rounded-2xl p-6 w-1/2 max-sm:w-full">
        <div className="flex justify-between mb-6">
          <h6 className="font-bold text-md">Stock Report</h6>
          <a href="#" className="font-light text-gray-400 text-sm">View Stock</a>
        </div>
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="border-b-2 *:mx-4 *:py-4 *:font-normal *:text-gray-400">
              <th className="w-2/5 text-center">Item</th>
              <th className="w-1/5 text-center">Price</th>
              <th className="w-1/5 text-center">Quantity</th>
              <th className="w-1/5 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="*:py-4 *:text-center">
              <td>ASOS Right Andree</td>
              <td>$80.44</td>
              <td>50</td>
              <td><span className="bg-purple-200 text-purple-400 rounded-full px-2 py-1 text-xs inline-block">In Progress</span></td>
            </tr>
            <tr className="*:py-4">
              <td>ASOS Right Andree</td>
              <td>$80.44</td>
              <td>50</td>
              <td><span className="bg-green-200 text-green-400 rounded-full px-2 py-1 text-xs inline-block">Complete</span></td>
            </tr>
            <tr className="*:py-4">
              <td>ASOS Right Andree</td>
              <td>$80.44</td>
              <td>50</td>
              <td><span className="bg-blue-200 text-blue-400 rounded-full px-2 py-1 text-xs inline-block">Pending</span></td>
            </tr>
            <tr className="*:py-4">
              <td>ASOS Right Andree</td>
              <td>$80.44</td>
              <td>50</td>
              <td><span className="bg-purple-200 text-purple-400 rounded-full px-2 py-1 text-xs inline-block">In Progress</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}

export default Page