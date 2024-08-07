import React from 'react'

const page = () => {
  return (
    <div className="bg-slate-50 m-auto w-full text-center">
      <form id="accountinfo" className="w-1/2 max-sm:w-full mx-auto">
        <h5 className="text-center font-bold text-2xl py-3">Account info</h5>
        <p className="text-center text-gray-400 text-sm pb-6">if you need more info, please check out <a href="#" className="text-violet-300">Help Page</a>.</p>
        <div className="text-left">
          <p className="font-bold">Specify Team Size</p>
          <div className="flex gap-4 justify-center py-4">
            <input type="text" name="numbers-1" id="numbers-1" className="w-1/4 rounded-xl border-gray-300" />
            <input type="text" name="numbers-2" id="numbers-2" className="w-1/4 rounded-xl border-gray-300"/>
            <input type="text" name="numbers-3" id="numbers-3" className="w-1/4 rounded-xl border-gray-300"/>
            <input type="text" name="numbers-4" id="numbers-4" className="w-1/4 rounded-xl border-gray-300"/>
          </div>
          <p className="text-gray-400">Customers will see this shortened version of your statement descriptor.</p>
          <p className="font-bold text-left mt-7">Team Account Name</p>
          <input type="text" name="nameteamacc" id="nameteamacc" className="my-6 w-full rounded-xl border-gray-300" />
          <p className="font-bold text-left mb-5">Select Account Plan</p>
          <ul className="*:my-6">
            <li className="flex border-4 border-transparent rounded-xl p-4 bg-slate-100 hover:border-slate-900 hover:cursor-pointer transition-all">
              <div className="my-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="black" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28M68.87 198.42a68 68 0 0 1 118.26 0a91.8 91.8 0 0 1-118.26 0m124.3-5.55a75.6 75.6 0 0 0-44.51-34a44 44 0 1 0-41.32 0a75.6 75.6 0 0 0-44.51 34a92 92 0 1 1 130.34 0M128 156a36 36 0 1 1 36-36a36 36 0 0 1-36 36"/></svg></div>
              <div className="flex-col">
                <p className="font-semibold">Company Account</p>
                <p className="text-gray-400">Use images to enhance your post flow.</p>
              </div>
            </li>
            <li className="flex border-4 border-transparent rounded-xl p-4 bg-slate-100 hover:border-slate-900 hover:cursor-pointer transition-all">
              <div className="my-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="black" d="M19.5 6H16V5a2.003 2.003 0 0 0-2-2h-4a2.003 2.003 0 0 0-2 2v1H4.5A2.502 2.502 0 0 0 2 8.5v10A2.502 2.502 0 0 0 4.5 21h15a2.502 2.502 0 0 0 2.5-2.5v-10A2.502 2.502 0 0 0 19.5 6M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9zm12 13.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-6.473l5.842 1.948A.51.51 0 0 0 9 14h6a.51.51 0 0 0 .158-.025L21 12.027zm0-7.494a.49.49 0 0 0-.158.02L14.919 13H9.081l-5.923-1.975a.49.49 0 0 0-.158-.02V8.5A1.5 1.5 0 0 1 4.5 7h15A1.5 1.5 0 0 1 21 8.5z"/></svg></div>
              <div className="flex-col">
                <p className="font-semibold">Develop Account</p>
                <p className="text-gray-400">Use images to enhance your post time.</p>
              </div>
            </li>
            <li className="flex border-4 border-transparent rounded-xl p-4 bg-slate-100 hover:border-slate-900 hover:cursor-pointer transition-all">
              <div className="my-2 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="black" d="M19.5 6H16V5a2.003 2.003 0 0 0-2-2h-4a2.003 2.003 0 0 0-2 2v1H4.5A2.502 2.502 0 0 0 2 8.5v10A2.502 2.502 0 0 0 4.5 21h15a2.502 2.502 0 0 0 2.5-2.5v-10A2.502 2.502 0 0 0 19.5 6M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9zm12 13.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-6.473l5.842 1.948A.51.51 0 0 0 9 14h6a.51.51 0 0 0 .158-.025L21 12.027zm0-7.494a.49.49 0 0 0-.158.02L14.919 13H9.081l-5.923-1.975a.49.49 0 0 0-.158-.02V8.5A1.5 1.5 0 0 1 4.5 7h15A1.5 1.5 0 0 1 21 8.5z"/></svg></div>
              <div className="flex-col">
                <p className="font-semibold">Company Account</p>
                <p className="text-gray-400">Use images to enhance your post flow.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 *:capitalize *:font-semibold">
          <button className="bg-gray-300 text-slate-950 w-1/2 rounded-md p-3 before:content-['<'] before:pr-2">previous</button>
          <button className="bg-slate-950 text-white w-1/2 rounded-md p-3 after:content-['>'] after:pl-2">continue</button>
        </div>
      </form>
    </div>
  )
}

export default page