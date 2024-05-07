const Budget = () => {
  return (
    <>
      <div className="bg-gray-100 rounded-md p-6">
        <div className="flex justify-between">
          <h5 className="font-semibold text-xl">Budget</h5>
          <span className="font-semibold text-sm">$22,300 of 36,000 Used</span>
        </div>
        <div className="w-full mt-5 my-3 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
          <div
            className="bg-[#C6C7F8] h-2 rounded-full"
            style={{ width: "25%" }}
          ></div>
        </div>
        <p className="text-sm text-gray-400">14 Target are remaining</p>
      </div>
      <div className="mt-10">
        <h5 className="font-semibold text-xl mb-6">Usage Charater</h5>
        <div className="grid grid-cols-3 gap-4">
          <div className="relative p-4 border-2 rounded-xl hover:border-black hover:cursor-pointer">
            <label htmlFor="precise" className="font-semibold relative mb-[12px] w-full block">
              <input type="radio" id="precise" name="price" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/precise"/>
              <span className="checkmark absolute top-0 right-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-full  after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/precise:bg-transparent peer-checked/precise:border-slate-950 after:border-slate-950 after:peer-checked/precise:block"></span>
              Precise Usage
            </label>
            <p className="mt-2 text-gray-300 text-sm">
              Less than $5,000 per transaction
            </p>
          </div>
          <div className="relative p-4 border-2 rounded-xl hover:border-black hover:cursor-pointer">
            <label htmlFor="normal" className="font-semibold relative mb-[12px] w-full block">
              <input type="radio" id="normal" name="price" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/precise"/>
              <span className="checkmark absolute top-0 right-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-full  after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/precise:bg-transparent peer-checked/precise:border-slate-950 after:border-slate-950 after:peer-checked/precise:block"></span>
              Normal Usage
            </label>
            <p className="mt-2 text-gray-300 text-sm">
              More than $5,000 per transaction
            </p>
          </div>
          <div className="relative p-4 border-2 rounded-xl hover:border-black hover:cursor-pointer">
            <label htmlFor="extreme" className="font-semibold relative mb-[12px] w-full block">
              <input type="radio" id="extreme" name="price" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/precise"/>
              <span className="checkmark absolute top-0 right-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-full  after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/precise:bg-transparent peer-checked/precise:border-slate-950 after:border-slate-950 after:peer-checked/precise:block"></span>
              Extreme Usage
            </label>
            <p className="mt-2 text-gray-300 text-sm">
              More than $50,000 per transaction
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 p-4 border-2 rounded-xl hover:border-black hover:cursor-pointer">
        <label className="font-semibold">Budget Notes</label>
        <p className="mt-2 text-gray-300 text-sm">
          Organize your thoughts with an outline. Here’s the outlining strategy
          I use. I promise it works like a charm. Not only will it make writing
          your blog post easier, it’ll help you make your message.
        </p>
      </div>
      <div className="mt-10 p-4 border-2 rounded-xl hover:border-black hover:cursor-pointer">
        <label className="font-semibold">Manage Budget</label>
        <p className="mt-2 text-gray-300 text-sm">$36000.00</p>
      </div>
      <div className="mt-10 p-4 border-2 rounded-xl hover:border-black hover:cursor-pointer">
        <label className="font-semibold">Overuse Notifications</label>
        <div className="flex items-center mt-2">
          <label htmlFor="email" className="relative pl-8 pr-3">
            <input type="radio" id="email" name="contact" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/select"/>
            <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/select:bg-slate-950 peer-checked/select:border-slate-50 after:border-slate-50 after:peer-checked/select:block"></span>
            Email
          </label>
          <label htmlFor="phone" className="relative pl-8">
            <input type="radio" id="phone" name="contact" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/select"/>
            <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/select:bg-slate-950 peer-checked/select:border-slate-50 after:border-slate-50 after:peer-checked/select:block"></span>
            Phone
          </label>
        </div>
      </div>
      <div className="mt-10 p-4 border-2 rounded-xl hover:border-black hover:cursor-pointer">
        <label className="font-semibold">Allow Changes</label>
        <div className="mt-2">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="mt-10 border-1 border-t -mx-6 px-6">
        <div className="flex justify-end">
          <button className="p-2 my-3 mr-3 bg-slate-100 rounded-md hover:bg-slate-950 hover:text-slate-100 font-semibold">Cancel</button>
          <button className="p-2 my-3 bg-slate-100 rounded-md hover:bg-slate-950 hover:text-slate-100 font-semibold">Save Changes</button>
        </div>
      </div>
    </>
  );
};

export default Budget;
