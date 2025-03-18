
/** 
 Here its just validating the url is in perfect format we need to ValidityState
  1. the url is from supported Platform 
  2. Youtube
  3. Instagram
  4. Facebook so on
  */
export const isValidURL = (url) =>{
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/;
    const isTrue = urlPattern.test(url);

    console.log(url+":"+isTrue)

    return isTrue
}

/** 
 1 KB = 1024 Bytes 
 1 MB = 1024 KB
 1 GB = 1024 MB
 1 TB = 1024 GB 
 */
export function  convertSize(size){
    return (size/(1024*1024)).toFixed(2)+" MB";
}

export function printConsole(...msg){
    console.log(msg);
}