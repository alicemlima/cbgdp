import React from 'react';
import Carousel from "@/src/components/Carousel"
import Subtitle from "@/src/components/Subtitle"
import TitlePage from "@/src/components/TitlePage"

export default function Local() {

    const carouselItems = [
        { url: '/people.jpg' },
        { url: '/natal.webp' },
        { url: '/people.jpg' },
      ];
    return (
      <main className="h-screen">
            <TitlePage>Local</TitlePage>
            <div className="w-full text-pallete-medium-dark px-4 md:px-16 xl:px-28 2xl:px-54 pb-10 flex flex-wrap content-start">
                <div>
                    <Subtitle>Instituto Metrópole Digital</Subtitle>
                    <div className=" min-h-[30vh] lg:grid lg:grid-cols-2 lg:gap-20 ">
                        
                        <div>
                            <p  className="text-justify mb-10 md:text-xl">O Instituto Metrópole Digital (IMD) é uma Unidade Acadêmica Especializada da Universidade Federal do Rio Grande do Norte (UFRN), com um perfil diferenciado da maioria dos centros acadêmicos e departamentos das universidades federais brasileiras.</p>
                            <Carousel children={carouselItems}></Carousel>
                        </div> 

                        <div className='h-full w-full my-10 lg:mt-0' >  
                            <p  className="text-justify mb-10 md:text-xl">Esse perfil alinha-se com sua missão de fomentar a criação de um Polo Tecnológico em Tecnologia da Informação (TI) no estado do Rio Grande do Norte, abrangendo iniciativas dos setores público, privado e acadêmico, a base para a sua estrutura organizacional.</p>
    
                            <iframe
                                title="Digital Metropolis Institute"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.106207113763!2d-35.2054712!3d-5.8321399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff75c341eaaf%3A0x9e690237eaddaf9a!2sDigital%20Metropolis%20Institute!5e0!3m2!1sen!2sus!4v1621003773130!5m2!1sen!2sus"
                                className='min-h-[70%] w-full'           
                                loading="lazy"
                            />

                        </div>
                        
                       
                    </div>
                    <Subtitle >Hospedagem e Turismo</Subtitle>
                    <div className="bg-pallete-orange text-pallete-white rounded-lg max-w-sm mt-5 text-center md:text-2xl text-xl font-black">Mais informações em breve</div>

                </div>
            </div>
      </main>
    )
  }