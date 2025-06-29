import { ABOUT_ME } from "../constraints";

function About() {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h1 className="my-15 text-center text-4xl">About
                <span className="text-neutral-400"> Me</span> </h1>
            <div className="w-full lg:px-25">
                <p className="text-sm font-mono">{ABOUT_ME}</p>
                <div className="flex justify-center items-center">
                    <a href="/deepakcv.pdf" target="_blank" >
                        <button className="text-xl text-black font-medium  my-5 bg-neutral-200 py-1 px-2 rounded-2xl">Download Resume</button>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default About;