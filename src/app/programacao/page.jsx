import React from 'react';
import Subtitle from "@/src/components/Subtitle"
import TitlePage from "@/src/components/TitlePage"
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import BodyText from '@/src/components/BodyText';
import BodyEmphasys from '@/src/components/BodyEmphasys';


export default function Programacao() {
    return (
      <main className="mx-auto">
            <TitlePage>Programação</TitlePage>
            <div className="w-full space-y-10 text-pallete-medium-dark px-4 md:px-16 xl:px-28 2xl:px-64 pb-10 flex flex-col flex-wrap content-start">
                    <div className='w-full md:grid md:grid-cols-3 justify-between'>
                        <div className=' md:col-span-2'> 
                        <BodyText>O 14º Congresso Brasileiro de Inovação e Gestão de Desenvolvimento do Produto promete ser um evento transformador, repleto de conhecimentos atualizados e práticas inspiradoras. A programação completa do evento com seus 
                        palestrantes, mesas redondas, minicursos e visitas técnicas serão disponibilizadas em breve. As sessões temáticas serão disponibilizadas até 1 mês antes do início do congresso.</BodyText>
                        <BodyEmphasys>Prepare-se para expandir sua rede de contatos, adquirir novas perspectivas e impulsionar sua carreira na área de gestão de produtos.
                         Esperamos vê-lo em breve neste evento estimulante e enriquecedor!</BodyEmphasys>
                    </div>
                        <div className='my-10 w-full'>
                            <a href="" className="text-pallete-white w-fit flex justify-self-center space-x-4 justify-between align-middle shadow-lg bg-pallete-blue p-5 rounded-xl transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300 md:ml-5">
                                <div><BsFillCalendarCheckFill size={35} /></div>
                                <h1 className=" text-xl lg:text-2xl font-semibold capitalize">22 a 25 de novembro de 2023</h1>                            
                            </a>
                        </div>
                    </div>
                   
                    <div>
                        <Subtitle >Palestrantes</Subtitle>
                        <BodyText>Neste congresso, você terá acesso a palestras ministradas por renomados especialistas da indústria e academia. As palestras abordarão tópicos fundamentais relacionados à inovação na gestão do desenvolvimento 
                            de produto, proporcionando uma visão abrangente das últimas tendências, melhores práticas e casos de sucesso. Prepare-se para absorver conhecimentos valiosos e insights inspiradores.</BodyText>
                        <div className="bg-pallete-orange text-pallete-white rounded-lg max-w-sm mt-5 text-center md:text-2xl text-xl font-black">Mais informações em breve</div>
                    </div>

                    <div>
                        <Subtitle >Mesas Redondas</Subtitle>
                        <BodyText>As mesas redondas são espaços de discussão e troca de ideias entre profissionais e pesquisadores atuantes na área. Nesse formato, os participantes terão a oportunidade de aprofundar suas perspectivas sobre 
                            temas específicos, compartilhar experiências práticas e debater desafios relevantes na gestão do desenvolvimento de produto. A interação e colaboração entre os participantes promovem um ambiente estimulante de 
                            aprendizado e networking.</BodyText>
                    </div>

                    <div>
                        <Subtitle >Seções Temáticas</Subtitle>
                        <BodyText>Espaços dedicados à apresentação oral e em pôster, de pesquisas acadêmicas originais selecionadas pelo Comitê Científico do Congresso. As sessões serão organizadas de acordo com as temáticas específicas dos 
                            trabalhos e incluirão oportunidades para debate após cada apresentação.</BodyText>
                    </div>
                    <div>
                        <Subtitle >Minicursos</Subtitle>
                        <BodyText>Os minicursos oferecem uma oportunidade única de aprimorar habilidades práticas relacionadas à gestão do desenvolvimento de produto. Nessa modalidade, serão conduzidas sessões interativas, lideradas por 
                            profissionais experientes, que abordarão tópicos específicos em formato de workshops. Os participantes terão a chance de adquirir conhecimentos práticos aplicáveis ao seu cotidiano profissional, com enfoque na 
                            aplicação imediata.</BodyText>
                    </div>
                    <div>
                        <Subtitle >Visitas Técnicas</Subtitle>
                        <BodyText>Além das atividades destacadas acima, ofereceremos também visitas técnicas a empresas de destaque na região. Essas visitas proporcionarão uma imersão prática em ambientes inovadores, permitindo conhecer de 
                            perto as estratégias de gestão do desenvolvimento de produto adotadas pelas empresas locais. Será uma oportunidade única para ver na prática como essas organizações aplicam as melhores práticas e inovações em sua 
                            abordagem de gestão.</BodyText>
                    </div>
            </div>
      </main>
    )
  }