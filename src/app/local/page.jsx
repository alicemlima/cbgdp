import React from 'react';
import Carousel from "@/src/components/Carousel"
import Subtitle from "@/src/components/Subtitle"
import TitlePage from "@/src/components/TitlePage"
import BodyText from '@/src/components/BodyText';

export default function Local() {

    const carouselItems = [
        { url: '/people.jpg' },
        { url: '/natal.webp' },
        { url: '/people.jpg' },
      ];
    return (
      <main className="h-screen">
            <TitlePage>Local</TitlePage>
            <div className="w-full h-auto text-pallete-medium-dark px-4 md:px-16 xl:px-28 2xl:px-64 pb-10 flex flex-wrap content-start">
                <div>
                    <Subtitle>Instituto Metrópole Digital</Subtitle>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-20 ">
                        
                        <div>
                            <p  className="text-justify mb-10 md:text-xl">O Instituto Metrópole Digital (IMD) é uma Unidade Acadêmica Especializada da Universidade Federal do Rio Grande do Norte (UFRN), com um perfil diferenciado da maioria dos centros acadêmicos e departamentos das universidades federais brasileiras.</p>
                            <img src={"/imd.jpg"} className='min-h-[70%] '/>
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
                    <div className='md:mt-20'>
                    <Subtitle >Hospedagem e Turismo</Subtitle>
                    <BodyText>Orientações para que você aproveite ao máximo o 14º Congresso Brasileiro de Inovação e Gestão de Desenvolvimento de Produto</BodyText>
                    <BodyText>A cidade de Natal, capital do estado Rio Grande do Norte, é conhecida por suas belas praias e clima tropical. Com cerca de 900 mil habitantes, possui um parque industrial diversificado, com setores de petróleo, energia renovável, turismo e tecnologia. Sua economia também é impulsionada pela pesca e agricultura, 
                        destacando-se na produção de frutas tropicais e camarão.</BodyText>

                    <div>
                        <BodyText>Aproveite o congresso e descubra os encantos de Natal. Com praias paradisíacas como Ponta Negra e Genipabu, é o destino perfeito para os amantes do sol e do mar. Explore as dunas de areia de buggy, faça um emocionante passeio de jangada pelos parrachos de Maracajaú e aproveite a vida noturna em Pipa. Natal é um convite irresistível ao relaxamento e à aventura.</BodyText>
                    
                    </div>
                </div>
                </div>
            </div>
      </main>
    )
  }