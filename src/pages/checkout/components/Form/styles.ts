import styled from 'styled-components'
import { Form as Unform } from '@unform/web'

import { BiChevronDown } from "react-icons/bi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 22rem;
  margin-right: 50px;

  > div img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 62%;
    margin-left: 3.8rem;
    margin-bottom: 10px;
  }

  > div img:last-child {
    width: 40%;
    margin-left: 6.5rem;
  }
`

export const Group = styled.div`
  margin-top: 20px;
`

export const Form = styled(Unform)`
  > div {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    flex-direction: row;
    flex-wrap: nowrap;

    > label {
      font-size: 1rem;

    }
  }

  > label {
    color: #666173;
    margin-bottom: 10px;
    font-size: 1rem;

  }

  .inputClass {
    width: 100%;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: flex;
    border: none;
    border-bottom: 2px solid #e7e7e7;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.formText};

    ::placeholder {
      color: ${(props) => props.theme.colors.formText}
    }
  }

  .selectClass {
    appearance: none;
    width: 100%;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: flex;
    border: none;
    border-bottom: 2px solid #e7e7e7;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.formText};
  }
`

export const SelectIcon = styled(BiChevronDown)`
  display: flex;
  position: absolute;
  margin: 0.8rem 26rem;
  color: #666173;
  cursor: default;
  pointer-events: none;
`;

export const Select = styled.select`
    appearance: none;
    width: 100%;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: flex;
    border: none;
    border-bottom: 2px solid #e7e7e7;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.formText};

`;

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