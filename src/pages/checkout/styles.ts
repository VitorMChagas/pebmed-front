import styled from 'styled-components';
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
 display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  height: 100%;
  width: 70vw;
`;


export const FormDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 25px;
`;
export const PlansDiv = styled.div`
  padding: 25px;

  > h4 {
    font-size: 1.5rem;
  }

  > p {
    padding: 6px 8px;
  }


  > div {
      margin-top: 50px;
  }
`;

export const Plan = styled(AppPlan)`
  margin-top: 10px;
`;
