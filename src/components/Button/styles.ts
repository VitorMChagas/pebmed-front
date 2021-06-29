import styled from 'styled-components';

export const MainButton = styled.button`
  
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  width: 25rem;
  height: 60px;
  text-align: center;
  border: none;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.primary};

  transition: 0.1s ease-out;

  &:hover {
    background-color: #26246D;
    outline: none;
  }

  &:active {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;