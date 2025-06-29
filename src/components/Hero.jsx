import React from "react";
import { HERO_CONTENT } from "../constraints";
import profile from "../assets/profile.jpeg"

export default function Hero() {
    return (
        <>
            <div className=" flex flex-wrap m-8">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-11 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Deepak</h1>
                        <span className="text-3xl mb-3 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Full Stack Developer </span>
                        <p className=" my-2 font-mono text-sm tracking-tight">{HERO_CONTENT}</p>
                    </div>
                </div>  
                <div className=" m-11 lg:m-15 lg:w-1/3 lg:p-10">
                    <div className="flex justify-center ">
                        <img src={profile} alt="img" className="rounded-xl"></img>
                    </div>
                </div>
            </div>
            
        </>
    )
}