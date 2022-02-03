import React, { useState, useEffect, Fragment } from 'react';
import styled from 'styled-components';
import Appbar from './components/Appbar/Appbar';
import Button from './components/Button/Button';
import { currebcyFormatter } from './Utils/CurrencyFormatter'
import PaymentModal from './components/Modal/PaymentModal';
import CreditCard from './components/CreditCard/CreditCard';
import TotalOrder from './components/TotalOrder/TotalOrder';

function App() {

  // Subtotal data
  let [subtotal] = useState({ itemsTotal: 2497, tax: 4.791349619543452, promo: 60 })
  let [cardLoading, setCardLoading] = useState(true);
  let [paymentLoading, setPaymentLoading] = useState(false);
  let [paymentModal, setPaymentModal] = useState(false)


  const togglePayment = () => {
    setPaymentLoading((prevState) => !prevState)

    const timer = setTimeout(() => {
      setPaymentLoading(false)
      setPaymentModal(true)
    }, 5000);
    return () => clearTimeout(timer);
  }


  return (
    <Fragment >
      <PaymentModal show={paymentModal} closeModal={() => setPaymentModal(false)} />
      <Appbar />
      <CreditCard />
      <TotalOrder
        togglePayment={togglePayment}
        setPaymentModal={setPaymentModal}
        paymentLoading={paymentLoading}
        cardLoading={cardLoading}
        setCardLoading={setCardLoading}
        subtotal={subtotal}

      />
    </Fragment>

  );
}



const Section = styled.section`
  
  

 


 
`

export default App;
