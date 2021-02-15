import React from 'react';

import GifProjeto from '../../images/projeto-github.gif'

const UltimoProjeto = () => {

    return (
      <section className="projeto">
        <h1>Meu último projeto no Github</h1>

        <figure className="projeto__figure">
            <img className="projeto__image" src={GifProjeto} alt="Projeto no Github" />
        </figure>

        <a className="projeto__link" target="_blank" href="https://github.com/BernardoOficial/Tracking-Intro-Component-Master">Acessar último projeto</a>

      </section>
    );
}

export default UltimoProjeto;