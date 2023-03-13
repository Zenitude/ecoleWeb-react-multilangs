import React from 'react';
import { HomeContainer } from './Home.style';
import Flags from '../../components/Flags/Flags';
import Content from '../../components/Content/Content';
import useDimension from '../../utils/hooks/useDimension';

export default function Home() {
  const { dimension } = useDimension();

  return (
    <HomeContainer dimension={dimension}>
        <Flags dimension={dimension} />
        <Content dimension={dimension} />
    </HomeContainer>
  )
}
