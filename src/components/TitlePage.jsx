export default function TitlePage({ children }) {
    return (
      <div className="w-full pt-24 rounded-br-full pb-4 bg-pallete-blue lg:mb-20">
              <h1 className="text-pallete-white capitalize text-4xl md:text-6xl 2xl:text-7xl font-thin px-4 md:px-16 xl:px-28 2xl:px-54 ">{children}</h1>
              </div>
    );
  }