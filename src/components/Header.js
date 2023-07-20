import React from "react";
import icons from "../utils/icons";
import { Search } from "./";
const {BsArrowRight,BsArrowLeft} = icons
const Header = () => {
    return (
        <div className="flex justify-between w-full items-center">
            <div className="flex gap-6 w-full">
                <div className="flex gap-6 text-gray-400">
                    <span><BsArrowLeft size={20}/></span>
                    <span><BsArrowRight size={20}/></span>
                </div>
                <div className="w-1/2">
                    <Search/>
                </div>
            </div>
            <div>
                dang nhap
            </div>
        </div>
    )
}

export default Header