import React from 'react'
import Image from 'next/image'
import { Badge } from "flowbite-react";

const Page = () => {
  return (
    <div className="flex p-6">
        <div className="basis-1/3">
            <div className="flex justify-between bg-slate-100 p-3 rounded-md mb-3">
                <div className="flex gap-2">
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48"/><path fill="black" d="M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38M399.34 90L218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0"/></svg></button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="black" stroke-linejoin="round" stroke-width="4"><path d="M18.284 43.171a19.995 19.995 0 0 1-8.696-5.304a6 6 0 0 0-5.182-9.838A20.09 20.09 0 0 1 4 24c0-2.09.32-4.106.916-6H5a6 6 0 0 0 5.385-8.65a19.968 19.968 0 0 1 8.267-4.627A6 6 0 0 0 24 8a6 6 0 0 0 5.348-3.277a19.968 19.968 0 0 1 8.267 4.627A6 6 0 0 0 43.084 18A19.99 19.99 0 0 1 44 24c0 1.38-.14 2.728-.406 4.03a6 6 0 0 0-5.182 9.838a19.995 19.995 0 0 1-8.696 5.303a6.003 6.003 0 0 0-11.432 0Z"/><path d="M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"/></g></svg></button>
                </div>
                <input type="text" name="search" id="search" placeholder="Search" className="w-40 h-4 p-3 rounded-md placeholder:text-gray-300 border-gray-300"/>
            </div>
            <ul className="flex-col">
                <li className="flex justify-between w-full items-start py-5 px-4 hover:border-transparent hover:rounded-xl hover:bg-gray-100 hover:cursor-pointer">
                    <Image priority={true} src="/Ginger.svg" alt="pepper" width={26} height={26} className="flex-none bg-gray-500 rounded-full w-8 h-8 p-1"/>
                    <div className="flex-1 ml-2">
                        <p className="font-semibold">Natalya</p>
                        <p className="text-gray-500 text-sm">Are you free tonight?</p>
                    </div>
                    <div>
                        <span className="time text-sm text-gray-400 mb-2 block">19:20</span>
                        <Badge color="purple" size="sm" className="rounded-xl w-9 text-black">12</Badge>
                    </div>
                </li>
                <li className="flex justify-between w-full items-start py-5 px-4 hover:border-transparent hover:rounded-xl hover:bg-gray-100 hover:cursor-pointer">
                    <Image priority={true} src="/Cuudles.svg" alt="pepper" width={26} height={26} className="flex-none bg-gray-500 rounded-full w-8 h-8 p-1"/>
                    <div className="flex-1 ml-2">
                        <p className="font-semibold">Natalya</p>
                        <p className="text-gray-500 text-sm">Are you free tonight?</p>
                    </div>
                    <div>
                        <span className="time text-sm text-gray-400 mb-2 block">19:20</span>
                    </div>
                </li>
                <li className="flex justify-between w-full items-start py-5 px-4 hover:border-transparent hover:rounded-xl hover:bg-gray-100 hover:cursor-pointer">
                    <Image priority={true} src="/Ginger.svg" alt="pepper" width={26} height={26} className="flex-none bg-gray-500 rounded-full w-8 h-8 p-1"/>
                    <div className="flex-1 ml-2">
                        <p className="font-semibold">Natalya</p>
                        <p className="text-gray-500 text-sm">Are you free tonight?</p>
                    </div>
                    <div>
                        <span className="time text-sm text-gray-400 mb-2 block">19:20</span>
                        <Badge color="purple" size="sm" className="rounded-xl w-9 text-black">12</Badge>
                    </div>
                </li>
                <li className="flex justify-between w-full items-start py-5 px-4 hover:border-transparent hover:rounded-xl hover:bg-gray-100 hover:cursor-pointer">
                    <Image priority={true} src="/Cuudles.svg" alt="pepper" width={26} height={26} className="flex-none bg-gray-500 rounded-full w-8 h-8 p-1"/>
                    <div className="flex-1 ml-2">
                        <p className="font-semibold">Natalya</p>
                        <p className="text-gray-500 text-sm">Are you free tonight?</p>
                    </div>
                    <div>
                        <span className="time text-sm text-gray-400 mb-2 block">19:20</span>
                    </div>
                </li>
            </ul>
        </div>
        <div className="basis-2/3"></div>
        
    </div>
  )
}

export default Page