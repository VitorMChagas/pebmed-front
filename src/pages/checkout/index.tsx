import React, { useEffect, useState } from "react";

import { 
  Container, 
  Content, 
  PlansDiv, 
  Plan, 
  FormDiv,
  AboutContainer, 
  About, 
  QuestionCircle 
} from "./styles";

import axios from "axios";
import FormData from './components/Form/index';

const Checkout: React.FC = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function requestData() {
      const response = await axios.get(
        "https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/offer"
      );
      console.log(response);
      setPlans(response.data);
    }

    requestData();
  }, []);

  console.log(plans);

  return (
    <Container>
      <Content>
      <FormDiv>
        <h4>Estamos quase lá!</h4>
        <p>Insira seus dados de pagamento abaixo:</p>
        <FormData />

      </FormDiv>

      <PlansDiv>
        <h4>Confira seu Plano:</h4>
        <p>fulano@cicrano.com.br</p>
        <div>
          {plans?.map((plan) => (
            <Plan
              storeId={plan.storeId}
              title={plan.title}
              description={plan.description}
              fullPrice={plan.fullPrice}
              discountAmmount={plan.discountAmmount}
              discountPercentage={plan.discountPercentage}
              installments={plan.installments}
            />
          ))}
        </div>
        <AboutContainer>
          <About>Sobre a cobrança</About>
          <QuestionCircle size={20} />
        </AboutContainer>
      </PlansDiv>
      </Content>
    </Container>
  );
};

export default Checkout;
