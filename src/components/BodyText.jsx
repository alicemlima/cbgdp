export default function BodyText({ children }) {
    return (
        <div className="text-justify lg:mr-10 lg:mb-0 mb-10 text-xl lg:text-2xl text-pallete-medium-dark my-5">
            {children}
        </div>
    );
  }