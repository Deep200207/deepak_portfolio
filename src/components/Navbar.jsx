import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

function Navbar() {
    return (
        <nav className='mb-15 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center text-3xl'>
                <p className=' m-8  text-4xl'>DP</p>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-4xl text-white'>
                <FaLinkedin className="cursor-pointer hover:bg-blue-500 p-1 rounded-2xl "onClick={()=>window.open("https://www.linkedin.com/in/deepak-roy-18547a296/","_blank")} />
                <SiLeetcode className="cursor-pointer hover:bg-orange-500 p-1 rounded-2xl "onClick={()=>window.open("https://leetcode.com/u/royannu149/","_blank")} />
                <FaGithub className="cursor-pointer hover:bg-cyan-700 p-1 rounded-2xl" onClick={()=>window.open("https://github.com/Deep200207","_blank")}/>
            </div>

        </nav>
    )
}

export default Navbar