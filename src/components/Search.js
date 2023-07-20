import React from "react";
import icons from "../utils/icons";

const {BsSearch} = icons
const Search = () => {
    return (
        <div className="w-full flex items-center ">
            <span className="h-10 pl-4 bg-[#DDE4E4] rounded-l-[20px] flex items-center ">
                <BsSearch size={20}/>
            </span>
            <input type="text"
            className='outline-none px-4 py-2 bg-[#DDE4E4] w-full rounded-r-[20px] h-10 text-gray-700'
            placeholder="Search">
            </input>
        </div>
    )
}
export default Search