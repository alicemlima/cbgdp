import React from 'react';
import Subtitle from "@/src/components/Subtitle"
import TitlePage from "@/src/components/TitlePage"
import { AiOutlineGithub } from 'react-icons/ai';
import BodyText from '@/src/components/BodyText';

export default function inscricoes() {
    
    return (
        <main className="mx-auto">
            <TitlePage>Inscrições</TitlePage>
            <div className="w-full space-y-10 text-pallete-medium-dark text-lg md:text-xl px-4 md:px-16 xl:px-28 2xl:px-64 pb-10 flex flex-col flex-wrap content-start">
                <BodyText>A seguir temos a tabela de valores das inscrições para o CBGDP 2023. Os preços variam de acordo com o tipo de participante: aluno de 
                    graduação, pós-graduando, profissional/professor, com descontos especiais para inscrições antecipadas. </BodyText>
                <table class="table-auto text-center border-separate border-spacing-2  ">
                    <thead>
                        <tr className='text-pallete-blue font-bold'>
                            <th>Tipo de inscrição (individual e sem direito à publicação)</th>
                            <th>até 22/08/2023</th>
                            <th>até 22/10/2023</th>
                            <th>a partir de 23/10/2023</th>
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
                <BodyText>Cada inscrição garantirá acesso a todas as palestras, mesas redondas, sessões temáticas, minicursos (sujeitos à disponibilidade) 
                    e visitas técnicas (sujeitas à disponibilidade), além dos coffee breaks. Outras despesas não estão incluídas na inscrição, como almoços, 
                    hospedagens, programação cultural, etc.</BodyText>
                <BodyText>Para aqueles que publicarem artigos ou trabalhos técnicos, há valores que devem ser pagos adicionalmente à inscrição. Estes serão 
                    pagos uma única vez, por artigo/trabalho técnico, independentemente do número de autores, segundo a tabela abaixo:</BodyText>
                    <table class="table-auto text-center border-separate border-spacing-2">
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
                <BodyText>As inscrições estão sujeitas à disponibilidade de vagas e acontecerão por ordem de realização.</BodyText>
                <div className='flex justify-center '>                
                    <div className="bg-pallete-blue text-pallete-white rounded-lg max-w-sm p-3 shadow-lg text-center md:text-xl text-base font-black">Inscrições começam em 12/06</div>
                </div>

            </div>
        </main>
        )
    }