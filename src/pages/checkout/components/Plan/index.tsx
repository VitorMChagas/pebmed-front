import React from 'react';

import { Container, Title, Discount, Price, Group } from './styles';

interface PlanProps {
  storeId?: string; //anual_parcelado_iugu,
  title?: string; //Premium Anual,
  description?: string; //Parcelado,
  caption?: string; //7 Dias Grátis,
  fullPrice?: number; //600,
  discountAmmount?: number; //60
  discountPercentage?: number; //0.1,
  periodLabel?: string; //mês,
  period?: string; //annually,
  discountCouponCode?: null,
  order?: number; //1,
  priority?: number; //1,
  gateway?: string; //iugu,
  splittable?: boolean; //true,
  installments?: number; //12,
  acceptsCoupon?: boolean; //true
}

function formatToCurrency(amount: number) {
  return "R$" + amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })
}

function discountedPrice(fullPrice: number, discountAmmount: number) {  
  var finalPrice = formatToCurrency(fullPrice - discountAmmount)
  return finalPrice
}

const Plan: React.FC<PlanProps> = ({
  storeId, 
  title, 
  description,
  fullPrice,
  discountAmmount,
  discountPercentage,
  ...rest
}) => 
{
  return <Container {...rest} >
    <Title>{`${title} | ${description} `} </Title>
    <Group>
      <div>
      <Price>De {`${formatToCurrency(fullPrice)} | Por ${discountedPrice(fullPrice, discountAmmount)}`}</Price>
      <Discount>{`-${Math.round((discountPercentage) * 100)}%`}</Discount>
      </div>
      <input type="radio" id="dewey" name="drone" value="dewey" />
    </Group>
    <p>10x de R$47,99/mes</p>
  </Container>
}

export default Plan;