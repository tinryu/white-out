import React from 'react'

const billdetail2 = () => {
  return (
    <form id="billdetail" className="w-1/2 mx-auto">
        <h5 className="text-center font-bold text-2xl py-3">Billing Details</h5>
        <p className="text-center text-gray-400 text-sm pb-6">if you need more info, please check out <a href="#" className="text-violet-300">Help Page</a>.</p>
        <div className="text-left">
            <p className="font-bold">Name On Card</p>
            <input type="text" name="cardname" id="cardname" className="my-5 rounded-xl border-gray-300 w-full" />
            <p className="font-bold">Card Number</p>
            <input type="text" name="cardnum" id="cardnum" className="my-5 rounded-xl border-gray-300 w-full" />
            <div className="flex justify-between gap-4">
                <div className="w-4/5">
                    <p className="font-bold">Expiration Date</p>
                    <div className="flex gap-4">
                        <select name="month" id="month" className="my-5 w-1/2 rounded-xl border-gray-300">
                            <option value="1" defaultValue={1}>Month</option>
                            <option value="5">5</option>
                        </select>
                        <select name="year" id="year" className="my-5 w-1/2 rounded-xl border-gray-300">
                            <option value="1" defaultValue={1}>Year</option>
                            <option value="2025">2025</option>
                        </select>
                    </div>
                </div>
                <div className="w-1/5">
                    <p className="font-bold">CVV</p>
                    <input type="text" name="cvv" id="cvv" className="my-5 rounded-xl border-gray-300 w-20"/>
                </div>
            </div>
            <div className="flex-rows relative pb-10">
                <span className="absolute capitalize top-0 right-0">
                    save card 
                    <label className="switch ml-2 !w-10" htmlFor="savecard">
                        <input type="checkbox" id="savecard" name="savecard" />
                        <span className="slider round"></span>
                    </label>
                </span>
                <p className="font-semibold">Save Card for further billing?</p>
                <p className="text-gray-300 text-sm">If you need more info, please check budget planning.</p>
            </div>
            
        </div>
        <div className="flex gap-4 *:capitalize *:font-semibold">
            <button className="bg-gray-300 text-slate-950 w-1/2 rounded-md p-3 before:content-['<'] before:pr-2">previous</button>
            <button className="bg-slate-950 text-white w-1/2 rounded-md p-3 after:content-['>'] after:pl-2">Submit</button>
        </div>
    </form>
  )
}

export default billdetail2