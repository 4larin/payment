import React from 'react';
import styled from 'styled-components';
import { IoMdCheckmarkCircleOutline, IoMdClose } from 'react-icons/io'


const PaymentModal = (props) => {

    document.addEventListener(
        "click",
        function (event) {
            if (
                event.target.matches(".button-close-modal") ||
                !event.target.closest(".modal")
            ) {
                props.closeModal()
            }
        },
        false
    )

    return <Modal style={{ display: props.show ? 'flex' : 'none' }}>
        <div className='modal'>
            <div className="modal__close" onClick={props.closeModal}>
                <IoMdClose size={24} />
            </div>
            <IoMdCheckmarkCircleOutline color='blue' size={80} />
        </div>
        <h1>Payment Successful</h1>
        <p>Violaa, your payment was successful.</p>
    </Modal>;
};


const Modal = styled.div`
    z-index: 99;
    max-width: 500px;
    color: white;
    border-radius: 4px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position: fixed;
    top: 30%;
    left: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
    padding: 80px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    

    h1{
        margin: 24px 0 12px 0;
    }
    p{
        color: #9da3ac;
        font-size: 14px;
        display: block;
    }

    .modal{
        &__close{
            position: absolute;
            right: 24px;
            top: 24px;
            cursor: pointer;
        }
    }

`

export default PaymentModal;
