import React from "react";
import { assets } from "../assets/assets.js"

const Sidebar = () => {
    return(
        <div className="bg-[#003A10] min-h-screen pl-[4vw]">
            <img className="mt-5 w-[max(10vw, 100px)] hidden sm:block" src={assets.logo} alt="" />
            <img className="mt-5 w-[max(5vw, 40px)] mr-5 sm:hidden block" src={assets.logo_small} alt="" />

            <div className="flex flex-col gap-5 mt-10">
                <div className="flex item-center gap-2.5 text-gray-800 bg-white border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                    <img className="w-5 " src={assets.add_song} alt="" />
                    <p className="hidden sm:block">Add song</p>
                </div>

                <div className="flex item-center gap-2.5 text-gray-800 bg-white border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                    <img className="w-5 " src={assets.song_icon} alt="" />
                    <p className="hidden sm:block">List song</p>
                </div>

                <div className="flex item-center gap-2.5 text-gray-800 bg-white border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                    <img className="w-5 " src={assets.add_album} alt="" />
                    <p className="hidden sm:block">Add song</p>
                </div>

                <div className="flex item-center gap-2.5 text-gray-800 bg-white border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                    <img className="w-5 " src={assets.album_icon} alt="" />
                    <p className="hidden sm:block">List song</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar