"use client";
import { Dropdown  } from "flowbite-react";

const page = () => {
  return (
    <>
    <div className="flex gap-5">
        <div className="basis-1/2 bg-slate-50 rounded-2xl p-6">
            <div className="flex justify-between mb-6">
                <h6 className="font-bold">Earnings</h6>
                <p className="bg-slate-950 text-white px-1 rounded-md text-sm">Withdraw Earnings</p>
            </div>
            <ul className="flex justify-start *:border-l *:px-6 first:*:border-l-0 first:*:pl-0">
                <li>
                    <p>Net Earning</p>
                    <p className="font-bold">$6,804</p>
                </li>
                <li>
                    <p>Change</p>
                    <p className="font-bold">80%</p>
                </li>
                <li>
                    <p>Fees</p>
                    <p className="font-bold">$1,204</p>
                </li>
            </ul>
            <p className="text-xs mt-4 text-slate-400">Last 30 day earnings calculated. Apart from arranging the order of topics.</p>
        </div>
        <div className="basis-1/2 bg-slate-50 rounded-2xl p-6">
            <h6 className="font-bold mb-8">Invoices</h6>
            <div className="flex gap-4  ">
                <Dropdown label="Dropdown button" dismissOnClick={true} renderTrigger={() => <div className="flex w-full justify-between border hover:border-gray-300 rounded-md px-4 py-2 text-sm">
                Individual Seller Account
                <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.71 6.29a1 1 0 0 0-1.42 0l-5 5a1 1 0 0 0 0 1.42l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L5.41 12l4.3-4.29a1 1 0 0 0 0-1.42m11 5l-5-5a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 0-1.42"/></svg></div>
                }>
                    <Dropdown.Item>Seller Op</Dropdown.Item>
                    <Dropdown.Item>Seller Dr</Dropdown.Item>
                    <Dropdown.Item>Seller YC</Dropdown.Item>
                    <Dropdown.Item>Seller SC</Dropdown.Item>
                </Dropdown>
                <button className="bg-slate-200 p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM5 19v-4.038h1V18h12v-3.038h1V19z"/></svg>
                </button>
            </div>
            <p className="text-xs mt-4 text-slate-400">Download apart from order of the good awesome invoice topics.</p>
        </div>
    </div>
    <div className="bg-slate-50 rounded-2xl p-6 mt-6">
      <div className="flex justify-between">
        <h4 className="font-semibold text-md">Billing History</h4>
        <ul className="flex gap-4 *:text-sm text-gray-400">
          <li className="active text-slate-950">This Year</li>
          <li className="">2021</li>
          <li className="">2022</li>
        </ul>
      </div>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-300 *:py-4 text-gray-300 font-semibold">
            <th>Order ID</th>
            <th>Details</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Invoice</th>
          </tr>
        </thead>
        <tbody>
          <tr className="*:py-2">
            <td>678935899</td>
            <td>Darknight transparency 36 Icons Pack</td>
            <td className="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="black" d="M14.5 16h-13C.67 16 0 15.33 0 14.5v-12C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5z"/><path fill="black" d="M4.5 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m7 0c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m4 2H.5C.22 6 0 5.78 0 5.5S.22 5 .5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5"/></svg> Nov 24, 2022</td>
            <td>$38.00</td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM5 19v-4.038h1V18h12v-3.038h1V19z"/></svg></td>
          </tr>
          <tr className="*:py-2">
            <td>678935899</td>
            <td>Darknight transparency 36 Icons Pack</td>
            <td className="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="black" d="M14.5 16h-13C.67 16 0 15.33 0 14.5v-12C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5z"/><path fill="black" d="M4.5 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m7 0c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m4 2H.5C.22 6 0 5.78 0 5.5S.22 5 .5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5"/></svg> Nov 24, 2022</td>
            <td>$38.00</td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM5 19v-4.038h1V18h12v-3.038h1V19z"/></svg></td>
          </tr>
          <tr className="*:py-2">
            <td>678935899</td>
            <td>Darknight transparency 36 Icons Pack</td>
            <td className="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="black" d="M14.5 16h-13C.67 16 0 15.33 0 14.5v-12C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5z"/><path fill="black" d="M4.5 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m7 0c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m4 2H.5C.22 6 0 5.78 0 5.5S.22 5 .5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5"/></svg> Nov 24, 2022</td>
            <td>$38.00</td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM5 19v-4.038h1V18h12v-3.038h1V19z"/></svg></td>
          </tr>
          <tr className="*:py-2">
            <td>678935899</td>
            <td>Darknight transparency 36 Icons Pack</td>
            <td className="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="black" d="M14.5 16h-13C.67 16 0 15.33 0 14.5v-12C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5z"/><path fill="black" d="M4.5 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m7 0c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m4 2H.5C.22 6 0 5.78 0 5.5S.22 5 .5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5"/></svg> Nov 24, 2022</td>
            <td>$38.00</td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM5 19v-4.038h1V18h12v-3.038h1V19z"/></svg></td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default page