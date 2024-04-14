import styled from 'styled-components'

export const CreditCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const CreditCardDetailsContainer = styled.div`
  background-color: #3b4b69;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const CreditCardHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CreditCardHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #ffffff;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-top: 96px;
    margin-bottom: 12px;
    line-height: 1.2;
  }
`

export const HorizontalLine = styled.hr`
  width: 118px;
  border-bottom: 2px solid #ffd773;
  margin: 0;
  @media screen and (min-width: 768px) {
    width: 175px;
  }
`

export const CardContainer = styled.div`
  margin-top: 48px;
  margin-bottom: 48px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    flex-grow: 1;
  }
`

export const Card = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  width: 280px;
  height: 200px;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  box-shadow: 0px 4px 33px #344e7a;
  @media screen and (min-width: 768px) {
    width: 375px;
    height: 295px;
    border-radius: 30px;
    padding: 32px;
  }
  @media screen and (min-width: 992px) {
    width: 475px;
    height: 325px;
    padding: 48px;
  }
`
export const CreditCardNumber = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
  @media screen and (min-width: 992px) {
    font-size: 42px;
  }
`
export const CreditCardHolderText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ffffff;
  margin: 0;
  margin-top: 30px;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-top: 52px;
  }
  @media screen and (min-width: 992px) {
    font-size: 18px;
  }
`
export const CreditCardHolderName = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ffffff;
  font-weight: 500;
  margin: 0;
  margin-top: 7px;
  min-height: 16px;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-top: 12px;
    min-height: 28px;
    line-height: 1.5;
  }
  @media screen and (min-width: 992px) {
    font-size: 24px;
    min-height: 36px;
  }
`
export const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  width: 90%;
  max-width: 350px;
  border-radius: 8px;
  margin-top: 32px;
  padding: 32px 24px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px #d3d9e0;
  @media screen and (min-width: 768px) {
    margin: 0;
    max-width: 450px;
    padding: 48px;
  }
`
export const FormHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: #344e7a;
  font-weight: 600;
  margin: 0;
  margin-bottom: 8px;
  line-height: 1.3;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`
export const FormInputContainer = styled.input`
  font-family: 'Roboto';
  font-size: 16px;
  color: #475569;
  background-color: transparent;
  height: 40px;
  width: 100%;
  border: 1px solid #c3cad9;
  padding: 12px 24px;
  margin-top: 24px;
  border-radius: 2px;
  outline: none;
  @media screen and (min-width: 768px) {
    padding: 16px 24px;
  }
`
