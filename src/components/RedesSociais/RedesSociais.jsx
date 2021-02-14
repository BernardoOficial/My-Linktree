import React from 'react';

import IconLinkedin from '../../images/icon-linkedin.svg'
import IconGithub from '../../images/icon-github.svg'

const RedesSociais = () => {

    return (
      <nav className="redes-sociais">
        <h3 className="redes-sociais__text">Conheça minhas redes sociais ✌🏼</h3>
        <ul className="redes-sociais__list">
          <li className="redes-sociais__item">
            <a className="redes-sociais__link"
              href="https://linkedin.com.br/in/bernardo-pereira-oliveira"
              target="_blank"
            >
              <img className="redes-sociais__icon" src={IconLinkedin} alt="Acesse meu Linkedin" />
            </a>
          </li>
          <li className="redes-sociais__item">
            <a className="redes-sociais__link" href="https://github.com/BernardoOficial" target="_blank">
              <img className="redes-sociais__icon" src={IconGithub} alt="Acesse meu Github" />
            </a>
          </li>
        </ul>
      </nav>
    );
}

export default RedesSociais;
