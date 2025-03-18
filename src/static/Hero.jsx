import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { IoMdDownload } from "react-icons/io";
import { IoCodeDownload } from "react-icons/io5";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { VideoData } from "@/Entity/VideoData";
import { isValidURL, printConsole } from "@/utils/utils";
import { BASE_URL, getFormatsService } from "@/services/DownloaderServices";
import toast from "react-hot-toast";

function Hero({ videoData, setVideoData, setFormatLoading }) {

    const downloadBestAPI = "api/v1/video/download?url=";
    const formatAPI = "api/v1/video/formats?url="

    const [videoLink, setVideoLink] = useState("");
    const [startedDownload, setStartedDownload] = useState(false);
    const [gettingFormat, setGettingFormat] = useState(false);

    //Used to Validate The URL of the Video

    const onEnterUrl = (url) => {
        setVideoLink(url.target.value);
        console.log(videoLink)
    }

    useEffect(() => {

    }, [startedDownload]);


    const downloadBestVideo = async () => {

        if (!isValidURL(videoLink)) {
            toast.error("🚨 **Invalid URL!** Please enter a valid video link to proceed. 🔗✅");
            return;
        }

        toast.promise(
            (async () => {
                printConsole(startedDownload);

                const downloadAPI = BASE_URL + downloadBestAPI + videoLink;
                const response = await fetch(downloadAPI, { method: "GET" });

                if (!response.ok) {
                    throw new Error("Failed to fetch video");
                }
                const video = await response.blob();
                const url = window.URL.createObjectURL(video);

                // Creating a download link
                const a = document.createElement("a");
                a.href = url;
                a.download = "video.mp4";
                document.body.appendChild(a);
                a.click();

                // Clean up
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
                setStartedDownload(false);
                printConsole(startedDownload);
            })(),
            {
                loading: "Getting video...",
                success: "Download complete! 🎉",
                error: "Failed to download video. Please try again.",
            }
        );
    };


    const getFormats = async () => {
        setFormatLoading(true);
        if (!isValidURL(videoLink)) {
            toast.error("🚨 **Invalid URL!** Please enter a valid video link to proceed. 🔗✅");
            return;
        }

        toast.promise(async () => {

            try {
                const getFormatAPI = BASE_URL + formatAPI + videoLink;
                const response = await fetch(getFormatAPI, { method: "GET" });

                printConsole(response.headers);

                for (let [key, value] of response.headers.entries()) {
                    console.log(`${key}: ${value}`);
                }

                const data = await response.json();

                setVideoData(data);

            } catch (error) {
                toast.error(error);
            } finally {
                setFormatLoading(false);
            }
        }
            ,
            {
                loading: "⏳ Fetching video formats...",
                success: "✅ Formats ready! 🎉",
                error: "❌ Failed to fetch formats. Please try again!",
            }
        )

    }



    return (
        <div className="flex flex-col items-center mb-5   ">
            <div className=" bg-blue-100  flex flex-col items-center md:w-3/4 py-10 px-2 rounded-3xl relative">
                <h1 className=" font-extrabold text-4xl md:text-6xl text-center ">All Video</h1>
                <h1 className=" mb-4 font-extrabold text-4xl md:text-6xl text-center bg-gradient-to-r from-blue-700 to-blue-300 bg-clip-text text-transparent">Downloader</h1>
                <p className="text-center text-md mb-5 font-semibold md:max-w-2/5">🔥 Unlimited & Hassle-Free! 🚀 Instantly download videos & audio from any platform – fast, easy, and seamless! 🎬🎵</p>

                <div className="w-5/6">
                    <SearchBar onEnterUrl={onEnterUrl}  ></SearchBar>
                </div>


                {/* Download and Format Buttons  */}
                <div className="flex flex-row absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2  space-x-4">
                    <Button className="rounded-4xl w-40 mb-2 h-16 bg-blue-700  font-bold " onClick={downloadBestVideo}>
                        <IoMdDownload /> Download Best
                    </Button>

                    <Button className="rounded-4xl w-40 h-15 bg-blue-300 text-black font-bold hover:text-white " onClick={getFormats}>
                        <IoCodeDownload /> Get Formats
                    </Button>
                </div>
            </div>

            <div className="bg-gray-800 text-gray-300 w-80 pt-10 pb-4 rounded-b-3xl lg:w-1/3" >
                <div className="flex flex-row items-center justify-around">
                    <p className="text-sm mr-2">Supported Platform : </p>

                    <div className="flex flex-row items-center">
                        <FaInstagram className="mr-2 " />
                        <FaFacebookF className="mr-2 " />
                        <FaYoutube className="mr-2" />
                        <FaPlus className="text-xs" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero;