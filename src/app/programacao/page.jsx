import React from 'react';
import Subtitle from "@/src/components/Subtitle"
import TitlePage from "@/src/components/TitlePage"
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import BodyText from '@/src/components/BodyText';
import BodyEmphasys from '@/src/components/BodyEmphasys';
import Accordion from "@/src/components/Accordion" 
import Imagem from "@/src/components/Imagem" 


export default function Programacao () {
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
                        <div className='grid  md:flex md:space-x-10'>
                            <div className='mt-10 min-w-fit'>
                                <Imagem imagem={"/cbgdp2023/alejandro.jpeg"} descricao={"Prof. Dr. Alejandro G. Frank"} />
                            </div>
                            <BodyText>Professor Adjunto do Departamento de Engenharia de Produção da Universidade Federal do Rio Grande do Sul (UFRGS). Diretor do Núcleo de Engenharia Organizacional/NEO (www.ufrgs.br/neo) da UFRGS, Editor do International Journal of Production Economics (Elsevier) e Coordenador do curso de especialização em Indústria 4.0 e Transformação Digital da UFRGS. Possui Mestrado e Doutorado em Engenharia de Produção pela UFRGS. Foi pesquisador visitante da CAPES no Massachusetts Institute of Technology (MIT), Estados Unidos (2019), e pesquisador visitante do CNPq (doutorado sanduíche) no Politecnico di Milano, Itália (2012). Também foi pesquisador associado do MIT Industrial Performance Center de 2020 a 2022. É especialista em Indústria 4.0 e transformação digital, com interesse nas estratégias de adoção de tecnologias digitais e seus impactos nas operações, na gestão da cadeia de suprimentos e na transformação dos modelos de negócios. CV completo (inglês): www.ufrgs.br/neo/frank</BodyText>
                        </div>
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
                        <div className='grid gap-5 xl:mt-10 xl:gap-8 text-pallete-white'>
                            <Accordion title={"Minicurso 1: MDR21 - Modelo das Duas Rodas aplicado à Transformação Digital."}> 
                                <ul className='list-disc ml-5 grid gap-5'>
                                    <li><span className='font-semibold'>Público-alvo: </span>  Público em geral </li>
                                    <li><span className='font-semibold'>Tópicos: </span>Gestão da Inovação e Transformação Digital: definições e intercessões; O Modelo das Duas Rodas: breve histórico, propósitos, módulo do comitê estratégico, módulo do comitê de implantação, módulo das equipes de projetos, módulo de organização do trabalho. Principais ferramentas e referências do MDR. MDR21: enriquecendo o MDR com elementos da transformação digital. Fast-Start: uma proposta de inicialização rápida do MDR21.</li>
                                    <li><span className='font-semibold'>Público: </span>Profissionais de empresas não-nativas digitais que conduzem ou pretendem conduzir iniciativas de gestão da inovação e/ou transformação digital, consultores, professores ou estudantes que atuem no campo da gestão da inovação e transformação digital assim como métodos e ferramentas associados.</li>
                                    <li><span className='font-semibold'>Ministrante:  </span>Prof. Dr. Raoni Barros Bagno (UFMG).</li>
                                    <li><span className='font-semibold'>Carga horária: </span>1 hora e 30 minutos.</li>
                                </ul>
                                <div className='mt-5 grid justify-items-center '>
                                    <Imagem imagem={"/cbgdp2023/raoni.jpeg"} descricao={"Pof. Dr. Raoni Barros Bagno"} />
                                </div>
                            </Accordion>
                            <Accordion title={"Minicurso 2: Como criar valor e mapear a perspectiva dos stakeholders em ecossistemas empreendedores?"}> 
                                <ul className='list-disc ml-5 grid gap-5'>
                                    <li><span className='font-semibold'>Descrição: </span>O curso tem como objetivo promover a compreensão do que é valorizado pelo beneficiário no ecossistema empreendedor e mapear as entregas entre os stakeholders do ecossistema. Este minicurso trata-se de um workshop interativo no qual a informação das necessidades e valores de diferentes pontos da cadeia de um ecossistema de inovação será organizada e avaliada por meio de um sequenciamento de ferramentas, desde as demandas até uma alternativa de conceito consensual resultado de múltiplas interações de diferentes entidades do ecossistema.</li>
                                    <li><span className='font-semibold'>Tópicos: </span>Serão experimentados as seguintes ferramentas: Mapa dos stakeholders, Value Proposition Canvas, Matriz de Priorização e System Maps. Ao final do curso, os participantes devem estar capacitados ao entendimento dos métodos em diferentes interesses a fim de convergir num conceito único.</li>
                                    <li><span className='font-semibold'>Público: </span>Profissionais de ecossistemas de inovação e seus diversos players, consultores, professores ou estudantes que atuem com a gestão de ecossistemas de inovação.</li>
                                    <li><span className='font-semibold'>Ministrante:  </span>Prof. Dr. Fernando Henrique Lermen (UEPR) e Prof. Dra. Márcia Elisa Echeveste.</li>
                                    <li><span className='font-semibold'>Carga horária: </span>1 hora e 30 minutos.</li>
                                </ul>
                                <div className='mt-5 flex flex-col md:flex-row space-y-5 justify-around'>
                                    <Imagem imagem={"/cbgdp2023/fernando.jpeg"} descricao={"Prof. Dr. Fernando Henrique Lermen"} />
                                    <Imagem imagem={"/cbgdp2023/marcia.jpeg"} descricao={"Prof. Dra. Márcia Elisa Echeveste"} />

                                </div>
                            </Accordion>
                            <Accordion title={"Minicurso 3: Design de embalagem sustentável."}> 
                                <ul className='list-disc ml-5 grid gap-5'>
                                    <li><span className='font-semibold'>Descrição: </span>promover a compreensão do universo do design de embalagens em todo o ciclo de vida, buscando ações para redução de impacto ambiental através do projeto.</li>
                                    <li><span className='font-semibold'>Tópicos: </span>Introdução ao universo da embalagem; Sistema embalagem; Ciclo de vida da embalagem e sua relação com o produto; Funções da embalagem; Metodologia de projeto; Design de embalagem – Projeto gráfico e estrutural; Design como ferramenta para inovação; Sustentabilidade com foco em embalagem; Exemplos de embalagens e exercícios práticos.</li>
                                    <li><span className='font-semibold'>Público: </span>Empresas, professores, consultores e estudantes com interesse no desenvolvimento de embalagens.</li>
                                    <li><span className='font-semibold'>Ministrante:  </span>Dr. Ricardo Sastre (Mudra planejamento de embalagens).</li>
                                    <li><span className='font-semibold'>Carga horária: </span>1 hora e 30 minutos.</li>
                                </ul>
                                <div className='mt-5 grid justify-items-center '>
                                    <Imagem imagem={"/cbgdp2023/ricardo.jpeg"} descricao={"Dr. Ricardo Sastre"} />
                                </div>
                            </Accordion>
                        </div>
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