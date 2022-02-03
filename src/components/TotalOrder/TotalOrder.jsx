import React from 'react';
import styled from 'styled-components';
import SectionLayout from '../../layout/Section';
import { currebcyFormatter } from '../../Utils/CurrencyFormatter';
import Button from '../Button/Button';

const TotalOrder = (props) => {
    const { togglePayment, subtotal, paymentLoading } = props
    return <Section>
        <div className="horizontal-rule"></div>
        <div className="subtotal">
            <div className="subtotal__items">
                <div className="subtotal__items__item">
                    <h4>Subtotal</h4> <h4>{currebcyFormatter.format(subtotal.itemsTotal).replace('NGN', "₦")}</h4>
                </div>
                <div className="subtotal__items__item">
                    <h4>Estimated TAX</h4> <h4>{currebcyFormatter.format((subtotal.tax / 100) * subtotal.itemsTotal).replace('NGN', "₦")}</h4>
                </div>
                <div className="subtotal__items__item">
                    <h4>Promotional Code: <span className='promo-code--grey'>Z4KXLM9A</span></h4> <h4>- {currebcyFormatter.format(subtotal.promo).replace('NGN', "₦")}</h4>
                </div>
            </div>
        </div>
        <div className="horizontal-rule"></div>
        <div className="complete-payment">
            <Button onClick={togglePayment} loading={paymentLoading} loaderText="Processing Payment">Complete Payment</Button>
            <h2>TOTAL: {currebcyFormatter.format(subtotal.itemsTotal + ((subtotal.tax / 100) * subtotal.itemsTotal) - subtotal.promo).replace('NGN', "₦")}</h2>
        </div>
    </Section>;
};

const Section = styled(SectionLayout)`
 .complete-payment{
    display: flex;
    justify-content: space-between;
  }

  .subtotal{
    &__items{
      &__item{
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
        .promo-code--grey{
          color: #9da3ac;
        }
      }
    }
  }

`

export default TotalOrder;
