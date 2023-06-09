import TitlePage from "@/src/components/TitlePage";
import Subtitle from "@/src/components/Subtitle"
import BodyText from "@/src/components/BodyText";

export default function institucional() {
    return (
        <main className="mx-auto">
            <TitlePage>Institucional</TitlePage>
        <div id="institucional" className="text-pallete-medium-dark px-4 md:px-16 xl:px-28 2xl:px-64 pb-10 flex items-center flex-wrap">
        
            <div >
                <Subtitle>Sobre o evento</Subtitle>
                <div>
                    <BodyText>O Congresso Brasileiro de Inovação e Gestão de Desenvolvimento do Produto (CBGDP) é um evento bienal que ocorre desde 1999, com o objetivo 
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
                            <img className="max-w-[60%]" src={"/cbgdp2023/ufrn-logo.png"} alt="" /></a>
                            <a href="https://www.igdp.org.br/">
                            <img  className="max-w-[70%]" src={"/cbgdp2023/igdp-logo.png"} alt="" /></a>
                        </div>
                    </div>
                    <div>
                        <Subtitle>Apoio</Subtitle>
                        <div className="flex items-center">
                            <a href="https://ufrn.br/">
                            <img className="max-w-[90%]" src={"/cbgdp2023/fiern-logo.png"} alt="" /></a>
                            <a href="https://www.igdp.org.br/">
                            <img src={"/cbgdp2023/imd-logo.png"} alt="" /></a>
                            <a href="https://www.igdp.org.br/">
                            <img src={"/cbgdp2023/senai-logo.png"} alt="" /></a>
                        </div>
                    </div>
                </div>
                
                <Subtitle>Comitê</Subtitle>
                <div className="text-base md:text-lg grid grid-cols-2 gap-5 ">
                    <div >
                        <h2 className="text-lg md:text-xl ">Coordenação Geral</h2>
                        <li>Prof. Dr. Wesley Canedo de Souza Junior (UFRN)</li>
                        <li>Prof. Dr. Luís Fernando Magnanini (UFU)</li>
                    </div>
                    
                    <div>
                        <h2 className="text-lg md:text-xl ">Comitê de programação</h2>
                        <li>Prof. Dr. Guilherme Brittes Benitez (PUCPR)</li>
                        <li>Prof. Dr. Fernando Henrique Lermen (Universidade Estadual do Paraná)</li>
                        <li>Prof. Dr. Luís Fernando Magnanini de Almeida (UFU)</li>
                        <li>Prof. Dr. Wesley Canedo de Souza Junior (UFRN)</li>
                        <li>Prof. Dr. Raoni Barros Bagno (UFMG)</li>
                        <li>Prof. Dr. Daniel Jugend</li>
                    </div>
                    <div>
                        <h2 className="text-xlgl md:text-xl ">Comitê administrativo</h2>
                        <li>Prof. Dr. Wesley Canedo de Souza Junior (UFRN)</li>
                    </div>
                    <div>
                        <h2 className="text-lg md:text-xl">Comitê científico</h2>
                        <li>Prof. Dr. Luís Fernando Magnanini (UFU)</li>
                        <li>Prof. Dr. Raoni Barros Bagno (UFMG)</li>
                        <li>Prof. Dr. Daniel Capaldo Amaral (USP)</li>
                        <li>Prof. Dr. Diego De Castro Fettermann (UFSC)</li>
                        <li>Prof. Dr. Fernando Henrique Lermen (Universidade Estadual do Paraná)</li>
                        <li>Prof. Dr. Glauco Henrique De Sousa Mendes (UFSCar)</li>
                        <li>Prof. Dr. Guilherme Brittes Benitez (PUC-PR)</li>
                        <li>Prof. Dr. Hugo Jose Ribeiro Junior (UNIFEI)</li>
                        <li>Profa. Dra. Istefani Carisio de Paula (UFRGS)</li>
                        <li>Prof. Dr. Maicon Gouvea de Oliveira (USP)</li>
                        <li>Prof. Dr. Mario Orestes Aguirre Gonzalez (UFRN)</li>
                        <li>Prof. Dr. Matheus Luiz Pontelo de Souza (PUC-MG)</li>
                        <li>Prof. Dr. Milton Borsato (UFPR)</li>
                        <li>Profa. Dra. Cynara Mendonça Moreira Tinoco (UFG)</li>
                        <li>Profa. Dra. Sania Da Costa Fernandes (Universidade Presbiteriana Mackenzie)</li>
                    </div>
                </div> 
            </div>
        </div>
        </main>
        )}