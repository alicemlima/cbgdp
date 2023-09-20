export default function BodyEmphasis({ children, fontSize = 'text-lg' }) {
    return (
        <div className={` text-pallete-blue font-bold lg:mr-10 mb-2 mt-5 ${fontSize}`}>
            {children}
        </div>
    );
}
