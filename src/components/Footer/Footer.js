import React from 'react'

function Footer() {
        return (
                <div className='  bg-customGrey  lg:h-[80vh]'>
                        <div className='flex justify-between items-center w-[92vw]  mx-auto py-16 text-white xl:w-[80vw]'>
                                <div className=' hidden text-left w-[25%] h-[50vh] px-12 md:hidden lg:block'>
                                        <h4 className='text-lg xl:text-xl'>From The Blog</h4>
                                        <p className='text-md font-bold py-6 text-lightGreen xl:text-lg xl:py-8'>Post Title</p>
                                        <p className='text-xs text-lightGreen'>Admin,<span className=' text-[0.6rem]  text-lightGrey'>domainname.com</span></p>
                                        <p className='text-white text-xs py-4  text-lightGrey'>Friday,6th April zooo</p>
                                        <p className='text-left  text-lightGrey  lg:text-xs xl:text-base  '>Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed.
                                                Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt.
                                                Namjusto cras urna urnaretra lor urna neque sed quis orci nulla.</p>
                                        <p className='text-lightGreen py-2 text-sm xl:text-base xl:py-4'>
                                                <a href='/' >Read More &#8250;</a> </p>



                                </div>
                                <div className='hidden text-left w-[25%] h-[50vh] md:hidden lg:block'>
                                        <h4 className='text-lg xl:text-xl'>Quick Links</h4>
                                        <ul className='text-lightGreen py-5'>
                                                <li className='border-b-2 border-b-lightGrey'><a href="/"><p className='py-2 md:py-3 lg:py-3 lg:text-xs xl:py-2 xl:text-base '><span className='text-lightGrey'>&#187;</span>  Amet consectetur</p></a></li>
                                                <li className='border-b-2 border-b-lightGrey'><a href='/'><p className='py-2 md:py-3 lg:py-3 lg:text-xs xl:py-2 xl:text-base'><span className='text-lightGrey'>&#187;</span > Lorem ipsum dolor sit</p></a></li>
                                                <li className='border-b-2 border-b-lightGrey'><a href="/"><p className='py-2 md:py-3 lg:py-3 lg:text-xs xl:py-2 xl:text-base'><span className='text-lightGrey'>&#187;</span>  Praesent vel sem id</p></a></li>
                                                <li className='border-b-2 border-b-lightGrey'><a href="/"><p className='py-2 md:py-3 lg:py-3 lg:text-xs xl:py-2 xl:text-base'><span className='text-lightGrey'>&#187;</span>  Curabitur hendrerit est</p></a></li>
                                                <li className='border-b-2 border-b-lightGrey'><a href="/"><p className='py-2 md:py-3 lg:py-3 lg:text-xs xl:py-2 xl:text-base'><span className='text-lightGrey'>&#187;</span>  Aliquam eget erat neo sapien</p></a></li>
                                                <li className='border-b-2 border-b-lightGrey'><a href="/"><p className='py-2 md:py-3 lg:py-3 lg:text-xs xl:py-2 xl:text-base'><span className='text-lightGrey'>&#187;</span> Cras id augue nuno</p></a></li>
                                                <li className='border-b-2 border-b-lightGrey'><a href="/"><p className='py-2 md:py-3 lg:py-3 lg:text-xs xl:py-2 xl:text-base'><span className='text-lightGrey'>&#187;</span>  Sed a nulla urna</p></a></li>

                                        </ul>




                                </div>
                                <div className='hidden text-left w-[25%] h-[50vh] space-y-2 px-12 md:block md:w-[50%] lg:block lg:w-[25%]'>
                                        <h4 className='text-lg md:text-lg lg:text-lg xl:text-xl'>Latest Tweets</h4>
                                        <ul className='py-5 space-y-4 xl:space-y-8'>
                                                <li><p className=' md:text-xs lg:text-xs xl:text-base  text-lightGrey'><span className='text-lightGreen'>@namehere</span>Justoid nonummy
                                                        laoreet phasellent penatoque in
                                                        antesque pellus elis eget tincidunt.
                                                        Nequatdui laorem justo a non tellus
                                                        laoremut vitae doloreet 1 day ago</p></li>
                                                <li><p className='  text-lightGrey md:text-xs lg:text-xs xl:text-base'><span className='text-lightGreen'>@namehere</span>Justoid nonummy
                                                        laoreet phasellent penatoque in
                                                        antesque pellus elis eget tincidunt.
                                                        Nequatdui laorem justo a non tellus
                                                        laoremut vitae doloreet 1 day ago</p></li>

                                        </ul>

                                </div>
                                <div className=' text-left w-[30vh] h-[50vh] mx-auto md:w-[30vh] space-y-2 lg:w-[25%]'>
                                        <h4 className='text-lg md:text-lg lg:text-lg xl:text-xl'>Contact Us</h4>
                                        <div className='py-6 space-y-2 flex flex-col lg:space-y-3'>
                                                <input type="text" className='bg-darkGrey rounded py-2  placeholder:indent-2 placeholder:text-sm' placeholder=' Full Name' />
                                                <input type="text" className='bg-darkGrey rounded py-2  placeholder:indent-2 placeholder:text-sm' placeholder='Email Address' />
                                                <input type="text" className='bg-darkGrey rounded py-2  placeholder:indent-2 placeholder:text-sm' placeholder='Subject' />
                                                <textarea className='rounded bg-darkGrey  h-[14vh] placeholder:indent-2 placeholder:text-sm placeholder:pt-2' placeholder='Message'></textarea>

                                        </div>
                                        <a href='/' className=' text-centre bg-lightGreen py-2 px-3 rounded-[10px]  text-darkGrey font-extrabold'>Submit</a>

                                </div>
                        </div>
                        <div className='bg-black w-full h-[0.2vh]'></div>
                        <div className='w-full bg-customGrey'>
                                <div className='flex justify-between items-center w-[80vw] h-[10vh]  mx-auto text-lightGrey'>
                                        <p className='text-xs w-auto mx-auto md:text-sm md:w-1/2 lg:text-sm xl:text-base'>Copyright@2013 Domain Name - All Rights Reserved</p>
                                        <p className='text-xs text-right hidden md:text-sm md:block md:w-1/2  lg:text-sm xl:text-base'>Template By OG Templates</p>
                                </div>
                        </div>



                </div >
        )
}

export default Footer