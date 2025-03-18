import WhyToUseCard from "@/components/WhyToUseCard";
import img from "../assets/react.svg";
import fastIcon from "../assets/fast.svg"
import highQualityIcon from"../assets/high quality.svg"
import freeIcon from "../assets/free.svg"

function WhyToUseSection(){

 const whyToUseContents = [{
        title:"Fast & Easy Download",
        source:fastIcon,
        content:"Our platform offers a user-friendly interface with a simple copy-paste download process. Whether it's YouTube, Instagram, Facebook, or any other platform, grab your videos in just a few clicks!",
        colour:"bg-[#F2D163]"
 },
 {
        title:"High-Quality Video & Audio Download",
        source:highQualityIcon,
        content:"Choose from a wide range of formats and resolutions, including MP4, MP3, HD, and even 4K. Enjoy your videos and music offline without compromising on quality.",
        colour:"bg-[#EC513B]"
 },
 {
        title:"Completely Free & No Limits",
        source:freeIcon,
        content:" Download as many videos as you want, without any subscription or hidden fees. Our service is 100% free and doesn’t limit the number of downloads",
        colour:"bg-[#FEB0E1]"
 }
];
return (
        <div>
                <h2 className="font-bold text-lg text-center lg:text-4xl ">Why To Use</h2>
                <h3 className="text-3xl lg:text-5xl mb-4 font-extrabold text-center bg-gradient-to-r from-blue-950 to to-blue-300 bg-clip-text text-transparent">Download Me</h3>
                <div className="lg:flex">
                {
                        whyToUseContents.map((value,index) => (
                                <WhyToUseCard key={index} colour={value.colour} title={value.title} source={value.source} content={value.content}></WhyToUseCard>
                        ))
                }
                </div>
                
        </div>
 )
}

export default WhyToUseSection

