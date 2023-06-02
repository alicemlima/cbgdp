import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <div className=" relative bottom-0 bg-pallete-gray border-t-2 border-t-pallete-blue text-pallete-blue space-y-5 py-10 px-4 md:px-16 xl:px-28 2xl:px-54 flex flex-col md:flex-row items-center md:space-x-3 justify-evenly">
     <div className=" space-y-5">
        <h1 className="border-b-4 border-b-pallete-blue pb-2 text-xl md:text-2xl font-semibold mt-5">
          Fale Conosco
        </h1>
        <p className="text-xl">E-mail: diretoria.igdp@gmail.com</p>
        <div className="flex flex-row space-x-5">
          <a
            href="https://www.instagram.com/igdp_instituto/"
            className="bg-pallete-blue text-pallete-gray p-2 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <AiOutlineInstagram size={50} />
          </a>
          <a
            href="https://www.linkedin.com/in/igdpinstituto/"
            className="bg-pallete-blue text-pallete-gray p-2 rounded-full transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <AiOutlineLinkedin size={50} />
          </a>
        </div>
      </div>
      <div className="bg-pallete-blue text-pallete-white rounded-lg max-w-sm p-3 shadow-lg text-center md:text-xl text-lg font-black">Inscrições começam em 12/06</div>

    </div>
  );
}