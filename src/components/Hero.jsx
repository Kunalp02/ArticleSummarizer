import React from 'react'
import {logo} from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='mb-10 pt-3 flex justify-center-between items-center flex-col'>
            <img  src={logo} alt='sumz_logo' className='w-28 object-contain '/>
        </nav>

        <button 
            type='submit'
            onClick={() => window.open('')} 
        >GitHub</button>

        <h1 className='head_text'>Summarize Articles with
        <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>

        <h2 className='desc'>Simplify your reading summarize, an
        oper-source article summarizer that transforms length articles into clear
        and concise summmries</h2>
    </header>
  )
}

export default Hero
