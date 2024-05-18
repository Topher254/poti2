import React from 'react'
import { FaReact } from 'react-icons/fa6'
import { FaJs, FaPython } from 'react-icons/fa'
import { DiJavascript } from 'react-icons/di'
import { SiTailwindcss } from 'react-icons/si'

const About = () => {
  return (
    <div className='bg-slate-800 text-white px-[2em] md:px-[10em]   pb-4'>
      <h2 className='flex justify-center py-6 bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent font-semibold text-yellow-600'>Technologies</h2>
      <div className='flex justify-center py-3'>
      <FaReact size={40} className='ml-6 flex text-blue-500  '/>
      <FaPython size={40} className='ml-6 flex text-yellow-400 '/>
      <SiTailwindcss size={40} className='ml-6 flex text-indigo-500 '/>
      <FaJs size={40} className='ml-6 flex text-yellow-500 '/>
      </div>
    </div>
  )
}

export default About
