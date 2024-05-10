import Image from "next/image";


const Trade = () => {
    return (
        <div className="mx-auto max-w-7xl mt-48 mb-16 px-2 relative">
            <div className="radial-bgone hidden lg:block"></div>

            <div className="grid lg:grid-cols-2 gap-x-14">
                {/* Column-1 */}
               <div>
                   <div className={"horianimation"}>
                       <Image src={'/images/Trade/mac-2.png'} alt="macBook-image" width={700} height={512} />
                   </div>
                   <div>
                       <Image src={'/images/Trade/bg.png'} alt="macBook-image" width={700} height={512} />
                   </div>
               </div>

                {/* Column-2 */}

                <div>
                    <h3 className="text-3xl lg:text-5xl font-semibold text-offwhite mb-6 text-center sm:text-start">Pitchle Anywhere <br /> Any time</h3>
                    <p className="lg:text-lg font-normal text-lightblue mb-16 text-center sm:text-start">Creating and sharing easy professional pitches. 		   Some tools you will easily use are: Visual timer, watermark, app messaging, template for pitches, music background, changing location, pitches categorized by sectors and location.</p>
                    <div className="flex justify-between">
                        <Image src={'/images/Trade/mac.svg'} className={"scaleEffect"} alt="macOS-image" width={61} height={105} />
                        <div className="verticalLine"></div>
                        <Image src={'/images/Trade/appstore.svg'} className={"scaleEffect"} alt="appstore-image" width={80} height={105} />
                        <div className="verticalLine"></div>
                        <Image src={'/images/Trade/windows.svg'} className={"scaleEffect"} alt="windows-image" width={80} height={105} />
                        <div className="verticalLine"></div>
                        <Image src={'/images/Trade/android.svg'} className={"scaleEffect"} alt="android-image" width={71} height={105} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade;
