import BodyText from "./BodyText";
import Subtitle from "./Subtitle";

export default function Sobre() {
    return (
        <section id="institucional" className="text-pallete-medium-dark px-4 md:px-16 xl:px-28 2xl:px-60 my-20 ">
           <Subtitle>Sobre o CBGDP</Subtitle>
           <div className="xl:grid xl:grid-cols-2 gap-7">
                <div> 
                <span className=" text-pallete-blue font-bold lg:mr-10 lg:mb-0 mb-10 text-2xl lg:text-3xl">Bem-vindos ao 14º Congresso Brasileiro de Inovação e Gestão de Desenvolvimento do Produto!</span> 
                <BodyText>Este evento único reunirá especialistas e profissionais de diversas áreas para explorar as mais recentes tendências e estratégias relacionadas à gestão da inovação e de produtos 
                inovadores. Com uma programação diversificada, o congresso oferecerá uma experiência enriquecedora e inspiradora para todos os participantes. </BodyText>
        
                <BodyText>O Congresso Brasileiro de Inovação e Gestão de Desenvolvimento do Produto (CBGDP) é um evento bienal que ocorre desde 1999, com o objetivo de estimular o 
                    compartilhamento de conhecimentos e experiências relacionados ao desenvolvimento de produtos por empresas, seus profissionais e grupos de pesquisa 
                    brasileiros. O congresso é realizado nos anos ímpares e tem sido sediado pelos mais renomados centros de pesquisa em desenvolvimento de produtos do Brasil.</BodyText>
                </div>
                <div className="absolut bg-pallete-orange rounded-tl-[70%] h-[100%] 2xl:h-[70%] w-fit">
                        <img className="relative rounded-tl-[70%] h-[100%] left-4 top-4" src={"/cbgdp2023/people.jpg"} alt={""} />
                </div>
            </div>

        </section>
        )}