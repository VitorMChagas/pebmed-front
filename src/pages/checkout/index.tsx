import React, { useEffect, useState } from "react";

import { Container, Content, PlansDiv, Plan, FormDiv } from "./styles";
import axios from "axios";

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
      <FormDiv>2</FormDiv>
      <PlansDiv>
        <h4>Confira seu Plano</h4>
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
            />
          ))}
        </div>
      </PlansDiv>
      </Content>
    </Container>
  );
};

export default Checkout;
