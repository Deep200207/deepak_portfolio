import React from 'react';
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function Technologies() {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies </h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='p-3'>
          <FaReact className='text-6xl text-blue-700' />
        </div>
        <div className=' p-3'>
          <IoLogoJavascript className='text-6xl text-yellow-400' />
        </div>
        <div className='p-3'>
          <SiExpress className='text-6xl text-white' />
        </div>
        <div className=' p-3'>
          < FaNodeJs className='text-6xl text-green-500' />
        </div>
        <div className=' p-3'>
          <RiTailwindCssLine className='text-6xl text-blue-400' />
        </div>
        <div className='p-3'>
          <SiMongodb className='text-6xl text-green-700' />
        </div>
        <div className='p-3'>
          <FaJava className='text-6xl text-orange-600' />
        </div>
      </div>
    </div>
  )
}
