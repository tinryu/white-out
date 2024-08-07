import React from 'react'

const page = () => {
  return (
    <div className="bg-white m-auto w-full text-center rounded-xl">
      <form id="choosetypeacc" className="w-1/2 max-sm:w-full mx-auto py-10">
        <h5 className="text-center font-bold text-2xl py-3">Account info</h5>
        <p className="text-center text-gray-400 text-sm">if you need more info, please check out <a href="#" className="text-violet-300">Help Page</a>.</p>
        
        <div className="flex gap-4 justify-center py-10">
            <div className="flex items-start bg-slate-100 rounded-xl border-2 border-transparent hover:border-slate-950 hover:cursor-pointer px-4 py-3">
                <div className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="black" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28M68.87 198.42a68 68 0 0 1 118.26 0a91.8 91.8 0 0 1-118.26 0m124.3-5.55a75.6 75.6 0 0 0-44.51-34a44 44 0 1 0-41.32 0a75.6 75.6 0 0 0-44.51 34a92 92 0 1 1 130.34 0M128 156a36 36 0 1 1 36-36a36 36 0 0 1-36 36"/></svg>
                </div>
                <div className="flex-col text-left">
                    <p className="font-semibold text-sm">Personal Account</p>
                    <p className="text-gray-300 text-sm">if you need more info, please check it out.</p>
                </div>
            </div>
            <div className="flex items-start bg-slate-100 rounded-xl border-2 border-transparent hover:border-slate-950 hover:cursor-pointer px-4 py-3">
                <div className="mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="black" d="M19.5 6H16V5a2.003 2.003 0 0 0-2-2h-4a2.003 2.003 0 0 0-2 2v1H4.5A2.502 2.502 0 0 0 2 8.5v10A2.502 2.502 0 0 0 4.5 21h15a2.502 2.502 0 0 0 2.5-2.5v-10A2.502 2.502 0 0 0 19.5 6M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H9zm12 13.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-6.473l5.842 1.948A.51.51 0 0 0 9 14h6a.51.51 0 0 0 .158-.025L21 12.027zm0-7.494a.49.49 0 0 0-.158.02L14.919 13H9.081l-5.923-1.975a.49.49 0 0 0-.158-.02V8.5A1.5 1.5 0 0 1 4.5 7h15A1.5 1.5 0 0 1 21 8.5z"/></svg>
                </div>
                <div className="flex-col text-left">
                    <p className="font-semibold text-sm">Corporate Account</p>
                    <p className="text-gray-300 text-sm">Create corporate account to many users.</p>
                </div>
            </div>

        </div>
        <div className="flex justify-center gap-4 *:capitalize *:font-semibold">
          <button className="bg-slate-950 text-white w-1/2 rounded-md p-3 after:content-['>'] after:pl-2">continue</button>
        </div>
      </form>
    </div>
  )
}

export default page