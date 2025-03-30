



function HowToUseCard({ title, content, index }) {

    return (
        <div className="flex text-gray-100 p-2 bg-gradient-to-r from-blue-600 to-blue-400 mb-2 mr-2 rounded-2xl lg:w-1/3 h-50 hover:shadow-2xl">
            <div className="p-2 pr-4 flex justify-center  items-center border-r-2 border-white">
                <p className="font-bold text-2xl">{index + 1}</p>
            </div>
            <div className="pl-4 flex  flex-col justify-center align-middle">
                <h2 className="text-2xl font-bold mb-1 ">{title}</h2>
                <p className="text-sm">{content}</p>
            </div>
        </div>
    )
}

export default HowToUseCard