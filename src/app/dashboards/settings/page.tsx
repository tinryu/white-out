"use client";

import { Datepicker, Dropdown  } from "flowbite-react";

const Setting = () => {
  return (
    <>
    <div className="">
      <h5 className="font-semibold text-xl">Project Logo</h5>
      <svg className="text-[80px] text-white bg-[#95A4FC] rounded-full p-4 my-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793V8.866l-3.4 1.963l-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882l-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646l-.884-.237a.5.5 0 1 1 .26-.966l1.848.495L7 8L3.6 6.037l-1.85.495a.5.5 0 0 1-.258-.966l.883-.237l-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646l-.237-.883a.5.5 0 1 1 .966-.258l.495 1.849L7.5 7.134V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 1 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v3.927l3.4-1.963l.496-1.85a.5.5 0 1 1 .966.26l-.236.882l1.12-.646a.5.5 0 0 1 .5.866l-1.12.646l.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l3.4 1.963l1.849-.495a.5.5 0 0 1 .259.966l-.883.237l1.12.646a.5.5 0 0 1-.5.866l-1.12-.646l.236.883a.5.5 0 1 1-.966.258l-.495-1.849l-3.4-1.963v3.927l1.353 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5z"/></svg>
      <p className="text-gray-300 text-sm">Allowed file types: png,jpg,jpeg.</p>
    </div>
    <div className="border border-gray-300 rounded-md p-4 mt-4">
      <h5 className="font-semibold">Project Name</h5>
      <input type="text" placeholder="Cold Design" className="text-sm text-gray-300 w-full border-transparent px-0 placeholder:text-slate-800"/>
    </div>
    <div className="border border-gray-300 rounded-md p-4 mt-4">
      <h5 className="font-semibold">Project Type</h5>
        <Dropdown label="Dropdown button" dismissOnClick={false} renderTrigger={() => <div className="flex justify-between px-0 border border-transparent hover:border-gray-300 rounded-md p-2">
          Client Relationship
          <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.71 6.29a1 1 0 0 0-1.42 0l-5 5a1 1 0 0 0 0 1.42l5 5a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42L5.41 12l4.3-4.29a1 1 0 0 0 0-1.42m11 5l-5-5a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 0-1.42"/></svg></div>
        }>
          <Dropdown.Item>Client Op</Dropdown.Item>
          <Dropdown.Item>Client Dr</Dropdown.Item>
          <Dropdown.Item>Client YC</Dropdown.Item>
          <Dropdown.Item>Client SC</Dropdown.Item>
        </Dropdown>
    </div>
    <div className="border border-gray-300 rounded-md p-4 mt-4">
      <h5 className="font-semibold">Project Description</h5>
      <p className="text-gray-300 text-sm">Organize your thoughts with an outline. Here’s the outlining strategy I use. I promise it works like a charm. Not only will it make writing your blog post easier, it’ll help you make your message.</p>
    </div>
    <div className="border border-gray-300 rounded-md p-4 mt-4">
      <h5 className="font-semibold">Due Date</h5>
      <Datepicker />
    </div>
    <div className="border border-gray-300 rounded-md p-4 mt-4">
      <h5 className="font-semibold">Notifications</h5>
      <div className="flex">
        <label htmlFor="email" className="relative pl-8 pr-3 items-center">
          <input type="radio" id="email" name="contact" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/select"/>
          <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/select:bg-slate-950 peer-checked/select:border-slate-50 after:border-slate-50 after:peer-checked/select:block"></span>
          Email
        </label>
        <label htmlFor="phone" className="relative pl-8 items-center">
          <input type="radio" id="phone" name="contact" className="absolute opacity-0 cursor-pointer h-0 w-0 peer/select"/>
          <span className="checkmark absolute top-0 left-0 h-[25px] w-[25px] bg-transparent border-2 border-gray-300 rounded-md after:content-[''] after:absolute after:hidden after:top-[5px] after:left-[9px] after:w-[5px] after:h-[10px] after:border-r-[2px] after:border-b-[2px] after:rotate-45 peer-checked/select:bg-slate-950 peer-checked/select:border-slate-50 after:border-slate-50 after:peer-checked/select:block"></span>
          Phone
        </label>
      </div>
    </div>
    <div className="border border-gray-300 rounded-md p-4 mt-4">
      <h5 className="font-semibold">Status</h5>
      <div className="mt-2 flex items-center">
        <label className="switch mr-2">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <span className="text-gray-300">Active</span>
      </div>
    </div>
    <div className="mt-10 border-1 border-t -mx-6 px-6">
      <div className="flex justify-end">
        <button className="p-2 my-3 mr-3 bg-slate-100 rounded-md hover:bg-slate-950 hover:text-slate-100 font-semibold">Cancel</button>
        <button className="p-2 my-3 bg-slate-100 rounded-md hover:bg-slate-950 hover:text-slate-100 font-semibold">Save Changes</button>
      </div>
    </div>
    </>
  )
}

export default Setting