"use client"
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/icon-one.svg',
        heading: 'Looking for a Partner',
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',

    },
    {
        imgSrc: '/images/Work/icon-two.svg',
        heading: 'Looking for an investor',
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',

    },
    {
        imgSrc: '/images/Work/icon-three.svg',
        heading: 'Looking for a business',
        subheading: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry and this',

    },

]

const Work = () => {
    return (
        <div className={"bg-gradient-to-r from-[#034023] to-[#021c11] lg:bg-none"}>
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative' id="exchange-section">
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-offwhite text-3xl md:text-5xl font-bold mb-3'>Introduction</h3>
                    <p className='text-bluish md:text-lg font-normal leading-8'>Welcome to Pitchle! A unique and innovate social media that facilitates connections, <br /> through short video pitches of 30 seconds or up to 60 seconds.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
                        <div className='card-b scaleEffect p-8' key={i}>
                            <div className='work-img-bg  rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} className={"veranimation"} alt="arrow-bg" width={85} height={35} />
                            </div>
                            <h3 className='text-2xl text-offwhite font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-bluish text-center mt-2'>{items.subheading}</p>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Work;
