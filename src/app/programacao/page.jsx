'use client'
import React, { useEffect, useState } from 'react';
import Subtitle from "@/src/components/Subtitle"
import TitlePage from "@/src/components/TitlePage"
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import BodyText from '@/src/components/BodyText';
import BodyEmphasys from '@/src/components/BodyEmphasys';
import Accordion from "@/src/components/Accordion"
import VerMais from "@/src/components/VerMais" 

import Imagem from "@/src/components/Imagem" 


export default function Programacao () {
    const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  const buttonText = showFullText ? 'Ver Menos' : 'Ver Mais';
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
                            <VerMais textoCurto={`Professor Adjunto do Departamento de Engenharia de Produção da Universidade Federal do Rio Grande do Sul (UFRGS). Diretor do Núcleo de Engenharia Organizacional/NEO (www.ufrgs.br/neo) da UFRGS, Editor do International Journal
                              of Production Economics (Elsevier) e Coordenador do curso de especialização em Indústria 4.0 e Transformação
                              Digital da UFRGS. Possui Mestrado e Doutorado em Engenharia de Produção pela UFRGS.`}
                              textoLongo={` Foi pesquisador visitante
                              da CAPES no Massachusetts Institute of Technology (MIT), Estados Unidos (2019), e pesquisador visitante do CNPq
                              (doutorado sanduíche) no Politecnico di Milano, Itália (2012). Também foi pesquisador associado do MIT Industrial
                              Performance Center de 2020 a 2022. É especialista em Indústria 4.0 e transformação digital, com interesse nas
                              estratégias de adoção de tecnologias digitais e seus impactos nas operações, na gestão da cadeia de suprimentos
                              e na transformação dos modelos de negócios. CV completo (inglês): www.ufrgs.br/neo/frank`} />
                        </div>

                        <div className='grid md:flex'>
                            <div className='mt-10 min-w-fit md:order-2 md:ml-5'>
                                <Imagem imagem={"/cbgdp2023/pierre.jpeg"} descricao={"Prof. Dr. Pierre Lucena Raboni"} />
                            </div>
                            <VerMais
                                textoCurto={`Pierre Lucena Raboni é doutor em Administração pela Pontifícia Universidade Católica do Rio de Janeiro (2005), Mestre em Economia pela Universidade Federal de Pernambuco e Graduado em Administração pela Universidade Federal de Pernambuco (2000 e 1994). Presidente do Porto Digital, um dos principais ambientes de inovação do Brasil, com mais de 17 mil colaboradores e 365 empresas. Também é professor da Universidade Federal de Pernambuco em regime de 20 horas.`}
                                textoLongo={`Foi professor do PROPAD/UFPE, sendo Coordenador do Núcleo de Estudos em Finanças e Investimentos (NEFI/UFPE), onde orientou alunos de Mestrado e Doutorado. Foi coordenador do curso de Administração, da mesma Universidade, entre os anos de 2008 e 2012. Foi Reitor do Centro Universitário dos Guararapes (UNIFG) e Diretor Acadêmico Regional da Rede Laureate, para o Estado de Pernambuco e Paraíba, sendo responsável pela UNIFG, FG Recife, FPB e Cedepe. Também foi Professor Titular da UniFG e membro do Programa de Mestrado Profissional em Inovação e Desenvolvimento. Foi Vice-Presidente do Grupo Diario de Pernambuco/Clube. É comentarista da Rádio CBN/Recife e da Rádio Nova Brasil FM, na área de inovação. Foi também comentarista econômico da CBN/Recife e foi também comentarista econômico da TV/Jornal/SBT como colaborador voluntário. Foi Visiting Scholar na Universidade do Minho, como bolsista do Programa Erasmus Mundus, no ano de 2010. Foi editor do blog Acerto de Contas (2007-2013) e comandou um programa de debates na Rádio Olinda, chamado Acerto de Contas, também como voluntário. Tem experiência na área de Finanças, atuando principalmente nos seguintes temas: eficiência de mercado, anomalias de mercado e testes empíricos na Bovespa, além de coordenador de pesquisas na área de financiamento imobiliário e compra de imóveis.`}
                            />
                        </div>


                        <div className='grid md:flex md:space-x-10'>
                            <div className='mt-10 min-w-fit'>
                                <Imagem imagem={"/cbgdp2023/marly.jpeg"} descricao={"Profa. Dra. Marly Monteiro de Carvalho"} />
                            </div>
                            <VerMais textoCurto={`Marly Monteiro de Carvalho é Professora Titular e chefe do Departamento de Engenharia de Produção da Universidade de São Paulo (USP). Coordena o Laboratório de Gerenciamento de Projetos (LGP USP), o MBA em Gerenciamento de Projetos (CEGP USP/FCAV) e o grupo de pesquisa QEP-Qualidade e Engenharia de Produto do CNPq. É mestre e doutora em Engenharia de Produção pela Universidade de São Paulo. Possui graduação na mesma área pela Universidade Federal de Santa Catarina e Pós-Doutorado no Politecnico di Milano. É editora de área da Technovation (área Business Model Innovation for Sustainability) e editora de departamento do Project Management Journal.`}
                              textoLongo={`É membro do conselho editorial do Journal of Manufacturing Technology Management, Journal of Modern Project Management e PM World Journal. É membro da Academia Nacional de Engenharia (ANE). Participa do Comitê Consultivo da cadeira de pesquisa em gerenciamento de projetos aeronáuticos na Universidade de Quebec a Trois Rivières, Canadá. Publicou 12 livros e muitos artigos em periódicos importantes, como Technological Forecasting and Social Change, International Journal of Project Management, International Journal of Production Research, International Journal of Operations & Production Management, Business Strategy and the environment e Journal of Cleaner Production. Tem coordenado projetos patrocinados por diversos fundos, como CNPq, CAPES, FAPESP e Newton Fund. Parcerias acadêmicas (projetos, artigos em coautoria e/ou intercâmbio de alunos) com a University of Cambridge (Reino Unido), Aston University (Reino Unido), University of Surrey (Reino Unido), University of York (Reino Unido), Copenhagen Business School ( Dinamarca), Universidade Técnica da Dinamarca (DTU- Dinamarca), Universidade de Quebec (Canadá). Visão geral da citação: Web of Science (h-index: 26), Scopus (h-index: 29), Google Scholar (h-index: 57), ResearchGate (h-index: 41). Foi membro do comitê de Engenharia da Capes III e da diretoria da ABEPRO (vice-presidente e diretor técnico).`} />
                        </div>
                    </div>

                    <div>
                        <Subtitle >Mesas Redondas</Subtitle>
                        <BodyText>As mesas redondas são espaços de discussão e troca de ideias entre profissionais e pesquisadores atuantes na área. Nesse formato, os participantes terão a oportunidade de aprofundar suas perspectivas sobre 
                            temas específicos, compartilhar experiências práticas e debater desafios relevantes na gestão do desenvolvimento de produto. A interação e colaboração entre os participantes promovem um ambiente estimulante de 
                            aprendizado e networking.</BodyText>
                        
                        <BodyEmphasys fontSize={"text-2xl"}>Ecossistemas empreendedores (22/11)</BodyEmphasys>
                        <div className='  md:grid md:grid-cols-2'>
                            <div className='grid'>
                                <div className='mt-5 min-w-fit'>
                                    <Imagem imagem={"/cbgdp2023/rodrigo.jpeg"} descricao={"MSc. Rodrigo Romão (Diretor do Metrópole Parque-UFRN)."} />
                                </div>
                                <VerMais textoCurto={`Administrador especialista em Gestão de Projetos (PUC-Minas), mestre em Gestão da Informação e do Conhecimento e doutorando em Administração (UFRN).`}
                                textoLongo={`Atua nos segmentos industriais de saúde e mineração entre 2005-2015 e, desde 2016, trabalha na gestão de ambientes de empreendedorismo e inovação, onde também é pesquisador. Atua com Empreendedorismo, Gestão da Inovação, Gestão do Conhecimento, Metodologias Ágeis e Lean, Design Thinking e Processo Criativo aplicado ao Aprendizado.`} />
                            </div>
                            <div className='grid md:ml-10'>
                                <div className='mt-5 min-w-fit'>
                                    <Imagem imagem={"/cbgdp2023/jefferson.jpeg"} descricao={"MSc. Jefferson Oliveira (AGIR-UFRN)."} />
                                </div>
                                <VerMais textoCurto={`Diretor da Agência de Inovação da UFRN – AGIR/UFRN, com 12 anos de experiência na Pró-Reitoria de Pesquisa da UFRN e ampla vivência em pesquisa científica e tecnológica.`}
                                textoLongo={`Também atua como advogado especializado em Direito Digital, Startups, Gestão da Inovação e Propriedade Intelectual. Tem buscado simplificar o ambiente jurídico e promover a pesquisa, desenvolvimento e inovação no Brasil, incentivando a criação de negócios e a geração de riqueza.`} />
                            </div>
                            <div className='grid'>
                                <div className='mt-5 min-w-fit'>
                                    <Imagem imagem={"/cbgdp2023/carlos.jpeg"} descricao={"Carlos ‘Novinho’ (AVATI Aceleradora)"} />
                                </div>
                                <VerMais textoCurto={`CEO da AVATI, empreendedor com mais de 15 anos de experiência em startups Destaca-se pelos casos de sucesso 'Incentiv.me', 'Meetz' e 'Local Pros'.`}
                                textoLongo={`Além disso, possui mestrado em Robótica e IA pela UFPB e participou do programa Ciência sem Fronteiras na TUM – Technical University of Munich, na Alemanha. É professor convidado do MBA em Gestão e Inovação da UFRN.`} />
                            </div>
                            <div className='grid md:ml-10'>
                                <div className='mt-5 min-w-fit'>
                                    <Imagem imagem={"/cbgdp2023/pierre.jpeg"} descricao={"Prof. Dr. Pierre Lucena Raboni "} />
                                    </div>
                                    <VerMais textoCurto={`É doutor em Administração pela PUC-Rio (2005) e mestre em Economia pela UFPE, com graduação em Administração pela mesma instituição.`}
                                textoLongo={`Preside o Porto Digital, um importante hub de inovação no Brasil, com 17 mil colaboradores e 365 empresas. Também é professor na UFPE em meio período e já coordenou o PROPAD/UFPE. Raboni foi Reitor da UNIFG e Diretor Acadêmico Regional da Rede Laureate em Pernambuco e Paraíba, além de ser comentarista de inovação na Rádio CBN/Recife e na Rádio Nova Brasil FM.`} />
                                
                            </div>
                            <div className='grid '>
                            <div className='mt-5 min-w-fit'>
                                    <Imagem imagem={"/cbgdp2023/adriana.jpeg"} descricao={"Prof. Dra. Adriana Faria (UFV)"} />
                                    </div>
                            <VerMais textoCurto={`Graduada em Engenharia Química pela Universidade Federal de Uberlândia, com mestrado e doutorado em Engenharia Mecânica. Pós-doutorado em Gestão da Inovação pela Universidade Estadual da Carolina do Norte, EUA.`}
                                textoLongo={`Desde 2007, é professora na Universidade Federal de Viçosa e atualmente diretora executiva do Centro Tecnológico de Desenvolvimento Regional de Viçosa (CenTev), um órgão que abriga a Incubadora de Empresas e o Parque Tecnológico de Viçosa (tecnoPARQ). Também é diretora presidente da Rede de Inovação da Associação de Minas Gerais e coordenadora de políticas públicas na FAPEMIG. É pesquisadora em Inovação Tecnológica (UFMG) e Economia (UFV), além de coordenar um curso de pós-graduação em Gestão da Produção (UFV) e liderar um grupo de pesquisa em tecnologias de gestão (NTG).`} />
                               
                            </div>
                        </div>

                        <div className='mt-20'>
                            <BodyEmphasys fontSize={"text-2xl"}>Transformação Digital (23/11)</BodyEmphasys>
                        
                            <div className=' md:grid md:grid-cols-2'>
                                <div className='grid'>
                                    <div className='mt-5 min-w-fit'>
                                        <Imagem imagem={"/cbgdp2023/alejandro.jpeg"} descricao={"Prof. Dr. Alejandro Frank (UFRGS)"} />
                                        <VerMais textoCurto={`Professor Adjunto do Departamento de Engenharia de Produção da Universidade Federal do Rio Grande do Sul (UFRGS).`}
                                textoLongo={`É Diretor do Núcleo de Engenharia Organizacional/NEO da UFRGS, Editor do International Journal of Production Economics e Coordenador do curso de especialização em Indústria 4.0 e Transformação Digital da UFRGS. Possui Mestrado e Doutorado em Engenharia de Produção pela UFRGS, tendo sido pesquisador visitante no MIT e no Politecnico di Milano.`} />
                                    </div>
                                </div>
                                <div className='grid md:ml-10'>
                                    <div className='mt-5 min-w-fit'>
                                        <Imagem imagem={"/cbgdp2023/wisley.jpeg"} descricao={"Wisley Moura (DOIS A Engenharia)"} />
                                        <VerMais textoCurto={`Analista de sistemas com pós-graduação em gestão de projetos e indústria 4.0, com ampla experiência em desenvolvimento de sistemas, análise de dados e sistemas tecnológicos embarcados.`}
                                textoLongo={`Atualmente desempenha a função de Gerente de Tecnologia da Informação e é o responsável pela área de Inovação na Dois A Engenharia, uma empresa especializada em obras de infraestrutura urbana, viária e energias renováveis.`} />
                                    </div>
                                </div>
                                <div className='grid'>
                                    <div className='mt-5 min-w-fit'>
                                        <Imagem imagem={"/cbgdp2023/pedro.jpeg"} descricao={"Pedro Gomide (i2)"} />
                                    </div>
                                    <VerMais textoCurto={`Profissional experiente na transformação digital, com destaque em startups e ambientes corporativos. Sua participação pioneira na adoção da computação em nuvem na indústria brasileira o diferencia.`}
                                    textoLongo={`Com formação em Engenharia Eletricista e pós-graduações em inovação pela PUC-RS e MIT, atualmente é doutorando em Design pela IADE e integra o Strategic Design and Innovation – Lab, colaboração entre a IADE e o Politecnico di Milano.`} />
                                </div>
                                <div className='grid md:ml-10 justify-items-center content-center'>
                                <div className='mt-5 min-w-fit'>
                                        <Imagem imagem={"/cbgdp2023/danilo.png"} descricao={"Prof. Dr. Danilo Curvelo (UFRN)"} />
                                    </div>                                    <VerMais textoCurto={`Possui Doutorado em Engenharia Elétrica e de Computação pela Universidade Federal do Rio Grande do Norte (UFRN), na área de sistemas inteligentes aplicados à indústria de óleo e gás.`}
                                    textoLongo={`Atualmente é professor do Instituto Metrópole Digital (IMD) da UFRN, tendo experiência na área de desenvolvimento de sistemas, redes de computadores, indústria 4.0 e tecnologia blockchain.`} />
                                
                                </div>
                            </div>
                        </div>

                        <div className='mt-20'>
                            <BodyEmphasys fontSize={"text-2xl"} >ESG e Economia Circular (24/11)</BodyEmphasys>
                            <div className='md:grid md:grid-cols-2 '>
                                <div className='grid'>
                                    <div className='mt-5 min-w-fit'>
                                        <Imagem imagem={"/cbgdp2023/marly.jpeg"} descricao={"Profa. Dra. Marly Monteiro (USP)"} />
                                    </div>
                                    <VerMais textoCurto={`É professora Titular e chefe do Departamento de Engenharia de Produção da USP, com extensa contribuição acadêmica.`}
                                    textoLongo={`Lidera o Laboratório de Gerenciamento de Projetos (LGP USP), o MBA em Gerenciamento de Projetos (CEGP USP/FCAV) e o grupo de pesquisa QEP-Qualidade e Engenharia de Produto do CNPq. Com mestrado e doutorado em Engenharia de Produção pela USP, e pós-Doutorado no Politecnico di Milano, publicou 12 livros e diversos artigos em periódicos importantes. Mantém parcerias acadêmicas internacionais e exerceu papéis de liderança em comitês renomados, como a Capes III e a diretoria da ABEPRO.`} />
                                </div>
                                <div className='grid md:ml-10'>
                                    <div className='mt-5 min-w-fit'>
                                        <Imagem imagem={"/cbgdp2023/ricardo.jpeg"} descricao={"Prof. Dr. Ricardo Sastre (MUDRA)"} />
                                    </div>
                                    <VerMais textoCurto={`Pós-Doutorando em Design na UFPR, com doutorado em Engenharia de Produção e mestrado em Design.`}
                                    textoLongo={`Além disso, possui um MBA em gestão empresarial, pós-graduação em Expressão gráfica e bacharelado em Comunicação Social. Possui 27 anos de experiencia profissional, sendo 16 anos de empreendedorismo em uma indústria gráfica de embalagens. É também é professor desde 2009 e desempenha funções de diretor e pesquisador na Mudrá Design. Sua trajetória abrange uma ampla gama de conhecimentos e experiências na área.`} />
                                
                                </div>
                                <div className='grid'>
                                    <div className='mt-5 min-w-fit'>
                                        <Imagem imagem={"/cbgdp2023/rodrigo_diniz.jpeg"} descricao={"Rodrigo Diniz (SENAI)"} />
                                    </div>
                                    <VerMais textoCurto={`Possui graduação em Agronomia pela Universidade Federal Rural do Semi-Árido (1992). Atualmente é Diretor Regional do SENAI Rio Grande do Norte e do Instituto SENAI de Inovação em Energias Renováveis (ISI-ER).`}
                                    textoLongo={`No qual lidera ações de inovação na área de energias renováveis, em especial hidrogênio verde, energia solar, energia fotovoltaica, e biocombustíveis. Tem fomentado o desenvolvimento de um ecossistema de inovação com foco em energias renováveis a partir da promoção de parcerias com grandes empresas e startups.`} />
                                </div>
                                <div className='grid'>
                                    <div className='mt-5 min-w-fit md:ml-10'>
                                        <Imagem imagem={"/cbgdp2023/leonardo.jpeg"} descricao={"Prof. Dr. Leonardo Pivôtto Nicodemo (IFRN)"} />
                                        <VerMais textoCurto={`Professor de ESG e Direito Ambiental no IFRN. Atua como Head de ESG e Inovação no Núcleo de Estudos em Direito, Desenvolvimento e Meio Ambiente (NEDMA/IFRN).`}
                                    textoLongo={`Possui mestrado em Engenharia de Produção e doutorado em Desenvolvimento e Meio Ambiente pela UFRN. É conhecido por criar o Índice de Sustentabilidade de Campos Petrolíferos (ISPETRO) e o Método Pivotto de Gestão de Projetos Exponenciais. Atualmente, é vice-coordenador da Especialização em Gestão Ambiental no IFRN – Campus Natal.`} />
                                
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                    <li><span className='font-semibold'>Ministrante:  </span>Prof. Dr. Fernando Henrique Lermen (UNESPAR) e Profa. Dra. Márcia Elisa Echeveste (UFRGS)</li>
                                    <li><span className='font-semibold'>Carga horária: </span>1 hora e 30 minutos.</li>
                                </ul>
                                <div className='mt-5 flex flex-col md:flex-row space-y-5 justify-around'>
                                    <Imagem imagem={"/cbgdp2023/fernando.jpeg"} descricao={"Prof. Dr. Fernando Henrique Lermen"} />
                                    <Imagem imagem={"/cbgdp2023/marcia.jpeg"} descricao={"Profa. Dra. Márcia Elisa Echeveste"} />

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