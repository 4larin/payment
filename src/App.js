import React, { useState } from 'react';
import Appbar from './components/Appbar/Appbar';
import PaymentModal from './components/Modal/PaymentModal';
import CreditCard from './components/CreditCard/CreditCard';
import TotalOrder from './components/TotalOrder/TotalOrder';
import styled from 'styled-components'

function App() {

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
    <MyApp >
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
    </MyApp>

  );
}

const MyApp = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`

export default App;
