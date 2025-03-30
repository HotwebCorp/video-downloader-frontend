import { isValidURL, printConsole } from "@/utils/utils"

export const BASE_URL = "http://localhost:8080/";
// export const BASE_URL = "https://vd.downloadme.in/"
export const PATH_SUFIX = "api/v1/"

export const getFormatsService = async (url) => {

    if (isValidURL(url)) {

        const GET_FORMAT_API = BASE_URL + PATH_SUFIX + "video/formats?url=" + url;

        const response = await fetch(GET_FORMAT_API, { method: "GET" });

        const data = await response.json();

        return data;

    } else {

    }

}


export const downloadSelectedFormat = async (formatId, videoUrl) => {
    printConsole("working on downloadSelectedFormat URL: " + videoUrl)
    if (formatId && videoUrl) {
        const DOWNLOAD_SELECTED_FORMAT_API = BASE_URL + PATH_SUFIX + "video/download/format?url=" + videoUrl + "formatId=" + formatId;
        printConsole(DOWNLOAD_SELECTED_FORMAT_API);

        const response = fetch(DOWNLOAD_SELECTED_FORMAT_API, { method: "GET" });

        if (!response.ok) {
            printConsole("ERROR in downloadSelectedFormat");
            throw console.error();
        }

        const blob = await response.blob();


    }
}