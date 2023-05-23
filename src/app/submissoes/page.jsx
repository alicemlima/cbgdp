import React from 'react';
import Subtitle from "@/src/components/Subtitle"
import TitlePage from "@/src/components/TitlePage"
import { AiOutlineDown } from 'react-icons/ai';

export default function submissoes() {
    
    return (
        <main className="h-screen">
            <TitlePage>Submissões</TitlePage>
            <div className="w-full space-y-5 text-pallete-white px-4 md:px-16 xl:px-28 2xl:px-64 pb-10 flex flex-wrap flex-col content-start ">
                <div className='w-full'>
                    <Subtitle >Temas</Subtitle>
                    <div className="grid gap-8 lg:grid-cols-2 2xl:grid-cols-3 xl:mt-12 xl:gap-12">
                    
                        <a href="" className=" w-full flex justify-between align-middle shadow-lg bg-pallete-blue p-8 rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <h1 className="text-2xl md:text-4xl font-semibold capitalize">Ecossistemas empreendedores</h1>
                            <div><AiOutlineDown size={35} /></div>
                        
                        </a>
                        <a href="" className=" w-full flex justify-between align-middle  shadow-lg bg-pallete-blue p-8 rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <h1 className="text-2xl md:text-4xl font-semibold capitalize">Transformação digital</h1>
                            <div><AiOutlineDown size={35} /></div>
                        
                        </a>
                        <a href="" className=" w-full flex justify-between align-middle  shadow-lg bg-pallete-blue p-8 rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
                            <h1 className="text-2xl md:text-4xl font-semibold capitalize">ESG e Economia Circular</h1>
                            <div><AiOutlineDown size={35} /></div>

                        </a>
                    </div>
                </div>
                
                <div>
                    <Subtitle>Datas importantes</Subtitle>
                    <div className="bg-pallete-orange text-pallete-white rounded-lg max-w-sm mt-5 text-center md:text-2xl text-xl font-black">Mais informações em breve</div>
                </div>

                <div>
                    <Subtitle>Templates</Subtitle>
                    <div className="bg-pallete-orange text-pallete-white rounded-lg max-w-sm mt-5 text-center md:text-2xl text-xl font-black">Mais informações em breve</div>
                </div>
            </div>
            
        </main>
        )
    }