import React from 'react'

const page = () => {
  return (
    <>
    <div className="bg-slate-50 rounded-2xl p-6">
      <div className="flex justify-between">
        <h4 className="font-semibold text-md">Login Sessions</h4>
        <select name="time" id="time" className="border-transparent rounded-md text-xs bg-transparent">
          <option value="1">1 Hour</option>
          <option value="2">2 Hour</option>
          <option value="3">3 Hour</option>
        </select>
      </div>
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
      <div className="flex justify-between">
        <h4 className="font-semibold text-md">Logs</h4>
        <button className="bg-gray-200 px-2 rounded-md text-sm h-7">Download Report</button>
      </div>
      <table className="table-auto w-full text-sm">
        <tbody>
          <tr className="*:py-2">
            <td>Feb 1, 2023, 9:23 PM</td>
            <td>POST /v1/invoice/in_3585_9341/invalid</td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM5 19v-4.038h1V18h12v-3.038h1V19z"/></svg></td>
          </tr>
          <tr className="*:py-2">
            <td>Feb 1, 2023, 9:23 PM</td>
            <td>POST /v1/invoice/in_3585_9341/invalid</td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM5 19v-4.038h1V18h12v-3.038h1V19z"/></svg></td>
          </tr>
          <tr className="*:py-2">
            <td>Feb 1, 2023, 9:23 PM</td>
            <td>POST /v1/invoice/in_3585_9341/invalid</td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="m12 15.577l-3.539-3.538l.708-.72L11.5 13.65V5h1v8.65l2.33-2.33l.709.719zM5 19v-4.038h1V18h12v-3.038h1V19z"/></svg></td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default page