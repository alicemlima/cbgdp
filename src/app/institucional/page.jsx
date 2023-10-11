import TitlePage from "@/src/components/TitlePage";
import Subtitle from "@/src/components/Subtitle"
import BodyText from "@/src/components/BodyText";
import BodyEmphasis from "@/src/components/BodyEmphasys";

export default function institucional() {
    return (
        <main className="mx-auto">
            <TitlePage>Institucional</TitlePage>
        <div id="institucional" className="text-pallete-medium-dark px-4 md:px-16 xl:px-28 2xl:px-64 pb-10 flex items-center flex-wrap">
        
            <div >
                <Subtitle>Sobre o evento</Subtitle>
                <div>
                    <BodyText>O Congresso Brasileiro de Inovação e Gestão de Desenvolvimento do Produto (CBGDP) é um evento bienal que ocorre desde 1999, 
                        com o objetivo de estimular o compartilhamento de conhecimentos e experiências relacionados ao desenvolvimento de produtos por 
                        empresas, seus profissionais e grupos de pesquisa brasileiros. O congresso é realizado nos anos ímpares e tem sido sediado pelos 
                        mais renomados centros de pesquisa em desenvolvimento de produtos do Brasil.</BodyText>
                    <BodyText>Neste ano, o 14° Congresso Brasileiro de Inovação e Gestão de Desenvolvimento de Produto será sediado na cidade de Natal, 
                        localizada no estado do Rio Grande do Norte. Natal foi escolhida como sede do evento devido à sua crescente relevância no cenário 
                        de pesquisa e desenvolvimento de inovações no país, especialmente na área sustentável. A cidade possui instituições de ensino e 
                        pesquisa de destaque, além de contar com uma infraestrutura adequada para receber os participantes do congresso.</BodyText>
                    <BodyText>Durante o CBGDP serão promovidas palestras, minicursos e apresentações de trabalhos técnicos e científicos, abordando diversas 
                        áreas do desenvolvimento de produtos. Os participantes terão a oportunidade de trocar experiências, discutir tendências e ampliar seus 
                        conhecimentos nesse campo.</BodyText>
                    <BodyText>Com o passar dos anos, o CBGDP tem se consolidado como um importante fórum para a disseminação de boas práticas e avanços científicos 
                        relacionados ao desenvolvimento de produtos no Brasil. Além disso, o evento contribui para fortalecer o networking entre empresas e consultorias, 
                        bem como aprofundar a colaboração entre grupos de pesquisa sobre inovação tecnológica no país.</BodyText>

                </div> 

                <div>
                    <Subtitle>Organização</Subtitle>
                    <div className="grid grid-cols-5 justify-items-center space-x-5 place-items-center">
                        <a href="https://ufrn.br/">
                        <img  src={"/cbgdp2023/ufrn-logo.png"} alt="" /></a>
                        <a href="https://www.igdp.org.br/">
                        <img  className="max-w-[50%]" src={"/cbgdp2023/igdp-logo.png"} alt="" /></a>
                    </div>
                </div>
                <div>
                    <Subtitle>Patrocínio</Subtitle>
                    <div className="grid grid-cols-5 justify-items-center space-x-5 place-items-center">
                        <img  src={"/cbgdp2023/patrocinio/capes.png"} alt="" />
                        <img src={"/cbgdp2023/patrocinio/metropole-parque.png"} alt="" />
                        <img  src={"/cbgdp2023/patrocinio/doisA.png"} alt="" />
                        <img className={" max-h-[150px]"} src={"/cbgdp2023/patrocinio/coxinha.jpg"} alt="" />
                        <img className={" max-h-[150px]"} src={"/cbgdp2023/patrocinio/i2.png"} alt="" />
                        <img className={" max-h-[150px]"}  src={"/cbgdp2023/patrocinio/mudra.png"} alt="" />
                        <img className={" max-h-[150px]"} src={"/cbgdp2023/patrocinio/produmar.png"} alt="" />
                    </div>
                </div>
                <div>
                    <Subtitle>Apoio</Subtitle>
                    <div className="grid grid-cols-5 justify-items-center space-x-5 place-items-center">
                        <img  src={"/cbgdp2023/apoio/UFU.jpg"} alt="" />
                        <img src={"/cbgdp2023/apoio/UFMG.png"} alt="" />
                        <img className={" max-h-[150px]"}  src={"/cbgdp2023/apoio/UNESPAR.jpg"} alt="" />
                        <img className={" max-h-[150px]"} src={"/cbgdp2023/apoio/puc-pr.jpg"} alt="" />
                        <img className={" max-h-[150px]"} src={"/cbgdp2023/apoio/ufrgs.png"} alt="" />
                        <img className={" max-h-[150px]"} src={"/cbgdp2023/apoio/usp.png"} alt="" />
                        <img className={" max-h-[150px]"} src={"/cbgdp2023/apoio/UNIFEI.png"} alt="" />
                        <img className={" max-h-[150px]"} src={"/cbgdp2023/apoio/metropole-parque.png"} alt="" />
                        <img  src={"/cbgdp2023/apoio/fiern-logo.png"} alt="" />
                        <img  src={"/cbgdp2023/apoio/senai-logo.png"} alt="" />
                    </div>
                </div>
                
                <Subtitle>Comitê</Subtitle>
                <div className="text-base md:text-lg grid grid-cols-2 gap-5 ">
                    <div >
                        <BodyEmphasis className="text-lg md:text-xl ">Coordenação Geral</BodyEmphasis>
                        <li>Prof. Dr. Wesley Canedo de Souza Junior - Coordenador (UFRN)</li>
                        <li>Prof. Dr. Luís Fernando Magnanini - Subcoordenador (UFU)</li>
                    </div>
                    
                    
                    <div>
                        <BodyEmphasis className="text-xlgl md:text-xl ">Comitê administrativo</BodyEmphasis>
                        <li>Prof. Dr. Wesley Canedo de Souza Junior (UFRN)</li>
                    </div>

                    <div>
                        <BodyEmphasis className="text-lg md:text-xl ">Comitê de programação</BodyEmphasis>
                        <li>Prof. Dr. Wesley Canedo de Souza Junior (UFRN)</li>
                        <li>Prof. Dr. Luís Fernando Magnanini de Almeida (UFU)</li>
                        <li>Prof. Dr. Fernando Henrique Lermen (Universidade Estadual do Paraná)</li>
                        <li>Prof. Dr. Guilherme Brittes Benitez (PUCPR)</li>
                        <li>Prof. Dr. Raoni Barros Bagno (UFMG)</li>
                        <li>Prof. Dr. Daniel Jugend</li>
                    </div>

                    <div>
                        <BodyEmphasis className="text-lg md:text-xl">Comitê científico</BodyEmphasis>
                       
                            <li>Prof. Dr. Luís Fernando Magnanini (UFU)</li>
                            <li>Prof. Dr. Wesley Canedo de Souza Junior (UFRN)</li>
                            <li>Dr. Antonio Álvaro de Assis Moura (Mackenzie)</li>
                            <li>Dra. Aline Sacchi Homrich (USP)</li>
                            <li>Dra. Graziela Darla Araújo Galvao (USP)</li>
                            <li>Lorene Thalia Pontes Miranda (PUCPR)</li>
                            <li>MSc. Ana Carolina Cintra Faria (UNB)</li>
                            <li>MSc. Diego Cesar Florencio de Queiroz (UNB)</li>
                            <li>MSc. Fabíola Renata Alves Roberto (PUCPR)</li>
                            <li>MSc. Josivan Leite (USP)</li>
                            <li>Prof. Dr. Daniel Capaldo Amaral (USP)</li>
                            <li>Prof. Dr. Daniel Jugend (UNESP)</li>
                            <li>Prof. Dr. Diego De Castro Fettermann (UFSC)</li>
                            <li>Prof. Dr. Fernando Henrique Lermen (UNESPAR)</li>
                            <li>Prof. Dr. Glauco Henrique De Sousa Mendes (UFSCar)</li>
                            <li>Prof. Dr. Guilherme Brittes Benitez (PUC-PR)</li>
                            <li>Prof. Dr. Hugo Jose Ribeiro Junior (UNIFEI)</li>
                            <li>Prof. Dr. João Luís Guilherme Benassi (IFSP)</li>
                            <li>Prof. Dr. Maicon Gouvea de Oliveira (USP)</li>
                            <li>Prof. Dr. Mario Orestes Aguirre Gonzalez (UFRN)</li>
                            <li>Prof. Dr. Matheus Luiz Pontelo de Souza (PUC-MG)</li>
                            <li>Prof. Dr. Mauro Caetano de Souza (ITA)</li>
                            <li>Prof. Dr. Milton Borsato (UFPR)</li>
                            <li>Prof. Dr. Raoni Barros Bagno (UFMG)</li>
                            <li>Prof. Dr. Ricardo Marques Sastre (UFRGS)</li>
                            <li>Prof. Dr. Sanderson Cesar Macedo Barbalho (UNB)</li>
                            <li>Profa. Dra. Camila de Araújo (UFU)</li>
                            <li>Profa. Dra. Cynara Mendonça Moreira Tinoco (UFG)</li>
                            <li>Profa. Dra. Istefani Carisio de Paula (UFRGS)</li>
                            <li>Profa. Dra. Istefani Carísio de Paula (UFRGS)</li>
                            <li>Profa. Dra. Jussara Goulart da Silva (UFU)</li>
                            <li>Profa. Dra. Kerlla de Souza Luz (UNB)</li>
                            <li>Profa. Dra. Mara Rúbia da Silva Miranda (UFU)</li>
                            <li>Profa. Dra. Sania Da Costa Fernandes (Universidade Presbiteriana Mackenzie)</li>

                    </div>
                </div> 
            </div>
        </div>
        </main>
        )}