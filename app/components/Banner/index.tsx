"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';


const Banner = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className='bg-gradient-to-r from-[#034023] to-[#021c11] lg:bg-none relative' id="home-section">
            <div className='arrowOne veranimation'></div>
            <div className='radial-banner hidden lg:block'></div>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="1YyAzVmP9xQ" onClose={() => setOpen(false)} />

            <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">

                <div className='height-work'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
                        <div className='arrowTwo veranimation'></div>
                        <div className='col-span-7'>
                            <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px md:text-start text-center">
                                FULLY-BUSINESS  <br /> ORIENTED APP
                            </h1>
                            <p className='text-white md:text-lg font-normal mb-10 md:text-start text-center'>Join our vibrant community and revolutionize <br /> the way you do business</p>
                            <div className='flex align-middle justify-center md:justify-start'>
                                <button className='text-xl font-semibold text-white lg:py-4 py-3 lg:px-6 px-4 lg:px-12 navbutton scaleEffect mr-6'>Get Started</button>
                                <button onClick={() => setOpen(true)} className='bg-transparent flex justify-center items-center text-white'><Image src={'/images/Banner/playbutton.svg'} alt="button-image" className='mr-3' width={47} height={47} />How it work</button>
                            </div>
                        </div>

                        <div className='col-span-5 lg:-m-48'>
                            <div className='arrowThree horianimation'></div>
                            <div className='arrowFour horianimation'></div>
                            <div className='arrowFive horianimation'></div>
                            <div className="dotted-circle mt-8 ms-12 md:ms-28 lg:ms-32"></div>
                            <Image src="/images/Banner/banner-2.png" alt="nothing" className={"-mt-5 lg:-mt-10"} width={1013} height={760} />
                            <div className='arrowSix horianimation'></div>
                            <div className='arrowSeven horianimation'></div>
                            <div className='arrowEight horianimation'></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;
