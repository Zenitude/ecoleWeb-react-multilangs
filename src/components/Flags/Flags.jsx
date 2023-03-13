import React, { useContext } from 'react';
import { LanguagesContext } from '../../utils/context/context';
import { FlagsContainer } from './Flags.style';
import { ReactComponent as France } from '../../assets/flags/france.svg';
import { ReactComponent as Spain } from '../../assets/flags/spain.svg';
import { ReactComponent as UK } from '../../assets/flags/united-kingdom.svg';

export default function Flags({dimension}) {
  const { setLang } = useContext(LanguagesContext);

  function changeLang(e) {
    e.preventDefault();
    const lang = e.target.parentElement.parentElement.getAttribute('data-lang') === null
    ? e.target.parentElement.parentElement.parentElement.getAttribute('data-lang').toUpperCase() 
    : e.target.parentElement.parentElement.getAttribute('data-lang').toUpperCase();
    setLang(`${lang}`);
  }

  return (
    <FlagsContainer dimension={dimension}>
      <button data-lang="fr" onClick={changeLang}><France /></button>
      <button data-lang="es" onClick={changeLang}><Spain /></button>
      <button data-lang="en" onClick={changeLang}><UK /></button>
    </FlagsContainer>
  )
}
