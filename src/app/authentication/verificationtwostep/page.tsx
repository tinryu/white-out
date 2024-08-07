import React from 'react'

const page = () => {
  return (
    <div className="rounded-xl w-full">
        <form id="signup" className="w-1/2 max-sm:w-full m-auto bg-slate-50 p-6 text-center rounded-2xl">
            <h5 className="font-bold text-xl capitalize">Two step verification</h5>
            <p className="text-gray-400 text-sm pt-3 pb-8">Enter the verification code we sent to</p>

            <p>******7896</p>
            <p className="mt-6">Type your 6 digit security code</p>
            <div className="flex gap-2 justify-center mt-4 *:text-center">
                <input type="text" name="num1" id="num1" className="rounded-xl h-12 w-12 border-gray-300 font-bold" defaultValue={24} autoFocus={true} />
                <input type="text" name="num2" id="num2" className="rounded-xl h-12 w-12 border-gray-300 font-bold" defaultValue={8}/>
                <input type="text" name="num3" id="num3" className="rounded-xl h-12 w-12 border-gray-300 font-bold" defaultValue={12}/>
                <input type="text" name="num4" id="num4" className="rounded-xl h-12 w-12 border-gray-300 font-bold" defaultValue={5}/>
                <input type="text" name="num5" id="num5" className="rounded-xl h-12 w-12 border-gray-300 font-bold" defaultValue={3}/>
                <input type="text" name="num6" id="num6" className="rounded-xl h-12 w-12 border-gray-300 font-bold" defaultValue={13}/>
            </div>
            
            <div className="pt-6">
                <button className="bg-slate-950 rounded-xl text-center text-white w-full p-2 mb-4 font-bold">Submit</button>
                <p className="text-gray-400 text-sm">Didn&apos;t get the code? <a href="#" className="text-violet-300 capitalize">Resend</a> or <a href="#" className="text-violet-300 capitalize">Call us</a></p>
            </div>
        </form>
    </div>
  )
}

export default page