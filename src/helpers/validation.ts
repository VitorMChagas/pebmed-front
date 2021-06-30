import * as Yup from 'yup';

const CheckoutValidation = type =>
  Yup.object().shape({
    creditCardNumber: Yup.string()
      .required('Digite um número de cartão válido')
      .matches(
        /^((4\d{3})|(5[1-5]\d{2})|(6011)|(34\d{1})|(37\d{1}))-?\s?\d{4}-?\s?\d{4}-?\s?\d{4}|3[4,7][\d\s-]{15}$/,
        'Digite um número de cartão válido',
      ),

    creditCardHolder: Yup.string().required('Digite o nome presente no cartão'),

    creditCardCPF: Yup.string()
      .required('Digite um número de cpf válido')
      .matches(
        /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/,
        'Digite um número de cpf válido',
      ),

    creditCardExpirationDate: Yup.string().required('Data inválida.'),

    creditCardCVV: Yup.string()
      .required('Debes colocar el CVC (parte trasera).')
      .matches(/^[0-9]{3}$/, 'Número de segurança inválido.'),

    installments: Yup.number().min(1).max(12),
  });

export default CheckoutValidation;
