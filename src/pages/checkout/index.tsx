import React, { useEffect, useState } from "react";

import {
  Container,
  Content,
  PlansDiv,
  Plan,
  FormDiv,
  AboutContainer,
  About,
  QuestionCircle,
} from "./styles";

import FormData from "./components/Form/index";
import { OfferService } from "../../services/offer";

const Checkout: React.FC = () => {
  const [plans, setPlans] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  function formatToCurrency(amount: number) {
    return "R$" + amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  }

  function discountedPrice(fullPrice: number, discountAmmount: number) {
    var finalPrice = fullPrice - discountAmmount;

    return finalPrice;
  }

  function splittedPrice(installments: number, discountedPrice: number) {
    var finalSplittedPrice = discountedPrice / installments;

    return finalSplittedPrice;
  }

  useEffect(() => {
    async function requestData() {
      const response = await OfferService.list();
      console.log(response.data);
      setPlans(response.data);
    }

    requestData();
  }, []);

  function handleChange(value: boolean): void {
    setIsChecked(value);
  }

  return (
    <Container>
      <Content>
        <FormDiv>
          <h4>Estamos quase lá!</h4>
          <p>Insira seus dados de pagamento abaixo:</p>

          <FormData
            isChecked={isChecked}
            splittedPrice={splittedPrice}
            discountPrice={discountedPrice}
            formatToCurrency={formatToCurrency}
            installments={12}
          />
        </FormDiv>

        <PlansDiv>
          <h4>Confira seu Plano:</h4>
          <p>fulano@cicrano.com.br</p>
          <div>
            {plans?.map((plan) => (
              <Plan
                key={plan.id}
                formatToCurrency={formatToCurrency}
                discountedPrice={discountedPrice}
                splittedPrice={splittedPrice}
                storeId={plan.storeId}
                title={plan.title}
                description={plan.description}
                fullPrice={plan.fullPrice}
                discountAmmount={plan.discountAmmount}
                discountPercentage={plan.discountPercentage}
                installments={plan.installments}
                splittable={plan.splittable}
                isChecked={isChecked}
                onChange={() => handleChange(plan.splittable)}
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
