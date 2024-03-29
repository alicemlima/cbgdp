import React from 'react';
import Image from 'next/image';
import BodyEmphasys from './BodyEmphasys';

const Imagem = ({imagem, descricao}) => {
  return (
    <div className='grid gap-5 justify-items-center'>
      <div className="absolut rounded-md bg-pallete-orange max-h-60 w-fit">
        <img 
          className="relative rounded-md max-h-60 left-4 top-4" 
          src={imagem}
          alt={descricao} />
      </div>
      <BodyEmphasys>{descricao}</BodyEmphasys>
    </div>
  );
};

export default Imagem;
