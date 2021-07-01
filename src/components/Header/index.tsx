import { useRouter } from 'next/router';
import React from 'react';

import { Container, LeftArrow, Empty } from './styles';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <Container>
      <LeftArrow size={40} onClick={() => router.back()} />
      <img src="/logo.png" alt="Header Logo" />
      <Empty>PEBMED</Empty>
    </Container>
  );
};

export default Header;
