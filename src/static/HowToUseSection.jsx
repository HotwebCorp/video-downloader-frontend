import HowToUseCard from "@/components/HowToUseCard"

function HowToUseSection() {
    const howToUseCardContents = [{
        title: "Find video",
        content: "Find the video you want to downlad from the supported platforms and copy link"
    },
    {
        title: "Paste Link",
        content: "Paste the link in the box and , click on download to download best available or click on format to get available formats"
    },
    {
        title: "Download Video",
        content: "The video will start downloading , and enjoy video ofline "
    }
    ];
    return (
        <div className="flex flex-col items-center mb-10   py-4">
            <h2 className="font-bold text-lg text-center lg:text-4xl  ">How To Use</h2>
            <h3 className="text-center mb-6 text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-950 to-blue-400 bg-clip-text text-transparent">Video Downloader</h3>

            <div className="lg:flex lg:justify-around w-11/12">
                {
                    howToUseCardContents.map((value, index) => (
                        <HowToUseCard key={index} title={value.title} content={value.content} index={index} ></HowToUseCard>
                    ))}
            </div>

        </div>
    )
}

export default HowToUseSection