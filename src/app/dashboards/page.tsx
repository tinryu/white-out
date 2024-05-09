"use client";
import { Progress, Toast, CustomFlowbiteTheme } from "flowbite-react";
import Image from "next/image";
import { useState } from "react";
import FileUpload from "../components/FileUpload";

const customTheme: CustomFlowbiteTheme["progress"] = {
  "base": "w-full overflow-hidden rounded-md bg-gray-200 dark:bg-gray-700 text-xs",
  "label": "mb-1 flex justify-between font-medium",
  "bar": "space-x-2 rounded-md text-center font-medium leading-6 text-slate-50 dark:text-cyan-100",
};

const Page = () => {
  const [showToast, setShowToast] = useState(false);
  let sevenDays = show7Date();
  
  return (
    <>
    {showToast && (
        <Toast className="fixed top-10 right-10">
          <div className="ml-3 text-sm font-normal">Tks for click me daddy!!!</div>
          <Toast.Toggle onDismiss={() => setShowToast(false)} />
        </Toast>
      )}
    <div className="bg-slate-50 rounded-2xl p-6">
      <div className="flex justify-between">
        <span className="font-semibold text-md capitalize">coffee detail page</span>
        <svg className="text-[40px] text-white bg-[#95A4FC] rounded-full p-2" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 32v448m57.72-400A111.47 111.47 0 0 1 256 96a111.47 111.47 0 0 1-57.72-16m0 352a112.11 112.11 0 0 1 115.44 0m136.27-288L62.01 368m375.26-150a112.09 112.09 0 0 1-57.71-100M74.73 294a112.09 112.09 0 0 1 57.71 100M62.01 144l387.98 224M74.73 218a112.09 112.09 0 0 0 57.71-100m304.83 176a112.09 112.09 0 0 0-57.71 100"/></svg>
      </div>
      <div className="flex flex-wrap">
        <div className="border-r-2 px-6">
          <div className="w-40">
            <Progress theme={customTheme} progress={50} progressLabelPosition="inside" textLabel="Status" textLabelPosition="outside" color="purple" size="xl" labelProgress labelText/>
          </div>
        </div>
        <div className="border-r-2 px-6">
          <div className="font-medium">Total Tasks</div>
          <div className="font-bold text-slate-300">
            <span className="text-black">15</span> / <span className="text-black">48</span>
          </div>
        </div>
        <div className="border-r-2 px-6">
          <div className="font-medium">Due Date</div>
          <div className="font-bold">29 Jan, 2022</div>
        </div>
        <div className="px-6">
          <div className="font-medium">Budget Spent</div>
          <div className="font-bold">$15,000</div>
        </div>
      </div>
    </div>
    <div className="mt-6 grid grid-cols-2 gap-6">
      <div className="bg-slate-50 rounded-2xl p-6">
        <h4>What`s on the road?</h4>
        <div className="flex space-x-6 mt-4 *:bg-slate-50 *:p-2 *:rounded-xl *:text-slate-950">
          {sevenDays.map((i: any, key: any) => (
            <button className={i.active === 1 ? "!bg-slate-950 !text-slate-50 *:block" : "*:block"} key={key}><span>{i.day}</span><span>{i.date}</span></button> 
          ))}
        </div>

        <ul className="flex flex-col w-full mt-6 -mx-3">
          <li className="mb-4">
            <a href="#" className="flex flex-row items-center h-10 px-3">
              <span className="bg-gray-500 rounded-full relative after:w-5 after:h-[1px] after:bg-[#e8e8e8] after:rotate-90 after:content-[' '] after:block after:absolute after:-bottom-4 after:left-1">
                <Image priority={true} src="/Ginger.svg" alt="pepper" width={26} height={26} className="p-1"/>
              </span>
              <span className="ml-3 text-xs">
                <span className="text-[14px] mb-1 block">Change the style.</span>
                <span className="flex flex-col text-gray-300 font-medium">Just now</span>
              </span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex flex-row items-center h-10 px-3">
              <span className="bg-gray-300 rounded-full relative after:w-5 after:h-[1px] after:bg-[#e8e8e8] after:rotate-90 after:content-[' '] after:block after:absolute after:-bottom-4 after:left-1">
                <Image priority={true} src="/Cuudles.svg" alt="pepper" width={26} height={26} className="p-1"/>
              </span>
              <span className="ml-3 text-xs">
                <span className="text-[14px] mb-1 block">Released a new version.</span>
                <span className="flex flex-col text-gray-300 font-medium">54 minutes ago</span>
              </span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex flex-row items-center h-10 px-3">
              <span className="bg-gray-500 rounded-full relative after:w-5 after:h-[1px] after:bg-[#e8e8e8] after:rotate-90 after:content-[' '] after:block after:absolute after:-bottom-4 after:left-1">
                <Image priority={true} src="/Cuudles.svg" alt="pepper" width={26} height={26} className="p-1"/>
              </span>
              <span className="ml-3 text-xs">
                <span className="text-[14px] mb-1 block">Submitted a bug.</span>
                <span className="flex flex-col text-gray-300 font-medium">1 hours</span>
              </span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex flex-row items-center h-10 px-3">
              <span className="bg-gray-300 rounded-full">
                <Image priority={true} src="/Ginger.svg" alt="pepper" width={26} height={26} className="p-1"/>
              </span>
              <span className="ml-3 text-xs">
                <span className="text-[14px] mb-1 block">Create new page.</span>
                <span className="flex flex-col text-gray-300 font-medium">To day, 11:59 AM</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-slate-50 rounded-2xl p-6">
        <h4>Lasted Files</h4>
        <ul className="flex flex-col w-full mt-6">
          <li className="mb-4 relative">
            <a href="#" className="flex flex-row items-center h-10 px-3 group hover:shadow-sm">
              <span className="text-lg flex items-center bg-[#e5ecf6] rounded-md p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M222 152a6 6 0 0 1-6 6h-26v20h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0v-56a6 6 0 0 1 6-6h32a6 6 0 0 1 6 6M90 172a26 26 0 0 1-26 26H54v10a6 6 0 0 1-12 0v-56a6 6 0 0 1 6-6h16a26 26 0 0 1 26 26m-12 0a14 14 0 0 0-14-14H54v28h10a14 14 0 0 0 14-14m84 8a34 34 0 0 1-34 34h-16a6 6 0 0 1-6-6v-56a6 6 0 0 1 6-6h16a34 34 0 0 1 34 34m-12 0a22 22 0 0 0-22-22h-10v44h10a22 22 0 0 0 22-22M42 112V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.25 1.76l56 56A6 6 0 0 1 214 88v24a6 6 0 0 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 0 1-12 0m116-30h35.52L158 46.48Z"/></svg>
              </span>
              <span className="ml-3 text-xs">
                <span className="text-[14px] mb-1">Your fixed bug.</span>
                <span className="flex flex-col text-gray-300 font-medium">Just now</span>
              </span>
              <span className="absolute top-1 right-0 opacity-0 group-hover:opacity-100 group-hover:transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8"/></svg>
              </span>
            </a>
          </li>
          <li className="mb-4 relative">
            <a href="#" className="flex flex-row items-center h-10 px-3 group hover:shadow-sm">
              <span className="text-lg flex items-center bg-[#e5ecf6] rounded-md p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M120 146h-16a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-10h10a26 26 0 0 0 0-52m0 40h-10v-28h10a14 14 0 0 1 0 28m94-2v16.87a6 6 0 0 1-1.67 4.15A28.06 28.06 0 0 1 192 214c-16.54 0-30-15.25-30-34s13.46-34 30-34a27.43 27.43 0 0 1 15.36 4.77a6 6 0 0 1-6.72 9.95A15.25 15.25 0 0 0 192 158c-9.93 0-18 9.87-18 22s8.07 22 18 22a15.75 15.75 0 0 0 10-3.73V190h-2a6 6 0 0 1 0-12h8a6 6 0 0 1 6 6M78 152v38a24 24 0 0 1-48 0a6 6 0 0 1 12 0a12 12 0 0 0 24 0v-38a6 6 0 0 1 12 0m134.24-68.24l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24M158 82V46.48L193.52 82Z"/></svg>
              </span>
              <span className="ml-3 text-xs">
                <span className="text-[14px] mb-1">New user resgistered.</span>
                <span className="flex flex-col text-gray-300 font-medium">54 minutes ago</span>
              </span>
              <span className="absolute top-1 right-0 opacity-0 group-hover:opacity-100 group-hover:transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8"/></svg>
              </span>
            </a>
          </li>
          <li className="mb-4 relative">
            <a href="#" className="flex flex-row items-center h-10 px-3 group hover:shadow-sm">
              <span className="text-lg flex items-center bg-[#e5ecf6] rounded-md p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M184 146h-16a6 6 0 0 0-6 6v56a6 6 0 0 0 12 0v-10h10a26 26 0 0 0 0-52m0 40h-10v-28h10a14 14 0 0 1 0 28m-50-34v56a6 6 0 0 1-12 0v-56a6 6 0 0 1 12 0m-40 56a6 6 0 0 1-6 6H56a6 6 0 0 1-5.21-9l26.87-47H56a6 6 0 0 1 0-12h32a6 6 0 0 1 5.21 9l-26.87 47H88a6 6 0 0 1 6 6M212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v72a6 6 0 0 0 12 0V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v18a6 6 0 0 0 12 0V88a6 6 0 0 0-1.76-4.24M158 82V46.48L193.52 82Z"/></svg>
              </span>
              <span className="ml-3 text-xs">
                <span className="text-[14px] mb-1">Your fixed bug.</span>
                <span className="flex flex-col text-gray-300 font-medium">1 hours</span>
              </span>
              <span className="absolute top-1 right-0 opacity-0 group-hover:opacity-100 group-hover:transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8"/></svg>
              </span>
            </a>
          </li>
          <li className="mb-4 relative">
            <a href="#" className="flex flex-row items-center h-10 px-3 group hover:shadow-sm">
              <span className="text-lg flex items-center bg-[#e5ecf6] rounded-md p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="M154 208a6 6 0 0 1-6 6h-28a6 6 0 0 1-6-6v-56a6 6 0 1 1 12 0v50h22a6 6 0 0 1 6 6m-62.52-60.89a6 6 0 0 0-8.36 1.39L68 169.67L52.88 148.5a6 6 0 1 0-9.76 7L60.63 180l-17.51 24.5a6 6 0 1 0 9.76 7L68 190.31l15.12 21.16A6 6 0 0 0 88 214a5.91 5.91 0 0 0 3.48-1.12a6 6 0 0 0 1.4-8.37L75.37 180l17.51-24.51a6 6 0 0 0-1.4-8.38M191 173.22c-10.85-3.13-13.41-4.69-13-7.91a6.59 6.59 0 0 1 2.88-5.08c5.6-3.79 17.65-1.83 21.44-.84a6 6 0 0 0 3.07-11.6c-2-.54-20.1-5-31.21 2.48a18.64 18.64 0 0 0-8.08 13.54c-1.8 14.19 12.26 18.25 21.57 20.94c12.12 3.5 14.77 5.33 14.2 9.76a6.85 6.85 0 0 1-3 5.34c-5.61 3.73-17.48 1.64-21.19.62a6 6 0 0 0-3.21 11.53a59.41 59.41 0 0 0 14.68 2c5.49 0 11.54-.95 16.36-4.14a18.89 18.89 0 0 0 8.31-13.81c2.01-15.66-12.91-19.97-22.82-22.83M42 112V40a14 14 0 0 1 14-14h96a6 6 0 0 1 4.24 1.76l56 56A6 6 0 0 1 214 88v24a6 6 0 1 1-12 0V94h-50a6 6 0 0 1-6-6V38H56a2 2 0 0 0-2 2v72a6 6 0 1 1-12 0m116-30h35.5L158 46.48Z"/></svg>
              </span>
              <span className="ml-3 text-xs">
                <span className="text-[14px] mb-1">Miyamoto subscribed you.</span>
                <span className="flex flex-col text-gray-300 font-medium">To day, 11:59 AM</span>
              </span>
              <span className="absolute top-1 right-0 opacity-0 group-hover:opacity-100 group-hover:transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8"/></svg>
              </span>
            </a>
          </li>
        </ul>
          <FileUpload/>
      </div>
    </div>
    <div className="bg-slate-50 rounded-2xl p-6 mt-6">
      <h4 className="font-semibold text-md">Project Spendings</h4>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-300 *:py-4 text-gray-300 font-semibold">
            <th>Manager</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="*:py-2">
            <td className="flex items-center"><Image priority={true} src="/Ginger.svg" alt="pepper" width={26} height={26} className="p-0.5 mr-1 bg-slate-300 rounded-full"/> Kathy ohamaku</td>
            <td>Jun 25, 2004</td>
            <td>$1000</td>
            <td className="text-violet-400">In progress</td>
          </tr>
          <tr className="*:py-2">
            <td className="flex items-center"><Image priority={true} src="/Ginger.svg" alt="pepper" width={26} height={26} className="p-0.5 mr-1 bg-slate-300 rounded-full"/> Kathy ohamaku</td>
            <td>Jun 25, 2004</td>
            <td>$1000</td>
            <td className="text-green-400">Complete</td>
          </tr>
          <tr className="*:py-2">
            <td className="flex items-center"><Image priority={true} src="/Ginger.svg" alt="pepper" width={26} height={26} className="p-0.5 mr-1 bg-slate-300 rounded-full"/> Kathy ohamaku</td>
            <td>Jun 25, 2004</td>
            <td>$1000</td>
            <td className="text-yellow-400">Approved</td>
          </tr>
          <tr className="*:py-2">
            <td className="flex items-center"><Image priority={true} src="/Ginger.svg" alt="pepper" width={26} height={26} className="p-0.5 mr-1 bg-slate-300 rounded-full"/> Kathy ohamaku</td>
            <td>Jun 25, 2004</td>
            <td>$1000</td>
            <td className="text-gray-400">Reject</td>
          </tr>
          
        </tbody>
      </table>
    </div>
    </>
  )
}

function show7Date() {
  let dates = [];
  var curr = new Date();
  var first = curr.getDate() - curr.getDay(); // Set the first day to Monday
  // var firstday = new Date(curr.setDate(first + 1)).toString();

  for (var i = 1; i <= 7; i++) {
    var next = new Date(curr.getTime());
    next.setDate(first + i);
    let str = {date: next.getDate(), day: coverStrDay(next.getDay()), active: next.getDate() === curr.getDate() ? 1 : 0};
    dates.push(str);
  }
  return dates
}
function coverStrDay(d: number) {
  switch(d) {
    case 0:
      return "SU";
    case 1:
      return "MO";
    case 2:
      return "TU";
    case 3:
      return "WE";
    case 4:
      return "TH";
    case 5:
      return "FR";
    case 6:
      return "SA";
  }
}
 
export default Page