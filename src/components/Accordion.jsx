"use client"
import React from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

export default function Accordion({ title, text }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
    className=" h-fit w-full bg-pallete-blue p-8 rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer shadow-xl"
      onClick={handleToggle}
    >
        <h1 className="text-xl md:text-2xl font-semibold flex justify-between align-middle ">
          {title} {isOpen ? <AiOutlineUp size={30} /> : <AiOutlineDown size={30} />}
        </h1>
        <div>{isOpen && <div className='text-justify text-lg my-5'>{text}</div>}</div>
      
    </div>
  );
}