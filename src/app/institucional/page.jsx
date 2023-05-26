import TitlePage from "@/src/components/TitlePage";
import Subtitle from "@/src/components/Subtitle"

export default function institucional() {
    return (
        <main className="h-screen">
            <TitlePage>Institucional</TitlePage>
        <div id="institucional" className="text-pallete-medium-dark px-4 md:px-16 xl:px-28 2xl:px-64 my-20 flex items-center flex-wrap">
            
            <div >
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
                            <img src={"/imd-logo.svg"} alt="" /></a>
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