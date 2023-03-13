import React, { useContext } from 'react';
import { LanguagesContext } from '../../utils/context/context';
import { FlagsContainer } from './Flags.style';
import france from '../../assets/flags/france.svg';
import spain from '../../assets/flags/spain.svg';
import uk from '../../assets/flags/united-kingdom.svg';

export default function Flags({dimension}) {
  const { setLang } = useContext(LanguagesContext);

  function changeLang(e) {
    e.preventDefault();
    const lang = e.target.getAttribute('data-lang').toUpperCase();
    setLang(`${lang}`);
  }

  return (
    <FlagsContainer dimension={dimension}>
      <input type="image" src={france} onClick={changeLang} data-lang="fr" aria-label="change language to french"/>
      <input type="image" src={spain} onClick={changeLang} data-lang="es" aria-label="change language to spanish"/>
      <input type="image" src={uk} onClick={changeLang} data-lang="en" aria-label="change language to english"/>
    </FlagsContainer>
  )
}
