
function VideoPlayer({videoLink}){
    return(
        <div>
            {videoLink?(
                <iframe width="560" height="315" 
                src={videoLink} title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            ):(<div></div>)}
        </div>
    )
}

export default VideoPlayer 