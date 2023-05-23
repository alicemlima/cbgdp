export default function Banner() {
    return (
        <section id="home" className="bg-hero bg-no-repeat bg-center bg-cover">
            <div className="z-0 h-screen px-4 md:px-16 xl:px-28 2xl:px-60 bg-pallete-blue bg-opacity-90">
                <div className="h-full grid xl:grid-cols-2 justify-center content-center">
                    <div>
                        <h2 className="text-pallete-orange text-3xl md:text-5xl 2xl:text-7xl font-medium">14º Congresso Brasileiro</h2>
                        <h1 className="text-pallete-white text-4xl md:text-7xl 2xl:text-8xl font-black">de Inovação e Gestão do Desenvolvimento de Produto</h1>
                        <p className="text-pallete-white md:text-2xl font-light text-justify mt-5">
                        O CBGDP está de volta, reunindo a brilhante comunidade acadêmica e profissionais atuantes na gestão da inovação e do desenvolvimento do produto.  
                        </p>
                    </div>
                    <div className="text-pallete-white text-lg md:text-3xl my-10 xl:justify-self-end 2xl:justify-self-center" >
                        <h4 className="font-bold">22 a 23 de novembro de 2023</h4>
                        <h4 className="font-thin">Natal, Rio Grande do Norte</h4>
                        <div className="bg-pallete-orange text-pallete-white rounded-lg max-w-sm mt-5 text-center md:text-2xl text-xl font-black">Mais informações em breve</div>
                    </div>
                </div>
            </div>
            
        </section>
        )}