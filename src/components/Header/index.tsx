import React from 'react';

import { Container, LeftArrow, Empty } from './styles';


const Header: React.FC = () => {
  return <Container>
    <LeftArrow size={40} />
    <img src="/logo.png" alt=""/>
    <Empty>PEBMED</Empty>
  </Container>;
}

export default Header;