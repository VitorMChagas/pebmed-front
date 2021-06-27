import React from 'react';

import { 
  Container, 
  CheckMark, 
  InfoBox,
  CheckoutBox,
  Star,
  PlanBox,
  UserBox,
  ManagePlanBtn,
  HomeBtn
} from './styles';

const Success: React.FC = () => {
  return (
    <Container>
        <CheckMark size={70}/>
          <h2>Parabéns!</h2>
          <p>Sua assinatura foi realizada<br/>
              com sucesso.
          </p>
        <InfoBox>
          <CheckoutBox>
            <Star size={50} />
            <PlanBox>
              Anual | Parcelado <br />
              R$ 490,90 | 10x R$ 47,99
            </PlanBox>
          </CheckoutBox>
          <UserBox>
            <section>
              <div>
                <span>E-mail</span>
                fulano@cicrano.com.br
              </div>
              <div>
                <span>CPF</span>
                000.000.000-00
              </div>
            </section>
          </UserBox>
        </InfoBox>
        <ManagePlanBtn>
          Gerenciar assinatura
        </ManagePlanBtn>
        <HomeBtn>
          IR PARA A HOME
        </HomeBtn>
    </Container>
)}

export default Success;