import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

export default function Footer() {
    return (

        <div className="bg-pallete-gray  text-pallete-blue space-y-5 py-10 px-4 md:px-16 xl:px-28 2xl:px-54 flex items-start flex-col flex-wrap">
            <h1 className=" border-b-4 border-b-pallete-blue pb-2 text-3xl md:text-4xl font-semibold mt-5">Fale Conosco</h1>
            <p className=" text-2xl">email@exemplo.com</p>
            <div className="flex flex-row space-x-5">
                <a href="https://www.instagram.com/igdp_instituto/" className=" bg-pallete-blue text-pallete-gray p-2 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                    <AiOutlineInstagram size={50}/>
                </a>
                <a href="https://www.linkedin.com/in/igdpinstituto/" className=" bg-pallete-blue text-pallete-gray p-2 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300">
                <AiOutlineLinkedin size={50}/>
                </a>
            </div>
        
        </div>
        )}