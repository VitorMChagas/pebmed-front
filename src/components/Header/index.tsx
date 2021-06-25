import React from 'react';

import { Container, LeftArrow } from './styles';


const Header: React.FC = () => {
  return <Container>
    <LeftArrow size={40} />
    <img src="/logo.png" alt=""/>
    <div>
      {' '}
    </div>
  </Container>;
}

export default Header;