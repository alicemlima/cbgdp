export default function ButtonDefault({ title, link }) {
    return (
    <a href={link} className="h-fit bg-pallete-blue hover:bg-pallete-white hover:text-pallete-blue text-pallete-white hover:border-transparent border rounded-lg max-w-sm p-3 shadow-lg text-center md:text-xl text-base font-black cursor-pointer">
            {title}
        </a> 
    );
  }