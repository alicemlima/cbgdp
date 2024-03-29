import React from 'react';
import Subtitle from "@/src/components/Subtitle"
import TitlePage from "@/src/components/TitlePage"
import BodyText from '@/src/components/BodyText';
import BodyEmphasis from '@/src/components/BodyEmphasys';
import { AiOutlineDownload } from 'react-icons/ai';


export default function inscricoes() {
    
    return (
        <main className="mx-auto">
            <TitlePage>Inscrições</TitlePage>
            <div className="w-full space-y-10 text-pallete-medium-dark text-lg md:text-xl px-4 md:px-16 xl:px-28 2xl:px-64 pb-10 flex flex-col">
                <div className="grid md:grid-cols-3 items-center justify-items-center gap-x-4">
                    <div className='md:col-span-2'>
                    <BodyText>A seguir temos a tabela de valores das inscrições para o CBGDP 2023. Os preços variam de acordo com o tipo de participante: aluno de 
                        graduação, pós-graduando, profissional/professor, com descontos especiais para inscrições antecipadas. </BodyText>
                    </div>
                    <a href={"https://www.even3.com.br/14-congresso-brasileiro-de-inovacao-e-gestao-de-desenvolvimento-de-produto-350837"} className="h-fit  bg-pallete-orange hover:bg-pallete-white hover:text-pallete-orange text-pallete-white hover:border-transparent border rounded-lg max-w-sm p-3 shadow-lg text-center md:text-xl text-base font-black cursor-pointer">
                        Realizar Inscrição
                    </a> 
                </div>
                <div className='w-[96vw] md:w-[90vw] overflow-x-auto'>
                    <table className="table-auto text-center border-separate border-spacing-2">
                        <thead>
                            <tr className='text-pallete-blue font-bold'>
                                <th>Tipo de inscrição (individual e sem direito à publicação)</th>
                                <th>até 22/08/2023</th>
                                <th>até 22/10/2023</th>
                                <th>até 10/11/2023</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className='text-pallete-blue font-bold'>Graduando</td>
                            <td>R$ 75,00</td>
                            <td>R$ 150,00</td>
                            <td>R$250,00</td>
                            </tr>
                            <tr>
                            <td className='text-pallete-blue font-bold'>Pós-graduando (associado estudantil)</td>
                            <td>R$ 200,00</td>
                            <td>R$ 300,00</td>
                            <td>R$ 400,00</td>
                            </tr>
                            <tr>
                            <td className='text-pallete-blue font-bold'>Pós-graduando</td>
                            <td>R$ 250,00</td>
                            <td>R$ 350,00</td>
                            <td>R$ 450,00</td>
                            </tr>
                            <tr>
                            <td className='text-pallete-blue font-bold'>Graduados / Docentes / Profissionais não associados</td>
                            <td>R$ 300,00</td>
                            <td>R$ 400,00</td>
                            <td>R$500,00</td>
                            </tr>
                            <tr>
                            <td className='text-pallete-blue font-bold'>Docentes / Profissionais (associados individuais ou institucionais)</td>
                            <td>R$ 250,00</td>
                            <td>R$ 350,00</td>
                            <td>R$450,00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <BodyText>Cada inscrição garantirá acesso a todas as palestras, mesas redondas, sessões temáticas, minicursos (sujeitos à disponibilidade) 
                    e visitas técnicas (sujeitas à disponibilidade), além dos coffee breaks. Outras despesas não estão incluídas na inscrição, como almoços, 
                    hospedagens, programação cultural, etc.</BodyText>

                <Subtitle>Inscrições via nota de empenho</Subtitle>
                <BodyText>As inscrições para o 14º Congresso Brasileiro de Gestão e Desenvolvimento de Pessoas (CBGDP) estão disponíveis para os profissionais que estudam ou trabalham em órgãos públicos. Para se inscrever através de uma nota de empenho.</BodyText>
                <BodyEmphasis>Envie os dados necessários para o e-mail cbgdp@igdp.org.br, conforme as informações especificadas no documento a abaixo</BodyEmphasis>
                <a href={"/cbgdp2023/INSTRUCOES_NOTA_DE_EMPENHO.docx"} className="h-fit w-full flex justify-center items-center self-center bg-pallete-blue hover:bg-pallete-white text-pallete-white hover:text-pallete-blue text-pallete-whitehover:border-transparent border rounded-lg max-w-sm p-3 shadow-lg text-base font-black cursor-pointer">
                INSTRUÇÕES NOTA DE EMPENHO <AiOutlineDownload className='ml-3' size={30}/>
                </a> 


                <Subtitle>Publicação ou Trabalhos Técnicos</Subtitle>
                <BodyText>Para aqueles que publicarem artigos ou trabalhos técnicos, há valores que devem ser pagos adicionalmente à inscrição. Estes serão 
                    pagos uma única vez, por artigo/trabalho técnico, independentemente do número de autores, segundo a tabela abaixo:</BodyText>
                    
                    <div className='w-[96vw] md:w-[90vw] overflow-x-auto'>
                        <table className="table-auto text-center border-separate border-spacing-2 ">
                        <thead>
                            <tr className='text-pallete-blue font-bold'>
                                <th>Tipo de inscrição</th>
                                <th>1 artigo</th>
                                <th>2 artigos</th>
                                <th>3 artigos</th>
                                <th>4 artigos</th>
                                <th>5 artigos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='text-pallete-blue font-bold'>Associados</td>
                                <td>R$ 80,00</td>
                                <td>R$ 150,00</td>
                                <td>R$ 210,00</td>
                                <td>R$ 260,00</td>
                                <td>R$ 300,00 </td>

                            </tr>
                            <tr>
                                <td className='text-pallete-blue font-bold'>Não associados</td>
                                <td>R$ 100,00</td>
                                <td>R$ 180,00</td>
                                <td>R$ 240,00</td>
                                <td>R$ 290,00</td>
                                <td>R$ 330,00</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <BodyEmphasis>Teve um artigo aceito? Faça aqui o pamento da taxa.</BodyEmphasis>
                <a href={"https://www.even3.com.br/store/14-congresso-brasileiro-de-inovacao-e-gestao-de-desenvolvimento-de-produto-350837"} className="h-fit w-full flex justify-center items-center self-center bg-pallete-blue hover:bg-pallete-white text-pallete-white hover:text-pallete-blue text-pallete-whitehover:border-transparent border rounded-lg max-w-sm p-3 shadow-lg text-base font-black cursor-pointer">
                Publique seu Artigo
                </a> 
                <BodyText>Caso deseje obter desconto na inscrição do CBGDP2023, realize sua associação ao IGDP, estamos com condições especiais. Para conferir todos os benefícios do associado, acesse: <a className='text-pallete-blue font-bold' href='https://www.igdp.org.br/associacao/'>igdp.org.br/associacao</a></BodyText>

            </div>
        </main>
        )
    }