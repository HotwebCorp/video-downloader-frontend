import { useState } from "react";
import { Input } from "./ui/input"
import { FaLink } from "react-icons/fa6";


function SearchBar({onEnterUrl}){

     

   return (
        <div className="w-full p-1.5 bg-white rounded-4xl relative mb-4 h-15 ">
           <FaLink className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
           <Input className="bg-blue-100 rounded-4xl pl-8 h-full placeholder:text-md"  type="text"
            onChange={onEnterUrl} placeholder="Paste Your Link Here . . . "> 
           </Input>
        </div>
    )

}

export default SearchBar