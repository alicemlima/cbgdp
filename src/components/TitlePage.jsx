export default function TitlePage({ children }) {
    return (
      <div className="w-full pt-24 rounded-br-full pb-4 bg-pallete-blue lg:mb-10">
              <h1 className="text-pallete-white capitalize text-2xl md:text-4xl 2xl:text-5xl font-thin px-4 md:px-16 xl:px-28 2xl:px-54 ">{children}</h1>
              </div>
    );
  }