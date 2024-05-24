import React from 'react'
import {logo} from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='mb-10 pt-3 flex items-center justify-between w-full max-w-5xl'>
            <img src={logo} alt='sumz_logo' className='w-28 object-contain'/>
            <button 
              type='submit'
              onClick={() => window.open('')} 
              className='black_btn'
            >
              GitHub
            </button>
        </nav>

        <h1 className='head_text'>Summarize Articles with
        <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>

        <h2 className='desc'>Simplify your reading with Summarize, an
        open-source article summarizer that transforms lengthy articles into clear
        and concise summaries.</h2>
    </header>
  )
}


export default Hero
