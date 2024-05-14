"use client"
import React, { useState } from 'react';
import { Toast } from "flowbite-react";
import { HiCheck, HiExclamation, HiX } from "react-icons/hi";

type Button = {
    nameID: string,
    placeholder: string,
    className: string,
}
const ButtonClipboard: React.FC<Button> = ({nameID, placeholder, className}) => {
  const [showToast, setShowToast] = useState(false);
  const [text, setText] = useState(placeholder);

  const handleCoppyClick = async() => {
    try {
      await navigator.clipboard.writeText(text);
      setShowToast(!showToast);
    }
     catch(e) {
      alert("Copy to clipboard failed");
     }
  }
  return (
    <>
      {showToast && (
        <Toast className="fixed top-10 right-10">
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200"><HiCheck className="h-5 w-5" /></div> 
          <div className="ml-3 text-sm font-normal">copied to clipboard!</div>
          <Toast.Toggle onDismiss={() => setShowToast(false)} />
        </Toast>
      )}
      <span className="relative">
        <input type="text" value={text} onChange={(e) => {setText(e.target.value)}} placeholder={placeholder} id={nameID} name={nameID} autoComplete="" className={className}/>
          <svg onClick={handleCoppyClick} className="absolute -top-1 right-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 21 21">
            <g fill="none" fillRule="evenodd" stroke="black" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7.5 4.5h-2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1h-2"/>
              <path d="M8.5 3.5h4a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2m1 5h5m-5 3h5m-5 3h5m-8-6h1m-1 3h1m-1 3h1"/>
            </g>
          </svg>
      </span>
    </>
    
  )
}

export default ButtonClipboard