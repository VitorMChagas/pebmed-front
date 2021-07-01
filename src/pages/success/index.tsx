import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { SubscriptionGetService } from '../../services/subscribe';

import {
  Container,
  CheckMark,
  InfoBox,
  CheckoutBox,
  Star,
  PlanBox,
  UserBox,
  ManagePlanBtn,
  HomeBtn,
} from '../../components/Success/styles';

interface SubscriptionProps {
  creditCardCPF?: string;
}

const Success: React.FC = () => {
  const router = useRouter();
  const [cpfData, setCpfData] = useState(router.query.cpf);
  console.log(cpfData);

  const [subscription, setSubscription] = useState<SubscriptionProps>();

  useEffect(() => {
    async function requestData() {
      const response = await SubscriptionGetService.list();
      console.log(response);
      setSubscription(response.data);
    }

    requestData();
  }, []);

  return (
    <Container>
      <CheckMark size={70} />
      <h2>Parabéns!</h2>
      <p>
        Sua assinatura foi realizada
        <br />
        com sucesso.
      </p>
      <InfoBox>
        <CheckoutBox>
          <Star size={50} />
          <PlanBox>
            Anual | Parcelado <br />
            R$ 479,90 | 10x R$ 47,99
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
              {subscription?.creditCardCPF}
            </div>
          </section>
        </UserBox>
      </InfoBox>
      <ManagePlanBtn>Gerenciar assinatura</ManagePlanBtn>
      <HomeBtn>IR PARA A HOME</HomeBtn>
    </Container>
  );
};

export default Success;
