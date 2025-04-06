import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import { IoMdDownload } from "react-icons/io";
import { IoCodeDownload } from "react-icons/io5";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { isBlankOrEmpty, isValidURL, printConsole } from "@/utils/utils";
import toast from "react-hot-toast";
import { FileEdit } from "lucide-react";
function Hero({ videoData, setVideoData, setFormatLoading, conformDownload }) {
  const BASE_URL = import.meta.env.VITE_DOWNLOADME_BACKEND_BASE_URL;
  const downloadBestAPI = "api/v1/video/download?url=";
  const formatAPI = "api/v1/video/formats?url=";

  const [videoLink, setVideoLink] = useState("");
  const [startedDownload, setStartedDownload] = useState(false);
  const [gettingFormat, setGettingFormat] = useState(false);
  const [enableFormatBtn, setEnableFormatBtn] = useState(true);

  //Used to Validate The URL of the Video
  const onEnterUrl = (url) => {
    setVideoLink(url.target.value);
  };

  useEffect(() => {
    if (videoLink.includes("youtube.com") || videoLink.includes("youtu.be")) {
      setEnableFormatBtn(true);
    } else {
      setEnableFormatBtn(false);
    }
  }, [videoLink]);

  const downloadBestVideo = async () => {
    printConsole(BASE_URL);

    if (isBlankOrEmpty(videoLink)) {
      toast.error("🔗 Paste URL to continue. 🚀");
      return;
    }

    if (!isValidURL(videoLink)) {
      toast.error("🚨 Invalid URL!");
      return;
    }

    if (!confirm("Are You Sure ?")) {
      return;
    }

    toast.promise(
      (async () => {
        printConsole(startedDownload);

        let fileName = "video";
        const downloadAPI = BASE_URL + downloadBestAPI + videoLink;
        const response = await fetch(downloadAPI, { method: "GET" });

        const contentDisposition = response.headers.get("content-disposition");

        if (contentDisposition) {
          const match = contentDisposition.match(/filename\*=UTF-8''([^;]+)/i);
          if (match && match[1]) {
            fileName = decodeURIComponent(match[1]);
          }
        }

        printConsole("FileName----" + fileName);

        const video = await response.blob();
        const url = window.URL.createObjectURL(video);

        // Creating a download link
        const a = document.createElement("a");
        a.href = url;
        a.download = fileName;
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
    if (isBlankOrEmpty(videoLink)) {
      toast.error(
        "🔗Oops! No link, no launch! Drop a valid URL to get started. 🚀"
      );
      return;
    }

    if (!isValidURL(videoLink)) {
      toast.error(
        "🚨 **Invalid URL!** Please enter a valid video link to proceed. 🔗✅"
      );
      return;
    }

    if (!confirm("Are You Sure ?")) {
      return;
    }

    setFormatLoading(true);

    toast.promise(
      async () => {
        try {
          const getFormatAPI = BASE_URL + formatAPI + videoLink;
          printConsole(getFormatAPI);
          printConsole(BASE_URL);
          const response = await fetch(getFormatAPI, { method: "GET" });

          printConsole(response.headers);
          printConsole(response.status);

          for (let [key, value] of response.headers.entries()) {
            console.log(`${key}: ${value}`);
          }

          const data = await response.json();

          printConsole(data);

          setVideoData(data);
        } catch (error) {
          printConsole(error);
          throw new Error(error);
        } finally {
          setFormatLoading(false);
        }
      },
      {
        loading: "⏳ Fetching video formats...",
        success: " Formats ready! 🎉",
        error: "❌ Failed to fetch formats. Please try again!",
      }
    );
  };

  return (
    <div className="flex flex-col items-center  mb-10 mt-22 lg:h-[80vh]  ">
      <div className=" bg-gradient-to-br to-blue-300 to bg-purple-300 w-11/12  flex flex-col justify-center items-center  py-10 px-2 rounded-3xl relative shadow-2xl lg:h-11/12 ">
        <h1 className=" font-extrabold text-4xl md:text-6xl text-center ">
          All Video
        </h1>
        <h1 className=" mb-4 font-extrabold text-4xl md:text-6xl text-center bg-gradient-to-r from-blue-700 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
          Downloader
        </h1>
        <p className="text-center text-md mb-6 font-semibold text-sm sm:max-w-2/5">
          🔥 Unlimited & Hassle-Free! 🚀 Instantly download videos & audio from
          any platform – fast, easy, and seamless! 🎬🎵
        </p>

        <div className="w-11/12 ">
          <SearchBar onEnterUrl={onEnterUrl}></SearchBar>
        </div>

        {/* Download and Format Buttons  */}
        <div className="flex flex-row absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2  space-x-4">
          <Button
            className="rounded-4xl w-40 mb-2 h-16 bg-blue-700  font-bold hover:bg-indigo-700 "
            onClick={downloadBestVideo}
          >
            <IoMdDownload /> Download Best
          </Button>

          {enableFormatBtn && (
            <Button
              className="rounded-4xl  w-40 h-15 bg-blue-400 hover:bg-indigo-500 text-black font-bold hover:text-white "
              onClick={getFormats}
            >
              <IoCodeDownload /> Get Formats
            </Button>
          )}
        </div>
      </div>

      <div className="bg-gray-800 text-gray-300   w-65 pt-10 pb-4 rounded-b-3xl lg:w-1/3 shadow-2xl">
        <div className="flex flex-row items-center justify-around">
          <p className="text-sm mr-2 ">Supported Platform : </p>

          <div className="flex flex-row items-center">
            <FaInstagram className="mr-2 " />
            <FaFacebookF className="mr-2 " />
            <FaYoutube className="mr-2" />
            <FaPlus className="text-xs" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
