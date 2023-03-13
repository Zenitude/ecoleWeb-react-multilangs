import React, { useContext } from 'react';
import { LanguagesContext } from '../../utils/context/context';
import { ContentContainer, ContentTitle, ContentText } from './Content.style';

export default function Content({dimension}) {
  const { data } = useContext(LanguagesContext);
  
  return (
    <ContentContainer dimension={dimension}>
      <ContentTitle>{data.title}</ContentTitle>
      <ContentText>{data.txt}</ContentText>
    </ContentContainer>
  )
}
