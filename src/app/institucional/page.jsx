import TitlePage from "@/src/components/TitlePage";
import Subtitle from "@/src/components/Subtitle"
import BodyText from "@/src/components/BodyText";

export default function institucional() {
    return (
        <main className="mx-auto">
            <TitlePage>Institucional</TitlePage>
        <div id="institucional" className="text-pallete-medium-dark px-4 md:px-16 xl:px-28 2xl:px-64 my-20 flex items-center flex-wrap">
        
            <div >
                <Subtitle>Sobre o evento</Subtitle>
                <div>
                    <BodyText>O Congresso Brasileiro de Desenvolvimento de Produtos (CBGDP) é um evento bienal que ocorre desde 1999, com o objetivo 
                        de estimular o compartilhamento de conhecimentos e experiências relacionados ao desenvolvimento de produtos por empresas, seus 
                        profissionais e grupos de pesquisa brasileiros. O congresso é realizado nos anos ímpares e tem sido sediado pelos mais renomados 
                        centros de pesquisa em desenvolvimento de produtos do Brasil.</BodyText>
                    <BodyText>Neste ano, o CBGDP será sediado na cidade de Natal, localizada no estado do Rio Grande do Norte. Natal foi escolhida como 
                        sede do evento devido à sua crescente relevância no cenário de pesquisa e desenvolvimento de inovações no país, especialmente na 
                        área sustentável. A cidade possui instituições de ensino e pesquisa de destaque, além de contar com uma infraestrutura adequada 
                        para receber os participantes do congresso.</BodyText>
                    <BodyText>Durante o CBGDP serão promovidas palestras, minicursos e apresentações de trabalhos técnicos e científicos, abordando diversas
                         áreas do desenvolvimento de produtos. Os participantes terão a oportunidade de trocar experiências, discutir tendências e ampliar 
                         seus conhecimentos nesse campo.</BodyText>
                    <BodyText>Com o passar dos anos, o CBGDP tem se consolidado como um importante fórum para a disseminação de boas práticas e avanços científicos 
                        relacionados ao desenvolvimento de produtos no Brasil. Além disso, o evento contribui para fortalecer o networking entre empresas e consultorias, 
                        bem como aprofundar a colaboração entre grupos de pesquisa sobre inovação tecnológica no país.</BodyText>

                </div>

                <div className="grid md:grid-cols-2 md:gap-5">
                    <div>
                        <Subtitle>Organização</Subtitle>
                        <div className="flex items-center">
                            <a href="https://ufrn.br/">
                            <img className="max-w-[60%]" src={"/ufrn-logo.png"} alt="" /></a>
                            <a href="https://www.igdp.org.br/">
                            <img  className="max-w-[70%]" src={"/igdp-logo.png"} alt="" /></a>
                        </div>
                    </div>
                    <div>
                        <Subtitle>Apoio</Subtitle>
                        <div className="flex items-center">
                            <a href="https://ufrn.br/">
                            <img className="max-w-[90%]" src={"/fiern-logo.png"} alt="" /></a>
                            <a href="https://www.igdp.org.br/">
                            <img src={"/imd-logo.png"} alt="" /></a>
                            <a href="https://www.igdp.org.br/">
                            <img src={"/senai-logo.png"} alt="" /></a>
                        </div>
                    </div>
                </div>
                
                <Subtitle>Comitê</Subtitle>
                <div className="text-base md:text-xl grid grid-cols-2 gap-5 ">
                    <div >
                        <h2 className="text-xl md:text-2xl ">Coordenação Geral</h2>
                        <li>Prof. Dr. Wesley Canedo de Souza Junior (UFRN)</li>
                        <li>Prof. Dr. Luís Fernando Magnanini (UFU)</li>
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl">Comitê científico</h2>
                        <li>Prof. Dr. Luís Fernando Magnanini (UFU)</li>
                        <li>Prof. Dr. Raoni Barros Bagno (UFMG)</li>
                        <li>Prof. Dr. Daniel Capaldo Amaral</li>
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl ">Comitê de programação</h2>
                        <li>Prof. Dr. Daniel Jugend</li>
                        <li>Prof. Dr. Guilherme Brittes Benitez (PUCPR)</li>
                        <li>Prof. Dr. Daniel Capaldo Amaral</li>
                    </div>
                    <div>
                        <h2 className="text-xl md:text-2xl ">Comitê administrativo</h2>
                        <li>Prof. Dr. Wesley Canedo de Souza Junior (UFRN)</li>

                    </div>
                </div> 
            </div>
        </div>
        </main>
        )}