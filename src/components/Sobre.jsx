import Image from "next/image";
import Link from "next/link";

export default function Sobre() {
    return (
        <section id="institucional" className="text-pallete-medium-dark px-4 md:px-16 xl:px-28 2xl:px-60 my-20 ">
           <h1 className=" border-b-4 border-b-pallete-orange pb-2 text-pallete-orange text-4xl md:text-5xl font-semibold mb-5">Sobre o CBGDP</h1>
           <div className="md:grid lg:grid-cols-2 gap-7">
                <div> 
                <span className=" text-pallete-blue font-bold lg:mr-10 lg:mb-0 mb-10 text-2xl lg:text-3xl">O Congresso Brasileiro de Inovação e Gestão do Desenvolvimento de Produtos (CBGDP)</span> 
                    <p className="text-justify lg:mr-10 lg:mb-0 mb-10 text-xl lg:text-2xl">Acontece a cada dois desde 1999 com o objetivo de incentivar o compartilhamento de conhecimentos e experiências das pesquisas sobre o desenvolvimento de produtos realizadas por grupos de pesquisa brasileiros. Ele acontece nos anos ímpares, sendo sediado pelos mais renomados centros de pesquisa em desenvolvimento de produtos do Brasil. Este ano ocorrerá na cidade de Natal no Rio Grande do Norte.</p>
                </div>
                <div className="absolut bg-pallete-orange rounded-tl-[70%] h-[100%] 2xl:h-[70%] w-fit">
                        <img className="relative rounded-tl-[70%] h-[100%] left-4 top-4" src={"/people.jpg"} alt={""} />
                </div>
            </div>

        </section>
        )}
        