import React from 'react'
import { Progress, CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["progress"] = {
  "base": "w-full overflow-hidden rounded-md bg-gray-200 dark:bg-gray-700 text-xs",
  "bar": "space-x-2 text-xs rounded-md text-center font-medium text-slate-50 dark:text-cyan-100",
  "color": {
    "purple": "bg-violet-200 dark:bg-violet-500",
  }
};

const page = () => {
  return (
    <>
    <div className="bg-slate-50 rounded-2xl p-6">
      <div className="flex justify-between items-center">
        <h5 className="font-medium text-lg">Overview</h5>
        <div className="flex justify-between gap-4">
          <button className="bg-gray-100 rounded-md p-1 text-sm">Cancel Subscription</button>
          <button className="bg-slate-950 rounded-md p-1 text-white text-sm">Upgrade plan</button>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <h5 className="font-bold">Users</h5>
        <div className="font-bold">86 of 100 Used</div>
      </div>
      <div className="w-full my-4">
        <Progress className="my-2" theme={customTheme} progress={86} progressLabelPosition="inside" color="purple" size="lg" labelProgress/>
        <p className="text-gray-400 text-sm">14 Users remaining until your plan requires update</p>
      </div>
      <div className="border-t py-4">
        <p className="font-bold">Active until Dec 9, 2022</p>
        <p className="text-gray-400 text-sm">We will send you a notification upon Subscription expiration.</p>
      </div>
      <div className="border-t py-4">
        <p className="font-bold">$24.99 Per Month</p>
        <p className="text-gray-400 text-sm">Extended Pro Package. Up to 100 Agents & 25 Projects</p>
      </div>
      <div className="flex gap-2 bg-slate-200 mt-4 p-4 rounded-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="black" d="M17 22v-8h-4v2h2v6h-3v2h8v-2zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8"/><path fill="black" d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4"/></svg>
        <p>
          <span className="block">We need your attention!</span>
          <span className="block text-gray-400 text-sm">Your payment was declined. To start using tools, please <a href="#" className='text-violet-400'>Add Payment Method</a>.</span>
        </p>
      </div>
    </div>
    <div className="bg-slate-50 rounded-2xl p-6">
      <div className="flex justify-between">
        <h5 className="font-bold">Payment Methods</h5>
        <ul className="flex gap-4 *:text-sm">
          <li className="active text-slate-950">Credit/ Debit Card</li>
          <li className="text-gray-400">Paypal</li>
        </ul>
      </div>
      <div className="grid grid-rows-2 grid-flow-col auto-cols-[300px] gap-4 overflow-auto mt-3 py-3">
        <div className="bg-slate-200 rounded-xl p-6">
          <div className="flex justify-between items-center">
            <h6>ByeWund <span className="status bg-green-200 text-green-400 text-sm rounded-md ml-1 px-1">Complete</span></h6>
            <button className="bg-gray-300 text-slate-800 rounded-md px-2 py-1">Edit</button>
          </div>
          <div className="flex justify-start gap-4 *:font-bold py-6">
            <span>9656</span>
            <span>6582</span>
            <span>1254</span>
            <span>5236</span>
          </div>
          <div className="flex justify-between">
            <p className="text-slate-400 font-thin">Exp 06/25</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="24" viewBox="0 0 36 24"><path fill="black" d="M33.6 24H2.4A2.4 2.4 0 0 1 0 21.6V2.4A2.4 2.4 0 0 1 2.4 0h31.2A2.4 2.4 0 0 1 36 2.4v19.2a2.4 2.4 0 0 1-2.4 2.4m-15.76-9.238l-.359 2.25a6.84 6.84 0 0 0 2.903.531h-.011a5.167 5.167 0 0 0 3.275-.933l-.017.011a3.085 3.085 0 0 0 1.258-2.485v-.015v.001c0-1.1-.736-2.014-2.187-2.72a7.653 7.653 0 0 1-1.132-.672l.023.016a.754.754 0 0 1-.343-.592v-.002a.736.736 0 0 1 .379-.6l.004-.002a1.954 1.954 0 0 1 1.108-.257h-.006h.08l.077-.001c.644 0 1.255.139 1.806.388l-.028-.011l.234.125l.359-2.171a6.239 6.239 0 0 0-2.277-.422h-.049h.003a5.067 5.067 0 0 0-3.157.932l.016-.011a2.922 2.922 0 0 0-1.237 2.386v.005c-.01 1.058.752 1.972 2.266 2.72c.4.175.745.389 1.054.646l-.007-.006a.835.835 0 0 1 .297.608v.004c0 .319-.19.593-.464.716l-.005.002c-.3.158-.656.25-1.034.25h-.046h.002h-.075c-.857 0-1.669-.19-2.397-.53l.035.015l-.343-.172zm10.125 1.141h3.315q.08.343.313 1.5H34L31.906 7.372h-2a1.334 1.334 0 0 0-1.357.835l-.003.009l-3.84 9.187h2.72l.546-1.499zM14.891 7.372l-1.626 10.031h2.594l1.625-10.031zM4.922 9.419l2.11 7.968h2.734l4.075-10.015h-2.746l-2.534 6.844l-.266-1.391l-.904-4.609a1.042 1.042 0 0 0-1.177-.844l.006-.001H2.033l-.031.203c3.224.819 5.342 2.586 6.296 5.25A5.74 5.74 0 0 0 6.972 10.8l-.001-.001a6.103 6.103 0 0 0-2.007-1.368l-.04-.015zm25.937 4.421h-2.16q.219-.578 1.032-2.8l.046-.141l.16-.406c.066-.166.11-.302.14-.406l.188.859l.593 2.89z"/></svg>
          </div>
        </div>
        <div className="bg-slate-200 rounded-xl p-6">
          <div className="flex justify-between items-center">
            <h6>ByeWund <span className="status bg-green-200 text-green-400 text-sm rounded-md ml-1 px-1">Complete</span></h6>
            <button className="bg-gray-300 text-slate-800 rounded-md px-2 py-1">Edit</button>
          </div>
          <div className="flex justify-start gap-4 *:font-bold py-6">
            <span>9656</span>
            <span>6582</span>
            <span>1254</span>
            <span>5236</span>
          </div>
          <div className="flex justify-between">
            <p className="text-slate-400 font-thin">Exp 06/25</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="24" viewBox="0 0 36 24"><path fill="black" d="M33.6 24H2.4A2.4 2.4 0 0 1 0 21.6V2.4A2.4 2.4 0 0 1 2.4 0h31.2A2.4 2.4 0 0 1 36 2.4v19.2a2.4 2.4 0 0 1-2.4 2.4m-5.116-4.281h-.014a.988.988 0 0 0-.728.319l-.001.001a1.17 1.17 0 0 0 .001 1.579l-.001-.001c.182.197.441.32.729.32h.014h-.001a.769.769 0 0 0 .671-.31l.001-.002v.266h.453v-2.969h-.453v1.11a.792.792 0 0 0-.631-.314l-.042.001zm-4.25 0h-.023c-.289 0-.55.12-.735.313a1.19 1.19 0 0 0 .001 1.595l-.001-.001c.186.193.447.313.736.313h.024h-.001l.045.001a.749.749 0 0 0 .609-.312l.002-.002v.266h.47v-2.11h-.469v.25a.777.777 0 0 0-.658-.313h.002zm-2.048 0l-.042-.001a1.11 1.11 0 0 0 0 2.22l.044-.001h-.002l.041.001c.27 0 .517-.094.712-.252l-.002.002l-.219-.375a.875.875 0 0 1-.506.188h-.002a.65.65 0 0 1-.5-.188a.741.741 0 0 1 .001-.969l-.001.001a.61.61 0 0 1 .441-.188h.021h-.001a.898.898 0 0 1 .549.189l-.002-.002l.219-.375a1.165 1.165 0 0 0-.726-.251h-.025h.001zm-4.08 0h-.025a.992.992 0 0 0-.725.313a1.117 1.117 0 0 0-.297.802v-.002l-.001.046c0 .295.117.563.306.759c.19.189.452.305.741.305l.034-.001h-.002l.041.001c.313 0 .599-.113.821-.3l-.002.002l-.219-.343a.93.93 0 0 1-.608.234h-.001a.594.594 0 0 1-.64-.513v-.003h1.578v-.187a1.137 1.137 0 0 0-.283-.806l.001.001a.936.936 0 0 0-.696-.309h-.022h.001zm-3.077.063v.422h.437v.954c0 .518.247.781.734.781h.017c.202 0 .389-.06.546-.162l-.004.002l-.126-.391a.853.853 0 0 1-.406.11h-.001c-.198 0-.298-.115-.298-.343v-.95h.75v-.422h-.75v-.64h-.469v.64zm-1.967 1.53l-.203.36c.247.167.551.266.878.266h.03h-.002l.066.002c.239 0 .462-.071.649-.193l-.005.003a.59.59 0 0 0 .258-.487v-.014v.001c0-.352-.247-.56-.734-.625l-.218-.032c-.24-.041-.36-.114-.36-.218c0-.156.131-.234.391-.234h.005c.245 0 .475.064.674.176l-.007-.004l.188-.375a1.567 1.567 0 0 0-.863-.219h.003l-.054-.001a.999.999 0 0 0-.589.191l.003-.002a.607.607 0 0 0-.234.48v.021v-.001c0 .342.247.547.734.609l.203.032c.249.042.375.115.375.219c0 .176-.16.266-.485.266h-.009a1.2 1.2 0 0 1-.698-.222l.004.003zm-1.782-1.594h-.025a.99.99 0 0 0-.724.313a1.215 1.215 0 0 0 .001 1.596l-.001-.001a.992.992 0 0 0 .725.313h.026h-.001a.792.792 0 0 0 .672-.311l.001-.002v.266h.453v-2.11h-.453v.25a.846.846 0 0 0-.658-.313zh.001zm14.688.063v2.11h.453v-1.187c0-.362.152-.546.453-.546h.01c.099 0 .193.023.276.064l-.004-.002l.14-.438a.722.722 0 0 0-.298-.063l-.032.001h.002h-.017a.604.604 0 0 0-.528.31l-.002.003v-.25zm-6.39 0v2.11h.469v-1.187c0-.362.152-.546.453-.546h.01c.099 0 .193.023.276.064l-.004-.002l.141-.438a.78.78 0 0 0-.31-.063h-.019h.001h-.018a.602.602 0 0 0-.527.31l-.002.003v-.25zm-10.688.375c.311 0 .469.189.469.56v1.172h.469V20.56l.001-.033a.815.815 0 0 0-.228-.566a.889.889 0 0 0-.609-.24h-.009a.806.806 0 0 0-.732.372l-.002.003a.755.755 0 0 0-.705-.375h.002h-.009a.733.733 0 0 0-.599.311l-.002.002v-.25h-.467v2.11h.469V20.72c0-.373.174-.56.516-.56c.311 0 .469.189.469.56v1.172h.453V20.72c0-.374.174-.56.515-.56zM22.906 2h-.033a7.775 7.775 0 0 0-4.385 1.346l.027-.017a8.449 8.449 0 0 1 2.758 4.089l.016.06c.236.745.371 1.601.371 2.49c0 .879-.133 1.726-.379 2.524l.016-.06a8.29 8.29 0 0 1-2.766 4.118l-.016.013a7.833 7.833 0 0 0 4.385 1.328c1.12 0 2.185-.233 3.15-.653l-.051.02a7.893 7.893 0 0 0 4.207-4.175l.019-.051c.4-.91.633-1.971.633-3.086s-.233-2.176-.653-3.136l.02.05a7.877 7.877 0 0 0-4.183-4.205l-.051-.019a7.664 7.664 0 0 0-3.075-.633h-.011h.001zm-9.812 0h-.011a7.77 7.77 0 0 0-3.125.652l.05-.02a7.873 7.873 0 0 0-4.216 4.175l-.019.051c-.4.91-.633 1.971-.633 3.086s.233 2.176.653 3.136l-.02-.05a7.893 7.893 0 0 0 4.175 4.207l.051.019c.914.4 1.98.633 3.099.633a7.863 7.863 0 0 0 4.413-1.346l-.028.018a8.36 8.36 0 0 1-2.766-4.089l-.015-.059a8.372 8.372 0 0 1-.361-2.459a8.543 8.543 0 0 1 3.128-6.616l.015-.012a7.741 7.741 0 0 0-4.357-1.328h-.036h.002zM18 3.703a7.794 7.794 0 0 0-2.673 3.842l-.015.055a7.753 7.753 0 0 0-.36 2.359c0 .834.129 1.637.368 2.392l-.015-.056a7.724 7.724 0 0 0 2.677 3.879l.018.013a7.715 7.715 0 0 0 2.681-3.837l.015-.054a7.743 7.743 0 0 0 .353-2.337c0-.843-.132-1.654-.375-2.416l.015.056a7.813 7.813 0 0 0-2.67-3.884l-.018-.013zM28.546 21.5h-.017a.6.6 0 0 1-.443-.195a.72.72 0 0 1 .001-.955l-.001.001a.639.639 0 0 1 .922 0a.73.73 0 0 1-.001.961l.001-.001a.613.613 0 0 1-.444.189zh.001zm-4.265 0h-.022a.59.59 0 0 1-.431-.187a.764.764 0 0 1 .001-.97l-.001.001a.587.587 0 0 1 .431-.188h.023h-.001h.018c.175 0 .333.075.442.195c.112.121.18.283.18.461v.02v-.001l.001.027a.692.692 0 0 1-.173.459l.001-.001a.605.605 0 0 1-.436.184l-.034-.001h.002zm-12.938 0l-.029.001a.603.603 0 0 1-.439-.188a.764.764 0 0 1 .001-.97l-.001.001a.607.607 0 0 1 .471-.187h-.001h.023a.57.57 0 0 1 .43.195l.001.001a.757.757 0 0 1-.001.961l.001-.001a.59.59 0 0 1-.433.188h-.022h.001zm7.297-.86h-1.093a.55.55 0 0 1 1.094-.002z"/></svg>
          </div>
        </div>
        <div className="border-4 border-dotted border-slate-200 rounded-xl flex items-center">
          <div className="flex justify-center w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/></svg>Text
          </div>
        </div>
      </div>
    </div>
    <div className="bg-slate-50 rounded-2xl p-6 mt-6">
      <h5 className="font-bold mb-6">Billing Address</h5>
      <div className="grid grid-cols-1 grid-flow-row auto-rows-[150px] gap-4">
        <div className="bg-slate-100 rounded-xl p-6">
          <div className="flex justify-between">
            <h5>ByeWind Fang’s Home <span className="status text-sm bg-green-200 text-green-400 ml-1 px-1">Complete</span></h5>
            <button className="bg-gray-300 text-sm text-slate-800 rounded-md px-2 py-1">Edit</button>
          </div>
          <ul className="text-gray-400 mt-1">
            <li><p>Ap #285-7193 Ullamcorper Avenue</p></li>
            <li><p>Amesbury HI 93373</p></li>
            <li><p>US</p></li>
          </ul>
        </div>
        <div className="bg-slate-100 rounded-xl p-6">
          <div className="flex justify-between">
            <h5>Company</h5>
            <button className="bg-gray-300 text-sm text-slate-800 rounded-md px-2 py-1">Edit</button>
          </div>
          <ul className="text-gray-400 mt-1">
            <li><p>Ap #285-7193 Ullamcorper Avenue</p></li>
            <li><p>Amesbury HI 93373</p></li>
            <li><p>US</p></li>
          </ul>
        </div>
        <div className="border-4 border-dotted border-slate-200 rounded-xl flex items-center">
          <div className="flex justify-center w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/></svg>Text
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-400">Tax Location: United States - 10% VAT</p>
    </div>
    <div className="bg-slate-50 rounded-2xl p-6 mt-6">
      <div className="flex justify-between">
        <h4 className="font-semibold text-md">Billing History</h4>
        <ul className="flex gap-4 *:text-sm text-gray-400">
          <li className="active text-slate-950">Month</li>
          <li className="">Year</li>
          <li className="">All time</li>
        </ul>
      </div>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr className="text-left border-b border-gray-300 *:py-4 text-gray-300 font-semibold">
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Invoice</th>
          </tr>
        </thead>
        <tbody>
          <tr className="*:py-2">
            <td>Nov 1, 2022</td>
            <td>Invoice for October 2022</td>
            <td>$123.79</td>
            <td><a href="#" className="text-violet-400">PDF</a></td>
          </tr>
          <tr className="*:py-2">
            <td>Nov 1, 2022</td>
            <td>Invoice for October 2022</td>
            <td>$123.79</td>
            <td><a href="#" className="text-violet-400">PDF</a></td>
          </tr>
          <tr className="*:py-2">
            <td>Nov 1, 2022</td>
            <td>Invoice for October 2022</td>
            <td>$123.79</td>
            <td><a href="#" className="text-violet-400">PDF</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default page