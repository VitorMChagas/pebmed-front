import styled from 'styled-components';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import AppPlan from './components/Plan';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  margin-top: 70px;
  margin-left: 17rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  height: 100%;
  width: 70vw;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    div:nth-child(1) {
      order: 2;
    }

    div:nth-child(2) {
      order: 1;
    }
  }
`;

export const FormDiv = styled.div`
  padding: 50px;

  > h4 {
    font-size: 1.5rem;
  }

  > p {
    margin-top: 8px;
    font-weight: 500;
  }

  > div {
    display: flex;
    margin-top: -10px;
  }
`;

export const FormData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlansDiv = styled.div`
  padding: 50px;

  > h4 {
    font-size: 1.5rem;
  }

  > p {
    justify-content: center;
    align-items: center;
    display: flex;
    border: 1px solid #f4f3f6;
    border-radius: 25px;
    width: 200px;
    padding: 6px 8px;
    margin: 9px 3px;
  }

  > div {
    margin-top: 50px;
  }
`;

export const Plan = styled(AppPlan)`
  margin-top: 10px;
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10rem;
  margin-left: 20%;
`;

export const About = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const QuestionCircle = styled(AiOutlineQuestionCircle)`
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;
