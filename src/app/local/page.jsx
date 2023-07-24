import React from 'react';
import Carousel from "@/src/components/Carousel"
import Subtitle from "@/src/components/Subtitle"
import TitlePage from "@/src/components/TitlePage"
import BodyText from '@/src/components/BodyText';
import BodyEmphasys from '@/src/components/BodyEmphasys';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function Local() {

    const carouselItems = [
        { url: '/cbgdp2023/buggy.jpg' },
        { url: '/cbgdp2023/natal.webp' },
        { url: '/cbgdp2023/forte.jpg' },
      ];
    return (
      <main className="mx-auto">
            <TitlePage>Local</TitlePage>
            <div className="w-full h-auto text-pallete-medium-dark px-4 md:px-16 xl:px-28 2xl:px-64 pb-10 flex flex-wrap content-start">
                <div>
                    <Subtitle>Instituto Metrópole Digital</Subtitle>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-20 ">
                        
                        <div>
                            <BodyText>O Instituto Metrópole Digital (IMD) é uma Unidade Acadêmica Especializada da Universidade Federal do Rio Grande do Norte (UFRN), com um perfil diferenciado da maioria dos centros acadêmicos e departamentos das universidades federais brasileiras.</BodyText>
                            <img src={"/cbgdp2023/imd.jpg"} className='min-h-[70%] '/>
                        </div> 

                        <div className='h-full w-full my-10 lg:mt-0' >  
                            <BodyText>Esse perfil alinha-se com sua missão de fomentar a criação de um Polo Tecnológico em Tecnologia da Informação (TI) no estado do Rio Grande do Norte, abrangendo iniciativas dos setores público, privado e acadêmico, a base para a sua estrutura organizacional.</BodyText>
    
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
                    <BodyText><BodyEmphasys>Informações Gerais: </BodyEmphasys>Orientações para que você aproveite ao máximo o 14º Congresso Brasileiro de Inovação e Gestão de Desenvolvimento do Produto</BodyText>
                    <BodyText>A cidade de Natal, capital do estado Rio Grande do Norte, é conhecida por suas belas praias e clima tropical. Com cerca de 900 mil habitantes, possui um parque industrial diversificado, com setores de petróleo, energia renovável, turismo e tecnologia. Sua economia também é impulsionada pela pesca e agricultura, 
                        destacando-se na produção de frutas tropicais e camarão.</BodyText>

                    <div>
                        <BodyText><BodyEmphasys>Atrativos: </BodyEmphasys>Aproveite o congresso e descubra os encantos de Natal. Com praias paradisíacas como Ponta Negra e Genipabu, é o destino perfeito para os amantes do sol e do mar. Explore as dunas de areia de buggy, faça um emocionante passeio de jangada pelos parrachos de Maracajaú e aproveite a vida noturna em Pipa. Natal é um convite irresistível ao relaxamento e à aventura.</BodyText>
                        <div>
                            <Carousel >{carouselItems}</Carousel>
                        </div> 
                        <div className='flex justify-center '>
                            <a href={"https://www.tripadvisor.com.br/Attractions-g303518-Activities-Natal_State_of_Rio_Grande_do_Norte"} class="bg-transparent shadow-lg hover:bg-pallete-blue text-pallete-blue font-semibold hover:text-pallete-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                O que fazer em Natal
                           </a>     
                        </div>               
                    </div>
                    <div>
                        <BodyText><BodyEmphasys>Hospedagem: </BodyEmphasys>A rede hoteleira de Natal encanta com opções para todos os gostos. Desde resorts luxuosos à beira-mar até aconchegantes pousadas, há acomodações para todos os bolsos. Com serviço de qualidade, infraestrutura moderna e localização privilegiada, os hotéis em Natal proporcionam uma estadia memorável para os visitantes que desejam explorar as belezas da cidade.</BodyText>
                        <div className="lg:grid lg:grid-cols-2 lg:gap-20 mt-5 ">

                            <div className='h-full w-full my-10 lg:mt-0' >      
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/eHRDzsr-g4w?start=50&autoplay=1" 
                                frameborder="0" allow="autoplay; encrypted-media" allowfullscreen
                                className='min-h-[70%] w-full'  ></iframe>
                            </div>
                            
                            <div className='h-full w-full my-10 lg:mt-0'>
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d79123.15291898634!2d-35.21150375!3d-5.809847650000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shotéis%20em%20Natal!5e0!3m2!1sen!2sbr!4v1622477149049!5m2!1sen!2sbr" 
                                    width="600" 
                                    height="450" 
                                    allowfullscreen="" 
                                    loading="lazy"
                                    className='min-h-[70%] w-full'           
                                />
                            </div> 

                        </div>
                        <div className='flex justify-center '>
                            <a href={"https://www.booking.com/pool/city/br/natal.en-gb.html?aid=318615;label=Catch_All-EN-135970830368-EM4Z8mM*XIOaQWTD01K7qwS566165083356:pl:ta:p1:p2:ac:ap:neg:fi:tidsa-1642633468498:lp1001662:li:dec:dm;ws=&gclid=Cj0KCQjw4NujBhC5ARIsAF4Iv6cmrxUltVv8T--nZdb0tPaHPOG759h9TefW4amK0ad8eO2q14YRodgaApqHEALw_wcB"} className="bg-transparent shadow-lg m-3 hover:bg-pallete-blue text-pallete-blue font-semibold hover:text-pallete-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Hospedagem Booking
                           </a>     
                        
                           <a href={"https://www.airbnb.com.br/natal-brazil/stays"} className="bg-transparent shadow-lg m-3 hover:bg-pallete-blue text-pallete-blue font-semibold hover:text-pallete-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Hospedagem Airbnb
                           </a> 
                        </div>          
                    </div>
                </div>
                </div>
            </div>
      </main>
    )
  }