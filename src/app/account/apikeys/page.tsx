import React from 'react'

const page = () => {
  return (
    <>
    <div className="bg-slate-50 rounded-2xl p-6">
      <h5 className="font-bold mb-4">API Overview</h5>
      <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4 mb-4">
        <span>
          <p className="font-bold">How to set API</p>
          <p className="text-sm text-gray-400">Use images to enhance your post, improve its flow, add humor and explain complex topics.</p>
        </span>
        <button className="bg-gray-200 px-2 rounded-md text-sm h-7 max-sm:h-auto">Get Started</button>
      </div>
      <div className="flex justify-between items-center">
        <span>
          <p className="font-bold">Developer Tools</p>
          <p className="text-sm text-gray-400">Plan your blog post by choosing a topic, creating an outline conduct research, and checking facts.</p>
        </span>
        <button className="bg-gray-200 px-2 rounded-md text-sm h-7 max-sm:h-auto">Create Rule</button>
      </div>
    </div>
    <div className="bg-slate-50 rounded-2xl p-6 mt-6 overflow-auto">
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
            <td className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="black" strokeMiterlimit="10" strokeWidth="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"/><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 128v144h96"/></svg> 2 minustes ago</td>
            <td className="text-violet-400">In progress</td>
          </tr>
          <tr className="*:py-2">
          <td>UK(10)</td>
            <td>Firefox - Windows</td>
            <td>236.125.56.78</td>
            <td className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="black" strokeMiterlimit="10" strokeWidth="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"/><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 128v144h96"/></svg> 2 minustes ago</td>
            <td className="text-green-400">Complete</td>
          </tr>
          <tr className="*:py-2">
          <td>Italy(10)</td>
            <td>IOS - IPhone</td>
            <td>236.125.56.78</td>
            <td className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="black" strokeMiterlimit="10" strokeWidth="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"/><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 128v144h96"/></svg> 2 minustes ago</td>
            <td className="text-yellow-400">Approved</td>
          </tr>
          <tr className="*:py-2">
          <td>VN(15)</td>
            <td>Safari - Mac OS</td>
            <td>236.125.56.78</td>
            <td className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="black" strokeMiterlimit="10" strokeWidth="32" d="M256 64C150 64 64 150 64 256s86 192 192 192s192-86 192-192S362 64 256 64Z"/><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 128v144h96"/></svg> 2 minustes ago</td>
            <td className="text-gray-400">Reject</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="bg-slate-50 rounded-2xl p-6 mt-6 overflow-auto">
      <div className="flex justify-between">
        <h4 className="font-semibold text-md">Api Keys</h4>
      </div>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-300 *:py-4 text-gray-300 font-semibold">
            <th>Label</th>
            <th>API Keys</th>
            <th>Created</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="*:py-2">
            <td>Docs API key</td>
            <td>fftt456765gjkkjhi83093985</td>
            <td className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="black" d="M14.5 16h-13C.67 16 0 15.33 0 14.5v-12C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5z"/><path fill="black" d="M4.5 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m7 0c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m4 2H.5C.22 6 0 5.78 0 5.5S.22 5 .5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5"/></svg> 2 minustes ago</td>
            <td className="text-violet-400">In progress</td>
          </tr>
          <tr className="*:py-2">
            <td>Docs API key</td>
            <td>fftt456765gjkkjhi83093985</td>
            <td className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="black" d="M14.5 16h-13C.67 16 0 15.33 0 14.5v-12C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5z"/><path fill="black" d="M4.5 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m7 0c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m4 2H.5C.22 6 0 5.78 0 5.5S.22 5 .5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5"/></svg> 2 minustes ago</td>
            <td className="text-green-400">Complete</td>
          </tr>
          <tr className="*:py-2">
            <td>Docs API key</td>
            <td>fftt456765gjkkjhi83093985</td>
            <td className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="black" d="M14.5 16h-13C.67 16 0 15.33 0 14.5v-12C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5z"/><path fill="black" d="M4.5 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m7 0c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m4 2H.5C.22 6 0 5.78 0 5.5S.22 5 .5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5"/></svg> 2 minustes ago</td>
            <td className="text-yellow-400">Approved</td>
          </tr>
          <tr className="*:py-2">
            <td>Docs API key</td>
            <td>fftt456765gjkkjhi83093985</td>
            <td className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="black" d="M14.5 16h-13C.67 16 0 15.33 0 14.5v-12C0 1.67.67 1 1.5 1h13c.83 0 1.5.67 1.5 1.5v12c0 .83-.67 1.5-1.5 1.5M1.5 2c-.28 0-.5.22-.5.5v12c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5z"/><path fill="black" d="M4.5 4c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m7 0c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5m4 2H.5C.22 6 0 5.78 0 5.5S.22 5 .5 5h15c.28 0 .5.22.5.5s-.22.5-.5.5"/></svg> 2 minustes ago</td>
            <td className="text-gray-400">Reject</td>
          </tr>
          
        </tbody>
      </table>
    </div>
    </>
  )
}

export default page