import styled from 'styled-components';
import { FiChevronLeft } from 'react-icons/fi';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 64px;
  width: 100vw;

  padding: 40px;

  > img {
    width: 55px;
    height: 35px;

    @media only screen and (max-width: 768px) {
      margin-left: 60px;
      flex-direction: row;
    }
  }
`;

export const LeftArrow = styled(FiChevronLeft)`
  cursor: pointer;

  &:hover {
    color: #26246d;
    outline: none;
  }

  &:active {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const Empty = styled.div`
  visibility: hidden;
`;
