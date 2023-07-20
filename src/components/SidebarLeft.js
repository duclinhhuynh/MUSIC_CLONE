import React from "react";
import logo from '../assets/logo.png'
import { SidebarMenu } from "../utils/menu";
import { NavLink } from "react-router-dom";

const noActive = 'py-2 px-[25px] font-bold text-[#32323D] text flex gap-[12px] items-center '
const active = 'py-2 px-[25px] font-bold text-[#0F7070] text flex gap-[12px] items-center '
const SidebarLeft = () => {
    return (
        <div className="flex flex-col bg-[#CED9D9]">
            <div className="w-full h-[70px] py-[15px] px-[25px] flex justify-center items-center">
            <img src={logo} alt="logo" className="w-[120px] h-10"></img></div>
            <div className="flex flex-col">
                {SidebarMenu.map(item => (
                    <NavLink 
                    to={item.path} 
                    key = {item.path}
                    end = {item.end}
                    className= {({isActive}) => isActive ? active : noActive}
                    >
                        {item.icons}
                        <span>{item.text}</span>
                    </NavLink>
                ) )}
            </div>
        </div>
    )        
}

export default SidebarLeft 