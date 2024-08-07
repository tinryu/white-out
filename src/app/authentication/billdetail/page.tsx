import React from 'react'

const page = () => {
  return (
    <div className="bg-slate-50 m-auto w-full text-center">
        <form id="billdetail" className="w-1/2 max-sm:w-full mx-auto">
            <h5 className="text-center font-bold text-2xl py-3">Billing Details</h5>
            <p className="text-center text-gray-400 text-sm pb-6">if you need more info, please check out <a href="#" className="text-violet-300">Help Page</a>.</p>
            <div className="text-left">
                <p className="font-bold">Business Name</p>
                <input type="text" name="businessname" id="businessname" className="my-5 rounded-xl border-gray-300 w-full" />
                <p className="font-bold">Shortened Description</p>
                <input type="text" name="shortdescription" id="shortdescription" className="my-5 rounded-xl border-gray-300 w-full" />
                <p className="font-bold">Corporation Type</p>
                <select name="corporation" id="corporation" className="my-5 rounded-xl border-gray-300 w-full">
                    <option value="1" defaultValue={1}>select</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <p className="font-bold">Business Description</p>
                <textarea name="businessdesc" rows={3} id="businessdesc" className="my-5 rounded-xl border-gray-300 w-full" />
                <p className="font-bold">Contact Email</p>
                <input type="text" name="contact" id="contact" className="my-5 rounded-xl border-gray-300 w-full" />
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