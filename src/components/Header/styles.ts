import styled from 'styled-components';
import { FiChevronLeft } from "react-icons/fi";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

height: 64px;
width: 100vw;

padding: 40px;

  > img {
    width: 60px;
    height: 40px;
  }
  
`;

export const LeftArrow = styled(FiChevronLeft)``;