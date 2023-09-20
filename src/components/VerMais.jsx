import React, { useState } from 'react';
import BodyText from './BodyText';

class VerMais extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showFullText: false,
      };
    }
  
    toggleText = () => {
      this.setState((prevState) => ({
        showFullText: !prevState.showFullText,
      }));
    };
  
    render() {
      const { textoCurto, textoLongo, className } = this.props;
      const { showFullText } = this.state;
      const buttonText = showFullText ? 'Ver Menos' : 'Ver Mais';
  
      return (
        <div className={"mt-5"}>
           <div className='text-justify lg:mb-0 text-base xl:text-lg text-pallete-medium-dark'>{textoCurto }</div>
          {showFullText ? (
            <div className='text-justify lg:mb-0 text-base xl:text-lg text-pallete-medium-dark'>{textoLongo}</div>
          ) : null}
          <button className='text-pallete-link text-base xl:text-lg' onClick={this.toggleText}>{buttonText}</button>
        </div>
      );
    }
  }
  
  export default VerMais;