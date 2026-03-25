import React from 'react'
import { FaReact } from 'react-icons/fa6'
import { FaJs, FaPython } from 'react-icons/fa'

import { SiTailwindcss } from 'react-icons/si'
import { motion } from 'framer-motion'


const About = () => {
  return (
    <div className='bg-slate-800 text-white px-[2em] md:px-[10em]   pb-4'>
      <motion.h2
      initial={{x:0,opacity:0}}
      animate={{x:1,opacity:1}}
      transition={{duration:1.2}}
      className='flex justify-center py-6  text-2xl tracking-tight text-transparent font-semibold text-yellow-600'>Technologies</motion.h2>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{x:-100,opacity:0}}
      animate={{y:2,opacity:1}}
      transition={{duration:1.2}}
      
      className='flex justify-center py-3'>
      <FaReact
      

      size={40} className='ml-6 flex text-blue-500 '/>
      <FaPython size={40} className='ml-6 flex text-yellow-400 '/>
      <SiTailwindcss size={40} className='ml-6 flex text-indigo-500 '/>
      <FaJs size={40} className='ml-6 flex text-yellow-500 '/>
      </motion.div>
    </div>
  )
}

export default About
