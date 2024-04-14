import {useState} from 'react'

import {
  CreditCardContainer,
  CreditCardDetailsContainer,
  CreditCardHeadingContainer,
  CreditCardHeading,
  HorizontalLine,
  CardContainer,
  Card,
  CreditCardNumber,
  CreditCardHolderText,
  CreditCardHolderName,
  PaymentContainer,
  FormContainer,
  FormHeading,
  FormInputContainer,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')

  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }

  const onChangeCardName = event => {
    setCardName(event.target.value)
  }

  return (
    <CreditCardContainer>
      <CreditCardDetailsContainer>
        <CreditCardHeadingContainer>
          <CreditCardHeading>CREDIT CARD</CreditCardHeading>
          <HorizontalLine />
        </CreditCardHeadingContainer>
        <CardContainer>
          <Card data-testid="creditCard">
            <CreditCardNumber>{cardNumber}</CreditCardNumber>
            <CreditCardHolderText>CARDHOLDER NAME</CreditCardHolderText>
            <CreditCardHolderName>
              {cardName.toUpperCase()}
            </CreditCardHolderName>
          </Card>
        </CardContainer>
      </CreditCardDetailsContainer>

      <PaymentContainer>
        <FormContainer>
          <FormHeading>Payment Method</FormHeading>
          <FormInputContainer
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={onChangeCardNumber}
          />
          <FormInputContainer
            type="text"
            placeholder="Cardholder Name"
            value={cardName}
            onChange={onChangeCardName}
          />
        </FormContainer>
      </PaymentContainer>
    </CreditCardContainer>
  )
}

export default CreditCard
