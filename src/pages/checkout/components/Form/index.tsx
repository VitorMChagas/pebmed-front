import React, { useRef } from 'react'
import { SubmitHandler, FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { useRouter } from 'next/router'

import Button from '../../../../components/Button'

import { Container, Form, Group, Select, SelectIcon } from './styles'
import InputMask from '../../../../components/Input'

interface FormProps {
  data: {
    couponCode: null
    creditCardCPF: number //"98765432100",
    creditCardCVV: number //"123",
    creditCardExpirationDate: string //"10/21",
    creditCardHolder: string //"Cássio Scofield",
    creditCardNumber: number //5555444433332222,
    gateway: string //"iugu",
    installments: number //1,
    offerId: number //18,
    userId: number //1
  }
}

export default function FormData() {
  const formRef = useRef<FormHandles>(null)
  const router = useRouter()

  const handleSubmit: SubmitHandler<FormProps> = ({ data, ...rest }) => {
    try {
      // const schema = Yup.object().shape({
      //   name: Yup.string().required('O nome é obrigatório'),
      //   email: Yup.string()
      //     .email('Digite um e-mail válido')
      //     .required('O e-mail é obrigatório'),
      //   address: Yup.object().shape({
      //     city: Yup.string()
      //       .min(3, 'No mínimo 3 carateres')
      //       .required('A cidade é obrigatória')
      //   })
      // });

      // schema.validate(data, {
      //   abortEarly: false,
      // })

      router.push('/success')

      formRef.current.setErrors({})
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {}

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message
        })

        formRef.current.setErrors(errorMessages)
      }
    }
  }

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
              name="creditCardHolder"
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
              alwaysShowMask
              name="creditCardName"
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
            <InputMask 
              name="couponCode" 
              mask="" 
              placeholder="Insira aqui" 
            />
          </label>
          <label>
            Número de parcelas
            <SelectIcon size={22}/>
            <Select >
              <option value="">Selecionar</option>
              <option value="installments">1</option>
            </ Select>
          </label>
        </Form>
      </Group>
      <Button text="Finalizar pagamento" onClick={() => handleSubmit}></Button>
    </Container>
  )
}
