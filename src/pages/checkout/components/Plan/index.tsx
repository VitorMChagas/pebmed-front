import React, { useState } from "react";

import { 
  Container, 
  Title, 
  Discount, 
  Price, 
  Group
} from "./styles";

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
  discountCouponCode?: null;
  order?: number; //1,
  priority?: number; //1,
  gateway?: string; //iugu,
  splittable?: boolean; //true,
  installments?: number; //12,
  acceptsCoupon?: boolean; //true
  finalPrice?: number;
}

const Plan: React.FC<PlanProps> = ({
  storeId,
  title,
  description,
  fullPrice,
  discountAmmount,
  discountPercentage,
  installments,
  finalPrice,
  ...rest
}) => {

  const [discountPrice, setDiscountPrice] = useState(
    discountedPrice(fullPrice, discountAmmount)
    )

  function formatToCurrency(amount: number) {
    return "R$" + amount.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  }
  
  function discountedPrice(fullPrice: number, discountAmmount: number) {
    var finalPrice = fullPrice - discountAmmount;
    return finalPrice;
  }
  
  function splittedPrice(installments: number) {
      var finalSplittedPrice = discountPrice / installments;
      return finalSplittedPrice;
  }

  return (
    <Container {...rest}>
      <Title>{`${title} | ${description} `} </Title>
      <Group>
        <div>
          <Price>
            De {
              `${formatToCurrency(fullPrice)} | 
              Por 
              ${formatToCurrency(discountPrice)}`
            }
          </Price>
          <Discount>{`-${Math.round(discountPercentage * 100)}%`}</Discount>
        </div>
        <input type="radio" />
      </Group>
        { 
          installments === 1 ? (
            <p> {''} </p>
          ) : (
            <p>{`${installments}x`} de {`${formatToCurrency(splittedPrice(installments))}`}/mes</p>
          )
        }
    </Container>
  );
};

export default Plan;
