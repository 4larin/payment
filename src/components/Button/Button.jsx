import React from 'react';
import styled from 'styled-components';
import PullseLoader from 'react-spinners/PulseLoader'

const Button = (props) => {
    return <StyledButton {...props}>{props.loading ? <>{props.loaderText}<PullseLoader color={'#f8f8f8'} loading={props.loading} size={12} /></> : props.children}

    </StyledButton>;
};

const StyledButton = styled.button`
    outline: none;
    border: none;
    padding: 16px 24px;
    color: #f8f8f8;
    font-size: 18px;
    font-weight: 500;
    border-radius: 4px;
    position: relative;
    background-blend-mode: overlay;
    overflow: hidden;
    background: none;
    transition: all 3s ease;
    cursor: pointer;
    display: flex;
    gap: 10px;
    align-content: center;
    text-align: center;
    justify-content: center;
    align-items: center;
   
    &:hover{
        &::after{
        background-color: #395ED4;

        }
    }
    &:active{
        ::before{
            min-height: 200%;
            min-width: 200%;
        }
    }
    &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #3F67E9;
        background-blend-mode: screen;
        z-index: -2;
        opacity: 1;
        transition: all 0.3s ease;
    }
`

export default Button;
