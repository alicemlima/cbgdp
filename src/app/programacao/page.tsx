import React from 'react';
import Carousel from "@/src/components/Carousel"
import Subtitle from "@/src/components/Subtitle"
import TitlePage from "@/src/components/TitlePage"
import { BsFillCalendarCheckFill } from 'react-icons/bs';

export default function Programacao() {
    return (
      <main className="h-screen">
            <TitlePage>Programação</TitlePage>
            <div className="w-full space-y-10 text-pallete-medium-dark px-4 md:px-16 xl:px-28 2xl:px-54 pb-10 flex flex-col flex-wrap content-start">
                    <div className='w-full flex md:flex-row flex-col-reverse space-x-5 justify-between'>
                        <div>
                            <Subtitle>Temas a Serem Abordados</Subtitle>
                            <h2 className="text-2xl md:text-4xl font-medium"> &gt;&gt; Ecossistemas empreendedores</h2>
                            <h2 className="text-2xl md:text-4xl font-medium">&gt;&gt; Transformação digital</h2>
                            <h2 className="text-2xl md:text-4xl font-medium">&gt;&gt; ESG e Economia Circular</h2>
                        </div>
                        <div className='my-10'>
                            <a href="" className=" text-pallete-white w-full flex space-x-4 justify-between align-middle  shadow-lg bg-pallete-blue p-5 rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                                <div><BsFillCalendarCheckFill size={35} /></div>
                                <h1 className=" text-2xl lg:text-4xl font-semibold capitalize">22 a 23 de novembro de 2023</h1>                            
                            </a>
                        </div>
                    </div>
                    <div>
                        <Subtitle >Palestrantes</Subtitle>
                        <div className="bg-pallete-orange text-pallete-white rounded-lg max-w-sm mt-5 text-center md:text-2xl text-xl font-black">Mais informações em breve</div>
                    </div>

                    <div>
                        <Subtitle >Mesas redondas</Subtitle>
                        <div className="bg-pallete-orange text-pallete-white rounded-lg max-w-sm mt-5 text-center md:text-2xl text-xl font-black">Mais informações em breve</div>
                    </div>

                    <div>
                        <Subtitle >Seções temáticas</Subtitle>
                        <div className="bg-pallete-orange text-pallete-white rounded-lg max-w-sm mt-5 text-center md:text-2xl text-xl font-black">Mais informações em breve</div>
                    </div>
            </div>
      </main>
    )
  }