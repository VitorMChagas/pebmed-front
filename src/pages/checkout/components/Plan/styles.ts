import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  height: 120px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 16px;
  padding: 18px;
  transition: border 0.2s;

  &:hover {
    border: 1px solid blue;
  }

  > p {
    font-size: 10px;
    margin-top: 10px;
    color: red;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};
`;

export const Price = styled.span`
  margin: 100px 0 50px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
`;

export const Discount = styled.span`
  border-radius: 12px;
  background: #F5850B;
  color: ${(props) => props.theme.colors.background};
  font-size: .8rem;
  padding: 3px 10px;
  margin-left: 10px;
`;

export const Group = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;


  > input {
    width: 22px;
    height: 22px;
  }
`;