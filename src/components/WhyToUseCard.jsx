

function WhyToUseCard({source,title,content,colour}){
    return (
        <div className={`${colour} mb-2 lg:mr-2 lg:w-1/3 rounded-3xl flex flex-col items-center p-4`}>
            <div>
                <img src={source} alt={title} className="w-30 mb-4" />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="text-left font-bold mb-2  text-2xl">{title}</h2>
                <p className="text-left text-black text-sm">{content}</p>
            </div>
        </div>
    )
}

export default WhyToUseCard