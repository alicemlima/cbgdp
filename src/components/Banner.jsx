export default function Banner() {
    return (
        <section id="home" className="bg-hero bg-no-repeat bg-center bg-cover">
            <div className="z-0 h-screen px-4 md:px-16 xl:px-28 2xl:px-60 bg-pallete-blue bg-opacity-90">
                <div className="h-full grid xl:grid-cols-2 justify-center content-center">
                    <div>
                        <h2 className="text-pallete-orange text-xl md:text-3xl 2xl:text-5xl font-medium">14º Congresso Brasileiro</h2>
                        <h1 className="text-pallete-white text-2xl md:text-5xl 2xl:text-6xl font-black">de Inovação e Gestão de Desenvolvimento do Produto</h1>
                        <p className="text-pallete-white md:text-xl font-light text-justify mt-5">
                        O CBGDP está de volta, reunindo a brilhante comunidade acadêmica e profissionais atuantes na gestão da inovação e do desenvolvimento do produto.  
                        </p>
                    </div>
                    <div className="text-pallete-white text-base md:text-xl my-10 xl:justify-self-end 2xl:justify-self-center" >
                        <h4 className="font-bold">22 a 25 de novembro de 2023</h4>
                        <h4 className="font-thin mb-5 text-pallete-orange">Natal, Rio Grande do Norte</h4>
                        <a href={"https://www.even3.com.br/14-congresso-brasileiro-de-inovacao-e-gestao-de-desenvolvimento-de-produto-350837"} className="h-fit bg-pallete-orange hover:bg-pallete-blue hover:text-pallete-orange text-pallete-white hover:border-transparent hover:border rounded-lg max-w-sm p-3 shadow-lg text-center md:text-xl text-base font-black cursor-pointer">
                            Realizar Inscrição
                        </a> 
                          </div>
                </div>
            </div>
            
        </section>
        )}