import { createContext } from "react";
import { VideoData } from "@/Entity/VideoData";

export const VideoDataContext = createContext<VideoData | undefined>( undefined);


