import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <div className="flex gap-5">
      <div className="basis-1/2 bg-slate-50 p-6 rounded-2xl">
        <div className="flex justify-between text-gray-400">
          <h5 className="font-bold capitalize text-slate-950">Top Selling categories</h5>
          <ul className="flex gap-2">
            <li>12 hour</li>
            <li>Day</li>
            <li>Week</li>
          </ul>
        </div>
        <ul className="mt-5 flex justify-between bg-slate-200 p-4 rounded-2xl text-sm">
          <li className="border-gray-300 border-r-2 px-4">
            <p>User Sign-in</p>
            <p className="font-bold">36,899</p> 
          </li>
          <li className="border-gray-300 border-r-2 px-4">
            <p>Admin Sign-in</p>
            <p className="font-bold">75</p>
          </li>
          <li className="px-2">
            <p>Failed Attempts</p>
            <p className="font-bold">291</p>
          </li>
        </ul>
        <ul className="flex gap-4 mt-5 text-gray-400">
          <li className="active font-bold text-slate-950">Agens Chart</li>
          <li>Clients Chart</li>
        </ul>
        <div className="content-swap">
          CHART
        </div>
      </div>
      <div className="basis-1/2">
        <div className="bg-slate-50 p-6 rounded-2xl">
          <div className="flex justify-between">
            <h5 className="font-bold capitalize">Recent alert</h5>
            <div className="g-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="black" fill-rule="evenodd" d="M2 5h11a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1M0 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m2.25.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m3.75-.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"/></svg>
            </div>
          </div>
          <div className="my-8 text-xs text-gray-400">
            <p>In the last year, you’ve probably had to adapt to new ways of living and working.</p>
          </div>
          <div className="flex justify-between items-center text-sm">
            <div className="date text-gray-400">Jun 10, 2024</div>
            <div className="bg-slate-100 rounded-md p-2">Learn more</div>
          </div>
        </div>
        <div className="bg-slate-50 mt-5 p-6 rounded-2xl">
          <div className="flex justify-between">
            <h5 className="font-bold capitalize">Security Guidelines</h5>
            <div className="g-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="black" fill-rule="evenodd" d="M2 5h11a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1M0 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m2.25.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m3.75-.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"/></svg>
            </div>
          </div>
          <div className="my-8 text-xs text-gray-400">
            <p>As we approach one year of working remotely, we wanted to take a look back and share some ways teams around the world have collaborated effectively.</p>
          </div>
          <div className="flex justify-between items-center text-sm">
            <div className="date text-gray-400">Jun 10, 2024</div>
            <div className="bg-slate-100 rounded-md p-2">Explore</div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-slate-50 rounded-2xl p-6 mt-6">
      <h4 className="font-semibold text-md">Login Sessions</h4>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-300 *:py-4 text-gray-300 font-semibold">
            <th>Location</th>
            <th>Device</th>
            <th>Ip address</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="*:py-2">
            <td>USA(5)</td>
            <td>Chrome - Windows</td>
            <td>236.125.56.78</td>
            <td className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"/><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96"/></svg> 2 minustes ago</td>
            <td className="text-violet-400">In progress</td>
          </tr>
          <tr className="*:py-2">
          <td>UK(10)</td>
            <td>Firefox - Windows</td>
            <td>236.125.56.78</td>
            <td className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"/><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96"/></svg> 2 minustes ago</td>
            <td className="text-green-400">Complete</td>
          </tr>
          <tr className="*:py-2">
          <td>Italy(10)</td>
            <td>IOS - IPhone</td>
            <td>236.125.56.78</td>
            <td className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"/><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96"/></svg> 2 minustes ago</td>
            <td className="text-yellow-400">Approved</td>
          </tr>
          <tr className="*:py-2">
          <td>VN(15)</td>
            <td>Safari - Mac OS</td>
            <td>236.125.56.78</td>
            <td className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"/><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96"/></svg> 2 minustes ago</td>
            <td className="text-gray-400">Reject</td>
          </tr>
          
        </tbody>
      </table>
    </div>
    <div className="bg-slate-50 rounded-2xl p-6 mt-6">
      <h4 className="font-semibold text-md">License Usage</h4>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-300 *:py-4 text-gray-300 font-semibold">
            <th>Operator</th>
            <th>IP Address</th>
            <th>Created</th>
            <th>API Keys</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="*:py-2">
            <td>DSI: Workstation 2</td>
            <td>236.125.56.78</td>
            <td className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"/><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96"/></svg> 2 minustes ago</td>
            <td>fftt456765gjkkjhi8306767</td>
            <td className="text-violet-400">In progress</td>
          </tr>
          <tr className="*:py-2">
            <td>DSI: Workstation 2</td>
            <td>236.125.56.78</td>
            <td className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"/><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96"/></svg> 2 minustes ago</td>
            <td>fftt456765gjkkjhi8306767</td>
            <td className="text-green-400">Complete</td>
          </tr>
          <tr className="*:py-2">
            <td>DSI: Workstation 2</td>
            <td>236.125.56.78</td>
            <td className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"/><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96"/></svg> 2 minustes ago</td>
            <td>fftt456765gjkkjhi8306767</td>
            <td className="text-yellow-400">Approved</td>
          </tr>
          <tr className="*:py-2">
            <td>DSI: Workstation 2</td>
            <td>236.125.56.78</td>
            <td className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-miterlimit="10" stroke-width="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"/><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96"/></svg> 2 minustes ago</td>
            <td>fftt456765gjkkjhi8306767</td>
            <td className="text-gray-400">Reject</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default page