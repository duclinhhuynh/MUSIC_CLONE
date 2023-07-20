import { HiChartPie } from "react-icons/hi"
import icons from "./icons"

const { TbPlaystationCircle, HiOutlineHome, PiRadio, BiNetworkChart, RiUserFollowLine} = icons
// Object sidebarMenu
export const SidebarMenu = [
    {
        path: 'mymusic',
        text: 'Cá nhân',
        icons: <HiOutlineHome size = {24}/>
    }, 
    {
        path: '',
        text: 'Khám phá',
        end: true,
        icons: <TbPlaystationCircle size = {24}/>
    }, 
    {
        path: 'zing-chart',
        text: '#zingchart',
        icons: <BiNetworkChart size = {24}/>
    }, 
    {
        path: 'follow',
        text: 'Theo dõi',
        icons: <RiUserFollowLine size = {24}/>
    }, 
    {
        path: 'radio',
        text: 'Radio',
        icons: <PiRadio size = {24}/>
    }
  
]