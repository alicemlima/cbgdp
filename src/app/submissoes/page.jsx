import React from 'react';
import Subtitle from "@/src/components/Subtitle"
import TitlePage from "@/src/components/TitlePage"
import { AiOutlineDownload } from 'react-icons/ai';
import BodyText from "@/src/components/BodyText"
import Accordion from "@/src/components/Accordion"
import BodyEmphasys from '@/src/components/BodyEmphasys';

export default function submissoes() {
    const accordionItems = [
        { title:"Transformação Digital", text: "A digitalização, o seu impacto e oportunidades no processo de desenvolvimento de tecnologias, no desenvolvimento de produtos/serviços/processos, no desenvolvimento de negócios disruptivos, e na transformação digital de empresas. "},
        { title:"Ecossistemas empreendedores", text: "A formação, desenvolvimento e gestão de ecossistemas empreendedores. O papel e as ferramentas da gestão de inovação, desenvolvimento de produtos/serviços/processos, no desenvolvimento de negócios disruptivos, em todos os seus níveis e atores: startups, spinoffs acadêmicos e corporativos, centros de pesquisa, laboratórios abertos, parques tecnológicos, incubadoras de empresas, incubadoras corporativas, aceleradoras, venture builders, coworking, cidades inteligentes, grupos de investimento, etc."},
        { title:"ESG e Economia Circular", text: "Estudos sobre o desenvolvimento de inovações e ofertas sustentáveis de produtos, serviços, processos e embalagens que lidem com questões ambientais, sociais e de governança em suas práticas de negócios, bem como com estratégias da Economia Circular. A temática geral de gestão destes processos, envolvendo desde questões sobre estratégias, portfólios, modelos de processo, gestão de recursos humanos, cultura, empreendedorismo e outras nos níveis de política e organização de processos de inovação."},
        { title:"Gestão da Inovação, Design e Desenvolvimento de Produtos e Serviços", text: "Estratégias e estudos sobre toda a temática geral de gestão destes processos, envolvendo desde questões sobre estratégias, portfólios, modelos de processo, gestão de recursos humanos, cultura, empreendedorismo e outras nos níveis de política e organização de processos de inovação, incluindo recursos humanos e trabalho em equipe. Também envolve métodos, técnicas e ferramentas como: diagnósticos, técnicas de controle visual, métodos ágeis e híbridos de gestão de projetos. Métodos inovadores ou pouco conhecidos são muito bem-vindos e estimulados. Uma oportunidade para que o profissional/pesquisador possa discutir e melhorar as suas propostas junto com a comunidade."},
  
    ];
    return (
        <main className="mx-auto">
            <TitlePage>Submissões</TitlePage>
            <div className="w-full space-y-5 text-pallete-white px-4 md:px-16 xl:px-28 2xl:px-64 pb-10 flex flex-wrap flex-col content-start ">
                <div className='w-full'>
                    <Subtitle >Temas</Subtitle>
                   
                        <div className="grid md:grid-cols-4 items-center justify-items-center gap-x-4">
                            <div className='md:col-span-3'>
                            <BodyText>Estamos entusiasmados em anunciar a abertura da chamada de artigos científicos e trabalhos técnicos sobre os temas de inovação e gestão do desenvolvimento de produtos.</BodyText>
                            <BodyText>Convidamos empresas e pesquisadores a compartilharem suas descobertas, experiências e melhores práticas nesse importante campo que está em constante evolução. Este é o momento ideal para apresentar suas pesquisas e insights sobre estratégias inovadoras, processos de desenvolvimento de produtos, adoção de tecnologias emergentes, tendências de mercado e muito mais.</BodyText>
                            <BodyText>Aproveite essa oportunidade para contribuir com o avanço do conhecimento e fazer parte de uma comunidade dedicada à inovação. Todos os artigos e trabalhos técnicos submetidos serão avaliados pelo comitê científico do 14º CBGDP.</BodyText>

                            </div>
                            <a href={"https://www.even3.com.br/participante/trabalhocientifico/"} className="h-fit bg-pallete-orange hover:bg-pallete-white hover:text-pallete-orange text-pallete-white hover:border-transparent border rounded-lg max-w-sm p-3 shadow-lg text-center md:text-xl text-base font-black cursor-pointer">
                                Submeter Artigo
                            </a> 
                        </div>
                    <BodyEmphasys>A seguir são enumerados os grandes temas do CBGDP 2023 para submissão dos trabalhos:</BodyEmphasys>
                    <div className="grid gap-5 xl:mt-10 xl:gap-8">
                       
                        {accordionItems.map((item, idx) => (
                            <Accordion key={idx} title={item.title} text={item.text} />
                        ))}
                    </div>
                    <BodyText>Os trabalhos aceitos serão apresentados nas sessões temáticas, que representam um momento importante para a divulgação e discussão de pesquisas científicas e práticas profissionais relacionadas à Inovação e Desenvolvimento de Produto.</BodyText>
                    <BodyText>As sessões temáticas serão organizadas de acordo com os quatro principais temas do congresso e terão duração aproximada de duas horas, dentro das quais serão apresentados vários trabalhos. Os trabalhos selecionados serão divididos em duas modalidades de apresentação: oral e em pôster. Os melhores artigos e trabalhos técnicos serão escolhidos para apresentações orais, onde pelo menos um dos autores obrigatoriamente deverá conduzir a apresentação durante a sessão temática. Esta apresentação poderá ser presencial ou de forma remota. Após cada apresentação, haverá espaço para debates enriquecedores.</BodyText>
                    <BodyText>Outros trabalhos selecionados serão apresentados na forma de pôsteres, em espaços físicos dedicados para essa finalidade. Haverá momento de visitação aos pôsteres, sendo recomendável (mas não obrigatório) que pelo menos um dos autores esteja presente durante estes momentos para explicar e discutir o trabalho com os participantes.</BodyText>
                    <BodyText>Todos os trabalhos aprovados pelo comitê científico serão publicados nos anais.</BodyText>
                    <BodyText>Abaixo está disponibilizado o modelo para a submissão de artigos científicos e trabalhos técnicos. Com o artigo pronto, clique no botão acima “Submeter artigo”. Ao fazer isso, você será redirecionado para a página do evento na plataforma Even3, onde será guiado nos passos da submissão. Aproveite essa oportunidade para compartilhar seus conhecimentos e contribuir para o avanço da área.</BodyText>
                    <div className='flex justify-center space-x-5'>
                        <a href={"/cbgdp2023/modelo-artigo-cbgdp.pdf"} className="h-fit w-fit flex bg-pallete-blue hover:bg-pallete-white hover:text-pallete-blue text-pallete-white hover:border-transparent border rounded-lg max-w-sm p-3 shadow-lg text-center md:text-xl text-base">
                        CBGDP2023 Modelo de artigo <AiOutlineDownload className='ml-3' size={30}/>
                        </a> 
                        <a href={"https://www.even3.com.br/14-congresso-brasileiro-de-inovacao-e-gestao-de-desenvolvimento-de-produto-350837"} className="bg-pallete-orange hover:bg-pallete-white hover:text-pallete-orange text-pallete-white hover:border-transparent border rounded-lg max-w-sm p-3 shadow-lg text-center md:text-xl text-base cursor-pointer">
                            Realizar Inscrição
                        </a>
                    </div>
                </div>

                <div>
                    <Subtitle>Premiações</Subtitle>
                    <BodyEmphasys>Os melhores artigos avaliados de cada tema serão convidados para um fast track pela revistas:</BodyEmphasys >

                    <ul className='text-pallete-blue font-bold text-xl list-disc ml-5'>
                        <li>Product Management and Development</li>
                        <li>Produto & Produção</li>
                        <li>GEPROS</li>
                    </ul>
    
                    <BodyText>É importante destacar que a escolha pelo fast-track não garante a aceitação automática dos artigos pela revista, uma vez que o processo de avaliação permanece independente. No entanto, essa opção oferece uma análise mais rápida por parte da revista mencionada, agilizando o processo de avaliação dos trabalhos.</BodyText>
                    <BodyText>Os três melhores trabalhos de cada uma das 4 temáticas do CBGDP2023 serão premiados com um certificado de "Menção Honrosa".</BodyText>

                </div>
                
                <div>
                    <Subtitle>Datas importantes</Subtitle>
                    <BodyEmphasys>05/06/23 – Início da submissão dos artigos / trabalhos técnicos</BodyEmphasys> 
                    <BodyEmphasys>07/08/23 – Prazo final para submissão</BodyEmphasys> 
                    <BodyEmphasys>13/10/23 – Data limite para a resposta de aceitação do trabalho</BodyEmphasys> 


                </div>
            </div>
            
        </main>
        )
    }