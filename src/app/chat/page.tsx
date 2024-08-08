"use client"
import { useState } from "react";
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "flowbite-react";

const Chat = () => {
    const listMess = [
        {
            userid: 0,
            name: "Natalya",
            image: "/Ginger.svg",
            short: "Are you date to night?",
            time: "19:30",
            badge:  12
        },
        {
            userid: 1,
            name: "Tau thao",
            image: "/Cuudles.svg",
            short: "Hey ladie, want drink with me",
            time: "21:30",
            badge:  1
        },
        {
            userid: 2,
            name: "MeMe",
            image: "/Ginger.svg",
            short: "I'm god of the word, on your knee",
            time: "20:30",
            badge:  6
        },
        {
            userid: 3,
            name: "KwangKO",
            image: "/Cuudles.svg",
            short: "I saw u on the floor in bar xxx",
            time: "3:30",
            badge:  4
        }
    ];
    const conversation = [
        {
            userid: 0,
            name: "Natalya",
            image: "/Ginger.svg",
            email: 'natalya@xx.com',
            content: [
                {name: "he", pos: 1, mess: "hi ByeWind, I saw your work on Dribbble and it`s awesome.I would like to know more about it. Could you send me your website?"},
                {name: "she", pos: 2, mess: "Thank you. Of course. Just a moment, please."},
                {name: "he",pos: 1, mess: "Got it, thank you."},
                {name: "he",pos: 2, mess: ":))"},
                {name: "she", pos: 2, mess: "hi ByeWind, I saw your work on Dribbble and it`s awesome.I would like to know more about it. Could you send me your website?"},
            ]
        },
        {
            userid: 1,
            name: "Tau thao",
            image: "/Cuudles.svg",
            email: 'taupo@xx.com',
            content: [
                {name: "he", pos: 1, mess: "hi ByeWind, I saw your work on Dribbble and it`s awesome.I would like to know more about it. Could you send me your website?"},
                {name: "she", pos: 2, mess: "Thank you. Of course. Just a moment, please."},
                {name: "he",pos: 2, mess: "Got it, thank you."},
                {name: "he",pos: 1, mess: ":))"},
                {name: "she", pos: 2, mess: "hi ByeWind, I saw your work on Dribbble and it`s awesome.I would like to know more about it. Could you send me your website?"},
            ]
        },
        {
            userid: 2,
            name: "MeMe",
            image: "/Ginger.svg",
            email: 'meme@xx.com',
            content: [
                {name: "he", pos: 1, mess: "hi ByeWind, I saw your work on Dribbble and it`s awesome.I would like to know more about it. Could you send me your website?"},
                {name: "she", pos: 1, mess: "Thank you. Of course. Just a moment, please."},
                {name: "he",pos: 1, mess: "Got it, thank you."},
                {name: "he",pos: 2, mess: ":))"},
                {name: "she", pos: 2, mess: "hi ByeWind, I saw your work on Dribbble and it`s awesome.I would like to know more about it. Could you send me your website?"},
            ]
        },
        {
            userid: 3,
            name: "KwangKO",
            image: "/Cuudles.svg",
            email: 'kwankoo@xx.com',
            content: [
                {name: "he", pos: 1, mess: "hi ByeWind, I saw your work on Dribbble and it`s awesome.I would like to know more about it. Could you send me your website?"},
                {name: "she", pos: 2, mess: "Thank you. Of course. Just a moment, please."},
                {name: "he",pos: 1, mess: "Got it, thank you."},
                {name: "he",pos: 2, mess: ":))"},
                {name: "she", pos: 2, mess: "hi ByeWind, I saw your work on Dribbble and it`s awesome.I would like to know more about it. Could you send me your website?"},
            ]
        }
    ]
    const [openId, setOpenId] = useState(null);
    const openSMS = (id: any) => {
        setOpenId((prevState) => (prevState === id ? null: id));
    }
    return (
        <div className="flex gap-6 max-sm:gap-2">
            <div className="basis-1/3 max-sm:basis-20 overflow-hidden">
                <div className="flex max-sm:hidden justify-between bg-slate-100 p-3 rounded-md mb-3">
                    <div className="flex gap-2">
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48"/><path fill="black" d="M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38M399.34 90L218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0"/></svg></button>
                        <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="black" strokeLinejoin="round" strokeWidth="4"><path d="M18.284 43.171a19.995 19.995 0 0 1-8.696-5.304a6 6 0 0 0-5.182-9.838A20.09 20.09 0 0 1 4 24c0-2.09.32-4.106.916-6H5a6 6 0 0 0 5.385-8.65a19.968 19.968 0 0 1 8.267-4.627A6 6 0 0 0 24 8a6 6 0 0 0 5.348-3.277a19.968 19.968 0 0 1 8.267 4.627A6 6 0 0 0 43.084 18A19.99 19.99 0 0 1 44 24c0 1.38-.14 2.728-.406 4.03a6 6 0 0 0-5.182 9.838a19.995 19.995 0 0 1-8.696 5.303a6.003 6.003 0 0 0-11.432 0Z"/><path d="M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"/></g></svg></button>
                    </div>
                    <input type="text" name="search" id="search" placeholder="Search" className="w-40 h-4 p-3 rounded-md placeholder:text-gray-300 border-gray-300"/>
                </div>
                <ul className="flex-col max-h-screen overflow-x-hidden">
                    {listMess.map((item, i) => (  
                        <li key={item.name} onClick={()=> openSMS(item.userid)} className="flex justify-between w-full items-start py-5 px-4 hover:border-transparent hover:rounded-xl hover:bg-gray-100 hover:cursor-pointer">
                            <Image priority={true} src={item.image} alt="pepper" width={26} height={26} className="flex-none bg-gray-500 rounded-full w-8 h-8 p-1 max-sm:p-1"/>
                            <div className="flex-1 ml-2 max-sm:hidden">
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-gray-500 text-sm">{item.short}</p>
                            </div>
                            <div className="relative">
                                <div className="time text-sm text-gray-400 mb-2 max-sm:hidden">{item.time}</div>
                                <Badge color="purple" size="sm" className="rounded-xl w-9 text-black max-sm:absolute max-sm:-top-2 max-sm:-right-2 max-sm:w-6 max-sm:h-6 max-sm:p-2 max-sm:bg-violet-600 max-sm:text-white">{item.badge}</Badge>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <AnimatePresence>
            {conversation.map((item, i) => (
                <>
                {openId === item.userid && (
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)"}}
                        animate={{ opacity: 1, filter: "blur(0px)"}}
                        exit={{ opacity: 0, filter: "blur(10px)"}}
                        transition={{ duration: 0.3 }}
                        className="basis-2/3 max-sm:basis-full border border-gray-300 rounded-md"
                    >
                        <div className="heading border-b flex items-center p-4">
                            <div className="flex-none mr-3">
                                <Image priority={true} src={item.image} alt="pepper" width={26} height={26} className="flex-none bg-gray-500 rounded-full w-8 h-8 p-1"/>
                            </div>
                            <div className="flex-1 text-xs">
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-gray-400">{item.email}</p>
                            </div>
                            <div className="flex gap-2">
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M19.44 13c-.22 0-.45-.07-.67-.12a9.44 9.44 0 0 1-1.31-.39a2 2 0 0 0-2.48 1l-.22.45a12.18 12.18 0 0 1-2.66-2a12.18 12.18 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48a10.33 10.33 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41a19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2-.76a3 3 0 0 0 1-2.25v-3a3 3 0 0 0-2.47-2.9m.5 6a1 1 0 0 1-.34.75a1.05 1.05 0 0 1-.82.25A17 17 0 0 1 4.07 5.22a1.09 1.09 0 0 1 .25-.82a1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79q.06.41.15.81a11.12 11.12 0 0 0 .46 1.55l-1.4.65a1 1 0 0 0-.49 1.33a14.49 14.49 0 0 0 7 7a1 1 0 0 0 .76 0a1 1 0 0 0 .57-.52l.62-1.4a13.69 13.69 0 0 0 1.58.46q.4.09.81.15a1 1 0 0 1 .79 1Z"/></svg></a>
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><g fill="black" fillRule="evenodd" clipRule="evenodd"><path d="M11 4.5H5A2.5 2.5 0 0 0 2.5 7v5A2.5 2.5 0 0 0 5 14.5h6a2.5 2.5 0 0 0 2.5-2.5V7A2.5 2.5 0 0 0 11 4.5M3.5 7A1.5 1.5 0 0 1 5 5.5h6A1.5 1.5 0 0 1 12.5 7v5a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12z"/><path d="M15.728 5.58L12.75 7.517a.5.5 0 0 0-.228.414l-.027 2.612a.5.5 0 0 0 .227.425l3.004 1.952a.5.5 0 0 0 .773-.419V6a.5.5 0 0 0-.773-.42m-.226 6l-2.001-1.301l.021-2.07l1.98-1.287z"/></g></svg></a>
                                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="rotate-90" width="24" height="24" viewBox="0 0 20 20"><path fill="black" d="M10 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4"/></svg></a>
                            </div>
                        </div>
                        <div className="content p-6 bg-slate-50 min-h-screen relative">
                            <div className="contentbox max-h-screen overflow-x-hidden">
                                <ul className="w-full flex-col">
                                    {item.content.map((mss, i) => (
                                        <li key={i} className={`${mss.pos === 1 ? 'float-left bg-slate-100 text-black' : 'float-right bg-violet-500 text-white'}  border-white p-4 my-4 rounded-xl w-2/3 text-sm`}>
                                            <p>{mss.mess}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="chatbox bg-slate-100 flex max-sm:flex-wrap gap-2 items-center px-3 py-2 rounded-xl absolute bottom-5 left-5 right-5">
                                <div className="flex gap-3 flex-none max-sm:w-full">
                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><rect width="6" height="11" x="9" y="3" rx="3"/><path d="M19 11a7 7 0 1 1-14 0m7 7v3"/></g></svg></a>
                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20"><path fill="black" d="M19.09 2a.9.9 0 0 1 .91.889V17.11a.9.9 0 0 1-.91.889H.91A.9.9 0 0 1 0 17.11V2.89A.9.9 0 0 1 .91 2zM5.416 8.417l-4.06 4.042v4.217H18.64v-1.433l-3.2-3.12l-2.777 2.333c-.166.117-.326.168-.48.155a.792.792 0 0 1-.439-.189zm13.22-5.086H1.362v7.23L4.968 6.97a.718.718 0 0 1 .44-.156c.155 0 .291.047.41.14l6.431 6.088l2.805-2.35a.704.704 0 0 1 .421-.146a.69.69 0 0 1 .418.145l2.742 2.665zM15.273 5.23c.753 0 1.363.597 1.363 1.333s-.61 1.333-1.363 1.333c-.754 0-1.364-.597-1.364-1.333s.61-1.333 1.364-1.333"/></svg></a>
                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20"><path fill="black" d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m0 1.395a8.605 8.605 0 1 0 0 17.21a8.605 8.605 0 0 0 0-17.21M7.744 12a2.273 2.273 0 0 0 4.51.015a.682.682 0 1 1 1.353.172a3.637 3.637 0 0 1-7.217-.024A.682.682 0 1 1 7.744 12m-1.93-5.72a1.395 1.395 0 1 1 0 2.79a1.395 1.395 0 0 1 0-2.79m8.372 0a1.395 1.395 0 1 1 0 2.79a1.395 1.395 0 0 1 0-2.79"/></svg></a>
                                </div>
                                <input type="text" name="chatbox" id="chatbox" placeholder="Type message" className="flex-1 border-0 rounded-md max-sm:w-full" />
                                <button className="ml-2" id="send" name="send"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="black" d="M1.177 1.119a.5.5 0 0 1 .547-.066l13 6.5a.5.5 0 0 1 0 .894l-13 6.5a.5.5 0 0 1-.702-.594L2.977 8L1.022 1.647a.5.5 0 0 1 .155-.528M3.869 8.5l-1.547 5.03L13.382 8L2.322 2.47L3.869 7.5H9.5a.5.5 0 0 1 0 1z"/></svg></button>
                            </div>
                        </div>
                    </motion.div>
                )}
                </>
            ))}
            </AnimatePresence>
        </div>
    )
}

export default Chat