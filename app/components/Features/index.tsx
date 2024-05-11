"use client"
import Image from "next/image";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
} from "@material-tailwind/react";

interface featuresdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const featuresdata: featuresdata[] = [
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Video Pitches',
        subheading: 'Capture attention with concise 30-second (free) or 60-second (paid) pitches. Customize backgrounds for impact',
    },
    {
        imgSrc: '/images/Features/featureTwo.svg',
        heading: 'Subscription Plans',
        subheading: 'Access premium features through one-time, monthly, or annual plans. Unlock benefits like profile viewing and direct messaging.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Privacy and Security',
        subheading: 'Safeguard your data with robust encryption. Manage privacy settings for profile and pitch visibility.',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Global Accessibility',
        subheading: ' Connect worldwide with partners, investors, and buyers. Explore opportunities across borders.',
    },

]

const Features = () => {
    return (
        <div className="mx-auto max-w-7xl my-0 md:my-40 pt-36 px-2 relative bg-gradient-to-r from-[#034023] to-[#021c11] lg:bg-none" id="features-section">
            <div className="radial-bg hidden lg:block"></div>
            <div className="grid lg:grid-cols-2 gap-y-4">
                {/* Column-1 */}
                <div>
                    <h3 className="feature-font text-lg font-semibold mb-4 text-center md:text-start">FEATURES</h3>
                    <h2 className="font-normal text-bluish  text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">Key Features and Benefits:</h2>
                    <p className="lg:text-lg font-normal text-bluish text-center md:text-start">Pitchle offers engaging video pitches and flexible subscription plans for global networking, all backed by strong privacy measures and dedicated customer support.</p>
                    <div className="px-8 mt-10">
                        <Timeline>
                            <TimelineItem color="white" >
                                <TimelineConnector />
                                <TimelineHeader className="h-3">
                                    <TimelineIcon  className={"bg-white"} />
                                    <Typography variant="h6" color="white" className="leading-none">
                                        Effortless Video Sharing
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody className="pb-8">
                                    <Typography variant="small" className="font-normal font-normal text-bluish ">
                                        Seamlessly upload large files and enjoy unlimited storage options, fostering connections with a global audience hassle-free.
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineConnector />
                                <TimelineHeader className="h-3">
                                    <TimelineIcon className={"bg-white"}/>
                                    <Typography variant="h6" color="white" className="leading-none">
                                        Limitless Networking
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody className="pb-8">
                                    <Typography variant="small" className="font-normal font-normal text-bluish ">
                                        The key to more success is to have a lot of pillows. Put it this way, it took me
                                        twenty five years to get these plants, twenty five years of blood. Forge connections without boundaries through extensive storage capabilities and unrestricted file sharing, enhancing your reach across the globe.
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineHeader className="h-3">
                                    <TimelineIcon  className={"bg-white"}/>
                                    <Typography variant="h6" color="white" className="leading-none">
                                        Streamlined Connectivity
                                    </Typography>
                                </TimelineHeader>
                                <TimelineBody>
                                    <Typography variant="small"  className="font-normal font-normal text-bluish ">
                                        Experience frictionless networking with our platform's expansive storage and seamless file sharing features, facilitating effortless connections worldwide.
                                    </Typography>
                                </TimelineBody>
                            </TimelineItem>
                        </Timeline>
                    </div>
                </div>
                {/* Column-2 */}
                <div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 px-4 md:px-0 mt-4 lg:mt-0 gap-y-4 gap-x-2">
                        {featuresdata.map((items, i) => (
                            <div className="bg-blue scaleEffect py-10 pr-12 pl-6 max-w-[350px] rounded-lg" key={i}>
                                <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={24} height={30} />
                                </div>
                                <h5 className="font-normal text-bluish  text-lg font-medium mb-4">{items.heading}</h5>
                                <p className="text-lightblue text-sm font-normal">{items.subheading}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
