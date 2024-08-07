import ButtonClipboard from '@/app/components/ButtonClipboard'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="bg-slate-50 rounded-2xl p-6">
      <h5 className="font-bold max-sm:px-4">Referral Program</h5>
      <ul className="flex max-sm:flex-col max-sm:*:px-4 max-sm:first:*:px-4 justify-start *:border-l *:px-6 first:*:border-l-0 first:*:pl-0">
        <li>
          <p>Net Earnings</p>
          <p className="font-bold">$6,554</p>
        </li>
        <li>
          <p>Balance</p>
          <p className="font-bold">$8,554</p>
        </li>
        <li>
          <p>Avg Deal Size</p>
          <p className="font-bold">$2,554</p>
        </li>
        <li>
          <p>Referral Signups</p>
          <p className="font-bold">$334</p>
        </li>
      </ul>
      

      <div className="border-gray-300 border-t-2 py-4 mt-4 max-sm:p-4">
        <h6 className="font-bold text-sm ">Your Referral Link</h6>
        <ButtonClipboard nameID="text" placeholder="https://abcExercise.com/reffer/?refid=3sasdsa6787k8" className="rounded-md border-gray-300 w-2/3 max-sm:w-full" />
        <p className="text-xs mt-4 text-slate-400">Plan your blog post by choosing a topic, creating an outline conduct research, and checking facts.</p>
      </div>
      
      <div className="border-gray-300 border-t-2 py-4 flex justify-between max-sm:p-4">
        <div className="">
          <h6 className="font-bold text-sm">How to use Referral Program</h6>
          <p className="text-xs mt-4 text-slate-400">Use images to enhance your post, improve its flow, add humor and explain complex topics.</p>
        </div>
        <button className="bg-gray-300 px-2 text-sm rounded-md h-7 max-sm:h-auto">Get Started</button>
      </div>

      <div className="bg-slate-100 p-4 rounded-2xl flex justify-between items-center gap-2 max-sm:flex-col">
        <svg xmlns="http://www.w3.org/2000/svg" className="flex-none" width="24" height="24" viewBox="0 0 1024 1024"><path fill="black" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372m47.7-395.2l-25.4-5.9V348.6c38 5.2 61.5 29 65.5 58.2c.5 4 3.9 6.9 7.9 6.9h44.9c4.7 0 8.4-4.1 8-8.8c-6.1-62.3-57.4-102.3-125.9-109.2V263c0-4.4-3.6-8-8-8h-28.1c-4.4 0-8 3.6-8 8v33c-70.8 6.9-126.2 46-126.2 119c0 67.6 49.8 100.2 102.1 112.7l24.7 6.3v142.7c-44.2-5.9-69-29.5-74.1-61.3c-.6-3.8-4-6.6-7.9-6.6H363c-4.7 0-8.4 4-8 8.7c4.5 55 46.2 105.6 135.2 112.1V761c0 4.4 3.6 8 8 8h28.4c4.4 0 8-3.6 8-8.1l-.2-31.7c78.3-6.9 134.3-48.8 134.3-124c-.1-69.4-44.2-100.4-109-116.4m-68.6-16.2c-5.6-1.6-10.3-3.1-15-5c-33.8-12.2-49.5-31.9-49.5-57.3c0-36.3 27.5-57 64.5-61.7zM534.3 677V543.3c3.1.9 5.9 1.6 8.8 2.2c47.3 14.4 63.2 34.4 63.2 65.1c0 39.1-29.4 62.6-72 66.4"/></svg>
        <p className="flex-1 text-sm">Withdraw Your Money to a Bank Account<span className="text-slate-400 block">Withdraw money securily to your bank account. Commision is $25 per transaction under $50,000</span></p>
        <button className="bg-gray-300 p-1 rounded-md">Withdraw Money</button>
      </div>
    </div>
    <div className="bg-slate-50 rounded-2xl p-6 mt-6 overflow-auto">
      <div className="flex justify-between">
        <h4 className="font-semibold text-md">Referred Users</h4>
        <ul className="flex gap-4 *:text-sm text-gray-400">
          <li className="active text-slate-950">Month</li>
          <li className="">2021</li>
          <li className="">2022</li>
        </ul>
      </div>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-300 *:py-4 text-gray-300 font-semibold">
            <th>Order ID</th>
            <th>User</th>
            <th>Date</th>
            <th>Bonus</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          <tr className="*:py-2">
            <td>678935899</td>
            <td>Marcus Harris</td>
            <td className="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="black" d="M14.5 16h-13C.67 16 0 15.33 0 14.5v-12C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5z"/><path fill="black" d="M4.5 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m7 0c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m4 2H.5C.22 6 0 5.78 0 5.5S.22 5 .5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5"/></svg> Nov 24, 2022</td>
            <td>26%</td>
            <td>$1,200.00</td>
          </tr>
          <tr className="*:py-2">
            <td>678935899</td>
            <td>Marcus Harris</td>
            <td className="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="black" d="M14.5 16h-13C.67 16 0 15.33 0 14.5v-12C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5z"/><path fill="black" d="M4.5 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m7 0c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m4 2H.5C.22 6 0 5.78 0 5.5S.22 5 .5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5"/></svg> Nov 24, 2022</td>
            <td>26%</td>
            <td>$1,200.00</td>
          </tr>
          <tr className="*:py-2">
            <td>678935899</td>
            <td>Marcus Harris</td>
            <td className="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="black" d="M14.5 16h-13C.67 16 0 15.33 0 14.5v-12C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5z"/><path fill="black" d="M4.5 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m7 0c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m4 2H.5C.22 6 0 5.78 0 5.5S.22 5 .5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5"/></svg> Nov 24, 2022</td>
            <td>26%</td>
            <td>$1,200.00</td>
          </tr>
          
        </tbody>
      </table>
    </div>
    </>
  )
}

export default page