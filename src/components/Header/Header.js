import React,{useState} from 'react'
import {FaBars} from "react-icons/fa"
import IntroSection from './IntroSection';


function Header({left,right}) {

    const [bar,setBar] = useState(false);
    const clickBar  = ()=>{
      setBar(!bar);
    }

  return (
    <>
     <header className=' bg-darkRed  md:h-screen'>
      <div className='w-full h-[1vh] bg-lightGreen'></div>
   <nav className=' w-[85vw] mx-auto flex mt-12 relative'>
    {/* Logo */}
    <div className='w-2/5 sm:ml-4'> 
    <h1 className='text-sm text-white font-bold md:text-xl lg:text-2xl'>The Modernist</h1>
    <p className='text-[0.37rem] text-lightGrey md:text-[0.57rem] lg:text-[0.67rem]'>Free PSD Website Template</p>
    </div>


    {/* Navlist */}
<ul className={bar ? 'flex flex-col mx-auto text-center text-white space-y-4':'flex justify-between items-center w-3/5 text-white hidden  lg:flex '} >
<li><a href='/' className='bg-lightGreen px-3 py-2 rounded-[10px]'>Home</a></li>
<li><a href='/' className='py-6 lg:py-0'>Style Demo</a></li>
<li><a href='/'>Full Width</a></li>
<li><a href='/'>Drop Down</a></li>
<li><a href='/'>Portfolio</a></li>
<li><a href='/'>Gallery</a></li>

</ul>
<FaBars className='absolute right-0 top-1 mr-4  lg:hidden' color='white' size={24} onClick={clickBar}/>

   </nav>
   <IntroSection left={left} right={right} />
   </header>
    </>
  )
}

export default Header