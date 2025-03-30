

function WhyToUseCard({ source, title, content, colour }) {
    return (
        <div className={`${colour} mb-2 lg:mr-2 w-full h-70 rounded-3xl flex flex-col items-center p-4`}>
            <div>
                <img src={source} alt={title} className="w-20 mb-4" />
            </div>
            <div className="flex flex-col items-center">
                <h2 className=" font-bold mb-2  text-2xl text-center">{title}</h2>
                <p className="  text-gray-800 text-sm max-w-3/4 text-center font-semibold  ">{content}</p>
            </div>
        </div>
    )
}

export default WhyToUseCard