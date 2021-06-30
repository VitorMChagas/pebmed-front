import styled from "styled-components";
import { IoCheckmark } from "react-icons/io5";
import { TiStarOutline } from "react-icons/ti";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > h2 {
    padding: 18px;
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.primary};
  }

  > p {
    font-size: 1.2rem;
    text-align: center;
    color: ${(props) => props.theme.colors.grayText};
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const CheckMark = styled(IoCheckmark)`
  border: 2px solid ${(props) => props.theme.colors.gray};
  border-radius: 50px;
  padding: 10px;
  display: flex;
  color: ${(props) => props.theme.colors.primary};
  margin-top: 5%;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 24rem;
  height: 14rem;
  margin-top: 5%;

  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const CheckoutBox = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  background-color: ${(props) => props.theme.colors.gray};
  border-radius: 15px;
  padding: 15px;
`;

export const Star = styled(TiStarOutline)`
  background-color: ${(props) => props.theme.colors.grayDetail};
  padding: 13px;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    color: #26246d;
    outline: none;
  }

  &:active {
    color: yellow;
  }
`;

export const PlanBox = styled.div`
  font-size: 1rem;
  font-weight: 600;

  color: ${(props) => props.theme.colors.primary};
  text-align: end;
`;

export const UserBox = styled.div`
  margin-top: -20px;
  padding: 0 45px 30px;

  > section div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 20px;
    font-weight: bold;

    font-size: 1rem;

    color: ${(props) => props.theme.colors.text};

    > span {
      font-size: 1rem;

      color: ${(props) => props.theme.colors.grayText};
    }
  }
`;

export const ManagePlanBtn = styled.button`
  font-weight: 600;
  cursor: pointer;
  margin-top: 60px;
  height: 55px;
  text-align: center;
  border: none;

  background-color: #fff;
  color: ${(props) => props.theme.colors.primary};
  transition: 0.1s ease-out;

  &:hover {
    color: #26246d;
    outline: none;
  }

  &:active {
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const HomeBtn = styled.button`
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 55px;
  width: 25rem;
  text-align: center;
  border: none;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.primary};

  transition: 0.1s ease-out;

  &:hover {
    background-color: #26246d;
    outline: none;
  }

  &:active {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
