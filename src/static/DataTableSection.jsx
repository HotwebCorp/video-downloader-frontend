import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MdDownloadForOffline } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { MdAudiotrack } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { convertSize, printConsole } from "@/utils/utils";
import { useSonner } from "sonner";
import { BASE_URL, downloadSelectedFormat, PATH_SUFIX } from "@/services/DownloaderServices";
import { Skeleton } from "@/components/ui/skeleton";
import toast from "react-hot-toast";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";


function DataTableSection({ formats, setFormatId, videoData, formatLoading }) {

    const [selectedType, setSelectedType] = useState("video");
    const [audioFormats, setAudioFormats] = useState([]);
    const [videoFormats, setVideoFormats] = useState([]);
    const [localFormatId, setLocalFormatId] = useState();
    const [videoUrl, setVideoUrl] = useState();
    const [videoTitle, setVideoTitle] = useState();
    const [videoOnly, setVideoOnly] = useState(false);

    useEffect(() => {
        if (videoData?.formats) {
            setVideoUrl(videoData.originalUrl);
            setVideoTitle(videoData.title);
            setAudioFormats(videoData?.formats.filter(format => format.resolution === "audio only"));
            setVideoFormats(videoData?.formats.filter(format => format.resolution != "audio only"));
        }
    }, [videoData]);

    useEffect(() => {
        printConsole(formatLoading);
        printConsole("format Loading")
    }, [formatLoading]);


    const selectType = (type) => {
        console.log(type)
        setSelectedType(type);
        printConsole(selectedType)
    }

    const downloadFormat = async (formatId) => {

        toast.promise(async () => {

            try {

                setLocalFormatId(formatId);
                let fileName = "video.mp4";
                const DOWNLOAD_SELECTED_FORMAT_API = BASE_URL + PATH_SUFIX + "video/download/format?url=" + videoUrl + "&&formatId=" + formatId;
                const response = await fetch(DOWNLOAD_SELECTED_FORMAT_API, { method: "GET" });


                const contentDisposition = response.headers.get("content-disposition");

                if (contentDisposition) {
                    const match = contentDisposition.match(/filename="?([^"]+)"?/);
                    if (match && match[1]) {
                        printConsole(match)
                        fileName = match[1];
                    }
                }

                const video = await response.blob();
                const url = window.URL.createObjectURL(video);


                const a = document.createElement("a");
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();

                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);



            } catch (error) {

            } finally {

            }

        }, {
            loading: "Downloading video...",
            success: "Download complete! 🎉",
            error: "Failed to download video. Please try again.",

        })

        // const contentDisposition = response.headers.get("Content-Disposition");

        // const match = contentDisposition.match(/filename\*?=(?:UTF-8'')?"?([^;"]+)"?/);
        // fileName = match ? decodeURIComponent(match[1]) : "video.mp4";

        // printConsole(contentDisposition)
        // printConsole(match);
        // printConsole(fileName);


    }


    return (

        (videoData || formatLoading) &&

        (

            <div className=" flex justify-center">
                <div className="flex justify-center flex-col md:w-3/4 w-full">

                    <div className="flex flex-row p-2 align-middle w-fit rounded-2xl bg-blue-100 ">
                        <div className="mr-1">
                            <Button className={` text-black ${selectedType == "video" ? "bg-blue-200 font-bold" : "bg-blue-100"}`} onClick={() => selectType("video")}>
                                <FaVideo className="mr-0.5" />
                                VIDEO
                            </Button>
                        </div>
                        <div>
                            <Button className={`text-black mr-1 ${selectedType == "audio" ? "bg-blue-200 font-bold" : "bg-blue-100"}`} onClick={() => selectType("audio")}>
                                <MdAudiotrack className="mr-0.5" />
                                AUDIO
                            </Button>
                        </div>

                        <div className=" flex flex- items-center">
                            <Switch className="mr-1" checked={videoOnly} onCheckedChange={setVideoOnly} />
                            <Label className={` ${videoOnly ? "font-bold" : ""}`} >Video Only</Label>
                        </div>

                    </div>

                    <div className="" >

                        <Table className="text-center" >
                            <TableHeader >
                                <TableRow >
                                    <TableHead className="text-center">FORMAT</TableHead>
                                    <TableHead className="text-center">QUALITY</TableHead>
                                    <TableHead className="text-center">SIZE</TableHead>
                                    <TableHead className="text-center">ACTION</TableHead>
                                </TableRow>
                            </TableHeader>

                            {
                                formatLoading ?

                                    <TableBody>
                                        <TableRow>
                                            <TableCell>
                                                <Skeleton className="w-full h-[30px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="w-full h-[30px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="w-full h-[30px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="w-full h-[30px]" />
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>
                                                <Skeleton className="w-full h-[30px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="w-full h-[30px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="w-full h-[30px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="w-full h-[30px]" />
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>
                                                <Skeleton className="w-full h-[30px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="w-full h-[30px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="w-full h-[30px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="w-full h-[30px]" />
                                            </TableCell>
                                        </TableRow>

                                        <TableRow>
                                            <TableCell>
                                                <Skeleton className="w-full h-[30px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="w-full h-[30px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="w-full h-[30px]" />
                                            </TableCell>
                                            <TableCell>
                                                <Skeleton className="w-full h-[30px]" />
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>

                                    :

                                    selectedType === 'video' ?

                                        <TableBody>
                                            {
                                                videoFormats.map((format, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell>{format.ext}</TableCell>
                                                        <TableCell>{format.formatNote}</TableCell>
                                                        <TableCell>{convertSize(format.fileSize)}</TableCell>
                                                        <TableCell>
                                                            <Button onClick={() => downloadFormat(format.formatId)} >
                                                                <MdDownloadForOffline />
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>

                                        :

                                        <TableBody>
                                            {
                                                audioFormats.map((format, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell>{format.ext}</TableCell>
                                                        <TableCell>{format.formatNote}</TableCell>
                                                        <TableCell>{convertSize(format.fileSize)}</TableCell>
                                                        <TableCell>
                                                            <Button onClick={() => downloadFormat(format.formatId)}>
                                                                <MdDownloadForOffline />
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>
                            }

                        </Table>
                    </div>
                </div >
            </div>
        )
    )
}

export default DataTableSection