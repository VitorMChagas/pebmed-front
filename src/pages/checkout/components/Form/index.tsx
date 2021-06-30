import React, { useEffect, useRef, useState } from 'react'
import { SubmitHandler, FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { useRouter } from 'next/router'

import { Container, Form, Group, Select, SelectIcon, MainButton } from './styles'
import InputMask from '../../../../components/Input'
import { CheckoutValidation } from '../../../../helpers/validation'
import { SubscriptionPostService } from './../../../../services/subscribe';

interface FormProps {
  data: {
    creditCardNumber: number //5555444433332222,
    creditCardExpirationDate: string //"10/21",
    creditCardCVV: number //"123",
    creditCardHolder: string //"Cássio Scofield",
    creditCardCPF: number //"98765432100",
    couponCode: null
    installments: number //1,
    gateway: string //"iugu",
    offerId: number //18,
    userId: number //1
  }
}

export default function FormData({isChecked, splittedPrice, installments, formatToCurrency, discountPrice }) {
  const formRef = useRef<FormHandles>(null)
  const router = useRouter()

  const [formData, setFormData] = useState([])

  const handleSubmit: SubmitHandler<FormProps> = async (data) => {

    try {
      const schema = CheckoutValidation(data);

      await schema.validate(data, {
        abortEarly: false
      })

      router.push({
        pathname: '/success',
        query: { cpf: formRef.current.getData().creditCardCPF }, 
      }, null)

      formRef.current.setErrors({})

    } catch (err) {

      if (err instanceof Yup.ValidationError) {
        
        const errorMessages = {}
        
        err.inner.forEach(error => {
          errorMessages[error.path] = error.message
        })
        
        formRef.current.setErrors(errorMessages)
        return
      }
    }
  }

  useEffect(() => {
    async function postData() {
      const response = await SubscriptionPostService.list()
      console.log(response)

      setFormData(response.data)
    }

    postData()
  }, [])

  return (
    <Container>
      <div>
        <img src="/cards.png" alt="" />
        <img src="/iugu.png" alt="" />
      </div>
      <Group>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <label>
            Número do cartão
            <InputMask
             name="creditCardNumber"
              mask="9999 9999 9999 9999"
              maskPlaceholder="0000 0000 0000 0000"
            />
          </label>
          <div>
            <label>
              Validade
              <InputMask
                alwaysShowMask
                name="creditCardExpirationDate"
                mask="99/99"
                maskPlaceholder="MM/AA"
              />
            </label>
            <label>
              CVV
              <InputMask
                alwaysShowMask
                name="creditCardCVV"
                mask="999"
                maskPlaceholder="000"
              />
            </label>
          </div>
          <label>
            Nome impresso no cartão
            <InputMask
             name="creditCardHolder"
              alwaysShowMask
              
              mask=""
              placeholder="Seu nome"
            />
          </label>
          <label>
            CPF
            <InputMask
              name="creditCardCPF"
              mask="999.999.999-99"
              maskPlaceholder="000.000.000-00"
            />
          </label>
          <label>
            Cupom
            <InputMask name="couponCode" mask="" placeholder="Insira aqui" />
          </label>
          <label>
            Número de parcelas
            <SelectIcon size={22} />
            <Select>
              <option value="">Selecionar</option>
              <option value="installments">1</option>
              {isChecked && <option value="">{`${installments}x`} de {`${formatToCurrency(splittedPrice(installments, discountPrice))}`}</option>}
            </Select>
          </label>
            <MainButton type="submit">Finalizar pagamento</MainButton>
        </Form>
      </Group>
    </Container>
  )
}

