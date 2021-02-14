import React from 'react';

import Bernardo from '../../images/bernardo.jpg'
import RedesSociais from '../RedesSociais/RedesSociais';

const Header = () => {

    return (
      <header className="header">
        <figure className="header__figure">
          <img className="header__image" src={Bernardo} alt="Bernardo Pereira Oliveira" />
        </figure>
        <h1 className="header__nome">Bernardo Pereira</h1>
        <h3 className="header__area">Front-end developer</h3>
        <RedesSociais />
      </header>
    );
}

export default Header;